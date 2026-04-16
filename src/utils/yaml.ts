import { promises as FileSystem } from 'fs';
import Path from 'path';
import YAML from 'yaml';

/** A node in the directory structure. */
export interface YamlNode {
  [key: string]: YamlNode | string;
}

const path = Path.resolve('./redirects.yaml');
const file = await FileSystem.readFile(path);
const content = file.toString();

/** The data stored in the YAML file. */
export const data = YAML.parse(content) as YamlNode;
