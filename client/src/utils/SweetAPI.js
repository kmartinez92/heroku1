import axios from 'axios';

export default {
	getSweets: () => {
		return axios.get('/api/sweets');
	},
	createSweet: data => {
        return axios.post('/api/sweets/', data)
	},
	addSweet: data => {
        return axios.put('/api/sweets/add', data)
    },
    minusSweet: data => {
        return axios.put('/api/sweets/minus', data)
    },
    deleteSweet: data => {
        return axios.post('/api/sweets/delete', data)
    }
	
};


