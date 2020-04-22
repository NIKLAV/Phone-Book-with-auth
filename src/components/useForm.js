import {useState, useEffect} from 'react'

const useForm = (callback, validateLogin) => {
    const [value, setValues] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleChange = event => {
        const {name, value} = event.target; 
       setValues({
             ...value,
             [name]: value
         })
         
     } 
     
     
     const handleSubmit = event => {
         event.preventDefault();
         setErrors(validateLogin(value))
        // callback();
        setIsSubmitting(true);
     }

     useEffect(() => {
         if (Object.keys(errors).length === 0 && isSubmitting) {
             callback();
         }
     }, [errors])

     return {
         handleChange,
         handleSubmit,
         value,
         errors
     }
}

export default useForm;