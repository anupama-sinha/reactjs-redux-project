import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementAction,decrementAction,resetAction } from '../actions/CountActions'

class ReduxApp extends Component {
    constructor(props) {
        super(props);
    }
    handleIncrementAction = () => {
        const {incrementAction,count} = this.props
        incrementAction(count)
    }
    handleDecrementAction = () => {
        const {decrementAction,count} = this.props
        decrementAction(count)
    }
    handleResetAction = () => {
        const {resetAction,count} = this.props
        resetAction(count)
    }
  
    render() {
        return (
            <div>
                <p>ReduxApp - React Class Component</p>
                <button onClick={this.handleDecrementAction}>Decrease</button>
                <button onClick={this.handleIncrementAction}>Increase</button>
                <button onClick={this.handleResetAction}>Reset</button>
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