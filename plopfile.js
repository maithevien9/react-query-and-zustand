const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

module.exports = function (plop) {
  plop.setActionType('Generate svgs import', function (answers, config, plop) {
    const { inputFolder, output } = config
    const svgFiles = fs.readdirSync(inputFolder).filter(file => file.endsWith('.svg'))

    const importLines = svgFiles.map(file => {
      const filename = file.slice(0, -4)
      const pascalCaseName = filename
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('')
      const componentName = pascalCaseName + 'Icon'
      const urlName = componentName.charAt(0).toLocaleLowerCase() + componentName.slice(1)

      return `export { default as ${urlName}, ReactComponent as ${componentName}} from './${file}';`
    })

    const outputFile = path.join(inputFolder, output)
    fs.rmSync(outputFile, {
      force: true
    })
    fs.writeFileSync(
      outputFile,
      ['// This is generated file. Do not edit it, run pnpm gen-icons to regenerate this files.']
        .concat(importLines)
        .join('\n')
    )
    execSync(`prettier --write ${outputFile}`)
  })

  plop.setGenerator('icons-import', {
    description: 'Generate svgr icons import base on file name',
    prompts: [],
    actions: [
      {
        type: 'Generate svgs import',
        inputFolder: 'src/assets/svgs',
        output: 'icons.ts'
      }
    ]
  })
}
