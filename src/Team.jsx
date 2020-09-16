import React from 'react';
export default class Team extends React.Component
{
	render()
	{
		let a=[1,2,3,4]
		return (
					<div className="team">
						<h1>Meet The Team</h1>
						<p>we are a group of professionals</p>

						<div className="flex">
							{a.map(x=><Item key={x} />)}

						</div>
					</div>
			)
	}
}

let Item=function(){
	return <div className="item">
				<div className="image"> 100X100 </div>
				<h3>Employee</h3>
				<h4>Designer</h4>
				<p>$1200</p>
				<button>Hire Now</button>
			</div>
}