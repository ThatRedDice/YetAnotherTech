ServerEvents.recipes(event => {
    // On retire la recette par défaut de l'Alternateur
    event.remove({ output: 'createaddition:alternator' })

    // Recette "Expert" en table de craft (plus stable pour l'instant)
    event.shaped('createaddition:alternator', [
        '  S  ',
        ' SAS ',
        '  I  '
    ], {
        S: '#c:plates/steel',        // Utilise le TAG Acier (plus sûr que l'item direct)
        A: 'create:andesite_alloy',
        I: 'createaddition:iron_rod'
    })
})