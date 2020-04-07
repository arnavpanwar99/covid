import React from 'react';
import s from './Minor.module.scss';

class Minor extends React.Component{

    componentDidUpdate(){
        this.hideAndShow();
    }

    state = {
        clickState: -1,
        typing: false,
        display: 'none',
        text: '',
    }

    render() {
        const { display, text } = this.state;
        return (
            <>
                <div ref={input=>this.wrap=input} className={s.wrap}>
                    {/* Do not delete or insert any node before making changes in the  hideAndShow function */}
                    {this.renderDays()}
                </div>
                <span
                 ref={input=>this.span=input}
                 className={s.msg_icn}
                 onClick={this.hideSpan}
                 style={{ display }}>
                    {text}
                </span>
            </>
        );
    }

    renderDays = () => {
        const { monthData, month } = this.props;
        if(monthData[0]>-1){
                return Object.entries(monthData).map((item, index) => {
                let color='#ddd', second='#000';
                if(item[1]>=1 && item[1]<=5){
                    color='#ff7f7f'; 
                    second='#101010';
                }else if(item[1]>=6 && item[1]<=50){
                    color='#ff4c4c';
                    second='#111';
                }else if(item[1]>=51 && item[1]<=150){
                    color='#ff1919';
                    second='#ccc';
                }else if(item[1]>=151 && item[1]<=300){
                    color='#e50000';
                    second='#e0e0e0';
                }else if(item[1]>=301 && item[1]<=500){
                    color='#b20000';
                    second='#ddd';
                }else if(item[1]>=501){
                    color='#7f0000';
                    second='#eee';
                }
                return(
                    <div
                     ref={input=>this[index]=input}
                     key={`${index}_${item[1]}`}
                     onClick={() => this.assignArea(month ,index, item[1])}
                     style={{
                        backgroundColor: color, 
                        color: second,
                     }}
                     className={s.wrap_child}
                    >
                        {index+1}
                    </div>
                )
            })
        }
    }

    hideSpan = () => {
        this.setState({ display: 'none' });
    }

    slowlyWrite = (text) => {
        let id;
        this.span.innerHTML = '';
        clearInterval(id);
        let i=0;
        this.setState({ typing: true });
        id = setInterval(() => {
            this.span.innerHTML = this.span.innerHTML+text[i];
            console.log(text[i]);
            i++;
            if(i+1 === text.length){
                clearInterval(id);
                this.setState({ typing: false });
            }
        }, 30);
    }

    assignArea = (month, index, cases) => {
        let text, first, second, third;
        const col = (index+1)%7===0?7:(index+1)%7;
        switch (col) {
            case 1:
                first=14;
                second=4;
                third=4;
                break;
            case 2:
                first=28;
                second=18;
                third=18;
                break;
            case 3:
                first=42;
                second=32;
                third=32;
                break;
            case 4:
                first=56;
                second=50;
                third=44;
                break;
            case 5:
                first=68;
                second=68;
                third=56;
                break;
            case 6:
                first=82;
                second=82;
                third=70;
                break;
            case 7:
                first=96;
                second=96;
                third=84;
                break;
            default:
                break;
        }
        const offset = index>27?'-10.5rem':`${-10.5+((5-Math.ceil((index+1)/7))*-5)}rem`;
        const subText = `tested positive for COVID-19 on ${index+1} of ${month}.`;
        if(cases === 0){
            text = `No one ${subText}`;
        }else if(cases === 1){
            text = `One person ${subText}`;
        }else{
            text = `${cases} people ${subText}`;
        }
        this.setState(({
            display: 'inline-block',
            text
        }))
        this.span.style.top = offset;
        this.span.style.webkitClipPath = `polygon(0% 0%, 100% 0%, 100% 75%, ${first}% 75%, ${second}% 100%, ${third}% 75%, 0% 75%)`;
        this.span.style.clipPath = `polygon(0% 0%, 100% 0%, 100% 75%, ${first}% 75%, ${second}% 100%, ${third}% 75%, 0% 75%)`;
        
    }

    hideAndShow = () => {
        const { rotated } = this.props;
        const { children } = this.wrap;
        if(!rotated){
            Object.entries(children).forEach((item) => {
                item[1].style.display = 'none';
                item[1].style.opacity = '0';
            })
            this.span.style.display='none';
        }else{
            Object.entries(children).forEach((item) => {
                item[1].style.display = 'flex';
                item[1].style.opacity = '1';
            })
        }
    }

}

export default Minor;