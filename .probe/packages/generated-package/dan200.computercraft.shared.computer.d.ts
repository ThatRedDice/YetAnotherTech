declare module "dan200.computercraft.shared.computer.terminal.NetworkedTerminal" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Terminal} from "dan200.computercraft.core.terminal.Terminal"
import {$Runnable$$Type} from "java.lang.Runnable"

export class $NetworkedTerminal extends $Terminal {
constructor(arg0: integer, arg1: integer, arg2: boolean, arg3: $Runnable$$Type)
constructor(arg0: integer, arg1: integer, arg2: boolean)

public "readFromNBT"(arg0: $CompoundTag$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedTerminal$$Type = ($NetworkedTerminal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkedTerminal$$Original = $NetworkedTerminal;}
declare module "dan200.computercraft.shared.computer.terminal.TerminalState" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$NetworkedTerminal, $NetworkedTerminal$$Type} from "dan200.computercraft.shared.computer.terminal.NetworkedTerminal"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"

export class $TerminalState {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TerminalState)>

public "size"(): integer
public "apply"(arg0: $NetworkedTerminal$$Type): void
public "create"(): $NetworkedTerminal
public static "create"(arg0: $NetworkedTerminal$$Type): $TerminalState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalState$$Type = ($TerminalState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TerminalState$$Original = $TerminalState;}
declare module "dan200.computercraft.shared.computer.blocks.ComputerBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AbstractComputerBlockEntity} from "dan200.computercraft.shared.computer.blocks.AbstractComputerBlockEntity"
import {$Direction} from "net.minecraft.core.Direction"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IPeripheral} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$ComputerFamily$$Type} from "dan200.computercraft.shared.computer.core.ComputerFamily"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ComputerBlockEntity extends $AbstractComputerBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($ComputerBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ComputerFamily$$Type)

public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "peripheral"(): $IPeripheral
public "getDirection"(): $Direction
/**
 * 
 * @deprecated
 */
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
get "direction"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerBlockEntity$$Type = ($ComputerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputerBlockEntity$$Original = $ComputerBlockEntity;}
declare module "dan200.computercraft.shared.computer.blocks.ComputerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$AbstractComputerBlock} from "dan200.computercraft.shared.computer.blocks.AbstractComputerBlock"
import {$ComputerState} from "dan200.computercraft.shared.computer.core.ComputerState"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RegistryEntry$$Type} from "dan200.computercraft.shared.platform.RegistryEntry"
import {$ComputerBlockEntity} from "dan200.computercraft.shared.computer.blocks.ComputerBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ComputerBlock<T extends $ComputerBlockEntity> extends $AbstractComputerBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STATE": $EnumProperty<($ComputerState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $RegistryEntry$$Type<($BlockEntityType$$Type<(T)>)>)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerBlock$$Type<T> = ($ComputerBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputerBlock$$Original<T> = $ComputerBlock<(T)>;}
declare module "dan200.computercraft.shared.computer.core.ServerComputer" {
import {$ComputerState} from "dan200.computercraft.shared.computer.core.ComputerState"
import {$UUID} from "java.util.UUID"
import {$ServerComputer$Properties, $ServerComputer$Properties$$Type} from "dan200.computercraft.shared.computer.core.ServerComputer$Properties"
import {$TerminalState} from "dan200.computercraft.shared.computer.terminal.TerminalState"
import {$ComputerComponent} from "dan200.computercraft.api.component.ComputerComponent"
import {$WorkMonitor} from "dan200.computercraft.api.peripheral.WorkMonitor"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$WritableMount} from "dan200.computercraft.api.filesystem.WritableMount"
import {$ComputerEnvironment$$Interface} from "dan200.computercraft.core.computer.ComputerEnvironment"
import {$ComputerSide$$Type} from "dan200.computercraft.core.computer.ComputerSide"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MetricsObserver} from "dan200.computercraft.core.metrics.MetricsObserver"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$UserComputerInput} from "dan200.computercraft.core.input.UserComputerInput"
import {$ComputerFamily, $ComputerFamily$$Type} from "dan200.computercraft.shared.computer.core.ComputerFamily"

