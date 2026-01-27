declare module "com.teamresourceful.resourcefullib.common.recipe.CodecRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$ByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CodecRecipeSerializer<R extends $Recipe<(object)>> implements $RecipeSerializer$$Interface<(R)> {
constructor(recipeType: $RecipeType$$Type<(R)>, jsonCodec: $MapCodec$$Type<(R)>, networkCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (R)>)
constructor(recipeType: $RecipeType$$Type<(R)>, jsonCodec: $MapCodec$$Type<(R)>, networkCodec: $ByteCodec$$Type<(R)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public "type"(): $RecipeType<(R)>
public "codec"(): $MapCodec<(R)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipeSerializer$$Type<R> = ($CodecRecipeSerializer<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CodecRecipeSerializer$$Original<R> = $CodecRecipeSerializer<(R)>;}
declare module "com.teamresourceful.resourcefullib.common.recipe.CodecRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$CodecRecipeSerializer} from "com.teamresourceful.resourcefullib.common.recipe.CodecRecipeSerializer"

export interface $CodecRecipe$$Interface<C extends $RecipeInput> extends $Recipe$$Interface<(C)> {
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
}

export class $CodecRecipe<C extends $RecipeInput> implements $CodecRecipe$$Interface {
 "assemble"(container: C, provider: $HolderLookup$Provider$$Type): $ItemStack
 "getSerializer"(): $RecipeSerializer<(never)>
 "canCraftInDimensions"(pWidth: integer, pHeight: integer): boolean
 "getResultItem"(provider: $HolderLookup$Provider$$Type): $ItemStack
 "serializer"(): $CodecRecipeSerializer<($CodecRecipe<(C)>)>
 "isSpecial"(): boolean
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "matches"(arg0: C, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "getGroup"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipe$$Type<C> = ($CodecRecipe<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CodecRecipe$$Original<C> = $CodecRecipe<(C)>;}
