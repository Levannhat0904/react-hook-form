import { useState } from "react";
export const useFormFields = () => {
  const [formFields] = useState<FormField[]>([
    {
      name: "fullName",
      label: "Họ và tên",
      type: "text",
      validation: {
        required: true,
        minLength: 2,
        maxLength: 50,
      },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      validation: {
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      },
    },
    {
      name: "phone",
      label: "Số điện thoại",
      type: "tel",
      validation: {
        required: true,
        pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
      },
    },
    {
      name: "age",
      label: "Tuổi",
      type: "number",
      validation: {
        required: true,
        min: 18,
        max: 100,
      },
    },
  ]);

  return formFields;
};