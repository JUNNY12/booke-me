import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useState } from 'react';

export const Rating = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => {
                return (
                    <span key={index}>
                        {rating > index ? (
                            <span className=" text-yellow-400">
                                <AiFillStar />
                            </span>
                        ) : (
                            <span>
                                <AiOutlineStar />
                            </span>
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export const Rate = ({ onRateClick }) => {
    const [selectedRating, setSelectedRating] = useState(0);

    const handleRateClick = (index) => {
        //reset the rating if the same star is clicked twice
        if (selectedRating === index + 1) {
            setSelectedRating(0);
        }
        //update the rating if a different star is clicked
        else {
            setSelectedRating(index + 1);
        }

        //increment the rating if the star is clicked
        if (onRateClick) {
            onRateClick(index + 1);
        }
    };

    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => {
                return (
                    <span key={index} onClick={() => handleRateClick(index)}>
                        {selectedRating > index ? (
                            <span className="text-yellow-400">
                                <AiFillStar />
                            </span>
                        ) : (
                            <span>
                                <AiOutlineStar />
                            </span>
                        )}
                    </span>
                );
            })}
        </div>
    );
};
