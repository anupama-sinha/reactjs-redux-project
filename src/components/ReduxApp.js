import React, { Component } from 'react';
import { INCREASE, DECREASE, RESET,INCREASE_ASYNC } from '../reducers/CountReducers';
import { connect } from 'react-redux';

class ReduxApp extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    handleIncrementAction = () => {
        this.store.dispatch({ type: 'INCREASE' }());
    }
    handleDecrementAction = () => {
        this.store.dispatch({ type: 'DECREASE' }()());
    }
    // handleResetAction = () => {
    //     this.store.dispatch(resetAction());
    // }
    render() {
        return (
            <div>
                <p>ReduxApp - React Class Component</p>
                {/* <button onClick={() => dispatch({ type: 'increment' })}>Increase</button><br /><br /> */}
                <button onClick={this.handleIncrementAction}>Increase</button><br /><br />
                {/* <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</button> */}
                <p>Hi, My friend. U have increased the count : {this.props.count}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        /*CountReducers*/count: state.count
    }
}

// const mapDispatchToProps={handleIncrementAction,handleDecrementAction}

export default connect(mapStateToProps,null)(ReduxApp);