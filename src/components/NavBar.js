import React from 'react'

function NavBar() {
  const links = ['home', 'about', 'projects']

  const linkElement = links.map(link => {
    const withHash = '#' + link

    return (
      <a key={link} href={withHash}>
        {link}
      </a>
    )
  })

  return <nav>{linkElement}</nav>
}

export default NavBar
