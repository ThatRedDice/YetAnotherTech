declare module "net.createmod.catnip.net.base.ClientboundPacketPayload" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$BasePacketPayload$$Interface} from "net.createmod.catnip.net.base.BasePacketPayload"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$BasePacketPayload$PacketTypeProvider} from "net.createmod.catnip.net.base.BasePacketPayload$PacketTypeProvider"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export interface $ClientboundPacketPayload$$Interface extends $BasePacketPayload$$Interface {
get "typeProvider"(): $BasePacketPayload$PacketTypeProvider
}

export class $ClientboundPacketPayload implements $ClientboundPacketPayload$$Interface {
 "handleInternal"(arg0: $Player$$Type): void
 "handle"(arg0: $LocalPlayer$$Type): void
 "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
 "getTypeProvider"(): $BasePacketPayload$PacketTypeProvider
static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPacketPayload$$Type = ($ClientboundPacketPayload);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPacketPayload$$Original = $ClientboundPacketPayload;}
declare module "net.createmod.catnip.net.base.BasePacketPayload" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Interface} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$BasePacketPayload$PacketTypeProvider, $BasePacketPayload$PacketTypeProvider$$Type} from "net.createmod.catnip.net.base.BasePacketPayload$PacketTypeProvider"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export interface $BasePacketPayload$$Interface extends $CustomPacketPayload$$Interface {

(): $BasePacketPayload$PacketTypeProvider$$Type
get "typeProvider"(): $BasePacketPayload$PacketTypeProvider
}

export class $BasePacketPayload implements $BasePacketPayload$$Interface {
 "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
 "getTypeProvider"(): $BasePacketPayload$PacketTypeProvider
static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePacketPayload$$Type = (() => $BasePacketPayload$PacketTypeProvider$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasePacketPayload$$Original = $BasePacketPayload;}
declare module "net.createmod.catnip.net.base.BasePacketPayload$PacketTypeProvider" {
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$CustomPacketPayload} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"

export interface $BasePacketPayload$PacketTypeProvider$$Interface {

(): $CustomPacketPayload$Type$$Type<(T)>
get "type"(): $CustomPacketPayload$Type<(T)>
}

export class $BasePacketPayload$PacketTypeProvider implements $BasePacketPayload$PacketTypeProvider$$Interface {
 "getType"<T extends $CustomPacketPayload>(): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePacketPayload$PacketTypeProvider$$Type = (() => $CustomPacketPayload$Type$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasePacketPayload$PacketTypeProvider$$Original = $BasePacketPayload$PacketTypeProvider;}
