import React from 'react';
// import s from './Helplines.module.scss';
import Heading from '../Heading/Heading';
import HelpBox from '../HelpBox/HelpBox';
import Footer from '../Footer/Footer';

class Helplines extends React.Component{
    render(){
        return(
            <>
                <Heading name="Help" />
                <HelpBox />
                <Footer />
            </>
        )
    }
}

export default Helplines;