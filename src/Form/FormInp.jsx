import { useState } from "react"
import "./forminput.css"

const FormInp = (props) => {
    const [focused, setFocused] = useState(false);
    const { errorMessage, label, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <div className="forminput">
            <label>{label}</label>
            <input {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()} />
            <span>{errorMessage}</span>
            {/* <label>Username</label> */}
            {/* <input 
      placeholder={props.placeholder} name={props.name} /> */}

        </div>
    )
}

export default FormInp