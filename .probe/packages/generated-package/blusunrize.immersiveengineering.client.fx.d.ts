declare module "blusunrize.immersiveengineering.client.fx.IEParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DualMapCodec$$Type} from "malte0811.dualcodecs.DualMapCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"

export class $IEParticleType<T extends $ParticleOptions> extends $ParticleType<(T)> {
constructor(arg0: boolean, arg1: $MapCodec$$Type<(T)>, arg2: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>)
constructor(arg0: boolean, arg1: $DualMapCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEParticleType$$Type<T> = ($IEParticleType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEParticleType$$Original<T> = $IEParticleType<(T)>;}
