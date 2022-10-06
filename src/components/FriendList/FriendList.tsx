import { FriendItem } from 'components/FriendItem/FriendItem';
import { classNames } from 'lib';
import { Button } from 'UI/Button/Button';
import { Filter } from 'UI/Filter/Filter';
import { Input } from 'UI/Input/Input';
import cls from './FriendList.module.scss';

interface FriendListProps {
   className?: string
}

export const FriendList = ({className}: FriendListProps) => {
   return (
      <div className={classNames(cls.FriendList, {}, [className])}>
         <span className={cls.span}>Список команды</span>
         <Input placeholder='Поиск. . .'/>
         <div className={cls.list}>
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
            <FriendItem img={1} login={'Trall'} coin={92}  />
         </div>
         <div className={cls.filter}>
            <Filter defaultValue={'value1'}>
               <option value='value1'>По логину</option>
               <option value='value2'>По монетам</option>
            </Filter>
            <span className={cls.filterUsers}>{12} сотрудников</span>
         </div>
      </div>
   )
}