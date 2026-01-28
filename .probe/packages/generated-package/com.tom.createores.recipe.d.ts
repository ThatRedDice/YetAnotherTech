declare module "com.tom.createores.recipe.VeinRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ThreeState, $ThreeState$$Type} from "com.tom.createores.util.ThreeState"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$RandomSpreadStructurePlacement, $RandomSpreadStructurePlacement$$Type} from "net.minecraft.world.level.levelgen.structure.placement.RandomSpreadStructurePlacement"

export class $VeinRecipe implements $Recipe$$Interface<($CraftingInput)> {
 "veinName": $Component
 "amountMultiplierMin": float
 "amountMultiplierMax": float
 "finite": $ThreeState
 "icon": $ItemStack
 "placement": $RandomSpreadStructurePlacement
 "priority": integer

constructor(arg0: $Component$$Type, arg1: integer, arg2: ($TagKey$$Type<($Biome$$Type)>)?, arg3: ($TagKey$$Type<($Biome$$Type)>)?, arg4: $ThreeState$$Type, arg5: float, arg6: float, arg7: $RandomSpreadStructurePlacement$$Type, arg8: $ItemStack$$Type)
constructor()

public "biomeWhitelist"(): $Optional<($TagKey<($Biome)>)>
public "getMinAmount"(): float
public "getMaxAmount"(): float
public "getPlacement"(): $RandomSpreadStructurePlacement
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "biomeBlacklist"(): $Optional<($TagKey<($Biome)>)>
public "canGenerate"(arg0: $ServerLevel$$Type, arg1: $Holder$$Type<($Biome)>): boolean
public "isInfiniteClient"(): boolean
public "getMinAmountClient"(): long
public "getMaxAmountClient"(): long
public "getNegGenerationPriority"(): integer
public "getName"(): $Component
public "isFinite"(): $ThreeState
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getPriority"(): integer
public "getType"(): $RecipeType<(never)>
public "getIcon"(): $ItemStack
public "getGroup"(): StringJS
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
get "minAmount"(): float
get "maxAmount"(): float
get "serializer"(): $RecipeSerializer<(never)>
get "infiniteClient"(): boolean
get "minAmountClient"(): long
get "maxAmountClient"(): long
get "negGenerationPriority"(): integer
get "name"(): $Component
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeinRecipe$$Type = ($VeinRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VeinRecipe$$Original = $VeinRecipe;}
declare module "com.tom.createores.recipe.VeinRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$VeinRecipe} from "com.tom.createores.recipe.VeinRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $VeinRecipe$Serializer implements $RecipeSerializer$$Interface<($VeinRecipe)> {
static readonly "CODEC": $MapCodec<($VeinRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($VeinRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($VeinRecipe)>
public "codec"(): $MapCodec<($VeinRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeinRecipe$Serializer$$Type = ($VeinRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VeinRecipe$Serializer$$Original = $VeinRecipe$Serializer;}
declare module "com.tom.createores.recipe.ExtractorRecipe" {
import {$FluidIngredient} from "com.tom.createores.util.FluidIngredient"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$ExcavatingRecipe} from "com.tom.createores.recipe.ExcavatingRecipe"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ExtractorRecipe extends $ExcavatingRecipe {
 "output": $FluidStack
 "stressMul": integer
 "veinId": $ResourceLocation
 "ticks": integer
 "drillingFluid": $Optional<($FluidIngredient)>
 "priority": integer
 "drill": $Ingredient

constructor()

public "getSerializer"(): $RecipeSerializer<(never)>
public "getOutput"(): $FluidStack
public "getType"(): $RecipeType<(never)>
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractorRecipe$$Type = ($ExtractorRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtractorRecipe$$Original = $ExtractorRecipe;}
declare module "com.tom.createores.recipe.ExcavatingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ExcavatingRecipe} from "com.tom.createores.recipe.ExcavatingRecipe"
import {$ExcavatingRecipe$ExcavatingRecipeCommon} from "com.tom.createores.recipe.ExcavatingRecipe$ExcavatingRecipeCommon"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ExcavatingRecipe$Serializer<T extends $ExcavatingRecipe> implements $RecipeSerializer$$Interface<(T)> {
static readonly "CODEC": $MapCodec<($ExcavatingRecipe$ExcavatingRecipeCommon)>
readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), (T)>

constructor(arg0: $Supplier$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
public "codec"(): $MapCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingRecipe$Serializer$$Type<T> = ($ExcavatingRecipe$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExcavatingRecipe$Serializer$$Original<T> = $ExcavatingRecipe$Serializer<(T)>;}
declare module "com.tom.createores.recipe.ExtractorRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ExtractorRecipe} from "com.tom.createores.recipe.ExtractorRecipe"
import {$ExcavatingRecipe$Serializer} from "com.tom.createores.recipe.ExcavatingRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ExtractorRecipe$Serializer extends $ExcavatingRecipe$Serializer<($ExtractorRecipe)> {
static readonly "CODEC": $MapCodec<($ExtractorRecipe)>
readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), (T)>

constructor()

public "codec"(): $MapCodec<($ExtractorRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractorRecipe$Serializer$$Type = ($ExtractorRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtractorRecipe$Serializer$$Original = $ExtractorRecipe$Serializer;}
declare module "com.tom.createores.recipe.ExcavatingRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeWrapper, $RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$FluidIngredient} from "com.tom.createores.util.FluidIngredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ExcavatingRecipe implements $Recipe$$Interface<($RecipeWrapper)> {
 "stressMul": integer
 "veinId": $ResourceLocation
 "ticks": integer
 "drillingFluid": $Optional<($FluidIngredient)>
 "priority": integer
 "drill": $Ingredient

constructor()

public "getDrillingFluid"(): $Optional<($FluidIngredient)>
public "getDrill"(): $Ingredient
public "getStress"(): integer
public "assemble"(arg0: $RecipeWrapper$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "matches"(arg0: $RecipeWrapper$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getGroup"(): StringJS
public "getTicks"(): integer
public "getRemainingItems"(arg0: $RecipeWrapper$$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
get "stress"(): integer
get "group"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingRecipe$$Type = ($ExcavatingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExcavatingRecipe$$Original = $ExcavatingRecipe;}
declare module "com.tom.createores.recipe.DrillingRecipe" {
import {$FluidIngredient} from "com.tom.createores.util.FluidIngredient"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$ExcavatingRecipe} from "com.tom.createores.recipe.ExcavatingRecipe"
import {$ProcessingOutput} from "com.simibubi.create.content.processing.recipe.ProcessingOutput"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $DrillingRecipe extends $ExcavatingRecipe {
 "output": $NonNullList<($ProcessingOutput)>
 "stressMul": integer
 "veinId": $ResourceLocation
 "ticks": integer
 "drillingFluid": $Optional<($FluidIngredient)>
 "priority": integer
 "drill": $Ingredient

constructor()

public "getSerializer"(): $RecipeSerializer<(never)>
public "getOutput"(): $NonNullList<($ProcessingOutput)>
public "getType"(): $RecipeType<(never)>
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillingRecipe$$Type = ($DrillingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrillingRecipe$$Original = $DrillingRecipe;}
declare module "com.tom.createores.recipe.ExcavatingRecipe$ExcavatingRecipeCommon" {
import {$FluidIngredient, $FluidIngredient$$Type} from "com.tom.createores.util.FluidIngredient"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Record} from "java.lang.Record"

export class $ExcavatingRecipe$ExcavatingRecipeCommon extends $Record {
constructor(veinId: $ResourceLocation$$Type, drill: $Ingredient$$Type, priority: integer, ticks: integer, stressMul: integer, drillingFluid: ($FluidIngredient$$Type)?)

public "stressMul"(): integer
public "veinId"(): $ResourceLocation
public "drillingFluid"(): $Optional<($FluidIngredient)>
public "priority"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "ticks"(): integer
public "drill"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingRecipe$ExcavatingRecipeCommon$$Type = ({"stressMul"?: integer, "priority"?: integer, "ticks"?: integer, "veinId"?: $ResourceLocation$$Type, "drillingFluid"?: ($FluidIngredient$$Type)?, "drill"?: $Ingredient$$Type}) | ([stressMul?: integer, priority?: integer, ticks?: integer, veinId?: $ResourceLocation$$Type, drillingFluid?: ($FluidIngredient$$Type)?, drill?: $Ingredient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExcavatingRecipe$ExcavatingRecipeCommon$$Original = $ExcavatingRecipe$ExcavatingRecipeCommon;}
declare module "com.tom.createores.recipe.DrillingRecipe$Serializer" {
import {$DrillingRecipe} from "com.tom.createores.recipe.DrillingRecipe"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ExcavatingRecipe$Serializer} from "com.tom.createores.recipe.ExcavatingRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $DrillingRecipe$Serializer extends $ExcavatingRecipe$Serializer<($DrillingRecipe)> {
static readonly "CODEC": $MapCodec<($DrillingRecipe)>
readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), (T)>

constructor()

public "codec"(): $MapCodec<($DrillingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillingRecipe$Serializer$$Type = ($DrillingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrillingRecipe$Serializer$$Original = $DrillingRecipe$Serializer;}
