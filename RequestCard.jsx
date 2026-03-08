import React from 'react';

export default function RequestCard({ request }) {
  const initials = request.user.slice(0, 2).toUpperCase();

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
        }}
      >
        {initials}
      </div>
      <div>
        <div style={{ fontWeight: 'bold' }}>{request.user}</div>
        <div>{request.text}</div>
        <div style={{ fontSize: '12px', color: '#666' }}>{request.timestamp}</div>
      </div>
    </div>
  );
}