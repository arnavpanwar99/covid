import React from 'react';
import s from './Heading.module.scss';
import { Link } from 'react-router-dom';
import Message from './../Message/Message';

class Heading extends React.Component{

    state = {
        open: false
    }

    render(){
        return(
            <>
                <div className={s.wrap}>
                    <div className={s.wrap_flex}>
                        <div className={s.wrap_flex_head}>
                            <h1 className={s.wrap_flex_head_heading}>{this.props.name}</h1>
                            <h3 className={s.wrap_flex_head_sub}>An open-source project</h3>
                        </div>
                        <div ref={input=>this.master=input} onClick={this.onHamClick} className={s.wrap_flex_list}>
                            <div ref={input=>this.one=input} className={s.wrap_flex_list_item}></div>
                            <div ref={input=>this.two=input} className={s.wrap_flex_list_item}></div>
                            <div ref={input=>this.three=input} className={s.wrap_flex_list_item}></div>
                        </div>
                    </div>
                    {!this.props.hide && <Message />}
                    {
                        <div ref={input=>this.expander=input} className={s.expander}>
                            <div className={s.expander_button} onClick={this.onHamClick}>
                                <div className={s.expander_button_item}></div>
                                <div className={s.expander_button_item2}></div>
                            </div>
                            <div className={s.expander_container}>
                                <div className={s.expander_container_actual}>
                                    <div className={s.expander_container_actual_text}><Link to='/' className={s.none}>Home</Link></div>
                                    <div className={s.expander_container_actual_text}><Link to='/state' className={s.none}>States</Link></div>
                                    <div className={s.expander_container_actual_text}><Link to='patients' className={s.none}>Patients</Link></div>
                                    <div className={s.expander_container_actual_text}><Link to='help' className={s.none}>Help</Link></div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </>
        )
    }

    onHamClick = () => {
        this.setState((prevState) => {
            return {
                open: !prevState.open
            }
        }, () => this.editHam())
    }

    editHam = () => {
        const { open } = this.state;
        const { sendRight, bringBack, showExpander, hideExpander } = s;
        if(open){
            this.one.style.transform='rotate(45deg)';
            this.one.style.margin='-.75rem auto';
            this.master.style.position='fixed';
            this.master.style.left='42%';
            this.master.style.top='2.5%';
            this.master.style.backgroundColor='white';
            this.master.style.borderRadius='50%';
            this.master.style.padding='3rem 1rem';
            this.three.style.transform='rotate(-45deg)';
            this.three.style.margin='-.75rem auto';
            this.two.classList.remove(bringBack);
            this.two.classList.add(sendRight);
            this.expander.classList.remove(hideExpander);
            this.expander.classList.add(showExpander);
        }else{
            this.one.style.transform='rotate(0deg)';
            this.one.style.margin='.25rem auto';
            this.master.style.position='static';
            this.master.style.borderRadius='.25rem';
            this.master.style.padding='1rem';
            this.three.style.transform='rotate(0deg)';
            this.three.style.margin='.25rem auto';
            this.two.classList.remove(sendRight);
            this.two.classList.add(bringBack);
            this.expander.classList.remove(showExpander);
            this.expander.classList.add(hideExpander);
        }
    }

}

export default Heading;