declare module "appeng.helpers.InterfaceLogic" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$InterfaceLogicHost$$Type} from "appeng.helpers.InterfaceLogicHost"
import {$ICraftingLink, $ICraftingLink$$Type} from "appeng.api.networking.crafting.ICraftingLink"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AECableType} from "appeng.api.util.AECableType"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$ICraftingRequester$$Interface} from "appeng.api.networking.crafting.ICraftingRequester"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"

export class $InterfaceLogic implements $ICraftingRequester$$Interface, $IUpgradeableObject$$Interface, $IConfigurableObject$$Interface {
constructor(arg0: $IManagedGridNode$$Type, arg1: $InterfaceLogicHost$$Type, arg2: $Item$$Type)
constructor(arg0: $IManagedGridNode$$Type, arg1: $InterfaceLogicHost$$Type, arg2: $Item$$Type, arg3: integer)

public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "getStorage"(): $ConfigInventory
public "clearContent"(): void
public "notifyNeighbors"(): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "getRequestedJobs"(): $ImmutableSet<($ICraftingLink)>
public "jobStateChange"(arg0: $ICraftingLink$$Type): void
public "insertCraftedItems"(arg0: $ICraftingLink$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "getActionableNode"(): $IGridNode
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "gridChanged"(): void
public "getLocation"(): $DimensionalBlockPos
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getConfig"(): $ConfigInventory
public "getInventory"(): $MEStorage
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "storage"(): $ConfigInventory
get "requestedJobs"(): $ImmutableSet<($ICraftingLink)>
get "actionableNode"(): $IGridNode
get "location"(): $DimensionalBlockPos
set "priority"(value: integer)
get "priority"(): integer
get "config"(): $ConfigInventory
get "inventory"(): $MEStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceLogic$$Type = ($InterfaceLogic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InterfaceLogic$$Original = $InterfaceLogic;}
declare module "appeng.helpers.InterfaceLogicHost" {
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$IConfigInvHost$$Interface} from "appeng.helpers.IConfigInvHost"
import {$MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$InterfaceLogic} from "appeng.helpers.InterfaceLogic"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPriorityHost$$Interface} from "appeng.helpers.IPriorityHost"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GenericStackInv} from "appeng.helpers.externalstorage.GenericStackInv"

export interface $InterfaceLogicHost$$Interface extends $IConfigurableObject$$Interface, $IUpgradeableObject$$Interface, $IPriorityHost$$Interface, $IConfigInvHost$$Interface {
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "storage"(): $GenericStackInv
get "interfaceLogic"(): $InterfaceLogic
set "priority"(value: integer)
get "priority"(): integer
get "config"(): $GenericStackInv
get "blockEntity"(): $BlockEntity
get "mainMenuIcon"(): $ItemStack
}

export class $InterfaceLogicHost implements $InterfaceLogicHost$$Interface {
 "getUpgrades"(): $IUpgradeInventory
 "getConfigManager"(): $IConfigManager
 "getStorage"(): $GenericStackInv
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "saveChanges"(): void
 "getInterfaceLogic"(): $InterfaceLogic
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getConfig"(): $GenericStackInv
 "getBlockEntity"(): $BlockEntity
 "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceLogicHost$$Type = ($InterfaceLogicHost);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InterfaceLogicHost$$Original = $InterfaceLogicHost;}
declare module "appeng.helpers.AEMultiBlockEntity" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$IColorableBlockEntity$$Interface} from "appeng.api.implementations.blockentities.IColorableBlockEntity"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$IInWorldGridNodeHost$$Interface} from "appeng.api.networking.IInWorldGridNodeHost"
import {$IPartHost$$Interface} from "appeng.api.parts.IPartHost"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$SelectedPart} from "appeng.api.parts.SelectedPart"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IFacadeContainer} from "appeng.api.parts.IFacadeContainer"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartItem$$Type} from "appeng.api.parts.IPartItem"

export interface $AEMultiBlockEntity$$Interface extends $IInWorldGridNodeHost$$Interface, $IPartHost$$Interface, $IColorableBlockEntity$$Interface {
get "inWorld"(): boolean
get "facadeContainer"(): $IFacadeContainer
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "color"(): $AEColor
get "blockEntity"(): $BlockEntity
}

