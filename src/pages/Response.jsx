import React from 'react';
import './ResponsePage.css'; // Import your CSS file

const ResponsePage = ({setResponse}) => {
  return (
    <div className="response-container">
      <div className="response-header">
        <h1>Thank You!</h1>
        <p>Your response has been recorded.</p>
      </div>
      <h3 onClick={()=>setResponse(false)}>Survey Again</h3>
    </div>
  );
};

export default ResponsePage;
