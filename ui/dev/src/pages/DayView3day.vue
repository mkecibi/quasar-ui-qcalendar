<template>
  <q-calendar
    v-model="selectedDate"
    view="3day"
    locale="en-us"
    style="height: 400px;"
  />
</template>

<script>
export default {
  name: 'DayView',

  data () {
    return {
      selectedDate: '2019-04-01'
    }
  }
}
</script>
