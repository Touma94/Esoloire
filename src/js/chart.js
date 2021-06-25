Vue.component('my-bar-chart', {
    extends: VueChartJs.Bar,
    // props: ['barData', 'chartOptions'],
    data: () => ({
        chartdata: {
            labels: ['Macron', 'Le Pen', 'Mbappe', 'Mister V', 'Wejdene', 'De Gaulle'],
            datasets: [
                {
                    label: 'Pourcentage de voix',
                    data: [60, 40, 20, 100, 16, 90],
                    backgroundColor: ["rgba(255,99,132,1)",
                        "rgba(54,162,235,1)",
                        "rgba(255,206,86,1)",
                        "rgba(75,192,192,1)",
                        "rgba(153,102,255,1)",
                        "rgba(255,159,64,1)",
                    ],
                    borderWidth: 1,
                    borderColor: "#777",
                    hoverBorderWidth: 3,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Présidentielle 2022',
                fontSize: 25,
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    categoryPercentage: 0.5,
                    scaleLabel: {
                        display: true,
                        labelString: 'Candidat'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Pourcentage'
                    },
                    ticks: {
                        beginAtZero: true,
                        steps: 10,
                        stepValue: 5,
                        max: 100
                    },
                }]
            }
        },
    }),

    mounted() {
        this.renderChart(this.chartdata, this.options)
    }
    /*watch: {
      barData () {
        console.log('bar data changed')
        this.renderChart(this.barData, this.chartOptions);
    },
      chartOptions () {
        this.renderChart(this.barData, this.chartOptions);
     }
    }*/
}, {
    responsive: true,
    maintainAspectRatio: false
})



// new Vue({
//     el: "#chart",
//     data() {
//         return {
//             ChartConfig: {
//                 labels: [],
//                 datasets: [
//                     {
//                         data: [],
//                         backgroundColor: '#3498db',
//                         borderColor: 'rgba(136,136,136,0.5)',
//                         label: "2013"
//                     }
//                 ]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 title: {
//                     display: true,
//                     text: 'Chart.js Bar Chart'
//                 },
//                 tooltips: {
//                     mode: 'index',
//                     intersect: false,
//                 },
//                 hover: {
//                     mode: 'nearest',
//                     intersect: true
//                 },
//                 scales: {
//                     xAxes: [{
//                         display: true,
//                         categoryPercentage: 0.5,
//                         scaleLabel: {
//                             display: true,
//                             labelString: 'Month'
//                         }
//                     }],
//                     yAxes: [{
//                         display: true,
//                         scaleLabel: {
//                             display: true,
//                             labelString: 'Value'
//                         }
//                     }]
//                 }
//             },
//             iceCream: [],
//             drawer: false
//         }
//     },
//     mounted: function () {
//         this.getListData();
//     },
//     methods: {
//         getListData: async function () {

//             this.status = "getting data...";
//             // var that = this;

//             await axios.get("https://my-json-server.typicode.com/isogunro/jsondb/IceCream").then((response) => {
//                 console.log(response.data)
//                 this.getChartData(response.data);
//             })
//                 .catch(function (error) {
//                     console.log(error);
//                 });
//         },
//         getChartData: function (chartData) {
//             //console.log(chartData);
//             for (var i = 0; i < chartData.length; i++) {
//                 this.ChartConfig.labels.push(chartData[i].Flavor)
//                 //this.$set(this.ChartConfig.labels,i,chartData[i].Flavor)
//             }

//             for (var i = 0; i < chartData.length; i++) {
//                 this.ChartConfig.datasets[0].data.push(chartData[i].Vote)
//                 //this.$set(this.ChartConfig.labels,i,chartData[i].Vote)
//             }
//             console.log(this.ChartConfig);
//         }
//     }
// });

