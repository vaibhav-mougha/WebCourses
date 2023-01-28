import * as types from "./actiontypes"

const initialState = {
    alldata: null,
    massage: "",
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.REGISTRATION_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case types.REGISTRATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                massage: payload
            }

        case types.REGISTRATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
               
            }

        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                alldata: payload
            }

        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                alldata: null
            }


        default:
            return state
    }
}