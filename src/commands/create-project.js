const { spawnProgress } = require('../utils/spawn')
const { validateFirstInput } = require('../utils/validations')
const {
  project_name_required,
  error_generate_project,
} = require('../localization/message.json')

module.exports = {
  run: async (toolbox) => {
    const {
      print: { info },
      parameters,
    } = toolbox

    // debug
    const debug = Boolean(parameters.options.debug)
    let log = (m) => {
      if (debug) info(m)
      return m
    }

    // generate the project
    if (validateFirstInput(toolbox, project_name_required)) {
      const generateProject = `npx react-native init ${validateFirstInput(
        toolbox,
        error_generate_project
      )} --template https://github.com/AxtoneSpace/Axtone-React-Native-boilerplate.git`

      await spawnProgress(log(generateProject), {
        env: '',
        onProgress: (out) => {
          info(out.toString())

          if (out.includes('Welcome to React Native!'))
            info(`🍽  Creating a new React Native app`)
          if (out.includes('Run instructions for'))
            info(`🧊 Cooling print nozzles`)
        },
      })
    }
  },
}
