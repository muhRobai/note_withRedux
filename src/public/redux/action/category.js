 // import axios for getting data from API
import axios from 'axios';

// export action that get notes

export const getCategory = () => {
	return {
		type: 'GET_CATEGORY',
		payload: axios.get('http://192.168.100.17:3001/categories')
	}
}

export const postCategory = (eee) =>{

	return {
		type: 'POST_CATEGORY',
		payload: axios.post('http://192.168.100.17:3001/categories',{category: eee.category, image: eee.image})
	}
}

export const deleteCategory = (id) =>{
	console.warn(id)
	return{
		type: 'DELETE_CATEGORY',
		payload: axios.delete(`http://192.168.100.17:3001/categories/${id}`)
	}
}

export const updateCategory = () =>{
	return{
		type: 'UPDATE_CATEGORY',
		payload: axios.patch()
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