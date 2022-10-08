import { Login } from 'components/Login/Login';
import { User } from 'components/User/User';
import { classNames } from 'lib';
import cls from './MainPage.module.scss';

interface MainPageProps {
   className?: string
}

export const MainPage = ({className}: MainPageProps) => {
   return (
      <div className={classNames(cls.MainPage, {}, [className])}>
         <User />
      </div>
   )
}