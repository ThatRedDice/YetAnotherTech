ServerEvents.recipes(event => {
    // 1. On supprime les recettes originales (bloc et outil de lien)
    event.remove({ output: 'entangled:block' })
    event.remove({ output: 'entangled:item' })

    // 2. Nouvelle recette pour le bloc (Demande l'Âge 3 : AE2 + Ender IO)
    event.shaped('entangled:block', [
        'OPO',
        'ECE',
        'OPO'
    ], {
        O: 'minecraft:obsidian',
        P: 'ae2:logic_processor',        // AE2 (Digital)
        E: 'minecraft:ender_eye',
        C: 'enderio:pulsating_crystal'   // Ender IO (Alliage de téléportation)
    })

    // 3. Nouvelle recette pour l'outil de lien (Entangled Binder)
    event.shaped('entangled:item', [
        '  E',
        ' R ',
        'S  '
    ], {
        E: 'minecraft:ender_pearl',
        R: 'createaddition:iron_rod',    // Utilise une tige de fer de Create Addition
        S: '#c:ingots/steel' // Demande de l'acier (Âge 2+)
    })
})