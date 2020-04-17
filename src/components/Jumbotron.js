import React from 'react';

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" style={{backgroundColor:"#2c323c",color:"white"}}>
            <div className="container">
                <h1 className="display-4">Clicky Game!</h1>
                <p className="lead">Try to click every picture ONLY ONE TIME. Game end when you click the same picture twice.</p>
            </div>
        </div>
    )
};

export default Jumbotron;