RecipeViewerEvents.removeEntries('item', event => {
    // Liste des matériaux à nettoyer
    const materials = [
        'iron', 'gold', 'copper', 
        'zinc', 'brass', 
        'tin', 'lead', 'silver', 'nickel', 'uranium', 'aluminum', 'steel',
        'bronze', 'electrum', 'constantan', 'invar',
        'osmium'
    ]

    materials.forEach(material => {
        // --- IMMERSIVE ENGINEERING ---
        event.remove(`immersiveengineering:ingot_${material}`)
        event.remove(`immersiveengineering:plate_${material}`)
        event.remove(`immersiveengineering:dust_${material}`)
        event.remove(`immersiveengineering:nugget_${material}`)
        event.remove(`immersiveengineering:raw_${material}`)
        
        // --- ORITECH ---
        event.remove(`oritech:${material}_ingot`)
        event.remove(`oritech:${material}_plate`)
        event.remove(`oritech:${material}_dust`)
        event.remove(`oritech:${material}_nugget`)
        event.remove(`oritech:raw_${material}`)

        // --- ENDER IO ---
        event.remove(`enderio:ingot_${material}`)
        event.remove(`enderio:nugget_${material}`)
        event.remove(`enderio:powder_${material}`) 

        // --- CREATE (Cas spécifiques) ---
        if (material === 'zinc') {
            event.remove('create:zinc_ingot')
            event.remove('create:raw_zinc')
            event.remove('create:zinc_nugget')
        }
        if (material === 'brass') {
            event.remove('create:brass_ingot')
            event.remove('create:brass_nugget')
        }
        event.remove(`create:${material}_sheet`)
    })

    // Cacher les poudres vanilla doublons d'EnderIO
    event.remove('enderio:powder_coal')
    event.remove('enderio:powder_iron')
    event.remove('enderio:powder_gold')
    event.remove('enderio:powder_copper')
    event.remove('enderio:powder_obsidian')
})