import React from 'react';

const Footer = () => {
    return (
<footer>
    <p className='text-center my-2'>copyright <small >{(new Date().getFullYear())}</small><span/></p>
</footer>
    );
};

export default Footer;