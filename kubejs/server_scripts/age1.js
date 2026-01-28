ServerEvents.recipes(event => {
    // On retire le craft par défaut de l'Alternateur
    event.remove({ output: 'createaddition:alternator' })

    // On crée une recette de "Mechanical Crafting" (Create) à la place
    // Cela force le joueur à avoir une usine Create fonctionnelle
    event.recipes.create.mechanical_crafting('createaddition:alternator', [
        '  S  ',
        ' SAS ',
        '  I  '
    ], {
        S: 'emendatusenigmatica:steel_ingot', // Demande déjà de l'acier !
        A: 'create:andesite_alloy',
        I: 'createaddition:iron_rod'
    })
})