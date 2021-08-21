import React, {useState} from 'react'
import LinkInput from './linkinput/LinkInput'
import Results from './results/Results'
import './short.css'



const FastShorten = () => {
  const [links, setLinks] = useState(sessionStorage.links ? JSON.parse(sessionStorage.links) : []);
  const [link, setLink] = useState('Shorten a link here...');
  const [isLoading, setIsLoading] = useState(false)

  const stateControl = {
    link,
    links,
    isLoading,
    setLink,
    setLinks,
    setIsLoading
  }


  return (
    <section id="shorten">
      <LinkInput
        stateControl={stateControl}
      />
      <Results
        stateControl={stateControl}
      />
    </section>
  )
}

export default FastShorten;
