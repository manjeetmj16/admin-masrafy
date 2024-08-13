import React from 'react'
import Link from 'next/link'
import { Accordion } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Footer = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
    });
    
    const onSubmit = (data) => {
        console.log(data);
    };

    const handleDoubleClick = (e) => {
        e.target.contentEditable = true;
        e.target.focus(); 
    };

    const handleBlur = (e) => {
    e.target.contentEditable = false; 
    };
    
  return (
    <>
        <Accordion.Item eventKey="5">
            <Accordion.Header>Footer</Accordion.Header>
            <Accordion.Body>
                <div className='mas_form_wrapper'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='mas_input_box'>
                                    <label>Heading</label>
                                    <input type="text" placeholder='About Us'{...register('about-heading', { required: true })} />
                                    {errors.name && <p>Required</p>}
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='mas_input_box'>
                                    <label>Heading</label>
                                    <input type="text" placeholder='Support'{...register('support-heading', { required: true })} />
                                    {errors.name && <p>Required</p>}
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='mas_input_box'>
                                    <label>Footer Links</label>
                                    <div className='mas_footer_links'>
                                        <ul>
                                            <li>
                                            <Link href="javascript:">
                                                <span onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
                                                    About Us
                                                </span>
                                            </Link>
                                            </li>
                                            <li>
                                            <Link href="javascript:">
                                                <span onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
                                                    Press
                                                </span>
                                            </Link>
                                            </li>
                                            <li>
                                            <Link href="javascript:">
                                                <span onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
                                                    Investor Relations
                                                </span>
                                            </Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                            <Link href="javascript:">
                                                <span onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
                                                    Support
                                                </span>
                                            </Link>
                                            </li>
                                            <li>
                                            <Link href="javascript:">
                                                <span onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
                                                    Privacy Policy
                                                </span>
                                            </Link>
                                            </li>
                                            <li>
                                            <Link href="javascript:">
                                                <span onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
                                                    Play store
                                                </span>
                                            </Link>
                                            </li>
                                            <li>
                                            <Link href="javascript:">
                                                <span onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
                                                    App store
                                                </span>
                                            </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='mas_input_box'>
                                    <label>Copyright Text</label>
                                    <input type="text" placeholder='@2024, Masrafy Pvt. Ltd. All Rights Reserved'{...register('copyright-text', { required: true })} />
                                    {errors.name && <p>Required</p>}
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='mas_btn_wrapper'>
                                    <button type='submit' className='mas_btn' disabled={!isValid}>Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    </>
  )
}

export default Footer