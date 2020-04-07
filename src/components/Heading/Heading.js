import React from 'react';
import s from './Heading.module.scss';
import Message from './../Message/Message';

class Heading extends React.Component{
    render(){
        return(
            <>
                <div className={s.wrap}>
                    <h1 className={s.wrap_heading}>{this.props.name}</h1>
                    <h3 className={s.wrap_sub}>An open-source project</h3>
                    {!this.props.hide && <Message />}
                </div>
            </>
        )
    }
}

export default Heading;