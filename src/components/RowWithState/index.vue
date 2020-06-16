<template>
  <q-tr :props="props">
    <q-td key="avatar" :props="props">
      <q-avatar>
        <img :src="avatar">
      </q-avatar>
    </q-td>
    <q-td key="firstName" :props="props">
      <q-input type="text" filled v-model="firstName" />
    </q-td>
    <q-td key="lastName" :props="props">
      <q-input type="text" filled v-model="lastName" />
    </q-td>
    <q-td key="email" :props="props">
      <q-input type="email" filled v-model="email" />
    </q-td>
    <q-td key="job" :props="props">
      <q-select filled v-model="job" :options="jobs" option-label="name" option-value="id" map-options emit-value />
    </q-td>
    <q-td key="company" :props="props">
      <q-select filled v-model="company" :options="companies" option-label="name" option-value="id" map-options emit-value />
    </q-td>
  </q-tr>
</template>

<script src="./index.js">
</script>
