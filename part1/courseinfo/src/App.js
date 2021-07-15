import React from 'react'

const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) =>{
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Total = (props) => {
    return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    )
  }

  const Part = (props)=>{
    return (
    <p>
      {props.part} {props.exercises}
    </p>)
  }

  const Content = (props) => {
    return (
      <div>
        <Part props={props.parts[0]}/>
        <Part props={props.parts[1]}/>
        <Part props={props.parts[2]}/>
      </div>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App