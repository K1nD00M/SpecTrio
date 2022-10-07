import axios from 'axios';
import { TaskItem, TaskType } from 'components/TaskItem/TaskItem';
import { classNames } from 'lib';
import { useEffect, useState } from 'react';
import { Filter } from 'UI/Filter/Filter';
import cls from './TaskList.module.scss';

interface TaskListProps {
   className?: string
}

export const TaskList = ({className}: TaskListProps) => {
   const [tasks, setTasks] = useState([])

   const prioritySort = (a: any, b: any) => {
      if(a.priority === 'urgent' && b.priority === 'high') return -1
            if(a.priority === 'urgent' && b.priority === 'medium') return -1
            if(a.priority === 'urgent' && b.priority === 'low') return -1
            if(a.priority === 'high' && b.priority === 'urgent') return 1
            if(a.priority === 'high' && b.priority === 'medium') return -1
            if(a.priority === 'high' && b.priority === 'low') return -1
            if(a.priority === 'medium' && b.priority === 'urgent') return 1
            if(a.priority === 'medium' && b.priority === 'high') return 1
            if(a.priority === 'medium' && b.priority === 'low') return -1
            if(a.priority === 'low' && b.priority === 'urgent') return 1
            if(a.priority === 'low' && b.priority === 'high') return 1
            if(a.priority === 'low' && b.priority === 'medium') return 1
            return 0
   }

   useEffect(() => {
      axios.get('http://localhost:3500/hack/tasks')
      .then((res) => {
         let data = res.data
         data.sort((a: any, b: any) => a.date - b.date)
         data.sort((a:any, b:any) => prioritySort(a, b)
         )
         setTasks(data)
      })
   }, [])

   const [selectedSort, setSelectedSort] = useState('priority')

   const sort = (value: string) => {
      setSelectedSort(value)
      if(value === 'coin') {
         setTasks([...tasks].sort((a, b) => prioritySort(a,b)))
         setTasks([...tasks].sort((a, b) => b.coin - a.coin))
      }
      if(value === 'time'){ 
         setTasks([...tasks].sort((a, b) => prioritySort(a,b)))
         setTasks([...tasks].sort((a, b) => a.date - b.date))
      }
      if(value === 'priority') {
         setTasks([...tasks].sort((a, b) => a.date - b.date))
         setTasks([...tasks].sort((a, b) => prioritySort(a,b)))
      }
   }

   return (
      <div className={classNames(cls.TaskList, {}, [className])}>
         <div className={cls.filter}>
            <span className={cls.span}>Текущие задачи</span>
            <Filter
               onChange={(event) => sort(event.target.value)}
               value={selectedSort}
            >
               <option value='priority'>По важности</option>
               <option value='coin'>По награде</option>
               <option value='time'>По времени</option>
            </Filter>
         </div>
            {
               tasks.map((task) => 
                  <TaskItem 
                     name={task.head}
                     date={task.date}
                     priority={task.priority}
                     isSolo={task.isSolo}
                     coin={task.coin}
                     key={task.id}
                  />
               )
            }
      </div>
   )
}