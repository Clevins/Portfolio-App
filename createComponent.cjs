// Use by calling  node createComponent.js [src] [component name]
// Ex.  node createComponent.js pg-at-client/components Form

const src = process.argv[2];
const componentName = process.argv[3];

var fs = require("fs");
const path = require("path");

const folderName = `${src}/${componentName}`;

const rootFolder = src.split("/")[0];
const customTypeFolder = `${rootFolder}/types`;

console.log(customTypeFolder);

const compoonentTemplates = {
  tsFileTemplate: `
import ${componentName} from './${componentName}';

export default ${componentName};
`,
  tsxFileTemplate: `
import React, { FunctionComponent } from 'react'
import { ${componentName}Props } from '@customTypes/${componentName}Props'

const ${componentName}: FunctionComponent<${componentName}Props> = () => {
    return (
        <>
            <p>${componentName}</p>
        </>
    )
}
export default ${componentName}
`,
};


const propTypeTemplates = {
  propTemplate: `
export type ${componentName}Props = {

}    
`,
};

const checkIfFolderExists = (folder) => {
  if (!fs.existsSync(folder)) {
    return true;
  }
  return false;
};

const createFile = (path, content) => {
  fs.writeFile(path, content, (err) => {
    if (err) throw new Error(err);
    console.log("Created file: ", path);
    return true;
  });
};

try {
  if (!checkIfFolderExists(folderName)) {
    console.error(`${folderName} Already Exists`);
    
  }

  fs.mkdirSync(folderName);

  //Write Compoonent Template Files
  createFile(`${folderName}/index.ts`, compoonentTemplates.tsFileTemplate);

  createFile(
    `${folderName}/${componentName}.tsx`,
    compoonentTemplates.tsxFileTemplate
  );

  createFile(
    `${customTypeFolder}/${componentName}Props.ts`,
    propTypeTemplates.propTemplate
  );
} catch (err) {
  console.error(err);
}
