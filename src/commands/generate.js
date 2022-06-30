module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async (toolbox) => {
    const {parameters,template: { generate },print: { info, checkmark }} = toolbox

    const comands = parameters?.first?.toLowerCase()
    const name = parameters?.second

    switch(comands){
      case 'container': {
        await generate({
          template: 'container.js.ejs',
          target: `src/Containers/${name}.js`,
          props: { name }
        })
        info(`${checkmark} src/Containers/${name}.js`)
        break;
      }
    }
  },
}

