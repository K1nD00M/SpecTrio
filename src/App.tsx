import { Sidebar } from 'layout/Sidebar/Sidebar';
import { classNames } from 'lib';
import { Route, Routes } from 'react-router-dom';
import {MainPage} from 'pages/MainPage/MainPage'
import 'styles/index.scss'
import { WorkPage } from 'pages/WorkPage/WorkPage';
import { LearnPage } from 'pages/LeartPage/LearnPage';
import { AskPage } from 'pages/AskPage/AskPage';

interface AppProps {
   className?: string
}

export const App = ({className}: AppProps) => {
   return (
      <div className={classNames('app', {}, [className])}>
         <Sidebar />
         <div className='wrapper'>
            <Routes>
               <Route path='/' element={<MainPage />} />
               <Route path='/work' element={<WorkPage />} />
               <Route path='/learn' element={<LearnPage />} />
               <Route path='/ask' element={<AskPage />} />
            </Routes>
         </div>
      </div>
   )
}