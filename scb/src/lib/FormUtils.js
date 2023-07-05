export const validar = (callbackAction, inputs, setErrors, validator) => {
    validator.validate(inputs, { abortEarly: false })
        .then(() => {
            setErrors({});
            if (callbackAction) callbackAction();
        })
        .catch((error) => {
            setErrors({});
            error.inner.forEach((err) => {
                setErrors((prevErrors) => ({ ...prevErrors, [err.path]: err.message }));
            });
        });
}

export const handleChange = (e, setInputs, inputs) => {
    if (e.target.type === "checkbox"){
        const value = e.target.checked === true;
        const name = e.target.name;
        setInputs({ ...inputs, [name]: value })
    }else {
        const value = e.target.rawValue ? e.target.rawValue : e.target.value;
        const name = e.target.name
        setInputs({ ...inputs, [name]: value })
    }
}
