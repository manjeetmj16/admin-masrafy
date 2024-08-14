import React from 'react'
import { Accordion } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const AfterBanner = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
    });
    const onSubmit = (data) => {
        console.log(data);
        let updateData = {
            heading1: data.headingone,
            paragragph1: data.paragraphone,
            heading2: data.headingtwo,
            paragragph2: data.paragraphtwo,
            heading3: data.headingthree,
            paragragph3: data.paragraphthree,
            heading4: data.headingfour,
            paragragph4: data.paragraphfour,
            type: "afterBanner"
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
                                        <input type="text" placeholder='Heading Here'{...register('headingone', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph Here'{...register('paragraphone', { required: true })} />
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
                                        <input type="text" placeholder='Heading Here'{...register('headingtwo', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph Here'{...register('paragraphtwo', { required: true })} />
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
                                        <input type="text" placeholder='Heading Here'{...register('headingthree', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph Here'{...register('paragraphthree', { required: true })} />
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
                                        <input type="text" placeholder='Heading Here'{...register('headingfour', { required: true })} />
                                        {errors.name && <p>Required</p>}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='mas_input_box'>
                                        <label>Paragraph</label>
                                        <input type="text" placeholder='Paragraph Here'{...register('paragraphfour', { required: true })} />
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