import React, { useState } from 'react'
import './ViewStatement.css'
import Calendar from 'react-calendar/dist/entry.nostyle'
import moment from 'moment'

function ViewStatement() {
  const [date, setDate] = useState(new Date())

  const onDayPress = (day) => {
    const d = moment(day).format('DD-MM-YYYY')
  }

  return (
    <div className="calander-button-section">
      <div className="mb-1">
        <Calendar

          onChange={(e) => {
            setDate(e)
            onDayPress(e)
          }}
          value={date}
          formatShortWeekday={(locale,value) => ['SU','MO', 'TU', 'WE', 'TH', 'FR', 'SA'][value.getDay()]}
          className={['style-calender']}
          showNeighboringMonth
          tileClassName="style-calender" />

      </div>

      
 

      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <p
              className="text-secondary"
              style={{
                fontSize: 11, width: 157, height: 34, opacity: 0.5, marginLeft: -10, fontFamily: 'Montserrat',
              }}>
              Select two different date to show statement period
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <button type="button" className="btn-md btn-block btn-neo-show" style={{ width: 133, height: 40 }}>Show</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <button type="button" className="btn btn-block button-style" style={{ width: 320, height: 52, borderBottomWidth: 0 }}>Current Month</button>
          </div>
        </div>
      </div>

      <div className="row m-auto" >
      
        <div className="col-6">
          <div className="form-group">
            <button type="button" className="btn btn-block button-style" style={{ width: 145, height: 111, borderBottomWidth: 0 }}>Current and previous month</button>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <button
              type="button"
              className="btn btn-block button-style"
              style={{
                width: 145, height: 111, marginLeft: -10, borderBottomWidth: 0,
              }}>
              Current and previous three month

            </button>
          </div>
        </div>
      </div>
      

      {/* <div>
        View Statement
    </div> */}
    </div>
  )
}

export default ViewStatement
