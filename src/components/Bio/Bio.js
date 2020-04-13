import React from 'react';
import s from './Bio.module.scss';

class Bio extends React.Component{
    render() {
        const {
            number='--', 
            date='--/--/----', 
            nation='--', 
            gender='-', 
            state='--', 
            city='--', 
            status='--', 
            age='--', 
            note='--', 
            source='--' 
        } = this.props.details;
        return (
            <div className={s.wrap}>
                <div className={s.wrap_patient}>
                    <div className={s.wrap_patient_number}>Patient No. {number}</div>
                    <div onClick={this.props.hide} className={s.wrap_patient_close}>X</div>
                </div>
                <div className={s.wrap_date}>
                    {this.renderChild('Date of Announcement:', date)}
                </div>
                <div className={s.wrap_nation}>
                    {this.renderChild('Nationality:', nation)}
                </div>
                <div className={s.wrap_gender}>
                    {this.renderChild('Gender:', gender)}
                </div>
                <div className={s.wrap_state}>
                    {this.renderChild('State detected:', state)}
                </div>
                <div className={s.wrap_city}>
                    {this.renderChild('City detected:', city)}
                </div>
                <div className={s.wrap_status}>
                    {this.renderChild('Current Status:', status)}
                </div>
                <div className={s.wrap_update}>
                    {this.renderChild('Age:', age)}
                </div>
                <div className={s.wrap_notes}>
                    {this.renderChild('Notes:', note)}
                </div>
                <div className={s.wrap_source}>
                    {this.renderChild('Source:', source)}
                </div>
            </div>
        );
    }

    renderChild = (key, value) => {
        return(
            <div>
                <div className={s.wrap_date_key}>{key}</div>
                <div className={s.wrap_date_value}>{value}</div>
            </div>
        )
    }
}

export default Bio;