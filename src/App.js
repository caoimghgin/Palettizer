import React from 'react';
import './App.css';
import Palettizer from './palettizer'
import { semantic, weight, shadowTarget, highlightTarget, swatchLabelType } from './constants/index.js'
import { primary, secondary, tertiary, success, info, warning, danger, neutralCool, neutral } from './base_colors/cvh'

let palettizer = new Palettizer(highlightTarget.medium, shadowTarget.medium)
const swatchLabel = swatchLabelType.lValue;

const renderSwatchRow = (swatches, key) => {

  let swatch900 = document.getElementById(key + "-" + weight[0])
  let swatch800 = document.getElementById(key + "-" + weight[1])
  let swatch700 = document.getElementById(key + "-" + weight[2])
  let swatch600 = document.getElementById(key + "-" + weight[3])
  let swatch500 = document.getElementById(key + "-" + weight[4])
  let swatch400 = document.getElementById(key + "-" + weight[5])
  let swatch300 = document.getElementById(key + "-" + weight[6])
  let swatch200 = document.getElementById(key + "-" + weight[7])
  let swatch100 = document.getElementById(key + "-" + weight[8])
  let swatch075 = document.getElementById(key + "-" + weight[9])
  let swatch050 = document.getElementById(key + "-" + weight[10])
  let swatch025 = document.getElementById(key + "-" + weight[11])
  let swatch015 = document.getElementById(key + "-" + weight[12])

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

  result.push(swatchOutput(primary, semantic.primary))
  result.push(swatchOutput(secondary, semantic.secondary))
  result.push(swatchOutput(tertiary, semantic.tertiary))
  result.push(swatchOutput(success, semantic.success))
  result.push(swatchOutput(info, semantic.info))
  result.push(swatchOutput(warning, semantic.warning))
  result.push(swatchOutput(danger, semantic.danger))
  result.push(swatchOutput(neutralCool, semantic.neutralCool))
  result.push(swatchOutput(neutral, semantic.neutral))

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
  for (const [index, value] of weight.entries()) {
    let id = "weight" + value
    result.push(<div className="swatch" id={id}><h4>{value}</h4></div>)
  }
  return result;
}

const drawSwatchRow = (key) => {
  const result = []
  for (const [index, value] of weight.entries()) {
    let id = key + "-" + value
    result.push( <div className="swatch" id={id}/> ) 
  }
  return result;
}

const testReturn = (key) => {

  return { ['primary']: {['primary-900'] : {type:"color", value:"", category:"fill"} }}
  
  }
  
const styleDictionaryOutput = (data) => {

  let result = {}

  result.json = {
    color: {
      primary: {},
      secondary: {},
      tertiary: {},
      success: {},      
      info: {},
      warning: {},
      danger: {},
      'neutral-cool': {},
      neutral: {},                   
    }
  }

  var jsonColors = JSON.parse(data);

for (const [key, value] of Object.entries(semantic)) {

  let colors = jsonColors.filter(function(item) { return item.name === value; })[0];

  for (let index in weight) {

    result.json.color[value][value +'-'+ weight[index]] = {type: "color", value: colors.swatches[Number(weight[index])], category: "fill"}

  }
}

  console.log(JSON.stringify(result))

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

    renderSwatchRow(primarySwatchRow, semantic.primary)
    renderSwatchRow(secondarySwatchRow, semantic.secondary)
    renderSwatchRow(tertiarySwatchRow, semantic.tertiary)
    renderSwatchRow(successSwatchRow, semantic.success)
    renderSwatchRow(infoSwatchRow, semantic.info)
    renderSwatchRow(warningSwatchRow, semantic.warning)
    renderSwatchRow(dangerSwatchRow, semantic.danger)
    renderSwatchRow(neutralCoolSwatchRow, semantic.neutralCool)
    renderSwatchRow(neutralSwatchRow, semantic.neutral)

    let output = renderJSON(primarySwatchRow, secondarySwatchRow,
      tertiarySwatchRow,  successSwatchRow, infoSwatchRow, warningSwatchRow,
      dangerSwatchRow, neutralCoolSwatchRow, neutralSwatchRow)

    styleDictionaryOutput(output)
  }



  render() {

    return (

      <div className="App">
        <div>{drawWeightScale()}</div>
        <div>{drawSwatchRow(semantic.primary)}</div>
        <div>{drawSwatchRow(semantic.secondary)}</div>
        <div>{drawSwatchRow(semantic.tertiary)}</div>
        <div>{drawSwatchRow(semantic.success)}</div>
        <div>{drawSwatchRow(semantic.info)}</div>
        <div>{drawSwatchRow(semantic.warning)}</div>
        <div>{drawSwatchRow(semantic.danger)}</div>
        <div>{drawSwatchRow(semantic.neutralCool)}</div>
        <div>{drawSwatchRow(semantic.neutral)}</div>
      </div>
    );
  }

}

export default App;
