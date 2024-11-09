import "./journal-cards.scss";
import './media.scss';
import { useEffect } from 'react';
import backSvg from '../img/back.svg';
import nextSvg from '../img/next.svg';
import { changePage, nextPage, prevPage } from '../../../actions.js';
import { FETCHDATAREQUEST } from '../../../middleware.js';
import { useDispatch, useSelector } from 'react-redux';

const JournalCards = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    
    const offset = state.value;
    useEffect(() => {
        const fetchData = async () => {
            // Проверяем наличие данных в localStorage
            const storedData = JSON.parse(localStorage.getItem('data'));
            const now = new Date();

            if (!storedData || !storedData[`offset_${offset}`]) {
                // Если данных нет, выполняем запрос на сервер
                dispatch(FETCHDATAREQUEST(offset));
            } else {
                const { timestamp, data } = storedData[`offset_${offset}`];

                // Проверяем, не истек ли срок действия данных (1 день)
                const expiryDate = new Date(timestamp);
                const isExpired = (now - expiryDate) > 86400000; // 1 день в миллисекундах

                if (isExpired) {
                    // Если данные устарели, удаляем их из localStorage
                    localStorage.removeItem(`offset_${offset}`);
                    dispatch(FETCHDATAREQUEST(offset)); // Запрашиваем новые данные
                } else {
                    // Если данные актуальны, можем их использовать
                    console.log(data); // Здесь можно обработать данные
                }
            }
        };
        
        fetchData();
    }, [offset, dispatch]);

    const handleButtonClick = (newValue) => {
        dispatch(changePage(newValue));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleButtonBack = () => {
        dispatch(prevPage());
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleButtonNext = () => {
        dispatch(nextPage());
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [state.value]);

    // Получаем данные из localStorage
    const storedData = JSON.parse(localStorage.getItem('data'));
    const currentData = storedData ? storedData[`offset_${offset}`]?.data : null;
    return(
        <>
            {state.loading ? (
                <h1>Загрузка...</h1> // Если loading true, показываем сообщение о загрузке
            ) : (
                currentData && Object.keys(currentData).length > 0 ? (
                    <div id={`offset_${offset}`}>
                        {Object.keys(currentData).map(key => {
                            const { post_text, media_list, shortname } = currentData[key];
                            return (
                                <div id={key} key={key}>
                                    <img className="head" alt="#" src={media_list} />
                                    <div className="info">
                                        <h2>{shortname}<span>{post_text}</span></h2>
                                        <p>{post_text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>Нет данных для отображения.</p>
                )
            )}
            <div className="buttons">
                <button onClick={() => handleButtonBack()} id="back"><img src={backSvg} alt="#" /></button>
                {[...Array(9)].map((_, index) => (
                    <button key={index + 1} onClick={() => handleButtonClick(index + 1)} className={state.value === index + 1 ? 'active' : ''}>
                        {index + 1}
                    </button>
                ))}
                <button onClick={() => handleButtonNext()} id="next"><img src={nextSvg} alt="#" /></button>
            </div>
        </> 
    )
}

export default JournalCards;