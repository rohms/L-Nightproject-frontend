import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().min(2).max(50).required(),
    message: yup.string().min(10).required()
});

export default formSchema;