import React from 'react';
import s from './State.module.scss';
import { data_json } from "./../../requests/data_json";
import ReactLoading from 'react-loading';
import Heading from '../Heading/Heading';
import { connect } from 'react-redux';
import Map from '../Map/Map';
import Footer from '../Footer/Footer';

class State extends React.Component{

    state = {
        districtData: false
    }

    async componentDidMount(){
        const url = 'https://api.covid19india.org/v2/state_district_wise.json';
        const response = await data_json(url);
        this.setState({ districtData: response });
        console.log(response.filter((item) => item.state==='Delhi')[0]);
    }

    render(){
        const { districtData } = this.state;
        const { basicData } = this.props;
        return(
            <>
                <Heading name="State and Districts" />
                <div className={s.subTitle}>
                    Click on a specific state name for details of each district of that state.
                </div>
                {
                    (districtData && basicData)
                        ?
                    <>
                        <Map
                         data={basicData.statewise}
                         districtData={districtData}  
                        />
                    </>
                        :
                    <ReactLoading className={s.test} type={'cylon'} color={'ffffff'} height={'20%'} width={'20%'} />    
                }
                <Footer />
            </>
        )
    }
}

const matchStateToProps = (state) => {
    return{
        basicData: state.basicDataReducer.response
    }
}

export default connect(matchStateToProps)(State);