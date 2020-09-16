import React from 'react';
export default class Price extends React.Component
{
	render()
	{
		let a=["basic","pro","premium"]
		return <div className="price">
				<h1>Our Pricing</h1>
				<div className="flex">
					{a.map(x=><Item key={x} title={x}/>)}
				</div>	
		</div>
	}
}

let Item=function(props){
	return <div className="item">
		<div className="h">{props.title}</div>
		<div className="b">
			unlimited bandwidth
			<br/>
			unlimited bandwidth
			<br/>
			unlimited bandwidth
			<br/>
			unlimited bandwidth
			<br/>
			unlimited bandwidth
			<br/>
			<big>$200</big>
		</div>
		<div className="f"><button>Signup</button></div>
	</div>
}