import React from 'react'
import '../stylesheets/ui.scss'

export const SkiDayCount = React.createClass({
	render() {
		return (
			<div className="ski-day-count">
				<div className="total-days">
					<span>6 day</span>
				</div>
				<div className="powder-days">
					<span>3 day</span>
				</div>
				<div className="backcountry-days">
					<span>2 hiking day</span>
				</div>
			</div>
		)
	}
})