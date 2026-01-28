declare module "xfacthd.framedblocks.api.camo.empty.EmptyCamoContainer" {
import {$CamoContainer} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$CamoContainerFactory} from "xfacthd.framedblocks.api.camo.CamoContainerFactory"
import {$EmptyCamoContent} from "xfacthd.framedblocks.api.camo.empty.EmptyCamoContent"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"

export class $EmptyCamoContainer extends $CamoContainer<($EmptyCamoContent), ($EmptyCamoContainer)> {
static readonly "CAMO_NAME": $MutableComponent
static readonly "EMPTY": $EmptyCamoContainer

public "canRotateCamo"(): boolean
public "rotateCamo"(): $EmptyCamoContainer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getFactory"(): $CamoContainerFactory<($EmptyCamoContainer)>
get "factory"(): $CamoContainerFactory<($EmptyCamoContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyCamoContainer$$Type = ($EmptyCamoContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyCamoContainer$$Original = $EmptyCamoContainer;}
declare module "xfacthd.framedblocks.api.camo.TriggerRegistrar" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export interface $TriggerRegistrar$$Interface {
}

export class $TriggerRegistrar implements $TriggerRegistrar$$Interface {
static readonly "DEFAULT_REMOVAL": $Predicate<($ItemStack)>

 "registerApplicationPredicate"(arg0: $Predicate$$Type<($ItemStack)>): void
 "registerRemovalPredicate"(arg0: $Predicate$$Type<($ItemStack)>): void
 "registerApplicationItem"(arg0: $Item$$Type): void
 "registerRemovalItem"(arg0: $Item$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriggerRegistrar$$Type = ($TriggerRegistrar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriggerRegistrar$$Original = $TriggerRegistrar;}
declare module "xfacthd.framedblocks.api.camo.CamoClientHandler" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$Particle} from "net.minecraft.client.particle.Particle"
import {$ChunkRenderTypeSet} from "net.neoforged.neoforge.client.ChunkRenderTypeSet"
import {$ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CamoContent, $CamoContent$$Type} from "xfacthd.framedblocks.api.camo.CamoContent"

export class $CamoClientHandler<T extends $CamoContent<(object)>> {
constructor()

public "getRenderTypes"(arg0: T, arg1: $RandomSource$$Type, arg2: $ModelData$$Type): $ChunkRenderTypeSet
public "makeHitDestroyParticle"(arg0: $ClientLevel$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: T, arg8: $BlockPos$$Type): $Particle
public "getOrCreateModel"(arg0: T): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CamoClientHandler$$Type<T> = ($CamoClientHandler<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CamoClientHandler$$Original<T> = $CamoClientHandler<(T)>;}
declare module "xfacthd.framedblocks.api.camo.block.BlockCamoContent" {
import {$MapColor} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CamoClientHandler} from "xfacthd.framedblocks.api.camo.CamoClientHandler"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$CamoContent, $CamoContent$$Type} from "xfacthd.framedblocks.api.camo.CamoContent"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockCamoContent extends $CamoContent<($BlockCamoContent)> {
constructor(arg0: $BlockState$$Type)

public "getCamoId"(): StringJS
public "makeRunningLandingParticles"(arg0: $BlockPos$$Type): $ParticleOptions
public "getAppearanceState"(): $BlockState
public "isOccludedBy"(arg0: $CamoContent$$Type<(never)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "isOccludedBy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "occludes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "propagatesSkylightDown"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
public "getShadeBrightness"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: float): float
public "getExplosionResistance"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): float
public "isSolid"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
public "canOcclude"(): boolean
public "getFlammability"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
public "canSustainPlant"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type): $TriState
public "getBeaconColorMultiplier"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): integer
public "isFlammable"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
public "canEntityDestroy"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): boolean
public "getMapColor"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MapColor
public "getCamoName"(): $MutableComponent
public "getAsBlockState"(): $BlockState
public "isEmissive"(): boolean
public "getTintColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: integer): integer
public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getClientHandler"(): $CamoClientHandler<($BlockCamoContent)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getState"(): $BlockState
public "getSoundType"(): $SoundType
public "getFriction"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type, arg3: float): float
public "getLightEmission"(): integer
get "camoId"(): StringJS
get "appearanceState"(): $BlockState
get "camoName"(): $MutableComponent
get "asBlockState"(): $BlockState
get "emissive"(): boolean
get "clientHandler"(): $CamoClientHandler<($BlockCamoContent)>
get "state"(): $BlockState
get "soundType"(): $SoundType
get "lightEmission"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCamoContent$$Type = ($BlockCamoContent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockCamoContent$$Original = $BlockCamoContent;}
declare module "xfacthd.framedblocks.api.camo.block.rotator.RegisterBlockCamoRotatorsEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockCamoRotator$$Type} from "xfacthd.framedblocks.api.camo.block.rotator.BlockCamoRotator"

