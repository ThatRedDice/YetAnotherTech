declare module "xfacthd.framedblocks.api.block.IFramedBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$BlockBehaviour$Properties} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IBlockExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IBlockExtension"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$SideSkipPredicate$$Type} from "xfacthd.framedblocks.api.predicate.cull.SideSkipPredicate"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BubbleColumnDirection} from "net.neoforged.neoforge.common.enums.BubbleColumnDirection"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StateCache} from "xfacthd.framedblocks.api.block.cache.StateCache"
import {$ShapeProvider$$Type} from "xfacthd.framedblocks.api.shapes.ShapeProvider"
import {$TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$CamoList$$Type} from "xfacthd.framedblocks.api.util.CamoList"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IBlockType, $IBlockType$$Type} from "xfacthd.framedblocks.api.type.IBlockType"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$RespawnPosAngle} from "net.minecraft.server.level.ServerPlayer$RespawnPosAngle"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlueprintData$$Type} from "xfacthd.framedblocks.api.blueprint.BlueprintData"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"

export interface $IFramedBlock$$Interface extends $EntityBlock$$Interface, $IBlockExtension$$Interface {
get "blockType"(): $IBlockType
get "itemModelSource"(): $BlockState
get "jadeTargetClass"(): $Class<($Block)>
}

export class $IFramedBlock implements $IFramedBlock$$Interface {
static readonly "LOCK_MESSAGE": StringJS
static readonly "CAMO_LABEL": StringJS
static readonly "STATE_UNLOCKED": $Component
static readonly "STATE_LOCKED": $Component

 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "getBlockType"(): $IBlockType
 "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
 "updateShapeLockable"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($BlockState$$Type)>): $BlockState
 "updateCulling"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): void
 "isIntangible"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): boolean
 "getItemModelSource"(): $BlockState
 "getJadeRenderState"(arg0: $BlockState$$Type): $BlockState
 "isCamoEmissiveRendering"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
static "isCamoEmissiveRendering"(arg0: $ModelData$$Type): boolean
 "printCamoData"(arg0: $CamoList$$Type, arg1: boolean): $Optional<($MutableComponent)>
 "runOcclusionTestAndGetLookupState"(arg0: $SideSkipPredicate$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: $Direction$$Type): $BlockState
 "getComponentAtEdge"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type, arg4: $Direction$$Type): $BlockState
 "getComponentBySkipPredicate"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): $BlockState
 "unpackNestedModelData"(arg0: $ModelData$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type): $ModelData
 "lockState"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type): boolean
 "getCamoOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $ShapeProvider$$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
 "getCamoOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
 "getCamoShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: float): float
 "doesBlockOccludeBeaconBeam"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "createBlockItem"(): $BlockItem
 "tryApplyCamoImmediately"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "handleUse"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
 "getCamoDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
 "shouldPreventNeighborCulling"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $BlockState$$Type): boolean
 "handleBlockLeftClick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "useCamoOcclusionShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
 "getCamoVisualShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
 "appendCamoHoverText"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "printCamoBlock"(arg0: $BlueprintData$$Type): $Optional<($MutableComponent)>
static "toggleYSlope"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "getJadeTargetClass"(): $Class<($Block)>
 "shouldRenderAsBlockInJadeTooltip"(): boolean
 "getJadeRenderScale"(arg0: $BlockState$$Type): float
 "shouldApplyGuiTransformFromModel"(): boolean
 "getCache"(arg0: $BlockState$$Type): $StateCache
