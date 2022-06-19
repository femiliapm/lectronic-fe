import React, { useEffect } from "react";
import {
  ButtonLanding,
  Card,
  CardGroup,
  CardItem,
  CardItemGroup,
  FooterLink,
  HeroWrapper,
  LayoutLanding,
  LogoWrapper,
  MenuItemWrapper,
  MenuWrapper,
  NavBarLanding,
  NavItem,
  SectionWrapper,
} from "../../styles/landing";
import logo from "../../assets/svg/logo-app.svg";
import { Link } from "react-router-dom";
import {
  BsBag,
  BsBriefcase,
  BsBasket3,
  BsCashCoin,
  BsBox,
  BsSearch,
  BsCart,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import hero from "../../assets/png/landing01.png";
import heroBlur from "../../assets/svg/landing01-blur.svg";
import AOS from "aos";
import item01 from "../../assets/png/item01.png";
import subs from "../../assets/png/landing02.png";
import subsBlur from "../../assets/svg/landing02-blur.svg";
import bgFooter from "../../assets/svg/bg-footer.svg";

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <LayoutLanding bgFooter={bgFooter}>
      <section className="first">
        <NavBarLanding>
          <LogoWrapper>
            <img src={logo} alt="logo" width={50} height={50} />
            <p className="primary">Lectronic</p>
          </LogoWrapper>
          <MenuWrapper>
            <ButtonLanding to="/lectronic-shop">
              <div className="bg-primary sign-up">Sign Up</div>
            </ButtonLanding>
            <MenuItemWrapper>
              <Link to="/lectronic-shop" className="black">
                Home
              </Link>
              <Link to="/lectronic-shop" className="black">
                Product
              </Link>
              <Link to="/lectronic-shop" className="black">
                Community
              </Link>
              <Link to="/lectronic-shop" className="black">
                About
              </Link>
            </MenuItemWrapper>
          </MenuWrapper>
        </NavBarLanding>
        <HeroWrapper>
          <div className="left">
            <div className="title">
              Take Your Time And <span className="primary">Shop</span> Anywhere
            </div>
            <div className="sub-title black-light">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit..
            </div>
            <div className="cta-landing">
              <ButtonLanding to="/lectronic-shop">
                <div className="bg-primary shop-now">
                  <BsBag className="stroke-white" />
                  Shop Now
                </div>
              </ButtonLanding>
              <ButtonLanding to="/lectronic-shop">
                <div className="secondary seller border-secondary">
                  <BsBriefcase className="stroke-secondary" />
                  Be a Seller
                </div>
              </ButtonLanding>
            </div>
          </div>
          <div className="right">
            <div className="img-wrapper" data-aos="fade-up">
              <img src={hero} alt="" height={"430vw"} />
              <img src={heroBlur} alt="" className="blur" />
            </div>

            <div className="ballon bg-white one">
              <p>
                Trusted by more than <span className="primary">6000+</span>{" "}
                people.
              </p>
            </div>
            <div className="ballon bg-white two">
              <p>
                There are <span className="primary">6 million</span> electronic
                products.
              </p>
            </div>
            <div className="ballon bg-white three">
              <p>
                There are <span className="primary">5000+</span> trusted
                sellers.
              </p>
            </div>
          </div>
        </HeroWrapper>
      </section>

      <SectionWrapper className="second">
        <div className="info">
          <label className="primary">How it Works</label>
          <h1>
            Make An <br />
            Order Easily
          </h1>
        </div>
        <CardGroup>
          <Card className="border-dark">
            <div className="icon">
              <BsBasket3 />
            </div>
            <div className="title">Select Product</div>
            <div className="description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </Card>
          <Card className="border-dark">
            <div className="icon">
              <BsCashCoin />
            </div>
            <div className="title">Make Payment</div>
            <div className="description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </Card>
          <Card className="border-dark">
            <div className="icon">
              <BsBox />
            </div>
            <div className="title">Receive Product</div>
            <div className="description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </Card>
        </CardGroup>
      </SectionWrapper>

      <SectionWrapper className="second">
        <div className="info">
          <label className="primary">Our Product</label>
          <h1>
            The Best Product By
            <br />
            Lectronic
          </h1>
        </div>
        <div>
          <NavItem>
            <div className="tab">
              <button className="black-light">Headphone</button>
              <button className="black-light">Air Conditioner</button>
              <button className="black-light">Television</button>
              <button className="black-light">Router</button>
            </div>

            <div className="search-bar border-secondary">
              <input placeholder="Search" className="primary" />
              <button>
                <BsSearch className="stroke-primary" />
              </button>
            </div>
          </NavItem>

          <CardItemGroup>
            <CardItem>
              <div className="layer-cart bg-secondary">
                <BsCart className="stroke-white" />
              </div>
              <div className="layer-top">
                <div className="item">Sennheiser HD-25</div>
                <div className="price primary">$3000</div>
              </div>
              <div className="layer-img">
                <img src={item01} alt="" />
              </div>
            </CardItem>
            <CardItem>
              <div className="layer-cart bg-secondary">
                <BsCart className="stroke-white" />
              </div>
              <div className="layer-top">
                <div className="item">Sennheiser HD-25</div>
                <div className="price primary">$3000</div>
              </div>
              <div className="layer-img">
                <img src={item01} alt="" />
              </div>
            </CardItem>
            <CardItem>
              <div className="layer-cart bg-secondary">
                <BsCart className="stroke-white" />
              </div>
              <div className="layer-top">
                <div className="item">Sennheiser HD-25</div>
                <div className="price primary">$3000</div>
              </div>
              <div className="layer-img">
                <img src={item01} alt="" />
              </div>
            </CardItem>
            <CardItem>
              <div className="layer-cart bg-secondary">
                <BsCart className="stroke-white" />
              </div>
              <div className="layer-top">
                <div className="item">Sennheiser HD-25</div>
                <div className="price primary">$3000</div>
              </div>
              <div className="layer-img">
                <img src={item01} alt="" />
              </div>
            </CardItem>
            <CardItem>
              <div className="layer-cart bg-secondary">
                <BsCart className="stroke-white" />
              </div>
              <div className="layer-top">
                <div className="item">Sennheiser HD-25</div>
                <div className="price primary">$3000</div>
              </div>
              <div className="layer-img">
                <img src={item01} alt="" />
              </div>
            </CardItem>
            <CardItem>
              <div className="layer-cart bg-secondary">
                <BsCart className="stroke-white" />
              </div>
              <div className="layer-top">
                <div className="item">Sennheiser HD-25</div>
                <div className="price primary">$3000</div>
              </div>
              <div className="layer-img">
                <img src={item01} alt="" />
              </div>
            </CardItem>
          </CardItemGroup>

          <div className="info">
            <button className="btn-view-all bg-primary">View All</button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="second">
        <div className="subs-wrapper">
          <div className="left" data-aos="fade-up">
            <img src={subs} alt="" width={"450vw"} className="subs" />
            <img src={subsBlur} alt="" className="subs-blur" />
          </div>
          <div className="right">
            <h1>Get 30% Off of Your First Purchases</h1>
            <p className="black-light">
              Enter your Email Below To Receive The Discount Code
            </p>
            <div className="subs-input border-primary">
              <input
                type={"email"}
                placeholder="Enter Your Email"
                className="primary"
              />
              <button className="btn-view-all bg-primary" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="footer">
        <div className="footer-wrapper">
          <div className="footer-left">
            <img src={logo} alt="" />
            <div className="location">
              91 Spring Dr.
              <br />
              Hudsonville, MI 49426
            </div>
            <div className="social-media">
              <a href={"https://web.facebook.com/"} target="__blank">
                <BsFacebook />
              </a>
              <a href={"https://www.instagram.com/"} target="__blank">
                <BsInstagram />
              </a>
              <a href={"https://twitter.com/home"} target="__blank">
                <BsTwitter />
              </a>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-nav">
              <div className="title">How it Works</div>
              <div className="item">
                <FooterLink to="/lectronic-shop">Select Product</FooterLink>
                <FooterLink to="/lectronic-shop">Make Payment</FooterLink>
                <FooterLink to="/lectronic-shop">Receive Product</FooterLink>
              </div>
            </div>
            <div className="footer-nav">
              <div className="title">Product</div>
              <div className="item">
                <FooterLink to="/lectronic-shop">Headphone</FooterLink>
                <FooterLink to="/lectronic-shop">Air Conditioner</FooterLink>
                <FooterLink to="/lectronic-shop">Router</FooterLink>
                <FooterLink to="/lectronic-shop">Television</FooterLink>
              </div>
            </div>
            <div className="footer-nav">
              <div className="title">Help</div>
              <div className="item">
                <FooterLink to="/lectronic-shop">About</FooterLink>
                <FooterLink to="/lectronic-shop">Contact Us</FooterLink>
                <FooterLink to="/lectronic-shop">Download App</FooterLink>
                <FooterLink to="/lectronic-shop">FAQs</FooterLink>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </LayoutLanding>
  );
};

export default LandingPage;