export class $RegisterBlockCamoRotatorsEvent extends $Event {
constructor(arg0: $BiConsumer$$Type<($Block), ($BlockCamoRotator)>)

public "register"(arg0: $Block$$Type, arg1: $BlockCamoRotator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterBlockCamoRotatorsEvent$$Type = ($RegisterBlockCamoRotatorsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterBlockCamoRotatorsEvent$$Original = $RegisterBlockCamoRotatorsEvent;}
declare module "xfacthd.framedblocks.api.camo.block.AbstractBlockCamoContainer" {
import {$CamoContainer} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$BlockCamoContent} from "xfacthd.framedblocks.api.camo.block.BlockCamoContent"
import {$CamoContainerFactory} from "xfacthd.framedblocks.api.camo.CamoContainerFactory"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockCamoContainer<T extends $AbstractBlockCamoContainer<(object)>> extends $CamoContainer<($BlockCamoContent), (T)> {
public "copyWithState"(arg0: $BlockState$$Type): T
public "canRotateCamo"(): boolean
public "rotateCamo"(): $CamoContainer
public "getFactory"(): $CamoContainerFactory
public "getState"(): $BlockState
get "factory"(): $CamoContainerFactory
get "state"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockCamoContainer$$Type<T> = ($AbstractBlockCamoContainer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractBlockCamoContainer$$Original<T> = $AbstractBlockCamoContainer<(T)>;}
declare module "xfacthd.framedblocks.api.camo.empty.EmptyCamoContent" {
import {$MapColor} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CamoClientHandler} from "xfacthd.framedblocks.api.camo.CamoClientHandler"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$CamoContent, $CamoContent$$Type} from "xfacthd.framedblocks.api.camo.CamoContent"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EmptyCamoContent extends $CamoContent<($EmptyCamoContent)> {
static readonly "EMPTY": $EmptyCamoContent

constructor()

public "getCamoId"(): StringJS
public "makeRunningLandingParticles"(arg0: $BlockPos$$Type): $ParticleOptions
public "getAppearanceState"(): $BlockState
public "isOccludedBy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "isOccludedBy"(arg0: $CamoContent$$Type<(never)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "occludes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "propagatesSkylightDown"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
public "getShadeBrightness"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: float): float
public "getExplosionResistance"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): float
public "isSolid"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
public "canOcclude"(): boolean
public "getFlammability"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
public "canSustainPlant"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type): $TriState
public "getBeaconColorMultiplier"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): integer
public "isFlammable"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
public "canEntityDestroy"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): boolean
public "getMapColor"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MapColor
public "getCamoName"(): $MutableComponent
public "getAsBlockState"(): $BlockState
public "isEmissive"(): boolean
public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getTintColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: integer): integer
public "getClientHandler"(): $CamoClientHandler<($EmptyCamoContent)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getSoundType"(): $SoundType
public "getFriction"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type, arg3: float): float
public "getLightEmission"(): integer
get "camoId"(): StringJS
get "appearanceState"(): $BlockState
get "camoName"(): $MutableComponent
get "asBlockState"(): $BlockState
get "emissive"(): boolean
get "clientHandler"(): $CamoClientHandler<($EmptyCamoContent)>
get "soundType"(): $SoundType
get "lightEmission"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyCamoContent$$Type = ($EmptyCamoContent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyCamoContent$$Original = $EmptyCamoContent;}
declare module "xfacthd.framedblocks.api.camo.block.SimpleBlockCamoContainer" {
import {$CamoContainer} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$CamoContainerFactory} from "xfacthd.framedblocks.api.camo.CamoContainerFactory"
import {$AbstractBlockCamoContainer} from "xfacthd.framedblocks.api.camo.block.AbstractBlockCamoContainer"
import {$SimpleBlockCamoContainerFactory$$Type} from "xfacthd.framedblocks.api.camo.block.SimpleBlockCamoContainerFactory"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SimpleBlockCamoContainer extends $AbstractBlockCamoContainer<($SimpleBlockCamoContainer)> {
constructor(arg0: $BlockState$$Type, arg1: $SimpleBlockCamoContainerFactory$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getFactory"(): $CamoContainerFactory
public "rotateCamo"(): $CamoContainer
get "factory"(): $CamoContainerFactory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleBlockCamoContainer$$Type = ($SimpleBlockCamoContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleBlockCamoContainer$$Original = $SimpleBlockCamoContainer;}
declare module "xfacthd.framedblocks.api.camo.CamoContainer" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$MapColor} from "net.minecraft.world.level.material.MapColor"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CamoContainerFactory} from "xfacthd.framedblocks.api.camo.CamoContainerFactory"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CamoContent} from "xfacthd.framedblocks.api.camo.CamoContent"

