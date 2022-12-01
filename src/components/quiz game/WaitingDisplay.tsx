import React from "react";

function WaitingDisplay() {
  return (
    <div>
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <h3
                className="text-lg font-medium leading-6 text-gray-900"
                id="modal-title"
              >
                In Lobby
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  The game lobby has been opened. Please wait until the game
                  starts. Do not close thes window.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto w-3/4 text-center border-2 rounded-lg px-2 py-1 text-sm my-5">
            <p>Players in Lobby: 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingDisplay;
