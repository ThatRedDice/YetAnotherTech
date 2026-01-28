// Priority: 1000
ServerEvents.recipes(event => {
    const materials = [
        'iron', 'gold', 'copper', 
        'zinc', 'brass', 
        'tin', 'lead', 'silver', 'nickel', 'uranium', 'aluminum', 'steel',
        'bronze', 'electrum', 'constantan', 'invar', 'osmium'
    ]

    materials.forEach(material => {
        // --- 1. INPUTS (Remplacement intelligent) ---
        // On remplace UNIQUEMENT si l'item existe pour éviter le crash
        
        // Create (Ignore Fer/Or/Cuivre car Create ne les a pas)
        if (!['iron', 'gold', 'copper'].includes(material)) {
            if (Item.of(`create:${material}_ingot`).id != 'minecraft:air') {
                event.replaceInput({}, `create:${material}_ingot`, `#c:ingots/${material}`)
            }
        }
        
        // Immersive Engineering
        if (Item.of(`immersiveengineering:ingot_${material}`).id != 'minecraft:air') {
            event.replaceInput({}, `immersiveengineering:ingot_${material}`, `#c:ingots/${material}`)
        }

        // --- 2. OUTPUTS (Sortie forcée vers Emendatus Enigmatica) ---
        // On ne touche pas aux lingots vanilla
        if (!['iron', 'gold', 'copper'].includes(material)) {
            // Vérifie que l'item EE existe avant de forcer, sinon on garde l'original
            // C'est la sécurité anti-crash "Steel Ingot missing"
            if (Item.of(`emendatusenigmatica:${material}_ingot`).id != 'minecraft:air') {
                event.replaceOutput({}, `#c:ingots/${material}`, `emendatusenigmatica:${material}_ingot`)
                event.replaceOutput({}, `#c:nuggets/${material}`, `emendatusenigmatica:${material}_nugget`)
                event.replaceOutput({}, `#c:plates/${material}`, `emendatusenigmatica:${material}_plate`)
                event.replaceOutput({}, `#c:dusts/${material}`, `emendatusenigmatica:${material}_dust`)
                event.replaceOutput({}, `#c:gears/${material}`, `emendatusenigmatica:${material}_gear`)
                event.replaceOutput({}, `#c:rods/${material}`, `emendatusenigmatica:${material}_rod`)
            }
        }
    })
})