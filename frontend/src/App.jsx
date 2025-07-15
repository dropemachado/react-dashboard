import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import { fetchData } from './api';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Dashboard data={data} />
    </div>
  );
}
