import React from 'react'

import CustomButton from './CustomButton'



const FilePicker = ({ file, setFile, readFile }) => {

  const containerStyle = {
    width: '200px',    // Adjust the width as needed
    height: '150px',   // Adjust the height as needed
  };

  return (
    <div className="filepicker-container bottom-0" style={containerStyle}>
      <div className="flex-1 flex flex-col">
        <input 
          id='file-upload'
          type='file'
          accept='image/*'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          UPLOAD FILE
        </label>

        <p className="mt-4 text-black-500 text-xs truncate ">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap">
        <CustomButton 
          type="filled"
          title="APPLY"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker