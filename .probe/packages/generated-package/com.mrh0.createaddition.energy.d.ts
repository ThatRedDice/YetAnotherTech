declare module "com.mrh0.createaddition.energy.network.EnergyNetwork" {
import {$Map$$Type} from "java.util.Map"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IWireNode$$Type} from "com.mrh0.createaddition.energy.IWireNode"

export class $EnergyNetwork {
constructor(arg0: $Level$$Type)

public "getPulled"(): integer
public "getPushed"(): integer
public "getDemand"(): integer
public "demand"(arg0: integer): integer
public "getMaxBuff"(): integer
public "getBuff"(): integer
public "tick"(arg0: integer): void
public "pull"(arg0: integer, arg1: boolean): integer
public "pull"(arg0: integer): integer
public "getId"(): integer
public "removed"(): void
public static "nextNode"(arg0: $Level$$Type, arg1: $EnergyNetwork$$Type, arg2: $Map$$Type<(StringJS), ($IWireNode$$Type)>, arg3: $IWireNode$$Type, arg4: integer): $EnergyNetwork
public "push"(arg0: integer, arg1: boolean): integer
public "push"(arg0: integer): integer
public "isValid"(): boolean
public "invalidate"(): void
get "pulled"(): integer
get "pushed"(): integer
get "maxBuff"(): integer
get "buff"(): integer
get "id"(): integer
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyNetwork$$Type = ($EnergyNetwork);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyNetwork$$Original = $EnergyNetwork;}
declare module "com.mrh0.createaddition.energy.AbstractElectricBlockEntity" {
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractElectricBlockEntity extends $SmartBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isEnergyOutput"(arg0: $Direction$$Type): boolean
public "isEnergyInput"(arg0: $Direction$$Type): boolean
public "getMaxIn"(): integer
public "getMaxOut"(): integer
/**
 * 
 * @deprecated
 */
public "outputTick"(arg0: integer): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "updateCache"(arg0: $Direction$$Type): void
public "tick"(): void
public "getCapacity"(): integer
get "maxIn"(): integer
get "maxOut"(): integer
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractElectricBlockEntity$$Type = ($AbstractElectricBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractElectricBlockEntity$$Original = $AbstractElectricBlockEntity;}
declare module "com.mrh0.createaddition.energy.LocalNode" {
import {$NodeRotation$$Type} from "com.mrh0.createaddition.energy.NodeRotation"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $LocalNode {
static readonly "OTHER": StringJS
static readonly "NODES": StringJS
static readonly "X": StringJS
static readonly "Y": StringJS
static readonly "Z": StringJS
static readonly "ID": StringJS
static readonly "TYPE": StringJS

constructor(arg0: $BlockEntity$$Type, arg1: integer, arg2: integer, arg3: $WireType$$Type, arg4: $BlockPos$$Type)
constructor(arg0: $BlockEntity$$Type, arg1: $CompoundTag$$Type)

public "updateRelative"(arg0: $NodeRotation$$Type): void
public "getOtherIndex"(): integer
public "getRelativePos"(): $Vec3i
public "invalid"(): void
public "write"(arg0: $CompoundTag$$Type): void
public "getType"(): $WireType
public "getIndex"(): integer
public "isInvalid"(): boolean
public "getPos"(): $BlockPos
get "otherIndex"(): integer
get "relativePos"(): $Vec3i
get "type"(): $WireType
get "index"(): integer
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalNode$$Type = ($LocalNode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalNode$$Original = $LocalNode;}
declare module "com.mrh0.createaddition.energy.WireConnectResult" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $WireConnectResult extends $Enum<($WireConnectResult)> {
static readonly "LINKED": $WireConnectResult
static readonly "LINKED_OUT": $WireConnectResult
static readonly "EXISTS": $WireConnectResult
static readonly "CONNECT": $WireConnectResult
static readonly "INVALID": $WireConnectResult
static readonly "REQUIRES_HIGH_CURRENT": $WireConnectResult
static readonly "CONNECT_OUT": $WireConnectResult
static readonly "OBSTRUCTED": $WireConnectResult
static readonly "CONNECT_IN": $WireConnectResult
static readonly "NO_CONNECTION": $WireConnectResult
static readonly "COUNT": $WireConnectResult
static readonly "LINKED_IN": $WireConnectResult
static readonly "LONG": $WireConnectResult
static readonly "REMOVED": $WireConnectResult

public "isLinked"(): boolean
public static "getConnect"(arg0: boolean, arg1: boolean): $WireConnectResult
public "isConnect"(): boolean
public static "values"(): ($WireConnectResult)[]
public static "valueOf"(arg0: StringJS): $WireConnectResult
public "getMessage"(): $Component
public static "getLink"(arg0: boolean, arg1: boolean): $WireConnectResult
get "linked"(): boolean
get "connect"(): boolean
get "message"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireConnectResult$$Type = (("linked") | ("linked_in") | ("linked_out") | ("connect") | ("connect_in") | ("connect_out") | ("long") | ("obstructed") | ("count") | ("removed") | ("exists") | ("no_connection") | ("invalid") | ("requires_high_current"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WireConnectResult$$Original = $WireConnectResult;}
declare module "com.mrh0.createaddition.energy.IEnergyProvider" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"

export interface $IEnergyProvider$$Interface {

(arg0: $Direction): $IEnergyStorage$$Type
}

export class $IEnergyProvider implements $IEnergyProvider$$Interface {
 "getEnergyStorage"(arg0: $Direction$$Type): $IEnergyStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyProvider$$Type = ((arg0: $Direction) => $IEnergyStorage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyProvider$$Original = $IEnergyProvider;}
declare module "com.mrh0.createaddition.energy.NodeRotation" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"

export class $NodeRotation extends $Enum<($NodeRotation)> implements $StringRepresentable$$Interface {
static readonly "Z_CLOCKWISE_90": $NodeRotation
static readonly "ROTATION": $EnumProperty<($NodeRotation)>
static readonly "Y_CLOCKWISE_90": $NodeRotation
static readonly "Z_COUNTERCLOCKWISE_90": $NodeRotation
static readonly "Y_COUNTERCLOCKWISE_90": $NodeRotation
static readonly "X_CLOCKWISE_90": $NodeRotation
static readonly "X_CLOCKWISE_180": $NodeRotation
static readonly "VALUES": ($NodeRotation)[]
static readonly "Y_CLOCKWISE_180": $NodeRotation
static readonly "NONE": $NodeRotation
static readonly "X_COUNTERCLOCKWISE_90": $NodeRotation
static readonly "Z_CLOCKWISE_180": $NodeRotation

public "updateRelative"(arg0: $Vec3i$$Type): $Vec3i
public static "get"(arg0: $Direction$Axis$$Type, arg1: $Rotation$$Type): $NodeRotation
public static "values"(): ($NodeRotation)[]
public static "valueOf"(arg0: StringJS): $NodeRotation
public "rotate"(arg0: $Direction$$Type, arg1: boolean): $Direction
public "getSerializedName"(): StringJS
public "getRotation"(): $Rotation
public "getAxis"(): $Direction$Axis
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "rotation"(): $Rotation
get "axis"(): $Direction$Axis
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeRotation$$Type = (("none") | ("y_clockwise_90") | ("y_clockwise_180") | ("y_counterclockwise_90") | ("x_clockwise_90") | ("x_clockwise_180") | ("x_counterclockwise_90") | ("z_clockwise_90") | ("z_clockwise_180") | ("z_counterclockwise_90"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NodeRotation$$Original = $NodeRotation;}
declare module "com.mrh0.createaddition.energy.IMultiTileEnergyContainer" {
import {$IMultiBlockEntityContainer$$Interface} from "com.simibubi.create.foundation.blockEntity.IMultiBlockEntityContainer"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IMultiTileEnergyContainer$$Interface extends $IMultiBlockEntityContainer$$Interface {
get "maxWidth"(): integer
get "controller"(): $BlockPos
set "controller"(value: $BlockPos$$Type)
get "controllerBE"(): T
get "controller"(): boolean
get "mainConnectionAxis"(): $Direction$Axis
get "lastKnownPos"(): $BlockPos
set "extraData"(value: any)
get "width"(): integer
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "extraData"(): any
}

export class $IMultiTileEnergyContainer implements $IMultiTileEnergyContainer$$Interface {
 "getMaxWidth"(): integer
 "getController"(): $BlockPos
 "setController"(arg0: $BlockPos$$Type): void
 "getControllerBE"<T extends $BlockEntity>(): T
 "isController"(): boolean
 "removeController"(arg0: boolean): void
 "notifyMultiUpdated"(): void
 "getMainConnectionAxis"(): $Direction$Axis
 "getMainAxisOf"(arg0: $BlockEntity$$Type): $Direction$Axis
 "getLastKnownPos"(): $BlockPos
 "preventConnectivityUpdate"(): void
 "setExtraData"(arg0: any): void
 "modifyExtraData"(arg0: any): any
 "getWidth"(): integer
 "getHeight"(): integer
 "getMaxLength"(arg0: $Direction$Axis$$Type, arg1: integer): integer
 "setWidth"(arg0: integer): void
 "setHeight"(arg0: integer): void
 "getExtraData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiTileEnergyContainer$$Type = ($IMultiTileEnergyContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiTileEnergyContainer$$Original = $IMultiTileEnergyContainer;}
declare module "com.mrh0.createaddition.energy.IWireNode" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EnergyNetwork, $EnergyNetwork$$Type} from "com.mrh0.createaddition.energy.network.EnergyNetwork"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$WireConnectResult} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$Set$$Type} from "java.util.Set"
import {$ConnectorType} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LocalNode, $LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"

export interface $IWireNode$$Interface {
get "availableNode"(): integer
get "connectorType"(): $ConnectorType
get "maxWireLength"(): integer
get "nodeCount"(): integer
get "pos"(): $BlockPos
}

export class $IWireNode implements $IWireNode$$Interface {
 "getNetwork"(arg0: integer): $EnergyNetwork
 "setNetwork"(arg0: integer, arg1: $EnergyNetwork$$Type): void
static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
 "getAvailableNode"(arg0: $Vec3$$Type): integer
 "getAvailableNode"(): integer
 "hasAnyConnection"(): boolean
 "isNodeInput"(arg0: integer): boolean
 "isNodeOutput"(arg0: integer): boolean
 "dropWires"(arg0: $Level$$Type, arg1: boolean): void
 "dropWires"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: boolean): void
 "getNodeOffset"(arg0: integer): $Vec3
 "getConnectorType"(): $ConnectorType
 "getMaxWireLength"(): integer
static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
 "invalidateNodeCache"(): void
 "convertOldNbt"(arg0: $CompoundTag$$Type): void
 "validateLocalNodes"(arg0: ($LocalNode$$Type)[]): boolean
 "handleWireCache"(arg0: $Level$$Type, arg1: $Set$$Type<($LocalNode$$Type)>): void
 "awakeNetwork"(arg0: $Level$$Type): boolean
 "getLocalNode"(arg0: integer): $LocalNode
static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
 "getWireNode"(arg0: integer): $IWireNode
 "isNetworkValid"(arg0: integer): boolean
static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
 "dropWire"(arg0: $Level$$Type, arg1: $LocalNode$$Type): void
 "hasConnectionTo"(arg0: $BlockPos$$Type): boolean
 "disconnectWires"(): void
static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
 "getConnectionTo"(arg0: $BlockPos$$Type): $LocalNode
 "getOtherNodeIndex"(arg0: integer): integer
 "isNodeIndeciesConnected"(arg0: integer, arg1: integer): boolean
static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
 "getNodeCount"(): integer
 "getNodePos"(arg0: integer): $BlockPos
 "hasConnection"(arg0: integer): boolean
 "setNode"(arg0: integer, arg1: integer, arg2: $BlockPos$$Type, arg3: $WireType$$Type): void
 "getNodeType"(arg0: integer): $WireType
static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
 "removeNode"(arg0: integer, arg1: boolean): void
 "removeNode"(arg0: $LocalNode$$Type, arg1: boolean): void
 "removeNode"(arg0: integer): void
 "removeNode"(arg0: $LocalNode$$Type): void
static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
 "getPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWireNode$$Type = ($IWireNode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWireNode$$Original = $IWireNode;}
declare module "com.mrh0.createaddition.energy.WireType" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Enum} from "java.lang.Enum"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export class $WireType extends $Enum<($WireType)> {
static readonly "GOLD": $WireType
static readonly "FESTIVE": $WireType
static readonly "COPPER": $WireType
static readonly "ELECTRUM": $WireType

public "getSourceDrop"(): $ItemStack
public "getDrop"(): $ItemStack
public "getRed"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public "isFestive"(): boolean
public static "values"(): ($WireType)[]
public static "valueOf"(arg0: StringJS): $WireType
public static "of"(arg0: $Item$$Type): $WireType
public static "fromIndex"(arg0: integer): $WireType
public "transfer"(): integer
public "getIndex"(): integer
get "sourceDrop"(): $ItemStack
get "drop"(): $ItemStack
get "red"(): integer
get "green"(): integer
get "blue"(): integer
get "festive"(): boolean
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireType$$Type = (("copper") | ("gold") | ("electrum") | ("festive"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WireType$$Original = $WireType;}
declare module "com.mrh0.createaddition.energy.InternalEnergyStorage" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EnergyStorage} from "net.neoforged.neoforge.energy.EnergyStorage"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $InternalEnergyStorage extends $EnergyStorage {
constructor(arg0: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "canExtract"(): boolean
public "canReceive"(): boolean
public "internalProduceEnergy"(arg0: integer): integer
public "internalConsumeEnergy"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
public "outputToSide"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: integer): void
public "setEnergy"(arg0: integer): void
public "setCapacity"(arg0: integer): void
public "getSpace"(): integer
public "toString"(): StringJS
public "write"(arg0: $CompoundTag$$Type, arg1: StringJS): $CompoundTag
public "write"(arg0: $CompoundTag$$Type): $CompoundTag
public "read"(arg0: $CompoundTag$$Type): void
public "read"(arg0: $CompoundTag$$Type, arg1: StringJS): void
set "energy"(value: integer)
set "capacity"(value: integer)
get "space"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalEnergyStorage$$Type = ($InternalEnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InternalEnergyStorage$$Original = $InternalEnergyStorage;}
