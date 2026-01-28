// Priority: 1000
// On met une priorité très haute pour écraser les recettes des mods

ServerEvents.recipes(event => {
    // Liste complète des métaux présents dans tes mods (IE, Create, Oritech, EnderIO, etc.)
    const materials = [
        'iron', 'gold', 'copper',       // Vanilla
        'zinc', 'brass',                // Create
        'tin', 'lead', 'silver', 'nickel', 'uranium', 'aluminum', 'steel', // Immersive Engineering / Oritech
        'bronze', 'electrum', 'constantan', 'invar', // Alliages IE / Thermal
        'osmium'                        // Au cas où (souvent présent avec Mekanism ou addons)
    ]

    materials.forEach(material => {
        // --- 1. REMPLACEMENT DES ENTRÉES (INPUTS) ---
        // On dit aux recettes : "Si tu demandes un lingot de cuivre de Create, accepte n'importe quel lingot de cuivre (#c:ingots/copper)"
        event.replaceInput({}, `create:${material}_ingot`, `#c:ingots/${material}`)
        event.replaceInput({}, `immersiveengineering:ingot_${material}`, `#c:ingots/${material}`)
        event.replaceInput({}, `oritech:${material}_ingot`, `#c:ingots/${material}`)
        event.replaceInput({}, `enderio:ingot_${material}`, `#c:ingots/${material}`)
        
        // Pareil pour les plaques, poussières, pépites
        event.replaceInput({}, `create:${material}_sheet`, `#c:plates/${material}`)
        event.replaceInput({}, `immersiveengineering:plate_${material}`, `#c:plates/${material}`)
        event.replaceInput({}, `immersiveengineering:dust_${material}`, `#c:dusts/${material}`)

        // --- 2. REMPLACEMENT DES SORTIES (OUTPUTS) ---
        // On force les machines à fabriquer du Emendatus Enigmatica (EE)
        
        // Lingots (Sauf Fer/Or/Cuivre car on garde les Vanilla)
        if (!['iron', 'gold', 'copper'].includes(material)) {
            event.replaceOutput({}, `#c:ingots/${material}`, `emendatusenigmatica:${material}_ingot`)
            event.replaceOutput({}, `#c:nuggets/${material}`, `emendatusenigmatica:${material}_nugget`)
            event.replaceOutput({}, `#c:storage_blocks/${material}`, `emendatusenigmatica:${material}_block`)
            event.replaceOutput({}, `#c:raw_materials/${material}`, `emendatusenigmatica:raw_${material}`)
        }

        // Plaques (Plates) - C'est vital pour Create et IE
        event.replaceOutput({}, `#c:plates/${material}`, `emendatusenigmatica:${material}_plate`)
        
        // Poussières (Dusts) - Vital pour EnderIO, Oritech, IE
        event.replaceOutput({}, `#c:dusts/${material}`, `emendatusenigmatica:${material}_dust`)

        // Engrenages (Gears)
        event.replaceOutput({}, `#c:gears/${material}`, `emendatusenigmatica:${material}_gear`)

        // Tiges (Rods) - Souvent utilisées par Immersive Engineering
        event.replaceOutput({}, `#c:rods/${material}`, `emendatusenigmatica:${material}_rod`)
    })

    // --- 3. CAS SPÉCIAUX (Create Sheets vs EE Plates) ---
    // Create appelle ses plaques "sheet". On force la conversion vers "plate" de EE.
    const createSheets = ['copper', 'brass', 'iron', 'golden'] // Note: Create utilise "golden" pas "gold" pour la sheet
    
    createSheets.forEach(metal => {
        let materialName = metal === 'golden' ? 'gold' : metal; // Correction nom pour EE
        
        // Si Create essaie de produire une sheet, on la change en plate EE
        event.replaceOutput({mod: 'create'}, `create:${metal}_sheet`, `emendatusenigmatica:${materialName}_plate`)
    })

    // --- 4. Unification EnderIO (Poudres spécifiques) ---
    // EnderIO a des poudres de bedrock/charbon etc. On essaie d'unifier si EE les a.
    event.replaceOutput({}, '#c:dusts/coal', 'emendatusenigmatica:coal_dust')
    event.replaceOutput({}, '#c:dusts/charcoal', 'emendatusenigmatica:charcoal_dust')
    event.replaceOutput({}, '#c:dusts/obsidian', 'emendatusenigmatica:obsidian_dust')
})