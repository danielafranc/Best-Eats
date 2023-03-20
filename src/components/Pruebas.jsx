import React, { useState } from 'react';

function Pruebas() {
  const [person, setPerson] = useState({
    name: 'John',
    age: 30,
    occupation: 'Software Engineer',
  });

  const handleClick = () => {
    // Change the value of the "age" property
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };
  console.log(person.age)

  return (
    <>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
      <button onClick={handleClick}>Increase Age</button>
    </>
  );
}

export default Pruebas;
