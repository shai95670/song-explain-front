import axios from 'axios';

const makeGeniousRequest = async (method, path, data={}) => {
    const response = await axios({
        method,
        url: `http://localhost:3001/genious/${path}`,
        data
    });
    return response.data;
};

export const HttpService = {
  makeGeniousRequest  
};