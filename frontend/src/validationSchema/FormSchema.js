import * as yup from "yup";
export const FormSchema = yup.object().shape({
    name: yup.string().required("Name is a mandatory."),
    Dob:yup.string().required("Date of birth or Age is a mandatory."),
    sex:yup.string().required("Sex is a mandatory."),
    mobile:yup.string().min(10).max(10).required("Is not a valid number"),
    govtway:yup.string().required("Please select the Govt Id type"),
    govtid:yup.string().when("govtway",{
        is:"aadhar",
        then:(FormSchema)=>FormSchema.min(12,"Id should be 12 digit Number"),
        otherwise:(FormSchema)=>FormSchema.min(10,"Id should be 10 digit Alpha Numeric")
    }),
    guardian:yup.string().required("Please select Guardian label"),
    guardianname:yup.string(),
    email:yup.string(),
    emergencyno: yup.string().min(10).max(10).required("Is not a valid Number"),
    address:yup.string().required("Address is required"),
    nationality:yup.string().required("Nationality is required")
})
