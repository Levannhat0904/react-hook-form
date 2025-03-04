import { HTMLInputTypeAttribute } from "react";
import { useForm, SubmitHandler, RegisterOptions } from "react-hook-form";

type FormField = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  validation: RegisterOptions<DynamicInputs>;
};

type DynamicInputs = {
  [key: string]: string;
};

const FormHelper = ({ formFields }: { formFields: FormField[] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DynamicInputs>({
    mode: "onChange",
    delayError: 500,
  });
  const onSubmit: SubmitHandler<DynamicInputs> = (data) => console.log(data);

  const getErrorMessage = (fieldName: string) => {
    const error = errors[fieldName];
    if (!error) return "";

    switch (error.type) {
      case "required":
        return `${fieldName} là bắt buộc`;
      case "minLength":
        return `${fieldName} quá ngắn`;
      case "maxLength":
        return `${fieldName} quá dài`;
      case "pattern":
        return `${fieldName} không hợp lệ`;
      case "min":
        return `${fieldName} quá nhỏ`;
      case "max":
        return `${fieldName} quá lớn`;
      default:
        return `${fieldName} có lỗi xảy ra`;
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <div className="flex gap-1">
            <label className="font-medium text-right flex-1 text-gray-700">
              {field.label}
            </label>
            <div className="flex-2">
              <input
                type={field.type}
                className="border-2 border-gray-300 w-full flex-2 rounded-md p-2 focus:border-blue-500 focus:outline-none"
                {...register(field.name, field.validation)}
              />
              <div className="text-left mt-1 text-sm text-red-500">
                {getErrorMessage(field.name)}
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 cursor-pointer rounded-md hover:bg-blue-600 transition-colors"
      >
        Gửi
      </button>
    </form>
  );
};

export default FormHelper;
