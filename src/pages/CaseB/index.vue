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
        <q-tr :props="props">
          <q-td key="avatar" :props="props">
            <q-avatar>
              <img :src="props.row.avatar">
            </q-avatar>
          </q-td>
          <q-td key="firstName" :props="props">
            <q-input type="text" filled v-model="props.row.firstName" />
          </q-td>
          <q-td key="lastName" :props="props">
            <q-input type="text" filled v-model="props.row.lastName" />
          </q-td>
          <q-td key="email" :props="props">
            <q-input type="email" filled v-model="props.row.email" />
          </q-td>
          <q-td key="job" :props="props">
            <q-select filled v-model="props.row.job" :options="$s.jobs.list" option-label="name" option-value="id" map-options emit-value />
          </q-td>
          <q-td key="company" :props="props">
            <q-select filled v-model="props.row.company" :options="$s.companies.list" option-label="name" option-value="id" map-options emit-value />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script src="./index.js">
</script>
