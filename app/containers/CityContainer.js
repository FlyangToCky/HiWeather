import React from 'react';
import {connect} from 'react-redux';
import City from '../pages/City';

class CityContainer extends React.Component {
    render() {
        return (
            <City {...this.props} />
        )
    }
}

export default connect((state) => {
    const { City } = state;
    return {
        City
    }
})(CityContainer);