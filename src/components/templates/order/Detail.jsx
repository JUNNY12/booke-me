import { formatCurrency } from "@/utils"

export const Detail = ({setShowDetail}) => {
    const handleShowDetail = () => {
        setShowDetail(prev => !prev)
    }
    return (
        <div className="w-[280px] h-max bg-white-50 p-2 pt-10 relative pb-4 z-20 shadow-md shadow-black-400 
        rounded-sm ">
            <div role="button" 
            onClick={handleShowDetail}
            className=" absolute right-2 top-1 bg-pink-600 w-8 h-8 rounded-full flex justify-center items-center font-bold text-white-50 ">X</div>
            <div className="mb-4 flex justify-between">
                <span> The Great Gatsby </span>
                <span> X1 </span>
                <span className="font-semibold"> {formatCurrency(20)} </span>
            </div>

            <div className="mb-4  flex justify-between">
                <span> The Great Gatsby </span>
                <span> X1 </span>
                <span className="font-semibold"> {formatCurrency(20)} </span>
            </div>

            <div className="mb-4  flex justify-between">
                <span> The Great Gatsby </span>
                <span> X1 </span>
                <span className="font-semibold"> {formatCurrency(20)} </span>
            </div>  


            <div className="border-t border-white-500 font-semibold">
                <span> Total: </span>
                <span >{formatCurrency(60)}</span>
            </div>
            
        </div>
    )
}