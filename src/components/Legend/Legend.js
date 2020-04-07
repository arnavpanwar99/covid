import React from 'react';
import s from './Legend.module.scss';

class Legend extends React.Component{

    componentDidUpdate(){
        this.hideAndShow();
    }

    render() {
        return (
            < div className={s.wrap} ref={input=>this.info=input}>
                <div className={s.wrap_head}>No. of people infected:</div>
                <div className={s.wrap_child}>
                    <div className={s.wrap_child_text}>1-5: </div>
                    <div className={s.wrap_child_one}></div>
                </div>
                <div className={s.wrap_child}>
                    <div className={s.wrap_child_text}>6-50: </div>
                    <div className={s.wrap_child_two}></div>
                </div>
                <div className={s.wrap_child}>
                    <div className={s.wrap_child_text}>51-150: </div>
                    <div className={s.wrap_child_three}></div>
                </div>
                <div className={s.wrap_child}>
                    <div className={s.wrap_child_text}>151-300: </div>
                    <div className={s.wrap_child_four}></div>
                </div>
                <div className={s.wrap_child}>
                    <div className={s.wrap_child_text}>301-500: </div>
                    <div className={s.wrap_child_five}></div>
                </div>
                <div className={s.wrap_child}>
                    <div className={s.wrap_child_text}>500+: </div>
                    <div className={s.wrap_child_six}></div>
                </div>
            </div>
        );
    }

    hideAndShow = () => {
        const { rotated } = this.props;
        
        if(!rotated){
            this.info.style.height = '0';
            this.info.style.opacity = '0';
            this.info.style.marginBottom = '0';
        }else{
            this.info.style.height = '13rem';
            this.info.style.marginBottom = '3rem';
            this.info.style.opacity = '1';
        }
    }

}

export default Legend;