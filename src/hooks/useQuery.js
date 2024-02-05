import axios from "axios";
import { useEffect, useState } from "react";

const useQuery = (url, refetch) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            console.log('response from useQuery', response)
            const data = response.data;
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetch = async () => {
            axios.get(url).then((response) => {
                setData(response.data);
                setLoading(false);
                setError('');
            }).catch((error) => {
                setData(null);
                setError(error.message);
                setLoading(false);
            });
        }
        fetch();
    }, [url, refetch]);

    return { data, error, loading, getData };

}

export { useQuery };