<template>
  <q-tr :props="props">
    <q-td key="avatar" :props="props">
      <q-avatar>
        <img :src="person.avatar">
      </q-avatar>
    </q-td>
    <q-td key="firstName" :props="props">
      <q-input type="text" filled v-model="person.firstName" />
    </q-td>
    <q-td key="lastName" :props="props">
      <q-input type="text" filled v-model="person.lastName" />
    </q-td>
    <q-td key="email" :props="props">
      <q-input type="email" filled v-model="person.email" />
    </q-td>
    <q-td key="job" :props="props">
      <q-select filled v-model="person.job" :options="$s.jobs.list" option-label="name" option-value="id" map-options emit-value />
    </q-td>
    <q-td key="company" :props="props">
      <q-select filled v-model="person.company" :options="$s.companies.list" option-label="name" option-value="id" map-options emit-value />
    </q-td>
  </q-tr>
</template>

<script src="./index.js">
</script>
