import React from 'react'
import { Accordion } from 'react-bootstrap'
import { useForm } from 'react-hook-form';


    
const Services = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
  return (
    <>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Services</Accordion.Header>
            <Accordion.Body>
            <div className='mas_form_wrapper'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='mas_input_box'>
                                <label>Main Heading</label>
                                <input type="text" placeholder='Leading Business Solutions.'{...register('name', { required: true })} />
                                {errors.name && <p>required</p>}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='mas_input_box'>
                                <label>Main Paragraph</label>
                                <input type="text" placeholder='Trade, Loans, Investments, Government...'{...register('name', { required: true })} />
                                {errors.name && <p>required</p>}
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <label>Service 01</label>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Heading</label>
                                        <input type="text" placeholder='100% mobile banking'{...register('name', { required: true })} />
                                        {errors.name && <p>required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph here'{...register('name', { required: true })} />
                                        {errors.name && <p>required</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <label>Service 02</label>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Heading</label>
                                        <input type="text" placeholder='100% mobile banking'{...register('name', { required: true })} />
                                        {errors.name && <p>required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph here'{...register('name', { required: true })} />
                                        {errors.name && <p>required</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <label>Service 03</label>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Heading</label>
                                        <input type="text" placeholder='100% mobile banking'{...register('name', { required: true })} />
                                        {errors.name && <p>required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph here'{...register('name', { required: true })} />
                                        {errors.name && <p>required</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <label>Service 04</label>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Heading</label>
                                        <input type="text" placeholder='100% mobile banking'{...register('name', { required: true })} />
                                        {errors.name && <p>required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph here'{...register('name', { required: true })} />
                                        {errors.name && <p>required</p>}
                                    </div>
                                </div>
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

export default Services