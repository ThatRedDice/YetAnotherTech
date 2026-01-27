declare module "com.supermartijn642.core.data.recipe.ConditionalRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection$$Type} from "java.util.Collection"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$ResourceCondition$$Type} from "com.supermartijn642.core.data.condition.ResourceCondition"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $ConditionalRecipeSerializer implements $RecipeSerializer$$Interface<($Recipe<(never)>)> {
static readonly "DUMMY_RECIPE": $Recipe<(never)>
static readonly "INSTANCE": $ConditionalRecipeSerializer
static readonly "DUMMY_RECIPE_TYPE": $RecipeType<($Recipe<(never)>)>

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($Recipe<(never)>)>
public static "wrapRecipeWithForgeConditions"(recipe: $JsonObject$$Type, conditions: $Collection$$Type<($ICondition$$Type)>): $JsonObject
public static "wrapRecipe"(recipe: $JsonObject$$Type, conditions: $Collection$$Type<($ResourceCondition$$Type)>): $JsonObject
public static "unwrapRecipe"(location: $ResourceLocation$$Type, json: $JsonObject$$Type, ops: $DynamicOps$$Type<($JsonElement$$Type)>): $JsonElement
public "codec"(): $MapCodec<($Recipe<(never)>)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalRecipeSerializer$$Type = ($ConditionalRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConditionalRecipeSerializer$$Original = $ConditionalRecipeSerializer;}
declare module "com.supermartijn642.core.data.condition.ResourceConditionSerializer" {
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ResourceCondition, $ResourceCondition$$Type} from "com.supermartijn642.core.data.condition.ResourceCondition"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ICondition} from "net.neoforged.neoforge.common.conditions.ICondition"

export interface $ResourceConditionSerializer$$Interface<T extends $ResourceCondition> {
}

export class $ResourceConditionSerializer<T extends $ResourceCondition> implements $ResourceConditionSerializer$$Interface {
static "createForgeConditionCodec"(serializer: $ResourceConditionSerializer$$Type<(never)>): $MapCodec<($ICondition)>
 "deserialize"(json: $JsonObject$$Type): T
 "serialize"(json: $JsonObject$$Type, condition: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConditionSerializer$$Type<T> = ($ResourceConditionSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceConditionSerializer$$Original<T> = $ResourceConditionSerializer<(T)>;}
declare module "com.supermartijn642.core.data.condition.ResourceConditionContext" {
import {$ICondition$IContext} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"

export class $ResourceConditionContext {
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $ICondition$IContext
get "underlying"(): $ICondition$IContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConditionContext$$Type = ($ResourceConditionContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceConditionContext$$Original = $ResourceConditionContext;}
declare module "com.supermartijn642.core.data.condition.ResourceCondition" {
import {$ResourceConditionContext$$Type} from "com.supermartijn642.core.data.condition.ResourceConditionContext"
import {$ResourceConditionSerializer} from "com.supermartijn642.core.data.condition.ResourceConditionSerializer"
import {$ICondition} from "net.neoforged.neoforge.common.conditions.ICondition"

export interface $ResourceCondition$$Interface {
get "serializer"(): $ResourceConditionSerializer<(never)>
}

export class $ResourceCondition implements $ResourceCondition$$Interface {
 "getSerializer"(): $ResourceConditionSerializer<(never)>
static "createForgeCondition"(condition: $ResourceCondition$$Type): $ICondition
 "or"(alternative: $ResourceCondition$$Type): $ResourceCondition
 "negate"(): $ResourceCondition
 "and"(condition: $ResourceCondition$$Type): $ResourceCondition
 "test"(context: $ResourceConditionContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceCondition$$Type = ($ResourceCondition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceCondition$$Original = $ResourceCondition;}
