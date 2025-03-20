import "./navbar.css"
// import logo from "../assets/logo.svg"\

function Navbar(){
    return (
        <header>
            <div className="logo">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Logo"/>
            </div>
            <div className="inputbar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for Products, Brands and More"/>
            </div>
            <div className="icon">
                <p><i class="fa-solid fa-user"></i> Login <i class="fa-solid fa-chevron-down"></i></p>
                <p><i class="fa-solid fa-cart-shopping"></i> Cart</p>
                <p><i class="fa-solid fa-shop"></i> Become a Seller</p>
            </div>
        </header>
    )
}

export default Navbar