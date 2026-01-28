declare module "net.p3pp3rf1y.sophisticatedcore.inventory.StatefulComponentItemHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ISlotChangeListener$$Interface} from "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotChangeListener"
import {$MutableDataComponentHolder$$Type} from "net.neoforged.neoforge.common.MutableDataComponentHolder"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"

export class $StatefulComponentItemHandler implements $IItemHandlerModifiable$$Interface, $ISlotChangeListener$$Interface {
constructor(arg0: $MutableDataComponentHolder$$Type, arg1: $DataComponentType$$Type<($ItemContainerContents$$Type)>, arg2: integer)

public "onSlotChanged"(arg0: integer): void
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "kjs$self"(): $IItemHandler
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getBlock"(level: $Level$$Type): $LevelBlock
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "clear"(): void
public "clear"(match: $ItemPredicate$$Type): void
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "getAllItems"(): $List<($ItemStack)>
public "asContainer"(): $Container
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatefulComponentItemHandler$$Type = ($StatefulComponentItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatefulComponentItemHandler$$Original = $StatefulComponentItemHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleExtractor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IItemHandlerSimpleExtractor$$Interface {

(arg0: $ItemStack, arg1: boolean): $ItemStack$$Type
}

export class $IItemHandlerSimpleExtractor implements $IItemHandlerSimpleExtractor$$Interface {
 "extractItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerSimpleExtractor$$Type = ((arg0: $ItemStack, arg1: boolean) => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemHandlerSimpleExtractor$$Original = $IItemHandlerSimpleExtractor;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$IItemHandlerSimpleInserter$$Interface} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter"
import {$ItemStackKey, $ItemStackKey$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$IInsertBlockOverride$$Interface} from "net.p3pp3rf1y.sophisticatedcore.inventory.IInsertBlockOverride"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Set} from "java.util.Set"
import {$IItemHandlerSimpleExtractor$$Interface} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleExtractor"

export interface $ITrackedContentsItemHandler$$Interface extends $IItemHandlerSimpleInserter$$Interface, $IItemHandlerSimpleExtractor$$Interface, $IInsertBlockOverride$$Interface {
get "trackedStacks"(): $Set<($ItemStackKey)>
get "insertBlocked"(): boolean
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
}

export class $ITrackedContentsItemHandler implements $ITrackedContentsItemHandler$$Interface {
 "unregisterStackKeyListeners"(): void
 "registerTrackingListeners"(arg0: $Consumer$$Type<($ItemStackKey)>, arg1: $Consumer$$Type<($ItemStackKey)>, arg2: $Runnable$$Type, arg3: $Runnable$$Type): void
 "hasEmptySlots"(): boolean
 "getTrackedStacks"(): $Set<($ItemStackKey)>
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "extractItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "isInsertBlocked"(): boolean
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getBlock"(level: $Level$$Type): $LevelBlock
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "clear"(): void
 "clear"(match: $ItemPredicate$$Type): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "getAllItems"(): $List<($ItemStack)>
 "asContainer"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrackedContentsItemHandler$$Type = ($ITrackedContentsItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITrackedContentsItemHandler$$Original = $ITrackedContentsItemHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.IInsertBlockOverride" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IInsertBlockOverride$$Interface {

(): boolean
get "insertBlocked"(): boolean
}

export class $IInsertBlockOverride implements $IInsertBlockOverride$$Interface {
 "isInsertBlocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInsertBlockOverride$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInsertBlockOverride$$Original = $IInsertBlockOverride;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryPartitioner" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$SlotRange} from "net.p3pp3rf1y.sophisticatedcore.util.SlotRange"
import {$IInventoryPartHandler, $IInventoryPartHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IInventoryPartHandler"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MemorySettingsCategory$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.memory.MemorySettingsCategory"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"

export class $InventoryPartitioner {
static readonly "BASE_INDEXES_TAG": StringJS

constructor(arg0: $CompoundTag$$Type, arg1: $InventoryHandler$$Type, arg2: $Supplier$$Type<($MemorySettingsCategory$$Type)>)

public "isFilterItem"(arg0: $Item$$Type): boolean
public "getNoSortSlots"(): $Set<(integer)>
public "getFilterItems"(): $Map<($Item), ($Set<(integer)>)>
public "getFirstSpace"(arg0: integer): $Optional<($SlotRange)>
public "addInventoryPart"(arg0: integer, arg1: integer, arg2: $IInventoryPartHandler$$Type): void
public "getPartBySlot"(arg0: integer): $IInventoryPartHandler
public "removeInventoryPart"(arg0: integer): void
public "onSlotLimitChange"(): void
public "isInfinite"(arg0: integer): boolean
public "onInit"(): void
public "serializeNBT"(): $CompoundTag
public "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
get "noSortSlots"(): $Set<(integer)>
get "filterItems"(): $Map<($Item), ($Set<(integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryPartitioner$$Type = ($InventoryPartitioner);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryPartitioner$$Original = $InventoryPartitioner;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ISlotTracker} from "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotTracker"
import {$ITrackedContentsItemHandler$$Interface} from "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ItemStackKey, $ItemStackKey$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IInsertBlockOverride$$Interface} from "net.p3pp3rf1y.sophisticatedcore.inventory.IInsertBlockOverride"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Set, $Set$$Type} from "java.util.Set"
import {$InventoryPartitioner} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryPartitioner"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $InventoryHandler extends $ItemStackHandler implements $ITrackedContentsItemHandler$$Interface, $IInsertBlockOverride$$Interface {
static readonly "INVENTORY_TAG": StringJS

public "validateSlotIndex"(arg0: integer): void
public "onContentsChanged"(arg0: integer): void
public "getStackLimit"(arg0: integer, arg1: $ItemStack$$Type): integer
public "isFilterItem"(arg0: $Item$$Type): boolean
public "getSlotTracker"(): $ISlotTracker
public "getStackSizeMultiplier"(): double
public "getSlotStack"(arg0: integer): $ItemStack
public "setPersistent"(arg0: boolean): void
public "changeSlots"(arg0: integer): void
public "unregisterStackKeyListeners"(): void
public "unregisterFilterItemsChangeListener"(): void
public "registerFilterItemsChangeListener"(arg0: $Consumer$$Type<($Set<($Item)>)>): void
public "registerTrackingListeners"(arg0: $Consumer$$Type<($ItemStackKey)>, arg1: $Consumer$$Type<($ItemStackKey)>, arg2: $Runnable$$Type, arg3: $Runnable$$Type): void
public "hasEmptySlots"(): boolean
public "saveInventory"(): void
public "getNoSortSlots"(): $Set<(integer)>
public "isSlotAccessible"(arg0: integer): boolean
public "getBaseStackLimit"(arg0: $ItemStack$$Type): integer
public "getFilterItem"(arg0: integer): $Item
public "extractItemInternal"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getFilterItems"(): $Set<($Item)>
public "getTrackedStacks"(): $Set<($ItemStackKey)>
public "isInsertBlocked"(): boolean
public "setBaseSlotLimit"(arg0: integer): void
public "triggerOnChangeListeners"(arg0: integer): void
public "getBaseSlotLimit"(): integer
public "setSlotStack"(arg0: integer, arg1: $ItemStack$$Type): void
public "getInventoryPartitioner"(): $InventoryPartitioner
public "onSlotFilterChanged"(arg0: integer): void
public "setShouldInsertIntoEmpty"(arg0: $BooleanSupplier$$Type): void
public "insertItemOnlyToSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "copyStacksTo"(arg0: $InventoryHandler$$Type): void
public "initFilterItems"(): void
public "onFilterItemsChanged"(): void
public "setSize"(arg0: integer): void
public "isInfinite"(arg0: integer): boolean
public "addListener"(arg0: $IntConsumer$$Type): void
public "onInit"(): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "extractItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Player$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
public "clearListeners"(): void
get "slotTracker"(): $ISlotTracker
get "stackSizeMultiplier"(): double
set "persistent"(value: boolean)
get "noSortSlots"(): $Set<(integer)>
get "filterItems"(): $Set<($Item)>
get "trackedStacks"(): $Set<($ItemStackKey)>
get "insertBlocked"(): boolean
set "baseSlotLimit"(value: integer)
get "baseSlotLimit"(): integer
get "inventoryPartitioner"(): $InventoryPartitioner
set "shouldInsertIntoEmpty"(value: $BooleanSupplier$$Type)
set "size"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryHandler$$Type = ($InventoryHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryHandler$$Original = $InventoryHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotTracker" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ISlotTracker$IItemHandlerInserter$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotTracker$IItemHandlerInserter"
import {$ItemStackKey, $ItemStackKey$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ISlotTracker$IItemHandlerExtractor$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotTracker$IItemHandlerExtractor"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"

export interface $ISlotTracker$$Interface {
get "items"(): $Set<($Item)>
get "fullStacks"(): $Set<($ItemStackKey)>
get "partialStacks"(): $Set<($ItemStackKey)>
set "shouldInsertIntoEmpty"(value: $BooleanSupplier$$Type)
}

export class $ISlotTracker implements $ISlotTracker$$Interface {
 "getItems"(): $Set<($Item)>
 "getFullStacks"(): $Set<($ItemStackKey)>
 "getPartialStacks"(): $Set<($ItemStackKey)>
 "unregisterStackKeyListeners"(): void
 "hasEmptySlots"(): boolean
 "hasExactStackMemorized"(arg0: $ItemStackKey$$Type): boolean
 "hasItemMemorizedOrFiltered"(arg0: $Item$$Type): boolean
 "getFirstMatchingSlot"(arg0: $ItemStackKey$$Type): integer
 "refreshSlotIndexesFrom"(arg0: $InventoryHandler$$Type): void
 "removeAndSetSlotIndexes"(arg0: $InventoryHandler$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "insertItemIntoHandler"(arg0: $InventoryHandler$$Type, arg1: $BiFunction$$Type<($ItemStack), (boolean), ($ItemStack$$Type)>, arg2: $ISlotTracker$IItemHandlerInserter$$Type, arg3: $UnaryOperator$$Type<($ItemStack)>, arg4: $UnaryOperator$$Type<($ItemStack)>, arg5: integer, arg6: $ItemStack$$Type, arg7: boolean): $ItemStack
 "insertItemIntoHandler"(arg0: $InventoryHandler$$Type, arg1: $BiFunction$$Type<($ItemStack), (boolean), ($ItemStack$$Type)>, arg2: $ISlotTracker$IItemHandlerInserter$$Type, arg3: $UnaryOperator$$Type<($ItemStack)>, arg4: $UnaryOperator$$Type<($ItemStack)>, arg5: $ItemStack$$Type, arg6: boolean): $ItemStack
 "setShouldInsertIntoEmpty"(arg0: $BooleanSupplier$$Type): void
 "extractItemFromHandler"(arg0: $InventoryHandler$$Type, arg1: $ISlotTracker$IItemHandlerExtractor$$Type, arg2: $ItemStack$$Type, arg3: boolean): $ItemStack
 "clear"(): void
 "registerListeners"(arg0: $Consumer$$Type<($ItemStackKey)>, arg1: $Consumer$$Type<($ItemStackKey)>, arg2: $Runnable$$Type, arg3: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$$Type = ($ISlotTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISlotTracker$$Original = $ISlotTracker;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$List} from "java.util.List"
import {$IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IItemHandlerSimpleInserter$$Interface extends $IItemHandlerModifiable$$Interface {
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
}

export class $IItemHandlerSimpleInserter implements $IItemHandlerSimpleInserter$$Interface {
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getBlock"(level: $Level$$Type): $LevelBlock
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "clear"(): void
 "clear"(match: $ItemPredicate$$Type): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "getAllItems"(): $List<($ItemStack)>
 "asContainer"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerSimpleInserter$$Type = ($IItemHandlerSimpleInserter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemHandlerSimpleInserter$$Original = $IItemHandlerSimpleInserter;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotTracker$IItemHandlerInserter" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ISlotTracker$IItemHandlerInserter$$Interface {

(arg0: integer, arg1: $ItemStack, arg2: boolean): $ItemStack$$Type
}

export class $ISlotTracker$IItemHandlerInserter implements $ISlotTracker$IItemHandlerInserter$$Interface {
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$IItemHandlerInserter$$Type = ((arg0: integer, arg1: $ItemStack, arg2: boolean) => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISlotTracker$IItemHandlerInserter$$Original = $ISlotTracker$IItemHandlerInserter;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ServerTickEvent$Post$$Type} from "net.neoforged.neoforge.event.tick.ServerTickEvent$Post"

export class $ItemStackKey {
public static "clearCacheOnTickEnd"(arg0: $ServerTickEvent$Post$$Type): void
public "hashCodeNotEquals"(arg0: $ItemStack$$Type): boolean
public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type): boolean
public static "of"(arg0: $ItemStack$$Type): $ItemStackKey
public "getStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackKey$$Type = ($ItemStackKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackKey$$Original = $ItemStackKey;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotTracker$IItemHandlerExtractor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ISlotTracker$IItemHandlerExtractor$$Interface {

(arg0: integer, arg1: integer, arg2: boolean): $ItemStack$$Type
}

export class $ISlotTracker$IItemHandlerExtractor implements $ISlotTracker$IItemHandlerExtractor$$Interface {
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$IItemHandlerExtractor$$Type = ((arg0: integer, arg1: integer, arg2: boolean) => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISlotTracker$IItemHandlerExtractor$$Original = $ISlotTracker$IItemHandlerExtractor;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.IInventoryPartHandler" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$TriFunction$$Type} from "org.apache.commons.lang3.function.TriFunction"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $IInventoryPartHandler$$Interface {

(): StringJS
get "noSortSlots"(): $Set<(integer)>
get "filterItems"(): $Map<($Item), ($Set<(integer)>)>
get "name"(): StringJS
get "slots"(): integer
}

export class $IInventoryPartHandler implements $IInventoryPartHandler$$Interface {
static readonly "EMPTY": $IInventoryPartHandler

 "canBeReplaced"(): boolean
 "onContentsChanged"(arg0: integer, arg1: $BiConsumer$$Type<(integer), ($ItemStack)>): void
 "getStackLimit"(arg0: integer, arg1: $ItemStack$$Type): integer
 "isFilterItem"(arg0: $Item$$Type): boolean
 "getNoSortSlots"(): $Set<(integer)>
 "isSlotAccessible"(arg0: integer): boolean
 "getFilterItem"(arg0: integer): $Item
 "getFilterItems"(): $Map<($Item), ($Set<(integer)>)>
 "onSlotLimitChange"(): void
 "onSlotFilterChanged"(arg0: integer): void
 "getName"(): StringJS
 "isInfinite"(arg0: integer): boolean
 "onInit"(): void
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer, arg1: $IntFunction$$Type<($ItemStack$$Type)>): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean, arg3: $TriFunction$$Type<(integer), ($ItemStack), (boolean), ($ItemStack$$Type)>): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $BiPredicate$$Type<(integer), ($ItemStack)>): boolean
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: $BiConsumer$$Type<(integer), ($ItemStack)>): void
 "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryPartHandler$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInventoryPartHandler$$Original = $IInventoryPartHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotChangeListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISlotChangeListener$$Interface {

(arg0: integer): void
}

export class $ISlotChangeListener implements $ISlotChangeListener$$Interface {
 "onSlotChanged"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotChangeListener$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISlotChangeListener$$Original = $ISlotChangeListener;}
