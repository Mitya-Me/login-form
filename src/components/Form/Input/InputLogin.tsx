import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { IInput } from "./Input.interface";
import { StyledInput, StyledLabel } from "./InputStyles";



export const InputLogin = ({label, inputLabel, placeholder, register, errors}: IInput) => (
    <StyledLabel>
       { inputLabel}
        <StyledInput
            placeholder={placeholder}
            err={errors.hasOwnProperty("login") ?  true : false}
            {...register(label, {
                required: true,
                validate: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : false,
            })}
        />
        {errors.login && errors.login.type === "validate" && <ErrorMessage errorText='Некорректный формат'/>}
        {errors.login && errors.login.type === "required" && <ErrorMessage errorText='Обязательное поле'/>}
    </StyledLabel>
);
