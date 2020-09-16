import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Team from './Team';
import Newsletter from './Newsletter';
import Price from './Price';
export default class App extends React.Component
{
	render()
	{
		return  (

				<div>	
					<Header />
					<About />
					<Contact />
					<Team />
					<Newsletter />
					<Price />
				</div>	
			)
	}
}