declare module "mcjty.rftoolsdim.modules.dimlets.recipes.DimletRecipe" {
import {$DimletKey, $DimletKey$$Type} from "mcjty.rftoolsdim.modules.dimlets.data.DimletKey"
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$AbstractRecipeAdaptor} from "mcjty.lib.crafting.AbstractRecipeAdaptor"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DimletRecipe extends $AbstractRecipeAdaptor {
constructor(arg0: $ShapedRecipe$$Type, arg1: $DimletKey$$Type)

public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "category"(): $CraftingBookCategory
public "getKey"(): $DimletKey
get "serializer"(): $RecipeSerializer<(never)>
get "key"(): $DimletKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletRecipe$$Type = ($DimletRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimletRecipe$$Original = $DimletRecipe;}
declare module "mcjty.rftoolsdim.modules.dimlets.recipes.DimletRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$DimletRecipe} from "mcjty.rftoolsdim.modules.dimlets.recipes.DimletRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $DimletRecipeSerializer implements $RecipeSerializer$$Interface<($DimletRecipe)> {
static readonly "CODEC": $MapCodec<($DimletRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($DimletRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($DimletRecipe)>
public "codec"(): $MapCodec<($DimletRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletRecipeSerializer$$Type = ($DimletRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimletRecipeSerializer$$Original = $DimletRecipeSerializer;}
declare module "mcjty.rftoolsdim.modules.dimlets.data.DimletType" {
import {$Enum} from "java.lang.Enum"

export class $DimletType extends $Enum<($DimletType)> {
static readonly "SKY": $DimletType
static readonly "BIOME_CATEGORY": $DimletType
static readonly "ATTRIBUTE": $DimletType
static readonly "BIOME": $DimletType
static readonly "TERRAIN": $DimletType
static readonly "STRUCTURE": $DimletType
static readonly "BLOCK": $DimletType
static readonly "TIME": $DimletType
static readonly "DIGIT": $DimletType
static readonly "FLUID": $DimletType
static readonly "BIOME_CONTROLLER": $DimletType
static readonly "FEATURE": $DimletType
static readonly "TAG": $DimletType
static readonly "ADMIN": $DimletType

public "usesKnowledgeSystem"(): boolean
public static "values"(): ($DimletType)[]
public static "valueOf"(arg0: StringJS): $DimletType
public static "byName"(arg0: StringJS): $DimletType
public "getShortName"(): StringJS
get "shortName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletType$$Type = (("terrain") | ("attribute") | ("biome_controller") | ("biome_category") | ("biome") | ("feature") | ("structure") | ("time") | ("tag") | ("block") | ("digit") | ("admin") | ("fluid") | ("sky"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimletType$$Original = $DimletType;}
declare module "mcjty.rftoolsdim.modules.dimlets.data.DimletRarity" {
import {$Enum} from "java.lang.Enum"

export class $DimletRarity extends $Enum<($DimletRarity)> {
static readonly "RARE": $DimletRarity
static readonly "UNCOMMON": $DimletRarity
static readonly "COMMON": $DimletRarity
static readonly "LEGENDARY": $DimletRarity

public static "values"(): ($DimletRarity)[]
public static "valueOf"(arg0: StringJS): $DimletRarity
public static "byName"(arg0: StringJS): $DimletRarity
public "getShortName"(): StringJS
get "shortName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletRarity$$Type = (("common") | ("uncommon") | ("rare") | ("legendary"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimletRarity$$Original = $DimletRarity;}
declare module "mcjty.rftoolsdim.modules.dimlets.items.PartItem" {
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $PartItem extends $Item implements $ITooltipSettings$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartItem$$Type = ($PartItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartItem$$Original = $PartItem;}
declare module "mcjty.rftoolsdim.modules.dimlets.data.DimletKey" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$DimletType, $DimletType$$Type} from "mcjty.rftoolsdim.modules.dimlets.data.DimletType"
import {$Record} from "java.lang.Record"

export class $DimletKey extends $Record implements $Comparable$$Interface<($DimletKey)> {
constructor(type: $DimletType$$Type, key: StringJS)

public "type"(): $DimletType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $DimletKey$$Type): integer
public "key"(): StringJS
public static "create"(arg0: $FriendlyByteBuf$$Type): $DimletKey
public static "create"(arg0: StringJS): $DimletKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletKey$$Type = ({"key"?: StringJS, "type"?: $DimletType$$Type}) | ([key?: StringJS, type?: $DimletType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimletKey$$Original = $DimletKey;}
declare module "mcjty.rftoolsdim.modules.dimlets.recipes.DimletCycleRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DigitCycleRecipe} from "mcjty.rftoolsdim.modules.dimlets.recipes.DigitCycleRecipe"

export class $DimletCycleRecipeSerializer implements $RecipeSerializer$$Interface<($DigitCycleRecipe)> {
static readonly "CODEC": $MapCodec<($DigitCycleRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($DigitCycleRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($DigitCycleRecipe)>
public "codec"(): $MapCodec<($DigitCycleRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletCycleRecipeSerializer$$Type = ($DimletCycleRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimletCycleRecipeSerializer$$Original = $DimletCycleRecipeSerializer;}
declare module "mcjty.rftoolsdim.modules.dimlets.recipes.DigitCycleRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$AbstractRecipeAdaptor} from "mcjty.lib.crafting.AbstractRecipeAdaptor"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DigitCycleRecipe extends $AbstractRecipeAdaptor {
constructor(arg0: $ShapedRecipe$$Type, arg1: StringJS, arg2: StringJS)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "category"(): $CraftingBookCategory
public "getInput"(): StringJS
public "getOutput"(): StringJS
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "input"(): StringJS
get "output"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigitCycleRecipe$$Type = ($DigitCycleRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DigitCycleRecipe$$Original = $DigitCycleRecipe;}
declare module "mcjty.rftoolsdim.modules.dimlets.items.DimletItem" {
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ITooltipExtras$$Interface} from "mcjty.lib.tooltips.ITooltipExtras"
import {$DimletType, $DimletType$$Type} from "mcjty.rftoolsdim.modules.dimlets.data.DimletType"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"
import {$DimletPattern$$Type} from "mcjty.rftoolsdim.modules.knowledge.data.DimletPattern"
import {$BaseItem} from "mcjty.lib.items.BaseItem"

export class $DimletItem extends $BaseItem implements $ITooltipSettings$$Interface, $ITooltipExtras$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DimletType$$Type, arg1: boolean)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getItems"(arg0: $ItemStack$$Type): $List<($Pair<($ItemStack), (integer)>)>
public "getItemsForTab"(): $List<($ItemStack)>
public static "isReadyDimlet"(arg0: $ItemStack$$Type): boolean
public static "addPatternItems"(arg0: $DimletPattern$$Type, arg1: $List$$Type<($Pair$$Type<($ItemStack$$Type), (integer)>)>): void
public static "isEmptyDimlet"(arg0: $ItemStack$$Type): boolean
public "getType"(): $DimletType
public static "getType"(arg0: $ItemStack$$Type): $DimletType
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "itemsForTab"(): $List<($ItemStack)>
get "type"(): $DimletType
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimletItem$$Type = ($DimletItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimletItem$$Original = $DimletItem;}
