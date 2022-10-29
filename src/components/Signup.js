import React, {useState} from 'react'

function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsLetter: true,
    })

    function handleChange(e) {
        const {name, value, type, checked} = e.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }


    function handleSubmit(e) {
        e.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("successfully signed up")
        } else {
            console.log("do not matched!")
            return
        }

        if (formData.joinedNewsLetter) {
            console.log("thanks for signing up")
        } 
    }

    

  return (

    <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
            <input 
                type="email"
                placeholder='Email'
                className='form--input'
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <input 
                type="password"
                placeholder='Password'
                className='form--input'
                name="password"
                onChange={handleChange}
                value={formData.password}
            />
            <input 
                type="password"
                placeholder='Confirm Password'
                className='form--input'
                name="passwordConfirm"
                onChange={handleChange}
                value={formData.passwordConfirm}
            />
            <div className='form--marketing'>
                <input
                    type="checkbox"
                    id="okayToEmail"
                    name="joinedNewsLetter"
                    onChange={handleChange}
                    checked={formData.joinedNewsLetter}
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>

            <button
                className='form--submit'
            >
                Sign up
            </button>
        </form>
    </div>
  )
}

export default Signup