export class $CamoContainer<C extends $CamoContent<(object)>, T extends $CamoContainer<(object), (object)>> {
public "canTriviallyConvertToItemStack"(): boolean
public "canRotateCamo"(): boolean
public "rotateCamo"(): T
public "getBeaconColorMultiplier"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): integer
public "getMapColor"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MapColor
public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getTintColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: integer): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "getFactory"(): $CamoContainerFactory<(T)>
public "getContent"(): C
get "empty"(): boolean
get "factory"(): $CamoContainerFactory<(T)>
get "content"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CamoContainer$$Type<C, T> = ($CamoContainer<(C), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CamoContainer$$Original<C, T> = $CamoContainer<(C), (T)>;}
declare module "xfacthd.framedblocks.api.camo.CamoContent" {
import {$MapColor} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CamoClientHandler} from "xfacthd.framedblocks.api.camo.CamoClientHandler"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$QuadCacheKey$$Interface} from "xfacthd.framedblocks.api.model.cache.QuadCacheKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CamoContent<C extends $CamoContent<(object)>> implements $QuadCacheKey$$Interface {
constructor()

public "getCamoId"(): StringJS
public "makeRunningLandingParticles"(arg0: $BlockPos$$Type): $ParticleOptions
public "getAppearanceState"(): $BlockState
public "isOccludedBy"(arg0: $CamoContent$$Type<(never)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "isOccludedBy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "occludes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "ctCtx"(): any
public "propagatesSkylightDown"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
public "getShadeBrightness"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: float): float
public "getExplosionResistance"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): float
public "isSolid"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
public "canOcclude"(): boolean
public "getFlammability"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
public "canSustainPlant"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type): $TriState
public "getBeaconColorMultiplier"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): integer
public "isFlammable"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
public "canEntityDestroy"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): boolean
public "getMapColor"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MapColor
public "getCamoName"(): $MutableComponent
public "getAsBlockState"(): $BlockState
public "isEmissive"(): boolean
public "camo"(): $CamoContent<(never)>
public "getTintColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: integer): integer
public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getClientHandler"(): $CamoClientHandler<(C)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "getSoundType"(): $SoundType
public "getFriction"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type, arg3: float): float
public "getLightEmission"(): integer
get "camoId"(): StringJS
get "appearanceState"(): $BlockState
get "camoName"(): $MutableComponent
get "asBlockState"(): $BlockState
get "emissive"(): boolean
get "clientHandler"(): $CamoClientHandler<(C)>
get "empty"(): boolean
get "soundType"(): $SoundType
get "lightEmission"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CamoContent$$Type<C> = ($CamoContent<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CamoContent$$Original<C> = $CamoContent<(C)>;}
declare module "xfacthd.framedblocks.api.camo.CamoContainerFactory" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CamoContainer, $CamoContainer$$Type} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TriggerRegistrar$$Type} from "xfacthd.framedblocks.api.camo.TriggerRegistrar"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CamoContainerFactory<T extends $CamoContainer<(object), (object)>> {
static readonly "MSG_BLACKLISTED": $Component

constructor()

public "applyCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type): T
public "removeCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type, arg4: T): boolean
public "dropCamo"(arg0: T): $ItemStack
public "validateCamo"(arg0: T): boolean
public "canApplyInCraftingRecipe"(arg0: $ItemStack$$Type): boolean
public "applyCamoInCraftingRecipe"(arg0: $ItemStack$$Type): T
public "getCraftingRemainder"(arg0: $ItemStack$$Type): $ItemStack
public "registerTriggerItems"(arg0: $TriggerRegistrar$$Type): void
public "canTriviallyConvertToItemStack"(): boolean
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "handleInteraction"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: T, arg4: $ItemStack$$Type, arg5: $InteractionHand$$Type): T
/**
 * 
 * @deprecated
 */
