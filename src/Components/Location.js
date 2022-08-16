import { React, Component } from "react";

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: "30°c",
            city: "Kolkata,",
        };
    }

    changeTemp = () => {
        if (this.state.temp === "30°c") {
            this.setState({ temp: "33°c" });
        } else {
            this.setState({ temp: "30°c" });
        }
    };

    render() {
        return (
            <>
                <div className="location">
                    <div className="curr-location">
                        <span>Current Location: {this.state.city} </span>
                        <span>Temparature: {this.state.temp} </span>
                    </div>
                    <button
                        className="btn btn-outline-info reset"
                        type="reset"
                        onClick={this.changeTemp}
                    >
                        Click to Refresh
                    </button>
                </div>
            </>
        );
    }
}


export default Location;


/**
 * 


// const Location = (props) => {
//     const api = {
//         url: "https://api.openweathermap.org/data/2.5/weather/",
//         key: "63362e88851a1da3fb7a18912571b3cc",
//     };
//     const [input, setInput] = useState("");
//     const [currTemp, setCurrTemp] = useState({})

//     const updateTemp = (event) => {
//         // if (event.key == "Enter") {
//             fetch(`${api.url}?q=kolkata&units=metrics&APPID=${api.key}`)
//                 .then((res) => res.json())
//                 .then((data) => {

//                     setCurrTemp(data)
//                     setInput("");
//                     console.log(data)
//                 })
//         // }
//     }

// {Math.round(currTemp.main.temp - 273)}
//         return (
//             <>
//                 <div className="location">
//                     <div className="curr-location">
//                         <span>Current Location: Kolkata, </span>
//                         <span>Temparature: 32°C</span>
//                     </div>
//                     <button
//                         className="btn btn-outline-info reset"
//                         type="reset"
//                     >
//                         Click to Refresh
//                     </button>
//                 </div>
//             </>
//         )
//     // }
// }
 */