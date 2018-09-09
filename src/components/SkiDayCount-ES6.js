import { Component } from 'react'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import {MdTerrain} from 'react-icons/md/'
import  {TiWeatherSnow} from 'react-icons/ti/'
import { FiCalendar}   from 'react-icons/fi/'


export class SkiDayCount extends Component {
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  }
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <FiCalendar />
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
            <TiWeatherSnow />
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
            <MdTerrain />
          <span>days</span>
        </div>
        <div>
          <span>
            {this.calcGoalProgress(
              this.props.total, 
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
}


SkiDayCount.defaultProps = {
  total: 30,
  powder: 11,
  backcountry: 15,
  goal: 73
}




