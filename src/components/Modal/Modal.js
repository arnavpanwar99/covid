import React from 'react';
import s from './Modal.module.scss';
import Range from '../Range/Range';
import Group from '../Group/Group';
import List from '../List/List';
import Time from '../Time/Time';
import moment from 'moment';
import { connect } from 'react-redux';
import { saveFilter } from './../../actions/index';

class Modal extends React.Component{

    constructor(props){
        super(props);
        const { nationality, maxAge, minAge, gender, area, date } = this.props.info;
        this.state = {
            nationality,
            maxAge,
            minAge,
            gender, 
            area,
            date,
            fetch: false,
            show: false,
            current: false
        }
    }

    componentDidMount(){
        this.setState({ show: this.props.open });
    }

    componentDidUpdate(){
        this.toggleModal();
    }

    render() {
        const {
            nationality, 
            gender, 
            area, 
            date,
            fetch,
            minAge,
            maxAge
        } = this.state;
        return (
            <div ref={input=>this.wrap=input} className={s.wrap}>
                <div className={s.wrap_button}>
                    <div onClick={this.onCancelButtonPress} className={s.wrap_button_cancel}>Reset</div>
                    <div className={s.wrap_button_void}></div>
                    <div onClick={this.onApplyButtonPress} className={s.wrap_button_save}>Apply</div>
                </div>
                <Group 
                 title='Nationality'
                 toggle={this.toggleNationality}
                 choice={nationality}
                 A='Indians'
                 B='Others'
                />
                <Range
                 onValueChange={this.onMaxAgeChange}
                 name='Max. Age'
                 value={maxAge}
                 fetch={fetch}
                />
                <Range 
                 onValueChange={this.onMinAgeChange}
                 name='Min. Age'
                 value={minAge}
                 fetch={fetch}
                />
                <Group 
                 title='Gender'
                 toggle={this.toggleGender}
                 choice={gender}
                 expanded
                 A='Male'
                 B='Female'
                 C='Transgender'
                />
                <List 
                 onSelectArea={this.onSelectArea}
                 options={area}
                />
                <Time 
                 value={date}
                 onChange={this.onDateChange}
                 maxDate={moment().subtract(1, 'day').toDate()}
                 minDate={moment("01-30-2020", "MM-DD-YYYY").toDate()}
                />
            </div>
        );
    }

    toggleNationality = (nationality) => {
        this.setState((prevState) => {
            return{
                nationality: prevState.nationality===nationality?false:nationality
            }
        });
    }

    onMaxAgeChange = (maxAge) => {
        this.setState({maxAge, fetch: false, current: moment().unix()}, () => {
            this.props.hideModal(this.prepareInfo());
            this.props.dispatch(saveFilter(this.state));
            // this.props.changeState(this.state);
            
        });
    }

    onMinAgeChange = (minAge) => {
        this.setState({minAge, fetch: false, current: moment().unix()}, () => {
            this.props.hideModal(this.prepareInfo());
            this.props.dispatch(saveFilter(this.state));
            // this.props.changeState(this.state);
        });
    }

    toggleGender = (gender) => {
        this.setState((prevState) => {
            return{
                gender: prevState.gender===gender?false:gender,
            }
        })
    }

    onSelectArea = (areaCode) => {
        this.setState((prevState) => {
            const { area } = prevState;
            if(area.includes(areaCode)){
                const filteredArea = area.filter((item) => item!==areaCode);
                return {
                    area: filteredArea
                }
            }else{
                return{
                    area: prevState.area.concat(areaCode)
                }
            }
        });
    }

    onDateChange = (date) => {
        this.setState({date});
    }

    onCancelButtonPress = () => {
        this.setState({fetch: false, show: false});
        this.props.hideModal(this.prepareInfo(true));
    } 

    onApplyButtonPress = () => {
        this.setState({fetch: true, show: false});
    }

    prepareInfo = (def=false) => {
        const { nationality, maxAge, minAge, gender, area, date } = this.state;
        if(!def){
            return {
                nationality, maxAge, minAge, gender, area, date
            }
        }else{
            return {
                nationality: false,
                maxAge: 100,
                minAge: 0,
                gender: false, 
                area: [],
                date: moment().subtract(1, 'day').toDate()
            }
        }
    }

    toggleModal = () => {
        const { show } = this.state;
        if(show){
            this.openModal();
        }else{
            this.closeModal();
        }
    }

    closeModal = () => {
        const { showGradually, hideGradually } = s;
        this.wrap.classList.remove(showGradually);
        this.wrap.classList.add(hideGradually);
    }

    openModal = () => {
        const { showGradually, hideGradually } = s;
        this.wrap.classList.remove(hideGradually);
        this.wrap.classList.add(showGradually);
    }

}

const matchStateToProps = (state) => {
    return{
        data: state.filterReducer
    }
}

export default connect(matchStateToProps)(Modal);