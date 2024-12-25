import React from "react";

const Process = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="text-center pb-4">
        <h6 className="inline-block bg-white text-primary px-3 uppercase font-medium">
          Process
        </h6>
        <h1 className="text-2xl md:text-4xl font-bold mb-5">3 Easy Steps</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-3 justify-center">
        {/* Step 1 */}
        <div className="relative border border-primary p-4 text-center pt-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
            <i className="fa fa-globe text-white text-3xl"></i>
          </div>
          <h5 className="mt-4 text-lg font-semibold">Choose A Destination</h5>
          <hr className="w-1/4 mx-auto bg-primary mb-1" />
          <hr className="w-1/2 mx-auto bg-primary mt-0" />
          <p className="text-sm text-gray-600">
            Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
          </p>
        </div>
        {/* Step 2 */}
        <div className="relative border border-primary p-4 text-center pt-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
            <i className="fa fa-dollar-sign text-white text-3xl"></i>
          </div>
          <h5 className="mt-4 text-lg font-semibold">Pay Online</h5>
          <hr className="w-1/4 mx-auto bg-primary mb-1" />
          <hr className="w-1/2 mx-auto bg-primary mt-0" />
          <p className="text-sm text-gray-600">
            Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
          </p>
        </div>
        {/* Step 3 */}
        <div className="relative border border-primary p-4 text-center pt-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
            <i className="fa fa-plane text-white text-3xl"></i>
          </div>
          <h5 className="mt-4 text-lg font-semibold">Fly Today</h5>
          <hr className="w-1/4 mx-auto bg-primary mb-1" />
          <hr className="w-1/2 mx-auto bg-primary mt-0" />
          <p className="text-sm text-gray-600">
            Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
