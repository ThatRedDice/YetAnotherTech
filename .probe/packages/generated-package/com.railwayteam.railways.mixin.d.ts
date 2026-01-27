declare module "com.railwayteam.railways.mixin.client.AccessorPartialModel" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PartialModel} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ConcurrentMap} from "java.util.concurrent.ConcurrentMap"

export interface $AccessorPartialModel$$Interface {

(arg0: $BakedModel): void
}

export class $AccessorPartialModel implements $AccessorPartialModel$$Interface {
 "railways$setBakedModel"(arg0: $BakedModel$$Type): void
static "railways$getALL"(): $ConcurrentMap<($ResourceLocation), ($PartialModel)>
static "railways$setPopulateOnInit"(arg0: boolean): void
static "railways$getPopulateOnInit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorPartialModel$$Type = ((arg0: $BakedModel) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorPartialModel$$Original = $AccessorPartialModel;}
declare module "com.railwayteam.railways.mixin.AccessorIngredient" {
import {$Ingredient$Value, $Ingredient$Value$$Type} from "net.minecraft.world.item.crafting.Ingredient$Value"

export interface $AccessorIngredient$$Interface {

(): ($Ingredient$Value$$Type)[]
get "values"(): ($Ingredient$Value)[]
}

export class $AccessorIngredient implements $AccessorIngredient$$Interface {
 "getValues"(): ($Ingredient$Value)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorIngredient$$Type = (() => ($Ingredient$Value$$Type)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorIngredient$$Original = $AccessorIngredient;}
declare module "com.railwayteam.railways.mixin.AccessorBlockEntity" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $AccessorBlockEntity$$Interface {

(arg0: $BlockPos): void
set "worldPosition"(value: $BlockPos$$Type)
}

export class $AccessorBlockEntity implements $AccessorBlockEntity$$Interface {
 "setWorldPosition"(arg0: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBlockEntity$$Type = ((arg0: $BlockPos) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorBlockEntity$$Original = $AccessorBlockEntity;}
declare module "com.railwayteam.railways.mixin.AccessorScheduleRuntime" {
import {$Train} from "com.simibubi.create.content.trains.entity.Train"

export interface $AccessorScheduleRuntime$$Interface {
set "cooldown"(value: integer)
get "train"(): $Train
}

export class $AccessorScheduleRuntime implements $AccessorScheduleRuntime$$Interface {
 "setCooldown"(arg0: integer): void
 "getTrain"(): $Train
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorScheduleRuntime$$Type = ($AccessorScheduleRuntime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorScheduleRuntime$$Original = $AccessorScheduleRuntime;}
declare module "com.railwayteam.railways.mixin.AccessorCarriageBogey" {
import {$AbstractBogeyBlock, $AbstractBogeyBlock$$Type} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"

export interface $AccessorCarriageBogey$$Interface {

(): $AbstractBogeyBlock$$Type<(never)>
get "type"(): $AbstractBogeyBlock<(never)>
}

export class $AccessorCarriageBogey implements $AccessorCarriageBogey$$Interface {
 "getType"(): $AbstractBogeyBlock<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCarriageBogey$$Type = (() => $AbstractBogeyBlock$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorCarriageBogey$$Original = $AccessorCarriageBogey;}
declare module "com.railwayteam.railways.mixin.conductor_possession.ServerPlayerAccessor" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $ServerPlayerAccessor$$Interface {
get "camera"(): $Entity
set "camera"(value: $Entity$$Type)
}

export class $ServerPlayerAccessor implements $ServerPlayerAccessor$$Interface {
 "getCamera"(): $Entity
 "setCamera"(arg0: $Entity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerAccessor$$Type = ($ServerPlayerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerAccessor$$Original = $ServerPlayerAccessor;}
declare module "com.railwayteam.railways.mixin.conductor_possession.AccessorKeyMapping" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $AccessorKeyMapping$$Interface {

(): $InputConstants$Key$$Type
get "key"(): $InputConstants$Key
}

export class $AccessorKeyMapping implements $AccessorKeyMapping$$Interface {
 "getKey"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorKeyMapping$$Type = (() => $InputConstants$Key$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorKeyMapping$$Original = $AccessorKeyMapping;}
declare module "com.railwayteam.railways.mixin.AccessorNavigation" {
import {$TrackNode, $TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$List, $List$$Type} from "java.util.List"
import {$Couple, $Couple$$Type} from "net.createmod.catnip.data.Couple"

export interface $AccessorNavigation$$Interface {

(): $List$$Type<($Couple$$Type<($TrackNode$$Type)>)>
get "currentPath"(): $List<($Couple<($TrackNode)>)>
}

export class $AccessorNavigation implements $AccessorNavigation$$Interface {
 "getCurrentPath"(): $List<($Couple<($TrackNode)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorNavigation$$Type = (() => $List$$Type<($Couple$$Type<($TrackNode$$Type)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorNavigation$$Original = $AccessorNavigation;}
declare module "com.railwayteam.railways.mixin.AccessorTrackTargetingBehavior" {
import {$Direction$AxisDirection, $Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BezierTrackPointLocation, $BezierTrackPointLocation$$Type} from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import {$TrackEdgePoint$$Type} from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $AccessorTrackTargetingBehavior$$Interface {
get "targetDirection"(): $Direction$AxisDirection
get "orthogonal"(): boolean
set "targetTrack"(value: $BlockPos$$Type)
set "targetDirection"(value: $Direction$AxisDirection$$Type)
get "targetTrack"(): $BlockPos
set "edgePoint"(value: $TrackEdgePoint$$Type)
set "orthogonal"(value: boolean)
get "rotatedDirection"(): $Vec3
set "rotatedDirection"(value: $Vec3$$Type)
get "prevDirection"(): $Vec3
set "prevDirection"(value: $Vec3$$Type)
get "migrationData"(): $CompoundTag
set "migrationData"(value: $CompoundTag$$Type)
get "targetBezier"(): $BezierTrackPointLocation
set "targetBezier"(value: $BezierTrackPointLocation$$Type)
get "id"(): $UUID
set "id"(value: $UUID$$Type)
}

export class $AccessorTrackTargetingBehavior implements $AccessorTrackTargetingBehavior$$Interface {
 "getTargetDirection"(): $Direction$AxisDirection
 "isOrthogonal"(): boolean
 "setTargetTrack"(arg0: $BlockPos$$Type): void
 "setTargetDirection"(arg0: $Direction$AxisDirection$$Type): void
 "getTargetTrack"(): $BlockPos
 "setEdgePoint"(arg0: $TrackEdgePoint$$Type): void
 "setOrthogonal"(arg0: boolean): void
 "getRotatedDirection"(): $Vec3
 "setRotatedDirection"(arg0: $Vec3$$Type): void
 "getPrevDirection"(): $Vec3
 "setPrevDirection"(arg0: $Vec3$$Type): void
 "getMigrationData"(): $CompoundTag
 "setMigrationData"(arg0: $CompoundTag$$Type): void
 "getTargetBezier"(): $BezierTrackPointLocation
 "setTargetBezier"(arg0: $BezierTrackPointLocation$$Type): void
 "getId"(): $UUID
 "setId"(arg0: $UUID$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorTrackTargetingBehavior$$Type = ($AccessorTrackTargetingBehavior);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorTrackTargetingBehavior$$Original = $AccessorTrackTargetingBehavior;}
declare module "com.railwayteam.railways.mixin.AccessorBlockEntityType" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $AccessorBlockEntityType$$Interface {
get "validBlocks"(): $Set<($Block)>
set "validBlocks"(value: $Set$$Type<($Block$$Type)>)
}

export class $AccessorBlockEntityType implements $AccessorBlockEntityType$$Interface {
 "getValidBlocks"(): $Set<($Block)>
 "setValidBlocks"(arg0: $Set$$Type<($Block$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBlockEntityType$$Type = ($AccessorBlockEntityType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorBlockEntityType$$Original = $AccessorBlockEntityType;}
declare module "com.railwayteam.railways.mixin.AccessorCarriage" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"

export interface $AccessorCarriage$$Interface {

(): $Map$$Type<(integer), ($CompoundTag$$Type)>
get "serialisedPassengers"(): $Map<(integer), ($CompoundTag)>
}

export class $AccessorCarriage implements $AccessorCarriage$$Interface {
 "getSerialisedPassengers"(): $Map<(integer), ($CompoundTag)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCarriage$$Type = (() => $Map$$Type<(integer), ($CompoundTag$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorCarriage$$Original = $AccessorCarriage;}
declare module "com.railwayteam.railways.mixin.AccessorPortableStorageInterfaceBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorPortableStorageInterfaceBlockEntity$$Interface {

(): boolean
}

export class $AccessorPortableStorageInterfaceBlockEntity implements $AccessorPortableStorageInterfaceBlockEntity$$Interface {
 "railways$isConnected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorPortableStorageInterfaceBlockEntity$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorPortableStorageInterfaceBlockEntity$$Original = $AccessorPortableStorageInterfaceBlockEntity;}
declare module "com.railwayteam.railways.mixin.AccessorToolboxBlockEntity" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$WeakHashMap} from "java.util.WeakHashMap"
import {$ToolboxInventory} from "com.simibubi.create.content.equipment.toolbox.ToolboxInventory"

export interface $AccessorToolboxBlockEntity$$Interface {
get "connectedPlayers"(): $Map<(integer), ($WeakHashMap<($Player), (integer)>)>
get "inventory"(): $ToolboxInventory
}

export class $AccessorToolboxBlockEntity implements $AccessorToolboxBlockEntity$$Interface {
 "getConnectedPlayers"(): $Map<(integer), ($WeakHashMap<($Player), (integer)>)>
 "getInventory"(): $ToolboxInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorToolboxBlockEntity$$Type = ($AccessorToolboxBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorToolboxBlockEntity$$Original = $AccessorToolboxBlockEntity;}
declare module "com.railwayteam.railways.mixin.client.AccessorLivingEntityRenderer" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $AccessorLivingEntityRenderer$$Interface<T extends $LivingEntity> {

(arg0: T, arg1: $PoseStack, arg2: float, arg3: float, arg4: float, arg5: float): void
}

export class $AccessorLivingEntityRenderer<T extends $LivingEntity> implements $AccessorLivingEntityRenderer$$Interface {
 "callSetupRotations"(arg0: T, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLivingEntityRenderer$$Type<T> = ((arg0: T, arg1: $PoseStack, arg2: float, arg3: float, arg4: float, arg5: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorLivingEntityRenderer$$Original<T> = $AccessorLivingEntityRenderer<(T)>;}
declare module "com.railwayteam.railways.mixin.AccessorToolboxInventory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"

export interface $AccessorToolboxInventory$$Interface {

(): $List$$Type<($ItemStack$$Type)>
get "filters"(): $List<($ItemStack)>
}

export class $AccessorToolboxInventory implements $AccessorToolboxInventory$$Interface {
 "getFilters"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorToolboxInventory$$Type = (() => $List$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorToolboxInventory$$Original = $AccessorToolboxInventory;}
declare module "com.railwayteam.railways.mixin.AccessorContraption" {
import {$AbstractContraptionEntity, $AbstractContraptionEntity$$Type} from "com.simibubi.create.content.contraptions.AbstractContraptionEntity"

export interface $AccessorContraption$$Interface {

(): $AbstractContraptionEntity$$Type
}

export class $AccessorContraption implements $AccessorContraption$$Interface {
 "railways$getEntity"(): $AbstractContraptionEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorContraption$$Type = (() => $AbstractContraptionEntity$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorContraption$$Original = $AccessorContraption;}
declare module "com.railwayteam.railways.mixin.client.AccessorWalkAnimationState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorWalkAnimationState$$Interface {
get "speedOld"(): float
set "speedOld"(value: float)
set "position"(value: float)
}

export class $AccessorWalkAnimationState implements $AccessorWalkAnimationState$$Interface {
 "getSpeedOld"(): float
 "setSpeedOld"(arg0: float): void
 "setPosition"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorWalkAnimationState$$Type = ($AccessorWalkAnimationState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorWalkAnimationState$$Original = $AccessorWalkAnimationState;}
declare module "com.railwayteam.railways.mixin.client.AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity$$Interface {
get "XRot"(): float
get "YRot"(): float
set "YRot"(value: float)
set "XRot"(value: float)
}

export class $AccessorEntity implements $AccessorEntity$$Interface {
 "getXRot"(): float
 "getYRot"(): float
 "setYRot"(arg0: float): void
 "setXRot"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$$Type = ($AccessorEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorEntity$$Original = $AccessorEntity;}
declare module "com.railwayteam.railways.mixin.client.AccessorLevelRenderer" {
import {$RenderBuffers} from "net.minecraft.client.renderer.RenderBuffers"
import {$Particle} from "net.minecraft.client.particle.Particle"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export interface $AccessorLevelRenderer$$Interface {
}

export class $AccessorLevelRenderer implements $AccessorLevelRenderer$$Interface {
 "callAddParticleInternal"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): $Particle
 "railways$getRenderBuffers"(): $RenderBuffers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLevelRenderer$$Type = ($AccessorLevelRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorLevelRenderer$$Original = $AccessorLevelRenderer;}
declare module "com.railwayteam.railways.mixin.AccessorCarriageContraptionEntity" {
import {$Carriage, $Carriage$$Type} from "com.simibubi.create.content.trains.entity.Carriage"

export interface $AccessorCarriageContraptionEntity$$Interface {
}

export class $AccessorCarriageContraptionEntity implements $AccessorCarriageContraptionEntity$$Interface {
 "railways$getCarriage"(): $Carriage
 "railways$setCarriage"(arg0: $Carriage$$Type): void
 "railways$bindCarriage"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCarriageContraptionEntity$$Type = ($AccessorCarriageContraptionEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorCarriageContraptionEntity$$Original = $AccessorCarriageContraptionEntity;}
declare module "com.railwayteam.railways.mixin.AccessorAbstractContraptionEntity" {
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"

export interface $AccessorAbstractContraptionEntity$$Interface {
}

export class $AccessorAbstractContraptionEntity implements $AccessorAbstractContraptionEntity$$Interface {
 "railways$setSkipActorStop"(arg0: boolean): void
 "railways$moveCollidedEntitiesOnDisassembly"(arg0: $StructureTransform$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorAbstractContraptionEntity$$Type = ($AccessorAbstractContraptionEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorAbstractContraptionEntity$$Original = $AccessorAbstractContraptionEntity;}
declare module "com.railwayteam.railways.mixin.AccessorTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorTrain$$Interface {
}

export class $AccessorTrain implements $AccessorTrain$$Interface {
 "railways$setStress"(arg0: (double)[]): void
 "railways$getStress"(): (double)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorTrain$$Type = ($AccessorTrain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorTrain$$Original = $AccessorTrain;}
declare module "com.railwayteam.railways.mixin.client.AccessorLocalPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorLocalPlayer$$Interface {
}

export class $AccessorLocalPlayer implements $AccessorLocalPlayer$$Interface {
 "railways$getXRotLast"(): float
 "railways$getYRotLast"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLocalPlayer$$Type = ($AccessorLocalPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorLocalPlayer$$Original = $AccessorLocalPlayer;}
declare module "com.railwayteam.railways.mixin.AccessorOrientedContraptionEntity" {
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"

export interface $AccessorOrientedContraptionEntity$$Interface {

(): $StructureTransform$$Type
}

export class $AccessorOrientedContraptionEntity implements $AccessorOrientedContraptionEntity$$Interface {
 "railways$makeStructureTransform"(): $StructureTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorOrientedContraptionEntity$$Type = (() => $StructureTransform$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorOrientedContraptionEntity$$Original = $AccessorOrientedContraptionEntity;}
declare module "com.railwayteam.railways.mixin.client.AccessorBogeyStyle" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$BogeyStyle$SizeRenderer, $BogeyStyle$SizeRenderer$$Type} from "com.simibubi.create.content.trains.bogey.BogeyStyle$SizeRenderer"
import {$BogeySizes$BogeySize, $BogeySizes$BogeySize$$Type} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"

export interface $AccessorBogeyStyle$$Interface {

(): $Map$$Type<($BogeySizes$BogeySize$$Type), ($BogeyStyle$SizeRenderer$$Type)>
get "sizeRenderers"(): $Map<($BogeySizes$BogeySize), ($BogeyStyle$SizeRenderer)>
}

export class $AccessorBogeyStyle implements $AccessorBogeyStyle$$Interface {
 "getSizeRenderers"(): $Map<($BogeySizes$BogeySize), ($BogeyStyle$SizeRenderer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBogeyStyle$$Type = (() => $Map$$Type<($BogeySizes$BogeySize$$Type), ($BogeyStyle$SizeRenderer$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorBogeyStyle$$Original = $AccessorBogeyStyle;}
