<template>
  <q-calendar
    v-model="selectedDate"
    view="day"
    locale="en-us"
    :hide-header="true"
    style="height: 400px;"
  />
</template>

<script>
export default {
  data () {
    return {
      selectedDate: '2019-04-01'
    }
  }
}
</script>
