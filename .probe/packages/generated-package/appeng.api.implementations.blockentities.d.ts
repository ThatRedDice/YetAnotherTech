declare module "appeng.api.implementations.blockentities.IMEChest" {
import {$IChestOrDrive$$Interface} from "appeng.api.implementations.blockentities.IChestOrDrive"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$IEnergySource, $IEnergySource$$Interface} from "appeng.api.networking.energy.IEnergySource"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$StorageCell} from "appeng.api.storage.cells.StorageCell"
import {$Item} from "net.minecraft.world.item.Item"
import {$CellState} from "appeng.api.storage.cells.CellState"
import {$Actionable$$Type} from "appeng.api.config.Actionable"

export interface $IMEChest$$Interface extends $IChestOrDrive$$Interface, $IEnergySource$$Interface {
get "powered"(): boolean
get "cellCount"(): integer
get "actionableNode"(): $IGridNode
}

export class $IMEChest implements $IMEChest$$Interface {
 "isPowered"(): boolean
 "getCellCount"(): integer
 "getCellStatus"(arg0: integer): $CellState
 "getCellInventory"(arg0: integer): $MEStorage
 "getCellItem"(arg0: integer): $Item
 "getOriginalCellInventory"(arg0: integer): $StorageCell
 "isCellBlinking"(arg0: integer): boolean
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
static "empty"(): $IEnergySource
 "getActionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMEChest$$Type = ($IMEChest);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMEChest$$Original = $IMEChest;}
declare module "appeng.api.implementations.blockentities.ICraftingMachine" {
import {$KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$PatternContainerGroup} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ICraftingMachine$$Interface {
get "craftingMachineInfo"(): $PatternContainerGroup
}

export class $ICraftingMachine implements $ICraftingMachine$$Interface {
 "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[], arg2: $Direction$$Type): boolean
 "acceptsPlans"(): boolean
 "getCraftingMachineInfo"(): $PatternContainerGroup
static "of"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ICraftingMachine
static "of"(arg0: $BlockEntity$$Type, arg1: $Direction$$Type): $ICraftingMachine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingMachine$$Type = ($ICraftingMachine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICraftingMachine$$Original = $ICraftingMachine;}
declare module "appeng.api.implementations.blockentities.IWirelessAccessPoint" {
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$IActionHost$$Interface} from "appeng.api.networking.security.IActionHost"
import {$IGrid} from "appeng.api.networking.IGrid"

export interface $IWirelessAccessPoint$$Interface extends $IActionHost$$Interface {
get "grid"(): $IGrid
get "range"(): double
get "location"(): $DimensionalBlockPos
get "active"(): boolean
get "actionableNode"(): $IGridNode
}

export class $IWirelessAccessPoint implements $IWirelessAccessPoint$$Interface {
 "getGrid"(): $IGrid
 "getRange"(): double
 "getLocation"(): $DimensionalBlockPos
 "isActive"(): boolean
 "getActionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWirelessAccessPoint$$Type = ($IWirelessAccessPoint);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWirelessAccessPoint$$Original = $IWirelessAccessPoint;}
declare module "appeng.api.implementations.blockentities.PatternContainerGroup" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $PatternContainerGroup extends $Record {
constructor(icon: $AEItemKey$$Type, name: $Component$$Type, tooltip: $List$$Type<($Component$$Type)>)

public static "readFromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $PatternContainerGroup
public "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "nothing"(): $PatternContainerGroup
public static "fromMachine"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $PatternContainerGroup
public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "icon"(): $AEItemKey
public "tooltip"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternContainerGroup$$Type = ({"icon"?: $AEItemKey$$Type, "tooltip"?: $List$$Type<($Component$$Type)>, "name"?: $Component$$Type}) | ([icon?: $AEItemKey$$Type, tooltip?: $List$$Type<($Component$$Type)>, name?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PatternContainerGroup$$Original = $PatternContainerGroup;}
declare module "appeng.api.implementations.blockentities.ICrankable" {
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ICrankable$$Interface {
}

export class $ICrankable implements $ICrankable$$Interface {
 "canTurn"(): boolean
 "applyTurn"(): void
static "get"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ICrankable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICrankable$$Type = ($ICrankable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICrankable$$Original = $ICrankable;}
declare module "appeng.api.implementations.blockentities.IChestOrDrive" {
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$StorageCell} from "appeng.api.storage.cells.StorageCell"
import {$Item} from "net.minecraft.world.item.Item"
import {$IActionHost$$Interface} from "appeng.api.networking.security.IActionHost"
import {$CellState} from "appeng.api.storage.cells.CellState"

export interface $IChestOrDrive$$Interface extends $IActionHost$$Interface {
get "powered"(): boolean
get "cellCount"(): integer
get "actionableNode"(): $IGridNode
}

export class $IChestOrDrive implements $IChestOrDrive$$Interface {
 "isPowered"(): boolean
 "getCellCount"(): integer
 "getCellStatus"(arg0: integer): $CellState
 "getCellInventory"(arg0: integer): $MEStorage
 "getCellItem"(arg0: integer): $Item
 "getOriginalCellInventory"(arg0: integer): $StorageCell
 "isCellBlinking"(arg0: integer): boolean
 "getActionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChestOrDrive$$Type = ($IChestOrDrive);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IChestOrDrive$$Original = $IChestOrDrive;}
declare module "appeng.api.implementations.blockentities.IColorableBlockEntity" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Direction$$Type} from "net.minecraft.core.Direction"

export interface $IColorableBlockEntity$$Interface {
get "color"(): $AEColor
}

export class $IColorableBlockEntity implements $IColorableBlockEntity$$Interface {
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "getColor"(): $AEColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColorableBlockEntity$$Type = ($IColorableBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IColorableBlockEntity$$Original = $IColorableBlockEntity;}