export class $ServerComputer implements $ComputerEnvironment$$Interface {
static readonly "METRICS": $ComputerComponent<($MetricsObserver)>

constructor(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $ServerComputer$Properties$$Type)

public "getBundledRedstoneOutput"(arg0: $ComputerSide$$Type): integer
public "queueEvent"(arg0: StringJS, arg1: (any)[]): void
public "queueEvent"(arg0: StringJS): void
public "getMainThreadMonitor"(): $WorkMonitor
public "getInstanceUUID"(): $UUID
public "getPeripheral"(arg0: $ComputerSide$$Type): $IPeripheral
public "pollRedstoneChanges"(): integer
public "checkUsable"(arg0: $Player$$Type): boolean
public "turnOn"(): void
public "setPeripheral"(arg0: $ComputerSide$$Type, arg1: $IPeripheral$$Type): void
public "getTerminalState"(): $TerminalState
public "createComputerInput"(): $UserComputerInput
public "getRedstoneOutput"(arg0: $ComputerSide$$Type): integer
public "setRedstoneInput"(arg0: $ComputerSide$$Type, arg1: integer, arg2: integer): void
public "getMetrics"(): $MetricsObserver
public "createRootMount"(): $WritableMount
public "getDay"(): integer
public "getTimeOfDay"(): double
public "getID"(): integer
public "getPosition"(): $BlockPos
public "keepAlive"(): void
public "setLabel"(arg0: StringJS): void
public "getFamily"(): $ComputerFamily
public "getLevel"(): $ServerLevel
public "getLabel"(): StringJS
public "shutdown"(): void
public "register"(): $UUID
public static "properties"(arg0: integer, arg1: $ComputerFamily$$Type): $ServerComputer$Properties
public "isOn"(): boolean
public "getState"(): $ComputerState
public "close"(): void
public "reboot"(): void
public "setPosition"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): void
get "mainThreadMonitor"(): $WorkMonitor
get "instanceUUID"(): $UUID
get "terminalState"(): $TerminalState
get "metrics"(): $MetricsObserver
get "day"(): integer
get "timeOfDay"(): double
get "ID"(): integer
get "position"(): $BlockPos
set "label"(value: StringJS)
get "family"(): $ComputerFamily
get "level"(): $ServerLevel
get "label"(): StringJS
get "on"(): boolean
get "state"(): $ComputerState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerComputer$$Type = ($ServerComputer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerComputer$$Original = $ServerComputer;}
declare module "dan200.computercraft.shared.computer.core.ComputerState" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ComputerState extends $Enum<($ComputerState)> implements $StringRepresentable$$Interface {
static readonly "BLINKING": $ComputerState
static readonly "OFF": $ComputerState
static readonly "ON": $ComputerState

public "toString"(): StringJS
public static "values"(): ($ComputerState)[]
public static "valueOf"(arg0: StringJS): $ComputerState
public "getTexture"(): StringJS
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "texture"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerState$$Type = (("off") | ("on") | ("blinking"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputerState$$Original = $ComputerState;}
declare module "dan200.computercraft.shared.computer.blocks.AbstractComputerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AbstractComputerBlockEntity} from "dan200.computercraft.shared.computer.blocks.AbstractComputerBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IBundledRedstoneBlock$$Interface} from "dan200.computercraft.shared.common.IBundledRedstoneBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AbstractComputerBlock<T extends $AbstractComputerBlockEntity> extends $HorizontalDirectionalBlock implements $IBundledRedstoneBlock$$Interface, $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getTicker"<U extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(U)>): $BlockEntityTicker<(U)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBundledRedstoneOutput"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractComputerBlock$$Type<T> = ($AbstractComputerBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractComputerBlock$$Original<T> = $AbstractComputerBlock<(T)>;}
declare module "dan200.computercraft.shared.computer.core.TerminalSize" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $TerminalSize extends $Record {
static readonly "CODEC": $Codec<($TerminalSize)>
static readonly "MAX_SIZE": integer
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($TerminalSize)>

constructor(width: integer, height: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "width"(): integer
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalSize$$Type = ({"height"?: integer, "width"?: integer}) | ([height?: integer, width?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TerminalSize$$Original = $TerminalSize;}
declare module "dan200.computercraft.shared.computer.blocks.CommandComputerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ComputerState} from "dan200.computercraft.shared.computer.core.ComputerState"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GameMasterBlock$$Interface} from "net.minecraft.world.level.block.GameMasterBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RegistryEntry$$Type} from "dan200.computercraft.shared.platform.RegistryEntry"
import {$ComputerBlockEntity} from "dan200.computercraft.shared.computer.blocks.ComputerBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ComputerBlock} from "dan200.computercraft.shared.computer.blocks.ComputerBlock"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $CommandComputerBlock<T extends $ComputerBlockEntity> extends $ComputerBlock<(T)> implements $GameMasterBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STATE": $EnumProperty<($ComputerState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $RegistryEntry$$Type<($BlockEntityType$$Type<(T)>)>)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandComputerBlock$$Type<T> = ($CommandComputerBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandComputerBlock$$Original<T> = $CommandComputerBlock<(T)>;}
declare module "dan200.computercraft.shared.computer.core.ServerComputer$Properties" {
import {$TerminalSize$$Type} from "dan200.computercraft.shared.computer.core.TerminalSize"
import {$ComputerComponent$$Type} from "dan200.computercraft.api.component.ComputerComponent"

export class $ServerComputer$Properties {
public "storageCapacity"(arg0: long): $ServerComputer$Properties
public "terminalSize"(arg0: $TerminalSize$$Type): $ServerComputer$Properties
public "label"(arg0: StringJS): $ServerComputer$Properties
public "addComponent"<T>(arg0: $ComputerComponent$$Type<(T)>, arg1: T): $ServerComputer$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerComputer$Properties$$Type = ($ServerComputer$Properties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerComputer$Properties$$Original = $ServerComputer$Properties;}
declare module "dan200.computercraft.shared.computer.core.ComputerFamily" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Enum} from "java.lang.Enum"

export class $ComputerFamily extends $Enum<($ComputerFamily)> {
static readonly "COMMAND": $ComputerFamily
static readonly "NORMAL": $ComputerFamily
static readonly "ADVANCED": $ComputerFamily

public "checkUsable"(arg0: $Player$$Type): boolean
public static "values"(): ($ComputerFamily)[]
public static "valueOf"(arg0: StringJS): $ComputerFamily
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerFamily$$Type = (("normal") | ("advanced") | ("command"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputerFamily$$Original = $ComputerFamily;}
declare module "dan200.computercraft.shared.computer.blocks.AbstractComputerBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MenuConstructor$$Interface} from "net.minecraft.world.inventory.MenuConstructor"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Nameable$$Interface} from "net.minecraft.world.Nameable"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ServerComputer} from "dan200.computercraft.shared.computer.core.ServerComputer"
import {$ClientboundBlockEntityDataPacket} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ComputerFamily, $ComputerFamily$$Type} from "dan200.computercraft.shared.computer.core.ComputerFamily"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractComputerBlockEntity extends $BlockEntity implements $Nameable$$Interface, $MenuConstructor$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($AbstractComputerBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ComputerFamily$$Type)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "updateInputsImmediately"(): void
public "getServerComputer"(): $ServerComputer
public "isUsable"(arg0: $Player$$Type): boolean
public "createServerComputer"(): $ServerComputer
public "neighborBlockEntityChanged"(arg0: $BlockPos$$Type): void
public "neighbourShapeChanged"(arg0: $Direction$$Type): void
public "isAdminOnly"(): boolean
public "updateRedstone"(): void
public "getComputerID"(): integer
public "setComputerID"(arg0: integer): void
public "setLabel"(arg0: StringJS): void
public "getFamily"(): $ComputerFamily
public "getLabel"(): StringJS
public "getName"(): $Component
public "getDisplayName"(): $Component
/**
 * 
 * @deprecated
 */
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "hasCustomName"(): boolean
public "setRemoved"(): void
public "getCustomName"(): $Component
public "onlyOpCanSetNbt"(): boolean
public "neighborChanged"(arg0: $BlockPos$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "serverComputer"(): $ServerComputer
get "adminOnly"(): boolean
get "computerID"(): integer
set "computerID"(value: integer)
set "label"(value: StringJS)
get "family"(): $ComputerFamily
get "label"(): StringJS
get "name"(): $Component
get "displayName"(): $Component
get "removed"(): void
get "customName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractComputerBlockEntity$$Type = ($AbstractComputerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractComputerBlockEntity$$Original = $AbstractComputerBlockEntity;}
