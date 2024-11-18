import React from 'react'

const ChildComponents  = React.memo(
    (props)=>{
        console.log("Child Component got re-render again");

        return (
            <div>
                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>
            </div>
        )
    }
);

export default ChildComponents

// React.memo->wrap->component->component
// re-render tabhi hoga jab props change hogne nahi to re-render nhi hoga  

// if you r sending a function, the react.memo won;t be able to save you from re-rendering
