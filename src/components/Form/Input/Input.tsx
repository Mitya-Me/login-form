// @ts-nocheck
import styled from "styled-components";

// import IconCheckBoxOff from "../check_off.svg";
// import IconCheckBoxOn from "../check_on.svg";
// import IconCheckBoxDis from "../check_dis.svg";

// const CheckLabel = styled.label`
//     padding-left: 30px;
//     padding-top: 5px;
//     font-size: var(--fz-m);
//     line-height: var(--lh-m);
//     cursor: pointer;
// `;

// const CheckInput = styled.input.attrs({
//     type: "checkbox",
// })`
//     position: absolute;
//     appearance: none;
//     width: 1px;
//     height: 1px;
//     overflow: hidden;

//     &:checked + span {
//         background-image: url(${IconCheckBoxOn});
//     }

//     &:disabled + span {
//         background-image: url(${IconCheckBoxDis});
//     }
// `;

// const CheckboxEl = styled.span`
//     position: absolute;
//     margin-left: -30px;
//     margin-top: -2px;
//     width: 20px;
//     height: 20px;
//     background-image: url(${IconCheckBoxOff});
//     transition: all 0.5s ease;
// `;

// interface ICheckkk {
//     isChecked: boolean;
// 	dis: boolean | undefined;
// 	register: UseFormRegister<IFormValues>;
// 	name: Path<IFormValues>;
// }


type InputProps = {
	label: Path<IFormValues>;
	register: UseFormRegister<IFormValues>;
	required: boolean;
  };
  
  // The following component is an example of your existing Input Component
export const Inputt = ({ label, register, required }: InputProps) => (
	<>
	  <label>{label}</label>
	  <input {...register(label, { required })} />
	</>
  );




// export const Checkkk = ({ isChecked, dis, register, name }: ICheckkk) => {
//     return (
//         <CheckLabel>
// 			<CheckInput checked={isChecked} disabled={dis} {...register(name, )}/>
//             <CheckboxEl></CheckboxEl>
//             Запомнить пароль
//         </CheckLabel>
//     );
// };

// <CheckLabel>
// <CheckInput checked={isChecked}
// 	disabled={!watchPassword && !errors.password}
// 	{...register("addPassword", {
// 	onChange: changeMarked
// })}/>
// <CheckboxEl></CheckboxEl>
// Запомнить пароль
// </CheckLabel>

// const CheckLabel = styled.label`
// 	padding-left: 30px;
//     padding-top: 5px;
// 	font-size: var(--fz-m);
// 	line-height: var(--lh-m);
// 	cursor: pointer;
// `

// const CheckInput = styled.input.attrs({
// 	type: 'checkbox',
// })`
//     position: absolute;
//     appearance: none;
// 	width: .1px;
// 	height: .1px;
// 	overflow: hidden;

// 	&:checked + span {
// 		background-image: url(${IconCheckBoxOn});
// 	}

//     &:disabled + span {
//         background-image: url(${IconCheckBoxDis})
//     }
// `;

// const CheckboxEl = styled.span`
// 	position: absolute;
// 	margin-left: -30px;
// 	margin-top: -2px;
// 	width: 20px;
// 	height: 20px;
// 	background-image: url(${IconCheckBoxOff});
//     transition: all .5s ease;
// `;
