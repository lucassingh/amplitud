import React, { useState } from 'react'
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss'
import { useTranslation } from "react-i18next";
import { BiMenuAltRight } from "react-icons/bi";
import { BiBrain } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggler = () => setMenuOpen((p) => !p);

    const { t, i18n } = useTranslation("global");

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbar__content}>
                    <Link to='home' className={styles.logo} spy={true} smooth={true} duration={500}>
                        <div style={{ cursor: 'pointer' }}>
                            <img src={logo} alt="brand" width='70%' />
                        </div>
                    </Link>
                    <div>
                        <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                            <Link className={styles.nav__item}
                                to="home" spy={true} smooth={true} duration={500}
                            >
                                {t('header.link0')}
                            </Link>

                            <Link className={styles.nav__item}
                                to="purpose" spy={true} smooth={true} duration={500}
                            >
                                {t('header.link1')}
                            </Link>
                            <Link className={styles.nav__item}
                                to="values" spy={true} smooth={true} duration={500}
                            >
                                {t('header.link2')}
                            </Link>
                            <Link className={styles.nav__item}
                                to="interest" spy={true} smooth={true} duration={500}
                            >
                                {t('header.link3')}
                            </Link>
                            <Link className={styles.nav__item}
                                to="contact" spy={true} smooth={true} duration={500}
                            >
                                {t('header.link4')}
                            </Link>
                        </nav>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                        {
                            i18n.language === 'en' ? (
                                <span onClick={() => i18n.changeLanguage("es")} style={{ marginRight: '15px', cursor: 'pointer' }}>ES</span>
                            ) : (
                                <span onClick={() => i18n.changeLanguage("en")} style={{ marginRight: '15px', cursor: 'pointer' }}>EN</span>
                            )
                        }
                        <a className={styles.nav__item} href={"/"}>
                            <BiBrain size={25} />
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            <AiOutlineHeart size={25} />
                        </a>
                    </div>
                    <div className='mobile'>
                        <div onClick={menuToggler} >
                            {!menuOpen ? <BiMenuAltRight size={25} /> : <AiOutlineClose size={25} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar