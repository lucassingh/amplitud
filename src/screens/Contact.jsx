import React from 'react'
import '../styles/contact.scss'
import { useTranslation } from 'react-i18next';
import Footer from '../components/footer/Footer';

const Contact = () => {

    const { t } = useTranslation("global");

    return (
        <section id="contact" className='contact-section'>
            <div className='container-section'>
                <div className='content'>
                    <div className='cont-header'>
                        <span className="title-section">{t('contact.titlepart1')} </span>
                        <span className="title-section part2">{t('contact.titlepart2')} </span>
                    </div>
                    <div className='cont-header'>
                        <span className="subtitle-section">{t('contact.subtitle1')} </span> <br />
                        <span className="subtitle-section part2">{t('contact.subtitle2')} </span>
                    </div>
                </div>
                <div className='content-data'>
                    <div className='contact-card'>
                        <span className='title-card'>{t('contact.title1')}</span><br /><span className='title-card'>{t('contact.title1b')}</span><br />
                        <span>
                            20379 W Country Club Dr. <br />
                            Suite 2238 <br />
                            Aventura, FL 33180
                        </span>
                    </div>
                    <div className='contact-card'>
                        <span className='title-card'>{t('contact.title2')}</span><br />
                        <span>+1-305-776-1667</span>
                    </div>
                    <div className='contact-card'>
                        <span className='title-card'>{t('contact.title3')}</span><br />
                        <span>info@amplitudfoundation.org</span>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Contact