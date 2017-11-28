import React, { Component } from 'react';
import InputChar from './components/InputChar';

class App extends Component {
    constructor() {
        super();
        this.state = {
            singleChars : {
                c1201 : "",
                c1202 : "",
                c1203 : "",
                c1204 : "",
                c1205 : "",
                c1206 : "",
                c1207 : "",
                c1208 : "",
                c1209 : "",
                c1210 : "",
                c1211 : "",
                c1212 : "",
                c1213 : "",
                c1214 : "",
                c1215 : "",
                c1216 : "",
                c1217 : "",
                c1218 : "",
                c1219 : "",
                c1220 : "",
                c1221 : "",
                c1222 : "",
                c1223 : "",
                c1224 : ""
                
            },
            text : ""
        };
        this.handleInputChar=this.handleInputChar.bind(this);
    }

    handleInputChar(value, id){

        if (value.length <= 1) {
            fetch(`http://localhost/xmas/ajax.php`,
//            fetch(`https://www.seti-germany.de/xmas/ajax.php`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({...this.state.singleChars,[id]:value})
            })
            .then(response => response.json())
            .then(json => this.setState( {singleChars:{...this.state.singleChars,[id]:value},text:json.text} ) );
            console.log(this.state);
        };
    }


    render() {
        const singleCharsList = this.state.singleChars;
        return (
            <div className="row" style={ {marginTop: '25px'} }>
{/*                <header >
                    <h4>Willkommen zum 10. <img src="https://www.seti-germany.de/sgwiki/images/2/20/Logo_advent.png" alt="SG-Advent-Logo" width="200"/>-<img src="https://www.seti-germany.de/forum/attachment.php?attachmentid=5041&d=1511544775" alt="Logo 10. Adventscrunchen"/></h4>
                </header>  */}
                <form className="col s12" style={ {marginTop: '10px'} }>
                    { Object.keys(singleCharsList).map( key =>
                        <InputChar key={key} id={key} 
                                value={singleCharsList[key]}
                                onInputCharChange={this.handleInputChar} />
                    )}    
                </form>

                <div style={ {background: '#fff',
                              borderRadius: '6px',
                              boxShadow: 'inset 1px 1px 5px rgba(0, 0, 0, 0.5)',
                              padding: '10px'} }>
                    <h6>Lösungswort:</h6>
                    <hr/>
                    <b>{this.state.text}</b>
                </div>
            </div>
        );
    }
}

export default App;
