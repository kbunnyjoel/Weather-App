import { Text, Box } from 'grommet';

const TodayTemp = props => {

    return (
        <Box pad="xlarge" flex="grow">
            {props.current &&
                <>
                    <Text size="xlarge">{props.text}</Text>
                    <Text weight="bold" size="200px">{props.current}<sup style={{ fontSize: "70px" }}>{props.sup}</sup></Text>
                </>
            }
        </Box>
    );

}


export default TodayTemp;