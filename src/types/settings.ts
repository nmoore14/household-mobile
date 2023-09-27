export interface ISettings {
  sections: settingSection[];
}

export type settingSection = {
  name: string,
  sectionSettings: setting[],
}

export type setting = {
  name: string,
  type: string,
  default?: boolean | string
}
