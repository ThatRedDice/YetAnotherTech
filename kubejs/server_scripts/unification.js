// Priority: 1000
ServerEvents.recipes(event => {
    const materials = [
        'zinc', 'brass', 'tin', 'lead', 'silver', 'nickel', 'uranium', 'aluminum', 'steel',
        'bronze', 'electrum', 'constantan', 'invar', 'osmium'
    ]

    // On traite les métaux MODDÉS (tout sauf fer/or/cuivre)
    materials.forEach(material => {
        // Remplacer les entrées par des TAGS
        event.replaceInput({}, `create:${material}_ingot`, `#c:ingots/${material}`)
        event.replaceInput({}, `immersiveengineering:ingot_${material}`, `#c:ingots/${material}`)
        event.replaceInput({}, `oritech:${material}_ingot`, `#c:ingots/${material}`)
        event.replaceInput({}, `enderio:ingot_${material}`, `#c:ingots/${material}`)
        
        // Remplacer les sorties par EMENDATUS ENIGMATICA
        // On vérifie d'abord que l'item cible existe (au cas où l'acier n'est pas là)
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
    // Pour eux, on ne touche qu'aux PLAQUES et POUSSIÈRES, pas aux lingots !
    const vanillaMaterials = ['iron', 'gold', 'copper']
    
    vanillaMaterials.forEach(material => {
        // Unification des PLAQUES (Vital pour Create/IE)
        event.replaceInput({}, `create:${material}_sheet`, `#c:plates/${material}`)
        event.replaceInput({}, `immersiveengineering:plate_${material}`, `#c:plates/${material}`)
        
        if (Item.of(`emendatusenigmatica:${material}_plate`).id != 'minecraft:air') {
             event.replaceOutput({}, `#c:plates/${material}`, `emendatusenigmatica:${material}_plate`)
        }

        // Unification des POUSSIÈRES (Vital pour EnderIO/Mekanism)
        event.replaceInput({}, `immersiveengineering:dust_${material}`, `#c:dusts/${material}`)
        event.replaceInput({}, `enderio:powder_${material}`, `#c:dusts/${material}`) // EnderIO appelle ça powder

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