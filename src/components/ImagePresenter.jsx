import React from 'react';
const ImagePresenter = ({image, altText}) => { //props way to receive something from parent to child
    return ( 
        <div>
            <p>I'm in the div!</p>
            <img src={image} alt={altText} />
        </div>
     );
}

export default ImagePresenter;