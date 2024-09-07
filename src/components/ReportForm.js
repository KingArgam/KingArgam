// src/ReportForm.js
import React, { useState } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const ReportForm = () => {
  const [report, setReport] = useState({
    location: '',
    description: '',
    safetyLevel: 'safe', // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'reports'), report);
      alert('Report submitted successfully!');
      setReport({ location: '', description: '', safetyLevel: 'safe' }); // Reset form
    } catch (error) {
      console.error('Error adding report: ', error);
      alert('Failed to submit the report.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={report.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={report.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Safety Level:</label>
        <select
          name="safetyLevel"
          value={report.safetyLevel}
          onChange={handleChange}
          required
        >
          <option value="safe">Safe</option>
          <option value="caution">Caution</option>
          <option value="danger">Danger</option>
        </select>
      </div>
      <button type="submit">Submit Report</button>
    </form>
  );
};

export default ReportForm;
