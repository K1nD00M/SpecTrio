import { classNames } from 'lib';
import cls from './AskPage.module.scss';

interface AskPageProps {
   className?: string
}

export const AskPage = ({className}: AskPageProps) => {
   return (
      <div className={classNames(cls.AskPage, {}, [className])}>
         
      </div>
   )
}