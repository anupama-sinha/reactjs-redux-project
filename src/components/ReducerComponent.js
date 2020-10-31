import React, { useReducer, useContext } from 'react';
import '../App.css';

export default function ReducerComponent() {
  //Hooks : useReducer

  //Option 1 : Separate initial state
  // const count = 0;
  // const initialState = { count: 7 };
  // const [state, dispatch] = useReducer(reducer, initialState);

  //Option 2 : Initial State combined in reducer
  // const [state, dispatch] = useReducer(reducer, { count: 7 });

  //Option 3 : Lazy initialization of inital state
  // const initialCount=40;
  // const [state, dispatch] = useReducer(reducer, initialCount, init);

  //Option 4 : Arrow Function
  const initialCount = 40;
  const [state, dispatch] = useReducer(countReducer, initialCount, init);

  // const Mycontext = React.createContext("red");
  // const value = useContext(Mycontext);

  // useEffect(() => {
  //   console.log(`Context is :: ${value}`);
  // })


  return (
    <div>
      <p>ReducerComponent - React Functional Component</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</button>
      <p>Hi, My friend. U have increase the count : {state.count}</p>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function init(initialCount) {
  return { count: initialCount };
}