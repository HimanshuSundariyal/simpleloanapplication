import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {makeuserlogin} from '../actions';
import {Link} from 'react-router-dom'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            message:'',
            error:this.props.loginerror
            
        }
    }
    handelUsername = (e) =>{
        this.setState({username: e.target.value});    
    }
    
    handelPassword = (e) => {
        this.setState({password: e.target.value});  
    }
    submitHandler = (e) => {
       var u_name = this.state.username;
       var p_word = this.state.password;
       this.props.makeuserlogin(u_name,p_word); 
       this.setState({ error:this.props.loginerror });
       e.preventDefault();
    }
    render(){
            if(this.props.isuserlogin == 'Yes')
            {   
            this.props.history.push("/loanapplication");
            }
        return(
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2>User Login</h2>
                { this.state.error && (<div className="alert alert-danger" role="alert">Invalid username or password</div> ) }
                    <form onSubmit={this.submitHandler}>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" onChange={this.handelUsername} />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" onChange={this.handelPassword} />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>
                    <p>If you don't have Account <Link to="/signup">Click Here</Link></p>
                </div>
               
            </div>
        );
    }
}

const mapStatetoprops = state => {
    return {
        isuserlogin: state.isuserlogin,
        loginuserid:state.loginuser_id,
        loginerror:state.error
    }
}

const mapdispatchToProps = (dispach) => {
    return {
        makeuserlogin : (username,password) => {dispach(makeuserlogin(username,password))}
    }
  }

export default connect(mapStatetoprops,mapdispatchToProps)(Login);