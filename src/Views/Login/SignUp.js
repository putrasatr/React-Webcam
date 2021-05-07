import '../../Assets/Css/login.css'
import EyeSlash from '../../Assets/Icons/eyeslash.png'
import Eye from '../../Assets/Icons/eye.png'

import React, { useState } from 'react'


function Login() {
    const [isEye, setEye] = useState(false)
    const handleEye = () => {
        setEye(!isEye)
    }
    return (
        <div className="form">
            <div id="logo-login">
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
                    <span>Sign Up</span>
                </div>
            </div>
        </div>
    );
}

export default Login;