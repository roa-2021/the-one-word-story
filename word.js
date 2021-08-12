const checkTypeOf = (input) => {

    return typeof input
}

const checkIfNum = (input) => {

    return !isNaN(parseInt(input))

}

const checkIfAlpha = (input) => {

    if(/^[a-zA-Z]+$/.test(input))
    {
        return true;
    }
    else{
        return false;
    }

}

const checkIfExplicit = (input) => {

    const explicitWords = ['fuck', 'shit', 'ass']

    const ifExplicit = false

    for(i = 0; 0 < explicitWords.length; i++)
    {
        if(input == explicitWords[i])
        {
            ifExplicit = true
        }
    }

    return ifExplicit;

}


module.exports = {
    checkTypeOf: checkTypeOf,
    checkIfNum: checkIfNum,
    checkIfAlpha: checkIfAlpha,
    checkIfExplicit: checkIfExplicit
}