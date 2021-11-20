import './style.css';
import { Card } from 'antd';

const { Meta } = Card;
const PlanCard = () => {
    return(
        <div className="planning_card">
            <Card
                hoverable
                style={{ width: 180, borderRadius: 12 }}
                cover={<img alt="example" style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </div>
    );
}

export default PlanCard;