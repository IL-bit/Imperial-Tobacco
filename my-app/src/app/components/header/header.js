import './header.scss';
import './media.scss';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../../../actions.js';
import PopUp from '../pop-up/pop-up.js';
import logoSvg from '../img/header_logo.svg';
import logoMobileSvg from '../img/header_logo2.svg';

const Header = () => {
    const isOpen = useSelector((state) => state.pop_up)
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(togglePopup());
    };

    return (
        <>
            <div className="row header">
                <img src={logoSvg} alt="logo" className="pc"/>
                <img src={logoMobileSvg} alt="logo" className="mobile"/>
                <button className={`burger ${isOpen ? 'bg2' : 'bg1'}`} onClick={handleToggle}></button>
            </div>
            <PopUp/>
            {isOpen ? <div id="overlay"></div> : <></>}
            
        </>

    )
}
export default Header;