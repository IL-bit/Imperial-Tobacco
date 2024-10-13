import './header.scss';
import './media.scss';
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
                <div className="
                    col-xxl-2 offset-xxl-5
                    col-xl-2 offset-xl-5
                    col-lg-4 offset-lg-4
                    col-md-4 offset-md-4
                    col-sm-6 offset-sm-3 
                    col-xs-6 offset-xs-3 
                    text-center 
                    align-self-center">
                    <img src={logoSvg} alt="logo" />
                </div>
                <div className="
                    col-xxl-1 offset-xxl-4
                    col-xl-1 offset-xl-4
                    col-lg-1 offset-lg-3
                    col-md-2 offset-md-2
                    col-sm-2 offset-sm-1 
                    col-xs-2 offset-xs-1 
                    text-center 
                    align-self-center">
                    <button className={`burger ${isOpen ? 'bg2' : 'bg1'}`} onClick={handleToggle}></button>
                </div>
            </div>
            <PopUp/>
        </>

    )
}
export default Header;