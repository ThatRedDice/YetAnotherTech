declare module "appeng.menu.AEBaseMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$IActionSource} from "appeng.api.networking.security.IActionSource"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$InventoryAction$$Type} from "appeng.helpers.InventoryAction"
import {$SlotSemantic, $SlotSemantic$$Type} from "appeng.menu.SlotSemantic"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ShortSet$$Type} from "it.unimi.dsi.fastutil.shorts.ShortSet"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $AEBaseMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: any)

public "sendAllDataToRemote"(): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public "initializeContents"(arg0: integer, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $ItemStack$$Type): void
public "getPlayerInventory"(): $Inventory
public "getActionSource"(): $IActionSource
public "lockPlayerInventorySlot"(arg0: integer): void
public "isPlayerInventorySlotLocked"(arg0: integer): boolean
public "isValidMenu"(): boolean
public "setValidMenu"(arg0: boolean): void
public "getSlotSemantic"(arg0: $Slot$$Type): $SlotSemantic
public "isPlayerSideSlot"(arg0: $Slot$$Type): boolean
public "onServerDataSync"(arg0: $ShortSet$$Type): void
public "addClientSideSlot"(arg0: $Slot$$Type, arg1: $SlotSemantic$$Type): $Slot
public "removeClientSideSlot"(arg0: $Slot$$Type): void
public "isClientSideSlot"(arg0: $Slot$$Type): boolean
public "hideSlot"(arg0: StringJS): void
public "swapSlotContents"(arg0: integer, arg1: integer): void
public "isValidForSlot"(arg0: $Slot$$Type, arg1: $ItemStack$$Type): boolean
public "receiveServerSyncData"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "receiveClientAction"(arg0: StringJS, arg1: StringJS): void
public "isReturnedFromSubScreen"(): boolean
public "setReturnedFromSubScreen"(arg0: boolean): void
public "onSlotChange"(arg0: $Slot$$Type): void
public "doAction"(arg0: $ServerPlayer$$Type, arg1: $InventoryAction$$Type, arg2: integer, arg3: long): void
public "setFilter"(arg0: integer, arg1: $ItemStack$$Type): void
public "setLocator"(arg0: $MenuHostLocator$$Type): void
public "getLocator"(): $MenuHostLocator
public "getTarget"(): any
public "getSlots"(arg0: $SlotSemantic$$Type): $List<($Slot)>
public "getBlockEntity"(): $BlockEntity
public "isClientSide"(): boolean
public "broadcastChanges"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getPlayer"(): $Player
public "canDragTo"(arg0: $Slot$$Type): boolean
get "playerInventory"(): $Inventory
get "actionSource"(): $IActionSource
get "validMenu"(): boolean
set "validMenu"(value: boolean)
get "returnedFromSubScreen"(): boolean
set "returnedFromSubScreen"(value: boolean)
set "locator"(value: $MenuHostLocator$$Type)
get "locator"(): $MenuHostLocator
get "target"(): any
get "blockEntity"(): $BlockEntity
get "clientSide"(): boolean
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseMenu$$Type = ($AEBaseMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEBaseMenu$$Original = $AEBaseMenu;}
declare module "appeng.menu.SlotSemantic" {
import {$Record} from "java.lang.Record"

export class $SlotSemantic extends $Record {
constructor(id: StringJS, playerSide: boolean, quickMovePriority: integer)

public "quickMovePriority"(): integer
public "playerSide"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotSemantic$$Type = ({"id"?: StringJS, "playerSide"?: boolean, "quickMovePriority"?: integer}) | ([id?: StringJS, playerSide?: boolean, quickMovePriority?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotSemantic$$Original = $SlotSemantic;}
declare module "appeng.menu.ToolboxMenu" {
import {$AEBaseMenu$$Type} from "appeng.menu.AEBaseMenu"
import {$Component} from "net.minecraft.network.chat.Component"

export class $ToolboxMenu {
constructor(arg0: $AEBaseMenu$$Type)

public "tick"(): void
public "getName"(): $Component
public "isPresent"(): boolean
get "name"(): $Component
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolboxMenu$$Type = ($ToolboxMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToolboxMenu$$Original = $ToolboxMenu;}
declare module "appeng.menu.ISubMenu" {
import {$MenuHostLocator} from "appeng.menu.locator.MenuHostLocator"
import {$ISubMenuHost} from "appeng.api.storage.ISubMenuHost"

export interface $ISubMenu$$Interface {
get "locator"(): $MenuHostLocator
get "host"(): $ISubMenuHost
}

export class $ISubMenu implements $ISubMenu$$Interface {
 "getLocator"(): $MenuHostLocator
 "getHost"(): $ISubMenuHost
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubMenu$$Type = ($ISubMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISubMenu$$Original = $ISubMenu;}
