import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-light pt-5 mt-5">
      <div className="container py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Company Section */}
          <div>
            <h4 className="text-white mb-3">Company</h4>
            <div className="flex flex-col space-y-2">
              <a className="text-gray-400 hover:text-white" href="">
                About Us
              </a>
              <a className="text-gray-400 hover:text-white" href="">
                Contact Us
              </a>
              <a className="text-gray-400 hover:text-white" href="">
                Privacy Policy
              </a>
              <a className="text-gray-400 hover:text-white" href="">
                Terms & Condition
              </a>
              <a className="text-gray-400 hover:text-white" href="">
                FAQs & Help
              </a>
            </div>
          </div>
          {/* Contact Section */}
          <div>
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2 flex items-center">
              <i className="fa fa-map-marker-alt mr-3"></i>123 Street, New York, USA
            </p>
            <p className="mb-2 flex items-center">
              <i className="fa fa-phone-alt mr-3"></i>+012 345 67890
            </p>
            <p className="mb-2 flex items-center">
              <i className="fa fa-envelope mr-3"></i>info@example.com
            </p>
            <div className="flex space-x-2 pt-2">
              <a
                className="text-gray-400 hover:text-white p-2 rounded-full border border-gray-400"
                href=""
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="text-gray-400 hover:text-white p-2 rounded-full border border-gray-400"
                href=""
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="text-gray-400 hover:text-white p-2 rounded-full border border-gray-400"
                href=""
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="text-gray-400 hover:text-white p-2 rounded-full border border-gray-400"
                href=""
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          {/* Gallery Section */}
          <div>
            <h4 className="text-white mb-3">Gallery</h4>
            <div className="grid grid-cols-3 gap-2 pt-2">
              <img className="bg-light p-1" src="img/package-1.jpg" alt="" />
              <img className="bg-light p-1" src="img/package-2.jpg" alt="" />
              <img className="bg-light p-1" src="img/package-3.jpg" alt="" />
              <img className="bg-light p-1" src="img/package-2.jpg" alt="" />
              <img className="bg-light p-1" src="img/package-3.jpg" alt="" />
              <img className="bg-light p-1" src="img/package-1.jpg" alt="" />
            </div>
          </div>
          {/* Newsletter Section */}
          <div>
            <h4 className="text-white mb-3">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="relative">
              <input
                className="form-control border-primary w-full py-3 pl-4 pr-16"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary absolute top-0 right-0 mt-2 mr-2 py-2 px-4"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container">
        <div className="border-t border-gray-600 pt-4">
          <div className="flex flex-col md:flex-row justify-between text-center md:text-left text-sm">
            <p>
              &copy;{" "}
              <a className="border-b border-gray-400 hover:text-white" href="#">
                Bobo.co.id
              </a>
              , All Right Reserved.
            </p>
           
            <div className="flex justify-center md:justify-end space-x-4 mt-2 md:mt-0">
              <a href="" className="text-gray-400 hover:text-white">
                Home
              </a>
              <a href="" className="text-gray-400 hover:text-white">
                Cookies
              </a>
              <a href="" className="text-gray-400 hover:text-white">
                Help
              </a>
              <a href="" className="text-gray-400 hover:text-white">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
