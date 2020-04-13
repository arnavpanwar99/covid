import React from 'react'; 
import s from './Group.module.scss';
import CheckBox from '../CheckBox/CheckBox';

class Group extends React.Component{
    render() {
        const { choice, toggle, title, A, B, expanded, C } = this.props;
        return (
            <div className={s.country}>
                <div className={s.country_head}>{title}</div>
                <div className={s.country_options}>
                    <div className={s.country_options_option}>
                        <CheckBox checked={choice===A} onClick={() => toggle(A)} />
                        <div className={s.country_options_option_text}>{A}</div>
                    </div>
                    <div className={s.country_options_option}>
                        <CheckBox checked={choice===B} onClick={() => toggle(B)} />
                        <div className={s.country_options_option_text}>{B}</div>
                    </div>
                    {
                        expanded
                            ?
                        <div className={s.country_options_option}>
                            <CheckBox checked={choice===C} onClick={() => toggle(C)} />
                            <div className={s.country_options_option_text}>{C}</div>
                        </div>
                            :
                        <div className={s.country_options_void}></div>
                        }
                </div>
            </div>
        );
    }
}

export default Group;