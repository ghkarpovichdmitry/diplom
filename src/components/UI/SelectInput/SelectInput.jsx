import React from "react";
import { useField } from "formik";
import Select from "react-select";

function SelectInput({ label, ...props }) {
    const [field, meta, { setValue, setTouched }] = useField( props );
    const options = props.children.map((option) => ({
        value: option.props.value,
        label: option.props.children,
    }));

    const onChange = ({ value }) => {
        setValue( value );
    };

    return (
        <div className="mb-3">
            <label htmlFor={props.id || props.name} className="form-label">
                {label}
            </label>
            <Select
                defaultValue={ options.find( (option) => option.value === field.value ) }
                options={ options }
                onChange={ onChange }
                onBlur={ setTouched }
            />
            {meta.touched && meta.error ? (
                <div className="form-text text-danger">{meta.error}</div>
            ) : null}
        </div>
    );
}
export default SelectInput;

// const Select = ({ options, defaultValue = 'Select item', name, value, onChange }) => {
//     return (
//         <select
//             name={ name }
//             value={ value }
//             onChange={ e => onChange( e.target.value ) }
//         >
//             {/*<option value="" label="Role" disabled>{defaultValue}</option>*/}
//             <option value="" label="Role" >{defaultValue}</option>
//
//             {options.map(item => (
//                 <option
//                     key={ item.label }
//                     value={ item.value }
//                     label={ item.label }
//                 >
//                     {item.value}
//                 </option>
//             ))}
//         </select>
//     );
// };
//
// export default Select;