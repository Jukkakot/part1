import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => {
  return (
      <h1>{props.text}</h1>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)
const StatisticsLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}
const Statistics = (props) => {
  if(props.good == 0 && props.neutral == 0 && props.bad == 0){
    return(
      <p>No feedback given</p>
    )
  }
  return (
  <div>
    <StatisticsLine text ={"good"} value = {props.good}/>
    <StatisticsLine text ={"neutral"} value = {props.neutral}/>
    <StatisticsLine text ={"bad"} value = {props.bad}/>
    <StatisticsLine text ={"all"} value = {props.bad + props.good + props.neutral}/>
    <StatisticsLine text ={"average"} value = {(props.good - props.bad)/(props.bad + props.good + props.neutral)}/>
    <StatisticsLine text ={"positive"} value = {props.good/((props.bad + props.good + props.neutral)) *100 +" %"}/>
      </div>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const headerText1 = "give feedback"
  const headerText2 = "statistics"
 
  return (
    <div>
      <Header text = {headerText1}/>
      <Button onClick={() => setGood(good + 1)} text = {"good"}/>
      <Button onClick={() => setNeutral(neutral + 1)} text = {"neutral"}/>
      <Button onClick={() => setBad(bad + 1)} text = {"bad"}/>
      <Header text = {headerText2}/>
      <Statistics  good ={good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
