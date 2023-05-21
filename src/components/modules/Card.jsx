import React from 'react';

const Card = ({ children, className, styles }) => {
    return (
        <article
            style={{ styles }}
            className={`${className} h-[470px] p-3 cursor-pointer relative bg-white-50
     rounded-md object-cover shadow-md shadow-black-400
     hover:scale-90 transition duration-500 ease-in-out
     hover:transition hover:duration-500 hover:ease-in-out
     `}
        >
            {children}
        </article>
    );
};

export default Card;
