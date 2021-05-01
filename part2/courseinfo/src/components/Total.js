import React from 'react';


const Total = ({ course }) => {
  let sumArray = [];

  course.parts.map(part => sumArray.push(part.exercises));

  const sum = sumArray.reduce((a, b) => a+b, 0);

  return(
    <p key={String(course.id)+"3"}><b>Total of exercises {sum}</b></p>
  ) 
}


export default Total;