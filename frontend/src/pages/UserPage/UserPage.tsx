import { classNames } from 'lib';
import { Col, Container, Row } from 'react-bootstrap';
import cls from './UserPage.module.scss';

interface UserPageProps {
   className?: string
}

export const UserPage = ({className}: UserPageProps) => {
   return (
      <div className={classNames(cls.UserPage, {}, [className])}>
         <Container>
            <Row>
               <Col>
               
               </Col>
            </Row>
         </Container>
      </div>
   )
}