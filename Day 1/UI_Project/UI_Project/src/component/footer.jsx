import "./footer.css"

function Footer(){
    return (
        <footer>
            <div className="footer1">
                <div className="fbox">
                    <p className="head">ABOUT</p>
                    <ul>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Flipkart Stories</li>
                        <li>Press</li>
                        <li>Corporate Information</li>
                    </ul>
                </div>
                <div className="fbox">
                    <p className="head">GROUP COMPANIES</p>
                    <ul>
                        <li>Myntra</li>
                        <li>Cleartrip</li>
                        <li>Shopsy</li>
                    </ul>
                </div>
                <div className="fbox">
                    <p className="head">HELP</p>
                    <ul>
                        <li>Payments</li>
                        <li>Shipping</li>
                        <li>Cancellation & Returns</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="fbox">
                    <p className="head">CONSUMER POLICY</p>
                    <ul>
                        <li>Cancellation & Returns</li>
                        <li>Terms of Use</li>
                        <li>Security</li>
                        <li>Privacy</li>
                        <li>Sitemap</li>
                        <li>Grievance Redressal</li>
                        <li>EPR Compliance</li>
                    </ul>
                </div>
                <div className="fbox">
                    <p className="head">MAIL US</p>
                    <p className="p1">Flipkart Internet Private Limited, <br/>
                    Buildings Alyssa, Begonia & <br />
                    Clove Embassy Tech Village, <br />
                    Outer Ring Road, Devarabeesanahalli Village, <br />
                    Bengaluru, 560103, <br />
                    Karnataka, India
                    </p>
                    <p className="head2">SOCIAL</p>
                    <div className="ficon">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className="fbox">
                    <p className="head">REGISTERED OFFICE ADDRESS</p>
                    <p className="p1">Flipkart Internet Private Limited, <br />
                    Buildings Alyssa, Begonia & <br />
                    Clove Embassy Tech Village, <br />
                    Outer Ring Road, Devarabeesanahalli Village, <br />
                    Bengaluru, 560103, <br />
                    Karnataka, India <br />
                    CIN : U51109KA2012PTC066107 <br />
                    Telephone : 044-45614700
                    </p>
                </div>
            </div>

            <div className="footer2">
                <div className="f2box">
                    <i class="fa-solid fa-shop"></i><p>Beacome a Seller</p>
                </div>
                <div className="f2box">
                    <i class="fa-solid fa-star"></i><p>Advertise</p>
                </div>
                <div className="f2box">
                    <i class="fa-solid fa-gift"></i><p>Gift Cards</p>
                </div>
                <div className="f2box">
                    <i class="fa-solid fa-circle-question"></i><p>Help Center</p>
                </div>
                <div className="f2box">
                    <p>© 2007-2025 Flipkart.com</p>
                </div>
                <div className="f2box">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer