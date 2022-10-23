import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {
    return (
        <div className='container'>
            <Navbar />
            <Hero />
            <Card 
                img="katie.png"
                rating="5.0"
                reviewCount={6}
                country="America"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />

        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("root"));
export default App;