import React from 'react';
import s from './SubHeading.module.scss';

class SubHeading extends React.Component{
    render() {
        return (
            <div className={s.wrap}>
                {this.props.name}
            </div>
        );
    }
}

export default SubHeading;