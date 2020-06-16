<template>
  <q-page class="flex q-pa-md">
    <cases-menu />
    <q-table
      title="People"
      :data="$s.people.list"
      :columns="$s.table.columns"
      :pagination.sync="$s.table.pagination"
      class="full-width"
      row-key="id"
    >
      <template v-slot:body="props">
        <row-with-data :props="props" :id="props.row.id"></row-with-data>
      </template>
    </q-table>
  </q-page>
</template>

<script src="./index.js">
</script>
