
const initialState = {
    number: 10,
    data: [],
    results: [],
    isLoading: false,
    isError: false,
}

// create a reducer for getting network from RESTful API
export default category = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CATEGORY_PENDING': // in case when loading get data
            return {
                isLoading: true
            }
        case 'GET_CATEGORY_REJECTED': // in case error network/else
            return {
                isLoading: false,
                isError: true,
            }
        case 'GET_CATEGORY_FULFILLED': // in case successfuly get data
            return {
                isLoading: false,
                isError: false,
                data: action.payload.data.values
            }
        case 'POST_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: false
            }
        case 'POST_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'POST_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: true,
                data: [action.payload.data.values].concat(...state.data)
            }
        case 'DELETE_CATEGORY_PENDING':
            return{
                isLoading: false
            }
        case 'DELETE_CATEGORY_REJECT':
            return{
                isLoading: false,
                isError: true
            }
        case 'DELETE_CATEGORY_FULFILLED':
            console.warn("masuk delete")
            return{
                isLoading: true,
                data: action.payload.data.values
            }
        case 'UPPDATE_CATEGORY_PENDING':
            return{
                isLoading: false
            }
        case 'UPPDATE_CATEGORY_REJECT':
            return{
                isLoading: false,
                isError: true
            }
        case 'UPPDATE_CATEGORY_FULFILLED':
            return{
                isLoading: true,
                data: action.payload.data.values
            }
        // example when updating/deleting and not getting all notes again
        // case 'UPDATE_NOTE_FULFILLED':
        //     return {
        //         isLoading: false,
        //         isError: false,
        //         data: {
        //             ...state, // get all previous state

                    // deleting from array
                    // data: state.data.filter(note => {
                        // note.login.username !== action.payload.data // when deleting
                    // })

                    // updating array
                    // data: state.data.map((item, index) => {
                    //     if(item.login.username === action.payload.data.login.username ){
                    //         item = action.paypload.data // change note to newest one
                    //     }
                    //     return item;
                    // })
            //     }
            // }

        default:
            return state;
    }
}