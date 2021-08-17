import React, {useState} from 'react'
import './short.css'



const FastShorten = () => {
  const [links, setLinks] = useState(sessionStorage.links ? JSON.parse(sessionStorage.links) : []);
  const [link, setLink] = useState('Shorten a link here...');

  let prevLinks = links.map((item, idx) => {
    return <li key={idx}>normal: {item.link}, short:{item.short_link} <button>Click</button></li>
  })


  const handleLinkChange = event => setLink(event.target.value)

  const handleClick = () => {
    let url = 'https://api.shrtco.de/v2/shorten?url=' + link
    getData(url)
  }

  const getData = async url => {
    try {
      console.log('connecting')
      let response = await fetch(url + link)
      console.log('recieved response')
      response = await response.json()
      let data = {
        link: link,
        short_link: response.result.full_short_link
      }
      let currentLinks = sessionStorage.links ? JSON.parse(sessionStorage.links) : []
      if (currentLinks.length >= 4) currentLinks.pop()
      currentLinks.unshift(data)
      sessionStorage.links = JSON.stringify(currentLinks)
      setLinks(currentLinks)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <section id="shorten">
      <div id="shortener">
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
      </div>
      <div id="results">
        <ul>
          {links.length > 0 ? prevLinks : 'none'}
        </ul>
      </div>
    </section>
  )
}

export default FastShorten;
