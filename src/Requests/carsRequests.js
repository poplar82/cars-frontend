import axios from 'axios';

export const getAllCars = () => {
    return axios.get("http://cars-app2.herokuapp.com/cars");
}
export const getColorCars = color => {
    return axios.get(`http://cars-app2.herokuapp.com/cars/color/${color}`);
}
