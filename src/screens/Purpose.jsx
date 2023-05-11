import React from 'react';
import '../styles/purpose.scss';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logoP.png'

const Purpose = () => {

    const { t } = useTranslation("global");

    return (
        <section id='purpose' className='purpose-section'>
            <div className='container-section'>
                <div className='content'>
                    <span className="title-section">{t('purpose.titlepart1')}</span><span className="title-section part2">{t('purpose.titlepart2')}</span>
                </div>
                <div className='content'>
                    <span className='text'>
                        {t('purpose.text')}
                    </span>
                </div>
                <div className='content'>
                    <img src={logo} alt='logo-purpose' />
                </div>
            </div>
        </section>
    )
}

export default Purpose