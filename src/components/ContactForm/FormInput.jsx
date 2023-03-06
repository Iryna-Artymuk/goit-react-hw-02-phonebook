import PhoneInput from 'react-phone-number-input';
import PropTypes from 'prop-types';
import 'react-phone-number-input/style.css';

const PhoneInputField = props => {
  const {
    field: { name, value },
    form: { setFieldValue },
    onChange,
  } = props;

  const onValueChange = phoneNumber => {
    setFieldValue(name, phoneNumber);

    if (onChange !== null) {
      onChange(phoneNumber);
    }
  };

  return (
    <PhoneInput
      placeholder="Enter phone number"
      name={name}
      value={value}
      onChange={onValueChange}
      defaultCountry="UA"
    />
  );
};

PhoneInputField.propTypes = {
  form: PropTypes.any.isRequired,
  field: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  country: PropTypes.string,
};

PhoneInputField.defaultProps = {
  className: '',
  label: '',
  onChange: null,
  country: 'UK',
  disabled: false,
};

export default PhoneInputField;
