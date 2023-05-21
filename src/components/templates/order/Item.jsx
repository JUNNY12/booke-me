import { formatDate } from '@/utils';
import { Button } from '@/components/elements';
import { useWidth } from '@/hooks';
export const Item = ({ index, setShowDetail }) => {
    const width = useWidth();

    const handleShowDetail = () => {
        setShowDetail(true);
    };

    const date = new Date();
    const now = formatDate(date.toUTCString());

    return (
        <section>
            {width > 640 && (
                <div className="flex justify-between text-center mb-6">
                    <div className="w-[10%]">{index + 1}</div>
                    <div className="w-[20%]">3 Items</div>
                    <div className="w-[25%]">{now}</div>

                    <div className="w-[20%]  text-green-600 font-semibold">
                        Delivered
                    </div>
                    <div className="w-[25%]">
                        <Button
                            onClick={handleShowDetail}
                            className={` bg-pink-600 text-white-50 p-1 rounded-sm `}
                        >
                            View Details
                        </Button>
                    </div>
                </div>
            )}

            {width < 640 && (
                <div className=" flex justify-between mb-6 border-b border-white-400 pb-3">
                    <div className="">
                        <div className=" mb-3 font-semibold">3 Items</div>
                        <div className="">{now}</div>
                    </div>

                    <div>
                        <div className="mb-3 text-green-600 font-bold">
                            Success
                        </div>
                        <div className="">
                            <Button
                                onClick={handleShowDetail}
                                className={` bg-pink-600 text-white-50 p-1 rounded-sm `}
                            >
                                View Details
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
