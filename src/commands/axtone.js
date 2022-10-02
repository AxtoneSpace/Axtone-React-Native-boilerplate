const { axtoneMark, axtoneComandList } = require('../utils/cosmetic')
const { validateDontInputFirstParams } = require('../utils/validations')
const { comand_undefined } = require('../localization/message.json')

const command = {
  name: 'axtone',
  run: async (toolbox) => {
    const { print } = toolbox

    if (validateDontInputFirstParams(toolbox, comand_undefined)) {
      print.info(axtoneMark())
      print.info(axtoneComandList())
    }
  },
}

module.exports = command
