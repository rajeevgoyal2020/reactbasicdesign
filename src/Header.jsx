
import React from 'react';
export default class Header extends React.Component
{
	render()
	{
		let a=["home","welcome", "about", "team", "services", "clients", "newsletter", "contact", "footer"]
		return <div className="header">
					{a.map(x=><span key={x}>{x}</span>)}
					
				</div>
	}
}