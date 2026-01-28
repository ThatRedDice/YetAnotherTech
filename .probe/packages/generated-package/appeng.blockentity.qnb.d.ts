declare module "appeng.blockentity.qnb.QuantumBridgeBlockEntity" {
import {$QnbFormedState} from "appeng.block.qnb.QnbFormedState"
import {$QuantumCluster, $QuantumCluster$$Type} from "appeng.me.cluster.implementations.QuantumCluster"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$AENetworkedInvBlockEntity} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$IAEMultiBlock$$Interface} from "appeng.me.cluster.IAEMultiBlock"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set} from "java.util.Set"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity$$Interface} from "appeng.blockentity.ServerTickingBlockEntity"
import {$EnumSet} from "java.util.EnumSet"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $QuantumBridgeBlockEntity extends $AENetworkedInvBlockEntity implements $IAEMultiBlock$$Interface<($QuantumCluster)>, $ServerTickingBlockEntity$$Interface {
static readonly "FORMED_STATE": $ModelProperty<($QnbFormedState)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "serverTick"(): void
public "isPowered"(): boolean
public "onChunkUnloaded"(): void
public "getCluster"(): $QuantumCluster
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "onReady"(): void
public "getInternalInventory"(): $InternalInventory
public "getAdjacentQuantumBridges"(): $EnumSet<($Direction)>
public "getCorner"(): byte
public "getQEFrequency"(): long
public static "isValidEntangledSingularity"(arg0: $ItemStack$$Type): boolean
public "hasQES"(): boolean
public "isCorner"(): boolean
public "neighborUpdate"(arg0: $BlockPos$$Type): void
public "breakClusterOnRemove"(): void
public "getExposedInventoryForSide"(arg0: $Direction$$Type): $InternalInventory
public "isFormed"(): boolean
public "updateStatus"(arg0: $QuantumCluster$$Type, arg1: byte, arg2: boolean): void
public static "assignFrequency"(arg0: $ItemStack$$Type): void
public "isValid"(): boolean
public "disconnect"(arg0: boolean): void
public "setRemoved"(): void
public "getModelData"(): $ModelData
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "powered"(): boolean
get "cluster"(): $QuantumCluster
get "internalInventory"(): $InternalInventory
get "adjacentQuantumBridges"(): $EnumSet<($Direction)>
get "corner"(): byte
get "QEFrequency"(): long
get "corner"(): boolean
get "formed"(): boolean
get "valid"(): boolean
get "removed"(): void
get "modelData"(): $ModelData
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumBridgeBlockEntity$$Type = ($QuantumBridgeBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuantumBridgeBlockEntity$$Original = $QuantumBridgeBlockEntity;}
