import React from 'react';
import s from './Timeline.module.scss';
import Major from '../Major/Major';
import SubHeading from '../SubHeading/SubHeading';

const data = [{
    primary: '#292f3d',
    secondary: '#feda6a'
}, {
    primary: '#ff3a22',
    secondary: '#fff5d7'
}, {
    primary: '#161748',
    secondary: '#9bc400'
}, {
    primary: '#f2d53c',
    secondary: '#600473'
}]

class Timeline extends React.Component{
    render(){
        return(
            <div className={s.wrap}>
                <SubHeading  name='Time-series of events'/>
                {this.renderCard()}
            </div>
        );
    }

    renderCard = () => {
        const { preparedData, monthData } = this.props;
        return data.map((item, index) => {
            return(
                <Major
                 key={index} 
                 monthData={monthData[index]}
                 month = {preparedData[index].month}
                 cases = {preparedData[index].infected}
                 recovered = {preparedData[index].recovered}
                 deaths = {preparedData[index].died}
                 primary = {item.primary}
                 secondary = {item.secondary}
                />
            )
        })
    }

}
 
export default Timeline;