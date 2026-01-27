declare module "com.tom.createores.kubejs.DrillingRecipeJS" {
import {$RecipeSchema} from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$ProcessingOutput} from "com.simibubi.create.content.processing.recipe.ProcessingOutput"
import {$RecipeKey} from "dev.latvian.mods.kubejs.recipe.RecipeKey"
import {$KubeRecipeFactory} from "dev.latvian.mods.kubejs.recipe.schema.KubeRecipeFactory"
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$FluidIngredient} from "com.tom.createores.util.FluidIngredient"
import {$RecipeTypeFunction} from "dev.latvian.mods.kubejs.recipe.RecipeTypeFunction"
import {$ExcavatingRecipeJS} from "com.tom.createores.kubejs.ExcavatingRecipeJS"
import {$JsonObject} from "com.google.gson.JsonObject"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$TickDuration} from "dev.latvian.mods.kubejs.util.TickDuration"

export class $DrillingRecipeJS extends $ExcavatingRecipeJS<($DrillingRecipeJS)> {
 "newRecipe": boolean
static readonly "RECIPE_FACTORY": $KubeRecipeFactory
static readonly "OUTPUT": $RecipeKey<($List<($ProcessingOutput)>)>
static readonly "PRIORITY": $RecipeKey<(integer)>
 "type": $RecipeTypeFunction
 "sourceLine": $SourceLine
 "originalJson": $JsonObject
static readonly "FLUID": $RecipeKey<($FluidIngredient)>
 "removed": boolean
 "creationError": boolean
static readonly "SCHEMA": $RecipeSchema
static readonly "TICKS": $RecipeKey<($TickDuration)>
static readonly "TYPE_INFO": $TypeInfo
static readonly "VEIN_ID": $RecipeKey<(StringJS)>
 "json": $JsonObject
static readonly "CHANGED_MARKER": StringJS
static readonly "STRESS": $RecipeKey<(integer)>
static readonly "DRILL": $RecipeKey<($Ingredient)>
 "changed": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillingRecipeJS$$Type = ($DrillingRecipeJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrillingRecipeJS$$Original = $DrillingRecipeJS;}
declare module "com.tom.createores.kubejs.VeinRecipeJS" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeSchema} from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import {$RecipeComponent} from "dev.latvian.mods.kubejs.recipe.component.RecipeComponent"
import {$RecipeKey} from "dev.latvian.mods.kubejs.recipe.RecipeKey"
import {$RandomSpreadStructurePlacementJS} from "com.tom.createores.kubejs.RandomSpreadStructurePlacementJS"
import {$KubeRecipeFactory} from "dev.latvian.mods.kubejs.recipe.schema.KubeRecipeFactory"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ThreeState} from "com.tom.createores.util.ThreeState"
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$RecipeTypeFunction} from "dev.latvian.mods.kubejs.recipe.RecipeTypeFunction"
import {$KubeRecipe} from "dev.latvian.mods.kubejs.recipe.KubeRecipe"
import {$RandomSpreadType, $RandomSpreadType$$Type} from "net.minecraft.world.level.levelgen.structure.placement.RandomSpreadType"
import {$JsonObject} from "com.google.gson.JsonObject"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$StructurePlacement$FrequencyReductionMethod, $StructurePlacement$FrequencyReductionMethod$$Type} from "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$FrequencyReductionMethod"

export class $VeinRecipeJS extends $KubeRecipe {
static readonly "AMOUNT_MIN": $RecipeKey<(float)>
static readonly "RECIPE_FACTORY": $KubeRecipeFactory
static readonly "FREQ_REDUCTION": $RecipeComponent<($StructurePlacement$FrequencyReductionMethod)>
static readonly "PRIORITY": $RecipeKey<(integer)>
 "type": $RecipeTypeFunction
static readonly "AMOUNT_MAX": $RecipeKey<(float)>
 "sourceLine": $SourceLine
static readonly "RANDOM_SPREAD": $RecipeComponent<($RandomSpreadType)>
 "creationError": boolean
static readonly "SCHEMA": $RecipeSchema
static readonly "TYPE_INFO": $TypeInfo
 "json": $JsonObject
static readonly "ICON": $RecipeKey<($ItemStack)>
static readonly "CHANGED_MARKER": StringJS
static readonly "BIOME_BLACKLIST": $RecipeKey<(StringJS)>
 "newRecipe": boolean
static readonly "NAME": $RecipeKey<($Component)>
static readonly "PLACEMENT": $RecipeKey<($RandomSpreadStructurePlacementJS)>
static readonly "FINITE": $RecipeKey<($ThreeState)>
 "originalJson": $JsonObject
 "removed": boolean
static readonly "BIOME_WHITELIST": $RecipeKey<(StringJS)>
 "changed": boolean

constructor()

public "alwaysInfinite"(): $VeinRecipeJS
public "alwaysFinite"(): $VeinRecipeJS
public "defaultFinite"(): $VeinRecipeJS
public "initValues"(arg0: boolean): void
public "biomeWhitelist"(arg0: StringJS): $VeinRecipeJS
public "placement"(arg0: integer, arg1: integer, arg2: integer): $VeinRecipeJS
public "veinSize"(arg0: float, arg1: float): $VeinRecipeJS
public "biomeBlacklist"(arg0: StringJS): $VeinRecipeJS
public "reduction"(arg0: $StructurePlacement$FrequencyReductionMethod$$Type): $VeinRecipeJS
public "priority"(arg0: integer): $VeinRecipeJS
public "spread"(arg0: $RandomSpreadType$$Type): $VeinRecipeJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeinRecipeJS$$Type = ($VeinRecipeJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VeinRecipeJS$$Original = $VeinRecipeJS;}
declare module "com.tom.createores.kubejs.COEUtil" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ProcessingOutput} from "com.simibubi.create.content.processing.recipe.ProcessingOutput"

