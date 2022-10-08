import { classNames } from 'lib';
import { Col, Container, Row } from 'react-bootstrap';
import cls from './User.module.scss';

interface UserProps {
   className?: string
}

export const User = ({className}: UserProps) => {
   return (
      <Container>
         <Row gap={5}>
            <Col lg={6} className={cls.block}>
               <div className={cls.info}>
                  <img 
                     src="https://pic.rutubelist.ru/user/b8/85/b885f7bcf35eb2bbb6cb993fc638f4bb.jpg" alt=""
                     className={cls.img}
                  />
               </div>
            </Col>
            <Col lg={6} className={cls.block}>
               <div className={ cls.info}>
                  2
               </div>
               <div className={cls.info}>
                  3
               </div>
               <div></div>
            </Col>
         </Row>
      </Container>
   )
}