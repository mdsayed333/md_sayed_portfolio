import React from 'react';

const Banner = () => {
    const backgroundImg = `https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/2020-09/programming.jpg`;
    return (
        <div style={{ backgroundImage: `url(${backgroundImg})`, height: '100vh',width: '100%', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
            <h2 className='text-primary'>This is Banner</h2>
            
        </div>
    );
};

export default Banner;