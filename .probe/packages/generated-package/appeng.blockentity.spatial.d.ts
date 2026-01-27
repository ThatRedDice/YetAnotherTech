declare module "appeng.blockentity.spatial.SpatialPylonBlockEntity$ClientState" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$SpatialPylonBlockEntity$AxisPosition, $SpatialPylonBlockEntity$AxisPosition$$Type} from "appeng.blockentity.spatial.SpatialPylonBlockEntity$AxisPosition"
import {$Record} from "java.lang.Record"

export class $SpatialPylonBlockEntity$ClientState extends $Record {
static readonly "DEFAULT": $SpatialPylonBlockEntity$ClientState

constructor(powered: boolean, online: boolean, axisPosition: $SpatialPylonBlockEntity$AxisPosition$$Type, axis: $Direction$Axis$$Type)

public "writeToStream"(arg0: $FriendlyByteBuf$$Type): void
public "online"(): boolean
public static "readFromStream"(arg0: $FriendlyByteBuf$$Type): $SpatialPylonBlockEntity$ClientState
public static "readFromNbt"(arg0: $CompoundTag$$Type): $SpatialPylonBlockEntity$ClientState
public "writeToNbt"(arg0: $CompoundTag$$Type): void
public "axisPosition"(): $SpatialPylonBlockEntity$AxisPosition
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "axis"(): $Direction$Axis
public "powered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$ClientState$$Type = ({"axis"?: $Direction$Axis$$Type, "axisPosition"?: $SpatialPylonBlockEntity$AxisPosition$$Type, "online"?: boolean, "powered"?: boolean}) | ([axis?: $Direction$Axis$$Type, axisPosition?: $SpatialPylonBlockEntity$AxisPosition$$Type, online?: boolean, powered?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialPylonBlockEntity$ClientState$$Original = $SpatialPylonBlockEntity$ClientState;}
declare module "appeng.blockentity.spatial.SpatialPylonBlockEntity" {
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction} from "net.minecraft.core.Direction"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$IAEMultiBlock$$Interface} from "appeng.me.cluster.IAEMultiBlock"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set} from "java.util.Set"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$SpatialPylonBlockEntity$ClientState} from "appeng.blockentity.spatial.SpatialPylonBlockEntity$ClientState"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SpatialPylonCluster, $SpatialPylonCluster$$Type} from "appeng.me.cluster.implementations.SpatialPylonCluster"

export class $SpatialPylonBlockEntity extends $AENetworkedBlockEntity implements $IAEMultiBlock$$Interface<($SpatialPylonCluster)> {
static readonly "STATE": $ModelProperty<($SpatialPylonBlockEntity$ClientState)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "updateStatus"(arg0: $SpatialPylonCluster$$Type): void
public "getClientState"(): $SpatialPylonBlockEntity$ClientState
public "onChunkUnloaded"(): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getCluster"(): $SpatialPylonCluster
public "onReady"(): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "recalculateDisplay"(): void
public "isValid"(): boolean
public "disconnect"(arg0: boolean): void
public "setRemoved"(): void
public "neighborChanged"(arg0: $BlockPos$$Type): void
public "getModelData"(): $ModelData
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "clientState"(): $SpatialPylonBlockEntity$ClientState
get "cluster"(): $SpatialPylonCluster
get "valid"(): boolean
get "removed"(): void
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$$Type = ($SpatialPylonBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialPylonBlockEntity$$Original = $SpatialPylonBlockEntity;}
declare module "appeng.blockentity.spatial.SpatialAnchorBlockEntity" {
import {$TickRateModulation} from "appeng.api.networking.ticking.TickRateModulation"
import {$IGridTickable$$Interface} from "appeng.api.networking.ticking.IGridTickable"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$GridChunkEvent$GridChunkRemoved$$Type} from "appeng.api.networking.events.statistics.GridChunkEvent$GridChunkRemoved"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AECableType} from "appeng.api.util.AECableType"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$GridChunkEvent$GridChunkAdded$$Type} from "appeng.api.networking.events.statistics.GridChunkEvent$GridChunkAdded"
import {$IOverlayDataSource$$Interface} from "appeng.client.render.overlay.IOverlayDataSource"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$Set} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickingRequest} from "appeng.api.networking.ticking.TickingRequest"

export class $SpatialAnchorBlockEntity extends $AENetworkedBlockEntity implements $IGridTickable$$Interface, $IConfigurableObject$$Interface, $IOverlayDataSource$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getOverlayColor"(): integer
public "getConfigManager"(): $IConfigManager
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getOverlayChunks"(): $Set<($ChunkPos)>
public "getOverlayBlockEntity"(): $BlockEntity
public "getOverlaySourceLocation"(): $DimensionalBlockPos
public "chunkAdded"(arg0: $GridChunkEvent$GridChunkAdded$$Type): void
public "chunkRemoved"(arg0: $GridChunkEvent$GridChunkRemoved$$Type): void
public "getLoadedChunks"(): $Set<($ChunkPos)>
public "countLoadedChunks"(): integer
public "registerChunk"(arg0: $ChunkPos$$Type): void
public "isActive"(): boolean
public "setRemoved"(): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "overlayColor"(): integer
get "configManager"(): $IConfigManager
get "overlayChunks"(): $Set<($ChunkPos)>
get "overlayBlockEntity"(): $BlockEntity
get "overlaySourceLocation"(): $DimensionalBlockPos
get "loadedChunks"(): $Set<($ChunkPos)>
get "active"(): boolean
get "removed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialAnchorBlockEntity$$Type = ($SpatialAnchorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialAnchorBlockEntity$$Original = $SpatialAnchorBlockEntity;}
declare module "appeng.blockentity.spatial.SpatialIOPortBlockEntity" {
import {$AECableType} from "appeng.api.util.AECableType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AENetworkedInvBlockEntity} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpatialIOPortBlockEntity extends $AENetworkedInvBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "updateRedstoneState"(): void
public "getRedstoneState"(): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInternalInventory"(): $InternalInventory
public "isActive"(): boolean
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "redstoneState"(): boolean
get "internalInventory"(): $InternalInventory
get "active"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialIOPortBlockEntity$$Type = ($SpatialIOPortBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialIOPortBlockEntity$$Original = $SpatialIOPortBlockEntity;}
declare module "appeng.blockentity.spatial.SpatialPylonBlockEntity$AxisPosition" {
import {$Enum} from "java.lang.Enum"

export class $SpatialPylonBlockEntity$AxisPosition extends $Enum<($SpatialPylonBlockEntity$AxisPosition)> {
static readonly "START": $SpatialPylonBlockEntity$AxisPosition
static readonly "END": $SpatialPylonBlockEntity$AxisPosition
static readonly "NONE": $SpatialPylonBlockEntity$AxisPosition
static readonly "MIDDLE": $SpatialPylonBlockEntity$AxisPosition

public static "values"(): ($SpatialPylonBlockEntity$AxisPosition)[]
public static "valueOf"(arg0: StringJS): $SpatialPylonBlockEntity$AxisPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$AxisPosition$$Type = (("none") | ("start") | ("middle") | ("end"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialPylonBlockEntity$AxisPosition$$Original = $SpatialPylonBlockEntity$AxisPosition;}
