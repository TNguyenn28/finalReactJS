import React from "react";
import {Link} from 'react-router-dom';
import Input from "./Input";

function Form(props) { 
    return(
        <div class="modal is-open">
        <div class="modal-container">
            <div class="modal-left">
                <h1 class="modal-title">{props.modalTitle}</h1>
                <form>
                    <div class="input-block">
                        <Input for={"Email"} label={"Email"} type={"email"} name={"email"} id={"email"}/>
                    </div>
                    <div class="input-block">
                        <Input for={"Password"} label={"Password"} type={"text"} name={"Password"} id={"Password"}/>
                    </div>
                    <h5 name=" error"></h5>
                    <div class=" modal-buttons">
                        <button class="input-button" name="login">
                            <Link to ={"/Home"} className="nav-link">Đăng Nhập</Link>
                        </button>
                        <button class="input-button" name="signup">
                            <Link to ={"/Register"} className="nav-link">Đăng Ký</Link>
                        </button>
                    </div>
                </form>
            </div>
            <div class="modal-right">
                <img src="https://logo-maker-api.s3.us-west-2.amazonaws.com/projects/629c2285aa2c97ddaf3bb8b8/thumbnail.png?AWSAccessKeyId=AKIA6LFXYJ6BXG4EKM6A&Expires=1655786507&Signature=2KY2C6tOmxFe4QMPVUY7aSQf1Vc%3D" alt="Photo" />
            </div>
        </div>
    </div>
    )
}

export default Form;