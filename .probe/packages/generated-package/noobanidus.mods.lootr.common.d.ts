declare module "noobanidus.mods.lootr.common.mixin.accessor.AccessorMixinBrushableBlockEntity" {
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$LootTable} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $AccessorMixinBrushableBlockEntity$$Interface {
}

export class $AccessorMixinBrushableBlockEntity implements $AccessorMixinBrushableBlockEntity$$Interface {
 "lootr$getLootTable"(): $ResourceKey<($LootTable)>
 "lootr$getLootTableSeed"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinBrushableBlockEntity$$Type = ($AccessorMixinBrushableBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinBrushableBlockEntity$$Original = $AccessorMixinBrushableBlockEntity;}
declare module "noobanidus.mods.lootr.common.advancement.LootedStatTrigger" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ILootedStatTrigger$$Interface} from "noobanidus.mods.lootr.common.api.advancement.ILootedStatTrigger"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LootedStatTrigger$TriggerInstance} from "noobanidus.mods.lootr.common.advancement.LootedStatTrigger$TriggerInstance"
import {$CriterionTrigger} from "net.minecraft.advancements.CriterionTrigger"

export class $LootedStatTrigger extends $SimpleCriterionTrigger<($LootedStatTrigger$TriggerInstance)> implements $ILootedStatTrigger$$Interface {
constructor()

public static "looted"(arg0: integer): $Criterion<($LootedStatTrigger$TriggerInstance)>
public "trigger"(arg0: $ServerPlayer$$Type): void
public "codec"(): $Codec<($LootedStatTrigger$TriggerInstance)>
public "getTrigger"(): $CriterionTrigger<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootedStatTrigger$$Type = ($LootedStatTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootedStatTrigger$$Original = $LootedStatTrigger;}
declare module "noobanidus.mods.lootr.common.block.TrophyBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrophyBlock extends $Block {
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
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrophyBlock$$Type = ($TrophyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrophyBlock$$Original = $TrophyBlock;}
declare module "noobanidus.mods.lootr.common.mixin.accessor.AccessorMixinMinecraftServer" {
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"

export interface $AccessorMixinMinecraftServer$$Interface {

(): $LevelStorageSource$LevelStorageAccess$$Type
}

export class $AccessorMixinMinecraftServer implements $AccessorMixinMinecraftServer$$Interface {
 "Lootr$getStorageSource"(): $LevelStorageSource$LevelStorageAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinMinecraftServer$$Type = (() => $LevelStorageSource$LevelStorageAccess$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinMinecraftServer$$Original = $AccessorMixinMinecraftServer;}
declare module "noobanidus.mods.lootr.common.mixin.accessor.AccessorMixinBaseContainerBlockEntity" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $AccessorMixinBaseContainerBlockEntity$$Interface {
get "lockKey"(): $LockCode
set "lockKey"(value: $LockCode$$Type)
}

export class $AccessorMixinBaseContainerBlockEntity implements $AccessorMixinBaseContainerBlockEntity$$Interface {
 "getLockKey"(): $LockCode
 "invokeGetItems"(): $NonNullList<($ItemStack)>
 "setLockKey"(arg0: $LockCode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinBaseContainerBlockEntity$$Type = ($AccessorMixinBaseContainerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinBaseContainerBlockEntity$$Original = $AccessorMixinBaseContainerBlockEntity;}
declare module "noobanidus.mods.lootr.common.block.LootrBrushableBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BrushableBlock} from "net.minecraft.world.level.block.BrushableBlock"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootrBrushableBlock extends $BrushableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BrushableBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "DUSTED": $IntegerProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "TICK_DELAY": integer
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $Block$$Type, arg1: $SoundEvent$$Type, arg2: $SoundEvent$$Type, arg3: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrBrushableBlock$$Type = ($LootrBrushableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootrBrushableBlock$$Original = $LootrBrushableBlock;}
declare module "noobanidus.mods.lootr.common.mixin.accessor.AccessorMixinItemFrame" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"

export interface $AccessorMixinItemFrame$$Interface {
}

export class $AccessorMixinItemFrame implements $AccessorMixinItemFrame$$Interface {
 "lootr$onItemChanged"(arg0: $ItemStack$$Type): void
 "lootr$isFixed"(): boolean
static "lootr$getDataItem"(): $EntityDataAccessor<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinItemFrame$$Type = ($AccessorMixinItemFrame);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinItemFrame$$Original = $AccessorMixinItemFrame;}
declare module "noobanidus.mods.lootr.common.block.LootrDecoratedPotBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DecoratedPotBlock} from "net.minecraft.world.level.block.DecoratedPotBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootrDecoratedPotBlock extends $DecoratedPotBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DecoratedPotBlock)>
static readonly "SHERDS_DYNAMIC_DROP_ID": $ResourceLocation
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
static readonly "CRACKED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrDecoratedPotBlock$$Type = ($LootrDecoratedPotBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootrDecoratedPotBlock$$Original = $LootrDecoratedPotBlock;}
declare module "noobanidus.mods.lootr.common.mixin.accessor.AccessorMixinFallingBlockEntity" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $AccessorMixinFallingBlockEntity$$Interface {

(arg0: $BlockState): void
}

export class $AccessorMixinFallingBlockEntity implements $AccessorMixinFallingBlockEntity$$Interface {
 "lootr$setBlockState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinFallingBlockEntity$$Type = ((arg0: $BlockState) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinFallingBlockEntity$$Original = $AccessorMixinFallingBlockEntity;}
declare module "noobanidus.mods.lootr.common.advancement.ContainerTrigger$TriggerInstance" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $ContainerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($ContainerTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerTrigger$TriggerInstance$$Original = $ContainerTrigger$TriggerInstance;}
declare module "noobanidus.mods.lootr.common.advancement.ContainerTrigger" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$UUID$$Type} from "java.util.UUID"
import {$ITrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.ITrigger"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ContainerTrigger$TriggerInstance} from "noobanidus.mods.lootr.common.advancement.ContainerTrigger$TriggerInstance"
import {$CriterionTrigger} from "net.minecraft.advancements.CriterionTrigger"
import {$IContainerTrigger$$Interface} from "noobanidus.mods.lootr.common.api.advancement.IContainerTrigger"

export class $ContainerTrigger extends $SimpleCriterionTrigger<($ContainerTrigger$TriggerInstance)> implements $IContainerTrigger$$Interface {
constructor()

public static "looted"(arg0: $ITrigger$$Type): $Criterion<($ContainerTrigger$TriggerInstance)>
public "trigger"(arg0: $ServerPlayer$$Type, arg1: $UUID$$Type): void
public "codec"(): $Codec<($ContainerTrigger$TriggerInstance)>
public "getTrigger"(): $CriterionTrigger<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerTrigger$$Type = ($ContainerTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerTrigger$$Original = $ContainerTrigger;}
declare module "noobanidus.mods.lootr.common.api.advancement.ILootedStatTrigger" {
import {$ITrigger$$Interface} from "noobanidus.mods.lootr.common.api.advancement.ITrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger} from "net.minecraft.advancements.CriterionTrigger"

export interface $ILootedStatTrigger$$Interface extends $ITrigger$$Interface {

(arg0: $ServerPlayer): void
}

export class $ILootedStatTrigger implements $ILootedStatTrigger$$Interface {
 "trigger"(arg0: $ServerPlayer$$Type): void
 "getTrigger"(): $CriterionTrigger<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootedStatTrigger$$Type = ((arg0: $ServerPlayer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILootedStatTrigger$$Original = $ILootedStatTrigger;}
declare module "noobanidus.mods.lootr.common.block.LootrBarrelBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$BarrelBlock} from "net.minecraft.world.level.block.BarrelBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootrBarrelBlock extends $BarrelBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BarrelBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
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

public "getExplosionResistance"(): float
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "triggerEvent"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer): boolean
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrBarrelBlock$$Type = ($LootrBarrelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootrBarrelBlock$$Original = $LootrBarrelBlock;}
declare module "noobanidus.mods.lootr.common.api.advancement.IAdvancementTrigger" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ITrigger$$Interface} from "noobanidus.mods.lootr.common.api.advancement.ITrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger} from "net.minecraft.advancements.CriterionTrigger"

export interface $IAdvancementTrigger$$Interface extends $ITrigger$$Interface {

(arg0: $ServerPlayer, arg1: $ResourceLocation): void
}

export class $IAdvancementTrigger implements $IAdvancementTrigger$$Interface {
 "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type): void
 "getTrigger"(): $CriterionTrigger<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdvancementTrigger$$Type = ((arg0: $ServerPlayer, arg1: $ResourceLocation) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAdvancementTrigger$$Original = $IAdvancementTrigger;}
declare module "noobanidus.mods.lootr.common.block.LootrShulkerBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ShulkerBoxBlock} from "net.minecraft.world.level.block.ShulkerBoxBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $LootrShulkerBlock extends $ShulkerBoxBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ShulkerBoxBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "CONTENTS": $ResourceLocation
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

public "getExplosionResistance"(): float
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getColor"(): $DyeColor
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "moreculling$shouldAttemptToCull"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "moreculling$canCull"(): boolean
public "moreculling$setCanCull"(arg0: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "explosionResistance"(): float
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrShulkerBlock$$Type = ($LootrShulkerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootrShulkerBlock$$Original = $LootrShulkerBlock;}
declare module "noobanidus.mods.lootr.common.mixin.accessor.AccessorMixinLootTable" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"

export interface $AccessorMixinLootTable$$Interface {

(): ($ResourceLocation$$Type)?
get "randomSequence"(): $Optional<($ResourceLocation)>
}

export class $AccessorMixinLootTable implements $AccessorMixinLootTable$$Interface {
 "getRandomSequence"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinLootTable$$Type = (() => ($ResourceLocation$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinLootTable$$Original = $AccessorMixinLootTable;}
declare module "noobanidus.mods.lootr.common.mixin.accessor.AccessorMixinDimensionDataStorage" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$SavedData, $SavedData$$Type} from "net.minecraft.world.level.saveddata.SavedData"

export interface $AccessorMixinDimensionDataStorage$$Interface {

(): $Map$$Type<(StringJS), ($SavedData$$Type)>
get "cache"(): $Map<(StringJS), ($SavedData)>
}

export class $AccessorMixinDimensionDataStorage implements $AccessorMixinDimensionDataStorage$$Interface {
 "getCache"(): $Map<(StringJS), ($SavedData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinDimensionDataStorage$$Type = (() => $Map$$Type<(StringJS), ($SavedData$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinDimensionDataStorage$$Original = $AccessorMixinDimensionDataStorage;}
declare module "noobanidus.mods.lootr.common.api.advancement.IContainerTrigger" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ITrigger$$Interface} from "noobanidus.mods.lootr.common.api.advancement.ITrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger} from "net.minecraft.advancements.CriterionTrigger"

export interface $IContainerTrigger$$Interface extends $ITrigger$$Interface {

(arg0: $ServerPlayer, arg1: $UUID): void
}

export class $IContainerTrigger implements $IContainerTrigger$$Interface {
 "trigger"(arg0: $ServerPlayer$$Type, arg1: $UUID$$Type): void
 "getTrigger"(): $CriterionTrigger<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerTrigger$$Type = ((arg0: $ServerPlayer, arg1: $UUID) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IContainerTrigger$$Original = $IContainerTrigger;}
declare module "noobanidus.mods.lootr.common.block.LootrTrappedChestBlock" {
import {$ChestType} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChestBlock} from "net.minecraft.world.level.block.ChestBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LootrTrappedChestBlock extends $ChestBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getExplosionResistance"(): float
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrTrappedChestBlock$$Type = ($LootrTrappedChestBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootrTrappedChestBlock$$Original = $LootrTrappedChestBlock;}
declare module "noobanidus.mods.lootr.common.api.advancement.ITrigger" {
import {$CriterionTrigger} from "net.minecraft.advancements.CriterionTrigger"

export interface $ITrigger$$Interface {
get "trigger"(): $CriterionTrigger<(never)>
}

export class $ITrigger implements $ITrigger$$Interface {
 "getTrigger"(): $CriterionTrigger<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrigger$$Type = ($ITrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITrigger$$Original = $ITrigger;}
declare module "noobanidus.mods.lootr.common.mixin.accessor.AccessorMixinBlock" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $AccessorMixinBlock$$Interface {

(arg0: $Level, arg1: $Player, arg2: $BlockPos, arg3: $BlockState): void
}

export class $AccessorMixinBlock implements $AccessorMixinBlock$$Interface {
 "lootr$spawnDestroyParticles"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinBlock$$Type = ((arg0: $Level, arg1: $Player, arg2: $BlockPos, arg3: $BlockState) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinBlock$$Original = $AccessorMixinBlock;}
declare module "noobanidus.mods.lootr.common.advancement.AdvancementTrigger$TriggerInstance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $AdvancementTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($AdvancementTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, advancement: ($ResourceLocation$$Type)?)

public "advancement"(): $Optional<($ResourceLocation)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ResourceLocation$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementTrigger$TriggerInstance$$Type = ({"advancement"?: ($ResourceLocation$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([advancement?: ($ResourceLocation$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementTrigger$TriggerInstance$$Original = $AdvancementTrigger$TriggerInstance;}
declare module "noobanidus.mods.lootr.common.advancement.AdvancementTrigger" {
import {$IAdvancementTrigger$$Interface} from "noobanidus.mods.lootr.common.api.advancement.IAdvancementTrigger"
import {$AdvancementTrigger$TriggerInstance} from "noobanidus.mods.lootr.common.advancement.AdvancementTrigger$TriggerInstance"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger} from "net.minecraft.advancements.CriterionTrigger"

export class $AdvancementTrigger extends $SimpleCriterionTrigger<($AdvancementTrigger$TriggerInstance)> implements $IAdvancementTrigger$$Interface {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type): void
public static "completed"(arg0: $ResourceLocation$$Type): $Criterion<($AdvancementTrigger$TriggerInstance)>
public "codec"(): $Codec<($AdvancementTrigger$TriggerInstance)>
public "getTrigger"(): $CriterionTrigger<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementTrigger$$Type = ($AdvancementTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementTrigger$$Original = $AdvancementTrigger;}
declare module "noobanidus.mods.lootr.common.block.LootrInventoryBlock" {
import {$ChestType} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChestBlock} from "net.minecraft.world.level.block.ChestBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LootrInventoryBlock extends $ChestBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getExplosionResistance"(): float
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrInventoryBlock$$Type = ($LootrInventoryBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootrInventoryBlock$$Original = $LootrInventoryBlock;}
declare module "noobanidus.mods.lootr.common.advancement.LootedStatTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $LootedStatTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($LootedStatTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, score: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ServerPlayer$$Type): boolean
public "score"(): $MinMaxBounds$Ints
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootedStatTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "score"?: $MinMaxBounds$Ints$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, score?: $MinMaxBounds$Ints$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootedStatTrigger$TriggerInstance$$Original = $LootedStatTrigger$TriggerInstance;}
declare module "noobanidus.mods.lootr.common.block.LootrChestBlock" {
import {$ChestType} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChestBlock} from "net.minecraft.world.level.block.ChestBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LootrChestBlock extends $ChestBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getExplosionResistance"(): float
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrChestBlock$$Type = ($LootrChestBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootrChestBlock$$Original = $LootrChestBlock;}
declare module "noobanidus.mods.lootr.common.mixin.accessor.AccessorMixinChunkMap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ChunkHolder, $ChunkHolder$$Type} from "net.minecraft.server.level.ChunkHolder"

export interface $AccessorMixinChunkMap$$Interface {

(): $Iterable$$Type<($ChunkHolder$$Type)>
}

export class $AccessorMixinChunkMap implements $AccessorMixinChunkMap$$Interface {
 "lootr$getChunks"(): $Iterable<($ChunkHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinChunkMap$$Type = (() => $Iterable$$Type<($ChunkHolder$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorMixinChunkMap$$Original = $AccessorMixinChunkMap;}
