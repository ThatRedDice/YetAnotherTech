declare module "com.railwayteam.railways.mixin_interfaces.IUpdateCount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUpdateCount$$Interface {
}

export class $IUpdateCount implements $IUpdateCount$$Interface {
 "railways$getUpdateCount"(): integer
 "railways$fromParent"(arg0: $IUpdateCount$$Type): void
 "railways$markUpdate"(): void
static "outOfSync"(arg0: $IUpdateCount$$Type, arg1: $IUpdateCount$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpdateCount$$Type = ($IUpdateCount);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpdateCount$$Original = $IUpdateCount;}
declare module "com.railwayteam.railways.mixin_interfaces.IIndexedSchedule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIndexedSchedule$$Interface {
}

export class $IIndexedSchedule implements $IIndexedSchedule$$Interface {
 "railways$getIndex"(): integer
 "railways$setIndex"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIndexedSchedule$$Type = ($IIndexedSchedule);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IIndexedSchedule$$Original = $IIndexedSchedule;}
declare module "com.railwayteam.railways.mixin_interfaces.IWaypointableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWaypointableNavigation$$Interface {

(): boolean
}

export class $IWaypointableNavigation implements $IWaypointableNavigation$$Interface {
 "railways$isWaypointMode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWaypointableNavigation$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWaypointableNavigation$$Original = $IWaypointableNavigation;}
declare module "com.railwayteam.railways.mixin_interfaces.IHasCustomOutline" {
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IHasCustomOutline$$Interface {
}

export class $IHasCustomOutline implements $IHasCustomOutline$$Interface {
 "drawLineWithAxisOffset"(arg0: $VertexConsumer$$Type, arg1: $PoseStack$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: $Direction$Axis$$Type): void
 "drawLine"(arg0: $VertexConsumer$$Type, arg1: $PoseStack$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
 "matrixRotation"(arg0: $PoseStack$$Type, arg1: $BlockState$$Type): void
 "customOutline"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasCustomOutline$$Type = ($IHasCustomOutline);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHasCustomOutline$$Original = $IHasCustomOutline;}
declare module "com.railwayteam.railways.mixin_interfaces.IDeployAnywayBlockItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDeployAnywayBlockItem$$Interface {
}

export class $IDeployAnywayBlockItem implements $IDeployAnywayBlockItem$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDeployAnywayBlockItem$$Type = ($IDeployAnywayBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDeployAnywayBlockItem$$Original = $IDeployAnywayBlockItem;}
declare module "com.railwayteam.railways.mixin_interfaces.IGenericCrossingTrackBE" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$List} from "java.util.List"
import {$TrackShape, $TrackShape$$Type} from "com.simibubi.create.content.trains.track.TrackShape"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Pair, $Pair$$Type} from "net.createmod.catnip.data.Pair"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $IGenericCrossingTrackBE$$Interface {
}

