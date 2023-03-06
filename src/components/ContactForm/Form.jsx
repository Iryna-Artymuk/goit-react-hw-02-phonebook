import uniqid from 'uniqid';

import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import { StyledForm, StyledLable } from './StyledForm';

export default function ContactsForm({ addContact }) {
  const ContactValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is  required'),
    phoneNumber: Yup.string()
    .required(' Phone number is  required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        phoneNumber: '',
      }}
      onSubmit={(value, actions) => {
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
        <StyledLable>
          Name:
          <Field type="text" name="name" />
        </StyledLable>

        <ErrorMessage name="name" component="div" />
        <StyledLable>
          PhoneNumber:
          <Field name="phoneNumber" type="tel" />
        </StyledLable>

        <ErrorMessage name="phoneNumber" component="div" />
        <button type="submit"> Add contact </button>
      </StyledForm>
    </Formik>
  );
}

ContactsForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
