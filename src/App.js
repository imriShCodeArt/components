import React from "react";
import { hot } from "react-hot-loader/root";
import Box from "@mui/material/Box";
import Heading from "../shared/data_display/Heading";
import H1 from "../shared/data_display/Heading/H1";
import Form from "../shared/providers/Form";
import FormField from "../shared/io/FormField";
import Button from "../shared/io/Button";
import Stack from "@mui/material/Stack";
//  ******* clears console after each code update ******
window.addEventListener("message", function onWebpackMessage(e) {
  // console.clear();
});
//  *****************************************************

const App = () => {
  return (
    <Box>
      <Form
        validationTerms={{ password: { minLength: 5 } }}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <Stack mx={'2em'} px={'2em'} >
          <H1 color={"primary"} text={"Heading"} />
          <FormField name={'email'} type={'email'} label={'Email'} />
          <FormField name={'fName'} type={'text'} label={'First Name'} />
          <FormField name={'lName'} type={'text'} label={'Last Name'} />
          <FormField name={'password'} type={'password'} label={'Password'} />
          <Button text={"Submit"} />
        </Stack>
      </Form>
    </Box>
  );
};

export default hot(App);
