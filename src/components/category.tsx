import React, { useState, useEffect } from "react";

export function Category() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const closePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <>
      {isPopupVisible && (
        <div className="fixed bottom-0 right-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-4 rounded shadow-lg w-64">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Collect Coupon!</h1>
              <button onClick={closePopup} className="text-xl font-bold">
                x
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-100">
        <div className="m-6 border border-black py-6 bg-orange-400 text-center mt-6">
          BIG BIG BANNER
        </div>

        <div className="m-6">
          <p>หมวดหมู่</p>
          <div className="flex justify-evenly">
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>

            <div className="border border-black p-8">
              <div>img</div>
              <p>Beauty</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
