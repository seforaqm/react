import { Col } from "reactstrap";
import { Row } from "reactstrap";
import CampsiteCards from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = () => {
    const campsites = selectAllCampsites();

    return (<Row className="ms-auto">{
        campsites.map((campsite) => {
            return (
                <Col
                    md='5'
                    className='m-4'
                    key={campsite.id}
                >
                    <CampsiteCards campsite={campsite} />
                </Col>
            );
        })};
    </Row>
    );
};

export default CampsitesList;