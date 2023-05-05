import { AiFillStar, AiOutlineStar } from "react-icons/ai"

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
                )
            })}
        </div>
    )
}
