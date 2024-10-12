import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../../../actions.js';
import PopUp from '../pop-up/pop-up.js';
import logoSvg from '../img/header_logo.svg';

const Header = () => {
    const isOpen = useSelector((state) => state.pop_up)
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(togglePopup());
    };

    return (
        <>
            <div className="row header">
                <div className="col-xxl-2 col-xl-2 offset-5 text-center align-self-center">
                    <img src={logoSvg} alt="logo" />
                </div>
                <div className="col-xxl-1 col-xl-1 offset-4 text-center align-self-center">
                    <button className={`burger ${isOpen ? 'bg2' : 'bg1'}`} onClick={handleToggle}></button>
                </div>
            </div>
            <PopUp/>
        </>

    )
}
export default Header;