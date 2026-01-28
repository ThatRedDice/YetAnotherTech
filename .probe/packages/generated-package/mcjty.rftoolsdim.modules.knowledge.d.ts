declare module "mcjty.rftoolsdim.modules.knowledge.data.KnowledgeSet" {
import {$Enum} from "java.lang.Enum"

export class $KnowledgeSet extends $Enum<($KnowledgeSet)> {
static readonly "SET6": $KnowledgeSet
static readonly "SET4": $KnowledgeSet
static readonly "SET5": $KnowledgeSet
static readonly "SET2": $KnowledgeSet
static readonly "SET3": $KnowledgeSet
static readonly "SET1": $KnowledgeSet

public static "values"(): ($KnowledgeSet)[]
public static "valueOf"(arg0: StringJS): $KnowledgeSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnowledgeSet$$Type = (("set1") | ("set2") | ("set3") | ("set4") | ("set5") | ("set6"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KnowledgeSet$$Original = $KnowledgeSet;}
declare module "mcjty.rftoolsdim.modules.knowledge.data.KnowledgeKey" {
import {$KnowledgeSet, $KnowledgeSet$$Type} from "mcjty.rftoolsdim.modules.knowledge.data.KnowledgeSet"
import {$DimletType, $DimletType$$Type} from "mcjty.rftoolsdim.modules.dimlets.data.DimletType"
import {$DimletRarity, $DimletRarity$$Type} from "mcjty.rftoolsdim.modules.dimlets.data.DimletRarity"
import {$Record} from "java.lang.Record"

export class $KnowledgeKey extends $Record {
constructor(type: $DimletType$$Type, rarity: $DimletRarity$$Type, set: $KnowledgeSet$$Type)

public "rarity"(): $DimletRarity
public "type"(): $DimletType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "set"(): $KnowledgeSet
public static "create"(arg0: StringJS): $KnowledgeKey
public "serialize"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnowledgeKey$$Type = ({"type"?: $DimletType$$Type, "set"?: $KnowledgeSet$$Type, "rarity"?: $DimletRarity$$Type}) | ([type?: $DimletType$$Type, set?: $KnowledgeSet$$Type, rarity?: $DimletRarity$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KnowledgeKey$$Original = $KnowledgeKey;}
declare module "mcjty.rftoolsdim.modules.knowledge.items.LostKnowledgeItem" {
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$KnowledgeKey} from "mcjty.rftoolsdim.modules.knowledge.data.KnowledgeKey"
import {$DimletRarity, $DimletRarity$$Type} from "mcjty.rftoolsdim.modules.dimlets.data.DimletRarity"
import {$DimletKey$$Type} from "mcjty.rftoolsdim.modules.dimlets.data.DimletKey"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"

export class $LostKnowledgeItem extends $Item implements $ITooltipSettings$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DimletRarity$$Type)

public "getRarity"(): $DimletRarity
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getKnowledgeKey"(arg0: $ItemStack$$Type): $KnowledgeKey
public static "createLostKnowledge"(arg0: $Level$$Type, arg1: $DimletKey$$Type): $ItemStack
public static "createRandomLostKnowledge"(arg0: $Level$$Type, arg1: $DimletRarity$$Type, arg2: $RandomSource$$Type): $ItemStack
public static "createUnresearchedLostKnowledge"(arg0: $DimletRarity$$Type): $ItemStack
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rarity"(): $DimletRarity
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LostKnowledgeItem$$Type = ($LostKnowledgeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LostKnowledgeItem$$Original = $LostKnowledgeItem;}
declare module "mcjty.rftoolsdim.modules.knowledge.data.DimletPattern" {
import {$Record} from "java.lang.Record"

export class $DimletPattern extends $Record {
static readonly "PATTERN_DIM": integer

constructor(pattern: (StringJS)[])

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "count"(arg0: character): integer
public "pattern"(): (StringJS)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletPattern$$Type = ({"pattern"?: (StringJS)[]}) | ([pattern?: (StringJS)[]]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimletPattern$$Original = $DimletPattern;}
