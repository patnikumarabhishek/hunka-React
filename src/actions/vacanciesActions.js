import { vacanciesConstants } from "../constants/vacanciesConstants";
import { vacanciesService } from "../services/vacanciesService";
export const vacanciesActions = {
    getVacanciesAction
};

function getVacanciesAction(token) {
    return dispatch => {
        dispatch(request(token));

        vacanciesService.getVacancies(token)
            .then(
                res => {
                    dispatch(success(res.data))
                },
                error => {
                    console.log(error)
                    dispatch(failure(error))
                }
            )
    }

    function request(token) {
        return {
            type: vacanciesConstants.VACANCIES_REQUEST,
            token
        }
    }

    function success(res) {
        return {
            type: vacanciesConstants.VACANCIES_SUCCESS,
            res
        }
    }

    function failure(error) {
        return {
            type: vacanciesConstants.VACANCIES_FAILURE,
            error
        }
    }
}