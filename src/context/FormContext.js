import { createContext, use, useEffect, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
    const title = {
        0: "Billing Information",
        1: "Billing Information",
        2: "Shipping Information",
        3: "Shipping Information"
    }

    const [step, setStep] = useState(0);
    const numSteps = 3

    const [data, setData] = useState({
        billFirstName: "",
        billLastName: "",
        billPhoneNumber: "",
        billEmail: "",
        billAddress: "",
        billCity: "",
        billState: "",
        billZip: "",
        sameAsBilling: false,
        shipFirstName: "",
        shipLastName: "",
        shipPhoneNumber: "",
        shipEmail: "",
        shipAddress: "",
        shipCity: "",
        shipState: "",
        shipZip: "",
    });


    useEffect(() => {
        if (data.sameAsBilling) {
            setData((prevData) => ({
                ...prevData,
                shipFirstName: data.billFirstName,
                shipLastName: data.billLastName,
                shipPhoneNumber: data.billPhoneNumber,
                shipEmail: data.billEmail,
                shipAddress: data.billAddress,
                shipCity: data.billCity,
                shipState: data.billState,
                shipZip: data.billZip,
            }))
        } else {
            setData((prevData) => ({
                ...prevData,
                shipFirstName: "",
                shipLastName: "",
                shipAddress: "",
                shipCity: "",
                shipState: "",
                shipZip: "",
            }))
        }
    }, [data.sameAsBilling])

    const handleChange = (e) => {

        const type = e.target.type
        const name = e.target.name

        const value = type === 'checkbox'
            ? e.target.checked
            : e.target.value

        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const {
        sameAsBilling,
        ...requiredInputs } = data
    //checkks if all required inputs are filled
    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) &&
        //converts object to array and checks for the last index
        step === Object.keys(title).length - 1

    //checks if all billing inputs are filled
    const canNextPage = Object.keys(data).slice(0, 4)
        .filter(key => key.startsWith('bill')).map(key => data[key]).every(Boolean)

    const canNextPage2 = Object.keys(data).slice(4, 8)
        .filter(key => key.startsWith('bill')).map(key => data[key]).every(Boolean)

    const canNextPage3 = Object.keys(data).slice(9, 12)
        .filter(key => key.startsWith('ship')).map(key => data[key]).every(Boolean)




    //disables prev and next buttons
    const disablePrev = step === 0
    const disableNext = (
        (step === Object.keys(title).length - 1) || (step === 0 && !canNextPage) || (step === 1 && !canNextPage2) || (step === 2 && !canNextPage3)

    )

    //hides prev and next buttons
    const prevHide = step === 0 && 'hidden'
    const nextHide = step === Object.keys(title).length - 1 && 'hidden'
    const submitHide = step !== Object.keys(title).length - 1 && 'hidden'

    return (
        <FormContext.Provider value={{
            title, step, setStep, data, setData, canSubmit, handleChange,
            disableNext, disablePrev, prevHide, nextHide, submitHide, numSteps
        }} >
            {children}
        </FormContext.Provider>
    )
}

export default FormContext;