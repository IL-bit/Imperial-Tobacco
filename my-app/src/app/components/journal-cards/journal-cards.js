import "./journal-cards.scss";
import './media.scss';
import { useEffect } from 'react';
import backSvg from '../img/back.svg';
import nextSvg from '../img/next.svg';
import { changePage, nextPage, prevPage } from '../../../actions.js';
import { FETCHDATAREQUEST } from '../../../middleware.js';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const JournalCards = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    
    // Как будет пример входных данных, настроить их
    const offset = state.value;
    const someField = Cookies.get(`${offset}_someField`);
    useEffect(() => {
        const fetchData = () => {
            if (!someField) {
                dispatch(FETCHDATAREQUEST(offset));
            }
        };
        fetchData();
    }, [offset, dispatch, someField]);



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
    return(
        <>
            {state.value === 1 && (
                state.loading ? (
                    <h1>Загрузка...</h1> // Если loading true, показываем сообщение о загрузке
                ) : (
                    <div id="1">
                        <div id="card_1">
                            <img className="head" alt="#" src={Cookies.get(`${offset}_img`)}/>
                            <div className="info">
                                <h2>{Cookies.get(`${offset}_h2`)}<span>{Cookies.get(`${offset}_data`)}</span></h2>
                                <p>{Cookies.get(`${offset}_text`)}</p>
                            </div>
                        </div>
                    </div>
                )
            )}
            <div className="buttons">
                <button onClick={() => handleButtonBack()} id="back"><img src={backSvg} alt="#" /></button>
                <button onClick={() => handleButtonClick(1)} className={state.value === 1 ? 'active' : ''}>1</button>
                <button onClick={() => handleButtonClick(2)} className={state.value === 2 ? 'active' : ''}>2</button>
                <button onClick={() => handleButtonClick(3)} className={state.value === 3 ? 'active' : ''}>3</button>
                <button onClick={() => handleButtonClick(4)} className={state.value === 4 ? 'active' : ''}>4</button>
                <button onClick={() => handleButtonClick(5)} className={state.value === 5 ? 'active' : ''}>5</button>
                <button onClick={() => handleButtonClick(6)} className={state.value === 6 ? 'active' : ''}>6</button>
                <button onClick={() => handleButtonClick(7)} className={state.value === 7 ? 'active' : ''}>7</button>
                <button onClick={() => handleButtonClick(8)} className={state.value === 8 ? 'active' : ''}>8</button>
                <button onClick={() => handleButtonClick(9)} className={state.value === 9 ? 'active' : ''}>9</button>
                <button onClick={() => handleButtonNext()} id="next"><img src={nextSvg} alt="#" /></button>
            </div>

        </> 
    )
}

export default JournalCards;