import React, { useCallback, useEffect, useState } from "react";
import { LayoutWrapper } from "../../styles/layouts/auth.styles";
import logo from "../../assets/svg/logo-app.svg";
import heroLogin from "../../assets/png/hero-login.png";
import heroRegister from "../../assets/png/hero-register.png";
import { Link, useNavigate } from "react-router-dom";
import FormLogin from "../../components/moleculs/FormLogin.comp";
import Input from "../../components/atomics/Input.comp";
import { BsPerson, BsKey } from "react-icons/bs";
import Button from "../../components/atomics/Button.comp";
import ButtonArrowBack from "../../components/atomics/ButtonArrowBack.comp";
import { loginAPI, registerAPI } from "../../services/auth.service";

const LayoutAuth = (props) => {
  const { login } = props;
  const navigate = useNavigate();

  const [propsForm, setPropsForm] = useState({
    title: "",
    desc: "",
    component: null,
  });
  const [propsAuth, setPropsAuth] = useState({
    title: "",
    heroImage: "",
    component: null,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const data = { email, password };
      const res = await loginAPI(data);
      console.log(res);
      if (res.status === 200) {
        navigate("/lectronic-shop/explore");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        alert(res.message);
      }
    },
    [email, password, navigate]
  );

  const handleRegister = useCallback(
    async (e) => {
      e.preventDefault();
      const data = { fullName, email, password };
      const res = await registerAPI(data);
      console.log(res);
      if (res.status === 201) {
        navigate("/login");
        alert(res.message);
      }
    },
    [email, fullName, navigate, password]
  );

  const formAuth = useCallback(() => {
    if (login) {
      setPropsForm({
        title: "Welcome Back!",
        desc: "Steps to get started, find the best stuff.",
        component: (
          <form>
            <Input
              icon={<BsPerson />}
              type="email"
              placeholder="Your e-mail address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={<BsKey />}
              type="password"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login-group-btn">
              <Link to={"/auth"} className="black-light">
                Forgot Password?
              </Link>
              <Button text="Login" width="fit-content" onClick={handleLogin} />
            </div>
          </form>
        ),
      });

      setPropsAuth({
        title: "Welcome Back to Lectronic!",
        heroImage: heroLogin,
        component: (
          <div className="create-link">
            Not registered yet?{" "}
            <Link to={"/register"}>
              <span className="primary">Create an Account</span>
            </Link>
          </div>
        ),
      });
    } else {
      setPropsForm({
        title: "Welcome, Please Create an Account",
        desc: "Please fill in your name, email and password",
        component: (
          <form>
            <Input
              icon={<BsPerson />}
              type="text"
              placeholder="What's your name?"
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              icon={<BsPerson />}
              type="email"
              placeholder="Your e-mail address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={<BsKey />}
              type="password"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="register-group-btn">
              <Button
                text="Register"
                width="fit-content"
                onClick={handleRegister}
              />
            </div>
          </form>
        ),
      });

      setPropsAuth({
        title: "Welcome to Lectronic!",
        heroImage: heroRegister,
        component: <div className="create-link"></div>,
      });
    }
  }, [handleLogin, handleRegister, login]);

  useEffect(() => {
    formAuth();
  }, [formAuth]);

  return (
    <LayoutWrapper heroAuth={propsAuth.heroImage}>
      <div className="layout-left">
        <ButtonArrowBack to="/lectronic-shop" />
        <div className="form-auth">
          <FormLogin title={propsForm.title} desc={propsForm.desc}>
            {propsForm.component}
          </FormLogin>
        </div>
        {propsAuth.component}
      </div>

      <div className="layout-right">
        <div className="logo-right">
          <img src={logo} alt="logo" width={"30vw"} />
        </div>
        <div className="welcome">
          <div className="logo">
            <img src={logo} alt="logo" width={"30vw"} />
          </div>
          <div className="title white">{propsAuth.title}</div>
          <p className="desc white">
            We are an e-commerce that is engaged in buying and
            <br /> selling electronic goods, get our special offer now!
          </p>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default LayoutAuth;
