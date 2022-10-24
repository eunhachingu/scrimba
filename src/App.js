import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import data from './data';


function App() {
    const card = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })


    return (
        <div className='container'>
            <Navbar />
            <Hero />
            <section className='cards-list'> 
                {card}

            </section>
           

        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("root"));
export default App;