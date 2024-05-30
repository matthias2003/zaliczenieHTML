import axios from "axios";

export const getMenu = async () => {
    return axios.get("http://localhost:3001")
}

export const getItem = async (val) => {
    try {
       return axios.get(`http://localhost:3001/item/${val}`)
    } catch (err) {
        return "Nie mamy tego w menu"
    }
}