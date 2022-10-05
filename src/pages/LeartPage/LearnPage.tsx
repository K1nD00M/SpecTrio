import { classNames } from 'lib';
import cls from './LearnPage.module.scss';

interface LearnPageProps {
   className?: string
}

export const LearnPage = ({className}: LearnPageProps) => {
   return (
      <div className={classNames(cls.LearnPage, {}, [className])}>
         
      </div>
   )
}