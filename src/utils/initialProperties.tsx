
import PropertyInput from '../models/propertyInput';

const initialProperties = [
  new PropertyInput({
    cssProperty: 'animation-duration',
    label: 'Duration',
    instructions: '(must end with either <code>s</code> or <code>ms</code>)',
    pattern: '^(-?\\d+(\\.\\d+)?(s|ms)|inherit|initial|unset)$',
    type: 'text',
    defaultValue: '0s',
    userValue: '0s',
  }),
  new PropertyInput({ // https://www.w3.org/TR/css-animations-1/#animation-timing-function
    cssProperty: 'animation-timing-function',
    label: 'Timing Function',
    type: 'text',
    values: ['ease', 'linear', 'backwards', 'both', 'cubic-bezier', 'steps'],
    pattern: '^(ease|ease-in|ease-out|ease-in-out|linear|step-start|step-end|cubic-bezier\\(0\\.\\d+,0\\.\\d+,0\\.\\d+,0\\.\\d+\\)|inherit|initial|unset)$',
    defaultValue: 'ease',
    userValue: 'ease',
  }),
  new PropertyInput({
    cssProperty: 'animation-delay',
    label: 'Delay',
    instructions: '(must end with either <code>s</code> or <code>ms</code>)',
    pattern: '^(-?\\d+(\\.\\d+)?(s|ms)|inherit|initial|unset)$',
    type: 'text',
    defaultValue: '0s',
    userValue: '0s'
  }),
  new PropertyInput({
    cssProperty: 'animation-iteration-count',
    label: 'Interation Count',
    instructions: '(must be either <code>infinite</code> or a number)',
    pattern: '^(\\d+|infinite|inherit|initial|unset)$',
    type: 'text',
    defaultValue: '1',
    userValue: '1',
  }),
  new PropertyInput({
    cssProperty: 'animation-direction',
    label: 'Direction',
    type: 'select',
    values: ['normal', 'reverse', 'alternate', 'alternate-reverse','inherit', 'initial', 'revert', 'revert-layer', 'unset'],
    defaultValue: 'normal',
    userValue: 'normal',
  }),
  new PropertyInput({
    cssProperty: 'animation-fill-mode',
    label: 'Fill Mode',
    type: 'select',
    values: ['none', 'forwards', 'backwards', 'both','inherit', 'initial', 'revert', 'revert-layer', 'unset'],
    defaultValue: 'none',
    userValue: 'none',
  }),
  new PropertyInput({
    cssProperty: 'animation-play-state',
    label: 'Play State',
    type: 'select',
    values: ['running', 'paused', 'initial', 'revert', 'revert-layer', 'unset'],
    defaultValue: 'running',
    userValue: 'running',
  }),
  new PropertyInput({
    cssProperty: 'animation-name',
    label: 'Animation Name',
    type: 'text',
    defaultValue: 'moveCircle',
    userValue: 'moveCircle',
  }),
]

export default initialProperties;
