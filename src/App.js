import React from 'react';
import './App.css';
import {primary, secondary, tertiary, success, warning, danger, neutralCool, neutral} from './base_colors/meda2'
import Swatcher from './swatcher'

const swatchLabel = "lightness"

let swatcher = new Swatcher(97, 0.25)

const renderSwatchRow = (swatches, key) => {

  let swatch900 = document.getElementById(key + "-" + swatcher.weights[0])
  let swatch800 = document.getElementById(key + "-" + swatcher.weights[1])
  let swatch700 = document.getElementById(key + "-" + swatcher.weights[2])
  let swatch600 = document.getElementById(key + "-" + swatcher.weights[3])
  let swatch500 = document.getElementById(key + "-" + swatcher.weights[4])
  let swatch400 = document.getElementById(key + "-" + swatcher.weights[5])
  let swatch300 = document.getElementById(key + "-" + swatcher.weights[6])
  let swatch200 = document.getElementById(key + "-" + swatcher.weights[7])
  let swatch100 = document.getElementById(key + "-" + swatcher.weights[8])
  let swatch075 = document.getElementById(key + "-" + swatcher.weights[9])
  let swatch050 = document.getElementById(key + "-" + swatcher.weights[10])
  let swatch025 = document.getElementById(key + "-" + swatcher.weights[11])

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

  if (swatchLabel == "hex" || swatchLabel === "lightness") {

    swatch900.style.color = swatcher.isDark(swatches.swatch900) ? "#FFFFFF" : "#000000"
    swatch800.style.color = swatcher.isDark(swatches.swatch800) ? "#FFFFFF" : "#000000"
    swatch700.style.color = swatcher.isDark(swatches.swatch700) ? "#FFFFFF" : "#000000"
    swatch600.style.color = swatcher.isDark(swatches.swatch600) ? "#FFFFFF" : "#000000"
    swatch500.style.color = swatcher.isDark(swatches.swatch500) ? "#FFFFFF" : "#000000"
    swatch400.style.color = swatcher.isDark(swatches.swatch400) ? "#FFFFFF" : "#000000"
    swatch300.style.color = swatcher.isDark(swatches.swatch300) ? "#FFFFFF" : "#000000"
    swatch200.style.color = swatcher.isDark(swatches.swatch200) ? "#FFFFFF" : "#000000"
    swatch100.style.color = swatcher.isDark(swatches.swatch100) ? "#FFFFFF" : "#000000"
    swatch075.style.color = swatcher.isDark(swatches.swatch075) ? "#FFFFFF" : "#000000"
    swatch050.style.color = swatcher.isDark(swatches.swatch050) ? "#FFFFFF" : "#000000"
    swatch025.style.color = swatcher.isDark(swatches.swatch025) ? "#FFFFFF" : "#000000"

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

    } else if (swatchLabel === "lightness") {

      swatch900.textContent = swatcher.getLightnessValue(swatches.swatch900)
      swatch800.textContent = swatcher.getLightnessValue(swatches.swatch800)
      swatch700.textContent = swatcher.getLightnessValue(swatches.swatch700)
      swatch600.textContent = swatcher.getLightnessValue(swatches.swatch600)
      swatch500.textContent = swatcher.getLightnessValue(swatches.swatch500)
      swatch400.textContent = swatcher.getLightnessValue(swatches.swatch400)
      swatch300.textContent = swatcher.getLightnessValue(swatches.swatch300)
      swatch200.textContent = swatcher.getLightnessValue(swatches.swatch200)
      swatch100.textContent = swatcher.getLightnessValue(swatches.swatch100)
      swatch075.textContent = swatcher.getLightnessValue(swatches.swatch075)
      swatch050.textContent = swatcher.getLightnessValue(swatches.swatch050)
      swatch025.textContent = swatcher.getLightnessValue(swatches.swatch025)

    }

  }

}

const renderJSON = (primary, secondary, tertiary, success, warning, danger, neutralCool, neutral) => {

  let result = []

  result.push(swatchOutput(primary, "primary"))
  result.push(swatchOutput(secondary, "secondary"))
  result.push(swatchOutput(tertiary, "tertiary"))
  result.push(swatchOutput(success, "success"))
  result.push(swatchOutput(warning, "warning"))
  result.push(swatchOutput(danger, "danger"))
  result.push(swatchOutput(neutralCool, "neutral-cool"))
  result.push(swatchOutput(neutral, "neutral"))

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
      25: swatches.swatch025
    }
  }
}

const drawWeightScale = () => {
  const result = []
  for (const [index, value] of swatcher.weights.entries()) {
    let id = "weight" + value
    result.push(<div className="swatch" id={id}><h4>{value}</h4></div>)
  }
  return result;
}

const drawSwatchRow = (key) => {
  const result = []
  for (const [index, value] of swatcher.weights.entries()) {
    let id = key + "-" + value
    result.push( <div className="swatch" id={id}/> ) 
  }
  return result;
}


class App extends React.Component {

  componentDidMount() {

    let primarySwatchRow = swatcher.createSwatchRow(primary)
    let secondarySwatchRow = swatcher.createSwatchRow(secondary)
    let tertiarySwatchRow = swatcher.createSwatchRow(tertiary)
    let successSwatchRow = swatcher.createSwatchRow(success)
    let warningSwatchRow = swatcher.createSwatchRow(warning)
    let dangerSwatchRow = swatcher.createSwatchRow(danger)
    let neutralCoolSwatchRow = swatcher.createSwatchRow(neutralCool)
    let neutralSwatchRow = swatcher.createSwatchRow(neutral)

    renderSwatchRow(primarySwatchRow, "primary")
    renderSwatchRow(secondarySwatchRow, "secondary")
    renderSwatchRow(tertiarySwatchRow, "tertiary")
    renderSwatchRow(successSwatchRow, "success")
    renderSwatchRow(warningSwatchRow, "warning")
    renderSwatchRow(dangerSwatchRow, "danger")
    renderSwatchRow(neutralCoolSwatchRow, "neutral-cool")
    renderSwatchRow(neutralSwatchRow, "neutral")

    let output = renderJSON(primarySwatchRow, secondarySwatchRow,
      tertiarySwatchRow, successSwatchRow, warningSwatchRow,
      dangerSwatchRow, neutralCoolSwatchRow, neutralSwatchRow)

    console.log(output)
  }

  render() {

    return (

      <div className="App">
        <div>{drawWeightScale()}</div>
        <div>{drawSwatchRow("primary")}</div>
        <div>{drawSwatchRow("secondary")}</div>
        <div>{drawSwatchRow("tertiary")}</div>
        <div>{drawSwatchRow("success")}</div>
        <div>{drawSwatchRow("warning")}</div>
        <div>{drawSwatchRow("danger")}</div>
        <div>{drawSwatchRow("neutral-cool")}</div>
        <div>{drawSwatchRow("neutral")}</div>
      </div>
    );
  }

}

export default App;
