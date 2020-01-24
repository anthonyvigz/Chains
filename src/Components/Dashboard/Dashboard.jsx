import React from 'react';
import { connect } from 'react-redux';
import SideNav from './SideNav';

function Dashboard(props) {

    console.log(props)
    return(
        <div>
            <h1>hey! {props.firstname}</h1>
            <SideNav />
            {/* explicitly declaring child routes for dashboard */}
            {props.children}
        </div>
        )
    }

const mapStateToProps = (state) => {
    return {
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        email: state.user.email
    }
  }
  
  export default(
    connect(
        mapStateToProps,
        null
    )(Dashboard)
  );