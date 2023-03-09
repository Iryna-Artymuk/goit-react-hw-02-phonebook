import uniqid from 'uniqid';
import PhoneInputField from './FormInput';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { StyledForm, Label } from './StyledForm';

export default function ContactsForm({ addContact }) {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const ContactValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is  required'),

    phoneNumber: Yup.string().matches(
      phoneRegExp,
      'Phone number is not valid'
    ),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        phone_number: '',
      }}
      onSubmit={(value, actions) => {
        console.log(value);
        const newContact = {
          id: uniqid(),
          ...value,
        };
        addContact(newContact);
        actions.resetForm();
      }}
      validationSchema={ContactValidationSchema}
    >
      <StyledForm>
        <Label>
          Name
          <Field
            type="text"
            name="name"
            placeholder="Enter name"
            lable="Name:"
          />
        </Label>
        <ErrorMessage name="name" component="div" />
        <Label htmlFor="phone_number">
          Phone number
          <Field
            type="tel"
            name="phone_number"
            component={PhoneInputField}
            style={{
              width: 400,
            }}
          />
        </Label>

        <ErrorMessage name="phoneNumber" component="div" />
        <button type="submit"> Add contact </button>
      </StyledForm>
    </Formik>
  );
}

ContactsForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
