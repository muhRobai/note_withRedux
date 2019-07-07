 // import axios for getting data from API
import axios from 'axios';
let ip = 'http://192.168.43.180:3001/categories';
// let ip = 'http://192.168.100.17:3001/categories';

// export action that get notes

export const getCategory = () => {
	return {
		type: 'GET_CATEGORY',
		payload: axios.get(ip)
	}
}

export const postCategory = (eee) =>{
	return {
		type: 'POST_CATEGORY',
		payload: axios.post(ip,{category: eee.category, image: eee.image})
	}
}

export const deleteCategory = (id) =>{
	return{
		type: 'DELETE_CATEGORY',
		payload: axios.delete(`${ip}/${id}`)
	}
}

export const getNotebyCateory = (search) =>{
	return {
		type: 'GET_NOTEbyCATEGORY',
		payload: axios.get(`${ip}?search=${search}`)
	}
}

// export const deleteCategory = (data) =>{
// 	return{
// 		type: 'DELETE_CATEGORY',
// 		payload : axios.delete('http://192.168.100.17:3001/categories/',{data.id})
// 	}
// }

// export const updateNote = (id) => {
//     return {
//         type: 'GET_NOTES',
//         payload: axios.get('https://randomuser.me/api/id)
//     }
// }

// export const getCategory = () => {
//     return {
//         type: 'GET_NOTES',
//         payload: axios.get('https://randomuser.me/api?results=10')
//     }
// }