import axios from 'axios';

const BASE_URL = "http://localhost:4000";

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': '*',
    }
}

export const requestGetMethod = async (uri) => {
    try {
        return await axios.get(
            BASE_URL + uri,
            options
        );
    } catch (err) {
        console.error(err);
    }
}

