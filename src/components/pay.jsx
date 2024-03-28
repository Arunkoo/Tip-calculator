/* eslint-disable react/prop-types */
const Pay = ({ review, service, service1 }) => {
  const average = (service + service1) / 2;
  const Totalbill = review + average;
  return (
    <div className="bg-green-400 flex justify-around items-center rounded-3xl shadow-2xl shadow-black mt-6">
      <h1 className="text-xl font-poppins font-semibold ">You have to pay</h1>
      <p className="border-none font-poppins font-semibold px-5 py-2 h-4 rounded-3xl bg-black text-white  text-base flex justify-center items-center">
        $ {Totalbill}
      </p>
    </div>
  );
};

export default Pay;
