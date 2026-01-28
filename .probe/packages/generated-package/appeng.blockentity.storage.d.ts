declare module "appeng.blockentity.storage.SkyChestBlockEntity" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AEBaseInvBlockEntity} from "appeng.blockentity.AEBaseInvBlockEntity"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$ClientTickingBlockEntity$$Interface} from "appeng.blockentity.ClientTickingBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LidBlockEntity$$Interface} from "net.minecraft.world.level.block.entity.LidBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SkyChestBlockEntity extends $AEBaseInvBlockEntity implements $ClientTickingBlockEntity$$Interface, $LidBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($SkyChestBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "recheckOpen"(): void
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "getOpenNess"(arg0: float): float
public "disassembleWithWrench"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockHitResult$$Type, arg3: $ItemStack$$Type): $InteractionResult
public "getInternalInventory"(): $InternalInventory
public "clientTick"(): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyChestBlockEntity$$Type = ($SkyChestBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyChestBlockEntity$$Original = $SkyChestBlockEntity;}
declare module "appeng.blockentity.storage.SkyStoneTankBlockEntity" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IFluidTank} from "net.neoforged.neoforge.fluids.IFluidTank"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SkyStoneTankBlockEntity extends $AEBaseBlockEntity {
static readonly "BUCKET_CAPACITY": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onPlayerUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): boolean
public "getTank"(): $IFluidTank
public "getFluidHandler"(): $IFluidHandler
public static "tryClear"(arg0: any): void
get "tank"(): $IFluidTank
get "fluidHandler"(): $IFluidHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyStoneTankBlockEntity$$Type = ($SkyStoneTankBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyStoneTankBlockEntity$$Original = $SkyStoneTankBlockEntity;}
declare module "appeng.blockentity.storage.MEChestBlockEntity" {
import {$AENetworkedPoweredBlockEntity} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$ILinkStatus} from "appeng.api.storage.ILinkStatus"
import {$KeyTypeSelectionHost$$Interface} from "appeng.api.util.KeyTypeSelectionHost"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$KeyTypeSelection} from "appeng.api.util.KeyTypeSelection"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$IStorageProvider$$Interface} from "appeng.api.storage.IStorageProvider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$IStorageMounts$$Type} from "appeng.api.storage.IStorageMounts"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IMEChest$$Interface} from "appeng.api.implementations.blockentities.IMEChest"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity$$Interface} from "appeng.blockentity.ServerTickingBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ITerminalHost$$Interface} from "appeng.api.storage.ITerminalHost"
import {$IColorableBlockEntity$$Interface} from "appeng.api.implementations.blockentities.IColorableBlockEntity"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IPriorityHost$$Interface} from "appeng.helpers.IPriorityHost"
import {$StorageCell} from "appeng.api.storage.cells.StorageCell"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CellState} from "appeng.api.storage.cells.CellState"

