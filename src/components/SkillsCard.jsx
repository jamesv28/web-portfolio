import PropTypes from "prop-types";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};

SkillsCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string,
};
export default SkillsCard;
