
const pound = 0.45359237 // pound in kilos
const kg = 2.20462262

const lbToKgConversion = (weight) => {
    return weight * pound
}

const kgToLbConversion = (weight) => {
    return weight * kg
}

const rounded = (weight) => {
    return Number(Math.round(weight+"e1")+"e-1");
  }
  

export default { lbToKgConversion, kgToLbConversion, rounded }