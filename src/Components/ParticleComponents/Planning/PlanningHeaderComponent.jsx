import './style.css';
import { Pagination, Button, Row, Col } from 'antd';
import {FilterOutlined} from "@ant-design/icons";
const PlanningHeaderComponent = () => {
    let state = {
        size: 'large'
    }
    return(
        <div className="recent_planning__header">
                <Row>
                    <Col span={8}>
                        <div className="recent_planning__header__text">
                            <h5>Discover Recent Plan</h5>
                            <p>Explore Tour Plan of last One week.</p>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="recent_planning__header__filter d-flex justify-content-center">
                            <Button size={state} icon={<FilterOutlined/>} shape="round" success>Filter</Button>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="recent_planning__header__pagination">
                            <Pagination simple defaultCurrent={2} total={50} className="float-right" />
                        </div>
                    </Col>
                </Row>


            </div>
    );
}

export default PlanningHeaderComponent;