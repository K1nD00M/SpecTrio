import { classNames } from 'lib';
import { DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react';
import cls from './Filter.module.scss';

interface FilterProps extends  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
   className?: string
}

export const Filter: FC<FilterProps> = (props: FilterProps) => {
   const {
      className,
      children,
      ...otherProps
   } = props

   return (
      <select className={classNames(cls.Filter, {}, [className])} {...otherProps}>
         {children}
      </select>
   )
}