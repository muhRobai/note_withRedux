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

export const postNotes = (dataNote) =>{
	return{
		type:'POST_NOTE',
		payload: axios.post(ip,{title: dataNote.title, note: dataNote.note, id_category: dataNote.id_category})
	}
}

export const updateNotes = (id, data) =>{
	return{
		type: 'UPDATE_NOTE',
		payload: axios.patch(`${ip}/${id}`,data)

	}
}

export const deleteNotes = (id) =>{
	return{
		type: 'DELETE_NOTE',
		payload: axios.delete(`${ip}/${id}`)
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