import React from 'react';
import './App.css';
import Palettizer from './palettizer'
import { shadowTarget, highlightTarget, swatchLabelType } from './constants'
import { primary, secondary, tertiary, success, info, warning, danger, neutralCool, neutral } from './base_colors/heart'

let palettizer = new Palettizer(highlightTarget.light, shadowTarget.dark)
const swatchLabel = swatchLabelType.lValue;

const renderSwatchRow = (swatches, key) => {

  let swatch900 = document.getElementById(key + "-" + palettizer.weights[0])
  let swatch800 = document.getElementById(key + "-" + palettizer.weights[1])
  let swatch700 = document.getElementById(key + "-" + palettizer.weights[2])
  let swatch600 = document.getElementById(key + "-" + palettizer.weights[3])
  let swatch500 = document.getElementById(key + "-" + palettizer.weights[4])
  let swatch400 = document.getElementById(key + "-" + palettizer.weights[5])
  let swatch300 = document.getElementById(key + "-" + palettizer.weights[6])
  let swatch200 = document.getElementById(key + "-" + palettizer.weights[7])
  let swatch100 = document.getElementById(key + "-" + palettizer.weights[8])
  let swatch075 = document.getElementById(key + "-" + palettizer.weights[9])
  let swatch050 = document.getElementById(key + "-" + palettizer.weights[10])
  let swatch025 = document.getElementById(key + "-" + palettizer.weights[11])
  let swatch015 = document.getElementById(key + "-" + palettizer.weights[12])

  swatch900.style.background = swatches.swatch900
  swatch800.style.background = swatches.swatch800
  swatch700.style.background = swatches.swatch700
  swatch600.style.background = swatches.swatch600
  swatch500.style.background = swatches.swatch500
  swatch400.style.background = swatches.swatch400
  swatch300.style.background = swatches.swatch300
  swatch200.style.background = swatches.swatch200
  swatch100.style.background = swatches.swatch100
  swatch075.style.background = swatches.swatch075
  swatch050.style.background = swatches.swatch050
  swatch025.style.background = swatches.swatch025
  swatch015.style.background = swatches.swatch015

  swatch900.style.color = swatches.swatch900
  swatch800.style.color = swatches.swatch800
  swatch700.style.color = swatches.swatch700
  swatch600.style.color = swatches.swatch600
  swatch500.style.color = swatches.swatch500
  swatch400.style.color = swatches.swatch400
  swatch300.style.color = swatches.swatch300
  swatch200.style.color = swatches.swatch200
  swatch100.style.color = swatches.swatch100
  swatch075.style.color = swatches.swatch075
  swatch050.style.color = swatches.swatch050
  swatch025.style.color = swatches.swatch025
  swatch015.style.color = swatches.swatch015

  swatch900.textContent = swatches.swatch900
  swatch800.textContent = swatches.swatch800
  swatch700.textContent = swatches.swatch700
  swatch600.textContent = swatches.swatch600
  swatch500.textContent = swatches.swatch500
  swatch400.textContent = swatches.swatch400
  swatch300.textContent = swatches.swatch300
  swatch200.textContent = swatches.swatch200
  swatch100.textContent = swatches.swatch100
  swatch075.textContent = swatches.swatch075
  swatch050.textContent = swatches.swatch050
  swatch025.textContent = swatches.swatch025
  swatch015.textContent = swatches.swatch015

  if (swatchLabel == "hex" || swatchLabel === "L") {

    swatch900.style.color = palettizer.isDark(swatches.swatch900) ? "#FFFFFF" : "#000000"
    swatch800.style.color = palettizer.isDark(swatches.swatch800) ? "#FFFFFF" : "#000000"
    swatch700.style.color = palettizer.isDark(swatches.swatch700) ? "#FFFFFF" : "#000000"
    swatch600.style.color = palettizer.isDark(swatches.swatch600) ? "#FFFFFF" : "#000000"
    swatch500.style.color = palettizer.isDark(swatches.swatch500) ? "#FFFFFF" : "#000000"
    swatch400.style.color = palettizer.isDark(swatches.swatch400) ? "#FFFFFF" : "#000000"
    swatch300.style.color = palettizer.isDark(swatches.swatch300) ? "#FFFFFF" : "#000000"
    swatch200.style.color = palettizer.isDark(swatches.swatch200) ? "#FFFFFF" : "#000000"
    swatch100.style.color = palettizer.isDark(swatches.swatch100) ? "#FFFFFF" : "#000000"
    swatch075.style.color = palettizer.isDark(swatches.swatch075) ? "#FFFFFF" : "#000000"
    swatch050.style.color = palettizer.isDark(swatches.swatch050) ? "#FFFFFF" : "#000000"
    swatch025.style.color = palettizer.isDark(swatches.swatch025) ? "#FFFFFF" : "#000000"
    swatch015.style.color = palettizer.isDark(swatches.swatch015) ? "#FFFFFF" : "#000000"

    if (swatchLabel === "hex") {

      swatch900.textContent = swatches.swatch900
      swatch800.textContent = swatches.swatch800
      swatch700.textContent = swatches.swatch700
      swatch600.textContent = swatches.swatch600
      swatch500.textContent = swatches.swatch500
      swatch400.textContent = swatches.swatch400
      swatch300.textContent = swatches.swatch300
      swatch200.textContent = swatches.swatch200
      swatch100.textContent = swatches.swatch100
      swatch075.textContent = swatches.swatch075
      swatch050.textContent = swatches.swatch050
      swatch025.textContent = swatches.swatch025
      swatch015.textContent = swatches.swatch015

    } else if (swatchLabel === "L") {

      swatch900.textContent = palettizer.getLightnessValue(swatches.swatch900)
      swatch800.textContent = palettizer.getLightnessValue(swatches.swatch800)
      swatch700.textContent = palettizer.getLightnessValue(swatches.swatch700)
      swatch600.textContent = palettizer.getLightnessValue(swatches.swatch600)
      swatch500.textContent = palettizer.getLightnessValue(swatches.swatch500)
      swatch400.textContent = palettizer.getLightnessValue(swatches.swatch400)
      swatch300.textContent = palettizer.getLightnessValue(swatches.swatch300)
      swatch200.textContent = palettizer.getLightnessValue(swatches.swatch200)
      swatch100.textContent = palettizer.getLightnessValue(swatches.swatch100)
      swatch075.textContent = palettizer.getLightnessValue(swatches.swatch075)
      swatch050.textContent = palettizer.getLightnessValue(swatches.swatch050)
      swatch025.textContent = palettizer.getLightnessValue(swatches.swatch025)
      swatch015.textContent = palettizer.getLightnessValue(swatches.swatch015)

    }

  }

}

