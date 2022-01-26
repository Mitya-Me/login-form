/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../context";

import styled from "styled-components";

import { useForm } from "react-hook-form";
import { mockData } from "../../mockData/mockData";

import { ErrorEl } from "./ErrorEl/ErrorEl";
import { SubmitBtn } from "./SubmitBtn/SubmitBtn";

import { useHistory } from 'react-router-dom';
import { Routes } from '../../route';
import { Inputt } from './Input/Input';
import { Checkbox } from './Checkbox/Checkbox';


const StyledForm = styled.form`
    padding: 0 10px;
    width: 660px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const Input = styled.input<{ err: any }>`
    margin-top: 10px;
    padding: 20px;
    border-radius: var(--radius);
    background-color: var(--clr-input-bg);
    outline: none;
    border: ${({err}) => err ? '1px solid var(--clr-error)'  : '1px solid var(--clr-input-bg)'};
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const ErrorMessage = styled.div`
    font-size: var(--fz-s);
    line-height: var(--lh-s);
    margin-top: 8px;
    color: var(--clr-error);
`;
 
export interface IFormValues { 
    login: string;
    password: string;
    firstName: string;
    savePass: string;
}


export const Form = ():JSX.Element => {
    const { setAuth }= useContext(AuthContext);
    const router = useHistory()

    const [errElVisible, setErrElVisible] = useState(false);
    const [errElEmail, setErrElEmail] = useState("");
    const [errElMsg, setErrElMsg] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    
    const changeMarked = () => {
        if (getValues("password").length) {
            localStorage.setItem("password", getValues("password"));
            localStorage.setItem("login", getValues("login"));
            localStorage.setItem("saved", "true");
            setIsChecked(!isChecked);
        }
         //use PasswordCredential:
            // if (PasswordCredential) {
            //   return Promise.resolve(null);
            // }
            // const passwordCred = new PasswordCredential({
            //   id: getValues('login'),
            //   password: getValues('password')
            // });
            // navigator.credentials.store(passwordCred);
    } 

    const { register, handleSubmit, setValue, reset, watch,
            getValues, formState: { errors, isSubmitting }} = useForm<IFormValues>({ mode: "onBlur" });

    const watchLogin = watch("login")
    const watchPassword = watch("password")

    console.log(localStorage.getItem('password'))

    useEffect(() => { 
        if (localStorage.getItem("saved") === "true" && watchLogin === localStorage.getItem("login")) { 
            setValue('password', localStorage.getItem('password'))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watchLogin])

    const onSubmit = (data: any) => {
        return new Promise(res => { 
            setTimeout(() => {
                mockData.forEach((el) => {
                    if (el.login === data.login && el.password === data.password) {
                        localStorage.setItem("password", `${data.password}`);
                        localStorage.setItem("login", `${data.login}`);
                        localStorage.setItem("auth", "true");
                        setAuth && setAuth(true);
                        router.push(Routes.PROFILE)
                        reset();
                    }
                    else if (el.login !== data.login) {
                        setErrElEmail(data.login);
                        setErrElVisible(true);
                    }
                    else if (el.login === data.login && el.password !== data.password) {
                        setErrElVisible(true);
                        setErrElMsg("Неверно указан логин или пароль");
                     }
                })
                res('')
            }, 3000)
        }) 
    };



    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            {errElVisible && <ErrorEl errElMsg={errElMsg} errElEmail={errElEmail} />}

            <Label> Логин
                <Input
                    err={errors.hasOwnProperty("login") ? true : false}
                    placeholder='test@only.com'
                    {...register("login", {
                        required: true,
                        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : false 
                        })}
                />
                { errors.login && errors.login.type === 'validate' && <ErrorMessage> Некорректный формат </ErrorMessage>}
                { errors.login && errors.login.type === 'required' && <ErrorMessage> Обязательное поле</ErrorMessage>}
            </Label>

            <Label> Пароль
                <Input
                    type='password'
                    err={errors.hasOwnProperty("password") ?  true : false}
                    {...register("password", { required: true, minLength: 2 })}
                />
                {errors.password && errors.password.type === 'required' && <ErrorMessage> Обязательное поле</ErrorMessage>}
                {errors.password && errors.password.type === 'minLength' && <ErrorMessage> Пароль должен содержать минимум 2 символа</ErrorMessage>}
            </Label>

            <Checkbox
                label="savePass"
                dis={!watchPassword && !errors.password}
                checkboxLabel="Запомнить пароль"
                onChange={changeMarked}
                isChecked={isChecked}
                register={register}
            />
            <SubmitBtn disValue={isSubmitting} />
        </StyledForm>
    );
};
