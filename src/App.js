import React from 'react';
import './App.css';
import Tonal from './tonal'
import { shadowTarget, highlightTarget, swatchLabelType } from './constants'
import {primary, secondary, tertiary, success, warning, danger, neutralCool, neutral} from './base_colors/indeed'

//
// Enter your colors below, or comment out and experiment with the import above.
// The values below from my design system Meda, only as a starting point
//

//  var primary = "#0073E6"
//  var secondary = "#7C66CC"
//  var tertiary = "#FF6900"
//  var success = "#198A61"
//  var warning = "#ffa500"
//  var danger = "#DA3E41"
//  var neutralCool = "#717684"
//  var neutral = "#787878"

let tonal = new Tonal(highlightTarget.light, shadowTarget.light)
const swatchLabel = swatchLabelType.lValue;

const renderSwatchRow = (swatches, key) => {

  let swatch900 = document.getElementById(key + "-" + tonal.weights[0])
  let swatch800 = document.getElementById(key + "-" + tonal.weights[1])
  let swatch700 = document.getElementById(key + "-" + tonal.weights[2])
  let swatch600 = document.getElementById(key + "-" + tonal.weights[3])
  let swatch500 = document.getElementById(key + "-" + tonal.weights[4])
  let swatch400 = document.getElementById(key + "-" + tonal.weights[5])
  let swatch300 = document.getElementById(key + "-" + tonal.weights[6])
  let swatch200 = document.getElementById(key + "-" + tonal.weights[7])
  let swatch100 = document.getElementById(key + "-" + tonal.weights[8])
  let swatch075 = document.getElementById(key + "-" + tonal.weights[9])
  let swatch050 = document.getElementById(key + "-" + tonal.weights[10])
  let swatch025 = document.getElementById(key + "-" + tonal.weights[11])

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

  if (swatchLabel == "hex" || swatchLabel === "L") {

    swatch900.style.color = tonal.isDark(swatches.swatch900) ? "#FFFFFF" : "#000000"
    swatch800.style.color = tonal.isDark(swatches.swatch800) ? "#FFFFFF" : "#000000"
    swatch700.style.color = tonal.isDark(swatches.swatch700) ? "#FFFFFF" : "#000000"
    swatch600.style.color = tonal.isDark(swatches.swatch600) ? "#FFFFFF" : "#000000"
    swatch500.style.color = tonal.isDark(swatches.swatch500) ? "#FFFFFF" : "#000000"
    swatch400.style.color = tonal.isDark(swatches.swatch400) ? "#FFFFFF" : "#000000"
    swatch300.style.color = tonal.isDark(swatches.swatch300) ? "#FFFFFF" : "#000000"
    swatch200.style.color = tonal.isDark(swatches.swatch200) ? "#FFFFFF" : "#000000"
    swatch100.style.color = tonal.isDark(swatches.swatch100) ? "#FFFFFF" : "#000000"
    swatch075.style.color = tonal.isDark(swatches.swatch075) ? "#FFFFFF" : "#000000"
    swatch050.style.color = tonal.isDark(swatches.swatch050) ? "#FFFFFF" : "#000000"
    swatch025.style.color = tonal.isDark(swatches.swatch025) ? "#FFFFFF" : "#000000"

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

    } else if (swatchLabel === "L") {

      swatch900.textContent = tonal.getLightnessValue(swatches.swatch900)
      swatch800.textContent = tonal.getLightnessValue(swatches.swatch800)
      swatch700.textContent = tonal.getLightnessValue(swatches.swatch700)
      swatch600.textContent = tonal.getLightnessValue(swatches.swatch600)
      swatch500.textContent = tonal.getLightnessValue(swatches.swatch500)
      swatch400.textContent = tonal.getLightnessValue(swatches.swatch400)
      swatch300.textContent = tonal.getLightnessValue(swatches.swatch300)
      swatch200.textContent = tonal.getLightnessValue(swatches.swatch200)
      swatch100.textContent = tonal.getLightnessValue(swatches.swatch100)
      swatch075.textContent = tonal.getLightnessValue(swatches.swatch075)
      swatch050.textContent = tonal.getLightnessValue(swatches.swatch050)
      swatch025.textContent = tonal.getLightnessValue(swatches.swatch025)

    }

  }

}

const renderJSON = (primary, secondary, tertiary, success, warning, danger, neutralCool, neutral) => {

  let result = []

  result.push(swatchOutput(primary, tonal.bases.primary))
  result.push(swatchOutput(secondary, tonal.bases.secondary))
  result.push(swatchOutput(tertiary, tonal.bases.tertiary))
  result.push(swatchOutput(success, tonal.bases.success))
  result.push(swatchOutput(warning, tonal.bases.warning))
  result.push(swatchOutput(danger, tonal.bases.danger))
  result.push(swatchOutput(neutralCool, tonal.bases.neutralCool))
  result.push(swatchOutput(neutral, tonal.bases.neutral))

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
  for (const [index, value] of tonal.weights.entries()) {
    let id = "weight" + value
    result.push(<div className="swatch" id={id}><h4>{value}</h4></div>)
  }
  return result;
}

const drawSwatchRow = (key) => {
  const result = []
  for (const [index, value] of tonal.weights.entries()) {
    let id = key + "-" + value
    result.push( <div className="swatch" id={id}/> ) 
  }
  return result;
}


class App extends React.Component {

  componentDidMount() {

    let primarySwatchRow = tonal.createSwatchRow(primary)
    let secondarySwatchRow = tonal.createSwatchRow(secondary)
    let tertiarySwatchRow = tonal.createSwatchRow(tertiary)
    let successSwatchRow = tonal.createSwatchRow(success)
    let warningSwatchRow = tonal.createSwatchRow(warning)
    let dangerSwatchRow = tonal.createSwatchRow(danger)
    let neutralCoolSwatchRow = tonal.createSwatchRow(neutralCool)
    let neutralSwatchRow = tonal.createSwatchRow(neutral)

    renderSwatchRow(primarySwatchRow, tonal.bases.primary)
    renderSwatchRow(secondarySwatchRow, tonal.bases.secondary)
    renderSwatchRow(tertiarySwatchRow, tonal.bases.tertiary)
    renderSwatchRow(successSwatchRow, tonal.bases.success)
    renderSwatchRow(warningSwatchRow, tonal.bases.warning)
    renderSwatchRow(dangerSwatchRow, tonal.bases.danger)
    renderSwatchRow(neutralCoolSwatchRow, tonal.bases.neutralCool)
    renderSwatchRow(neutralSwatchRow, tonal.bases.neutral)

    let output = renderJSON(primarySwatchRow, secondarySwatchRow,
      tertiarySwatchRow, successSwatchRow, warningSwatchRow,
      dangerSwatchRow, neutralCoolSwatchRow, neutralSwatchRow)

    console.log(output)
  }

  render() {

    return (

      <div className="App">
        <div>{drawWeightScale()}</div>
        <div>{drawSwatchRow(tonal.bases.primary)}</div>
        <div>{drawSwatchRow(tonal.bases.secondary)}</div>
        <div>{drawSwatchRow(tonal.bases.tertiary)}</div>
        <div>{drawSwatchRow(tonal.bases.success)}</div>
        <div>{drawSwatchRow(tonal.bases.warning)}</div>
        <div>{drawSwatchRow(tonal.bases.danger)}</div>
        <div>{drawSwatchRow(tonal.bases.neutralCool)}</div>
        <div>{drawSwatchRow(tonal.bases.neutral)}</div>
      </div>
    );
  }

}

export default App;
