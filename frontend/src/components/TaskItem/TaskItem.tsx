import { classNames } from 'lib';
import { Button } from 'UI/Button/Button';
import cls from './TaskItem.module.scss';

export enum TaskType {
   
}

interface TaskItemProps {
   className?: string,
   name: string,
   date: number,
   priority: string,
   isSolo: boolean,
   coin: number
}

export const TaskItem = (props: TaskItemProps) => {
   const {
      className,
      name,
      date,
      priority,
      isSolo,
      coin
   } = props

   return (
      
      <div className={classNames(cls.TaskItem, {}, [className])}>
         <span className={cls.name}>
            {name}
         </span>

         {date > 4
            ? <span className={classNames(cls.green, {}, [cls.date])}>{date + ' дней'}</span>
            : date > 1
            ? <span className={classNames(cls.high, {}, [cls.date])}>{date + ' дня'}</span>
            : <span className={classNames(cls.urgent, {}, [cls.date])}>{'1 день'}</span>
         } 

         <div className={cls.taskInformation}>
            {
               priority === 'urgent'
                  ? <p className={classNames(cls.urgent, {}, [cls.priority])}>Срочный</p>
                  : priority === 'high'
                  ?  <p className={classNames(cls.high, {}, [cls.priority])}>Высокий</p>
                  : priority === 'medium'
                  ?  <p className={classNames(cls.medium, {}, [cls.priority])}>Средний</p>
                  :  <p className={cls.priority}>Низкий</p>
            }
            {isSolo
               ? <span className={cls.solo}>Индивидуальный</span> 
               : <span className={cls.solo}>Общий</span>
            }
         </div>
         <div className={cls.coin}>
            <span>
               +{coin}
            </span>
            <Button>
               Готово
            </Button>
         </div>
      </div>
   )
}