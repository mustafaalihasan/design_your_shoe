import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {

  const aipickerStyle = {
    width: '200px',    // Adjust the width as needed
    height: '150px',   // Adjust the height as needed
    bottom: '-20%',

  };

  return (
    <div className='aipicker-container' style={aipickerStyle}>
      <textarea 
        placeholder='Let AI design for you...'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea '
      />
      <div className='flex flex-wrap gap-3'>
          <CustomButton 
            type="filled"
            title="Ask AI"
            handleClick={() => handleSubmit('logo')}
            customStyles="text-xs"
          />

      </div>
    </div>
  )
}

export default AIPicker