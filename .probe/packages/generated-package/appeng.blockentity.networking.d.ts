declare module "appeng.blockentity.networking.ControllerBlockEntity" {
import {$AECableType} from "appeng.api.util.AECableType"
import {$AENetworkedPoweredBlockEntity} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ControllerBlockEntity extends $AENetworkedPoweredBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "onReady"(): void
public "getInternalInventory"(): $InternalInventory
public "updateState"(): void
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlockEntity$$Type = ($ControllerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControllerBlockEntity$$Original = $ControllerBlockEntity;}
declare module "appeng.blockentity.networking.EnergyAcceptorBlockEntity" {
import {$AECableType} from "appeng.api.util.AECableType"
import {$AENetworkedPoweredBlockEntity} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergyAcceptorBlockEntity extends $AENetworkedPoweredBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getInternalInventory"(): $InternalInventory
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyAcceptorBlockEntity$$Type = ($EnergyAcceptorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyAcceptorBlockEntity$$Original = $EnergyAcceptorBlockEntity;}
declare module "appeng.blockentity.networking.WirelessAccessPointBlockEntity" {
import {$IPowerChannelState$$Interface} from "appeng.api.implementations.IPowerChannelState"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$IWirelessAccessPoint$$Interface} from "appeng.api.implementations.blockentities.IWirelessAccessPoint"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$AENetworkedInvBlockEntity} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType} from "appeng.api.util.AECableType"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IGrid} from "appeng.api.networking.IGrid"
import {$Set} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WirelessAccessPointBlockEntity extends $AENetworkedInvBlockEntity implements $IWirelessAccessPoint$$Interface, $IPowerChannelState$$Interface {
static readonly "POWERED_FLAG": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "CHANNEL_FLAG": integer

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isPowered"(): boolean
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getGrid"(): $IGrid
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "saveChanges"(): void
public "getClientFlags"(): integer
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "onReady"(): void
public "getInternalInventory"(): $InternalInventory
public "getRange"(): double
public "getLocation"(): $DimensionalBlockPos
public "isActive"(): boolean
public "getActionableNode"(): $IGridNode
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "powered"(): boolean
get "grid"(): $IGrid
get "clientFlags"(): integer
get "internalInventory"(): $InternalInventory
get "range"(): double
get "location"(): $DimensionalBlockPos
get "active"(): boolean
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessAccessPointBlockEntity$$Type = ($WirelessAccessPointBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WirelessAccessPointBlockEntity$$Original = $WirelessAccessPointBlockEntity;}
declare module "appeng.blockentity.networking.CrystalResonanceGeneratorBlockEntity" {
import {$AECableType} from "appeng.api.util.AECableType"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Set} from "java.util.Set"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CrystalResonanceGeneratorBlockEntity extends $AENetworkedBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isSuppressed"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "suppressed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalResonanceGeneratorBlockEntity$$Type = ($CrystalResonanceGeneratorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrystalResonanceGeneratorBlockEntity$$Original = $CrystalResonanceGeneratorBlockEntity;}
declare module "appeng.blockentity.networking.EnergyCellBlockEntity" {
import {$TickRateModulation} from "appeng.api.networking.ticking.TickRateModulation"
import {$DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$IGridTickable$$Interface} from "appeng.api.networking.ticking.IGridTickable"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$IAEPowerStorage$$Interface} from "appeng.api.networking.energy.IAEPowerStorage"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AECableType} from "appeng.api.util.AECableType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AccessRestriction} from "appeng.api.config.AccessRestriction"
import {$TickingRequest} from "appeng.api.networking.ticking.TickingRequest"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergyCellBlockEntity extends $AENetworkedBlockEntity implements $IAEPowerStorage$$Interface, $IGridTickable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "isAEPublicPowerStorage"(): boolean
public "getAECurrentPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "getAEMaxPower"(): double
public "getPowerFlow"(): $AccessRestriction
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public static "getStorageLevelFromFillFactor"(arg0: double): integer
public "getPriority"(): integer
public static "empty"(): $IEnergySource
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "AEPublicPowerStorage"(): boolean
get "AECurrentPower"(): double
get "AEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
get "priority"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCellBlockEntity$$Type = ($EnergyCellBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyCellBlockEntity$$Original = $EnergyCellBlockEntity;}
declare module "appeng.blockentity.networking.CableBusBlockEntity" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Reference2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IFacadeContainer} from "appeng.api.parts.IFacadeContainer"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$CableBusContainer} from "appeng.parts.CableBusContainer"
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$AEMultiBlockEntity$$Interface} from "appeng.helpers.AEMultiBlockEntity"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SelectedPart} from "appeng.api.parts.SelectedPart"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $CableBusBlockEntity extends $AEBaseBlockEntity implements $AEMultiBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "hasRedstone"(): boolean
public "clearContent"(): void
public "notifyNeighbors"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "clearRemoved"(): void
public "onChunkUnloaded"(): void
public "clearContainer"(): void
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void
public "markForSave"(): void
public "markForUpdate"(): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
public "isInWorld"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getPart"(arg0: $Direction$$Type): $IPart
public "partChanged"(): void
public "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
public "getFacadeContainer"(): $IFacadeContainer
public "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
public "removePartFromSide"(arg0: $Direction$$Type): void
public "removePart"(arg0: $IPart$$Type): boolean
public "notifyNeighborNow"(arg0: $Direction$$Type): void
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "disassembleWithWrench"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockHitResult$$Type, arg3: $ItemStack$$Type): $InteractionResult
public "onReady"(): void
public "getCableBus"(): $CableBusContainer
public "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "cleanup"(): void
public "getColor"(): $AEColor
public "isBlocked"(arg0: $Direction$$Type): boolean
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "setRemoved"(): void
public "getModelData"(): $ModelData
public "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
public static "tryClear"(arg0: any): void
get "inWorld"(): boolean
get "facadeContainer"(): $IFacadeContainer
get "cableBus"(): $CableBusContainer
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "color"(): $AEColor
get "removed"(): void
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusBlockEntity$$Type = ($CableBusBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CableBusBlockEntity$$Original = $CableBusBlockEntity;}
declare module "appeng.blockentity.networking.CreativeEnergyCellBlockEntity" {
import {$AECableType} from "appeng.api.util.AECableType"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$IAEPowerStorage$$Interface} from "appeng.api.networking.energy.IAEPowerStorage"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AccessRestriction} from "appeng.api.config.AccessRestriction"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreativeEnergyCellBlockEntity extends $AENetworkedBlockEntity implements $IAEPowerStorage$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "isAEPublicPowerStorage"(): boolean
public "getAECurrentPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
public "getAEMaxPower"(): double
public "getPowerFlow"(): $AccessRestriction
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getPriority"(): integer
public static "empty"(): $IEnergySource
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "AEPublicPowerStorage"(): boolean
get "AECurrentPower"(): double
get "AEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
get "priority"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeEnergyCellBlockEntity$$Type = ($CreativeEnergyCellBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeEnergyCellBlockEntity$$Original = $CreativeEnergyCellBlockEntity;}
