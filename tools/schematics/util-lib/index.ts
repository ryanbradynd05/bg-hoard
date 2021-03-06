import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

interface UtilLibSchema {
  name: string;
  directory: string;
}

export default function (schema: UtilLibSchema): Rule {
  console.log('name', schema.name);
  return chain([
    externalSchematic('@nrwl/workspace', 'lib', {
      name: `util-${schema.name}`,
      linter: 'tslint',
      directory: schema.directory,
      tags: `type:util, scope:${schema.directory}`
    }),
  ]);
}
