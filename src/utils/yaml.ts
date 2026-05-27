// @ts-ignore
import data from '#repo/redirects.yaml';

export interface YamlNode {
  [key: string]: YamlNode | string;
}

export default data as YamlNode;
