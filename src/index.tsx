import React from "react";
import {
  SchemaForm,
  Submit,
  FormButtonGroup,
} from "@uform/antd";
// import { BaseButtonProps } from 'antd/es/button/button';
import { ISubmitProps } from '@uform/antd/esm/type';

interface Props {
  // formProps: SchemaFormProps
  className?: string
  onSubmit: Function
  buttonProps?: ISubmitProps,
  btnText: string
}

export default function SeniorButton(props: Props) {

  const onSubmitFun = () => {
    const { onSubmit } = props
    return new Promise(async (resolve) => {
			setTimeout(async () => {
				await onSubmit()
				await resolve()
			}, 50);
    })
  }

  return (
    <SchemaForm className={props.className || ''} onSubmit={onSubmitFun}>
      <FormButtonGroup>
        <Submit {...props.buttonProps} showLoading>{props.btnText}</Submit>
      </FormButtonGroup>
    </SchemaForm>
  );
}
