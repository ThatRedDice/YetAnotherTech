declare module "com.simibubi.create.api.equipment.goggles.IProxyHoveringInformation" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IProxyHoveringInformation$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState): $BlockPos$$Type
}

export class $IProxyHoveringInformation implements $IProxyHoveringInformation$$Interface {
 "getInformationSource"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProxyHoveringInformation$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $BlockPos$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IProxyHoveringInformation$$Original = $IProxyHoveringInformation;}
declare module "com.simibubi.create.api.event.PipeCollisionEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level} from "net.minecraft.world.level.Level"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PipeCollisionEvent extends $Event {
public "getLevel"(): $Level
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
public "getPos"(): $BlockPos
get "level"(): $Level
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeCollisionEvent$$Type = ($PipeCollisionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PipeCollisionEvent$$Original = $PipeCollisionEvent;}
declare module "com.simibubi.create.api.event.PipeCollisionEvent$Spill" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PipeCollisionEvent} from "com.simibubi.create.api.event.PipeCollisionEvent"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PipeCollisionEvent$Spill extends $PipeCollisionEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Fluid$$Type, arg3: $Fluid$$Type, arg4: $BlockState$$Type)

public "getPipeFluid"(): $Fluid
public "getWorldFluid"(): $Fluid
get "pipeFluid"(): $Fluid
get "worldFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeCollisionEvent$Spill$$Type = ($PipeCollisionEvent$Spill);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PipeCollisionEvent$Spill$$Original = $PipeCollisionEvent$Spill;}
declare module "com.simibubi.create.api.behaviour.display.DisplaySource" {
import {$RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$ModularGuiLineBuilder$$Type} from "com.simibubi.create.foundation.gui.ModularGuiLineBuilder"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$DisplayTargetStats$$Type} from "com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FlapDisplayLayout$$Type} from "com.simibubi.create.content.trains.display.FlapDisplayLayout"
import {$Component} from "net.minecraft.network.chat.Component"
import {$DisplayTarget$$Type} from "com.simibubi.create.api.behaviour.display.DisplayTarget"
import {$FlapDisplayBlockEntity$$Type} from "com.simibubi.create.content.trains.display.FlapDisplayBlockEntity"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$BlockBuilder} from "com.tterrag.registrate.builders.BlockBuilder"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$SimpleRegistry$Multi} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $DisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(never)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

public static "displaySource"<B extends $Block, P>(arg0: $RegistryEntry$$Type<($DisplaySource$$Type), ($DisplaySource$$Type)>): $NonNullUnaryOperator<($BlockBuilder<(B), (P)>)>
public "initConfigurationWidgets"(arg0: $DisplayLinkContext$$Type, arg1: $ModularGuiLineBuilder$$Type, arg2: boolean): void
public "provideText"(arg0: $DisplayLinkContext$$Type, arg1: $DisplayTargetStats$$Type): $List<($MutableComponent)>
public "provideFlapDisplayText"(arg0: $DisplayLinkContext$$Type, arg1: $DisplayTargetStats$$Type): $List<($List<($MutableComponent)>)>
public "loadFlapDisplayLayout"(arg0: $DisplayLinkContext$$Type, arg1: $FlapDisplayBlockEntity$$Type, arg2: $FlapDisplayLayout$$Type, arg3: integer): void
public "loadFlapDisplayLayout"(arg0: $DisplayLinkContext$$Type, arg1: $FlapDisplayBlockEntity$$Type, arg2: $FlapDisplayLayout$$Type): void
public "transferData"(arg0: $DisplayLinkContext$$Type, arg1: $DisplayTarget$$Type, arg2: integer): void
public "onSignalReset"(arg0: $DisplayLinkContext$$Type): void
public "populateData"(arg0: $DisplayLinkContext$$Type): void
public "getPassiveRefreshTicks"(): integer
public "shouldPassiveReset"(): boolean
public static "getAll"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): $List<($DisplaySource)>
public "getName"(): $Component
public static "get"(arg0: $ResourceLocation$$Type): $DisplaySource
get "passiveRefreshTicks"(): integer
get "name"(): $Component
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreateDisplaySource
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreateDisplaySourceTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplaySource$$Type = (Special.CreateDisplaySource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisplaySource$$Original = $DisplaySource;}
declare module "com.simibubi.create.api.equipment.potatoCannon.PotatoCannonProjectileType" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PotatoProjectileEntityHitAction, $PotatoProjectileEntityHitAction$$Type} from "com.simibubi.create.api.equipment.potatoCannon.PotatoProjectileEntityHitAction"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EntityHitResult$$Type} from "net.minecraft.world.phys.EntityHitResult"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$PotatoProjectileBlockHitAction, $PotatoProjectileBlockHitAction$$Type} from "com.simibubi.create.api.equipment.potatoCannon.PotatoProjectileBlockHitAction"
import {$Record} from "java.lang.Record"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$PotatoProjectileRenderMode, $PotatoProjectileRenderMode$$Type} from "com.simibubi.create.api.equipment.potatoCannon.PotatoProjectileRenderMode"

