// src/FeedbackForm.js
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const submitFeedback = () => {
    // Logic to submit feedback
  };

  return (
    <div className="feedback-form">
      <h2>Report Incident / Provide Feedback</h2>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Describe the incident or feedback"
      />
      <button onClick={submitFeedback}>Submit</button>
    </div>
  );
}

export default FeedbackForm;
