import React, { Component } from 'react';
import s from './Message.module.scss';

const data=[
    'COVID-19 virus can be transmitted in areas with hot and humid climates.🌡',
    'Cold weather and snow CANNOT kill the new coronavirus.',
    'Taking a hot bath does not prevent the new coronavirus disease.',
    'The new coronavirus CANNOT be transmitted through mosquito bites.❌',
    'UV lamps should not be used to sterilize hands or other areas of skin as UV radiation can cause skin irritation.',
    'Vaccines against pneumonia, such as pneumococcal vaccine and Haemophilus influenza type B (Hib) vaccine, do not provide protection against the new coronavirus.',
    'Garlic is a healthy food that may have some antimicrobial properties. However, there is no evidence from the current outbreak that eating garlic has protected people from the new coronavirus.🧄',
    'Avoid touching eyes, nose and mouth.😷',
    'Make sure you, and the people around you, follow good respiratory hygiene.',
    'If you have fever, cough and difficulty breathing, seek medical care early.',
    'Wash your hands frequently.'
]

export default class Message extends Component{

    state = {
        message: data[0],
    }

    componentDidMount(){
        // this.toggleMessage();
    }

    render(){
        const { message } = this.state;
        return(
            <>
                <div className={s.card}>
                    <div className={s.card_saying}>
                        {message}
                    </div>    
                </div>                
            </>
        )
    }

    toggleMessage = (i=0) => {
        if(i===data.length){
            return this.toggleMessage(0);
        }
        const time = this.timer(data[i].length);
        this.setState({ message: data[i] });
        setTimeout(() => {
            i++;
            this.toggleMessage(i);
        }, time);
    }

    timer = (text) => {
        if(text>100 && text<=150){
            return 4000;
        }else if(text>150){
            return 5000;
        }else{
            return 3000;
        }
    }
}