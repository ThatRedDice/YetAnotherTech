// Priority: 1000
ServerEvents.recipes(event => {
    const materials = [
        'zinc', 'brass', 'tin', 'lead', 'silver', 'nickel', 'uranium', 'aluminum', 'steel',
        'bronze', 'electrum', 'constantan', 'invar', 'osmium'
    ]

    // On traite les métaux MODDÉS (tout sauf fer/or/cuivre)
    materials.forEach(material => {
        // --- Remplacement des ENTRÉES (INPUTS) ---
        // On vérifie que l'item existe AVANT de le remplacer pour éviter le crash
        
        if (Item.of(`create:${material}_ingot`).id != 'minecraft:air') {
            event.replaceInput({}, `create:${material}_ingot`, `#c:ingots/${material}`)
        }
        if (Item.of(`immersiveengineering:ingot_${material}`).id != 'minecraft:air') {
            event.replaceInput({}, `immersiveengineering:ingot_${material}`, `#c:ingots/${material}`)
        }
        if (Item.of(`oritech:${material}_ingot`).id != 'minecraft:air') {
            event.replaceInput({}, `oritech:${material}_ingot`, `#c:ingots/${material}`)
        }
        if (Item.of(`enderio:ingot_${material}`).id != 'minecraft:air') {
            event.replaceInput({}, `enderio:ingot_${material}`, `#c:ingots/${material}`)
        }
        
        // --- Remplacement des SORTIES (OUTPUTS) ---
        // On force vers Emendatus Enigmatica SI l'item cible existe
        if (Item.of(`emendatusenigmatica:${material}_ingot`).id != 'minecraft:air') {
            event.replaceOutput({}, `#c:ingots/${material}`, `emendatusenigmatica:${material}_ingot`)
            event.replaceOutput({}, `#c:nuggets/${material}`, `emendatusenigmatica:${material}_nugget`)
            event.replaceOutput({}, `#c:plates/${material}`, `emendatusenigmatica:${material}_plate`)
            event.replaceOutput({}, `#c:dusts/${material}`, `emendatusenigmatica:${material}_dust`)
            event.replaceOutput({}, `#c:gears/${material}`, `emendatusenigmatica:${material}_gear`)
            event.replaceOutput({}, `#c:rods/${material}`, `emendatusenigmatica:${material}_rod`)
        }
    })

    // --- CAS SPÉCIAUX : FER, OR, CUIVRE ---
    const vanillaMaterials = ['iron', 'gold', 'copper']
    
    vanillaMaterials.forEach(material => {
        // Unification des PLAQUES
        // Check Create
        if (Item.of(`create:${material}_sheet`).id != 'minecraft:air') {
            event.replaceInput({}, `create:${material}_sheet`, `#c:plates/${material}`)
        }
        // Check IE
        if (Item.of(`immersiveengineering:plate_${material}`).id != 'minecraft:air') {
            event.replaceInput({}, `immersiveengineering:plate_${material}`, `#c:plates/${material}`)
        }
        
        if (Item.of(`emendatusenigmatica:${material}_plate`).id != 'minecraft:air') {
             event.replaceOutput({}, `#c:plates/${material}`, `emendatusenigmatica:${material}_plate`)
        }

        // Unification des POUSSIÈRES
        if (Item.of(`immersiveengineering:dust_${material}`).id != 'minecraft:air') {
            event.replaceInput({}, `immersiveengineering:dust_${material}`, `#c:dusts/${material}`)
        }
        if (Item.of(`enderio:powder_${material}`).id != 'minecraft:air') {
            event.replaceInput({}, `enderio:powder_${material}`, `#c:dusts/${material}`)
        }

        if (Item.of(`emendatusenigmatica:${material}_dust`).id != 'minecraft:air') {
             event.replaceOutput({}, `#c:dusts/${material}`, `emendatusenigmatica:${material}_dust`)
        }
    })

    // Correction spécifique Create : Sheet -> Plate
    event.replaceOutput({mod: 'create'}, 'create:brass_sheet', 'emendatusenigmatica:brass_plate')
    event.replaceOutput({mod: 'create'}, 'create:copper_sheet', 'emendatusenigmatica:copper_plate')
    event.replaceOutput({mod: 'create'}, 'create:iron_sheet', 'emendatusenigmatica:iron_plate')
    event.replaceOutput({mod: 'create'}, 'create:golden_sheet', 'emendatusenigmatica:gold_plate')
})