public "handleInteraction"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: T, arg4: $ItemStack$$Type): T
public "codec"(): $MapCodec<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.FramedblocksCamoContainers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.FramedblocksCamoContainersTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CamoContainerFactory$$Type<T> = (Special.FramedblocksCamoContainers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CamoContainerFactory$$Original<T> = $CamoContainerFactory<(T)>;}
declare module "xfacthd.framedblocks.api.camo.block.AbstractBlockCamoContainerFactory" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CamoContainer, $CamoContainer$$Type} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CamoContainerFactory} from "xfacthd.framedblocks.api.camo.CamoContainerFactory"
import {$AbstractBlockCamoContainer, $AbstractBlockCamoContainer$$Type} from "xfacthd.framedblocks.api.camo.block.AbstractBlockCamoContainer"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockCamoContainerFactory<T extends $AbstractBlockCamoContainer<(object)>> extends $CamoContainerFactory<(T)> {
static readonly "MSG_BLACKLISTED": $Component

constructor()

public "applyCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type): $CamoContainer
public "removeCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type, arg4: $CamoContainer$$Type): boolean
public "removeCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type, arg4: T): boolean
public "validateCamo"(arg0: $CamoContainer$$Type): boolean
public "validateCamo"(arg0: T): boolean
public "isValidBlockInternal"(arg0: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockCamoContainerFactory$$Type<T> = ($AbstractBlockCamoContainerFactory<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractBlockCamoContainerFactory$$Original<T> = $AbstractBlockCamoContainerFactory<(T)>;}
declare module "xfacthd.framedblocks.api.camo.block.rotator.BlockCamoRotator" {
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockCamoRotator$$Interface {
}

export class $BlockCamoRotator implements $BlockCamoRotator$$Interface {
static readonly "DEFAULT": $BlockCamoRotator

 "canRotate"(arg0: $BlockState$$Type): boolean
static "of"(arg0: $Block$$Type): $BlockCamoRotator
 "rotate"(arg0: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCamoRotator$$Type = ($BlockCamoRotator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockCamoRotator$$Original = $BlockCamoRotator;}
declare module "xfacthd.framedblocks.api.camo.empty.EmptyCamoContainerFactory" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CamoContainer, $CamoContainer$$Type} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TriggerRegistrar$$Type} from "xfacthd.framedblocks.api.camo.TriggerRegistrar"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CamoContainerFactory} from "xfacthd.framedblocks.api.camo.CamoContainerFactory"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EmptyCamoContainer, $EmptyCamoContainer$$Type} from "xfacthd.framedblocks.api.camo.empty.EmptyCamoContainer"

export class $EmptyCamoContainerFactory extends $CamoContainerFactory<($EmptyCamoContainer)> {
static readonly "MSG_BLACKLISTED": $Component

constructor()

public "applyCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type): $CamoContainer
public "removeCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type, arg4: $EmptyCamoContainer$$Type): boolean
public "removeCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type, arg4: $CamoContainer$$Type): boolean
public "dropCamo"(arg0: $CamoContainer$$Type): $ItemStack
public "dropCamo"(arg0: $EmptyCamoContainer$$Type): $ItemStack
public "validateCamo"(arg0: $CamoContainer$$Type): boolean
public "validateCamo"(arg0: $EmptyCamoContainer$$Type): boolean
public "registerTriggerItems"(arg0: $TriggerRegistrar$$Type): void
public "canTriviallyConvertToItemStack"(): boolean
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EmptyCamoContainer)>
public "codec"(): $MapCodec<($EmptyCamoContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyCamoContainerFactory$$Type = ($EmptyCamoContainerFactory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyCamoContainerFactory$$Original = $EmptyCamoContainerFactory;}
declare module "xfacthd.framedblocks.api.camo.block.SimpleBlockCamoContainerFactory" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CamoContainer, $CamoContainer$$Type} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleBlockCamoContainer, $SimpleBlockCamoContainer$$Type} from "xfacthd.framedblocks.api.camo.block.SimpleBlockCamoContainer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Component} from "net.minecraft.network.chat.Component"
import {$AbstractBlockCamoContainerFactory} from "xfacthd.framedblocks.api.camo.block.AbstractBlockCamoContainerFactory"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SimpleBlockCamoContainerFactory extends $AbstractBlockCamoContainerFactory<($SimpleBlockCamoContainer)> {
static readonly "MSG_BLACKLISTED": $Component

constructor()

public "dropCamo"(arg0: $CamoContainer$$Type): $ItemStack
public "dropCamo"(arg0: $SimpleBlockCamoContainer$$Type): $ItemStack
public "canApplyInCraftingRecipe"(arg0: $ItemStack$$Type): boolean
public "applyCamoInCraftingRecipe"(arg0: $ItemStack$$Type): $CamoContainer
public "getCraftingRemainder"(arg0: $ItemStack$$Type): $ItemStack
public "canTriviallyConvertToItemStack"(): boolean
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SimpleBlockCamoContainer)>
public "codec"(): $MapCodec<($SimpleBlockCamoContainer)>
public "applyCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type): $CamoContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleBlockCamoContainerFactory$$Type = ($SimpleBlockCamoContainerFactory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleBlockCamoContainerFactory$$Original = $SimpleBlockCamoContainerFactory;}
