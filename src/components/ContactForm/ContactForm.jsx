import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';

import { TextInput } from 'components/TextInput';
import { FormButton } from './ContactForm.styled';
import { Notification } from 'components/Notification';
import css from './ContactForm.module.css';

const STATUS = {
  success: 'success',
  error: 'error',
};

const nameExpression = RegExp(
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
);

export const ContactForm = ({
  findContactByName,
  findContactByNumber,
  initialValues,
  handleContactChange,
}) => {
  const contactSchema = object({
    name: string()
      .required()
      .min(2, 'Name must be at least 2 characters')
      .matches(
        nameExpression,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .test(
        'Name was entered successfully',
        'This name is already taken',
        value => !findContactByName(value)
      ),
    number: string()
      .required()
      .matches(
        /^\+?\d{1,4}[-.\s]?\d{1,3}[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .min(6, 'Number must be at least 6 characters')
      .test(
        'Number was entered successfully',
        'This number is already taken',
        value => !findContactByNumber(value)
      ),
  });

  const handleFormSubmit = (values, { resetForm }) => {
    handleContactChange(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues ?? { name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={handleFormSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <label className={css.contact_form_group}>
            <span className={css.contact_form_inner_group}>
              <span className={css.contact_form_label}>Name</span>
              <TextInput
                className={css.contact_form_input}
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </span>
            {!touched.name && <Notification>Enter a name</Notification>}
            {touched.name && !errors.name && (
              <Notification status={STATUS.success}>
                Name was entered successfully
              </Notification>
            )}
            {touched.name && errors.name && (
              <Notification status={STATUS.error}>{errors.name}</Notification>
            )}
          </label>
          <label className={css.contact_form_group}>
            <span className={css.contact_form_inner_group}>
              <span className={css.contact_form_label}>Number</span>
              <TextInput
                className={css.contact_form_input}
                type="tel"
                name="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
            </span>
            {!touched.number && <Notification>Enter a number</Notification>}
            {touched.number && !errors.number && (
              <Notification status={STATUS.success}>
                Number was entered successfully
              </Notification>
            )}
            {touched.number && errors.number && (
              <Notification status={STATUS.error}>{errors.number}</Notification>
            )}
          </label>
          <FormButton text="Confirm" type="submit"></FormButton>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  handleContactChange: PropTypes.func.isRequired,
};
