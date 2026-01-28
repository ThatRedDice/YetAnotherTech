declare module "mcjty.rftoolsutility.modules.logic.items.RedstoneInformationItem" {
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ITabletSupport$$Interface} from "mcjty.rftoolsbase.api.various.ITabletSupport"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"

export class $RedstoneInformationItem extends $Item implements $ITabletSupport$$Interface, $ITooltipSettings$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "openGui"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public static "removeChannel"(arg0: $ItemStack$$Type, arg1: integer): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getManualEntry"(): $ManualEntry
public "getInstalledTablet"(): $Item
public static "addChannel"(arg0: $ItemStack$$Type, arg1: integer): boolean
public static "getChannels"(arg0: $ItemStack$$Type): $Set<(integer)>
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getMaxWidth"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "manualEntry"(): $ManualEntry
get "installedTablet"(): $Item
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneInformationItem$$Type = ($RedstoneInformationItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneInformationItem$$Original = $RedstoneInformationItem;}
declare module "mcjty.rftoolsutility.modules.logic.blocks.RedstoneChannelBlock" {
import {$BlockBuilder$$Type} from "mcjty.lib.builder.BlockBuilder"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LogicSlabBlock} from "mcjty.lib.blocks.LogicSlabBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$LogicFacing} from "mcjty.lib.varia.LogicFacing"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $RedstoneChannelBlock extends $LogicSlabBlock {
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneChannelBlock$$Type = ($RedstoneChannelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneChannelBlock$$Original = $RedstoneChannelBlock;}
declare module "mcjty.rftoolsutility.modules.logic.blocks.RedstoneTransmitterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LogicFacing} from "mcjty.lib.varia.LogicFacing"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RedstoneChannelBlock} from "mcjty.rftoolsutility.modules.logic.blocks.RedstoneChannelBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $RedstoneTransmitterBlock extends $RedstoneChannelBlock {
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

constructor()

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneTransmitterBlock$$Type = ($RedstoneTransmitterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneTransmitterBlock$$Original = $RedstoneTransmitterBlock;}
