import React from "react";
// import Helmet from "react-helmet";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class Secret extends React.Component {
    render() {
        if (this.props.loggedIn) {
            return (
                <div>OK</div>
            );
        } else {
            return (
                <Redirect to="/"/>
            );
        }
    }
}

const mapStateToProps = ( state ) => ( {
    loggedIn: state.loggedIn
} );

export default connect( mapStateToProps )( Secret );
