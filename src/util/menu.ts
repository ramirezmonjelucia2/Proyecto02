import { leerTeclado } from '../util/entradaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('Esto es un menú multifuncional, <br>por favor elija la opción que desea realizar.')
    console.log('1- Primo ')
    console.log('2- Par/Impar')
    console.log('3- Diferencia de fechas')
    console.log('0- Salir')
    return     n = parseInt( await leerTeclado('opción') )

}