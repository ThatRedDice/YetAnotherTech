declare module "appeng.menu.guisync.LinkStatusAwareMenu" {
import {$ILinkStatus, $ILinkStatus$$Type} from "appeng.api.storage.ILinkStatus"

export interface $LinkStatusAwareMenu$$Interface {

(arg0: $ILinkStatus): void
set "linkStatus"(value: $ILinkStatus$$Type)
}

export class $LinkStatusAwareMenu implements $LinkStatusAwareMenu$$Interface {
 "setLinkStatus"(arg0: $ILinkStatus$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkStatusAwareMenu$$Type = ((arg0: $ILinkStatus) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkStatusAwareMenu$$Original = $LinkStatusAwareMenu;}
declare module "appeng.menu.guisync.PacketWritable" {
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export interface $PacketWritable$$Interface {

(arg0: $RegistryFriendlyByteBuf): void
}

export class $PacketWritable implements $PacketWritable$$Interface {
 "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketWritable$$Type = ((arg0: $RegistryFriendlyByteBuf) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PacketWritable$$Original = $PacketWritable;}
