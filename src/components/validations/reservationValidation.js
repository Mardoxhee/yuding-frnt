import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const reservationSchema = yup.object().shape({
  reservationDate: yup.date().required(),
  reservationTime: yup.date().required(),
  space: yup.number().required().positive().integer().required(),
  firstName: yup.string().required(),
  name: yup.string().required(),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
  email: yup.string().email(),
  message: yup.string().min(200),
});
