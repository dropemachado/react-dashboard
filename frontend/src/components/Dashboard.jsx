import React from 'react';

export default function Dashboard({ data }) {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id} className="mb-2">
          {item.label}: {item.value}
        </li>
      ))}
    </ul>
  );
}