static "createProperties"(arg0: $IBlockType$$Type): $BlockBehaviour$Properties
 "rotate"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $Rotation$$Type): $BlockState
 "rotate"(arg0: $BlockState$$Type, arg1: $BlockHitResult$$Type, arg2: $Rotation$$Type): $BlockState
 "initCache"(arg0: $BlockState$$Type): $StateCache
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "isSuffocating"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
 "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "ignitedByLava"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "isStickyBlock"(arg0: $BlockState$$Type): boolean
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "getRespawnPosition"(arg0: $BlockState$$Type, arg1: $EntityType$$Type<(never)>, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "getStateAtViewpoint"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $BlockState
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "canStickTo"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
 "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
 "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
 "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "shouldHideAdjacentFluidFace"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $FluidState$$Type): boolean
 "isEmpty"(arg0: $BlockState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedBlock$$Type = ($IFramedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFramedBlock$$Original = $IFramedBlock;}
declare module "xfacthd.framedblocks.api.block.cache.StateCache" {
import {$IBlockType$$Type} from "xfacthd.framedblocks.api.type.IBlockType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StateCache {
static readonly "EMPTY": $StateCache

constructor(arg0: $BlockState$$Type, arg1: $IBlockType$$Type)

public "canConnectFullEdge"(arg0: $Direction$$Type, arg1: $Direction$$Type): boolean
public "canConnectDetailed"(arg0: $Direction$$Type, arg1: $Direction$$Type): boolean
public "mayConnect"(arg0: $Direction$$Type): boolean
public "hasAnyFullFace"(): boolean
public "isFullFace"(arg0: $Direction$$Type): boolean
public "hasAnyDetailedConnections"(): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateCache$$Type = ($StateCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StateCache$$Original = $StateCache;}
declare module "xfacthd.framedblocks.api.block.cache.IStateCacheAccessor" {
import {$StateCache, $StateCache$$Type} from "xfacthd.framedblocks.api.block.cache.StateCache"

export interface $IStateCacheAccessor$$Interface {
}

export class $IStateCacheAccessor implements $IStateCacheAccessor$$Interface {
 "framedblocks$initCache"(arg0: $StateCache$$Type): void
 "framedblocks$getCache"(): $StateCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStateCacheAccessor$$Type = ($IStateCacheAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStateCacheAccessor$$Original = $IStateCacheAccessor;}
declare module "xfacthd.framedblocks.api.block.blockentity.FramedBlockEntity" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$CamoContainer, $CamoContainer$$Type} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$MapColor} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IFramedBlock} from "xfacthd.framedblocks.api.block.IFramedBlock"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IBlockType} from "xfacthd.framedblocks.api.type.IBlockType"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlueprintData, $BlueprintData$$Type} from "xfacthd.framedblocks.api.blueprint.BlueprintData"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $FramedBlockEntity extends $BlockEntity {
static readonly "MSG_BLOCK_ENTITY": $Component
static readonly "MSG_BLACKLISTED": $Component
static readonly "MSG_NON_SOLID": $Component
static readonly "CAMO_NBT_KEY": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "canTriviallyDropAllCamos"(): boolean
public "isSolidSide"(arg0: $Direction$$Type): boolean
public "isMarkedIntangible"(): boolean
public "writeToBlueprint"(): $BlueprintData
public "applyBlueprintData"(arg0: $BlueprintData$$Type): void
public "isReinforced"(): boolean
public "setCamo"(arg0: $CamoContainer$$Type<(never), (never)>, arg1: boolean): void
public "setCamo"(arg0: $CamoContainer$$Type<(never), (never)>, arg1: $BlockHitResult$$Type, arg2: $Player$$Type): void
public "setIntangible"(arg0: boolean): void
public "setReinforced"(arg0: boolean): void
public "getMapColor"(): $MapColor
public "getUpdatePacket"(): $Packet
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getBlockType"(): $IBlockType
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "updateCulling"(arg0: boolean, arg1: boolean): void
public "isIntangible"(arg0: $CollisionContext$$Type): boolean
public "getCamo"(arg0: $BlockHitResult$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type): $CamoContainer<(never), (never)>
public "getCamo"(): $CamoContainer<(never), (never)>
public "getCamo"(arg0: $BlockState$$Type): $CamoContainer<(never), (never)>
public "getCamo"(arg0: $Direction$$Type): $CamoContainer<(never), (never)>
public "getCamo"(arg0: $Direction$$Type, arg1: $Direction$$Type): $CamoContainer<(never), (never)>
public "getCamo"(arg0: $BlockHitResult$$Type, arg1: $Player$$Type): $CamoContainer<(never), (never)>
public "checkCamoSolid"(): void
public "canAutoApplyCamoOnPlacement"(): boolean
public "handleInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockHitResult$$Type): $ItemInteractionResult
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "getCamoFriction"(arg0: $BlockState$$Type, arg1: $Entity$$Type, arg2: float): float
public "getCamoExplosionResistance"(arg0: $Explosion$$Type): float
public "isCamoFlammable"(arg0: $Direction$$Type): boolean
public "getCamoFlammability"(arg0: $Direction$$Type): integer
public "getCamoFireSpreadSpeed"(arg0: $Direction$$Type): integer
public "getCamoShadeBrightness"(arg0: float): float
public "getCamoBeaconColorMultiplier"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): integer
/**
 * 
 * @deprecated
 */
