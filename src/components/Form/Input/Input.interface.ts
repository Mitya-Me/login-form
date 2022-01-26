import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../Form";



export interface IInput { 
	register: UseFormRegister<IFormValues>;
	label: Path<IFormValues>,
	placeholder?: string;
	inputLabel: string;
	errors: {
	  login?: FieldError | undefined;
	  password?: FieldError | undefined;
	}
}