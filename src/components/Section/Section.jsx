import css from './Section.module.css';
import PropTypes from 'prop-types';
export default function Section({ title, children }) {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      <div
        style={{
          display: 'flex',
          gap: 30,
        }}
      >
        {children}
      </div>
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
