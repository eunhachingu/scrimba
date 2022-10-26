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

  return (
    <main>
        <div className='form'>
            <input
              type="text"
              placeholder='Top text'
              className='form--input'
            />
            <input
              type="text"
              placeholder='Bottom text'
              className='form--input'
            />
            <button
              className='form--button'
              onClick={getMemeImage}
            >
                Get a new meme image
            </button>
        </div>
        <img src={meme.randomImage} alt="" className='meme--image' />
    </main>
  )
}

export default Meme