declare module "com.mrh0.createaddition.network.IObserveBlockEntity" {
import {$ObservePacketPayload, $ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $IObserveBlockEntity$$Interface {

(arg0: $ServerPlayer, arg1: $ObservePacketPayload): void
}

export class $IObserveBlockEntity implements $IObserveBlockEntity$$Interface {
 "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IObserveBlockEntity$$Type = ((arg0: $ServerPlayer, arg1: $ObservePacketPayload) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IObserveBlockEntity$$Original = $IObserveBlockEntity;}
declare module "com.mrh0.createaddition.network.ObservePacketPayload" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Interface} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$Record} from "java.lang.Record"

export class $ObservePacketPayload extends $Record implements $CustomPacketPayload$$Interface {
static readonly "TYPE": $CustomPacketPayload$Type<($ObservePacketPayload)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ObservePacketPayload)>

constructor(pos: $BlockPos$$Type, node: integer)

public static "tick"(): void
public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pos"(): $BlockPos
public "node"(): integer
public static "send"(arg0: $BlockPos$$Type, arg1: integer): boolean
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObservePacketPayload$$Type = ({"pos"?: $BlockPos$$Type, "node"?: integer}) | ([pos?: $BlockPos$$Type, node?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObservePacketPayload$$Original = $ObservePacketPayload;}
