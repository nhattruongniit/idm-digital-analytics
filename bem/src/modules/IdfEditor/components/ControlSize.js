import React from 'react';

import ControlSize from '../../../components/common/ControlSize';

const DefaultPage = ({ type, height, fontSize, setControlSizeFn}) => {
  return (
    <div>
      <ControlSize 
        type={type}
        height={height}
        fontSize={fontSize}
        setControlSizeFn={setControlSizeFn}
      />
    </div>
  );
}

export default DefaultPage;