export class $PotatoCannonProjectileType extends $Record {
static readonly "CODEC": $Codec<($PotatoCannonProjectileType)>

constructor(items: $HolderSet$$Type<($Item)>, reloadTicks: integer, damage: integer, split: integer, knockback: float, drag: float, velocityMultiplier: float, gravityMultiplier: float, soundPitch: float, sticky: boolean, dropStack: $ItemStack$$Type, renderMode: $PotatoProjectileRenderMode$$Type, preEntityHit: ($PotatoProjectileEntityHitAction$$Type)?, onEntityHit: ($PotatoProjectileEntityHitAction$$Type)?, onBlockHit: ($PotatoProjectileBlockHitAction$$Type)?)

public "dropStack"(): $ItemStack
public static "getTypeForItem"(arg0: $RegistryAccess$$Type, arg1: $Item$$Type): $Optional<($Holder$Reference<($PotatoCannonProjectileType)>)>
public "velocityMultiplier"(): float
public "soundPitch"(): float
public "reloadTicks"(): integer
public "gravityMultiplier"(): float
public "preEntityHit"(): $Optional<($PotatoProjectileEntityHitAction)>
public "preEntityHit"(arg0: $ItemStack$$Type, arg1: $EntityHitResult$$Type): boolean
public "onEntityHit"(arg0: $ItemStack$$Type, arg1: $EntityHitResult$$Type): boolean
public "onEntityHit"(): $Optional<($PotatoProjectileEntityHitAction)>
public "onBlockHit"(): $Optional<($PotatoProjectileBlockHitAction)>
public "onBlockHit"(arg0: $LevelAccessor$$Type, arg1: $ItemStack$$Type, arg2: $BlockHitResult$$Type): boolean
public "items"(): $HolderSet<($Item)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "split"(): integer
public "sticky"(): boolean
public "renderMode"(): $PotatoProjectileRenderMode
public "drag"(): float
public "knockback"(): float
public "damage"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreatePotatoProjectileType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreatePotatoProjectileTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotatoCannonProjectileType$$Type = (Special.CreatePotatoProjectileType) | ({"drag"?: float, "soundPitch"?: float, "onEntityHit"?: ($PotatoProjectileEntityHitAction$$Type)?, "preEntityHit"?: ($PotatoProjectileEntityHitAction$$Type)?, "items"?: $HolderSet$$Type<($Item)>, "dropStack"?: $ItemStack$$Type, "reloadTicks"?: integer, "renderMode"?: $PotatoProjectileRenderMode$$Type, "gravityMultiplier"?: float, "split"?: integer, "sticky"?: boolean, "onBlockHit"?: ($PotatoProjectileBlockHitAction$$Type)?, "knockback"?: float, "velocityMultiplier"?: float, "damage"?: integer}) | ([drag?: float, soundPitch?: float, onEntityHit?: ($PotatoProjectileEntityHitAction$$Type)?, preEntityHit?: ($PotatoProjectileEntityHitAction$$Type)?, items?: $HolderSet$$Type<($Item)>, dropStack?: $ItemStack$$Type, reloadTicks?: integer, renderMode?: $PotatoProjectileRenderMode$$Type, gravityMultiplier?: float, split?: integer, sticky?: boolean, onBlockHit?: ($PotatoProjectileBlockHitAction$$Type)?, knockback?: float, velocityMultiplier?: float, damage?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotatoCannonProjectileType$$Original = $PotatoCannonProjectileType;}
declare module "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement" {
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $SpecialBlockItemRequirement$$Interface {

(arg0: $BlockState, arg1: $BlockEntity): $ItemRequirement$$Type
}

export class $SpecialBlockItemRequirement implements $SpecialBlockItemRequirement$$Interface {
 "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialBlockItemRequirement$$Type = ((arg0: $BlockState, arg1: $BlockEntity) => $ItemRequirement$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialBlockItemRequirement$$Original = $SpecialBlockItemRequirement;}
declare module "com.simibubi.create.api.equipment.potatoCannon.PotatoProjectileEntityHitAction$Type" {
import {$Enum} from "java.lang.Enum"

export class $PotatoProjectileEntityHitAction$Type extends $Enum<($PotatoProjectileEntityHitAction$Type)> {
static readonly "ON_HIT": $PotatoProjectileEntityHitAction$Type
static readonly "PRE_HIT": $PotatoProjectileEntityHitAction$Type

public static "values"(): ($PotatoProjectileEntityHitAction$Type)[]
public static "valueOf"(arg0: StringJS): $PotatoProjectileEntityHitAction$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotatoProjectileEntityHitAction$Type$$Type = (("pre_hit") | ("on_hit"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotatoProjectileEntityHitAction$Type$$Original = $PotatoProjectileEntityHitAction$Type;}
declare module "com.simibubi.create.api.registry.SimpleRegistry" {
import {$SimpleRegistry$Provider$$Type} from "com.simibubi.create.api.registry.SimpleRegistry$Provider"
import {$StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"

export interface $SimpleRegistry$$Interface<K, V> {
}

export class $SimpleRegistry<K, V> implements $SimpleRegistry$$Interface {
 "registerProvider"(arg0: $SimpleRegistry$Provider$$Type<(K), (V)>): void
 "get"(arg0: $StateHolder$$Type<(K), (never)>): V
 "get"(arg0: K): V
 "register"(arg0: K, arg1: V): void
static "create"<K, V>(): $SimpleRegistry<(K), (V)>
 "invalidate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleRegistry$$Type<K, V> = ($SimpleRegistry<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleRegistry$$Original<K, V> = $SimpleRegistry<(K), (V)>;}
declare module "com.simibubi.create.api.behaviour.display.DisplayTarget" {
import {$RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$DisplayTargetStats} from "com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$BlockBuilder} from "com.tterrag.registrate.builders.BlockBuilder"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$AABB} from "net.minecraft.world.phys.AABB"

export class $DisplayTarget {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry<($BlockEntityType<(never)>), ($DisplayTarget)>
static readonly "BY_BLOCK": $SimpleRegistry<($Block), ($DisplayTarget)>

constructor()

public static "displayTarget"<B extends $Block, P>(arg0: $RegistryEntry$$Type<($DisplayTarget$$Type), ($DisplayTarget$$Type)>): $NonNullUnaryOperator<($BlockBuilder<(B), (P)>)>
public "isReserved"(arg0: integer, arg1: $BlockEntity$$Type, arg2: $DisplayLinkContext$$Type): boolean
public "getLineOptionText"(arg0: integer): $Component
public "getMultiblockBounds"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): $AABB
public "provideStats"(arg0: $DisplayLinkContext$$Type): $DisplayTargetStats
public "requiresComponentSanitization"(): boolean
public "acceptText"(arg0: integer, arg1: $List$$Type<($MutableComponent$$Type)>, arg2: $DisplayLinkContext$$Type): void
public static "get"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): $DisplayTarget
public static "get"(arg0: $ResourceLocation$$Type): $DisplayTarget
public static "reserve"(arg0: integer, arg1: $BlockEntity$$Type, arg2: $DisplayLinkContext$$Type): void
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreateDisplayTarget
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreateDisplayTargetTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayTarget$$Type = (Special.CreateDisplayTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisplayTarget$$Original = $DisplayTarget;}
declare module "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity" {
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"

export interface $TransformableBlockEntity$$Interface {

(arg0: $BlockEntity, arg1: $StructureTransform): void
}

export class $TransformableBlockEntity implements $TransformableBlockEntity$$Interface {
 "transform"(arg0: $BlockEntity$$Type, arg1: $StructureTransform$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableBlockEntity$$Type = ((arg0: $BlockEntity, arg1: $StructureTransform) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformableBlockEntity$$Original = $TransformableBlockEntity;}
declare module "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageType" {
import {$RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$MountedFluidStorage} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorage"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockBuilder} from "com.tterrag.registrate.builders.BlockBuilder"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MountedFluidStorageType<T extends $MountedFluidStorage> {
readonly "codec": $MapCodec<(T)>
static readonly "CODEC": $Codec<($MountedFluidStorageType<(never)>)>
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MountedFluidStorageType<(never)>)>

public static "mountedFluidStorage"<B extends $Block, P>(arg0: $RegistryEntry$$Type<($MountedFluidStorageType$$Type<(never)>), ($MountedFluidStorageType$$Type<(never)>)>): $NonNullUnaryOperator<($BlockBuilder<(B), (P)>)>
public "mount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): T
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreateMountedFluidStorageType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreateMountedFluidStorageTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountedFluidStorageType$$Type<T> = (Special.CreateMountedFluidStorageType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MountedFluidStorageType$$Original<T> = $MountedFluidStorageType<(T)>;}
declare module "com.simibubi.create.api.equipment.goggles.IHaveCustomOverlayIcon" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"

export interface $IHaveCustomOverlayIcon$$Interface {
}

export class $IHaveCustomOverlayIcon implements $IHaveCustomOverlayIcon$$Interface {
 "getIcon"(arg0: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveCustomOverlayIcon$$Type = ($IHaveCustomOverlayIcon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHaveCustomOverlayIcon$$Original = $IHaveCustomOverlayIcon;}
declare module "com.simibubi.create.api.schematic.nbt.PartialSafeNBT" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $PartialSafeNBT$$Interface {

(arg0: $CompoundTag, arg1: $HolderLookup$Provider): void
}

export class $PartialSafeNBT implements $PartialSafeNBT$$Interface {
 "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartialSafeNBT$$Type = ((arg0: $CompoundTag, arg1: $HolderLookup$Provider) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartialSafeNBT$$Original = $PartialSafeNBT;}
declare module "com.simibubi.create.api.equipment.potatoCannon.PotatoProjectileBlockHitAction" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $PotatoProjectileBlockHitAction$$Interface {
}

export class $PotatoProjectileBlockHitAction implements $PotatoProjectileBlockHitAction$$Interface {
static readonly "CODEC": $Codec<($PotatoProjectileBlockHitAction)>

 "execute"(arg0: $LevelAccessor$$Type, arg1: $ItemStack$$Type, arg2: $BlockHitResult$$Type): boolean
 "codec"(): $MapCodec<($PotatoProjectileBlockHitAction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotatoProjectileBlockHitAction$$Type = ($PotatoProjectileBlockHitAction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotatoProjectileBlockHitAction$$Original = $PotatoProjectileBlockHitAction;}
declare module "com.simibubi.create.api.event.PipeCollisionEvent$Flow" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PipeCollisionEvent} from "com.simibubi.create.api.event.PipeCollisionEvent"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PipeCollisionEvent$Flow extends $PipeCollisionEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Fluid$$Type, arg3: $Fluid$$Type, arg4: $BlockState$$Type)

public "getFirstFluid"(): $Fluid
public "getSecondFluid"(): $Fluid
get "firstFluid"(): $Fluid
get "secondFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeCollisionEvent$Flow$$Type = ($PipeCollisionEvent$Flow);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PipeCollisionEvent$Flow$$Original = $PipeCollisionEvent$Flow;}
declare module "com.simibubi.create.api.contraption.storage.fluid.WrapperMountedFluidStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$MountedFluidStorageType} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageType"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$MountedFluidStorage} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorage"

export class $WrapperMountedFluidStorage<T extends $IFluidHandler> extends $MountedFluidStorage {
static readonly "CODEC": $Codec<($MountedFluidStorage)>
readonly "type": $MountedFluidStorageType<($MountedFluidStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedFluidStorage)>

public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
get "tanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrapperMountedFluidStorage$$Type<T> = ($WrapperMountedFluidStorage<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrapperMountedFluidStorage$$Original<T> = $WrapperMountedFluidStorage<(T)>;}
declare module "com.simibubi.create.api.contraption.ContraptionType" {
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Contraption, $Contraption$$Type} from "com.simibubi.create.content.contraptions.Contraption"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"

export class $ContraptionType {
readonly "factory": $Supplier<($Contraption)>
readonly "holder": $Holder$Reference<($ContraptionType)>

constructor(arg0: $Supplier$$Type<($Contraption$$Type)>)

public static "fromType"(arg0: StringJS): $Contraption
public "is"(arg0: $TagKey$$Type<($ContraptionType)>): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreateContraptionType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreateContraptionTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContraptionType$$Type = (Special.CreateContraptionType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContraptionType$$Original = $ContraptionType;}
declare module "com.simibubi.create.api.equipment.goggles.IHaveHoveringInformation" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IHaveCustomOverlayIcon$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveCustomOverlayIcon"

export interface $IHaveHoveringInformation$$Interface extends $IHaveCustomOverlayIcon$$Interface {
}

export class $IHaveHoveringInformation implements $IHaveHoveringInformation$$Interface {
 "addToTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
 "getIcon"(arg0: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveHoveringInformation$$Type = ($IHaveHoveringInformation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHaveHoveringInformation$$Original = $IHaveHoveringInformation;}
declare module "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType" {
import {$RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$MountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$BlockBuilder} from "com.tterrag.registrate.builders.BlockBuilder"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MountedItemStorageType<T extends $MountedItemStorage> {
readonly "codec": $MapCodec<(T)>
static readonly "CODEC": $Codec<($MountedItemStorageType<(never)>)>
readonly "holder": $Holder$Reference<($MountedItemStorageType<(never)>)>
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MountedItemStorageType<(never)>)>

public static "mountedItemStorage"<B extends $Block, P>(arg0: $RegistryEntry$$Type<($MountedItemStorageType$$Type<(never)>), ($MountedItemStorageType$$Type<(never)>)>): $NonNullUnaryOperator<($BlockBuilder<(B), (P)>)>
public "mount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): T
public "is"(arg0: $TagKey$$Type<($MountedItemStorageType<(never)>)>): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreateMountedItemStorageType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreateMountedItemStorageTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountedItemStorageType$$Type<T> = (Special.CreateMountedItemStorageType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MountedItemStorageType$$Original<T> = $MountedItemStorageType<(T)>;}
declare module "com.simibubi.create.api.schematic.requirement.SpecialBlockEntityItemRequirement" {
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $SpecialBlockEntityItemRequirement$$Interface {

(arg0: $BlockState): $ItemRequirement$$Type
}

export class $SpecialBlockEntityItemRequirement implements $SpecialBlockEntityItemRequirement$$Interface {
 "getRequiredItems"(arg0: $BlockState$$Type): $ItemRequirement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialBlockEntityItemRequirement$$Type = ((arg0: $BlockState) => $ItemRequirement$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialBlockEntityItemRequirement$$Original = $SpecialBlockEntityItemRequirement;}
declare module "com.simibubi.create.api.contraption.storage.item.MountedItemStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Contraption$$Type} from "com.simibubi.create.content.contraptions.Contraption"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container} from "net.minecraft.world.Container"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$StructureTemplate$StructureBlockInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MountedItemStorageType} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MountedItemStorage implements $IItemHandlerModifiable$$Interface {
static readonly "CODEC": $Codec<($MountedItemStorage)>
readonly "type": $MountedItemStorageType<($MountedItemStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedItemStorage)>

public "handleInteraction"(arg0: $ServerPlayer$$Type, arg1: $Contraption$$Type, arg2: $StructureTemplate$StructureBlockInfo$$Type): boolean
public "unmount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): void
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getSlots"(): integer
public "kjs$self"(): $IItemHandler
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getBlock"(level: $Level$$Type): $LevelBlock
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "clear"(): void
public "clear"(match: $ItemPredicate$$Type): void
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "getAllItems"(): $List<($ItemStack)>
public "asContainer"(): $Container
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountedItemStorage$$Type = ($MountedItemStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MountedItemStorage$$Original = $MountedItemStorage;}
declare module "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageWrapper" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MountedFluidStorage, $MountedFluidStorage$$Type} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorage"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$CombinedTankWrapper} from "com.simibubi.create.foundation.fluid.CombinedTankWrapper"

export class $MountedFluidStorageWrapper extends $CombinedTankWrapper {
readonly "storages": $ImmutableMap<($BlockPos), ($MountedFluidStorage)>

constructor(arg0: $ImmutableMap$$Type<($BlockPos$$Type), ($MountedFluidStorage$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountedFluidStorageWrapper$$Type = ($MountedFluidStorageWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MountedFluidStorageWrapper$$Original = $MountedFluidStorageWrapper;}
declare module "com.simibubi.create.api.packager.InventoryIdentifier" {
import {$BlockFace, $BlockFace$$Type} from "net.createmod.catnip.math.BlockFace"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InventoryIdentifier$Finder} from "com.simibubi.create.api.packager.InventoryIdentifier$Finder"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"

export interface $InventoryIdentifier$$Interface {

(arg0: $BlockFace): boolean
}

export class $InventoryIdentifier implements $InventoryIdentifier$$Interface {
static readonly "REGISTRY": $SimpleRegistry<($Block), ($InventoryIdentifier$Finder)>

static "get"(arg0: $Level$$Type, arg1: $BlockFace$$Type): $InventoryIdentifier
 "contains"(arg0: $BlockFace$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryIdentifier$$Type = ((arg0: $BlockFace) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryIdentifier$$Original = $InventoryIdentifier;}
declare module "com.simibubi.create.api.behaviour.movement.MovementBehaviour" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$VisualizationContext$$Type} from "dev.engine_room.flywheel.api.visualization.VisualizationContext"
import {$ContraptionMatrices$$Type} from "com.simibubi.create.content.contraptions.render.ContraptionMatrices"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$MovementContext$$Type} from "com.simibubi.create.content.contraptions.behaviour.MovementContext"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$NonNullConsumer} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$VirtualRenderWorld$$Type} from "com.simibubi.create.foundation.virtualWorld.VirtualRenderWorld"
import {$ActorVisual} from "com.simibubi.create.content.contraptions.render.ActorVisual"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $MovementBehaviour$$Interface {
}

export class $MovementBehaviour implements $MovementBehaviour$$Interface {
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MovementBehaviour)>

/**
 * 
 * @deprecated
 */
 "dropItem"(arg0: $MovementContext$$Type, arg1: $ItemStack$$Type): void
 "createVisual"(arg0: $VisualizationContext$$Type, arg1: $VirtualRenderWorld$$Type, arg2: $MovementContext$$Type): $ActorVisual
 "cancelStall"(arg0: $MovementContext$$Type): void
 "collectOrDropItem"(arg0: $MovementContext$$Type, arg1: $ItemStack$$Type): void
 "startMoving"(arg0: $MovementContext$$Type): void
 "visitNewPosition"(arg0: $MovementContext$$Type, arg1: $BlockPos$$Type): void
 "getActiveAreaOffset"(arg0: $MovementContext$$Type): $Vec3
 "canBeDisabledVia"(arg0: $MovementContext$$Type): $ItemStack
 "onDisabledByControls"(arg0: $MovementContext$$Type): void
 "mustTickWhileDisabled"(): boolean
 "onSpeedChanged"(arg0: $MovementContext$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type): void
 "stopMoving"(arg0: $MovementContext$$Type): void
 "writeExtraData"(arg0: $MovementContext$$Type): void
 "renderInContraption"(arg0: $MovementContext$$Type, arg1: $VirtualRenderWorld$$Type, arg2: $ContraptionMatrices$$Type, arg3: $MultiBufferSource$$Type): void
static "movementBehaviour"<B extends $Block>(arg0: $MovementBehaviour$$Type): $NonNullConsumer<(B)>
 "disableBlockEntityRendering"(): boolean
 "tick"(arg0: $MovementContext$$Type): void
 "isActive"(arg0: $MovementContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovementBehaviour$$Type = ($MovementBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MovementBehaviour$$Original = $MovementBehaviour;}
declare module "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IHaveCustomOverlayIcon$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveCustomOverlayIcon"

export interface $IHaveGoggleInformation$$Interface extends $IHaveCustomOverlayIcon$$Interface {
}

export class $IHaveGoggleInformation implements $IHaveGoggleInformation$$Interface {
 "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
 "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
 "getIcon"(arg0: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveGoggleInformation$$Type = ($IHaveGoggleInformation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHaveGoggleInformation$$Original = $IHaveGoggleInformation;}
declare module "com.simibubi.create.api.behaviour.interaction.MovingInteractionBehaviour" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContraptionEntity$$Type} from "com.simibubi.create.content.contraptions.AbstractContraptionEntity"
import {$NonNullConsumer} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MovingInteractionBehaviour {
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MovingInteractionBehaviour)>

constructor()

public "handleEntityCollision"(arg0: $Entity$$Type, arg1: $BlockPos$$Type, arg2: $AbstractContraptionEntity$$Type): void
public "handlePlayerInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockPos$$Type, arg3: $AbstractContraptionEntity$$Type): boolean
public static "interactionBehaviour"<B extends $Block>(arg0: $MovingInteractionBehaviour$$Type): $NonNullConsumer<(B)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovingInteractionBehaviour$$Type = ($MovingInteractionBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MovingInteractionBehaviour$$Original = $MovingInteractionBehaviour;}
declare module "com.simibubi.create.api.contraption.storage.item.simple.SimpleMountedStorageType" {
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$MountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SimpleMountedStorage} from "com.simibubi.create.api.contraption.storage.item.simple.SimpleMountedStorage"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$MountedItemStorageType} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SimpleMountedStorageType<T extends $SimpleMountedStorage> extends $MountedItemStorageType<($SimpleMountedStorage)> {
readonly "codec": $MapCodec<(T)>
static readonly "CODEC": $Codec<($MountedItemStorageType<(never)>)>
readonly "holder": $Holder$Reference<($MountedItemStorageType<(never)>)>
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MountedItemStorageType<(never)>)>

public "mount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): $MountedItemStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMountedStorageType$$Type<T> = ($SimpleMountedStorageType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleMountedStorageType$$Original<T> = $SimpleMountedStorageType<(T)>;}
declare module "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IFluidHandler$$Interface} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$MountedFluidStorageType} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageType"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MountedFluidStorage implements $IFluidHandler$$Interface {
static readonly "CODEC": $Codec<($MountedFluidStorage)>
readonly "type": $MountedFluidStorageType<($MountedFluidStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedFluidStorage)>

public "unmount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): void
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
get "tanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountedFluidStorage$$Type = ($MountedFluidStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MountedFluidStorage$$Original = $MountedFluidStorage;}
declare module "com.simibubi.create.api.contraption.storage.item.MountedItemStorageWrapper" {
import {$CombinedInvWrapper} from "net.neoforged.neoforge.items.wrapper.CombinedInvWrapper"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$MountedItemStorage, $MountedItemStorage$$Type} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"

export class $MountedItemStorageWrapper extends $CombinedInvWrapper {
readonly "storages": $ImmutableMap<($BlockPos), ($MountedItemStorage)>

constructor(arg0: $ImmutableMap$$Type<($BlockPos$$Type), ($MountedItemStorage$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountedItemStorageWrapper$$Type = ($MountedItemStorageWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MountedItemStorageWrapper$$Original = $MountedItemStorageWrapper;}
declare module "com.simibubi.create.api.behaviour.spouting.BlockSpoutingBehaviour" {
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$SpoutBlockEntity, $SpoutBlockEntity$$Type} from "com.simibubi.create.content.fluids.spout.SpoutBlockEntity"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $BlockSpoutingBehaviour$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $SpoutBlockEntity, arg3: $FluidStack, arg4: boolean): integer
}

export class $BlockSpoutingBehaviour implements $BlockSpoutingBehaviour$$Interface {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry<($BlockEntityType<(never)>), ($BlockSpoutingBehaviour)>
static readonly "BY_BLOCK": $SimpleRegistry<($Block), ($BlockSpoutingBehaviour)>

 "fillBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $SpoutBlockEntity$$Type, arg3: $FluidStack$$Type, arg4: boolean): integer
static "get"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $BlockSpoutingBehaviour
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSpoutingBehaviour$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $SpoutBlockEntity, arg3: $FluidStack, arg4: boolean) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockSpoutingBehaviour$$Original = $BlockSpoutingBehaviour;}
declare module "com.simibubi.create.api.registry.SimpleRegistry$Provider" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $SimpleRegistry$Provider$$Interface<K, V> {

(arg0: K): V
}

export class $SimpleRegistry$Provider<K, V> implements $SimpleRegistry$Provider$$Interface {
static "forTag"<K, V>(arg0: $TagKey$$Type<(K)>, arg1: $Function$$Type<(K), ($Holder$$Type<(K)>)>, arg2: V): $SimpleRegistry$Provider<(K), (V)>
static "forBlockTag"<V>(arg0: $TagKey$$Type<($Block)>, arg1: V): $SimpleRegistry$Provider<($Block), (V)>
static "forBlockEntityTag"<V>(arg0: $TagKey$$Type<($BlockEntityType<(never)>)>, arg1: V): $SimpleRegistry$Provider<($BlockEntityType<(never)>), (V)>
static "forItemTag"<V>(arg0: $TagKey$$Type<($Item)>, arg1: V): $SimpleRegistry$Provider<($Item), (V)>
static "forEntityTag"<V>(arg0: $TagKey$$Type<($EntityType<(never)>)>, arg1: V): $SimpleRegistry$Provider<($EntityType<(never)>), (V)>
static "forFluidTag"<V>(arg0: $TagKey$$Type<($Fluid)>, arg1: V): $SimpleRegistry$Provider<($Fluid), (V)>
 "get"(arg0: K): V
 "onRegister"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleRegistry$Provider$$Type<K, V> = ((arg0: K) => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleRegistry$Provider$$Original<K, V> = $SimpleRegistry$Provider<(K), (V)>;}
declare module "com.simibubi.create.api.equipment.potatoCannon.PotatoProjectileRenderMode" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PotatoProjectileEntity$$Type} from "com.simibubi.create.content.equipment.potatoCannon.PotatoProjectileEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $PotatoProjectileRenderMode$$Interface {
}

export class $PotatoProjectileRenderMode implements $PotatoProjectileRenderMode$$Interface {
static readonly "CODEC": $Codec<($PotatoProjectileRenderMode)>

 "transform"(arg0: $PoseStack$$Type, arg1: $PotatoProjectileEntity$$Type, arg2: float): void
 "codec"(): $MapCodec<($PotatoProjectileRenderMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotatoProjectileRenderMode$$Type = ($PotatoProjectileRenderMode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotatoProjectileRenderMode$$Original = $PotatoProjectileRenderMode;}
declare module "com.simibubi.create.api.contraption.storage.item.WrapperMountedItemStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$MountedItemStorageType} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$MountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $WrapperMountedItemStorage<T extends $IItemHandlerModifiable> extends $MountedItemStorage {
static readonly "CODEC": $Codec<($MountedItemStorage)>
readonly "type": $MountedItemStorageType<($MountedItemStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedItemStorage)>

public static "copyToItemStackHandler"(arg0: $IItemHandler$$Type): $ItemStackHandler
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrapperMountedItemStorage$$Type<T> = ($WrapperMountedItemStorage<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrapperMountedItemStorage$$Original<T> = $WrapperMountedItemStorage<(T)>;}
declare module "com.simibubi.create.api.equipment.potatoCannon.PotatoProjectileEntityHitAction" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EntityHitResult$$Type} from "net.minecraft.world.phys.EntityHitResult"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$PotatoProjectileEntityHitAction$Type$$Type} from "com.simibubi.create.api.equipment.potatoCannon.PotatoProjectileEntityHitAction$Type"

export interface $PotatoProjectileEntityHitAction$$Interface {
}

export class $PotatoProjectileEntityHitAction implements $PotatoProjectileEntityHitAction$$Interface {
static readonly "CODEC": $Codec<($PotatoProjectileEntityHitAction)>

 "execute"(arg0: $ItemStack$$Type, arg1: $EntityHitResult$$Type, arg2: $PotatoProjectileEntityHitAction$Type$$Type): boolean
 "codec"(): $MapCodec<($PotatoProjectileEntityHitAction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotatoProjectileEntityHitAction$$Type = ($PotatoProjectileEntityHitAction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotatoProjectileEntityHitAction$$Original = $PotatoProjectileEntityHitAction;}
declare module "com.simibubi.create.api.packager.InventoryIdentifier$Finder" {
import {$BlockFace, $BlockFace$$Type} from "net.createmod.catnip.math.BlockFace"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InventoryIdentifier, $InventoryIdentifier$$Type} from "com.simibubi.create.api.packager.InventoryIdentifier"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $InventoryIdentifier$Finder$$Interface {

(arg0: $Level, arg1: $BlockState, arg2: $BlockFace): $InventoryIdentifier$$Type
}

export class $InventoryIdentifier$Finder implements $InventoryIdentifier$Finder$$Interface {
 "find"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockFace$$Type): $InventoryIdentifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryIdentifier$Finder$$Type = ((arg0: $Level, arg1: $BlockState, arg2: $BlockFace) => $InventoryIdentifier$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryIdentifier$Finder$$Original = $InventoryIdentifier$Finder;}
declare module "com.simibubi.create.api.event.TrackGraphMergeEvent" {
import {$TrackGraph, $TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$Event} from "net.neoforged.bus.api.Event"

export class $TrackGraphMergeEvent extends $Event {
constructor(arg0: $TrackGraph$$Type, arg1: $TrackGraph$$Type)

public "getGraphMergedInto"(): $TrackGraph
public "getGraphMergedFrom"(): $TrackGraph
get "graphMergedInto"(): $TrackGraph
get "graphMergedFrom"(): $TrackGraph
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackGraphMergeEvent$$Type = ($TrackGraphMergeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrackGraphMergeEvent$$Original = $TrackGraphMergeEvent;}
declare module "com.simibubi.create.api.contraption.storage.item.simple.SimpleMountedStorageType$Impl" {
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$SimpleMountedStorageType} from "com.simibubi.create.api.contraption.storage.item.simple.SimpleMountedStorageType"
import {$MountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SimpleMountedStorage} from "com.simibubi.create.api.contraption.storage.item.simple.SimpleMountedStorage"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$MountedItemStorageType} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SimpleMountedStorageType$Impl extends $SimpleMountedStorageType<($SimpleMountedStorage)> {
readonly "codec": $MapCodec<(T)>
static readonly "CODEC": $Codec<($MountedItemStorageType<(never)>)>
readonly "holder": $Holder$Reference<($MountedItemStorageType<(never)>)>
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MountedItemStorageType<(never)>)>

constructor()

public "mount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): $MountedItemStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMountedStorageType$Impl$$Type = ($SimpleMountedStorageType$Impl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleMountedStorageType$Impl$$Original = $SimpleMountedStorageType$Impl;}
declare module "com.simibubi.create.api.contraption.storage.item.simple.SimpleMountedStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$WrapperMountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.WrapperMountedItemStorage"
import {$MountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$MountedItemStorageType, $MountedItemStorageType$$Type} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $SimpleMountedStorage extends $WrapperMountedItemStorage<($ItemStackHandler)> {
static readonly "CODEC": $MapCodec<($SimpleMountedStorage)>
readonly "type": $MountedItemStorageType<($MountedItemStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedItemStorage)>

constructor(arg0: $MountedItemStorageType$$Type<(never)>, arg1: $IItemHandler$$Type)
constructor(arg0: $IItemHandler$$Type)

public "unmount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): void
public static "codec"<T extends $SimpleMountedStorage>(arg0: $Function$$Type<($IItemHandler), (T)>): $MapCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMountedStorage$$Type = ($SimpleMountedStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleMountedStorage$$Original = $SimpleMountedStorage;}
declare module "com.simibubi.create.api.contraption.storage.item.chest.ChestMountedStorageType" {
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$SimpleMountedStorageType} from "com.simibubi.create.api.contraption.storage.item.simple.SimpleMountedStorageType"
import {$MountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$ChestMountedStorage} from "com.simibubi.create.api.contraption.storage.item.chest.ChestMountedStorage"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$MountedItemStorageType} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChestMountedStorageType extends $SimpleMountedStorageType<($ChestMountedStorage)> {
readonly "codec": $MapCodec<(T)>
static readonly "CODEC": $Codec<($MountedItemStorageType<(never)>)>
readonly "holder": $Holder$Reference<($MountedItemStorageType<(never)>)>
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MountedItemStorageType<(never)>)>

constructor()

public "mount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): $MountedItemStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMountedStorageType$$Type = ($ChestMountedStorageType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChestMountedStorageType$$Original = $ChestMountedStorageType;}
declare module "com.simibubi.create.api.registry.SimpleRegistry$Multi" {
import {$List, $List$$Type} from "java.util.List"
import {$SimpleRegistry$Provider$$Type} from "com.simibubi.create.api.registry.SimpleRegistry$Provider"
import {$StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$SimpleRegistry$$Interface} from "com.simibubi.create.api.registry.SimpleRegistry"

export interface $SimpleRegistry$Multi$$Interface<K, V> extends $SimpleRegistry$$Interface<(K), ($List<(V)>)> {
}

export class $SimpleRegistry$Multi<K, V> implements $SimpleRegistry$Multi$$Interface {
 "get"(arg0: $StateHolder$$Type): any
 "get"(arg0: any): any
 "add"(arg0: K, arg1: V): void
static "create"<K, V>(): $SimpleRegistry$Multi<(K), (V)>
 "addProvider"(arg0: $SimpleRegistry$Provider$$Type<(K), (V)>): void
 "registerProvider"(arg0: $SimpleRegistry$Provider$$Type<(K), ($List$$Type<(V)>)>): void
 "register"(arg0: K, arg1: $List$$Type<(V)>): void
 "invalidate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleRegistry$Multi$$Type<K, V> = ($SimpleRegistry$Multi<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleRegistry$Multi$$Original<K, V> = $SimpleRegistry$Multi<(K), (V)>;}
declare module "com.simibubi.create.api.contraption.storage.item.chest.ChestMountedStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleMountedStorage} from "com.simibubi.create.api.contraption.storage.item.simple.SimpleMountedStorage"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$MountedItemStorageType} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$MountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChestMountedStorage extends $SimpleMountedStorage {
static readonly "CODEC": $MapCodec<($ChestMountedStorage)>
readonly "type": $MountedItemStorageType<($MountedItemStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedItemStorage)>

constructor(arg0: $IItemHandler$$Type)

public "unmount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMountedStorage$$Type = ($ChestMountedStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChestMountedStorage$$Original = $ChestMountedStorage;}
declare module "com.simibubi.create.api.contraption.transformable.TransformableBlock" {
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $TransformableBlock$$Interface {

(arg0: $BlockState, arg1: $StructureTransform): $BlockState$$Type
}

export class $TransformableBlock implements $TransformableBlock$$Interface {
 "transform"(arg0: $BlockState$$Type, arg1: $StructureTransform$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableBlock$$Type = ((arg0: $BlockState, arg1: $StructureTransform) => $BlockState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformableBlock$$Original = $TransformableBlock;}
declare module "com.simibubi.create.api.event.BlockEntityBehaviourEvent" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Map$$Type} from "java.util.Map"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BehaviourType$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $BlockEntityBehaviourEvent extends $Event {
constructor(arg0: $SmartBlockEntity$$Type, arg1: $Map$$Type<($BehaviourType$$Type<(never)>), ($BlockEntityBehaviour$$Type)>)

public "forType"<T extends $SmartBlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
public "remove"(arg0: $BehaviourType$$Type<(never)>): $BlockEntityBehaviour
public "attach"(arg0: $BlockEntityBehaviour$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBehaviourEvent$$Type = ($BlockEntityBehaviourEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityBehaviourEvent$$Original = $BlockEntityBehaviourEvent;}
declare module "com.simibubi.create.api.contraption.storage.SyncedMountedStorage" {
import {$Contraption$$Type} from "com.simibubi.create.content.contraptions.Contraption"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $SyncedMountedStorage$$Interface {
get "dirty"(): boolean
}

export class $SyncedMountedStorage implements $SyncedMountedStorage$$Interface {
 "markClean"(): void
 "afterSync"(arg0: $Contraption$$Type, arg1: $BlockPos$$Type): void
 "isDirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedMountedStorage$$Type = ($SyncedMountedStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedMountedStorage$$Original = $SyncedMountedStorage;}
