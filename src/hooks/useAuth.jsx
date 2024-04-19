import axios from "axios";
import { useEffect, useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState(false);

  const action = async (email, password) => {
    setLoading(true);
    await axios
      .request({
        headers: { "Content-Type": "application/json" },
        method: "POST",
        url: "https://shy-cloud-3319.fly.dev/api/v1/auth/login",
        data: {
          email,
          password,
        },
      })
      .then((res) => {
        if (res?.status === 200) {
          localStorage.setItem("token", res?.data?.data?.token || "");
          window.location.href = "/";
        } else {
          new Error("Couldn't login");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.message || "Error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, action };
}

export function useRegister() {
  const [loading, setLoading] = useState(false);

  const action = async (name, email, password) => {
    setLoading(true);
    await axios
      .request({
        headers: { "Content-Type": "application/json" },
        method: "POST",
        url: "https://shy-cloud-3319.fly.dev/api/v1/auth/register",
        data: {
          name,
          email,
          password,
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
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, action };
}

export function useGetMember() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMember() {
      const token = localStorage.getItem("token");

      if (token) {
        await axios
          .request({
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            method: "GET",
            url: "https://shy-cloud-3319.fly.dev/api/v1/auth/me",
          })
          .then((res) => {
            if (res?.status === 200) {
              setUser(res?.data?.data || null);
            } else {
              new Error("Couldn't find user");
            }
          })
          .catch((err) => {
            console.log(err);
            alert(err?.response?.data?.message || "Error");
            localStorage.removeItem("token");
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    }

    getMember();
  }, []);

  return { loading, user };
}
