declare module "com.hrznstudio.titanium.fluid.TitaniumFluidInstance" {
import {$FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$DeferredRegistryHelper$$Type} from "com.hrznstudio.titanium.module.DeferredRegistryHelper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$IClientFluidTypeExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions"
import {$Item} from "net.minecraft.world.item.Item"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"

export class $TitaniumFluidInstance {
constructor(arg0: $DeferredRegistryHelper$$Type, arg1: StringJS, arg2: $FluidType$Properties$$Type, arg3: $IClientFluidTypeExtensions$$Type, arg4: $TitaniumTab$$Type)

public "getSourceFluid"(): $DeferredHolder<($Fluid), ($Fluid)>
public "getFlowingFluid"(): $DeferredHolder<($Fluid), ($Fluid)>
public "getBucketFluid"(): $DeferredHolder<($Item), ($Item)>
public "getBlockFluid"(): $DeferredHolder<($Block), ($Block)>
public "getFluid"(): StringJS
public "getFluidType"(): $DeferredHolder<($FluidType), ($FluidType)>
get "sourceFluid"(): $DeferredHolder<($Fluid), ($Fluid)>
get "flowingFluid"(): $DeferredHolder<($Fluid), ($Fluid)>
get "bucketFluid"(): $DeferredHolder<($Item), ($Item)>
get "blockFluid"(): $DeferredHolder<($Block), ($Block)>
get "fluid"(): StringJS
get "fluidType"(): $DeferredHolder<($FluidType), ($FluidType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TitaniumFluidInstance$$Type = ($TitaniumFluidInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TitaniumFluidInstance$$Original = $TitaniumFluidInstance;}
declare module "com.hrznstudio.titanium.fluid.TitaniumFluid" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$FlowingFluid} from "net.minecraft.world.level.material.FlowingFluid"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$TitaniumFluidInstance$$Type} from "com.hrznstudio.titanium.fluid.TitaniumFluidInstance"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $TitaniumFluid extends $FlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $TitaniumFluidInstance$$Type)

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "isSource"(arg0: $FluidState$$Type): boolean
public "getTickDelay"(arg0: $LevelReader$$Type): integer
public "isSame"(arg0: $Fluid$$Type): boolean
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
public "getBucket"(): $Item
public "getFluidType"(): $FluidType
public "getAmount"(arg0: $FluidState$$Type): integer
public "asHolder"(): $Holder
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
export type $TitaniumFluid$$Type = ($TitaniumFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TitaniumFluid$$Original = $TitaniumFluid;}
declare module "com.hrznstudio.titanium.fluid.TitaniumFluid$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$TitaniumFluid} from "com.hrznstudio.titanium.fluid.TitaniumFluid"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$TitaniumFluidInstance$$Type} from "com.hrznstudio.titanium.fluid.TitaniumFluidInstance"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Holder} from "net.minecraft.core.Holder"

export class $TitaniumFluid$Flowing extends $TitaniumFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $TitaniumFluidInstance$$Type)

public "isSource"(arg0: $FluidState$$Type): boolean
public "getAmount"(arg0: $FluidState$$Type): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TitaniumFluid$Flowing$$Type = ($TitaniumFluid$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TitaniumFluid$Flowing$$Original = $TitaniumFluid$Flowing;}
declare module "com.hrznstudio.titanium.fluid.TitaniumFluid$Source" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$TitaniumFluid} from "com.hrznstudio.titanium.fluid.TitaniumFluid"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$TitaniumFluidInstance$$Type} from "com.hrznstudio.titanium.fluid.TitaniumFluidInstance"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Holder} from "net.minecraft.core.Holder"

export class $TitaniumFluid$Source extends $TitaniumFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $TitaniumFluidInstance$$Type)

public "isSource"(arg0: $FluidState$$Type): boolean
public "getAmount"(arg0: $FluidState$$Type): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TitaniumFluid$Source$$Type = ($TitaniumFluid$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TitaniumFluid$Source$$Original = $TitaniumFluid$Source;}
