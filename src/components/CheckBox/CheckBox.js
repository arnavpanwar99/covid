import React from 'react';
import s from './CheckBox.module.scss';

class Checkbox extends React.Component {

  render() {
    const { checked, disabled } = this.props;
    return (
      <div className={s.React__checkbox}>
        <label>
          <input
            type="checkbox"
            className={s.React__checkbox__input}
            checked={checked}
            disabled={disabled}
            onChange={this.props.onClick}
          ></input>
          <span 
            className={s.React__checkbox__span}
          ></span>
        </label>
      </div>
    );
  }
}

export default Checkbox;