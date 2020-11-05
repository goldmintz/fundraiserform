import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [state, setTotals] = useState({
		totalDonations: 0,
		totalDonors: 0,
		donorEntry: '',
		errorMsg: '',
	});

	//destructure state
	const { totalDonations, totalDonors, donorEntry, errorMsg } = state;

	//dynamically update goal banner message
	const goalMessage = () => {
		let totalRemaining = 5000 - totalDonations;

		if (totalRemaining > 0) {
			return `${totalRemaining} still needed to fund`;
		}
		if (totalRemaining === 0) {
			return `We met our $5,000 goal. Thank you!`;
		} else {
			return `We are $${totalRemaining * -1} over our $5,000 goal!`;
		}
	};

	//dynamically update progress bar value
	const progPerc = () => {
		let percToGoal = Math.ceil((totalDonations / 5000) * 100);

		if (percToGoal <= 100) {
			return percToGoal;
		}
		if (percToGoal > 100) {
			return 100;
		}
	};

	// add donor-count id span to format count number as bold
	const totalDonorMsg = () => {
		if (totalDonors === 0) {
			return `Be the first to donate to this project.`;
		}
		if (totalDonors === 1) {
			return `Join the ${totalDonors} donor who has already supported this project.`;
		} else {
			return `Join the ${totalDonors} donors who have already supported this project.`;
		}
	};

	//handle donation input and submit
	const handleDonationChange = (e) => {
		setTotals({
			...state,
			donorEntry: e.target.value,
		});
	};

	const handleDonationSubmit = (e) => {
		e.preventDefault();

		if (donorEntry === '' || donorEntry < 5) {
			setTotals({
				...state,
				donorEntry: '',
				errorMsg: 'Donations must be at least $5.00',
			});
		} else {
			setTotals({
				...state,
				totalDonations: +totalDonations + +donorEntry,
				totalDonors: totalDonors + 1,
				errorMsg: '',
				donorEntry: '',
			});
		}
	};

	//begin render
	return (
		<div className='container'>
			<div className='update-banner'>{goalMessage()} </div>
			<div className='fundraising-container'>
				<div className='prog-bar'>{`${progPerc()}%`}</div>

				<h1>Only five days left to fund this project.</h1>
				<p>{totalDonorMsg()}</p>
				<form onSubmit={handleDonationSubmit}>
					<div>{errorMsg}</div>
					<input
						type='number'
						step='1.0'
						value={donorEntry}
						onChange={handleDonationChange}
					/>
					<input type='submit' />
				</form>
			</div>
		</div>
	);
};

export default App;
