import { Text, View, Image } from "react-native";
// COMMIT
export default function Jumpscare( {scareData = {}, image} ) {
    const { character, game, animatronics = [] } = scareData;

    return (
        <>
            <Text>Character: {character}</Text>
            <Text>Game: {game}</Text>
            {animatronics.map((animatronic) => (
                <Text key={animatronic}>{animatronic}</Text>
            ))}
            <Image source={image}/>
        </>
    );
}