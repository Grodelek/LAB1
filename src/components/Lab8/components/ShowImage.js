import React, { useState } from 'react';
import '../styles/ShowImage.css';

function ShowImage() {
  const [show, setShow] = useState(false);

  const showImage = () => setShow(true);

  return (
    <div className="show-image-container">
      <button onClick={showImage}>Show Image</button>
      {show && <img src="/photo1.jpg" alt="Placeholder" />}
    </div>
  );
}

export default ShowImage;