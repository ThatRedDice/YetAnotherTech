declare module "com.mrh0.createaddition.recipe.FluidRecipeWrapper" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $FluidRecipeWrapper implements $Container$$Interface, $RecipeInput$$Interface {
 "fluid": $FluidStack

constructor(arg0: $FluidStack$$Type)

public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "getItem"(arg0: integer): $ItemStack
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "size"(): integer
public "isEmpty"(): boolean
public "setChanged"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getMaxStackSize"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public static "tryClear"(arg0: any): void
public "self"(): $Container
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "clear"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "getBlock"(level: $Level$$Type): $LevelBlock
public "setChanged"(): void
public "asContainer"(): $Container
public "setTransferCooldown"(arg0: long): void
public "canReceiveTransferCooldown"(): boolean
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "clear"(match: $ItemPredicate$$Type): void
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
get "empty"(): boolean
get "changed"(): void
get "containerSize"(): integer
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidRecipeWrapper$$Type = ($FluidRecipeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidRecipeWrapper$$Original = $FluidRecipeWrapper;}
declare module "com.mrh0.createaddition.recipe.rolling.RollingRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeWrapper, $RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$ProcessingRecipeParams$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipeParams"
import {$IRecipeTypeInfo} from "com.simibubi.create.foundation.recipe.IRecipeTypeInfo"
import {$StandardProcessingRecipe} from "com.simibubi.create.content.processing.recipe.StandardProcessingRecipe"

export class $RollingRecipe extends $StandardProcessingRecipe<($RecipeWrapper)> {
static readonly "TYPE_INFO": $IRecipeTypeInfo

constructor(arg0: $ProcessingRecipeParams$$Type)

public "getIngredient"(): $Ingredient
public "getResultStack"(): $ItemStack
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeWrapper$$Type, arg1: $Level$$Type): boolean
get "ingredient"(): $Ingredient
get "resultStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollingRecipe$$Type = ($RollingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RollingRecipe$$Original = $RollingRecipe;}
declare module "com.mrh0.createaddition.recipe.charging.ChargingRecipe" {
import {$ProcessingRecipe} from "com.simibubi.create.content.processing.recipe.ProcessingRecipe"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ChargingRecipeParams, $ChargingRecipeParams$$Type} from "com.mrh0.createaddition.recipe.charging.ChargingRecipeParams"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeWrapper, $RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$IRecipeTypeInfo} from "com.simibubi.create.foundation.recipe.IRecipeTypeInfo"

export class $ChargingRecipe extends $ProcessingRecipe<($RecipeWrapper), ($ChargingRecipeParams)> {
static readonly "TYPE_INFO": $IRecipeTypeInfo
 "maxChargeRate": integer
 "energy": integer

constructor(arg0: $ChargingRecipeParams$$Type)

public "getEnergy"(): integer
public "getResultStack"(): $ItemStack
public "getMaxChargeRate"(): integer
public "matches"(arg0: $RecipeWrapper$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "resultStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingRecipe$$Type = ($ChargingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargingRecipe$$Original = $ChargingRecipe;}
declare module "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ProcessingRecipe$Factory$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipe$Factory"
import {$LiquidBurningRecipe} from "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LiquidBurningRecipeParams$$Type} from "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipeParams"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $LiquidBurningRecipe$Serializer<R extends $LiquidBurningRecipe> implements $RecipeSerializer$$Interface<(R)> {
constructor(arg0: $ProcessingRecipe$Factory$$Type<($LiquidBurningRecipeParams), (R)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public "codec"(): $MapCodec<(R)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBurningRecipe$Serializer$$Type<R> = ($LiquidBurningRecipe$Serializer<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBurningRecipe$Serializer$$Original<R> = $LiquidBurningRecipe$Serializer<(R)>;}
declare module "com.mrh0.createaddition.recipe.charging.ChargingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ChargingRecipe} from "com.mrh0.createaddition.recipe.charging.ChargingRecipe"
import {$ChargingRecipeParams$$Type} from "com.mrh0.createaddition.recipe.charging.ChargingRecipeParams"
import {$ProcessingRecipe$Factory$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipe$Factory"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ChargingRecipe$Serializer<R extends $ChargingRecipe> implements $RecipeSerializer$$Interface<(R)> {
constructor(arg0: $ProcessingRecipe$Factory$$Type<($ChargingRecipeParams), (R)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public "codec"(): $MapCodec<(R)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingRecipe$Serializer$$Type<R> = ($ChargingRecipe$Serializer<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargingRecipe$Serializer$$Original<R> = $ChargingRecipe$Serializer<(R)>;}
declare module "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipe" {
import {$ProcessingRecipe} from "com.simibubi.create.content.processing.recipe.ProcessingRecipe"
import {$FluidRecipeWrapper, $FluidRecipeWrapper$$Type} from "com.mrh0.createaddition.recipe.FluidRecipeWrapper"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SizedFluidIngredient} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$LiquidBurningRecipeParams, $LiquidBurningRecipeParams$$Type} from "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipeParams"
import {$IRecipeTypeInfo} from "com.simibubi.create.foundation.recipe.IRecipeTypeInfo"

export class $LiquidBurningRecipe extends $ProcessingRecipe<($FluidRecipeWrapper), ($LiquidBurningRecipeParams)> {
static readonly "TYPE_INFO": $IRecipeTypeInfo

constructor(arg0: $LiquidBurningRecipeParams$$Type)

public "getBurnTime"(): integer
public "getFluidInput"(): $SizedFluidIngredient
public "isSuperheated"(): boolean
public "matches"(arg0: $FluidRecipeWrapper$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "burnTime"(): integer
get "fluidInput"(): $SizedFluidIngredient
get "superheated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBurningRecipe$$Type = ($LiquidBurningRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBurningRecipe$$Original = $LiquidBurningRecipe;}
declare module "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipeParams" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ProcessingRecipeParams} from "com.simibubi.create.content.processing.recipe.ProcessingRecipeParams"

export class $LiquidBurningRecipeParams extends $ProcessingRecipeParams {
static "CODEC": $MapCodec<($LiquidBurningRecipeParams)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($LiquidBurningRecipeParams)>

constructor()

public "getBurnTime"(): integer
public "isSuperheated"(): boolean
get "burnTime"(): integer
get "superheated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBurningRecipeParams$$Type = ($LiquidBurningRecipeParams);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBurningRecipeParams$$Original = $LiquidBurningRecipeParams;}
declare module "com.mrh0.createaddition.recipe.charging.ChargingRecipeParams" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ProcessingRecipeParams} from "com.simibubi.create.content.processing.recipe.ProcessingRecipeParams"

export class $ChargingRecipeParams extends $ProcessingRecipeParams {
static "CODEC": $MapCodec<($ChargingRecipeParams)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChargingRecipeParams)>

constructor()

public "getEnergy"(): integer
public "getMaxChargeRate"(): integer
get "energy"(): integer
get "maxChargeRate"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingRecipeParams$$Type = ($ChargingRecipeParams);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargingRecipeParams$$Original = $ChargingRecipeParams;}
