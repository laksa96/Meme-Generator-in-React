import React, {useState, useEffect} from 'react'

const Meme = () => {

    // State for storing all memes from API
    const [allMemes, setAllMemes] = useState()

    // State for single meme
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    })

    // Fetch memes from API and update state
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    // Handle click for getting new meme image from state
    const handleClick = () => {
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    // Handle change for inputs and update state
    const handleChange = (e) => {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <main>
            <div className='form mt-3 p-4'>
                <div className='d-flex align-items-center flex-wrap'>
                    <input className='form--input me-auto rounded p-2' type='text' placeholder='Top text' name='topText' value={meme.topText} onChange={(e) => handleChange(e)} />
                    <input className='form--input rounded p-2' type='text' placeholder='Bottom text' name='bottomText' value={meme.bottomText} onChange={(e) => handleChange(e)} />
                    <button onClick={() => handleClick()} type='button' className='form--btn col-12 mt-3 btn text-white p-2 fw-bold fs-3'>Get a new meme image 🖼</button>
                </div>
            </div>
            <div className="meme mt-3 p-4 d-flex justify-content-center">
                <img src={meme.randomImage} className="meme--image img-fluid w-100" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme

