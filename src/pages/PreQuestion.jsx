import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// ...existing code...

const PreQuestion = () => {
  const [language, setLanguage] = useState('English');
  const navigate = useNavigate(); // added useNavigate hook

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    navigate("/upload"); // redirect to /upload when language is chosen
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {/* ...existing code... */}
      <select 
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={language} 
        onChange={handleLanguageChange}
      >
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Kannada">Kannada</option>
      </select>
      {/* ...existing code... */}
    </div>
  );
};

export default PreQuestion;
