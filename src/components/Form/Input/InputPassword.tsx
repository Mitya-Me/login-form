import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { IInput } from "./Input.interface";
import { StyledInput, StyledLabel } from "./InputStyles";

export const InputPassword = ({label, inputLabel, register, errors}: IInput):JSX.Element => (
    <StyledLabel>
       { inputLabel }
		<StyledInput
			type='password'
            err={errors.hasOwnProperty("password") ?  true : false}
            {...register(label, {
                required: true,
            })}
        />
        {errors.password && errors.password.type === "required" && <ErrorMessage errorText='Обязательное поле'/>}
    </StyledLabel>
);
