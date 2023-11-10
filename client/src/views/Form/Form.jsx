import { useEffect, useState } from "react"
import Style from './Form.module.css'
import { useDispatch, useSelector } from "react-redux"
import { createPokemon, getTypes } from "../../Redux/Actions"

const Form = () => {

    useEffect(() => {
        dispatch(getTypes())
    }, [])

    const dispatch = useDispatch()

    const types = useSelector(state => state.allTypes);

    const [form, setForm] = useState({
        nombre: '',
        imagen: '',
        vida: '',
        ataque: '',
        defensa: '',
        velocidad: 0,
        altura: 0,
        peso: 0,
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
        tipos: ''
    })

    const handlechangue = (event) => {
        const propiedad = event.target.name;
        const value = event.target.value;

        if (propiedad === 'tipos') {
            // Verifica si el ID ya está en form.tipos
            if (!form.tipos.includes(value)) {
                // Agrega el ID solo si no existe
                validate({ ...form, [propiedad]: [...form.tipos, value] });
                setForm({ ...form, [propiedad]: [...form.tipos, value] });
            }
        } else {
            validate({ ...form, [propiedad]: value });
            setForm({ ...form, [propiedad]: value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        const errorMessage = await dispatch(createPokemon(form));
        if (errorMessage) {
            alert(`Error: ${errorMessage}`);
        } else {
            alert('Creado exitosamente');
        }

    }

    const validate = (form) => {
        let newErrors = { ...errors };

        if (/^[a-zA-ZáéíóúüñÑ]+$/.test(form.nombre)) {
            newErrors.nombre = ''
        } else if (form.nombre === '') {
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

        if (/^[1-9]\d*$/.test(form.vida)) {
            newErrors.vida = ''
        } else {
            newErrors.vida = 'solo son numeros y superiores a 0'
        }

        if (/^[1-9]\d*$/.test(form.ataque)) {
            newErrors.ataque = ''
        } else {
            newErrors.ataque = 'solo son numeros y superiores a 0'
        }

        if (/^[1-9]\d*$/.test(form.defensa)) {
            newErrors.defensa = ''
        } else {
            newErrors.defensa = 'solo son numeros y superiores a 0'
        }

        if (/^[0-9]+$/.test(form.velocidad) || form.velocidad === '') {
            newErrors.velocidad = ''
        } else {
            newErrors.velocidad = 'solo son numeros'
        }

        if (/^[0-9]+$/.test(form.altura) || form.altura === '') {
            newErrors.altura = ''
        } else {
            newErrors.altura = 'solo son numeros'
        }

        if (/^[0-9]+$/.test(form.peso) || form.peso === '') {
            newErrors.peso = ''
        } else {
            newErrors.peso = 'solo son numeros'
        }

        if (form.tipos.length < 2) {
            newErrors.tipos = 'selescciona al menos 2 tipos'
        } else {
            newErrors.tipos = ''
        }

        setErrors(newErrors)

    }

    const nombresTipos = form.tipos.map(id => {
        const tipo = types.find(tipo => tipo.id === parseInt(id, 10));
        return tipo.nombre;
    });
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
                <input type="text" value={form.ataque} onChange={handlechangue} name="ataque" />
                <span>{errors.ataque}</span>
                <label>Defensa: </label>
                <input type="text" value={form.defensa} onChange={handlechangue} name="defensa" />
                <span>{errors.defensa}</span>
                <label>Velocidad: </label>
                <input type="text" value={form.velocidad} onChange={handlechangue} name="velocidad" />
                <span>{errors.velocidad}</span>
                <label>Altura: </label>
                <input type="text" value={form.altura} onChange={handlechangue} name="altura" />
                <span>{errors.altura}</span>
                <label>Peso: </label>
                <input type="text" value={form.peso} onChange={handlechangue} name="peso" />
                <span>{errors.peso}</span>
                <label>Tipo</label>
                <select name="tipos" onChange={handlechangue}>
                    {types.map(tipo => <option value={tipo.id}>{tipo.nombre}</option>)}
                </select>
                <p>{nombresTipos.join(', ')}</p>
                <span>{errors.tipos}</span>
                {((!errors.nombre && !errors.imagen && !errors.vida && !errors.ataque && !errors.defensa)) && <input type="submit" value="enviar" className={Style.submit} />}
            </div>
        </form>
    )
}

export default Form