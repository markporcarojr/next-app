import UpdatePasswordForm from "@/app/components/UpdatePasswordForm";
import React from "react";

const ChangePasswordPage = () => {
  return (
    <>
      <h1 className="text-center m-5">Update Password</h1>
      <div className="text-center">
        <UpdatePasswordForm />
      </div>
    </>
  );
};

export default ChangePasswordPage;
