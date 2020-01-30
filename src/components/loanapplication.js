import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {userloanapplication} from '../actions';

class LoanApplication extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userId:'',
            username:'',
            email:'',
            amount:'',
            loantype:'',
            error:false
        }
    } 
    componentDidMount(){
        var user_id = this.props.loginuserid;
        if(typeof user_id=='undefined')
        {
            this.props.history.push("/login");
        }
        else
        {
            fetch(`http://localhost:4000/userdetails/?user_id=${user_id}`)
            .then(res => res.json())
            .then(users => { 
            var result = JSON.parse(JSON.stringify(users.data));
            this.setState({ userId: result[0]['id'] });
            this.setState({ username: result[0]['user_name'] });
            this.setState({ email: result[0]['user_email'] });
            });

        }   
    }


    handelamount = (e) =>{
        this.setState({amount: e.target.value});    
    }
    
    handelamounttype = (e) =>{
        this.setState({loantype: e.target.value});    
    }    

    submitHandler = (e) => {
        var userId = this.state.userId;
        var amount =  this.state.amount;
        var loan_type =  this.state.loantype;
        if(userId =='' || amount == '' || loan_type=='' )
        {
            this.setState({ error:true });
        }

        this.props.userloanapplication(userId,amount,loan_type); 
        e.preventDefault();
     }    
    render(){
        if(this.props.applicationsuccess == 'Yes')
        {   
        this.props.history.push("/thanku");
        }

        console.log();
    return(
        <div className="wrapper fadeInDown">
            <div id="formContent">        

            { this.state.error && (<div className="alert alert-danger" role="alert">Please fill all the values</div> ) }
            <form onSubmit={this.submitHandler} method="POST">
                <div className="container">
                    <h1>Loan Application</h1>
                    <p>Please fill in this form for Loan application.</p>
                    <hr/>

                    <label><b>Username</b></label><br/>
                    <input type="text" placeholder="Username" name="email" required value={this.state.username} />
                    <br/>
                    <label><b>Email</b></label><br/>
                    <input type="text" placeholder="Email" name="email" required value={this.state.email} />

                    <label ><b>Loan Amount</b></label>
                    <input type="text" placeholder="Loan Amount" name="psw"  onChange={this.handelamount} />

                    <label ><b>Select Loan Type</b></label>
                    <select className="browser-default custom-select" onChange={this.handelamounttype}>
                        <option value="Home">Home</option>
                        <option value="Persnol">Presnol</option>
                        <option value="Bike">Bike</option>
                        <option value="Car">Car</option>
                    </select>

                    <div className="clearfix">
                        <button type="submit" className="btn btn-primary" >Sign Up</button>
                    </div>
                </div>    
            </form>
            </div>
        </div>
    )
    }
}


const mapStatetoprops = state => {
    return {
        isuserlogin: state.isuserlogin,
        loginuserid: state.user_id,
        applicationsuccess: state.application_success
    }
}


const mapdispatchToProps = (dispach) => {
    return {
        userloanapplication : (userID, amount, loanType) => {dispach(userloanapplication(userID, amount, loanType))}
    }
  }


export default connect(mapStatetoprops, mapdispatchToProps)(LoanApplication);
