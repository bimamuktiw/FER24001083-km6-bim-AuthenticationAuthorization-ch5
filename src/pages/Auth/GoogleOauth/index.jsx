import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Button from "../../../component/atoms/Button";
import { Icon } from "@iconify/react";

function GoogleLogin({ buttonText }) {
  const registerLoginWithGoogleAction = async (access_token) => {
    await axios
      .request({
        headers: { "Content-Type": "application/json" },
        method: "POST",
        url: "https://shy-cloud-3319.fly.dev/api/v1/auth/google",
        data: {
          access_token,
        },
      })
      .then((res) => {
        if ([200, 201].includes(res?.status)) {
          localStorage.setItem("token", res?.data?.data?.token || "");
          window.location.href = "/";
        } else {
          new Error("Couldn't register");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.message || "Error");
      })
      .finally(() => {});
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) => {
      registerLoginWithGoogleAction(responseGoogle.access_token);
    },
  });

  return (
    <>
      <Button variant="white" className="py-2" onClick={() => loginWithGoogle()}>
        <Icon icon="flat-color-icons:google" height={25} /> {buttonText}
      </Button>
    </>
  );
}

export default GoogleLogin;
