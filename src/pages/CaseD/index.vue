<template>
  <q-page class="flex q-pa-md">
    <cases-menu />
    <q-table
      title="People"
      :data="people"
      :columns="$s.table.columns"
      :pagination.sync="$s.table.pagination"
      class="full-width"
      row-key="id"
    >
      <template v-slot:body="props">
        <row-with-state :props="props" module="dataA" :pk="props.row.id"></row-with-state>
      </template>
    </q-table>
  </q-page>
</template>

<script src="./index.js">
</script>
