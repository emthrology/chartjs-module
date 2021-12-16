<template>
  <div>
    <canvas id="lineChart" width="200" height="200"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  data() {
    return {
      lineChartData: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },
    };
  },
  mounted() {
    const ctx = document.getElementById("lineChart");
    /* eslint-disable */
    const lineChart = new Chart(ctx, {
      type: "line",
      data: this.lineChartData,
      options: {},
    });
  },
};
</script>

<style></style>
