declare module "net.minecraft.world.BossEvent$BossBarColor" {
import {$Enum} from "java.lang.Enum"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $BossEvent$BossBarColor extends $Enum<($BossEvent$BossBarColor)> {
static readonly "RED": $BossEvent$BossBarColor
static readonly "WHITE": $BossEvent$BossBarColor
static readonly "PINK": $BossEvent$BossBarColor
static readonly "BLUE": $BossEvent$BossBarColor
static readonly "YELLOW": $BossEvent$BossBarColor
static readonly "PURPLE": $BossEvent$BossBarColor
static readonly "GREEN": $BossEvent$BossBarColor

public "getFormatting"(): $ChatFormatting
public "getName"(): StringJS
public static "values"(): ($BossEvent$BossBarColor)[]
public static "valueOf"(arg0: StringJS): $BossEvent$BossBarColor
public static "byName"(arg0: StringJS): $BossEvent$BossBarColor
get "formatting"(): $ChatFormatting
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossEvent$BossBarColor$$Type = (("pink") | ("blue") | ("red") | ("green") | ("yellow") | ("purple") | ("white"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossEvent$BossBarColor$$Original = $BossEvent$BossBarColor;}
declare module "net.minecraft.world.Clearable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Clearable$$Interface {

(): void
}

export class $Clearable implements $Clearable$$Interface {
 "clearContent"(): void
static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clearable$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Clearable$$Original = $Clearable;}
declare module "net.minecraft.world.InteractionResultHolder" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"

export class $InteractionResultHolder<T> {
constructor(arg0: $InteractionResult$$Type, arg1: T)

public static "pass"<T>(arg0: T): $InteractionResultHolder<(T)>
public static "consume"<T>(arg0: T): $InteractionResultHolder<(T)>
public static "success"<T>(arg0: T): $InteractionResultHolder<(T)>
public "getResult"(): $InteractionResult
public static "fail"<T>(arg0: T): $InteractionResultHolder<(T)>
public "getObject"(): T
public static "sidedSuccess"<T>(arg0: T, arg1: boolean): $InteractionResultHolder<(T)>
get "result"(): $InteractionResult
get "object"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionResultHolder$$Type<T> = ($InteractionResultHolder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InteractionResultHolder$$Original<T> = $InteractionResultHolder<(T)>;}
declare module "net.minecraft.world.LockCode" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $LockCode extends $Record {
static readonly "CODEC": $Codec<($LockCode)>
static readonly "NO_LOCK": $LockCode
static readonly "TAG_LOCK": StringJS

constructor(arg0: StringJS)

public "addToTag"(arg0: $CompoundTag$$Type): void
public "unlocksWith"(arg0: $ItemStack$$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): StringJS
public static "fromTag"(arg0: $CompoundTag$$Type): $LockCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockCode$$Type = ({"key"?: StringJS}) | ([key?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LockCode$$Original = $LockCode;}
declare module "net.minecraft.world.TickRateManager" {
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TickRateManager {
static readonly "MIN_TICKRATE": float

constructor()

public "isSteppingForward"(): boolean
public "setTickRate"(arg0: float): void
public "setFrozen"(arg0: boolean): void
public "setFrozenTicksToRun"(arg0: integer): void
public "frozenTicksToRun"(): integer
public "nanosecondsPerTick"(): long
public "tick"(): void
public "isFrozen"(): boolean
public "runsNormally"(): boolean
public "millisecondsPerTick"(): float
public "isEntityFrozen"(arg0: $Entity$$Type): boolean
public "tickrate"(): float
get "steppingForward"(): boolean
set "tickRate"(value: float)
set "frozen"(value: boolean)
get "frozen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickRateManager$$Type = ($TickRateManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickRateManager$$Original = $TickRateManager;}
declare module "net.minecraft.world.BossEvent" {
import {$BossEvent$BossBarColor, $BossEvent$BossBarColor$$Type} from "net.minecraft.world.BossEvent$BossBarColor"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BossEvent$BossBarOverlay, $BossEvent$BossBarOverlay$$Type} from "net.minecraft.world.BossEvent$BossBarOverlay"

export class $BossEvent {
constructor(arg0: $UUID$$Type, arg1: $Component$$Type, arg2: $BossEvent$BossBarColor$$Type, arg3: $BossEvent$BossBarOverlay$$Type)

public "setDarkenScreen"(arg0: boolean): $BossEvent
public "setCreateWorldFog"(arg0: boolean): $BossEvent
public "setColor"(arg0: $BossEvent$BossBarColor$$Type): void
public "getName"(): $Component
public "setName"(arg0: $Component$$Type): void
public "getId"(): $UUID
public "shouldCreateWorldFog"(): boolean
public "setOverlay"(arg0: $BossEvent$BossBarOverlay$$Type): void
public "getColor"(): $BossEvent$BossBarColor
public "getOverlay"(): $BossEvent$BossBarOverlay
public "shouldDarkenScreen"(): boolean
public "getProgress"(): float
public "setProgress"(arg0: float): void
public "shouldPlayBossMusic"(): boolean
public "setPlayBossMusic"(arg0: boolean): $BossEvent
set "darkenScreen"(value: boolean)
set "createWorldFog"(value: boolean)
set "color"(value: $BossEvent$BossBarColor$$Type)
get "name"(): $Component
set "name"(value: $Component$$Type)
get "id"(): $UUID
set "overlay"(value: $BossEvent$BossBarOverlay$$Type)
get "color"(): $BossEvent$BossBarColor
get "overlay"(): $BossEvent$BossBarOverlay
get "progress"(): float
set "progress"(value: float)
set "playBossMusic"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossEvent$$Type = ($BossEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossEvent$$Original = $BossEvent;}
declare module "net.minecraft.world.BossEvent$BossBarOverlay" {
import {$Enum} from "java.lang.Enum"

export class $BossEvent$BossBarOverlay extends $Enum<($BossEvent$BossBarOverlay)> {
static readonly "NOTCHED_6": $BossEvent$BossBarOverlay
static readonly "NOTCHED_12": $BossEvent$BossBarOverlay
static readonly "PROGRESS": $BossEvent$BossBarOverlay
static readonly "NOTCHED_20": $BossEvent$BossBarOverlay
static readonly "NOTCHED_10": $BossEvent$BossBarOverlay

public "getName"(): StringJS
public static "values"(): ($BossEvent$BossBarOverlay)[]
public static "valueOf"(arg0: StringJS): $BossEvent$BossBarOverlay
public static "byName"(arg0: StringJS): $BossEvent$BossBarOverlay
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossEvent$BossBarOverlay$$Type = (("progress") | ("notched_6") | ("notched_10") | ("notched_12") | ("notched_20"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossEvent$BossBarOverlay$$Original = $BossEvent$BossBarOverlay;}
declare module "net.minecraft.world.WorldlyContainerHolder" {
import {$WorldlyContainer, $WorldlyContainer$$Type} from "net.minecraft.world.WorldlyContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $WorldlyContainerHolder$$Interface {

(arg0: $BlockState, arg1: $LevelAccessor, arg2: $BlockPos): $WorldlyContainer$$Type
}

export class $WorldlyContainerHolder implements $WorldlyContainerHolder$$Interface {
 "getContainer"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type): $WorldlyContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldlyContainerHolder$$Type = ((arg0: $BlockState, arg1: $LevelAccessor, arg2: $BlockPos) => $WorldlyContainer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldlyContainerHolder$$Original = $WorldlyContainerHolder;}
declare module "net.minecraft.world.DifficultyInstance" {
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"

export class $DifficultyInstance {
constructor(arg0: $Difficulty$$Type, arg1: long, arg2: long, arg3: float)

public "getEffectiveDifficulty"(): float
public "getSpecialMultiplier"(): float
public "isHarderThan"(arg0: float): boolean
public "isHard"(): boolean
public "getDifficulty"(): $Difficulty
get "effectiveDifficulty"(): float
get "specialMultiplier"(): float
get "hard"(): boolean
get "difficulty"(): $Difficulty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DifficultyInstance$$Type = ($DifficultyInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DifficultyInstance$$Original = $DifficultyInstance;}
declare module "net.minecraft.world.InteractionHand" {
import {$Enum} from "java.lang.Enum"

export class $InteractionHand extends $Enum<($InteractionHand)> {
static readonly "MAIN_HAND": $InteractionHand
static readonly "OFF_HAND": $InteractionHand

public static "values"(): ($InteractionHand)[]
public static "valueOf"(arg0: StringJS): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionHand$$Type = (("main_hand") | ("off_hand"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InteractionHand$$Original = $InteractionHand;}
declare module "net.minecraft.world.WorldlyContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $WorldlyContainer$$Interface extends $Container$$Interface {
get "empty"(): boolean
get "maxStackSize"(): integer
get "changed"(): void
get "containerSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $WorldlyContainer implements $WorldlyContainer$$Interface {
 "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
 "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
 "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
 "getItem"(arg0: integer): $ItemStack
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "setChanged"(): void
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "clearContent"(): void
static "tryClear"(arg0: any): void
 "self"(): $Container
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getStackInSlot"(slot: integer): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getSlotLimit"(slot: integer): integer
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "clear"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "getBlock"(level: $Level$$Type): $LevelBlock
 "setChanged"(): void
 "asContainer"(): $Container
 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "clear"(match: $ItemPredicate$$Type): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldlyContainer$$Type = ($WorldlyContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldlyContainer$$Original = $WorldlyContainer;}
declare module "net.minecraft.world.Container" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ContainerMixin$$Interface} from "net.caffeinemc.mods.lithium.mixin.block.hopper.ContainerMixin"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LithiumCooldownReceivingInventory$$Interface} from "net.caffeinemc.mods.lithium.api.inventory.LithiumCooldownReceivingInventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable$$Interface} from "net.minecraft.world.Clearable"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$LithiumTransferConditionInventory$$Interface} from "net.caffeinemc.mods.lithium.api.inventory.LithiumTransferConditionInventory"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$ContainerKJS$$Interface} from "dev.latvian.mods.kubejs.core.ContainerKJS"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $Container$$Interface extends $Clearable$$Interface, $ContainerKJS$$Interface, $LithiumCooldownReceivingInventory$$Interface, $ContainerMixin$$Interface, $LithiumTransferConditionInventory$$Interface {
get "empty"(): boolean
get "maxStackSize"(): integer
get "changed"(): void
get "containerSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $Container implements $Container$$Interface {
static readonly "DEFAULT_DISTANCE_BUFFER": float

 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
 "getItem"(arg0: integer): $ItemStack
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "setChanged"(): void
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "clearContent"(): void
static "tryClear"(arg0: any): void
 "self"(): $Container
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getStackInSlot"(slot: integer): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getSlotLimit"(slot: integer): integer
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "clear"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "getBlock"(level: $Level$$Type): $LevelBlock
 "setChanged"(): void
 "asContainer"(): $Container
 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "clear"(match: $ItemPredicate$$Type): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Container$$Type = ($Container);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Container$$Original = $Container;}
declare module "net.minecraft.world.InteractionResult" {
import {$Enum} from "java.lang.Enum"

export class $InteractionResult extends $Enum<($InteractionResult)> {
static readonly "SUCCESS": $InteractionResult
static readonly "PASS": $InteractionResult
static readonly "CONSUME_PARTIAL": $InteractionResult
static readonly "SUCCESS_NO_ITEM_USED": $InteractionResult
static readonly "CONSUME": $InteractionResult
static readonly "FAIL": $InteractionResult

public "indicateItemUse"(): boolean
public static "values"(): ($InteractionResult)[]
public static "valueOf"(arg0: StringJS): $InteractionResult
public "consumesAction"(): boolean
public "shouldSwing"(): boolean
public static "sidedSuccess"(arg0: boolean): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractionResult$$Type = (("success") | ("success_no_item_used") | ("consume") | ("consume_partial") | ("pass") | ("fail"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InteractionResult$$Original = $InteractionResult;}
declare module "net.minecraft.world.SimpleContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$StackedContentsCompatible$$Interface} from "net.minecraft.world.inventory.StackedContentsCompatible"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$ContainerListener$$Type} from "net.minecraft.world.ContainerListener"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export class $SimpleContainer implements $Container$$Interface, $StackedContentsCompatible$$Interface {
constructor(arg0: integer)
constructor(...arg0: ($ItemStack$$Type)[])

public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "getItems"(): $NonNullList<($ItemStack)>
public "fillStackedContents"(arg0: $StackedContents$$Type): void
public "removeItemType"(arg0: $Item$$Type, arg1: integer): $ItemStack
public "canAddItem"(arg0: $ItemStack$$Type): boolean
public "addItem"(arg0: $ItemStack$$Type): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "createTag"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "removeAllItems"(): $List<($ItemStack)>
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "toString"(): StringJS
public "isEmpty"(): boolean
public "removeListener"(arg0: $ContainerListener$$Type): void
public "addListener"(arg0: $ContainerListener$$Type): void
public "setChanged"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "fromTag"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
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
get "items"(): $NonNullList<($ItemStack)>
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
export type $SimpleContainer$$Type = ($SimpleContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleContainer$$Original = $SimpleContainer;}
declare module "net.minecraft.world.RandomSequences" {
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RandomSequence$$Type} from "net.minecraft.world.RandomSequence"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$SavedData} from "net.minecraft.world.level.saveddata.SavedData"
import {$SavedData$Factory} from "net.minecraft.world.level.saveddata.SavedData$Factory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RandomSequences extends $SavedData {
constructor(arg0: long)

public "forAllSequences"(arg0: $BiConsumer$$Type<($ResourceLocation), ($RandomSequence)>): void
public "setSeedDefaults"(arg0: integer, arg1: boolean, arg2: boolean): void
public "reset"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean, arg3: boolean): void
public "reset"(arg0: $ResourceLocation$$Type): void
public "get"(arg0: $ResourceLocation$$Type): $RandomSource
public static "load"(arg0: long, arg1: $CompoundTag$$Type): $RandomSequences
public "clear"(): integer
public static "factory"(arg0: long): $SavedData$Factory<($RandomSequences)>
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomSequences$$Type = ($RandomSequences);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RandomSequences$$Original = $RandomSequences;}
declare module "net.minecraft.world.ContainerListener" {
import {$Container, $Container$$Type} from "net.minecraft.world.Container"

export interface $ContainerListener$$Interface {

(arg0: $Container): void
}

export class $ContainerListener implements $ContainerListener$$Interface {
 "containerChanged"(arg0: $Container$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerListener$$Type = ((arg0: $Container) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerListener$$Original = $ContainerListener;}
declare module "net.minecraft.world.MenuProvider" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MenuConstructor$$Interface} from "net.minecraft.world.inventory.MenuConstructor"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$IMenuProviderExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IMenuProviderExtension"

export interface $MenuProvider$$Interface extends $MenuConstructor$$Interface, $IMenuProviderExtension$$Interface {
get "displayName"(): $Component
}

export class $MenuProvider implements $MenuProvider$$Interface {
 "getDisplayName"(): $Component
 "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
 "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
 "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuProvider$$Type = ($MenuProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuProvider$$Original = $MenuProvider;}
declare module "net.minecraft.world.Difficulty" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $Difficulty extends $Enum<($Difficulty)> implements $StringRepresentable$$Interface {
static readonly "EASY": $Difficulty
static readonly "CODEC": $StringRepresentable$EnumCodec<($Difficulty)>
static readonly "PEACEFUL": $Difficulty
static readonly "HARD": $Difficulty
static readonly "NORMAL": $Difficulty

public "getInfo"(): $Component
public static "values"(): ($Difficulty)[]
public static "valueOf"(arg0: StringJS): $Difficulty
public "getKey"(): StringJS
public "getId"(): integer
public "getDisplayName"(): $Component
public static "byName"(arg0: StringJS): $Difficulty
public "getSerializedName"(): StringJS
public static "byId"(arg0: integer): $Difficulty
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "info"(): $Component
get "key"(): StringJS
get "id"(): integer
get "displayName"(): $Component
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Difficulty$$Type = (("peaceful") | ("easy") | ("normal") | ("hard"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Difficulty$$Original = $Difficulty;}
declare module "net.minecraft.world.ItemInteractionResult" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Enum} from "java.lang.Enum"

export class $ItemInteractionResult extends $Enum<($ItemInteractionResult)> {
static readonly "SUCCESS": $ItemInteractionResult
static readonly "SKIP_DEFAULT_BLOCK_INTERACTION": $ItemInteractionResult
static readonly "CONSUME_PARTIAL": $ItemInteractionResult
static readonly "CONSUME": $ItemInteractionResult
static readonly "PASS_TO_DEFAULT_BLOCK_INTERACTION": $ItemInteractionResult
static readonly "FAIL": $ItemInteractionResult

public static "values"(): ($ItemInteractionResult)[]
public static "valueOf"(arg0: StringJS): $ItemInteractionResult
public "result"(): $InteractionResult
public "consumesAction"(): boolean
public static "sidedSuccess"(arg0: boolean): $ItemInteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInteractionResult$$Type = (("success") | ("consume") | ("consume_partial") | ("pass_to_default_block_interaction") | ("skip_default_block_interaction") | ("fail"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInteractionResult$$Original = $ItemInteractionResult;}
declare module "net.minecraft.world.RandomizableContainer" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $RandomizableContainer$$Interface extends $Container$$Interface {
set "lootTable"(value: $ResourceKey$$Type<($LootTable)>)
set "lootTableSeed"(value: long)
get "level"(): $Level
get "blockPos"(): $BlockPos
get "lootTable"(): $ResourceKey<($LootTable)>
get "lootTableSeed"(): long
get "empty"(): boolean
get "maxStackSize"(): integer
get "changed"(): void
get "containerSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $RandomizableContainer implements $RandomizableContainer$$Interface {
static readonly "LOOT_TABLE_SEED_TAG": StringJS
static readonly "LOOT_TABLE_TAG": StringJS

 "unpackLootTable"(arg0: $Player$$Type): void
 "tryLoadLootTable"(arg0: $CompoundTag$$Type): boolean
 "trySaveLootTable"(arg0: $CompoundTag$$Type): boolean
 "setLootTable"(arg0: $ResourceKey$$Type<($LootTable)>): void
 "setLootTable"(arg0: $ResourceKey$$Type<($LootTable)>, arg1: long): void
 "setLootTableSeed"(arg0: long): void
 "wrapOperation$fak000$lootr$setLootTable"(arg0: $RandomizableContainer$$Type, arg1: $ResourceKey$$Type, arg2: $Operation$$Type): void
static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
 "wrapOperation$fak000$lootr$tryLoadLootTable"(arg0: $RandomizableContainer$$Type, arg1: long, arg2: $Operation$$Type): void
 "handler$fak000$lootr$unpackLootTable"(arg0: $Player$$Type, arg1: $CallbackInfo$$Type): void
 "getLevel"(): $Level
 "getBlockPos"(): $BlockPos
 "getLootTable"(): $ResourceKey<($LootTable)>
 "getLootTableSeed"(): long
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
 "getItem"(arg0: integer): $ItemStack
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "setChanged"(): void
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "clearContent"(): void
static "tryClear"(arg0: any): void
 "self"(): $Container
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getStackInSlot"(slot: integer): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getSlotLimit"(slot: integer): integer
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "clear"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "getBlock"(level: $Level$$Type): $LevelBlock
 "setChanged"(): void
 "asContainer"(): $Container
 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "clear"(match: $ItemPredicate$$Type): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomizableContainer$$Type = ($RandomizableContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RandomizableContainer$$Original = $RandomizableContainer;}
declare module "net.minecraft.world.RandomSequence" {
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$XoroshiroRandomSource$$Type} from "net.minecraft.world.level.levelgen.XoroshiroRandomSource"
import {$RandomSupport$Seed128bit} from "net.minecraft.world.level.levelgen.RandomSupport$Seed128bit"

export class $RandomSequence {
static readonly "CODEC": $Codec<($RandomSequence)>

constructor(arg0: $XoroshiroRandomSource$$Type)
constructor(arg0: long, arg1: $ResourceLocation$$Type)
constructor(arg0: long, arg1: ($ResourceLocation$$Type)?)

public static "seedForKey"(arg0: $ResourceLocation$$Type): $RandomSupport$Seed128bit
public "random"(): $RandomSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomSequence$$Type = ($RandomSequence);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RandomSequence$$Original = $RandomSequence;}
declare module "net.minecraft.world.Nameable" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $Nameable$$Interface {

(): $Component$$Type
get "name"(): $Component
get "displayName"(): $Component
get "customName"(): $Component
}

export class $Nameable implements $Nameable$$Interface {
 "getName"(): $Component
 "getDisplayName"(): $Component
 "hasCustomName"(): boolean
 "getCustomName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Nameable$$Type = (() => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Nameable$$Original = $Nameable;}
