import React from 'react';
import s from './PatientGrid.module.scss';
import moment from 'moment';
import Bio from '../Bio/Bio';
 
class PatientGrid extends React.Component{

    state={
        showBio: false,
        details: false
    }

    render() {
        const { showBio, details } = this.state;
        return (
            <>
                <div className={s.title}>
                    {moment(this.props.date).format('DD/MMMM')}
                </div>
                <div className={s.subTitle}>
                    Only the patients who are officially confirmed and whose complete information is available are shown here.
                </div>
                <div className={s.subTitle}>
                    Tap on individuals for more details.
                </div>
                {showBio && <Bio details={details} hide={this.hidePaient} />}
                <div className={s.wrap}>
                    {this.renderBox()}
                </div>
            </>
        );
    }

    renderBox = () => {
        const { data } = this.props;
        return Object.entries(data).map((item) => {
            const { patientnumber } = item[1][1];
            const details = this.prepareDetails(item[1][1]);
            return(
                <div onClick={() => this.onPatientClick(details)} key={patientnumber} className={s.wrap_item}>#{patientnumber}</div>
            )
        })
    }

    onPatientClick = (details) => {
        this.setState({ details, showBio: true })
    }

    prepareDetails = (item) => {
        const {
            patientnumber,
            dateannounced,
            nationality,
            gender,
            detectedstate,
            detecteddistrict,
            detectedcity,
            agebracket,
            currentstatus,
            notes,
            source1,
            source2,
            source3
        } = item;
        return{
            number: patientnumber || '--',
            date: dateannounced || '--/--/----',
            nation: nationality || '--',
            gender: gender || '--',
            state: detectedstate || '--',
            city: detectedcity || detecteddistrict || '--',
            status: currentstatus || '--',
            age: agebracket || '--',
            note: notes || '--',
            source: source1 || source2 || source3 || '--'
        }
    }

    hidePaient = () => {
        this.setState({ showBio: false })
    }
}

export default PatientGrid;