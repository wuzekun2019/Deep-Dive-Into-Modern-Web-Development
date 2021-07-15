import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [most_votes, setMostvotes] = useState(0)
  const [votes,setVotes]= useState(
      Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)
  )




  return (
    <div>
    <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
      <button onClick={
        (most_votes)=>{
          const copy = [... votes]
          copy[selected]+=1
          return setVotes(copy),setMostvotes(copy.indexOf(Math.max(...copy)))
        }}>vote</button>
      <button onClick={()=>{setSelected(Math.floor(Math.random() * anecdotes.length))}}>next anecdote</button>
      <p>has {votes[selected]} votes</p>
    </div>
    <div>
    <h1>Anecdote with most votes</h1>
    {anecdotes[most_votes]}
    <p>has {votes[most_votes]} votes</p>
    </div>
    </div>
  )
}

export default App