import React, { useState } from 'react'

const Button = (props)=>{
  return (<button onClick={()=>{props.handler(props.counter+1)}}>{props.text}</button>)
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props)=>{
  if (props.good+props.neutral+props.bad === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )

  }
  return (
    <div>
      <table>
        <tbody>
      <Statistic text="good" value={props.good}/>
      <Statistic text="neutral" value={props.neutral}/>
      <Statistic text="bad" value={props.bad}/>
      <Statistic text="all" value={props.good+props.neutral+props.bad}/>
      <Statistic text="average" value={(props.good+props.neutral+props.bad)/3}/>
      <Statistic text="positive" value={`${(props.good/(props.good+props.neutral+props.bad)*100).toFixed(2)} %`}/>
      </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handler={setGood} counter={good} text="good"/>
        <Button handler={setNeutral} counter={neutral} text="neutral"/>
        <Button handler={setBad} counter={bad} text="bad"/>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App