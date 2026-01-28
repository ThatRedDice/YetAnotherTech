declare module "net.minecraft.world.ticks.LevelTickAccess" {
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TickAccess$$Interface} from "net.minecraft.world.ticks.TickAccess"
import {$ScheduledTick$$Type} from "net.minecraft.world.ticks.ScheduledTick"

export interface $LevelTickAccess$$Interface<T> extends $TickAccess$$Interface<(T)> {
}

export class $LevelTickAccess<T> implements $LevelTickAccess$$Interface {
 "willTickThisTick"(arg0: $BlockPos$$Type, arg1: T): boolean
 "hasScheduledTick"(arg0: $BlockPos$$Type, arg1: T): boolean
 "count"(): integer
 "schedule"(arg0: $ScheduledTick$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelTickAccess$$Type<T> = ($LevelTickAccess<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelTickAccess$$Original<T> = $LevelTickAccess<(T)>;}
declare module "net.minecraft.world.ticks.ContainerSingleItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ContainerSingleItem$$Interface extends $Container$$Interface {
get "theItem"(): $ItemStack
set "theItem"(value: $ItemStack$$Type)
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "changed"(): void
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $ContainerSingleItem implements $ContainerSingleItem$$Interface {
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "clearContent"(): void
 "getTheItem"(): $ItemStack
 "setTheItem"(arg0: $ItemStack$$Type): void
 "removeTheItem"(): $ItemStack
 "splitTheItem"(arg0: integer): $ItemStack
 "getItem"(arg0: integer): $ItemStack
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "setChanged"(): void
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "stillValid"(arg0: $Player$$Type): boolean
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
export type $ContainerSingleItem$$Type = ($ContainerSingleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerSingleItem$$Original = $ContainerSingleItem;}
declare module "net.minecraft.world.ticks.ScheduledTick" {
import {$TickPriority, $TickPriority$$Type} from "net.minecraft.world.ticks.TickPriority"
import {$Hash$Strategy} from "it.unimi.dsi.fastutil.Hash$Strategy"
import {$Comparator} from "java.util.Comparator"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $ScheduledTick<T> extends $Record {
static readonly "INTRA_TICK_DRAIN_ORDER": $Comparator<($ScheduledTick<(never)>)>
static readonly "UNIQUE_TICK_HASH": $Hash$Strategy<($ScheduledTick<(never)>)>
static readonly "DRAIN_ORDER": $Comparator<($ScheduledTick<(never)>)>

constructor(arg0: T, arg1: $BlockPos$$Type, arg2: long, arg3: long)
constructor(arg0: T, arg1: $BlockPos$$Type, arg2: long, arg3: $TickPriority$$Type, arg4: long)

public "triggerTick"(): long
public "subTickOrder"(): long
public "priority"(): $TickPriority
public "type"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "probe"<T>(arg0: T, arg1: $BlockPos$$Type): $ScheduledTick<(T)>
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledTick$$Type<T> = ({"pos"?: $BlockPos$$Type, "type"?: T, "subTickOrder"?: long, "triggerTick"?: long, "priority"?: $TickPriority$$Type}) | ([pos?: $BlockPos$$Type, type?: T, subTickOrder?: long, triggerTick?: long, priority?: $TickPriority$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScheduledTick$$Original<T> = $ScheduledTick<(T)>;}
declare module "net.minecraft.world.ticks.LevelChunkTicks" {
import {$SerializableTickContainer$$Interface} from "net.minecraft.world.ticks.SerializableTickContainer"
import {$Optional$$Type} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SavedTick$$Type} from "net.minecraft.world.ticks.SavedTick"
import {$ScheduledTick, $ScheduledTick$$Type} from "net.minecraft.world.ticks.ScheduledTick"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$TickContainerAccess$$Interface} from "net.minecraft.world.ticks.TickContainerAccess"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"

export class $LevelChunkTicks<T> implements $SerializableTickContainer$$Interface<(T)>, $TickContainerAccess$$Interface<(T)> {
constructor()
constructor(arg0: $List$$Type<($SavedTick$$Type<(T)>)>)

public "hasScheduledTick"(arg0: $BlockPos$$Type, arg1: any): boolean
public "setOnTickAdded"(arg0: $BiConsumer$$Type<($LevelChunkTicks<(T)>), ($ScheduledTick<(T)>)>): void
public "getAll"(): $Stream
public static "load"<T>(arg0: $ListTag$$Type, arg1: $Function$$Type<(StringJS), ((T)?)>, arg2: $ChunkPos$$Type): $LevelChunkTicks<(T)>
public "count"(): integer
public "schedule"(arg0: $ScheduledTick$$Type): void
public "save"(arg0: long, arg1: $Function$$Type): $ListTag
public "peek"(): $ScheduledTick
public "removeIf"(arg0: $Predicate$$Type): void
public "poll"(): $ScheduledTick
public "unpack"(arg0: long): void
set "onTickAdded"(value: $BiConsumer$$Type<($LevelChunkTicks<(T)>), ($ScheduledTick<(T)>)>)
get "all"(): $Stream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelChunkTicks$$Type<T> = ($LevelChunkTicks<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelChunkTicks$$Original<T> = $LevelChunkTicks<(T)>;}
declare module "net.minecraft.world.ticks.SerializableTickContainer" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export interface $SerializableTickContainer$$Interface<T> {

(arg0: long, arg1: $Function<(T), (StringJS)>): $Tag$$Type
}

export class $SerializableTickContainer<T> implements $SerializableTickContainer$$Interface {
 "save"(arg0: long, arg1: $Function$$Type<(T), (StringJS)>): $Tag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializableTickContainer$$Type<T> = ((arg0: long, arg1: $Function<(T), (StringJS)>) => $Tag$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SerializableTickContainer$$Original<T> = $SerializableTickContainer<(T)>;}
declare module "net.minecraft.world.ticks.TickAccess" {
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ScheduledTick$$Type} from "net.minecraft.world.ticks.ScheduledTick"

export interface $TickAccess$$Interface<T> {
}

export class $TickAccess<T> implements $TickAccess$$Interface {
 "hasScheduledTick"(arg0: $BlockPos$$Type, arg1: T): boolean
 "count"(): integer
 "schedule"(arg0: $ScheduledTick$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickAccess$$Type<T> = ($TickAccess<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickAccess$$Original<T> = $TickAccess<(T)>;}
declare module "net.minecraft.world.ticks.ProtoChunkTicks" {
import {$TickContainerAccess$$Interface} from "net.minecraft.world.ticks.TickContainerAccess"
import {$SerializableTickContainer$$Interface} from "net.minecraft.world.ticks.SerializableTickContainer"
import {$Optional$$Type} from "java.util.Optional"
import {$Function$$Type} from "java.util.function.Function"
import {$List} from "java.util.List"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$SavedTick} from "net.minecraft.world.ticks.SavedTick"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ScheduledTick$$Type} from "net.minecraft.world.ticks.ScheduledTick"
import {$ListTag$$Type} from "net.minecraft.nbt.ListTag"

export class $ProtoChunkTicks<T> implements $SerializableTickContainer$$Interface<(T)>, $TickContainerAccess$$Interface<(T)> {
constructor()

public "scheduledTicks"(): $List<($SavedTick<(T)>)>
public "hasScheduledTick"(arg0: $BlockPos$$Type, arg1: T): boolean
public static "load"<T>(arg0: $ListTag$$Type, arg1: $Function$$Type<(StringJS), ((T)?)>, arg2: $ChunkPos$$Type): $ProtoChunkTicks<(T)>
public "count"(): integer
public "schedule"(arg0: $ScheduledTick$$Type<(T)>): void
public "save"(arg0: long, arg1: $Function$$Type<(T), (StringJS)>): $Tag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtoChunkTicks$$Type<T> = ($ProtoChunkTicks<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProtoChunkTicks$$Original<T> = $ProtoChunkTicks<(T)>;}
declare module "net.minecraft.world.ticks.TickContainerAccess" {
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TickAccess$$Interface} from "net.minecraft.world.ticks.TickAccess"
import {$ScheduledTick$$Type} from "net.minecraft.world.ticks.ScheduledTick"

export interface $TickContainerAccess$$Interface<T> extends $TickAccess$$Interface<(T)> {
}

export class $TickContainerAccess<T> implements $TickContainerAccess$$Interface {
 "hasScheduledTick"(arg0: $BlockPos$$Type, arg1: T): boolean
 "count"(): integer
 "schedule"(arg0: $ScheduledTick$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickContainerAccess$$Type<T> = ($TickContainerAccess<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickContainerAccess$$Original<T> = $TickContainerAccess<(T)>;}
declare module "net.minecraft.world.ticks.SavedTick" {
import {$TickPriority, $TickPriority$$Type} from "net.minecraft.world.ticks.TickPriority"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Hash$Strategy} from "it.unimi.dsi.fastutil.Hash$Strategy"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Function$$Type} from "java.util.function.Function"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ScheduledTick, $ScheduledTick$$Type} from "net.minecraft.world.ticks.ScheduledTick"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$Record} from "java.lang.Record"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $SavedTick<T> extends $Record {
static readonly "UNIQUE_TICK_HASH": $Hash$Strategy<($SavedTick<(never)>)>

constructor(arg0: T, arg1: $BlockPos$$Type, arg2: integer, arg3: $TickPriority$$Type)

public static "saveTick"(arg0: StringJS, arg1: $BlockPos$$Type, arg2: integer, arg3: $TickPriority$$Type): $CompoundTag
public static "saveTick"<T>(arg0: $ScheduledTick$$Type<(T)>, arg1: $Function$$Type<(T), (StringJS)>, arg2: long): $CompoundTag
public static "loadTickList"<T>(arg0: $ListTag$$Type, arg1: $Function$$Type<(StringJS), ((T)?)>, arg2: $ChunkPos$$Type, arg3: $Consumer$$Type<($SavedTick<(T)>)>): void
public static "loadTick"<T>(arg0: $CompoundTag$$Type, arg1: $Function$$Type<(StringJS), ((T)?)>): $Optional<($SavedTick<(T)>)>
public "priority"(): $TickPriority
public "type"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "delay"(): integer
public "save"(arg0: $Function$$Type<(T), (StringJS)>): $CompoundTag
public static "probe"<T>(arg0: T, arg1: $BlockPos$$Type): $SavedTick<(T)>
public "pos"(): $BlockPos
public "unpack"(arg0: long, arg1: long): $ScheduledTick<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SavedTick$$Type<T> = ({"type"?: T, "delay"?: integer, "pos"?: $BlockPos$$Type, "priority"?: $TickPriority$$Type}) | ([type?: T, delay?: integer, pos?: $BlockPos$$Type, priority?: $TickPriority$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SavedTick$$Original<T> = $SavedTick<(T)>;}
declare module "net.minecraft.world.ticks.ContainerSingleItem$BlockContainerSingleItem" {
import {$ContainerSingleItem$$Interface} from "net.minecraft.world.ticks.ContainerSingleItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ContainerSingleItem$BlockContainerSingleItem$$Interface extends $ContainerSingleItem$$Interface {
get "containerBlockEntity"(): $BlockEntity
get "theItem"(): $ItemStack
set "theItem"(value: $ItemStack$$Type)
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "changed"(): void
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $ContainerSingleItem$BlockContainerSingleItem implements $ContainerSingleItem$BlockContainerSingleItem$$Interface {
 "getContainerBlockEntity"(): $BlockEntity
 "stillValid"(arg0: $Player$$Type): boolean
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "clearContent"(): void
 "getTheItem"(): $ItemStack
 "setTheItem"(arg0: $ItemStack$$Type): void
 "removeTheItem"(): $ItemStack
 "splitTheItem"(arg0: integer): $ItemStack
 "getItem"(arg0: integer): $ItemStack
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "setChanged"(): void
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
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
export type $ContainerSingleItem$BlockContainerSingleItem$$Type = ($ContainerSingleItem$BlockContainerSingleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerSingleItem$BlockContainerSingleItem$$Original = $ContainerSingleItem$BlockContainerSingleItem;}
declare module "net.minecraft.world.ticks.LevelTicks" {
import {$LongPredicate$$Type} from "java.util.function.LongPredicate"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Long2ObjectMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$ScheduledTick$$Type} from "net.minecraft.world.ticks.ScheduledTick"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$LevelTickAccess$$Interface} from "net.minecraft.world.ticks.LevelTickAccess"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LevelChunkTicks, $LevelChunkTicks$$Type} from "net.minecraft.world.ticks.LevelChunkTicks"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $LevelTicks<T> implements $LevelTickAccess$$Interface<(T)> {
readonly "allContainers": $Long2ObjectMap<($LevelChunkTicks<(T)>)>

constructor(arg0: $LongPredicate$$Type, arg1: $Supplier$$Type<($ProfilerFiller$$Type)>)

public "willTickThisTick"(arg0: $BlockPos$$Type, arg1: T): boolean
public "hasScheduledTick"(arg0: $BlockPos$$Type, arg1: T): boolean
public "removeContainer"(arg0: $ChunkPos$$Type): void
public "clearArea"(arg0: $BoundingBox$$Type): void
public "tick"(arg0: long, arg1: integer, arg2: $BiConsumer$$Type<($BlockPos), (T)>): void
public "copyArea"(arg0: $BoundingBox$$Type, arg1: $Vec3i$$Type): void
public "copyAreaFrom"(arg0: $LevelTicks$$Type<(T)>, arg1: $BoundingBox$$Type, arg2: $Vec3i$$Type): void
public "count"(): integer
public "schedule"(arg0: $ScheduledTick$$Type<(T)>): void
public "addContainer"(arg0: $ChunkPos$$Type, arg1: $LevelChunkTicks$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelTicks$$Type<T> = ($LevelTicks<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelTicks$$Original<T> = $LevelTicks<(T)>;}
declare module "net.minecraft.world.ticks.TickPriority" {
import {$Enum} from "java.lang.Enum"

export class $TickPriority extends $Enum<($TickPriority)> {
static readonly "EXTREMELY_LOW": $TickPriority
static readonly "VERY_HIGH": $TickPriority
static readonly "HIGH": $TickPriority
static readonly "LOW": $TickPriority
static readonly "VERY_LOW": $TickPriority
static readonly "EXTREMELY_HIGH": $TickPriority
static readonly "NORMAL": $TickPriority

public static "byValue"(arg0: integer): $TickPriority
public static "values"(): ($TickPriority)[]
public static "valueOf"(arg0: StringJS): $TickPriority
public "getValue"(): integer
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickPriority$$Type = (("extremely_high") | ("very_high") | ("high") | ("normal") | ("low") | ("very_low") | ("extremely_low"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickPriority$$Original = $TickPriority;}
