<template>
  <div>
    <canvas id="bar-chart"></canvas>
  </div>
</template>
<script>
import { Bar } from 'vue-chartjs'

export default {
  name:'BarChart',
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>