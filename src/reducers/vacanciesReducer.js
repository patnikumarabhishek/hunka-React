import { vacanciesConstants } from "../constants/vacanciesConstants";

const defaultState = {
    status: 'UNINIT',
    vacanciesData: {},
    success: false
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case vacanciesConstants.VACANCIES_REQUEST: 
            return {
                ...state,
                status: 'PENDING'
            }
        case vacanciesConstants.VACANCIES_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                vacanciesData: action.res.vacancies,
                success: true
            }
        case vacanciesConstants.VACANCIES_FAILURE:
            return {
                ...state,
                success: false,
                message: action.error.message
            }

        default:
            return state
    }
}