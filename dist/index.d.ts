/// <reference types="react" />
import { ISubmitProps } from '@uform/antd/esm/type';
interface Props {
    className?: string;
    onSubmit: Function;
    buttonProps?: ISubmitProps;
    btnText: string;
}
export default function SeniorButton(props: Props): JSX.Element;
export {};
