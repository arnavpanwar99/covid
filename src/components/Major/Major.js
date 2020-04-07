import React from 'react';
import s from './Major.module.scss';
import Minor from './../Minor/Minor';
import Legend from './../Legend/Legend';

class Major extends React.Component{

    componentDidMount(){
        this.setDefaults();
    }


    state = {
        rotated: false
    }

    render(){
        const { rotated } = this.state;
        const { monthData, month, cases, recovered, deaths } = this.props;
        return (
            <>
                <div ref={input=>this.wrap=input} className={s.wrap} onClick={this.rotateButton}>
                    <div className={s.wrap_box}>
                        <div className={s.wrap_box_month}>
                            {month}
                        </div>
                        <div className={s.wrap_info} ref={input=>this.info=input}>
                            <div className={s.wrap_box_cases}>
                                People infected: <span className={s.wrap_span}>{cases}</span>
                            </div>
                            <div className={s.wrap_box_cases}>
                                People recovered: <span className={s.wrap_span}>{recovered}</span>
                            </div>
                            <div className={s.wrap_box_deaths}>
                                People died: <span className={s.wrap_span}>{deaths}</span>    
                            </div>
                        </div>
                    </div>
                    <div ref={input=>this.arrow=input} className={s.wrap_arrow}></div>
                </div>
                <Minor rotated={rotated} monthData={monthData} month={month} />
                <Legend rotated={rotated} />
            </>
        );
    }

    rotateButton = () => {
        const { rotated } = this.state;
        this.arrow.style.transform = rotated ? 'rotate(-45deg)' : 'rotate(45deg)';
        this.setState((prevState) => {
            return {
                rotated: !prevState.rotated
            }
        }, () => this.hideAndShow());
        window.scrollTo(0, this.wrap.offsetTop);
    }

    hideAndShow = () => {
        const { rotated } = this.state;
        
        if(rotated){
            this.info.style.height = '0';
            this.info.style.opacity = '0';
            this.info.style.display = 'none';
            this.wrap.style.marginBottom='.5rem';
        }else{
            this.info.style.height = '10rem';
            this.wrap.style.marginBottom='0';
            this.info.style.display = 'block';
            this.info.style.opacity = '1';
        }
    }

    setDefaults = () => {
        this.wrap.style.color = this.props.secondary;
        this.wrap.style.backgroundColor = this.props.primary;
        this.arrow.style.borderColor = this.props.secondary;
    }

}
 
export default Major;
