import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AfterBanner = (props) => {
    const [formData, setFormData] = useState({});
    const { register, handleSubmit, setValue, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
    });

    useEffect(() => {
        if (!props?.afterBannerData) return;

        const fields = [
            { heading: "headingone", paragraph: "paragraphone", dataHeading: "heading1", dataParagraph: "paragragph1" },
            { heading: "headingtwo", paragraph: "paragraphtwo", dataHeading: "heading2", dataParagraph: "paragragph2" },
            { heading: "headingthree", paragraph: "paragraphthree", dataHeading: "heading3", dataParagraph: "paragragph3" },
            { heading: "headingfour", paragraph: "paragraphfour", dataHeading: "heading4", dataParagraph: "paragragph4" },
        ];

        fields.forEach(field => {
            setValue(field.heading, props.afterBannerData[field.dataHeading]);
            setValue(field.paragraph, props.afterBannerData[field.dataParagraph]);
        });

        setFormData(props.afterBannerData);
    }, [props, setValue]);

    const onSubmit = (data) => {
        const afterBannerData = {
            id: "66bcabaf1c3b7962e9311446",
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

        fetch('http://localhost:3000/api/admin/updateadminmodule', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(afterBannerData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
        });
    };

    const renderFields = () => {
        const fields = [
            { label: "Info Text 01", heading: "headingone", paragraph: "paragraphone" },
            { label: "Info Text 02", heading: "headingtwo", paragraph: "paragraphtwo" },
            { label: "Info Text 03", heading: "headingthree", paragraph: "paragraphthree" },
            { label: "Info Text 04", heading: "headingfour", paragraph: "paragraphfour" },
        ];

        return fields.map((field, index) => (
            <div className='col-lg-12' key={index}>
                <label>{field.label}</label>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='mas_input_box'>
                            <label>Heading</label>
                            <input 
                                type="text" 
                                defaultValue={props?.afterBannerData?.[field.heading]} 
                                placeholder='Heading Here' 
                                {...register(field.heading, { required: true })} 
                            />
                            {errors[field.heading] && <p>Required</p>}
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='mas_input_box'>
                            <label>Paragraph</label>
                            <input 
                                type="text" 
                                defaultValue={props?.afterBannerData?.[field.paragraph]} 
                                placeholder='Paragraph Here' 
                                {...register(field.paragraph, { required: true })} 
                            />
                            {errors[field.paragraph] && <p>Required</p>}
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <>
            <Accordion.Item eventKey="1">
                <Accordion.Header>After Banner</Accordion.Header>
                <Accordion.Body>
                    <div className='mas_form_wrapper'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row'>
                                {renderFields()}
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
    );
}

export default AfterBanner;
