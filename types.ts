import PropertyItem from "./components/property-item/property-item"

export interface MenuItem {
  name: string;
  link: string;
}

export interface PropertyItem {
  name: string;
  value: string;
  nested: boolean;
}

export interface PropertyItems {
  title: string;
  items: PropertyItem[];
}

export interface PropNestedItem {
  name: string;
  nested: boolean;
  items: PropertyItem[];
}

export interface PropNestedItems {
  title: string;
  items: PropNestedItem[];
}

export type Properties = (PropertyItems | PropNestedItems);
