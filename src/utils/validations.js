function validateProjectName(toolbox) {
    const {
        parameters,
        print
    } = toolbox
    
    const projectName = (parameters.first || "").toString()

    if (!parameters.first) {
        print.error('Project name is required')
        return false
    }

    return projectName
}

module.exports = {
    validateProjectName
}