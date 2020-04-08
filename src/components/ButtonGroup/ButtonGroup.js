import React from 'react';
import s from './ButtonGroup.module.scss';
import { FaFilter, FaSortAmountDown } from "react-icons/fa";

class ButtonGroup extends React.Component{
    render() {
        return (
            <div className={s.wrap}>
                <div className={s.wrap_button}>
                    <div className={s.wrap_button_icon}>
                        <FaFilter />
                    </div>
                    <div className={s.wrap_button_text}>Filter</div>
                </div>
                <div className={s.wrap_void}></div>
                <div className={s.wrap_button}>
                    <div className={s.wrap_button_icon}>
                        <FaSortAmountDown />
                    </div>
                    <div className={s.wrap_button_text}>Sort</div>
                </div>
            </div>
        );
    }
}

export default ButtonGroup;