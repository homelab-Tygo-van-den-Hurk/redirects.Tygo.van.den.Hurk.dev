// @ts-ignore
import data from '#src/redirects.yaml';

export interface YamlNode {
  [key: string]: YamlNode | string;
}

export default data as YamlNode;
