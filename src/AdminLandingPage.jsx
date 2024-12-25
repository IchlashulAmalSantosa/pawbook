import React from 'react';

const AdminLandingPage = () => {
    return (
        <div className="container py-5">
        <h1 className="text-3xl font-bold mb-5">Welcome to the Administration Portal</h1>
        <p className="text-lg mb-4">Here you can manage your products, customers, and orders.</p>
  
        {/* Tabel CRUD */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Order Management</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">User</th>
                <th className="border border-gray-300 px-4 py-2">Hotel Ordered</th>
                <th className="border border-gray-300 px-4 py-2">Confirmed</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="border border-gray-300 px-4 py-2">{order.user}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.hotel}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.confirmed ? 'Yes' : 'No'}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 space-x-2">
                    {!order.confirmed && (
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                        onClick={() => confirmOrder(order.id)}
                      >
                        Confirm
                      </button>
                    )}
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                      onClick={() => deleteOrder(order.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Form Penambahan Hotel */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Add New Hotel</h2>
          <form onSubmit={addHotel} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Hotel ID</label>
              <input
                type="text"
                name="id"
                value={newHotel.id}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter hotel ID"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Hotel Name</label>
              <input
                type="text"
                name="name"
                value={newHotel.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter hotel name"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={newHotel.address}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter hotel address"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={newHotel.price}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter hotel price"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Add Hotel
            </button>
          </form>
        </div>
      </div>
    );
  };