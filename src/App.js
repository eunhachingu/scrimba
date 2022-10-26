import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar';
import Meme from './components/Meme';

function App() {
    return (
        <div className='container'>
            <Navbar />
            <Meme />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("root"));
export default App;