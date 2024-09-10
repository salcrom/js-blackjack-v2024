/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck retorna un arreglo de string
 * @returns {String<String>} retorna la carta del deck
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw "No hay cartas en el deck";
    }
    const carta = deck.pop();
    return carta;
};
