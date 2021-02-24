import React from "react";
import ImageGallery from 'react-image-gallery';

import img_1 from '../assets/img/S21.jpg';
import img_2 from '../assets/img/S20.jpg';
import img_3 from '../assets/img/2.jpg';
import img_4 from '../assets/img/honor_watch.jpg';
import img_5 from '../assets/img/mts-S-watch-990х290.png';

const images = [
  {
    original: img_1,
  },
  {
    original: img_2,
  },
  {
    original: img_3,
  },
  {
    original: img_4,
  },
  {
    original: img_5,
  },
  
];

const Slider = React.memo(function Slider() {
  return (
    <ImageGallery items={images} 
                  showBullets={true}
                  showThumbnails={false}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  autoPlay={true} 
    />
  )
})

export default Slider;