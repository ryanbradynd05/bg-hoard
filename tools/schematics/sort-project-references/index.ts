import { chain, Rule } from '@angular-devkit/schematics';
import { updateJsonInTree } from '@nrwl/workspace';
import { formatFiles } from '@nrwl/workspace';
import { get, set } from 'lodash';
import { join } from 'path';

function sortKeysAtJsonPath(path: string, jsonPath: string[]): Rule {
  return updateJsonInTree(path, (json) => {
    const unordered = get(json, jsonPath);
    const sorted = {};
    Object.keys(unordered).sort().forEach(key => {
      sorted[key] = unordered[key];
    });
    set(json, jsonPath, sorted);
    return json;
  });
}

function sortRootJest(): Rule {
  return (tree) => {
    const jestPath = 'jest.config.js';
    const contents = require(join(process.cwd(), jestPath));
    contents.projects.sort();
    tree.overwrite(jestPath, `
      module.exports = ${JSON.stringify(contents)};
    `);
    return tree;
  }
}

export default function (schema: any): Rule {
  return chain([
    sortKeysAtJsonPath('workspace.json', ['projects']),
    sortKeysAtJsonPath('nx.json', ['projects']),
    sortKeysAtJsonPath('tsconfig.base.json', ['compilerOptions', 'paths']),
    sortRootJest(),
    formatFiles()
  ]);
}
