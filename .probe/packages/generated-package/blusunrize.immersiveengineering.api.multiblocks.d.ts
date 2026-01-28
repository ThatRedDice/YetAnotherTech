declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.util.CapabilityPosition" {
import {$RelativeBlockFace, $RelativeBlockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.RelativeBlockFace"
import {$MultiblockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.MultiblockFace"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $CapabilityPosition extends $Record {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $RelativeBlockFace$$Type)
constructor(posInMultiblock: $BlockPos$$Type, side: $RelativeBlockFace$$Type)

public "posInMultiblock"(): $BlockPos
public static "opposing"(arg0: $MultiblockFace$$Type): $CapabilityPosition
public "equalsOrNullFace"(arg0: $CapabilityPosition$$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "side"(): $RelativeBlockFace
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityPosition$$Type = ({"posInMultiblock"?: $BlockPos$$Type, "side"?: $RelativeBlockFace$$Type}) | ([posInMultiblock?: $BlockPos$$Type, side?: $RelativeBlockFace$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityPosition$$Original = $CapabilityPosition;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelperMaster$Factory" {
import {$MultiblockRegistration, $MultiblockRegistration$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration"
import {$IMultiblockBEHelperMaster, $IMultiblockBEHelperMaster$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelperMaster"
import {$MultiblockBlockEntityMaster, $MultiblockBlockEntityMaster$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockBlockEntityMaster"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"

export interface $IMultiblockBEHelperMaster$Factory$$Interface {

(arg0: $MultiblockBlockEntityMaster<(T)>, arg1: $MultiblockRegistration<(T)>): $IMultiblockBEHelperMaster$$Type<(T)>
}

export class $IMultiblockBEHelperMaster$Factory implements $IMultiblockBEHelperMaster$Factory$$Interface {
 "makeFor"<T extends $IMultiblockState>(arg0: $MultiblockBlockEntityMaster$$Type<(T)>, arg1: $MultiblockRegistration$$Type<(T)>): $IMultiblockBEHelperMaster<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockBEHelperMaster$Factory$$Type = ((arg0: $MultiblockBlockEntityMaster<(T)>, arg1: $MultiblockRegistration<(T)>) => $IMultiblockBEHelperMaster$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockBEHelperMaster$Factory$$Original = $IMultiblockBEHelperMaster$Factory;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IMultiblockComponent$CapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent$CapabilityRegistrar"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IMultiblockContext$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IMultiblockComponent$$Interface<State> {
}

export class $IMultiblockComponent<State> implements $IMultiblockComponent$$Interface {
 "click"(arg0: $IMultiblockContext$$Type<(State)>, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $BlockHitResult$$Type, arg5: boolean): $ItemInteractionResult
 "onEntityCollision"(arg0: $IMultiblockContext$$Type<(State)>, arg1: $BlockPos$$Type, arg2: $Entity$$Type): void
 "dropExtraItems"(arg0: State, arg1: $Consumer$$Type<($ItemStack)>): void
 "onRemoved"(arg0: $IMultiblockContext$$Type<(State)>): void
 "registerCapabilities"(arg0: $IMultiblockComponent$CapabilityRegistrar$$Type<(State)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockComponent$$Type<State> = ($IMultiblockComponent<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockComponent$$Original<State> = $IMultiblockComponent<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockPartBlock" {
import {$MultiblockRegistration$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MultiblockPartBlock<State extends $IMultiblockState> extends $Block implements $EntityBlock$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $MultiblockRegistration$$Type<(State)>)

public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPartBlock$$Type<State> = ($MultiblockPartBlock<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockPartBlock$$Original<State> = $MultiblockPartBlock<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockBlockEntityDummy" {
import {$MultiblockRegistration$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$IMultiblockBE$$Interface} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockBE"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IModelOffsetProvider$$Interface} from "blusunrize.immersiveengineering.api.client.IModelOffsetProvider"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IMultiblockBEHelperDummy} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelperDummy"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiblockBlockEntityDummy<State extends $IMultiblockState> extends $BlockEntity implements $IModelOffsetProvider$$Interface, $IMultiblockBE$$Interface<(State)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $MultiblockRegistration$$Type<(State)>)

public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getHelper"(): $IMultiblockBEHelperDummy<(State)>
public "getModelOffset"(arg0: $BlockState$$Type, arg1: $Vec3i$$Type): $BlockPos
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "helper"(): $IMultiblockBEHelperDummy<(State)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBlockEntityDummy$$Type<State> = ($MultiblockBlockEntityDummy<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockBlockEntityDummy$$Original<State> = $MultiblockBlockEntityDummy<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockPartBlock$WithMirrorState" {
import {$MultiblockRegistration$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$MultiblockPartBlock} from "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockPartBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiblockPartBlock$WithMirrorState<State extends $IMultiblockState> extends $MultiblockPartBlock<(State)> {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $MultiblockRegistration$$Type<(State)>)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPartBlock$WithMirrorState$$Type<State> = ($MultiblockPartBlock$WithMirrorState<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockPartBlock$WithMirrorState$$Original<State> = $MultiblockPartBlock$WithMirrorState<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistrationBuilder" {
import {$MultiblockRegistration, $MultiblockRegistration$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration"
import {$MultiblockPartBlock$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockPartBlock"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IMultiblockLogic$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockLogic"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$IMultiblockComponent, $IMultiblockComponent$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IEventBus$$Type} from "net.neoforged.bus.api.IEventBus"
import {$IMultiblockComponent$StateWrapper$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent$StateWrapper"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$DeferredRegister$$Type} from "net.neoforged.neoforge.registries.DeferredRegister"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$TemplateMultiblock$$Type} from "blusunrize.immersiveengineering.api.multiblocks.TemplateMultiblock"
import {$MultiblockRegistrationBuilder$RegistrationMethod$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistrationBuilder$RegistrationMethod"

export class $MultiblockRegistrationBuilder<State extends $IMultiblockState, Self extends $MultiblockRegistrationBuilder<(object), (object)>> {
static readonly "MASTER_BE_SUFFIX": StringJS
static readonly "DUMMY_BE_SUFFIX": StringJS

constructor(arg0: $IMultiblockLogic$$Type<(State)>, arg1: $ResourceLocation$$Type)

public "defaultBlock"(arg0: $DeferredRegister$$Type<($Block$$Type)>, arg1: $DeferredRegister$$Type<($Item$$Type)>, arg2: $BlockBehaviour$Properties$$Type): Self
public "defaultBlock"(arg0: $MultiblockRegistrationBuilder$RegistrationMethod$$Type<($Block$$Type)>, arg1: $MultiblockRegistrationBuilder$RegistrationMethod$$Type<($Item$$Type)>, arg2: $BlockBehaviour$Properties$$Type): Self
public "notMirrored"(): Self
public "customBlock"(arg0: $MultiblockRegistrationBuilder$RegistrationMethod$$Type<($Block$$Type)>, arg1: $MultiblockRegistrationBuilder$RegistrationMethod$$Type<($Item$$Type)>, arg2: $Function$$Type<($MultiblockRegistration<(State)>), ($MultiblockPartBlock$$Type<(State)>)>, arg3: $Function$$Type<($Block), ($Item$$Type)>): Self
public "customBlock"(arg0: $DeferredRegister$$Type<($Block$$Type)>, arg1: $DeferredRegister$$Type<($Item$$Type)>, arg2: $Function$$Type<($MultiblockRegistration<(State)>), ($MultiblockPartBlock$$Type<(State)>)>, arg3: $Function$$Type<($Block), ($Item$$Type)>): Self
public "defaultBEs"(arg0: $MultiblockRegistrationBuilder$RegistrationMethod$$Type<($BlockEntityType$$Type<(never)>)>): Self
public "defaultBEs"(arg0: $DeferredRegister$$Type<($BlockEntityType$$Type<(never)>)>): Self
public "postProcessesShape"(): Self
public "redstoneAware"(): Self
public "selfWrappingComponent"<CS, C extends $IMultiblockComponent<(object)>>(arg0: C): Self
public "withComparator"(): Self
public "component"<CS>(arg0: $IMultiblockComponent$$Type<(CS)>, arg1: $IMultiblockComponent$StateWrapper$$Type<(State), (CS)>): Self
public "component"(arg0: $IMultiblockComponent$$Type<(State)>): Self
public "build"(arg0: $Consumer$$Type<($Consumer<($IEventBus)>)>): $MultiblockRegistration<(State)>
public "structure"(arg0: $Supplier$$Type<($TemplateMultiblock$$Type)>): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRegistrationBuilder$$Type<State, Self> = ($MultiblockRegistrationBuilder<(State), (Self)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockRegistrationBuilder$$Original<State, Self> = $MultiblockRegistrationBuilder<(State), (Self)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent$CapabilityRegistrar" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$Function$$Type} from "java.util.function.Function"
import {$CapabilityPosition$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.CapabilityPosition"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IMultiblockComponent$CapabilityGetter, $IMultiblockComponent$CapabilityGetter$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent$CapabilityGetter"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IMultiblockComponent$CapabilityRegistrar$$Interface<State> {

(arg0: $BlockCapability<(T), ($Direction)>, arg1: $IMultiblockComponent$CapabilityGetter<(T), (State)>): void
}

export class $IMultiblockComponent$CapabilityRegistrar<State> implements $IMultiblockComponent$CapabilityRegistrar$$Interface {
 "registerAt"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $CapabilityPosition$$Type, arg2: $Function$$Type<(State), (T)>): void
 "registerAtOrNull"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $CapabilityPosition$$Type, arg2: $Function$$Type<(State), (T)>): void
 "registerAtBlockPos"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $BlockPos$$Type, arg2: $Function$$Type<(State), (T)>): void
 "registerEverywhere"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $Function$$Type<(State), (T)>): void
 "register"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $IMultiblockComponent$CapabilityGetter$$Type<(T), (State)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockComponent$CapabilityRegistrar$$Type<State> = ((arg0: $BlockCapability<(T), ($Direction)>, arg1: $IMultiblockComponent$CapabilityGetter<(T), (State)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockComponent$CapabilityRegistrar$$Original<State> = $IMultiblockComponent$CapabilityRegistrar<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.BlockMatcher$Result" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockMatcher$Result {
static readonly "DEFAULT": $BlockMatcher$Result

public "isAllow"(): boolean
public "isDeny"(): boolean
public static "allow"(arg0: integer): $BlockMatcher$Result
public static "combine"(arg0: $BlockMatcher$Result$$Type, arg1: $BlockMatcher$Result$$Type): $BlockMatcher$Result
public "isDefault"(): boolean
public static "deny"(arg0: integer): $BlockMatcher$Result
get "default"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMatcher$Result$$Type = ($BlockMatcher$Result);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockMatcher$Result$$Original = $BlockMatcher$Result;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.util.RelativeBlockFace" {
import {$MultiblockOrientation$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.MultiblockOrientation"
import {$Enum} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $RelativeBlockFace extends $Enum<($RelativeBlockFace)> {
static readonly "DOWN": $RelativeBlockFace
static readonly "LEFT": $RelativeBlockFace
static readonly "FRONT": $RelativeBlockFace
static readonly "BACK": $RelativeBlockFace
static readonly "RIGHT": $RelativeBlockFace
static readonly "UP": $RelativeBlockFace
static readonly "HORIZONTAL": ($RelativeBlockFace)[]

public "forFront"(arg0: $MultiblockOrientation$$Type): $Direction
public "offsetRelative"(arg0: $BlockPos$$Type, arg1: integer): $BlockPos
public static "values"(): ($RelativeBlockFace)[]
public static "valueOf"(arg0: StringJS): $RelativeBlockFace
public static "from"(arg0: $MultiblockOrientation$$Type, arg1: $Direction$$Type): $RelativeBlockFace
public "getOpposite"(): $RelativeBlockFace
get "opposite"(): $RelativeBlockFace
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelativeBlockFace$$Type = (("front") | ("left") | ("back") | ("right") | ("up") | ("down"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RelativeBlockFace$$Original = $RelativeBlockFace;}
declare module "blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$IMultiblock" {
import {$ClientMultiblocks$MultiblockManualData$$Type} from "blusunrize.immersiveengineering.api.multiblocks.ClientMultiblocks$MultiblockManualData"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StructureTemplate$StructureBlockInfo} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $MultiblockHandler$IMultiblock$$Interface {
get "manualScale"(): float
get "triggerOffset"(): $BlockPos
get "block"(): $Block
get "displayName"(): $Component
get "uniqueName"(): $ResourceLocation
}

export class $MultiblockHandler$IMultiblock implements $MultiblockHandler$IMultiblock$$Interface {
 "initializeClient"(arg0: $Consumer$$Type<($ClientMultiblocks$MultiblockManualData)>): void
 "getManualScale"(): float
 "getTriggerOffset"(): $BlockPos
 "isBlockTrigger"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $Level$$Type): boolean
 "createStructure"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $Player$$Type): boolean
 "getBlock"(): $Block
 "getDisplayName"(): $Component
 "getSize"(arg0: $Level$$Type): $Vec3i
 "disassemble"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean, arg3: $Direction$$Type): void
 "getUniqueName"(): $ResourceLocation
 "getStructure"(arg0: $Level$$Type): $List<($StructureTemplate$StructureBlockInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockHandler$IMultiblock$$Type = ($MultiblockHandler$IMultiblock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockHandler$IMultiblock$$Original = $MultiblockHandler$IMultiblock;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration$Disassembler" {
import {$MultiblockOrientation, $MultiblockOrientation$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.MultiblockOrientation"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $MultiblockRegistration$Disassembler$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $MultiblockOrientation): void
}

export class $MultiblockRegistration$Disassembler implements $MultiblockRegistration$Disassembler$$Interface {
 "disassemble"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $MultiblockOrientation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRegistration$Disassembler$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $MultiblockOrientation) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockRegistration$Disassembler$$Original = $MultiblockRegistration$Disassembler;}
declare module "blusunrize.immersiveengineering.api.multiblocks.ClientMultiblocks$MultiblockManualData" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $ClientMultiblocks$MultiblockManualData$$Interface {
get "totalMaterials"(): $NonNullList<($ItemStack)>
}

export class $ClientMultiblocks$MultiblockManualData implements $ClientMultiblocks$MultiblockManualData$$Interface {
 "canRenderFormedStructure"(): boolean
 "getTotalMaterials"(): $NonNullList<($ItemStack)>
 "renderFormedStructure"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientMultiblocks$MultiblockManualData$$Type = ($ClientMultiblocks$MultiblockManualData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientMultiblocks$MultiblockManualData$$Original = $ClientMultiblocks$MultiblockManualData;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelperDummy$Factory" {
import {$MultiblockRegistration, $MultiblockRegistration$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IMultiblockBEHelperDummy, $IMultiblockBEHelperDummy$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelperDummy"

export interface $IMultiblockBEHelperDummy$Factory$$Interface {

(arg0: $BlockEntity, arg1: $MultiblockRegistration<(T)>): $IMultiblockBEHelperDummy$$Type<(T)>
}

export class $IMultiblockBEHelperDummy$Factory implements $IMultiblockBEHelperDummy$Factory$$Interface {
 "makeFor"<T extends $IMultiblockState>(arg0: $BlockEntity$$Type, arg1: $MultiblockRegistration$$Type<(T)>): $IMultiblockBEHelperDummy<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockBEHelperDummy$Factory$$Type = ((arg0: $BlockEntity, arg1: $MultiblockRegistration<(T)>) => $IMultiblockBEHelperDummy$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockBEHelperDummy$Factory$$Original = $IMultiblockBEHelperDummy$Factory;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockBE" {
import {$IMultiblockBEHelper, $IMultiblockBEHelper$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelper"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"

export interface $IMultiblockBE$$Interface<State extends $IMultiblockState> {

(): $IMultiblockBEHelper$$Type<(State)>
get "helper"(): $IMultiblockBEHelper<(State)>
}

export class $IMultiblockBE<State extends $IMultiblockState> implements $IMultiblockBE$$Interface {
 "getHelper"(): $IMultiblockBEHelper<(State)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockBE$$Type<State> = (() => $IMultiblockBEHelper$$Type<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockBE$$Original<State> = $IMultiblockBE<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockBlockEntityMaster" {
import {$MultiblockRegistration$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IMultiblockBEHelperMaster} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelperMaster"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$IMultiblockBE$$Interface} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockBE"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IModelOffsetProvider$$Interface} from "blusunrize.immersiveengineering.api.client.IModelOffsetProvider"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiblockBlockEntityMaster<State extends $IMultiblockState> extends $BlockEntity implements $IModelOffsetProvider$$Interface, $IMultiblockBE$$Interface<(State)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $MultiblockRegistration$$Type<(State)>)

public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getHelper"(): $IMultiblockBEHelperMaster<(State)>
public "getModelOffset"(arg0: $BlockState$$Type, arg1: $Vec3i$$Type): $BlockPos
public "onLoad"(): void
public "setRemoved"(): void
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "helper"(): $IMultiblockBEHelperMaster<(State)>
get "removed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBlockEntityMaster$$Type<State> = ($MultiblockBlockEntityMaster<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockBlockEntityMaster$$Original<State> = $MultiblockBlockEntityMaster<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.BlockMatcher$MatcherPredicate" {
import {$BlockMatcher$Result, $BlockMatcher$Result$$Type} from "blusunrize.immersiveengineering.api.multiblocks.BlockMatcher$Result"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockMatcher$MatcherPredicate$$Interface {

(arg0: $BlockState, arg1: $BlockState, arg2: $Level, arg3: $BlockPos): $BlockMatcher$Result$$Type
}

export class $BlockMatcher$MatcherPredicate implements $BlockMatcher$MatcherPredicate$$Interface {
 "matches"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): $BlockMatcher$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMatcher$MatcherPredicate$$Type = ((arg0: $BlockState, arg1: $BlockState, arg2: $Level, arg3: $BlockPos) => $BlockMatcher$Result$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockMatcher$MatcherPredicate$$Original = $BlockMatcher$MatcherPredicate;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IMultiblockState$$Interface {
}

export class $IMultiblockState implements $IMultiblockState$$Interface {
 "writeSaveNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "writeSyncNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "readSaveNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "readSyncNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockState$$Type = ($IMultiblockState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockState$$Original = $IMultiblockState;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelper" {
import {$RelativeBlockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.RelativeBlockFace"
import {$MultiblockRegistration, $MultiblockRegistration$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IMultiblockContext} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockContext"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$ShapeType$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.ShapeType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CapabilityPosition} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.CapabilityPosition"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export interface $IMultiblockBEHelper$$Interface<State extends $IMultiblockState> {
get "multiblock"(): $MultiblockRegistration<(State)>
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "pickBlock"(): $ItemStack
get "positionInMB"(): $BlockPos
get "comparatorValue"(): integer
get "context"(): $IMultiblockContext<(State)>
get "state"(): State
}

export class $IMultiblockBEHelper<State extends $IMultiblockState> implements $IMultiblockBEHelper$$Interface {
 "getMultiblock"(): $MultiblockRegistration<(State)>
 "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
 "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "onDataPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getOriginalBlock"(arg0: $Level$$Type): $BlockState
 "click"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockHitResult$$Type): $ItemInteractionResult
 "onEntityCollided"(arg0: $Entity$$Type): void
 "getPickBlock"(): $ItemStack
 "markDisassembling"(): void
 "getCapabilityPosition"(arg0: $Direction$$Type): $CapabilityPosition
 "getPositionInMB"(): $BlockPos
 "getRedstoneInput"(arg0: $RelativeBlockFace$$Type): integer
 "getComparatorValue"(): integer
 "onNeighborChanged"(arg0: $BlockPos$$Type): void
 "getShape"(arg0: $CollisionContext$$Type, arg1: $ShapeType$$Type): $VoxelShape
 "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getContext"(): $IMultiblockContext<(State)>
 "getState"(): State
 "asType"<OtherState extends $IMultiblockState>(arg0: $MultiblockRegistration$$Type<(OtherState)>): $IMultiblockBEHelper<(OtherState)>
 "disassemble"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockBEHelper$$Type<State> = ($IMultiblockBEHelper<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockBEHelper$$Original<State> = $IMultiblockBEHelper<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.TemplateMultiblock" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$StructureTemplate$StructureBlockInfo} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$StructureTemplate$Palette$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$ClientMultiblocks$MultiblockManualData$$Type} from "blusunrize.immersiveengineering.api.multiblocks.ClientMultiblocks$MultiblockManualData"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockMatcher$MatcherPredicate$$Type} from "blusunrize.immersiveengineering.api.multiblocks.BlockMatcher$MatcherPredicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StructureTemplate, $StructureTemplate$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TemplateMultiblock$TemplateData} from "blusunrize.immersiveengineering.api.multiblocks.TemplateMultiblock$TemplateData"
import {$MultiblockHandler$IMultiblock$$Interface} from "blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$IMultiblock"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"

export class $TemplateMultiblock implements $MultiblockHandler$IMultiblock$$Interface {
static readonly "SYNCED_CLIENT_TEMPLATES": $Map<($ResourceLocation), ($StructureTemplate)>

constructor(arg0: $ResourceLocation$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: $List$$Type<($BlockMatcher$MatcherPredicate$$Type)>)
constructor(arg0: $ResourceLocation$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type)
constructor(arg0: $ResourceLocation$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: $Map$$Type<($Block$$Type), ($TagKey$$Type<($Block$$Type)>)>)

public "getTriggerOffset"(): $BlockPos
public static "setCallbacks"(arg0: $Function$$Type<($BlockState), ($ItemStack$$Type)>, arg1: $Function$$Type<($StructureTemplate), ($List$$Type<($StructureTemplate$Palette$$Type)>)>): void
public "isBlockTrigger"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $Level$$Type): boolean
public "createStructure"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $Player$$Type): boolean
public static "withSettingsAndOffset"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type, arg2: boolean, arg3: $Direction$$Type): $BlockPos
public static "withSettingsAndOffset"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type, arg2: $Mirror$$Type, arg3: $Rotation$$Type): $BlockPos
public "getTemplateLocation"(): $ResourceLocation
public "canBeMirrored"(): boolean
public static "getAbsoluteOffset"(arg0: $BlockPos$$Type, arg1: $Mirror$$Type, arg2: $Rotation$$Type): $BlockPos
public static "getAbsoluteOffset"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Direction$$Type): $BlockPos
public "getMasterFromOriginOffset"(): $BlockPos
public "getSize"(arg0: $Level$$Type): $Vec3i
public "getTemplate"(arg0: $Level$$Type): $TemplateMultiblock$TemplateData
public "disassemble"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean, arg3: $Direction$$Type): void
public "getUniqueName"(): $ResourceLocation
public "getStructure"(arg0: $Level$$Type): $List<($StructureTemplate$StructureBlockInfo)>
public "initializeClient"(arg0: $Consumer$$Type<($ClientMultiblocks$MultiblockManualData)>): void
public "getManualScale"(): float
public "getBlock"(): $Block
public "getDisplayName"(): $Component
get "triggerOffset"(): $BlockPos
get "templateLocation"(): $ResourceLocation
get "masterFromOriginOffset"(): $BlockPos
get "uniqueName"(): $ResourceLocation
get "manualScale"(): float
get "block"(): $Block
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateMultiblock$$Type = ($TemplateMultiblock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemplateMultiblock$$Original = $TemplateMultiblock;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent$StateWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMultiblockComponent$StateWrapper$$Interface<OuterState, OwnState> {

(arg0: OuterState): OwnState
}

export class $IMultiblockComponent$StateWrapper<OuterState, OwnState> implements $IMultiblockComponent$StateWrapper$$Interface {
 "wrapState"(arg0: OuterState): OwnState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockComponent$StateWrapper$$Type<OuterState, OwnState> = ((arg0: OuterState) => OwnState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockComponent$StateWrapper$$Original<OuterState, OwnState> = $IMultiblockComponent$StateWrapper<(OuterState), (OwnState)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration" {
import {$MultiblockPartBlock, $MultiblockPartBlock$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockPartBlock"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$MultiblockRegistration$Disassembler, $MultiblockRegistration$Disassembler$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration$Disassembler"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$IMultiblockLogic, $IMultiblockLogic$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockLogic"
import {$MultiblockRegistrationBuilder} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistrationBuilder"
import {$MultiblockRegistration$ExtraComponent, $MultiblockRegistration$ExtraComponent$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration$ExtraComponent"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$MultiblockBlockEntityMaster, $MultiblockBlockEntityMaster$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockBlockEntityMaster"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MultiblockBlockEntityDummy, $MultiblockBlockEntityDummy$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockBlockEntityDummy"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $MultiblockRegistration<State extends $IMultiblockState> extends $Record {
constructor(logic: $IMultiblockLogic$$Type<(State)>, extraComponents: $List$$Type<($MultiblockRegistration$ExtraComponent$$Type<(State), (never)>)>, masterBE: $Supplier$$Type<($BlockEntityType$$Type<($MultiblockBlockEntityMaster$$Type<(State)>)>)>, dummyBE: $Supplier$$Type<($BlockEntityType$$Type<($MultiblockBlockEntityDummy$$Type<(State)>)>)>, block: $Supplier$$Type<($MultiblockPartBlock$$Type<(State)>)>, blockItem: $Supplier$$Type<($Item$$Type)>, mirrorable: boolean, hasComparatorOutput: boolean, redstoneInputAware: boolean, postProcessesShape: boolean, getMasterPosInMB: $Supplier$$Type<($BlockPos$$Type)>, getSize: $Function$$Type<($Level), ($Vec3i$$Type)>, disassemble: $MultiblockRegistration$Disassembler$$Type, getStructure: $Function$$Type<($Level), ($List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>)>, id: $ResourceLocation$$Type)

public "iconStack"(): $ItemStack
public "blockItem"(): $Supplier<($Item)>
public "masterBE"(): $Supplier<($BlockEntityType<($MultiblockBlockEntityMaster<(State)>)>)>
public "hasComparatorOutput"(): boolean
public "dummyBE"(): $Supplier<($BlockEntityType<($MultiblockBlockEntityDummy<(State)>)>)>
public "masterPosInMB"(): $BlockPos
public "postProcessesShape"(): boolean
public "mirrorable"(): boolean
public "extraComponents"(): $List<($MultiblockRegistration$ExtraComponent<(State), (never)>)>
public "redstoneInputAware"(): boolean
public "getMasterPosInMB"(): $Supplier<($BlockPos)>
public "logic"(): $IMultiblockLogic<(State)>
public "size"(arg0: $Level$$Type): $Vec3i
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"<State extends $IMultiblockState>(arg0: $IMultiblockLogic$$Type<(State)>, arg1: $ResourceLocation$$Type): $MultiblockRegistrationBuilder<(State), (never)>
public "id"(): $ResourceLocation
public "getSize"(): $Function<($Level), ($Vec3i)>
public "block"(): $Supplier<($MultiblockPartBlock<(State)>)>
public "disassemble"(): $MultiblockRegistration$Disassembler
public "getStructure"(): $Function<($Level), ($List<($StructureTemplate$StructureBlockInfo)>)>
get "structure"(): $Function<($Level), ($List<($StructureTemplate$StructureBlockInfo)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRegistration$$Type<State> = ({"redstoneInputAware"?: boolean, "dummyBE"?: $Supplier$$Type<($BlockEntityType$$Type<($MultiblockBlockEntityDummy$$Type<(State)>)>)>, "getMasterPosInMB"?: $Supplier$$Type<($BlockPos$$Type)>, "mirrorable"?: boolean, "disassemble"?: $MultiblockRegistration$Disassembler$$Type, "id"?: $ResourceLocation$$Type, "getStructure"?: $Function$$Type<($Level$$Type), ($List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>)>, "blockItem"?: $Supplier$$Type<($Item$$Type)>, "hasComparatorOutput"?: boolean, "postProcessesShape"?: boolean, "extraComponents"?: $List$$Type<($MultiblockRegistration$ExtraComponent$$Type<(State), (never)>)>, "block"?: $Supplier$$Type<($MultiblockPartBlock$$Type<(State)>)>, "logic"?: $IMultiblockLogic$$Type<(State)>, "getSize"?: $Function$$Type<($Level$$Type), ($Vec3i$$Type)>, "masterBE"?: $Supplier$$Type<($BlockEntityType$$Type<($MultiblockBlockEntityMaster$$Type<(State)>)>)>}) | ([redstoneInputAware?: boolean, dummyBE?: $Supplier$$Type<($BlockEntityType$$Type<($MultiblockBlockEntityDummy$$Type<(State)>)>)>, getMasterPosInMB?: $Supplier$$Type<($BlockPos$$Type)>, mirrorable?: boolean, disassemble?: $MultiblockRegistration$Disassembler$$Type, id?: $ResourceLocation$$Type, getStructure?: $Function$$Type<($Level$$Type), ($List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>)>, blockItem?: $Supplier$$Type<($Item$$Type)>, hasComparatorOutput?: boolean, postProcessesShape?: boolean, extraComponents?: $List$$Type<($MultiblockRegistration$ExtraComponent$$Type<(State), (never)>)>, block?: $Supplier$$Type<($MultiblockPartBlock$$Type<(State)>)>, logic?: $IMultiblockLogic$$Type<(State)>, getSize?: $Function$$Type<($Level$$Type), ($Vec3i$$Type)>, masterBE?: $Supplier$$Type<($BlockEntityType$$Type<($MultiblockBlockEntityMaster$$Type<(State)>)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockRegistration$$Original<State> = $MultiblockRegistration<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.MultiblockAdvancementTrigger$Instance" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MultiblockHandler$IMultiblock$$Type} from "blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$IMultiblock"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$CriterionTriggerInstance$$Interface} from "net.minecraft.advancements.CriterionTriggerInstance"
import {$Record} from "java.lang.Record"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $MultiblockAdvancementTrigger$Instance extends $Record implements $CriterionTriggerInstance$$Interface {
static readonly "CODEC": $Codec<($MultiblockAdvancementTrigger$Instance)>

constructor(multiblock: $ResourceLocation$$Type, hammer: $ItemPredicate$$Type)

public "multiblock"(): $ResourceLocation
public "hammer"(): $ItemPredicate
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $MultiblockHandler$IMultiblock$$Type, arg1: $ItemStack$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockAdvancementTrigger$Instance$$Type = ({"multiblock"?: $ResourceLocation$$Type, "hammer"?: $ItemPredicate$$Type}) | ([multiblock?: $ResourceLocation$$Type, hammer?: $ItemPredicate$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockAdvancementTrigger$Instance$$Original = $MultiblockAdvancementTrigger$Instance;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.env.ICommonMultiblockContext" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$RelativeBlockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.RelativeBlockFace"
import {$MultiblockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.MultiblockFace"
import {$Supplier} from "java.util.function.Supplier"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ICommonMultiblockContext$$Interface {
}

export class $ICommonMultiblockContext implements $ICommonMultiblockContext$$Interface {
 "getCapabilityAt"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $BlockPos$$Type, arg2: C): $Supplier<(T)>
 "getCapabilityAt"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $BlockPos$$Type, arg2: $RelativeBlockFace$$Type): $Supplier<(T)>
 "getCapabilityAt"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $MultiblockFace$$Type): $Supplier<(T)>
 "getVoidCapabilityAt"<T>(arg0: $BlockCapability$$Type<(T), (void)>, arg1: $BlockPos$$Type): $Supplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICommonMultiblockContext$$Type = ($ICommonMultiblockContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICommonMultiblockContext$$Original = $ICommonMultiblockContext;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.util.MultiblockFace" {
import {$RelativeBlockFace, $RelativeBlockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.RelativeBlockFace"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $MultiblockFace extends $Record {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $RelativeBlockFace$$Type)
constructor(face: $RelativeBlockFace$$Type, posInMultiblock: $BlockPos$$Type)

public "face"(): $RelativeBlockFace
public "posInMultiblock"(): $BlockPos
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockFace$$Type = ({"face"?: $RelativeBlockFace$$Type, "posInMultiblock"?: $BlockPos$$Type}) | ([face?: $RelativeBlockFace$$Type, posInMultiblock?: $BlockPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockFace$$Original = $MultiblockFace;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelperMaster" {
import {$MultiblockRegistration, $MultiblockRegistration$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IMultiblockContext} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockContext"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IMultiblockBEHelperMaster$Factory} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelperMaster$Factory"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$RelativeBlockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.RelativeBlockFace"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$ShapeType$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.ShapeType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IMultiblockBEHelper, $IMultiblockBEHelper$$Interface} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelper"
import {$CapabilityPosition} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.CapabilityPosition"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$AABB} from "net.minecraft.world.phys.AABB"

export interface $IMultiblockBEHelperMaster$$Interface<State extends $IMultiblockState> extends $IMultiblockBEHelper$$Interface<(State)> {
get "renderBoundingBox"(): $AABB
get "context"(): $IMultiblockContext<(State)>
get "state"(): State
get "multiblock"(): $MultiblockRegistration<(State)>
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "pickBlock"(): $ItemStack
get "positionInMB"(): $BlockPos
get "comparatorValue"(): integer
}

export class $IMultiblockBEHelperMaster<State extends $IMultiblockState> implements $IMultiblockBEHelperMaster$$Interface {
static readonly "MAKE_HELPER": $SetRestrictedField<($IMultiblockBEHelperMaster$Factory)>

 "tickClient"(): void
 "tickServer"(): void
 "getRenderBoundingBox"(): $AABB
 "invalidateAllCaps"(): void
 "onRemoved"(): void
 "getContext"(): $IMultiblockContext<(State)>
 "getState"(): State
 "getMultiblock"(): $MultiblockRegistration<(State)>
 "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
 "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "onDataPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getOriginalBlock"(arg0: $Level$$Type): $BlockState
 "click"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockHitResult$$Type): $ItemInteractionResult
 "onEntityCollided"(arg0: $Entity$$Type): void
 "getPickBlock"(): $ItemStack
 "markDisassembling"(): void
 "getCapabilityPosition"(arg0: $Direction$$Type): $CapabilityPosition
 "getPositionInMB"(): $BlockPos
 "getRedstoneInput"(arg0: $RelativeBlockFace$$Type): integer
 "getComparatorValue"(): integer
 "onNeighborChanged"(arg0: $BlockPos$$Type): void
 "getShape"(arg0: $CollisionContext$$Type, arg1: $ShapeType$$Type): $VoxelShape
 "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "asType"<OtherState extends $IMultiblockState>(arg0: $MultiblockRegistration$$Type<(OtherState)>): $IMultiblockBEHelper<(OtherState)>
 "disassemble"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockBEHelperMaster$$Type<State> = ($IMultiblockBEHelperMaster<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockBEHelperMaster$$Original<State> = $IMultiblockBEHelperMaster<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.TemplateMultiblock$TemplateData" {
import {$List, $List$$Type} from "java.util.List"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import {$StructureTemplate, $StructureTemplate$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import {$Record} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TemplateMultiblock$TemplateData extends $Record {
constructor(template: $StructureTemplate$$Type, blocksWithoutAir: $List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>, triggerState: $BlockState$$Type)

public "triggerState"(): $BlockState
public "blocksWithoutAir"(): $List<($StructureTemplate$StructureBlockInfo)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "template"(): $StructureTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateMultiblock$TemplateData$$Type = ({"triggerState"?: $BlockState$$Type, "blocksWithoutAir"?: $List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>, "template"?: $StructureTemplate$$Type}) | ([triggerState?: $BlockState$$Type, blocksWithoutAir?: $List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>, template?: $StructureTemplate$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemplateMultiblock$TemplateData$$Original = $TemplateMultiblock$TemplateData;}
declare module "blusunrize.immersiveengineering.api.multiblocks.MultiblockAdvancementTrigger" {
import {$PlayerAdvancements$$Type} from "net.minecraft.server.PlayerAdvancements"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CriterionTrigger, $CriterionTrigger$$Interface} from "net.minecraft.advancements.CriterionTrigger"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$CriterionTrigger$Listener$$Type} from "net.minecraft.advancements.CriterionTrigger$Listener"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiblockAdvancementTrigger$Instance, $MultiblockAdvancementTrigger$Instance$$Type} from "blusunrize.immersiveengineering.api.multiblocks.MultiblockAdvancementTrigger$Instance"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MultiblockHandler$IMultiblock$$Type} from "blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$IMultiblock"
import {$Supplier} from "java.util.function.Supplier"
import {$DeferredRegister} from "net.neoforged.neoforge.registries.DeferredRegister"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $MultiblockAdvancementTrigger implements $CriterionTrigger$$Interface<($MultiblockAdvancementTrigger$Instance)> {
static readonly "REGISTER": $DeferredRegister<($CriterionTrigger<(never)>)>
static "INSTANCE": $Supplier<($MultiblockAdvancementTrigger)>

constructor()

public "addPlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<($MultiblockAdvancementTrigger$Instance$$Type)>): void
public "removePlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<($MultiblockAdvancementTrigger$Instance$$Type)>): void
public "removePlayerListeners"(arg0: $PlayerAdvancements$$Type): void
public "trigger"(arg0: $ServerPlayer$$Type, arg1: $MultiblockHandler$IMultiblock$$Type, arg2: $ItemStack$$Type): void
public static "create"(arg0: $ResourceLocation$$Type, arg1: $ItemPredicate$$Type): $Criterion<(never)>
public "codec"(): $Codec<($MultiblockAdvancementTrigger$Instance)>
public "createCriterion"(arg0: $MultiblockAdvancementTrigger$Instance$$Type): $Criterion<($MultiblockAdvancementTrigger$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockAdvancementTrigger$$Type = ($MultiblockAdvancementTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockAdvancementTrigger$$Original = $MultiblockAdvancementTrigger;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.util.ShapeType" {
import {$Enum} from "java.lang.Enum"

export class $ShapeType extends $Enum<($ShapeType)> {
static readonly "BLOCK_SUPPORT": $ShapeType
static readonly "COLLISION": $ShapeType
static readonly "SELECTION": $ShapeType

public static "values"(): ($ShapeType)[]
public static "valueOf"(arg0: StringJS): $ShapeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeType$$Type = (("collision") | ("block_support") | ("selection"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapeType$$Original = $ShapeType;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $MultiblockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

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
export type $MultiblockItem$$Type = ($MultiblockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockItem$$Original = $MultiblockItem;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration$ExtraComponent" {
import {$IMultiblockComponent$StateWrapper, $IMultiblockComponent$StateWrapper$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent$StateWrapper"
import {$IMultiblockComponent, $IMultiblockComponent$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent"
import {$Record} from "java.lang.Record"

export class $MultiblockRegistration$ExtraComponent<State, ComponentState> extends $Record {
constructor(component: $IMultiblockComponent$$Type<(ComponentState)>, makeWrapper: $IMultiblockComponent$StateWrapper$$Type<(State), (ComponentState)>)

public "makeWrapper"(): $IMultiblockComponent$StateWrapper<(State), (ComponentState)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "component"(): $IMultiblockComponent<(ComponentState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRegistration$ExtraComponent$$Type<State, ComponentState> = ({"component"?: $IMultiblockComponent$$Type<(ComponentState)>, "makeWrapper"?: $IMultiblockComponent$StateWrapper$$Type<(State), (ComponentState)>}) | ([component?: $IMultiblockComponent$$Type<(ComponentState)>, makeWrapper?: $IMultiblockComponent$StateWrapper$$Type<(State), (ComponentState)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockRegistration$ExtraComponent$$Original<State, ComponentState> = $MultiblockRegistration$ExtraComponent<(State), (ComponentState)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.util.MultiblockOrientation" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiblockOrientation extends $Record {
constructor(front: $Direction$$Type, mirrored: boolean)
constructor(arg0: $BlockState$$Type, arg1: boolean)

public "getAbsoluteOffset"(arg0: $BlockPos$$Type): $BlockPos
public "getAbsoluteOffset"(arg0: $Vec3$$Type): $Vec3
public "getPosInMB"(arg0: $BlockPos$$Type): $BlockPos
public "transformRelativeShape"(arg0: $VoxelShape$$Type): $VoxelShape
public "mirrored"(): boolean
public "front"(): $Direction
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockOrientation$$Type = ({"front"?: $Direction$$Type, "mirrored"?: boolean}) | ([front?: $Direction$$Type, mirrored?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockOrientation$$Original = $MultiblockOrientation;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistrationBuilder$RegistrationMethod" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DeferredRegister$$Type} from "net.neoforged.neoforge.registries.DeferredRegister"

export interface $MultiblockRegistrationBuilder$RegistrationMethod$$Interface<Base> {

(arg0: StringJS, arg1: $Supplier<(T)>): $Supplier$$Type<(T)>
}

export class $MultiblockRegistrationBuilder$RegistrationMethod<Base> implements $MultiblockRegistrationBuilder$RegistrationMethod$$Interface {
static "fromDeferred"<B>(arg0: $DeferredRegister$$Type<(B)>): $MultiblockRegistrationBuilder$RegistrationMethod<(B)>
 "register"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): $Supplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRegistrationBuilder$RegistrationMethod$$Type<Base> = ((arg0: StringJS, arg1: $Supplier<(T)>) => $Supplier$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockRegistrationBuilder$RegistrationMethod$$Original<Base> = $MultiblockRegistrationBuilder$RegistrationMethod<(Base)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent$CapabilityGetter" {
import {$CapabilityPosition, $CapabilityPosition$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.CapabilityPosition"

export interface $IMultiblockComponent$CapabilityGetter$$Interface<T, State> {

(arg0: State, arg1: $CapabilityPosition): T
}

export class $IMultiblockComponent$CapabilityGetter<T, State> implements $IMultiblockComponent$CapabilityGetter$$Interface {
 "getCapability"(arg0: State, arg1: $CapabilityPosition$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockComponent$CapabilityGetter$$Type<T, State> = ((arg0: State, arg1: $CapabilityPosition) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockComponent$CapabilityGetter$$Original<T, State> = $IMultiblockComponent$CapabilityGetter<(T), (State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockContext" {
import {$RelativeBlockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.RelativeBlockFace"
import {$MultiblockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.MultiblockFace"
import {$BooleanSupplier} from "java.util.function.BooleanSupplier"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IMultiblockLevel} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockLevel"

export interface $IMultiblockContext$$Interface<State> {
get "level"(): $IMultiblockLevel
get "state"(): State
get "valid"(): $BooleanSupplier
}

export class $IMultiblockContext<State> implements $IMultiblockContext$$Interface {
 "markMasterDirty"(): void
 "requestMasterBESync"(): void
 "getRedstoneInputValue"(arg0: $MultiblockFace$$Type, arg1: integer): integer
 "getRedstoneInputValue"(arg0: $BlockPos$$Type, arg1: integer): integer
 "getRedstoneInputValue"(arg0: $BlockPos$$Type, arg1: $RelativeBlockFace$$Type, arg2: integer): integer
 "markDirtyAndSync"(): void
 "setComparatorOutputFor"(arg0: $BlockPos$$Type, arg1: integer): void
 "getLevel"(): $IMultiblockLevel
 "getState"(): State
 "isValid"(): $BooleanSupplier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockContext$$Type<State> = ($IMultiblockContext<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockContext$$Original<State> = $IMultiblockContext<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockLevel" {
import {$RelativeBlockFace, $RelativeBlockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.RelativeBlockFace"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiblockOrientation} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.MultiblockOrientation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IMultiblockLevel$$Interface {
get "orientation"(): $MultiblockOrientation
get "rawLevel"(): $Level
get "absoluteOrigin"(): $BlockPos
get "maxBuildHeight"(): integer
get "thundering"(): boolean
get "raining"(): boolean
}

export class $IMultiblockLevel implements $IMultiblockLevel$$Interface {
 "getOrientation"(): $MultiblockOrientation
 "toAbsolute"(arg0: $AABB$$Type): $AABB
 "toAbsolute"(arg0: $BlockPos$$Type): $BlockPos
 "toAbsolute"(arg0: $RelativeBlockFace$$Type): $Direction
 "toAbsolute"(arg0: $Vec3$$Type): $Vec3
 "toRelative"(arg0: $BlockPos$$Type): $BlockPos
 "toRelative"(arg0: $Direction$$Type): $RelativeBlockFace
 "getRawLevel"(): $Level
 "shouldTickModulo"(arg0: integer): boolean
 "forciblyGetBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getAbsoluteOrigin"(): $BlockPos
 "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getMaxBuildHeight"(): integer
 "isThundering"(): boolean
 "isRaining"(): boolean
 "updateNeighbourForOutputSignal"(arg0: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockLevel$$Type = ($IMultiblockLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockLevel$$Original = $IMultiblockLevel;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelperDummy" {
import {$MultiblockRegistration, $MultiblockRegistration$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IMultiblockContext} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockContext"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$RelativeBlockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.RelativeBlockFace"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$ShapeType$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.ShapeType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IMultiblockBEHelper, $IMultiblockBEHelper$$Interface} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelper"
import {$CapabilityPosition} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.CapabilityPosition"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IMultiblockBEHelperDummy$Factory} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockBEHelperDummy$Factory"

export interface $IMultiblockBEHelperDummy$$Interface<State extends $IMultiblockState> extends $IMultiblockBEHelper$$Interface<(State)> {
set "positionInMB"(value: $BlockPos$$Type)
get "multiblock"(): $MultiblockRegistration<(State)>
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "pickBlock"(): $ItemStack
get "positionInMB"(): $BlockPos
get "comparatorValue"(): integer
get "context"(): $IMultiblockContext<(State)>
get "state"(): State
}

export class $IMultiblockBEHelperDummy<State extends $IMultiblockState> implements $IMultiblockBEHelperDummy$$Interface {
static readonly "MAKE_HELPER": $SetRestrictedField<($IMultiblockBEHelperDummy$Factory)>

 "setPositionInMB"(arg0: $BlockPos$$Type): void
 "getMultiblock"(): $MultiblockRegistration<(State)>
 "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
 "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "onDataPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getOriginalBlock"(arg0: $Level$$Type): $BlockState
 "click"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockHitResult$$Type): $ItemInteractionResult
 "onEntityCollided"(arg0: $Entity$$Type): void
 "getPickBlock"(): $ItemStack
 "markDisassembling"(): void
 "getCapabilityPosition"(arg0: $Direction$$Type): $CapabilityPosition
 "getPositionInMB"(): $BlockPos
 "getRedstoneInput"(arg0: $RelativeBlockFace$$Type): integer
 "getComparatorValue"(): integer
 "onNeighborChanged"(arg0: $BlockPos$$Type): void
 "getShape"(arg0: $CollisionContext$$Type, arg1: $ShapeType$$Type): $VoxelShape
 "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getContext"(): $IMultiblockContext<(State)>
 "getState"(): State
 "asType"<OtherState extends $IMultiblockState>(arg0: $MultiblockRegistration$$Type<(OtherState)>): $IMultiblockBEHelper<(OtherState)>
 "disassemble"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockBEHelperDummy$$Type<State> = ($IMultiblockBEHelperDummy<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockBEHelperDummy$$Original<State> = $IMultiblockBEHelperDummy<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockLogic" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IMultiblockContext$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockContext"
import {$IMultiblockState, $IMultiblockState$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$IMultiblockComponent$$Interface} from "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent"
import {$ShapeType$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.ShapeType"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IMultiblockComponent$CapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.component.IMultiblockComponent$CapabilityRegistrar"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Function} from "java.util.function.Function"
import {$IInitialMultiblockContext$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IInitialMultiblockContext"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IMultiblockLogic$$Interface<State extends $IMultiblockState> extends $IMultiblockComponent$$Interface<(State)> {
}

export class $IMultiblockLogic<State extends $IMultiblockState> implements $IMultiblockLogic$$Interface {
 "createInitialState"(arg0: $IInitialMultiblockContext$$Type<(State)>): State
 "shapeGetter"(arg0: $ShapeType$$Type): $Function<($BlockPos), ($VoxelShape)>
 "postProcessAbsoluteShape"(arg0: $IMultiblockContext$$Type<(State)>, arg1: $VoxelShape$$Type, arg2: $CollisionContext$$Type, arg3: $BlockPos$$Type, arg4: $ShapeType$$Type): $VoxelShape
 "click"(arg0: $IMultiblockContext$$Type<(State)>, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $BlockHitResult$$Type, arg5: boolean): $ItemInteractionResult
 "onEntityCollision"(arg0: $IMultiblockContext$$Type<(State)>, arg1: $BlockPos$$Type, arg2: $Entity$$Type): void
 "dropExtraItems"(arg0: State, arg1: $Consumer$$Type<($ItemStack)>): void
 "onRemoved"(arg0: $IMultiblockContext$$Type<(State)>): void
 "registerCapabilities"(arg0: $IMultiblockComponent$CapabilityRegistrar$$Type<(State)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockLogic$$Type<State> = ($IMultiblockLogic<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockLogic$$Original<State> = $IMultiblockLogic<(State)>;}
declare module "blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$MultiblockFormEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$MultiblockHandler$IMultiblock, $MultiblockHandler$IMultiblock$$Type} from "blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$IMultiblock"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $MultiblockHandler$MultiblockFormEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $MultiblockHandler$IMultiblock$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type)

public "getMultiblock"(): $MultiblockHandler$IMultiblock
public "getHammer"(): $ItemStack
public "getClickedBlock"(): $BlockPos
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "multiblock"(): $MultiblockHandler$IMultiblock
get "hammer"(): $ItemStack
get "clickedBlock"(): $BlockPos
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockHandler$MultiblockFormEvent$$Type = ($MultiblockHandler$MultiblockFormEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockHandler$MultiblockFormEvent$$Original = $MultiblockHandler$MultiblockFormEvent;}
declare module "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IInitialMultiblockContext" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$RelativeBlockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.RelativeBlockFace"
import {$MultiblockFace$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.util.MultiblockFace"
import {$Supplier} from "java.util.function.Supplier"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$ICommonMultiblockContext$$Interface} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.ICommonMultiblockContext"

export interface $IInitialMultiblockContext$$Interface<State extends $IMultiblockState> extends $ICommonMultiblockContext$$Interface {
get "markDirtyRunnable"(): $Runnable
get "syncRunnable"(): $Runnable
get "blockUpdateRunnable"(): $Runnable
}

export class $IInitialMultiblockContext<State extends $IMultiblockState> implements $IInitialMultiblockContext$$Interface {
 "getMarkDirtyRunnable"(): $Runnable
 "getSyncRunnable"(): $Runnable
 "getBlockUpdateRunnable"(): $Runnable
 "levelSupplier"(): $Supplier<($Level)>
 "getCapabilityAt"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $BlockPos$$Type, arg2: C): $Supplier<(T)>
 "getCapabilityAt"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $BlockPos$$Type, arg2: $RelativeBlockFace$$Type): $Supplier<(T)>
 "getCapabilityAt"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $MultiblockFace$$Type): $Supplier<(T)>
 "getVoidCapabilityAt"<T>(arg0: $BlockCapability$$Type<(T), (void)>, arg1: $BlockPos$$Type): $Supplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInitialMultiblockContext$$Type<State> = ($IInitialMultiblockContext<(State)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInitialMultiblockContext$$Original<State> = $IInitialMultiblockContext<(State)>;}
