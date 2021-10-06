import React from 'react';
import classes from "classnames";
import cl from "./Input.module.scss";
// inputMask ?

const Input = React.forwardRef(({
   className = null,
   placeholder = null,
   type = 'text',
   name= 'text',
   ...rest
}, ref) => {
    return (
        <label className={ cl.label }>
            <input
                className={ classes( cl.input, className && className ) }
                placeholder={ placeholder }
                ref={ ref }
                type={ type }
                name={ name }
                aria-label={ `${name} input` }
                { ...rest }
            />
        </label>
    );
});

export default Input;