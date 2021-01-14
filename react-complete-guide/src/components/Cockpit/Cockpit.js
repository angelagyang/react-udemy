import React from 'react'; 
import classes from './Cockpit.css';

const cockpit = (props) => {
    let assignedClasses = [] // class names defined in CSS file 
    let btnClass = ''; 
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length < 2) {
        assignedClasses.push(classes.red); 
    }
    if (props.persons.length < 1) {
        assignedClasses.push(classes.bold);
    }

    return (
    <div className={classes.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} 
            alt={props.showPersons}
            onClick={props.clicked}
        >Toggle Persons</button>
    </div>
    ); 
}; 

export default cockpit; 