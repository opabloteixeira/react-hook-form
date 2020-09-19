
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().min(2, "Minimo 2 caracteres").required(),
    email: yup.string().email("Digite um email valido").required("Email obrigatorio"),
})


export default schema;