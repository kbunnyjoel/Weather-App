import { Grommet, Box, TextInput, Text, FormField, Table, TableHeader, TableCell, TableRow, TableBody } from 'grommet';
import styled from 'styled-components';

const StyledGrommet = styled(Grommet)`
  height: 100vh;
`;

export default function Index() {


    let mp = {

        melbourne: [
            {
                "today": {
                    "temp": "20"
                },
                "nextweek": [

                    {
                        "day": "Sat",
                        "temp": "20",
                    },
                    {
                        "day": "Mon",
                        "temp": "20",
                    },
                    {
                        "day": "Tue",
                        "temp": "20",
                    },
                    {
                        "day": "Wed",
                        "temp": "20",
                    },
                    {
                        "day": "Thu",
                        "temp": "20",
                    },

                    {
                        "day": "Fri",
                        "temp": "20",
                    },
                    {
                        "day": "Sat",
                        "temp": "20",
                    },


                ]
            }
        ],
        sydney: [
            {
                "Sun": "20",
                "Mon": "19",
                "Tue": "20",
                "Wed": "20",
                "Thur": "20",
                "Fri": "20",
                "Sat": "20",
            }
        ],
        locations: [
            "melbourne",
            "sydney"
        ]

    }

    const suggestions = ["melbourne", "sydney"];


    const [value, setValue] = React.useState("");

    const onChange = event => setValue(event.target.value);

    const onSelect = event => setValue(event.suggestion);


    return (
        <StyledGrommet>
            <Box responsive={true} align="center" fill="vertical" flex={true} direction="column">

                <Box pad="large" height="small">
                    <TextInput
                        value={value}
                        dropProps={{ height: "xsmall" }}
                        onChange={onChange}
                        onSelect={onSelect}
                        suggestions={suggestions}
                    />
                </Box>


                <Box pad="large" flex="grow">
                    <Text size="xlarge">Today's Temperature is</Text>
                    <Text weight="bold" size="200px">29<sup style={{ fontSize: "70px" }}>0</sup></Text>
                </Box>


                <Box gap="150px" height="small" direction="vertical" pad={{ "vertical": "50px" }} border="between" >

                    <Box >
                        <Text size="large">Sun</Text>
                        <Text size="xlarge">19<sup>0</sup></Text>
                    </Box>

                    <Box>
                        <Text size="large">Mon</Text>
                        <Text size="xlarge">19<sup>0</sup></Text>
                    </Box>
                    <Box>
                        <Text size="large">Tue</Text>
                        <Text size="xlarge">19<sup>0</sup></Text>
                    </Box>
                    <Box>
                        <Text size="large">Wed</Text>
                        <Text size="xlarge">19<sup>0</sup></Text>
                    </Box>
                    <Box>
                        <Text size="large">Thu</Text>
                        <Text size="xlarge">19<sup>0</sup></Text>
                    </Box>
                    <Box>
                        <Text size="large">Fri</Text>
                        <Text size="xlarge">19<sup>0</sup></Text>
                    </Box>
                    <Box>
                        <Text size="large">Sat</Text>
                        <Text size="xlarge">19<sup>0</sup></Text>
                    </Box>

                </Box>
            </Box>
        </StyledGrommet >
    );
}