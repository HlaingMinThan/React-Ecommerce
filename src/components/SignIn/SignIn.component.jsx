import React from "react";
import "./SignIn.style.css";
import FormInput from "../../components/FormInput/FormInput.component"
import Button from "../../components/Button/Button.component"
import {signInWithGoogle} from "../../firebase/config"
class SignIn extends React.Component{
    state={
        email:"",
        password:""
    }
    handleChange=e=>{
       let {name,value}=e.target;
       this.setState({
           [name]:value
       },()=>console.log(this.state));
       
    }
    handleSubmit=e=>{
        e.preventDefault();
    }
    render(){
        return (
            <div className="sign-in">
                <h2>I already Have An Account</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email"
                        name="email" 
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="Email"
                    />
                    <FormInput 
                        type="password"
                        name="password" 
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="Password"
                    />
                   <div className="buttons">
                        <Button>Sign In</Button>
                        <Button onClick={()=>signInWithGoogle()} isGoogleLogin>Google Login</Button>
                   </div>
                </form>
            </div>
        )
    }
}


export default SignIn;