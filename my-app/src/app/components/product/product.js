import './product.scss';
import './media.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Divider from '../divider/divider';
import originalSvg from '../img/product_original.svg';
import original768Svg from '../img/original_768.svg';
import original375Svg from '../img/original_375.svg';
import chestSvg from '../img/main_chest.svg';
import chestSvg2 from '../img/product_chest.svg';
import rubySvg from '../img/product_ruby.svg';
import ruby768Svg from '../img/ruby_768.svg';
import ruby375Svg from '../img/ruby_375.svg';

const Product = () => {
    return (
        <div className="container-fluid" id="product">
            <Header/>
            <div className="row main_section1">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12">
                    <div className="game_board text-center">
                    <h2>Original</h2>
                    <p>Captain Jack Original - это ароматные ноты<wbr/>шоколада и деликатный вкус, полученный<wbr/>благодаря смягченной мешке<wbr/>качественных табаков Вирджиния.</p>
                    </div>
                    <img src={chestSvg} alt="chest" className="chest"/>                    
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12">
                    <img src={originalSvg} alt="original" className="original pc"/>
                    <img src={original768Svg} alt="original" className="original plan"/>
                    <img src={original375Svg} alt="original" className="original mob"/>
                </div>
            </div>
            <Divider/>
            <div className="row main_section2">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12">
                    <div className="game_board text-center">
                    <h2>Ruby</h2>
                    <p>Captain Jack Ruby – это сбалансированная<wbr/>классика с лёгким ароматом вишни.<wbr/>Выдержанный табак Вирджиния ненавязчиво<wbr/>оттеняется благородными сладкими нотами<wbr/>с привкусом миндальной косточки.</p>
                    </div>
                    <img src={chestSvg2} alt="chest" className="chest"/>                    
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12">
                    <img src={rubySvg} alt="ruby" className="ruby pc"/>
                    <img src={ruby768Svg} alt="ruby" className="ruby plan"/>
                    <img src={ruby375Svg} alt="ruby" className="ruby mob"/>
                </div>
            </div>
            <Divider/>
            <Footer/>
        </div>
    )
}
export default Product;