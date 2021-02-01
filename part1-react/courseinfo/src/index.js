import React from 'react'
import ReactDOM from 'react-dom'

// En este caso props es un objeto que contiene todas las propiedades del componente
// Puedo extrar una propiedad de un objeto directamente asi:
/* 
const Title = (props) => {
  
  const {course} = props
  // const course = props.course // equivale a esto
  return <h1>{course}</h1>
} 
*/

/* const Title = (props) => {
  return <h1>{props.course}</h1>
} */

const Header = (props) => {

  const courseName = props.course.name
  return(
    <h1>{courseName}</h1> //one line una funcion que devuelve lo primero que esta evaluando
  )   
}
const Paragraph = ({part}) => <p>{part.name}{part.exercises}</p> //one line

const Content = (props) => {
 const {parts}=props.course
return(
  <>
  <Paragraph part={parts[0]}/>
  <Paragraph part={parts[1]}/>
  <Paragraph part={parts[2]}/>
  </>
)
}
const Total = (props) => {
  const exerTotal = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises 
  return(
    <p>Number of exercises {exerTotal}</p>
  )
}

const App = () => {
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

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))