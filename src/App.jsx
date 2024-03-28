import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Part1 from "./components/Part1";
import Part2 from "./components/part2";
import Pay from "./components/pay";

function App() {
  // state for fetching value from form component and passing it as a prop to pay.jsx...
  const [review, setreview] = useState(null);
  // state for part1 to fetch its value
  const [service, setservice] = useState(null);
  // state for part2 to fetch its value
  const [service1, setservice1] = useState(null);
  return (
    <div className="flex flex-col  items-center   h-[100vh]">
      <h1 className="text-4xl font-poppins font-semibold ">Tip Calculator</h1>
      <div className="flex flex-col bg-green-900 p-8 mt-5 rounded-xl gap-3 shadow-2xl shadow-green-900">
        <Form review={review} setreview={setreview} />
        <Part1 service={service} setservice={setservice} />
        <Part2 service1={service1} setservice1={setservice1} />
        <Pay review={review} service={service} service1={service1} />
      </div>
      <div className="flex justify-center items-center flex-col mt-7 bg-green-900 p-3 rounded-md">
        <p className="font-poppins">
          <span className="text-lg font-semibold">Note 💡 : </span>
          <span className="text-white">
            Bill is calculating on basis of adding total bill to average of
            percentage between how you like the service and your friend liked
            it😁.
          </span>
        </p>
        <p className="font-poppins text-white">Copyright @ArunKumar 2024</p>
      </div>
    </div>
  );
}

export default App;
