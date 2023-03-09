import uniqid from 'uniqid';
import PhoneInputField from './FormInput';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { StyledForm, Label } from './StyledForm';

export default function ContactsForm({ addContact }) {
  const phoneRegExp =
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

  const ContactValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is  required'),

    phone_number: Yup.string()
      .required('Phone is  required')
      .matches(phoneRegExp, 'Phone number is not valid'),
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
        <ErrorMessage name="phone_number" component="div" />
        <button type="submit"> Add contact </button>
      </StyledForm>
    </Formik>
  );
}

ContactsForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
