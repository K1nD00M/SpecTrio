import axios from 'axios';
import { FriendItem } from 'components/FriendItem/FriendItem';
import { classNames } from 'lib';
import { useEffect, useState } from 'react';
import { Button } from 'UI/Button/Button';
import { Filter } from 'UI/Filter/Filter';
import { Input } from 'UI/Input/Input';
import cls from './FriendList.module.scss';

interface FriendListProps {
   className?: string
}

export const FriendList = ({className}: FriendListProps) => {
   const [friends, setFriends] = useState([])

   useEffect(() => {
      axios.get('http://localhost:3500/hack/friends')
      .then((res) => {
         setFriends(res.data)
         setSortedFriends(res.data) 
      })
   }, [])

   const [selectedSort, setSelectedSort] = useState('')

   const sort = (value: string) => {
      setSelectedSort(value)
      if(value === 'coin') setSortedFriends([...sortedFriends].sort((a, b) => b.coin - a.coin))
      if(value === 'login') setSortedFriends([...sortedFriends].sort((a, b) => a.login.localeCompare(b.login)))
   }

   const sortSearch = (value: string) => {
      setSearch(value)
      setSortedFriends([...friends].filter((friend) => friend.login.indexOf(value) === 0))
   }  

   const [search, setSearch] = useState('')

   const [sortedFriends, setSortedFriends] = useState(friends)

   return (
      <div className={classNames(cls.FriendList, {}, [className])}>
         <span className={cls.span}>Список команды</span>
         <Input 
            placeholder='Поиск. . .'
            value={search}
            onChange={(event) => sortSearch(event.target.value)}
         />
         <div className={cls.list}>
            {
               sortedFriends.map((friend) => 
                  <FriendItem img={friend.img} login={friend.login} coin={friend.coin} />
               )
            }
         </div>
         <div className={cls.filter}>
            <Filter 
               onChange={(event) => sort(event.target.value)}
               value={selectedSort}
            >
               <option value='login'>По логину</option>
               <option value='coin'>По монетам</option>
            </Filter>
            
               {friends.length > 4
                  ? <span className={cls.filterUsers}>{friends.length} сотрудников</span>
                  : friends.length > 1
                  ? <span className={cls.filterUsers}>{friends.length} сотрудника</span>
                  : <span className={cls.filterUsers}>{friends.length} сотрудник</span>
               }
         </div>
      </div>
   )
}