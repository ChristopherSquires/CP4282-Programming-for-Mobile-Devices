import { Text, View, Image, Button } from 'react-native';
import { useState } from "react"
import Scare from "../components/Scares.jsx";

const goldenFreddy = require("../assets/images/goldenfreddy.png");
const foxy = require("../assets/images/foxy.webp");
const chica = require("../assets/images/chica.jpg")

const images = { "goldenFreddy" : goldenFreddy, "foxy" : foxy, "chica" : chica};

import scareData from "../assets/scares.json";
console.log(scareData)

export default function Index() {

    const [scareIndex, setScareIndex] = useState(0);

  return (
      <View
      style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        >
    <Scare scareData={scareData[scareIndex]} image={images[scareData[scareIndex].image]} />
    <Button title="switch scare" onPress={ () => setScareIndex( (scareIndex + 1) % scareData.length)}/>
        </View>
        );
    }


