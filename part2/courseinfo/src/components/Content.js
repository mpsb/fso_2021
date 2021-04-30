import React from 'react';
import Part from './Part';


const Content = ({ course }) => {
  console.log(course);
    return (
      <div>
        {course.parts.map(course =>
          <Part key={course.id} part={course}/>)}
      </div>
    )
}


export default Content;

