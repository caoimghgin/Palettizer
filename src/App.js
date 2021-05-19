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
  // var primary = jsonColors.filter(function(item) { return item.name === 'primary'; })[0];
  // var secondary = jsonColors.filter(function(item) { return item.name === 'secondary'; })[0];
  // var tertiary = jsonColors.filter(function(item) { return item.name === 'tertiary'; })[0];
  // var success = jsonColors.filter(function(item) { return item.name === 'success'; })[0];
  // var info = jsonColors.filter(function(item) { return item.name === 'info'; })[0];
  // var warning = jsonColors.filter(function(item) { return item.name === 'warning'; })[0];
  // var danger = jsonColors.filter(function(item) { return item.name === 'danger'; })[0];
  // var neutralCool = jsonColors.filter(function(item) { return item.name === 'neutral-cool'; })[0];
  // var neutral = jsonColors.filter(function(item) { return item.name === 'neutral'; })[0];


for (const [key, value] of Object.entries(semantic)) {
  // console.log(key, value);

  let colors = jsonColors.filter(function(item) { return item.name === value; })[0];

  for (let index in weight) {
    // console.log(weight[index])

    result.json.color[value][value +'-'+ weight[index]] = {type: "color", value: colors.swatches[Number(weight[index])], category: "fill"}

  }
}

