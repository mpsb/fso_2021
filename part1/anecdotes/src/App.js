import React, { useState } from 'react'


const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  let newArray = new Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(newArray)
  const [highest, setHighest] = useState(0)

  const addToPoints = (index) => {
    const copy = [...points]
    copy[index] += 1;
    console.log(copy)

    setPoints(copy)
    console.log(Math.max(...copy))
    setHighest(copy.indexOf(Math.max(...copy)))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {points[selected]} votes.
      <br></br>
      <button onClick={() => addToPoints(selected)}>vote</button>
      <button onClick={() => setSelected(random(0,6))}>next anecdote</button>

      <h1>Anecdote with the most votes</h1>
      {anecdotes[highest]}
      <br></br>
      has {points[highest]} votes.
    </div>
  )
}

export default App