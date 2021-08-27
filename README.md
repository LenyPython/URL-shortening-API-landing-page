# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library


### What I learned

- Async/await.
- SVG graphic animation, adding svg as React components with classes, other svg manipulation.
- Practiced a lot of RWD( responsive web design).

```html
<svg width='300px' height='100px' viewBox='0 0 300 100'>
	<text x='20' y='50'>Loading response</text>
	<circle cx='200' r='7'>
		<animate
		attributeName='cy'
		values='35;65;35' begin='0s' dur='1s'
		repeatCount='indefinite' />
	</circle>
	<circle cx='245' r='7'>
		<animate
		attributeName='cy'
		values='35;65;35' begin='0.2s' dur='1s'
		repeatCount='indefinite' />
	</circle>
	<circle cx='290' r='7'>
		<animate
		attributeName='cy'
		values='35;65;35' begin='0.4s' dur='1s'
		repeatCount='indefinite' />
	</circle>
</svg>
```
```css
	div {
		svg {
			fill: var(--neutral-gray);
		&:hover {
			fill: var(--primary-cyan);
		} }


#results {
	svg {
		animation: svg_color 3s infinite;
	}
}
@keyframes svg_color{
	0% {
		fill: var(--primary-cyan);
	}
	50% {
		fill: var(--primary-dark-violet);
	}
	100% {
		fill: var(--primary-cyan);
	}
}
```
```js
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
```

## Author

- Website - 404
- Frontend Mentor - [@LenyPython](https://www.frontendmentor.io/profile/LenyPython)



