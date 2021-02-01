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

const Title = ({course}) => <h1>{course}</h1> //one line una funcion que devuelve lo primero que esta evaluando


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
      <Title course={course}/>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))