import './App.scss';
import Input from './components/input/Input';
import PropertyInput from './models/propertyInput';
import initialProperties from './utils/initialProperties';
import { useReducer, useEffect } from 'react';


const initialState = {
  cssProperties: initialProperties,
  animationName: 'moveCircle',
  cssShorthand: 'moveCircle',
  stylesObject: {}
}


const reducer = (state:any, action:any) => {
  switch (action.type) {
    case "UPDATE_CSS_PROPERTY":
      
      let shorthand:string = '';
      const updatedProperties = state.cssProperties.map((prop: PropertyInput) => {
        if(prop.cssProperty === action.payload.cssProperty){
          prop.userValue = action.payload.value;
        }
        shorthand+= ` ${prop.userValue}`;
        return prop;
      });

      return {  
        ...state,
        cssProperties: updatedProperties,
        animationName: updatedProperties.find(({ cssProperty }: { cssProperty: string }) => cssProperty === "animation-name").userValue,
        cssShorthand: shorthand
      }
      default:
        return state;
    }
  };

function App() {
  function handlePropertyChange(cssProperty: string, value: string){
    dispatch({ type: "UPDATE_CSS_PROPERTY", payload: { cssProperty: cssProperty, value: value} });
  }

  useEffect(() => {
    dispatch({ type: 'UPDATE_CSS_PROPERTY', payload: { cssProperty: 'animation-fill-mode', value: 'forwards' } });
  }, []); // run this at the start

  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="app">
      <h1>CSS Animation Shorthand Generator</h1>
      <main>
        <div className="app__preview">
        <style dangerouslySetInnerHTML={{__html: `
            @keyframes ${state.animationName} {
              from{
                left:0;
              }
              to{
                left:calc(100% - var(--circle-size));
              }
            }
          `}} />
          <div className="app__previewobject" style={{animation: state.cssShorthand }}></div>
        </div>
        <form className="app__inputs">
          { state.cssProperties.map((prop: PropertyInput) => <Input key={prop.cssProperty} prop={prop} handlePropertyChange={ handlePropertyChange } />) }
        </form>
        <div className="app__codeblock">
          <h2>Final CSS</h2>
          <code>animation: {state.cssShorthand};</code>          
        </div>
      </main>
    </div>
  );
}

export default App;
