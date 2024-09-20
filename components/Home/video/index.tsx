import React from 'react'

export function Video() {
  return (
    <div className='px-3 py-4 md:px-6 lg:px-12 bg-white'>
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/rNSIwjmynYQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className=''
      ></iframe>
    </div>
  )
}
