import { createClass } from 'react'
import '../stylesheets/ui.scss'
import {MdTerrain} from 'react-icons/md/'
import  {TiWeatherSnow} from 'react-icons/ti/'
import { FiCalendar}   from 'react-icons/fi/'

export const SkiDayCount = createClass({
  getDefaultProps(){
    return {
      toal:50,
      powder: 51,
      backcountry:15,
      goal:100
    }
  },
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
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
})