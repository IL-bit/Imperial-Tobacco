import Cookies from 'js-cookie';
const url = 'http://79.174.93.19/api/v1';

export const SENDFORM = (formData) => async (dispatch) => {
    dispatch({ type: 'SENDFORMSTART' });
    try {
        const response = await fetch(`${url}/feedback`, {
            method: 'POST',
            mode: 'no-cors',
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
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        // Проверяем, что data является массивом
        if (Array.isArray(data)) {
            // Создаем объект для хранения данных
            const now = new Date().toISOString(); // Текущая дата в формате ISO
            const storageObject = {
                [`offset_${offset}`]: {
                    timestamp: now, // Добавляем временную метку получения данных
                    data: {} // Храним сами данные в под-объекте
                }
            };

            // Перебираем массив и формируем нужную структуру
            data.forEach(item => {              
                storageObject[`offset_${offset}`].data[`id_${item.id}`] = {
                    post_text: item.post_text,
                    media_list: item.media_list,
                    shortname: item.shortname
                };
            });

            // Записываем объект в localStorage
            localStorage.setItem('data', JSON.stringify(storageObject));
            
        }
    } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
        throw new Error('Network response was not ok');
    }
};