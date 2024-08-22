"use client"
import React from 'react'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  return (
    <>
        <div className='mas_header_wrapper'>
            <div className='mas_logo'>
                <Link href="/">
                    <img src="/images/logo.png" alt=""/>
                </Link>
            </div>
            <div className='mas_header_title'>
                <h5>Pages</h5>
            </div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className='mas_profile_header_box'>
                        <div className='mas_avtar_profile'>
                            <img src="/images/profile.jpg" alt=""/>
                        </div>
                        <div className='mas_avtar_name'>
                            <h6>Hey, David Parker</h6>
                        </div>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8935 8.95032C17.9908 8.75572 17.9908 8.46383 17.8935 8.17194C17.7962 8.07464 17.7962 7.97734 17.6989 7.88005L15.753 5.9341C15.3638 5.54491 14.78 5.54491 14.3908 5.9341C14.0016 6.32329 14.0016 6.90707 14.3908 7.29626L14.6827 7.58815H12.153C11.5692 7.58815 11.18 7.97734 11.18 8.56113C11.18 9.14491 11.5692 9.5341 12.153 9.5341H14.6827L14.3908 9.82599C14.0016 10.2152 14.0016 10.799 14.3908 11.1882C14.5854 11.3827 14.8773 11.48 15.0719 11.48C15.2665 11.48 15.5584 11.3827 15.753 11.1882L17.6989 9.24221C17.7962 9.14491 17.8935 9.04761 17.8935 8.95032Z" fill="#9c20aa"></path>
                    <path d="M13.1259 11.48C12.5422 11.48 12.153 11.8692 12.153 12.453V13.426C12.153 14.0098 11.7638 14.399 11.18 14.399H10.207V6.0314C10.207 4.76653 9.42865 3.69626 8.35838 3.30707L6.80162 2.72329H11.18C11.7638 2.72329 12.153 3.11248 12.153 3.69626V4.66924C12.153 5.25302 12.5422 5.64221 13.1259 5.64221C13.7097 5.64221 14.0989 5.25302 14.0989 4.66924V3.69626C14.0989 2.04221 12.8341 0.777344 11.18 0.777344H1.45027C1.35297 0.777344 1.25567 0.777344 1.15838 0.874641C1.06108 0.874641 0.963781 0.971938 0.963781 0.971938L0.866484 1.06924C0.769187 1.06924 0.671889 1.16653 0.671889 1.26383V1.36113C0.574592 1.36113 0.477295 1.45842 0.477295 1.55572V15.3719C0.477295 15.7611 0.769187 16.1503 1.06108 16.2476L7.4827 18.68C7.67729 18.7773 7.96919 18.7773 8.16378 18.7773C8.55297 18.7773 8.94216 18.68 9.23405 18.3882C9.72054 17.999 10.1097 17.4152 10.1097 16.8314V16.3449H11.0827C12.7368 16.3449 14.0016 15.08 14.0016 13.426V12.453C14.0989 11.9665 13.7097 11.48 13.1259 11.48Z" fill="#9c20aa"></path>
                    </svg> Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </>
  )
}

export default Header