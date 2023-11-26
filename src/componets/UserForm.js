import Input from './Input.js'
import Button from './Button.js'
import useFormulario from '../hooks/useFormulario.js'

const UserForm = (submit) => {
    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        lastname: '',
        email: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }

    return(
    <form onSubmit={handleSubmit}>
        <Input
            label="Nombre"
            name="name"
            value={formulario.name}
            onChange={handleChange}
            placeHolder='Nombre'
        />
        <Input
            label="Apellido"
            name="lastname"
            value={formulario.lastname}
            onChange={handleChange}
            placeHolder='Apellido'
        />
        <Input
            label="Correo"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            placeHolder='Correo'
        />
        <Button>Enviar</Button>
    </form>
    )
}

export default UserForm
