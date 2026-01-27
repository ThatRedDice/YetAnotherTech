declare module "xfacthd.framedblocks.common.particle.BasicParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"

export class $BasicParticleType<O extends $ParticleOptions> extends $ParticleType<(O)> {
constructor(arg0: boolean, arg1: $MapCodec$$Type<(O)>, arg2: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (O)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (O)>
public "codec"(): $MapCodec<(O)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicParticleType$$Type<O> = ($BasicParticleType<(O)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicParticleType$$Original<O> = $BasicParticleType<(O)>;}
