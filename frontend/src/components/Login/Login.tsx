import { classNames } from 'lib';
import { Button } from 'react-bootstrap';
import { Input } from 'UI/Input/Input';
import cls from './Login.module.scss';

interface LoginProps {
   className?: string
}

export const Login = ({className}: LoginProps) => {
   return (
      <div className={classNames(cls.Login, {}, [className])}>
         <div className={cls.block}>
            <span className={cls.span}>Авторизация</span>
            <Input className={cls.inputLogin} placeholder='Логин'/>
            <Input type='password' placeholder='Пароль'/>
            <Button className={cls.btn}>Войти</Button>
         </div>
      </div>
   )
}