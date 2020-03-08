import { Grommet, Box, TextInput, Text } from 'grommet';
import styled from 'styled-components';
import TodayTemp from '../comps/todaytemp';

const StyledGrommet = styled(Grommet)`
  height: 100vh;
`;

export default function Index() {

    let temp_today_text = "Today's temperature is";
    let weather_locations = {
        melbourne:
        {
            "today": {
                "todaytemp": "20"
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
        },
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
        ]
    };

    const suggestions = ["melbourne", "sydney"];


    const [value, setValue] = React.useState("");

    const onChange = event => setValue(event.target.value);

    const onSelect = event => setValue(event.suggestion);

    // if(!value.length) return null;

    const weekArr = value.length > 0 ? weather_locations[value].nextweek : [];

    const weektoday = value.length > 0 ? weather_locations[value].today : [];

    console.log(weekArr);
    if (!weekArr || typeof weekArr === "array") {
        return null;
    }

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
                        placeholder="Enter city name"
                    />
                </Box>


               
                    <TodayTemp text={temp_today_text} current={weektoday.todaytemp} sup={"0"}/>
                                      


                <Box gap="150px" height="small" direction="vertical" pad={{ "vertical": "50px" }} border="between" >

                    {weekArr.map((item, i) => <Box key={"item" + i}>
                        <Text size="large">{item.day}</Text>
                        <Text size="xlarge" key={i}>{item.temp}<sup>0</sup></Text>
                    </Box>)}

                    {/* {weather_locations.map((index,i) => {
                        return(  <Box>
                        <Text size="large">{index.melbourne}</Text>
                        <Text size="xlarge" key={i}>{index.melbourne}<sup>0</sup></Text>
                    </Box>
                      )})
            } */}

                </Box>
            </Box>
        </StyledGrommet >
    );
}