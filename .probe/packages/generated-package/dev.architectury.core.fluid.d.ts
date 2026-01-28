declare module "dev.architectury.core.fluid.ArchitecturyFlowingFluid$Flowing" {
import {$ArchitecturyFlowingFluid} from "dev.architectury.core.fluid.ArchitecturyFlowingFluid"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ArchitecturyFluidAttributes$$Type} from "dev.architectury.core.fluid.ArchitecturyFluidAttributes"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $ArchitecturyFlowingFluid$Flowing extends $ArchitecturyFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(attributes: $ArchitecturyFluidAttributes$$Type)

public "isSource"(state: $FluidState$$Type): boolean
public "getAmount"(state: $FluidState$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Flowing$$Type = ($ArchitecturyFlowingFluid$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArchitecturyFlowingFluid$Flowing$$Original = $ArchitecturyFlowingFluid$Flowing;}
declare module "dev.architectury.core.fluid.ArchitecturyFluidAttributes" {
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Component} from "net.minecraft.network.chat.Component"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item} from "net.minecraft.world.item.Item"
import {$FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LiquidBlock} from "net.minecraft.world.level.block.LiquidBlock"

export interface $ArchitecturyFluidAttributes$$Interface {
get "sourceFluid"(): $Fluid
get "flowingFluid"(): $Fluid
get "density"(): integer
get "temperature"(): integer
get "viscosity"(): integer
get "rarity"(): $Rarity
get "lighterThanAir"(): boolean
get "explosionResistance"(): float
get "tickDelay"(): integer
get "slopeFindDistance"(): integer
get "dropOff"(): integer
get "overlayTexture"(): $ResourceLocation
get "translationKey"(): StringJS
get "emptySound"(): $SoundEvent
get "fillSound"(): $SoundEvent
get "flowingTexture"(): $ResourceLocation
get "luminosity"(): integer
get "bucketItem"(): $Item
get "sourceTexture"(): $ResourceLocation
get "block"(): $LiquidBlock
get "name"(): $Component
get "color"(): integer
}

export class $ArchitecturyFluidAttributes implements $ArchitecturyFluidAttributes$$Interface {
 "getSourceFluid"(): $Fluid
 "getFlowingFluid"(): $Fluid
 "canConvertToSource"(): boolean
 "getDensity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getDensity"(stack: $FluidStack$$Type): integer
 "getDensity"(): integer
 "getTemperature"(stack: $FluidStack$$Type): integer
 "getTemperature"(): integer
 "getTemperature"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getViscosity"(): integer
 "getViscosity"(stack: $FluidStack$$Type): integer
 "getViscosity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getRarity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $Rarity
 "getRarity"(stack: $FluidStack$$Type): $Rarity
 "getRarity"(): $Rarity
 "isLighterThanAir"(): boolean
 "isLighterThanAir"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isLighterThanAir"(stack: $FluidStack$$Type): boolean
 "getExplosionResistance"(): float
 "getTickDelay"(arg0: $LevelReader$$Type): integer
 "getTickDelay"(): integer
 "getSlopeFindDistance"(): integer
 "getSlopeFindDistance"(arg0: $LevelReader$$Type): integer
 "getDropOff"(): integer
 "getDropOff"(arg0: $LevelReader$$Type): integer
 "getOverlayTexture"(): $ResourceLocation
 "getOverlayTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getOverlayTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
 "getTranslationKey"(): StringJS
 "getTranslationKey"(arg0: $FluidStack$$Type): StringJS
 "getEmptySound"(stack: $FluidStack$$Type): $SoundEvent
 "getEmptySound"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $SoundEvent
 "getEmptySound"(): $SoundEvent
 "getFillSound"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $SoundEvent
 "getFillSound"(): $SoundEvent
 "getFillSound"(stack: $FluidStack$$Type): $SoundEvent
 "getFlowingTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getFlowingTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getFlowingTexture"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getLuminosity"(): integer
 "getLuminosity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getLuminosity"(stack: $FluidStack$$Type): integer
 "getBucketItem"(): $Item
/**
 * 
 * @deprecated
 */
 "getSourceTexture"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getSourceTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
 "getSourceTexture"(): $ResourceLocation
 "getSourceTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getBlock"(): $LiquidBlock
 "getName"(stack: $FluidStack$$Type): $Component
 "getName"(): $Component
/**
 * 
 * @deprecated
 */
 "getColor"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getColor"(): integer
 "getColor"(stack: $FluidStack$$Type): integer
 "getColor"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFluidAttributes$$Type = ($ArchitecturyFluidAttributes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArchitecturyFluidAttributes$$Original = $ArchitecturyFluidAttributes;}
declare module "dev.architectury.core.fluid.ArchitecturyFluidAttributesForge" {
import {$Lazy} from "net.neoforged.neoforge.common.util.Lazy"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"

export class $ArchitecturyFluidAttributesForge extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFluidAttributesForge$$Type = ($ArchitecturyFluidAttributesForge);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArchitecturyFluidAttributesForge$$Original = $ArchitecturyFluidAttributesForge;}
declare module "dev.architectury.core.fluid.ArchitecturyFlowingFluid$Source" {
import {$ArchitecturyFlowingFluid} from "dev.architectury.core.fluid.ArchitecturyFlowingFluid"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ArchitecturyFluidAttributes$$Type} from "dev.architectury.core.fluid.ArchitecturyFluidAttributes"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $ArchitecturyFlowingFluid$Source extends $ArchitecturyFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(attributes: $ArchitecturyFluidAttributes$$Type)

public "isSource"(state: $FluidState$$Type): boolean
public "getAmount"(state: $FluidState$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Source$$Type = ($ArchitecturyFlowingFluid$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArchitecturyFlowingFluid$Source$$Original = $ArchitecturyFlowingFluid$Source;}
declare module "dev.architectury.core.fluid.ArchitecturyFlowingFluid" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Optional} from "java.util.Optional"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $ArchitecturyFlowingFluid extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

public "getTickDelay"(level: $LevelReader$$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "isSame"(fluid: $Fluid$$Type): boolean
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
public "getBucket"(): $Item
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
get "pickupSound"(): $Optional<($SoundEvent)>
get "flowing"(): $Fluid
get "source"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$$Type = ($ArchitecturyFlowingFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArchitecturyFlowingFluid$$Original = $ArchitecturyFlowingFluid;}
