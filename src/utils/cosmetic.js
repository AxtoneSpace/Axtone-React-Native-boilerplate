/* eslint-disable prettier/prettier */
const { print } = require("gluegun/print")

const { cyan, gray, white, bold, red, yellow } = print.colors

const infomark = (
"         _____   ___\n"+
`        /     + /  /   | ${bold(red("Welcome To Axtone Boilerplate 🔥"))} \n`+
`       /  / +  /  /    | ${cyan("The Expressive Boilerplate For React Native")} \n`+
"      /  /   +/  +     | \n"+
"     /  /____/  / +    | Github : AxtoneSpace/Axtone-React-Native-boilerplate\n"+
"    /  _____/  /+  +   | Issue  : AxtoneSpace/Axtone-React-Native-boilerplate/issues\n"+
"   /  /    /  /  +  +  | \n");

const comadList = (
    `Example : ${yellow('axtone g container HomeContainer')} For Generating Container \n`+
    `- axtone g container => Generating your container\n`+
    `- axtone g atom => Generating your Atom Components\n`+
    `- axtone g molecule => Generating your Molecule Components\n`+
    `- axtone g organism => Generating your Organism Components\n`+
    `- axtone g redux => Generating Redux State & Saga Midleware\n`
);

const axtoneMark = () => {
    return infomark;
}

const axtoneComandList = () => {
    return comadList
}

const command = (m = "", second = "", examples = []) => {
  p(white(m) + "  " + gray(second))
  const indent = m.length + 2
  if (examples) {
    examples.forEach((ex) => p(gray(" ".repeat(indent) + ex)))
  }
}

const textWarning = (m = "") => p(yellow(m))
const textInfo = (m = "") => p(gray(m))
const textWhite = (m = "") => p(white(m))

module.exports = {
  axtoneMark,
  axtoneComandList,
  command,
  textWarning,
  textInfo,
  textWhite,
}
