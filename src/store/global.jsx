const SET_LOADING = "global/SET_LOADING";
const SET_USER_DATA = "global/SET_USER_DATA";
const SET_CONFIRM = 'global/SET_CONFIRM';

export const SetLoading = (loading) => ({
    type:SET_LOADING,
    payload:{
        loading
    }
})
export const SetUserData = (userdata) => ({
    type:SET_USER_DATA,
    payload:{
        userdata
    }
})
export const SetConfirm = (popup_data) => ({
    type:SET_CONFIRM,
    payload:{
        popup_data
    }
})


const initState = {
    loading: 0,
    user_data: '',
    confirm:0
}

const GlobalReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            }
        case SET_USER_DATA:
            return {
                ...state,
                user_data: action.payload.userdata
            }
        case SET_CONFIRM:
            return {
                ...state,
                confirm: action.payload.popup_data
            }
        default:
            return state;
    }
}
export default GlobalReducer;