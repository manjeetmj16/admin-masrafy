import React from 'react'
import { Accordion } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const AfterBanner = () => {
   
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
    });
    
    const onSubmit = (data) => {
        console.log(data);
    };

  return (
    <>
        <Accordion.Item eventKey="1">
            <Accordion.Header>After Banner</Accordion.Header>
            <Accordion.Body>
            <div className='mas_form_wrapper'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <label>Info Text 01</label>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Heading</label>
                                        <input type="text" placeholder='Heading Here'{...register('heading-one', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph Here'{...register('paragraph-one', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <label>Info Text 02</label>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Heading</label>
                                        <input type="text" placeholder='Heading Here'{...register('heading-two', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph Here'{...register('paragraph-two', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <label>Info Text 03</label>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Heading</label>
                                        <input type="text" placeholder='Heading Here'{...register('heading-three', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph Here'{...register('paragraph-three', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <label>Info Text 04</label>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Heading</label>
                                        <input type="text" placeholder='Heading Here'{...register('heading-four', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph Here'{...register('paragraph-four', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
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

export default AfterBanner