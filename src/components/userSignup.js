import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {usersignup} from '../actions';
class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            email:'',
            error:false, 
        }
    }
    handelUsername = (e) =>{
        this.setState({username: e.target.value});    
    }
    handelPassword = (e) => {
        this.setState({password: e.target.value});  
    }
    handelemail = (e) => {
        this.setState({email: e.target.value});  
    }
    submitHandler = (e) => {
       var u_name = this.state.username;
       var p_word = this.state.password;
       var email =  this.state.email;
       if(u_name =='' || p_word == '' || email=='' )
        {
            this.setState({ error:true });
        }
        else
        {
            this.props.usersignup(u_name,p_word, email); 
        }
        e.preventDefault();
    }
    render(){
        console.log(this.props.usersignup_status);
        if(this.props.usersignup_status == 'Yes')
            {   
            this.props.history.push("/login");
            }

        return(
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2>Sign Up</h2>
                { this.state.error && (<div className="alert alert-danger" role="alert">Please fill all the fields</div> ) }
                    <form onSubmit={this.submitHandler} method="post">
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username" onChange={this.handelUsername} />
                        <input type="text" id="password" className="fadeIn third" name="password" placeholder="Password" onChange={this.handelPassword} />
                        <input type="text" id="email" className="fadeIn third" name="email" placeholder="Email Address" onChange={this.handelemail} />
                        <input type="submit" className="fadeIn fourth" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

const mapStatetoprops = state => {
    return {
        usersignup_status: state.usersignup_status
    }
}

const mapdispatchToProps = (dispach) => {
    return {
        usersignup : (username, password, email) => {dispach(usersignup(username, password, email))}
    }
  }

export default connect(mapStatetoprops,mapdispatchToProps)(Signup);