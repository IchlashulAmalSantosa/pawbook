import React from 'react';

const AboutUs = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
            <div className="relative h-full">
              <img
                className="img-fluid absolute inset-0 w-full h-full object-cover rounded-lg"
                src="assets/about.jpeg"
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pr-3">About Us</h6>
            <h1 className="mb-4">Welcome to <span className="text-primary">Tourist</span></h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary mr-2"></i>First Class Flights</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary mr-2"></i>Handpicked Hotels</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary mr-2"></i>5 Star Accommodations</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary mr-2"></i>Latest Model Vehicles</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary mr-2"></i>150 Premium City Tours</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary mr-2"></i>24/7 Service</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
