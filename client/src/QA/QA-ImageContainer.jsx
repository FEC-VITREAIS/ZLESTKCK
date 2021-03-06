import React, {useState} from 'react'

const ImageContainer = function ({arrayOfFiles, defaultThumbnail}) {

  return (
    <div className="QAimage">
      <img
      className="QAimage_thumbnail"
      src={arrayOfFiles[0] || defaultThumbnail}
      alt="Thumbnail answer image 1" />
      <img
      className="QAimage_thumbnail"
      src={arrayOfFiles[1] || defaultThumbnail}
      alt="Thumbnail answer image 2" />
      <img
      className="QAimage_thumbnail"
      src={arrayOfFiles[2] || defaultThumbnail}
      alt="Thumbnail answer image 3" />
      <img
      className="QAimage_thumbnail"
      src={arrayOfFiles[3] || defaultThumbnail}
      alt="Thumbnail answer image 4" />
      <img
      className="QAimage_thumbnail"
      src={arrayOfFiles[4] || defaultThumbnail}
      alt="Thumbnail answer image 5" />

    </div>
  )
}

export default ImageContainer