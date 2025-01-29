import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = () => {
  // Data for Alice's Transactions Chart
  const transactions = ["Transaction 1", "Transaction 2", "Transaction 3"];
  const transactionAmounts = [
    120050 + 20000 * 2, // Transaction 1
    80000 + 30000,      // Transaction 2
    15075 * 2 + 45020,  // Transaction 3
  ];

  const transactionData = {
    labels: transactions,
    datasets: [
      {
        label: "Transaction Amounts (in rupees)",
        data: transactionAmounts,
        backgroundColor: ["#4caf50", "#2196f3", "#ff5722"],
        borderColor: ["#388e3c", "#1976d2", "#d84315"],
        borderWidth: 1,
      },
    ],
  };

  // Data for Alice's Products Chart
  const products = ["Product 1", "Product 5", "Product 2", "Product 6", "Product 3", "Product 4"];
  const productQuantities = [1, 2, 1, 1, 2, 1]; // Quantities corresponding to the products

  const productData = {
    labels: products,
    datasets: [
      {
        label: "Quantities Purchased",
        data: productQuantities,
        backgroundColor: ["#4caf50", "#2196f3", "#ff5722", "#ffc107", "#9c27b0", "#00bcd4"],
        borderColor: ["#388e3c", "#1976d2", "#d84315", "#ffb300", "#7b1fa2", "#008394"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow charts to grow larger
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: true,
          color: "rgba(0, 0, 0, 0.1)", // Subtle grid lines
        },
        ticks: {
          color:"#fff", // Visible y-axis labels
          font: {
            size: 14, // Larger font size
          },
        },
      },
      x: {
        ticks: {
          color: "#fff", // Visible x-axis labels
          font: {
            size: 14, // Larger font size
          },
        },
      },
    },
  };

  return (
    <div>
    <span className="m-20 text-4xl font-bold font-sans">Visualize Your Transactions </span>
    <div className="flex justify-center items-center m-20 gap-20">
      {/* Transaction Amounts Chart */}
      <div style={{ width: "60%", height: "400px", marginBottom: "20px" }}>
        <Bar
          data={transactionData}
          options={{
            ...options,
            plugins: {
              ...options.plugins,
              title: { display: true, text: "Alice Smith's Transactions" },
            },
          }}
        />
      </div>

      {/* Products Purchased Chart */}
      <div style={{ width: "60%", height: "400px" }}>
        <Bar
          data={productData}
          options={{
            ...options,
            plugins: {
              ...options.plugins,
              title: { display: true, text: "Products Purchased by Alice Smith" },
            },
          }}
        />
      </div>
    </div>
    </div>
  );
};

export default Charts;
