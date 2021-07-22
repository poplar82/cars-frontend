import axios from 'axios';

export const getCarById = id => {
    return axios.get(`http://cars-app2.herokuapp.com/cars/${id}`);
}
export const addCar = car => {
    return axios.post(`http://cars-app2.herokuapp.com//cars/`, car);
}
export const editCar = car => {
    return axios.put(`http://cars-app2.herokuapp.com//cars/`, car);
}

export const deleteCarById = id => {
    return axios.delete(`http://cars-app2.herokuapp.com/cars/${id}`);
}
