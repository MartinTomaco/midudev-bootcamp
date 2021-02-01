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

const Header = ({course}) => <h1>{course}</h1> //one line una funcion que devuelve lo primero que esta evaluando

const Paragraph = (props) =>{
  const part= props.part
  const exerNumber= props.exerNumber
  return(
    <p>
    {part} {exerNumber}
    </p>
  )
}
const Content = () => <div></div>

const Total = ({exerTotal}) => <p>Number of exercises {exerTotal}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Paragraph part={part1} exerNumber={exercises1}/>
      <Paragraph part={part2} exerNumber={exercises2}/>
      <Paragraph part={part3} exerNumber={exercises3}/>
      <Total exerTotal={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))