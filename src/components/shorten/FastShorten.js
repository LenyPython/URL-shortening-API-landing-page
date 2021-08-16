import React, {useState} from 'react'
import './short.css'



const FastShorten = () => {
  const [link, setLink] = useState('Shorten a link here...');

  const handleLinkChange = event => setLink(event.target.value)
  const handleClick = () => {
    let url = 'https://api.shrtco.de/v2/shorten?url='
    getData(url)
  }
  const getData = async url => {
    console.log('connecting')
    try {
      let response = await fetch(url + link)
      response = await response.json()
      let data = {
        link: link,
        short_link: response.result.full_short_link
      }
      console.log('inside:')
      console.log(data)
      return data
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <section id="shortener">
      <textarea
        id="linkShortener"
        name="link"
        onChange={handleLinkChange}
        value={link}
        placeholder='Shorten a link here...'
        required
      >
      </textarea>
      <button htmlFor="link" onClick={handleClick}>Shorten It!</button>
    </section>
  )
}

export default FastShorten;
