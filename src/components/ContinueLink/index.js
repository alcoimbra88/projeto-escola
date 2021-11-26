import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Continue } from './styled';

export default function ContinueLink() {
  return (
    <Continue>
      <p>Continuar</p>
      <AiOutlineDown cursor="pointer" />
    </Continue>
  );
}
