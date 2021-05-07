import '../../Assets/Css/login.css'
import 'font-awesome/css/font-awesome.min.css';
import EyeSlash from '../../Assets/Icons/eyeslash.png'
import Eye from '../../Assets/Icons/eye.png'
import Cross from '../../Assets/Icons/times-solid.svg'

import React, { useState } from 'react'


function Login() {
    const [isEye, setEye] = useState(false)
    const [isDisplay, setDisplay] = useState(true)
    const handleEye = () => {
        setEye(!isEye)
    }
    const handleDisplay = () => {
        setDisplay(!isDisplay)
    }
    return (
        <div className={isDisplay ? "form" : "d-none"} id="form">
            <div id="logo-login">
                <img className="img-eye" src={Cross} alt="" onClick={handleDisplay}/>
                <cite>
                    <span>Batch-i-Gur</span>
                </cite>
            </div>
            <div className="form-col">
                <div className="form-email">
                    <input className="form-control" placeholder="Email" />
                </div>
                <div className="form-pass">
                    <input className="form-control-pass" placeholder="Password" type={isEye ? "" : "password"} />
                    <div className="eye">
                        <img className="img-eye" src={isEye ? Eye : EyeSlash} alt="" onClick={handleEye} />
                    </div>
                </div>
            </div>

            <div className="btn-submit" id="">
                <div id="btn-sign-in">
                    <span>Sign In</span>
                </div>
            </div>
        </div>
    );
}

export default Login;