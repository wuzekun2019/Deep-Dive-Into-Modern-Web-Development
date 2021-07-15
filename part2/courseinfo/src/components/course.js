import React from 'react';

const Header = ({props})=>{
    return (<h2>{props}</h2>)

}

const Part = ({prop}) =>{
    return (<p>{prop.name} {prop.exercises}</p>)
}

const Content = ({props}) => {
    return (props.map((prop)=>
        <Part prop={prop} key={prop.id}></Part>
    ))
}

const Sum = ({props})=>{
    return (<b>total of {props.reduce((s,p)=>s+p.exercises,0)} exercises</b>)
}

const Course = ({course})=>{
    return (
        <div>
            <Header props={course.name}></Header>
            <Content props={course.parts}></Content>
            <Sum props={course.parts}/>
        </div>
     )
}

export default Course;

