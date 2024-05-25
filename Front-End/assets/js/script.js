const xValues = [300,160,70,150,250,400,700,800,930,640,450,500,550,390,200,400,500,690,900,850,800,500,350,300];
const yValues = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

new Chart("myChart", {
    type: "line",
    data: {
        labels: yValues,
        datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: xValues
    }]
    },
    options: {
        legend: {display: false},
        scales: {
            yAxes: [{ticks: {min: 10, max:1000}}],
        },

    }
});