declare module "com.railwayteam.railways.content.buffer.NarrowTrackBufferBlock$Style" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $NarrowTrackBufferBlock$Style extends $Enum<($NarrowTrackBufferBlock$Style)> implements $StringRepresentable$$Interface {
static readonly "MONO": $NarrowTrackBufferBlock$Style
static readonly "STANDARD": $NarrowTrackBufferBlock$Style

public static "values"(): ($NarrowTrackBufferBlock$Style)[]
public static "valueOf"(arg0: StringJS): $NarrowTrackBufferBlock$Style
public "getModel"(): $ResourceLocation
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "model"(): $ResourceLocation
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrowTrackBufferBlock$Style$$Type = (("standard") | ("mono"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrowTrackBufferBlock$Style$$Original = $NarrowTrackBufferBlock$Style;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.narrow.NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle" {
import {$Enum} from "java.lang.Enum"
import {$BogeyStyle} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$Supplier} from "java.util.function.Supplier"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"

export class $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle extends $Enum<($NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle)> {
static readonly "SMALL": $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle
readonly "size": $Supplier<($BogeySizes$BogeySize)>
static readonly "DOUBLE_SCOTCH_YOKE": $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle
static readonly "SCOTCH_YOKE": $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle
readonly "style": $Supplier<($BogeyStyle)>

public static "values"(): ($NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle)[]
public static "valueOf"(arg0: StringJS): $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle$$Type = (("small") | ("scotch_yoke") | ("double_scotch_yoke"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle$$Original = $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle;}
declare module "com.railwayteam.railways.content.custom_tracks.TransparentSegmentTrackBlock" {
import {$BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$ITrackBlock$$Interface} from "com.simibubi.create.content.trains.track.ITrackBlock"
import {$Direction$AxisDirection, $Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BezierTrackPointLocation$$Type} from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import {$PartialModel} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$Affine, $Affine$$Type} from "dev.engine_room.flywheel.lib.transform.Affine"
import {$List} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$TrackTargetingBehaviour$RenderedTrackOverlayType$$Type} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour$RenderedTrackOverlayType"
import {$TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Function$$Type} from "java.util.function.Function"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $TransparentSegmentTrackBlock$$Interface extends $ITrackBlock$$Interface {
get "material"(): $TrackMaterial
}

export class $TransparentSegmentTrackBlock implements $TransparentSegmentTrackBlock$$Interface {
 "getNearestTrackAxis"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): $Pair<($Vec3), ($Direction$AxisDirection)>
 "getUpNormal"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $Vec3
 "getCurveStart"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): $Vec3
 "getBogeyAnchor"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockState
 "getYOffsetAt"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): integer
 "getConnected"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean, arg4: $TrackNodeLocation$$Type): $Collection<($TrackNodeLocation$DiscoveredLocation)>
 "getTrackAxes"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($Vec3)>
 "getElevationAtCenter"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): double
static "addToListIfConnected"(arg0: $TrackNodeLocation$$Type, arg1: $Collection$$Type<($TrackNodeLocation$DiscoveredLocation$$Type)>, arg2: $BiFunction$$Type<(double), (boolean), ($Vec3$$Type)>, arg3: $Function$$Type<(boolean), ($Vec3$$Type)>, arg4: $Function$$Type<(boolean), ($ResourceKey$$Type<($Level$$Type)>)>, arg5: $Function$$Type<($Vec3), (integer)>, arg6: $Vec3$$Type, arg7: $BezierConnection$$Type, arg8: $BiFunction$$Type<(boolean), ($Vec3), ($TrackMaterial$$Type)>): void
 "prepareAssemblyOverlay"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type, arg4: $PoseStack$$Type): $PartialModel
 "prepareTrackOverlay"<Self extends $Affine<(object)>>(arg0: $Affine$$Type<(Self)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BezierTrackPointLocation$$Type, arg5: $Direction$AxisDirection$$Type, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type): $PartialModel
 "trackEquals"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type): $TrackMaterial
static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type, arg2: $TrackMaterial$$Type): $TrackMaterial
 "isSlope"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