public "canCamoSustainPlant"(arg0: $Direction$$Type, arg1: $BlockState$$Type): $TriState
public "canCamoSustainPlant"(arg0: $BlockGetter$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type): $TriState
public "shouldCamoDisplayFluidOverlay"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): boolean
public "canEntityDestroyCamo"(arg0: $Entity$$Type): boolean
public "getBlock"(): $IFramedBlock
public "onLoad"(): void
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "setGlowing"(arg0: boolean): void
public "isGlowing"(): boolean
public "setBlockState"(arg0: $BlockState$$Type): void
public "getModelData"(): $ModelData
public "getModelData"(arg0: boolean): $ModelData
get "markedIntangible"(): boolean
get "reinforced"(): boolean
set "intangible"(value: boolean)
set "reinforced"(value: boolean)
get "mapColor"(): $MapColor
get "updatePacket"(): $Packet
get "blockType"(): $IBlockType
get "camo"(): $CamoContainer<(never), (never)>
get "block"(): $IFramedBlock
set "glowing"(value: boolean)
get "glowing"(): boolean
set "blockState"(value: $BlockState$$Type)
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedBlockEntity$$Type = ($FramedBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedBlockEntity$$Original = $FramedBlockEntity;}
declare module "xfacthd.framedblocks.api.block.blockentity.IFramedDoubleBlockEntity" {
import {$CamoContainer, $CamoContainer$$Type} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"

export interface $IFramedDoubleBlockEntity$$Interface {

(): $CamoContainer$$Type<(never), (never)>
get "camoTwo"(): $CamoContainer<(never), (never)>
}

export class $IFramedDoubleBlockEntity implements $IFramedDoubleBlockEntity$$Interface {
static readonly "CAMO_TWO_NBT_KEY": StringJS
static readonly "DATA_TWO": $ModelProperty<($ModelData)>
static readonly "DATA_ONE": $ModelProperty<($ModelData)>

 "getCamoTwo"(): $CamoContainer<(never), (never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedDoubleBlockEntity$$Type = (() => $CamoContainer$$Type<(never), (never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFramedDoubleBlockEntity$$Original = $IFramedDoubleBlockEntity;}
declare module "xfacthd.framedblocks.api.block.AbstractFramedBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$IFramedBlock$$Interface} from "xfacthd.framedblocks.api.block.IFramedBlock"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$SideSkipPredicate$$Type} from "xfacthd.framedblocks.api.predicate.cull.SideSkipPredicate"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$StateCache} from "xfacthd.framedblocks.api.block.cache.StateCache"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ShapeProvider$$Type} from "xfacthd.framedblocks.api.shapes.ShapeProvider"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$CamoList$$Type} from "xfacthd.framedblocks.api.util.CamoList"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IBlockType, $IBlockType$$Type} from "xfacthd.framedblocks.api.type.IBlockType"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlueprintData$$Type} from "xfacthd.framedblocks.api.blueprint.BlueprintData"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AbstractFramedBlock extends $Block implements $IFramedBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
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

constructor(arg0: $IBlockType$$Type, arg1: $BlockBehaviour$Properties$$Type)
constructor(arg0: $IBlockType$$Type, arg1: $UnaryOperator$$Type<($BlockBehaviour$Properties)>)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getBlockType"(): $IBlockType
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "doesBlockOccludeBeaconBeam"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
public "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
public "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
public "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "updateShapeLockable"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($BlockState$$Type)>): $BlockState
public "updateCulling"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): void
public "isIntangible"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): boolean
public "getItemModelSource"(): $BlockState
public "getJadeRenderState"(arg0: $BlockState$$Type): $BlockState
public "isCamoEmissiveRendering"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public static "isCamoEmissiveRendering"(arg0: $ModelData$$Type): boolean
public "printCamoData"(arg0: $CamoList$$Type, arg1: boolean): $Optional<($MutableComponent)>
public "runOcclusionTestAndGetLookupState"(arg0: $SideSkipPredicate$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: $Direction$$Type): $BlockState
public "getComponentAtEdge"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type, arg4: $Direction$$Type): $BlockState
public "getComponentBySkipPredicate"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): $BlockState
public "unpackNestedModelData"(arg0: $ModelData$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type): $ModelData
public "lockState"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type): boolean
public "getCamoOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $ShapeProvider$$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
public "getCamoOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getCamoShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: float): float
public "createBlockItem"(): $BlockItem
public "tryApplyCamoImmediately"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "handleUse"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "getCamoDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "shouldPreventNeighborCulling"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $BlockState$$Type): boolean
public "handleBlockLeftClick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "useCamoOcclusionShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "getCamoVisualShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "appendCamoHoverText"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "printCamoBlock"(arg0: $BlueprintData$$Type): $Optional<($MutableComponent)>
public static "toggleYSlope"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "getJadeTargetClass"(): $Class<($Block)>
public "shouldRenderAsBlockInJadeTooltip"(): boolean
public "getJadeRenderScale"(arg0: $BlockState$$Type): float
public "shouldApplyGuiTransformFromModel"(): boolean
public "getCache"(arg0: $BlockState$$Type): $StateCache
public static "createProperties"(arg0: $IBlockType$$Type): $BlockBehaviour$Properties
public "rotate"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $Rotation$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $BlockHitResult$$Type, arg2: $Rotation$$Type): $BlockState
public "initCache"(arg0: $BlockState$$Type): $StateCache
public "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "isSuffocating"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockType"(): $IBlockType
get "itemModelSource"(): $BlockState
get "jadeTargetClass"(): $Class<($Block)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFramedBlock$$Type = ($AbstractFramedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFramedBlock$$Original = $AbstractFramedBlock;}
