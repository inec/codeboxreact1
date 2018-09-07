//import {Component} from 'react'
import '../stylesheets/ui.scss'
import {MdTerrain} from 'react-icons/md/'
import  {TiWeatherSnow} from 'react-icons/ti/'
import { FiCalendar}   from 'react-icons/fi/'

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

export const SkiDayCount =({total,powder,backcountry,goal})=>(
	//render() {
		//return (
			<div className="ski-day-count">
				<div className="total-days">
					<span>{total}</span>
				<FiCalendar />
					<span>dayss</span>
				</div>
				<div className="powder-days">
					<span>{powder}</span>
					<TiWeatherSnow />
					<span>dasy</span>
				</div>
				<div className="backcountry-days">
					<span>{backcountry}</span>
					<MdTerrain />
					<span>sday</span>
				</div>
				<div>
					<span>{calcGoalProgress(
						total,goal)} </span>
				</div>
			</div>
		)
	//}
//}