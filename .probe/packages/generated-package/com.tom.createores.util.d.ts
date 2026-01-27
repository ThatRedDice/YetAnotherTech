declare module "com.tom.createores.util.FluidIngredient" {
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$List} from "java.util.List"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$SizedFluidIngredient, $SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Record} from "java.lang.Record"

export class $FluidIngredient extends $Record {
static readonly "CODEC": $Codec<($FluidIngredient)>

constructor(delegate: $SizedFluidIngredient$$Type)

public static "fromFluidStack"(arg0: $FluidStack$$Type): $FluidIngredient
public "getRequiredAmount"(): integer
public "getMatchingFluidStacks"(): $List<($FluidStack)>
public static "fromFluid"(arg0: $FlowingFluid$$Type, arg1: integer): $FluidIngredient
public "delegate"(): $SizedFluidIngredient
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $FluidStack$$Type): boolean
public static "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: ($FluidIngredient$$Type)?): void
public static "read"(arg0: $RegistryFriendlyByteBuf$$Type): $Optional<($FluidIngredient)>
public static "fromTag"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer): $FluidIngredient
get "requiredAmount"(): integer
get "matchingFluidStacks"(): $List<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredient$$Type = ({"delegate"?: $SizedFluidIngredient$$Type}) | ([delegate?: $SizedFluidIngredient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidIngredient$$Original = $FluidIngredient;}
declare module "com.tom.createores.util.ThreeState" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ThreeState extends $Enum<($ThreeState)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($ThreeState)>
static readonly "NEVER": $ThreeState
static readonly "ALWAYS": $ThreeState
static readonly "DEFAULT": $ThreeState

public static "values"(): ($ThreeState)[]
public static "valueOf"(arg0: StringJS): $ThreeState
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
export type $ThreeState$$Type = (("default") | ("always") | ("never"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThreeState$$Original = $ThreeState;}
declare module "com.tom.createores.util.IOBlockType" {
import {$BlockCapability} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Direction} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $IOBlockType extends $Enum<($IOBlockType)> implements $StringRepresentable$$Interface {
static readonly "FLUID_OUT": $IOBlockType
static readonly "FLUID_IN": $IOBlockType
static readonly "ENERGY_IN": $IOBlockType
static readonly "ENERGY_OUT": $IOBlockType
static readonly "ITEM_OUT": $IOBlockType
static readonly "ITEM_IN": $IOBlockType

public "getCap"(): $BlockCapability<(never), ($Direction)>
public static "values"(): ($IOBlockType)[]
public static "valueOf"(arg0: StringJS): $IOBlockType
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "cap"(): $BlockCapability<(never), ($Direction)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOBlockType$$Type = (("item_in") | ("item_out") | ("fluid_in") | ("fluid_out") | ("energy_in") | ("energy_out"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOBlockType$$Original = $IOBlockType;}
declare module "com.tom.createores.util.DimChunkPos" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $DimChunkPos {
static readonly "CODEC": $Codec<($DimChunkPos)>

constructor(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer)
constructor(arg0: $Level$$Type, arg1: $ChunkPos$$Type)
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type)

public "dimension"(): $ResourceKey<($Level)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "x"(): integer
public "z"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimChunkPos$$Type = ($DimChunkPos);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimChunkPos$$Original = $DimChunkPos;}
declare module "com.tom.createores.util.PlatformMenuProvider" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $PlatformMenuProvider$$Interface extends $MenuProvider$$Interface {
get "displayName"(): $Component
}

export class $PlatformMenuProvider implements $PlatformMenuProvider$$Interface {
 "getDisplayName"(): $Component
 "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
 "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
 "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformMenuProvider$$Type = ($PlatformMenuProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlatformMenuProvider$$Original = $PlatformMenuProvider;}
