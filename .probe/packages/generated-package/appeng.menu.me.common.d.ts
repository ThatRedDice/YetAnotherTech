declare module "appeng.menu.me.common.IClientRepo" {
import {$Collection} from "java.util.Collection"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$GridInventoryEntry, $GridInventoryEntry$$Type} from "appeng.menu.me.common.GridInventoryEntry"
import {$List$$Type} from "java.util.List"
import {$Set} from "java.util.Set"

export interface $IClientRepo$$Interface {
get "allEntries"(): $Set<($GridInventoryEntry)>
}

export class $IClientRepo implements $IClientRepo$$Interface {
 "getByIngredient"(arg0: $Ingredient$$Type): $Collection<($GridInventoryEntry)>
 "handleUpdate"(arg0: boolean, arg1: $List$$Type<($GridInventoryEntry$$Type)>): void
 "getAllEntries"(): $Set<($GridInventoryEntry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientRepo$$Type = ($IClientRepo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClientRepo$$Original = $IClientRepo;}
declare module "appeng.menu.me.common.GridInventoryEntry" {
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export class $GridInventoryEntry {
constructor(arg0: long, arg1: $AEKey$$Type, arg2: long, arg3: long, arg4: boolean)

public "getStoredAmount"(): long
public "isMeaningful"(): boolean
public "isCraftable"(): boolean
public "getWhat"(): $AEKey
public "getSerial"(): long
public "getRequestableAmount"(): long
get "storedAmount"(): long
get "meaningful"(): boolean
get "craftable"(): boolean
get "what"(): $AEKey
get "serial"(): long
get "requestableAmount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridInventoryEntry$$Type = ($GridInventoryEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GridInventoryEntry$$Original = $GridInventoryEntry;}
declare module "appeng.menu.me.common.IMEInteractionHandler" {
import {$InventoryAction, $InventoryAction$$Type} from "appeng.helpers.InventoryAction"

export interface $IMEInteractionHandler$$Interface {

(arg0: long, arg1: $InventoryAction): void
}

export class $IMEInteractionHandler implements $IMEInteractionHandler$$Interface {
 "handleInteraction"(arg0: long, arg1: $InventoryAction$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMEInteractionHandler$$Type = ((arg0: long, arg1: $InventoryAction) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMEInteractionHandler$$Original = $IMEInteractionHandler;}
declare module "appeng.menu.me.common.MEStorageMenu" {
import {$ILinkStatus, $ILinkStatus$$Type} from "appeng.api.storage.ILinkStatus"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$KeyTypeSelection} from "appeng.api.util.KeyTypeSelection"
import {$List} from "java.util.List"
import {$InventoryAction$$Type} from "appeng.helpers.InventoryAction"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$KeyTypeSelectionMenu$$Interface} from "appeng.menu.interfaces.KeyTypeSelectionMenu"
import {$ShortSet$$Type} from "it.unimi.dsi.fastutil.shorts.ShortSet"
import {$LinkStatusAwareMenu$$Interface} from "appeng.menu.guisync.LinkStatusAwareMenu"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Object2IntOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntOpenHashMap"
import {$IMEInteractionHandler$$Interface} from "appeng.menu.me.common.IMEInteractionHandler"
import {$KeyTypeSelectionMenu$SyncedKeyTypes} from "appeng.menu.interfaces.KeyTypeSelectionMenu$SyncedKeyTypes"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ITerminalHost, $ITerminalHost$$Type} from "appeng.api.storage.ITerminalHost"
import {$AEBaseMenu} from "appeng.menu.AEBaseMenu"
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$ToolboxMenu} from "appeng.menu.ToolboxMenu"
import {$IClientRepo, $IClientRepo$$Type} from "appeng.menu.me.common.IClientRepo"

export class $MEStorageMenu extends $AEBaseMenu implements $IConfigurableObject$$Interface, $IMEInteractionHandler$$Interface, $LinkStatusAwareMenu$$Interface, $KeyTypeSelectionMenu$$Interface {
 "stateId": integer
static readonly "PORTABLE_FLUID_CELL_TYPE": $MenuType<($MEStorageMenu)>
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
 "searchKeyTypes": $KeyTypeSelectionMenu$SyncedKeyTypes
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "PORTABLE_ITEM_CELL_TYPE": $MenuType<($MEStorageMenu)>
readonly "containerListeners": $List<($ContainerListener)>
static readonly "WIRELESS_TYPE": $MenuType<($MEStorageMenu)>
 "containerId": integer
static readonly "TYPE": $MenuType<($MEStorageMenu)>
 "activeCraftingJobs": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: $ITerminalHost$$Type)

public "isKeyVisible"(arg0: $AEKey$$Type): boolean
public "getClientRepo"(): $IClientRepo
public "getViewCells"(): $List<($ItemStack)>
public "setGui"(arg0: $Runnable$$Type): void
public "setClientRepo"(arg0: $IClientRepo$$Type): void
public "hasIngredient"(arg0: $Ingredient$$Type, arg1: $Object2IntOpenHashMap$$Type<(any)>): boolean
public "canConfigureTypeFilter"(): boolean
public "setLinkStatus"(arg0: $ILinkStatus$$Type): void
public "getServerKeyTypeSelection"(): $KeyTypeSelection
public "getClientKeyTypeSelection"(): $KeyTypeSelectionMenu$SyncedKeyTypes
public "getConfigManager"(): $IConfigManager
public "handleInteraction"(arg0: long, arg1: $InventoryAction$$Type): void
public "getToolbox"(): $ToolboxMenu
public "getGridNode"(): $IGridNode
public "getLinkStatus"(): $ILinkStatus
public "onServerDataSync"(arg0: $ShortSet$$Type): void
public "getHost"(): $ITerminalHost
public "broadcastChanges"(): void
public "selectKeyType"(arg0: $AEKeyType$$Type, arg1: boolean): void
get "clientRepo"(): $IClientRepo
get "viewCells"(): $List<($ItemStack)>
set "gui"(value: $Runnable$$Type)
set "clientRepo"(value: $IClientRepo$$Type)
set "linkStatus"(value: $ILinkStatus$$Type)
get "serverKeyTypeSelection"(): $KeyTypeSelection
get "clientKeyTypeSelection"(): $KeyTypeSelectionMenu$SyncedKeyTypes
get "configManager"(): $IConfigManager
get "toolbox"(): $ToolboxMenu
get "gridNode"(): $IGridNode
get "linkStatus"(): $ILinkStatus
get "host"(): $ITerminalHost
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEStorageMenu$$Type = ($MEStorageMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MEStorageMenu$$Original = $MEStorageMenu;}
