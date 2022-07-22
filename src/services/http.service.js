import axios from 'axios';

const makeGeniousRequest = async (method, path, data={}) => {
    const response = await axios({
        method,
        url: `https://song-explain-back.herokuapp.com/genious/${path}`,
        data
    });
    return response.data;
};

export const HttpService = {
  makeGeniousRequest  
};