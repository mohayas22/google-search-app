import axios from "axios";

const BASE_URL = " https://www.googleapis.com/customsearch/v1"
const params = {
    key:'AIzaSyCvyWYj6xJQdI94wMSBOXnrsdLmOhOL8IA',
    cx:'544e64b92795141e9'
}


export const fetchDataFromApi = async  (payload) => {
    const {data} = await axios.get(BASE_URL,{
        params:{...params , ...payload}
    })
    return data;
};
