declare module "xfacthd.framedblocks.common.menu.FramedStorageMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$IStorageBlockItemHandler$$Type} from "xfacthd.framedblocks.common.capability.IStorageBlockItemHandler"

export class $FramedStorageMenu extends $AbstractContainerMenu {
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

public static "createSingle"(arg0: integer, arg1: $Inventory$$Type): $FramedStorageMenu
public static "createSingle"(arg0: integer, arg1: $Inventory$$Type, arg2: $IStorageBlockItemHandler$$Type): $FramedStorageMenu
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getRowCount"(): integer
public "removed"(arg0: $Player$$Type): void
public static "createDouble"(arg0: integer, arg1: $Inventory$$Type, arg2: $IStorageBlockItemHandler$$Type): $FramedStorageMenu
public static "createDouble"(arg0: integer, arg1: $Inventory$$Type): $FramedStorageMenu
public "stillValid"(arg0: $Player$$Type): boolean
get "rowCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedStorageMenu$$Type = ($FramedStorageMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedStorageMenu$$Original = $FramedStorageMenu;}
