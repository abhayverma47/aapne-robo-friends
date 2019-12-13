import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: "800px" }}>
            {props.children}
        </div>
    );
}
export default Scroll;

//{border: '1px solid black',}