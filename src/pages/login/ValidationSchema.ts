import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
    password: yup.string().required(),
    username: yup.string().required(),
});

export default loginValidationSchema;
