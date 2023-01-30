import { useEffect, useMemo, useState } from 'react'

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm)

  const [formValidation, setFormValidation] = useState({})

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false
    }

    return true
  }, [formValidation])

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  useEffect(() => {
    createValidators()
  }, [formState])

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  const createValidators = () => {
    const formcheckedValues = {}

    for (const formField of Object.keys(formValidations)) {
      // console.log(formField);
      const [fn, errorMessage] = formValidations[formField]

      formcheckedValues[`${formField}Valid`] = fn(formState[formField], formState) ? null : errorMessage
    }

    setFormValidation(formcheckedValues)
    // console.log(formcheckedValues);
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    isFormValid,
    ...formValidation
  }
}