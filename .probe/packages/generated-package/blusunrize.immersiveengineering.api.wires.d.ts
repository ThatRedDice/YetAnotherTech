declare module "blusunrize.immersiveengineering.api.wires.WireCollisionData$ConnectionSegments" {
import {$Connection, $Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$Record} from "java.lang.Record"

export class $WireCollisionData$ConnectionSegments extends $Record {
constructor(connection: $Connection$$Type, firstPointToRender: integer, lastPointToRender: integer)

public "firstPointToRender"(): integer
public "lastPointToRender"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "connection"(): $Connection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireCollisionData$ConnectionSegments$$Type = ({"lastPointToRender"?: integer, "firstPointToRender"?: integer, "connection"?: $Connection$$Type}) | ([lastPointToRender?: integer, firstPointToRender?: integer, connection?: $Connection$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WireCollisionData$ConnectionSegments$$Original = $WireCollisionData$ConnectionSegments;}
declare module "blusunrize.immersiveengineering.api.wires.IConnectionTemplate" {
import {$List, $List$$Type} from "java.util.List"
import {$IConnectionTemplate$TemplateConnection, $IConnectionTemplate$TemplateConnection$$Type} from "blusunrize.immersiveengineering.api.wires.IConnectionTemplate$TemplateConnection"

export interface $IConnectionTemplate$$Interface {

(): $List$$Type<($IConnectionTemplate$TemplateConnection$$Type)>
get "storedConnections"(): $List<($IConnectionTemplate$TemplateConnection)>
}

export class $IConnectionTemplate implements $IConnectionTemplate$$Interface {
 "getStoredConnections"(): $List<($IConnectionTemplate$TemplateConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectionTemplate$$Type = (() => $List$$Type<($IConnectionTemplate$TemplateConnection$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConnectionTemplate$$Original = $IConnectionTemplate;}
declare module "blusunrize.immersiveengineering.api.wires.GlobalWireNetwork" {
import {$WireCollisionData} from "blusunrize.immersiveengineering.api.wires.WireCollisionData"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$LocalWireNetwork} from "blusunrize.immersiveengineering.api.wires.LocalWireNetwork"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SavedData} from "net.minecraft.world.level.saveddata.SavedData"
import {$BooleanSupplier} from "java.util.function.BooleanSupplier"
import {$IWorldTickable$$Interface} from "blusunrize.immersiveengineering.api.wires.localhandlers.IWorldTickable"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IWireSyncManager$$Type} from "blusunrize.immersiveengineering.api.wires.IWireSyncManager"
import {$IImmersiveConnectable, $IImmersiveConnectable$$Type} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$IICProxyProvider, $IICProxyProvider$$Type} from "blusunrize.immersiveengineering.api.wires.proxy.IICProxyProvider"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$Function} from "java.util.function.Function"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelEvent$Unload$$Type} from "net.neoforged.neoforge.event.level.LevelEvent$Unload"

export class $GlobalWireNetwork extends $SavedData implements $IWorldTickable$$Interface {
static readonly "GET_NET_UNCACHED": $SetRestrictedField<($Function<($Level), ($GlobalWireNetwork)>)>
static readonly "VALIDATE_CONNECTIONS": $SetRestrictedField<($BooleanSupplier)>
static readonly "SANITIZE_CONNECTIONS": $SetRestrictedField<($BooleanSupplier)>

constructor(arg0: boolean, arg1: $IICProxyProvider$$Type, arg2: $IWireSyncManager$$Type)

public static "getNetwork"(arg0: $Level$$Type): $GlobalWireNetwork
public "addConnection"(arg0: $Connection$$Type): void
public "getCollisionData"(): $WireCollisionData
public "removeInsertAndDropConnection"(arg0: $Connection$$Type, arg1: $Player$$Type, arg2: $Level$$Type): void
public "getLocalNet"(arg0: $BlockPos$$Type): $LocalWireNetwork
public "getLocalNet"(arg0: $ConnectionPoint$$Type): $LocalWireNetwork
public "updateCatenaryData"(arg0: $Connection$$Type): void
public "removeAllConnectionsAt"(arg0: $IImmersiveConnectable$$Type, arg1: $Consumer$$Type<($Connection)>): void
public "removeAllConnectionsAt"(arg0: $ConnectionPoint$$Type, arg1: $Consumer$$Type<($Connection)>): void
public "getNullableLocalNet"(arg0: $ConnectionPoint$$Type): $LocalWireNetwork
public "getNullableLocalNet"(arg0: $BlockPos$$Type): $LocalWireNetwork
public "removeAndDropConnection"(arg0: $Connection$$Type, arg1: $BlockPos$$Type, arg2: $Level$$Type): void
public "onConnectorUnload"(arg0: $IImmersiveConnectable$$Type): void
public "removeConnector"(arg0: $IImmersiveConnectable$$Type): void
public "onConnectorLoad"(arg0: $IImmersiveConnectable$$Type, arg1: $Level$$Type): void
public "onConnectorLoad"(arg0: $IImmersiveConnectable$$Type, arg1: boolean): void
public "getAllConnectorsIn"(arg0: $ChunkPos$$Type): $Collection<($ConnectionPoint)>
public "getExistingConnector"(arg0: $ConnectionPoint$$Type): $IImmersiveConnectable
public "getProxyProvider"(): $IICProxyProvider
public "readFromNBT"(arg0: $CompoundTag$$Type): void
public static "onWorldUnload"(arg0: $LevelEvent$Unload$$Type): void
public "removeConnection"(arg0: $Connection$$Type): void
public "update"(arg0: $Level$$Type): void
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
get "collisionData"(): $WireCollisionData
get "proxyProvider"(): $IICProxyProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobalWireNetwork$$Type = ($GlobalWireNetwork);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlobalWireNetwork$$Original = $GlobalWireNetwork;}
declare module "blusunrize.immersiveengineering.api.wires.proxy.IICProxyProvider" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$Collection$$Type} from "java.util.Collection"
import {$IImmersiveConnectable, $IImmersiveConnectable$$Type} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IICProxyProvider$$Interface {
}

export class $IICProxyProvider implements $IICProxyProvider$$Interface {
 "createFor"(arg0: $IImmersiveConnectable$$Type): $IImmersiveConnectable
 "fromNBT"(arg0: $CompoundTag$$Type): $IImmersiveConnectable
 "create"(arg0: $BlockPos$$Type, arg1: $Collection$$Type<($Connection$$Type)>, arg2: $Collection$$Type<($ConnectionPoint$$Type)>): $IImmersiveConnectable
 "toNBT"(arg0: $IImmersiveConnectable$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IICProxyProvider$$Type = ($IICProxyProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IICProxyProvider$$Original = $IICProxyProvider;}
declare module "blusunrize.immersiveengineering.api.wires.WireCollisionData" {
import {$Collection} from "java.util.Collection"
import {$Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$WireCollisionData$ConnectionSegments} from "blusunrize.immersiveengineering.api.wires.WireCollisionData$ConnectionSegments"
import {$List} from "java.util.List"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$WireCollisionData$CollisionInfo} from "blusunrize.immersiveengineering.api.wires.WireCollisionData$CollisionInfo"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $WireCollisionData {
public "addConnection"(arg0: $Connection$$Type): void
public "getWiresIn"(arg0: $SectionPos$$Type): $List<($WireCollisionData$ConnectionSegments)>
public "getCollisionInfo"(arg0: $BlockPos$$Type): $Collection<($WireCollisionData$CollisionInfo)>
public "removeConnection"(arg0: $Connection$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireCollisionData$$Type = ($WireCollisionData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WireCollisionData$$Original = $WireCollisionData;}
declare module "blusunrize.immersiveengineering.api.wires.ConnectionPoint" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ConnectionPoint extends $Record implements $Comparable$$Interface<($ConnectionPoint)> {
static readonly "CODECS": $DualCodec<($ByteBuf), ($ConnectionPoint)>

constructor(position: $BlockPos$$Type, index: integer)
constructor(arg0: $CompoundTag$$Type)

public "createTag"(): $CompoundTag
public "getY"(): integer
public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ConnectionPoint$$Type): integer
public "position"(): $BlockPos
public "getX"(): integer
public "getZ"(): integer
get "y"(): integer
get "x"(): integer
get "z"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionPoint$$Type = ({"position"?: $BlockPos$$Type, "index"?: integer}) | ([position?: $BlockPos$$Type, index?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectionPoint$$Original = $ConnectionPoint;}
declare module "blusunrize.immersiveengineering.api.wires.LocalWireNetwork" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Connection} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$Collection} from "java.util.Collection"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$IWorldTickable$$Interface} from "blusunrize.immersiveengineering.api.wires.localhandlers.IWorldTickable"
import {$LocalNetworkHandler} from "blusunrize.immersiveengineering.api.wires.localhandlers.LocalNetworkHandler"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IImmersiveConnectable} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$GlobalWireNetwork$$Type} from "blusunrize.immersiveengineering.api.wires.GlobalWireNetwork"
import {$Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $LocalWireNetwork implements $IWorldTickable$$Interface {
constructor(arg0: $GlobalWireNetwork$$Type)
constructor(arg0: $CompoundTag$$Type, arg1: $GlobalWireNetwork$$Type)

public "getConnector"(arg0: $BlockPos$$Type): $IImmersiveConnectable
public "getConnector"(arg0: $ConnectionPoint$$Type): $IImmersiveConnectable
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getConnectors"(): $Collection<($BlockPos)>
public "getAllHandlers"(): $Collection<($LocalNetworkHandler)>
public "addAsFutureTask"(arg0: $Runnable$$Type): void
public "writeToNBT"(): $CompoundTag
public "setInvalid"(): void
public "getVersion"(): integer
public "toString"(): StringJS
public "update"(arg0: $Level$$Type): void
public "getHandler"<T extends $LocalNetworkHandler>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): T
public "isValid"(arg0: $ConnectionPoint$$Type): boolean
public "isValid"(): boolean
public "getConnections"(arg0: $ConnectionPoint$$Type): $Collection<($Connection)>
public "getConnections"(arg0: $BlockPos$$Type): $Collection<($Connection)>
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "connectors"(): $Collection<($BlockPos)>
get "allHandlers"(): $Collection<($LocalNetworkHandler)>
get "invalid"(): void
get "version"(): integer
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalWireNetwork$$Type = ($LocalWireNetwork);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalWireNetwork$$Original = $LocalWireNetwork;}
declare module "blusunrize.immersiveengineering.api.wires.localhandlers.ILocalHandlerConstructor" {
import {$LocalNetworkHandler, $LocalNetworkHandler$$Type} from "blusunrize.immersiveengineering.api.wires.localhandlers.LocalNetworkHandler"
import {$LocalWireNetwork, $LocalWireNetwork$$Type} from "blusunrize.immersiveengineering.api.wires.LocalWireNetwork"
import {$GlobalWireNetwork, $GlobalWireNetwork$$Type} from "blusunrize.immersiveengineering.api.wires.GlobalWireNetwork"

export interface $ILocalHandlerConstructor$$Interface {

(arg0: $LocalWireNetwork, arg1: $GlobalWireNetwork): $LocalNetworkHandler$$Type
}

export class $ILocalHandlerConstructor implements $ILocalHandlerConstructor$$Interface {
 "create"(arg0: $LocalWireNetwork$$Type, arg1: $GlobalWireNetwork$$Type): $LocalNetworkHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILocalHandlerConstructor$$Type = ((arg0: $LocalWireNetwork, arg1: $GlobalWireNetwork) => $LocalNetworkHandler$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILocalHandlerConstructor$$Original = $ILocalHandlerConstructor;}
declare module "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable" {
import {$Iterable} from "java.lang.Iterable"
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$Collection} from "java.util.Collection"
import {$Connection, $Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$TargetingInfo$$Type} from "blusunrize.immersiveengineering.api.TargetingInfo"
import {$ILocalHandlerProvider$$Interface} from "blusunrize.immersiveengineering.api.wires.localhandlers.ILocalHandlerProvider"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$Set} from "java.util.Set"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $IImmersiveConnectable$$Interface extends $ILocalHandlerProvider$$Interface {
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "internalConnections"(): $Iterable<($Connection)>
get "proxy"(): boolean
get "position"(): $BlockPos
get "requestedHandlers"(): $Collection<($ResourceLocation)>
}

export class $IImmersiveConnectable implements $IImmersiveConnectable$$Interface {
 "canConnect"(): boolean
 "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
 "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
 "getIgnored"(arg0: $IImmersiveConnectable$$Type): $Set<($BlockPos)>
 "getConnectionMaster"(arg0: $WireType$$Type, arg1: $TargetingInfo$$Type): $BlockPos
 "getConnectionPoints"(): $Collection<($ConnectionPoint)>
 "getInternalConnections"(): $Iterable<($Connection)>
 "getTargetedPoint"(arg0: $TargetingInfo$$Type, arg1: $Vec3i$$Type): $ConnectionPoint
 "connectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $IImmersiveConnectable$$Type, arg3: $ConnectionPoint$$Type): void
 "removeCable"(arg0: $Connection$$Type, arg1: $ConnectionPoint$$Type): void
 "isProxy"(): boolean
 "getPosition"(): $BlockPos
 "getRequestedHandlers"(): $Collection<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IImmersiveConnectable$$Type = ($IImmersiveConnectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IImmersiveConnectable$$Original = $IImmersiveConnectable;}
declare module "blusunrize.immersiveengineering.api.wires.IWireSyncManager" {
import {$Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"

export interface $IWireSyncManager$$Interface {
}

export class $IWireSyncManager implements $IWireSyncManager$$Interface {
 "onConnectionEndpointsChanged"(arg0: $Connection$$Type): void
 "onConnectionAdded"(arg0: $Connection$$Type): void
 "onConnectionRemoved"(arg0: $Connection$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWireSyncManager$$Type = ($IWireSyncManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWireSyncManager$$Original = $IWireSyncManager;}
declare module "blusunrize.immersiveengineering.api.wires.localhandlers.EnergyTransferHandler$EnergyConnector" {
import {$Iterable} from "java.lang.Iterable"
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$Collection} from "java.util.Collection"
import {$Connection, $Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$TargetingInfo$$Type} from "blusunrize.immersiveengineering.api.TargetingInfo"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IImmersiveConnectable$$Type, $IImmersiveConnectable$$Interface} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$Set} from "java.util.Set"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $EnergyTransferHandler$EnergyConnector$$Interface extends $IImmersiveConnectable$$Interface {
get "requestedEnergy"(): integer
get "availableEnergy"(): integer
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "internalConnections"(): $Iterable<($Connection)>
get "proxy"(): boolean
get "position"(): $BlockPos
get "requestedHandlers"(): $Collection<($ResourceLocation)>
}

export class $EnergyTransferHandler$EnergyConnector implements $EnergyTransferHandler$EnergyConnector$$Interface {
 "extractEnergy"(arg0: integer): void
 "isSource"(arg0: $ConnectionPoint$$Type): boolean
 "isSink"(arg0: $ConnectionPoint$$Type): boolean
 "getRequestedEnergy"(): integer
 "insertEnergy"(arg0: integer): void
 "getAvailableEnergy"(): integer
 "onEnergyPassedThrough"(arg0: double): void
 "canConnect"(): boolean
 "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
 "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
 "getIgnored"(arg0: $IImmersiveConnectable$$Type): $Set<($BlockPos)>
 "getConnectionMaster"(arg0: $WireType$$Type, arg1: $TargetingInfo$$Type): $BlockPos
 "getConnectionPoints"(): $Collection<($ConnectionPoint)>
 "getInternalConnections"(): $Iterable<($Connection)>
 "getTargetedPoint"(arg0: $TargetingInfo$$Type, arg1: $Vec3i$$Type): $ConnectionPoint
 "connectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $IImmersiveConnectable$$Type, arg3: $ConnectionPoint$$Type): void
 "removeCable"(arg0: $Connection$$Type, arg1: $ConnectionPoint$$Type): void
 "isProxy"(): boolean
 "getPosition"(): $BlockPos
 "getRequestedHandlers"(): $Collection<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyTransferHandler$EnergyConnector$$Type = ($EnergyTransferHandler$EnergyConnector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyTransferHandler$EnergyConnector$$Original = $EnergyTransferHandler$EnergyConnector;}
declare module "blusunrize.immersiveengineering.api.wires.localhandlers.EnergyTransferHandler$LimitingEnergyConnector" {
import {$Iterable} from "java.lang.Iterable"
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$Collection} from "java.util.Collection"
import {$Connection, $Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$TargetingInfo$$Type} from "blusunrize.immersiveengineering.api.TargetingInfo"
import {$EnergyTransferHandler$EnergyConnector$$Interface} from "blusunrize.immersiveengineering.api.wires.localhandlers.EnergyTransferHandler$EnergyConnector"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IImmersiveConnectable$$Type} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$Set} from "java.util.Set"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $EnergyTransferHandler$LimitingEnergyConnector$$Interface extends $EnergyTransferHandler$EnergyConnector$$Interface {
get "powerLimit"(): double
get "requestedEnergy"(): integer
get "availableEnergy"(): integer
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "internalConnections"(): $Iterable<($Connection)>
get "proxy"(): boolean
get "position"(): $BlockPos
get "requestedHandlers"(): $Collection<($ResourceLocation)>
}

export class $EnergyTransferHandler$LimitingEnergyConnector implements $EnergyTransferHandler$LimitingEnergyConnector$$Interface {
 "getPowerLimit"(): double
 "extractEnergy"(arg0: integer): void
 "isSource"(arg0: $ConnectionPoint$$Type): boolean
 "isSink"(arg0: $ConnectionPoint$$Type): boolean
 "getRequestedEnergy"(): integer
 "insertEnergy"(arg0: integer): void
 "getAvailableEnergy"(): integer
 "onEnergyPassedThrough"(arg0: double): void
 "canConnect"(): boolean
 "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
 "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
 "getIgnored"(arg0: $IImmersiveConnectable$$Type): $Set<($BlockPos)>
 "getConnectionMaster"(arg0: $WireType$$Type, arg1: $TargetingInfo$$Type): $BlockPos
 "getConnectionPoints"(): $Collection<($ConnectionPoint)>
 "getInternalConnections"(): $Iterable<($Connection)>
 "getTargetedPoint"(arg0: $TargetingInfo$$Type, arg1: $Vec3i$$Type): $ConnectionPoint
 "connectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $IImmersiveConnectable$$Type, arg3: $ConnectionPoint$$Type): void
 "removeCable"(arg0: $Connection$$Type, arg1: $ConnectionPoint$$Type): void
 "isProxy"(): boolean
 "getPosition"(): $BlockPos
 "getRequestedHandlers"(): $Collection<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyTransferHandler$LimitingEnergyConnector$$Type = ($EnergyTransferHandler$LimitingEnergyConnector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyTransferHandler$LimitingEnergyConnector$$Original = $EnergyTransferHandler$LimitingEnergyConnector;}
declare module "blusunrize.immersiveengineering.api.wires.WireCollisionData$CollisionInfo" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Connection, $Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$LocalWireNetwork} from "blusunrize.immersiveengineering.api.wires.LocalWireNetwork"
import {$GlobalWireNetwork$$Type} from "blusunrize.immersiveengineering.api.wires.GlobalWireNetwork"
import {$Record} from "java.lang.Record"

export class $WireCollisionData$CollisionInfo extends $Record {
constructor(intersectA: $Vec3$$Type, intersectB: $Vec3$$Type, connection: $Connection$$Type, isInBlock: boolean)

public "getLocalNet"(arg0: $GlobalWireNetwork$$Type): $LocalWireNetwork
public "isInBlock"(): boolean
public "intersectA"(): $Vec3
public "intersectB"(): $Vec3
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "connection"(): $Connection
get "inBlock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireCollisionData$CollisionInfo$$Type = ({"connection"?: $Connection$$Type, "intersectA"?: $Vec3$$Type, "intersectB"?: $Vec3$$Type, "isInBlock"?: boolean}) | ([connection?: $Connection$$Type, intersectA?: $Vec3$$Type, intersectB?: $Vec3$$Type, isInBlock?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WireCollisionData$CollisionInfo$$Original = $WireCollisionData$CollisionInfo;}
declare module "blusunrize.immersiveengineering.api.wires.IWireCoil" {
import {$WireType, $WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IWireCoil$$Interface {

(arg0: $ItemStack): $WireType$$Type
}

export class $IWireCoil implements $IWireCoil$$Interface {
 "getWireType"(arg0: $ItemStack$$Type): $WireType
 "canConnectCable"(arg0: $ItemStack$$Type, arg1: $BlockEntity$$Type): boolean
 "consumeWire"(arg0: $ItemStack$$Type, arg1: integer): void
 "getMaxLength"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWireCoil$$Type = ((arg0: $ItemStack) => $WireType$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWireCoil$$Original = $IWireCoil;}
declare module "blusunrize.immersiveengineering.api.wires.IConnectionTemplate$TemplateConnection" {
import {$WireType, $WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$Record} from "java.lang.Record"

export class $IConnectionTemplate$TemplateConnection extends $Record {
constructor(arg0: $CompoundTag$$Type)
constructor(endA: $ConnectionPoint$$Type, endB: $ConnectionPoint$$Type, type: $WireType$$Type)

public "endA"(): $ConnectionPoint
public "endB"(): $ConnectionPoint
public "type"(): $WireType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "toNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectionTemplate$TemplateConnection$$Type = ({"endB"?: $ConnectionPoint$$Type, "type"?: $WireType$$Type, "endA"?: $ConnectionPoint$$Type}) | ([endB?: $ConnectionPoint$$Type, type?: $WireType$$Type, endA?: $ConnectionPoint$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConnectionTemplate$TemplateConnection$$Original = $IConnectionTemplate$TemplateConnection;}
declare module "blusunrize.immersiveengineering.api.wires.Connection$CatenaryData" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Record} from "java.lang.Record"

export class $Connection$CatenaryData extends $Record {
constructor(isVertical: boolean, offsetX: double, offsetY: double, scale: double, delta: $Vec3$$Type, horLength: double, vecA: $Vec3$$Type)

public "getPoint"(arg0: double): $Vec3
public "isVertical"(): boolean
public "getDeltaZ"(): double
public "getDeltaY"(): double
public "getDeltaX"(): double
public "horLength"(): double
public "vecA"(): $Vec3
public "getSlope"(arg0: double): double
public "getRenderPoint"(arg0: integer): $Vec3
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "reverse"(arg0: $Vec3$$Type): $Connection$CatenaryData
public "scale"(): double
public "delta"(): $Vec3
public "offsetY"(): double
public "offsetX"(): double
get "vertical"(): boolean
get "deltaZ"(): double
get "deltaY"(): double
get "deltaX"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connection$CatenaryData$$Type = ({"scale"?: double, "horLength"?: double, "vecA"?: $Vec3$$Type, "offsetX"?: double, "offsetY"?: double, "delta"?: $Vec3$$Type, "isVertical"?: boolean}) | ([scale?: double, horLength?: double, vecA?: $Vec3$$Type, offsetX?: double, offsetY?: double, delta?: $Vec3$$Type, isVertical?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Connection$CatenaryData$$Original = $Connection$CatenaryData;}
declare module "blusunrize.immersiveengineering.api.wires.Connection" {
import {$WireType, $WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LocalWireNetwork} from "blusunrize.immersiveengineering.api.wires.LocalWireNetwork"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$GlobalWireNetwork$$Type} from "blusunrize.immersiveengineering.api.wires.GlobalWireNetwork"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection$CatenaryData} from "blusunrize.immersiveengineering.api.wires.Connection$CatenaryData"

export class $Connection {
static readonly "RENDER_POINTS_PER_WIRE": integer
readonly "type": $WireType

constructor(arg0: $BlockPos$$Type, arg1: integer, arg2: integer)
constructor(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $ConnectionPoint$$Type, arg3: $GlobalWireNetwork$$Type)
constructor(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $ConnectionPoint$$Type, arg3: $Vec3$$Type, arg4: $Vec3$$Type)
constructor(arg0: $CompoundTag$$Type)

public "getPoint"(arg0: double, arg1: $ConnectionPoint$$Type): $Vec3
public "getCatenaryData"(): $Connection$CatenaryData
public "getEndA"(): $ConnectionPoint
public static "makeCatenaryData"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: double): $Connection$CatenaryData
public "getSlope"(arg0: double, arg1: $ConnectionPoint$$Type): double
public "getOtherEnd"(arg0: $ConnectionPoint$$Type): $ConnectionPoint
public "getEndAOffset"(): $Vec3
public "getEndB"(): $ConnectionPoint
public "getContainingNet"(arg0: $GlobalWireNetwork$$Type): $LocalWireNetwork
public "isEnd"(arg0: $ConnectionPoint$$Type): boolean
public "isPositiveEnd"(arg0: $ConnectionPoint$$Type): boolean
public "getEndFor"(arg0: $BlockPos$$Type): $ConnectionPoint
public "getEnds"(): ($ConnectionPoint)[]
public "getEndBOffset"(): $Vec3
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLength"(): double
public "isInternal"(): boolean
public "transformPosition"(arg0: double, arg1: $ConnectionPoint$$Type): double
public "toNBT"(): $CompoundTag
get "catenaryData"(): $Connection$CatenaryData
get "endA"(): $ConnectionPoint
get "endAOffset"(): $Vec3
get "endB"(): $ConnectionPoint
get "ends"(): ($ConnectionPoint)[]
get "endBOffset"(): $Vec3
get "length"(): double
get "internal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connection$$Type = ($Connection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Connection$$Original = $Connection;}
declare module "blusunrize.immersiveengineering.api.wires.localhandlers.IWorldTickable" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $IWorldTickable$$Interface {

(arg0: $Level): void
}

export class $IWorldTickable implements $IWorldTickable$$Interface {
 "update"(arg0: $Level$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldTickable$$Type = ((arg0: $Level) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWorldTickable$$Original = $IWorldTickable;}
declare module "blusunrize.immersiveengineering.api.wires.localhandlers.LocalNetworkHandler" {
import {$Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IImmersiveConnectable$$Type} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$LocalWireNetwork$$Type} from "blusunrize.immersiveengineering.api.wires.LocalWireNetwork"
import {$ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$GlobalWireNetwork$$Type} from "blusunrize.immersiveengineering.api.wires.GlobalWireNetwork"
import {$ILocalHandlerConstructor$$Type} from "blusunrize.immersiveengineering.api.wires.localhandlers.ILocalHandlerConstructor"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $LocalNetworkHandler {
public "onConnectorLoaded"(arg0: $ConnectionPoint$$Type, arg1: $IImmersiveConnectable$$Type): void
public "onConnectorUnloaded"(arg0: $BlockPos$$Type, arg1: $IImmersiveConnectable$$Type): void
public "onConnectorRemoved"(arg0: $BlockPos$$Type, arg1: $IImmersiveConnectable$$Type): void
public "onConnectionAdded"(arg0: $Connection$$Type): void
public "onConnectionRemoved"(arg0: $Connection$$Type): void
public "setLocalNet"(arg0: $LocalWireNetwork$$Type): void
public static "createHandler"(arg0: $ResourceLocation$$Type, arg1: $LocalWireNetwork$$Type, arg2: $GlobalWireNetwork$$Type): $LocalNetworkHandler
public "merge"(arg0: $LocalNetworkHandler$$Type): $LocalNetworkHandler
public static "register"(arg0: $ResourceLocation$$Type, arg1: $ILocalHandlerConstructor$$Type): void
set "localNet"(value: $LocalWireNetwork$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalNetworkHandler$$Type = ($LocalNetworkHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalNetworkHandler$$Original = $LocalNetworkHandler;}
declare module "blusunrize.immersiveengineering.api.wires.WireType" {
import {$Collection} from "java.util.Collection"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LinkedHashSet} from "java.util.LinkedHashSet"
import {$ILocalHandlerProvider$$Interface} from "blusunrize.immersiveengineering.api.wires.localhandlers.ILocalHandlerProvider"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $WireType implements $ILocalHandlerProvider$$Interface {
static "INTERNAL_CONNECTION": $WireType
static readonly "HV_CATEGORY": StringJS
static "REDSTONE": $WireType
static "COPPER": $WireType
static readonly "REDSTONE_CATEGORY": StringJS
static readonly "LV_CATEGORY": StringJS
static readonly "CODECS": $DualCodec<($ByteBuf), ($WireType)>
static "STRUCTURE_ROPE": $WireType
static "STRUCTURE_STEEL": $WireType
static "STEEL": $WireType
static "ELECTRUM_INSULATED": $WireType
static "COPPER_INSULATED": $WireType
static readonly "STRUCTURE_CATEGORY": StringJS
static readonly "MV_CATEGORY": StringJS
static "ELECTRUM": $WireType

constructor()

public static "getValues"(): $LinkedHashSet<($WireType)>
public "getSlack"(): double
public "getWireCoil"(arg0: $Connection$$Type): $ItemStack
public static "getIEWireTypes"(): $Collection<($WireType)>
public "getRenderDiameter"(): double
public "getColour"(arg0: $Connection$$Type): integer
public static "getValue"(arg0: StringJS): $WireType
public "getCategory"(): StringJS
public "getMaxLength"(): integer
public "getUniqueName"(): StringJS
public "getRequestedHandlers"(): $Collection<($ResourceLocation)>
public static get "values"(): $LinkedHashSet<($WireType)>
get "slack"(): double
public static get "IEWireTypes"(): $Collection<($WireType)>
get "renderDiameter"(): double
get "category"(): StringJS
get "maxLength"(): integer
get "uniqueName"(): StringJS
get "requestedHandlers"(): $Collection<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireType$$Type = ($WireType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WireType$$Original = $WireType;}
declare module "blusunrize.immersiveengineering.api.wires.localhandlers.ILocalHandlerProvider" {
import {$Collection} from "java.util.Collection"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export interface $ILocalHandlerProvider$$Interface {
get "requestedHandlers"(): $Collection<($ResourceLocation)>
}

export class $ILocalHandlerProvider implements $ILocalHandlerProvider$$Interface {
 "getRequestedHandlers"(): $Collection<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILocalHandlerProvider$$Type = ($ILocalHandlerProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILocalHandlerProvider$$Original = $ILocalHandlerProvider;}
