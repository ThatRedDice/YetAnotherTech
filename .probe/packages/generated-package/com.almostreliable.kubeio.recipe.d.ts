declare module "com.almostreliable.kubeio.recipe.TankKubeRecipe" {
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$RecipeTypeFunction} from "dev.latvian.mods.kubejs.recipe.RecipeTypeFunction"
import {$KubeRecipe} from "dev.latvian.mods.kubejs.recipe.KubeRecipe"
import {$JsonObject} from "com.google.gson.JsonObject"
import {$KubeRecipeFactory} from "dev.latvian.mods.kubejs.recipe.schema.KubeRecipeFactory"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"

export class $TankKubeRecipe extends $KubeRecipe {
 "newRecipe": boolean
 "type": $RecipeTypeFunction
 "sourceLine": $SourceLine
 "originalJson": $JsonObject
 "removed": boolean
 "creationError": boolean
static readonly "TYPE_INFO": $TypeInfo
 "json": $JsonObject
static readonly "CHANGED_MARKER": StringJS
static readonly "FACTORY": $KubeRecipeFactory
 "changed": boolean

constructor()

public "emptying"(): $TankKubeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankKubeRecipe$$Type = ($TankKubeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankKubeRecipe$$Original = $TankKubeRecipe;}
declare module "com.almostreliable.kubeio.recipe.FireCraftingKubeRecipe" {
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$RecipeTypeFunction} from "dev.latvian.mods.kubejs.recipe.RecipeTypeFunction"
import {$KubeRecipe} from "dev.latvian.mods.kubejs.recipe.KubeRecipe"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$JsonObject} from "com.google.gson.JsonObject"
import {$KubeRecipeFactory} from "dev.latvian.mods.kubejs.recipe.schema.KubeRecipeFactory"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"

export class $FireCraftingKubeRecipe extends $KubeRecipe {
 "newRecipe": boolean
 "type": $RecipeTypeFunction
 "sourceLine": $SourceLine
 "originalJson": $JsonObject
 "removed": boolean
 "creationError": boolean
static readonly "TYPE_INFO": $TypeInfo
 "json": $JsonObject
static readonly "CHANGED_MARKER": StringJS
static readonly "FACTORY": $KubeRecipeFactory
 "changed": boolean

constructor()

public "blockTag"(arg0: $TagKey$$Type<($Block)>): $FireCraftingKubeRecipe
public "block"(arg0: $Block$$Type): $FireCraftingKubeRecipe
public "serialize"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireCraftingKubeRecipe$$Type = ($FireCraftingKubeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireCraftingKubeRecipe$$Original = $FireCraftingKubeRecipe;}
declare module "com.almostreliable.kubeio.recipe.AlloySmelterKubeRecipe" {
import {$TypeInfo} from "dev.latvian.mods.rhino.type.TypeInfo"
import {$RecipeTypeFunction} from "dev.latvian.mods.kubejs.recipe.RecipeTypeFunction"
import {$KubeRecipe} from "dev.latvian.mods.kubejs.recipe.KubeRecipe"
import {$JsonObject} from "com.google.gson.JsonObject"
import {$KubeRecipeFactory} from "dev.latvian.mods.kubejs.recipe.schema.KubeRecipeFactory"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"

export class $AlloySmelterKubeRecipe extends $KubeRecipe {
 "newRecipe": boolean
 "type": $RecipeTypeFunction
 "sourceLine": $SourceLine
 "originalJson": $JsonObject
 "removed": boolean
 "creationError": boolean
static readonly "TYPE_INFO": $TypeInfo
 "json": $JsonObject
static readonly "CHANGED_MARKER": StringJS
static readonly "FACTORY": $KubeRecipeFactory
 "changed": boolean

constructor()

public "smelting"(): $AlloySmelterKubeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloySmelterKubeRecipe$$Type = ($AlloySmelterKubeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlloySmelterKubeRecipe$$Original = $AlloySmelterKubeRecipe;}
