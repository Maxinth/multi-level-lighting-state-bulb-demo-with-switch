import React, { useReducer } from "react";

// shade of orange chosen at peak = hsl(39, 100%, 50%);
const initialState = {
  count: 0,
  lighting: 0,
  lightLevel: "OFF",
};

const lightReducer = (state, action) => {
  switch (action.type) {
    case 0:
      return {
        count: 0,
        lighting: 0,
        lightLevel: "OFF",
      };

    case 1:
      return {
        count: state.count + 1,
        lighting: state.lighting + 70,
        lightLevel: "LOW",
      };

    case 2:
      return {
        count: state.count + 1,
        lighting: state.lighting + 20,
        lightLevel: "MEDIUM",
      };

    case 3:
      return {
        count: state.count + 1,
        lighting: state.lighting + 10,
        lightLevel: "HIGH",
      };

    default:
      return state;
  }
};

const Bulb = ({ lightSteps, clickAction, resetCount }) => {
  const [lightState, dispatch] = useReducer(lightReducer, initialState);

  const handleClick = (bigCount) => {
    clickAction(); // see line 112-116  for the function call of line 52

    //  see line 106-110 for comment
    dispatch({ type: bigCount });
  };

  let turnLightOff = () => {
    resetCount(); // this returns / resets lightState to its initial value as defined in <BigHouse /> so as to restart the whole process
    dispatch({ type: 0 });
  };

  return (
    <section className="bulb">
      <section className="bulb__body">
        <div
          className="four-wayRoom mb-4 mt-2"
          style={{
            backgroundColor: `hsl(39, ${lightState.lighting}%, 50%)`,
            boxShadow: `-3px -2px 10px hsl(39, ${lightState.lighting}%,  50%`,
          }}
        >
          <span>
            <i className="fa fa-lightbulb-o" />
          </span>
        </div>
        <div className="lightDisplay">
          <button
            onClick={() => handleClick(lightSteps)}
            className="mr-2"
            disabled={lightState.count === 3}
            style={{ backgroundColor: `hsl(39, ${lightState.lighting}%, 50%)` }}
          >
            {lightState.count === 3
              ? "Light is @ Maximum"
              : lightState.count === 0
              ? "Turn Light on"
              : "Change Light level"}
          </button>

          <button
            onClick={turnLightOff}
            className="mt-2 mr-2 toggleSwitch"
            disabled={lightState.count === 0}
          >
            {lightState.count === 0 ? "Light is off" : "Turn Light off"}
          </button>
        </div>
      </section>
      <p className=" display-6 mb-5 feedback">
        <span> Light state :</span>
        <span style={{ color: `hsl(39, ${lightState.lighting}%, 50%)` }}>
          {lightState.lightLevel}
        </span>
      </p>
    </section>
  );
};

export default Bulb;

/*          
            bigCount's value is the value of the prop lightSteps , so the actions to be dispatched the form 
            {type: 0}, {type: 1}, {type: 2} and finally {type: 3}
 
  */

/* 
        increment BigHouse's count prop so it can be used
        in the dispatch of line 54 - see the parameter in the handleClick reference in the jsx
        
    */
