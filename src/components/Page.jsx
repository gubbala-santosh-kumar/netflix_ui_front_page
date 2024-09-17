import React from 'react'
import Nav from './Nav_component/Nav'
import Text from './Text_component/Text'
import GetStart from './Get_started_component/GetStart';
import Gener from './Gener_component/Gener';
import './Page.css'
import Card from './Cards_component/Card';
import OfferCard from './Offer_card_component/OfferCard';
import Question from './Questions_component/Question';
import Footer from './Footer_component/Footer';
function Page() {
    return (
        <div className='Page-div'>
            <div className="pagesub-ctr">
            <Nav/>
            <center>
                <Text/>
                <GetStart/>
            </center>
            </div>
            <Gener/>
            <Card/>
            <OfferCard/>
            <Question/><br /><br /><br />
            <center>
            <GetStart/>
            </center><br />
            <Footer/>
        </div>
    )
}

export default Page;
