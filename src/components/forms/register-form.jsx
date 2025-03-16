import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { CloseEye, OpenEye } from "@/svg";
import ErrorMsg from "../common/error-msg";
import { notifyError, notifySuccess } from "@/utils/toast";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";

// Validation Schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  remember: Yup.bool()
    .oneOf([true], "You must agree to the terms and conditions to proceed.")
    .label("Terms and Conditions"),
});


const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registerUser] = useRegisterUserMutation();
  const router = useRouter();
  const { redirect } = router.query;
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // On Submit
  const onSubmit = (data) => {
    registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    }).then((result) => {
      if (result?.error) {
        notifyError("Register Failed");
      } else {
        notifySuccess("Registration Successful! Please check your email to verify your account.");
        setIsRegistered(true);
      }
    });
    reset();
  };
  return (
    <>
      {isRegistered ? (
        <div className="tp-login-success-message text-center">
          <h3>Registration Successful!</h3>
          <p>Please check your email to verify your account.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tp-login-input-wrapper">
            <div className="tp-login-input-box">
              <div className="tp-login-input">
                <input
                  {...register("name")}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Shahnewaz Sakil"
                  autoComplete="name"
                />
              </div>
              <div className="tp-login-input-title">
                <label htmlFor="name">Your Name</label>
              </div>
              <ErrorMsg msg={errors.name?.message} />
            </div>
            <div className="tp-login-input-box">
              <div className="tp-login-input">
                <input
                  {...register("email")}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="shofy@mail.com"
                  autoComplete="email"
                />
              </div>
              <div className="tp-login-input-title">
                <label htmlFor="email">Your Email</label>
              </div>
              <ErrorMsg msg={errors.email?.message} />
            </div>
            <div className="tp-login-input-box">
              <div className="p-relative">
                <div className="tp-login-input">
                  <input
                    {...register("password")}
                    id="password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    placeholder="Min. 6 character"
                    autoComplete="new-password"
                  />
                </div>
                <div className="tp-login-input-eye" id="password-show-toggle">
                  <span className="open-eye" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <CloseEye /> : <OpenEye />}
                  </span>
                </div>
                <div className="tp-login-input-title">
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <ErrorMsg msg={errors.password?.message} />
            </div>
          </div>
          <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
            <div className="tp-login-remeber">
              <input {...register("remember")} id="remember" name="remember" type="checkbox" />
              <label htmlFor="remember">
                I accept the terms of the Service & <a href="#">Privacy Policy</a>.
              </label>
              <ErrorMsg msg={errors.remember?.message} />
            </div>
          </div>
          <div className="tp-login-bottom">
            <button type="submit" className="tp-login-btn w-100">
              Sign Up
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default RegisterForm;
