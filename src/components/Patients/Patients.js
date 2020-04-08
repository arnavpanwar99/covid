import React from 'react';
import s from './Patients.module.scss';
import Heading from '../Heading/Heading';
// import { data_json } from "./../../requests/data_json";
import ReactLoading from 'react-loading';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Footer from '../Footer/Footer';

class Patients extends React.Component{
    
    state = {
        data: true,
    }

    async componentDidMount(){
        // const url = 'https://api.covid19india.org/raw_data.json';
        // const response = await data_json(url);
        // this.setState({ data: response });
    }
    
    render(){
        const { data } = this.state;
        return(
            <>
                <Heading name="Patient Database" />
                <ButtonGroup />
                {
                    data
                        ?
                    <div></div>
                        :
                    <ReactLoading className={s.test} type={'cylon'} color={'ffffff'} height={'20%'} width={'20%'} />
                }
                <Footer />
            </>
        )
    }   
}

export default Patients;