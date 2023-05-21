import { Billing, FormInput, Shipping } from '.';
import React from 'react';
import { useFormContext } from '@/hooks';
import { Button, Typography } from '@/components/elements';
import ProgressBar from '@ramonak/react-progress-bar';

const AccountSetup = () => {
    const {
        step,
        setStep,
        data,
        canSubmit,
        title,
        disableNext,
        disablePrev,
        prevHide,
        nextHide,
        numSteps,
        submitHide,
    } = useFormContext();

    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    const progress = Math.round((step / numSteps) * 100); // Calculate percentage of completion

    const content = (
        <div className="mt-4">
            <form
                className="w-[400px] bg-pink-600 text-white-50 mobileXL:w-[300px] rounded-md h-max mt-4
            bg-[#ffffff88] shadow-md  shadow-black-800 p-4 "
            >
                <div>
                    <Typography
                        variants={`2`}
                        className={` text-2xl font-bold text-white-50 text-center mb-1 `}
                    >
                        {title[step]}
                    </Typography>
                </div>
                <div>
                    <Typography
                        variants={1}
                        className={`text-center text-lg text-white-50 mb-2`}
                    >
                        Step {step} of {numSteps}
                    </Typography>
                </div>

                <div className="mb-4">
                    <ProgressBar
                        isLabelVisible={false}
                        completed={progress}
                        baseBgColor="#ffffff"
                        bgColor="#e58799"
                        height="10px"
                    />
                </div>

                <FormInput />

                <div className="flex justify-between">
                    <Button
                        className={`${prevHide} w-[90px] cursor-pointer me-8 bg-white-50  p-1 transition duration-500 ease-in-out
                        rounded-sm text-white-950 font-semibold  `}
                        type={`button`}
                        onClick={handlePrev}
                        disabled={disablePrev}
                    >
                        {' '}
                        Prev{' '}
                    </Button>

                    <Button
                        className={`${nextHide} w-[90px] text-white-950 bg-white-50 cursor-pointer  p-1 transition duration-500 ease-in-out
                         rounded-sm font-semibold ${
                             disableNext ? 'opacity-20' : ' opacity-100'
                         }  `}
                        type={`button`}
                        disabled={disableNext}
                        onClick={handleNext}
                    >
                        {' '}
                        Next{' '}
                    </Button>

                    <Button
                        className={`${submitHide} w-[90px] bg-white-50  p-1 transition duration-500 ease-in-out
                         rounded-sm text-white-950 font-semibold ${
                             !canSubmit ? 'opacity-20' : 'opacity-100'
                         } `}
                        type="submit"
                        disabled={!canSubmit}
                        onClick={handleSubmit}
                    >
                        {' '}
                        Submit{' '}
                    </Button>

                    {step === 0 && (
                        <Button
                            className={`bg-white-50 rounded-sm w-[90px] p-1 text-white-950`}
                        >
                            Skip
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );

    return content;
};

export default AccountSetup;
