import React from 'react';


const Total = ({ course }) => {
    const sum = {course.parts.map(part => sum += part.exercises)};
    return(
      <p>Number of exercises {sum}</p>
    ) 
}


export default Total;