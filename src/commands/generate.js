const {
  generateContainer,
  generateAtom,
  generateMolecule,
  generateOrganism,
  generateRedux,
} = require('../utils/generator')
const {
  checkIsDirectoryProject,
  generateNotFound,
} = require('../utils/validations')

module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async (toolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info, checkmark },
    } = toolbox

    const comands = parameters?.first?.toLowerCase()
    const name = parameters?.second
    const isRootProject = checkIsDirectoryProject(toolbox)

    if (isRootProject) {
      switch (comands) {
        case 'container': {
          await generateContainer(name, toolbox)
          break
        }
        case 'atom': {
          await generateAtom(name, toolbox)
          break
        }
        case 'molecule': {
          await generateMolecule(name, toolbox)
          break
        }
        case 'organism': {
          await generateOrganism(name, toolbox)
          break
        }
        case 'redux': {
          await generateRedux(name, toolbox)
          break
        }
        default: {
          await generateNotFound(toolbox)
        }
      }
    }
  },
}
