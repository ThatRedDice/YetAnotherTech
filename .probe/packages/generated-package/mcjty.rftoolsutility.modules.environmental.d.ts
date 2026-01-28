declare module "mcjty.rftoolsutility.modules.environmental.recipes.SyringeBasedRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BaseShapedRecipe} from "mcjty.lib.crafting.BaseShapedRecipe"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SyringeBasedRecipe extends $BaseShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: StringJS, arg1: $ShapedRecipePattern$$Type, arg2: $ItemStack$$Type, arg3: $ResourceLocation$$Type, arg4: integer)
constructor(arg0: $ShapedRecipe$$Type, arg1: $ResourceLocation$$Type, arg2: integer)
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: $NonNullList$$Type<($Ingredient$$Type)>, arg5: $ItemStack$$Type, arg6: $ResourceLocation$$Type, arg7: integer)
constructor(arg0: $ShapedRecipe$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: $ItemStack$$Type)

public "getSerializer"(): $RecipeSerializer<(never)>
public "getMobId"(): $ResourceLocation
public "getSyringeIndex"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "mobId"(): $ResourceLocation
get "syringeIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyringeBasedRecipe$$Type = ($SyringeBasedRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyringeBasedRecipe$$Original = $SyringeBasedRecipe;}
declare module "mcjty.rftoolsutility.modules.environmental.recipes.SyringeRecipeType" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$SyringeBasedRecipe} from "mcjty.rftoolsutility.modules.environmental.recipes.SyringeBasedRecipe"
import {$RecipeType, $RecipeType$$Interface} from "net.minecraft.world.item.crafting.RecipeType"

export class $SyringeRecipeType implements $RecipeType$$Interface<($SyringeBasedRecipe)> {
constructor()

public static "register"<T extends $Recipe<(object)>>(arg0: StringJS): $RecipeType<($SyringeBasedRecipe)>
public static "simple"<T extends $Recipe<(object)>>(arg0: $ResourceLocation$$Type): $RecipeType<($SyringeBasedRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyringeRecipeType$$Type = ($SyringeRecipeType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyringeRecipeType$$Original = $SyringeRecipeType;}
declare module "mcjty.rftoolsutility.modules.environmental.recipes.SyringeRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SyringeBasedRecipe} from "mcjty.rftoolsutility.modules.environmental.recipes.SyringeBasedRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SyringeRecipeSerializer implements $RecipeSerializer$$Interface<($SyringeBasedRecipe)> {
static readonly "CODEC": $MapCodec<($SyringeBasedRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SyringeBasedRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SyringeBasedRecipe)>
public "codec"(): $MapCodec<($SyringeBasedRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyringeRecipeSerializer$$Type = ($SyringeRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyringeRecipeSerializer$$Original = $SyringeRecipeSerializer;}
