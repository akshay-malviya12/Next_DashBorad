'use client';

import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

// Chart data
const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Votes',
      data: [12, 19, 3],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const PieChart: React.FC = () => {
  return (
    <div style={{ height: '250px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
