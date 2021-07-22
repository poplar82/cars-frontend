import axios from 'axios';

export const getAllCars = () => {
    return axios.get("http://cars-app2.herokuapp.com:8080/cars");
}
export const getColorCars = color => {
    return axios.get(`http://cars-app2.herokuapp.com:8080/cars/color/${color}`);
}
