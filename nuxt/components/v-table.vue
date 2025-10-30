<template>
  <div>
    <div :class="[tableHideContainer ? 'mb-8' : 'container', 'mt-8 mt-lg-10']">
      <div :class="[!tableHideContainer ? 'row' : '']">
        <div :class="['table-responsive', classes]">
          <headline level="h2" class="space-bottom-1">{{ headline }}</headline>
          <table v-if="agenda" class="agenda">
            <tr v-for="item in table" :key="item.id">
              <td>
                <span>{{ item.timeFrom }}</span><span v-if="item.timeTo"> - {{ item.timeTo }}</span>
                <br>
                <strong>{{ item.title }}</strong>
                <br>
                <em v-if="item.speaker"
                  :style="item.highlight ? '--color-highlight-underline: var(--color-yellow)' : '--color-highlight-underline: null'"
                  class="highlight-underline">{{ item.speaker }}</em>
                <p>{{ item.description }}</p>
              </td>
            </tr>
          </table>

          <table v-else-if="sticky" class="sticky" :class="['v-table table', styleClass]">
            <div>
              <thead v-if="head && table.length">
                <tr>
                  <th  v-if="head && stickyCol.length" class="stickyColumn col-3 py-3 font-size-1" v-for="(col, colIndex) in stickyCol[0]"
                    :key="'head-' + colIndex" v-html="col">
                  </th>
                  <th v-for="(col, colIndex) in table[0]" :key="'head-' + colIndex" v-html="col" class="py-3 font-size-1">
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, rowIndex) in tableRows" :key="'row-' + rowIndex" class="">
                  <td class="stickyColumn col-3"  v-html="tableRowsSticky[rowIndex]">
                  </td>
                  <td v-for="(col, colIndex) in row" :key="'cell-' + rowIndex + '-' + colIndex"> 
                    <icon v-if="col === 'check'" icon="check-mark" color="var(--color-black)" size="medium"/>
                    <div v-else v-html="col"></div>               
                  </td>
                </tr>
              </tbody>
            </div>
          </table>


          <table v-else :class="['v-table table', styleClass]">
            <thead v-if="head && table.length">
              <tr>
                <th v-for="(col, colIndex) in table[0]" :key="'head-' + colIndex" v-html="col">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rowIndex) in tableRows" :key="'row-' + rowIndex">
                <td v-for="(col, colIndex) in row" :key="'cell-' + rowIndex + '-' + colIndex" v-html="col">
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
    stickyCol: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    tableHideContainer() {
      return this.hideContainer;
    },
    styleClass() {
      return this.style || 'table-striped';
    },
    tableRows() {
      return this.head ? this.table.slice(1) : this.table;
    },
    tableRowsSticky() {
      return this.head ? this.stickyCol.slice(1) : this.stickyCol;
    },

  }
};
</script>
