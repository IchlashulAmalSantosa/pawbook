import React from "react";
import { Link } from "react-router-dom"; // Import Link untuk navigasi

const HeroHeader = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-hero py-5 mb-5 min-h-[70vh]">
        <div className="py-3">
          <div className="container py-3">
            <div className="row justify-center py-3">
              <div className="col-lg-10 pt-8 mt-3 text-center">
                <h1 className="text-5xl text-white mb-3 pt-6 pb-4 animate-slideInDown">
                  Nikmati perjalanan anda dengan BOBO
                </h1>
                <p className="text-lg text-white mb-3 animate-slideInDown">
                  Cari tempat yang anda inginkan
                </p>
                <div className="relative w-3/4 mx-auto animate-slideInDown">
                  <input
                    className="form-control border-0 rounded-full w-full py-3 pl-4 pr-5"
                    type="text"
                    placeholder="Mau nginep dimana?"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-full py-2 px-4 absolute top-0 right-0 mt-[7px] mr-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Container Rekomendasi */}
      <div className="bg-white py-5">
        <div className="container">
          <h2 className="text-center text-2xl md:text-[35px] font-bold mb-5">
            Rekomendasi hari ini
          </h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-3">
              <div className="card">
                <img
                  src="public/assets/hotel1.jpg"
                  className="card-img-top"
                  alt="Taman Safari Indonesia"
                />
                <div className="card-body text-center font-bold">
                  <h5 className="card-title">INDIGO Hotel Bandung, Dago</h5>
                  <p className="card-text">IDR 205.000</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-3">
              <div className="card">
                <img
                  src="public/assets/hotel2.jpg"
                  className="card-img-top"
                  alt="Jakarta Aquarium"
                />
                <div className="card-body text-center font-bold">
                  <h5 className="card-title">Swissbell Resort Bandung</h5>
                  <p className="card-text">IDR 160.000</p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-3">
              <div className="card">
                <img
                  src="public/assets/hotel3.jpg"
                  className="card-img-top"
                  alt="Pintu Gerbang Utama Ancol"
                />
                <div className="card-body text-center font-bold">
                  <h5 className="card-title">Nature Rest - Pangalengan</h5>
                  <p className="card-text">IDR 233.500</p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-3">
              <div className="card">
                <img
                  src="public/assets/hotel4.jpg"
                  className="card-img-top"
                  alt="Dufan Ancol"
                />
                <div className="card-body text-center font-bold">
                  <h5 className="card-title">Pangandaran View</h5>
                  <p className="card-text">IDR 399.993</p>
                </div>
              </div>
            </div>
          </div>
          {/* Button "Cari lebih lanjut yuk!" */}
          <div className="text-center mt-5">
            <Link
              to="/signup" // Tombol menuju halaman Register
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
            >
              Cari lebih lanjut yuk!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHeader;
