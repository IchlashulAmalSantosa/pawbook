import React from "react";

const Booking = () => {
  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 10); // Format untuk input type="date"
  };

  return (
    <div className="container mx-auto py-10 px-5">
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-10 rounded-lg shadow-2xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h6 className="uppercase tracking-widest text-gray-300">Booking</h6>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Online Booking</h1>
            <p className="mb-4 leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <p className="mb-6 leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Book A Tour</h1>
            <form>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="checkin">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    defaultValue={getCurrentDate()}
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="nights">
                    Number of Nights
                  </label>
                  <input
                    type="number"
                    id="nights"
                    placeholder="Number of Nights"
                    min="1"
                    max="30"
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="destination">
                    Destination
                  </label>
                  <select
                    id="destination"
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="yogyakarta">Yogyakarta</option>
                    <option value="surabaya">Surabaya</option>
                    <option value="bali">Bali</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
