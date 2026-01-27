declare module "appeng.recipes.entropy.EntropyRecipe$Output" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$EntropyRecipe$FluidOutput, $EntropyRecipe$FluidOutput$$Type} from "appeng.recipes.entropy.EntropyRecipe$FluidOutput"
import {$Record} from "java.lang.Record"
import {$EntropyRecipe$BlockOutput, $EntropyRecipe$BlockOutput$$Type} from "appeng.recipes.entropy.EntropyRecipe$BlockOutput"

export class $EntropyRecipe$Output extends $Record {
static "CODEC": $Codec<($EntropyRecipe$Output)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$Output)>

constructor(block: ($EntropyRecipe$BlockOutput$$Type)?, fluid: ($EntropyRecipe$FluidOutput$$Type)?, drops: $List$$Type<($ItemStack$$Type)>)

public "fluid"(): $Optional<($EntropyRecipe$FluidOutput)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "block"(): $Optional<($EntropyRecipe$BlockOutput)>
public "drops"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$Output$$Type = ({"drops"?: $List$$Type<($ItemStack$$Type)>, "block"?: ($EntropyRecipe$BlockOutput$$Type)?, "fluid"?: ($EntropyRecipe$FluidOutput$$Type)?}) | ([drops?: $List$$Type<($ItemStack$$Type)>, block?: ($EntropyRecipe$BlockOutput$$Type)?, fluid?: ($EntropyRecipe$FluidOutput$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$Output$$Original = $EntropyRecipe$Output;}
declare module "appeng.recipes.entropy.EntropyRecipe$BlockInput" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$PropertyValueMatcher, $PropertyValueMatcher$$Type} from "appeng.recipes.entropy.PropertyValueMatcher"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Record} from "java.lang.Record"

export class $EntropyRecipe$BlockInput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$BlockInput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$BlockInput)>

constructor(block: $Block$$Type, properties: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $Map<(StringJS), ($PropertyValueMatcher)>
public "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$BlockInput$$Type = ({"properties"?: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>, "block"?: $Block$$Type}) | ([properties?: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>, block?: $Block$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$BlockInput$$Original = $EntropyRecipe$BlockInput;}
declare module "appeng.recipes.entropy.EntropyRecipe$Input" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$EntropyRecipe$FluidInput, $EntropyRecipe$FluidInput$$Type} from "appeng.recipes.entropy.EntropyRecipe$FluidInput"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EntropyRecipe$BlockInput, $EntropyRecipe$BlockInput$$Type} from "appeng.recipes.entropy.EntropyRecipe$BlockInput"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record} from "java.lang.Record"

export class $EntropyRecipe$Input extends $Record {
static "CODEC": $Codec<($EntropyRecipe$Input)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$Input)>

constructor(block: ($EntropyRecipe$BlockInput$$Type)?, fluid: ($EntropyRecipe$FluidInput$$Type)?)

public "fluid"(): $Optional<($EntropyRecipe$FluidInput)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $BlockState$$Type, arg1: $FluidState$$Type): boolean
public "block"(): $Optional<($EntropyRecipe$BlockInput)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$Input$$Type = ({"block"?: ($EntropyRecipe$BlockInput$$Type)?, "fluid"?: ($EntropyRecipe$FluidInput$$Type)?}) | ([block?: ($EntropyRecipe$BlockInput$$Type)?, fluid?: ($EntropyRecipe$FluidInput$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$Input$$Original = $EntropyRecipe$Input;}
declare module "appeng.recipes.entropy.EntropyRecipe$FluidOutput" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Record} from "java.lang.Record"

export class $EntropyRecipe$FluidOutput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$FluidOutput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$FluidOutput)>

constructor(fluid: $Fluid$$Type, keepProperties: boolean, properties: $Map$$Type<(StringJS), (StringJS)>)

