import styled from "styled-components";
import IconCheckBoxOff from "../check_off.svg";
import IconCheckBoxOn from "../check_on.svg";
import IconCheckBoxDis from "../check_dis.svg";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../Form";

const CheckLabel = styled.label`
    padding-left: 30px;
    padding-top: 5px;
    font-size: var(--fz-m);
    line-height: var(--lh-m);
    cursor: pointer;
`;

const CheckInput = styled.input.attrs({
    type: "checkbox",
})`
    position: absolute;
    appearance: none;
    width: 1px;
    height: 1px;
    overflow: hidden;

    &:checked + span {
        background-image: url(${IconCheckBoxOn});
    }

    &:disabled + span {
        background-image: url(${IconCheckBoxDis});
    }
`;

const CheckboxEl = styled.span`
    position: absolute;
    margin-left: -30px;
    margin-top: -2px;
    width: 20px;
    height: 20px;
    background-image: url(${IconCheckBoxOff});
    transition: all 0.5s ease;
`;

interface ICheckbox { 
	register: UseFormRegister<IFormValues>;
	label: Path<IFormValues>;
	dis: boolean;
	isChecked: boolean;
	checkboxLabel: string;
	onChange: () => void;
}


export const Checkbox= ({isChecked, dis, label, register, checkboxLabel, onChange}: ICheckbox) => (
	<CheckLabel>
		<CheckInput checked={isChecked} disabled={dis} {...register(label, {
			onChange: onChange
		})}/>
		<CheckboxEl></CheckboxEl>
		{checkboxLabel}
	</CheckLabel>
)