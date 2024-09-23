import Particles from "react-tsparticles";
//import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import {  useMemo } from "react";
import { loadSeaAnemonePreset } from 'tsparticles-preset-sea-anemone';



const ParticlesComponent = (props) => {

    const particlesInit = async (main) => {
        // Load the sea anemone preset
        await loadSeaAnemonePreset(main);
      };

  const options = useMemo(() => {
    
    return {
        autoPlay: true,
        preset: 'seaAnemone',
        background: {
          color: {
            value: "#000000"
          }
        }
    
    
  }}, []);

 
 

  
  return (
  <Particles id={props.id} init={particlesInit} options={options} style={{
    position: 'absolute',
    width: '50%',
    height: '50%',
    top: 0,
    left: 0,
    zIndex: -1, // Ensure it's behind other content
  }} />


);
};

export default ParticlesComponent;