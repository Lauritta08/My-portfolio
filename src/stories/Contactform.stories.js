import React from "react";
import ContactForm from "../stories/Contactform";

export default {
  title: "stories/ContactForm",
  component: ContactForm,
};

const Template = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (formData) => {
    console.log("Form Data Submitted:", formData);
  },
};
