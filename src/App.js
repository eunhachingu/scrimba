import React from 'react'
import ReactDOM from 'react-dom'
import Star from './components/Star'


function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

    return (
        <main>
            <article className='card'>
                <img src="./images/user.png" alt="user" className='card--image' />
                <div className='card--info'>
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className='class--name'>
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className='card--contact'>{contact.phone}</p>
                    <p className='card--contact'>{contact.email}</p>
                </div>
            </article>
        </main>
    )
}



ReactDOM.render(<App />, document.getElementById("root"));
export default App;