import React, { Component } from 'react';
import {Container, Accordion} from 'react-bootstrap';
import Header from '../componants/common/header';
import Footer from '../componants/common/footer';
import {FaqData} from '../componants/common/common-data'

export default class Faq extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <br/>
                <br/>
                <br/>
                <br/>
                <section className="faq-section">
                    <Container>
                    <h1 className="heading-main">FAQs</h1>
                   
                    <Accordion  flush>

                    {FaqData.map((Faq, i) =>
                    
                    <Accordion.Item eventKey={i}>
                        <Accordion.Header>{Faq.faqTitle}</Accordion.Header>
                        <Accordion.Body  dangerouslySetInnerHTML={{__html: Faq.faqDescription}}></Accordion.Body>
                    </Accordion.Item>
                    )}
                    </Accordion>
                    </Container>
                </section>
                <Footer></Footer>
         </>
        )
    }
}
