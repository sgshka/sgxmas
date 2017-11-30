import React, { Component } from 'react';
import cookie               from 'react-cookie';

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

        if (value.length <= 1 && [""," ","a","b","c","d","e","f","g","h","i","j","k",
                                  "l","m","n","o","p","q","r","s","t","u","v","w",
                                  "x","y","z","ä","ö","ü","ß",",",".",";","-",":",
                                  "!","?","0","1","2","3","4","5","6","7","8","9"].indexOf(value.toLowerCase()) !==-1) {
//           fetch(`http://localhost/xmas/ajax.php`,
            fetch(`https://www.seti-germany.de/adventscrunchen/ajax.php`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({...this.state.singleChars,[id]:value})
            })
            .then(response => response.json())
            .then(json => this.setCookie({singleChars:{...this.state.singleChars,[id]:value},text:json.text} ) )
            .then(json => this.setState( {singleChars:{...this.state.singleChars,[id]:value},text:json.text} ) )
//            console.log(this.state);
        };
    }

    componentDidMount() {
        var acCookies = cookie.select(new RegExp("sgAC"));
        for (var singleCookie in acCookies) {
            if (typeof(acCookies) !== "undefined") {
                this.setState(cookie.load(singleCookie))
            }
        }
//        console.log("componentDidMount");
    }


    setCookie(cookieContent) {
        /* 
        path - cookie path : Use / as the path if you want your cookie to be accessible on all pages.
        expires - absolute expiration date for the cookie (Date object)
        maxAge - relative max age of the cookie from when the client receives it (seconds)
        domain - domain for the cookie: Use https://*.yourdomain.com if you want to access the cookie in all your subdomains.
        secure - Is only accessible through HTTPS? true or false
        httpOnly - Is only the server can access the cookie? true or false
        */
        
        cookie.save('sgAC', JSON.stringify(cookieContent), { path : '/', maxAge: 30*86400 });
        return cookieContent
    }


    render() {
        const singleCharsList = this.state.singleChars;
        return (
            <div className="row" style={ {marginTop: '25px'} }>
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
