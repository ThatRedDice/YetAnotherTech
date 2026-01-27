declare module "rearth.oritech.api.attachment.Attachment" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier} from "java.util.function.Supplier"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $Attachment$$Interface<A> {
}

export class $Attachment<A> implements $Attachment$$Interface {
 "networkCodec"(): $StreamCodec<($ByteBuf), (A)>
 "persistenceCodec"(): $Codec<(A)>
 "identifier"(): $ResourceLocation
 "initializer"(): $Supplier<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attachment$$Type<A> = ($Attachment<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Attachment$$Original<A> = $Attachment<(A)>;}
