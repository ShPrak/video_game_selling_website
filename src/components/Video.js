import React from 'react'

const Video = (props) => {
  return (
    <iframe width="560" height="315" src={props.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
}

export default Video