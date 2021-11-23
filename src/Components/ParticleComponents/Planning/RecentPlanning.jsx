import './style.css';
import { Button } from 'antd';
import PlanningHeaderComponent from "./PlanningHeaderComponent";
import PlanCard from "./PlanCard";
const RecentPlanning = () => {
    let state = {
        size: 'large',

    }
    return (
        <div className="recent_planning__content container my-5">
            <PlanningHeaderComponent />
            <div className="panning_card d-flex justify-content-around mt-4 mb-4">
                <PlanCard />
                <PlanCard />
                <PlanCard />
                <PlanCard />

            </div>
            <div className="text-center p-3">
                <Button shape="round" success size={state}>
                    View All
                </Button>
            </div>
        </div>
    );
}

export default RecentPlanning;