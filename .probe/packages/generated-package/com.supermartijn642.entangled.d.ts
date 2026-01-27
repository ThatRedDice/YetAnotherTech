declare module "com.supermartijn642.entangled.EntangledBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$BaseBlock} from "com.supermartijn642.core.block.BaseBlock"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntangledBlock$State} from "com.supermartijn642.entangled.EntangledBlock$State"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$EntityHoldingBlock$$Interface} from "com.supermartijn642.core.block.EntityHoldingBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $EntangledBlock extends $BaseBlock implements $EntityHoldingBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "TILE_DATA": $DataComponentType<($CompoundTag)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "STATE_PROPERTY": $EnumProperty<($EntangledBlock$State)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor()

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "getVisualShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public static "canBindTo"(blockDimension: $ResourceLocation$$Type, blockPosition: $BlockPos$$Type, targetDimension: $ResourceLocation$$Type, targetPosition: $BlockPos$$Type): boolean
public "createNewBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getDirectSignal"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): integer
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, entityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntangledBlock$$Type = ($EntangledBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntangledBlock$$Original = $EntangledBlock;}
declare module "com.supermartijn642.entangled.EntangledBlock$State" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EntangledBlock$State extends $Enum<($EntangledBlock$State)> implements $StringRepresentable$$Interface {
static readonly "BOUND_INVALID": $EntangledBlock$State
static readonly "UNBOUND": $EntangledBlock$State
static readonly "BOUND_VALID": $EntangledBlock$State

public static "values"(): ($EntangledBlock$State)[]
public static "valueOf"(name: StringJS): $EntangledBlock$State
public "isBound"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "bound"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntangledBlock$State$$Type = (("unbound") | ("bound_valid") | ("bound_invalid"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntangledBlock$State$$Original = $EntangledBlock$State;}
declare module "com.supermartijn642.entangled.EntangledBinderItem$BinderTarget" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EntangledBinderItem$BinderTarget extends $Record {
constructor(dimension: $ResourceLocation$$Type, pos: $BlockPos$$Type, state: ($BlockState$$Type)?)

public "dimension"(): $ResourceLocation
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "state"(): $Optional<($BlockState)>
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntangledBinderItem$BinderTarget$$Type = ({"state"?: ($BlockState$$Type)?, "pos"?: $BlockPos$$Type, "dimension"?: $ResourceLocation$$Type}) | ([state?: ($BlockState$$Type)?, pos?: $BlockPos$$Type, dimension?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntangledBinderItem$BinderTarget$$Original = $EntangledBinderItem$BinderTarget;}
declare module "com.supermartijn642.entangled.EntangledBinderItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$BaseItem$InteractionFeedback} from "com.supermartijn642.core.item.BaseItem$InteractionFeedback"
import {$BaseItem} from "com.supermartijn642.core.item.BaseItem"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseItem$ItemUseResult} from "com.supermartijn642.core.item.BaseItem$ItemUseResult"
import {$EntangledBinderItem$BinderTarget} from "com.supermartijn642.entangled.EntangledBinderItem$BinderTarget"

export class $EntangledBinderItem extends $BaseItem {
static readonly "BINDER_TARGET": $DataComponentType<($EntangledBinderItem$BinderTarget)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "getBoundDimension"(stack: $ItemStack$$Type): $ResourceLocation
public static "getBoundPosition"(stack: $ItemStack$$Type): $BlockPos
public "interactWithBlock"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type, hitPos: $BlockPos$$Type, hitSide: $Direction$$Type, hitLocation: $Vec3$$Type): $BaseItem$InteractionFeedback
public static "isBound"(stack: $ItemStack$$Type): boolean
public "interact"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type): $BaseItem$ItemUseResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntangledBinderItem$$Type = ($EntangledBinderItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntangledBinderItem$$Original = $EntangledBinderItem;}
