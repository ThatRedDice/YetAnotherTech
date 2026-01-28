declare module "dev.technici4n.moderndynamics.network.NetworkCache" {
import {$NodeHost, $NodeHost$$Type} from "dev.technici4n.moderndynamics.network.NodeHost"
import {$StringBuilder$$Type} from "java.lang.StringBuilder"
import {$ServerLevel} from "net.minecraft.server.level.ServerLevel"

export class $NetworkCache<H extends $NodeHost, C extends $NetworkCache<(object), (object)>> {
readonly "level": $ServerLevel

public "scheduleHostUpdate"(arg0: $NodeHost$$Type): void
public "appendDebugInfo"(arg0: $StringBuilder$$Type): void
public "separate"(): void
public "combine"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkCache$$Type<H, C> = ($NetworkCache<(H), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkCache$$Original<H, C> = $NetworkCache<(H), (C)>;}
declare module "dev.technici4n.moderndynamics.network.NodeHost" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PipeBlockEntity} from "dev.technici4n.moderndynamics.pipe.PipeBlockEntity"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AttachmentItem$$Type} from "dev.technici4n.moderndynamics.attachment.AttachmentItem"
import {$NetworkManager} from "dev.technici4n.moderndynamics.network.NetworkManager"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$AttachedAttachment} from "dev.technici4n.moderndynamics.attachment.attached.AttachedAttachment"
import {$EnumSet$$Type} from "java.util.EnumSet"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $NodeHost {
 "pipeConnections": byte
 "inventoryConnections": integer

public "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "getApiInstance"(arg0: $BlockCapability$$Type<(never), ($Direction$$Type)>, arg1: $Direction$$Type): any
public "getAttachment"(arg0: $Direction$$Type): $AttachedAttachment
public "writeClientNbt"(arg0: $CompoundTag$$Type, arg1: $RegistryAccess$$Type): void
public "readClientNbt"(arg0: $CompoundTag$$Type, arg1: $RegistryAccess$$Type): void
public "separateNetwork"(): void
public "scheduleUpdate"(): void
public "removeSelf"(): void
public "refreshSelf"(): void
public "removeAttachment"(arg0: $Direction$$Type): $AttachedAttachment
public "acceptsAttachment"(arg0: $AttachmentItem$$Type, arg1: $ItemStack$$Type): boolean
public "setAttachment"(arg0: $Direction$$Type, arg1: $AttachmentItem$$Type, arg2: $CompoundTag$$Type, arg3: $HolderLookup$Provider$$Type): void
public "addSelf"(): void
public "getPipe"(): $PipeBlockEntity
public "isTicking"(): boolean
public "canConnectTo"(arg0: $Direction$$Type, arg1: $NodeHost$$Type): boolean
public "setConnections"(arg0: $EnumSet$$Type<($Direction$$Type)>): void
public "onRemoved"(): void
public "onConnectedTo"(arg0: $NodeHost$$Type): void
public "onConnectionRejectedTo"(arg0: $Direction$$Type, arg1: $NodeHost$$Type): void
public "getLevel"(): $Level
public "toString"(): StringJS
public "getManager"(): $NetworkManager
public "clientTick"(): void
public "needsUpdate"(): boolean
public "readNbt"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeNbt"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getPos"(): $BlockPos
get "pipe"(): $PipeBlockEntity
get "ticking"(): boolean
set "connections"(value: $EnumSet$$Type<($Direction$$Type)>)
get "level"(): $Level
get "manager"(): $NetworkManager
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeHost$$Type = ($NodeHost);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NodeHost$$Original = $NodeHost;}
declare module "dev.technici4n.moderndynamics.network.NetworkNode$Connection" {
import {$NodeHost} from "dev.technici4n.moderndynamics.network.NodeHost"
import {$NetworkCache} from "dev.technici4n.moderndynamics.network.NetworkCache"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$NetworkNode, $NetworkNode$$Type} from "dev.technici4n.moderndynamics.network.NetworkNode"
import {$Record} from "java.lang.Record"