export interface $COEUtil$$Interface {
}

export class $COEUtil implements $COEUtil$$Interface {
static "processingOutput"(arg0: $ItemStack$$Type, arg1: float): $ProcessingOutput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $COEUtil$$Type = ($COEUtil);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $COEUtil$$Original = $COEUtil;}
declare module "com.tom.createores.kubejs.ExtractorRecipeJS" {
import {$RecipeSchema} from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeKey} from "dev.latvian.mods.kubejs.recipe.RecipeKey"
import {$KubeRecipeFactory} from "dev.latvian.mods.kubejs.recipe.schema.KubeRecipeFactory"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$FluidIngredient} from "com.tom.createores.util.FluidIngredient"
import {$RecipeTypeFunction} from "dev.latvian.mods.kubejs.recipe.RecipeTypeFunction"
import {$ExcavatingRecipeJS} from "com.tom.createores.kubejs.ExcavatingRecipeJS"
import {$JsonObject} from "com.google.gson.JsonObject"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$TickDuration} from "dev.latvian.mods.kubejs.util.TickDuration"

export class $ExtractorRecipeJS extends $ExcavatingRecipeJS<($ExtractorRecipeJS)> {
 "newRecipe": boolean
static readonly "RECIPE_FACTORY": $KubeRecipeFactory
static readonly "OUTPUT": $RecipeKey<($FluidStack)>
static readonly "PRIORITY": $RecipeKey<(integer)>
 "type": $RecipeTypeFunction
 "sourceLine": $SourceLine
 "originalJson": $JsonObject
static readonly "FLUID": $RecipeKey<($FluidIngredient)>
 "removed": boolean
 "creationError": boolean
static readonly "SCHEMA": $RecipeSchema
static readonly "TICKS": $RecipeKey<($TickDuration)>
static readonly "TYPE_INFO": $TypeInfo
static readonly "VEIN_ID": $RecipeKey<(StringJS)>
 "json": $JsonObject
static readonly "CHANGED_MARKER": StringJS
static readonly "STRESS": $RecipeKey<(integer)>
static readonly "DRILL": $RecipeKey<($Ingredient)>
 "changed": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractorRecipeJS$$Type = ($ExtractorRecipeJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtractorRecipeJS$$Original = $ExtractorRecipeJS;}
declare module "com.tom.createores.kubejs.RandomSpreadStructurePlacementJS" {
import {$RandomSpreadType} from "net.minecraft.world.level.levelgen.structure.placement.RandomSpreadType"
import {$StructurePlacement$FrequencyReductionMethod} from "net.minecraft.world.level.levelgen.structure.placement.StructurePlacement$FrequencyReductionMethod"
import {$RandomSpreadStructurePlacement, $RandomSpreadStructurePlacement$$Type} from "net.minecraft.world.level.levelgen.structure.placement.RandomSpreadStructurePlacement"

export class $RandomSpreadStructurePlacementJS {
 "frequencyReductionMethod": $StructurePlacement$FrequencyReductionMethod
 "spacing": integer
 "salt": integer
 "spreadType": $RandomSpreadType
 "separation": integer
 "frequency": float

constructor(arg0: $RandomSpreadStructurePlacement$$Type)
constructor(arg0: integer, arg1: integer, arg2: integer)

public "map"(): $RandomSpreadStructurePlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomSpreadStructurePlacementJS$$Type = ($RandomSpreadStructurePlacementJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RandomSpreadStructurePlacementJS$$Original = $RandomSpreadStructurePlacementJS;}
declare module "com.tom.createores.kubejs.ExcavatingRecipeJS" {
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$FluidIngredient, $FluidIngredient$$Type} from "com.tom.createores.util.FluidIngredient"
import {$RecipeSchema, $RecipeSchema$$Type} from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import {$RecipeTypeFunction} from "dev.latvian.mods.kubejs.recipe.RecipeTypeFunction"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$KubeRecipe} from "dev.latvian.mods.kubejs.recipe.KubeRecipe"
import {$RecipeKey} from "dev.latvian.mods.kubejs.recipe.RecipeKey"
import {$JsonObject} from "com.google.gson.JsonObject"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$TickDuration} from "dev.latvian.mods.kubejs.util.TickDuration"

export class $ExcavatingRecipeJS<T extends $ExcavatingRecipeJS<(object)>> extends $KubeRecipe {
 "newRecipe": boolean
static readonly "PRIORITY": $RecipeKey<(integer)>
 "type": $RecipeTypeFunction
 "sourceLine": $SourceLine
 "originalJson": $JsonObject
static readonly "FLUID": $RecipeKey<($FluidIngredient)>
 "removed": boolean
 "creationError": boolean
static readonly "TICKS": $RecipeKey<($TickDuration)>
static readonly "TYPE_INFO": $TypeInfo
static readonly "VEIN_ID": $RecipeKey<(StringJS)>
 "json": $JsonObject
static readonly "CHANGED_MARKER": StringJS
static readonly "STRESS": $RecipeKey<(integer)>
static readonly "DRILL": $RecipeKey<($Ingredient)>
 "changed": boolean

constructor()

public static "addFuncs"<T extends $ExcavatingRecipeJS<(object)>>(arg0: $RecipeSchema$$Type): $RecipeSchema
public "initValues"(arg0: boolean): void
public "fluid"(arg0: $FluidIngredient$$Type): T
public "stress"(arg0: integer): T
public "priority"(arg0: integer): T
public "drill"(arg0: $Ingredient$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingRecipeJS$$Type<T> = ($ExcavatingRecipeJS<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExcavatingRecipeJS$$Original<T> = $ExcavatingRecipeJS<(T)>;}
