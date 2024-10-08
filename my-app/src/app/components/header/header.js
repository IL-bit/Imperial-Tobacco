import './header.scss';
import logoSvg from '../img/header_logo.svg';

const Header = () => {
    return (
        <div className="row header">
            <div className="col-xxl-2 offset-5 text-center align-self-center">
                <img src={logoSvg} alt="logo" />
            </div>
            <div className="col-xxl-1 offset-4 text-center align-self-center">
                <button className="burger"></button>
            </div>
        </div>
    )
}
export default Header;