/*
  /// PRIMARY 

  result.json.color['primary']['primary-900'] = {type: "color", value: primary.swatches['900'], category: "fill"}
  result.json.color['primary']['primary-800'] = {type: "color", value: primary.swatches['800'], category: "fill"}
  result.json.color['primary']['primary-700'] = {type: "color", value: primary.swatches['700'], category: "fill"}
  result.json.color['primary']['primary-600'] = {type: "color", value: primary.swatches['600'], category: "fill"}
  result.json.color['primary']['primary-500'] = {type: "color", value: primary.swatches['500'], category: "fill"}

  result.json.color['primary']['primary-400'] = {type: "color", value: primary.swatches['400'], category: "fill"}
  result.json.color['primary']['primary-300'] = {type: "color", value: primary.swatches['300'], category: "fill"}
  result.json.color['primary']['primary-200'] = {type: "color", value: primary.swatches['200'], category: "fill"}
  result.json.color['primary']['primary-100'] = {type: "color", value: primary.swatches['100'], category: "fill"}
  result.json.color['primary']['primary-075'] = {type: "color", value: primary.swatches['75'], category: "fill"}

  result.json.color['primary']['primary-050'] = {type: "color", value: primary.swatches['50'], category: "fill"}
  result.json.color['primary']['primary-025'] = {type: "color", value: primary.swatches['25'], category: "fill"}
  result.json.color['primary']['primary-015'] = {type: "color", value: primary.swatches['15'], category: "fill"}


  /// SECONDARY

  result.json.color['secondary']['secondary-900'] = {type: "color", value: secondary.swatches['900'], category: "fill"}
  result.json.color['secondary']['secondary-800'] = {type: "color", value: secondary.swatches['800'], category: "fill"}
  result.json.color['secondary']['secondary-700'] = {type: "color", value: secondary.swatches['700'], category: "fill"}
  result.json.color['secondary']['secondary-600'] = {type: "color", value: secondary.swatches['600'], category: "fill"}
  result.json.color['secondary']['secondary-500'] = {type: "color", value: secondary.swatches['500'], category: "fill"}

  result.json.color['secondary']['secondary-400'] = {type: "color", value: secondary.swatches['400'], category: "fill"}
  result.json.color['secondary']['secondary-300'] = {type: "color", value: secondary.swatches['300'], category: "fill"}
  result.json.color['secondary']['secondary-200'] = {type: "color", value: secondary.swatches['200'], category: "fill"}
  result.json.color['secondary']['secondary-100'] = {type: "color", value: secondary.swatches['100'], category: "fill"}
  result.json.color['secondary']['secondary-075'] = {type: "color", value: secondary.swatches['75'], category: "fill"}

  result.json.color['secondary']['secondary-050'] = {type: "color", value: secondary.swatches['50'], category: "fill"}
  result.json.color['secondary']['secondary-025'] = {type: "color", value: secondary.swatches['25'], category: "fill"}
  result.json.color['secondary']['secondary-015'] = {type: "color", value: secondary.swatches['15'], category: "fill"}

  /// tertiary

  result.json.color['tertiary']['tertiary-900'] = {type: "color", value: tertiary.swatches['900'], category: "fill"}
  result.json.color['tertiary']['tertiary-800'] = {type: "color", value: tertiary.swatches['800'], category: "fill"}
  result.json.color['tertiary']['tertiary-700'] = {type: "color", value: tertiary.swatches['700'], category: "fill"}
  result.json.color['tertiary']['tertiary-600'] = {type: "color", value: tertiary.swatches['600'], category: "fill"}
  result.json.color['tertiary']['tertiary-500'] = {type: "color", value: tertiary.swatches['500'], category: "fill"}

  result.json.color['tertiary']['tertiary-400'] = {type: "color", value: tertiary.swatches['400'], category: "fill"}
  result.json.color['tertiary']['tertiary-300'] = {type: "color", value: tertiary.swatches['300'], category: "fill"}
  result.json.color['tertiary']['tertiary-200'] = {type: "color", value: tertiary.swatches['200'], category: "fill"}
  result.json.color['tertiary']['tertiary-100'] = {type: "color", value: tertiary.swatches['100'], category: "fill"}
  result.json.color['tertiary']['tertiary-075'] = {type: "color", value: tertiary.swatches['75'], category: "fill"}

  result.json.color['tertiary']['tertiary-050'] = {type: "color", value: tertiary.swatches['50'], category: "fill"}
  result.json.color['tertiary']['tertiary-025'] = {type: "color", value: tertiary.swatches['25'], category: "fill"}
  result.json.color['tertiary']['tertiary-015'] = {type: "color", value: tertiary.swatches['15'], category: "fill"}

  /// SUCCESS

  result.json.color['success']['success-900'] = {type: "color", value: success.swatches['900'], category: "fill"}
  result.json.color['success']['success-800'] = {type: "color", value: success.swatches['800'], category: "fill"}
  result.json.color['success']['success-700'] = {type: "color", value: success.swatches['700'], category: "fill"}
  result.json.color['success']['success-600'] = {type: "color", value: success.swatches['600'], category: "fill"}
  result.json.color['success']['success-500'] = {type: "color", value: success.swatches['500'], category: "fill"}

  result.json.color['success']['success-400'] = {type: "color", value: success.swatches['400'], category: "fill"}
  result.json.color['success']['success-300'] = {type: "color", value: success.swatches['300'], category: "fill"}
  result.json.color['success']['success-200'] = {type: "color", value: success.swatches['200'], category: "fill"}
  result.json.color['success']['success-100'] = {type: "color", value: success.swatches['100'], category: "fill"}
  result.json.color['success']['success-075'] = {type: "color", value: success.swatches['75'], category: "fill"}

  result.json.color['success']['success-050'] = {type: "color", value: success.swatches['50'], category: "fill"}
  result.json.color['success']['success-025'] = {type: "color", value: success.swatches['25'], category: "fill"}
  result.json.color['success']['success-015'] = {type: "color", value: success.swatches['15'], category: "fill"}

/// INFO

  result.json.color['info']['info-900'] = {type: "color", value: info.swatches['900'], category: "fill"}
  result.json.color['info']['info-800'] = {type: "color", value: info.swatches['800'], category: "fill"}
  result.json.color['info']['info-700'] = {type: "color", value: info.swatches['700'], category: "fill"}
  result.json.color['info']['info-600'] = {type: "color", value: info.swatches['600'], category: "fill"}
  result.json.color['info']['info-500'] = {type: "color", value: info.swatches['500'], category: "fill"}

  result.json.color['info']['info-400'] = {type: "color", value: info.swatches['400'], category: "fill"}
  result.json.color['info']['info-300'] = {type: "color", value: info.swatches['300'], category: "fill"}
  result.json.color['info']['info-200'] = {type: "color", value: info.swatches['200'], category: "fill"}
  result.json.color['info']['info-100'] = {type: "color", value: info.swatches['100'], category: "fill"}
  result.json.color['info']['info-075'] = {type: "color", value: info.swatches['75'], category: "fill"}

  result.json.color['info']['info-050'] = {type: "color", value: info.swatches['50'], category: "fill"}
  result.json.color['info']['info-025'] = {type: "color", value: info.swatches['25'], category: "fill"}
  result.json.color['info']['info-015'] = {type: "color", value: info.swatches['15'], category: "fill"}

// WARNING

  result.json.color['warning']['warning-900'] = {type: "color", value: warning.swatches['900'], category: "fill"}
  result.json.color['warning']['warning-800'] = {type: "color", value: warning.swatches['800'], category: "fill"}
  result.json.color['warning']['warning-700'] = {type: "color", value: warning.swatches['700'], category: "fill"}
  result.json.color['warning']['warning-600'] = {type: "color", value: warning.swatches['600'], category: "fill"}
  result.json.color['warning']['warning-500'] = {type: "color", value: warning.swatches['500'], category: "fill"}

  result.json.color['warning']['warning-400'] = {type: "color", value: warning.swatches['400'], category: "fill"}
  result.json.color['warning']['warning-300'] = {type: "color", value: warning.swatches['300'], category: "fill"}
  result.json.color['warning']['warning-200'] = {type: "color", value: warning.swatches['200'], category: "fill"}
  result.json.color['warning']['warning-100'] = {type: "color", value: warning.swatches['100'], category: "fill"}
  result.json.color['warning']['warning-075'] = {type: "color", value: warning.swatches['75'], category: "fill"}

  result.json.color['warning']['warning-050'] = {type: "color", value: warning.swatches['50'], category: "fill"}
  result.json.color['warning']['warning-025'] = {type: "color", value: warning.swatches['25'], category: "fill"}
  result.json.color['warning']['warning-015'] = {type: "color", value: warning.swatches['15'], category: "fill"}

  // DANGER

  result.json.color['danger']['danger-900'] = {type: "color", value: danger.swatches['900'], category: "fill"}
  result.json.color['danger']['danger-800'] = {type: "color", value: danger.swatches['800'], category: "fill"}
  result.json.color['danger']['danger-700'] = {type: "color", value: danger.swatches['700'], category: "fill"}
  result.json.color['danger']['danger-600'] = {type: "color", value: danger.swatches['600'], category: "fill"}
  result.json.color['danger']['danger-500'] = {type: "color", value: danger.swatches['500'], category: "fill"}

  result.json.color['danger']['danger-400'] = {type: "color", value: danger.swatches['400'], category: "fill"}
  result.json.color['danger']['danger-300'] = {type: "color", value: danger.swatches['300'], category: "fill"}
  result.json.color['danger']['danger-200'] = {type: "color", value: danger.swatches['200'], category: "fill"}
  result.json.color['danger']['danger-100'] = {type: "color", value: danger.swatches['100'], category: "fill"}
  result.json.color['danger']['danger-075'] = {type: "color", value: danger.swatches['75'], category: "fill"}

  result.json.color['danger']['danger-050'] = {type: "color", value: danger.swatches['50'], category: "fill"}
  result.json.color['danger']['danger-025'] = {type: "color", value: danger.swatches['25'], category: "fill"}
  result.json.color['danger']['danger-015'] = {type: "color", value: danger.swatches['15'], category: "fill"}


// NEUTRAL-COOL

    result.json.color['neutral-cool']['neutral-cool-900'] = {type: "color", value: neutralCool.swatches['900'], category: "fill"}
    result.json.color['neutral-cool']['neutral-cool-800'] = {type: "color", value: neutralCool.swatches['800'], category: "fill"}
    result.json.color['neutral-cool']['neutral-cool-700'] = {type: "color", value: neutralCool.swatches['700'], category: "fill"}
    result.json.color['neutral-cool']['neutral-cool-600'] = {type: "color", value: neutralCool.swatches['600'], category: "fill"}
    result.json.color['neutral-cool']['neutral-cool-500'] = {type: "color", value: neutralCool.swatches['500'], category: "fill"}
  
    result.json.color['neutral-cool']['neutral-cool-400'] = {type: "color", value: neutralCool.swatches['400'], category: "fill"}
    result.json.color['neutral-cool']['neutral-cool-300'] = {type: "color", value: neutralCool.swatches['300'], category: "fill"}
    result.json.color['neutral-cool']['neutral-cool-200'] = {type: "color", value: neutralCool.swatches['200'], category: "fill"}
    result.json.color['neutral-cool']['neutral-cool-100'] = {type: "color", value: neutralCool.swatches['100'], category: "fill"}
    result.json.color['neutral-cool']['neutral-cool-075'] = {type: "color", value: neutralCool.swatches['75'], category: "fill"}
  
    result.json.color['neutral-cool']['neutral-cool-050'] = {type: "color", value: neutralCool.swatches['50'], category: "fill"}
    result.json.color['neutral-cool']['neutral-cool-025'] = {type: "color", value: neutralCool.swatches['25'], category: "fill"}
    result.json.color['neutral-cool']['neutral-cool-015'] = {type: "color", value: neutralCool.swatches['15'], category: "fill"}


// NEUTRAL

    result.json.color['neutral']['neutral-900'] = {type: "color", value: neutral.swatches['900'], category: "fill"}
    result.json.color['neutral']['neutral-800'] = {type: "color", value: neutral.swatches['800'], category: "fill"}
    result.json.color['neutral']['neutral-700'] = {type: "color", value: neutral.swatches['700'], category: "fill"}
    result.json.color['neutral']['neutral-600'] = {type: "color", value: neutral.swatches['600'], category: "fill"}
    result.json.color['neutral']['neutral-500'] = {type: "color", value: neutral.swatches['500'], category: "fill"}
  
    result.json.color['neutral']['neutral-400'] = {type: "color", value: neutral.swatches['400'], category: "fill"}
    result.json.color['neutral']['neutral-300'] = {type: "color", value: neutral.swatches['300'], category: "fill"}
    result.json.color['neutral']['neutral-200'] = {type: "color", value: neutral.swatches['200'], category: "fill"}
    result.json.color['neutral']['neutral-100'] = {type: "color", value: neutral.swatches['100'], category: "fill"}
    result.json.color['neutral']['neutral-075'] = {type: "color", value: neutral.swatches['75'], category: "fill"}
  
    result.json.color['neutral']['neutral-050'] = {type: "color", value: neutral.swatches['50'], category: "fill"}
    result.json.color['neutral']['neutral-025'] = {type: "color", value: neutral.swatches['25'], category: "fill"}
    result.json.color['neutral']['neutral-015'] = {type: "color", value: neutral.swatches['15'], category: "fill"}    
*/

  console.log(JSON.stringify(result))
  // console.log(data)

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
