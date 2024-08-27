
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section - Logo and Registration Info */}
          <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <img
              src="path-to-logo.png" // Replace with the path to the logo
              alt="Corporate Affairs Commission"
              className="w-24 mb-4"
            />
            <p className="text-sm font-semibold">Proudly Registered</p>
            <p className="text-sm">Corporate Affairs Commission</p>
          </div>

          {/* Middle Sections - Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            {/* NONEVEN Section */}
            <div>
              <h4 className="font-semibold mb-4">NONEVEN</h4>
              <ul>
                <li className="mb-2"><a href="#">Home</a></li>
                <li className="mb-2"><a href="#">Mission</a></li>
                <li className="mb-2"><a href="#">Services</a></li>
                <li className="mb-2"><a href="#">Contact Us</a></li>
              </ul>
            </div>

            {/* Products Section */}
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul>
                <li className="mb-2"><a href="#">Books</a></li>
                <li className="mb-2"><a href="#">Fertilizers</a></li>
                <li className="mb-2"><a href="#">Palm Oil</a></li>
                <li className="mb-2"><a href="#">Coconut Oil</a></li>
                <li className="mb-2"><a href="#">Livestock Feed</a></li>
                <li className="mb-2"><a href="#">Agro Chemicals</a></li>
              </ul>
            </div>

            {/* Locations Section */}
            <div>
              <h4 className="font-semibold mb-4">Locations</h4>
              <ul>
                <li className="mb-2">
                  <strong>Head Office</strong>
                  <br />
                  372 Abak-Ikauraban Road, Nkoe Ebom Etoi, Ukauran L.G.A, Akwa Ibom State, Nigeria.
                </li>
                <li className="mb-2">
                  <strong>Branch Office</strong>
                  <br />
                  5 Udok Office Close, Behind Mechanic Village, Uyo, Akwa Ibom State, Nigeria.
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul>
                <li className="mb-2"><a href="#">Import</a></li>
                <li className="mb-2"><a href="#">Export</a></li>
                <li className="mb-2"><a href="#">Manufacturing</a></li>
                <li className="mb-2"><a href="#">Agro Allied Products</a></li>
                <li className="mb-2"><a href="#">General Contractors</a></li>
                <li className="mb-2"><a href="#">General Merchandise</a></li>
                <li className="mb-2"><a href="#">Real Estate Consultation</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-xs text-center md:text-left">
            ©NONEVEN 2024 All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="X"><i className="fab fa-x"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Mail"><i className="fas fa-envelope"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 text-xs">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
