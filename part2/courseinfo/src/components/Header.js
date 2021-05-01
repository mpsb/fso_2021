import React from 'react';


const Header = ({ course }) => {
    return (
      <h2 key={String(course.id)+"1"}>{course.name}</h2>
    )
}

export default Header;