export class $NetworkNode$Connection<H extends $NodeHost, C extends $NetworkCache<(object), (object)>> extends $Record {
constructor(direction: $Direction$$Type, target: $NetworkNode$$Type<(H), (C)>)

public "equals"(arg0: any): boolean
public "target"(): $NetworkNode<(H), (C)>
public "toString"(): StringJS
public "hashCode"(): integer
public "direction"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkNode$Connection$$Type<H, C> = ({"target"?: $NetworkNode$$Type<(H), (C)>, "direction"?: $Direction$$Type}) | ([target?: $NetworkNode$$Type<(H), (C)>, direction?: $Direction$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkNode$Connection$$Original<H, C> = $NetworkNode$Connection<(H), (C)>;}
declare module "dev.technici4n.moderndynamics.network.NetworkManager" {
import {$NodeHost, $NodeHost$$Type} from "dev.technici4n.moderndynamics.network.NodeHost"
import {$NetworkCache} from "dev.technici4n.moderndynamics.network.NetworkCache"
import {$NetworkCache$Factory$$Type} from "dev.technici4n.moderndynamics.network.NetworkCache$Factory"
import {$Class$$Type} from "java.lang.Class"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NetworkNode} from "dev.technici4n.moderndynamics.network.NetworkNode"

export class $NetworkManager<H extends $NodeHost, C extends $NetworkCache<(object), (object)>> {
public "refreshNode"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: H): void
public "findNode"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): $NetworkNode<(H), (C)>
public static "get"<H extends $NodeHost, C extends $NetworkCache<(object), (object)>>(arg0: $Class$$Type<(C)>, arg1: $NetworkCache$Factory$$Type<(H), (C)>): $NetworkManager<(H), (C)>
public "removeNode"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: H): void
public "addNode"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: H): void
public static "onEndTick"(): void
public static "onServerStopped"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkManager$$Type<H, C> = ($NetworkManager<(H), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkManager$$Original<H, C> = $NetworkManager<(H), (C)>;}
declare module "dev.technici4n.moderndynamics.network.NetworkCache$Factory" {
import {$NodeHost} from "dev.technici4n.moderndynamics.network.NodeHost"
import {$NetworkCache, $NetworkCache$$Type} from "dev.technici4n.moderndynamics.network.NetworkCache"
import {$List, $List$$Type} from "java.util.List"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$NetworkNode, $NetworkNode$$Type} from "dev.technici4n.moderndynamics.network.NetworkNode"

export interface $NetworkCache$Factory$$Interface<H extends $NodeHost, C extends $NetworkCache<(object), (object)>> {

(arg0: $ServerLevel, arg1: $List<($NetworkNode<(H), (C)>)>): C
}

export class $NetworkCache$Factory<H extends $NodeHost, C extends $NetworkCache<(object), (object)>> implements $NetworkCache$Factory$$Interface {
 "build"(arg0: $ServerLevel$$Type, arg1: $List$$Type<($NetworkNode$$Type<(H), (C)>)>): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkCache$Factory$$Type<H, C> = ((arg0: $ServerLevel, arg1: $List<($NetworkNode<(H), (C)>)>) => C);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkCache$Factory$$Original<H, C> = $NetworkCache$Factory<(H), (C)>;}
declare module "dev.technici4n.moderndynamics.network.NetworkNode" {
import {$NodeHost, $NodeHost$$Type} from "dev.technici4n.moderndynamics.network.NodeHost"
import {$NetworkCache} from "dev.technici4n.moderndynamics.network.NetworkCache"
import {$List} from "java.util.List"
import {$NetworkNode$Connection} from "dev.technici4n.moderndynamics.network.NetworkNode$Connection"

export class $NetworkNode<H extends $NodeHost, C extends $NetworkCache<(object), (object)>> {
constructor(arg0: H)

public "getNetworkCache"(): C
public "getHost"(): H
public "getConnections"(): $List<($NetworkNode$Connection<(H), (C)>)>
get "networkCache"(): C
get "host"(): H
get "connections"(): $List<($NetworkNode$Connection<(H), (C)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkNode$$Type<H, C> = ($NetworkNode<(H), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkNode$$Original<H, C> = $NetworkNode<(H), (C)>;}
