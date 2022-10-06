import { classNames } from 'lib';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
   className?: string
}

export const Input: FC<InputProps> = (props: InputProps) => {
   const {
      className,
      ...otherProps
   } = props
   return (
      <input className={classNames(cls.Input, {}, [className])}  {...otherProps} /> 
   )
}