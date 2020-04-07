import React from 'react';
import s from './Country.module.scss';

class Country extends React.Component{
	render(){
		return (
            <div className={s.wrap}>
                <div className={s.wrap_first}>
                    <div className={s.wrap_head}>Confirmed Patients</div>
                    <div className={s.wrap_delta}>[+{this.props.data.deltaconfirmed || 0}]</div>
                    <div className={s.wrap_num}>{this.props.data.confirmed}</div>
                </div>
                <div className={s.wrap_second}>
                    <div className={s.wrap_head}>Active Patients</div>
                    <div className={s.wrap_delta}>[+{this.props.data.deltaactive || 0}]</div>
                    <div className={s.wrap_num}>{this.props.data.active}</div>
                </div>
                <div className={s.wrap_third}>
                    <div className={s.wrap_head}>Recovered</div>
                    <div className={s.wrap_delta}>[+{this.props.data.deltarecovered || 0}]</div>
                    <div className={s.wrap_num}>{this.props.data.recovered}</div>
                </div>
                <div className={s.wrap_fourth}>
                    <div className={s.wrap_head}>Died</div>
                    <div className={s.wrap_delta}>[+{this.props.data.deltadeaths || 0}]</div>
                    <div className={s.wrap_num}>{this.props.data.deaths}</div>
                </div>
            </div>
        );
   }
}
 
export default Country;
