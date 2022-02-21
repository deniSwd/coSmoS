import {Field} from "redux-form";
import React from "react";

export const fieldCreator = (component, validate, name, placeholder, props = {}, text = '') => {
    return (
        <div>
            <Field component={component} validate={validate}
                   name={name} placeholder={placeholder}
                    {...props}
            /> {text}
        </div>
    )
}