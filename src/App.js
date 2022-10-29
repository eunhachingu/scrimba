import React from 'react'
import ReactDOM from 'react-dom'
import Signup from './components/Signup';



function App() {
    return (
        <div className='container'>
            <Signup />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("root"));
export default App;