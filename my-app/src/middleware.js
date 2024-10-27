import Cookies from 'js-cookie';
const url = 'https://your-api-endpoint.com/data';

export const SENDFORM = (formData) => async (dispatch) => {
    dispatch({ type: 'SENDFORMSTART' }); // Устанавливаем статус отправки
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch({ type: 'SENDFORMSUCCESS', payload: data }); // Успешно отправлено
    } catch (error) {
        dispatch({ type: 'SENDFORMFAILURE', payload: error.message }); // Обработка ошибки
    }
};
export const FETCHDATAREQUEST = (offset) => async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_START' }); // Устанавливаем статус загрузки
    try {
        const response = await fetch(`${url}?offset=${offset}`, { // Добавляем offset в URL, если это необходимо
            method: 'GET', // Метод GET для получения данных
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }); // Успешный ответ от сервера
        
        // Проверяем, есть ли поле someField и сохраняем его в cookies
        if (data.someField) {
            Cookies.set(`${offset}_someField`, data.someField, { expires: 1 });
        }
    } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message }); // Обработка ошибки
    }
};