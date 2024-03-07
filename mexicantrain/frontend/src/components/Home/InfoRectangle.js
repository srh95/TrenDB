import React from 'react';


const InfoRectangle = ({ img, largeText, smallText }) => {
    return (
        <div className="rectangle">
            <div className="content">
                <img src={img} alt={largeText} className="image" />
                <h2 className="large-text">{largeText}</h2>
                <p className="small-text">{smallText}</p>
            </div>
        </div>
    );
};

export default InfoRectangle;