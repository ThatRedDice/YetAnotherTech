declare module "com.blakebr0.extendedcrafting.crafting.recipe.UltimateSingularityRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$UltimateSingularityRecipe} from "com.blakebr0.extendedcrafting.crafting.recipe.UltimateSingularityRecipe"

export class $UltimateSingularityRecipe$Serializer implements $RecipeSerializer$$Interface<($UltimateSingularityRecipe)> {
static readonly "CODEC": $MapCodec<($UltimateSingularityRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($UltimateSingularityRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($UltimateSingularityRecipe)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $UltimateSingularityRecipe
public "codec"(): $MapCodec<($UltimateSingularityRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateSingularityRecipe$Serializer$$Type = ($UltimateSingularityRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UltimateSingularityRecipe$Serializer$$Original = $UltimateSingularityRecipe$Serializer;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapedEnderCrafterRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$IEnderCrafterRecipe$$Interface} from "com.blakebr0.extendedcrafting.api.crafting.IEnderCrafterRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShapedEnderCrafterRecipe implements $IEnderCrafterRecipe$$Interface {
constructor(arg0: $ShapedRecipePattern$$Type, arg1: $ItemStack$$Type, arg2: integer)

public "getCraftingTime"(): integer
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "craftingTime"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "width"(): integer
get "height"(): integer
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedEnderCrafterRecipe$$Type = ($ShapedEnderCrafterRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedEnderCrafterRecipe$$Original = $ShapedEnderCrafterRecipe;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapelessTableRecipe" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$TableCraftingInput$$Type} from "com.blakebr0.extendedcrafting.api.TableCraftingInput"
import {$ITableRecipe$$Interface} from "com.blakebr0.extendedcrafting.api.crafting.ITableRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShapelessTableRecipe implements $ITableRecipe$$Interface {
constructor(arg0: $NonNullList$$Type<($Ingredient$$Type)>, arg1: $ItemStack$$Type, arg2: integer)

public "hasRequiredTier"(): boolean
public "assemble"(arg0: $TableCraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getRemainingItems"(arg0: $TableCraftingInput$$Type): $NonNullList<($ItemStack)>
public "getTier"(): integer
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "setTransformer"(arg0: $BiFunction$$Type<(integer), ($ItemStack), ($ItemStack$$Type)>): void
public "matches"(arg0: $TableCraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "tier"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
set "transformer"(value: $BiFunction$$Type<(integer), ($ItemStack), ($ItemStack$$Type)>)
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTableRecipe$$Type = ($ShapelessTableRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessTableRecipe$$Original = $ShapelessTableRecipe;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapelessFluxCrafterRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ShapelessFluxCrafterRecipe} from "com.blakebr0.extendedcrafting.crafting.recipe.ShapelessFluxCrafterRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapelessFluxCrafterRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapelessFluxCrafterRecipe)> {
static readonly "CODEC": $MapCodec<($ShapelessFluxCrafterRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapelessFluxCrafterRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapelessFluxCrafterRecipe)>
public "codec"(): $MapCodec<($ShapelessFluxCrafterRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessFluxCrafterRecipe$Serializer$$Type = ($ShapelessFluxCrafterRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessFluxCrafterRecipe$Serializer$$Original = $ShapelessFluxCrafterRecipe$Serializer;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapelessFluxCrafterRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IFluxCrafterRecipe$$Interface} from "com.blakebr0.extendedcrafting.api.crafting.IFluxCrafterRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShapelessFluxCrafterRecipe implements $IFluxCrafterRecipe$$Interface {
constructor(arg0: $NonNullList$$Type<($Ingredient$$Type)>, arg1: $ItemStack$$Type, arg2: integer, arg3: integer)

public "getPowerRate"(): integer
public "getPowerRequired"(): integer
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "powerRate"(): integer
get "powerRequired"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessFluxCrafterRecipe$$Type = ($ShapelessFluxCrafterRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessFluxCrafterRecipe$$Original = $ShapelessFluxCrafterRecipe;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.CombinationRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$CombinationRecipe} from "com.blakebr0.extendedcrafting.crafting.recipe.CombinationRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CombinationRecipe$Serializer implements $RecipeSerializer$$Interface<($CombinationRecipe)> {
static readonly "CODEC": $MapCodec<($CombinationRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CombinationRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CombinationRecipe)>
public "codec"(): $MapCodec<($CombinationRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombinationRecipe$Serializer$$Type = ($CombinationRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CombinationRecipe$Serializer$$Original = $CombinationRecipe$Serializer;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.CompressorRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$IngredientWithCount$$Type} from "com.blakebr0.cucumber.crafting.ingredient.IngredientWithCount"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ICompressorRecipe$$Interface} from "com.blakebr0.extendedcrafting.api.crafting.ICompressorRecipe"

export class $CompressorRecipe implements $ICompressorRecipe$$Interface {
constructor(arg0: $NonNullList$$Type<($IngredientWithCount$$Type)>, arg1: $ItemStack$$Type, arg2: $Ingredient$$Type, arg3: integer, arg4: integer)

public "getPowerCost"(): integer
public "getPowerRate"(): integer
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getCatalyst"(): $Ingredient
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getCount"(arg0: integer): integer
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "powerCost"(): integer
get "powerRate"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "catalyst"(): $Ingredient
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorRecipe$$Type = ($CompressorRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompressorRecipe$$Original = $CompressorRecipe;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapelessEnderCrafterRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$IEnderCrafterRecipe$$Interface} from "com.blakebr0.extendedcrafting.api.crafting.IEnderCrafterRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShapelessEnderCrafterRecipe implements $IEnderCrafterRecipe$$Interface {
constructor(arg0: $NonNullList$$Type<($Ingredient$$Type)>, arg1: $ItemStack$$Type, arg2: integer)

public "getCraftingTime"(): integer
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "craftingTime"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessEnderCrafterRecipe$$Type = ($ShapelessEnderCrafterRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessEnderCrafterRecipe$$Original = $ShapelessEnderCrafterRecipe;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapedTableRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ShapedTableRecipe} from "com.blakebr0.extendedcrafting.crafting.recipe.ShapedTableRecipe"

export class $ShapedTableRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapedTableRecipe)> {
static readonly "CODEC": $MapCodec<($ShapedTableRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedTableRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedTableRecipe)>
public "codec"(): $MapCodec<($ShapedTableRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTableRecipe$Serializer$$Type = ($ShapedTableRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedTableRecipe$Serializer$$Original = $ShapedTableRecipe$Serializer;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.CompressorRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompressorRecipe} from "com.blakebr0.extendedcrafting.crafting.recipe.CompressorRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CompressorRecipe$Serializer implements $RecipeSerializer$$Interface<($CompressorRecipe)> {
static readonly "CODEC": $MapCodec<($CompressorRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CompressorRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CompressorRecipe)>
public "codec"(): $MapCodec<($CompressorRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorRecipe$Serializer$$Type = ($CompressorRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompressorRecipe$Serializer$$Original = $CompressorRecipe$Serializer;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapedTableRecipe" {
import {$TriFunction$$Type} from "com.blakebr0.cucumber.util.TriFunction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$TableCraftingInput$$Type} from "com.blakebr0.extendedcrafting.api.TableCraftingInput"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ITableRecipe$$Interface} from "com.blakebr0.extendedcrafting.api.crafting.ITableRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapedTableRecipe implements $ITableRecipe$$Interface {
constructor(arg0: $ShapedRecipePattern$$Type, arg1: $ItemStack$$Type, arg2: integer)

public "hasRequiredTier"(): boolean
public "assemble"(arg0: $TableCraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getRemainingItems"(arg0: $TableCraftingInput$$Type): $NonNullList<($ItemStack)>
public "getTier"(): integer
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "setTransformer"(arg0: $TriFunction$$Type<(integer), (integer), ($ItemStack), ($ItemStack$$Type)>): void
public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(arg0: $TableCraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "tier"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
set "transformer"(value: $TriFunction$$Type<(integer), (integer), ($ItemStack), ($ItemStack$$Type)>)
get "width"(): integer
get "height"(): integer
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTableRecipe$$Type = ($ShapedTableRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedTableRecipe$$Original = $ShapedTableRecipe;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapedEnderCrafterRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedEnderCrafterRecipe} from "com.blakebr0.extendedcrafting.crafting.recipe.ShapedEnderCrafterRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapedEnderCrafterRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapedEnderCrafterRecipe)> {
static readonly "CODEC": $MapCodec<($ShapedEnderCrafterRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedEnderCrafterRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedEnderCrafterRecipe)>
public "codec"(): $MapCodec<($ShapedEnderCrafterRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedEnderCrafterRecipe$Serializer$$Type = ($ShapedEnderCrafterRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedEnderCrafterRecipe$Serializer$$Original = $ShapedEnderCrafterRecipe$Serializer;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapedFluxCrafterRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedFluxCrafterRecipe} from "com.blakebr0.extendedcrafting.crafting.recipe.ShapedFluxCrafterRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapedFluxCrafterRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapedFluxCrafterRecipe)> {
static readonly "CODEC": $MapCodec<($ShapedFluxCrafterRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedFluxCrafterRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedFluxCrafterRecipe)>
public "codec"(): $MapCodec<($ShapedFluxCrafterRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedFluxCrafterRecipe$Serializer$$Type = ($ShapedFluxCrafterRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedFluxCrafterRecipe$Serializer$$Original = $ShapedFluxCrafterRecipe$Serializer;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapelessEnderCrafterRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapelessEnderCrafterRecipe} from "com.blakebr0.extendedcrafting.crafting.recipe.ShapelessEnderCrafterRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapelessEnderCrafterRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapelessEnderCrafterRecipe)> {
static readonly "CODEC": $MapCodec<($ShapelessEnderCrafterRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapelessEnderCrafterRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapelessEnderCrafterRecipe)>
public "codec"(): $MapCodec<($ShapelessEnderCrafterRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessEnderCrafterRecipe$Serializer$$Type = ($ShapelessEnderCrafterRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessEnderCrafterRecipe$Serializer$$Original = $ShapelessEnderCrafterRecipe$Serializer;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapedFluxCrafterRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IFluxCrafterRecipe$$Interface} from "com.blakebr0.extendedcrafting.api.crafting.IFluxCrafterRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShapedFluxCrafterRecipe implements $IFluxCrafterRecipe$$Interface {
constructor(arg0: $ShapedRecipePattern$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer)

public "getPowerRate"(): integer
public "getPowerRequired"(): integer
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "powerRate"(): integer
get "powerRequired"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "width"(): integer
get "height"(): integer
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedFluxCrafterRecipe$$Type = ($ShapedFluxCrafterRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedFluxCrafterRecipe$$Original = $ShapedFluxCrafterRecipe;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.CombinationRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ICombinationRecipe$$Interface} from "com.blakebr0.extendedcrafting.api.crafting.ICombinationRecipe"

export class $CombinationRecipe implements $ICombinationRecipe$$Interface {
constructor(arg0: $Ingredient$$Type, arg1: $NonNullList$$Type<($Ingredient$$Type)>, arg2: $ItemStack$$Type, arg3: integer, arg4: integer)

public "getPowerCost"(): integer
public "getPowerRate"(): integer
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getInputsList"(): $List<($Component)>
public "setTransformer"(arg0: $BiFunction$$Type<(integer), ($ItemStack), ($ItemStack$$Type)>): void
public "getInput"(): $Ingredient
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "powerCost"(): integer
get "powerRate"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "inputsList"(): $List<($Component)>
set "transformer"(value: $BiFunction$$Type<(integer), ($ItemStack), ($ItemStack$$Type)>)
get "input"(): $Ingredient
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombinationRecipe$$Type = ($CombinationRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CombinationRecipe$$Original = $CombinationRecipe;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.UltimateSingularityRecipe" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$TableCraftingInput$$Type} from "com.blakebr0.extendedcrafting.api.TableCraftingInput"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ShapelessTableRecipe} from "com.blakebr0.extendedcrafting.crafting.recipe.ShapelessTableRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $UltimateSingularityRecipe extends $ShapelessTableRecipe {
constructor(arg0: $ItemStack$$Type)

public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public static "invalidate"(): void
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $TableCraftingInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateSingularityRecipe$$Type = ($UltimateSingularityRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UltimateSingularityRecipe$$Original = $UltimateSingularityRecipe;}
declare module "com.blakebr0.extendedcrafting.crafting.recipe.ShapelessTableRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ShapelessTableRecipe} from "com.blakebr0.extendedcrafting.crafting.recipe.ShapelessTableRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapelessTableRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapelessTableRecipe)> {
static readonly "CODEC": $MapCodec<($ShapelessTableRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapelessTableRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapelessTableRecipe)>
public "codec"(): $MapCodec<($ShapelessTableRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTableRecipe$Serializer$$Type = ($ShapelessTableRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessTableRecipe$Serializer$$Original = $ShapelessTableRecipe$Serializer;}