export class $MEChestBlockEntity extends $AENetworkedPoweredBlockEntity implements $IMEChest$$Interface, $ITerminalHost$$Interface, $IPriorityHost$$Interface, $IColorableBlockEntity$$Interface, $ServerTickingBlockEntity$$Interface, $IStorageProvider$$Interface, $KeyTypeSelectionHost$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "openGui"(arg0: $Player$$Type): boolean
public "getConfigManager"(): $IConfigManager
public "serverTick"(): void
public "isPowered"(): boolean
public "getCell"(): $ItemStack
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "mountInventories"(arg0: $IStorageMounts$$Type): void
public "getCellInventory"(arg0: integer): $MEStorage
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getKeyTypeSelection"(): $KeyTypeSelection
public "getLinkStatus"(): $ILinkStatus
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInternalInventory"(): $InternalInventory
public "getCellCount"(): integer
public "getCellStatus"(arg0: integer): $CellState
public "openCellInventoryMenu"(arg0: $Player$$Type): void
public "getMEStorage"(arg0: $Direction$$Type): $MEStorage
public "getCellItem"(arg0: integer): $Item
public "getOriginalCellInventory"(arg0: integer): $StorageCell
public "isCellBlinking"(arg0: integer): boolean
public "setCell"(arg0: $ItemStack$$Type): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getColor"(): $AEColor
public "getInventory"(): $MEStorage
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getCloseHotkey"(): StringJS
public static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public static "empty"(): $IEnergySource
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getUpgrades"(): $IUpgradeInventory
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "configManager"(): $IConfigManager
get "powered"(): boolean
get "cell"(): $ItemStack
get "mainMenuIcon"(): $ItemStack
get "keyTypeSelection"(): $KeyTypeSelection
get "linkStatus"(): $ILinkStatus
get "internalInventory"(): $InternalInventory
get "cellCount"(): integer
set "cell"(value: $ItemStack$$Type)
set "priority"(value: integer)
get "priority"(): integer
get "color"(): $AEColor
get "inventory"(): $MEStorage
get "closeHotkey"(): StringJS
get "upgrades"(): $IUpgradeInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEChestBlockEntity$$Type = ($MEChestBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MEChestBlockEntity$$Original = $MEChestBlockEntity;}
declare module "appeng.blockentity.storage.IOPortBlockEntity" {
import {$IGridTickable$$Interface} from "appeng.api.networking.ticking.IGridTickable"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$AENetworkedInvBlockEntity} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation} from "appeng.api.networking.ticking.TickRateModulation"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$StorageCell$$Type} from "appeng.api.storage.cells.StorageCell"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TickingRequest} from "appeng.api.networking.ticking.TickingRequest"

export class $IOPortBlockEntity extends $AENetworkedInvBlockEntity implements $IUpgradeableObject$$Interface, $IConfigurableObject$$Interface, $IGridTickable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getConfigManager"(): $IConfigManager
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "updateRedstoneState"(): void
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInternalInventory"(): $InternalInventory
public "matchesFullnessMode"(arg0: $StorageCell$$Type): boolean
public "getUpgrades"(): $IUpgradeInventory
public "isActive"(): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "configManager"(): $IConfigManager
get "internalInventory"(): $InternalInventory
get "upgrades"(): $IUpgradeInventory
get "active"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOPortBlockEntity$$Type = ($IOPortBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOPortBlockEntity$$Original = $IOPortBlockEntity;}
declare module "appeng.blockentity.storage.DriveBlockEntity" {
import {$IChestOrDrive$$Interface} from "appeng.api.implementations.blockentities.IChestOrDrive"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$IStorageProvider$$Interface} from "appeng.api.storage.IStorageProvider"
import {$AENetworkedInvBlockEntity} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType} from "appeng.api.util.AECableType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$IStorageMounts$$Type} from "appeng.api.storage.IStorageMounts"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IPriorityHost$$Interface} from "appeng.helpers.IPriorityHost"
import {$StorageCell} from "appeng.api.storage.cells.StorageCell"
import {$CellState} from "appeng.api.storage.cells.CellState"

export class $DriveBlockEntity extends $AENetworkedInvBlockEntity implements $IChestOrDrive$$Interface, $IPriorityHost$$Interface, $IStorageProvider$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isPowered"(): boolean
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "mountInventories"(arg0: $IStorageMounts$$Type): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getCellInventory"(arg0: integer): $MEStorage
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "getInternalInventory"(): $InternalInventory
public "getCellCount"(): integer
public "getCellStatus"(arg0: integer): $CellState
public "getCellItem"(arg0: integer): $Item
public "getOriginalCellInventory"(arg0: integer): $StorageCell
public "isCellBlinking"(arg0: integer): boolean
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "openMenu"(arg0: $Player$$Type): void
public "getModelData"(): $ModelData
public static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
public "getActionableNode"(): $IGridNode
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "powered"(): boolean
get "mainMenuIcon"(): $ItemStack
get "internalInventory"(): $InternalInventory
get "cellCount"(): integer
set "priority"(value: integer)
get "priority"(): integer
get "modelData"(): $ModelData
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DriveBlockEntity$$Type = ($DriveBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DriveBlockEntity$$Original = $DriveBlockEntity;}
