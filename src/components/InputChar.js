import React, { Component } from 'react';

function FormatLabel(title) {
    const day = title.substring(3,5);
    const monthText = (value) => {
        switch(value) {
            case "11":
                return "Nov.";
            case "12":
                return "Dez.";
            default:
                return "???";
        }
    };
    const month = monthText(title.substring(1,3));
    return (
      day+". "+month
    );
        
}

const labelStyle = {
    whiteSpace: 'nowrap',
    width: '80%',
    overflowX: 'hidden'
};

class InputChar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        this.props.onInputCharChange(e.target.value, e.target.id);
      }

      render() {
        return (
            <div className="input-field col s3 m2 l1">
                <input className="center-align" 
                       style={this.props.value.length ? {background: "url('https://www.seti-germany.de/AC2017/img/candle_on.png')",
                                                         backgroundPosition: "left bottom",
                                                         backgroundRepeat: "no-repeat",
                                                         backgroundSize: "25px"} : null} 
                       type="text" id={this.props.id} value={this.props.value} onChange={this.handleChange}/>
                <label style={labelStyle} htmlFor={this.props.id}>{FormatLabel(this.props.id)}</label>
            </div>
        );
    }
}

export default InputChar;
