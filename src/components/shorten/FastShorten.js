import React, {useState} from 'react'
import './short.css'



const FastShorten = () => {
  const [links, setLinks] = useState(sessionStorage.links ? JSON.parse(sessionStorage.links) : []);
  const [link, setLink] = useState('Shorten a link here...');
  const [loading, setLoading] = useState(false)


  const handleCopyShortLink = event => {
    let prevCopiedButton = document.querySelector('.Copied')
    if (prevCopiedButton) {
      prevCopiedButton.classList.remove('Copied')
      prevCopiedButton.innerText = 'Copy'
    }
    event.target.innerText = 'Copied!'
    event.target.classList.add('Copied')
    let shortLinkCopy = event.target.previousElementSibling.innerText
    navigator.clipboard.writeText(shortLinkCopy)
  }

  const handleLinkChange = event => setLink(event.target.value)

  const handleClick = async () => {
    let url = 'https://api.shrtco.de/v2/shorten?url=' + link
    let currentLinks = sessionStorage.links ? JSON.parse(sessionStorage.links) : []
    if (currentLinks.length >= 3) currentLinks.pop()
    currentLinks.unshift('waiting')
    setLinks(currentLinks)
    setLoading(true)
    try {
      let response = await fetch(url)
      response = await response.json()
      let data = {
        link: link,
        short_link: response.result.full_short_link
      }
      currentLinks[0] = data
      sessionStorage.links = JSON.stringify(currentLinks)
      setLinks(currentLinks)
      setLoading(false)
    }
    catch (err) {
      currentLinks[0] = 'error'
      setLinks(currentLinks)
      setLoading(false)
      console.log(err)
    }
  }

  let prevLinks = links.map((item, idx) => {
    let shortLink = (<div key={item.link}>
      <p>{item.link}</p>
      <div><p>{item.short_link}</p><button onClick={handleCopyShortLink}>Copy</button></div>
    </div>)

    if (idx === 0) return loading ? 'Awaiting response...' : shortLink
    return shortLink
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
