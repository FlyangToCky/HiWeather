import React from 'react';
import {connect} from 'react-redux';
import Today from '../pages/Today';

class TodayContainer extends React.Component {
    render() {
        return (
            <Today {...this.props} />
        )
    }
}

export default connect((state) => {
    const { Today } = state;
    return {
        Today
    }
})(TodayContainer);