export const SENDFORM = (formData) => async (dispatch) => {
    dispatch({ type: 'SENDFORMSTART' }); // Устанавливаем статус отправки
    try {
        const response = await fetch('https://your-api-endpoint.com/submit', {
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