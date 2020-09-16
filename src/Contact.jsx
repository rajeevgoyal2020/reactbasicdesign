import React from 'react';
export default class Contact extends React.Component
{
	render()
	{
		return <div className="contact">
					<h1>contact Us</h1>
					<p>our exprts will reach to you soon</p>

					<input placeholder="Name"/>
					<input placeholder="Email"/>
					<input placeholder="Phone"/>
					<input placeholder="Message"/>
					<button>Send Message</button>
		</div>
	}
}