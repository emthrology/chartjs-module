<template>
  <div>
    <canvas ref="lineChart" width="200" height="200"></canvas>
  </div>
</template>

<script>
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
    // const ctx = document.getElementById("lineChart"); //vue '$refs'활용하여 대체 가능
    const ctx = this.$refs.lineChart.getContext('2d');
    /* eslint-disable */
    const lineChart = new this.$_chart(ctx, {
      type: "line",
      data: this.lineChartData,
      options: {},
    });
  },
};
</script>

<style></style>
