/* eslint-disable react/prop-types */
const Form = ({ review, setreview }) => {
  return (
    <form className="formdiv">
      <label className=" formlabel">Total Bill</label>
      <input
        type="text"
        className=" forminput"
        value={review}
        onChange={(e) => setreview(Number(e.target.value))}
      />
    </form>
  );
};

export default Form;
