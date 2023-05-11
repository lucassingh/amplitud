import React from 'react'
import '../styles/interest.scss';
import { useTranslation } from 'react-i18next';
import cardImage1 from '../assets/img-1.jpg'
import cardImage2 from '../assets/img-2.jpg'
import cardImage3 from '../assets/img-3.jpg'
import cardImage4 from '../assets/img-4.jpg'
import Card from '../components/card/Card';

const Interest = () => {

    const { t } = useTranslation("global");

    const data = [
        {
            id: '1',
            urlImg: cardImage1,
            title: t('cardInfo.title1'),
            text: t('cardInfo.text1'),
        },
        {
            id: '2',
            urlImg: cardImage2,
            title: t('cardInfo.title2'),
            text: t('cardInfo.text2'),
        },
        {
            id: '3',
            urlImg: cardImage3,
            title: t('cardInfo.title3'),
            text: t('cardInfo.text3'),
        },
        {
            id: '4',
            urlImg: cardImage4,
            title: t('cardInfo.title4'),
            text: t('cardInfo.text4'),
        },
    ]    

    return (
        <section id='interest' className='interest-section'>
            <div className='container-section'>
                <div className='content'>
                    <span className="title-section">{t('interest.titlepart1')}</span><span className="title-section part2">{t('interest.titlepart2')}</span>
                    <div className='cont-cards'>

                        {
                            data.map((item) => (
                                <Card key={item.id} imageCard={item.urlImg} titleCard={item.title} textCard={item.text} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Interest