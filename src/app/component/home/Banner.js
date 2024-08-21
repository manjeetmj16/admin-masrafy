"use client";
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Banner = ({ bannerData }) => {
  const [selectedImage, setSelectedImage] = useState("/images/default.png");
  
  const featureTexts = [
    { id: 'featurestextone', placeholder: 'Instant Transfer', label: 'Features Text 01', value: bannerData?.feature_text1 },
    { id: 'featurestexttwo', placeholder: 'Payments worldwide', label: 'Features Text 02', value: bannerData?.feature_text2 },
    { id: 'featurestextthree', placeholder: 'Saving accounts', label: 'Features Text 03', value: bannerData?.feature_text3 },
    { id: 'featurestextfour', placeholder: '100% mobile banking', label: 'Features Text 04', value: bannerData?.feature_text4 },
  ];

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage("/images/default.png");
  };

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    const bannerData = {
      id: "66bc890bc8bbe7a144e3e92d",
      heading: data.heading,
      paragragph: data.paragraphtext,
      banner_image: selectedImage,
      primary_btntext: data.primarybuttontext,
      secondary_btntext: data.secondarybuttontext,
      type: "banner",
      ...featureTexts.reduce((acc, { id }) => {
        acc[id] = data[id];
        return acc;
      }, {}),
    };

    fetch('http://localhost:3000/api/admin/updateadminmodule', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bannerData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle response data
      });
  };

  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Banner</Accordion.Header>
      <Accordion.Body>
        <div className='mas_form_wrapper'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='mas_input_box'>
                  <label>Heading</label>
                  <input defaultValue={bannerData?.heading} type="text" placeholder='Banking Start Here' {...register('heading', { required: true })} />
                  {errors.heading && <p>Required</p>}
                </div>
                <div className='mas_banner_image_wrapper'>
                  <div className='mas_banner_section'>
                    <label>Banner Image</label>
                    <div className='mas_upload_box'>
                      <input type='file' accept="image/*" onChange={handleImageChange} className='mas_input_file' />
                      <span className='upload_icon'>
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.46254 6.3087H7.52177V12.3339C7.52177 12.9452 8.02429 13.4402 8.64344 13.4402H11.7051C12.3242 13.4402 12.8268 12.9452 12.8268 12.3339V6.3087H14.8853C15.2263 6.3087 15.5329 6.10617 15.664 5.79533C15.7938 5.48576 15.7216 5.12788 15.4806 4.89022L10.7695 0.242915C10.4404 -0.0809717 9.90739 -0.0809717 9.57764 0.242915L4.86729 4.89022C4.74945 5.00633 4.66918 5.1543 4.63665 5.31543C4.60413 5.47655 4.6208 5.64356 4.68456 5.79533C4.81561 6.10556 5.12151 6.3087 5.46254 6.3087Z" fill="#856B98"></path><path d="M19.3361 8.56696C18.7778 8.56696 18.325 9.01369 18.325 9.56485V13.7374C18.325 14.9873 17.2934 16.0041 16.0261 16.0041H4.32167C3.05436 16.0041 2.02344 14.9873 2.02344 13.7374V9.56485C2.02344 9.01369 1.5699 8.56696 1.01172 8.56696C0.452878 8.56696 0 9.01369 0 9.56489V13.7374C0 16.0877 1.93867 18 4.32167 18H16.0261C18.4091 18 20.3478 16.0878 20.3478 13.7374V9.56489C20.3478 9.01369 19.8949 8.56696 19.3361 8.56696Z" fill="#856B98"></path></svg>
                      </span>
                      <h6><span>Upload</span> or drop your file here</h6>
                    </div>
                  </div>
                  <div className='mas_upload_preview'>
                    <label>Preview</label>
                    <div className='mas_upload_img'>
                      {selectedImage && (
                        <div className="image-preview">
                          <img src={selectedImage} alt="Selected" />
                          {selectedImage !== '/images/default.png' && (
                            <button type="button" onClick={handleRemoveImage}>×</button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='mas_input_box'>
                  <label>Paragraph</label>
                  <textarea placeholder='Paragraph here' defaultValue={bannerData?.paragragph}
                    {...register('paragraphtext', {
                      required: true,
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters long',
                      }
                    })}
                  />
                  {errors.paragraphtext && <p>{errors.paragraphtext.message || 'Required'}</p>}
                </div>
              </div>

              {featureTexts.map(({ id, placeholder, label, value }) => (
                <div className='col-lg-6' key={id}>
                  <div className='mas_input_box'>
                    <label>{label}</label>
                    <input type="text" defaultValue={value} placeholder={placeholder} {...register(id, { required: true })} />
                    {errors[id] && <p>Required</p>}
                  </div>
                </div>
              ))}

              <div className='col-lg-6'>
                <div className='mas_input_box'>
                  <label>Primary Button Text</label>
                  <input type="text" defaultValue={bannerData?.primary_btntext} placeholder='Open account' {...register('primarybuttontext', { required: true })} />
                  {errors.primarybuttontext && <p>Required</p>}
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='mas_input_box'>
                  <label>Secondary Button Text</label>
                  <input type="text" defaultValue={bannerData?.secondary_btntext} placeholder='Offerings' {...register('secondarybuttontext', { required: true })} />
                  {errors.secondarybuttontext && <p>Required</p>}
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
  );
}

export default Banner;
