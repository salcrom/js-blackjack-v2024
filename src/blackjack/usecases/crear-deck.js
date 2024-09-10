import _ from "underscore";

// export const miNombre = "Sergio";

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>}retorna un nuevo arreglo
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error("TipoDeCarta es obligatorio como un arreglo de sring");
    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error(
            "TiposEspeciales es obligatorio como un arreglo de sring"
        );

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);

    return deck;
};

// export default crearDeck;
