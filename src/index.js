import React, { Component, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const [ value, setValue ] = useState(0);
  const [ visible, setVisible ] = useState(true);

  if (visible) {
    return (
    <div>
      <button 
        onClick={() => {
          return(
            setValue(value => value + 1)  
          )
        }}>+</button>

      <button 
        onClick={() => {
          return (
            setVisible(false)
          )
        }}>hide</button>
      <ClassCounter value={value} />
      <HookCounter value={value}/>

    </div>
    )
  } else {
    return (
      <button 
        onClick={() => {
          return (
            setVisible(true)
          )
        }}>show</button>
    )
  }
}

class ClassCounter extends Component {

  componentDidMount(){
    console.log("ClassCounter - componentDidMount")
  }

  componentDidUpdate() {
    console.log("ClassCounter - componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("ClassCounter - componentDidUnmount")
  }

  render() {
    const { value } = this.props
    return (
      <div>
        { value }
      </div>
    )
  }
}

const HookCounter = ({ value }) => {
  
  useEffect(() => {
    console.log("useEffect")
    return (() => { console.log("clear useEffect")})
  }, [ value ])
  return (
    <div>
      <p>{ value }</p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
