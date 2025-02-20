import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Invalid phone number").required("Phone number is required"),
    equipment: Yup.array().min(1, "At least one equipment must be selected"),
});


export const initalValues = {
    name: "",
    phone: "",
    equipment: []
}