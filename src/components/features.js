import React from "react";

export default function Features() {
    return (
      <div>
        <div className="bg-[#000212] text-white pt-[60px] text-center rounded-t-[1000px]  w-full h-[1000px]">
          {/* <div className="bg-[#000212] text-white pt-[60px] text-center mb-20 rounded-t-[500px]  w-full h-[900px]"> */}
            <div className="font-bold pt-40 px-4 lg:px-80 text-[20px] lg:text-[38px]">
              Other noteworthy features you’ll enjoy
            </div>
            <div className="flex pt-4 gap-8 justify-center">
              <table className="border mt-14 h-1/2 border-gray-300 w-3/5">
                <tr className=" h-32 border  border-gray-300 ">
                  <td className=" h-32 border hover:bg-[#291e49] border-gray-300 ">
                    Buy Data
                  </td>
                  <td className=" h-32 border hover:bg-[#291e49] border-gray-300 ">
                    Share Subscription
                  </td>
                  <td className=" h-32 border border-gray-300 hover:bg-[#291e49]">
                    Pay Bills
                  </td>
                </tr>
                <tr className=" h-32 border border-gray-300 ">
                  <td className=" h-32 border border-gray-300 hover:bg-[#291e49]">
                    Buy Airtime
                  </td>
                  <td className=" h-32 border border-gray-300 hover:bg-[#291e49]">
                    Piggy Save
                  </td>
                  <td className=" h-32 border border-gray-300 hover:bg-[#291e49]">
                    Share Netflix Plan
                  </td>
                </tr>
                <tr className=" h-32 border border-gray-300 ">
                  <td className=" h-432032 border border-gray-300 hover:bg-[#291e49]">
                    Pay With Dollar
                  </td>
                  <td className=" h-32 border border-gray-300 hover:bg-[#291e49] ">
                    Exchange Dollar
                  </td>
                  <td className=" h-32 border border-gray-300 hover:bg-[#291e49]">
                    Save In Dollar
                  </td>
                </tr>
              </table>
            </div>
            <div className="lg:px-[400px] px-12 pt-14">and Lots more...</div>
            <div className="w-full items-center justify-center text-center"></div>
          </div>
        </div>
      // </div>
    );
}