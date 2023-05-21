import FormContext from '@/context/FormContext';
import { useContext } from 'react';

export const useFormContext = () => {
    const context = useContext(FormContext);

    if (context === undefined) {
        throw new Error('useFormContext must be used within a FormProvider');
    }

    return context;
};
