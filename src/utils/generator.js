const generateContainer = async (filename, toolbox) => {
  const {
    template: { generate },
    print: { info, checkmark },
  } = toolbox

  await generate({
    template: 'container.js.ejs',
    target: `src/Containers/${filename}Screen.js`,
    props: { filename },
  })

  info(`${checkmark} src/Containers/${filename}Screen.js`)
}

const generateAtom = async (filename, toolbox) => {
  const {
    template: { generate },
    print: { info, checkmark },
  } = toolbox

  await generate({
    template: 'atom.js.ejs',
    target: `src/Components/Atom/${filename}/${filename}Atom.js`,
    props: { filename },
  })
  await generate({
    template: 'styles.js.ejs',
    target: `src/Components/Atom/${filename}/styles.js`,
    props: { filename },
  })

  info(`${checkmark} src/Components/Atom/${filename}/${filename}Atom.js`)
  info(`${checkmark} src/Components/Atom/${filename}/styles.js`)
}

const generateMolecule = async (filename, toolbox) => {
  const {
    template: { generate },
    print: { info, checkmark },
  } = toolbox

  await generate({
    template: 'molecules.js.ejs',
    target: `src/Components/Molecule/${filename}/${filename}Molecule.js`,
    props: { filename },
  })
  await generate({
    template: 'styles.js.ejs',
    target: `src/Components/Molecule/${filename}/styles.js`,
    props: { filename },
  })

  info(
    `${checkmark} src/Components/Molecule/${filename}/${filename}Molecule.js`
  )
  info(`${checkmark} src/Components/Molecule/${filename}/styles.js`)
}
const generateOrganism = async (filename, toolbox) => {
  const {
    template: { generate },
    print: { info, checkmark },
  } = toolbox

  await generate({
    template: 'organism.js.ejs',
    target: `src/Components/Organism/${filename}/${filename}Organism.js`,
    props: { filename },
  })
  await generate({
    template: 'styles.js.ejs',
    target: `src/Components/Organism/${filename}/styles.js`,
    props: { filename },
  })

  info(
    `${checkmark} src/Components/Organism/${filename}/${filename}Organism.js`
  )
  info(`${checkmark} src/Components/Organism/${filename}/styles.js`)
}
const generateRedux = async (filename, toolbox) => {
  const {
    template: { generate },
    print: { info, checkmark },
  } = toolbox

  await generate({
    template: 'redux.js.ejs',
    target: `src/Store/Redux/${filename}Reducer.js`,
    props: { filename },
  })
  await generate({
    template: 'sagas.js.ejs',
    target: `src/Store/Sagas/${filename}Sagas.js`,
    props: { filename },
  })

  info(`${checkmark} src/Store/Redux/${filename}Reducer.js`)
  info(`${checkmark} src/Store/Sagas/${filename}Sagas.js`)
}

module.exports = {
  generateContainer,
  generateAtom,
  generateMolecule,
  generateOrganism,
  generateRedux,
}
