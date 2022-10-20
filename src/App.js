import React from 'react'
import ReactDOM from 'react-dom'
import Banner from './components/Banner';

function App() {
    return (
        <div>
            <Banner/>
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("root"));
export default App;