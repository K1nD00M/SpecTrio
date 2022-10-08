import { classNames } from 'lib';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   className?: string,
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
   const {
      className,
      children,   
      ...otherProps
   } = props

   return (
      <button className={classNames(cls.Button, {}, [className])} {...otherProps}>
         {children}
      </button>
   )
}