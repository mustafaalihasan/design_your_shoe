import { swatch, fileIcon, ai, logoShirt, logo, shoeBase, shoeBody } from "../assets";

export const EditorTabs = [
  {
    name: "logocolorpick",
    icon: logo,
  },
  {
    name: "colorpicker",
    icon: shoeBody,
  },
  {
    name: "shoebasecolor",
    icon: shoeBase,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
};
