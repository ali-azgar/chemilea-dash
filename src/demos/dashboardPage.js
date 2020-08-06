export const chartjs = {
  bar1: {
    data: {
      labels: ["February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Requests for this month",
          backgroundColor: "#ABE0EA",
          stack: "Expense",
          data: [500, 800, 900, 400, 300, 1100],
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
        yAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
      },
    },
  },
  bar2: {
    data: {
      labels: ["February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Requests for this month",
          backgroundColor: "#A9D5E8",
          stack: "Expense",
          data: [800, 400, 700, 600, 500, 800],
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
        yAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
      },
    },
  },
  line: {
    data: {
      labels: ["February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Registered Users",
          borderColor: "#13A4D1",
          backgroundColor: "#ACEBEB",
          data: [2600, 1700, 2200, 2000, 3100, 2000],
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart - Stacked Area",
      },
      tooltips: {
        intersect: false,
        mode: "nearest",
      },
      hover: {
        mode: "index",
      },
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [{ display: false }],
      },
    },
  },
};
