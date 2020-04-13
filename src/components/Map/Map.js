import React from 'react';
import s from './Map.module.scss';

class Map extends React.Component{
    render() {
        // console.log(this.props.data);
        return (
            <>
                <div ref={input=>this.wrap=input} className={s.wrap}>
                    {this.renderTable()}
                </div>
            </>
        );
    }

    renderTable = () => {
        const { data, districtData } = this.props;
        return Object.entries(data).map((item, index) => {
            const isFirst = index===0;
            const { wrap_item, test, wrap_item_2 } = s;
            const styles = index%2===0?wrap_item:wrap_item_2;
            const { active, confirmed, recovered, deaths, state } = item[1];
            return(
                <React.Fragment key={index}>
                    <div onClick={(e) => this.onItemClick(e)} className={isFirst?test:styles}>
                        {isFirst?'State':state}
                        <div className={s.wrap_item_sub}>
                            {
                                !isFirst 
                                    &&
                                <>
                                    <div className={s.wrap_item_sub_head}>District</div>
                                    <div className={s.wrap_item_sub_head}>Cases</div>
                                </> 
                            }
                            {!isFirst && this.renderDistrict(state, districtData)}
                        </div>
                    </div>
                    <div className={isFirst?test:styles}>{isFirst?'Confirmed':confirmed}</div>
                    <div className={isFirst?test:styles}>{isFirst?'Active':active}</div>
                    <div className={isFirst?test:styles}>{isFirst?'Recovered':recovered}</div>
                    <div className={isFirst?test:styles}>{isFirst?'Died':deaths}</div>
                </React.Fragment>
            )
        })
    }

    renderDistrict = (area, data) => {
        const location = data.filter((item) => item.state===area);
        // console.log(location);
        if(location.length === 0){
            return;
        }
        const { districtData } = location[0];
        // console.log(districtData);
        return Object.entries(districtData).map((item, index) => {
            const { wrap_item_sub_item, wrap_item_sub_item2 } = s;
            const styles = index%2==0?wrap_item_sub_item:wrap_item_sub_item2;
            const { confirmed, delta, district } = item[1];
            return(
                <React.Fragment key={district}>
                    <div className={styles}>{district}</div>
                    <div className={styles}>{confirmed}<span className={s.small}>[+{delta.confirmed}]</span></div>
                </React.Fragment>
            )
        })
    }

    onItemClick = ({target}) => {
        const child = target.children[0];
        if(child.style.length === 0 || (child && child.style.display === 'none')){
            child.style.display = 'grid';
        }else{
            child.style.display = 'none';
        }
    }
}

export default Map;