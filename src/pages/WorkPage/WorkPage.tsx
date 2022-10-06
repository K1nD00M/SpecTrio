import { FriendList } from 'components/FriendList/FriendList';
import { TaskList } from 'components/TaskList/TaskList';
import { classNames } from 'lib';
import { Col, Container, Row } from 'react-bootstrap';
import cls from './WorkPage.module.scss';

interface WorkPageProps {
   className?: string
}

export const WorkPage = ({className}: WorkPageProps) => {
   return (
      <div className={classNames(cls.WorkPage, {}, [className])}>
         <Container fluid={true}>
            <Row >
               <Col lg={1}></Col>
               <Col lg={7}>
                  <TaskList />
               </Col>
               <Col lg={{span: 4, order: 'first'}} >
                  <FriendList />
               </Col>
            </Row>
         </Container>
      </div>
   )
}