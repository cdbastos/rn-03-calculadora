import React, { useRef, useState } from 'react'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const refUltimaOperacion = useRef<Operadores>();

    const armarNumero = (numeroTexto: string) => {

        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                // Evaluar si es otro cero, y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

                // Evaluar si es diferente de cero y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);

                // Evitar 0000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }

        } else {
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substr(1);
        } else {
            negativo = '';
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1));
        }
        else {
            setNumero('0');
        }
    }

    const CambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnDividir = () => {
        CambiarNumPorAnterior();
        refUltimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        CambiarNumPorAnterior();
        refUltimaOperacion.current = Operadores.multiplicar;
    }

    const btnSumar = () => {
        CambiarNumPorAnterior();
        refUltimaOperacion.current = Operadores.sumar;
    }

    const btnRestar = () => {
        CambiarNumPorAnterior();
        refUltimaOperacion.current = Operadores.restar;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (refUltimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;
        }
        setNumeroAnterior('0');
    }

    return {
        numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        armarNumero,
        btnRestar,
        btnSumar,
        calcular,
    }

}
