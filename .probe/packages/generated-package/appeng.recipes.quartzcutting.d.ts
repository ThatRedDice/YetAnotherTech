declare module "appeng.recipes.quartzcutting.QuartzCuttingRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $QuartzCuttingRecipe implements $CraftingRecipe$$Interface {
static readonly "CODEC": $MapCodec<($QuartzCuttingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($QuartzCuttingRecipe)>

constructor(arg0: $ItemStack$$Type, arg1: $NonNullList$$Type<($Ingredient$$Type)>)

public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "category"(): $CraftingBookCategory
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzCuttingRecipe$$Type = ($QuartzCuttingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuartzCuttingRecipe$$Original = $QuartzCuttingRecipe;}
declare module "appeng.recipes.quartzcutting.QuartzCuttingRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$QuartzCuttingRecipe} from "appeng.recipes.quartzcutting.QuartzCuttingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $QuartzCuttingRecipeSerializer implements $RecipeSerializer$$Interface<($QuartzCuttingRecipe)> {
static readonly "INSTANCE": $QuartzCuttingRecipeSerializer

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($QuartzCuttingRecipe)>
public "codec"(): $MapCodec<($QuartzCuttingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzCuttingRecipeSerializer$$Type = ($QuartzCuttingRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuartzCuttingRecipeSerializer$$Original = $QuartzCuttingRecipeSerializer;}
