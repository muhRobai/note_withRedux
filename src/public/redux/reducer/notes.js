

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    totalPage:0,
    searchCategory:false
}

// create a reducer for getting network from RESTful API
export default notes = (state = initialState, action) => {
    switch(action.type){
        case 'GET_NOTES_PENDING': // in case when loading get data
            return {
                isLoading: true
            }
        case 'GET_NOTES_REJECTED': // in case error network/else
            return {
                isLoading: false,
                isError: true,
            }
        case 'GET_NOTES_FULFILLED': // in case successfuly get data
            return {
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
                totalpage: action.payload.data.totalPage
            }
        case 'POST_NOTE_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'POST_NOTE_REJECTED':
            return{
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'POST_NOTE_FULFILLED':
            return{
                ...state,
                isLoading: false,
                data: action.payload.data.data,
                totalpage: action.payload.data.totalPage
            }
        case 'UPDATE_NOTE_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'UPDATE_NOTE_REJECTED':
            return{
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'UPDATE_NOTE_FULFILLED':
            return{
                ...state,
                isLoading: false,
                data: action.payload.data.data
            }
        case 'DELETE_NOTE_PENDING':
            return{
                ...state,
                isLoading:true
            }
        case 'DELETE_NOTE_REJECTED':
            return{
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'DELETE_NOTE_FULFILLED':
            return{
                ...state,
                isLoading: false,
                data: action.payload.data.data
            }
        case 'SEARCH_NOTE_PENDING':
            return{
                ...state,
                isLoading:true
            }
        case 'SEARCH_NOTE_REJECTED':
            return{
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'SEARCH_NOTE_FULFILLED':
            return{
                ...state,
                isLoading: false,
                data: action.payload.data.data,
                totalpage: 1
                
            }
        case "PAGE_NOTES_PENDING": 
        
        return {
            ...state,
            Loading: true
        }
        case "PAGE_NOTES_REJECTED": 
        return {
            ...state,
            Loading: false,
            isError: true
        }
        case "PAGE_NOTES_FULFILLED":
        return {
            ...state,
            Loading: false,
            data: state.data.concat(action.payload.data.data),
            totalpage: action.payload.data.totalPage
        }
        case "GET_NOTEbyCATEGORY_PENDING":
            return{
                ...state,
                isLoading:true
            }
        case "GET_NOTEbyCATEGORY_REJECTED":
            return{
                ...state,
                isLoading: false,
                isError: true,
            }
        case "GET_NOTEbyCATEGORY_FULFILLED":
            return{
                ...state,
                isLoading: false,
                searchCategory: true,
                data: action.payload.data.data,
                totalpage: action.payload.data.totalPage
            }

        default:
            return state;
    }
}