import { Row, Col } from 'antd'
import { Carousel__C } from '../../components'
export const LandingPage = () => {


    return (
        <Row gutter={[0, 0]}>
            <Col span={24}>
                <Carousel__C imageList={['https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80', 'https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80', 'https://expertphotography.b-cdn.net/wp-content/uploads/2021/01/drone-photography-flightsafety.jpg']}/>
            </Col>
        </Row>
    )
}