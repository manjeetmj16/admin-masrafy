import React from 'react'
import { Accordion } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

const Services = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        console.log(data);
        let updateData = {
            main_heading: data.mainheading,
            main_paragragph: data.mainparagraph,
            service01_heading: data.serviceheadingone,
            service01_paragragph: data.serviceparagraphone,
            service02_heading: data.serviceheadingtwo,
            service02_paragragph: data.serviceparagraphtwo,
            service03_heading: data.serviceheadingthree,
            service03_paragragph: data.serviceparagraphthree,
            service04_heading: data.serviceheadingfour,
            service04_paragragph: data.serviceparagraphfour,
            type: "service"
        };

        fetch('http://localhost:3000/api/admin/updateadminmodule',
        {
            method: 'post',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData)
        })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log("data",data)
        });
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
                                <input type="text" placeholder='Leading Business Solutions.'{...register('mainheading', { required: true })} />
                                {errors.name && <p>Required</p>}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='mas_input_box'>
                                <label>Main Paragraph</label>
                                <input type="text" placeholder='Trade, Loans, Investments, Government...'{...register('mainparagraph', { required: true })} />
                                {errors.name && <p>Required</p>}
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <label>Service 01</label>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Heading</label>
                                        <input type="text" placeholder='100% mobile banking'{...register('serviceheadingone', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph here'{...register('serviceparagraphone', { required: true })} />
                                        {errors.name && <p>Required</p>}
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
                                        <input type="text" placeholder='100% mobile banking'{...register('serviceheadingtwo', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph here'{...register('serviceparagraphtwo', { required: true })} />
                                        {errors.name && <p>Required</p>}
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
                                        <input type="text" placeholder='100% mobile banking'{...register('serviceheadingthree', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph here'{...register('serviceparagraphthree', { required: true })} />
                                        {errors.name && <p>Required</p>}
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
                                        <input type="text" placeholder='100% mobile banking'{...register('serviceheadingfour', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph here'{...register('serviceparagraphfour', { required: true })} />
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

export default Services