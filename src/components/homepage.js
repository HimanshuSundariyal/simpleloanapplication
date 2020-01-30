import React from 'react';
import {Button, Row, Col, Image,Alert   } from 'react-bootstrap'
import Homloanimg from '../images/homeloan.jpeg';
import Carloan   from '../images/carloan.jpg';
import Bikeloan from '../images/bikeloan.jpg';
import Persnoalloan from '../images/persnoalloan.jpg';
import Banner from '../images/loanbanner.jpg';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
class HomePage extends React.Component{

    render(){
		console.log(this.props);
		var linkto = ''
		if(this.props.isuserlogin == 'Yes')
		{
			linkto = '/loanapplication';
		}
		else
		{
			linkto = '/login';
		}
        return(
		<div className="main-container">
			<Image src={Banner} className="banner_img" fluid />
			<Alert variant="success">
					Easy Steps To make life batter 
			</Alert>			
			<Row>
			<Col sm={3}>
				<div className="inner">
					<h3>Home Loan</h3>
					<Image className="loanimg" src={Homloanimg} rounded />
					<p>You can apply for home Loan direct from here with very less persent you company give you garenty for best and cheap rates from others.</p>
					<Link to={linkto}><Button variant="primary">Apply</Button></Link>
				</div>
			</Col>
				
			<Col sm={3}>
				<div className="inner">
					<h3>Car Loan</h3>
					<Image className="loanimg" src={Carloan} rounded />		
					<p>You can apply for car Loan direct from here with very less persent you company give you garenty for best and cheap rates from others.</p>
					<Link to={linkto}><Button variant="primary">Apply</Button></Link>
				</div>
			</Col>

			<Col sm={3}>
				<div className="inner">
					<h3>Bike Loan</h3>
					<Image className="loanimg" src={Bikeloan} rounded />	
					<p>You can apply for bike Loan direct from here with very less persent you company give you garenty for best and cheap rates from others.</p>
					<Link to={linkto}><Button variant="primary">Apply</Button></Link>
				</div>
			</Col>

			<Col sm={3}>
				<div className="inner">
					<h3>Persnoalloan</h3>
					<Image className="loanimg" src={Persnoalloan} rounded />
					<p>You can apply for persnol Loan direct from here with very less persent you company give you garenty for best and cheap rates from others.</p>
					<Link to={linkto}><Button variant="primary">Apply</Button></Link>
				</div>
			</Col>
	</Row>

	<div className="alert alert-info footer-div" role="alert">
		Copywrite 2020 Himanshu sundariyal 
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
export default connect(mapStatetoprops)(HomePage);