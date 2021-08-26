import React from 'react'
import {ReactComponent as Loader} from './loader.svg'
import './results.css'

const Results = ({stateControl}) => {

  const {links, isLoading} = stateControl

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


  let prevLinks = links.map((item, idx) => {
    if (item === 'error') return <p className="error">Error occured</p>
    let shortLink = (<div key={item.link}>
      <p>{item.link}</p>
      <div><p>{item.short_link}</p><button onClick={handleCopyShortLink}>Copy</button></div>
    </div>)

    if (idx === 0) return isLoading ? <Loader key={0} /> : shortLink
    return shortLink
  })
  return (
    <div id="results">
      {links.length > 0 ? prevLinks : null}
    </div>
  )
}

export default Results
