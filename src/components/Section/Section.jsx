import PropTypes from 'prop-types';
export default function Section({ title, children }) {
  return (
    <section>
      <div style={{ padding: 20 }}>
        <h1 className>{title}</h1>
        {children}
      </div>
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
