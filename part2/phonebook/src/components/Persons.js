import React from 'react';

const Persons = ({personsArray}) => {
    return (
        <div>
            {personsArray.map(person => <div key={person.name+String(person.id)}>{person.name} {person.number}</div>)}
        </div>
    );
}

export default Persons;