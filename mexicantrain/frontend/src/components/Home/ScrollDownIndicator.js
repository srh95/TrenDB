import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const ScrollDownIndicator = () => {

    return(
        <div style={{ textAlign: 'center', marginTop: '-55px' }}>
            <p style={{ marginTop: '-55px', fontSize: '16px' }}> Learn more </p>
            <IoIosArrowDown style={{ fontSize: '24px', marginTop: '-10px', color: '#354c9c', strokeWidth: '4'}} />
        </div>
    );
};

export default ScrollDownIndicator;