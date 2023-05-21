import { useState } from 'react';

export const useForm = (initialData) => {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    return [data, handleChange, loading, setLoading];
};