public "keepProperties"(): boolean
public "fluid"(): $Fluid
public static "fromNetwork"(arg0: $FriendlyByteBuf$$Type): $EntropyRecipe$FluidOutput
public static "toNetwork"(arg0: $FriendlyByteBuf$$Type, arg1: $EntropyRecipe$FluidOutput$$Type): void
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "apply"(arg0: $FluidState$$Type): $FluidState
public "properties"(): $Map<(StringJS), (StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$FluidOutput$$Type = ({"fluid"?: $Fluid$$Type, "properties"?: $Map$$Type<(StringJS), (StringJS)>, "keepProperties"?: boolean}) | ([fluid?: $Fluid$$Type, properties?: $Map$$Type<(StringJS), (StringJS)>, keepProperties?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$FluidOutput$$Original = $EntropyRecipe$FluidOutput;}
declare module "appeng.recipes.entropy.EntropyMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EntropyMode extends $Enum<($EntropyMode)> implements $StringRepresentable$$Interface {
static readonly "HEAT": $EntropyMode
static readonly "CODEC": $Codec<($EntropyMode)>
static readonly "COOL": $EntropyMode

public static "values"(): ($EntropyMode)[]
public static "valueOf"(arg0: StringJS): $EntropyMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyMode$$Type = (("heat") | ("cool"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyMode$$Original = $EntropyMode;}
declare module "appeng.recipes.entropy.EntropyRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$EntropyRecipe$Input} from "appeng.recipes.entropy.EntropyRecipe$Input"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EntropyMode, $EntropyMode$$Type} from "appeng.recipes.entropy.EntropyMode"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$EntropyRecipe$Output} from "appeng.recipes.entropy.EntropyRecipe$Output"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EntropyRecipe implements $Recipe$$Interface<($RecipeInput)> {
/**
 * 
 * @deprecated
 */
static readonly "TYPE_ID": $ResourceLocation
static readonly "CODEC": $MapCodec<($EntropyRecipe)>
/**
 * 
 * @deprecated
 */
static readonly "TYPE": $RecipeType<($EntropyRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe)>

public "getDrops"(): $List<($ItemStack)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getOutputBlockState"(arg0: $BlockState$$Type): $BlockState
public "getOutputFluidState"(arg0: $FluidState$$Type): $FluidState
public "getInput"(): $EntropyRecipe$Input
public "getOutput"(): $EntropyRecipe$Output
public "getMode"(): $EntropyMode
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $EntropyMode$$Type, arg1: $BlockState$$Type, arg2: $FluidState$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
public "isSpecial"(): boolean
get "drops"(): $List<($ItemStack)>
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "input"(): $EntropyRecipe$Input
get "output"(): $EntropyRecipe$Output
get "mode"(): $EntropyMode
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
export type $EntropyRecipe$$Type = ($EntropyRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$$Original = $EntropyRecipe;}
declare module "appeng.recipes.entropy.EntropyRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$EntropyRecipe} from "appeng.recipes.entropy.EntropyRecipe"

export class $EntropyRecipeSerializer implements $RecipeSerializer$$Interface<($EntropyRecipe)> {
static readonly "INSTANCE": $EntropyRecipeSerializer

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe)>
public "codec"(): $MapCodec<($EntropyRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipeSerializer$$Type = ($EntropyRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipeSerializer$$Original = $EntropyRecipeSerializer;}
declare module "appeng.recipes.entropy.EntropyRecipe$FluidInput" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Map, $Map$$Type} from "java.util.Map"
import {$PropertyValueMatcher, $PropertyValueMatcher$$Type} from "appeng.recipes.entropy.PropertyValueMatcher"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $EntropyRecipe$FluidInput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$FluidInput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$FluidInput)>

constructor(fluid: $Fluid$$Type, properties: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>)

public "fluid"(): $Fluid
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $Map<(StringJS), ($PropertyValueMatcher)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$FluidInput$$Type = ({"properties"?: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>, "fluid"?: $Fluid$$Type}) | ([properties?: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>, fluid?: $Fluid$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$FluidInput$$Original = $EntropyRecipe$FluidInput;}
declare module "appeng.recipes.entropy.PropertyValueMatcher" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export interface $PropertyValueMatcher$$Interface {
}

export class $PropertyValueMatcher implements $PropertyValueMatcher$$Interface {
static readonly "CODEC": $Codec<($PropertyValueMatcher)>
static readonly "MAP_CODEC": $Codec<($Map<(StringJS), ($PropertyValueMatcher)>)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($PropertyValueMatcher)>

 "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
 "matches"<T extends $Comparable<(object)>>(arg0: $Property$$Type<(T)>, arg1: $StateHolder$$Type<(never), (never)>): boolean
 "validate"(arg0: $Property$$Type<($Comparable$$Type<(never)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyValueMatcher$$Type = ($PropertyValueMatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PropertyValueMatcher$$Original = $PropertyValueMatcher;}
declare module "appeng.recipes.entropy.EntropyRecipe$BlockOutput" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Record} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EntropyRecipe$BlockOutput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$BlockOutput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$BlockOutput)>

constructor(block: $Block$$Type, keepProperties: boolean, properties: $Map$$Type<(StringJS), (StringJS)>)

public "keepProperties"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "apply"(arg0: $BlockState$$Type): $BlockState
public "properties"(): $Map<(StringJS), (StringJS)>
public "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$BlockOutput$$Type = ({"properties"?: $Map$$Type<(StringJS), (StringJS)>, "block"?: $Block$$Type, "keepProperties"?: boolean}) | ([properties?: $Map$$Type<(StringJS), (StringJS)>, block?: $Block$$Type, keepProperties?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$BlockOutput$$Original = $EntropyRecipe$BlockOutput;}
