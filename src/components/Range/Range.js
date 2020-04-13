import React from 'react';
import s from './Range.module.scss';
  
class Range extends React.Component {
    
    constructor (props) {
      super(props);
      this.state = {
        value: this.props.value,
      }
    }

    componentDidMount(){
        this.adjustSeek(this.state.value);
    }

    componentDidUpdate(){
        const { fetch, onValueChange } = this.props;
        if(fetch){
            onValueChange(this.state.value);
        }
    }
    
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ value });
        this.adjustSeek(value);
    }

    adjustSeek = (value) => {
        const { min, max } = this.range;
        const seekWidth = ((80/(max-min))*value);
        this.slider.style.width = `${seekWidth}vw`;
    }
    
    render () {
        const { name } = this.props;
        const { value } = this.state;
        return (
            <div className={s.wrap}>
                <div className={s.wrap_head}>{name}: {value}</div>
                <div className={s.test}>
                    <div ref={input=>this.slider=input} className={s.wrap_slider}>
                        <div ref={input=>this.thumb=input} className={s.wrap_slider_thumb}></div>
                        <input
                        ref={input=>this.range=input}
                        className={s.wrap_slider_input}
                        name="range"
                        type="range"
                        min="0"
                        max="120"
                        value={this.state.value}
                        step="1"
                        onChange={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Range;