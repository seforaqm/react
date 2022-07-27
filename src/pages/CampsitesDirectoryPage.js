import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    // const [campsiteId, setCampsiteId] = useState(0);
    // const selectedCampsite = selectCampsiteById(campsiteId);

    // let selectedCampsite = selectRandomCampsite();

    // const toggleCampsite = () => {
    //     selectedCampsite = selectRandomCampsite();
    //     console.log(selectedCampsite);
    // }
    // was inside the return : 
    //<Button onClick={() => toggleCampsite(selectRandomCampsite)}>
    // Select Random Campsite
    // </Button>

    return (
        <Container>
            <SubHeader current='Directory' />

            <CampsitesList />

        </Container>
    )
};

export default CampsitesDirectoryPage;