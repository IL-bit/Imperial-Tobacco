import './product.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Divider from '../divider/divider';
import originalSvg from '../img/product_original.svg';
import chestSvg from '../img/main_chest.svg';
import chestSvg2 from '../img/product_chest.svg';
import rubySvg from '../img/product_ruby.svg';

const Product = () => {
    return (
        <div className="container-fluid" id="product">
            <Header/>
            <div className="row main_section1">
                <div className="col-xxl-6">
                    <div className="game_board text-center">
                    <h2>Original</h2>
                    <p>Captain Jack Original - это ароматные ноты<br/>шоколада и деликатный вкус, полученный<br/>благодаря смягченной мешке<br/>качественных табаков Вирджиния.</p>
                    </div>
                    <img src={chestSvg} alt="chest" className="chest"/>                    
                </div>
                <div className="col-xxl-5">
                    <img src={originalSvg} alt="original"/>
                </div>
            </div>
            <Divider/>
            <div className="row main_section2">
                <div className="col-xxl-6">
                    <div className="game_board text-center">
                    <h2>Ruby</h2>
                    <p>Captain Jack Ruby – это сбалансированная<br/>классика с лёгким ароматом вишни.<br/>Выдержанный табак Вирджиния ненавязчиво<br/>оттеняется благородными сладкими нотами<br/>с привкусом миндальной косточки.</p>
                    </div>
                    <img src={chestSvg2} alt="chest" className="chest"/>                    
                </div>
                <div className="col-xxl-5">
                    <img src={rubySvg} alt="ruby"/>
                </div>
            </div>
            <Divider/>
            <Footer/>
        </div>
    )
}
export default Product;