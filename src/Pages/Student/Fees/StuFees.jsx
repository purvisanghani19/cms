import React from 'react';
import './fees.css';
import WithLayout from '../../../components/common/comstudent/Stusidebar';


const StuFees = () => {
  return (
  <>
    <div className="fees_container">
		<h1>Pay Your Fees</h1>
		<form className='stufee'>
			<label className='lbl-stufee' for="name">Full Name</label>
			<input type="text" id="name" name="name" placeholder="Enter your full name"/>

			<label className='lbl-stufee' for="email">Email</label>
			<input type="email" id="email" name="email" placeholder="Enter your email"/>

			<label className='lbl-stufee' for="phone">Phone Number</label>
			<input type="number" id="phone" name="phone" placeholder="Enter your phone number"/>

			<label className='lbl-stufee' for="course">Course</label>
			<select id="course" name="course">
				<option value="bscs">BS Computer Science</option>
				<option value="bba">BBA</option>
				<option value="mba">MBA</option>
			</select>

			<label className='lbl-stufee' for="amount">Amount</label>
			<input type="number" id="amount" name="amount" placeholder="Enter the amount you want to pay"/>

			<input  type="submit" value="Pay Now"/>
		</form>
	</div>
  </>
  )
}

export default WithLayout(StuFees);