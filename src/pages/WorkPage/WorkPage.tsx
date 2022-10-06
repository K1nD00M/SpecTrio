import { FriendList } from 'components/FriendList/FriendList';
import { TaskList } from 'components/TaskList/TaskList';
import { classNames } from 'lib';
import cls from './WorkPage.module.scss';

interface WorkPageProps {
   className?: string
}

export const WorkPage = ({className}: WorkPageProps) => {
   return (
      <div className={classNames(cls.WorkPage, {}, [className])}>
         <FriendList />
         <TaskList />
      </div>
   )
}