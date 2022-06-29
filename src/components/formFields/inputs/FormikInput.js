import React from 'react'
import { useField } from 'formik';
import upload from 'assets/images/upload.svg'

const FormikInput = (props) => {

  const {label, type, onDrop, onClick, onChange} = props
  const [field, meta] = useField(props);

  const dragOverHandler = (e) => {
    e.preventDefault()
  }

  const dropHandler = (e) => {
    e.preventDefault()
    onDrop && onDrop(e.dataTransfer)
  }

  const handleImageClick = (e) => {
    onClick && onClick()
  }

  const handleImageChange = (e) => {
    onChange && onChange(e.target.files)
  }

  return (
    <>
    { type === "file" ?
      <div id={props.name}> 
        <label className={`text-sm`}>{label}</label>
        <div className={`flex items-center gap-x-2 border-2 border-dashed py-4 px-8 mt-2 w-max border-[#979797] rounded`} id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler}>
          <img src={upload} alt="upload to cloud" />
          <p className='text-xs text-[#5C6F7F]'>
            <span className='text-[#304FFD] underline relative cursor-pointer'>
              Drag one or Browse
              <input title='' multiple onClick={handleImageClick} onChange={handleImageChange} className='w-full h-full absolute z-[5] top-0 left-0 opacity-0 cursor-pointer' type='file' />
              <input type="hidden" name={props.name} value={meta.value} />
            </span> 
            <span>
              {" to upload"}
            </span>
          </p>
        </div>
        <div>
            {meta.error ? (
            <div className="text-[12px] text-red-500">
              {meta.error}
            </div>
          ) : null}
        </div>
      </div> : 
      <div className='flex flex-col text-sm' id={props.name}>
        <label className={`${(meta.error && meta.touched) ? "text-red-500" : ""} mb-1`}>{label}</label>
        <input className={`border-2 px-4 py-3 text-xs outline-none ${(meta.error && meta.touched) ? "focus:border-red-500 border-red-500" : "focus:border-[#64A4FF] border-[#E2E9F0]"} rounded w-7/12 max-w-sm`} {...field} {...props} touched={meta.touched ? "true" : "false"} />
        <div>
            {meta.error && meta.touched ? (
            <div className="text-[10px] text-red-500">
              {meta.error}
            </div>
          ) : null}
        </div>
      </div>
    }   
    </>
  )
}

export default FormikInput