export class $IGenericCrossingTrackBE implements $IGenericCrossingTrackBE$$Interface {
static "getQuads"(arg0: $TrackMaterial$$Type, arg1: $TrackShape$$Type, arg2: $Direction$$Type, arg3: $RandomSource$$Type): $List<($BakedQuad)>
static "getQuads"(arg0: $Pair$$Type<($TrackMaterial$$Type), ($TrackShape$$Type)>, arg1: $Direction$$Type, arg2: $RandomSource$$Type): $List<($BakedQuad)>
 "railways$getFirstCrossingPiece"(): $Pair<($TrackMaterial), ($TrackShape)>
 "railways$getSecondCrossingPiece"(): $Pair<($TrackMaterial), ($TrackShape)>
static "getModel"(arg0: $Pair$$Type<($TrackMaterial$$Type), ($TrackShape$$Type)>): $BakedModel
static "getModel"(arg0: $TrackMaterial$$Type, arg1: $TrackShape$$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGenericCrossingTrackBE$$Type = ($IGenericCrossingTrackBE);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGenericCrossingTrackBE$$Original = $IGenericCrossingTrackBE;}
declare module "com.railwayteam.railways.mixin_interfaces.IOccupiedCouplers" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $IOccupiedCouplers$$Interface {

(): $Set$$Type<($UUID$$Type)>
}

export class $IOccupiedCouplers implements $IOccupiedCouplers$$Interface {
 "railways$getOccupiedCouplers"(): $Set<($UUID)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOccupiedCouplers$$Type = (() => $Set$$Type<($UUID$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOccupiedCouplers$$Original = $IOccupiedCouplers;}
declare module "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation" {
import {$Optional} from "java.util.Optional"
import {$TrackSwitchBlock$SwitchState} from "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchState"
import {$IGenerallySearchableNavigation$PointTest$$Type} from "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation$PointTest"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$TrackSwitch} from "com.railwayteam.railways.content.switches.TrackSwitch"

export interface $IGenerallySearchableNavigation$$Interface {
}

export class $IGenerallySearchableNavigation implements $IGenerallySearchableNavigation$$Interface {
 "railways$findNearestApproachableSwitch"(arg0: boolean): $Pair<($TrackSwitch), ($Pair<(boolean), ($Optional<($TrackSwitchBlock$SwitchState)>)>)>
 "railways$searchGeneral"(arg0: double, arg1: double, arg2: boolean, arg3: $IGenerallySearchableNavigation$PointTest$$Type): void
 "railways$searchGeneral"(arg0: double, arg1: boolean, arg2: $IGenerallySearchableNavigation$PointTest$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGenerallySearchableNavigation$$Type = ($IGenerallySearchableNavigation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGenerallySearchableNavigation$$Original = $IGenerallySearchableNavigation;}
declare module "com.railwayteam.railways.mixin_interfaces.IGenerallySearchableNavigation$PointTest" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$TrackEdgePoint, $TrackEdgePoint$$Type} from "com.simibubi.create.content.trains.signal.TrackEdgePoint"
import {$TrackNode, $TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$Pair, $Pair$$Type} from "net.createmod.catnip.data.Pair"
import {$Couple, $Couple$$Type} from "net.createmod.catnip.data.Couple"
import {$TrackEdge, $TrackEdge$$Type} from "com.simibubi.create.content.trains.graph.TrackEdge"

export interface $IGenerallySearchableNavigation$PointTest$$Interface {

(arg0: double, arg1: double, arg2: $Map<($TrackEdge), ($Pair<(boolean), ($Couple<($TrackNode)>)>)>, arg3: $Pair<($Couple<($TrackNode)>), ($TrackEdge)>, arg4: $TrackEdgePoint): boolean
}

export class $IGenerallySearchableNavigation$PointTest implements $IGenerallySearchableNavigation$PointTest$$Interface {
 "test"(arg0: double, arg1: double, arg2: $Map$$Type<($TrackEdge$$Type), ($Pair$$Type<(boolean), ($Couple$$Type<($TrackNode$$Type)>)>)>, arg3: $Pair$$Type<($Couple$$Type<($TrackNode$$Type)>), ($TrackEdge$$Type)>, arg4: $TrackEdgePoint$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGenerallySearchableNavigation$PointTest$$Type = ((arg0: double, arg1: double, arg2: $Map<($TrackEdge), ($Pair<(boolean), ($Couple<($TrackNode)>)>)>, arg3: $Pair<($Couple<($TrackNode)>), ($TrackEdge)>, arg4: $TrackEdgePoint) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGenerallySearchableNavigation$PointTest$$Original = $IGenerallySearchableNavigation$PointTest;}
declare module "com.railwayteam.railways.mixin_interfaces.IPotentiallyInvisibleSpriteContents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPotentiallyInvisibleSpriteContents$$Interface {
}

export class $IPotentiallyInvisibleSpriteContents implements $IPotentiallyInvisibleSpriteContents$$Interface {
 "railways$uploadFrame"(arg0: boolean): void
 "railways$isVisible"(): boolean
 "railways$shouldDoInvisibility"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPotentiallyInvisibleSpriteContents$$Type = ($IPotentiallyInvisibleSpriteContents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPotentiallyInvisibleSpriteContents$$Original = $IPotentiallyInvisibleSpriteContents;}
declare module "com.railwayteam.railways.mixin_interfaces.ICarriageBufferDistanceTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICarriageBufferDistanceTracker$$Interface {
}

export class $ICarriageBufferDistanceTracker implements $ICarriageBufferDistanceTracker$$Interface {
 "railways$getLeadingDistance"(): integer
 "railways$getTrailingDistance"(): integer
 "railways$setLeadingDistance"(arg0: integer): void
 "railways$setTrailingDistance"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICarriageBufferDistanceTracker$$Type = ($ICarriageBufferDistanceTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICarriageBufferDistanceTracker$$Original = $ICarriageBufferDistanceTracker;}
declare module "com.railwayteam.railways.mixin_interfaces.ICrashAdvancement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICrashAdvancement$$Interface {

(): void
}

export class $ICrashAdvancement implements $ICrashAdvancement$$Interface {
 "railways$awardCrashAdvancements"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICrashAdvancement$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICrashAdvancement$$Original = $ICrashAdvancement;}
declare module "com.railwayteam.railways.mixin_interfaces.IFuelInventory" {
import {$MountedFluidStorageWrapper, $MountedFluidStorageWrapper$$Type} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageWrapper"

export interface $IFuelInventory$$Interface {

(): $MountedFluidStorageWrapper$$Type
}

export class $IFuelInventory implements $IFuelInventory$$Interface {
 "railways$getFluidFuels"(): $MountedFluidStorageWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFuelInventory$$Type = (() => $MountedFluidStorageWrapper$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFuelInventory$$Original = $IFuelInventory;}
declare module "com.railwayteam.railways.mixin_interfaces.ILimited" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILimited$$Interface {
get "limitEnabled"(): boolean
set "limitEnabled"(value: boolean)
}

export class $ILimited implements $ILimited$$Interface {
 "isLimitEnabled"(): boolean
 "setLimitEnabled"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILimited$$Type = ($ILimited);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILimited$$Original = $ILimited;}
declare module "com.railwayteam.railways.mixin_interfaces.IMonorailBezier$MonorailAngles" {
import {$PoseStack$Pose} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $IMonorailBezier$MonorailAngles {
 "beam": $PoseStack$Pose
 "lightPosition": $BlockPos
 "beamCaps": $Couple<($PoseStack$Pose)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMonorailBezier$MonorailAngles$$Type = ($IMonorailBezier$MonorailAngles);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMonorailBezier$MonorailAngles$$Original = $IMonorailBezier$MonorailAngles;}
declare module "com.railwayteam.railways.mixin_interfaces.AnimatedTextureDuck" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnimatedTextureDuck$$Interface {

(): void
}

export class $AnimatedTextureDuck implements $AnimatedTextureDuck$$Interface {
 "railways$uploadWithVisibility"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedTextureDuck$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimatedTextureDuck$$Original = $AnimatedTextureDuck;}
declare module "com.railwayteam.railways.mixin_interfaces.IHandcarTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHandcarTrain$$Interface {
}

export class $IHandcarTrain implements $IHandcarTrain$$Interface {
 "railways$isHandcar"(): boolean
 "railways$setHandcar"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHandcarTrain$$Type = ($IHandcarTrain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHandcarTrain$$Original = $IHandcarTrain;}
declare module "com.railwayteam.railways.mixin_interfaces.IBufferBlockedTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBufferBlockedTrain$$Interface {
}

export class $IBufferBlockedTrain implements $IBufferBlockedTrain$$Interface {
 "railways$setControlBlocked"(arg0: boolean, arg1: boolean): void
 "railways$isControlBlocked"(): boolean
 "railways$getBlockedSign"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBufferBlockedTrain$$Type = ($IBufferBlockedTrain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBufferBlockedTrain$$Original = $IBufferBlockedTrain;}
declare module "com.railwayteam.railways.mixin_interfaces.IHasTrackCasing" {
import {$SlabBlock, $SlabBlock$$Type} from "net.minecraft.world.level.block.SlabBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IHasTrackCasing$$Interface {
get "trackCasing"(): $SlabBlock
get "alternate"(): boolean
set "alternate"(value: boolean)
set "trackCasing"(value: $SlabBlock$$Type)
}

export class $IHasTrackCasing implements $IHasTrackCasing$$Interface {
static "setAlternateModel"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): boolean
 "getTrackCasing"(): $SlabBlock
static "getTrackCasing"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $SlabBlock
static "isAlternate"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "isAlternate"(): boolean
 "setAlternate"(arg0: boolean): void
 "setTrackCasing"(arg0: $SlabBlock$$Type): void
static "setTrackCasing"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $SlabBlock$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasTrackCasing$$Type = ($IHasTrackCasing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHasTrackCasing$$Original = $IHasTrackCasing;}
declare module "com.railwayteam.railways.mixin_interfaces.ICarriageConductors" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"

export interface $ICarriageConductors$$Interface {

(): $List$$Type<($UUID$$Type)>
}

export class $ICarriageConductors implements $ICarriageConductors$$Interface {
 "railways$getControllingConductors"(): $List<($UUID)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICarriageConductors$$Type = (() => $List$$Type<($UUID$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICarriageConductors$$Original = $ICarriageConductors;}
declare module "com.railwayteam.railways.mixin_interfaces.IPreAssembleCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPreAssembleCallback$$Interface {

(): void
}

export class $IPreAssembleCallback implements $IPreAssembleCallback$$Interface {
 "railways$preAssemble"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPreAssembleCallback$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPreAssembleCallback$$Original = $IPreAssembleCallback;}
declare module "com.railwayteam.railways.mixin_interfaces.ICarriageFlywheel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICarriageFlywheel$$Interface {
}

export class $ICarriageFlywheel implements $ICarriageFlywheel$$Interface {
 "railways$getAngle"(): float
 "railways$setAngle"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICarriageFlywheel$$Type = ($ICarriageFlywheel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICarriageFlywheel$$Original = $ICarriageFlywheel;}
declare module "com.railwayteam.railways.mixin_interfaces.IStandardBogeyTEVirtualCoupling" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $IStandardBogeyTEVirtualCoupling$$Interface {
set "front"(value: boolean)
set "couplingDistance"(value: double)
get "couplingDistance"(): double
set "couplingDirection"(value: $Direction$$Type)
get "couplingDirection"(): $Direction
get "front"(): boolean
}

export class $IStandardBogeyTEVirtualCoupling implements $IStandardBogeyTEVirtualCoupling$$Interface {
 "setFront"(arg0: boolean): void
 "setCouplingDistance"(arg0: double): void
 "getCouplingDistance"(): double
 "setCouplingDirection"(arg0: $Direction$$Type): void
 "getCouplingDirection"(): $Direction
 "getFront"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStandardBogeyTEVirtualCoupling$$Type = ($IStandardBogeyTEVirtualCoupling);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStandardBogeyTEVirtualCoupling$$Original = $IStandardBogeyTEVirtualCoupling;}
declare module "com.railwayteam.railways.mixin_interfaces.IDistanceTravelled" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDistanceTravelled$$Interface {

(): double
}

export class $IDistanceTravelled implements $IDistanceTravelled$$Interface {
 "railways$getDistanceTravelled"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDistanceTravelled$$Type = (() => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDistanceTravelled$$Original = $IDistanceTravelled;}
declare module "com.railwayteam.railways.mixin_interfaces.IStrictSignalTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IStrictSignalTrain$$Interface {

(arg0: boolean): void
}

export class $IStrictSignalTrain implements $IStrictSignalTrain$$Interface {
 "railways$setStrictSignals"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStrictSignalTrain$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStrictSignalTrain$$Original = $IStrictSignalTrain;}
declare module "com.railwayteam.railways.mixin_interfaces.ISwitchDisabledEdge" {
import {$TrackEdge$$Type} from "com.simibubi.create.content.trains.graph.TrackEdge"

export interface $ISwitchDisabledEdge$$Interface {
set "automatic"(value: boolean)
get "automaticallySelectedPriority"(): integer
get "automaticallySelected"(): boolean
get "automaticallySelected"(): void
get "enabled"(): boolean
get "automatic"(): boolean
set "enabled"(value: boolean)
}

export class $ISwitchDisabledEdge implements $ISwitchDisabledEdge$$Interface {
 "setAutomatic"(arg0: boolean): void
static "isDisabled"(arg0: $TrackEdge$$Type): boolean
static "automaticallySelect"(arg0: $TrackEdge$$Type): void
 "getAutomaticallySelectedPriority"(): integer
 "isAutomaticallySelected"(): boolean
 "ackAutomaticSelection"(): void
 "setAutomaticallySelected"(): void
 "isEnabled"(): boolean
static "isEnabled"(arg0: $TrackEdge$$Type): boolean
 "isAutomatic"(): boolean
static "isAutomatic"(arg0: $TrackEdge$$Type): boolean
 "setEnabled"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISwitchDisabledEdge$$Type = ($ISwitchDisabledEdge);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISwitchDisabledEdge$$Original = $ISwitchDisabledEdge;}
declare module "com.railwayteam.railways.mixin_interfaces.ILimitedGlobalStation" {
import {$Train, $Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$ILimited$$Interface} from "com.railwayteam.railways.mixin_interfaces.ILimited"

export interface $ILimitedGlobalStation$$Interface extends $ILimited$$Interface {
get "stationEnabled"(): boolean
get "disablingTrain"(): $Train
get "limitEnabled"(): boolean
set "limitEnabled"(value: boolean)
}

export class $ILimitedGlobalStation implements $ILimitedGlobalStation$$Interface {
 "isStationEnabled"(): boolean
 "getDisablingTrain"(): $Train
 "orDisablingTrain"(arg0: $Train$$Type, arg1: $Train$$Type): $Train
 "isLimitEnabled"(): boolean
 "setLimitEnabled"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILimitedGlobalStation$$Type = ($ILimitedGlobalStation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILimitedGlobalStation$$Original = $ILimitedGlobalStation;}
declare module "com.railwayteam.railways.mixin_interfaces.IBufferBlockCheckableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBufferBlockCheckableNavigation$$Interface {

(arg0: boolean): void
}

export class $IBufferBlockCheckableNavigation implements $IBufferBlockCheckableNavigation$$Interface {
 "railways$updateControlsBlock"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBufferBlockCheckableNavigation$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBufferBlockCheckableNavigation$$Original = $IBufferBlockCheckableNavigation;}
declare module "com.railwayteam.railways.mixin_interfaces.IContraptionFuel" {
import {$MountedFluidStorageWrapper, $MountedFluidStorageWrapper$$Type} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageWrapper"

export interface $IContraptionFuel$$Interface {

(): $MountedFluidStorageWrapper$$Type
}

export class $IContraptionFuel implements $IContraptionFuel$$Interface {
 "railways$getFluidFuels"(): $MountedFluidStorageWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContraptionFuel$$Type = (() => $MountedFluidStorageWrapper$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IContraptionFuel$$Original = $IContraptionFuel;}
declare module "com.railwayteam.railways.mixin_interfaces.IMonorailBezier" {
import {$IMonorailBezier$MonorailAngles, $IMonorailBezier$MonorailAngles$$Type} from "com.railwayteam.railways.mixin_interfaces.IMonorailBezier$MonorailAngles"

export interface $IMonorailBezier$$Interface {

(): ($IMonorailBezier$MonorailAngles$$Type)[]
get "bakedMonorails"(): ($IMonorailBezier$MonorailAngles)[]
}

export class $IMonorailBezier implements $IMonorailBezier$$Interface {
 "getBakedMonorails"(): ($IMonorailBezier$MonorailAngles)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMonorailBezier$$Type = (() => ($IMonorailBezier$MonorailAngles$$Type)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMonorailBezier$$Original = $IMonorailBezier;}
