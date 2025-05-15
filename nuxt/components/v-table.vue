<template>
  <div :class="[tableHideContainer ? 'mb-8' : 'container', 'mt-8 mt-lg-10']">
    <div :class="[!tableHideContainer ? 'row' : '']">
      <div :class="['table-responsive', classes]">
        <table :class="['v-table table', styleClass]">
          <thead v-if="head && table.length">
            <tr>
              <th v-for="(col, colIndex) in table[0]" :key="'head-' + colIndex">
                {{ col }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in tableRows" :key="'row-' + rowIndex">
              <td v-for="(col, colIndex) in row" :key="'cell-' + rowIndex + '-' + colIndex">
                {{ col }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  tagName: 'v-table',
  props: {
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
  },
};
</script>
