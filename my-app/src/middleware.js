import Cookies from 'js-cookie';
const url = 'http://79.174.93.19/api/v1';

export const SENDFORM = (formData) => async (dispatch) => {
    dispatch({ type: 'SENDFORMSTART' });
    try {
        const response = await fetch(`${url}/feedback`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch({ type: 'SENDFORMSUCCESS', payload: data });
        Cookies.set('wasForm', 'true', { expires: 1 });
    } catch (error) {
        dispatch({ type: 'SENDFORMFAILURE', payload: error.message });
    }
};
export const FETCHDATAREQUEST = (offset) => async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_START' });
    try {
        const response = await fetch(`${url}/journal/${offset}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error();
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
        throw new Error();
    }
};