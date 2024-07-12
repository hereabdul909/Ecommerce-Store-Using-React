import React from "react";
import { FooterSection } from "./StyledFooter";
import FooterLogo from "./pngwing.com.png";
import { FaFacebook, FaYoutube, FaSquareInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <FooterSection>
      <div className="sb-footer">
        <div className="sb-footer-links">
          <div className="links-div">
            <h3>OutFit</h3>
            <img src={FooterLogo} alt="" />
          </div>
          <div className="links-div">
            <h4>Shop Products</h4>
            <p>Men</p>
            <p>Women</p>
            <p>Kid</p>
            <p>Beauty</p>
          </div>
          <div className="links_div">
            <h4>Resources</h4>
            <p>Shopify</p>
            <p>Testimonials</p>
            <p>STV</p>
          </div>
          <div className="links_div">
            <h4>Partners</h4>
            <p>Daraz</p>
            <p>Ali Express</p>
            <p>Amazon</p>
          </div>
          <div className="links_div">
            <h4>Company</h4>
            <p>About</p>
            <p>Location</p>
            <p>Our Employee</p>
          </div>
          <div className="links_div">
            <h4>Our Scoial Link</h4>
            <div className="social_media">
              <FaFacebook />
              <FaYoutube />
              <FaSquareInstagram />
            </div>
          </div>
        </div>
        <div>
          <div className="copyright">
            <p>@{new Date().getFullYear()} Outfits. All right reserved.</p>
          </div>
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer;
