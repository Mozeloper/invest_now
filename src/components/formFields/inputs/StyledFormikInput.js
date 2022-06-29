import { useField } from 'formik';
import React from 'react'
import ErrorMessage from '../ErrorMessage';
import Password from '../password';
import Input from './index'
const StyledFormikInput = (props) => {

  const [field, meta] = useField(props);

  return (
    <div>
      {props.type === "password" ? <Password {...field} {...props} /> : <Input {...field} {...props} />}
      <ErrorMessage error={meta.error} touched={meta.touched} />
    </div>
  )
}

export default StyledFormikInput