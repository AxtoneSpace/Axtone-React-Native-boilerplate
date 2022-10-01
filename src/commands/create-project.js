const { spawnProgress } = require('../utils/spawn')
const { validateProjectName } = require('../utils/validations')
module.exports = {
  run: async (toolbox) => {
    const {
      print: { info },
      filesystem,
      system,
      meta,
      parameters,
      strings,
    } = toolbox

    // debug
    const debug = Boolean(parameters.options.debug)
    let log = (m) => {
      if (debug) info(m)
      return m
    }

    // const axtoneTemplatePath = filesystem?.path(`${meta?.src}`, '..')
    // generate the project
    if (validateProjectName(toolbox)) {
      const generateProject = `npx react-native init ${validateProjectName(
        toolbox
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
