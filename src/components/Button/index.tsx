import React from 'react'

import  { ButtonContainer } from './styles';
import { IButton } from './types';

const Button = ({title, variant="primary", onClick, ...props}: IButton) => {
  return (
    <ButtonContainer  onClick={onClick} {...props}>
        {title}
    </ButtonContainer>

  )
}

export { Button }