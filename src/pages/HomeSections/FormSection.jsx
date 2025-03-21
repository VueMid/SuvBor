import "./FormSection.css";
import React, { useState, useEffect, useRef } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function FormSection() {
  const [form, setForm] = useState({ username: "", tel: "" });
  const [correct, setCorrect] = useState({ username: "", tel: "" });
  const [error, setError] = useState({ username: false, tel: false });
  const usernameRef = useRef();
  const telRef = useRef();
  if (form.username.length > 0) {
    if (error.username) {
      usernameRef.current.style.borderColor = "red";
      usernameRef.current.style.borderWidth = "2px";  
    } else {
      usernameRef.current.style.borderColor = "greenyellow";
      usernameRef.current.style.borderWidth = "2px";
    }
  }
  if (form.tel.length > 0) {
    if (error.tel) {
      telRef.current.style.borderColor = "red";
      telRef.current.style.borderWidth = "2px";
    } else {
      telRef.current.style.borderColor = "greenyellow";
      telRef.current.style.borderWidth = "2px";
    }
  }
  useEffect(() => {
    if (form.username.length < 3) {
      setError({
        ...error,
        username: ("*Iltimos, kamida 3 ta belgi kiriting."),
      });
      setCorrect({ ...correct, username: false });
    } else if (form.username.length > 25) {
      setError({
        ...error,
        username: ("*Iltimos, maksimal 25 ta belgi kiriting."),
      });
      setCorrect({ ...correct, username: false });
    } else if (form.username.match(/\d+/)) {
      setError({
        ...error,
        username: ("*Iltimos, bu maydonga faqat “harflar”ni kiriting."),
      });
      setCorrect({ ...correct, username: false });
    } else {
      setCorrect({
        ...correct,
        username: true,
      });
      setError({ ...error, username: false });
    }
  }, [form.username]);
  useEffect(() => {
    const numericTel = form.tel.replace(/\D/g, "");
    if (numericTel.length < 9) {
      setError({
        ...error,
        tel: ("*Iltimos, kiriting va ushbu maydonni toʻliq toʻldiring."),
      });
      setCorrect({ ...correct, tel: false });
    } else {
      setCorrect({
        ...correct,
        tel: true,
      });
      setError({ ...error, tel: false });
    }
  }, [form.tel]);
  const handlePhoneNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 9) {
      value = value.replace(
        /(\d{2})(\d{1,3})?(\d{1,2})?(\d{1,2})?/,
        (match, p1, p2, p3, p4) => {
          let formatted = "(" + p1;
          if (p2) formatted += ") " + p2;
          if (p3) formatted += "-" + p3;
          if (p4) formatted += "-" + p4;
          return formatted;
        }
      );
    }
    setForm((prevFormData) => ({
      ...prevFormData,
      tel: value,
    }));
  };
  function formSubmission(e) {
    e.preventDefault();
    if (correct.username && correct.tel) {
      sendData(form.username, form.tel);
      toast.success("Yuborildi!"), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      };
    } else {
      toast.error("Xato"), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      };
    }
  }
  async function sendData(username, tel) {
    const TOKEN = `7793154630:AAHhY924WhPxFfrBxFV_RcwKujzlOqV9s9M`;
    const botID = `-1002422846640`;
    const info = `User  %0A<strong>👤:</strong> ${username}%0A<strong>☎️: </strong>${tel}`;
    const response = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${botID}&text=${info}&parse_mode=html`
    );
    const data = await response.json();
    console.log(data);
    setForm({ username: "", tel: "" });
  }
  return (
    <div>
      <section className="form my-[88px]">
        <div className="container form__container px-4 md:px-[32px] lg:px-4">
          <div className="form__box bg-[#227FCB] rounded-[15px] py-[67px] px-[27px] flex flex-col justify-center items-center gap-[47px] md:px-[150px] lg:py-[36px] lg:px-[80px] xl:gap-[101px]">
            <div className="form__top-box flex flex-col justify-center items-center">
              <h3 className="form__top-title text-center text-white mb-8 font-bold text-[36px] leading-[46px] w-full lg:text-[48px] lg:leading-[54px]">
                Biz bilan bog’laning!
              </h3>
              <p className="form__top-text text-center w-full font-normal text-[18px] leading-[24px] text-white xl:w-[536px] xl:text-[28px] xl:leading-[40px]">
                Har bir qultumda betakror tamni sinab ko‘rish uchun hoziroq buyutma bering!
              </p>
            </div>
            <form
              className="form__bottom-box w-full flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-center lg:items-start lg:w-max xl:w-full"
              onSubmit={formSubmission}
            >
              <div className="form__bottom-boxes w-full flex flex-col justify-start items-start h-[73px] mb-[28px] lg:mb-0 xl:mr-[18px]">
                <input
                  className="form__input w-full text-white rounded-[12px] py-[15px] pl-[20px] font-normal text-[16px] leading-[19px] focus:outline-none border-[2px] border-white lg:w-[300px] xl:w-full"
                  onChange={(e) => {
                    e.preventDefault();
                    setForm({
                      ...form,
                      username: e.target.value,
                    });
                  }}
                  id="text"
                  type="text"
                  ref={usernameRef}
                  autoComplete="off"
                  placeholder="Ism Familya"
                  maxLength={26}
                  value={form.username}
                  required
                />
                {form.username.length > 0 && error.username ? (
                  <p className="form__bottom-error-text text-red-600 font-extrabold text-start mt-1 text-[14px] leading-[16px]">
                    {error.username}
                  </p>
                ) : null}
              </div>
              <div className="form__bottom-boxes w-full h-[73px] flex flex-col justify-start items-start mb-[40px] lg:mb-0 xl:mr-[80px]">
                <div
                  className="form__bottom-mini-boxes w-full flex flex-row justify-start items-center relative rounded-[14px] lg:w-[300px] border-[2px] border-white xl:w-full"
                  ref={telRef}
                >
                  <p className="form__text-tel text-start left-[20px] font-normal text-[16px] leading-[19px] absolute text-white">
                    +998
                  </p>
                  <input
                    className="form__input w-full text-white rounded-[12px] py-[15px] pl-[66px] font-normal text-[16px] leading-[19px] focus:outline-none lg:w-[300px] xl:w-full"
                    id="tel"
                    onChange={handlePhoneNumberChange}
                    type="tel"
                    autoComplete="off"
                    placeholder="(XX) XXX-XX-XX"
                    value={form.tel}
                    maxLength={14}
                    required
                  />
                </div>
                {form.tel.length > 0 && error.tel ? (
                  <p className="form__bottom-error-text text-red-600 font-extrabold text-start mt-1 text-[14px] leading-[16px]">
                    {error.tel}
                  </p>
                ) : null}
              </div>
              <button
                className="form__button text-lg duration-150 font-medium pb-[10px] cursor-pointer outline-2 outline-white text-white py-[10px] px-[57px] rounded-[16px] active:opacity-50 lg:w-[200px] lg:text-[14px] lg:leading-[16px] lg:py-[0px] lg:pb-3 lg:pt-3 xl:w-[490px] xl:pt-5 xl:pb-5 xl:px-[40px]"
                type="submit"
              >
                Jo'natish
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
      />
    </div>
  );
}