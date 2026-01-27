declare module "appeng.api.storage.cells.CellState" {
import {$Enum} from "java.lang.Enum"

export class $CellState extends $Enum<($CellState)> {
static readonly "TYPES_FULL": $CellState
static readonly "ABSENT": $CellState
static readonly "EMPTY": $CellState
static readonly "NOT_EMPTY": $CellState
static readonly "FULL": $CellState

public "getStateColor"(): integer
public static "values"(): ($CellState)[]
public static "valueOf"(arg0: StringJS): $CellState
get "stateColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CellState$$Type = (("absent") | ("empty") | ("not_empty") | ("types_full") | ("full"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CellState$$Original = $CellState;}
declare module "appeng.api.storage.cells.IBasicCellItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$List$$Type} from "java.util.List"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ICellWorkbenchItem$$Interface} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $IBasicCellItem$$Interface extends $ICellWorkbenchItem$$Interface {
get "idleDrain"(): double
get "keyType"(): $AEKeyType
}

export class $IBasicCellItem implements $IBasicCellItem$$Interface {
 "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
 "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "getBytesPerType"(arg0: $ItemStack$$Type): integer
 "getTotalTypes"(arg0: $ItemStack$$Type): integer
 "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
 "storableInStorageCell"(): boolean
 "getIdleDrain"(): double
 "isStorageCell"(arg0: $ItemStack$$Type): boolean
 "getBytes"(arg0: $ItemStack$$Type): integer
 "getKeyType"(): $AEKeyType
 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBasicCellItem$$Type = ($IBasicCellItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBasicCellItem$$Original = $IBasicCellItem;}
declare module "appeng.api.storage.cells.ICellWorkbenchItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$IUpgradeableItem$$Interface} from "appeng.api.upgrades.IUpgradeableItem"

export interface $ICellWorkbenchItem$$Interface extends $IUpgradeableItem$$Interface {
}

export class $ICellWorkbenchItem implements $ICellWorkbenchItem$$Interface {
 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICellWorkbenchItem$$Type = ($ICellWorkbenchItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICellWorkbenchItem$$Original = $ICellWorkbenchItem;}
declare module "appeng.api.storage.cells.StorageCell" {
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$MEStorage$$Interface} from "appeng.api.storage.MEStorage"
import {$IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$CellState} from "appeng.api.storage.cells.CellState"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $StorageCell$$Interface extends $MEStorage$$Interface {
get "idleDrain"(): double
get "status"(): $CellState
get "availableStacks"(): $KeyCounter
get "description"(): $Component
}

export class $StorageCell implements $StorageCell$$Interface {
 "getIdleDrain"(): double
 "canFitInsideCell"(): boolean
 "getStatus"(): $CellState
 "persist"(): void
 "getAvailableStacks"(arg0: $KeyCounter$$Type): void
 "getAvailableStacks"(): $KeyCounter
 "isPreferredStorageFor"(arg0: $AEKey$$Type, arg1: $IActionSource$$Type): boolean
static "checkPreconditions"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
 "getDescription"(): $Component
 "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
 "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCell$$Type = ($StorageCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageCell$$Original = $StorageCell;}
