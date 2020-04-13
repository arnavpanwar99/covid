import React from 'react';
import s from './Patients.module.scss';
import Heading from '../Heading/Heading';
import { data_json } from "./../../requests/data_json";
import ReactLoading from 'react-loading';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Footer from '../Footer/Footer';
import PatientGrid from '../PatientGrid/PatientGrid';
import moment from 'moment';
import { saveRawData } from './../../actions/index';
import { connect } from 'react-redux';
import Void from './Void/Void';

class Patients extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            data: false,
            info: {
                nationality: false,
                maxAge: 100,
                minAge: 0,
                gender: false, 
                area: [],
                date: moment().subtract(1, 'day').toDate(),
            },
            fileredData: false,
        }
        this.returnFilteredData(this.state.data);
    }


    async componentDidMount(){
        if(!!this.props.rawData){
            const { rawData } = this.props;
            this.setState({ data: rawData }, () => {
                this.returnFilteredData(this.state.data);
            });
        }else{
            const url = 'https://api.covid19india.org/raw_data.json';
            const response = await data_json(url);
            this.setState({ data: response }, () => {
                const { data } = this.state;
                this.props.dispatch(saveRawData(data));
                this.returnFilteredData(data);
        });
        }
    }

    
    render(){
        const { data, fileredData, info } = this.state;
        const { data: propsData } = this.props;
        const condition = (fileredData!==false && fileredData.length===0);
        return(
            <>
                <Heading name="Patient Database" hide />
                {
                    data
                        ?
                    <> 
                        <ButtonGroup 
                         info={propsData.info ? propsData.info : info} 
                        />
                        <PatientGrid 
                        date={propsData.info ? propsData.info.date : info.date}
                        data={fileredData}
                        />
                        {
                            condition
                                &&
                            <Void />
                        }
                    </>
                        :
                    <ReactLoading className={s.test} type={'cylon'} color={'ffffff'} height={'20%'} width={'20%'} />
                }
                <Footer />
            </>
        )
    }


    returnFilteredData = (data) => {
        if(!data){
            return;
        }
        const { nationality, maxAge, minAge, gender, area,  date } = this.props.data.info || this.state.info;
        const gen = gender ? gender[0].toUpperCase() : 'N';
        const nation = nationality==='Indians'?'India':'Other';
        // console.log(area);
        // console.log(this.props.data);
        const fileredData = Object.entries(data.raw_data).filter((item, index) => {
            const age=item[1].agebracket;
            
            const nationalityCheck = (nation === item[1].nationality || !nationality); 
            const maxAgeCheck = (maxAge >= parseInt(age, 10));
            const minAgeCheck = (minAge <= parseInt(age, 10));
            const genderCheck = (gen===item[1].gender || !gender);
            const areaCheck = (area.includes(item[1].statecode) || !area.length);
            const dateCheck = (moment(date).format('DD/MM/YYYY') === item[1].dateannounced);//

            // if(parseInt(item[1].patientnumber, 10) === 5941){
            //     console.log(item[1].statecode, nationalityCheck, maxAgeCheck, minAgeCheck, genderCheck, areaCheck, dateCheck);
            //     return;
            // }

            if(nationalityCheck && maxAgeCheck && minAgeCheck && areaCheck && dateCheck && genderCheck){
                return item;
            }
        })
        // console.log(fileredData);
        this.setState({ fileredData });
    }

}

const matchStateToProps = (state) => {
    return{
        data: state.filterReducer,
        rawData: state.rawDataReducer.response
    }
}

export default connect(matchStateToProps)(Patients);