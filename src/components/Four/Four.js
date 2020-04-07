import React from 'react';
import s from './Four.module.scss';
import Heading from '../Heading/Heading';
import { Link } from 'react-router-dom';

class Four extends React.Component{
    render(){
        return(
            <>
                <Heading name="404!!!" />
                <div className={s.home}>&#8592; <Link to='/' className={s.none}>Back to home</Link></div>
            </>
        )
    }
}

export default Four;