const renderJSON = (primary, secondary, tertiary, success, info, warning, danger, neutralCool, neutral) => {

  let result = []

  result.push(swatchOutput(primary, palettizer.bases.primary))
  result.push(swatchOutput(secondary, palettizer.bases.secondary))
  result.push(swatchOutput(tertiary, palettizer.bases.tertiary))
  result.push(swatchOutput(success, palettizer.bases.success))
  result.push(swatchOutput(info, palettizer.bases.info))
  result.push(swatchOutput(warning, palettizer.bases.warning))
  result.push(swatchOutput(danger, palettizer.bases.danger))
  result.push(swatchOutput(neutralCool, palettizer.bases.neutralCool))
  result.push(swatchOutput(neutral, palettizer.bases.neutral))

  return JSON.stringify(result)
}

const swatchOutput = (swatches, name) => {
  return {
    name: name,
    swatches: {
      900: swatches.swatch900,
      800: swatches.swatch800,
      700: swatches.swatch700,
      600: swatches.swatch600,
      500: swatches.swatch500,
      400: swatches.swatch400,
      300: swatches.swatch300,
      200: swatches.swatch200,
      100: swatches.swatch100,
      75: swatches.swatch075,
      50: swatches.swatch050,
      25: swatches.swatch025,      
      15: swatches.swatch015
    }
  }
}

const drawWeightScale = () => {
  const result = []
  for (const [index, value] of palettizer.weights.entries()) {
    let id = "weight" + value
    result.push(<div className="swatch" id={id}><h4>{value}</h4></div>)
  }
  return result;
}

const drawSwatchRow = (key) => {
  const result = []
  for (const [index, value] of palettizer.weights.entries()) {
    let id = key + "-" + value
    result.push( <div className="swatch" id={id}/> ) 
  }
  return result;
}


class App extends React.Component {

  componentDidMount() {

    let primarySwatchRow = palettizer.createSwatchRow(primary)
    let secondarySwatchRow = palettizer.createSwatchRow(secondary)
    let tertiarySwatchRow = palettizer.createSwatchRow(tertiary)
    let successSwatchRow = palettizer.createSwatchRow(success)
    let infoSwatchRow = palettizer.createSwatchRow(info)
    let warningSwatchRow = palettizer.createSwatchRow(warning)
    let dangerSwatchRow = palettizer.createSwatchRow(danger)
    let neutralCoolSwatchRow = palettizer.createSwatchRow(neutralCool)
    let neutralSwatchRow = palettizer.createSwatchRow(neutral)

    renderSwatchRow(primarySwatchRow, palettizer.bases.primary)
    renderSwatchRow(secondarySwatchRow, palettizer.bases.secondary)
    renderSwatchRow(tertiarySwatchRow, palettizer.bases.tertiary)
    renderSwatchRow(successSwatchRow, palettizer.bases.success)
    renderSwatchRow(infoSwatchRow, palettizer.bases.info)
    renderSwatchRow(warningSwatchRow, palettizer.bases.warning)
    renderSwatchRow(dangerSwatchRow, palettizer.bases.danger)
    renderSwatchRow(neutralCoolSwatchRow, palettizer.bases.neutralCool)
    renderSwatchRow(neutralSwatchRow, palettizer.bases.neutral)

    let output = renderJSON(primarySwatchRow, secondarySwatchRow,
      tertiarySwatchRow,  successSwatchRow, infoSwatchRow, warningSwatchRow,
      dangerSwatchRow, neutralCoolSwatchRow, neutralSwatchRow)

    console.log(output)
  }

  render() {

    return (

      <div className="App">
        <div>{drawWeightScale()}</div>
        <div>{drawSwatchRow(palettizer.bases.primary)}</div>
        <div>{drawSwatchRow(palettizer.bases.secondary)}</div>
        <div>{drawSwatchRow(palettizer.bases.tertiary)}</div>
        <div>{drawSwatchRow(palettizer.bases.success)}</div>
        <div>{drawSwatchRow(palettizer.bases.info)}</div>
        <div>{drawSwatchRow(palettizer.bases.warning)}</div>
        <div>{drawSwatchRow(palettizer.bases.danger)}</div>
        <div>{drawSwatchRow(palettizer.bases.neutralCool)}</div>
        <div>{drawSwatchRow(palettizer.bases.neutral)}</div>
      </div>
    );
  }

}

export default App;
