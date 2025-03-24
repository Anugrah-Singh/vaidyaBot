import React, { useEffect, useState } from "react";
import axios from "axios";

function PatientDetails() {
	const [patientData, setPatientData] = useState(null);
  
	async function getPatientData() {
		try {
			const response = await axios.get("http://192.168.28.168:5000/get_patient_details/65f8a123456789abcd123456"); // update URL accordingly
			console.log("Patient data:", response.data);
			setPatientData(response.data);
		} catch (error) {
			console.error("Error fetching patient data:", error);
		}
	}
  
	useEffect(() => {
		getPatientData();
	}, []);
  
	return (
		<div>
			{patientData ? (
				<div>
					<h1>{patientData.full_name}</h1>
					<p><strong>ID:</strong> {patientData._id}</p>
					<p><strong>Address:</strong> {patientData.address}</p>
					<p><strong>Blood Type:</strong> {patientData.blood_type}</p>
					<p><strong>Contact Number:</strong> {patientData.contact_number}</p>
					<p><strong>Date of Birth:</strong> {new Date(patientData.dob).toLocaleDateString()}</p>
					<p><strong>Email:</strong> {patientData.email}</p>
					<p><strong>Gender:</strong> {patientData.gender}</p>
					<p><strong>Marital Status:</strong> {patientData.marital_status}</p>
					<p><strong>National ID:</strong> {patientData.national_id}</p>
					<div>
						<h2>Emergency Contact</h2>
						<p><strong>Name:</strong> {patientData.emergency_contact?.name}</p>
						<p><strong>Phone:</strong> {patientData.emergency_contact?.phone}</p>
						<p><strong>Relation:</strong> {patientData.emergency_contact?.relation}</p>
					</div>
					<div>
						<h2>Parents</h2>
						<p><strong>Father's Name:</strong> {patientData.parents?.father_name}</p>
						<p><strong>Mother's Name:</strong> {patientData.parents?.mother_name}</p>
					</div>
					<p><strong>Place of Birth:</strong> {patientData.place_of_birth}</p>
					<p><strong>Summary:</strong> {patientData.summary}</p>
					<p><strong>Created At:</strong> {new Date(patientData.createdAt).toLocaleString()}</p>
					<p><strong>Updated At:</strong> {new Date(patientData.updatedAt).toLocaleString()}</p>
				</div>
			) : (
				<p>Loading...</p>
			)}
			{/* Add your chatbot implementation here */}
		</div>
	);
}

export default PatientDetails;
