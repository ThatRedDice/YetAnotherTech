declare module "appeng.me.cluster.implementations.SpatialPylonCluster$Axis" {
import {$Enum} from "java.lang.Enum"

export class $SpatialPylonCluster$Axis extends $Enum<($SpatialPylonCluster$Axis)> {
static readonly "UNFORMED": $SpatialPylonCluster$Axis
static readonly "X": $SpatialPylonCluster$Axis
static readonly "Y": $SpatialPylonCluster$Axis
static readonly "Z": $SpatialPylonCluster$Axis

public static "values"(): ($SpatialPylonCluster$Axis)[]
public static "valueOf"(arg0: StringJS): $SpatialPylonCluster$Axis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonCluster$Axis$$Type = (("x") | ("y") | ("z") | ("unformed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialPylonCluster$Axis$$Original = $SpatialPylonCluster$Axis;}
declare module "appeng.me.cluster.implementations.CraftingCPUCluster" {
import {$Iterator} from "java.util.Iterator"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$CpuSelectionMode} from "appeng.api.config.CpuSelectionMode"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Level} from "net.minecraft.world.level.Level"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$CraftingJobStatus} from "appeng.api.networking.crafting.CraftingJobStatus"
import {$CraftingBlockEntity} from "appeng.blockentity.crafting.CraftingBlockEntity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ICraftingSubmitResult} from "appeng.api.networking.crafting.ICraftingSubmitResult"
import {$CraftingCpuLogic} from "appeng.crafting.execution.CraftingCpuLogic"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IAECluster$$Interface} from "appeng.me.cluster.IAECluster"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ICraftingCPU$$Interface} from "appeng.api.networking.crafting.ICraftingCPU"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$ICraftingPlan$$Type} from "appeng.api.networking.crafting.ICraftingPlan"

export class $CraftingCPUCluster implements $IAECluster$$Interface, $ICraftingCPU$$Interface {
readonly "craftingLogic": $CraftingCpuLogic

constructor(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type)

public "updateName"(): void
public "getConfigManager"(): $IConfigManager
public "markDirty"(): void
public "getSrc"(): $IActionSource
public "getBlockEntities"(): $Iterator<($CraftingBlockEntity)>
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "updateOutput"(arg0: $GenericStack$$Type): void
public "submitJob"(arg0: $IGrid$$Type, arg1: $ICraftingPlan$$Type, arg2: $IActionSource$$Type, arg3: $ICraftingRequester$$Type): $ICraftingSubmitResult
public "getBoundsMax"(): $BlockPos
public "getBoundsMin"(): $BlockPos
public "isPreferredFor"(arg0: $IActionSource$$Type): boolean
public "getCoProcessors"(): integer
public "isBusy"(): boolean
public "getAvailableStorage"(): long
public "canBeAutoSelectedFor"(arg0: $IActionSource$$Type): boolean
public "getJobStatus"(): $CraftingJobStatus
public "cancelJob"(): void
public "getSelectionMode"(): $CpuSelectionMode
public "getGrid"(): $IGrid
public "breakCluster"(): void
public "updateStatus"(arg0: boolean): void
public "getLevel"(): $Level
public "getName"(): $Component
public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
public "isDestroyed"(): boolean
public "destroy"(): void
public "isActive"(): boolean
public "getNode"(): $IGridNode
get "configManager"(): $IConfigManager
get "src"(): $IActionSource
get "blockEntities"(): $Iterator<($CraftingBlockEntity)>
get "boundsMax"(): $BlockPos
get "boundsMin"(): $BlockPos
get "coProcessors"(): integer
get "busy"(): boolean
get "availableStorage"(): long
get "jobStatus"(): $CraftingJobStatus
get "selectionMode"(): $CpuSelectionMode
get "grid"(): $IGrid
get "level"(): $Level
get "name"(): $Component
get "destroyed"(): boolean
get "active"(): boolean
get "node"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingCPUCluster$$Type = ($CraftingCPUCluster);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingCPUCluster$$Original = $CraftingCPUCluster;}
declare module "appeng.me.cluster.implementations.QuantumCluster" {
import {$Iterator} from "java.util.Iterator"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$QuantumBridgeBlockEntity, $QuantumBridgeBlockEntity$$Type} from "appeng.blockentity.qnb.QuantumBridgeBlockEntity"
import {$IActionHost$$Interface} from "appeng.api.networking.security.IActionHost"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IAECluster$$Interface} from "appeng.me.cluster.IAECluster"
import {$LevelEvent$Unload$$Type} from "net.neoforged.neoforge.event.level.LevelEvent$Unload"

export class $QuantumCluster implements $IAECluster$$Interface, $IActionHost$$Interface {
constructor(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type)

public "getBlockEntities"(): $Iterator<($QuantumBridgeBlockEntity)>
public "getBoundsMax"(): $BlockPos
public "getBoundsMin"(): $BlockPos
public "getActionableNode"(): $IGridNode
public "setUpdateStatus"(arg0: boolean): void
public "isCorner"(arg0: $QuantumBridgeBlockEntity$$Type): boolean
public "updateStatus"(arg0: boolean): void
public "onUnload"(arg0: $LevelEvent$Unload$$Type): void
public "toString"(): StringJS
public "isDestroyed"(): boolean
public "destroy"(): void
public "getCenter"(): $QuantumBridgeBlockEntity
get "blockEntities"(): $Iterator<($QuantumBridgeBlockEntity)>
get "boundsMax"(): $BlockPos
get "boundsMin"(): $BlockPos
get "actionableNode"(): $IGridNode
get "destroyed"(): boolean
get "center"(): $QuantumBridgeBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumCluster$$Type = ($QuantumCluster);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuantumCluster$$Original = $QuantumCluster;}
declare module "appeng.me.cluster.implementations.SpatialPylonCluster" {
import {$Iterator} from "java.util.Iterator"
import {$SpatialPylonBlockEntity} from "appeng.blockentity.spatial.SpatialPylonBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpatialPylonCluster$Axis} from "appeng.me.cluster.implementations.SpatialPylonCluster$Axis"
import {$IAECluster$$Interface} from "appeng.me.cluster.IAECluster"

export class $SpatialPylonCluster implements $IAECluster$$Interface {
constructor(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type)

public "getBlockEntities"(): $Iterator<($SpatialPylonBlockEntity)>
public "getBoundsMax"(): $BlockPos
public "getBoundsMin"(): $BlockPos
public "getCurrentAxis"(): $SpatialPylonCluster$Axis
public "setValid"(arg0: boolean): void
public "updateStatus"(arg0: boolean): void
public "setLevel"(): $ServerLevel
public "size"(): integer
public "isDestroyed"(): boolean
public "destroy"(): void
public "isValid"(): boolean
get "blockEntities"(): $Iterator<($SpatialPylonBlockEntity)>
get "boundsMax"(): $BlockPos
get "boundsMin"(): $BlockPos
get "currentAxis"(): $SpatialPylonCluster$Axis
set "valid"(value: boolean)
get "level"(): $ServerLevel
get "destroyed"(): boolean
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonCluster$$Type = ($SpatialPylonCluster);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialPylonCluster$$Original = $SpatialPylonCluster;}
