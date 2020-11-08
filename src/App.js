import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [state, setTotals] = useState({
		totalDonations: 0,
		totalDonors: 0,
		donorEntry: '',
		errorMsg: '',
	});

	const { totalDonations, totalDonors, donorEntry, errorMsg } = state;

	//dynamically update goal banner message text
	const goalMessage = () => {
		let totalRemaining = Math.round(5000 - totalDonations);

		if (totalRemaining > 0) {
			return `$${totalRemaining.toLocaleString()} still needed to fund this project`;
		}
		if (totalRemaining === 0) {
			return <p>We met our $5,000 goal. Thank you!</p>;
		} else if (totalRemaining < 0) {
			return (
				<p>
					We are <span>${(totalRemaining * -1).toLocaleString()}</span> over our
					$5,000 goal!
				</p>
			);
		}
	};

	//dynamically update progress bar value
	const progPerc = () => {
		let percToGoal = Math.floor((totalDonations / 5000) * 100);

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
			return <p>Be the first to donate to this project.</p>;
		}
		if (totalDonors === 1) {
			return (
				<p>
					Join the <span className='donor-count'>{totalDonors}</span> donor who
					has already supported this project.
				</p>
			);
		} else {
			return (
				<p>
					Join the <span className='donor-count'>{totalDonors}</span> donors who
					have already supported this project.
				</p>
			);
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

		if (donorEntry === '') {
			setTotals({
				...state,
				donorEntry: '',
				errorMsg: 'Please enter a $5 minimum donation.',
			});
		}
		if (donorEntry < 5) {
			setTotals({
				...state,
				donorEntry: '',
				errorMsg: 'Donations must be at least $5.',
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
		<div>
			<div className='total-banner'>{goalMessage()} </div>
			<div className='main-container'>
				<div className='prog-bar'>
					<div
						className='prog-fill'
						style={
							progPerc() < 100
								? { width: `${progPerc()}%` }
								: { width: `${progPerc()}%`, borderTopRightRadius: '5px' }
						}></div>
				</div>
				<div className='content'>
					<h1>Only five days left to fund this project.</h1>
					<div className='donor-msg'>{totalDonorMsg()}</div>

					<div className='error-container'>
						{errorMsg !== '' && <div id='error-msg'>{errorMsg}</div>}
					</div>

					<form className='donation-form' onSubmit={handleDonationSubmit}>
						{/*<div id='dollar-prefix'>$</div> */}
						<div className='input-wrapper'>
							<input
								id='donation-input'
								type='number'
								step='.01'
								value={donorEntry}
								onChange={handleDonationChange}
							/>
							<input id='donation-submit' type='submit' value='Give Now' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default App;
