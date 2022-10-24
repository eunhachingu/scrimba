import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';


function App() {
    const card = data.map(item => {
        return (
            <Card 
                id = {item.id}
                {...item}
            />
        )
    })



    return (
        <div className='container'>
            <Navbar />
            
            <section>
                {card}
            </section>
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("root"));
export default App;