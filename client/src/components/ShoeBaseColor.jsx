import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ShoeBaseColor = () => {
  const snap = useSnapshot(state);


  


  return (
    <div className="absolute left-full bottom-0 ml-3 cursor-pointer">
      <SketchPicker 
        color={snap.color02}
        disableAlpha
        onChange={(color) => state.color02 = color.hex}
      />
    </div>
  )
}

export default ShoeBaseColor