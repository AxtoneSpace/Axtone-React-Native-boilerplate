const {
  root_directory,
  comand_notfound,
} = require('../localization/message.json')

const validateFirstInput = (toolbox, message) => {
  const { parameters, print } = toolbox

  const projectName = (parameters.first || '').toString()

  if (!parameters?.first) {
    print.error(message)
    return false
  }

  return projectName
}

const validateDontInputFirstParams = (toolbox, message) => {
  const { parameters, print } = toolbox

  if (parameters?.first?.length > 0) {
    print.error(message)
    return false
  }

  return true
}

const checkIsDirectoryProject = (toolbox) => {
  const { print } = toolbox
  try {
    require(process.cwd() + '/package.json')
    return true
  } catch (error) {
    print.error(root_directory)
    return false
  }
}

const generateNotFound = async (toolbox) => {
  const {
    print: { info },
  } = toolbox

  info(comand_notfound)
}

module.exports = {
  validateFirstInput,
  checkIsDirectoryProject,
  validateDontInputFirstParams,
  generateNotFound,
}
