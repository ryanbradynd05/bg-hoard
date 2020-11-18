import { chain, Rule } from '@angular-devkit/schematics';
import { updateJsonInTree } from '@nrwl/workspace';
import { formatFiles } from '@nrwl/workspace';

function incrementVersion(): Rule {
  return updateJsonInTree('workspace.json', (json) => {
    json.version++;
    return json;
  });
}

function sortWorkspaceProjects(): Rule {
  return updateJsonInTree('workspace.json', (json) => {
    json.projects = sortObjectKeys(json.projects);
    return json;
  });
}

function sortNxProjects(): Rule {
  return updateJsonInTree('nx.json', (json) => {
    json.projects = sortObjectKeys(json.projects);
    return json;
  });
}

function sortObjectKeys(obj: any) {
  const sorted = {};
  Object.keys(obj).sort().forEach(key => {
    sorted[key] = obj[key];
  });
  return sorted;
}

export default function (schema: any): Rule {
  return chain([
    incrementVersion(),
    sortWorkspaceProjects(),
    sortNxProjects(),
    formatFiles()
  ]);
}
