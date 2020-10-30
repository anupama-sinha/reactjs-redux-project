import React, { useEffect, useState } from 'react';
import '../App.css';

export default function AppFunction() {
    //Hooks : useState & useEffect

    // const[count, setCount] = useState(7);

    //Array Destructing
    var countStateVariable = useState(10);
    var count = countStateVariable[0];
    var setCount = countStateVariable[1];

    //componentDidMount
    //componentDidUpdate
    //componentWillUnMount
    //One API - > useEffect()

    useEffect(() => {
        document.title=`Count ${count}`;
    }) 

    return (
      <div>
        <p>AppFunction-React Functional Component</p>
        <button onClick={() => setCount(count+1)}>Increase</button>
        <p>Hi, My friend. U have increased the count : {count}</p>
        
      </div>
    );
}