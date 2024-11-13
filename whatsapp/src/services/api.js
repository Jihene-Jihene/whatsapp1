import axios from "axios";

// CONSTANSTS ===> 
const URL = "https://server-for-whatsapp-service.onrender.com/";

export const addUser = async (data) => {


    try {
        await axios.post(`${URL}add`, data)

    } catch (e) {
        console.log("ERROR WHILE LOGIN :", e)
    }
}


export const getUser = async () => {
    try {
        let response = await axios.get(`${URL}user`);
        return response.data
    } catch (error) {
        console.log('Error while calling getUsers API ', error.message);
    }
}


export const setConversation = async (data) => {
    try {
        let response = await axios.post(`${URL}conversation/add`, data);
        return response.data
    } catch (error) {
        console.log('Error while calling conversation API ', error.message);
    }

}


export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${URL}conversation/get`, data);
        return response.data
    } catch (error) {
        console.log('Error while getting conversation API ', error.message);
    }

}

export const newMessage = async (data) => {
    try {
        let response = await axios.post(`${URL}message/add`, data);
        return response.data
    } catch (error) {
        console.log('Error while setting new message API ', error.message);
    }
}


export const getMessage = async (id) => {
    try {
        let response = await axios.get(`${URL}message/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error : get message API ', error.message);
    }
}

export const uploadFile = async (data) => {
    try {
        let response = await axios.post(`${URL}file/upload`, data);
        return response.data
    } catch (error) {
        console.log('Error while setting new message API ', error.message);
    }
}