import React, {useState} from 'react'
import './short.css'



const FastShorten = () => {
  const [links, setLinks] = useState(sessionStorage.links ? JSON.parse(sessionStorage.links) : []);
  const [link, setLink] = useState('Shorten a link here...');


  const handleCopyShortLink = event => {
    let prevCopiedButton = document.querySelector('.Copied')
    if (prevCopiedButton) prevCopiedButton.classList.remove('Copied')
    event.target.innerText = 'Copied!'
    event.target.classList.add('Copied')
  }

  const handleLinkChange = event => setLink(event.target.value)

  const handleClick = async () => {
    let url = 'https://api.shrtco.de/v2/shorten?url=' + link
    try {
      console.log('connecting')
      let response = await fetch(url)
      console.log('recieved response')
      response = await response.json()
      let data = {
        link: link,
        short_link: response.result.full_short_link
      }
      let currentLinks = sessionStorage.links ? JSON.parse(sessionStorage.links) : []
      if (currentLinks.length >= 3) currentLinks.pop()
      currentLinks.unshift(data)
      sessionStorage.links = JSON.stringify(currentLinks)
      setLinks(currentLinks)
    }
    catch (err) {
      console.log(err)
    }
  }

  let prevLinks = links.map((item) => {
    return (<div key={item.link}>
      <p>{item.link}</p>
      <div><p>{item.short_link}</p><button onClick={handleCopyShortLink}>Copy</button></div>
    </div>)
  })

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
        {links.length > 0 ? prevLinks : null}
      </div>
    </section>
  )
}

export default FastShorten;
