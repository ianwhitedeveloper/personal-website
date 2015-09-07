import React from 'react';

export default class EducationSection {
	render() {
		return (
			<section>
				<div style={{textAlign: 'center'}}>
					<h1>Education</h1>
				</div>
				<div className='col-sm-6'>
					<div className='tile mks'>
						<h1>MakerSquare</h1>
						<p>MakerSquare is a highly selective 3 month bootcamp style course teaching full-stack web development 60+ hours a week. I completed 200+ hours of pre-work prior to the course and after completion I left with a solid foundation in the basics of HTML5, CSS3, Ruby on Rails and Javascript.  <span style={{fontWeight: 'bold'}}>- April 2014</span></p>
					</div>
				</div>

				<div className='col-sm-6'>
					<div className='tile ut'>
						<h1>UT Austin</h1>
						<p>I completed a degree in Psychology while working full-time at Glazer’s Distributors.<span style={{fontWeight: 'bold'}}>- December 2009</span></p>
					</div>
				</div>
			</section>
		);
	}
}