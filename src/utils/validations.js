const validateProjectName = (toolbox) => {
  const { parameters, print } = toolbox

  const projectName = (parameters.first || '').toString()

  if (!parameters.first) {
    print.error('📦 Project name is required')
    return false
  }

  return projectName
}

const checkIsDirectoryProject = (toolbox) => {
  const { print } = toolbox
  try {
    require(process.cwd() + '/package.json')
    return true
  } catch (error) {
    print.error('🗂  Please Open Root Project Directory')
    return false
  }
}

const generateNotFound = async (toolbox) => {
  const {
    print: { info },
  } = toolbox

  info(`Sorry, command not found 😢`)
}

module.exports = {
  validateProjectName,
  checkIsDirectoryProject,
  generateNotFound,
}
