import { Grommet, Box, Grid } from 'grommet';
import styled from 'styled-components';

const StyledGrommet = styled(Grommet)`
  height: 100vh;
`;

export default function Index() {
    
    return (
        <StyledGrommet>
            <Box responsive={true} align="center" background="yellow" fill={"vertical"}>
                <Grid
                    rows={['xxsmall', 'xsmall']}
                    columns={['xsmall', 'small']}
                    gap="small"
                    areas={[
                        { name: 'header', start: [0, 0], end: [1, 0] },
                        { name: 'nav', start: [0, 1], end: [0, 1] },
                        { name: 'main', start: [1, 1], end: [1, 1] },
                    ]}
                >
                    <Box gridArea="header" background="brand" />
                    <Box gridArea="nav" background="light-5" />
                    <Box gridArea="main" background="light-2" />
                </Grid>
            </Box>
        </StyledGrommet >
    );
}