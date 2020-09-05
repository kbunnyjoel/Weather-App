import { Grommet, Box } from 'grommet';
import styled from 'styled-components'
import withData from '../comps/apollo_init';
import Places from '../comps/places';
import WeatherList from './weather.js';


const StyledGrommet = styled(Grommet)`
  height: 100vh;
`;

const IndexPage = () => {



    const [value, setValue] = React.useState("");
    const [address, setAddress] = React.useState("");
    const addressUpdate = address => {
        setAddress(address)

    }



    return (

        <StyledGrommet>
            <Box responsive={true} align="center" fill="vertical" flex={true} direction="column">

                <Box width="medium" style={{ marginTop: 150 }}>
                    <Places callback={addressUpdate}
                        searchOptions={{ types: ['(cities'] }} />
                </Box>

                {
                    address.length > 0 &&
                    <WeatherList addval={(address.replace(' ', ",+"))} />
                }


            </Box>
        </StyledGrommet >
    );
}

export default withData(IndexPage);
