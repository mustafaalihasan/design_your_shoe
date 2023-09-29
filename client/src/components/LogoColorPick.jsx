import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const LogoColorPick = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full top-0 ml-3 cursor-pointer">
      <SketchPicker 
        color={snap.color01}
        disableAlpha
        onChange={(color) => state.color01 = color.hex}
      />
    </div>
  )
}

export default LogoColorPick