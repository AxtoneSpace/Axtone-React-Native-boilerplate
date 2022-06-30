const { axtoneMark, axtoneComandList } = require("../utils/cosmetic")
const command = {
  name: 'axtone',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info(axtoneMark())
    print.info(axtoneComandList());
  },
}

module.exports = command
