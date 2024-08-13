import React from 'react'
import Link from 'next/link'
import { Accordion } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Footer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
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
                                    <input type="text" placeholder='About Us'{...register('name', { required: true })} />
                                    {errors.name && <p>required</p>}
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='mas_input_box'>
                                    <label>Heading</label>
                                    <input type="text" placeholder='Support'{...register('name', { required: true })} />
                                    {errors.name && <p>required</p>}
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='mas_input_box'>
                                    <label>Paragraph</label>
                                    <div className='mas_footer_links'>
                                        <ul>
                                            <li><Link href='javascript:'>About Us</Link></li>
                                            <li><Link href='javascript:'>Press</Link></li>
                                            <li><Link href='javascript:'>Investor Relations</Link></li>
                                        </ul>
                                        <ul>
                                            <li><Link href='javascript:'>Support</Link></li>
                                            <li><Link href='javascript:'>Privacy Policy</Link></li>
                                            <li><Link href='javascript:'>Play store</Link></li>
                                            <li><Link href='javascript:'>App store</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='mas_input_box'>
                                    <label>Copyright Text</label>
                                    <input type="text" placeholder='@2024, Masrafy Pvt. Ltd. All Rights Reserved'{...register('name', { required: true })} />
                                    {errors.name && <p>required</p>}
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='mas_btn_wrapper'>
                                    <button type='submit' className='mas_btn'>Save Changes</button>
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