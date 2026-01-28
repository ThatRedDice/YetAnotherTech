declare module "rearth.oritech.api.item.containers.SimpleInventoryStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SyncType$$Type} from "rearth.oritech.api.networking.SyncType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$UpdatableField$$Interface} from "rearth.oritech.api.networking.UpdatableField"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$ItemApi$InventoryStorage$$Interface} from "rearth.oritech.api.item.ItemApi$InventoryStorage"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $SimpleInventoryStorage implements $Container$$Interface, $ItemApi$InventoryStorage$$Interface, $UpdatableField$$Interface<(void), ($List<($ItemStack)>)> {
readonly "heldStacks": $NonNullList<($ItemStack)>

constructor(arg0: integer, arg1: $Runnable$$Type)

public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "getSlotCount"(): integer
public "useDeltaOnly"(arg0: $SyncType$$Type): boolean
public "getDeltaData"(): $List<($ItemStack)>
public "getDeltaCodec"(): $StreamCodec<($ByteBuf), ($List<($ItemStack)>)>
public "getFullCodec"(): $StreamCodec<($ByteBuf), (void)>
public "handleDeltaUpdate"(arg0: any): void
public "handleDeltaUpdate"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "handleFullUpdate"(arg0: void): void
public "handleFullUpdate"(arg0: any): void
public "insertToSlot"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): integer
public "extractFromSlot"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): integer
public "getFullData"(): any
public "getHeldStacks"(): $NonNullList<($ItemStack)>
public "getItem"(arg0: integer): $ItemStack
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "update"(): void
public "extract"(arg0: $ItemStack$$Type, arg1: boolean): integer
public "insert"(arg0: $ItemStack$$Type, arg1: boolean): integer
public "isEmpty"(): boolean
public "getStackInSlot"(arg0: integer): $ItemStack
public "setChanged"(): void
public "getSlotLimit"(arg0: integer): integer
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getMaxStackSize"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public "supportsExtraction"(): boolean
public "supportsInsertion"(): boolean
public static "tryClear"(arg0: any): void
public "self"(): $Container
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "clear"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "getBlock"(level: $Level$$Type): $LevelBlock
public "setChanged"(): void
public "asContainer"(): $Container
public "setTransferCooldown"(arg0: long): void
public "canReceiveTransferCooldown"(): boolean
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "clear"(match: $ItemPredicate$$Type): void
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
get "slotCount"(): integer
get "deltaData"(): $List<($ItemStack)>
get "deltaCodec"(): $StreamCodec<($ByteBuf), ($List<($ItemStack)>)>
get "fullCodec"(): $StreamCodec<($ByteBuf), (void)>
get "fullData"(): any
get "empty"(): boolean
get "changed"(): void
get "containerSize"(): integer
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleInventoryStorage$$Type = ($SimpleInventoryStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleInventoryStorage$$Original = $SimpleInventoryStorage;}
declare module "rearth.oritech.api.item.ItemApi$InventoryStorage" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ItemApi$InventoryStorage$$Interface {
get "slotCount"(): integer
}

export class $ItemApi$InventoryStorage implements $ItemApi$InventoryStorage$$Interface {
 "supportsExtraction"(): boolean
 "supportsInsertion"(): boolean
 "getSlotCount"(): integer
 "insertToSlot"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): integer
 "extractFromSlot"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): integer
 "update"(): void
 "extract"(arg0: $ItemStack$$Type, arg1: boolean): integer
 "insert"(arg0: $ItemStack$$Type, arg1: boolean): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemApi$InventoryStorage$$Type = ($ItemApi$InventoryStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemApi$InventoryStorage$$Original = $ItemApi$InventoryStorage;}
declare module "rearth.oritech.api.item.ItemApi$BlockProvider" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemApi$InventoryStorage, $ItemApi$InventoryStorage$$Type} from "rearth.oritech.api.item.ItemApi$InventoryStorage"

export interface $ItemApi$BlockProvider$$Interface {

(arg0: $Direction): $ItemApi$InventoryStorage$$Type
}

export class $ItemApi$BlockProvider implements $ItemApi$BlockProvider$$Interface {
 "getInventoryStorage"(arg0: $Direction$$Type): $ItemApi$InventoryStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemApi$BlockProvider$$Type = ((arg0: $Direction) => $ItemApi$InventoryStorage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemApi$BlockProvider$$Original = $ItemApi$BlockProvider;}
