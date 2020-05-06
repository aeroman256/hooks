import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyNewContext = React.createContext();
const MyContext = React.createContext();


const Child = () => {
  const value = useContext(MyContext)
  const word = useContext(MyNewContext)
  console.log(word )
  return (
    <div>
      <p>FFF { value }</p>
      <p>{ word }</p>
    </div>
  )

  // return (
  //     <MyContext.Consumer>
  //       { (value) => {
  //         return (
  //           <p>{ value }</p>
  //         )
  //       }}
  //     </MyContext.Consumer>    
  // )
}

const HighChild = () => {
  return (
    <div>
      <h1>High Child</h1>
      <Child />
    </div>
  )
}

const App = () => {
  return (
      <MyContext.Provider value="111">
        <MyNewContext.Provider value="sex">
          <HighChild />   
        </MyNewContext.Provider>
      </MyContext.Provider>
    
    )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
