const generateContainer = async (filename,toolbox) => {
    const { template: { generate },  print: { info, checkmark } } = toolbox

    await generate({
        template: 'container.js.ejs',
        target: `src/Containers/${filename}Screen.js`,
        props: { filename },
    })

    info(`${checkmark} src/Containers/${filename}Screen.js`)
}

module.exports = {
    generateContainer
}