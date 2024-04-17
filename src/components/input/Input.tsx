import PropertyInput from "../../models/propertyInput";
const Input: React.FC<{prop: PropertyInput, handlePropertyChange(cssProperty:string, value:string):void }> = ({prop, handlePropertyChange}) => {
  return (
    <div className="input">
      <label htmlFor={ prop.cssProperty }>
        { prop.label } 
        { prop.instructions && <span className="input__instructions" dangerouslySetInnerHTML={{ __html: prop.instructions }} /> }
      </label>
      { prop.type === 'text' && <input type="text" id={ prop.cssProperty } pattern={ prop.pattern } onChange={ e=> handlePropertyChange(prop.cssProperty, e.target.value) } defaultValue={ prop.userValue }/> }
      { prop.type === 'select' && (
        <select id={ prop.cssProperty }  onChange={ e=> handlePropertyChange(prop.cssProperty, e.target.value) } defaultValue={ prop.userValue }>
          { prop.values && prop.values.map(value => <option key={value} value={value}>{value}</option>) }
        </select>
      )}
    </div>
  )
}

export default Input;
