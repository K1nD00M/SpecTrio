import { classNames } from 'lib';
import { ReactNode } from 'react';
import cls from './NavItem.module.scss';

interface NavItemProps {
   className?: string,
   children: ReactNode,

}

export const NavItem = ({ className, children}: NavItemProps) => {
   return (
      <div className={classNames(cls.NavItem, {}, [className])}>
         <div className={cls.item}>
            {children}
         </div>
      </div>
   )
}