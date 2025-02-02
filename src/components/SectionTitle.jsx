import PropTypes from "prop-types";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b-[2px] pb-5  border-black">
      <h2 className="text-3xl tracking-wider font-medium capitalize">{text}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};

export default SectionTitle;
