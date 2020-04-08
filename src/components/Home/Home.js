import React from 'react';
import s from './Home.module.scss';
import Heading from '../Heading/Heading';
import { data_json } from "./../../requests/data_json";
import ReactLoading from 'react-loading';
import Update from '../Update/Update';
import Country from '../Country/Country';
import Timeline from '../Timeline/Timeline';
import Footer from '../Footer/Footer';

let preparedData = [{
    month: 'January',
    count: 31,
}, {
    month: 'February',
    count: 29,
}, {
    month: 'March',
    count: 31,
}, {
    month: 'April',
},];

class Home extends React.Component{
   
    state = {
        data: false,
        preparedData: [{
            month: 'January',
            count: 31,
        }, {
            month: 'February',
            count: 29,
        }, {
            month: 'March',
            count: 31,
        }, {
            month: 'April',
        },],
        monthData: [{
        }, {
        }, {
        }, {
        }]
    }

    async componentDidMount(){
        const url = 'https://api.covid19india.org/data.json';
        const response = await data_json(url);
        this.setState({ data: response });
        this.prepareData(response);
        this.prepareMonthlyData(response);
    }

    render(){
        const { data, preparedData, monthData } = this.state;
        return(
            <>
                <Heading name="Covid-19 Insights" />
                {
                    data
                        ?
                        <>
                            <Country data={data ? data.statewise[0] : {}} />
                            <Timeline monthData={monthData} preparedData={preparedData} />
                            <Update time={data ? data.statewise[0].lastupdatedtime : false} />
                            <Footer />
                        </>
                        :
                    <ReactLoading className={s.test} type={'cylon'} color={'ffffff'} height={'20%'} width={'20%'} />
                }
            </>
        )    
    }

    prepareData = (data) => {
        let i, inf, di, rec;
        data.cases_time_series.forEach((item, index) => {
            if(item.date.includes('31 January')){
                di = preparedData[0].died = parseInt(item.totaldeceased, 10);
                inf = preparedData[0].infected = parseInt(item.totalconfirmed, 10);
                rec = preparedData[0].recovered = parseInt(item.totalrecovered, 10);
            }else if(item.date.includes('29 February')){
                preparedData[1].died = parseInt(item.totaldeceased-di, 10);
                preparedData[1].infected = parseInt(item.totalconfirmed-inf, 10);
                preparedData[1].recovered = parseInt(item.totalrecovered-rec, 10);
                inf=item.totalconfirmed;
                di=item.totaldeceased;
                rec=item.totalrecovered;
            }else if(item.date.includes('31 March')){
                preparedData[2].died = parseInt(item.totaldeceased-di, 10);
                preparedData[2].infected = parseInt(item.totalconfirmed-inf, 10);;
                preparedData[2].recovered = parseInt(item.totalrecovered-rec, 10);
                inf=item.totalconfirmed;
                di=item.totaldeceased;
                rec=item.totalrecovered;
            }
            i=index;
        })
        preparedData.count = parseInt(data.cases_time_series[i].date.split(" ")[0], 10);
        preparedData[3].died = parseInt(data.cases_time_series[i].totaldeceased-di, 10);
        preparedData[3].infected = parseInt(data.cases_time_series[i].totalconfirmed-inf, 10);
        preparedData[3].recovered = parseInt(data.cases_time_series[i].totalrecovered-rec, 10);
        this.setState({preparedData});
    }

    prepareMonthlyData = (data) => {
        let monthData = [{
        }, {
        }, {
        }, {
        }]
        Array.apply(null, Array(31)).forEach((i, index) => {
            monthData[0][index] = 0;
        })
        Array.apply(null, Array(29)).forEach((i, index) => {
            monthData[1][index] = 0;
        })
        Array.apply(null, Array(31)).forEach((i, index) => {
            monthData[2][index] = 0;
        })
        Array.apply(null, Array(30)).forEach((i, index) => {
            monthData[3][index] = 0;
        })
        data.cases_time_series.forEach((item) => {
            if(item.date.split(" ")[1] === 'January'){
                monthData[0][parseInt(item.date.split(" ")[0])-1] = parseInt(item.dailyconfirmed, 10);
            }else if(item.date.split(" ")[1] === 'February'){
                monthData[1][parseInt(item.date.split(" ")[0])-1] = parseInt(item.dailyconfirmed, 10);
            }else if(item.date.split(" ")[1] === 'March'){
                monthData[2][parseInt(item.date.split(" ")[0])-1] = parseInt(item.dailyconfirmed, 10);
            }else if(item.date.split(" ")[1] === 'April'){
                monthData[3][parseInt(item.date.split(" ")[0])-1] = parseInt(item.dailyconfirmed, 10);
            }
        })
        this.setState({ monthData });
    }

}

export default Home;