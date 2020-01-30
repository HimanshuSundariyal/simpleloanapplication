import React from 'react';
import '../App.css';
import {Row, Col ,Alert   } from 'react-bootstrap'
class  Loanapplicationlist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loanapplicationslist:[]
        }
    } 

    componentDidMount(){
            var user_details = [];
            fetch(`http://localhost:4000/loanapplications/`)
            .then(res => res.json())
            .then(users => { 
             if(users.length>0)
             {   
            var result = JSON.parse(JSON.stringify(users.data));
            this.setState({loanapplicationslist:result })
             } 
        });
            
           
    }
    
    render()
    {
    if( this.state.loanapplicationslist.length > 0)
    {
    return(
        <div className="main-container">
           <Alert variant="success">
                List of users  who apply for the loan
            </Alert>  
        <Row>
            {
            this.state.loanapplicationslist.map(userlist => (
            <Col sm={3} key={userlist.id} className="loanapp_list">
                <div className="user_listing">
                <p><strong>Username: </strong> {userlist.user_name} </p>
                <p><strong>User Email: </strong> {userlist.user_email} </p>
                <p><strong>Loan Amount: </strong> {userlist.loan_amount}  </p>
                <p><strong>Loan Type: </strong> {userlist.loan_type}  </p> 
                </div>
            </Col>
          ))}
        </Row>
        </div>
    );
    }
    else
    {
        return(
            
                <div className="main-container">
                    <Row> 
                        <Alert variant="success">
                        No application 
                        </Alert>
                    </Row>
                </div>
         
        )
    }
    }   
}

export default Loanapplicationlist;