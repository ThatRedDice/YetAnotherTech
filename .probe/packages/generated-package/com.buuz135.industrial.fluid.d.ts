declare module "com.buuz135.industrial.fluid.OreFluid$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$OreFluidInstance$$Type} from "com.buuz135.industrial.fluid.OreFluidInstance"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$OreFluid} from "com.buuz135.industrial.fluid.OreFluid"

export class $OreFluid$Flowing extends $OreFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $OreFluidInstance$$Type)

public "isSource"(arg0: $FluidState$$Type): boolean
public "getAmount"(arg0: $FluidState$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreFluid$Flowing$$Type = ($OreFluid$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OreFluid$Flowing$$Original = $OreFluid$Flowing;}
declare module "com.buuz135.industrial.fluid.OreFluidInstance" {
import {$FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$DeferredRegistryHelper$$Type} from "com.hrznstudio.titanium.module.DeferredRegistryHelper"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IClientFluidTypeExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"

export class $OreFluidInstance {
constructor(arg0: $DeferredRegistryHelper$$Type, arg1: StringJS, arg2: $FluidType$Properties$$Type, arg3: $IClientFluidTypeExtensions$$Type, arg4: $TitaniumTab$$Type)

public "getSourceFluid"(): $Fluid
public "getFlowingFluid"(): $Fluid
public "getBucketFluid"(): $Item
public "getBlockFluid"(): $Block
public "getFluid"(): StringJS
public "getFluidType"(): $DeferredHolder<($FluidType), ($FluidType)>
get "sourceFluid"(): $Fluid
get "flowingFluid"(): $Fluid
get "bucketFluid"(): $Item
get "blockFluid"(): $Block
get "fluid"(): StringJS
get "fluidType"(): $DeferredHolder<($FluidType), ($FluidType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreFluidInstance$$Type = ($OreFluidInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OreFluidInstance$$Original = $OreFluidInstance;}
declare module "com.buuz135.industrial.fluid.OreFluid" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$FlowingFluid} from "net.minecraft.world.level.material.FlowingFluid"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$OreFluidInstance$$Type} from "com.buuz135.industrial.fluid.OreFluidInstance"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"

export class $OreFluid extends $FlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $OreFluidInstance$$Type)

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "isSource"(arg0: $FluidState$$Type): boolean
public "getTickDelay"(arg0: $LevelReader$$Type): integer
public "isSame"(arg0: $Fluid$$Type): boolean
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
public "getBucket"(): $Item
public "getFluidType"(): $FluidType
public "getAmount"(arg0: $FluidState$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
get "flowing"(): $Fluid
get "source"(): $Fluid
get "bucket"(): $Item
get "fluidType"(): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreFluid$$Type = ($OreFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OreFluid$$Original = $OreFluid;}
declare module "com.buuz135.industrial.fluid.OreFluid$Source" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$OreFluidInstance$$Type} from "com.buuz135.industrial.fluid.OreFluidInstance"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$OreFluid} from "com.buuz135.industrial.fluid.OreFluid"

export class $OreFluid$Source extends $OreFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $OreFluidInstance$$Type)

public "isSource"(arg0: $FluidState$$Type): boolean
public "getAmount"(arg0: $FluidState$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreFluid$Source$$Type = ($OreFluid$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OreFluid$Source$$Original = $OreFluid$Source;}
