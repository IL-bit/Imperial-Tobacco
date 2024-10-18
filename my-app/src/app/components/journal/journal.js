import './journal.scss';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Divider from '../divider/divider.js';
import JournalCards from '../journal-cards/journal-cards.js';

const Journal = () => {
    return (
        <div className="container-fluid" id="journal">
            <Header/>
            <div className="row main justify-content-center">
                <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 col-xs-12 align-items-center">
                    <JournalCards/>                                 
                </div>
            </div>
            <Divider/>
            <Footer/>
        </div>
    )
}

export default Journal;