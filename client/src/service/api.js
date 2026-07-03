import axios from 'axios';
const url = process.env.REACT_APP_API_URL;

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/api/login`, user) 
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/api/signup`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${url}/api/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}

export const payUsingPaytm = async (data) => {
    try {
        console.log('payment api');
        let response = await axios.post(`${url}/api/payment`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}
