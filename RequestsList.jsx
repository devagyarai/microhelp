import React from 'react';
import RequestCard from './RequestCard';

export default function RequestsList({ requests }) {
  if (!requests.length) return <p>No requests yet. Be the first!</p>;

  return (
    <div>
      {requests.map((req) => (
        <RequestCard key={req.id} request={req} /> // pass the whole object
      ))}
    </div>
  );
}