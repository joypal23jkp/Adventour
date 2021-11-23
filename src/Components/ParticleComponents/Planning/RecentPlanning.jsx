import './style.css';
import PlanningHeaderComponent from "./PlanningHeaderComponent";
import PlanCard from "./PlanCard";
const RecentPlanning = () => {
    return(
        <div className="recent_planning__content container my-5">
            <PlanningHeaderComponent />
            <div className="panning_card d-flex justify-content-around mt-4 mb-4">
                <PlanCard />
                <PlanCard />
                <PlanCard />
                <PlanCard />
            </div>
        </div>
    );
}

export default RecentPlanning;