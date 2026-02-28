// Test data
import { json_data } from '../investment_visualization/testdata.js';

const data = JSON.parse(json_data);
const ctx = document.getElementById('myChart');
console.log(data.labels);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var y_size = 12;
var years = 1;

var future_balance = new Array(y_size);
future_balance[0] = data.initial_investment;
var growth_rate = 0.05;
var monthly_rate = (growth_rate + 1)**(1/12) - 1;
for(let i = 1; i < years * y_size; i++){
    future_balance[i] = future_balance[0] * (1 + monthly_rate)**i;
}
  
    var a = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: '1Y Growth',
          data: future_balance,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            suggestedMin: data.initial_investment * 0.9,
          }
        }
      }
    });

var timeframe = document.getElementById("timeframes");
timeframe.addEventListener("click", set_timeframe, false);

function set_timeframe() {
    console.log(timeframe.value);
    update_graph(timeframe.value)
}

function update_graph(timeframe) {
    future_balance = new Array(timeframe * 12);
    var labels = [];
    for(let i = 0; i < timeframe; i++){
        for(const label of months){
            labels.push(label);
        }
    }
   
    future_balance[0] = data.initial_investment;
    for(let i = 1; i < timeframe*12; i++){
        future_balance[i] = future_balance[0] * ((1 + monthly_rate)**(i));
    }
    var title = timeframe + "Y Growth"
    a.data.datasets = [{
        label: title,
        data: future_balance,
        borderWidth: 1
      }]
    a.data.labels = labels;
    a.update();
}