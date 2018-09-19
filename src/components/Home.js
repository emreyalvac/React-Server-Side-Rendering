import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { fetchData } from "../store";

class Home extends React.Component {
    componentDidMount() {
        if (this.props.circuits.length <= 0) {
            this.props.fetchData();
        }
    }

    render() {
        const { circuits } = this.props;
        return (
            <div>
                <h2>F1 2018</h2>
                <ul>
                    {circuits.map( ( { circuitId, circuitName, Location } ) => (
                        <li key={circuitId}>{circuitName} - {Location.locality}, {Location.country}</li>
                    ) )}
                </ul>
                <Helmet>
                    <title>Home</title>
                </Helmet>
            </div>
        );
    }
}

Home.serverFetch = fetchData;

const mapStateToProps = ( state ) => ( {
    circuits: state.data,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
