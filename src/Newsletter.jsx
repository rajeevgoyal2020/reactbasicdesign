import React from 'react';
export default class Newsletter extends React.Component
{
	render()
	{
		return <div className="newsletter">
			<h1>newsletter</h1>
			<p>by suscribing to our newsletter get the lastest from blog</p>
			<input placeholder="Your Email Address" />
			<button>Subscribe</button>
		</div>
	}
}