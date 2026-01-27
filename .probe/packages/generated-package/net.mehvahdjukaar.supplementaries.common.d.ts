declare module "net.mehvahdjukaar.supplementaries.common.items.BambooSpikesTippedItem" {
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$PotionContents, $PotionContents$$Type} from "net.minecraft.world.item.alchemy.PotionContents"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$SoftFluidStack$$Type} from "net.mehvahdjukaar.moonlight.api.fluids.SoftFluidStack"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $BambooSpikesTippedItem extends $BlockItem implements $SimpleWaterloggedBlock$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(blockIn: $Block$$Type, builder: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public static "getPotion"(stack: $ItemStack$$Type): $PotionContents
public static "getPotion"(stack: $SoftFluidStack$$Type): $PotionContents
public static "isPotionValid"(potion: $PotionContents$$Type): boolean
public "isBarVisible"(stack: $ItemStack$$Type): boolean
public "getBarColor"(stack: $ItemStack$$Type): integer
public "getDescriptionId"(stack: $ItemStack$$Type): StringJS
public static "createItemStack"(pot: $Holder$$Type<($Potion)>): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BambooSpikesTippedItem$$Type = ($BambooSpikesTippedItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BambooSpikesTippedItem$$Original = $BambooSpikesTippedItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SignPostBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FenceMimicBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.FenceMimicBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IRotatable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IRotatable"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SignPostBlock extends $FenceMimicBlock implements $EntityBlock$$Interface, $IRotatable$$Interface {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getRotatedState"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($BlockState)>
public "rotateOverAxis"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rot: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($Direction)>
public "rotate"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rot: $Rotation$$Type): $BlockState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "onRotated"(newState: $BlockState$$Type, oldState: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignPostBlock$$Type = ($SignPostBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignPostBlock$$Original = $SignPostBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.TatteredBookRecipe$Serializer" {
import {$TatteredBookRecipe} from "net.mehvahdjukaar.supplementaries.common.items.crafting.TatteredBookRecipe"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $TatteredBookRecipe$Serializer implements $RecipeSerializer$$Interface<($TatteredBookRecipe)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($TatteredBookRecipe)>
public "codec"(): $MapCodec<($TatteredBookRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TatteredBookRecipe$Serializer$$Type = ($TatteredBookRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TatteredBookRecipe$Serializer$$Original = $TatteredBookRecipe$Serializer;}
declare module "net.mehvahdjukaar.supplementaries.common.block.ISimpleBrushable" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ISimpleBrushable$$Interface {

(arg0: $BlockState, arg1: $BlockPos, arg2: $Level, arg3: $ItemStack, arg4: $Player, arg5: $HumanoidArm, arg6: $BlockHitResult, arg7: $Vec3): boolean
}

export class $ISimpleBrushable implements $ISimpleBrushable$$Interface {
 "brush"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $ItemStack$$Type, arg4: $Player$$Type, arg5: $HumanoidArm$$Type, arg6: $BlockHitResult$$Type, arg7: $Vec3$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISimpleBrushable$$Type = ((arg0: $BlockState, arg1: $BlockPos, arg2: $Level, arg3: $ItemStack, arg4: $Player, arg5: $HumanoidArm, arg6: $BlockHitResult, arg7: $Vec3) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISimpleBrushable$$Original = $ISimpleBrushable;}
declare module "net.mehvahdjukaar.supplementaries.common.items.components.LunchBaskedContent$Mutable" {
import {$LunchBaskedContent, $LunchBaskedContent$$Type} from "net.mehvahdjukaar.supplementaries.common.items.components.LunchBaskedContent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SelectableContainerContent$Mut} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent$Mut"
import {$SelectableContainerContent} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent"

export class $LunchBaskedContent$Mutable extends $SelectableContainerContent$Mut<($LunchBaskedContent)> {
constructor(original: $LunchBaskedContent$$Type)

public "switchMode"(): void
public "toImmutable"(): $SelectableContainerContent
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunchBaskedContent$Mutable$$Type = ($LunchBaskedContent$Mutable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LunchBaskedContent$Mutable$$Original = $LunchBaskedContent$Mutable;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SlidyBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$PistonMovingBlockEntity$$Type} from "net.minecraft.world.level.block.piston.PistonMovingBlockEntity"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$IPistonMotionReact$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IPistonMotionReact"
import {$FallingBlock} from "net.minecraft.world.level.block.FallingBlock"
import {$FallingBlockEntity$$Type} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SlidyBlock extends $FallingBlock implements $IPistonMotionReact$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SlidyBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "ON_PRESSURE_PLATE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getDustColor"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "onLand"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, state1: $BlockState$$Type, blockEntity: $FallingBlockEntity$$Type): void
public "onMoved"(level: $Level$$Type, pos: $BlockPos$$Type, movedState: $BlockState$$Type, direction: $Direction$$Type, extending: boolean): void
public "onMagnetMoved"(level: $Level$$Type, blockPos: $BlockPos$$Type, direction: $Direction$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type): void
public static "canFall"(pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "ticksWhileMoved"(): boolean
public "moveTick"(level: $Level$$Type, pos: $BlockPos$$Type, movedState: $BlockState$$Type, aabb: $AABB$$Type, tile: $PistonMovingBlockEntity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidyBlock$$Type = ($SlidyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlidyBlock$$Original = $SlidyBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.ConfettiDyeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ConfettiDyeRecipe extends $CustomRecipe {
constructor(category: $CraftingBookCategory$$Type, confetti: $Ingredient$$Type, maxColors: integer)

public "assemble"(inv: $CraftingInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(inv: $CraftingInput$$Type, level: $Level$$Type): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfettiDyeRecipe$$Type = ($ConfettiDyeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfettiDyeRecipe$$Original = $ConfettiDyeRecipe;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.IronGateBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FenceGateBlock} from "net.minecraft.world.level.block.FenceGateBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $IronGateBlock extends $FenceGateBlock implements $SimpleWaterloggedBlock$$Interface {
static readonly "IN_WALL": $BooleanProperty
readonly "closeSound": $SoundEvent
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FenceGateBlock)>
readonly "openSound": $SoundEvent
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type, gold: boolean)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public static "messWithIronBarsState"(level: $LevelAccessor$$Type, clickedPos: $BlockPos$$Type, original: $BlockState$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getSoundType"(state: $BlockState$$Type): $SoundType
public "neighborChanged"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, fromPos: $BlockPos$$Type, moving: boolean): void
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
export type $IronGateBlock$$Type = ($IronGateBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IronGateBlock$$Original = $IronGateBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.EndermanSkullWallBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$WallSkullBlock} from "net.minecraft.world.level.block.WallSkullBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EndermanSkullWallBlock extends $WallSkullBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallSkullBlock)>
static readonly "WATCHED": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
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
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(blockState: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndermanSkullWallBlock$$Type = ($EndermanSkullWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EndermanSkullWallBlock$$Original = $EndermanSkullWallBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.ConfettiDyeRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ConfettiDyeRecipe} from "net.mehvahdjukaar.supplementaries.common.items.crafting.ConfettiDyeRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ConfettiDyeRecipe$Serializer implements $RecipeSerializer$$Interface<($ConfettiDyeRecipe)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ConfettiDyeRecipe)>
public "codec"(): $MapCodec<($ConfettiDyeRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfettiDyeRecipe$Serializer$$Type = ($ConfettiDyeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfettiDyeRecipe$Serializer$$Original = $ConfettiDyeRecipe$Serializer;}
declare module "net.mehvahdjukaar.supplementaries.common.items.EmptySliceMapItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$EmptyMapItem} from "net.minecraft.world.item.EmptyMapItem"

export class $EmptySliceMapItem extends $EmptyMapItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptySliceMapItem$$Type = ($EmptySliceMapItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptySliceMapItem$$Original = $EmptySliceMapItem;}
declare module "net.mehvahdjukaar.supplementaries.common.items.WrenchItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $WrenchItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(pProperties: $Item$Properties$$Type)

public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "isValidRepairItem"(pStack: $ItemStack$$Type, pRepairCandidate: $ItemStack$$Type): boolean
public "onLeftClickEntity"(stack: $ItemStack$$Type, player: $Player$$Type, entity: $Entity$$Type): boolean
public "supportsEnchantment"(stack: $ItemStack$$Type, enchantment: $Holder$$Type): boolean
public static "playTurningEffects"(pos: $BlockPos$$Type, shiftDown: boolean, dir: $Direction$$Type, level: $Level$$Type, player: $Player$$Type): void
public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(stack: $ItemStack$$Type, player: $Player$$Type, entity: $LivingEntity$$Type, pUsedHand: $InteractionHand$$Type): $InteractionResult
public "hurtEnemy"(pStack: $ItemStack$$Type, pTarget: $LivingEntity$$Type, pAttacker: $LivingEntity$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrenchItem$$Type = ($WrenchItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrenchItem$$Original = $WrenchItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.BlackboardBlock" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Vector2i} from "org.joml.Vector2i"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IWashable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IWashable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ISimpleBrushable$$Interface} from "net.mehvahdjukaar.supplementaries.common.block.ISimpleBrushable"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlackboardBlock extends $WaterBlock implements $EntityBlock$$Interface, $IWashable$$Interface, $ISimpleBrushable$$Interface {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "brush"(state: $BlockState$$Type, pos: $BlockPos$$Type, level: $Level$$Type, stack: $ItemStack$$Type, livingEntity: $Player$$Type, arm: $HumanoidArm$$Type, hit: $BlockHitResult$$Type, particlesDir: $Vec3$$Type): boolean
public "tryWash"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, hitVec: $Vec3$$Type): boolean
public static "colorToByte"(color: $DyeColor$$Type): byte
public static "colorFromByte"(b: byte): integer
public static "getHitSubPixel"(hit: $BlockHitResult$$Type): $Vector2i
public static "getStackChalkColor"(stack: $ItemStack$$Type): $DyeColor
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackboardBlock$$Type = ($BlackboardBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlackboardBlock$$Original = $BlackboardBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.BlazeRodBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$StickBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.StickBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlazeRodBlock extends $StickBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "AXIS2PROPERTY": $Map<($Direction$Axis), ($BooleanProperty)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "AXIS_Z": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS_Y": $BooleanProperty
static readonly "AXIS_X": $BooleanProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "animateTick"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "stepOn"(world: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeRodBlock$$Type = ($BlazeRodBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlazeRodBlock$$Original = $BlazeRodBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.utils.IQuiverPlayer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IQuiverEntity$$Interface} from "net.mehvahdjukaar.supplementaries.common.entities.IQuiverEntity"
import {$SlotReference, $SlotReference$$Type} from "net.mehvahdjukaar.supplementaries.common.utils.SlotReference"

export interface $IQuiverPlayer$$Interface extends $IQuiverEntity$$Interface {
}

export class $IQuiverPlayer implements $IQuiverPlayer$$Interface {
 "supplementaries$getQuiverSlot"(): $SlotReference
 "supplementaries$setQuiverSlot"(arg0: $SlotReference$$Type): void
 "supplementaries$hasQuiver"(): boolean
 "supplementaries$getQuiver"(): $ItemStack
 "supplementaries$setQuiver"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuiverPlayer$$Type = ($IQuiverPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IQuiverPlayer$$Original = $IQuiverPlayer;}
declare module "net.mehvahdjukaar.supplementaries.common.items.BuntingItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IColored$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IColored"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$StandingAndWallBlockItem} from "net.minecraft.world.item.StandingAndWallBlockItem"

export class $BuntingItem extends $StandingAndWallBlockItem implements $IColored$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(color: $DyeColor$$Type, block: $Block$$Type, wallBlock: $Block$$Type, properties: $Item$Properties$$Type, attachmentDirection: $Direction$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "getColor"(): $DyeColor
public "supportsBlankColor"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuntingItem$$Type = ($BuntingItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BuntingItem$$Original = $BuntingItem;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.TatteredBookRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $TatteredBookRecipe extends $CustomRecipe {
constructor(category: $CraftingBookCategory$$Type, antiqueInk: $Ingredient$$Type, antique: boolean)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(inv: $CraftingInput$$Type, access: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "matches"(inv: $CraftingInput$$Type, level: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TatteredBookRecipe$$Type = ($TatteredBookRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TatteredBookRecipe$$Original = $TatteredBookRecipe;}
declare module "net.mehvahdjukaar.supplementaries.common.items.QuiverItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$SelectableContainerItem} from "net.mehvahdjukaar.supplementaries.common.items.SelectableContainerItem"
import {$SlotReference} from "net.mehvahdjukaar.supplementaries.common.utils.SlotReference"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$QuiverContent$Mutable, $QuiverContent$Mutable$$Type} from "net.mehvahdjukaar.supplementaries.common.items.components.QuiverContent$Mutable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$QuiverContent} from "net.mehvahdjukaar.supplementaries.common.items.components.QuiverContent"
import {$Function$$Type} from "java.util.function.Function"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $QuiverItem extends $SelectableContainerItem<($QuiverContent), ($QuiverContent$Mutable)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public static "findActiveQuiver"(entity: $LivingEntity$$Type): $ItemStack
public static "canAcceptItem"(toInsert: $ItemStack$$Type): boolean
public "getMaxSlots"(): integer
public static "modifyActiveQuiver"(entity: $LivingEntity$$Type, func: $Function$$Type<($QuiverContent$Mutable), (boolean)>): void
public "getComponentType"(): $DataComponentType<($QuiverContent)>
public static "findActiveQuiverSlot"(entity: $LivingEntity$$Type): $SlotReference
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "maxSlots"(): integer
get "componentType"(): $DataComponentType<($QuiverContent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuiverItem$$Type = ($QuiverItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuiverItem$$Original = $QuiverItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$PostType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModBlockProperties$PostType extends $Enum<($ModBlockProperties$PostType)> implements $StringRepresentable$$Interface {
static readonly "BEAM": $ModBlockProperties$PostType
static readonly "WALL": $ModBlockProperties$PostType
static readonly "PALISADE": $ModBlockProperties$PostType
static readonly "POST": $ModBlockProperties$PostType

public "getWidth"(): integer
public "getName"(): StringJS
public static "get"(state: $BlockState$$Type, needsFullHeight: boolean): $ModBlockProperties$PostType
public static "get"(state: $BlockState$$Type): $ModBlockProperties$PostType
public "toString"(): StringJS
public static "values"(): ($ModBlockProperties$PostType)[]
public static "valueOf"(name: StringJS): $ModBlockProperties$PostType
public "getOffset"(): float
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "width"(): integer
get "name"(): StringJS
get "offset"(): float
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$PostType$$Type = (("post") | ("palisade") | ("wall") | ("beam"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModBlockProperties$PostType$$Original = $ModBlockProperties$PostType;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.CannonBallBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CannonBallBlock extends $WaterBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SHAPE_1": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "SHAPE_4": $VoxelShape
static readonly "UPDATE_INVISIBLE": integer
static readonly "SHAPE_3": $VoxelShape
static readonly "SHAPE_2": $VoxelShape
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "BALLS": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, useContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "propagatesSkylightDown"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getShadeBrightness"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBallBlock$$Type = ($CannonBallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CannonBallBlock$$Original = $CannonBallBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.network.ClientBoundParticlePacket$Kind" {
import {$Enum} from "java.lang.Enum"

export class $ClientBoundParticlePacket$Kind extends $Enum<($ClientBoundParticlePacket$Kind)> {
static readonly "WAX_ON": $ClientBoundParticlePacket$Kind
static readonly "PEARL_TELEPORT": $ClientBoundParticlePacket$Kind
static readonly "FLINT_BLOCK_IGNITE": $ClientBoundParticlePacket$Kind
static readonly "WRENCH_ROTATION": $ClientBoundParticlePacket$Kind
static readonly "BOMB_EXPLOSION": $ClientBoundParticlePacket$Kind
static readonly "FEATHER": $ClientBoundParticlePacket$Kind
static readonly "CONFETTI_EXPLOSION": $ClientBoundParticlePacket$Kind
static readonly "BUBBLE_CLEAN": $ClientBoundParticlePacket$Kind
static readonly "DISPENSER_MINECART": $ClientBoundParticlePacket$Kind
static readonly "BUBBLE_CLEAN_ENTITY": $ClientBoundParticlePacket$Kind
static readonly "CONFETTI": $ClientBoundParticlePacket$Kind
static readonly "BUBBLE_BLOW": $ClientBoundParticlePacket$Kind
static readonly "BUBBLE_EAT": $ClientBoundParticlePacket$Kind
static readonly "GLOW_ON": $ClientBoundParticlePacket$Kind

public static "values"(): ($ClientBoundParticlePacket$Kind)[]
public static "valueOf"(name: StringJS): $ClientBoundParticlePacket$Kind
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientBoundParticlePacket$Kind$$Type = (("bubble_blow") | ("bubble_clean") | ("bubble_clean_entity") | ("bubble_eat") | ("dispenser_minecart") | ("flint_block_ignite") | ("wax_on") | ("glow_on") | ("confetti") | ("confetti_explosion") | ("feather") | ("wrench_rotation") | ("pearl_teleport") | ("bomb_explosion"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientBoundParticlePacket$Kind$$Original = $ClientBoundParticlePacket$Kind;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FlaxBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DoubleBlockHalf} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CropBlock} from "net.minecraft.world.level.block.CropBlock"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IBeeGrowable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IBeeGrowable"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FlaxBlock extends $CropBlock implements $IBeeGrowable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CropBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "DOUBLE_AGE": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "AGE": $IntegerProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "playerDestroy"(worldIn: $Level$$Type, player: $Player$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, te: $BlockEntity$$Type, stack: $ItemStack$$Type): void
public "playerWillDestroy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "randomTick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "isValidBonemealTarget"(worldIn: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "placeAt"(worldIn: $LevelAccessor$$Type, pos: $BlockPos$$Type, flags: integer): void
public "growCrops"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): void
public "getPollinated"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isSingle"(state: $BlockState$$Type): boolean
public "growCropBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, increment: integer): void
public "canGrowUp"(worldIn: $BlockGetter$$Type, downPos: $BlockPos$$Type): boolean
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(state: $BlockState$$Type, worldIn: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "isPlantFullyGrown"(state: $BlockState$$Type, pos: $BlockPos$$Type, level: $Level$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaxBlock$$Type = ($FlaxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlaxBlock$$Original = $FlaxBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.SpawnEntityWithPassengersFeature$ExtraData" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional$$Type} from "java.util.Optional"
import {$WoodType$$Type} from "net.mehvahdjukaar.moonlight.api.set.wood.WoodType"
import {$Record} from "java.lang.Record"

export class $SpawnEntityWithPassengersFeature$ExtraData extends $Record {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnEntityWithPassengersFeature$ExtraData$$Type = ({"boatType"?: ($WoodType$$Type)?, "lootTable"?: ($ResourceLocation$$Type)?}) | ([boatType?: ($WoodType$$Type)?, lootTable?: ($ResourceLocation$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnEntityWithPassengersFeature$ExtraData$$Original = $SpawnEntityWithPassengersFeature$ExtraData;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.LocatedStructure" {
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$StructureStart, $StructureStart$$Type} from "net.minecraft.world.level.levelgen.structure.StructureStart"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $LocatedStructure extends $Record {
constructor(position: $BlockPos$$Type, structure: $Holder$$Type<($Structure)>, start: $StructureStart$$Type, distSqrt: double)

public static "relativeTo"(structurePos: $BlockPos$$Type, structure: $Holder$$Type<($Structure)>, start: $StructureStart$$Type, center: $BlockPos$$Type): $LocatedStructure
public "distSqrt"(): double
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $BlockPos
public "start"(): $StructureStart
public "structure"(): $Holder<($Structure)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocatedStructure$$Type = ({"distSqrt"?: double, "position"?: $BlockPos$$Type, "start"?: $StructureStart$$Type, "structure"?: $Holder$$Type<($Structure)>}) | ([distSqrt?: double, position?: $BlockPos$$Type, start?: $StructureStart$$Type, structure?: $Holder$$Type<($Structure)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocatedStructure$$Original = $LocatedStructure;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.MovingSlidyBlockSource" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$DirectionalBlock} from "net.minecraft.world.level.block.DirectionalBlock"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MovingSlidyBlockSource extends $DirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($MovingSlidyBlockSource)>
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovingSlidyBlockSource$$Type = ($MovingSlidyBlockSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MovingSlidyBlockSource$$Original = $MovingSlidyBlockSource;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.StatueBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $StatueBlock extends $WaterBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
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
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public static "addCandleParticleAndSound"(level: $Level$$Type, vec3: $Vec3$$Type, random: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "animateTick"(stateIn: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatueBlock$$Type = ($StatueBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatueBlock$$Original = $StatueBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$Bunting" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ModBlockProperties$Bunting extends $Enum<($ModBlockProperties$Bunting)> implements $StringRepresentable$$Interface {
static readonly "BUNTING": $ModBlockProperties$Bunting
static readonly "ROPE": $ModBlockProperties$Bunting
static readonly "NONE": $ModBlockProperties$Bunting

public "hasBunting"(): boolean
public "isConnected"(): boolean
public "toString"(): StringJS
public static "values"(): ($ModBlockProperties$Bunting)[]
public static "valueOf"(name: StringJS): $ModBlockProperties$Bunting
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "connected"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$Bunting$$Type = (("none") | ("rope") | ("bunting"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModBlockProperties$Bunting$$Original = $ModBlockProperties$Bunting;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.JarBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $JarBlock extends $WaterBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getBeaconColorMultiplier"(state: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, beaconPos: $BlockPos$$Type): (float)[]
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getJarLiquidColor"(pos: $BlockPos$$Type, world: $LevelReader$$Type): integer
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarBlock$$Type = ($JarBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JarBlock$$Original = $JarBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.JarBoatBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $JarBoatBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($JarBoatBlock)>
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

constructor(builder: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarBoatBlock$$Type = ($JarBoatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JarBoatBlock$$Original = $JarBoatBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.LockBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $LockBlock extends $Block implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "activate"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type): void
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(blockState: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockBlock$$Type = ($LockBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LockBlock$$Original = $LockBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.AbstractPresentBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IColored$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IColored"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AbstractPresentBlock extends $WaterBlock implements $EntityBlock$$Interface, $IColored$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "PACKED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "SHAPE_LID": $VoxelShape

public "canBeReplaced"(state: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "playerWillDestroy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): integer
public "tick"(state: $BlockState$$Type, serverLevel: $ServerLevel$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getColor"(): $DyeColor
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "onRemove"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsBlankColor"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPresentBlock$$Type = ($AbstractPresentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractPresentBlock$$Original = $AbstractPresentBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.network.ClientBoundParticlePacket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Message, $Message$$Interface} from "net.mehvahdjukaar.moonlight.api.platform.network.Message"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ClientBoundParticlePacket$Kind$$Type} from "net.mehvahdjukaar.supplementaries.common.network.ClientBoundParticlePacket$Kind"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$Message$Context$$Type} from "net.mehvahdjukaar.moonlight.api.platform.network.Message$Context"

export class $ClientBoundParticlePacket implements $Message$$Interface {
static readonly "CODEC": $CustomPacketPayload$TypeAndCodec<($RegistryFriendlyByteBuf), ($ClientBoundParticlePacket)>
readonly "pos": $Vec3
readonly "dir": $Vec3

constructor(pos: $Vec3$$Type, type: $ClientBoundParticlePacket$Kind$$Type, direction: $Vec3$$Type, ...extraData: (integer)[])
constructor(entity: $Entity$$Type, type: $ClientBoundParticlePacket$Kind$$Type)
constructor(entity: $Entity$$Type, type: $ClientBoundParticlePacket$Kind$$Type, dir: $Vec3$$Type)
constructor(buffer: $RegistryFriendlyByteBuf$$Type)
constructor(pos: $BlockPos$$Type, type: $ClientBoundParticlePacket$Kind$$Type)
constructor(pos: $Vec3$$Type, type: $ClientBoundParticlePacket$Kind$$Type)
constructor(pos: $Vec3$$Type, type: $ClientBoundParticlePacket$Kind$$Type, extraData: integer)

public "getFirstExtraData"(): integer
public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "write"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "handle"(context: $Message$Context$$Type): void
public "getExtraData"(): $List<(integer)>
public static "makeType"<T extends $Message>(id: $ResourceLocation$$Type, decoder: $StreamDecoder$$Type<($RegistryFriendlyByteBuf), (T)>): $CustomPacketPayload$TypeAndCodec<($RegistryFriendlyByteBuf), (T)>
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
get "firstExtraData"(): integer
get "extraData"(): $List<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientBoundParticlePacket$$Type = ($ClientBoundParticlePacket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientBoundParticlePacket$$Original = $ClientBoundParticlePacket;}
declare module "net.mehvahdjukaar.supplementaries.common.items.FluteItem" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$IThirdPersonAnimationProvider, $IThirdPersonAnimationProvider$$Type, $IThirdPersonAnimationProvider$$Interface} from "net.mehvahdjukaar.moonlight.api.item.IThirdPersonAnimationProvider"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SongInstrumentItem} from "net.mehvahdjukaar.supplementaries.common.items.SongInstrumentItem"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$IFirstPersonAnimationProvider$$Type, $IFirstPersonAnimationProvider$$Interface} from "net.mehvahdjukaar.moonlight.api.item.IFirstPersonAnimationProvider"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IThirdPersonSpecialItemRenderer$$Type, $IThirdPersonSpecialItemRenderer$$Interface} from "net.mehvahdjukaar.moonlight.api.item.IThirdPersonSpecialItemRenderer"

export class $FluteItem extends $SongInstrumentItem implements $IThirdPersonAnimationProvider$$Interface, $IThirdPersonSpecialItemRenderer$$Interface, $IFirstPersonAnimationProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "isFoil"(pStack: $ItemStack$$Type): boolean
public "isValidRepairItem"(pStack: $ItemStack$$Type, pRepairCandidate: $ItemStack$$Type): boolean
public static "getMaxHeadXRot"(xRot: float): float
public "renderThirdPersonItem"<T extends $Player, M extends $EntityModel<(object)>>(parentModel: M, entity: $LivingEntity$$Type, stack: $ItemStack$$Type, humanoidArm: $HumanoidArm$$Type, poseStack: $PoseStack$$Type, bufferSource: $MultiBufferSource$$Type, light: integer): void
public static "interactWithPet"(stack: $ItemStack$$Type, player: $Player$$Type, target: $Entity$$Type, hand: $InteractionHand$$Type): boolean
public "poseLeftArm"<T extends $LivingEntity>(stack: $ItemStack$$Type, model: $HumanoidModel$$Type<(T)>, entity: T, mainHand: $HumanoidArm$$Type): boolean
public "poseRightArm"<T extends $LivingEntity>(stack: $ItemStack$$Type, model: $HumanoidModel$$Type<(T)>, entity: T, mainHand: $HumanoidArm$$Type): boolean
public "animateItemFirstPerson"(player: $Player$$Type, stack: $ItemStack$$Type, hand: $InteractionHand$$Type, arm: $HumanoidArm$$Type, poseStack: $PoseStack$$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public "isTwoHanded"(): boolean
public "spawnNoteParticle"(level: $Level$$Type, entity: $LivingEntity$$Type, note: integer): void
public "use"(level: $Level$$Type, player: $Player$$Type, handIn: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$$Type, pLevel: $Level$$Type, entity: $LivingEntity$$Type, pTimeCharged: integer): void
public static "attachToItem"(target: $Item$$Type, object: $IThirdPersonAnimationProvider$$Type): void
public static "get"(target: $Item$$Type): $IThirdPersonAnimationProvider
public static "attachToItem"(target: $Item$$Type, object: $IThirdPersonSpecialItemRenderer$$Type): void
public static "attachToItem"(target: $Item$$Type, object: $IFirstPersonAnimationProvider$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluteItem$$Type = ($FluteItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluteItem$$Original = $FluteItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.MovingSlidyBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PistonType} from "net.minecraft.world.level.block.state.properties.PistonType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$MovingSlidyBlockEntity} from "net.mehvahdjukaar.supplementaries.common.block.tiles.MovingSlidyBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MovingPistonBlock} from "net.minecraft.world.level.block.piston.MovingPistonBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MovingSlidyBlock extends $MovingPistonBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($MovingPistonBlock)>
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
static readonly "TYPE": $EnumProperty<($PistonType)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public static "newMovingBlockEntity"(pos: $BlockPos$$Type, blockState: $BlockState$$Type, movedState: $BlockState$$Type, direction: $Direction$$Type): $MovingSlidyBlockEntity
public static "maybeMove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovingSlidyBlock$$Type = ($MovingSlidyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MovingSlidyBlock$$Original = $MovingSlidyBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FeatherBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FeatherBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getCollisionShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "updateEntityAfterFallOn"(reader: $BlockGetter$$Type, entity: $Entity$$Type): void
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "fallOn"(world: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, height: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatherBlock$$Type = ($FeatherBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeatherBlock$$Original = $FeatherBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.SafeRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SafeRecipe} from "net.mehvahdjukaar.supplementaries.common.items.crafting.SafeRecipe"

export class $SafeRecipe$Serializer implements $RecipeSerializer$$Interface<($SafeRecipe)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SafeRecipe)>
public "codec"(): $MapCodec<($SafeRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SafeRecipe$Serializer$$Type = ($SafeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SafeRecipe$Serializer$$Original = $SafeRecipe$Serializer;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.BarnaclesMultifaceGrowthFeature$PlacementEnvironment" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $BarnaclesMultifaceGrowthFeature$PlacementEnvironment extends $Enum<($BarnaclesMultifaceGrowthFeature$PlacementEnvironment)> implements $StringRepresentable$$Interface {
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public "getSerializedName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "remappedEnumConstantName"(): StringJS
get "serializedName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarnaclesMultifaceGrowthFeature$PlacementEnvironment$$Type = (("any") | ("cliffs"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BarnaclesMultifaceGrowthFeature$PlacementEnvironment$$Original = $BarnaclesMultifaceGrowthFeature$PlacementEnvironment;}
declare module "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$RakeDirection" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ModBlockProperties$RakeDirection extends $Enum<($ModBlockProperties$RakeDirection)> implements $StringRepresentable$$Interface {
static readonly "NORTH_WEST": $ModBlockProperties$RakeDirection
static readonly "NORTH_EAST": $ModBlockProperties$RakeDirection
static readonly "NORTH_SOUTH": $ModBlockProperties$RakeDirection
static readonly "SOUTH_EAST": $ModBlockProperties$RakeDirection
static readonly "EAST_WEST": $ModBlockProperties$RakeDirection
static readonly "SOUTH_WEST": $ModBlockProperties$RakeDirection

public "getDirections"(): $List<($Direction)>
public static "fromDirections"(directions: $List$$Type<($Direction$$Type)>): $ModBlockProperties$RakeDirection
public "toString"(): StringJS
public static "values"(): ($ModBlockProperties$RakeDirection)[]
public static "valueOf"(name: StringJS): $ModBlockProperties$RakeDirection
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "directions"(): $List<($Direction)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlockProperties$RakeDirection$$Type = (("north_south") | ("east_west") | ("south_east") | ("south_west") | ("north_west") | ("north_east"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModBlockProperties$RakeDirection$$Original = $ModBlockProperties$RakeDirection;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.WindVaneBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $WindVaneBlock extends $WaterBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "WIND_STRENGTH": $IntegerProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public static "updatePower"(bs: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, isWindCharged: boolean): void
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getDirectSignal"(blockState: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(blockState: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindVaneBlock$$Type = ($WindVaneBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindVaneBlock$$Original = $WindVaneBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FlowerBoxBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FlowerBoxBlock extends $WaterBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "ATTACHMENT": $EnumProperty<($AttachFace)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $IntegerProperty
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowerBoxBlock$$Type = ($FlowerBoxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlowerBoxBlock$$Original = $FlowerBoxBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SpringLauncherHeadBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$DirectionalBlock} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SpringLauncherHeadBlock extends $DirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SpringLauncherHeadBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "SHORT": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "playerWillDestroy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "propagatesSkylightDown"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "canSurvive"(state: $BlockState$$Type, worldIn: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "fallOn"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, entityIn: $Entity$$Type, fallDistance: float): void
public "onRemove"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "neighborChanged"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, blockIn: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringLauncherHeadBlock$$Type = ($SpringLauncherHeadBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpringLauncherHeadBlock$$Original = $SpringLauncherHeadBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FrameBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$MimicBlock} from "net.mehvahdjukaar.moonlight.api.block.MimicBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$IFrameBlock$$Interface} from "net.mehvahdjukaar.supplementaries.common.block.blocks.IFrameBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FrameBlock extends $MimicBlock implements $EntityBlock$$Interface, $IFrameBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FRAMED_BLOCKS": $List<($Block)>
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "OCCLUSION_SHAPE": $VoxelShape
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "HAS_BLOCK": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "skipRendering"(state: $BlockState$$Type, adjacentBlockState: $BlockState$$Type, side: $Direction$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "getOcclusionShape"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "propagatesSkylightDown"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getShadeBrightness"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "getAnalogOutputSignal"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "registerFilledBlock"(inserted: $Block$$Type, filled: $Block$$Type): void
public "getFilledBlock"(inserted: $Block$$Type): $Block
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getCollisionShape"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getLightBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameBlock$$Type = ($FrameBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrameBlock$$Original = $FrameBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SignPostWallBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SignPostWallBlock extends $WaterBlock implements $EntityBlock$$Interface {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "isPossibleToRespawnInThis"(state: $BlockState$$Type): boolean
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignPostWallBlock$$Type = ($SignPostWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignPostWallBlock$$Original = $SignPostWallBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$DisplayStatus" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ModBlockProperties$DisplayStatus extends $Enum<($ModBlockProperties$DisplayStatus)> implements $StringRepresentable$$Interface {
static readonly "NONE": $ModBlockProperties$DisplayStatus
static readonly "EMPTY": $ModBlockProperties$DisplayStatus
static readonly "FULL": $ModBlockProperties$DisplayStatus

public "hasTile"(): boolean
public "hasItem"(): boolean
public "toString"(): StringJS
public static "values"(): ($ModBlockProperties$DisplayStatus)[]
public static "valueOf"(name: StringJS): $ModBlockProperties$DisplayStatus
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
export type $ModBlockProperties$DisplayStatus$$Type = (("none") | ("empty") | ("full"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModBlockProperties$DisplayStatus$$Original = $ModBlockProperties$DisplayStatus;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SpringLauncherBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpringLauncherBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "EXTENDED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public "propagatesSkylightDown"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getPistonPushReaction"(state: $BlockState$$Type): $PushReaction
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, fromPos: $BlockPos$$Type, moving: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringLauncherBlock$$Type = ($SpringLauncherBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpringLauncherBlock$$Original = $SpringLauncherBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.AltimeterItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"

export class $AltimeterItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "isEnabled"(enabledFeatures: $FeatureFlagSet$$Type): boolean
public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltimeterItem$$Type = ($AltimeterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AltimeterItem$$Original = $AltimeterItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SconceLeverBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SconceWallBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.SconceWallBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ILightable$FireSoundType$$Type} from "net.mehvahdjukaar.moonlight.api.block.ILightable$FireSoundType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$SimpleParticleType$$Type} from "net.minecraft.core.particles.SimpleParticleType"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SconceLeverBlock extends $SconceWallBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
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
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type, particleData: $Supplier$$Type<($SimpleParticleType$$Type)>)

public "tryLightUp"(entity: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
public "setPowered"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): $BlockState
public "tryExtinguish"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
public "animateTick"(stateIn: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "onRemove"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getDirectSignal"(blockState: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(blockState: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SconceLeverBlock$$Type = ($SconceLeverBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SconceLeverBlock$$Original = $SconceLeverBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.SpawnEntityWithPassengersFeature$Config" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$StructureTemplatePool$Projection, $StructureTemplatePool$Projection$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection"
import {$List, $List$$Type} from "java.util.List"
import {$SpawnEntityWithPassengersFeature$ExtraData, $SpawnEntityWithPassengersFeature$ExtraData$$Type} from "net.mehvahdjukaar.supplementaries.common.worldgen.SpawnEntityWithPassengersFeature$ExtraData"
import {$RuleTest, $RuleTest$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $SpawnEntityWithPassengersFeature$Config extends $Record implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($SpawnEntityWithPassengersFeature$Config)>

constructor(entity: $EntityType$$Type<(never)>, passengers: $List$$Type<($EntityType$$Type<(never)>)>, spread: integer, projection: $StructureTemplatePool$Projection$$Type, attempts: integer, groundRule: $RuleTest$$Type, persistent: boolean, data: $SpawnEntityWithPassengersFeature$ExtraData$$Type)

public "projection"(): $StructureTemplatePool$Projection
public "attempts"(): integer
public "groundRule"(): $RuleTest
public "entity"(): $EntityType<(never)>
public "persistent"(): boolean
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "data"(): $SpawnEntityWithPassengersFeature$ExtraData
public "spread"(): integer
public "passengers"(): $List<($EntityType<(never)>)>
public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnEntityWithPassengersFeature$Config$$Type = ({"projection"?: $StructureTemplatePool$Projection$$Type, "groundRule"?: $RuleTest$$Type, "entity"?: $EntityType$$Type<(never)>, "spread"?: integer, "attempts"?: integer, "persistent"?: boolean, "passengers"?: $List$$Type<($EntityType$$Type<(never)>)>, "data"?: $SpawnEntityWithPassengersFeature$ExtraData$$Type}) | ([projection?: $StructureTemplatePool$Projection$$Type, groundRule?: $RuleTest$$Type, entity?: $EntityType$$Type<(never)>, spread?: integer, attempts?: integer, persistent?: boolean, passengers?: $List$$Type<($EntityType$$Type<(never)>)>, data?: $SpawnEntityWithPassengersFeature$ExtraData$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnEntityWithPassengersFeature$Config$$Original = $SpawnEntityWithPassengersFeature$Config;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.TrappedPresentRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $TrappedPresentRecipe extends $CustomRecipe {
constructor(category: $CraftingBookCategory$$Type, tripwire: $Ingredient$$Type)

public "assemble"(craftingContainer: $CraftingInput$$Type, registryAccess: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(x: integer, y: integer): boolean
public "matches"(craftingContainer: $CraftingInput$$Type, level: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrappedPresentRecipe$$Type = ($TrappedPresentRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrappedPresentRecipe$$Original = $TrappedPresentRecipe;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.UrnBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
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
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FallingBlock} from "net.minecraft.world.level.block.FallingBlock"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $UrnBlock extends $FallingBlock implements $EntityBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($UrnBlock)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "TREASURE": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "onPlace"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, isMoving: boolean): void
public "spawnAfterBreak"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, stack: $ItemStack$$Type, bl: boolean): void
public "propagatesSkylightDown"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "onProjectileHit"(pLevel: $Level$$Type, pState: $BlockState$$Type, pHit: $BlockHitResult$$Type, pProjectile: $Projectile$$Type): void
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getDustColor"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public static "spawnExtraBrokenParticles"(state: $BlockState$$Type, pos: $BlockPos$$Type, level: $Level$$Type): void
public "tick"(state: $BlockState$$Type, pLevel: $ServerLevel$$Type, pos: $BlockPos$$Type, pRand: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
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
export type $UrnBlock$$Type = ($UrnBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UrnBlock$$Original = $UrnBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.TrappedPresentBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ILightable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.ILightable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ILightable$FireSoundType$$Type} from "net.mehvahdjukaar.moonlight.api.block.ILightable$FireSoundType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$AbstractPresentBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.AbstractPresentBlock"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TrappedPresentBlock extends $AbstractPresentBlock implements $ILightable$$Interface {
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "PACKED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SHAPE_LID": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "ON_COOLDOWN": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "isLitUp"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "setLitUp"(blockState: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, b: boolean): void
public "playLightUpSound"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type, type: $ILightable$FireSoundType$$Type): void
public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "neighborChanged"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "triggerEvent"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pId: integer, pParam: integer): boolean
/**
 * 
 * @deprecated
 */
public "interactWithEntity"(level: $Level$$Type, state: $BlockState$$Type, projectile: $Entity$$Type, pos: $BlockPos$$Type): boolean
public "tryLightUp"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
public "tryExtinguish"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
public "canBeExtinguishedBy"(item: $ItemStack$$Type): boolean
public "playExtinguishSound"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type): void
public "spawnSmokeParticles"(state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): void
public "setLitUp"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, lit: boolean): void
public "lightableInteractWithPlayerItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): $ItemInteractionResult
public "lightableInteractWithEntity"(level: $Level$$Type, state: $BlockState$$Type, projectile: $Entity$$Type, pos: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
public "lightUp"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
/**
 * 
 * @deprecated
 */
public "interactWithPlayerItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): $ItemInteractionResult
/**
 * 
 * @deprecated
 */
public "extinguish"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrappedPresentBlock$$Type = ($TrappedPresentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrappedPresentBlock$$Original = $TrappedPresentBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.ILavaAndWaterLoggable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$LiquidBlockContainer$$Interface} from "net.minecraft.world.level.block.LiquidBlockContainer"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BucketPickup$$Interface} from "net.minecraft.world.level.block.BucketPickup"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ILavaAndWaterLoggable$$Interface extends $BucketPickup$$Interface, $LiquidBlockContainer$$Interface {
get "pickupSound"(): $Optional<($SoundEvent)>
}

export class $ILavaAndWaterLoggable implements $ILavaAndWaterLoggable$$Interface {
 "getPickupSound"(): $Optional<($SoundEvent)>
 "placeLiquid"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fluidState: $FluidState$$Type): boolean
 "canPlaceLiquid"(player: $Player$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fluid: $Fluid$$Type): boolean
 "pickupBlock"(player: $Player$$Type, pLevel: $LevelAccessor$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type): $ItemStack
 "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILavaAndWaterLoggable$$Type = ($ILavaAndWaterLoggable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILavaAndWaterLoggable$$Original = $ILavaAndWaterLoggable;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.SoapClearRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SoapClearRecipe extends $CustomRecipe {
constructor(category: $CraftingBookCategory$$Type, soap: $Ingredient$$Type, amount: integer)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(inv: $CraftingInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(x: integer, y: integer): boolean
public "matches"(craftingContainer: $CraftingInput$$Type, level: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoapClearRecipe$$Type = ($SoapClearRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoapClearRecipe$$Original = $SoapClearRecipe;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.NoticeBoardBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $NoticeBoardBlock extends $Block implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "HAS_BOOK": $BooleanProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "CULLED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "neighborChanged"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, pBlock: $Block$$Type, pFromPos: $BlockPos$$Type, pIsMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoticeBoardBlock$$Type = ($NoticeBoardBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoticeBoardBlock$$Original = $NoticeBoardBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.BuntingWallBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IColored$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IColored"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BuntingWallBlock extends $HorizontalDirectionalBlock implements $IColored$$Interface {
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

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getColor"(): $DyeColor
public "supportsBlankColor"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuntingWallBlock$$Type = ($BuntingWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BuntingWallBlock$$Original = $BuntingWallBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.RopeKnotBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IRopeConnection$$Interface} from "net.mehvahdjukaar.supplementaries.common.block.IRopeConnection"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$AbstractRopeKnotBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.AbstractRopeKnotBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ModBlockProperties$PostType} from "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$PostType"

export class $RopeKnotBlock extends $AbstractRopeKnotBlock implements $IRopeConnection$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "POST_TYPE": $EnumProperty<($ModBlockProperties$PostType)>
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SIDE_SHAPE": $VoxelShape
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "updateShape"(state: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, world: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "canSideAcceptConnection"(state: $BlockState$$Type, direction: $Direction$$Type): boolean
public "getSideShape"(): $VoxelShape
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public static "isSupportingCeiling"(upState: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelReader$$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$$Type, world: $LevelReader$$Type): boolean
public static "canConnectDown"(downState: $BlockState$$Type): boolean
public "shouldConnectToFace"(thisState: $BlockState$$Type, facingState: $BlockState$$Type, facingPos: $BlockPos$$Type, dir: $Direction$$Type, world: $LevelReader$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "sideShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeKnotBlock$$Type = ($RopeKnotBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RopeKnotBlock$$Original = $RopeKnotBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.BombItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BombEntity$BombType, $BombEntity$BombType$$Type} from "net.mehvahdjukaar.supplementaries.common.entities.BombEntity$BombType"

export class $BombItem extends $Item implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(builder: $Item$Properties$$Type)
constructor(builder: $Item$Properties$$Type, type: $BombEntity$BombType$$Type, glint: boolean)

public "isFoil"(stack: $ItemStack$$Type): boolean
public "asProjectile"(level: $Level$$Type, pos: $Position$$Type, stack: $ItemStack$$Type, direction: $Direction$$Type): $Projectile
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "getType"(): $BombEntity$BombType
public "use"(level: $Level$$Type, player: $Player$$Type, handIn: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $BombEntity$BombType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombItem$$Type = ($BombItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BombItem$$Original = $BombItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.EndermanSkullBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SkullBlock} from "net.minecraft.world.level.block.SkullBlock"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$SkullBlock$Type} from "net.minecraft.world.level.block.SkullBlock$Type"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $EndermanSkullBlock extends $SkullBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "MAX": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TYPE": $SkullBlock$Type
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SkullBlock)>
static readonly "WATCHED": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "SHAPE_ANGERY": $VoxelShape
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(blockState: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndermanSkullBlock$$Type = ($EndermanSkullBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EndermanSkullBlock$$Original = $EndermanSkullBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.EndermanHeadItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$StandingAndWallBlockItem} from "net.minecraft.world.item.StandingAndWallBlockItem"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"

export class $EndermanHeadItem extends $StandingAndWallBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, block2: $Block$$Type, properties: $Item$Properties$$Type)

public "isEnderMask"(stack: $ItemStack$$Type, player: $Player$$Type, endermanEntity: $EnderMan$$Type): boolean
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
export type $EndermanHeadItem$$Type = ($EndermanHeadItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EndermanHeadItem$$Original = $EndermanHeadItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.PedestalBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$WorldlyContainerHolder$$Interface} from "net.minecraft.world.WorldlyContainerHolder"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$ModBlockProperties$DisplayStatus} from "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$DisplayStatus"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$WorldlyContainer} from "net.minecraft.world.WorldlyContainer"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PedestalBlock extends $WaterBlock implements $EntityBlock$$Interface, $WorldlyContainerHolder$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DOWN": $BooleanProperty
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
static readonly "ITEM_STATUS": $EnumProperty<($ModBlockProperties$DisplayStatus)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UP": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getEnchantPowerBonus"(state: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public static "canConnectTo"(state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, dir: $Direction$$Type, hasItem: boolean): boolean
public static "canHaveItemAbove"(level: $LevelAccessor$$Type, pos: $BlockPos$$Type): boolean
public "getContainer"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type): $WorldlyContainer
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public static "getStatus"(level: $LevelAccessor$$Type, pos: $BlockPos$$Type, hasItem: boolean): $ModBlockProperties$DisplayStatus
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PedestalBlock$$Type = ($PedestalBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PedestalBlock$$Original = $PedestalBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FlippedBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FlippedBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "FLIPPED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlippedBlock$$Type = ($FlippedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlippedBlock$$Original = $FlippedBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.utils.SlotReference$Empty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SlotReference, $SlotReference$$Interface} from "net.mehvahdjukaar.supplementaries.common.utils.SlotReference"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$IQuiverEntity$$Type} from "net.mehvahdjukaar.supplementaries.common.entities.IQuiverEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $SlotReference$Empty extends $Record implements $SlotReference$$Interface {
static readonly "CODEC": $StreamCodec<($ByteBuf), ($SlotReference$Empty)>

constructor()

public "get"(player: $LivingEntity$$Type): $ItemStack
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getCodec"(): $StreamCodec<($ByteBuf), ($SlotReference$Empty)>
public "getItem"(player: $LivingEntity$$Type): $Item
public static "slot"(equipmentSlot: $EquipmentSlot$$Type): $SlotReference
public "isEmpty"(): boolean
public static "inv"(invSlot: integer): $SlotReference
public static "hand"(pUsedHand: $InteractionHand$$Type): $SlotReference
public static "quiver"(e: $IQuiverEntity$$Type): $SlotReference
get "codec"(): $StreamCodec<($ByteBuf), ($SlotReference$Empty)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotReference$Empty$$Type = ({}) | ([]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotReference$Empty$$Original = $SlotReference$Empty;}
declare module "net.mehvahdjukaar.supplementaries.common.items.BlackboardItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $BlackboardItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(blockIn: $Block$$Type, builder: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getTooltipImage"(pStack: $ItemStack$$Type): $Optional<($TooltipComponent)>
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
export type $BlackboardItem$$Type = ($BlackboardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlackboardItem$$Original = $BlackboardItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.AshenBasaltBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AshenBasaltBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AshenBasaltBlock$$Type = ($AshenBasaltBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AshenBasaltBlock$$Original = $AshenBasaltBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.ConfettiLitterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ConfettiLitterBlock extends $HorizontalDirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ConfettiLitterBlock)>
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
static readonly "AMOUNT": $IntegerProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, useContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfettiLitterBlock$$Type = ($ConfettiLitterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfettiLitterBlock$$Original = $ConfettiLitterBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.entities.dispenser_minecart.ILevelEventRedirect" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ILevelEventRedirect$$Interface {

(arg0: boolean, arg1: $Vec3): void
}

export class $ILevelEventRedirect implements $ILevelEventRedirect$$Interface {
 "supp$setRedirected"(arg0: boolean, arg1: $Vec3$$Type): void
static "supp$tryRedirect"(serverLevel: $ServerLevel$$Type, pPlayer: $Player$$Type, vec3: $Vec3$$Type, pType: integer, pPos: $BlockPos$$Type, pData: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelEventRedirect$$Type = ((arg0: boolean, arg1: $Vec3) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILevelEventRedirect$$Original = $ILevelEventRedirect;}
declare module "net.mehvahdjukaar.supplementaries.common.items.TrappedPresentItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PresentItem} from "net.mehvahdjukaar.supplementaries.common.items.PresentItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Component} from "net.minecraft.network.chat.Component"

export class $TrappedPresentItem extends $PresentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "getName"(stack: $ItemStack$$Type): $Component
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
export type $TrappedPresentItem$$Type = ($TrappedPresentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrappedPresentItem$$Original = $TrappedPresentItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.IConvertableHorse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IConvertableHorse$$Interface {

(): boolean
}

export class $IConvertableHorse implements $IConvertableHorse$$Interface {
 "supp$isConverting"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConvertableHorse$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConvertableHorse$$Original = $IConvertableHorse;}
declare module "net.mehvahdjukaar.supplementaries.common.items.components.LunchBaskedContent" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SelectableContainerContent$Mut} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent$Mut"
import {$LunchBaskedContent$Mutable} from "net.mehvahdjukaar.supplementaries.common.items.components.LunchBaskedContent$Mutable"
import {$SelectableContainerContent} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $LunchBaskedContent extends $SelectableContainerContent<($LunchBaskedContent$Mutable)> {
static readonly "CODEC": $Codec<($LunchBaskedContent)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($LunchBaskedContent)>

public "addToTooltip"(context: $Item$TooltipContext$$Type, tooltipAdder: $Consumer$$Type<($Component)>, tooltipFlag: $TooltipFlag$$Type): void
public "toMutable"(): $SelectableContainerContent$Mut
public "equals"(o: any): boolean
public "hashCode"(): integer
public static "empty"(count: integer): $LunchBaskedContent
public "canEatFrom"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunchBaskedContent$$Type = ($LunchBaskedContent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LunchBaskedContent$$Original = $LunchBaskedContent;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.WickerFenceBlock" {
import {$WallSide} from "net.minecraft.world.level.block.state.properties.WallSide"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map} from "java.util.Map"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WickerFenceBlock extends $WaterBlock {
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($EnumProperty<($WallSide)>)>
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WickerFenceBlock$$Type = ($WickerFenceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WickerFenceBlock$$Original = $WickerFenceBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.LightUpWaterBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ILightable$FireSoundType$$Type} from "net.mehvahdjukaar.moonlight.api.block.ILightable$FireSoundType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$LightUpBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.LightUpBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $LightUpWaterBlock extends $LightUpBlock implements $SimpleWaterloggedBlock$$Interface {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "tryLightUp"(entity: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
public "placeLiquid"(worldIn: $LevelAccessor$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fluidStateIn: $FluidState$$Type): boolean
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getPickupSound"(): $Optional<($SoundEvent)>
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
export type $LightUpWaterBlock$$Type = ($LightUpWaterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightUpWaterBlock$$Original = $LightUpWaterBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.BookPileHorizontalBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BookPileBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.BookPileBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BookPileHorizontalBlock extends $BookPileBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "BOOKS": $IntegerProperty
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPileHorizontalBlock$$Type = ($BookPileHorizontalBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookPileHorizontalBlock$$Original = $BookPileHorizontalBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.BubbleBlowerItem" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IFirstPersonAnimationProvider$$Type, $IFirstPersonAnimationProvider$$Interface} from "net.mehvahdjukaar.moonlight.api.item.IFirstPersonAnimationProvider"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IThirdPersonAnimationProvider, $IThirdPersonAnimationProvider$$Type, $IThirdPersonAnimationProvider$$Interface} from "net.mehvahdjukaar.moonlight.api.item.IThirdPersonAnimationProvider"

export class $BubbleBlowerItem extends $Item implements $IThirdPersonAnimationProvider$$Interface, $IFirstPersonAnimationProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "isEnchantable"(stack: $ItemStack$$Type): boolean
public "getEnchantmentValue"(): integer
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type, slotChanged: boolean): boolean
public "allowComponentsUpdateAnimation"(player: $Player$$Type, hand: $InteractionHand$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
public "canApplyAtEnchantingTable"(stack: $ItemStack$$Type, enchantment: $Enchantment$$Type): boolean
public "poseLeftArm"<T extends $LivingEntity>(stack: $ItemStack$$Type, model: $HumanoidModel$$Type<(T)>, entity: T, mainHand: $HumanoidArm$$Type): boolean
public "animateHands"<T extends $LivingEntity>(model: $HumanoidModel$$Type<(T)>, entity: T, leftHand: boolean): void
public "poseRightArm"<T extends $LivingEntity>(stack: $ItemStack$$Type, model: $HumanoidModel$$Type<(T)>, entity: T, mainHand: $HumanoidArm$$Type): boolean
public "animateItemFirstPerson"(player: $Player$$Type, stack: $ItemStack$$Type, hand: $InteractionHand$$Type, humanoidArm: $HumanoidArm$$Type, poseStack: $PoseStack$$Type, partialTicks: float, v1: float, v2: float, v3: float): void
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(stack: $ItemStack$$Type): boolean
public "getBarWidth"(stack: $ItemStack$$Type): integer
public "getBarColor"(stack: $ItemStack$$Type): integer
public "onUseTick"(level: $Level$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseDuration: integer): void
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "isTwoHanded"(): boolean
public static "attachToItem"(target: $Item$$Type, object: $IThirdPersonAnimationProvider$$Type): void
public static "get"(target: $Item$$Type): $IThirdPersonAnimationProvider
public static "attachToItem"(target: $Item$$Type, object: $IFirstPersonAnimationProvider$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleBlowerItem$$Type = ($BubbleBlowerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BubbleBlowerItem$$Original = $BubbleBlowerItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FaucetBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FaucetBlock extends $WaterBlock implements $EntityBlock$$Interface {
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
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
static readonly "HAS_WATER": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "ENABLED": $BooleanProperty
static readonly "CONNECTED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "updateTileFluidAndReturnIfHasWater"(state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelReader$$Type): boolean
public "getTileParticleColor"(pos: $BlockPos$$Type, world: $Level$$Type): integer
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "isOpen"(state: $BlockState$$Type): boolean
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "animateTick"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "updateBlock"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, toggle: boolean): void
public "neighborChanged"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, fromPos: $BlockPos$$Type, moving: boolean): void
public "onNeighborChange"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, neighbor: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaucetBlock$$Type = ($FaucetBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FaucetBlock$$Original = $FaucetBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.IFrameBlock" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $IFrameBlock$$Interface {

(arg0: $Block): $Block$$Type
}

export class $IFrameBlock implements $IFrameBlock$$Interface {
 "getFilledBlock"(arg0: $Block$$Type): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFrameBlock$$Type = ((arg0: $Block) => $Block$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFrameBlock$$Original = $IFrameBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent$Mut" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$SelectableContainerContent} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent"

export class $SelectableContainerContent$Mut<T extends $SelectableContainerContent<(object)>> {
public "consumeSelected"(toDecrement: integer): void
public "tryAdding"(toInsert: $ItemStack$$Type, onlyOnExisting: boolean): $ItemStack
public "tryAdding"(pInsertedStack: $ItemStack$$Type): $ItemStack
public "setSelectedSlot"(selectedSlot: integer): boolean
public "tryRemovingOne"(): $ItemStack
public "getSelectedSlot"(): integer
public "getSelected"(): $ItemStack
public "getStacks"(): $List<($ItemStack)>
public "toImmutable"(): T
public "getSlots"(): integer
public "cycle"(): boolean
public "cycle"(clockWise: boolean): boolean
public "cycle"(slotsMoved: integer): boolean
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "isItemValid"(stack: $ItemStack$$Type): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
set "selectedSlot"(value: integer)
get "selectedSlot"(): integer
get "selected"(): $ItemStack
get "stacks"(): $List<($ItemStack)>
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableContainerContent$Mut$$Type<T> = ($SelectableContainerContent$Mut<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SelectableContainerContent$Mut$$Original<T> = $SelectableContainerContent$Mut<(T)>;}
declare module "net.mehvahdjukaar.supplementaries.common.items.ShulkerShellItem" {
import {$ArmorMaterial} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export class $ShulkerShellItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
static readonly "TURTLE_MATERIAL": $Holder$Reference<($ArmorMaterial)>
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "isEnchantable"(stack: $ItemStack$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerShellItem$$Type = ($ShulkerShellItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerShellItem$$Original = $ShulkerShellItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.DoormatBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $DoormatBlock extends $WaterBlock implements $EntityBlock$$Interface {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "isPossibleToRespawnInThis"(blockState: $BlockState$$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(state: $BlockState$$Type, worldIn: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoormatBlock$$Type = ($DoormatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoormatBlock$$Original = $DoormatBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.SoapItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$FoodProperties} from "net.minecraft.world.food.FoodProperties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SoapItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "SOAP_FOOD": $FoodProperties
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(pProperties: $Item$Properties$$Type)

public static "interactWithEntity"(stack: $ItemStack$$Type, player: $Player$$Type, target: $Entity$$Type, hand: $InteractionHand$$Type): boolean
public static "hasBeenEatenBefore"(player: $Player$$Type, level: $Level$$Type): boolean
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "canPerformAction"(stack: $ItemStack$$Type, itemAbility: $ItemAbility$$Type): boolean
public "finishUsingItem"(pStack: $ItemStack$$Type, pLevel: $Level$$Type, entity: $LivingEntity$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoapItem$$Type = ($SoapItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoapItem$$Original = $SoapItem;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.GalleonStructure$Type" {
import {$StructureType$$Interface} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$GalleonStructure} from "net.mehvahdjukaar.supplementaries.common.worldgen.GalleonStructure"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $GalleonStructure$Type implements $StructureType$$Interface<($GalleonStructure)> {
constructor()

public "codec"(): $MapCodec<($GalleonStructure)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GalleonStructure$Type$$Type = ($GalleonStructure$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GalleonStructure$Type$$Original = $GalleonStructure$Type;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.DirectionalSlabBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SlabBlock} from "net.minecraft.world.level.block.SlabBlock"
import {$SlabType} from "net.minecraft.world.level.block.state.properties.SlabType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DirectionalSlabBlock extends $SlabBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SlabBlock)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "TYPE": $EnumProperty<($SlabType)>
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalSlabBlock$$Type = ($DirectionalSlabBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DirectionalSlabBlock$$Original = $DirectionalSlabBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.CandleHolderBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LightUpWaterBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.LightUpWaterBlock"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IColored$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IColored"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $CandleHolderBlock extends $LightUpWaterBlock implements $IColored$$Interface {
readonly "color": $DyeColor
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "particle": $Supplier<($ParticleType<($ParticleOptions)>)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "particleOffsets": $Function<($BlockState), ($List<($Vec3)>)>
static readonly "CANDLES": $IntegerProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "LIT": $BooleanProperty
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type, particleOffsets: $Function$$Type<($BlockState), ($List$$Type<($Vec3$$Type)>)>)
/**
 * 
 * @deprecated
 */
constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type, particle: $Supplier$$Type<($ParticleType$$Type<($ParticleOptions$$Type)>)>)
constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type, particle: $Supplier$$Type<($ParticleType$$Type<($ParticleOptions$$Type)>)>, particleOffsets: $Function$$Type<($BlockState), ($List$$Type<($Vec3$$Type)>)>)

public "canBeReplaced"(state: $BlockState$$Type, useContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
/**
 * 
 * @deprecated
 */
public static "getParticleOffsets"(state: $BlockState$$Type): $List<($Vec3)>
public static "getDefaultParticleOffsets"(state: $BlockState$$Type): $List<($Vec3)>
public static "isSideSolidForDirection"(reader: $LevelReader$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): boolean
public "supportsBlankColor"(): boolean
public "canBeExtinguishedBy"(item: $ItemStack$$Type): boolean
public "playExtinguishSound"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type): void
public "spawnSmokeParticles"(state: $BlockState$$Type, pos: $BlockPos$$Type, level: $LevelAccessor$$Type): void
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getColor"(): $DyeColor
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(state: $BlockState$$Type, worldIn: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleHolderBlock$$Type = ($CandleHolderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CandleHolderBlock$$Original = $CandleHolderBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.SusRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SusRecipe extends $CustomRecipe {
constructor(craftingBookCategory: $CraftingBookCategory$$Type, ingredient: $Ingredient$$Type, itemStack: $ItemStack$$Type)

public "assemble"(inv: $CraftingInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getRemainingItems"(recipeInput: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "matches"(inv: $CraftingInput$$Type, level: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SusRecipe$$Type = ($SusRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SusRecipe$$Original = $SusRecipe;}
declare module "net.mehvahdjukaar.supplementaries.common.block.IAnalogRotatable" {
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IAnalogRotatable$$Interface {
}

export class $IAnalogRotatable implements $IAnalogRotatable$$Interface {
 "rotateAnalog"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: boolean, arg5: float): void
 "canRotateAnalog"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnalogRotatable$$Type = ($IAnalogRotatable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAnalogRotatable$$Original = $IAnalogRotatable;}
declare module "net.mehvahdjukaar.supplementaries.common.items.LunchBoxItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SelectableContainerItem} from "net.mehvahdjukaar.supplementaries.common.items.SelectableContainerItem"
import {$SlotReference} from "net.mehvahdjukaar.supplementaries.common.utils.SlotReference"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$FoodProperties} from "net.minecraft.world.food.FoodProperties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LunchBaskedContent} from "net.mehvahdjukaar.supplementaries.common.items.components.LunchBaskedContent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LunchBaskedContent$Mutable} from "net.mehvahdjukaar.supplementaries.common.items.components.LunchBaskedContent$Mutable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ILeftClickReact$$Interface} from "net.mehvahdjukaar.moonlight.api.item.ILeftClickReact"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LunchBoxItem extends $SelectableContainerItem<($LunchBaskedContent), ($LunchBaskedContent$Mutable)> implements $ILeftClickReact$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "canAttackBlock"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public static "canAcceptItem"(toInsert: $ItemStack$$Type): boolean
public "allowComponentsUpdateAnimation"(player: $Player$$Type, hand: $InteractionHand$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
public "getMaxSlots"(): integer
public static "findActiveLunchBox"(entity: $LivingEntity$$Type): $ItemStack
public static "findActiveLunchBoxSlot"(entity: $LivingEntity$$Type): $SlotReference
public "getComponentType"(): $DataComponentType<($LunchBaskedContent)>
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onLeftClick"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): boolean
public "getUseDuration"(stack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onStopUsing"(stack: $ItemStack$$Type, entity: $LivingEntity$$Type, count: integer): void
public "getFoodProperties"(stack: $ItemStack$$Type, entity: $LivingEntity$$Type): $FoodProperties
public "finishUsingItem"(stack: $ItemStack$$Type, level: $Level$$Type, livingEntity: $LivingEntity$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "maxSlots"(): integer
get "componentType"(): $DataComponentType<($LunchBaskedContent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunchBoxItem$$Type = ($LunchBoxItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LunchBoxItem$$Original = $LunchBoxItem;}
declare module "net.mehvahdjukaar.supplementaries.common.items.RopeArrowItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Projectile} from "net.minecraft.world.entity.projectile.Projectile"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArrowItem} from "net.minecraft.world.item.ArrowItem"
import {$AbstractArrow} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $RopeArrowItem extends $ArrowItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(maxCharges: integer, builder: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "overrideStackedOnOther"(ropeArrow: $ItemStack$$Type, pSlot: $Slot$$Type, pAction: $ClickAction$$Type, pPlayer: $Player$$Type): boolean
public "overrideOtherStackedOnMe"(ropeArrow: $ItemStack$$Type, ropeStack: $ItemStack$$Type, pSlot: $Slot$$Type, pAction: $ClickAction$$Type, pPlayer: $Player$$Type, pAccess: $SlotAccess$$Type): boolean
public "isValidRepairItem"(toRepair: $ItemStack$$Type, repair: $ItemStack$$Type): boolean
public "asProjectile"(level: $Level$$Type, pos: $Position$$Type, stack: $ItemStack$$Type, direction: $Direction$$Type): $Projectile
public "createArrow"(level: $Level$$Type, itemStack: $ItemStack$$Type, shooter: $LivingEntity$$Type, itemStack2: $ItemStack$$Type): $AbstractArrow
public static "getRopes"(stack: $ItemStack$$Type): integer
public static "addRopes"(stack: $ItemStack$$Type, ropes: integer): integer
public static "getRopeCapacity"(): integer
public static "isValidRope"(stack: $ItemStack$$Type): boolean
public "isBarVisible"(stack: $ItemStack$$Type): boolean
public "getBarWidth"(stack: $ItemStack$$Type): integer
public "getBarColor"(stack: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static get "ropeCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeArrowItem$$Type = ($RopeArrowItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RopeArrowItem$$Original = $RopeArrowItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.RopeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map} from "java.util.Map"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AbstractRopeBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.AbstractRopeBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RopeBlock extends $AbstractRopeBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "KNOT": $BooleanProperty
static readonly "FACING_TO_PROPERTY_MAP": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "setConnection"(dir: $Direction$$Type, state: $BlockState$$Type, value: boolean): $BlockState
public "hasConnection"(dir: $Direction$$Type, state: $BlockState$$Type): boolean
public static "isSupportingCeiling"(upState: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelReader$$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$$Type, world: $LevelReader$$Type): boolean
public static "canConnectDown"(downState: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeBlock$$Type = ($RopeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RopeBlock$$Original = $RopeBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.SoapClearRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$SoapClearRecipe} from "net.mehvahdjukaar.supplementaries.common.items.crafting.SoapClearRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SoapClearRecipe$Serializer implements $RecipeSerializer$$Interface<($SoapClearRecipe)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SoapClearRecipe)>
public "codec"(): $MapCodec<($SoapClearRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoapClearRecipe$Serializer$$Type = ($SoapClearRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoapClearRecipe$Serializer$$Original = $SoapClearRecipe$Serializer;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.RakedGravelBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ModBlockProperties$RakeDirection} from "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$RakeDirection"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ColorRGBA, $ColorRGBA$$Type} from "net.minecraft.util.ColorRGBA"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ColoredFallingBlock} from "net.minecraft.world.level.block.ColoredFallingBlock"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $RakedGravelBlock extends $ColoredFallingBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RakedGravelBlock)>
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
readonly "dustColor": $ColorRGBA
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "RAKE_DIRECTION": $EnumProperty<($ModBlockProperties$RakeDirection)>

constructor(color: $ColorRGBA$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, fromState: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, fromPos: $BlockPos$$Type): $BlockState
public static "getConnectedState"(blockstate: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, front: $Direction$$Type): $BlockState
public static "turnToGravel"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): void
public "tick"(state: $BlockState$$Type, world: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "codec"(): $MapCodec<($ColoredFallingBlock)>
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RakedGravelBlock$$Type = ($RakedGravelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RakedGravelBlock$$Original = $RakedGravelBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.TrappedPresentRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$TrappedPresentRecipe} from "net.mehvahdjukaar.supplementaries.common.items.crafting.TrappedPresentRecipe"

export class $TrappedPresentRecipe$Serializer implements $RecipeSerializer$$Interface<($TrappedPresentRecipe)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($TrappedPresentRecipe)>
public "codec"(): $MapCodec<($TrappedPresentRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrappedPresentRecipe$Serializer$$Type = ($TrappedPresentRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrappedPresentRecipe$Serializer$$Original = $TrappedPresentRecipe$Serializer;}
declare module "net.mehvahdjukaar.supplementaries.common.items.BuntingItemOld" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

/**
 * 
 * @deprecated
 */
export class $BuntingItemOld extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "inventoryTick"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slotId: integer, isSelected: boolean): void
public static "getColored"(color: $DyeColor$$Type): $ItemStack
public static "setColor"(item: $ItemStack$$Type, color: $DyeColor$$Type): void
public "getDescriptionId"(stack: $ItemStack$$Type): StringJS
public static "getColor"(item: $ItemStack$$Type): $DyeColor
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuntingItemOld$$Type = ($BuntingItemOld);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BuntingItemOld$$Original = $BuntingItemOld;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.PresentBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractPresentBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.AbstractPresentBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PresentBlock extends $AbstractPresentBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "PACKED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "SHAPE_LID": $VoxelShape

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PresentBlock$$Type = ($PresentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PresentBlock$$Original = $PresentBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.SelectableContainerItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Function$$Type} from "java.util.function.Function"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$SelectableContainerContent$Mut} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent$Mut"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$SelectableContainerContent} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SelectableContainerItem<C extends $SelectableContainerContent<(object)>, M extends $SelectableContainerContent$Mut<(object)>> extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "onDestroyed"(pItemEntity: $ItemEntity$$Type): void
public "overrideStackedOnOther"(myStack: $ItemStack$$Type, pSlot: $Slot$$Type, pAction: $ClickAction$$Type, pPlayer: $Player$$Type): boolean
public "overrideOtherStackedOnMe"(myStack: $ItemStack$$Type, pOther: $ItemStack$$Type, pSlot: $Slot$$Type, pAction: $ClickAction$$Type, pPlayer: $Player$$Type, pAccess: $SlotAccess$$Type): boolean
public "canFitInsideContainerItems"(stack: $ItemStack$$Type): boolean
public "canFitInsideContainerItems"(): boolean
public "getMaxSlots"(): integer
public "getComponentType"(): $DataComponentType<(C)>
public "use"(pLevel: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "modify"(stack: $ItemStack$$Type, consumer: $Function$$Type<(M), (boolean)>): boolean
public "isBarVisible"(pStack: $ItemStack$$Type): boolean
public "getBarWidth"(pStack: $ItemStack$$Type): integer
public "getBarColor"(pStack: $ItemStack$$Type): integer
public "getTooltipImage"(pStack: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "releaseUsing"(stack: $ItemStack$$Type, level: $Level$$Type, livingEntity: $LivingEntity$$Type, timeCharged: integer): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "maxSlots"(): integer
get "componentType"(): $DataComponentType<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableContainerItem$$Type<C, M> = ($SelectableContainerItem<(C), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SelectableContainerItem$$Original<C, M> = $SelectableContainerItem<(C), (M)>;}
declare module "net.mehvahdjukaar.supplementaries.common.block.IAntiquable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAntiquable$$Interface {
}

export class $IAntiquable implements $IAntiquable$$Interface {
 "supplementaries$isAntique"(): boolean
 "supplementaries$setAntique"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAntiquable$$Type = ($IAntiquable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAntiquable$$Original = $IAntiquable;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.SpawnEntityWithPassengersFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$SpawnEntityWithPassengersFeature$Config, $SpawnEntityWithPassengersFeature$Config$$Type} from "net.mehvahdjukaar.supplementaries.common.worldgen.SpawnEntityWithPassengersFeature$Config"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $SpawnEntityWithPassengersFeature extends $Feature<($SpawnEntityWithPassengersFeature$Config)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public "place"(context: $FeaturePlaceContext$$Type<($SpawnEntityWithPassengersFeature$Config$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnEntityWithPassengersFeature$$Type = ($SpawnEntityWithPassengersFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnEntityWithPassengersFeature$$Original = $SpawnEntityWithPassengersFeature;}
declare module "net.mehvahdjukaar.supplementaries.common.items.components.QuiverContent" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SelectableContainerContent$Mut} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent$Mut"
import {$SelectableContainerContent} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent"
import {$QuiverContent$Mutable} from "net.mehvahdjukaar.supplementaries.common.items.components.QuiverContent$Mutable"

export class $QuiverContent extends $SelectableContainerContent<($QuiverContent$Mutable)> {
static readonly "CODEC": $Codec<($QuiverContent)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($QuiverContent)>

public "toMutable"(): $SelectableContainerContent$Mut
public "getSelected"(): $ItemStack
public "getSelected"(supporterArrows: $Predicate$$Type<($ItemStack)>): $ItemStack
public static "empty"(count: integer): $QuiverContent
get "selected"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuiverContent$$Type = ($QuiverContent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuiverContent$$Original = $QuiverContent;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.BasaltAshFeature$Config" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$RuleTest, $RuleTest$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record} from "java.lang.Record"

export class $BasaltAshFeature$Config extends $Record implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($BasaltAshFeature$Config)>

constructor(tries: integer, xzSpread: integer, ySpread: integer, target: $RuleTest$$Type, ash: $BlockStateProvider$$Type, belowAsh: ($BlockState$$Type)?)

public "ash"(): $BlockStateProvider
public "xzSpread"(): integer
public "ySpread"(): integer
public "belowAsh"(): $Optional<($BlockState)>
public "tries"(): integer
public "equals"(o: any): boolean
public "target"(): $RuleTest
public "toString"(): StringJS
public "hashCode"(): integer
public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasaltAshFeature$Config$$Type = ({"ash"?: $BlockStateProvider$$Type, "ySpread"?: integer, "xzSpread"?: integer, "belowAsh"?: ($BlockState$$Type)?, "target"?: $RuleTest$$Type, "tries"?: integer}) | ([ash?: $BlockStateProvider$$Type, ySpread?: integer, xzSpread?: integer, belowAsh?: ($BlockState$$Type)?, target?: $RuleTest$$Type, tries?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasaltAshFeature$Config$$Original = $BasaltAshFeature$Config;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SpiderSkullBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$SkullBlock} from "net.minecraft.world.level.block.SkullBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SkullBlock$Type} from "net.minecraft.world.level.block.SkullBlock$Type"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiderSkullBlock extends $SkullBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SkullBlock)>
static readonly "MAX": integer
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
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
static readonly "TYPE": $SkullBlock$Type

constructor(properties: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiderSkullBlock$$Type = ($SpiderSkullBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiderSkullBlock$$Original = $SpiderSkullBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.CrankBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CrankBlock extends $WaterBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "animateTick"(stateIn: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "canSurvive"(state: $BlockState$$Type, worldIn: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "turn"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, ccw: boolean, player: $Player$$Type): void
public "onRemove"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "triggerEvent"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, id: integer, param: integer): boolean
public "getDirectSignal"(blockState: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(blockState: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrankBlock$$Type = ($CrankBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrankBlock$$Original = $CrankBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.BellowsBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BellowsBlock extends $Block implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "isFireSource"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): boolean
public "getOcclusionShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "propagatesSkylightDown"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public static "createVoxelShapeY"(height: float): $VoxelShape
public static "createVoxelShapeXZ"(height: float): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getCollisionShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "stepOn"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entityIn: $Entity$$Type): void
public "entityInside"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, entityIn: $Entity$$Type): void
public "neighborChanged"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, fromPos: $BlockPos$$Type, moving: boolean): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BellowsBlock$$Type = ($BellowsBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BellowsBlock$$Original = $BellowsBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.GunpowderBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$ILightable$FireSoundType$$Type} from "net.mehvahdjukaar.moonlight.api.block.ILightable$FireSoundType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LightUpBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.LightUpBlock"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$RedstoneSide} from "net.minecraft.world.level.block.state.properties.RedstoneSide"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $GunpowderBlock extends $LightUpBlock {
static readonly "WEST": $EnumProperty<($RedstoneSide)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $EnumProperty<($RedstoneSide)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $EnumProperty<($RedstoneSide)>
static readonly "BURNING": $IntegerProperty
static readonly "EAST": $EnumProperty<($RedstoneSide)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($EnumProperty<($RedstoneSide)>)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "LIT": $BooleanProperty
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, otherState: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, otherPos: $BlockPos$$Type): $BlockState
public "onPlace"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, moving: boolean): void
public "onCaughtFire"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, face: $Direction$$Type, igniter: $LivingEntity$$Type): void
public "onBlockExploded"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): void
public "tryLightUp"(entity: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
public "isLitUp"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "setLitUp"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, lit: boolean): void
public static "canBlockLightMeOnFire"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public static "canBlockLightMeOnFire"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
public static "createMiniExplosion"(world: $Level$$Type, pos: $BlockPos$$Type, alwaysFire: boolean): void
public "tick"(state: $BlockState$$Type, world: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "animateTick"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "canSurvive"(state: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "fallOn"(world: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, height: float): void
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "neighborChanged"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, neighborPos: $BlockPos$$Type, moving: boolean): void
public "triggerEvent"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, eventID: integer, eventParam: integer): boolean
public "updateIndirectNeighbourShapes"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, var1: integer, var2: integer): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunpowderBlock$$Type = ($GunpowderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GunpowderBlock$$Original = $GunpowderBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.RoadSignFeature$RandomState" {
import {$Record} from "java.lang.Record"

export class $RoadSignFeature$RandomState extends $Record {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoadSignFeature$RandomState$$Type = ({"candleHolderChance"?: float, "trapdoorChance"?: float, "wallLanternChance"?: float, "doubleSignChance"?: float, "stoneLanternChance"?: float, "logChance"?: float, "doubleLanternChance"?: float, "stoneChance"?: float}) | ([candleHolderChance?: float, trapdoorChance?: float, wallLanternChance?: float, doubleSignChance?: float, stoneLanternChance?: float, logChance?: float, doubleLanternChance?: float, stoneChance?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RoadSignFeature$RandomState$$Original = $RoadSignFeature$RandomState;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FrameBraceBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FrameBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.FrameBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FrameBraceBlock extends $FrameBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FRAMED_BLOCKS": $List<($Block)>
static readonly "LIGHT_LEVEL": $IntegerProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "FLIPPED": $BooleanProperty
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "OCCLUSION_SHAPE": $VoxelShape
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "HAS_BLOCK": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "applyRotationLock"(world: $Level$$Type, blockPos: $BlockPos$$Type, state: $BlockState$$Type, direction: $Direction$$Type, half: integer): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameBraceBlock$$Type = ($FrameBraceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrameBraceBlock$$Original = $FrameBraceBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SpiderSkullWallBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$WallSkullBlock} from "net.minecraft.world.level.block.WallSkullBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiderSkullWallBlock extends $WallSkullBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallSkullBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
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
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiderSkullWallBlock$$Type = ($SpiderSkullWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiderSkullWallBlock$$Original = $SpiderSkullWallBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.fluids.FiniteFluid" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BucketItem$$Type} from "net.minecraft.world.item.BucketItem"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $FiniteFluid extends $Fluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "LEVEL": $IntegerProperty

constructor(maxLayers: integer, block: $Supplier$$Type<($Block$$Type)>, bucket: $Supplier$$Type<($BucketItem$$Type)>)

public "isSource"(state: $FluidState$$Type): boolean
public "getTickDelay"(level: $LevelReader$$Type): integer
public "getOwnHeight"(state: $FluidState$$Type): float
public "getLayersPerBlock"(): integer
public "makeState"(level: integer): $FluidState
public "getHeight"(state: $FluidState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "tick"(level: $Level$$Type, pos: $BlockPos$$Type, state: $FluidState$$Type): void
public "getShape"(state: $FluidState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "getBucket"(): $Item
public "shouldSlowDown"(state: $FluidState$$Type): boolean
public "getAmount"(state: $FluidState$$Type): integer
public "getFlow"(blockReader: $BlockGetter$$Type, pos: $BlockPos$$Type, fluidState: $FluidState$$Type): $Vec3
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
get "layersPerBlock"(): integer
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiniteFluid$$Type = ($FiniteFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FiniteFluid$$Original = $FiniteFluid;}
declare module "net.mehvahdjukaar.supplementaries.common.items.DispenserMinecartItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export class $DispenserMinecartItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(pProperties: $Item$Properties$$Type)

public "useOn"(pContext: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserMinecartItem$$Type = ($DispenserMinecartItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispenserMinecartItem$$Original = $DispenserMinecartItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.HourGlassBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $HourGlassBlock extends $WaterBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $IntegerProperty
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HourGlassBlock$$Type = ($HourGlassBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HourGlassBlock$$Original = $HourGlassBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.AbstractRopeKnotBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$MimicBlock} from "net.mehvahdjukaar.moonlight.api.block.MimicBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ModBlockProperties$PostType, $ModBlockProperties$PostType$$Type} from "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$PostType"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IRotatable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IRotatable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AbstractRopeKnotBlock extends $MimicBlock implements $SimpleWaterloggedBlock$$Interface, $EntityBlock$$Interface, $IRotatable$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "POST_TYPE": $EnumProperty<($ModBlockProperties$PostType)>
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getOcclusionShape"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "getBlockSupportShape"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getRotatedState"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($BlockState)>
public "onRotated"(newState: $BlockState$$Type, oldState: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): void
public "getSideShape"(): $VoxelShape
public static "convertToRopeKnot"(type: $ModBlockProperties$PostType$$Type, state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "rotate"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, direction: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getCollisionShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "rotateOverAxis"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($Direction)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "sideShape"(): $VoxelShape
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRopeKnotBlock$$Type = ($AbstractRopeKnotBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractRopeKnotBlock$$Original = $AbstractRopeKnotBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.placeable_book.BookType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Record} from "java.lang.Record"

export class $BookType extends $Record {
static readonly "CODEC": $Codec<($BookType)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BookType)>

constructor(item: $Item$$Type, enchantPower: float, isHorizontal: boolean, bookVisuals: $ResourceLocation$$Type)

public "isHorizontal"(): boolean
public "enchantPower"(): float
public "bookVisuals"(): $ResourceLocation
public "item"(): $Item
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
get "horizontal"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.SupplementariesPlaceableBooks
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.SupplementariesPlaceableBooksTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookType$$Type = (Special.SupplementariesPlaceableBooks) | ({"isHorizontal"?: boolean, "bookVisuals"?: $ResourceLocation$$Type, "item"?: $Item$$Type, "enchantPower"?: float}) | ([isHorizontal?: boolean, bookVisuals?: $ResourceLocation$$Type, item?: $Item$$Type, enchantPower?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookType$$Original = $BookType;}
declare module "net.mehvahdjukaar.supplementaries.common.items.AbstractMobContainerItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $AbstractMobContainerItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "canFitInsideContainerItems"(): boolean
public "onLeftClickEntity"(stack: $ItemStack$$Type, player: $Player$$Type, entity: $Entity$$Type): boolean
public "doInteract"(stack: $ItemStack$$Type, player: $Player$$Type, entity: $Entity$$Type, hand: $InteractionHand$$Type): $InteractionResult
public "playCatchSound"(player: $Player$$Type): void
public "playFailSound"(player: $Player$$Type): void
public "playReleaseSound"(world: $Level$$Type, v: $Vec3$$Type): void
public "canItemCatch"(arg0: $Entity$$Type): boolean
public "isAquarium"(): boolean
public "getMobContainerHeight"(): float
public "getMobContainerWidth"(): float
public "saveEntityInItem"(entity: $Entity$$Type, currentStack: $ItemStack$$Type, bucketStack: $ItemStack$$Type): $ItemStack
public "blocksPlacement"(): boolean
public "addPlacementTooltip"(tooltip: $List$$Type<($Component$$Type)>): void
public "place"(context: $BlockPlaceContext$$Type): $InteractionResult
public "isFull"(stack: $ItemStack$$Type): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "aquarium"(): boolean
get "mobContainerHeight"(): float
get "mobContainerWidth"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMobContainerItem$$Type = ($AbstractMobContainerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractMobContainerItem$$Original = $AbstractMobContainerItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.BlockGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockGeneratorBlock extends $Block implements $EntityBlock$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeneratorBlock$$Type = ($BlockGeneratorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockGeneratorBlock$$Original = $BlockGeneratorBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent" {
import {$TooltipComponent$$Interface} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$SelectableContainerContent$Mut} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent$Mut"
import {$Item} from "net.minecraft.world.item.Item"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $SelectableContainerContent<M extends $SelectableContainerContent$Mut<(object)>> implements $TooltipComponent$$Interface, $TooltipProvider$$Interface {
constructor(stacks: $List$$Type<($ItemStack$$Type)>, selected: integer)

public "addToTooltip"(context: $Item$TooltipContext$$Type, tooltipAdder: $Consumer$$Type<($Component)>, tooltipFlag: $TooltipFlag$$Type): void
public "toMutable"(): M
public "getSelectedCount"(): integer
public "getBarSize"(): integer
public "getContentCopy"(): $List<($ItemStack)>
public "getSelectedSlot"(): integer
public "getSelectedItemCount"(): integer
public "getContentUnsafe"(): $List<($ItemStack)>
public "getSelectedUnsafe"(): $ItemStack
public "getSelectedItem"(): $Item
public "getSelected"(): $ItemStack
public "equals"(o: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "getSize"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
get "selectedCount"(): integer
get "barSize"(): integer
get "contentCopy"(): $List<($ItemStack)>
get "selectedSlot"(): integer
get "selectedItemCount"(): integer
get "contentUnsafe"(): $List<($ItemStack)>
get "selectedUnsafe"(): $ItemStack
get "selectedItem"(): $Item
get "selected"(): $ItemStack
get "empty"(): boolean
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableContainerContent$$Type<M> = ($SelectableContainerContent<(M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SelectableContainerContent$$Original<M> = $SelectableContainerContent<(M)>;}
declare module "net.mehvahdjukaar.supplementaries.common.block.IRopeConnection" {
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IRopeConnection$$Interface {

(arg0: $BlockState, arg1: $Direction): boolean
}

export class $IRopeConnection implements $IRopeConnection$$Interface {
static "isSupportingCeiling"(upState: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelReader$$Type): boolean
static "isSupportingCeiling"(pos: $BlockPos$$Type, world: $LevelReader$$Type): boolean
static "canConnectDown"(downState: $BlockState$$Type): boolean
 "shouldConnectToFace"(thisState: $BlockState$$Type, facingState: $BlockState$$Type, facingPos: $BlockPos$$Type, dir: $Direction$$Type, world: $LevelReader$$Type): boolean
 "canSideAcceptConnection"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRopeConnection$$Type = ((arg0: $BlockState, arg1: $Direction) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRopeConnection$$Original = $IRopeConnection;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.AwningBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f} from "org.joml.Vector3f"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IColored$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IColored"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AwningBlock extends $WaterBlock implements $IColored$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "SLANTED": $BooleanProperty
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "BOTTOM": $BooleanProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "skipRendering"(state: $BlockState$$Type, adjacentBlockState: $BlockState$$Type, side: $Direction$$Type): boolean
public "getBlockSupportShape"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "supportsBlankColor"(): boolean
public static "getNormalVector"(state: $BlockState$$Type): $Vector3f
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getColor"(): $DyeColor
public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "updateEntityAfterFallOn"(level: $BlockGetter$$Type, entity: $Entity$$Type): void
public "stepOn"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "fallOn"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, fallDistance: float): void
public "getInteractionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AwningBlock$$Type = ($AwningBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AwningBlock$$Original = $AwningBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.GoldTrapdoorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$TrapDoorBlock} from "net.minecraft.world.level.block.TrapDoorBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GoldTrapdoorBlock extends $TrapDoorBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TrapDoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "canBeOpened"(state: $BlockState$$Type): boolean
public "neighborChanged"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, blockIn: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldTrapdoorBlock$$Type = ($GoldTrapdoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GoldTrapdoorBlock$$Original = $GoldTrapdoorBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.RoadSignFeature$Config" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$WoodType, $WoodType$$Type} from "net.mehvahdjukaar.moonlight.api.set.wood.WoodType"
import {$RoadSignFeature$RandomState, $RoadSignFeature$RandomState$$Type} from "net.mehvahdjukaar.supplementaries.common.worldgen.RoadSignFeature$RandomState"
import {$Record} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RoadSignFeature$Config extends $Record implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($RoadSignFeature$Config)>

constructor(randomState: $RoadSignFeature$RandomState$$Type, postWood: $WoodType$$Type, signWood: $WoodType$$Type, fence: $BlockState$$Type, trapdoor: $BlockState$$Type, slab: $BlockState$$Type, log: $BlockState$$Type, cobble: $BlockState$$Type, mossyCobble: $BlockState$$Type, wall: $BlockState$$Type, mossyWall: $BlockState$$Type, lanternUp: $BlockState$$Type, lanternDown: $BlockState$$Type, candleHolder: $BlockState$$Type, stone: $BlockState$$Type, stoneSlab: $BlockState$$Type, stoneStairs: $BlockState$$Type, invalidMessage: StringJS)

public "slab"(): $BlockState
public "trapdoor"(): $BlockState
public "stone"(): $BlockState
public "randomState"(): $RoadSignFeature$RandomState
public "cobble"(): $BlockState
public "mossyCobble"(): $BlockState
public "mossyWall"(): $BlockState
public "signWood"(): $WoodType
public "stoneSlab"(): $BlockState
public "stoneStairs"(): $BlockState
public "lanternDown"(): $BlockState
public "lanternUp"(): $BlockState
public "candleHolder"(): $BlockState
public "postWood"(): $WoodType
public "invalidMessage"(): StringJS
public "wall"(): $BlockState
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "log"(): $BlockState
public "fence"(): $BlockState
public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoadSignFeature$Config$$Type = ({"signWood"?: $WoodType$$Type, "trapdoor"?: $BlockState$$Type, "stoneStairs"?: $BlockState$$Type, "postWood"?: $WoodType$$Type, "cobble"?: $BlockState$$Type, "lanternUp"?: $BlockState$$Type, "randomState"?: $RoadSignFeature$RandomState$$Type, "slab"?: $BlockState$$Type, "invalidMessage"?: StringJS, "mossyWall"?: $BlockState$$Type, "lanternDown"?: $BlockState$$Type, "candleHolder"?: $BlockState$$Type, "wall"?: $BlockState$$Type, "stoneSlab"?: $BlockState$$Type, "stone"?: $BlockState$$Type, "log"?: $BlockState$$Type, "mossyCobble"?: $BlockState$$Type, "fence"?: $BlockState$$Type}) | ([signWood?: $WoodType$$Type, trapdoor?: $BlockState$$Type, stoneStairs?: $BlockState$$Type, postWood?: $WoodType$$Type, cobble?: $BlockState$$Type, lanternUp?: $BlockState$$Type, randomState?: $RoadSignFeature$RandomState$$Type, slab?: $BlockState$$Type, invalidMessage?: StringJS, mossyWall?: $BlockState$$Type, lanternDown?: $BlockState$$Type, candleHolder?: $BlockState$$Type, wall?: $BlockState$$Type, stoneSlab?: $BlockState$$Type, stone?: $BlockState$$Type, log?: $BlockState$$Type, mossyCobble?: $BlockState$$Type, fence?: $BlockState$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RoadSignFeature$Config$$Original = $RoadSignFeature$Config;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SconceBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LightUpWaterBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.LightUpWaterBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SconceBlock extends $LightUpWaterBlock {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor<T extends $ParticleType<(object)>>(properties: $BlockBehaviour$Properties$$Type, particleData: $Supplier$$Type<(T)>)
constructor<T extends $ParticleType<(object)>>(properties: $BlockBehaviour$Properties$$Type, lightLevel: integer, particleData: $Supplier$$Type<(T)>)

public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "animateTick"(stateIn: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
/**
 * 
 * @deprecated
 */
public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(state: $BlockState$$Type, worldIn: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SconceBlock$$Type = ($SconceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SconceBlock$$Original = $SconceBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.SlingshotItem" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Predicate} from "java.util.function.Predicate"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ProjectileWeaponItem} from "net.minecraft.world.item.ProjectileWeaponItem"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IFirstPersonAnimationProvider, $IFirstPersonAnimationProvider$$Type, $IFirstPersonAnimationProvider$$Interface} from "net.mehvahdjukaar.moonlight.api.item.IFirstPersonAnimationProvider"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IThirdPersonAnimationProvider$$Type, $IThirdPersonAnimationProvider$$Interface} from "net.mehvahdjukaar.moonlight.api.item.IThirdPersonAnimationProvider"

export class $SlingshotItem extends $ProjectileWeaponItem implements $IFirstPersonAnimationProvider$$Interface, $IThirdPersonAnimationProvider$$Interface {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "supportsEnchantment"(stack: $ItemStack$$Type, enchantment: $Holder$$Type): boolean
public static "getPowerForTime"(charge: float, stack: $ItemStack$$Type, entity: $LivingEntity$$Type): float
public "getDefaultProjectileRange"(): integer
public static "getChargeDuration"(stack: $ItemStack$$Type, shooter: $LivingEntity$$Type): integer
public "poseLeftArm"<T extends $LivingEntity>(stack: $ItemStack$$Type, model: $HumanoidModel$$Type<(T)>, entity: T, mainHand: $HumanoidArm$$Type): boolean
public "poseRightArm"<T extends $LivingEntity>(stack: $ItemStack$$Type, model: $HumanoidModel$$Type<(T)>, entity: T, mainHand: $HumanoidArm$$Type): boolean
public "animateItemFirstPerson"(entity: $Player$$Type, stack: $ItemStack$$Type, hand: $InteractionHand$$Type, humanoidArm: $HumanoidArm$$Type, matrixStack: $PoseStack$$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public "isTwoHanded"(): boolean
public "getChargeSound"(stack: $ItemStack$$Type): $SoundEvent
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "releaseUsing"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $LivingEntity$$Type, timeCharged: integer): void
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public static "attachToItem"(target: $Item$$Type, object: $IFirstPersonAnimationProvider$$Type): void
public static "get"(target: $Item$$Type): $IFirstPersonAnimationProvider
public static "attachToItem"(target: $Item$$Type, object: $IThirdPersonAnimationProvider$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "defaultProjectileRange"(): integer
get "twoHanded"(): boolean
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlingshotItem$$Type = ($SlingshotItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlingshotItem$$Original = $SlingshotItem;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.BarnaclesMultifaceGrowthFeature$Config" {
import {$Collection} from "java.util.Collection"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$List} from "java.util.List"
import {$BarnaclesMultifaceGrowthFeature$PlacementEnvironment, $BarnaclesMultifaceGrowthFeature$PlacementEnvironment$$Type} from "net.mehvahdjukaar.supplementaries.common.worldgen.BarnaclesMultifaceGrowthFeature$PlacementEnvironment"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$MultifaceBlock, $MultifaceBlock$$Type} from "net.minecraft.world.level.block.MultifaceBlock"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Stream} from "java.util.stream.Stream"
import {$Record} from "java.lang.Record"

export class $BarnaclesMultifaceGrowthFeature$Config extends $Record implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($BarnaclesMultifaceGrowthFeature$Config)>

constructor(placeBlock: $MultifaceBlock$$Type, searchRange: integer, environment: $BarnaclesMultifaceGrowthFeature$PlacementEnvironment$$Type, requiresWater: boolean, chanceOfSpreading: float, cantBePlacedOn: $HolderSet$$Type<($Block)>)

public "placeBlock"(): $MultifaceBlock
public "getShuffledDirectionsExcept"(random: $RandomSource$$Type, direction: $Direction$$Type): $List<($Direction)>
public "getShuffledDirections"(random: $RandomSource$$Type): $Collection<($Direction)>
public "chanceOfSpreading"(): float
public "cantBePlacedOn"(): $HolderSet<($Block)>
public "requiresWater"(): boolean
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "environment"(): $BarnaclesMultifaceGrowthFeature$PlacementEnvironment
public "searchRange"(): integer
public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarnaclesMultifaceGrowthFeature$Config$$Type = ({"searchRange"?: integer, "requiresWater"?: boolean, "placeBlock"?: $MultifaceBlock$$Type, "environment"?: $BarnaclesMultifaceGrowthFeature$PlacementEnvironment$$Type, "cantBePlacedOn"?: $HolderSet$$Type<($Block)>, "chanceOfSpreading"?: float}) | ([searchRange?: integer, requiresWater?: boolean, placeBlock?: $MultifaceBlock$$Type, environment?: $BarnaclesMultifaceGrowthFeature$PlacementEnvironment$$Type, cantBePlacedOn?: $HolderSet$$Type<($Block)>, chanceOfSpreading?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BarnaclesMultifaceGrowthFeature$Config$$Original = $BarnaclesMultifaceGrowthFeature$Config;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.GoldDoorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DoorBlock} from "net.minecraft.world.level.block.DoorBlock"
import {$DoubleBlockHalf} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DoorHingeSide} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GoldDoorBlock extends $DoorBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(builder: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public static "tryOpenDoubleDoorKey"(world: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): void
public "canBeOpened"(state: $BlockState$$Type): boolean
public static "tryOpenDoubleDoor"(world: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): void
public "neighborChanged"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, blockIn: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "moreculling$shouldAttemptToCull"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "moreculling$canCull"(): boolean
public "moreculling$setCanCull"(arg0: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldDoorBlock$$Type = ($GoldDoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GoldDoorBlock$$Original = $GoldDoorBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.PulleyBlock" {
import {$RotatedPillarBlock} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IRotatable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IRotatable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ModBlockProperties$Winding} from "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$Winding"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PulleyBlock extends $RotatedPillarBlock implements $EntityBlock$$Interface, $IRotatable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "FLIPPED": $BooleanProperty
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
static readonly "TYPE": $EnumProperty<($ModBlockProperties$Winding)>
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getMenuProvider"(state: $BlockState$$Type, blockEntity: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getRotatedState"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($BlockState)>
public "onRotated"(newState: $BlockState$$Type, oldState: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, originalRot: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): void
public "windPulley"(state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, rot: $Rotation$$Type, dir: $Direction$$Type): boolean
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "rotateOverAxis"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($Direction)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PulleyBlock$$Type = ($PulleyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PulleyBlock$$Original = $PulleyBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.RoadSignStructure" {
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$DimensionPadding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.DimensionPadding"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $RoadSignStructure extends $Structure {
static readonly "CODEC": $MapCodec<($RoadSignStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(config: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, startJigsawName: ($ResourceLocation$$Type)?, minY: integer, maxY: integer, dimensionPadding: $DimensionPadding$$Type, liquidSettings: $LiquidSettings$$Type)

public "findGenerationPoint"(context: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
public static "recomputeValidStructureCache"(access: $RegistryAccess$$Type): void
public static "clearCache"(): void
public "type"(): $StructureType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoadSignStructure$$Type = ($RoadSignStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RoadSignStructure$$Original = $RoadSignStructure;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SackBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$FallingBlockEntity$$Type} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ColorRGBA, $ColorRGBA$$Type} from "net.minecraft.util.ColorRGBA"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ColoredFallingBlock} from "net.minecraft.world.level.block.ColoredFallingBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SackBlock extends $ColoredFallingBlock implements $EntityBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SackBlock)>
static readonly "SHAPE_OPEN": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "CONTENTS": $ResourceLocation
static readonly "OPEN": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
readonly "dustColor": $ColorRGBA
static readonly "SHAPE_CLOSED": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(color: $ColorRGBA$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "playerWillDestroy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "onPlace"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, isMoving: boolean): void
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): integer
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "onLand"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, state1: $BlockState$$Type, blockEntity: $FallingBlockEntity$$Type): void
public static "canFall"(pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "codec"(): $MapCodec<($ColoredFallingBlock)>
public "onRemove"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
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
export type $SackBlock$$Type = ($SackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SackBlock$$Original = $SackBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.RopeItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $RopeItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "place"(context: $BlockPlaceContext$$Type): $InteractionResult
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
export type $RopeItem$$Type = ($RopeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RopeItem$$Original = $RopeItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FenceMimicBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$MimicBlock} from "net.mehvahdjukaar.moonlight.api.block.MimicBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FenceMimicBlock extends $MimicBlock implements $SimpleWaterloggedBlock$$Interface, $EntityBlock$$Interface {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, world: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getCollisionShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceMimicBlock$$Type = ($FenceMimicBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FenceMimicBlock$$Original = $FenceMimicBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.misc.IMovingBlockSource" {
import {$BlockSource} from "net.minecraft.core.dispenser.BlockSource"
import {$DispenserBlockEntity$$Type} from "net.minecraft.world.level.block.entity.DispenserBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IMovingBlockSource$$Interface {
}

export class $IMovingBlockSource implements $IMovingBlockSource$$Interface {
 "supp$setEntity"(arg0: $Entity$$Type): void
 "supp$getEntity"(): $Entity
static "create"(level: $ServerLevel$$Type, entity: $Entity$$Type, be: $DispenserBlockEntity$$Type): $BlockSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMovingBlockSource$$Type = ($IMovingBlockSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMovingBlockSource$$Original = $IMovingBlockSource;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SafeBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ILavaAndWaterLoggable$$Interface} from "net.mehvahdjukaar.supplementaries.common.block.ILavaAndWaterLoggable"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SafeBlock extends $Block implements $ILavaAndWaterLoggable$$Interface, $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "CONTENTS": $ResourceLocation
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "LAVALOGGED": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "onDestroyedByPlayer"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, willHarvest: boolean, fluid: $FluidState$$Type): boolean
public "propagatesSkylightDown"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getMenuProvider"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "tick"(state: $BlockState$$Type, serverLevel: $ServerLevel$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fluidState: $FluidState$$Type): boolean
public "canPlaceLiquid"(player: $Player$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "pickupBlock"(player: $Player$$Type, pLevel: $LevelAccessor$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SafeBlock$$Type = ($SafeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SafeBlock$$Original = $SafeBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.RopeBuntingBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
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
import {$Map} from "java.util.Map"
import {$ModBlockProperties$Bunting} from "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$Bunting"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AbstractRopeBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.AbstractRopeBlock"
import {$IRotatable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IRotatable"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$IWashable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IWashable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $RopeBuntingBlock extends $AbstractRopeBlock implements $EntityBlock$$Interface, $IRotatable$$Interface, $IWashable$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $EnumProperty<($ModBlockProperties$Bunting)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $EnumProperty<($ModBlockProperties$Bunting)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $EnumProperty<($ModBlockProperties$Bunting)>
static readonly "UP": $BooleanProperty
static readonly "FLIP_TILE": $BooleanProperty
static readonly "EAST": $EnumProperty<($ModBlockProperties$Bunting)>
static readonly "UPDATE_IMMEDIATE": integer
readonly "buntingToRope": $Map<($BlockState), ($BlockState)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "KNOT": $BooleanProperty
static readonly "HORIZONTAL_FACING_TO_PROPERTY_MAP": $Map<($Direction), ($EnumProperty<($ModBlockProperties$Bunting)>)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "popItem"(level: $Level$$Type, pos: $BlockPos$$Type, stack: $ItemStack$$Type, dir: $Direction$$Type): void
public "setConnection"(dir: $Direction$$Type, state: $BlockState$$Type, value: boolean): $BlockState
public "getRotatedState"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($BlockState)>
public "rotateOverAxis"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($Direction)>
public "tryWash"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, hitVec: $Vec3$$Type): boolean
public "hasConnection"(dir: $Direction$$Type, state: $BlockState$$Type): boolean
public static "canSupportBunting"(state: $BlockState$$Type, index: integer): boolean
public static "toRope"(state: $BlockState$$Type): $BlockState
public static "fromRope"(state: $BlockState$$Type): $BlockState
public static "fromRope"(state: $BlockState$$Type, hit: $BlockHitResult$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "rotate"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, direction: $Rotation$$Type): $BlockState
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "getCollisionShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "onRotated"(newState: $BlockState$$Type, oldState: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): void
public static "isSupportingCeiling"(upState: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelReader$$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$$Type, world: $LevelReader$$Type): boolean
public static "canConnectDown"(downState: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RopeBuntingBlock$$Type = ($RopeBuntingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RopeBuntingBlock$$Original = $RopeBuntingBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.CannonBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ILightable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.ILightable"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ILightable$FireSoundType$$Type} from "net.mehvahdjukaar.moonlight.api.block.ILightable$FireSoundType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IAnalogRotatable$$Interface} from "net.mehvahdjukaar.supplementaries.common.block.IAnalogRotatable"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List$$Type} from "java.util.List"
import {$DirectionalBlock} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IRotatable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IRotatable"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CannonBlock extends $DirectionalBlock implements $EntityBlock$$Interface, $ILightable$$Interface, $IRotatable$$Interface, $IAnalogRotatable$$Interface {
static readonly "MAX_POWER_LEVELS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CannonBlock)>
static readonly "ROTATE_TILE": $EnumProperty<($Rotation)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
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
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getOcclusionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "propagatesSkylightDown"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getMenuProvider"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getShadeBrightness"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type): integer
public "getVisualShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "tryLightUp"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "isLitUp"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "setLitUp"(blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, igniter: $Entity$$Type, on: boolean): void
public "getRotatedState"(state: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($BlockState)>
public "onRotated"(newState: $BlockState$$Type, oldState: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): void
public "rotateAnalog"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, face: $Direction$$Type, ccw: boolean, speed: float): void
public "canRotateAnalog"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, face: $Direction$$Type): boolean
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(blockState: $BlockState$$Type): boolean
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
/**
 * 
 * @deprecated
 */
public "interactWithEntity"(level: $Level$$Type, state: $BlockState$$Type, projectile: $Entity$$Type, pos: $BlockPos$$Type): boolean
public "tryExtinguish"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
public "canBeExtinguishedBy"(item: $ItemStack$$Type): boolean
public "playExtinguishSound"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type): void
public "spawnSmokeParticles"(state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): void
public "setLitUp"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, lit: boolean): void
public "lightableInteractWithPlayerItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): $ItemInteractionResult
public "lightableInteractWithEntity"(level: $Level$$Type, state: $BlockState$$Type, projectile: $Entity$$Type, pos: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
public "lightUp"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
public "playLightUpSound"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type, type: $ILightable$FireSoundType$$Type): void
/**
 * 
 * @deprecated
 */
public "interactWithPlayerItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): $ItemInteractionResult
/**
 * 
 * @deprecated
 */
public "extinguish"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
public "rotateOverAxis"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($Direction)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBlock$$Type = ($CannonBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CannonBlock$$Original = $CannonBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.ItemLoreRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemLoreRecipe} from "net.mehvahdjukaar.supplementaries.common.items.crafting.ItemLoreRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ItemLoreRecipe$Serializer implements $RecipeSerializer$$Interface<($ItemLoreRecipe)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemLoreRecipe)>
public "codec"(): $MapCodec<($ItemLoreRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLoreRecipe$Serializer$$Type = ($ItemLoreRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemLoreRecipe$Serializer$$Original = $ItemLoreRecipe$Serializer;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FlintBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$PistonMovingBlockEntity$$Type} from "net.minecraft.world.level.block.piston.PistonMovingBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$IPistonMotionReact$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IPistonMotionReact"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FlintBlock extends $Block implements $IPistonMotionReact$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "onMoved"(level: $Level$$Type, pos: $BlockPos$$Type, movedState: $BlockState$$Type, direction: $Direction$$Type, extending: boolean): void
public static "canBlockCreateSpark"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, face: $Direction$$Type): boolean
public "stepOn"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, oldBlock: $Block$$Type, targetPos: $BlockPos$$Type, isMoving: boolean): void
public "ticksWhileMoved"(): boolean
public "moveTick"(level: $Level$$Type, pos: $BlockPos$$Type, movedState: $BlockState$$Type, aabb: $AABB$$Type, tile: $PistonMovingBlockEntity$$Type): void
public "onMagnetMoved"(level: $Level$$Type, blockPos: $BlockPos$$Type, direction: $Direction$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlintBlock$$Type = ($FlintBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlintBlock$$Original = $FlintBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$Topping" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$SoftFluidStack$$Type} from "net.mehvahdjukaar.moonlight.api.fluids.SoftFluidStack"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"

export class $ModBlockProperties$Topping extends $Enum<($ModBlockProperties$Topping)> implements $StringRepresentable$$Interface {
static readonly "HONEY": $ModBlockProperties$Topping
static readonly "CHOCOLATE": $ModBlockProperties$Topping
static readonly "JAM": $ModBlockProperties$Topping
static readonly "NONE": $ModBlockProperties$Topping
static readonly "SYRUP": $ModBlockProperties$Topping

public static "fromItem"(item: $ItemStack$$Type, ra: $HolderLookup$Provider$$Type): $Pair<($ModBlockProperties$Topping), ($Item)>
public static "fromFluid"(stack: $SoftFluidStack$$Type): $ModBlockProperties$Topping
public static "fromFluidItem"(item: $ItemStack$$Type, ra: $HolderLookup$Provider$$Type): $Pair<($ModBlockProperties$Topping), ($Item)>
public static "values"(): ($ModBlockProperties$Topping)[]
public static "valueOf"(name: StringJS): $ModBlockProperties$Topping
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
export type $ModBlockProperties$Topping$$Type = (("none") | ("honey") | ("syrup") | ("chocolate") | ("jam"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModBlockProperties$Topping$$Original = $ModBlockProperties$Topping;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.NetheriteTrapdoorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ILavaAndWaterLoggable$$Interface} from "net.mehvahdjukaar.supplementaries.common.block.ILavaAndWaterLoggable"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$TrapDoorBlock} from "net.minecraft.world.level.block.TrapDoorBlock"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $NetheriteTrapdoorBlock extends $TrapDoorBlock implements $ILavaAndWaterLoggable$$Interface, $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TrapDoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "LAVALOGGED": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(pState: $BlockState$$Type, direction: $Direction$$Type, pFacingState: $BlockState$$Type, pLevel: $LevelAccessor$$Type, pCurrentPos: $BlockPos$$Type, pFacingPos: $BlockPos$$Type): $BlockState
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "onDestroyedByPlayer"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, willHarvest: boolean, fluid: $FluidState$$Type): boolean
public "placeLiquid"(p_204509_1_: $LevelAccessor$$Type, p_204509_2_: $BlockPos$$Type, p_204509_3_: $BlockState$$Type, p_204509_4_: $FluidState$$Type): boolean
public "canPlaceLiquid"(player: $Player$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "pickupBlock"(player: $Player$$Type, pLevel: $LevelAccessor$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type): $ItemStack
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getSoundType"(state: $BlockState$$Type): $SoundType
public "neighborChanged"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, blockIn: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteTrapdoorBlock$$Type = ($NetheriteTrapdoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetheriteTrapdoorBlock$$Original = $NetheriteTrapdoorBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SusGravelBricksBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$GravelBricksBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.GravelBricksBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SusGravelBricksBlock extends $GravelBricksBlock implements $EntityBlock$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SusGravelBricksBlock$$Type = ($SusGravelBricksBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SusGravelBricksBlock$$Original = $SusGravelBricksBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.PresentItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IColored$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IColored"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $PresentItem extends $BlockItem implements $IColored$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "canFitInsideContainerItems"(): boolean
public "canFitInsideContainerItems"(stack: $ItemStack$$Type): boolean
public "supportsBlankColor"(): boolean
public "getMaxStackSize"(stack: $ItemStack$$Type): integer
public "getColor"(): $DyeColor
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PresentItem$$Type = ($PresentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PresentItem$$Original = $PresentItem;}
declare module "net.mehvahdjukaar.supplementaries.common.items.SafeItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $SafeItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(blockIn: $Block$$Type, builder: $Item$Properties$$Type)

public "overrideStackedOnOther"(stack: $ItemStack$$Type, slot: $Slot$$Type, action: $ClickAction$$Type, player: $Player$$Type): boolean
public "overrideOtherStackedOnMe"(stack: $ItemStack$$Type, incoming: $ItemStack$$Type, slot: $Slot$$Type, action: $ClickAction$$Type, player: $Player$$Type, accessor: $SlotAccess$$Type): boolean
public "canFitInsideContainerItems"(): boolean
public "getTooltipImage"(pStack: $ItemStack$$Type): $Optional<($TooltipComponent)>
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
export type $SafeItem$$Type = ($SafeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SafeItem$$Original = $SafeItem;}
declare module "net.mehvahdjukaar.supplementaries.common.items.SackItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $SackItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(blockIn: $Block$$Type, builder: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "onDestroyed"(pItemEntity: $ItemEntity$$Type): void
public "overrideStackedOnOther"(stack: $ItemStack$$Type, slot: $Slot$$Type, action: $ClickAction$$Type, player: $Player$$Type): boolean
public "overrideOtherStackedOnMe"(stack: $ItemStack$$Type, incoming: $ItemStack$$Type, slot: $Slot$$Type, action: $ClickAction$$Type, player: $Player$$Type, accessor: $SlotAccess$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, worldIn: $Level$$Type, entityIn: $Entity$$Type, itemSlot: integer, isSelected: boolean): void
public "canFitInsideContainerItems"(): boolean
public "canFitInsideContainerItems"(stack: $ItemStack$$Type): boolean
public static "getEncumber"(slotItem: $ItemStack$$Type): float
public "getTooltipImage"(pStack: $ItemStack$$Type): $Optional<($TooltipComponent)>
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
export type $SackItem$$Type = ($SackItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SackItem$$Original = $SackItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.BubbleBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $BubbleBlock extends $Block implements $EntityBlock$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, placeContext: $BlockPlaceContext$$Type): boolean
public "isPossibleToRespawnInThis"(blockState: $BlockState$$Type): boolean
public "propagatesSkylightDown"(state: $BlockState$$Type, blockGetter: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, tBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "makeParticle"(pos: $BlockPos$$Type, level: $Level$$Type): void
public static "breakBubble"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): void
public "tick"(state: $BlockState$$Type, serverLevel: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, blockGetter: $BlockGetter$$Type, pos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$$Type, getter: $BlockGetter$$Type, pos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "addLandingEffects"(state1: $BlockState$$Type, worldserver: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public static "sendParticles"(pos: $BlockPos$$Type, level: $ServerLevel$$Type): void
public "stepOn"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "fallOn"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, v: float): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleBlock$$Type = ($BubbleBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BubbleBlock$$Original = $BubbleBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SpringLauncherArmBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
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
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SpringLauncherArmBlock extends $Block implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "EXTENDING": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getOcclusionShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringLauncherArmBlock$$Type = ($SpringLauncherArmBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpringLauncherArmBlock$$Original = $SpringLauncherArmBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SpeakerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpeakerBlock extends $Block implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "ANTIQUE": $BooleanProperty
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
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "updatePower"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): void
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, fromPos: $BlockPos$$Type, moving: boolean): void
public "triggerEvent"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, eventID: integer, eventParam: integer): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeakerBlock$$Type = ($SpeakerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpeakerBlock$$Original = $SpeakerBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FlaxBaleBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FlaxBaleBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "fallOn"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, height: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaxBaleBlock$$Type = ($FlaxBaleBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlaxBaleBlock$$Original = $FlaxBaleBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.CannonBallItem" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $CannonBallItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, handIn: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
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
export type $CannonBallItem$$Type = ($CannonBallItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CannonBallItem$$Original = $CannonBallItem;}
declare module "net.mehvahdjukaar.supplementaries.common.items.TimberFrameItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $TimberFrameItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
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
export type $TimberFrameItem$$Type = ($TimberFrameItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimberFrameItem$$Original = $TimberFrameItem;}
declare module "net.mehvahdjukaar.supplementaries.common.entities.IFluteParrot" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $IFluteParrot$$Interface {

(arg0: $Player): void
}

export class $IFluteParrot implements $IFluteParrot$$Interface {
 "supplementaries$setPartyByFlute"(arg0: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluteParrot$$Type = ((arg0: $Player) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluteParrot$$Original = $IFluteParrot;}
declare module "net.mehvahdjukaar.supplementaries.common.items.LumiseneBottleItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LumiseneBottleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getDrinkingSound"(): $SoundEvent
public "getEatingSound"(): $SoundEvent
public "getUseDuration"(stack: $ItemStack$$Type, entity: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(stack: $ItemStack$$Type, level: $Level$$Type, livingEntity: $LivingEntity$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "drinkingSound"(): $SoundEvent
get "eatingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LumiseneBottleItem$$Type = ($LumiseneBottleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LumiseneBottleItem$$Original = $LumiseneBottleItem;}
declare module "net.mehvahdjukaar.supplementaries.common.items.components.QuiverContent$Mutable" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$QuiverContent} from "net.mehvahdjukaar.supplementaries.common.items.components.QuiverContent"
import {$SelectableContainerContent$Mut} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent$Mut"
import {$SelectableContainerContent} from "net.mehvahdjukaar.supplementaries.common.items.components.SelectableContainerContent"

export class $QuiverContent$Mutable extends $SelectableContainerContent$Mut<($QuiverContent)> {
public "toImmutable"(): $SelectableContainerContent
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuiverContent$Mutable$$Type = ($QuiverContent$Mutable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuiverContent$Mutable$$Original = $QuiverContent$Mutable;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.StructureTempBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StructureTempBlock extends $Block implements $EntityBlock$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTempBlock$$Type = ($StructureTempBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTempBlock$$Original = $StructureTempBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.BarnaclesBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$MultifaceBlock} from "net.minecraft.world.level.block.MultifaceBlock"
import {$BonemealableBlock$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BonemealableBlock$$Interface} from "net.minecraft.world.level.block.BonemealableBlock"
import {$MultifaceSpreader} from "net.minecraft.world.level.block.MultifaceSpreader"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $BarnaclesBlock extends $MultifaceBlock implements $BonemealableBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BarnaclesBlock)>
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "isValidBonemealTarget"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isBonemealSuccess"(level: $Level$$Type, random: $RandomSource$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "performBonemeal"(level: $ServerLevel$$Type, random: $RandomSource$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): void
public "getSpreader"(): $MultifaceSpreader
public "isValidStateForPlacement"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): boolean
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "codec"(): $MapCodec<($BarnaclesBlock)>
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "getType"(): $BonemealableBlock$Type
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "spreader"(): $MultifaceSpreader
get "type"(): $BonemealableBlock$Type
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarnaclesBlock$$Type = ($BarnaclesBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BarnaclesBlock$$Original = $BarnaclesBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.RoadSignFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$List$$Type} from "java.util.List"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$LocatedStructure$$Type} from "net.mehvahdjukaar.supplementaries.common.worldgen.LocatedStructure"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$RoadSignFeature$Config, $RoadSignFeature$Config$$Type} from "net.mehvahdjukaar.supplementaries.common.worldgen.RoadSignFeature$Config"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $RoadSignFeature extends $Feature<($RoadSignFeature$Config)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public static "isNotSolid"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type): boolean
public static "applyPostProcess"(c: $RoadSignFeature$Config$$Type, level: $ServerLevel$$Type, generatorPos: $BlockPos$$Type, foundVillages: $List$$Type<($LocatedStructure$$Type)>): void
public "place"(context: $FeaturePlaceContext$$Type<($RoadSignFeature$Config$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoadSignFeature$$Type = ($RoadSignFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RoadSignFeature$$Original = $RoadSignFeature;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.BookPileBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $BookPileBlock extends $WaterBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "BOOKS": $IntegerProperty
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type, horizontal: boolean)
constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, context: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "playerDestroy"(level: $Level$$Type, player: $Player$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, blockEntity: $BlockEntity$$Type, tool: $ItemStack$$Type): void
public "setPlacedBy"(world: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getEnchantPowerBonus"(state: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPileBlock$$Type = ($BookPileBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookPileBlock$$Original = $BookPileBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.PancakeBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ModBlockProperties$Topping, $ModBlockProperties$Topping$$Type} from "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$Topping"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$ISoftFluidConsumer$$Interface} from "net.mehvahdjukaar.moonlight.api.block.ISoftFluidConsumer"
import {$SoftFluidStack$$Type} from "net.mehvahdjukaar.moonlight.api.fluids.SoftFluidStack"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PancakeBlock extends $WaterBlock implements $ISoftFluidConsumer$$Interface {
static readonly "TOPPING": $EnumProperty<($ModBlockProperties$Topping)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PANCAKES": $IntegerProperty
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, useContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public static "setTopping"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, topping: $ModBlockProperties$Topping$$Type): boolean
public "tryAcceptingFluid"(world: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, fluid: $SoftFluidStack$$Type): boolean
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, handIn: $InteractionHand$$Type, hit: $BlockHitResult$$Type): $ItemInteractionResult
public "canSurvive"(state: $BlockState$$Type, worldIn: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PancakeBlock$$Type = ($PancakeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PancakeBlock$$Original = $PancakeBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.WeatheredMapRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $WeatheredMapRecipe extends $CustomRecipe {
constructor(category: $CraftingBookCategory$$Type, ink: $Ingredient$$Type, setAntique: boolean)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(inv: $CraftingInput$$Type, access: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public static "onWorldUnload"(): void
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(inv: $CraftingInput$$Type, level: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeatheredMapRecipe$$Type = ($WeatheredMapRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeatheredMapRecipe$$Original = $WeatheredMapRecipe;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.BambooSpikesBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List} from "java.util.List"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$PotionContents$$Type} from "net.minecraft.world.item.alchemy.PotionContents"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IWashable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IWashable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$PistonMovingBlockEntity$$Type} from "net.minecraft.world.level.block.piston.PistonMovingBlockEntity"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ISoftFluidConsumer$$Interface} from "net.mehvahdjukaar.moonlight.api.block.ISoftFluidConsumer"
import {$SoftFluidStack$$Type} from "net.mehvahdjukaar.moonlight.api.fluids.SoftFluidStack"
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IPistonMotionReact$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IPistonMotionReact"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BambooSpikesBlock extends $WaterBlock implements $ISoftFluidConsumer$$Interface, $EntityBlock$$Interface, $IWashable$$Interface, $IPistonMotionReact$$Interface {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "TIPPED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "getAdjacentBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type, originalType: $PathType$$Type): $PathType
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "ticksWhileMoved"(): boolean
public "moveTick"(level: $Level$$Type, pos: $BlockPos$$Type, movedState: $BlockState$$Type, aabb: $AABB$$Type, tile: $PistonMovingBlockEntity$$Type): void
public static "getDamageSource"(level: $Level$$Type): $DamageSource
public "tryAcceptingFluid"(world: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, fluid: $SoftFluidStack$$Type): boolean
public "getSpikeItem"(te: $BlockEntity$$Type): $ItemStack
public static "tryAddingPotion"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, potion: $PotionContents$$Type, adder: $Entity$$Type): boolean
public "tryWash"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, hitVec: $Vec3$$Type): boolean
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "animateTick"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entityIn: $Entity$$Type): void
public "getInteractionShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "onMoved"(level: $Level$$Type, pos: $BlockPos$$Type, movedState: $BlockState$$Type, direction: $Direction$$Type, extending: boolean): void
public "onMagnetMoved"(level: $Level$$Type, blockPos: $BlockPos$$Type, direction: $Direction$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BambooSpikesBlock$$Type = ($BambooSpikesBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BambooSpikesBlock$$Original = $BambooSpikesBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.AshLayerBlock" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$FallingBlockEntity$$Type} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ColorRGBA, $ColorRGBA$$Type} from "net.minecraft.util.ColorRGBA"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$IFireConsumeBlockEvent$$Type} from "net.mehvahdjukaar.moonlight.api.events.IFireConsumeBlockEvent"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ColoredFallingBlock} from "net.minecraft.world.level.block.ColoredFallingBlock"
import {$ISimpleBrushable$$Interface} from "net.mehvahdjukaar.supplementaries.common.block.ISimpleBrushable"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Biome$Precipitation$$Type} from "net.minecraft.world.level.biome.Biome$Precipitation"

export class $AshLayerBlock extends $ColoredFallingBlock implements $ISimpleBrushable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AshLayerBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "RECURSION_HACK": $ThreadLocal<(boolean)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
readonly "dustColor": $ColorRGBA
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "GRASS_SPREAD_WIDTH": integer
static readonly "UPDATE_CLIENTS": integer

constructor(color: $ColorRGBA$$Type, properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(pState: $BlockState$$Type, useContext: $BlockPlaceContext$$Type): boolean
public "canBeReplaced"(state: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, facingState: $BlockState$$Type, world: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, otherPos: $BlockPos$$Type): $BlockState
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "handlePrecipitation"(pState: $BlockState$$Type, level: $Level$$Type, pPos: $BlockPos$$Type, pPrecipitation: $Biome$Precipitation$$Type): void
public "onPlace"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, isMoving: boolean): void
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public "getBlockSupportShape"(pState: $BlockState$$Type, pReader: $BlockGetter$$Type, pPos: $BlockPos$$Type): $VoxelShape
public "getVisualShape"(pState: $BlockState$$Type, pReader: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "randomTick"(pState: $BlockState$$Type, level: $ServerLevel$$Type, pPos: $BlockPos$$Type, pRandom: $RandomSource$$Type): void
public "onProjectileHit"(level: $Level$$Type, state: $BlockState$$Type, pHit: $BlockHitResult$$Type, projectile: $Projectile$$Type): void
public "onLand"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, replaceableState: $BlockState$$Type, fallingBlock: $FallingBlockEntity$$Type): void
public "brush"(state: $BlockState$$Type, pos: $BlockPos$$Type, level: $Level$$Type, stack: $ItemStack$$Type, livingEntity: $Player$$Type, arm: $HumanoidArm$$Type, hit: $BlockHitResult$$Type, particlesDir: $Vec3$$Type): boolean
public static "applyBonemeal"(stack: $ItemStack$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public static "tryConvertToAsh"(event: $IFireConsumeBlockEvent$$Type): void
public static "updateBasaltBelow"(selfPos: $BlockPos$$Type, level: $Level$$Type): boolean
public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, pRand: $RandomSource$$Type): void
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($ColoredFallingBlock)>
public "getCollisionShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "fallOn"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, height: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AshLayerBlock$$Type = ($AshLayerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AshLayerBlock$$Original = $AshLayerBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.CrystalDisplayBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CrystalDisplayBlock extends $WaterBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ATTACHED": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, fromPos: $BlockPos$$Type, moving: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalDisplayBlock$$Type = ($CrystalDisplayBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrystalDisplayBlock$$Original = $CrystalDisplayBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SugarBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ConcretePowderBlock} from "net.minecraft.world.level.block.ConcretePowderBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$FallingBlockEntity$$Type} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SugarBlock extends $ConcretePowderBlock {
readonly "concrete": $Block
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ConcretePowderBlock)>
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "getDustColor"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "onLand"(level: $Level$$Type, pos: $BlockPos$$Type, blockState: $BlockState$$Type, blockState2: $BlockState$$Type, fallingBlock: $FallingBlockEntity$$Type): void
public "spawnDissolveParticles"(level: $Level$$Type, pos: $BlockPos$$Type): void
public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "triggerEvent"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, id: integer, param: integer): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarBlock$$Type = ($SugarBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SugarBlock$$Original = $SugarBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.BasaltAshFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$Optional$$Type} from "java.util.Optional"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$RuleTest$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$BasaltAshFeature$Config, $BasaltAshFeature$Config$$Type} from "net.mehvahdjukaar.supplementaries.common.worldgen.BasaltAshFeature$Config"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $BasaltAshFeature extends $Feature<($BasaltAshFeature$Config)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public "placeAsh"(worldGenLevel: $WorldGenLevel$$Type, ySpread: integer, origin: $BlockPos$$Type, basaltTest: $RuleTest$$Type, ash: $BlockStateProvider$$Type, belowAsh: ($BlockState$$Type)?, random: $RandomSource$$Type): boolean
public "place"(context: $FeaturePlaceContext$$Type<($BasaltAshFeature$Config$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasaltAshFeature$$Type = ($BasaltAshFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasaltAshFeature$$Original = $BasaltAshFeature;}
declare module "net.mehvahdjukaar.supplementaries.common.entities.IPartyCreeper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPartyCreeper$$Interface {
}

export class $IPartyCreeper implements $IPartyCreeper$$Interface {
 "supplementaries$isFestive"(): boolean
 "supplementaries$setFestive"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartyCreeper$$Type = ($IPartyCreeper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartyCreeper$$Original = $IPartyCreeper;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.GravelBricksBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GravelBricksBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "fallOn"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, fallDistance: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravelBricksBlock$$Type = ($GravelBricksBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GravelBricksBlock$$Original = $GravelBricksBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.CageItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$AbstractMobContainerItem} from "net.mehvahdjukaar.supplementaries.common.items.AbstractMobContainerItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $CageItem extends $AbstractMobContainerItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "playCatchSound"(player: $Player$$Type): void
public "playFailSound"(player: $Player$$Type): void
public "playReleaseSound"(world: $Level$$Type, v: $Vec3$$Type): void
public "canItemCatch"(e: $Entity$$Type): boolean
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
export type $CageItem$$Type = ($CageItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CageItem$$Original = $CageItem;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.SafeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SafeRecipe extends $CustomRecipe {
constructor(category: $CraftingBookCategory$$Type, shulker: $Ingredient$$Type, ingot: $Ingredient$$Type)

public "assemble"(inv: $CraftingInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(x: integer, y: integer): boolean
public "matches"(inv: $CraftingInput$$Type, level: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SafeRecipe$$Type = ($SafeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SafeRecipe$$Original = $SafeRecipe;}
declare module "net.mehvahdjukaar.supplementaries.common.items.SugarCubeItem" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $SugarCubeItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
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
export type $SugarCubeItem$$Type = ($SugarCubeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SugarCubeItem$$Original = $SugarCubeItem;}
declare module "net.mehvahdjukaar.supplementaries.common.items.SongInstrumentItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SongInstrumentItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

public "spawnNoteParticle"(level: $Level$$Type, entity: $LivingEntity$$Type, note: integer): void
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getVolume"(): float
public "getPitch"(note: integer): float
public "onUseTick"(level: $Level$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseDuration: integer): void
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "getUseAnimation"(pStack: $ItemStack$$Type): $UseAnim
public "releaseUsing"(pStack: $ItemStack$$Type, pLevel: $Level$$Type, entity: $LivingEntity$$Type, pTimeCharged: integer): void
public "getSound"(): $SoundEvent
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "volume"(): float
get "sound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SongInstrumentItem$$Type = ($SongInstrumentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SongInstrumentItem$$Original = $SongInstrumentItem;}
declare module "net.mehvahdjukaar.supplementaries.common.entities.BombEntity$BombType" {
import {$BombEntity$BreakingMode} from "net.mehvahdjukaar.supplementaries.common.entities.BombEntity$BreakingMode"
import {$Enum} from "java.lang.Enum"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $BombEntity$BombType extends $Enum<($BombEntity$BombType)> {
static readonly "BLUE": $BombEntity$BombType
static readonly "SPIKY": $BombEntity$BombType
static readonly "NORMAL": $BombEntity$BombType

public "getRadius"(): double
public "isInstantlyActivated"(): boolean
public "breakMode"(): $BombEntity$BreakingMode
public "applyStatusEffects"(entity: $LivingEntity$$Type, distSq: double): void
public "spawnExtraParticles"(x: double, y: double, z: double, level: $Level$$Type): void
public static "values"(): ($BombEntity$BombType)[]
public static "valueOf"(name: StringJS): $BombEntity$BombType
public "volume"(): float
get "radius"(): double
get "instantlyActivated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombEntity$BombType$$Type = (("normal") | ("blue") | ("spiky"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BombEntity$BombType$$Original = $BombEntity$BombType;}
declare module "net.mehvahdjukaar.supplementaries.common.items.SignPostItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$WoodType$$Type} from "net.mehvahdjukaar.moonlight.api.set.wood.WoodType"
import {$WoodBasedBlockItem} from "net.mehvahdjukaar.moonlight.api.item.WoodBasedBlockItem"

export class $SignPostItem extends $WoodBasedBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type, wood: $WoodType$$Type)

public "useOn"(context: $UseOnContext$$Type): $InteractionResult
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
export type $SignPostItem$$Type = ($SignPostItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignPostItem$$Original = $SignPostItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.EndLampBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ModBlockProperties$Rune} from "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$Rune"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $EndLampBlock extends $Block {
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
static readonly "RUNE": $EnumProperty<($ModBlockProperties$Rune)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndLampBlock$$Type = ($EndLampBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EndLampBlock$$Original = $EndLampBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.CogBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CogBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "neighborChanged"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, fromPos: $BlockPos$$Type, moving: boolean): void
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(blockState: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CogBlock$$Type = ($CogBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CogBlock$$Original = $CogBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FodderBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FodderBlock extends $WaterBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, facingState: $BlockState$$Type, world: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, otherPos: $BlockPos$$Type): $BlockState
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public "getShape"(state: $BlockState$$Type, blockGetter: $BlockGetter$$Type, pos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FodderBlock$$Type = ($FodderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FodderBlock$$Original = $FodderBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.CandyItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CandyItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public static "checkSweetTooth"(entity: $Player$$Type): void
public static "increaseSweetTooth"(world: $Level$$Type, entity: $LivingEntity$$Type, amount: integer): void
public "finishUsingItem"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $LivingEntity$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandyItem$$Type = ($CandyItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CandyItem$$Original = $CandyItem;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.AddChargeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AddChargeRecipe extends $CustomRecipe {
constructor(category: $CraftingBookCategory$$Type, arrow: $Ingredient$$Type, rope: $Ingredient$$Type, result: $Item$$Type, chargesPerItem: integer, canOverflow: boolean)

public "assemble"(inv: $CraftingInput$$Type, access: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "matches"(inv: $CraftingInput$$Type, worldIn: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddChargeRecipe$$Type = ($AddChargeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddChargeRecipe$$Original = $AddChargeRecipe;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.ItemShelfBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ItemShelfBlock extends $WaterBlock implements $EntityBlock$$Interface {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "isPossibleToRespawnInThis"(state: $BlockState$$Type): boolean
public "isLadder"(state: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $LivingEntity$$Type): boolean
public "propagatesSkylightDown"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "canSurvive"(state: $BlockState$$Type, worldIn: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShelfBlock$$Type = ($ItemShelfBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemShelfBlock$$Original = $ItemShelfBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.fluids.LumiseneFluid" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$FiniteFluid} from "net.mehvahdjukaar.supplementaries.common.fluids.FiniteFluid"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$Holder} from "net.minecraft.core.Holder"

export class $LumiseneFluid extends $FiniteFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "LEVEL": $IntegerProperty

constructor()

public "getFluidType"(): $FluidType
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
get "fluidType"(): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LumiseneFluid$$Type = ($LumiseneFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LumiseneFluid$$Original = $LumiseneFluid;}
declare module "net.mehvahdjukaar.supplementaries.common.items.ConfettiPopperItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ClientBoundParticlePacket} from "net.mehvahdjukaar.supplementaries.common.network.ClientBoundParticlePacket"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ConfettiPopperItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public static "getConfettiPacket"(heldItem: $ItemStack$$Type, pos: $Vec3$$Type, dir: $Vec3$$Type): $ClientBoundParticlePacket
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getDescriptionId"(): StringJS
public "getEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "interactLivingEntity"(stack: $ItemStack$$Type, player: $Player$$Type, entity: $LivingEntity$$Type, usedHand: $InteractionHand$$Type): $InteractionResult
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
export type $ConfettiPopperItem$$Type = ($ConfettiPopperItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfettiPopperItem$$Original = $ConfettiPopperItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$Winding" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ModBlockProperties$Winding extends $Enum<($ModBlockProperties$Winding)> implements $StringRepresentable$$Interface {
static readonly "CHAIN": $ModBlockProperties$Winding
static readonly "ROPE": $ModBlockProperties$Winding
static readonly "NONE": $ModBlockProperties$Winding

public static "values"(): ($ModBlockProperties$Winding)[]
public static "valueOf"(name: StringJS): $ModBlockProperties$Winding
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
export type $ModBlockProperties$Winding$$Type = (("none") | ("chain") | ("rope"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModBlockProperties$Winding$$Original = $ModBlockProperties$Winding;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.WeatheredMapRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$WeatheredMapRecipe} from "net.mehvahdjukaar.supplementaries.common.items.crafting.WeatheredMapRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $WeatheredMapRecipe$Serializer implements $RecipeSerializer$$Interface<($WeatheredMapRecipe)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($WeatheredMapRecipe)>
public "codec"(): $MapCodec<($WeatheredMapRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeatheredMapRecipe$Serializer$$Type = ($WeatheredMapRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeatheredMapRecipe$Serializer$$Original = $WeatheredMapRecipe$Serializer;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.CageBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CageBlock extends $WaterBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $IntegerProperty
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CageBlock$$Type = ($CageBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CageBlock$$Original = $CageBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.BarnaclesMultifaceGrowthFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$BarnaclesMultifaceGrowthFeature$Config, $BarnaclesMultifaceGrowthFeature$Config$$Type} from "net.mehvahdjukaar.supplementaries.common.worldgen.BarnaclesMultifaceGrowthFeature$Config"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$Collection$$Type} from "java.util.Collection"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $BarnaclesMultifaceGrowthFeature extends $Feature<($BarnaclesMultifaceGrowthFeature$Config)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public static "placeGrowthIfPossible"(level: $WorldGenLevel$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, config: $BarnaclesMultifaceGrowthFeature$Config$$Type, random: $RandomSource$$Type, directions: $Collection$$Type<($Direction$$Type)>): boolean
public "place"(context: $FeaturePlaceContext$$Type<($BarnaclesMultifaceGrowthFeature$Config$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarnaclesMultifaceGrowthFeature$$Type = ($BarnaclesMultifaceGrowthFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BarnaclesMultifaceGrowthFeature$$Original = $BarnaclesMultifaceGrowthFeature;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.BuntingCeilingBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IColored$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IColored"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BuntingCeilingBlock extends $Block implements $IColored$$Interface {
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

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getColor"(): $DyeColor
public "supportsBlankColor"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuntingCeilingBlock$$Type = ($BuntingCeilingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BuntingCeilingBlock$$Original = $BuntingCeilingBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SconceWallBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$SconceBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.SconceBlock"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SconceWallBlock extends $SconceBlock {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor<T extends $ParticleType<(object)>>(properties: $BlockBehaviour$Properties$$Type, particleData: $Supplier$$Type<(T)>)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "animateTick"(stateIn: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "canSurvive"(state: $BlockState$$Type, worldIn: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SconceWallBlock$$Type = ($SconceWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SconceWallBlock$$Original = $SconceWallBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.misc.effects.OverencumberedEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $OverencumberedEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "applyInstantenousEffect"(pSource: $Entity$$Type, pIndirectSource: $Entity$$Type, pLivingEntity: $LivingEntity$$Type, pAmplifier: integer, pHealth: double): void
public "isInstantenous"(): boolean
public "addAttributeModifiers"(attributeMap: $AttributeMap$$Type, amplifier: integer): void
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverencumberedEffect$$Type = ($OverencumberedEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverencumberedEffect$$Original = $OverencumberedEffect;}
declare module "net.mehvahdjukaar.supplementaries.common.items.PancakeItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $PancakeItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "getDescriptionId"(): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PancakeItem$$Type = ($PancakeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PancakeItem$$Original = $PancakeItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.WildFlaxBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BushBlock} from "net.minecraft.world.level.block.BushBlock"
import {$BonemealableBlock$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BonemealableBlock$$Interface} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WildFlaxBlock extends $BushBlock implements $BonemealableBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WildFlaxBlock)>
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, useContext: $BlockPlaceContext$$Type): boolean
public "isValidBonemealTarget"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isBonemealSuccess"(worldIn: $Level$$Type, rand: $RandomSource$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "performBonemeal"(worldIn: $ServerLevel$$Type, random: $RandomSource$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): void
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "getType"(): $BonemealableBlock$Type
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildFlaxBlock$$Type = ($WildFlaxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WildFlaxBlock$$Original = $WildFlaxBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.ItemLoreRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ItemLoreRecipe extends $CustomRecipe {
constructor(category: $CraftingBookCategory$$Type, ingredient: $Ingredient$$Type, setLore: boolean)

public "assemble"(inv: $CraftingInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getRemainingItems"(inv: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(x: integer, y: integer): boolean
public "matches"(inv: $CraftingInput$$Type, level: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLoreRecipe$$Type = ($ItemLoreRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemLoreRecipe$$Original = $ItemLoreRecipe;}
declare module "net.mehvahdjukaar.supplementaries.common.block.tiles.MovingSlidyBlockEntity" {
import {$PistonMovingBlockEntity} from "net.minecraft.world.level.block.piston.PistonMovingBlockEntity"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MovingSlidyBlockEntity extends $PistonMovingBlockEntity {
 "progressO": float
static readonly "TICK_MOVEMENT": double
 "lastTicked": long
 "progress": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "deathTicks": integer

constructor(pos: $BlockPos$$Type, blockState: $BlockState$$Type)
constructor(pos: $BlockPos$$Type, blockState: $BlockState$$Type, movedState: $BlockState$$Type, direction: $Direction$$Type, extending: boolean, isSourcePiston: boolean)

public static "shouldCancelObserverUpdateHack"(neighbor: $BlockState$$Type): boolean
public static "tick"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, t: $MovingSlidyBlockEntity$$Type): void
public "getType"(): $BlockEntityType<(never)>
public "addOffset"(offset: float): void
get "type"(): $BlockEntityType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovingSlidyBlockEntity$$Type = ($MovingSlidyBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MovingSlidyBlockEntity$$Original = $MovingSlidyBlockEntity;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.GalleonStructure" {
import {$ISpawnBoxStructure$$Interface} from "net.mehvahdjukaar.moonlight.api.worldgen.ISpawnBoxStructure"
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$WeightedRandomList} from "net.minecraft.util.random.WeightedRandomList"
import {$StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Climate$ParameterPoint$$Type} from "net.minecraft.world.level.biome.Climate$ParameterPoint"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpawnBoxSettings, $SpawnBoxSettings$$Type} from "net.mehvahdjukaar.moonlight.api.worldgen.SpawnBoxSettings"
import {$LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$MobSpawnSettings$SpawnerData} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$DimensionPadding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.DimensionPadding"
import {$MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$BannerPattern$$Type} from "net.minecraft.world.level.block.entity.BannerPattern"
import {$StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $GalleonStructure extends $Structure implements $ISpawnBoxStructure$$Interface {
static readonly "CODEC": $MapCodec<($GalleonStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(config: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, startJigsawName: ($ResourceLocation$$Type)?, yOffset: integer, biomePoint: ($Climate$ParameterPoint$$Type)?, requireSeaLevel: boolean, dimensionPadding: $DimensionPadding$$Type, liquidSettings: $LiquidSettings$$Type, spawnBoxSettings: $SpawnBoxSettings$$Type)

public "findGenerationPoint"(context: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
public "ml$getSpawnBoxSettings"(): $SpawnBoxSettings
public static "getGalleonFlag"(patternRegistry: $HolderGetter$$Type<($BannerPattern$$Type)>): $ItemStack
public "type"(): $StructureType<(never)>
public "ml$getSpecialSpawns"(structureManager: $StructureManager$$Type, structure: $Structure$$Type, pos: $BlockPos$$Type, chunkPosReferences: $LongSet$$Type, category: $MobCategory$$Type): $WeightedRandomList<($MobSpawnSettings$SpawnerData)>
public "ml$setSpawnBoxSettings"(settings: $SpawnBoxSettings$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GalleonStructure$$Type = ($GalleonStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GalleonStructure$$Original = $GalleonStructure;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.SusRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$SusRecipe} from "net.mehvahdjukaar.supplementaries.common.items.crafting.SusRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SusRecipe$Serializer implements $RecipeSerializer$$Interface<($SusRecipe)> {
static readonly "CODEC": $MapCodec<($SusRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SusRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SusRecipe)>
public "codec"(): $MapCodec<($SusRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SusRecipe$Serializer$$Type = ($SusRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SusRecipe$Serializer$$Original = $SusRecipe$Serializer;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.SoapBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SoapBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "animateTick"(pState: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "stepOn"(level: $Level$$Type, pPos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "triggerEvent"(pState: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, pId: integer, pParam: integer): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoapBlock$$Type = ($SoapBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoapBlock$$Original = $SoapBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.crafting.AddChargeRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$AddChargeRecipe} from "net.mehvahdjukaar.supplementaries.common.items.crafting.AddChargeRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AddChargeRecipe$Serializer implements $RecipeSerializer$$Interface<($AddChargeRecipe)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AddChargeRecipe)>
public "codec"(): $MapCodec<($AddChargeRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddChargeRecipe$Serializer$$Type = ($AddChargeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddChargeRecipe$Serializer$$Original = $AddChargeRecipe$Serializer;}
declare module "net.mehvahdjukaar.supplementaries.common.items.KeyItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $KeyItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "supportsEnchantment"(stack: $ItemStack$$Type, enchantment: $Holder$$Type<($Enchantment)>): boolean
public "doesSneakBypassUse"(stack: $ItemStack$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getPassword"(stack: $ItemStack$$Type): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyItem$$Type = ($KeyItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyItem$$Original = $KeyItem;}
declare module "net.mehvahdjukaar.supplementaries.common.fluids.FlammableLiquidBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ILightable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.ILightable"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ILightable$FireSoundType$$Type} from "net.mehvahdjukaar.moonlight.api.block.ILightable$FireSoundType"
import {$FiniteFluid$$Type} from "net.mehvahdjukaar.supplementaries.common.fluids.FiniteFluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$FiniteLiquidBlock} from "net.mehvahdjukaar.supplementaries.common.fluids.FiniteLiquidBlock"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FlammableLiquidBlock extends $FiniteLiquidBlock implements $ILightable$$Interface {
readonly "maxLevel": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "MISSING_LEVELS": $IntegerProperty
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
readonly "interactionShapes": ($VoxelShape)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "UPDATE_CLIENTS": integer
static readonly "AGE": $IntegerProperty

constructor(supplier: $Supplier$$Type<($FiniteFluid$$Type)>, arg: $BlockBehaviour$Properties$$Type, baseLight: integer)

public "initializeClient"(consumer: $Consumer$$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "getAdjacentBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type, originalType: $PathType$$Type): $PathType
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "onPlace"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, moving: boolean): void
public "onCaughtFire"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, face: $Direction$$Type, igniter: $LivingEntity$$Type): void
public "getFireSpreadSpeed"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): integer
public "propagatesSkylightDown"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "onProjectileHit"(level: $Level$$Type, state: $BlockState$$Type, pHit: $BlockHitResult$$Type, projectile: $Projectile$$Type): void
public "tryLightUp"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, level: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
public "isLitUp"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "setLitUp"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, e: $Entity$$Type, lit: boolean): void
public static "shouldNotHaveFire"(state: $BlockState$$Type, pos: $BlockPos$$Type, levelAccessor: $LevelAccessor$$Type): boolean
public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "getLightBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getInteractionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
public "interactWithEntity"(level: $Level$$Type, state: $BlockState$$Type, projectile: $Entity$$Type, pos: $BlockPos$$Type): boolean
public "tryExtinguish"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
public "canBeExtinguishedBy"(item: $ItemStack$$Type): boolean
public "playExtinguishSound"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type): void
public "spawnSmokeParticles"(state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): void
public "setLitUp"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, lit: boolean): void
public "lightableInteractWithPlayerItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): $ItemInteractionResult
public "lightableInteractWithEntity"(level: $Level$$Type, state: $BlockState$$Type, projectile: $Entity$$Type, pos: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
public "lightUp"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
public "playLightUpSound"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type, type: $ILightable$FireSoundType$$Type): void
/**
 * 
 * @deprecated
 */
public "interactWithPlayerItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): $ItemInteractionResult
/**
 * 
 * @deprecated
 */
public "extinguish"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlammableLiquidBlock$$Type = ($FlammableLiquidBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlammableLiquidBlock$$Original = $FlammableLiquidBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.CannonBoatItem" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WoodType$$Type} from "net.mehvahdjukaar.moonlight.api.set.wood.WoodType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$WoodBasedItem} from "net.mehvahdjukaar.moonlight.api.item.WoodBasedItem"

export class $CannonBoatItem extends $WoodBasedItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type, wood: $WoodType$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBoatItem$$Type = ($CannonBoatItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CannonBoatItem$$Original = $CannonBoatItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.LunchBoxBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IWashable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IWashable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LunchBoxBlock extends $WaterBlock implements $EntityBlock$$Interface, $IWashable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "HANGING": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "DYED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): integer
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "tryWash"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, vec3: $Vec3$$Type): boolean
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "onRemove"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunchBoxBlock$$Type = ($LunchBoxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LunchBoxBlock$$Original = $LunchBoxBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.ModBlockProperties$Rune" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ModBlockProperties$Rune extends $Enum<($ModBlockProperties$Rune)> implements $StringRepresentable$$Interface {
static readonly "A": $ModBlockProperties$Rune
static readonly "B": $ModBlockProperties$Rune
static readonly "C": $ModBlockProperties$Rune
static readonly "D": $ModBlockProperties$Rune
static readonly "E": $ModBlockProperties$Rune
static readonly "F": $ModBlockProperties$Rune
static readonly "G": $ModBlockProperties$Rune
static readonly "H": $ModBlockProperties$Rune
static readonly "I": $ModBlockProperties$Rune
static readonly "J": $ModBlockProperties$Rune
static readonly "K": $ModBlockProperties$Rune
static readonly "L": $ModBlockProperties$Rune
static readonly "M": $ModBlockProperties$Rune
static readonly "N": $ModBlockProperties$Rune
static readonly "O": $ModBlockProperties$Rune
static readonly "P": $ModBlockProperties$Rune
static readonly "Q": $ModBlockProperties$Rune
static readonly "R": $ModBlockProperties$Rune
static readonly "S": $ModBlockProperties$Rune
static readonly "T": $ModBlockProperties$Rune
static readonly "U": $ModBlockProperties$Rune
static readonly "V": $ModBlockProperties$Rune
static readonly "W": $ModBlockProperties$Rune
static readonly "X": $ModBlockProperties$Rune
static readonly "Y": $ModBlockProperties$Rune
static readonly "Z": $ModBlockProperties$Rune

public static "values"(): ($ModBlockProperties$Rune)[]
public static "valueOf"(name: StringJS): $ModBlockProperties$Rune
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
export type $ModBlockProperties$Rune$$Type = (("a") | ("b") | ("c") | ("d") | ("e") | ("f") | ("g") | ("h") | ("i") | ("j") | ("k") | ("l") | ("m") | ("n") | ("o") | ("p") | ("q") | ("r") | ("s") | ("t") | ("u") | ("v") | ("w") | ("x") | ("y") | ("z"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModBlockProperties$Rune$$Original = $ModBlockProperties$Rune;}
declare module "net.mehvahdjukaar.supplementaries.common.entities.goals.ISuppEvoker" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ISuppEvoker$$Interface {
}

export class $ISuppEvoker implements $ISuppEvoker$$Interface {
 "supplementaries$getCustomWololoo"(): $LivingEntity
 "supplementaries$setCustomWololoo"(arg0: $LivingEntity$$Type): void
 "supplementaries$setSpellCastingTime"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISuppEvoker$$Type = ($ISuppEvoker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISuppEvoker$$Original = $ISuppEvoker;}
declare module "net.mehvahdjukaar.supplementaries.common.items.neoforge.LumiseneBucketItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BucketItem} from "net.minecraft.world.item.BucketItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$FiniteFluid$$Type} from "net.mehvahdjukaar.supplementaries.common.fluids.FiniteFluid"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $LumiseneBucketItem extends $BucketItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(supplier: $Supplier$$Type<($FiniteFluid$$Type)>, builder: $Item$Properties$$Type, capacity: integer)

public "emptyContents"(player: $Player$$Type, level: $Level$$Type, pos: $BlockPos$$Type, hitResult: $BlockHitResult$$Type, container: $ItemStack$$Type): boolean
public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LumiseneBucketItem$$Type = ($LumiseneBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LumiseneBucketItem$$Original = $LumiseneBucketItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.RedstoneIlluminatorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RedstoneIlluminatorBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, fromPos: $BlockPos$$Type, moving: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneIlluminatorBlock$$Type = ($RedstoneIlluminatorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneIlluminatorBlock$$Original = $RedstoneIlluminatorBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.JarItem" {
import {$AbstractMobContainerItem} from "net.mehvahdjukaar.supplementaries.common.items.AbstractMobContainerItem"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $JarItem extends $AbstractMobContainerItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(blockIn: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "isBoat"(e: $Entity$$Type): boolean
public "doInteract"(stack: $ItemStack$$Type, player: $Player$$Type, entity: $Entity$$Type, hand: $InteractionHand$$Type): $InteractionResult
public "playCatchSound"(player: $Player$$Type): void
public "playReleaseSound"(world: $Level$$Type, v: $Vec3$$Type): void
public "canItemCatch"(e: $Entity$$Type): boolean
public "saveEntityInItem"(entity: $Entity$$Type, currentStack: $ItemStack$$Type, bucket: $ItemStack$$Type): $ItemStack
public "blocksPlacement"(): boolean
public "addPlacementTooltip"(tooltip: $List$$Type<($Component$$Type)>): void
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $LivingEntity$$Type): $ItemStack
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
export type $JarItem$$Type = ($JarItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JarItem$$Original = $JarItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.StickBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IRotatable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IRotatable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $StickBlock extends $WaterBlock implements $IRotatable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "AXIS2PROPERTY": $Map<($Direction$Axis), ($BooleanProperty)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "AXIS_Z": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS_Y": $BooleanProperty
static readonly "AXIS_X": $BooleanProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, context: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, levelIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getDrops"(state: $BlockState$$Type, pBuilder: $LootParams$Builder$$Type): $List<($ItemStack)>
public static "findConnectedFlag"(level: $Level$$Type, pos: $BlockPos$$Type, searchDir: $Direction$$Type, moveDir: $Direction$$Type, it: integer): boolean
public "getRotatedState"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($BlockState)>
public static "getStickShape"(x: boolean, y: boolean, z: boolean): $VoxelShape
public "applyRotationLock"(level: $Level$$Type, blockPos: $BlockPos$$Type, state: $BlockState$$Type, dir: $Direction$$Type, half: integer): $BlockState
public "getShape"(state: $BlockState$$Type, reader: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "rotateOverAxis"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($Direction)>
public "onRotated"(newState: $BlockState$$Type, oldState: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StickBlock$$Type = ($StickBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StickBlock$$Original = $StickBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.LightUpBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ILightable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.ILightable"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ILightable$FireSoundType$$Type} from "net.mehvahdjukaar.moonlight.api.block.ILightable$FireSoundType"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LightUpBlock extends $Block implements $ILightable$$Interface {
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
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "onProjectileHit"(level: $Level$$Type, state: $BlockState$$Type, pHit: $BlockHitResult$$Type, projectile: $Projectile$$Type): void
public "isLitUp"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "setLitUp"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, lit: boolean): void
public "entityInside"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, entityIn: $Entity$$Type): void
/**
 * 
 * @deprecated
 */
public "interactWithEntity"(level: $Level$$Type, state: $BlockState$$Type, projectile: $Entity$$Type, pos: $BlockPos$$Type): boolean
public "tryLightUp"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
public "tryExtinguish"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
public "canBeExtinguishedBy"(item: $ItemStack$$Type): boolean
public "playExtinguishSound"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type): void
public "spawnSmokeParticles"(state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): void
public "setLitUp"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, lit: boolean): void
public "lightableInteractWithPlayerItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): $ItemInteractionResult
public "lightableInteractWithEntity"(level: $Level$$Type, state: $BlockState$$Type, projectile: $Entity$$Type, pos: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
public "lightUp"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
public "playLightUpSound"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type, type: $ILightable$FireSoundType$$Type): void
/**
 * 
 * @deprecated
 */
public "interactWithPlayerItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): $ItemInteractionResult
/**
 * 
 * @deprecated
 */
public "extinguish"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightUpBlock$$Type = ($LightUpBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightUpBlock$$Original = $LightUpBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.NetheriteDoorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DoubleBlockHalf} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DoorHingeSide} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$DoorBlock} from "net.minecraft.world.level.block.DoorBlock"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $NetheriteDoorBlock extends $DoorBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(builder: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "onDestroyedByPlayer"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, willHarvest: boolean, fluid: $FluidState$$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "hasTileEntity"(state: $BlockState$$Type): boolean
public "getSoundType"(state: $BlockState$$Type): $SoundType
public "neighborChanged"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, blockIn: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "moreculling$shouldAttemptToCull"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "moreculling$canCull"(): boolean
public "moreculling$setCanCull"(arg0: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteDoorBlock$$Type = ($NetheriteDoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetheriteDoorBlock$$Original = $NetheriteDoorBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FirePitBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LightUpWaterBlock} from "net.mehvahdjukaar.supplementaries.common.block.blocks.LightUpWaterBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FirePitBlock extends $LightUpWaterBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "HANGING": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(fireDamage: float, properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "getAdjacentBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type, originalType: $PathType$$Type): $PathType
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getAnalogOutputSignal"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirePitBlock$$Type = ($FirePitBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FirePitBlock$$Original = $FirePitBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.HatStandItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $HatStandItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatStandItem$$Type = ($HatStandItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HatStandItem$$Original = $HatStandItem;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.FlagBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IColored$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IColored"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FlagBlock extends $WaterBlock implements $EntityBlock$$Interface, $IColored$$Interface {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "isPossibleToRespawnInThis"(state: $BlockState$$Type): boolean
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getColor"(): $DyeColor
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsBlankColor"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlagBlock$$Type = ($FlagBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlagBlock$$Original = $FlagBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.TurnTableBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TurnTableBlock extends $Block implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ROTATING": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
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
static readonly "INVERTED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(world: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "updatePower"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): boolean
public static "getPeriod"(state: $BlockState$$Type): integer
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "stepOn"(world: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, e: $Entity$$Type): void
public "neighborChanged"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, fromPos: $BlockPos$$Type, moving: boolean): void
public "triggerEvent"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, eventID: integer, eventParam: integer): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnTableBlock$$Type = ($TurnTableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurnTableBlock$$Original = $TurnTableBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.GlobeBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$IWashable$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IWashable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $GlobeBlock extends $WaterBlock implements $EntityBlock$$Interface, $IWashable$$Interface {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
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
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "updatePower"(state: $BlockState$$Type, leve: $Level$$Type, pos: $BlockPos$$Type): void
public "tryWash"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, hitVec: $Vec3$$Type): boolean
public static "displayCurrentCoordinates"(level: $Level$$Type, player: $Player$$Type, pos: $BlockPos$$Type): void
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "animateTick"(stateIn: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "neighborChanged"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, fromPos: $BlockPos$$Type, moving: boolean): void
public "triggerEvent"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, eventID: integer, eventParam: integer): boolean
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobeBlock$$Type = ($GlobeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlobeBlock$$Original = $GlobeBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.entities.BombEntity$BreakingMode" {
import {$Enum} from "java.lang.Enum"

export class $BombEntity$BreakingMode extends $Enum<($BombEntity$BreakingMode)> {
static readonly "WEAK": $BombEntity$BreakingMode
static readonly "ALL": $BombEntity$BreakingMode
static readonly "NONE": $BombEntity$BreakingMode

public static "values"(): ($BombEntity$BreakingMode)[]
public static "valueOf"(name: StringJS): $BombEntity$BreakingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BombEntity$BreakingMode$$Type = (("all") | ("weak") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BombEntity$BreakingMode$$Original = $BombEntity$BreakingMode;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.RelayerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$DirectionalBlock} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RelayerBlock extends $DirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
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
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "onPlace"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, isMoving: boolean): void
public "canConnectRedstone"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): boolean
public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, randomSource: $RandomSource$$Type): void
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getDirectSignal"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): integer
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayerBlock$$Type = ($RelayerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RelayerBlock$$Original = $RelayerBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.fire_behaviors.IFireItemBehaviorRegistry" {
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IFireItemBehavior$$Type} from "net.mehvahdjukaar.supplementaries.common.block.fire_behaviors.IFireItemBehavior"

export interface $IFireItemBehaviorRegistry$$Interface {
}

export class $IFireItemBehaviorRegistry implements $IFireItemBehaviorRegistry$$Interface {
 "registerCannonBehavior"(arg0: $ItemLike$$Type, arg1: $IFireItemBehavior$$Type): void
 "registerPresentBehavior"(arg0: $ItemLike$$Type, arg1: $IFireItemBehavior$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFireItemBehaviorRegistry$$Type = ($IFireItemBehaviorRegistry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFireItemBehaviorRegistry$$Original = $IFireItemBehaviorRegistry;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.GobletBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $GobletBlock extends $WaterBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $IntegerProperty
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getAnalogOutputSignal"(blockState: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "animateTick"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GobletBlock$$Type = ($GobletBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GobletBlock$$Original = $GobletBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.misc.effects.FlammableEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FlammableEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
public "applyInstantenousEffect"(pSource: $Entity$$Type, pIndirectSource: $Entity$$Type, pLivingEntity: $LivingEntity$$Type, pAmplifier: integer, pHealth: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlammableEffect$$Type = ($FlammableEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlammableEffect$$Original = $FlammableEffect;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.PlanterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"

export class $PlanterBlock extends $WaterBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "EXTENDED": $BooleanProperty
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "canSustainPlant"(state: $BlockState$$Type, level: $BlockGetter$$Type, soilPosition: $BlockPos$$Type, facing: $Direction$$Type, plant: $BlockState$$Type): $TriState
public "onTreeGrow"(state: $BlockState$$Type, level: $LevelReader$$Type, placeFunction: $BiConsumer$$Type<($BlockPos), ($BlockState)>, randomSource: $RandomSource$$Type, pos: $BlockPos$$Type, config: $TreeConfiguration$$Type): boolean
public "isFertile"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanterBlock$$Type = ($PlanterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlanterBlock$$Original = $PlanterBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.items.AntiqueInkItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$SignApplicator$$Interface} from "net.minecraft.world.item.SignApplicator"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SignText$$Type} from "net.minecraft.world.level.block.entity.SignText"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $AntiqueInkItem extends $Item implements $SignApplicator$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "tryApplyToSign"(level: $Level$$Type, signBlockEntity: $SignBlockEntity$$Type, front: boolean, player: $Player$$Type): boolean
public static "hasAntiqueInk"(stack: $ItemStack$$Type): boolean
public static "setAntiqueInk"(tile: $BlockEntity$$Type, ink: boolean): void
public static "setAntiqueInk"(stack: $ItemStack$$Type, ink: boolean): void
public static "toggleAntiqueInkOnSigns"(world: $Level$$Type, player: $Player$$Type, pos: $BlockPos$$Type, tile: $BlockEntity$$Type, newState: boolean): boolean
public static "isEnabled"(): boolean
public "canApplyToSign"(arg0: $SignText$$Type, arg1: $Player$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AntiqueInkItem$$Type = ($AntiqueInkItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AntiqueInkItem$$Original = $AntiqueInkItem;}
declare module "net.mehvahdjukaar.supplementaries.common.items.FlagItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IColored$$Interface} from "net.mehvahdjukaar.moonlight.api.block.IColored"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $FlagItem extends $BlockItem implements $IColored$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getColor"(): $DyeColor
public "supportsBlankColor"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlagItem$$Type = ($FlagItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlagItem$$Original = $FlagItem;}
declare module "net.mehvahdjukaar.supplementaries.common.utils.SlotReference" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IQuiverEntity$$Type} from "net.mehvahdjukaar.supplementaries.common.entities.IQuiverEntity"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$SlotReference$Empty} from "net.mehvahdjukaar.supplementaries.common.utils.SlotReference$Empty"
import {$Registry} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"

export interface $SlotReference$$Interface {
get "empty"(): boolean
get "codec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SlotReference)>
}

export class $SlotReference implements $SlotReference$$Interface {
static readonly "TYPE_REGISTRY_KEY": $ResourceKey<($Registry<($StreamCodec<($ByteBuf), ($SlotReference)>)>)>
static readonly "TYPE_REGISTRY": $Registry<($StreamCodec<($ByteBuf), ($SlotReference)>)>
static readonly "EMPTY": $SlotReference$Empty
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SlotReference)>

 "getItem"(player: $LivingEntity$$Type): $Item
static "slot"(equipmentSlot: $EquipmentSlot$$Type): $SlotReference
 "get"(arg0: $LivingEntity$$Type): $ItemStack
 "isEmpty"(): boolean
static "inv"(invSlot: integer): $SlotReference
static "hand"(pUsedHand: $InteractionHand$$Type): $SlotReference
 "getCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SlotReference)>
static "quiver"(e: $IQuiverEntity$$Type): $SlotReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotReference$$Type = ($SlotReference);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotReference$$Original = $SlotReference;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.AbstractRopeBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IRopeConnection$$Interface} from "net.mehvahdjukaar.supplementaries.common.block.IRopeConnection"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AbstractRopeBlock extends $WaterBlock implements $IRopeConnection$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COLLISION_SHAPE": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "KNOT": $BooleanProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "skipRendering"(pState: $BlockState$$Type, pAdjacentBlockState: $BlockState$$Type, pSide: $Direction$$Type): boolean
public "onPlace"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, isMoving: boolean): void
public "isLadder"(state: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $LivingEntity$$Type): boolean
public "setConnection"(arg0: $Direction$$Type, arg1: $BlockState$$Type, arg2: boolean): $BlockState
public "canSideAcceptConnection"(state: $BlockState$$Type, direction: $Direction$$Type): boolean
public "hasConnection"(arg0: $Direction$$Type, arg1: $BlockState$$Type): boolean
public "shouldConnectToDir"(thisState: $BlockState$$Type, currentPos: $BlockPos$$Type, world: $LevelReader$$Type, dir: $Direction$$Type): boolean
public "hasMiddleKnot"(state: $BlockState$$Type): boolean
public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getCollisionShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(state: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "entityInside"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type, entityIn: $Entity$$Type): void
public static "isSupportingCeiling"(upState: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelReader$$Type): boolean
public static "isSupportingCeiling"(pos: $BlockPos$$Type, world: $LevelReader$$Type): boolean
public static "canConnectDown"(downState: $BlockState$$Type): boolean
public "shouldConnectToFace"(thisState: $BlockState$$Type, facingState: $BlockState$$Type, facingPos: $BlockPos$$Type, dir: $Direction$$Type, world: $LevelReader$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRopeBlock$$Type = ($AbstractRopeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractRopeBlock$$Original = $AbstractRopeBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.block.blocks.ClockBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterBlock} from "net.mehvahdjukaar.moonlight.api.block.WaterBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ClockBlock extends $WaterBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "HOUR": $IntegerProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "TWO_FACED": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, useContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public static "displayCurrentHour"(world: $Level$$Type, player: $Player$$Type): void
public static "canReadTime"(level: $Level$$Type): boolean
public "getShape"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClockBlock$$Type = ($ClockBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClockBlock$$Original = $ClockBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.entities.IQuiverEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IQuiverEntity$$Interface {
}

export class $IQuiverEntity implements $IQuiverEntity$$Interface {
 "supplementaries$hasQuiver"(): boolean
 "supplementaries$getQuiver"(): $ItemStack
 "supplementaries$setQuiver"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQuiverEntity$$Type = ($IQuiverEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IQuiverEntity$$Original = $IQuiverEntity;}
declare module "net.mehvahdjukaar.supplementaries.common.fluids.FiniteLiquidBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FiniteFluid$$Type} from "net.mehvahdjukaar.supplementaries.common.fluids.FiniteFluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LiquidBlockContainer$$Interface} from "net.minecraft.world.level.block.LiquidBlockContainer"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BucketPickup$$Interface} from "net.minecraft.world.level.block.BucketPickup"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FiniteLiquidBlock extends $Block implements $BucketPickup$$Interface, $LiquidBlockContainer$$Interface {
readonly "maxLevel": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "MISSING_LEVELS": $IntegerProperty
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "UPDATE_CLIENTS": integer

constructor(supplier: $Supplier$$Type<($FiniteFluid$$Type)>, arg: $BlockBehaviour$Properties$$Type)

public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "skipRendering"(state: $BlockState$$Type, adjacentBlockState: $BlockState$$Type, direction: $Direction$$Type): boolean
public "getDrops"(arg: $BlockState$$Type, arg2: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getPickupSound"(): $Optional<($SoundEvent)>
public "onPlace"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, isMoving: boolean): void
public "isRandomlyTicking"(state: $BlockState$$Type): boolean
public "propagatesSkylightDown"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "randomTick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "placeLiquid"(level: $LevelAccessor$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fluidState: $FluidState$$Type): boolean
public "canPlaceLiquid"(player: $Player$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "pickupBlock"(player: $Player$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiniteLiquidBlock$$Type = ($FiniteLiquidBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FiniteLiquidBlock$$Original = $FiniteLiquidBlock;}
declare module "net.mehvahdjukaar.supplementaries.common.worldgen.RoadSignStructure$Type" {
import {$StructureType$$Interface} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$RoadSignStructure} from "net.mehvahdjukaar.supplementaries.common.worldgen.RoadSignStructure"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $RoadSignStructure$Type implements $StructureType$$Interface<($RoadSignStructure)> {
constructor()

public "codec"(): $MapCodec<($RoadSignStructure)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoadSignStructure$Type$$Type = ($RoadSignStructure$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RoadSignStructure$Type$$Original = $RoadSignStructure$Type;}
declare module "net.mehvahdjukaar.supplementaries.common.block.fire_behaviors.IFireItemBehavior" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IFireItemBehavior$$Interface {

(arg0: $ItemStack, arg1: $ServerLevel, arg2: $Vec3, arg3: $Vec3, arg4: float, arg5: integer, arg6: $Player): boolean
}

export class $IFireItemBehavior implements $IFireItemBehavior$$Interface {
 "fire"(stack: $ItemStack$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, fireOffset: float, direction: $Vec3$$Type, power: float, inaccuracy: integer, owner: $Player$$Type): boolean
 "fire"(stack: $ItemStack$$Type, level: $ServerLevel$$Type, pos: $Vec3$$Type, fireOffset: float, direction: $Vec3$$Type, power: float, inaccuracy: integer, owner: $Player$$Type): boolean
 "fire"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type, arg2: $Vec3$$Type, arg3: $Vec3$$Type, arg4: float, arg5: integer, arg6: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFireItemBehavior$$Type = ((arg0: $ItemStack, arg1: $ServerLevel, arg2: $Vec3, arg3: $Vec3, arg4: float, arg5: integer, arg6: $Player) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFireItemBehavior$$Original = $IFireItemBehavior;}
