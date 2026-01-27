declare module "com.blakebr0.cucumber.crafting.OutputResolver" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$OutputResolver$Item} from "com.blakebr0.cucumber.crafting.OutputResolver$Item"

export interface $OutputResolver$$Interface {

(): $ItemStack$$Type
}

export class $OutputResolver implements $OutputResolver$$Interface {
 "resolve"(): $ItemStack
static "create"(arg0: $RegistryFriendlyByteBuf$$Type): $OutputResolver$Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputResolver$$Type = (() => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OutputResolver$$Original = $OutputResolver;}
declare module "com.blakebr0.cucumber.crafting.recipe.ShapelessTagRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapelessTagRecipe} from "com.blakebr0.cucumber.crafting.recipe.ShapelessTagRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapelessTagRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapelessTagRecipe)> {
static readonly "CODEC": $MapCodec<($ShapelessTagRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapelessTagRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapelessTagRecipe)>
public "codec"(): $MapCodec<($ShapelessTagRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTagRecipe$Serializer$$Type = ($ShapelessTagRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessTagRecipe$Serializer$$Original = $ShapelessTagRecipe$Serializer;}
declare module "com.blakebr0.cucumber.crafting.recipe.ShapedTransferComponentsRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShapedTransferComponentsRecipe extends $ShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $ItemStack$$Type, arg4: boolean, arg5: integer)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferComponentsRecipe$$Type = ($ShapedTransferComponentsRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedTransferComponentsRecipe$$Original = $ShapedTransferComponentsRecipe;}
declare module "com.blakebr0.cucumber.crafting.recipe.ShapedTransferDamageRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ShapedTransferDamageRecipe} from "com.blakebr0.cucumber.crafting.recipe.ShapedTransferDamageRecipe"

export class $ShapedTransferDamageRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapedTransferDamageRecipe)> {
static readonly "CODEC": $MapCodec<($ShapedTransferDamageRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedTransferDamageRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedTransferDamageRecipe)>
public "codec"(): $MapCodec<($ShapedTransferDamageRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferDamageRecipe$Serializer$$Type = ($ShapedTransferDamageRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedTransferDamageRecipe$Serializer$$Original = $ShapedTransferDamageRecipe$Serializer;}
declare module "com.blakebr0.cucumber.crafting.recipe.ShapedTagRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$OutputResolver$$Type} from "com.blakebr0.cucumber.crafting.OutputResolver"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ShapedNoMirrorRecipe} from "com.blakebr0.cucumber.crafting.recipe.ShapedNoMirrorRecipe"

export class $ShapedTagRecipe extends $ShapedNoMirrorRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $OutputResolver$$Type, arg4: boolean)

public "getSerializer"(): $RecipeSerializer<(never)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTagRecipe$$Type = ($ShapedTagRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedTagRecipe$$Original = $ShapedTagRecipe;}
declare module "com.blakebr0.cucumber.crafting.recipe.ShapedTagRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ShapedTagRecipe} from "com.blakebr0.cucumber.crafting.recipe.ShapedTagRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapedTagRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapedTagRecipe)> {
static readonly "CODEC": $MapCodec<($ShapedTagRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedTagRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedTagRecipe)>
public "codec"(): $MapCodec<($ShapedTagRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTagRecipe$Serializer$$Type = ($ShapedTagRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedTagRecipe$Serializer$$Original = $ShapedTagRecipe$Serializer;}
declare module "com.blakebr0.cucumber.crafting.recipe.ShapedNoMirrorRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapedNoMirrorRecipe extends $ShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $ItemStack$$Type, arg4: boolean)

public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedNoMirrorRecipe$$Type = ($ShapedNoMirrorRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedNoMirrorRecipe$$Original = $ShapedNoMirrorRecipe;}
declare module "com.blakebr0.cucumber.crafting.OutputResolver$Item" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$OutputResolver$$Interface} from "com.blakebr0.cucumber.crafting.OutputResolver"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export class $OutputResolver$Item implements $OutputResolver$$Interface {
constructor(arg0: $ItemStack$$Type)

public "resolve"(): $ItemStack
public static "create"(arg0: $RegistryFriendlyByteBuf$$Type): $OutputResolver$Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputResolver$Item$$Type = ($OutputResolver$Item);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OutputResolver$Item$$Original = $OutputResolver$Item;}
declare module "com.blakebr0.cucumber.crafting.recipe.ShapelessTagRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$OutputResolver$$Type} from "com.blakebr0.cucumber.crafting.OutputResolver"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ShapelessRecipe} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShapelessTagRecipe extends $ShapelessRecipe {
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "group": StringJS

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $NonNullList$$Type<($Ingredient$$Type)>, arg3: $OutputResolver$$Type)

public "getSerializer"(): $RecipeSerializer<(never)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessTagRecipe$$Type = ($ShapelessTagRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessTagRecipe$$Original = $ShapelessTagRecipe;}
declare module "com.blakebr0.cucumber.crafting.recipe.ShapedTransferComponentsRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedTransferComponentsRecipe} from "com.blakebr0.cucumber.crafting.recipe.ShapedTransferComponentsRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapedTransferComponentsRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapedTransferComponentsRecipe)> {
static readonly "CODEC": $MapCodec<($ShapedTransferComponentsRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedTransferComponentsRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedTransferComponentsRecipe)>
public "codec"(): $MapCodec<($ShapedTransferComponentsRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferComponentsRecipe$Serializer$$Type = ($ShapedTransferComponentsRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedTransferComponentsRecipe$Serializer$$Original = $ShapedTransferComponentsRecipe$Serializer;}
declare module "com.blakebr0.cucumber.crafting.recipe.ShapedNoMirrorRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ShapedNoMirrorRecipe} from "com.blakebr0.cucumber.crafting.recipe.ShapedNoMirrorRecipe"

export class $ShapedNoMirrorRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapedNoMirrorRecipe)> {
static readonly "CODEC": $MapCodec<($ShapedNoMirrorRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedNoMirrorRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedNoMirrorRecipe)>
public "codec"(): $MapCodec<($ShapedNoMirrorRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedNoMirrorRecipe$Serializer$$Type = ($ShapedNoMirrorRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedNoMirrorRecipe$Serializer$$Original = $ShapedNoMirrorRecipe$Serializer;}
declare module "com.blakebr0.cucumber.crafting.ingredient.IngredientWithCount" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IngredientType} from "net.neoforged.neoforge.common.crafting.IngredientType"
import {$ItemStackSet} from "dev.latvian.mods.kubejs.item.ItemStackSet"
import {$Ingredient$Value$$Type} from "net.minecraft.world.item.crafting.Ingredient$Value"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$ICustomIngredient$$Interface} from "net.neoforged.neoforge.common.crafting.ICustomIngredient"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemPredicate} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $IngredientWithCount implements $ICustomIngredient$$Interface, $Predicate$$Interface<($ItemStack)> {
static readonly "CODEC": $Codec<($IngredientWithCount)>
static readonly "MAP_CODEC": $MapCodec<($IngredientWithCount)>
static readonly "EMPTY": $IngredientWithCount
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IngredientWithCount)>

