import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Ticker = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible) => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <h4 className={className} ref={countUpRef} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

const Counter = ({ icon, counting, name }) => {
  return (
    <div className="count-container">
      <i className={icon} aria-hidden="true"></i>
      <div className="grand-1-sqr">
        <div className="gg-a-type">
          {/* <CountUp end={counting} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp> */}
          <Ticker className="count" end={counting} />
        </div>
        <div className="gg-a-counter">Number of {name}</div>
      </div>
    </div>
  );
};

export default Counter;
