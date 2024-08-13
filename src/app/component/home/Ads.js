"use client"
import React from 'react'
import { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

const Ads = () => {
    const [selectedImage, setSelectedImage] = useState("/images/default.png");

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
    console.log(data);
  };

return (
    <>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Ads</Accordion.Header>
            <Accordion.Body>
                <div className='mas_form_wrapper'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='mas_input_box'>
                                    <label>Heading</label>
                                    <input type="text" placeholder='Banking Start Here'{...register('heading', { required: true })} />
                                    {errors.name && <p>Required</p>}
                                </div>
                                <div className='mas_banner_image_wrapper'>
                                    <div className='mas_banner_section'>
                                    <label>Banner Image</label>
                                    <div className='mas_upload_box'>
                                        <input type='file' accept="image/*" onChange={handleImageChange} className='mas_input_file'/>
                                        <span className='upload_icon'>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.46254 6.3087H7.52177V12.3339C7.52177 12.9452 8.02429 13.4402 8.64344 13.4402H11.7051C12.3242 13.4402 12.8268 12.9452 12.8268 12.3339V6.3087H14.8853C15.2263 6.3087 15.5329 6.10617 15.664 5.79533C15.7938 5.48576 15.7216 5.12788 15.4806 4.89022L10.7695 0.242915C10.4404 -0.0809717 9.90739 -0.0809717 9.57764 0.242915L4.86729 4.89022C4.74945 5.00633 4.66918 5.1543 4.63665 5.31543C4.60413 5.47655 4.6208 5.64356 4.68456 5.79533C4.81561 6.10556 5.12151 6.3087 5.46254 6.3087Z" fill="#856B98"/>
                                            <path d="M19.3361 8.56696C18.7778 8.56696 18.325 9.01369 18.325 9.56485V13.7374C18.325 14.9873 17.2934 16.0041 16.0261 16.0041H4.32167C3.05436 16.0041 2.02344 14.9873 2.02344 13.7374V9.56485C2.02344 9.01369 1.5699 8.56696 1.01172 8.56696C0.452878 8.56696 0 9.01369 0 9.56489V13.7374C0 16.0877 1.93867 18 4.32167 18H16.0261C18.4091 18 20.3478 16.0878 20.3478 13.7374V9.56489C20.3478 9.01369 19.8949 8.56696 19.3361 8.56696Z" fill="#856B98"/>
                                        </svg>
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
                                    <textarea placeholder='Paragraph here'
                                    {...register('paragraph-text', { 
                                        required: true, 
                                        minLength: {
                                        value: 10,
                                        message: 'message must be at least 10 characters long',
                                        } 
                                    })}
                                    />
                                    {errors.message && <p>{errors.message.message || 'Required'}</p>}
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='mas_input_box'>
                                    <label>Primary Button Text</label>
                                    <input type="text" placeholder='Open account'{...register('primary-button-text', { required: true })} />
                                    {errors.name && <p>Required</p>}
                                </div>
                                </div>
                                <div className='col-lg-6'>
                                <div className='mas_input_box'>
                                    <label>Secondary Button Text</label>
                                    <input type="text" placeholder='Offerings'{...register('secondary-button-text', { required: true })} />
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
export default Ads