import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Form from "./Form";
import FormattedMessage from "./FormattedMessage";
import FormLabel from "./FormLabel";


function RegisterForm() {
  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data) => {
    console.log('data: ', data);
  }; // your form submit function which will invoke after successful validation

  const getPassWordError = () => {
    if (errors.password.type === "required") {
      return "required field";
    } else if (errors.password.type === "validate") {
      return "needs to be a min of 8 chars and at least one numb and one char";
    } else {
      return "Failed";
    }
  };
  console.log(watch("example")); // you can watch individual input by pass the name of the input
  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <FormLabel>UserName</FormLabel>
      <input name="userName" defaultValue="test" ref={register} />
      <FormLabel>password</FormLabel>
      {errors.password && (
        <FormattedMessage noBackground type='red'>{getPassWordError()}</FormattedMessage>
      )}
      <input
        name="password"
        ref={register({
          required: true,
          validate: (val) =>
          val.split(" ").filter((word) => word.length >= 3).length >= 4
        })}
      />

      <Button>Register</Button>
    </Form>
  );
}

export default RegisterForm