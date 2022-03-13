import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [blogs, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch()
                .then(res => {
                    console.log(res);
                    if(!res.ok) {
                        throw Error('could not fetch the data for that resource!');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);        
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;