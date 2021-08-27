import React from 'react'
import './link.css'


const LinkInput = ({stateControl}) => {

  const {link, setLink, setLinks, setIsLoading} = stateControl

  const handleLinkChange = event => setLink(event.target.value)

  const handleClick = async () => {
    let url = 'https://api.shrtco.de/v2/shorten?url=' + link
    let currentLinks = sessionStorage.links ? JSON.parse(sessionStorage.links) : []
    if (currentLinks.length >= 3) currentLinks.pop()
    currentLinks.unshift('waiting')
    setLinks(currentLinks)
    setIsLoading(true)
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
      setIsLoading(false)
    }
    catch (err) {
      currentLinks[0] = 'error'
      setLinks(currentLinks)
      setIsLoading(false)
      console.log(err)
    }
  }

  return (
    <div id="shortener">
      <div id="input-wrapper">
        <input
          id="linkShortener"
          name="link"
          type="text"
          onChange={handleLinkChange}
          value={link}
          placeholder='Shorten a link here...'
          required
        />
        <p>{link ? null : 'Please add a link'}</p>
      </div>
      <button onClick={handleClick}>Shorten It!</button>
    </div>


  )
}

export default LinkInput
