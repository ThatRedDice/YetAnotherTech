declare module "net.sweenus.simplyswords.recipe.RunicRerollRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$SmithingTransformRecipe} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RunicRerollRecipe extends $SmithingTransformRecipe {
readonly "template": $Ingredient
readonly "result": $ItemStack
readonly "base": $Ingredient
readonly "addition": $Ingredient

constructor(template: $Ingredient$$Type, base: $Ingredient$$Type, addition: $Ingredient$$Type, result: $ItemStack$$Type)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(smithingRecipeInput: $SmithingRecipeInput$$Type, wrapperLookup: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicRerollRecipe$$Type = ($RunicRerollRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunicRerollRecipe$$Original = $RunicRerollRecipe;}
declare module "net.sweenus.simplyswords.recipe.UpgradeUniqueRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$UpgradeUniqueRecipe} from "net.sweenus.simplyswords.recipe.UpgradeUniqueRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $UpgradeUniqueRecipe$Serializer implements $RecipeSerializer$$Interface<($UpgradeUniqueRecipe)> {
static readonly "CODEC": $MapCodec<($UpgradeUniqueRecipe)>
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($UpgradeUniqueRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($UpgradeUniqueRecipe)>
public "codec"(): $MapCodec<($UpgradeUniqueRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeUniqueRecipe$Serializer$$Type = ($UpgradeUniqueRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeUniqueRecipe$Serializer$$Original = $UpgradeUniqueRecipe$Serializer;}
declare module "net.sweenus.simplyswords.recipe.RawUpgradableRecipe$Data" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $RawUpgradableRecipe$Data extends $Record {
static readonly "CODEC": $MapCodec<($RawUpgradableRecipe$Data)>

constructor(key: $Map$$Type<(character), ($Pair$$Type<($Ingredient$$Type), (boolean)>)>, pattern: $List$$Type<(StringJS)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pattern"(): $List<(StringJS)>
public "key"(): $Map<(character), ($Pair<($Ingredient), (boolean)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawUpgradableRecipe$Data$$Type = ({"pattern"?: $List$$Type<(StringJS)>, "key"?: $Map$$Type<(character), ($Pair$$Type<($Ingredient$$Type), (boolean)>)>}) | ([pattern?: $List$$Type<(StringJS)>, key?: $Map$$Type<(character), ($Pair$$Type<($Ingredient$$Type), (boolean)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RawUpgradableRecipe$Data$$Original = $RawUpgradableRecipe$Data;}
declare module "net.sweenus.simplyswords.recipe.RunicRerollRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RunicRerollRecipe} from "net.sweenus.simplyswords.recipe.RunicRerollRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $RunicRerollRecipe$Serializer implements $RecipeSerializer$$Interface<($RunicRerollRecipe)> {
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RunicRerollRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RunicRerollRecipe)>
public "codec"(): $MapCodec<($RunicRerollRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicRerollRecipe$Serializer$$Type = ($RunicRerollRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunicRerollRecipe$Serializer$$Original = $RunicRerollRecipe$Serializer;}
declare module "net.sweenus.simplyswords.recipe.RawUpgradableRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional$$Type} from "java.util.Optional"
import {$RawUpgradableRecipe$Data$$Type} from "net.sweenus.simplyswords.recipe.RawUpgradableRecipe$Data"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $RawUpgradableRecipe {
static readonly "CODEC": $MapCodec<($RawUpgradableRecipe)>
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RawUpgradableRecipe)>

constructor(width: integer, height: integer, upgradableItemSlot: integer, ingredients: $NonNullList$$Type<($Ingredient$$Type)>, data: ($RawUpgradableRecipe$Data$$Type)?)

public "getIngredients"(): $NonNullList<($Ingredient)>
public "getUpgradableItemSlot"(): integer
public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(input: $CraftingInput$$Type): boolean
public "isMirrored"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "upgradableItemSlot"(): integer
get "width"(): integer
get "height"(): integer
get "mirrored"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawUpgradableRecipe$$Type = ($RawUpgradableRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RawUpgradableRecipe$$Original = $RawUpgradableRecipe;}
declare module "net.sweenus.simplyswords.recipe.UpgradeUniqueRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$RawUpgradableRecipe$$Type} from "net.sweenus.simplyswords.recipe.RawUpgradableRecipe"

export class $UpgradeUniqueRecipe extends $ShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(group: StringJS, category: $CraftingBookCategory$$Type, raw: $RawUpgradableRecipe$$Type, result: $ItemStack$$Type, showNotification: boolean)

public "assemble"(craftingRecipeInput: $CraftingInput$$Type, wrapperLookup: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(craftingRecipeInput: $CraftingInput$$Type, world: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeUniqueRecipe$$Type = ($UpgradeUniqueRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeUniqueRecipe$$Original = $UpgradeUniqueRecipe;}
