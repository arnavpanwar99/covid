import React from 'react';
import s from './Time.module.scss';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Time extends React.Component{
    render() {
        const {
            value, 
            onChange, 
            maxDate, 
            minDate, 
        } = this.props;
        return (
            <div className={s.wrap}>
                <div className={s.wrap_head}>Date of Announcement</div>
                <Calender 
                 showNeighboringMonth={false}
                 value={value}
                 onChange={onChange}
                 maxDate={maxDate}
                 minDate={minDate}
                 className={s.wrap_calender}
                 tileClassName={s.wrap_tile}
                />
            </div>
        );
    }
}

export default Time;