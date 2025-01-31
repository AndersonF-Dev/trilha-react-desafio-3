import React from 'react'
import { Controller } from "react-hook-form";
import { IInput } from './types';

import { IconConteiner, InputContainer, InputText, ErrorText } from './styles';

const Input = ({leftIcon, name, control, defaultValue  = "", errorMessage, ...rest}: IInput) => {
  return (
    <>
    <InputContainer>
        {leftIcon ? <IconConteiner>{leftIcon}</IconConteiner> : null}
        <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{ required: true }}
        render={({ field: { value, onChange} }) => <InputText value={value} onChange={onChange} {...rest} />}
      />
        
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ ErrorText> : null}
    </>
  )
}

export { Input };
