declare module "appeng.api.implementations.items.IFacadeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$IFacadePart} from "appeng.api.parts.IFacadePart"

export interface $IFacadeItem$$Interface {
}

export class $IFacadeItem implements $IFacadeItem$$Interface {
 "createPartFromItemStack"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): $IFacadePart
 "getTextureItem"(arg0: $ItemStack$$Type): $ItemStack
 "getTextureBlockState"(arg0: $ItemStack$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacadeItem$$Type = ($IFacadeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFacadeItem$$Original = $IFacadeItem;}
declare module "appeng.api.implementations.items.IStorageComponent" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IStorageComponent$$Interface {
}

export class $IStorageComponent implements $IStorageComponent$$Interface {
 "isStorageComponent"(arg0: $ItemStack$$Type): boolean
 "getBytes"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageComponent$$Type = ($IStorageComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStorageComponent$$Original = $IStorageComponent;}
declare module "appeng.api.implementations.items.IAEItemPowerStorage" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AccessRestriction} from "appeng.api.config.AccessRestriction"

export interface $IAEItemPowerStorage$$Interface {
}

export class $IAEItemPowerStorage implements $IAEItemPowerStorage$$Interface {
 "extractAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
 "getAECurrentPower"(arg0: $ItemStack$$Type): double
 "injectAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
 "getAEMaxPower"(arg0: $ItemStack$$Type): double
 "getPowerFlow"(arg0: $ItemStack$$Type): $AccessRestriction
 "getChargeRate"(arg0: $ItemStack$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEItemPowerStorage$$Type = ($IAEItemPowerStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAEItemPowerStorage$$Original = $IAEItemPowerStorage;}
declare module "appeng.api.implementations.items.MemoryCardMessages" {
import {$Enum} from "java.lang.Enum"

export class $MemoryCardMessages extends $Enum<($MemoryCardMessages)> {
static readonly "SETTINGS_RESET": $MemoryCardMessages
static readonly "SETTINGS_CLEARED": $MemoryCardMessages
static readonly "SETTINGS_SAVED": $MemoryCardMessages
static readonly "INVALID_MACHINE": $MemoryCardMessages
static readonly "SETTINGS_LOADED": $MemoryCardMessages

public static "values"(): ($MemoryCardMessages)[]
public static "valueOf"(arg0: StringJS): $MemoryCardMessages
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCardMessages$$Type = (("invalid_machine") | ("settings_loaded") | ("settings_saved") | ("settings_reset") | ("settings_cleared"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemoryCardMessages$$Original = $MemoryCardMessages;}
declare module "appeng.api.implementations.items.IMemoryCard" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MemoryCardMessages, $MemoryCardMessages$$Type} from "appeng.api.implementations.items.MemoryCardMessages"

export interface $IMemoryCard$$Interface {

(arg0: $Player, arg1: $MemoryCardMessages): void
}

export class $IMemoryCard implements $IMemoryCard$$Interface {
 "notifyUser"(arg0: $Player$$Type, arg1: $MemoryCardMessages$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMemoryCard$$Type = ((arg0: $Player, arg1: $MemoryCardMessages) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMemoryCard$$Original = $IMemoryCard;}
declare module "appeng.api.implementations.items.ISpatialStorageCell" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ISpatialStorageCell$$Interface {
}

export class $ISpatialStorageCell implements $ISpatialStorageCell$$Interface {
 "getMaxStoredDim"(arg0: $ItemStack$$Type): integer
 "getAllocatedPlotId"(arg0: $ItemStack$$Type): integer
 "isSpatialStorage"(arg0: $ItemStack$$Type): boolean
 "doSpatialTransition"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpatialStorageCell$$Type = ($ISpatialStorageCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpatialStorageCell$$Original = $ISpatialStorageCell;}
