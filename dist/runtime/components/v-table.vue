<template>
  <div>
    <div :class="[tableHideContainer ? 'mb-8' : 'container', 'mt-8 mt-lg-10']">
      <div :class="[!tableHideContainer ? 'row' : '']">
        <div :class="['table-responsive', classes]">
          <headline level="h2" class="space-bottom-1">{{ headline }}</headline>
          <table v-if="agenda" class="agenda">
            <tr v-for="item in table" :key="item.id">
              <td>
                <span>{{ item.timeFrom }}</span
                ><span v-if="item.timeTo"> - {{ item.timeTo }}</span>
                <br />
                <strong>{{ item.title }}</strong>
                <br />
                <em
                  v-if="item.speaker"
                  :style="
                    item.highlight
                      ? '--color-highlight-underline: var(--color-yellow)'
                      : '--color-highlight-underline: null'
                  "
                  class="highlight-underline"
                  >{{ item.speaker }}</em
                >
                <p>{{ item.description }}</p>
              </td>
            </tr>
          </table>

          <table :class="['v-table table', sticky ? 'sticky' : '', styleClass]">
            <thead v-if="head && table.length" ref="head">
              <tr>
                <th v-if="sticky" class="stickyColumn col-3 col-lg-4 py-3 font-size-1" v-html="table[0][0]"></th>
                <th
                  v-for="(col, colIndex) in sticky ? table[0].length - 1 : table[0]"
                  :key="'head-' + colIndex"
                  v-html="sticky ? table[0][colIndex + 1] : col"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rowIndex) in tableRows" :key="'row-' + rowIndex">
                <td v-if="sticky" class="stickyColumn col-3 col-lg-4" v-html="tableRows[rowIndex][0]"></td>
                <td v-for="(col, colIndex) in sticky ? row.length - 1 : row" :key="'cell-' + rowIndex + '-' + colIndex">
                  <icon
                    v-if="sticky ? row[colIndex + 1] === 'check' : col === 'check'"
                    icon="check-mark"
                    color="var(--color-black)"
                    size="medium"
                  />
                  <div v-else v-html="sticky ? table[rowIndex + 1][colIndex + 1] : col"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  tagName: 'v-table',
  props: {
    headline: {
      type: String,
      default: null,
    },
    table: {
      type: Array,
      required: true,
    },
    hideContainer: {
      type: Boolean,
      default: false,
    },
    style: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
    head: {
      type: Boolean,
      default: false,
    },
    agenda: {
      type: Boolean,
      default: false,
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    headBg: {
      type: String,
    },
    headColor: {
      type: String,
    },
  },
  mounted() {
    this.setStyle();
  },
  methods: {
    setStyle() {
      this.$refs.head.style.backgroundColor = this.headBg;
      this.$refs.head.style.color = this.headColor;
    },
  },
  computed: {
    tableHideContainer() {
      return this.hideContainer;
    },
    styleClass() {
      return this.sticky ? 'table-sticky' || this.style : 'table-striped';
    },
    tableRows() {
      return this.head ? this.table.slice(1) : this.table;
    },
  },
};
</script>
