import "./FormInput.style.css"
const FormInput=({handleChange,label,...otherProps})=>(
    <div className="group">
        <input onChange={handleChange} className="form-input" {...otherProps}/>
        {
            label?
            <label className={`form-input-label ${otherProps.value.length?"shrink":""}`}>
                {label}
            </label>
            :
            null
        }
    </div>
)
export default FormInput;