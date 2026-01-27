declare module "net.minecraft.data.recipes.RecipeBuilder" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeCategory$$Type} from "net.minecraft.data.recipes.RecipeCategory"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Item} from "net.minecraft.world.item.Item"

export interface $RecipeBuilder$$Interface {
get "result"(): $Item
}

export class $RecipeBuilder implements $RecipeBuilder$$Interface {
static readonly "ROOT_RECIPE_ADVANCEMENT": $ResourceLocation

 "unlockedBy"(arg0: StringJS, arg1: $Criterion$$Type<(never)>): $RecipeBuilder
static "getDefaultRecipeId"(arg0: $ItemLike$$Type): $ResourceLocation
static "determineBookCategory"(arg0: $RecipeCategory$$Type): $CraftingBookCategory
 "getResult"(): $Item
 "group"(arg0: StringJS): $RecipeBuilder
 "save"(arg0: $RecipeOutput$$Type): void
 "save"(arg0: $RecipeOutput$$Type, arg1: StringJS): void
 "save"(arg0: $RecipeOutput$$Type, arg1: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBuilder$$Type = ($RecipeBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBuilder$$Original = $RecipeBuilder;}
declare module "net.minecraft.data.recipes.RecipeOutput" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$IRecipeOutputExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IRecipeOutputExtension"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Advancement$Builder} from "net.minecraft.advancements.Advancement$Builder"
import {$ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export interface $RecipeOutput$$Interface extends $IRecipeOutputExtension$$Interface {
}

export class $RecipeOutput implements $RecipeOutput$$Interface {
 "advancement"(): $Advancement$Builder
 "accept"(arg0: $ResourceLocation$$Type, arg1: $Recipe$$Type<(never)>, arg2: $AdvancementHolder$$Type): void
 "withConditions"(...arg0: ($ICondition$$Type)[]): $RecipeOutput
 "accept"(arg0: $ResourceLocation$$Type, arg1: $Recipe$$Type<(never)>, arg2: $AdvancementHolder$$Type, ...arg3: ($ICondition$$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeOutput$$Type = ($RecipeOutput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeOutput$$Original = $RecipeOutput;}
declare module "net.minecraft.data.recipes.RecipeProvider" {
import {$MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$RecipeCategory$$Type} from "net.minecraft.data.recipes.RecipeCategory"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$InventoryChangeTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$DataProvider$$Interface} from "net.minecraft.data.DataProvider"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Path$$Type} from "java.nio.file.Path"

export class $RecipeProvider implements $DataProvider$$Interface {
constructor(arg0: $PackOutput$$Type, arg1: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public static "threeByThreePacker"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "getHasName"(arg0: $ItemLike$$Type): StringJS
public static "has"(arg0: $TagKey$$Type<($Item)>): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "has"(arg0: $ItemLike$$Type): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "has"(arg0: $MinMaxBounds$Ints$$Type, arg1: $ItemLike$$Type): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public "getName"(): StringJS
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(never)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(never)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeProvider$$Type = ($RecipeProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeProvider$$Original = $RecipeProvider;}
declare module "net.minecraft.data.recipes.RecipeCategory" {
import {$Enum} from "java.lang.Enum"

export class $RecipeCategory extends $Enum<($RecipeCategory)> {
static readonly "BUILDING_BLOCKS": $RecipeCategory
static readonly "REDSTONE": $RecipeCategory
static readonly "TRANSPORTATION": $RecipeCategory
static readonly "COMBAT": $RecipeCategory
static readonly "MISC": $RecipeCategory
static readonly "BREWING": $RecipeCategory
static readonly "DECORATIONS": $RecipeCategory
static readonly "TOOLS": $RecipeCategory
static readonly "FOOD": $RecipeCategory

public "getFolderName"(): StringJS
public static "values"(): ($RecipeCategory)[]
public static "valueOf"(arg0: StringJS): $RecipeCategory
get "folderName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCategory$$Type = (("building_blocks") | ("decorations") | ("redstone") | ("transportation") | ("tools") | ("combat") | ("food") | ("brewing") | ("misc"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeCategory$$Original = $RecipeCategory;}
declare module "net.minecraft.data.recipes.ShapedRecipeBuilder" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeCategory$$Type} from "net.minecraft.data.recipes.RecipeCategory"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeBuilder, $RecipeBuilder$$Interface} from "net.minecraft.data.recipes.RecipeBuilder"

export class $ShapedRecipeBuilder implements $RecipeBuilder$$Interface {
constructor(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: integer)
constructor(arg0: $RecipeCategory$$Type, arg1: $ItemStack$$Type)

public "unlockedBy"(arg0: StringJS, arg1: $Criterion$$Type): $RecipeBuilder
public static "shaped"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: integer): $ShapedRecipeBuilder
public static "shaped"(arg0: $RecipeCategory$$Type, arg1: $ItemStack$$Type): $ShapedRecipeBuilder
public static "shaped"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type): $ShapedRecipeBuilder
public "showNotification"(arg0: boolean): $ShapedRecipeBuilder
public "getResult"(): $Item
public "group"(arg0: StringJS): $ShapedRecipeBuilder
public "pattern"(arg0: StringJS): $ShapedRecipeBuilder
public "save"(arg0: $RecipeOutput$$Type, arg1: $ResourceLocation$$Type): void
public "define"(arg0: character, arg1: $TagKey$$Type<($Item)>): $ShapedRecipeBuilder
public "define"(arg0: character, arg1: $ItemLike$$Type): $ShapedRecipeBuilder
public "define"(arg0: character, arg1: $Ingredient$$Type): $ShapedRecipeBuilder
public static "getDefaultRecipeId"(arg0: $ItemLike$$Type): $ResourceLocation
public static "determineBookCategory"(arg0: $RecipeCategory$$Type): $CraftingBookCategory
public "save"(arg0: $RecipeOutput$$Type): void
public "save"(arg0: $RecipeOutput$$Type, arg1: StringJS): void
get "result"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeBuilder$$Type = ($ShapedRecipeBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipeBuilder$$Original = $ShapedRecipeBuilder;}
declare module "net.minecraft.data.recipes.ShapelessRecipeBuilder" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeCategory$$Type} from "net.minecraft.data.recipes.RecipeCategory"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeBuilder, $RecipeBuilder$$Interface} from "net.minecraft.data.recipes.RecipeBuilder"

export class $ShapelessRecipeBuilder implements $RecipeBuilder$$Interface {
constructor(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: integer)
constructor(arg0: $RecipeCategory$$Type, arg1: $ItemStack$$Type)

public "unlockedBy"(arg0: StringJS, arg1: $Criterion$$Type): $RecipeBuilder
public static "shapeless"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: integer): $ShapelessRecipeBuilder
public static "shapeless"(arg0: $RecipeCategory$$Type, arg1: $ItemStack$$Type): $ShapelessRecipeBuilder
public static "shapeless"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type): $ShapelessRecipeBuilder
public "getResult"(): $Item
public "group"(arg0: StringJS): $RecipeBuilder
public "save"(arg0: $RecipeOutput$$Type, arg1: $ResourceLocation$$Type): void
public "requires"(arg0: $Ingredient$$Type): $ShapelessRecipeBuilder
public "requires"(arg0: $ItemLike$$Type, arg1: integer): $ShapelessRecipeBuilder
public "requires"(arg0: $Ingredient$$Type, arg1: integer): $ShapelessRecipeBuilder
public "requires"(arg0: $ItemLike$$Type): $ShapelessRecipeBuilder
public "requires"(arg0: $TagKey$$Type<($Item)>): $ShapelessRecipeBuilder
public static "getDefaultRecipeId"(arg0: $ItemLike$$Type): $ResourceLocation
public static "determineBookCategory"(arg0: $RecipeCategory$$Type): $CraftingBookCategory
public "save"(arg0: $RecipeOutput$$Type): void
public "save"(arg0: $RecipeOutput$$Type, arg1: StringJS): void
get "result"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessRecipeBuilder$$Type = ($ShapelessRecipeBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessRecipeBuilder$$Original = $ShapelessRecipeBuilder;}
