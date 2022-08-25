import Input from "./index";
import { useField } from "formik";

export default function MyInput(props) {
  // this will return field exactly like <Field>{({ field }) => ... }</Field>
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props?.name} className="text-sm font-medium pb-2">
        {props?.label}
      </label>
      <Input {...field} {...props} />
      <span className="text-primary text-xs">{meta.error && meta.touched && <div>{meta.error}</div>}</span>
    </>
  );
}
