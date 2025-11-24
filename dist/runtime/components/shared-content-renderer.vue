<template>
  <ContentRenderer v-if="!isStorybook" v-bind="$attrs" />
  <component v-else :is="tag || 'div'" :class="computedClass">
    <content-node v-for="(node, index) in bodyNodes" :key="index" :node="node" />
  </component>
</template>

<script>
import { h } from 'vue';
import Tools from '../utils/tools.js';

const ContentNode = {
  name: 'ContentNode',
  props: {
    node: {
      type: [Array, String],
      required: true,
    },
  },
  methods: {
    getNodeTag(node) {
      if (!Array.isArray(node) || node.length === 0) return 'span';

      return node[0] || 'span';
    },
    getNodeAttrs(node) {
      if (!Array.isArray(node) || node.length < 2 || typeof node[1] !== 'object' || Array.isArray(node[1])) {
        return {};
      }

      const attrs = { ...node[1] };

      if (attrs.class) {
        delete attrs.class;
      }

      return attrs;
    },
    getNodeClass(node) {
      if (!Array.isArray(node) || node.length < 2) return '';

      const attrs = node[1];

      if (typeof attrs === 'object' && !Array.isArray(attrs) && attrs.class) {
        return attrs.class;
      }

      const children = this.getNodeChildren(node);

      for (const child of children) {
        if (typeof child === 'string' && child.startsWith('{: ')) {
          const match = child.match(/\{:\s*\.([^}]+)\}/);

          if (match) {
            return match[1].trim();
          }
        }
      }
      return '';
    },
    getNodeChildren(node) {
      if (!Array.isArray(node) || node.length <= 2) return [];
      return node.slice(2);
    },
    isKramdownAttr(child) {
      return typeof child === 'string' && child.startsWith('{: ');
    },
    renderNode(node) {
      if (!Array.isArray(node)) {
        return h('span', node);
      }

      const tag = this.getNodeTag(node);
      const attrs = this.getNodeAttrs(node);
      const classValue = this.getNodeClass(node);
      const children = this.getNodeChildren(node);

      const props = {
        ...attrs,
        ...(classValue ? { class: classValue } : {}),
      };

      const childNodes = children
        .filter((child) => !this.isKramdownAttr(child))
        .map((child) => {
          if (Array.isArray(child)) {
            return this.renderNode(child);
          }
          return child;
        });

      return h(tag, props, childNodes);
    },
  },
  render() {
    return this.renderNode(this.node);
  },
};

export default {
  tagName: 'shared-content-renderer',
  inheritAttrs: false,
  components: {
    ContentNode,
  },
  computed: {
    isStorybook() {
      return Tools.isStorybook();
    },
    value() {
      return this.$attrs.value;
    },
    tag() {
      return this.$attrs.tag || 'div';
    },
    computedClass() {
      return this.$attrs.class;
    },
    bodyNodes() {
      if (!this.value || !this.value.body || !this.value.body.value) {
        return [];
      }
      return this.value.body.value;
    },
  },
};
</script>
