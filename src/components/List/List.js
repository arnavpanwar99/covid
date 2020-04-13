import React from 'react';
import s from './List.module.scss';

const JSONdata={
    "AN":"Andaman and Nicobar Islands",
    "AP":"Andhra Pradesh",
    "AR":"Arunachal Pradesh",
    "AS":"Assam",
    "BR":"Bihar",
    "CG":"Chandigarh",
    "CT":"Chhattisgarh",
    "DN":"Dadra and Nagar Haveli",
    "DD":"Daman and Diu",
    "DL":"Delhi",//
    "GA":"Goa",
    "GJ":"Gujarat",
    "HR":"Haryana",//
    "HP":"Himachal Pradesh",
    "JK":"Jammu and Kashmir",
    "JH":"Jharkhand",
    "KA":"Karnataka",//
    "KL":"Kerala",//
    "LA":"Ladakh",//
    "LD":"Lakshadweep",
    "MP":"Madhya Pradesh",
    "MH":"Maharashtra",
    "MN":"Manipur",
    "ML":"Meghalaya",
    "MZ":"Mizoram",
    "NL":"Nagaland",
    "OR":"Odisha",
    "PY":"Puducherry",
    "PB":"Punjab",
    "RJ":"Rajasthan",//
    "SK":"Sikkim",
    "TN":"Tamil Nadu",
    "TS":"Telangana",
    "TR":"Tripura",
    "UP":"Uttar Pradesh",//
    "UK":"Uttarakhand",
    "WB":"West Bengal"
}

class List extends React.Component{
    

    render() {
        return (
            <div className={s.wrap}>
                <div className={s.wrap_head}>States</div>
                <ul className={s.wrap_list}>
                    {this.renderList()}
                </ul>
            </div> 
        );
    }

    renderList = () => {
        const { onSelectArea, options } = this.props;
        return Object.entries(JSONdata).map((item) => {
            return(
                <li 
                 key={item[0]} 
                 onClick={() => onSelectArea(item[0])}
                 style={{ backgroundColor: options.includes(item[0])?'#f19f0f':'#dddddd' }} 
                 className={s.wrap_list_item}>
                    {item[1]}
                </li> 
            )
        })
    }
}

export default List;