/* eslint-disable react/prop-types */
const Part1 = ({ service, setservice }) => {
  return (
    <form className="formdiv">
      <label className=" formlabel">How you like the service?</label>
      <select
        className="forminput"
        value={service}
        onChange={(e) => setservice(Number(e.target.value))}
      >
        <option value="0">Worst 👎(0%)</option>
        <option value="25">Not bad 😒 (25%)</option>
        <option value="65"> Good 🤩 (65%)</option>
        <option value="98">Excellent 😍 (98%)</option>
      </select>
    </form>
  );
};

export default Part1;
