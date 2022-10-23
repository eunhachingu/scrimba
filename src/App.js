import React from 'react'
import ReactDOM from 'react-dom'
import Joke from './components/Joke';
import jokesData from './jokesData';



function App() {
    const jokeElements = jokesData.map(joke => {
        return(
            <Joke 
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    })

    return (
        <div className='container'>
            {jokeElements}
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("root"));
export default App;