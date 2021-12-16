<template>
  <div>
    <h2>chart.js</h2>
    <h3>bar-chart</h3>
    <bar-chart/>
    <h3>line-chart</h3>
    <line-chart/>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'
export default {
  components: {
    BarChart,
    LineChart,
  }
};
</script>

<style>
</style>
