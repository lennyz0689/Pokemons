import { useState } from "react"
import Style from './Form.module.css'

const Form = () => {

    const [form, setForm] = useState({
        nombre: '',
        imagen: '',
        vida: '',
        ataque: '',
        defensa: '',
        velocidad: '',
        altura: '',
        peso: '',
        tipos: []
    })

    const [errors, setErrors] = useState({
        nombre: '',
        imagen: '',
        vida: '',
        ataque: '',
        defensa: '',
        velocidad: '',
        altura: '',
        peso: '',
        tipos: []
    })

    const handlechangue = (event) => {
        const propiedad = event.target.name;
        const value = event.target.value

        validate({ ...form, [propiedad]: value })
        setForm({ ...form, [propiedad]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (form.nombre === '' && form.imagen === '' && form.vida === '' && form.ataque === '' && form.defensa === '') {
            alert('los datos estan vacios')
        }
    }

    const validate = (form) => {
        let newErrors = { ...errors };

        if(/^[a-zA-ZáéíóúüñÑ]+$/.test(form.nombre)){
            newErrors.nombre = ''
        }else if (form.nombre === '') {
            newErrors.nombre = 'El campo no puede estar vacío'
        } else {
            newErrors.nombre = 'El nombre no puede tener numeros';
        }

        if (/https?:\/\/.*\.(png|jpg)$/.test(form.imagen)) {
            newErrors.imagen = '';
        } else if (form.imagen === '') {
            newErrors.imagen = 'no puede estar vacio';
        } else {
            newErrors.imagen = 'no es un campo valido';
        }

        if(/^[1-9]+$/.test(form.vida)) {
            newErrors.vida = ''
        }else{
            newErrors.vida = 'solo son numeros y superiores a 0'
        }


        if(/^[1-9]+$/.test(form.ataque)) {
            newErrors.ataque = ''
        }else{
            newErrors.ataque = 'solo son numeros y superiores a 0'
        }

        if(/^[1-9]+$/.test(form.defensa)) {
            newErrors.defensa = ''
        }else{
            newErrors.defensa = 'solo son numeros y superiores a 0'
        }

        if(/^[0-9]+$/.test(form.velocidad) || form.velocidad === '') {
            newErrors.velocidad = ''
        }else{
            newErrors.velocidad = 'solo son numeros'
        }

        if(/^[0-9]+$/.test(form.altura) || form.altura === '') {
            newErrors.altura = ''
        }else{
            newErrors.altura = 'solo son numeros'
        }

        if(/^[0-9]+$/.test(form.peso) || form.peso === '') {
            newErrors.peso = ''
        }else{
            newErrors.peso = 'solo son numeros'
        }

        setErrors(newErrors)
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={Style.container}>
                <label>Nombre: </label>
                <input type="text" value={form.nombre} onChange={handlechangue} name="nombre" />
                <span>{errors.nombre}</span>
                <label>Imagen: </label>
                <input type="text" value={form.imagen} onChange={handlechangue} name="imagen" />
                <span>{errors.imagen}</span>
                <label>Vida: </label>
                <input type='text' value={form.vida} onChange={handlechangue} name="vida" />
                <span>{errors.vida}</span>
                <label>Ataque: </label>
                <input type="text" value={form.ataque} onChange={handlechangue} name="ataque"/>
                <span>{errors.ataque}</span>
                <label>Defensa: </label>
                <input type="text" value={form.defensa} onChange={handlechangue} name="defensa"/>
                <span>{errors.defensa}</span>
                <label>Velocidad: </label>
                <input type="text" value={form.velocidad} onChange={handlechangue} name="velocidad"/>
                <span>{errors.velocidad}</span>
                <label>Altura: </label>
                <input type="text" value={form.altura} onChange={handlechangue} name="altura"/>
                <span>{errors.altura}</span>
                <label>Peso: </label>
                <input type="text" value={form.peso} onChange={handlechangue} name="peso"/>
                <span>{errors.peso}</span>
                {((!errors.nombre && !errors.imagen && !errors.vida && !errors.ataque && !errors.defensa)) && <input type="submit" value="enviar" />}
            </div>
        </form>
    )
}

export default Form