// Test data
import { json_data } from '../investment_visualization/testdata.js';

const data = JSON.parse(json_data);
const ctx = document.getElementById('myChart');
console.log(data.labels);
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: '1Y Growth',
          data: data.data,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });