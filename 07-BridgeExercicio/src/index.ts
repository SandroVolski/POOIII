//Ass: Sandro
import IConsole from "./platforms/IConsole";
import PlayStation from "./platforms/PlayStation";
import XBox from "./platforms/XBox";
import AdvancedPlay from "./transmissions/AdvancedPlay";
import Play from "./transmissions/Play";

function startGame(consolePlay : IConsole) {
    console.log("Iniciando COD BOII...");
    const play = new Play(consolePlay);
    play.playing();
    play.result();
}

function startAdvancedPlay(consolePlay : IConsole) {
    console.log("Iniciando...");
    const play = new AdvancedPlay(consolePlay);
    play.playing();
    play.result();
    play.challenge();
}

startGame(new PlayStation());
startGame(new XBox());