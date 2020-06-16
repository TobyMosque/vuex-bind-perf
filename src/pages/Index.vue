<template>
  <q-page class="flex">
    <div class="absolute-center">
      <cases-menu />
      <q-markup-table>
        <thead>
          <tr>
            <th>Case</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Case A</td>
            <td>Page - data from itself (unable to share)</td>
          </tr>
          <tr>
            <td>Case B</td>
            <td>Page - data shared though a global component - that approach can't be used with SSR</td>
          </tr>
          <tr>
            <td>Case C</td>
            <td>Page with Component - data shared though a global component - that approach can't be used with SSR</td>
          </tr>
          <tr>
            <td>Case D</td>
            <td>Page with Component - data shared though a vuex module - `@toby-mosque/utils` is used to generate the actions, the mutations and the getters</td>
          </tr>
          <tr>
            <td>Case E</td>
            <td>Page - data shared though a vuex module - `vuex-map-fields` is used to generate the mutations and the getters</td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
