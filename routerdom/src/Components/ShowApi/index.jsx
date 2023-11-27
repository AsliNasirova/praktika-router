import axios from 'axios';
import { useEffect, useState } from 'react';
function ShowApi() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const getProducts = async () => {
        const res = await axios.get("http://localhost:3000/product");
        setData(res.data);
        setIsLoading(false);
    };
    useEffect(() => {


        getProducts();
    }, []);

    return [data,getProducts]
}

export default ShowApi;