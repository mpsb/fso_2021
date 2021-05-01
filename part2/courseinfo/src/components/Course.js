import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';


const Course = ({courses}) => {
    console.log(courses);

    return(
        courses.map(course => 
        <div key={String(course.id)+"1"}>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>)
    );
}

export default Course;