declare module "mcjty.lib.crafting.AbstractRecipeAdaptor" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AbstractRecipeAdaptor implements $CraftingRecipe$$Interface {
constructor(arg0: $ShapedRecipe$$Type)

public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRecipe"(): $ShapedRecipe
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getToastSymbol"(): $ItemStack
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "getGroup"(): StringJS
public "isSpecial"(): boolean
public "category"(): $CraftingBookCategory
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "showNotification"(): boolean
public "isIncomplete"(): boolean
get "recipe"(): $ShapedRecipe
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "incomplete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRecipeAdaptor$$Type = ($AbstractRecipeAdaptor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractRecipeAdaptor$$Original = $AbstractRecipeAdaptor;}
declare module "mcjty.lib.crafting.BaseShapedRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BaseShapedRecipe extends $ShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $ItemStack$$Type)

public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseShapedRecipe$$Type = ($BaseShapedRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseShapedRecipe$$Original = $BaseShapedRecipe;}
declare module "mcjty.lib.crafting.BaseRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Type, $Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $BaseRecipe$$Interface<C extends $RecipeInput> extends $Recipe$$Interface<(C)> {
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
get "special"(): boolean
}

export class $BaseRecipe<C extends $RecipeInput> implements $BaseRecipe$$Interface {
 "assemble"(arg0: C, arg1: $HolderLookup$Provider$$Type): $ItemStack
static "assemble"(arg0: $Recipe$$Type, arg1: $RecipeInput$$Type, arg2: $Level$$Type): $ItemStack
static "getResultItem"(arg0: $Recipe$$Type, arg1: $Level$$Type): $ItemStack
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "matches"(arg0: C, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "getGroup"(): StringJS
 "isSpecial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseRecipe$$Type<C> = ($BaseRecipe<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseRecipe$$Original<C> = $BaseRecipe<(C)>;}
declare module "mcjty.lib.crafting.IComponentsToPreserve" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export interface $IComponentsToPreserve$$Interface {

(): $Collection$$Type<($DataComponentType$$Type<(never)>)>
get "componentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
}

export class $IComponentsToPreserve implements $IComponentsToPreserve$$Interface {
 "getComponentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentsToPreserve$$Type = (() => $Collection$$Type<($DataComponentType$$Type<(never)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IComponentsToPreserve$$Original = $IComponentsToPreserve;}
declare module "mcjty.lib.crafting.CopyComponentsRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$CopyComponentsRecipe} from "mcjty.lib.crafting.CopyComponentsRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CopyComponentsRecipeSerializer implements $RecipeSerializer$$Interface<($CopyComponentsRecipe)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CopyComponentsRecipe)>
public "codec"(): $MapCodec<($CopyComponentsRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyComponentsRecipeSerializer$$Type = ($CopyComponentsRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopyComponentsRecipeSerializer$$Original = $CopyComponentsRecipeSerializer;}
declare module "mcjty.lib.crafting.CopyComponentsRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$AbstractRecipeAdaptor} from "mcjty.lib.crafting.AbstractRecipeAdaptor"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CopyComponentsRecipe extends $AbstractRecipeAdaptor {
constructor(arg0: $ShapedRecipe$$Type)

public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "category"(): $CraftingBookCategory
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyComponentsRecipe$$Type = ($CopyComponentsRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopyComponentsRecipe$$Original = $CopyComponentsRecipe;}
