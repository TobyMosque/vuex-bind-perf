<template>
  <q-card class="q-mb-sm full-width">
    <q-card-section class="row q-col-gutter-sm">
      <div v-for="route in routes" :key="route.name" class="col">
        <q-btn color="primary" class="full-width" :to="{ name: route.name }" :disable="$route.name === route.name" :label="route.label"></q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ComponentRoutes',
  data () {
    return {
      routes: [
        { name: 'home', label: 'Home' },
        { name: 'case-a', label: 'case a' },
        { name: 'case-b', label: 'case b' },
        { name: 'case-c', label: 'case c' },
        { name: 'case-d', label: 'case d' },
        { name: 'case-e', label: 'case e' }
      ]
    }
  }
}
</script>