export class $AEMultiBlockEntity implements $AEMultiBlockEntity$$Interface {
 "getGridNode"(arg0: $Direction$$Type): $IGridNode
 "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
 "hasRedstone"(): boolean
 "notifyNeighbors"(): void
 "clearContainer"(): void
 "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
 "isInWorld"(): boolean
 "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
 "markForSave"(): void
 "markForUpdate"(): void
 "getPart"(arg0: $Direction$$Type): $IPart
 "partChanged"(): void
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "getFacadeContainer"(): $IFacadeContainer
 "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
 "removePartFromSide"(arg0: $Direction$$Type): void
 "removePart"(arg0: $IPart$$Type): boolean
 "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
 "notifyNeighborNow"(arg0: $Direction$$Type): void
 "isEmpty"(): boolean
 "getLocation"(): $DimensionalBlockPos
 "cleanup"(): void
 "getColor"(): $AEColor
 "isBlocked"(arg0: $Direction$$Type): boolean
 "getBlockEntity"(): $BlockEntity
 "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "getCableConnectionLength"(arg0: $AECableType$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEMultiBlockEntity$$Type = ($AEMultiBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEMultiBlockEntity$$Original = $AEMultiBlockEntity;}
declare module "appeng.helpers.IMouseWheelItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IMouseWheelItem$$Interface {

(arg0: $ItemStack, arg1: boolean): void
}

