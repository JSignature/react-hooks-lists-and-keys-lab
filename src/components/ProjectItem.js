import React from 'react'

function ProjectItem({ id, name, about, technologies }) {
  // {
  //   console.log(id)
  //   console.log(about)
  //   console.log(technologies)
  // }

  const technology = technologies.map(element => {
    // console.log(element)
    return <span key={element}>{element}</span>
  })

  return (
    <div id={id} className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technology}</div>
    </div>
  )
}

export default ProjectItem
