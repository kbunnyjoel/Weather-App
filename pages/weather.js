import React from 'react';
import { Box, Text, Image } from 'grommet';
import axios from 'axios';
import TransformData from './DayItem';
import SameDay from './sameday';

export default class WeatherList extends React.Component {
    constructor(props) {
        super(props);
    }
    state = [{
        weather_data: [],
        count: "1",
    }]


    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + this.props.addval + '&appid=08159436d6bdc17558a96b5884a6368a')
            .then(res => {

                const weather_response = res.data.list;
                console.log(weather_response)
                const weather_list = TransformData(weather_response);
                this.setState({ weather_data: weather_list });

                //console.log(weather_list)
                console.log("here " + JSON.stringify(this.state.weather_data[0].date))
            })
            .catch((err) => {
                console.log(err)
            })


    }


    componentDidUpdate(nextProps) {

        if (this.props.addval !== nextProps.addval) {
            axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + this.props.addval + '&appid=08159436d6bdc17558a96b5884a6368a')
                .then(res => {

                    const weather_response = res.data.list;

                    // console.log(weather_response)

                    const weather_list = TransformData(weather_response);
                    this.setState({ weather_data: weather_list });

                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }

    render() {
        let first;
        if (this.state.weather_data) {
            first = this.state.weather_data[0];
        }
        return (
            <Box>
                <Box direction="row" pad="medium" style={{ marginTop: 50, justifyContent: "center" }}>
                    {this.state.weather_data &&
                        <Box>
                            <Box>
                                <Text size="xxlarge" weight="bold">Today's temperature is</Text>
                            </Box>
                            <Box pad="medium" direction="row" style={{ justifyContent: "center" }}>
                                <Text style={{ marginTop: 20, fontSize: 100 }} weight="bold">{Number.parseFloat(first.getMin() - 273.15).toFixed(0)}&#176;</Text>
                            </Box>
                        </Box>
                    }
                </Box>
                <Box gap="70px" pad="medium" height="300px" responsive={true} style={{ marginTop: 50 }} direction="row-responsive" border="between" >


                    {this.state.weather_data &&
                        this.state.weather_data.map((item, index) =>
                            
                            <Box fill="vertical" direction="column" height="xsmall" style={{ justifyContent: "center" }}>

                                <Box direction="row" style={{ justifyContent: "center" }} >
                                    <Text size="xlarge" weight="bold" style={{ marginRight: 10 }}>{new Date(item.getDay().toString()).toDateString().split(" ")[0]}</Text>
                                    <Text size="xlarge" weight="bold">{item.getDate()}</Text>
                                   
                                </Box>
                                <Box direction="row" style={{ justifyContent: "center" }}>
                                    <Image
                                        height="auto"
                                        width="auto"
                                        fit="contain"
                                        src={"http://openweathermap.org/img/wn/" + item.getIcon() + "@2x.png"}
                                    />
                                </Box>
                                <Box direction="row">
                                    <Box direction="column" pad="medium" style={{ alignItems: "center" }}>
                                        <Text weight="bold" size="large">{Number.parseFloat(item.getMin() - 273.15).toFixed(0)}&#176;</Text>
                                        {/* <Text>Min</Text> */}
                                    </Box>
                                    <Box direction="column" pad="medium" style={{ alignItems: "center" }}>
                                        <Text weight="bold" size="large">{Number.parseFloat(item.getMax() - 273.15).toFixed(0)}&#176;</Text>
                                        {/* <Text>Max</Text> */}
                                    </Box>

                                </Box>
                                <Box pad="medium" direction="column" style={{ alignItems: "center" }}>
                                    <Text weight="bold">{item.getDescription()}</Text>
                                </Box>
                            </Box>
                        )}
                </Box>
            </Box>

        )
    }
}