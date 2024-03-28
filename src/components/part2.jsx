/* eslint-disable react/prop-types */
const Part2 = ({ service1, setservice1 }) => {
  return (
    <form className="formdiv">
      <label className=" formlabel">How your friends like the service</label>
      <select
        value={service1}
        onChange={(e) => setservice1(Number(e.target.value))}
        className="forminput"
      >
        <option value={0}>Not good 👎(0%)</option>
        <option value={25}>Not bad 😒(25%)</option>
        <option value={65}> Good 🤩 (65%)</option>
        <option value={98}>Excellent 😍 (98%)</option>
      </select>
    </form>
  );
};

export default Part2;
