import React from 'react'
import './Hero.scss'
import hero from '../../assets/hero.jpg'
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

const Hero = () => {

    const { t } = useTranslation("global");

    return (
        <>
            <div className='hero'>
                <div className='container-hero'>
                    <span className='regular'>{t('hero.title')}</span>
                    <br />
                    <span className='italic'>{t('hero.subtitle')}</span>
                </div>
            </div>
            <BrowserView>
                <div style={{
                        backgroundImage: `url(${hero})`,
                        backgroundRepeat: "no-repeat", backgroundSize: 'cover',
                        height: 1000, width: 'auto'
                    }}>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{
                        backgroundImage: `url(${hero})`,
                        backgroundRepeat: "no-repeat", backgroundSize: 'contain',
                        height: 220, width: 'auto'
                    }}>
                </div>
            </MobileView>
        </>
    )
}

export default Hero