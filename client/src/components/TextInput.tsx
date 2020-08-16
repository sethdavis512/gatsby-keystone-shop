import React from 'react'
import classnames from 'classnames'

interface TextInputProps {
    disabled?: boolean
    handleChange: any
    id: string
    label: string
    name: string
    placeholder?: string
    required?: boolean
    srOnly?: boolean
    value: string
}

const TextInput: React.FC<TextInputProps> = ({
    disabled = false,
    handleChange,
    id,
    label,
    name,
    placeholder = 'Text',
    required = false,
    srOnly,
    value
}) => {
    const showRequired = required ? <span className="required">*</span> : ''
    const labelClassName = classnames('label', {
        'is-sr-only': srOnly
    })
    return (
        <div className="field">
            {label && (
                <label htmlFor={id} className={labelClassName}>
                    {label} {showRequired}
                </label>
            )}
            <div className="control">
                <input
                    className="input"
                    disabled={disabled}
                    id={id}
                    name={name}
                    onChange={handleChange}
                    placeholder={placeholder}
                    type="text"
                    value={value}
                />
            </div>
        </div>
    )
}

export default TextInput
