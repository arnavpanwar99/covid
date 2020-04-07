import React from 'react';
import s from './Update.module.scss';


class Update extends React.Component{

    render(){
        return (
            <div className={s.wrap}>
                <div className={s.wrap_key}>last updated</div>
                <div className={s.wrap_value}>{this.props.time ? this.props.time : '---'} IST</div>
            </div>
        );
    }
}
 
export default Update;
