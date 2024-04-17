interface PropertyInputProps {
  cssProperty: string;
  label: string;
  instructions?: string;
  pattern?: string;
  type: string;
  values?: string[];
  isTime?: boolean;
  defaultValue: string;
  userValue: string;
}

class PropertyInput {
  cssProperty: string;
  label: string;
  instructions?: string;
  pattern?: string;
  type: string;
  values?: string[];
  isTime? : boolean;
  defaultValue: string;
  userValue: string;
  constructor(props: PropertyInputProps) {
    this.cssProperty = props.cssProperty;
    this.label = props.label;
    this.instructions = props.instructions;
    this.pattern = props.pattern;
    this.type = props.type;
    this.values = props.values;
    this.isTime = props.isTime;
    this.defaultValue = props.defaultValue;
    this.userValue = props.userValue;
  }
}

export default PropertyInput;