export class $IMouseWheelItem implements $IMouseWheelItem$$Interface {
 "onWheel"(arg0: $ItemStack$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMouseWheelItem$$Type = ((arg0: $ItemStack, arg1: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMouseWheelItem$$Original = $IMouseWheelItem;}
declare module "appeng.helpers.InventoryAction" {
import {$Enum} from "java.lang.Enum"

export class $InventoryAction extends $Enum<($InventoryAction)> {
static readonly "PICKUP_SINGLE": $InventoryAction
static readonly "FILL_ENTIRE_ITEM": $InventoryAction
static readonly "EMPTY_ITEM": $InventoryAction
static readonly "PLACE_SINGLE": $InventoryAction
static readonly "SET_FILTER": $InventoryAction
static readonly "PICKUP_OR_SET_DOWN": $InventoryAction
static readonly "FILL_ITEM_MOVE_TO_PLAYER": $InventoryAction
static readonly "ROLL_DOWN": $InventoryAction
static readonly "CRAFT_ITEM": $InventoryAction
static readonly "SPLIT_OR_PLACE_SINGLE": $InventoryAction
static readonly "CRAFT_SHIFT": $InventoryAction
static readonly "EMPTY_ENTIRE_ITEM": $InventoryAction
static readonly "MOVE_REGION": $InventoryAction
static readonly "AUTO_CRAFT": $InventoryAction
static readonly "FILL_ENTIRE_ITEM_MOVE_TO_PLAYER": $InventoryAction
static readonly "SHIFT_CLICK": $InventoryAction
static readonly "CREATIVE_DUPLICATE": $InventoryAction
static readonly "FILL_ITEM": $InventoryAction
static readonly "CRAFT_STACK": $InventoryAction
static readonly "ROLL_UP": $InventoryAction
static readonly "CRAFT_ALL": $InventoryAction

public static "values"(): ($InventoryAction)[]
public static "valueOf"(arg0: StringJS): $InventoryAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryAction$$Type = (("pickup_or_set_down") | ("split_or_place_single") | ("creative_duplicate") | ("shift_click") | ("craft_stack") | ("craft_item") | ("craft_shift") | ("craft_all") | ("fill_item") | ("fill_item_move_to_player") | ("fill_entire_item") | ("fill_entire_item_move_to_player") | ("empty_item") | ("empty_entire_item") | ("move_region") | ("pickup_single") | ("roll_up") | ("roll_down") | ("auto_craft") | ("place_single") | ("set_filter"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryAction$$Original = $InventoryAction;}
declare module "appeng.helpers.WirelessCraftingTerminalMenuHost" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$WirelessCraftingTerminalItem, $WirelessCraftingTerminalItem$$Type} from "appeng.items.tools.powered.WirelessCraftingTerminalItem"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$WirelessTerminalMenuHost} from "appeng.helpers.WirelessTerminalMenuHost"
import {$ISegmentedInventory$$Interface} from "appeng.api.inventories.ISegmentedInventory"

export class $WirelessCraftingTerminalMenuHost<T extends $WirelessCraftingTerminalItem> extends $WirelessTerminalMenuHost<(T)> implements $ISegmentedInventory$$Interface {
constructor(arg0: T, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $BiConsumer$$Type<($Player), ($ISubMenu)>)

public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public static "empty"(): $IEnergySource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessCraftingTerminalMenuHost$$Type<T> = ($WirelessCraftingTerminalMenuHost<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WirelessCraftingTerminalMenuHost$$Original<T> = $WirelessCraftingTerminalMenuHost<(T)>;}
declare module "appeng.helpers.WirelessTerminalMenuHost" {
import {$ILinkStatus} from "appeng.api.storage.ILinkStatus"
import {$KeyTypeSelectionHost$$Interface} from "appeng.api.util.KeyTypeSelectionHost"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$KeyTypeSelection} from "appeng.api.util.KeyTypeSelection"
import {$IActionHost$$Interface} from "appeng.api.networking.security.IActionHost"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IPortableTerminal$$Interface} from "appeng.api.implementations.menuobjects.IPortableTerminal"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$WirelessTerminalItem, $WirelessTerminalItem$$Type} from "appeng.items.tools.powered.WirelessTerminalItem"

export class $WirelessTerminalMenuHost<T extends $WirelessTerminalItem> extends $ItemMenuHost<(T)> implements $IPortableTerminal$$Interface, $IActionHost$$Interface, $KeyTypeSelectionHost$$Interface {
constructor(arg0: T, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $BiConsumer$$Type<($Player), ($ISubMenu)>)

public "getConfigManager"(): $IConfigManager
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "getActionableNode"(): $IGridNode
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getKeyTypeSelection"(): $KeyTypeSelection
public "getLinkStatus"(): $ILinkStatus
public "getCloseHotkey"(): StringJS
public "tick"(): void
public "insert"(arg0: $Player$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "getInventory"(): $MEStorage
public static "empty"(): $IEnergySource
get "configManager"(): $IConfigManager
get "actionableNode"(): $IGridNode
get "mainMenuIcon"(): $ItemStack
get "keyTypeSelection"(): $KeyTypeSelection
get "linkStatus"(): $ILinkStatus
get "closeHotkey"(): StringJS
get "inventory"(): $MEStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessTerminalMenuHost$$Type<T> = ($WirelessTerminalMenuHost<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WirelessTerminalMenuHost$$Original<T> = $WirelessTerminalMenuHost<(T)>;}
declare module "appeng.helpers.IConfigInvHost" {
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export interface $IConfigInvHost$$Interface {

(): $GenericStackInv$$Type
get "config"(): $GenericStackInv
}

export class $IConfigInvHost implements $IConfigInvHost$$Interface {
 "getConfig"(): $GenericStackInv
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigInvHost$$Type = (() => $GenericStackInv$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigInvHost$$Original = $IConfigInvHost;}
declare module "appeng.helpers.IPriorityHost" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$ISubMenuHost$$Interface} from "appeng.api.storage.ISubMenuHost"

export interface $IPriorityHost$$Interface extends $ISubMenuHost$$Interface {
set "priority"(value: integer)
get "priority"(): integer
get "mainMenuIcon"(): $ItemStack
}

export class $IPriorityHost implements $IPriorityHost$$Interface {
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPriorityHost$$Type = ($IPriorityHost);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPriorityHost$$Original = $IPriorityHost;}
declare module "appeng.helpers.Splotch" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $Splotch {
constructor(arg0: $AEColor$$Type, arg1: boolean, arg2: $Direction$$Type, arg3: $Vec3$$Type)
constructor(arg0: $FriendlyByteBuf$$Type)

public "writeToStream"(arg0: $FriendlyByteBuf$$Type): void
public "isLumen"(): boolean
public "getSeed"(): integer
public "x"(): float
public "y"(): float
public "getSide"(): $Direction
public "getColor"(): $AEColor
get "lumen"(): boolean
get "seed"(): integer
get "side"(): $Direction
get "color"(): $AEColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Splotch$$Type = ($Splotch);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Splotch$$Original = $Splotch;}