static "walkConnectedTracks"(arg0: $BlockGetter$$Type, arg1: $TrackNodeLocation$$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
 "overlay"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): $BlockState
 "getMaterial"(): $TrackMaterial
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransparentSegmentTrackBlock$$Type = ($TransparentSegmentTrackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransparentSegmentTrackBlock$$Original = $TransparentSegmentTrackBlock;}
declare module "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchConstraint" {
import {$Enum} from "java.lang.Enum"

export class $TrackSwitchBlock$SwitchConstraint extends $Enum<($TrackSwitchBlock$SwitchConstraint)> {
static readonly "TO_LEFT": $TrackSwitchBlock$SwitchConstraint
static readonly "TO_RIGHT": $TrackSwitchBlock$SwitchConstraint
static readonly "NONE": $TrackSwitchBlock$SwitchConstraint

public "canGoRight"(): boolean
public "canGoLeft"(): boolean
public static "values"(): ($TrackSwitchBlock$SwitchConstraint)[]
public static "valueOf"(arg0: StringJS): $TrackSwitchBlock$SwitchConstraint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlock$SwitchConstraint$$Type = (("none") | ("to_right") | ("to_left"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackSwitchBlock$SwitchConstraint$$Original = $TrackSwitchBlock$SwitchConstraint;}
declare module "com.railwayteam.railways.content.buffer.WideTrackBufferBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TrackBufferBlock} from "com.railwayteam.railways.content.buffer.TrackBufferBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$TrackBufferBlockEntity} from "com.railwayteam.railways.content.buffer.TrackBufferBlockEntity"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WideTrackBufferBlock extends $TrackBufferBlock<($TrackBufferBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WideTrackBufferBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "DIAGONAL": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $BlockEntityType<($TrackBufferBlockEntity)>
public "getBlockEntityClass"(): $Class<($TrackBufferBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($TrackBufferBlockEntity)>
get "blockEntityClass"(): $Class<($TrackBufferBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideTrackBufferBlock$$Type = ($WideTrackBufferBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WideTrackBufferBlock$$Original = $WideTrackBufferBlock;}
declare module "com.railwayteam.railways.content.switches.TrackSwitchBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$TrackSwitchBlockEntity, $TrackSwitchBlockEntity$$Type} from "com.railwayteam.railways.content.switches.TrackSwitchBlockEntity"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TrackSwitchBlock extends $HorizontalDirectionalBlock implements $IBE$$Interface<($TrackSwitchBlockEntity)>, $IWrenchable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "LOCKED": $BooleanProperty
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "onProjectileHit"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockHitResult$$Type, arg3: $Projectile$$Type): void
public "getBlockEntityType"(): $BlockEntityType<($TrackSwitchBlockEntity)>
public static "manual"(arg0: $BlockBehaviour$Properties$$Type): $TrackSwitchBlock
public "getBlockEntityClass"(): $Class<($TrackSwitchBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "automatic"(arg0: $BlockBehaviour$Properties$$Type): $TrackSwitchBlock
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($TrackSwitchBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($TrackSwitchBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($TrackSwitchBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($TrackSwitchBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $TrackSwitchBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($TrackSwitchBlockEntity)>
get "blockEntityClass"(): $Class<($TrackSwitchBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlock$$Type = ($TrackSwitchBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackSwitchBlock$$Original = $TrackSwitchBlock;}
declare module "com.railwayteam.railways.content.buffer.headstock.CopycatHeadstockBarsBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $CopycatHeadstockBarsBlock extends $HorizontalDirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CopycatHeadstockBarsBlock)>
static readonly "UPSIDE_DOWN": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHeadstockBarsBlock$$Type = ($CopycatHeadstockBarsBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatHeadstockBarsBlock$$Original = $CopycatHeadstockBarsBlock;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TrackMaterial$TrackType} from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType"
import {$CRBogeyBlockEntity} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.be.CRBogeyBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BogeyStyle, $BogeyStyle$$Type} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CRBogeyBlock extends $AbstractBogeyBlock<($CRBogeyBlockEntity)> implements $IBE$$Interface<($CRBogeyBlockEntity)>, $ProperWaterloggedBlock$$Interface, $SpecialBlockItemRequirement$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

public "getBlockEntityType"(): $BlockEntityType<($CRBogeyBlockEntity)>
public "getTrackType"(arg0: $BogeyStyle$$Type): $TrackMaterial$TrackType
public "getWheelPointSpacing"(): double
public "getWheelRadius"(): double
public "getConnectorAnchorOffset"(): $Vec3
public "getBlockEntityClass"(): $Class<($CRBogeyBlockEntity)>
public "getDefaultStyle"(): $BogeyStyle
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CRBogeyBlockEntity)>
get "wheelPointSpacing"(): double
get "wheelRadius"(): double
get "connectorAnchorOffset"(): $Vec3
get "blockEntityClass"(): $Class<($CRBogeyBlockEntity)>
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CRBogeyBlock$$Type = ($CRBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CRBogeyBlock$$Original = $CRBogeyBlock;}
declare module "com.railwayteam.railways.content.buffer.TrackBuffer" {
import {$SingleBlockEntityEdgePoint} from "com.simibubi.create.content.trains.signal.SingleBlockEntityEdgePoint"
import {$TrackNodeLocation} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$TrackNode$$Type} from "com.simibubi.create.content.trains.graph.TrackNode"
import {$UUID} from "java.util.UUID"
import {$Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$Level} from "net.minecraft.world.level.Level"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $TrackBuffer extends $SingleBlockEntityEdgePoint {
 "edgeLocation": $Couple<($TrackNodeLocation)>
 "blockEntityPos": $BlockPos
 "blockEntityDimension": $ResourceKey<($Level)>
 "id": $UUID
 "position": double

constructor()

public "canNavigateVia"(arg0: $TrackNode$$Type): boolean
public static "getBufferRoom"(arg0: $Train$$Type, arg1: boolean): integer
public static "getBufferRoom"(arg0: $Train$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackBuffer$$Type = ($TrackBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackBuffer$$Original = $TrackBuffer;}
declare module "com.railwayteam.railways.content.buffer.WoodVariantTrackBufferBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WoodVariantTrackBufferBlockEntity} from "com.railwayteam.railways.content.buffer.WoodVariantTrackBufferBlockEntity"
import {$TrackBufferBlock} from "com.railwayteam.railways.content.buffer.TrackBufferBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WoodVariantTrackBufferBlock extends $TrackBufferBlock<($WoodVariantTrackBufferBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "DIAGONAL": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

public "getBlockEntityType"(): $BlockEntityType<($WoodVariantTrackBufferBlockEntity)>
public "getBlockEntityClass"(): $Class<($WoodVariantTrackBufferBlockEntity)>
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($WoodVariantTrackBufferBlockEntity)>
get "blockEntityClass"(): $Class<($WoodVariantTrackBufferBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodVariantTrackBufferBlock$$Type = ($WoodVariantTrackBufferBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodVariantTrackBufferBlock$$Original = $WoodVariantTrackBufferBlock;}
declare module "com.railwayteam.railways.content.fuel.tank.FuelTankBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$FuelTankBlock$Shape} from "com.railwayteam.railways.content.fuel.tank.FuelTankBlock$Shape"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuelTankBlockEntity, $FuelTankBlockEntity$$Type} from "com.railwayteam.railways.content.fuel.tank.FuelTankBlockEntity"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FuelTankBlock extends $Block implements $IWrenchable$$Interface, $IBE$$Interface<($FuelTankBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SILENCED_METAL": $SoundType
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "BOTTOM": $BooleanProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $EnumProperty<($FuelTankBlock$Shape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "TOP": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "isTank"(arg0: $BlockState$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getBlockEntityType"(): $BlockEntityType<($FuelTankBlockEntity)>
public "getBlockEntityClass"(): $Class<($FuelTankBlockEntity)>
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($FuelTankBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($FuelTankBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($FuelTankBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($FuelTankBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $FuelTankBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($FuelTankBlockEntity)>
get "blockEntityClass"(): $Class<($FuelTankBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelTankBlock$$Type = ($FuelTankBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelTankBlock$$Original = $FuelTankBlock;}
declare module "com.railwayteam.railways.content.smokestack.block.be.SmokeStackBlockEntity" {
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$List$$Type} from "java.util.List"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SmokeStackBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "setSoul"(arg0: boolean): void
public "isSoul"(): boolean
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "tick"(): void
public "setColor"(arg0: $DyeColor$$Type): void
public "getIcon"(arg0: boolean): $ItemStack
public "getColor"(): $DyeColor
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
set "soul"(value: boolean)
get "soul"(): boolean
set "color"(value: $DyeColor$$Type)
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokeStackBlockEntity$$Type = ($SmokeStackBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmokeStackBlockEntity$$Original = $SmokeStackBlockEntity;}
declare module "com.railwayteam.railways.content.distant_signals.SignalDisplaySource" {
import {$SingleLineDisplaySource} from "com.simibubi.create.content.redstone.displayLink.source.SingleLineDisplaySource"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$SignalBlockEntity} from "com.simibubi.create.content.trains.signal.SignalBlockEntity"
import {$DisplaySource} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$SignalBlockEntity$SignalState} from "com.simibubi.create.content.trains.signal.SignalBlockEntity$SignalState"
import {$SimpleRegistry$Multi} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"
import {$DisplayLinkBlockEntity$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkBlockEntity"

export class $SignalDisplaySource extends $SingleLineDisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(never)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

public static "isSignalTarget"(arg0: $DisplayLinkContext$$Type): boolean
public "getPassiveRefreshTicks"(): integer
public static "hasSignalSource"(arg0: $DisplayLinkContext$$Type): boolean
public static "getSignalState"(arg0: $DisplayLinkContext$$Type, arg1: $MutableComponent$$Type): $Pair<($SignalBlockEntity$SignalState), ($Optional<($SignalBlockEntity)>)>
public "updateState"(arg0: $DisplayLinkBlockEntity$$Type): void
public static "getState"(arg0: $MutableComponent$$Type): $Optional<($SignalBlockEntity$SignalState)>
get "passiveRefreshTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignalDisplaySource$$Type = ($SignalDisplaySource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignalDisplaySource$$Original = $SignalDisplaySource;}
declare module "com.railwayteam.railways.content.buffer.single_deco.AbstractDyeableSingleBufferBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$DyeableBlockEntity, $DyeableBlockEntity$$Type} from "com.railwayteam.railways.content.buffer.DyeableBlockEntity"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AbstractDyeableSingleBufferBlock extends $HorizontalDirectionalBlock implements $IBE$$Interface<($DyeableBlockEntity)>, $IWrenchable$$Interface, $ProperWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<($DyeableBlockEntity)>
public "getBlockEntityClass"(): $Class<($DyeableBlockEntity)>
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($DyeableBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($DyeableBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($DyeableBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($DyeableBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $DyeableBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($DyeableBlockEntity)>
get "blockEntityClass"(): $Class<($DyeableBlockEntity)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDyeableSingleBufferBlock$$Type = ($AbstractDyeableSingleBufferBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractDyeableSingleBufferBlock$$Original = $AbstractDyeableSingleBufferBlock;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.medium.MediumBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MediumBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MediumBogeyBlock$$Type = ($MediumBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MediumBogeyBlock$$Original = $MediumBogeyBlock;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.medium.MediumTripleWheelBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MediumTripleWheelBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MediumTripleWheelBogeyBlock$$Type = ($MediumTripleWheelBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MediumTripleWheelBogeyBlock$$Original = $MediumTripleWheelBogeyBlock;}
declare module "com.railwayteam.railways.content.custom_tracks.casing.neoforge.CasingCollisionBlockImpl" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CasingCollisionBlock} from "com.railwayteam.railways.content.custom_tracks.casing.CasingCollisionBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CasingCollisionBlockImpl extends $CasingCollisionBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "create"(arg0: $BlockBehaviour$Properties$$Type): $CasingCollisionBlock
public "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
public "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasingCollisionBlockImpl$$Type = ($CasingCollisionBlockImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CasingCollisionBlockImpl$$Original = $CasingCollisionBlockImpl;}
declare module "com.railwayteam.railways.content.smokestack.block.SmokeStackBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$SmokeStackBlockEntity} from "com.railwayteam.railways.content.smokestack.block.be.SmokeStackBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SmokestackStyle} from "com.railwayteam.railways.content.smokestack.SmokestackStyle"
import {$ShapeWrapper$$Type} from "com.railwayteam.railways.util.ShapeWrapper"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AbstractSmokeStackBlock} from "com.railwayteam.railways.content.smokestack.block.AbstractSmokeStackBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SmokeStackBlock$SmokeStackType, $SmokeStackBlock$SmokeStackType$$Type} from "com.railwayteam.railways.content.smokestack.block.SmokeStackBlock$SmokeStackType"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SmokeStackBlock extends $AbstractSmokeStackBlock<($SmokeStackBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($SmokestackStyle)>
 "createsStationarySmoke": boolean
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "type": $SmokeStackBlock$SmokeStackType
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "ENABLED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $SmokeStackBlock$SmokeStackType$$Type, arg2: $ShapeWrapper$$Type, arg3: boolean, arg4: StringJS)

public static "makeParticles"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: boolean, arg3: boolean, arg4: $Vec3$$Type, arg5: $Vec3$$Type, arg6: double): void
public static "makeParticles"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: boolean, arg3: boolean, arg4: $Vec3$$Type, arg5: $Vec3$$Type, arg6: double, arg7: boolean): void
public static "makeParticles"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: boolean, arg3: boolean, arg4: $Vec3$$Type, arg5: $Vec3$$Type, arg6: double, arg7: boolean, arg8: $DyeColor$$Type): void
public static "makeParticles"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: boolean, arg3: boolean, arg4: $Vec3$$Type, arg5: $Vec3$$Type, arg6: double, arg7: boolean, arg8: $DyeColor$$Type, arg9: boolean): void
public static "makeParticles"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: boolean, arg3: boolean, arg4: $Vec3$$Type, arg5: $Vec3$$Type): void
public static "makeParticles"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: boolean, arg3: boolean, arg4: $Vec3$$Type, arg5: $Vec3$$Type, arg6: double, arg7: boolean, arg8: $DyeColor$$Type, arg9: boolean, arg10: boolean): void
public "getBlockEntityType"(): $BlockEntityType<($SmokeStackBlockEntity)>
public static "makeParticlesStationary"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean, arg3: boolean, arg4: $Vec3$$Type, arg5: $Vec3$$Type): void
public "blockEntityAnimateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getBlockEntityClass"(): $Class<($SmokeStackBlockEntity)>
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($SmokeStackBlockEntity)>
get "blockEntityClass"(): $Class<($SmokeStackBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokeStackBlock$$Type = ($SmokeStackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmokeStackBlock$$Original = $SmokeStackBlock;}
declare module "com.railwayteam.railways.content.custom_bogeys.special.invisible.InvisibleBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Set} from "java.util.Set"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$Carriage$$Type} from "com.simibubi.create.content.trains.entity.Carriage"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TrackMaterial$TrackType} from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BogeyStyle, $BogeyStyle$$Type} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$InvisibleBogeyBlockEntity} from "com.railwayteam.railways.content.custom_bogeys.special.invisible.InvisibleBogeyBlockEntity"

export class $InvisibleBogeyBlock extends $AbstractBogeyBlock<($InvisibleBogeyBlockEntity)> implements $IBE$$Interface<($InvisibleBogeyBlockEntity)>, $ProperWaterloggedBlock$$Interface, $SpecialBlockItemRequirement$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $BlockEntityType<($InvisibleBogeyBlockEntity)>
public "isOnIncompatibleTrack"(arg0: $Carriage$$Type, arg1: boolean): boolean
public "getTrackType"(arg0: $BogeyStyle$$Type): $TrackMaterial$TrackType
public "getValidPathfindingTypes"(arg0: $BogeyStyle$$Type): $Set<($TrackMaterial$TrackType)>
public "getWheelPointSpacing"(): double
public "getWheelRadius"(): double
public "getConnectorAnchorOffset"(): $Vec3
public "getBlockEntityClass"(): $Class<($InvisibleBogeyBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getDefaultStyle"(): $BogeyStyle
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($InvisibleBogeyBlockEntity)>
get "wheelPointSpacing"(): double
get "wheelRadius"(): double
get "connectorAnchorOffset"(): $Vec3
get "blockEntityClass"(): $Class<($InvisibleBogeyBlockEntity)>
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibleBogeyBlock$$Type = ($InvisibleBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InvisibleBogeyBlock$$Original = $InvisibleBogeyBlock;}
declare module "com.railwayteam.railways.content.custom_tracks.generic_crossing.GenericCrossingBlockEntity" {
import {$TrackShapeLookup$GenericCrossingData$$Type} from "com.railwayteam.railways.content.custom_tracks.generic_crossing.TrackShapeLookup$GenericCrossingData"
import {$IGenericCrossingTrackBE$$Interface} from "com.railwayteam.railways.mixin_interfaces.IGenericCrossingTrackBE"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Pair, $Pair$$Type} from "net.createmod.catnip.data.Pair"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$IMergeableBE$$Interface} from "com.simibubi.create.foundation.blockEntity.IMergeableBE"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackShape, $TrackShape$$Type} from "com.simibubi.create.content.trains.track.TrackShape"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GenericCrossingBlockEntity extends $SmartBlockEntity implements $IMergeableBE$$Interface, $IGenericCrossingTrackBE$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getPrimary"(): $TrackMaterial
public "getSecondary"(): $TrackMaterial
public "railways$getFirstCrossingPiece"(): $Pair<($TrackMaterial), ($TrackShape)>
public "railways$getSecondCrossingPiece"(): $Pair<($TrackMaterial), ($TrackShape)>
public "accept"(arg0: $BlockEntity$$Type): void
public "initFrom"(arg0: $TrackShapeLookup$GenericCrossingData$$Type): void
public static "getQuads"(arg0: $TrackMaterial$$Type, arg1: $TrackShape$$Type, arg2: $Direction$$Type, arg3: $RandomSource$$Type): $List<($BakedQuad)>
public static "getQuads"(arg0: $Pair$$Type<($TrackMaterial$$Type), ($TrackShape$$Type)>, arg1: $Direction$$Type, arg2: $RandomSource$$Type): $List<($BakedQuad)>
public static "getModel"(arg0: $Pair$$Type<($TrackMaterial$$Type), ($TrackShape$$Type)>): $BakedModel
public static "getModel"(arg0: $TrackMaterial$$Type, arg1: $TrackShape$$Type): $BakedModel
get "primary"(): $TrackMaterial
get "secondary"(): $TrackMaterial
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericCrossingBlockEntity$$Type = ($GenericCrossingBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericCrossingBlockEntity$$Original = $GenericCrossingBlockEntity;}
declare module "com.railwayteam.railways.content.conductor.ConductorCapItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export class $ConductorCapItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
readonly "color": $DyeColor
readonly "textureStr": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "textureId": $ResourceLocation
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "create"(arg0: $Item$Properties$$Type, arg1: $DyeColor$$Type): $ConductorCapItem
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConductorCapItem$$Type = ($ConductorCapItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConductorCapItem$$Original = $ConductorCapItem;}
declare module "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$OperationInfo" {
import {$Carriage, $Carriage$$Type} from "com.simibubi.create.content.trains.entity.Carriage"
import {$TrackCouplerBlockEntity$OperationMode, $TrackCouplerBlockEntity$OperationMode$$Type} from "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$OperationMode"
import {$Record} from "java.lang.Record"

export class $TrackCouplerBlockEntity$OperationInfo extends $Record {
static readonly "NONE": $TrackCouplerBlockEntity$OperationInfo

constructor(mode: $TrackCouplerBlockEntity$OperationMode$$Type, frontCarriage: $Carriage$$Type, backCarriage: $Carriage$$Type)

public "frontCarriage"(): $Carriage
public "backCarriage"(): $Carriage
public "mode"(): $TrackCouplerBlockEntity$OperationMode
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockEntity$OperationInfo$$Type = ({"backCarriage"?: $Carriage$$Type, "mode"?: $TrackCouplerBlockEntity$OperationMode$$Type, "frontCarriage"?: $Carriage$$Type}) | ([backCarriage?: $Carriage$$Type, mode?: $TrackCouplerBlockEntity$OperationMode$$Type, frontCarriage?: $Carriage$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackCouplerBlockEntity$OperationInfo$$Original = $TrackCouplerBlockEntity$OperationInfo;}
declare module "com.railwayteam.railways.content.custom_bogeys.special.monobogey.AbstractMonoBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MonoBogeyBlockEntity} from "com.railwayteam.railways.content.custom_bogeys.special.monobogey.MonoBogeyBlockEntity"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TrackMaterial$TrackType} from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BogeyStyle$$Type} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $AbstractMonoBogeyBlock<T extends $MonoBogeyBlockEntity> extends $AbstractBogeyBlock<(T)> implements $IBE$$Interface<(T)>, $ProperWaterloggedBlock$$Interface, $SpecialBlockItemRequirement$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPSIDE_DOWN": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "canBeUpsideDown"(): boolean
public "isUpsideDown"(arg0: $BlockState$$Type): boolean
public "getTrackType"(arg0: $BogeyStyle$$Type): $TrackMaterial$TrackType
public "getWheelPointSpacing"(): double
public "getWheelRadius"(): double
public "getConnectorAnchorOffset"(arg0: boolean): $Vec3
public "getConnectorAnchorOffset"(): $Vec3
public "allowsSingleBogeyCarriage"(): boolean
public "propertiesToCopy"(): $List<($Property<(never)>)>
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getVersion"(arg0: $BlockState$$Type, arg1: boolean): $BlockState
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelPointSpacing"(): double
get "wheelRadius"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMonoBogeyBlock$$Type<T> = ($AbstractMonoBogeyBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractMonoBogeyBlock$$Original<T> = $AbstractMonoBogeyBlock<(T)>;}
declare module "com.railwayteam.railways.content.custom_bogeys.special.monobogey.InvisibleMonoBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$AbstractMonoBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.special.monobogey.AbstractMonoBogeyBlock"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Set} from "java.util.Set"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Carriage$$Type} from "com.simibubi.create.content.trains.entity.Carriage"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$InvisibleMonoBogeyBlockEntity} from "com.railwayteam.railways.content.custom_bogeys.special.monobogey.InvisibleMonoBogeyBlockEntity"
import {$TrackMaterial$TrackType} from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BogeyStyle, $BogeyStyle$$Type} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $InvisibleMonoBogeyBlock extends $AbstractMonoBogeyBlock<($InvisibleMonoBogeyBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPSIDE_DOWN": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $BlockEntityType<($InvisibleMonoBogeyBlockEntity)>
public "isOnIncompatibleTrack"(arg0: $Carriage$$Type, arg1: boolean): boolean
public "getValidPathfindingTypes"(arg0: $BogeyStyle$$Type): $Set<($TrackMaterial$TrackType)>
public "getBlockEntityClass"(): $Class<($InvisibleMonoBogeyBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getDefaultStyle"(): $BogeyStyle
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($InvisibleMonoBogeyBlockEntity)>
get "blockEntityClass"(): $Class<($InvisibleMonoBogeyBlockEntity)>
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibleMonoBogeyBlock$$Type = ($InvisibleMonoBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InvisibleMonoBogeyBlock$$Original = $InvisibleMonoBogeyBlock;}
declare module "com.railwayteam.railways.content.buffer.WoodVariantTrackBufferBlockEntity" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackTargetingBehaviour} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour"
import {$IMaterialAdaptingBuffer$$Interface} from "com.railwayteam.railways.content.buffer.IMaterialAdaptingBuffer"
import {$TrackBuffer} from "com.railwayteam.railways.content.buffer.TrackBuffer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackBufferBlockEntity} from "com.railwayteam.railways.content.buffer.TrackBufferBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WoodVariantTrackBufferBlockEntity extends $TrackBufferBlockEntity implements $IMaterialAdaptingBuffer$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "edgePoint": $TrackTargetingBehaviour<($TrackBuffer)>

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "applyMaterialIfValid"(arg0: $ItemStack$$Type): $InteractionResult
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getMaterial"(): $BlockState
get "material"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodVariantTrackBufferBlockEntity$$Type = ($WoodVariantTrackBufferBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodVariantTrackBufferBlockEntity$$Original = $WoodVariantTrackBufferBlockEntity;}
declare module "com.railwayteam.railways.content.switches.TrackSwitchBlockItem" {
import {$TrackBlockOutline$BezierPointSelection$$Type} from "com.simibubi.create.content.trains.track.TrackBlockOutline$BezierPointSelection"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$NonNullBiFunction} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$EdgePointType$$Type} from "com.simibubi.create.content.trains.graph.EdgePointType"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$TrackTargetingBlockItem} from "com.simibubi.create.content.trains.track.TrackTargetingBlockItem"

export class $TrackSwitchBlockItem extends $TrackTargetingBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: $EdgePointType$$Type<(never)>)

public "useOnCurve"(arg0: $TrackBlockOutline$BezierPointSelection$$Type, arg1: $ItemStack$$Type): boolean
public static "ofType"<T extends $Block>(arg0: $EdgePointType$$Type<(never)>): $NonNullBiFunction<(T), ($Item$Properties), ($TrackTargetingBlockItem)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlockItem$$Type = ($TrackSwitchBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackSwitchBlockItem$$Original = $TrackSwitchBlockItem;}
declare module "com.railwayteam.railways.content.fuel.psi.PortableFuelInterfaceBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Contraption$$Type} from "com.simibubi.create.content.contraptions.Contraption"
import {$PortableStorageInterfaceBlockEntity} from "com.simibubi.create.content.contraptions.actors.psi.PortableStorageInterfaceBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PortableFuelInterfaceBlockEntity extends $PortableStorageInterfaceBlockEntity {
 "keepAlive": integer
static readonly "ANIMATION": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "startTransferringTo"(arg0: $Contraption$$Type, arg1: float): void
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableFuelInterfaceBlockEntity$$Type = ($PortableFuelInterfaceBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortableFuelInterfaceBlockEntity$$Original = $PortableFuelInterfaceBlockEntity;}
declare module "com.railwayteam.railways.content.switches.TrackSwitchBlockEntity" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$PartialModel} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$TrackSwitchBlockEntity$PonderData} from "com.railwayteam.railways.content.switches.TrackSwitchBlockEntity$PonderData"
import {$TrackSwitchBlock$SwitchState, $TrackSwitchBlock$SwitchState$$Type} from "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchState"
import {$TrackTargetingBehaviour} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TransformableBlockEntity$$Interface} from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$TrackSwitch} from "com.railwayteam.railways.content.switches.TrackSwitch"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrackSwitchBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity$$Interface, $IHaveGoggleInformation$$Interface {
 "ponderData": $TrackSwitchBlockEntity$PonderData
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "edgePoint": $TrackTargetingBehaviour<($TrackSwitch)>

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "lazyTick"(): void
public "getTargetAnalogOutput"(): integer
public "getSwitch"(): $TrackSwitch
public "isReverseLeft"(): boolean
public "isReverseRight"(): boolean
public "clientLazyTick"(): void
public "setStatePonder"(arg0: $TrackSwitchBlock$SwitchState$$Type): void
public "hasExit"(arg0: $TrackSwitchBlock$SwitchState$$Type): boolean
public "getOverlayModel"(): $PartialModel
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "tick"(): void
public "isNormal"(): boolean
public "remove"(): void
public "transform"(arg0: $BlockEntity$$Type, arg1: $StructureTransform$$Type): void
public "getState"(): $TrackSwitchBlock$SwitchState
public "destroy"(): void
public "isAutomatic"(): boolean
public "isLocked"(): boolean
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
get "targetAnalogOutput"(): integer
get "switch"(): $TrackSwitch
get "reverseLeft"(): boolean
get "reverseRight"(): boolean
set "statePonder"(value: $TrackSwitchBlock$SwitchState$$Type)
get "overlayModel"(): $PartialModel
get "normal"(): boolean
get "state"(): $TrackSwitchBlock$SwitchState
get "automatic"(): boolean
get "locked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlockEntity$$Type = ($TrackSwitchBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackSwitchBlockEntity$$Original = $TrackSwitchBlockEntity;}
declare module "com.railwayteam.railways.content.buffer.single_deco.LinkPinBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$LinkPinBlock$Style} from "com.railwayteam.railways.content.buffer.single_deco.LinkPinBlock$Style"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockStateBlockItemGroup$GroupedBlock$$Interface} from "com.railwayteam.railways.content.buffer.BlockStateBlockItemGroup$GroupedBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractDyeableSingleBufferBlock} from "com.railwayteam.railways.content.buffer.single_deco.AbstractDyeableSingleBufferBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LinkPinBlock extends $AbstractDyeableSingleBufferBlock implements $BlockStateBlockItemGroup$GroupedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LinkPinBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($LinkPinBlock$Style)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkPinBlock$$Type = ($LinkPinBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkPinBlock$$Original = $LinkPinBlock;}
declare module "com.railwayteam.railways.content.conductor.vent.neoforge.VentBlockImpl" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VentBlock} from "com.railwayteam.railways.content.conductor.vent.VentBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VentBlockImpl extends $VentBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "OUTLINE_SHAPE": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "CONDUCTOR_VISIBLE": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public static "create"(arg0: $BlockBehaviour$Properties$$Type): $VentBlock
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VentBlockImpl$$Type = ($VentBlockImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VentBlockImpl$$Original = $VentBlockImpl;}
declare module "com.railwayteam.railways.content.buffer.single_deco.GenericDyeableSingleBufferBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$VoxelShaper$$Type} from "net.createmod.catnip.math.VoxelShaper"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$NonNullFunction} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractDyeableSingleBufferBlock} from "com.railwayteam.railways.content.buffer.single_deco.AbstractDyeableSingleBufferBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GenericDyeableSingleBufferBlock extends $AbstractDyeableSingleBufferBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($GenericDyeableSingleBufferBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $VoxelShaper$$Type)

public static "createFactory"(arg0: $VoxelShaper$$Type): $NonNullFunction<($BlockBehaviour$Properties), ($GenericDyeableSingleBufferBlock)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericDyeableSingleBufferBlock$$Type = ($GenericDyeableSingleBufferBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericDyeableSingleBufferBlock$$Original = $GenericDyeableSingleBufferBlock;}
declare module "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockItem" {
import {$TrackBlockOutline$BezierPointSelection$$Type} from "com.simibubi.create.content.trains.track.TrackBlockOutline$BezierPointSelection"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$NonNullBiFunction} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$EdgePointType$$Type} from "com.simibubi.create.content.trains.graph.EdgePointType"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$TrackTargetingBlockItem} from "com.simibubi.create.content.trains.track.TrackTargetingBlockItem"

export class $TrackCouplerBlockItem extends $TrackTargetingBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: $EdgePointType$$Type<(never)>)

public "useOnCurve"(arg0: $TrackBlockOutline$BezierPointSelection$$Type, arg1: $ItemStack$$Type): boolean
public static "ofType"<T extends $Block>(arg0: $EdgePointType$$Type<(never)>): $NonNullBiFunction<(T), ($Item$Properties), ($TrackTargetingBlockItem)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockItem$$Type = ($TrackCouplerBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackCouplerBlockItem$$Original = $TrackCouplerBlockItem;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.medium.Medium202TrailingBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $Medium202TrailingBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Medium202TrailingBogeyBlock$$Type = ($Medium202TrailingBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Medium202TrailingBogeyBlock$$Original = $Medium202TrailingBogeyBlock;}
declare module "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackCouplerBlockEntity$AllowedOperationMode} from "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$AllowedOperationMode"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TrackCouplerBlockEntity, $TrackCouplerBlockEntity$$Type} from "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $TrackCouplerBlock extends $Block implements $IBE$$Interface<($TrackCouplerBlockEntity)>, $IWrenchable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MODE": $EnumProperty<($TrackCouplerBlockEntity$AllowedOperationMode)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getBlockEntityType"(): $BlockEntityType<($TrackCouplerBlockEntity)>
public "getBlockEntityClass"(): $Class<($TrackCouplerBlockEntity)>
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "create"(arg0: $BlockBehaviour$Properties$$Type): $TrackCouplerBlock
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($TrackCouplerBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($TrackCouplerBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($TrackCouplerBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($TrackCouplerBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $TrackCouplerBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($TrackCouplerBlockEntity)>
get "blockEntityClass"(): $Class<($TrackCouplerBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlock$$Type = ($TrackCouplerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackCouplerBlock$$Original = $TrackCouplerBlock;}
declare module "com.railwayteam.railways.content.switches.SwitchDisplaySource" {
import {$SingleLineDisplaySource} from "com.simibubi.create.content.redstone.displayLink.source.SingleLineDisplaySource"
import {$DisplaySource} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry$Multi} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $SwitchDisplaySource extends $SingleLineDisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(never)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

public "getPassiveRefreshTicks"(): integer
get "passiveRefreshTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchDisplaySource$$Type = ($SwitchDisplaySource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SwitchDisplaySource$$Original = $SwitchDisplaySource;}
declare module "com.railwayteam.railways.content.conductor.whistle.ConductorWhistleFlagBlockEntity" {
import {$TrackTargetingBehaviour} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour"
import {$List$$Type} from "java.util.List"
import {$TransformableBlockEntity$$Interface} from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GlobalStation} from "com.simibubi.create.content.trains.station.GlobalStation"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ConductorWhistleFlagBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity$$Interface {
 "station": $TrackTargetingBehaviour<($GlobalStation)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "lazyTick"(): void
public "setColor"(arg0: $DyeColor$$Type): void
public "transform"(arg0: $BlockEntity$$Type, arg1: $StructureTransform$$Type): void
public "getColor"(): $DyeColor
set "color"(value: $DyeColor$$Type)
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConductorWhistleFlagBlockEntity$$Type = ($ConductorWhistleFlagBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConductorWhistleFlagBlockEntity$$Original = $ConductorWhistleFlagBlockEntity;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.medium.MediumQuintupleWheelBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MediumQuintupleWheelBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MediumQuintupleWheelBogeyBlock$$Type = ($MediumQuintupleWheelBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MediumQuintupleWheelBogeyBlock$$Original = $MediumQuintupleWheelBogeyBlock;}
declare module "com.railwayteam.railways.content.fuel.tank.FuelTankBlockEntity" {
import {$LerpedFloat, $LerpedFloat$$Type} from "net.createmod.catnip.animation.LerpedFloat"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$IFluidTank} from "net.neoforged.neoforge.fluids.IFluidTank"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$FluidTank} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$IMultiBlockEntityContainer$Fluid$$Interface} from "com.simibubi.create.foundation.blockEntity.IMultiBlockEntityContainer$Fluid"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FuelTankBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation$$Interface, $IMultiBlockEntityContainer$Fluid$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public static "getCapacityMultiplier"(): integer
public "sendDataImmediately"(): void
public "getFillState"(): float
public "toggleWindows"(): void
public "applyFluidTankSize"(arg0: integer): void
public "setWindows"(arg0: boolean): void
public "getTankSize"(arg0: integer): integer
public "setTankSize"(arg0: integer, arg1: integer): void
public "hasTank"(): boolean
public "getFluid"(arg0: integer): $FluidStack
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "sendData"(): void
public "getMaxWidth"(): integer
public static "getMaxHeight"(): integer
public "getTotalTankSize"(): integer
public "getControllerBE"(): $BlockEntity
public "isController"(): boolean
public "getController"(): $BlockPos
public "setController"(arg0: $BlockPos$$Type): void
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "removeController"(arg0: boolean): void
public "getTankInventory"(): $FluidTank
public "getFluidLevel"(): $LerpedFloat
public "setFluidLevel"(arg0: $LerpedFloat$$Type): void
public "notifyMultiUpdated"(): void
public "getMainConnectionAxis"(): $Direction$Axis
public "getLastKnownPos"(): $BlockPos
public "preventConnectivityUpdate"(): void
public "setExtraData"(arg0: any): void
public "modifyExtraData"(arg0: any): any
public "getWidth"(): integer
public "getHeight"(): integer
public "invalidate"(): void
public "tick"(): void
public static "getMaxSize"(): integer
public "initialize"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getMaxLength"(arg0: $Direction$Axis$$Type, arg1: integer): integer
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "getTank"(arg0: integer): $IFluidTank
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getExtraData"(): any
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
public "getMainAxisOf"(arg0: $BlockEntity$$Type): $Direction$Axis
public static get "capacityMultiplier"(): integer
get "fillState"(): float
set "windows"(value: boolean)
get "maxWidth"(): integer
public static get "maxHeight"(): integer
get "totalTankSize"(): integer
get "controllerBE"(): $BlockEntity
get "controller"(): boolean
get "controller"(): $BlockPos
set "controller"(value: $BlockPos$$Type)
get "tankInventory"(): $FluidTank
get "fluidLevel"(): $LerpedFloat
set "fluidLevel"(value: $LerpedFloat$$Type)
get "mainConnectionAxis"(): $Direction$Axis
get "lastKnownPos"(): $BlockPos
set "extraData"(value: any)
get "width"(): integer
get "height"(): integer
public static get "maxSize"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "extraData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelTankBlockEntity$$Type = ($FuelTankBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelTankBlockEntity$$Original = $FuelTankBlockEntity;}
declare module "com.railwayteam.railways.content.fuel.tank.FuelTankMountedStorage$Handler" {
import {$FluidTank} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $FuelTankMountedStorage$Handler extends $FluidTank {
constructor(arg0: integer, arg1: $FluidStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelTankMountedStorage$Handler$$Type = ($FuelTankMountedStorage$Handler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelTankMountedStorage$Handler$$Original = $FuelTankMountedStorage$Handler;}
declare module "com.railwayteam.railways.content.custom_tracks.generic_crossing.TrackShapeLookup$GenericCrossingData" {
import {$TrackShape, $TrackShape$$Type} from "com.simibubi.create.content.trains.track.TrackShape"
import {$Pair, $Pair$$Type} from "net.createmod.catnip.data.Pair"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$Record} from "java.lang.Record"

export class $TrackShapeLookup$GenericCrossingData extends $Record {
constructor(merged: $Pair$$Type<($TrackShape$$Type), (boolean)>, existingMaterial: $TrackMaterial$$Type, overlayMaterial: $TrackMaterial$$Type)

public "overlayMaterial"(): $TrackMaterial
public "existingMaterial"(): $TrackMaterial
public "merged"(): $Pair<($TrackShape), (boolean)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackShapeLookup$GenericCrossingData$$Type = ({"overlayMaterial"?: $TrackMaterial$$Type, "merged"?: $Pair$$Type<($TrackShape$$Type), (boolean)>, "existingMaterial"?: $TrackMaterial$$Type}) | ([overlayMaterial?: $TrackMaterial$$Type, merged?: $Pair$$Type<($TrackShape$$Type), (boolean)>, existingMaterial?: $TrackMaterial$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackShapeLookup$GenericCrossingData$$Original = $TrackShapeLookup$GenericCrossingData;}
declare module "com.railwayteam.railways.content.extended_sliding_doors.SlidingDoorMode$IHasDoorMode" {
import {$SlidingDoorMode, $SlidingDoorMode$$Type} from "com.railwayteam.railways.content.extended_sliding_doors.SlidingDoorMode"

export interface $SlidingDoorMode$IHasDoorMode$$Interface {

(): $SlidingDoorMode$$Type
}

export class $SlidingDoorMode$IHasDoorMode implements $SlidingDoorMode$IHasDoorMode$$Interface {
 "railways$getSlidingDoorMode"(): $SlidingDoorMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidingDoorMode$IHasDoorMode$$Type = (() => $SlidingDoorMode$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlidingDoorMode$IHasDoorMode$$Original = $SlidingDoorMode$IHasDoorMode;}
declare module "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity" {
import {$TrackCouplerBlockEntity$ClientInfo, $TrackCouplerBlockEntity$ClientInfo$$Type} from "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$ClientInfo"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$TrackTargetingBehaviour} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TrackCouplerBlockEntity$AllowedOperationMode} from "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$AllowedOperationMode"
import {$TransformableBlockEntity$$Interface} from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import {$TrackCouplerBlockEntity$OperationInfo} from "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$OperationInfo"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$TrackCoupler} from "com.railwayteam.railways.content.coupling.coupler.TrackCoupler"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$TrackCouplerBlockEntity$OperationMode} from "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$OperationMode"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrackCouplerBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity$$Interface, $IHaveGoggleInformation$$Interface {
 "secondEdgePoint": $TrackTargetingBehaviour<($TrackCoupler)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "edgePoint": $TrackTargetingBehaviour<($TrackCoupler)>

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "lazyTick"(): void
public "getReportedPower"(): boolean
public "getTargetAnalogOutput"(): integer
public "getOperationInfo"(): $TrackCouplerBlockEntity$OperationInfo
public "getClientInfo"(): $TrackCouplerBlockEntity$ClientInfo
public "getEdgeSpacing"(): integer
public "getAllowedOperationMode"(): $TrackCouplerBlockEntity$AllowedOperationMode
public "getSecondaryCoupler"(): $TrackCoupler
public "getCoupler"(): $TrackCoupler
public "getOperationMode"(): $TrackCouplerBlockEntity$OperationMode
public "areEdgePointsOk"(): boolean
public "setClientInfo"(arg0: $TrackCouplerBlockEntity$ClientInfo$$Type): void
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "tick"(): void
public "transform"(arg0: $BlockEntity$$Type, arg1: $StructureTransform$$Type): void
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
get "reportedPower"(): boolean
get "targetAnalogOutput"(): integer
get "operationInfo"(): $TrackCouplerBlockEntity$OperationInfo
get "clientInfo"(): $TrackCouplerBlockEntity$ClientInfo
get "edgeSpacing"(): integer
get "allowedOperationMode"(): $TrackCouplerBlockEntity$AllowedOperationMode
get "secondaryCoupler"(): $TrackCoupler
get "coupler"(): $TrackCoupler
get "operationMode"(): $TrackCouplerBlockEntity$OperationMode
set "clientInfo"(value: $TrackCouplerBlockEntity$ClientInfo$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockEntity$$Type = ($TrackCouplerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackCouplerBlockEntity$$Original = $TrackCouplerBlockEntity;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.SingleAxleBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SingleAxleBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleAxleBogeyBlock$$Type = ($SingleAxleBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleAxleBogeyBlock$$Original = $SingleAxleBogeyBlock;}
declare module "com.railwayteam.railways.content.custom_tracks.wide_gauge.WideGaugeTrackBlock" {
import {$BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$TrackBlock} from "com.simibubi.create.content.trains.track.TrackBlock"
import {$TrackShape} from "com.simibubi.create.content.trains.track.TrackShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $WideGaugeTrackBlock extends $TrackBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "HAS_BE": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $TrackMaterial$$Type)

public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "addToListIfConnected"(arg0: $TrackNodeLocation$$Type, arg1: $Collection$$Type<($TrackNodeLocation$DiscoveredLocation$$Type)>, arg2: $BiFunction$$Type<(double), (boolean), ($Vec3$$Type)>, arg3: $Function$$Type<(boolean), ($Vec3$$Type)>, arg4: $Function$$Type<(boolean), ($ResourceKey$$Type<($Level$$Type)>)>, arg5: $Function$$Type<($Vec3), (integer)>, arg6: $Vec3$$Type, arg7: $BezierConnection$$Type, arg8: $BiFunction$$Type<(boolean), ($Vec3), ($TrackMaterial$$Type)>): void
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type, arg2: $TrackMaterial$$Type): $TrackMaterial
public static "walkConnectedTracks"(arg0: $BlockGetter$$Type, arg1: $TrackNodeLocation$$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideGaugeTrackBlock$$Type = ($WideGaugeTrackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WideGaugeTrackBlock$$Original = $WideGaugeTrackBlock;}
declare module "com.railwayteam.railways.content.buffer.IMaterialAdaptingBuffer" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IMaterialAdaptingBuffer$$Interface {

(): $BlockState$$Type
get "material"(): $BlockState
}

export class $IMaterialAdaptingBuffer implements $IMaterialAdaptingBuffer$$Interface {
 "getMaterial"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterialAdaptingBuffer$$Type = (() => $BlockState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMaterialAdaptingBuffer$$Original = $IMaterialAdaptingBuffer;}
declare module "com.railwayteam.railways.content.custom_bogeys.special.monobogey.MonoBogeyBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BogeyStyle} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$AbstractBogeyBlockEntity} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MonoBogeyBlockEntity extends $AbstractBogeyBlockEntity {
static readonly "BOGEY_STYLE_KEY": StringJS
static readonly "BOGEY_DATA_KEY": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getDefaultStyle"(): $BogeyStyle
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonoBogeyBlockEntity$$Type = ($MonoBogeyBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MonoBogeyBlockEntity$$Original = $MonoBogeyBlockEntity;}
declare module "com.railwayteam.railways.content.buffer.MonoTrackBufferBlock$Style" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $MonoTrackBufferBlock$Style extends $Enum<($MonoTrackBufferBlock$Style)> implements $StringRepresentable$$Interface {
static readonly "SIDE": $MonoTrackBufferBlock$Style
static readonly "MONO": $MonoTrackBufferBlock$Style
static readonly "STANDARD": $MonoTrackBufferBlock$Style

public static "values"(): ($MonoTrackBufferBlock$Style)[]
public static "valueOf"(arg0: StringJS): $MonoTrackBufferBlock$Style
public "getModel"(): $ResourceLocation
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "model"(): $ResourceLocation
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonoTrackBufferBlock$Style$$Type = (("standard") | ("mono") | ("side"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MonoTrackBufferBlock$Style$$Original = $MonoTrackBufferBlock$Style;}
declare module "com.railwayteam.railways.content.buffer.headstock.HeadstockStyle" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BlockStateBlockItemGroup$IStyle$$Interface} from "com.railwayteam.railways.content.buffer.BlockStateBlockItemGroup$IStyle"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $HeadstockStyle extends $Enum<($HeadstockStyle)> implements $StringRepresentable$$Interface, $BlockStateBlockItemGroup$IStyle$$Interface<(boolean)> {
static readonly "PLAIN": $HeadstockStyle
static readonly "SCREWLINK": $HeadstockStyle
static readonly "LINK": $HeadstockStyle
static readonly "KNUCKLE": $HeadstockStyle
static readonly "KNUCKLE_SPLIT": $HeadstockStyle
static readonly "LINKLESS": $HeadstockStyle
static readonly "BUFFER": $HeadstockStyle

public "getLangName"(arg0: boolean): StringJS
public "getLangName"(arg0: any): StringJS
public static "values"(): ($HeadstockStyle)[]
public static "valueOf"(arg0: StringJS): $HeadstockStyle
public "getModel"(arg0: any): $ResourceLocation
public "getModel"(arg0: boolean): $ResourceLocation
public "getModel"(arg0: boolean, arg1: boolean): $ResourceLocation
public "getSerializedName"(): StringJS
public "getBlockId"(arg0: boolean): StringJS
public "getBlockId"(arg0: any): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadstockStyle$$Type = (("plain") | ("buffer") | ("link") | ("linkless") | ("knuckle") | ("knuckle_split") | ("screwlink"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeadstockStyle$$Original = $HeadstockStyle;}
declare module "com.railwayteam.railways.content.buffer.BlockStateBlockItemGroup$IStyle" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export interface $BlockStateBlockItemGroup$IStyle$$Interface<T> {
}

export class $BlockStateBlockItemGroup$IStyle<T> implements $BlockStateBlockItemGroup$IStyle$$Interface {
 "getLangName"(arg0: T): StringJS
 "getModel"(arg0: T): $ResourceLocation
 "getBlockId"(arg0: T): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateBlockItemGroup$IStyle$$Type<T> = ($BlockStateBlockItemGroup$IStyle<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateBlockItemGroup$IStyle$$Original<T> = $BlockStateBlockItemGroup$IStyle<(T)>;}
declare module "com.railwayteam.railways.content.buffer.TrackBufferBlockItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$EdgePointType$$Type} from "com.simibubi.create.content.trains.graph.EdgePointType"
import {$TrackTargetingBlockItem} from "com.simibubi.create.content.trains.track.TrackTargetingBlockItem"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$TrackBlockOutline$BezierPointSelection$$Type} from "com.simibubi.create.content.trains.track.TrackBlockOutline$BezierPointSelection"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$NonNullBiFunction} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $TrackBufferBlockItem extends $TrackTargetingBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: $EdgePointType$$Type<(never)>)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "useOnCurve"(arg0: $TrackBlockOutline$BezierPointSelection$$Type, arg1: $ItemStack$$Type): boolean
public static "ofType"<T extends $Block>(arg0: $EdgePointType$$Type<(never)>): $NonNullBiFunction<(T), ($Item$Properties), ($TrackTargetingBlockItem)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackBufferBlockItem$$Type = ($TrackBufferBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackBufferBlockItem$$Original = $TrackBufferBlockItem;}
declare module "com.railwayteam.railways.content.custom_tracks.casing.CasingCollisionBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CasingCollisionBlock extends $Block implements $EntityBlock$$Interface, $ProperWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "keepAlive"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "create"(arg0: $BlockBehaviour$Properties$$Type): $CasingCollisionBlock
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasingCollisionBlock$$Type = ($CasingCollisionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CasingCollisionBlock$$Original = $CasingCollisionBlock;}
declare module "com.railwayteam.railways.content.custom_bogeys.special.monobogey.InvisibleMonoBogeyBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BogeyStyle} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MonoBogeyBlockEntity} from "com.railwayteam.railways.content.custom_bogeys.special.monobogey.MonoBogeyBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $InvisibleMonoBogeyBlockEntity extends $MonoBogeyBlockEntity {
static readonly "BOGEY_STYLE_KEY": StringJS
static readonly "BOGEY_DATA_KEY": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getDefaultStyle"(): $BogeyStyle
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibleMonoBogeyBlockEntity$$Type = ($InvisibleMonoBogeyBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InvisibleMonoBogeyBlockEntity$$Original = $InvisibleMonoBogeyBlockEntity;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.large.LargeCreateStyle080BogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$LargeBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.size.LargeBogeyBlock"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LargeCreateStyle080BogeyBlock extends $LargeBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCreateStyle080BogeyBlock$$Type = ($LargeCreateStyle080BogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LargeCreateStyle080BogeyBlock$$Original = $LargeCreateStyle080BogeyBlock;}
declare module "com.railwayteam.railways.content.conductor.neoforge.ConductorCapItemImpl" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ConductorCapItem} from "com.railwayteam.railways.content.conductor.ConductorCapItem"

export class $ConductorCapItemImpl extends $ConductorCapItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
readonly "color": $DyeColor
readonly "textureStr": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "textureId": $ResourceLocation
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
public "isEnderMask"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EnderMan$$Type): boolean
public static "create"(arg0: $Item$Properties$$Type, arg1: $DyeColor$$Type): $ConductorCapItem
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConductorCapItemImpl$$Type = ($ConductorCapItemImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConductorCapItemImpl$$Original = $ConductorCapItemImpl;}
declare module "com.railwayteam.railways.content.palettes.boiler.BoilerBlock$Style" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $BoilerBlock$Style extends $Enum<($BoilerBlock$Style)> implements $StringRepresentable$$Interface {
static readonly "GULLET": $BoilerBlock$Style
static readonly "SMOKEBOX": $BoilerBlock$Style

public static "values"(): ($BoilerBlock$Style)[]
public static "valueOf"(arg0: StringJS): $BoilerBlock$Style
public "getTexture"(): StringJS
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "texture"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoilerBlock$Style$$Type = (("gullet") | ("smokebox"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoilerBlock$Style$$Original = $BoilerBlock$Style;}
declare module "com.railwayteam.railways.content.custom_tracks.monorail.MonorailTrackBlock" {
import {$BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$PartialModel} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$TrackBlock} from "com.simibubi.create.content.trains.track.TrackBlock"
import {$TrackShape} from "com.simibubi.create.content.trains.track.TrackShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MonorailTrackBlock extends $TrackBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "HAS_BE": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $TrackMaterial$$Type)

public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getBogeyAnchor"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockState
public "prepareAssemblyOverlay"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type, arg4: $PoseStack$$Type): $PartialModel
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "addToListIfConnected"(arg0: $TrackNodeLocation$$Type, arg1: $Collection$$Type<($TrackNodeLocation$DiscoveredLocation$$Type)>, arg2: $BiFunction$$Type<(double), (boolean), ($Vec3$$Type)>, arg3: $Function$$Type<(boolean), ($Vec3$$Type)>, arg4: $Function$$Type<(boolean), ($ResourceKey$$Type<($Level$$Type)>)>, arg5: $Function$$Type<($Vec3), (integer)>, arg6: $Vec3$$Type, arg7: $BezierConnection$$Type, arg8: $BiFunction$$Type<(boolean), ($Vec3), ($TrackMaterial$$Type)>): void
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type, arg2: $TrackMaterial$$Type): $TrackMaterial
public static "walkConnectedTracks"(arg0: $BlockGetter$$Type, arg1: $TrackNodeLocation$$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonorailTrackBlock$$Type = ($MonorailTrackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MonorailTrackBlock$$Original = $MonorailTrackBlock;}
declare module "com.railwayteam.railways.content.coupling.coupler.TrackCoupler" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID} from "java.util.UUID"
import {$Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$Level} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TrackNodeLocation} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$SingleBlockEntityEdgePoint} from "com.simibubi.create.content.trains.signal.SingleBlockEntityEdgePoint"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $TrackCoupler extends $SingleBlockEntityEdgePoint {
 "edgeLocation": $Couple<($TrackNodeLocation)>
 "blockEntityPos": $BlockPos
 "blockEntityDimension": $ResourceKey<($Level)>
 "id": $UUID
 "position": double

constructor()

public "getCurrentTrain"(): $UUID
public "isActivated"(): boolean
public "blockEntityAdded"(arg0: $BlockEntity$$Type, arg1: boolean): void
public "getActivation"(): integer
public "keepAlive"(arg0: $Train$$Type): void
public "tick"(arg0: $TrackGraph$$Type, arg1: boolean): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $DimensionPalette$$Type): void
public "write"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean, arg3: $DimensionPalette$$Type): void
public "read"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
get "currentTrain"(): $UUID
get "activated"(): boolean
get "activation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCoupler$$Type = ($TrackCoupler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackCoupler$$Original = $TrackCoupler;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.large.LargeCreateStyle0120BogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$LargeBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.size.LargeBogeyBlock"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LargeCreateStyle0120BogeyBlock extends $LargeBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCreateStyle0120BogeyBlock$$Type = ($LargeCreateStyle0120BogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LargeCreateStyle0120BogeyBlock$$Original = $LargeCreateStyle0120BogeyBlock;}
declare module "com.railwayteam.railways.content.semaphore.SemaphoreBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SemaphoreBlockEntity, $SemaphoreBlockEntity$$Type} from "com.railwayteam.railways.content.semaphore.SemaphoreBlockEntity"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SemaphoreBlock extends $HorizontalDirectionalBlock implements $IBE$$Interface<($SemaphoreBlockEntity)>, $IWrenchable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SemaphoreBlock)>
static readonly "girderPlacementHelperId": integer
static readonly "UPSIDE_DOWN": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "FLIPPED": $BooleanProperty
static readonly "UPDATE_INVISIBLE": integer
static readonly "FULL": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "placementHelperId": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getBlockEntityType"(): $BlockEntityType<($SemaphoreBlockEntity)>
public "getBlockEntityClass"(): $Class<($SemaphoreBlockEntity)>
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($SemaphoreBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($SemaphoreBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SemaphoreBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SemaphoreBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $SemaphoreBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($SemaphoreBlockEntity)>
get "blockEntityClass"(): $Class<($SemaphoreBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemaphoreBlock$$Type = ($SemaphoreBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SemaphoreBlock$$Original = $SemaphoreBlock;}
declare module "com.railwayteam.railways.content.conductor.whistle.ConductorWhistleItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TrackTargetingBlockItem} from "com.simibubi.create.content.trains.track.TrackTargetingBlockItem"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$TrackBlockOutline$BezierPointSelection$$Type} from "com.simibubi.create.content.trains.track.TrackBlockOutline$BezierPointSelection"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ConductorWhistleItem extends $TrackTargetingBlockItem {
static readonly "SPECIAL_MARKER": StringJS
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "useOnCurve"(arg0: $TrackBlockOutline$BezierPointSelection$$Type, arg1: $ItemStack$$Type): boolean
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConductorWhistleItem$$Type = ($ConductorWhistleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConductorWhistleItem$$Original = $ConductorWhistleItem;}
declare module "com.railwayteam.railways.content.buffer.StandardTrackBufferBlock$Style" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $StandardTrackBufferBlock$Style extends $Enum<($StandardTrackBufferBlock$Style)> implements $StringRepresentable$$Interface {
static readonly "STANDARD": $StandardTrackBufferBlock$Style
static readonly "SHORT": $StandardTrackBufferBlock$Style

public static "values"(): ($StandardTrackBufferBlock$Style)[]
public static "valueOf"(arg0: StringJS): $StandardTrackBufferBlock$Style
public "getModel"(): $ResourceLocation
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "model"(): $ResourceLocation
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandardTrackBufferBlock$Style$$Type = (("standard") | ("short"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StandardTrackBufferBlock$Style$$Original = $StandardTrackBufferBlock$Style;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.DoubleAxleBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DoubleAxleBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleAxleBogeyBlock$$Type = ($DoubleAxleBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleAxleBogeyBlock$$Original = $DoubleAxleBogeyBlock;}
declare module "com.railwayteam.railways.content.custom_tracks.narrow_gauge.NarrowGaugeTrackBlock" {
import {$BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$TrackBlock} from "com.simibubi.create.content.trains.track.TrackBlock"
import {$TrackShape} from "com.simibubi.create.content.trains.track.TrackShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $NarrowGaugeTrackBlock extends $TrackBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "HAS_BE": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $TrackMaterial$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "addToListIfConnected"(arg0: $TrackNodeLocation$$Type, arg1: $Collection$$Type<($TrackNodeLocation$DiscoveredLocation$$Type)>, arg2: $BiFunction$$Type<(double), (boolean), ($Vec3$$Type)>, arg3: $Function$$Type<(boolean), ($Vec3$$Type)>, arg4: $Function$$Type<(boolean), ($ResourceKey$$Type<($Level$$Type)>)>, arg5: $Function$$Type<($Vec3), (integer)>, arg6: $Vec3$$Type, arg7: $BezierConnection$$Type, arg8: $BiFunction$$Type<(boolean), ($Vec3), ($TrackMaterial$$Type)>): void
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type, arg2: $TrackMaterial$$Type): $TrackMaterial
public static "walkConnectedTracks"(arg0: $BlockGetter$$Type, arg1: $TrackNodeLocation$$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrowGaugeTrackBlock$$Type = ($NarrowGaugeTrackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrowGaugeTrackBlock$$Original = $NarrowGaugeTrackBlock;}
declare module "com.railwayteam.railways.content.buffer.headstock.HeadstockBlockEntity" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$DyeableBlockEntity} from "com.railwayteam.railways.content.buffer.DyeableBlockEntity"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IMaterialAdaptingBuffer$$Interface} from "com.railwayteam.railways.content.buffer.IMaterialAdaptingBuffer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HeadstockBlockEntity extends $DyeableBlockEntity implements $IMaterialAdaptingBuffer$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "applyMaterialIfValid"(arg0: $ItemStack$$Type): $InteractionResult
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getMaterial"(): $BlockState
get "material"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadstockBlockEntity$$Type = ($HeadstockBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeadstockBlockEntity$$Original = $HeadstockBlockEntity;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.medium.MediumQuadrupleWheelBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MediumQuadrupleWheelBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MediumQuadrupleWheelBogeyBlock$$Type = ($MediumQuadrupleWheelBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MediumQuadrupleWheelBogeyBlock$$Original = $MediumQuadrupleWheelBogeyBlock;}
declare module "com.railwayteam.railways.content.smokestack.ISpeedNotifiable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISpeedNotifiable$$Interface {

(arg0: double): void
}

export class $ISpeedNotifiable implements $ISpeedNotifiable$$Interface {
 "notifySpeed"(arg0: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpeedNotifiable$$Type = ((arg0: double) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpeedNotifiable$$Original = $ISpeedNotifiable;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.medium.Medium404TrailingBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $Medium404TrailingBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Medium404TrailingBogeyBlock$$Type = ($Medium404TrailingBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Medium404TrailingBogeyBlock$$Original = $Medium404TrailingBogeyBlock;}
declare module "com.railwayteam.railways.content.smokestack.block.FacingSmokeStackBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SmokestackStyle} from "com.railwayteam.railways.content.smokestack.SmokestackStyle"
import {$ShapeWrapper$$Type} from "com.railwayteam.railways.util.ShapeWrapper"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SmokeStackBlock} from "com.railwayteam.railways.content.smokestack.block.SmokeStackBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$SmokeStackBlock$SmokeStackType, $SmokeStackBlock$SmokeStackType$$Type} from "com.railwayteam.railways.content.smokestack.block.SmokeStackBlock$SmokeStackType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FacingSmokeStackBlock extends $SmokeStackBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "type": $SmokeStackBlock$SmokeStackType
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($SmokestackStyle)>
 "createsStationarySmoke": boolean
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "ENABLED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $SmokeStackBlock$SmokeStackType$$Type, arg2: $ShapeWrapper$$Type, arg3: boolean, arg4: StringJS)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacingSmokeStackBlock$$Type = ($FacingSmokeStackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FacingSmokeStackBlock$$Original = $FacingSmokeStackBlock;}
declare module "com.railwayteam.railways.content.conductor.remote_lens.RemoteLensItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $RemoteLensItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoteLensItem$$Type = ($RemoteLensItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RemoteLensItem$$Original = $RemoteLensItem;}
declare module "com.railwayteam.railways.content.buffer.headstock.CopycatHeadstockBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$HeadstockStyle} from "com.railwayteam.railways.content.buffer.headstock.HeadstockStyle"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CopycatBlockEntity} from "com.simibubi.create.content.decoration.copycat.CopycatBlockEntity"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$WaterloggedCopycatBlock} from "com.simibubi.create.content.decoration.copycat.WaterloggedCopycatBlock"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockStateBlockItemGroup$GroupedBlock$$Interface} from "com.railwayteam.railways.content.buffer.BlockStateBlockItemGroup$GroupedBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$ItemColor} from "net.minecraft.client.color.item.ItemColor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatHeadstockBlock extends $WaterloggedCopycatBlock implements $BlockStateBlockItemGroup$GroupedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPSIDE_DOWN": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($HeadstockStyle)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "canFaceBeOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "isIgnoredConnectivitySide"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type): boolean
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "shouldFaceAlwaysRender"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "isAcceptedRegardless"(arg0: $BlockState$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<($CopycatBlockEntity)>
public static "wrappedItemColor"(): $ItemColor
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHeadstockBlock$$Type = ($CopycatHeadstockBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatHeadstockBlock$$Original = $CopycatHeadstockBlock;}
declare module "com.railwayteam.railways.content.fuel.tank.FuelTankMountedStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Contraption$$Type} from "com.simibubi.create.content.contraptions.Contraption"
import {$MountedFluidStorageType} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageType"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$MountedFluidStorage} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorage"
import {$FuelTankBlockEntity$$Type} from "com.railwayteam.railways.content.fuel.tank.FuelTankBlockEntity"
import {$WrapperMountedFluidStorage} from "com.simibubi.create.api.contraption.storage.fluid.WrapperMountedFluidStorage"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SyncedMountedStorage$$Interface} from "com.simibubi.create.api.contraption.storage.SyncedMountedStorage"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$FuelTankMountedStorage$Handler} from "com.railwayteam.railways.content.fuel.tank.FuelTankMountedStorage$Handler"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FuelTankMountedStorage extends $WrapperMountedFluidStorage<($FuelTankMountedStorage$Handler)> implements $SyncedMountedStorage$$Interface {
static readonly "CODEC": $MapCodec<($FuelTankMountedStorage)>
readonly "type": $MountedFluidStorageType<($MountedFluidStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedFluidStorage)>

public "getFluid"(): $FluidStack
public static "fromLegacy"(arg0: $CompoundTag$$Type): $FuelTankMountedStorage
public "markClean"(): void
public "afterSync"(arg0: $Contraption$$Type, arg1: $BlockPos$$Type): void
public static "fromTank"(arg0: $FuelTankBlockEntity$$Type): $FuelTankMountedStorage
public "getCapacity"(): integer
public "isDirty"(): boolean
public "unmount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): void
get "fluid"(): $FluidStack
get "capacity"(): integer
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelTankMountedStorage$$Type = ($FuelTankMountedStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelTankMountedStorage$$Original = $FuelTankMountedStorage;}
declare module "com.railwayteam.railways.content.buffer.NarrowTrackBufferBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$WoodVariantTrackBufferBlock} from "com.railwayteam.railways.content.buffer.WoodVariantTrackBufferBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$NarrowTrackBufferBlock$Style} from "com.railwayteam.railways.content.buffer.NarrowTrackBufferBlock$Style"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NarrowTrackBufferBlock extends $WoodVariantTrackBufferBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($NarrowTrackBufferBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($NarrowTrackBufferBlock$Style)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "DIAGONAL": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrowTrackBufferBlock$$Type = ($NarrowTrackBufferBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrowTrackBufferBlock$$Original = $NarrowTrackBufferBlock;}
declare module "com.railwayteam.railways.content.handcar.HandcarItem" {
import {$TrackGraphLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackGraphLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$BezierTrackPointLocation$$Type} from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackTargetingBlockItem$OverlapResult$$Type} from "com.simibubi.create.content.trains.track.TrackTargetingBlockItem$OverlapResult"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$IDeployAnywayBlockItem$$Interface} from "com.railwayteam.railways.mixin_interfaces.IDeployAnywayBlockItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$TrackBlockOutline$BezierPointSelection$$Type} from "com.simibubi.create.content.trains.track.TrackBlockOutline$BezierPointSelection"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $HandcarItem extends $BlockItem implements $IDeployAnywayBlockItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "useOnCurve"(arg0: $TrackBlockOutline$BezierPointSelection$$Type, arg1: $ItemStack$$Type): boolean
public static "withGraphLocation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean, arg3: $BezierTrackPointLocation$$Type, arg4: $BiConsumer$$Type<($TrackTargetingBlockItem$OverlapResult), ($TrackGraphLocation)>): void
public "placeHandcar"(arg0: $TrackGraphLocation$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandcarItem$$Type = ($HandcarItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HandcarItem$$Original = $HandcarItem;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.large.LargeCreateStyle0100BogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$LargeBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.size.LargeBogeyBlock"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LargeCreateStyle0100BogeyBlock extends $LargeBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCreateStyle0100BogeyBlock$$Type = ($LargeCreateStyle0100BogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LargeCreateStyle0100BogeyBlock$$Original = $LargeCreateStyle0100BogeyBlock;}
declare module "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$ClientInfo" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$TrackCouplerBlockEntity$OperationMode} from "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$OperationMode"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $TrackCouplerBlockEntity$ClientInfo {
 "mode": $TrackCouplerBlockEntity$OperationMode
 "trainName1": StringJS
 "trainName2": StringJS
static readonly "FALLBACK": $TrackCouplerBlockEntity$ClientInfo
 "edgePointsOk": boolean
 "error": $MutableComponent
 "error2": $MutableComponent

constructor(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type)

public "write"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockEntity$ClientInfo$$Type = ($TrackCouplerBlockEntity$ClientInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackCouplerBlockEntity$ClientInfo$$Original = $TrackCouplerBlockEntity$ClientInfo;}
declare module "com.railwayteam.railways.content.custom_bogeys.special.invisible.InvisibleBogeyBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BogeyStyle} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$AbstractBogeyBlockEntity} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $InvisibleBogeyBlockEntity extends $AbstractBogeyBlockEntity {
static readonly "BOGEY_STYLE_KEY": StringJS
static readonly "BOGEY_DATA_KEY": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getDefaultStyle"(): $BogeyStyle
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibleBogeyBlockEntity$$Type = ($InvisibleBogeyBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InvisibleBogeyBlockEntity$$Original = $InvisibleBogeyBlockEntity;}
declare module "com.railwayteam.railways.content.handcar.HandcarBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $HandcarBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelRadius"(): double
public "getConnectorAnchorOffset"(): $Vec3
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelRadius"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandcarBlock$$Type = ($HandcarBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HandcarBlock$$Original = $HandcarBlock;}
declare module "com.railwayteam.railways.content.semaphore.SemaphoreItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $SemaphoreItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemaphoreItem$$Type = ($SemaphoreItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SemaphoreItem$$Original = $SemaphoreItem;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.base.be.CRBogeyBlockEntity" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BogeyStyle} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$List$$Type} from "java.util.List"
import {$AbstractBogeyBlockEntity} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlockEntity"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CRBogeyBlockEntity extends $AbstractBogeyBlockEntity implements $IHaveGoggleInformation$$Interface {
static readonly "BOGEY_STYLE_KEY": StringJS
static readonly "BOGEY_DATA_KEY": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getDefaultStyle"(): $BogeyStyle
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CRBogeyBlockEntity$$Type = ($CRBogeyBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CRBogeyBlockEntity$$Original = $CRBogeyBlockEntity;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.base.size.LargeBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LargeBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

public "getWheelRadius"(): double
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelRadius"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeBogeyBlock$$Type = ($LargeBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LargeBogeyBlock$$Original = $LargeBogeyBlock;}
declare module "com.railwayteam.railways.content.conductor.vent.VentBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CopycatBlock} from "com.simibubi.create.content.decoration.copycat.CopycatBlock"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $VentBlock extends $CopycatBlock implements $IWrenchable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "OUTLINE_SHAPE": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "CONDUCTOR_VISIBLE": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "canFaceBeOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "teleportConductor"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type, arg3: $Direction$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "create"(arg0: $BlockBehaviour$Properties$$Type): $VentBlock
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VentBlock$$Type = ($VentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VentBlock$$Original = $VentBlock;}
declare module "com.railwayteam.railways.content.coupling.TrackCouplerDisplaySource" {
import {$DisplaySource} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$FlapDisplayBlockEntity$$Type} from "com.simibubi.create.content.trains.display.FlapDisplayBlockEntity"
import {$DisplayTargetStats$$Type} from "com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List} from "java.util.List"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$FlapDisplayLayout$$Type} from "com.simibubi.create.content.trains.display.FlapDisplayLayout"
import {$SimpleRegistry$Multi} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $TrackCouplerDisplaySource extends $DisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(never)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

public "provideText"(arg0: $DisplayLinkContext$$Type, arg1: $DisplayTargetStats$$Type): $List<($MutableComponent)>
public "loadFlapDisplayLayout"(arg0: $DisplayLinkContext$$Type, arg1: $FlapDisplayBlockEntity$$Type, arg2: $FlapDisplayLayout$$Type): void
public "getPassiveRefreshTicks"(): integer
get "passiveRefreshTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerDisplaySource$$Type = ($TrackCouplerDisplaySource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackCouplerDisplaySource$$Original = $TrackCouplerDisplaySource;}
declare module "com.railwayteam.railways.content.smokestack.SmokestackStyle" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockStateBlockItemGroup$IStyle$$Interface} from "com.railwayteam.railways.content.buffer.BlockStateBlockItemGroup$IStyle"
import {$Couple, $Couple$$Type} from "net.createmod.catnip.data.Couple"

export class $SmokestackStyle extends $Enum<($SmokestackStyle)> implements $StringRepresentable$$Interface, $BlockStateBlockItemGroup$IStyle$$Interface<($Couple<(StringJS)>)> {
static readonly "STEEL": $SmokestackStyle
static readonly "BRASS": $SmokestackStyle
static readonly "COPPER_CAP_BRASS": $SmokestackStyle
static readonly "COPPER": $SmokestackStyle
static readonly "BRASS_CAP_COPPER": $SmokestackStyle
static readonly "COPPER_CAP_STEEL": $SmokestackStyle
static readonly "BRASS_CAP_STEEL": $SmokestackStyle

public static "variantToTagKey"(arg0: StringJS): $TagKey<($Item)>
public "getLangName"(arg0: $Couple$$Type<(StringJS)>): StringJS
public "getLangName"(arg0: any): StringJS
public static "values"(): ($SmokestackStyle)[]
public static "valueOf"(arg0: StringJS): $SmokestackStyle
public "getTexture"(arg0: StringJS): $ResourceLocation
public "getModel"(arg0: $Couple$$Type<(StringJS)>): $ResourceLocation
public "getModel"(arg0: any): $ResourceLocation
public "getSerializedName"(): StringJS
public "getBlockId"(arg0: $Couple$$Type<(StringJS)>): StringJS
public "getBlockId"(): StringJS
public "getBlockId"(arg0: any): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "blockId"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokestackStyle$$Type = (("steel") | ("brass_cap_steel") | ("copper_cap_steel") | ("brass") | ("copper_cap_brass") | ("copper") | ("brass_cap_copper"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmokestackStyle$$Original = $SmokestackStyle;}
declare module "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchState" {
import {$TravellingPoint$SteerDirection$$Type} from "com.simibubi.create.content.trains.entity.TravellingPoint$SteerDirection"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$TrackSwitch$$Type} from "com.railwayteam.railways.content.switches.TrackSwitch"
import {$TrackSwitchBlock$SwitchConstraint$$Type} from "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchConstraint"

export class $TrackSwitchBlock$SwitchState extends $Enum<($TrackSwitchBlock$SwitchState)> implements $StringRepresentable$$Interface {
static readonly "REVERSE_RIGHT": $TrackSwitchBlock$SwitchState
static readonly "NORMAL": $TrackSwitchBlock$SwitchState
static readonly "REVERSE_LEFT": $TrackSwitchBlock$SwitchState

public "canSwitchTo"(arg0: $TrackSwitchBlock$SwitchState$$Type, arg1: $TrackSwitchBlock$SwitchConstraint$$Type): boolean
public static "fromSteerDirection"(arg0: $TravellingPoint$SteerDirection$$Type, arg1: boolean): $TrackSwitchBlock$SwitchState
public "nextStateFor"(arg0: $TrackSwitch$$Type, arg1: $TrackSwitchBlock$SwitchConstraint$$Type): $TrackSwitchBlock$SwitchState
public "nextStateForPonder"(arg0: $TrackSwitchBlock$SwitchConstraint$$Type): $TrackSwitchBlock$SwitchState
public static "values"(): ($TrackSwitchBlock$SwitchState)[]
public static "valueOf"(arg0: StringJS): $TrackSwitchBlock$SwitchState
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlock$SwitchState$$Type = (("normal") | ("reverse_left") | ("reverse_right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackSwitchBlock$SwitchState$$Original = $TrackSwitchBlock$SwitchState;}
declare module "com.railwayteam.railways.content.switches.TrackSwitchBlockEntity$PonderData" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Record} from "java.lang.Record"

export class $TrackSwitchBlockEntity$PonderData extends $Record {
constructor(basePos: $Vec3$$Type, leftBranch: $Vec3$$Type, straightBranch: $Vec3$$Type, rightBranch: $Vec3$$Type)

public "leftBranch"(): $Vec3
public "straightBranch"(): $Vec3
public "rightBranch"(): $Vec3
public "basePos"(): $Vec3
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlockEntity$PonderData$$Type = ({"rightBranch"?: $Vec3$$Type, "leftBranch"?: $Vec3$$Type, "basePos"?: $Vec3$$Type, "straightBranch"?: $Vec3$$Type}) | ([rightBranch?: $Vec3$$Type, leftBranch?: $Vec3$$Type, basePos?: $Vec3$$Type, straightBranch?: $Vec3$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackSwitchBlockEntity$PonderData$$Original = $TrackSwitchBlockEntity$PonderData;}
declare module "com.railwayteam.railways.content.palettes.smokebox.PalettesSmokeboxBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PalettesSmokeboxBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $EnumProperty<($Direction)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PalettesSmokeboxBlock$$Type = ($PalettesSmokeboxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PalettesSmokeboxBlock$$Original = $PalettesSmokeboxBlock;}
declare module "com.railwayteam.railways.content.custom_tracks.generic_crossing.GenericCrossingBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$TrackTargetingBehaviour$RenderedTrackOverlayType$$Type} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour$RenderedTrackOverlayType"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$GenericCrossingBlockEntity, $GenericCrossingBlockEntity$$Type} from "com.railwayteam.railways.content.custom_tracks.generic_crossing.GenericCrossingBlockEntity"
import {$TrackShape} from "com.simibubi.create.content.trains.track.TrackShape"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$ITrackBlock$$Interface} from "com.simibubi.create.content.trains.track.ITrackBlock"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Affine, $Affine$$Type} from "dev.engine_room.flywheel.lib.transform.Affine"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$Direction$AxisDirection, $Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BezierTrackPointLocation$$Type} from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import {$PartialModel} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $GenericCrossingBlock extends $Block implements $IBE$$Interface<($GenericCrossingBlockEntity)>, $ITrackBlock$$Interface, $IWrenchable$$Interface, $SpecialBlockItemRequirement$$Interface, $ProperWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getUpNormal"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $Vec3
public "getCurveStart"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): $Vec3
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public "getBlockEntityType"(): $BlockEntityType<($GenericCrossingBlockEntity)>
public "getBogeyAnchor"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockState
public "getConnected"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean, arg4: $TrackNodeLocation$$Type): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public "getTrackAxes"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($Vec3)>
public "prepareAssemblyOverlay"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type, arg4: $PoseStack$$Type): $PartialModel
public "prepareTrackOverlay"<Self extends $Affine<(object)>>(arg0: $Affine$$Type<(Self)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BezierTrackPointLocation$$Type, arg5: $Direction$AxisDirection$$Type, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type): $PartialModel
public "trackEquals"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($GenericCrossingBlockEntity)>
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getMaterial"(): $TrackMaterial
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($GenericCrossingBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($GenericCrossingBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($GenericCrossingBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($GenericCrossingBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $GenericCrossingBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getNearestTrackAxis"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): $Pair<($Vec3), ($Direction$AxisDirection)>
public "getYOffsetAt"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): integer
public "getElevationAtCenter"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): double
public static "addToListIfConnected"(arg0: $TrackNodeLocation$$Type, arg1: $Collection$$Type<($TrackNodeLocation$DiscoveredLocation$$Type)>, arg2: $BiFunction$$Type<(double), (boolean), ($Vec3$$Type)>, arg3: $Function$$Type<(boolean), ($Vec3$$Type)>, arg4: $Function$$Type<(boolean), ($ResourceKey$$Type<($Level$$Type)>)>, arg5: $Function$$Type<($Vec3), (integer)>, arg6: $Vec3$$Type, arg7: $BezierConnection$$Type, arg8: $BiFunction$$Type<(boolean), ($Vec3), ($TrackMaterial$$Type)>): void
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type, arg2: $TrackMaterial$$Type): $TrackMaterial
public "isSlope"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public static "walkConnectedTracks"(arg0: $BlockGetter$$Type, arg1: $TrackNodeLocation$$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public "overlay"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($GenericCrossingBlockEntity)>
get "blockEntityClass"(): $Class<($GenericCrossingBlockEntity)>
get "material"(): $TrackMaterial
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericCrossingBlock$$Type = ($GenericCrossingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericCrossingBlock$$Original = $GenericCrossingBlock;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.wide.WideGaugeBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$NonNullFunction} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TrackMaterial$TrackType} from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BogeyStyle$$Type} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $WideGaugeBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

public "getTrackType"(arg0: $BogeyStyle$$Type): $TrackMaterial$TrackType
public "getWheelRadius"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "create"(arg0: boolean): $NonNullFunction<($BlockBehaviour$Properties), ($WideGaugeBogeyBlock)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelRadius"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideGaugeBogeyBlock$$Type = ($WideGaugeBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WideGaugeBogeyBlock$$Original = $WideGaugeBogeyBlock;}
declare module "com.railwayteam.railways.content.conductor.whistle.ConductorWhistleFlagBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ConductorWhistleFlagBlockEntity, $ConductorWhistleFlagBlockEntity$$Type} from "com.railwayteam.railways.content.conductor.whistle.ConductorWhistleFlagBlockEntity"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ConductorWhistleFlagBlock extends $Block implements $IBE$$Interface<($ConductorWhistleFlagBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "COLOR": $EnumProperty<($DyeColor)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<($ConductorWhistleFlagBlockEntity)>
public "getBlockEntityClass"(): $Class<($ConductorWhistleFlagBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($ConductorWhistleFlagBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($ConductorWhistleFlagBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ConductorWhistleFlagBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ConductorWhistleFlagBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ConductorWhistleFlagBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($ConductorWhistleFlagBlockEntity)>
get "blockEntityClass"(): $Class<($ConductorWhistleFlagBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConductorWhistleFlagBlock$$Type = ($ConductorWhistleFlagBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConductorWhistleFlagBlock$$Original = $ConductorWhistleFlagBlock;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.large.LargeCreateStyle040BogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$LargeBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.size.LargeBogeyBlock"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LargeCreateStyle040BogeyBlock extends $LargeBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCreateStyle040BogeyBlock$$Type = ($LargeCreateStyle040BogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LargeCreateStyle040BogeyBlock$$Original = $LargeCreateStyle040BogeyBlock;}
declare module "com.railwayteam.railways.content.fuel.psi.PortableFuelInterfaceBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WrenchableDirectionalBlock} from "com.simibubi.create.foundation.block.WrenchableDirectionalBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$PortableFuelInterfaceBlockEntity, $PortableFuelInterfaceBlockEntity$$Type} from "com.railwayteam.railways.content.fuel.psi.PortableFuelInterfaceBlockEntity"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PortableFuelInterfaceBlock extends $WrenchableDirectionalBlock implements $IBE$$Interface<($PortableFuelInterfaceBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WrenchableDirectionalBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getBlockEntityType"(): $BlockEntityType<($PortableFuelInterfaceBlockEntity)>
public "getBlockEntityClass"(): $Class<($PortableFuelInterfaceBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($PortableFuelInterfaceBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($PortableFuelInterfaceBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($PortableFuelInterfaceBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($PortableFuelInterfaceBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $PortableFuelInterfaceBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($PortableFuelInterfaceBlockEntity)>
get "blockEntityClass"(): $Class<($PortableFuelInterfaceBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableFuelInterfaceBlock$$Type = ($PortableFuelInterfaceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortableFuelInterfaceBlock$$Original = $PortableFuelInterfaceBlock;}
declare module "com.railwayteam.railways.content.switches.TrackSwitch" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID} from "java.util.UUID"
import {$TrackSwitchBlock$SwitchState, $TrackSwitchBlock$SwitchState$$Type} from "com.railwayteam.railways.content.switches.TrackSwitchBlock$SwitchState"
import {$Level} from "net.minecraft.world.level.Level"
import {$EdgePointType, $EdgePointType$$Type} from "com.simibubi.create.content.trains.graph.EdgePointType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SingleBlockEntityEdgePoint} from "com.simibubi.create.content.trains.signal.SingleBlockEntityEdgePoint"
import {$TrackNodeLocation, $TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$DimensionPalette$$Type} from "com.simibubi.create.content.trains.graph.DimensionPalette"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $TrackSwitch extends $SingleBlockEntityEdgePoint {
 "edgeLocation": $Couple<($TrackNodeLocation)>
 "blockEntityPos": $BlockPos
 "blockEntityDimension": $ResourceKey<($Level)>
 "id": $UUID
 "position": double

constructor()

public static "getSelectionPriority"(): integer
public "onRemoved"(arg0: $TrackGraph$$Type): void
public "trySetSwitchState"(arg0: $TrackSwitchBlock$SwitchState$$Type): boolean
public "getSwitchState"(): $TrackSwitchBlock$SwitchState
public "canCoexistWith"(arg0: $EdgePointType$$Type<(never)>, arg1: boolean): boolean
public "blockEntityAdded"(arg0: $BlockEntity$$Type, arg1: boolean): void
public "hasStraightExit"(): boolean
public "hasRightExit"(): boolean
public "hasLeftExit"(): boolean
public "setSwitchState"(arg0: $TrackSwitchBlock$SwitchState$$Type): boolean
public "getSwitchTarget"(): $TrackNodeLocation
public "shouldAutoTrainsSwitch"(): boolean
public "getTargetState"(arg0: $TrackNodeLocation$$Type): $TrackSwitchBlock$SwitchState
public "setEdgesActive"(arg0: $TrackGraph$$Type): void
public "updateEdges"(arg0: $TrackGraph$$Type): void
public "tick"(arg0: $TrackGraph$$Type, arg1: boolean): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $DimensionPalette$$Type): void
public "write"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public "read"(arg0: $FriendlyByteBuf$$Type, arg1: $DimensionPalette$$Type): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean, arg3: $DimensionPalette$$Type): void
public "isAutomatic"(): boolean
public "getType"(): $EdgePointType<(never)>
public "isLocked"(): boolean
public static get "selectionPriority"(): integer
get "switchState"(): $TrackSwitchBlock$SwitchState
set "switchState"(value: $TrackSwitchBlock$SwitchState$$Type)
get "switchTarget"(): $TrackNodeLocation
set "edgesActive"(value: $TrackGraph$$Type)
get "automatic"(): boolean
get "type"(): $EdgePointType<(never)>
get "locked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitch$$Type = ($TrackSwitch);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackSwitch$$Original = $TrackSwitch;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.wide.WideGaugeComicallyLargeBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$WideGaugeBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.wide.WideGaugeBogeyBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WideGaugeComicallyLargeBogeyBlock extends $WideGaugeBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelRadius"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelRadius"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideGaugeComicallyLargeBogeyBlock$$Type = ($WideGaugeComicallyLargeBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WideGaugeComicallyLargeBogeyBlock$$Original = $WideGaugeComicallyLargeBogeyBlock;}
declare module "com.railwayteam.railways.content.buffer.MonoTrackBufferBlock" {
import {$MonoTrackBufferBlock$Style} from "com.railwayteam.railways.content.buffer.MonoTrackBufferBlock$Style"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$WoodVariantTrackBufferBlock} from "com.railwayteam.railways.content.buffer.WoodVariantTrackBufferBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MonoTrackBufferBlock extends $WoodVariantTrackBufferBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($MonoTrackBufferBlock)>
static readonly "UPSIDE_DOWN": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($MonoTrackBufferBlock$Style)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "DIAGONAL": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonoTrackBufferBlock$$Type = ($MonoTrackBufferBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MonoTrackBufferBlock$$Original = $MonoTrackBufferBlock;}
declare module "com.railwayteam.railways.content.buffer.StandardTrackBufferBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$StandardTrackBufferBlock$Style} from "com.railwayteam.railways.content.buffer.StandardTrackBufferBlock$Style"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$WoodVariantTrackBufferBlock} from "com.railwayteam.railways.content.buffer.WoodVariantTrackBufferBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StandardTrackBufferBlock extends $WoodVariantTrackBufferBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StandardTrackBufferBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($StandardTrackBufferBlock$Style)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "DIAGONAL": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandardTrackBufferBlock$$Type = ($StandardTrackBufferBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StandardTrackBufferBlock$$Original = $StandardTrackBufferBlock;}
declare module "com.railwayteam.railways.content.fuel.tank.FuelTankBlock$Shape" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FuelTankBlock$Shape extends $Enum<($FuelTankBlock$Shape)> implements $StringRepresentable$$Interface {
static readonly "PLAIN": $FuelTankBlock$Shape
static readonly "WINDOW_NW": $FuelTankBlock$Shape
static readonly "WINDOW_SE": $FuelTankBlock$Shape
static readonly "WINDOW_SW": $FuelTankBlock$Shape
static readonly "WINDOW": $FuelTankBlock$Shape
static readonly "WINDOW_NE": $FuelTankBlock$Shape

public static "values"(): ($FuelTankBlock$Shape)[]
public static "valueOf"(arg0: StringJS): $FuelTankBlock$Shape
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelTankBlock$Shape$$Type = (("plain") | ("window") | ("window_nw") | ("window_sw") | ("window_ne") | ("window_se"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelTankBlock$Shape$$Original = $FuelTankBlock$Shape;}
declare module "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$OperationMode" {
import {$Enum} from "java.lang.Enum"
import {$TrackCouplerBlockEntity$AllowedOperationMode$$Type} from "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$AllowedOperationMode"

export class $TrackCouplerBlockEntity$OperationMode extends $Enum<($TrackCouplerBlockEntity$OperationMode)> {
static readonly "DECOUPLING": $TrackCouplerBlockEntity$OperationMode
static readonly "NONE": $TrackCouplerBlockEntity$OperationMode
static readonly "COUPLING": $TrackCouplerBlockEntity$OperationMode

public "permitted"(arg0: $TrackCouplerBlockEntity$AllowedOperationMode$$Type): boolean
public static "values"(): ($TrackCouplerBlockEntity$OperationMode)[]
public static "valueOf"(arg0: StringJS): $TrackCouplerBlockEntity$OperationMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockEntity$OperationMode$$Type = (("none") | ("coupling") | ("decoupling"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackCouplerBlockEntity$OperationMode$$Original = $TrackCouplerBlockEntity$OperationMode;}
declare module "com.railwayteam.railways.content.buffer.IDyedBuffer" {
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export interface $IDyedBuffer$$Interface {

(): $DyeColor$$Type
get "color"(): $DyeColor
}

export class $IDyedBuffer implements $IDyedBuffer$$Interface {
 "getColor"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDyedBuffer$$Type = (() => $DyeColor$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDyedBuffer$$Original = $IDyedBuffer;}
declare module "com.railwayteam.railways.content.coupling.coupler.neoforge.TrackCouplerBlockImpl" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackCouplerBlock} from "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlock"
import {$TrackCouplerBlockEntity$AllowedOperationMode} from "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$AllowedOperationMode"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrackCouplerBlockImpl extends $TrackCouplerBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MODE": $EnumProperty<($TrackCouplerBlockEntity$AllowedOperationMode)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public static "create"(arg0: $BlockBehaviour$Properties$$Type): $TrackCouplerBlock
public "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockImpl$$Type = ($TrackCouplerBlockImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackCouplerBlockImpl$$Original = $TrackCouplerBlockImpl;}
declare module "com.railwayteam.railways.content.distant_signals.IOverridableSignal" {
import {$Optional} from "java.util.Optional"
import {$SignalBlockEntity$SignalState, $SignalBlockEntity$SignalState$$Type} from "com.simibubi.create.content.trains.signal.SignalBlockEntity$SignalState"
import {$SignalBlockEntity$$Type} from "com.simibubi.create.content.trains.signal.SignalBlockEntity"

export interface $IOverridableSignal$$Interface {
}

export class $IOverridableSignal implements $IOverridableSignal$$Interface {
 "railways$getOverriddenState"(): $Optional<($SignalBlockEntity$SignalState)>
 "railways$refresh"(arg0: $SignalBlockEntity$$Type, arg1: $SignalBlockEntity$SignalState$$Type, arg2: integer, arg3: boolean): void
 "railways$refresh"(arg0: $SignalBlockEntity$$Type, arg1: $SignalBlockEntity$SignalState$$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOverridableSignal$$Type = ($IOverridableSignal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOverridableSignal$$Original = $IOverridableSignal;}
declare module "com.railwayteam.railways.content.smokestack.block.DieselSmokeStackBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DieselSmokeStackBlockEntity} from "com.railwayteam.railways.content.smokestack.block.be.DieselSmokeStackBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SmokestackStyle} from "com.railwayteam.railways.content.smokestack.SmokestackStyle"
import {$ShapeWrapper$$Type} from "com.railwayteam.railways.util.ShapeWrapper"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AbstractSmokeStackBlock} from "com.railwayteam.railways.content.smokestack.block.AbstractSmokeStackBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $DieselSmokeStackBlock extends $AbstractSmokeStackBlock<($DieselSmokeStackBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($SmokestackStyle)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "ENABLED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $ShapeWrapper$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<($DieselSmokeStackBlockEntity)>
public "getBlockEntityClass"(): $Class<($DieselSmokeStackBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($DieselSmokeStackBlockEntity)>
get "blockEntityClass"(): $Class<($DieselSmokeStackBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DieselSmokeStackBlock$$Type = ($DieselSmokeStackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DieselSmokeStackBlock$$Original = $DieselSmokeStackBlock;}
declare module "com.railwayteam.railways.content.smokestack.block.SmokeStackBlock$SmokeStackType" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"

export class $SmokeStackBlock$SmokeStackType {
 "particleSpawnOffset": $Vec3
 "maxParticles": integer
 "particleSpawnChance": double
 "particleSpawnDelta": $Vec3
 "minParticles": integer

constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: integer, arg3: integer, arg4: double)
constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: integer, arg3: integer)
constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type)
constructor(arg0: $Vec3$$Type)

public "getParticleSpawnOffset"(): $Vec3
public "getParticleSpawnDelta"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokeStackBlock$SmokeStackType$$Type = ($SmokeStackBlock$SmokeStackType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmokeStackBlock$SmokeStackType$$Original = $SmokeStackBlock$SmokeStackType;}
declare module "com.railwayteam.railways.content.buffer.TrackBufferBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$TrackBufferBlockEntity} from "com.railwayteam.railways.content.buffer.TrackBufferBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TrackBufferBlock<BE extends $TrackBufferBlockEntity> extends $HorizontalDirectionalBlock implements $IBE$$Interface<(BE)>, $IWrenchable$$Interface, $ProperWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "DIAGONAL": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getBlockEntityType"(): $BlockEntityType<(BE)>
public static "getBaseModelYRotationOf"(arg0: $BlockState$$Type, arg1: integer): integer
public static "getBaseModelYRotationOf"(arg0: $Direction$$Type): integer
public static "getBaseModelYRotationOf"(arg0: $Direction$$Type, arg1: integer): integer
public static "getBaseModelYRotationOf"(arg0: $BlockState$$Type): integer
public "getBlockEntityClass"(): $Class<(BE)>
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(BE)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<(BE)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(BE), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(BE), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): BE
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<(BE)>
get "blockEntityClass"(): $Class<(BE)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackBufferBlock$$Type<BE> = ($TrackBufferBlock<(BE)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackBufferBlock$$Original<BE> = $TrackBufferBlock<(BE)>;}
declare module "com.railwayteam.railways.content.buffer.TrackBufferBlockEntity" {
import {$DyeableBlockEntity} from "com.railwayteam.railways.content.buffer.DyeableBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackTargetingBehaviour} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$TrackBuffer} from "com.railwayteam.railways.content.buffer.TrackBuffer"
import {$TransformableBlockEntity$$Interface} from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrackBufferBlockEntity extends $DyeableBlockEntity implements $TransformableBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "edgePoint": $TrackTargetingBehaviour<($TrackBuffer)>

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "transform"(arg0: $BlockEntity$$Type, arg1: $StructureTransform$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackBufferBlockEntity$$Type = ($TrackBufferBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackBufferBlockEntity$$Original = $TrackBufferBlockEntity;}
declare module "com.railwayteam.railways.content.buffer.BlockStateBlockItemGroup$GroupedBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockStateBlockItemGroup$GroupedBlock$$Interface {
}

export class $BlockStateBlockItemGroup$GroupedBlock implements $BlockStateBlockItemGroup$GroupedBlock$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateBlockItemGroup$GroupedBlock$$Type = ($BlockStateBlockItemGroup$GroupedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateBlockItemGroup$GroupedBlock$$Original = $BlockStateBlockItemGroup$GroupedBlock;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.TripleAxleBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TripleAxleBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TripleAxleBogeyBlock$$Type = ($TripleAxleBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TripleAxleBogeyBlock$$Original = $TripleAxleBogeyBlock;}
declare module "com.railwayteam.railways.content.buffer.single_deco.LinkPinBlock$Style" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BlockStateBlockItemGroup$IStyle$$Interface} from "com.railwayteam.railways.content.buffer.BlockStateBlockItemGroup$IStyle"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $LinkPinBlock$Style extends $Enum<($LinkPinBlock$Style)> implements $StringRepresentable$$Interface, $BlockStateBlockItemGroup$IStyle$$Interface<(void)> {
static readonly "SCREWLINK": $LinkPinBlock$Style
static readonly "LINK": $LinkPinBlock$Style
static readonly "KNUCKLE": $LinkPinBlock$Style
static readonly "KNUCKLE_SPLIT": $LinkPinBlock$Style
static readonly "LINKLESS": $LinkPinBlock$Style

public "getLangName"(arg0: void): StringJS
public "getLangName"(arg0: any): StringJS
public static "values"(): ($LinkPinBlock$Style)[]
public static "valueOf"(arg0: StringJS): $LinkPinBlock$Style
public "getModel"(arg0: any): $ResourceLocation
public "getModel"(arg0: void): $ResourceLocation
public "getModel"(): $ResourceLocation
public "getSerializedName"(): StringJS
public "getBlockId"(arg0: any): StringJS
public "getBlockId"(arg0: void): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "model"(): $ResourceLocation
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkPinBlock$Style$$Type = (("link") | ("linkless") | ("knuckle") | ("knuckle_split") | ("screwlink"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkPinBlock$Style$$Original = $LinkPinBlock$Style;}
declare module "com.railwayteam.railways.content.semaphore.SemaphoreBlockEntity" {
import {$IOverridableSignal$$Interface} from "com.railwayteam.railways.content.distant_signals.IOverridableSignal"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$LerpedFloat} from "net.createmod.catnip.animation.LerpedFloat"
import {$Optional} from "java.util.Optional"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$SignalBlockEntity$SignalState, $SignalBlockEntity$SignalState$$Type} from "com.simibubi.create.content.trains.signal.SignalBlockEntity$SignalState"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$SignalBlockEntity$$Type} from "com.simibubi.create.content.trains.signal.SignalBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SemaphoreBlockEntity extends $SmartBlockEntity implements $IOverridableSignal$$Interface {
 "isDistantSignal": boolean
 "isValid": boolean
readonly "armPosition": $LerpedFloat
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "signalState": $SignalBlockEntity$SignalState

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "lazyTick"(): void
public "railways$getOverriddenState"(): $Optional<($SignalBlockEntity$SignalState)>
public "railways$refresh"(arg0: $SignalBlockEntity$$Type, arg1: $SignalBlockEntity$SignalState$$Type, arg2: integer, arg3: boolean): void
public "wasCachedSearchingUpsideDown"(): boolean
public "tick"(): void
public "railways$refresh"(arg0: $SignalBlockEntity$$Type, arg1: $SignalBlockEntity$SignalState$$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemaphoreBlockEntity$$Type = ($SemaphoreBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SemaphoreBlockEntity$$Original = $SemaphoreBlockEntity;}
declare module "com.railwayteam.railways.content.extended_sliding_doors.SlidingDoorMode" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Enum} from "java.lang.Enum"
import {$INamedIconOptions$$Interface} from "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.INamedIconOptions"
import {$AllIcons} from "com.simibubi.create.foundation.gui.AllIcons"

export class $SlidingDoorMode extends $Enum<($SlidingDoorMode)> implements $INamedIconOptions$$Interface {
static readonly "SPECIAL_INVERTED": $SlidingDoorMode
static readonly "MANUAL": $SlidingDoorMode
static readonly "SPECIAL": $SlidingDoorMode
static readonly "NORMAL": $SlidingDoorMode

public static "fromNbt"(arg0: $CompoundTag$$Type): $SlidingDoorMode
public "getTranslationKey"(): StringJS
public "canOpenSpecially"(): boolean
public "canOpenManually"(): boolean
public static "values"(): ($SlidingDoorMode)[]
public static "valueOf"(arg0: StringJS): $SlidingDoorMode
public "getIcon"(): $AllIcons
get "translationKey"(): StringJS
get "icon"(): $AllIcons
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidingDoorMode$$Type = (("normal") | ("manual") | ("special") | ("special_inverted"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlidingDoorMode$$Original = $SlidingDoorMode;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.narrow.NarrowGaugeBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$NonNullFunction} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TrackMaterial$TrackType} from "com.simibubi.create.content.trains.track.TrackMaterial$TrackType"
import {$NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle, $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle$$Type} from "com.railwayteam.railways.content.custom_bogeys.blocks.narrow.NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$CRBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.CRBogeyBlock"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BogeyStyle$$Type} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $NarrowGaugeBogeyBlock extends $CRBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
readonly "style": $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle$$Type)

public "getTrackType"(arg0: $BogeyStyle$$Type): $TrackMaterial$TrackType
public "getWheelRadius"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "create"(arg0: $NarrowGaugeBogeyBlock$NarrowGaugeStandardStyle$$Type): $NonNullFunction<($BlockBehaviour$Properties), ($NarrowGaugeBogeyBlock)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelRadius"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrowGaugeBogeyBlock$$Type = ($NarrowGaugeBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrowGaugeBogeyBlock$$Original = $NarrowGaugeBogeyBlock;}
declare module "com.railwayteam.railways.content.switches.neoforge.TrackSwitchBlockImpl" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$TrackSwitchBlock} from "com.railwayteam.railways.content.switches.TrackSwitchBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrackSwitchBlockImpl extends $TrackSwitchBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "LOCKED": $BooleanProperty
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public static "manual"(arg0: $BlockBehaviour$Properties$$Type): $TrackSwitchBlock
public static "automatic"(arg0: $BlockBehaviour$Properties$$Type): $TrackSwitchBlock
public "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackSwitchBlockImpl$$Type = ($TrackSwitchBlockImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackSwitchBlockImpl$$Original = $TrackSwitchBlockImpl;}
declare module "com.railwayteam.railways.content.distant_signals.SemaphoreDisplayTarget" {
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DisplayTargetStats} from "com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats"
import {$List$$Type} from "java.util.List"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$Component} from "net.minecraft.network.chat.Component"
import {$DisplayTarget} from "com.simibubi.create.api.behaviour.display.DisplayTarget"

export class $SemaphoreDisplayTarget extends $DisplayTarget {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry<($BlockEntityType<(never)>), ($DisplayTarget)>
static readonly "BY_BLOCK": $SimpleRegistry<($Block), ($DisplayTarget)>

constructor()

public "provideStats"(arg0: $DisplayLinkContext$$Type): $DisplayTargetStats
public "acceptText"(arg0: integer, arg1: $List$$Type<($MutableComponent$$Type)>, arg2: $DisplayLinkContext$$Type): void
public "getLineOptionText"(arg0: integer): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemaphoreDisplayTarget$$Type = ($SemaphoreDisplayTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SemaphoreDisplayTarget$$Original = $SemaphoreDisplayTarget;}
declare module "com.railwayteam.railways.content.custom_bogeys.blocks.standard.large.LargeCreateStyle060BogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$LargeBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.blocks.base.size.LargeBogeyBlock"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LargeCreateStyle060BogeyBlock extends $LargeBogeyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getWheelPointSpacing"(): double
public "getConnectorAnchorOffset"(): $Vec3
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wheelPointSpacing"(): double
get "connectorAnchorOffset"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCreateStyle060BogeyBlock$$Type = ($LargeCreateStyle060BogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LargeCreateStyle060BogeyBlock$$Original = $LargeCreateStyle060BogeyBlock;}
declare module "com.railwayteam.railways.content.custom_bogeys.special.monobogey.MonoBogeyBlock" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MonoBogeyBlockEntity} from "com.railwayteam.railways.content.custom_bogeys.special.monobogey.MonoBogeyBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$AbstractMonoBogeyBlock} from "com.railwayteam.railways.content.custom_bogeys.special.monobogey.AbstractMonoBogeyBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$AbstractBogeyBlock} from "com.simibubi.create.content.trains.bogey.AbstractBogeyBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BogeySizes$BogeySize} from "com.simibubi.create.content.trains.bogey.BogeySizes$BogeySize"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BogeyStyle} from "com.simibubi.create.content.trains.bogey.BogeyStyle"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MonoBogeyBlock extends $AbstractMonoBogeyBlock<($MonoBogeyBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPSIDE_DOWN": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractBogeyBlock<(never)>)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "size": $BogeySizes$BogeySize
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $BlockEntityType<($MonoBogeyBlockEntity)>
public "getBlockEntityClass"(): $Class<($MonoBogeyBlockEntity)>
public "getDefaultStyle"(): $BogeyStyle
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($MonoBogeyBlockEntity)>
get "blockEntityClass"(): $Class<($MonoBogeyBlockEntity)>
get "defaultStyle"(): $BogeyStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonoBogeyBlock$$Type = ($MonoBogeyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MonoBogeyBlock$$Original = $MonoBogeyBlock;}
declare module "com.railwayteam.railways.content.fuel.tank.FuelTankItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $FuelTankItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelTankItem$$Type = ($FuelTankItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelTankItem$$Original = $FuelTankItem;}
declare module "com.railwayteam.railways.content.fuel.tank.FuelTankMountedStorageType" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$MountedFluidStorageType} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageType"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$FuelTankMountedStorage} from "com.railwayteam.railways.content.fuel.tank.FuelTankMountedStorage"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FuelTankMountedStorageType extends $MountedFluidStorageType<($FuelTankMountedStorage)> {
readonly "codec": $MapCodec<(T)>
static readonly "CODEC": $Codec<($MountedFluidStorageType<(never)>)>
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MountedFluidStorageType<(never)>)>

constructor()

public "mount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): $FuelTankMountedStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelTankMountedStorageType$$Type = ($FuelTankMountedStorageType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelTankMountedStorageType$$Original = $FuelTankMountedStorageType;}
declare module "com.railwayteam.railways.content.smokestack.block.AbstractSmokeStackBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$SmokestackStyle} from "com.railwayteam.railways.content.smokestack.SmokestackStyle"
import {$ShapeWrapper$$Type} from "com.railwayteam.railways.util.ShapeWrapper"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AbstractSmokeStackBlock<T extends $SmartBlockEntity> extends $Block implements $ProperWaterloggedBlock$$Interface, $IWrenchable$$Interface, $IBE$$Interface<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($SmokestackStyle)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "ENABLED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $ShapeWrapper$$Type, arg2: StringJS)

public "asItem"(): $Item
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(T)>
public "getBlockEntityType"(): $BlockEntityType<(T)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<(T)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(T), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(T), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntityClass"(): $Class<(T)>
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): T
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<(T)>
get "blockEntityClass"(): $Class<(T)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSmokeStackBlock$$Type<T> = ($AbstractSmokeStackBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSmokeStackBlock$$Original<T> = $AbstractSmokeStackBlock<(T)>;}
declare module "com.railwayteam.railways.content.buffer.headstock.HeadstockBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$HeadstockBlockEntity, $HeadstockBlockEntity$$Type} from "com.railwayteam.railways.content.buffer.headstock.HeadstockBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$HeadstockStyle} from "com.railwayteam.railways.content.buffer.headstock.HeadstockStyle"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockStateBlockItemGroup$GroupedBlock$$Interface} from "com.railwayteam.railways.content.buffer.BlockStateBlockItemGroup$GroupedBlock"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $HeadstockBlock extends $HorizontalDirectionalBlock implements $IBE$$Interface<($HeadstockBlockEntity)>, $IWrenchable$$Interface, $ProperWaterloggedBlock$$Interface, $BlockStateBlockItemGroup$GroupedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($HeadstockBlock)>
static readonly "UPSIDE_DOWN": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($HeadstockStyle)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<($HeadstockBlockEntity)>
public "getBlockEntityClass"(): $Class<($HeadstockBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($HeadstockBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($HeadstockBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($HeadstockBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($HeadstockBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $HeadstockBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($HeadstockBlockEntity)>
get "blockEntityClass"(): $Class<($HeadstockBlockEntity)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadstockBlock$$Type = ($HeadstockBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeadstockBlock$$Original = $HeadstockBlock;}
declare module "com.railwayteam.railways.content.custom_tracks.phantom.PhantomTrackBlock" {
import {$BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Affine, $Affine$$Type} from "dev.engine_room.flywheel.lib.transform.Affine"
import {$List} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$NoCollisionCustomTrackBlock} from "com.railwayteam.railways.content.custom_tracks.NoCollisionCustomTrackBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BezierTrackPointLocation$$Type} from "com.simibubi.create.content.trains.track.BezierTrackPointLocation"
import {$PartialModel} from "dev.engine_room.flywheel.lib.model.baked.PartialModel"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$TrackTargetingBehaviour$RenderedTrackOverlayType$$Type} from "com.simibubi.create.content.trains.track.TrackTargetingBehaviour$RenderedTrackOverlayType"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import {$TrackShape} from "com.simibubi.create.content.trains.track.TrackShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$TransparentSegmentTrackBlock$$Interface} from "com.railwayteam.railways.content.custom_tracks.TransparentSegmentTrackBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PhantomTrackBlock extends $NoCollisionCustomTrackBlock implements $TransparentSegmentTrackBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "HAS_BE": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $TrackMaterial$$Type)

public "prepareTrackOverlay"<Self extends $Affine<(object)>>(arg0: $Affine$$Type<(Self)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BezierTrackPointLocation$$Type, arg5: $Direction$AxisDirection$$Type, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type): $PartialModel
public "getUpNormal"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $Vec3
public "getCurveStart"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): $Vec3
public "getBogeyAnchor"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockState
public "getYOffsetAt"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): integer
public "getConnected"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean, arg4: $TrackNodeLocation$$Type): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public "getTrackAxes"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($Vec3)>
public static "addToListIfConnected"(arg0: $TrackNodeLocation$$Type, arg1: $Collection$$Type<($TrackNodeLocation$DiscoveredLocation$$Type)>, arg2: $BiFunction$$Type<(double), (boolean), ($Vec3$$Type)>, arg3: $Function$$Type<(boolean), ($Vec3$$Type)>, arg4: $Function$$Type<(boolean), ($ResourceKey$$Type<($Level$$Type)>)>, arg5: $Function$$Type<($Vec3), (integer)>, arg6: $Vec3$$Type, arg7: $BezierConnection$$Type, arg8: $BiFunction$$Type<(boolean), ($Vec3), ($TrackMaterial$$Type)>): void
public "prepareAssemblyOverlay"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type, arg4: $PoseStack$$Type): $PartialModel
public "trackEquals"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type, arg2: $TrackMaterial$$Type): $TrackMaterial
public static "walkConnectedTracks"(arg0: $BlockGetter$$Type, arg1: $TrackNodeLocation$$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public "overlay"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): $BlockState
public "getMaterial"(): $TrackMaterial
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "material"(): $TrackMaterial
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomTrackBlock$$Type = ($PhantomTrackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PhantomTrackBlock$$Original = $PhantomTrackBlock;}
declare module "com.railwayteam.railways.content.palettes.boiler.BoilerBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BoilerBlock$Style} from "com.railwayteam.railways.content.palettes.boiler.BoilerBlock$Style"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IHaveBigOutline$$Interface} from "com.simibubi.create.foundation.block.IHaveBigOutline"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$IHasCustomOutline$$Interface} from "com.railwayteam.railways.mixin_interfaces.IHasCustomOutline"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $BoilerBlock extends $Block implements $IWrenchable$$Interface, $IHasCustomOutline$$Interface, $IHaveBigOutline$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($BoilerBlock$Style)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "HORIZONTAL_AXIS": $EnumProperty<($Direction$Axis)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "RAISED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "placementHelperId": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "initializeClient"(arg0: $Consumer$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "skipRendering"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type): boolean
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getShapeForState"(arg0: $BlockState$$Type): $VoxelShape
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "matrixRotation"(arg0: $PoseStack$$Type, arg1: $BlockState$$Type): void
public "customOutline"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type): void
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "drawLine"(arg0: $VertexConsumer$$Type, arg1: $PoseStack$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
public "drawLineWithAxisOffset"(arg0: $VertexConsumer$$Type, arg1: $PoseStack$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: $Direction$Axis$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoilerBlock$$Type = ($BoilerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoilerBlock$$Original = $BoilerBlock;}
declare module "com.railwayteam.railways.content.buffer.BlockStateBlockItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$NonNullFunction} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$NonNullBiFunction} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $BlockStateBlockItem<T extends $Comparable<(object)>> extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public static "create"<T extends $Comparable<(object)>>(arg0: $Property$$Type<(T)>, arg1: T, arg2: boolean): $NonNullBiFunction<($Block), ($Item$Properties), ($BlockStateBlockItem<(T)>)>
public static "create"<T extends $Comparable<(object)>>(arg0: $NonNullSupplier$$Type<($Block$$Type)>, arg1: $Property$$Type<(T)>, arg2: T, arg3: boolean): $NonNullFunction<($Item$Properties), ($BlockStateBlockItem<(T)>)>
public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateBlockItem$$Type<T> = ($BlockStateBlockItem<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateBlockItem$$Original<T> = $BlockStateBlockItem<(T)>;}
declare module "com.railwayteam.railways.content.buffer.DyeableBlockEntity" {
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$IDyedBuffer$$Interface} from "com.railwayteam.railways.content.buffer.IDyedBuffer"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DyeableBlockEntity extends $SmartBlockEntity implements $IDyedBuffer$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "applyDyeIfValid"(arg0: $ItemStack$$Type): $InteractionResult
public "getColor"(): $DyeColor
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeableBlockEntity$$Type = ($DyeableBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DyeableBlockEntity$$Original = $DyeableBlockEntity;}
declare module "com.railwayteam.railways.content.coupling.coupler.TrackCouplerBlockEntity$AllowedOperationMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $TrackCouplerBlockEntity$AllowedOperationMode extends $Enum<($TrackCouplerBlockEntity$AllowedOperationMode)> implements $StringRepresentable$$Interface {
readonly "canDecouple": boolean
static readonly "DECOUPLING": $TrackCouplerBlockEntity$AllowedOperationMode
static readonly "COUPLING": $TrackCouplerBlockEntity$AllowedOperationMode
static readonly "BOTH": $TrackCouplerBlockEntity$AllowedOperationMode
readonly "canCouple": boolean

public "getTranslatedName"(): $Component
public static "values"(): ($TrackCouplerBlockEntity$AllowedOperationMode)[]
public static "valueOf"(arg0: StringJS): $TrackCouplerBlockEntity$AllowedOperationMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "translatedName"(): $Component
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackCouplerBlockEntity$AllowedOperationMode$$Type = (("both") | ("coupling") | ("decoupling"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackCouplerBlockEntity$AllowedOperationMode$$Original = $TrackCouplerBlockEntity$AllowedOperationMode;}
declare module "com.railwayteam.railways.content.custom_tracks.NoCollisionCustomTrackBlock" {
import {$BezierConnection$$Type} from "com.simibubi.create.content.trains.track.BezierConnection"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TrackNodeLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TrackMaterial, $TrackMaterial$$Type} from "com.simibubi.create.content.trains.track.TrackMaterial"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type} from "com.simibubi.create.content.trains.graph.TrackNodeLocation$DiscoveredLocation"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$TrackBlock} from "com.simibubi.create.content.trains.track.TrackBlock"
import {$TrackShape} from "com.simibubi.create.content.trains.track.TrackShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $NoCollisionCustomTrackBlock extends $TrackBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "HAS_BE": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $EnumProperty<($TrackShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $TrackMaterial$$Type)

public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "addToListIfConnected"(arg0: $TrackNodeLocation$$Type, arg1: $Collection$$Type<($TrackNodeLocation$DiscoveredLocation$$Type)>, arg2: $BiFunction$$Type<(double), (boolean), ($Vec3$$Type)>, arg3: $Function$$Type<(boolean), ($Vec3$$Type)>, arg4: $Function$$Type<(boolean), ($ResourceKey$$Type<($Level$$Type)>)>, arg5: $Function$$Type<($Vec3), (integer)>, arg6: $Vec3$$Type, arg7: $BezierConnection$$Type, arg8: $BiFunction$$Type<(boolean), ($Vec3), ($TrackMaterial$$Type)>): void
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type): $TrackMaterial
public static "getMaterialSimple"(arg0: $BlockGetter$$Type, arg1: $Vec3$$Type, arg2: $TrackMaterial$$Type): $TrackMaterial
public static "walkConnectedTracks"(arg0: $BlockGetter$$Type, arg1: $TrackNodeLocation$$Type, arg2: boolean): $Collection<($TrackNodeLocation$DiscoveredLocation)>
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoCollisionCustomTrackBlock$$Type = ($NoCollisionCustomTrackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoCollisionCustomTrackBlock$$Original = $NoCollisionCustomTrackBlock;}
declare module "com.railwayteam.railways.content.smokestack.block.AxisSmokeStackBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SmokestackStyle} from "com.railwayteam.railways.content.smokestack.SmokestackStyle"
import {$ShapeWrapper$$Type} from "com.railwayteam.railways.util.ShapeWrapper"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SmokeStackBlock} from "com.railwayteam.railways.content.smokestack.block.SmokeStackBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$SmokeStackBlock$SmokeStackType, $SmokeStackBlock$SmokeStackType$$Type} from "com.railwayteam.railways.content.smokestack.block.SmokeStackBlock$SmokeStackType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AxisSmokeStackBlock extends $SmokeStackBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "type": $SmokeStackBlock$SmokeStackType
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STYLE": $EnumProperty<($SmokestackStyle)>
 "createsStationarySmoke": boolean
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "ENABLED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $SmokeStackBlock$SmokeStackType$$Type, arg2: $ShapeWrapper$$Type, arg3: boolean, arg4: StringJS)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AxisSmokeStackBlock$$Type = ($AxisSmokeStackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AxisSmokeStackBlock$$Original = $AxisSmokeStackBlock;}
declare module "com.railwayteam.railways.content.smokestack.block.be.DieselSmokeStackBlockEntity" {
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ISpeedNotifiable$$Interface} from "com.railwayteam.railways.content.smokestack.ISpeedNotifiable"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DieselSmokeStackBlockEntity extends $SmartBlockEntity implements $ISpeedNotifiable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "notifySpeed"(arg0: double): void
public "getRpm"(arg0: float): double
public "getFanRotation"(arg0: double): double
public "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DieselSmokeStackBlockEntity$$Type = ($DieselSmokeStackBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DieselSmokeStackBlockEntity$$Original = $DieselSmokeStackBlockEntity;}
