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
import { Checkbox } from './Checkbox/Checkbox';
import { InputLogin } from './Input/InputLogin';
import { InputPassword } from './Input/InputPassword';


const StyledForm = styled.form`
    padding: 0 10px;
    width: 660px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
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
    } 

    const { register, handleSubmit, setValue, reset, watch,
            getValues, formState: { errors, isSubmitting }} = useForm<IFormValues>({ mode: "onBlur" });

    const watchLogin = watch("login")
    const watchPassword = watch("password")

    useEffect(() => { 
        if (localStorage.getItem("saved") === "true" && watchLogin === localStorage.getItem("login")) { 
            setValue('password', `${localStorage.getItem('password')}`)
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
            <InputLogin
                register={register}
                label='login'
                placeholder='test@test.com'
                inputLabel='Логин'
                errors={errors}
            />
            <InputPassword
                register={register}
                label='password'
                inputLabel='Пароль'
                errors={errors}
            />
            <Checkbox
                dis={!watchPassword && !errors.password}
                checkboxLabel='Запомнить пароль'
                onChange={changeMarked}
                isChecked={isChecked}
                register={register}
                label="savePass"
            />
            <SubmitBtn disValue={isSubmitting} />
        </StyledForm>
    );
};
