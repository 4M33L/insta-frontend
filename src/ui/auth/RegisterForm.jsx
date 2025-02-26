import {Form} from "react-router-dom";
import FormInput from "../../components/forms/FormInput.jsx";
import Button from "../../components/buttons/Button.jsx";
import FormPasswordInput from "../../components/forms/FormPasswordInput.jsx";

const RegisterForm = () => {
  return (
    <Form className={"flex flex-col w-64 items-center"} method={"POST"}>
      <h1 className={"text-2xl font-bold mb-4"}>Register</h1>
      <input type={"hidden"} name={"formId"} value={"register"}/>
      <FormInput name="username" label="Username" required/>
      <FormInput name="email" label="Email" type="email" required/>
      <FormPasswordInput name="password" label="Password" required/>
      <Button className={"mt-4"} text={"Register"} type={"submit"}/>
      <Button className={"mt-4"} type={"submit"}>Register</Button>
    </Form>
  )
}

export default RegisterForm;