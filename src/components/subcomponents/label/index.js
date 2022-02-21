import React from 'react';
import { Label as LabelComponent } from './style';

function Label({children, ...rest}) { 
  return <LabelComponent >{children}</LabelComponent>;
}

export default Label;
