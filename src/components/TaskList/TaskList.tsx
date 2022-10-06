import { TaskItem, TaskType } from 'components/TaskItem/TaskItem';
import { classNames } from 'lib';
import cls from './TaskList.module.scss';

interface TaskListProps {
   className?: string
}

export const TaskList = ({className}: TaskListProps) => {
   return (
      <div className={classNames(cls.TaskList, {}, [className])}>
         <TaskItem 
            name={'Создать список тасков'}
            date={3}
            priority={TaskType.HIGH}
            isSolo={true}
            coin={28}
         />
         <TaskItem 
            name={'Исправить баг на проде'}
            date={5}
            priority={TaskType.URGENT}
            isSolo={false}
            coin={122}
         />
         <TaskItem 
            name={'Создать список тасков'}
            date={13}
            priority={TaskType.MEDIUM}
            isSolo={true}
            coin={28}
         />
         <TaskItem 
            name={'Исправить баг на проде'}
            date={4}
            priority={TaskType.LOW}
            isSolo={false}
            coin={122}
         />
         <TaskItem 
            name={'Создать список тасков'}
            date={3}
            priority={TaskType.LOW}
            isSolo={true}
            coin={28}
         />
         <TaskItem 
            name={'Исправить баг на прadsfоде'}
            date={1}
            priority={TaskType.URGENT}
            isSolo={false}
            coin={1222}
         />
      </div>
   )
}