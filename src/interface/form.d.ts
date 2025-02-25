type FormField = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  validation: RegisterOptions<DynamicInputs>;
};

type DynamicInputs = {
  [key: string]: string;
};
