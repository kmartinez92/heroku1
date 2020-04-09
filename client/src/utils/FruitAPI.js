import axios from 'axios';

export default {
	getFruit: () => {
		return axios.get('/api/fruit');
    },
    createFruit: data => {
        return axios.post('/api/fruit/', data)
    },
    addFruit: data => {
        return axios.put('/api/fruit/add', data)
    },
    minusFruit: data => {
        return axios.put('/api/fruit/minus', data)
    },
    deleteFruit: data => {
        return axios.post('/api/fruit/delete', data)
    }
	
};
