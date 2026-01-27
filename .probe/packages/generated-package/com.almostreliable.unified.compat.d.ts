declare module "com.almostreliable.unified.compat.kube.AlmostKube" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Set} from "java.util.Set"

export class $AlmostKube {
public static "getTagEntries"(tag: $ResourceLocation$$Type): $Set<(StringJS)>
public static "getRelevantItemTag"(stack: $ItemStack$$Type): StringJS
public static "getTagTargetItem"(tag: $ResourceLocation$$Type): $ItemStack
public static "getVariantItemTarget"(stack: $ItemStack$$Type): $ItemStack
public static "getTags"(): $Set<(StringJS)>
public static get "tags"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlmostKube$$Type = ($AlmostKube);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlmostKube$$Original = $AlmostKube;}
declare module "com.almostreliable.unified.compat.viewer.ClientRecipeTracker" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientRecipeTracker$ClientRecipeLink, $ClientRecipeTracker$ClientRecipeLink$$Type} from "com.almostreliable.unified.compat.viewer.ClientRecipeTracker$ClientRecipeLink"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $ClientRecipeTracker extends $Record implements $Recipe$$Interface<($RecipeInput)> {
static readonly "NAMESPACE": StringJS
static readonly "UNIFIED_FLAG": integer
static readonly "SERIALIZER": $RecipeSerializer<($ClientRecipeTracker)>
static readonly "RECIPES": StringJS
static readonly "ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($ClientRecipeTracker)>
static readonly "DUPLICATE_FLAG": integer

constructor(namespace: StringJS, recipes: $Map$$Type<($ResourceLocation$$Type), ($ClientRecipeTracker$ClientRecipeLink$$Type)>)

public "assemble"(recipeInput: $RecipeInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "getResultItem"(provider: $HolderLookup$Provider$$Type): $ItemStack
public "getLinkStrings"(): $List<(StringJS)>
public "namespace"(): StringJS
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(recipeInput: $RecipeInput$$Type, level: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "recipes"(): $Map<($ResourceLocation), ($ClientRecipeTracker$ClientRecipeLink)>
public "getLink"(recipeId: $ResourceLocation$$Type): $ClientRecipeTracker$ClientRecipeLink
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "linkStrings"(): $List<(StringJS)>
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$$Type = ({"namespace"?: StringJS, "recipes"?: $Map$$Type<($ResourceLocation$$Type), ($ClientRecipeTracker$ClientRecipeLink$$Type)>}) | ([namespace?: StringJS, recipes?: $Map$$Type<($ResourceLocation$$Type), ($ClientRecipeTracker$ClientRecipeLink$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientRecipeTracker$$Original = $ClientRecipeTracker;}
declare module "com.almostreliable.unified.compat.viewer.ClientRecipeTracker$ClientRecipeLink" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $ClientRecipeTracker$ClientRecipeLink extends $Record {
constructor(id: $ResourceLocation$$Type, isUnified: boolean, isDuplicate: boolean)

public "isUnified"(): boolean
public "isDuplicate"(): boolean
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
get "unified"(): boolean
get "duplicate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$ClientRecipeLink$$Type = ({"id"?: $ResourceLocation$$Type, "isDuplicate"?: boolean, "isUnified"?: boolean}) | ([id?: $ResourceLocation$$Type, isDuplicate?: boolean, isUnified?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientRecipeTracker$ClientRecipeLink$$Original = $ClientRecipeTracker$ClientRecipeLink;}
declare module "com.almostreliable.unified.compat.viewer.ClientRecipeTracker$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClientRecipeTracker$ClientRecipeLink} from "com.almostreliable.unified.compat.viewer.ClientRecipeTracker$ClientRecipeLink"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ClientRecipeTracker} from "com.almostreliable.unified.compat.viewer.ClientRecipeTracker"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ClientRecipeTracker$Serializer implements $RecipeSerializer$$Interface<($ClientRecipeTracker)> {
static readonly "CODEC": $MapCodec<($ClientRecipeTracker)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientRecipeTracker)>

constructor()

public static "parseRaw"(namespace: StringJS, raw: StringJS): $ClientRecipeTracker$ClientRecipeLink
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ClientRecipeTracker)>
public "codec"(): $MapCodec<($ClientRecipeTracker)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$Serializer$$Type = ($ClientRecipeTracker$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientRecipeTracker$Serializer$$Original = $ClientRecipeTracker$Serializer;}
