import React, { Component } from 'react';
import { INCREASE, DECREASE, RESET,INCREASE_ASYNC } from '../reducers/CountReducers';
import { connect } from 'react-redux';
import {incrementAction,decrementAction,resetAction} from '../actions/CountActions'

class ReduxApp extends Component {
    constructor(props) {
        super(props);
        // this.store = this.props.store;
    }
    handleIncrementAction = () => {
        const {incrementAction,count} = this.props
        incrementAction(count)
        // this.store.dispatch({ type: 'INCREASE' }());
    }
    handleDecrementAction = () => {
        const {decrementAction,count} = this.props
        decrementAction(count)
        // this.store.dispatch({ type: 'DECREASE' }()());
    }
    handleResetAction = () => {
        const {resetAction,count} = this.props
        resetAction(count)
        // this.store.dispatch(resetAction());
    }
    render() {
        return (
            <div>
                <p>ReduxApp - React Class Component</p>
                <button onClick={this.handleDecrementAction}>Decrease</button>
                <button onClick={this.handleIncrementAction}>Increase</button>
                <button onClick={this.handleResetAction}>Reset</button>
                {/* <button onClick={() =handleResetAction> dispatch({ type: 'reset', payload: initialCount })}>Reset</button> */}
                <p>Hi, My friend. U have increased the count : {this.props.count}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        count: state.count
    }
}

const mapDispatchToProps={
    incrementAction:incrementAction,
    decrementAction:decrementAction,
    resetAction:resetAction
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxApp);