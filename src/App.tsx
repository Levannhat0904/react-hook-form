import "./App.css";
import FormHelper from "./formHelper";
import { useFormFields } from "./hook/useFormInfo";

export default function App() {
  const formFields = useFormFields();

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <FormHelper formFields={formFields} />
    </div>
  );
}
