import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

interface FeatureLibSchema {
  name: string;
  directory: string;
}

export default function (schema: FeatureLibSchema): Rule {
  console.log('name', schema.name);
  return chain([
    externalSchematic('@nrwl/workspace', 'lib', {
      name: `feature-${schema.name}`,
      linter: 'tslint',
      directory: schema.directory,
      tags: `type:feature, scope:${schema.directory}`
    }),
  ]);
}
