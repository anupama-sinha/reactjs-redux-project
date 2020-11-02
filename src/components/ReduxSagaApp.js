import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReduxSagaApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>ReduxSagaApp - React Class Component</p>
                <button onClick={this.props.onCountIncrease}>IncreaseAsync</button>
                <p>Hi, My friend. U have increased the count : {this.props.countSaga}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        countSaga: state.countSaga
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCountIncrease: (countSaga) => dispatch({ type: 'INCREASE_ASYNC_WATCH', payload: countSaga})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSagaApp);