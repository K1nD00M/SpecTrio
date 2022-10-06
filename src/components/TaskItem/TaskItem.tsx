import { classNames } from 'lib';
import { Button } from 'UI/Button/Button';
import cls from './TaskItem.module.scss';

export enum TaskType {
   URGENT = 'urgent',
   HIGH = 'high',
   MEDIUM = 'medium',
   LOW = 'low'
}

interface TaskItemProps {
   className?: string,
   name: string,
   date: number,
   priority: TaskType,
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
         <span>
            {name}
         </span>

         {date > 4
            ? <span className={cls.medium}>{date + ' дней'}</span>
            : date > 1
            ? <span className={cls.high}>{date + ' дня'}</span>
            : <span className={cls.urgent}>{'1 день'}</span>
         } 

         <div>
            {
               priority === 'urgent'
                  ? <p className={classNames(cls.urgent, {}, [cls.priority])}>Срочный</p>
                  : priority === 'high'
                  ?  <p className={classNames(cls.high, {}, [cls.priority])}>Высокий</p>
                  : priority === 'medium'
                  ?  <p className={classNames(cls.high, {}, [cls.priority])}>Средний</p>
                  :  <p className={cls.priority}>Низкий</p>
            }
            {isSolo
               ? <p className={cls.solo}>Индивидуальный</p> 
               : <p className={cls.solo}>Общий</p>
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