import React from 'react'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const GalleryViewer = ({ images }) => {
  const galleryImages = images.map(({ node }) => node.childImageSharp);
  // `images` is an array of objects with `thumb` and `full`
  return <Gallery images={galleryImages} />
}

export default GalleryViewer;
