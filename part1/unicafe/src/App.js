import React, { useState } from 'react';


const Statistic = (props) => (
  <td>{props.text} {props.value}</td>
)

const Statistics = (props) => {
  if (props.total === 0) {
    return(
        <h3>No feedback given</h3>
    );
  }

  else {
    return(
      <table>
        <tbody>
          <tr>
            <Statistic text="good" value={props.good}/>
          </tr>
          <tr>
            <Statistic text="neutral" value={props.neutral}/>
          </tr>
          <tr>
            <Statistic text="bad" value={props.bad}/>
          </tr>
          <tr>
            <td>
              average {(props.good-props.bad)/props.total}
            </td>
          </tr>
          <tr>
            <td>
              positive {(props.good/props.total)*100} %
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let total = good+neutral+bad;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App;
