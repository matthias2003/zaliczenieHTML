import axios from "axios";

export const getMenu = async () => {
    return axios.get("https://zaliczenie-html-a7d7.vercel.app")
}

export const getItem = async (val) => {
    try {
       return axios.get(`https://zaliczenie-html-a7d7.vercel.app/item/${val}`)
    } catch (err) {
        return "Nie mamy tego w menu"
    }
}