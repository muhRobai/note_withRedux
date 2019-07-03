 // import axios for getting data from API
import axios from 'axios';
let ip = 'http://192.168.100.17:3001/notes';

// export action that get notes
export const getNotes = () => {
    return {
        type: 'GET_NOTES',
        payload: axios.get(ip)
    }
}

export const postNotes = () =>{
	return{
		type:'POST_NOTE',
		payload: axios.get(ip)
	}
}

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