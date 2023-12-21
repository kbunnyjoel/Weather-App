import React from 'react';
import { Box, Text } from 'grommet';
export default class SameDay extends React.Component {

    constructor(props){
        super(props);
    }

    render(props) {

        return (

            <Box>
                <Text size="xlarge">Today's Temperature is</Text>
                <Text size="xxlarge">{this.props.someday}</Text>
            </Box>

        )
    }

}