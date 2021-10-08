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
            case 4:
                //calcular descuento segun los años de socio
                await descuento()
                break
            case 5:
                //fibonacci hasta el numero indicado
                await fibo()
                break
            case 6:
                await tabla()
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
    let dias = diferencia / (1000 * 3600 * 24)
    console.log(`Quedan ${dias} dias`)
}

const descuento = async () => {
    let antiguedad: number
    let edad: number
    let precio: number
    let preciofinal: number
    console.log('¡Hola buenas! Con motivo del aniversario de PCComponentes estamos realizando un descuento.')
    console.log('su compra tendrá un descuento segun su antiguedad de socio y su  edad,')
    console.log('por favor, rellene los siguientes datos') 
    antiguedad = parseInt(await leerTeclado('Introduzca los años del carnet de socio'))

    edad = parseInt(await leerTeclado("¿Cual es tu edad?"))
    precio = parseInt(await leerTeclado("Precio de la compra sin descuento"))
    preciofinal = descuento()
    function descuento() {
        if
            (antiguedad < 3) {
            preciofinal = precio - (precio * 0.1)
        } else {
            if (antiguedad > 3 && antiguedad < 6) {
                preciofinal = precio - (precio * 0.15)
            } else {
                if (antiguedad > 6) {
                    preciofinal = precio - (precio * 0.2)
                } else {
                }
            }
        }
        return preciofinal
    }

    if (edad < 30) { preciofinal = preciofinal - (preciofinal * 0.05) }
    console.log("Tu antiguedad es: " + antiguedad + "\nTu edad es: " + edad + "\nEl precio de la compra sin descuento es: " + precio + "€\nEl precio final es: " + preciofinal + "€")


}

const fibo = async () => {
    var res = 1
    var res2 = 0
    var num = parseInt(await leerTeclado("Introduzca un número"));
    console.log("0 " + "1 ")
    for (var fibo = 3; fibo < num; fibo++) {

        var res3 = res2 + res
        var res2 = res
        var res = res3

        if (res3 > num) { break }

        console.log(res3 + " ")
    }
}
const tabla = async () => {
    var num = parseInt(await leerTeclado("Introduzca un número entre el 2 y el 10"))
    var multiplo
    for (multiplo = 1; multiplo <= 10; multiplo++) {
        var solucion = multiplo * num
        console.log(num + " x " + multiplo + " = " + solucion + "\n")
    }
}