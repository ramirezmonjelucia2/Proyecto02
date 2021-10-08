import { menu } from './util/menu'
import { leerTeclado } from './util/entradaTeclado'

const main = async () => {
    let n: number
    do {

        n = await menu()
        switch (n) {
            case 1:
                //primo o no
                await primo()
                break
            case 2:
                //par o impar
                await parimpar()
                break
            case 3:
                //Calcular los dias que quedan para una fecha
                await fecha()
                break
            case 0:
                console.log('\nEl programa ha terminado')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    } while (n != 0)
}

const primo = async () => {
    let n1: number
    let x: number
    let y: number

    n1 = parseInt(await leerTeclado('Introduce un número: '))
    for (x = 2; x <= (n1 - 1); x++) {
        y = n1 % x
        if (y == 0) {
            console.log(`El numero ${n1} no es primo`)
            break
        } else {
            console.log(`El número ${n1} es primo`)
            break

        }
    }
}
main()
const parimpar = async () => {
    let n1: number
    n1 = parseInt(await leerTeclado('Introduce un número: '))
    if (n1 % 2 == 0) {
        console.log(`El numero ${n1} es PAR`)
    } else {
        console.log(`El numero ${n1} es IMPAR`)
    }
}



const fecha = async () => {
    let dia: number
    let mes: number
    let año: number
    dia = parseInt(await leerTeclado('Dia (dd): '))
    mes = parseInt(await leerTeclado('Mes (mm): '))
    año = parseInt(await leerTeclado('Año (aaaa): '))

    let fecha = new Date(año, mes, dia)
    let fechaactual = new Date()
    let diferencia = Math.floor(fechaactual.getTime() - fecha.getTime());
    let dias = diferencia/(1000 * 3600 * 24)
    console.log(`Quedan ${dias} dias`)
}

