import React from "react";
import RegisterForm from "@/app/components/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <h1 className="text-center m-5">Registration Page</h1>
      <div className="text-center">
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
