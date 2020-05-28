import { Text, Box } from 'grommet';

const WeekTemp = props => {

    return (
        <Box gap="150px" height="small" direction="row" pad={{ "vertical": "50px" }} border="between" >
            {props.weekdata.map((item, i) => <Box key={"item" + i}>
                <Text size="large">{item.day}</Text>
                <Text size="xlarge" key={i}>{item.temp}<sup>0</sup></Text>
            </Box>
            )}
        </Box>
    );
}


export default WeekTemp;