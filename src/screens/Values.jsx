import React from 'react'
import '../styles/values.scss';
import logoValue from '../assets/value.jpg'
import { useTranslation } from 'react-i18next';

const Values = () => {

    const { t } = useTranslation("global");

    return (
        <section id='values' className='values-section'>
            <div className='container-section'>
                <div className='content'>
                    <img className='img' src={logoValue} alt='values-logo' />
                </div>
                <div className='content'>
                    <div className='content-text'>
                        <span className="title-section">{t('values.titlepart1')}</span><span className="title-section part2">{t('values.titlepart2')}</span>
                        <div className='cont-items'>
                            <span className='item'>{t('values.word1')}</span>
                            <span className='item'>{t('values.word2')}</span>
                            <span className='item'>{t('values.word3')}</span>
                            <span className='item'>{t('values.word4')}</span>
                            <span className='item'>{t('values.word5')}</span>
                            <span className='item'>{t('values.word6')}</span>
                            <span className='item'>{t('values.word7')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values