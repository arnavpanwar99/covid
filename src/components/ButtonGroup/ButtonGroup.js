import React from 'react';
import s from './ButtonGroup.module.scss';
import { FaFilter, FaSortAmountDown } from "react-icons/fa";
import Modal from '../Modal/Modal';
import moment from 'moment';

class ButtonGroup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            info: this.props.info,
            sort: false
        }
    }

    render() {
        const { showModal, sort, info } = this.state;
        return (
            <>
                {showModal && <Modal hideModal={this.hideModal} info={info} open={showModal} changeState={this.changeState} />}
                <div className={s.wrap}>
                    <div className={s.wrap_button} onClick={this.toggleModal} style={{ backgroundColor: this.filterApplied()?'#f19f0f':'#ccc' }}>
                        <div className={s.wrap_button_icon}>
                            <FaFilter />
                        </div>
                        <div className={s.wrap_button_text}>Filter</div>
                    </div>
                    <div className={s.wrap_void}></div>
                    <div className={s.wrap_button} onClick={this.toggleSort} style={{ backgroundColor: sort?'#2ac56c':'#ccc' }}>
                        <div className={s.wrap_button_icon}>
                            <FaSortAmountDown />
                        </div>
                        <div className={s.wrap_button_text}>Sort</div>
                    </div>
                </div>
            </>
        );
    }

    hideModal = (info) => {
        this.setState({ showModal: false, info });
    }

    changeState = (info) => {
        this.setState({ info });
    }

    toggleSort = () => {
        this.setState((prevState) => {
            return {
                sort: !prevState.sort
            }
        });
    }

    toggleModal = () => {
        this.setState((prevState) => {
            return{
                showModal: !prevState.showModal,
            }
        });
    }

    filterApplied = () => {
        const { info } = this.state;
        let bool = false;
        if(info.nationality){
            bool=true;
        }
        if(info.maxAge!==100){
            bool=true;
        }
        if(info.minAge!==0){
            bool=true;
        }
        if(info.gender){
            bool=true;
        }
        if(info.area.length){
            bool=true;
        }
        if(JSON.stringify(info.date).split("-")[1]!==moment().subtract(1, 'day').format('MM')){
            bool=true;
        }
        return bool;
    }
}

export default ButtonGroup;