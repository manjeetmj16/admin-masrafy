"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const [showToaster, setShowToaster] = useState(false);
  const [toasterSuccess, setToasterSuccess] = useState(true);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // Initialize the useRouter hook
  const router = useRouter();

  const onSubmit = (data) => {
    const validEmail = "irfan.shaikh@pixelnx.com";
    const validPassword = "123";

    if (data.email === validEmail && data.password === validPassword) {
      setToasterSuccess(true);
      setShowToaster(true);
      router.push("/app/home"); // Use router here for navigation
    } else {
      setToasterSuccess(false);
      setShowToaster(true);
    }
  };

  return (
    <>
      <div className="mas_loginmain_wrapper">
        <div className="mas_login_section">
          <div className="mas_login_flex">
            <div className="mas_login_vector">
              <div className="mas_vector_box">
                <img src="/images/card_wallet.png" alt="" />
              </div>
            </div>
            <div className="mas_login_main">
              <div className="mas_login_auth">
                <img src="/images/logo.png" className="mas_logo" alt="" />
                <h1>Welcome to <span>Masrafy</span></h1>
                <p>This is the admin Console</p>
                <div className="mas_login_form">
                  <div className="login-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mas_input_login">
                        <label>Email address</label>
                        <div className="mas_input_svg">
                          <input
                            type="email"
                            placeholder="Enter email here..."
                            {...register('email', { required: true })}
                          />
                          {errors.email && <span className="error">Email is required</span>}
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83332 5.08333L8.28501 6.53283C9.71432 7.37792 10.2857 7.37792 11.715 6.53283L14.1667 5.08333M1.6798 9.22966C1.73427 11.7843 1.76151 13.0616 2.70412 14.0078C3.64672 14.954 4.9586 14.9869 7.58235 15.0528C9.19941 15.0935 10.8006 15.0935 12.4177 15.0528C15.0414 14.9869 16.3532 14.954 17.2959 14.0078C18.2385 13.0616 18.2657 11.7843 18.3202 9.22966C18.3377 8.40825 18.3377 7.59175 18.3202 6.77033C18.2657 4.21571 18.2385 2.93841 17.2959 1.99222C16.3532 1.04602 15.0414 1.01307 12.4177 0.94714C10.8006 0.906507 9.19941 0.906507 7.58234 0.947132C4.9586 1.01305 3.64672 1.04601 2.70411 1.99221C1.76151 2.9384 1.73427 4.21571 1.67979 6.77033C1.66227 7.59175 1.66228 8.40825 1.6798 9.22966Z" stroke="#B0A9B5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                      </div>
                      <div className="mas_input_login">
                        <label>Password</label>
                        <div className="mas_input_svg">
                          <input
                            type="password"
                            placeholder="Enter password here..."
                            {...register('password', { required: true })}
                          />
                          {errors.password && <span className="error">Password is required</span>}
                            <svg className='password_icon' width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.7425 11.5C9.32829 11.5 8.9925 11.8358 8.9925 12.25C8.9925 12.6642 9.32829 13 9.7425 13V11.5ZM9.75 13C10.1642 13 10.5 12.6642 10.5 12.25C10.5 11.8358 10.1642 11.5 9.75 11.5V13ZM5.58333 11.5C5.16912 11.5 4.83333 11.8358 4.83333 12.25C4.83333 12.6642 5.16912 13 5.58333 13V11.5ZM5.59081 13C6.00502 13 6.34081 12.6642 6.34081 12.25C6.34081 11.8358 6.00502 11.5 5.59081 11.5V13ZM1.22317 15.0372L1.96647 14.9372L1.96647 14.9372L1.22317 15.0372ZM3.96638 17.5841L3.93194 18.3333H3.93195L3.96638 17.5841ZM11.3669 17.5841L11.4013 18.3333H11.4014L11.3669 17.5841ZM14.1102 15.0372L13.3669 14.9371L13.3669 14.9372L14.1102 15.0372ZM14.1102 9.46275L13.3669 9.56283L13.3669 9.56286L14.1102 9.46275ZM11.3669 6.91591L11.4014 6.1667L11.4014 6.1667L11.3669 6.91591ZM3.96638 6.91591L3.93194 6.1667L3.93194 6.1667L3.96638 6.91591ZM1.22317 9.46275L1.96647 9.56283L1.96647 9.56282L1.22317 9.46275ZM3.16667 6.83333C3.16667 7.24755 3.50245 7.58333 3.91667 7.58333C4.33088 7.58333 4.66667 7.24755 4.66667 6.83333H3.16667ZM10.6667 6.83333C10.6667 7.24755 11.0025 7.58333 11.4167 7.58333C11.8309 7.58333 12.1667 7.24755 12.1667 6.83333H10.6667ZM9.7425 13H9.75V11.5H9.7425V13ZM5.58333 13H5.59081V11.5H5.58333V13ZM0.479881 15.1373C0.71397 16.876 2.15447 18.2516 3.93194 18.3333L4.00083 16.8349C2.97241 16.7876 2.10718 15.9823 1.96647 14.9372L0.479881 15.1373ZM3.93195 18.3333C5.12426 18.3881 6.33493 18.4167 7.66667 18.4167V16.9167C6.35723 16.9167 5.16953 16.8886 4.00081 16.8349L3.93195 18.3333ZM7.66667 18.4167C8.9984 18.4167 10.2091 18.3881 11.4013 18.3333L11.3325 16.8349C10.1638 16.8886 8.9761 16.9167 7.66667 16.9167V18.4167ZM11.4014 18.3333C13.1789 18.2516 14.6194 16.876 14.8535 15.1373L13.3669 14.9372C13.2261 15.9823 12.3609 16.7876 11.3325 16.8349L11.4014 18.3333ZM14.8535 15.1374C14.9772 14.2186 15.0833 13.2485 15.0833 12.25H13.5833C13.5833 13.1475 13.4878 14.0392 13.3669 14.9371L14.8535 15.1374ZM15.0833 12.25C15.0833 11.2515 14.9772 10.2814 14.8535 9.36265L13.3669 9.56286C13.4878 10.4608 13.5833 11.3525 13.5833 12.25H15.0833ZM14.8535 9.36267C14.6194 7.62398 13.1789 6.24842 11.4014 6.1667L11.3325 7.66512C12.3609 7.7124 13.2261 8.51768 13.3669 9.56283L14.8535 9.36267ZM11.4014 6.1667C10.209 6.11189 8.99839 6.08333 7.66667 6.08333V7.58333C8.97611 7.58333 10.1638 7.61139 11.3325 7.66512L11.4014 6.1667ZM7.66667 6.08333C6.33494 6.08333 5.12426 6.11189 3.93194 6.1667L4.00082 7.66512C5.16952 7.61139 6.35722 7.58333 7.66667 7.58333V6.08333ZM3.93194 6.1667C2.15447 6.24842 0.71397 7.62398 0.479881 9.36268L1.96647 9.56282C2.10718 8.51769 2.97241 7.7124 4.00083 7.66512L3.93194 6.1667ZM0.479882 9.36267C0.356192 10.2813 0.25 11.2515 0.25 12.25H1.75C1.75 11.3525 1.84556 10.4608 1.96647 9.56283L0.479882 9.36267ZM0.25 12.25C0.25 13.2485 0.356192 14.2187 0.479882 15.1373L1.96647 14.9372C1.84556 14.0392 1.75 13.1475 1.75 12.25H0.25ZM4.66667 6.83333V4.75H3.16667V6.83333H4.66667ZM4.66667 4.75C4.66667 3.09315 6.00981 1.75 7.66667 1.75V0.25C5.18139 0.25 3.16667 2.26472 3.16667 4.75H4.66667ZM7.66667 1.75C9.32353 1.75 10.6667 3.09314 10.6667 4.75H12.1667C12.1667 2.26472 10.152 0.25 7.66667 0.25V1.75ZM10.6667 4.75V6.83333H12.1667V4.75H10.6667Z" fill="#B0A9B5"/>
                            </svg>
                        </div>
                      </div>
                      <div className="mas_login_btn">
                        <button type="submit" className="mas_btn">Log In</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showToaster && (
        <div className={`mas_success_msg toster_open ${toasterSuccess ? '' : 'error'}`}>
          <div className="mas_close_icon" onClick={() => setShowToaster(false)}>
            <span>×</span>
          </div>
          <div className="mas_success_flex">
            <div className="mas_success_img">
              <img src={toasterSuccess ? "/images/success.png" : "/images/error.png"} alt="" />
            </div>
            <div className="mas_text_msg">
              <h5>{toasterSuccess ? 'Great Success!' : 'Login Failed!'}</h5>
              <p>{toasterSuccess ? 'Congratulations, you have successfully logged in.' : 'Incorrect email or password. Please try again.'}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
