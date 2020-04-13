import React from 'react';
import s from './Void.module.scss';

class Void extends React.Component{
    render() {
        return (
            <div className={s.wrap}>
                <div className={s.wrap_head}>404</div>
                <div className={s.wrap_text}>If you've applied any filters, please consider removing a few.</div>
            </div>
        );
    }
}

export default Void;