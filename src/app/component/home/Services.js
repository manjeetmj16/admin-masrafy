import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Services = (props) => {
  const [formData, setFormData] = useState([]);
  const { register, handleSubmit, setValue, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    if (!props?.ServicesData) return;

    const servicesData = [
      {
        heading: "service01_heading",
        paragraph: "service01_paragragph",
      },
      {
        heading: "service02_heading",
        paragraph: "service02_paragragph",
      },
      {
        heading: "service03_heading",
        paragraph: "service03_paragragph",
      },
      {
        heading: "service04_heading",
        paragraph: "service04_paragragph",
      }
    ];

    setValue("mainheading", props.ServicesData.main_heading);
    setValue("mainparagraph", props.ServicesData.main_paragragph);

    servicesData.forEach((service, index) => {
      setValue(`serviceheading${index + 1}`, props.ServicesData[service.heading]);
      setValue(`serviceparagraph${index + 1}`, props.ServicesData[service.paragraph]);
    });

    setFormData(props.ServicesData);
  }, [props]);

  const onSubmit = (data) => {
    let ServicesData = {
      id: "66bcabaf1c3b7962e9311446",
      main_heading: data.mainheading,
      main_paragragph: data.mainparagraph,
    };

    for (let i = 1; i <= 4; i++) {
      ServicesData[`service0${i}_heading`] = data[`serviceheading${i}`];
      ServicesData[`service0${i}_paragragph`] = data[`serviceparagraph${i}`];
    }

    fetch('http://localhost:3000/api/admin/updateadminmodule', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ServicesData),
    })
      .then((response) => response.json())
      .then((data) => {
        // handle response
      });
  };

  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>Services</Accordion.Header>
      <Accordion.Body>
        <div className='mas_form_wrapper'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='mas_input_box'>
                  <label>Main Heading</label>
                  <input type="text" placeholder='Leading Business Solutions.' {...register('mainheading', { required: true })} />
                  {errors.mainheading && <p>Required</p>}
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='mas_input_box'>
                  <label>Main Paragraph</label>
                  <input type="text" placeholder='Trade, Loans, Investments, Government...' {...register('mainparagraph', { required: true })} />
                  {errors.mainparagraph && <p>Required</p>}
                </div>
              </div>

              {[...Array(4)].map((_, index) => (
                <div className='col-lg-12' key={index}>
                  <label>Service 0{index + 1}</label>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='mas_input_box'>
                        <label>Heading</label>
                        <input type="text" placeholder='100% mobile banking' {...register(`serviceheading${index + 1}`, { required: true })} />
                        {errors[`serviceheading${index + 1}`] && <p>Required</p>}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='mas_input_box'>
                        <label>Paragraph</label>
                        <input type="text" placeholder='Paragraph here' {...register(`serviceparagraph${index + 1}`, { required: true })} />
                        {errors[`serviceparagraph${index + 1}`] && <p>Required</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

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
  );
}

export default Services;
