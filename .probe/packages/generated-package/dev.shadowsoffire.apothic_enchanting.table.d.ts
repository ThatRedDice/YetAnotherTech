declare module "dev.shadowsoffire.apothic_enchanting.table.infusion.KeepNBTInfusionRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$KeepNBTInfusionRecipe} from "dev.shadowsoffire.apothic_enchanting.table.infusion.KeepNBTInfusionRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $KeepNBTInfusionRecipe$Serializer implements $RecipeSerializer$$Interface<($KeepNBTInfusionRecipe)> {
static readonly "CODEC": $MapCodec<($KeepNBTInfusionRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($KeepNBTInfusionRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($KeepNBTInfusionRecipe)>
public "codec"(): $MapCodec<($KeepNBTInfusionRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeepNBTInfusionRecipe$Serializer$$Type = ($KeepNBTInfusionRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeepNBTInfusionRecipe$Serializer$$Original = $KeepNBTInfusionRecipe$Serializer;}
declare module "dev.shadowsoffire.apothic_enchanting.table.infusion.InfusionRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$InfusionRecipe} from "dev.shadowsoffire.apothic_enchanting.table.infusion.InfusionRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $InfusionRecipe$Serializer implements $RecipeSerializer$$Interface<($InfusionRecipe)> {
static readonly "CODEC": $MapCodec<($InfusionRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($InfusionRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($InfusionRecipe)>
public "codec"(): $MapCodec<($InfusionRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusionRecipe$Serializer$$Type = ($InfusionRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfusionRecipe$Serializer$$Original = $InfusionRecipe$Serializer;}
declare module "dev.shadowsoffire.apothic_enchanting.table.EnchantmentTableStats$Builder" {
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$EnchantmentTableStats} from "dev.shadowsoffire.apothic_enchanting.table.EnchantmentTableStats"

export class $EnchantmentTableStats$Builder {
constructor(arg0: integer)

public "addEterna"(arg0: float, arg1: float): void
public "addQuanta"(arg0: float): void
public "addArcana"(arg0: float): void
public "addClues"(arg0: integer): void
public "setAllowsTreasure"(arg0: boolean): void
public "setStable"(arg0: boolean): void
public "blacklistEnchant"(arg0: $Holder$$Type<($Enchantment)>): void
public "build"(): $EnchantmentTableStats
set "allowsTreasure"(value: boolean)
set "stable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableStats$Builder$$Type = ($EnchantmentTableStats$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentTableStats$Builder$$Original = $EnchantmentTableStats$Builder;}
declare module "dev.shadowsoffire.apothic_enchanting.table.EnchantingStatRegistry$Stats" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $EnchantingStatRegistry$Stats extends $Record {
static "CODEC": $Codec<($EnchantingStatRegistry$Stats)>
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($EnchantingStatRegistry$Stats)>

constructor(maxEterna: float, eterna: float, quanta: float, arcana: float, clues: integer)

public "eterna"(): float
public "quanta"(): float
public "arcana"(): float
public "clues"(): integer
public "maxEterna"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingStatRegistry$Stats$$Type = ({"arcana"?: float, "clues"?: integer, "maxEterna"?: float, "eterna"?: float, "quanta"?: float}) | ([arcana?: float, clues?: integer, maxEterna?: float, eterna?: float, quanta?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantingStatRegistry$Stats$$Original = $EnchantingStatRegistry$Stats;}
declare module "dev.shadowsoffire.apothic_enchanting.table.infusion.KeepNBTInfusionRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$EnchantingStatRegistry$Stats, $EnchantingStatRegistry$Stats$$Type} from "dev.shadowsoffire.apothic_enchanting.table.EnchantingStatRegistry$Stats"
import {$KeepNBTInfusionRecipe$Serializer} from "dev.shadowsoffire.apothic_enchanting.table.infusion.KeepNBTInfusionRecipe$Serializer"
import {$InfusionRecipe} from "dev.shadowsoffire.apothic_enchanting.table.infusion.InfusionRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $KeepNBTInfusionRecipe extends $InfusionRecipe {
static readonly "SERIALIZER": $KeepNBTInfusionRecipe$Serializer
static readonly "NO_MAX": $EnchantingStatRegistry$Stats

constructor(arg0: $ItemStack$$Type, arg1: $Ingredient$$Type, arg2: $EnchantingStatRegistry$Stats$$Type, arg3: $EnchantingStatRegistry$Stats$$Type)

public "assemble"(arg0: $ItemStack$$Type, arg1: float, arg2: float, arg3: float): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeepNBTInfusionRecipe$$Type = ($KeepNBTInfusionRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeepNBTInfusionRecipe$$Original = $KeepNBTInfusionRecipe;}
declare module "dev.shadowsoffire.apothic_enchanting.table.infusion.InfusionRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$EnchantingStatRegistry$Stats, $EnchantingStatRegistry$Stats$$Type} from "dev.shadowsoffire.apothic_enchanting.table.EnchantingStatRegistry$Stats"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InfusionRecipe$Serializer} from "dev.shadowsoffire.apothic_enchanting.table.infusion.InfusionRecipe$Serializer"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $InfusionRecipe implements $Recipe$$Interface<($RecipeInput)> {
static readonly "SERIALIZER": $InfusionRecipe$Serializer
static readonly "NO_MAX": $EnchantingStatRegistry$Stats

constructor(arg0: $ItemStack$$Type, arg1: $Ingredient$$Type, arg2: $EnchantingStatRegistry$Stats$$Type, arg3: $EnchantingStatRegistry$Stats$$Type)

public "getRequirements"(): $EnchantingStatRegistry$Stats
public "getMaxRequirements"(): $EnchantingStatRegistry$Stats
public "assemble"(arg0: $ItemStack$$Type, arg1: float, arg2: float, arg3: float): $ItemStack
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public static "findItemMatch"(arg0: $Level$$Type, arg1: $ItemStack$$Type): $InfusionRecipe
public "getSerializer"(): $RecipeSerializer<(never)>
/**
 * 
 * @deprecated
 */
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getInput"(): $Ingredient
public "getOutput"(): $ItemStack
/**
 * 
 * @deprecated
 */
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $ItemStack$$Type, arg1: float, arg2: float, arg3: float): boolean
public "getType"(): $RecipeType<(never)>
public static "findMatch"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: float, arg3: float, arg4: float): $InfusionRecipe
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
public "isSpecial"(): boolean
get "requirements"(): $EnchantingStatRegistry$Stats
get "maxRequirements"(): $EnchantingStatRegistry$Stats
get "serializer"(): $RecipeSerializer<(never)>
get "input"(): $Ingredient
get "output"(): $ItemStack
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusionRecipe$$Type = ($InfusionRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfusionRecipe$$Original = $InfusionRecipe;}
declare module "dev.shadowsoffire.apothic_enchanting.table.ApothEnchantingTableBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$EnchantingTableBlock} from "net.minecraft.world.level.block.EnchantingTableBlock"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnchantingTableBlockEntity$$Type} from "net.minecraft.world.level.block.entity.EnchantingTableBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ApothEnchantingTableBlock extends $EnchantingTableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($EnchantingTableBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BOOKSHELF_OFFSETS": $List<($BlockPos)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public static "getItemHandler"(arg0: $EnchantingTableBlockEntity$$Type, arg1: $Direction$$Type): $IItemHandler
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothEnchantingTableBlock$$Type = ($ApothEnchantingTableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ApothEnchantingTableBlock$$Original = $ApothEnchantingTableBlock;}
declare module "dev.shadowsoffire.apothic_enchanting.table.EnchantmentTableStats" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EnchantmentTableStats$Builder$$Type} from "dev.shadowsoffire.apothic_enchanting.table.EnchantmentTableStats$Builder"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $EnchantmentTableStats extends $Record {
static readonly "INVALID": $EnchantmentTableStats
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnchantmentTableStats)>

constructor(eterna: float, quanta: float, arcana: float, clues: integer, blacklist: $Set$$Type<($Holder$$Type<($Enchantment$$Type)>)>, treasure: boolean, stable: boolean)

public "eterna"(): float
public "quanta"(): float
public "arcana"(): float
public "clues"(): integer
public "blacklist"(): $Set<($Holder<($Enchantment)>)>
public "treasure"(): boolean
public static "canReadStatsFrom"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "stable"(): boolean
public static "vanilla"(arg0: integer): $EnchantmentTableStats
public static "gatherStats"(arg0: $EnchantmentTableStats$Builder$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): void
public static "gatherStats"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: integer): $EnchantmentTableStats
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableStats$$Type = ({"treasure"?: boolean, "clues"?: integer, "stable"?: boolean, "eterna"?: float, "blacklist"?: $Set$$Type<($Holder$$Type<($Enchantment$$Type)>)>, "quanta"?: float, "arcana"?: float}) | ([treasure?: boolean, clues?: integer, stable?: boolean, eterna?: float, blacklist?: $Set$$Type<($Holder$$Type<($Enchantment$$Type)>)>, quanta?: float, arcana?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentTableStats$$Original = $EnchantmentTableStats;}
