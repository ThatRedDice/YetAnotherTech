declare module "mcjty.lib.blocks.BaseBlock" {
import {$BlockBuilder$$Type} from "mcjty.lib.builder.BlockBuilder"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$List, $List$$Type} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TOPDriver} from "mcjty.lib.compat.theoneprobe.TOPDriver"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$WailaInfoProvider$$Interface} from "mcjty.lib.compat.waila.WailaInfoProvider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RotationType, $RotationType$$Type} from "mcjty.lib.blocks.RotationType"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TOPInfoProvider$$Interface} from "mcjty.lib.compat.theoneprobe.TOPInfoProvider"
import {$Item} from "net.minecraft.world.item.Item"
import {$IPartBlock$$Interface} from "mcjty.lib.multipart.IPartBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ITabExpander$$Interface} from "mcjty.lib.api.ITabExpander"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$PartSlot} from "mcjty.lib.multipart.PartSlot"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $BaseBlock extends $Block implements $WailaInfoProvider$$Interface, $TOPInfoProvider$$Interface, $IPartBlock$$Interface, $ITooltipSettings$$Interface, $EntityBlock$$Interface, $ITabExpander$$Interface {
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
static readonly "NONE_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "ROTATING_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "HORIZ_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBuilder$$Type)

public "getRightDirection"(arg0: $BlockState$$Type): $Direction
public "getRotationType"(): $RotationType
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getItemsForTab"(): $List<($ItemStack)>
public "getManualEntry"(): $ManualEntry
public "isInfusable"(): boolean
public "handleModule"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $ItemStack$$Type, arg6: $BlockHitResult$$Type): boolean
public static "getFrontDirection"(arg0: $RotationType$$Type, arg1: $BlockState$$Type): $Direction
public "getFrontDirection"(arg0: $BlockState$$Type): $Direction
public static "setInfused"(arg0: $ItemStack$$Type, arg1: integer): void
public static "getInfused"(arg0: $ItemStack$$Type): integer
public "getSlotFromState"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $PartSlot
public "getLeftDirection"(arg0: $BlockState$$Type): $Direction
public "getProbeDriver"(): $TOPDriver
public static "getProperties"(arg0: $RotationType$$Type): ($Property<(never)>)[]
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public static "runTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "triggerEvent"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer): boolean
public "getMaxWidth"(): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotationType"(): $RotationType
get "itemsForTab"(): $List<($ItemStack)>
get "manualEntry"(): $ManualEntry
get "infusable"(): boolean
get "probeDriver"(): $TOPDriver
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlock$$Type = ($BaseBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBlock$$Original = $BaseBlock;}
declare module "mcjty.lib.blocks.RotationType" {
import {$Enum} from "java.lang.Enum"

export class $RotationType extends $Enum<($RotationType)> {
static readonly "ROTATION": $RotationType
static readonly "HORIZROTATION": $RotationType
static readonly "NONE": $RotationType

public static "values"(): ($RotationType)[]
public static "valueOf"(arg0: StringJS): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationType$$Type = (("horizrotation") | ("rotation") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RotationType$$Original = $RotationType;}
declare module "mcjty.lib.blocks.LogicSlabBlock" {
import {$BlockBuilder$$Type} from "mcjty.lib.builder.BlockBuilder"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LogicFacing} from "mcjty.lib.varia.LogicFacing"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RotationType} from "mcjty.lib.blocks.RotationType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseBlock} from "mcjty.lib.blocks.BaseBlock"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $LogicSlabBlock extends $BaseBlock {
static readonly "BLOCK_NORTH": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "LOGIC_FACING": $EnumProperty<($LogicFacing)>
static readonly "BLOCK_SOUTH": $VoxelShape
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "ROTATING_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "BLOCK_EAST": $VoxelShape
static readonly "HORIZ_PROPERTIES": ($Property<(never)>)[]
static readonly "BLOCK_WEST": $VoxelShape
static readonly "BLOCK_DOWN": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "BLOCK_UP": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "NONE_PROPERTIES": ($Property<(never)>)[]
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBuilder$$Type)

public "getRotationType"(): $RotationType
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "rotateLeft"(arg0: $Direction$$Type, arg1: $Direction$$Type): $Direction
public static "rotateRight"(arg0: $Direction$$Type, arg1: $Direction$$Type): $Direction
public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicSlabBlock$$Type = ($LogicSlabBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogicSlabBlock$$Original = $LogicSlabBlock;}
