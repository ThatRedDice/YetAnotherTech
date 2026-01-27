declare module "com.direwolf20.buildinggadgets2.client.particles.itemparticle.ItemFlowParticleType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemFlowParticleData} from "com.direwolf20.buildinggadgets2.client.particles.itemparticle.ItemFlowParticleData"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ItemFlowParticleType extends $ParticleType<($ItemFlowParticleData)> {
constructor(arg0: boolean)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemFlowParticleData)>
public "getType"(): $ItemFlowParticleType
public "codec"(): $MapCodec<($ItemFlowParticleData)>
get "type"(): $ItemFlowParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFlowParticleType$$Type = ($ItemFlowParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFlowParticleType$$Original = $ItemFlowParticleType;}
declare module "com.direwolf20.buildinggadgets2.client.particles.fluidparticle.FluidFlowParticleData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions$$Interface} from "net.minecraft.core.particles.ParticleOptions"

export class $FluidFlowParticleData implements $ParticleOptions$$Interface {
readonly "shrinking": boolean
static readonly "MAP_CODEC": $MapCodec<($FluidFlowParticleData)>
readonly "doGravity": boolean
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidFlowParticleData)>

constructor(arg0: $FluidStack$$Type, arg1: boolean, arg2: boolean)

public "getFluidStack"(): $FluidStack
public "getType"(): $ParticleType<($FluidFlowParticleData)>
public "isDoGravity"(): boolean
public "isShrinking"(): boolean
get "fluidStack"(): $FluidStack
get "type"(): $ParticleType<($FluidFlowParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFlowParticleData$$Type = ($FluidFlowParticleData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidFlowParticleData$$Original = $FluidFlowParticleData;}
declare module "com.direwolf20.buildinggadgets2.client.particles.itemparticle.ItemFlowParticleData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions$$Interface} from "net.minecraft.core.particles.ParticleOptions"

export class $ItemFlowParticleData implements $ParticleOptions$$Interface {
readonly "shrinking": boolean
static readonly "MAP_CODEC": $MapCodec<($ItemFlowParticleData)>
readonly "doGravity": boolean
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemFlowParticleData)>

constructor(arg0: $ItemStack$$Type, arg1: boolean, arg2: boolean)

public "getType"(): $ParticleType<($ItemFlowParticleData)>
public "getItemStack"(): $ItemStack
public "isDoGravity"(): boolean
public "isShrinking"(): boolean
get "type"(): $ParticleType<($ItemFlowParticleData)>
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFlowParticleData$$Type = ($ItemFlowParticleData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFlowParticleData$$Original = $ItemFlowParticleData;}
declare module "com.direwolf20.buildinggadgets2.client.particles.fluidparticle.FluidFlowParticleType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$FluidFlowParticleData} from "com.direwolf20.buildinggadgets2.client.particles.fluidparticle.FluidFlowParticleData"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FluidFlowParticleType extends $ParticleType<($FluidFlowParticleData)> {
constructor(arg0: boolean)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FluidFlowParticleData)>
public "getType"(): $FluidFlowParticleType
public "codec"(): $MapCodec<($FluidFlowParticleData)>
get "type"(): $FluidFlowParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFlowParticleType$$Type = ($FluidFlowParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidFlowParticleType$$Original = $FluidFlowParticleType;}
