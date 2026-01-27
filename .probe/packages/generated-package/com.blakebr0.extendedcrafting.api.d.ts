declare module "com.blakebr0.extendedcrafting.api.TableCraftingInput" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"

export class $TableCraftingInput extends $CraftingInput {
static readonly "EMPTY": $CraftingInput

public "tier"(): integer
public static "of"(arg0: integer, arg1: integer, arg2: $List$$Type<($ItemStack$$Type)>, arg3: integer): $TableCraftingInput
public "top"(): integer
public "left"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TableCraftingInput$$Type = ($TableCraftingInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TableCraftingInput$$Original = $TableCraftingInput;}
declare module "com.blakebr0.extendedcrafting.api.crafting.ITableRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$TableCraftingInput, $TableCraftingInput$$Type} from "com.blakebr0.extendedcrafting.api.TableCraftingInput"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $ITableRecipe$$Interface extends $Recipe$$Interface<($TableCraftingInput)> {
get "tier"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
get "special"(): boolean
}

export class $ITableRecipe implements $ITableRecipe$$Interface {
 "hasRequiredTier"(): boolean
 "getTier"(): integer
 "assemble"(arg0: $TableCraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getRemainingItems"(arg0: $TableCraftingInput$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "matches"(arg0: $TableCraftingInput$$Type, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "getGroup"(): StringJS
 "isSpecial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITableRecipe$$Type = ($ITableRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITableRecipe$$Original = $ITableRecipe;}
declare module "com.blakebr0.extendedcrafting.api.crafting.IEnderCrafterRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IEnderCrafterRecipe$$Interface extends $Recipe$$Interface<($CraftingInput)> {
get "craftingTime"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
get "special"(): boolean
}

export class $IEnderCrafterRecipe implements $IEnderCrafterRecipe$$Interface {
 "getCraftingTime"(): integer
 "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "getGroup"(): StringJS
 "isSpecial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnderCrafterRecipe$$Type = ($IEnderCrafterRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnderCrafterRecipe$$Original = $IEnderCrafterRecipe;}
declare module "com.blakebr0.extendedcrafting.api.crafting.ICombinationRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $ICombinationRecipe$$Interface extends $Recipe$$Interface<($CraftingInput)> {
get "powerCost"(): integer
get "powerRate"(): integer
get "inputsList"(): $List<($Component)>
get "input"(): $Ingredient
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
get "special"(): boolean
}

export class $ICombinationRecipe implements $ICombinationRecipe$$Interface {
 "getPowerCost"(): integer
 "getPowerRate"(): integer
 "getInputsList"(): $List<($Component)>
 "getInput"(): $Ingredient
 "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "getGroup"(): StringJS
 "isSpecial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICombinationRecipe$$Type = ($ICombinationRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICombinationRecipe$$Original = $ICombinationRecipe;}
declare module "com.blakebr0.extendedcrafting.api.crafting.ICompressorRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $ICompressorRecipe$$Interface extends $Recipe$$Interface<($CraftingInput)> {
get "powerCost"(): integer
get "powerRate"(): integer
get "catalyst"(): $Ingredient
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
get "special"(): boolean
}

export class $ICompressorRecipe implements $ICompressorRecipe$$Interface {
 "getPowerCost"(): integer
 "getPowerRate"(): integer
 "getCatalyst"(): $Ingredient
 "getCount"(arg0: integer): integer
 "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "getGroup"(): StringJS
 "isSpecial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICompressorRecipe$$Type = ($ICompressorRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICompressorRecipe$$Original = $ICompressorRecipe;}
declare module "com.blakebr0.extendedcrafting.api.crafting.IFluxCrafterRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IFluxCrafterRecipe$$Interface extends $Recipe$$Interface<($CraftingInput)> {
get "powerRate"(): integer
get "powerRequired"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
get "special"(): boolean
}

export class $IFluxCrafterRecipe implements $IFluxCrafterRecipe$$Interface {
 "getPowerRate"(): integer
 "getPowerRequired"(): integer
 "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "getGroup"(): StringJS
 "isSpecial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluxCrafterRecipe$$Type = ($IFluxCrafterRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluxCrafterRecipe$$Original = $IFluxCrafterRecipe;}
