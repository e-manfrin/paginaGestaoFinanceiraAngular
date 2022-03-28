var ctx = document.getElementById("myChart");

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June'
  ];


  const data = {
    labels: labels,
    datasets: [{
      data: [0, 1000, 50, 20, 200, 300, 450],
      label: 'Progressão financeira',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true
    }
  };

  const myChart = new Chart (ctx,config)