constructor(arg0: $Ingredient$Value$$Type, arg1: integer)
constructor(arg0: ($Ingredient$Value$$Type)[], arg1: integer)

public "getItems"(): $Stream<($ItemStack)>
public "test"(arg0: $ItemStack$$Type): boolean
public "test"(arg0: any): boolean
public static "of"(arg0: $ItemStack$$Type, arg1: integer): $Ingredient
public "getCount"(): integer
public "getType"(): $IngredientType<(never)>
public "isSimple"(): boolean
public "toVanilla"(): $Ingredient
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "asIngredient"(): $Ingredient
public "canBeUsedForMatching"(): boolean
public "getStackArray"(): ($ItemStack)[]
public "getDisplayStacks"(): $ItemStackSet
public "getStacks"(): $ItemStackSet
public "testItem"(item: $Item$$Type): boolean
public "getItemStream"(): $Stream<($Item)>
public "getItemTypes"(): $Set<($Item)>
public "getItemIds"(): $Set<(StringJS)>
public "getFirst"(): $ItemStack
public static "wrap"(from: any): $ItemPredicate
public "isWildcard"(): boolean
get "items"(): $Stream<($ItemStack)>
get "count"(): integer
get "type"(): $IngredientType<(never)>
get "simple"(): boolean
get "stackArray"(): ($ItemStack)[]
get "displayStacks"(): $ItemStackSet
get "stacks"(): $ItemStackSet
get "itemStream"(): $Stream<($Item)>
get "itemTypes"(): $Set<($Item)>
get "itemIds"(): $Set<(StringJS)>
get "first"(): $ItemStack
get "wildcard"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientWithCount$$Type = ($IngredientWithCount);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IngredientWithCount$$Original = $IngredientWithCount;}
declare module "com.blakebr0.cucumber.crafting.recipe.ShapedTransferDamageRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShapedTransferDamageRecipe extends $ShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $ItemStack$$Type, arg4: boolean, arg5: boolean)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTransferDamageRecipe$$Type = ($ShapedTransferDamageRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedTransferDamageRecipe$$Original = $ShapedTransferDamageRecipe;}
