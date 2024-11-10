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
            if (!state[`dataList_${offset}`]) { // Проверяем, есть ли данные для текущей страницы
                dispatch(FETCHDATAREQUEST(offset));
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
    
    const isMobile = window.innerWidth <= 767;
    const buttonCount = isMobile ? 5 : 9;
    return(
        <>
            {state.loading ? (
                <h1 style={{ color: "#fff" }}>Загрузка...</h1> // Если loading true, показываем сообщение о загрузке
            ) : (
                <>
                    {state[`dataList_${offset}`] && state[`dataList_${offset}`].length > 0 ? (
                        state[`dataList_${offset}`].map(item => (
                            <div id={item.id} key={item.id}>
                                {item.media_list && <img className="head" alt="#" src={item.media_list} />}
                                <div className="info">
                                    <h2>{item.shortname}<span>{item.post_text}</span></h2>
                                    <p>{item.post_text}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ color: "#fff" }}>Нет данных для отображения.</p>
                    )}
                </>
            )}
            <div className="buttons">
                <button onClick={() => handleButtonBack()} id="back"><img src={backSvg} alt="#" /></button>
                {[...Array(buttonCount)].map((_, index) => (
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