import './journal.scss';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import JournalCards from '../journal-cards/journal-cards.js';

const Journal = () => {
    return (
        <div className="container-fluid" id="journal">
            <Header/>
            <div className="row main justify-content-center">
                <div className="col-xxl-4">
                    <JournalCards/>                                 
                </div>
            </div>
            <div className="row divider"></div>
            <Footer/>
        </div>
    )
}

export default Journal;