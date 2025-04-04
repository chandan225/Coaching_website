import React from 'react';

// Import images using ES6 import statements
import img1 from './assets/IMG-20250331-WA0015.jpg';
import img2 from './assets/IMG-20250331-WA0016.jpg';
import img3 from './assets/IMG-20250331-WA0018.jpg';
import img4 from './assets/IMG-20250331-WA0021.jpg';
import img5 from './assets/IMG-20250331-WA0026.jpg';
import img6 from './assets/IMG-20250331-WA0029.jpg';

const imageObj = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 }
];

export default function Gallery() {
    return (
        <div className="gallery grid grid-cols-3 gap-2 m-3  bg-white/20 p-3 rounded-xl ">
            {imageObj.map((image, index) => (
                <div key={index} className="image-container">
                    <img  src={image.img} alt={`Gallery Image ${index + 1}`} className="w-full h-[42.6px] rounded" />
                </div>
            ))}
        </div>
    );
}