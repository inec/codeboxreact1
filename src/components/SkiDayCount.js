import {Component} from 'react'
import '../stylesheets/ui.scss'

const percentToDecimal=(decimal)=>{
	return((decimal * 100 )+'%')
}
/*percentToDecimal(decimal){
    return((decimal * 100 )+'%')
}*/
const calcGoalProgress=(total,goal)=>{
	return percentToDecimal(total/goal)
}
/*calcGoalProgress(total,goal){
	return this.percentToDecimal(total/goal)
}*/

//export const SkiDayCount  extends Component{

export const SkiDayCount =(props)=>(
	//render() {
		//return (
			<div className="ski-day-count">
				<div className="total-days">
					<span>{props.total}</span>
					<span>dayss</span>
				</div>
				<div className="powder-days">
					<span>{props.powder}</span>
					<span>dasy</span>
				</div>
				<div className="backcountry-days">
					<span>{props.backcountry}</span>
					<span>day</span>
				</div>
				<div>
					<span>{calcGoalProgress(
						props.total,props.goal)} </span>
				</div>
			</div>
		)
	//}
//}