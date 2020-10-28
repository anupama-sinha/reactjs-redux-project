import React, { Component } from 'react';
import { incrementAction , decrementAction, resetAction } from './CountActions'
import { connect } from 'react-redux';;

class ReduxApp extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    handleIncrementAction = () => {
        this.store.dispatch({ type: 'INCREASE' }());
    }
    handleDecrementAction = () => {
        this.store.dispatch(decrementAction());
    }
    handleResetAction = () => {
        this.store.dispatch(resetAction());
    }
    render() {
        return (
            <div>
                <p>Hello Anupama</p>
                <p>Let's Learn React.js now - ReduxApp-10</p>
                {/* <button onClick={() => dispatch({ type: 'increment' })}>Increase</button><br /><br /> */}
                <button onClick={this.handleIncrementAction}>Increase</button><br /><br />
                {/* <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</button> */}
                <p>Hi, My friend. U have increase the count : {this.props.count}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        CountReducers: state.count
    }
}

const mapDispatchToProps={incrementAction,decrementAction, resetAction}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxApp);