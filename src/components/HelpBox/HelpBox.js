import React from 'react';
import s from './HelpBox.module.scss';

const data = [
    {title: 'HELPLINE NUMBERS [state-wise]',
    value: 'https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf'},
    {title: 'Ministry of Health and Family Welfare, Gov. of India',
    value: 'https://www.mohfw.gov.in/'},
    {title: 'WHO : COVID-19 Home Page',
    value: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019'},
    {title: 'CDC',
    value: 'https://www.cdc.gov/coronavirus/2019-ncov/faq.html'},
    {title: 'Crowdsourced list of Resources & Essentials from across India',
    value: 'https://bit.ly/covid19resourcelist'},
    {title: 'COVID-19 Global Tracker',
    value: 'https://coronavirus.thebaselab.com/'}
]

class HelpBox extends React.Component{
    render() {
        return (
            <div className={s.wrap}>
                {this.renderHelp()}
            </div>
        );
    }

    renderHelp = () => {
        return data.map((item, index) => {
            const { title, value } = item;
            return(
                <div key={index} className={s.wrap_box}>
                    <div className={s.wrap_box_title}>{title}</div>
                    <a 
                     href={value} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className={s.wrap_box_value}
                    >
                        {value}
                    </a>
                </div>
            )
        })
    }
}

export default HelpBox;