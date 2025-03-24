import React, { useState, useEffect } from 'react';
import axios from 'axios';

const doctorName = "Dr. Smith";

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await axios.get('http://192.168.28.168:5000/get_n_appointments/661abcd123456789abcdef01');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    }
    fetchAppointments();    
  }, []);

  return (
    <div>
      <h1>Hello, {doctorName}!</h1>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={`${appointment._id}-${index}`} onClick={() => window.location.href = '/PatientDetails'}>
            <div><strong>ID:</strong> {appointment._id}</div>
            <div><strong>Date:</strong> {appointment.date}</div>
            <div><strong>Patient ID:</strong> {appointment.patient_id}</div>
            <div>
                <h1>
                    ===================================
                </h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorDashboard;
