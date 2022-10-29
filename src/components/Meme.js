import React from 'react'
import memesData from '../memesData'

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"
  })




  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }) )
    // const url = memesArray[randomNumber].url
  }

  function handleSubmit(e) {
    

  }

  function handleChange(e) {
    const {name, value} = e.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value
    }))
  }

  return (
    <main>
        <form className='form' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Top text'
              className='form--input'
              name="topText"
              onChange={handleChange}
              value={meme.topText}
            />
            <input
              type="text"
              placeholder='Bottom text'
              className='form--input'
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
            />
            <button
              className='form--button'
              onClick={getMemeImage}
            >
                Get a new meme image
            </button>
        </form>
        <div className='meme'>
          <img src={meme.randomImage} alt="" className='meme--image' />
          <h2 className='meme--text top'>{meme.topText}</h2>
          <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme