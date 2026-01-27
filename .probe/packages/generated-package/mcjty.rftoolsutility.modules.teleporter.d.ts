declare module "mcjty.rftoolsutility.modules.teleporter.items.porter.AdvancedChargedPorterItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IItemCycler$$Interface} from "mcjty.rftoolsbase.api.various.IItemCycler"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ChargedPorterItem} from "mcjty.rftoolsutility.modules.teleporter.items.porter.ChargedPorterItem"
import {$Item} from "net.minecraft.world.item.Item"

export class $AdvancedChargedPorterItem extends $ChargedPorterItem implements $IItemCycler$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "MAXTARGETS": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "cycle"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedChargedPorterItem$$Type = ($AdvancedChargedPorterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancedChargedPorterItem$$Original = $AdvancedChargedPorterItem;}
declare module "mcjty.rftoolsutility.modules.teleporter.blocks.DestinationAnalyzerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $DestinationAnalyzerBlock extends $Block {
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

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "getFacingFromEntity"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type): $Direction
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DestinationAnalyzerBlock$$Type = ($DestinationAnalyzerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DestinationAnalyzerBlock$$Original = $DestinationAnalyzerBlock;}
declare module "mcjty.rftoolsutility.modules.teleporter.blocks.SimpleDialerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LogicSlabBlock} from "mcjty.lib.blocks.LogicSlabBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LogicFacing} from "mcjty.lib.varia.LogicFacing"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $SimpleDialerBlock extends $LogicSlabBlock {
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

public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleDialerBlock$$Type = ($SimpleDialerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleDialerBlock$$Original = $SimpleDialerBlock;}
declare module "mcjty.rftoolsutility.modules.teleporter.blocks.MatterTransmitterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RotationType} from "mcjty.lib.blocks.RotationType"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseBlock} from "mcjty.lib.blocks.BaseBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $MatterTransmitterBlock extends $BaseBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "clientSideId": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static "clientSideName": StringJS
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

constructor()

public "getRotationType"(): $RotationType
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public static "setDestinationInfo"(arg0: integer, arg1: StringJS): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterTransmitterBlock$$Type = ($MatterTransmitterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatterTransmitterBlock$$Original = $MatterTransmitterBlock;}
declare module "mcjty.rftoolsutility.modules.teleporter.items.porter.ChargedPorterItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$List$$Type} from "java.util.List"
import {$IEnergyItem$$Interface} from "mcjty.lib.varia.IEnergyItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IComponentsToPreserve$$Interface} from "mcjty.lib.crafting.IComponentsToPreserve"
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ChargedPorterData, $ChargedPorterData$$Type} from "mcjty.rftoolsutility.modules.teleporter.data.ChargedPorterData"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"

export class $ChargedPorterItem extends $Item implements $IEnergyItem$$Interface, $IComponentsToPreserve$$Interface, $ITooltipSettings$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MANUAL": $ManualEntry
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "getMaxExtract"(): integer
public "getMaxReceive"(): $Supplier<(integer)>
public "getComponentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
public "getManualEntry"(): $ManualEntry
public static "initOverrides"(arg0: $ChargedPorterItem$$Type): void
public "getMaxEnergyStoredL"(arg0: $ItemStack$$Type): long
public "receiveEnergyL"(arg0: $ItemStack$$Type, arg1: long, arg2: boolean): long
public "extractEnergyL"(arg0: $ItemStack$$Type, arg1: long, arg2: boolean): long
public "getEnergyStoredL"(arg0: $ItemStack$$Type): long
public "extractEnergyNoMax"(arg0: $ChargedPorterData$$Type, arg1: integer, arg2: boolean): $ChargedPorterData
public "getCapacity"(): $Supplier<(integer)>
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "createEnergyStorage"(arg0: $ItemStack$$Type): $IEnergyStorage
public "extractEnergy"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): integer
public "receiveEnergy"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): integer
public "getEnergyStored"(arg0: $ItemStack$$Type): integer
public "getMaxEnergyStored"(arg0: $ItemStack$$Type): integer
public "getMaxWidth"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "maxExtract"(): integer
get "maxReceive"(): $Supplier<(integer)>
get "componentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
get "manualEntry"(): $ManualEntry
get "capacity"(): $Supplier<(integer)>
get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedPorterItem$$Type = ($ChargedPorterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargedPorterItem$$Original = $ChargedPorterItem;}
declare module "mcjty.rftoolsutility.modules.teleporter.data.ChargedPorterData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $ChargedPorterData extends $Record {
static readonly "CODEC": $Codec<($ChargedPorterData)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChargedPorterData)>

constructor(energy: integer, currentTarget: integer, targets: $List$$Type<(integer)>, tpTimer: integer)

public "energy"(): integer
public "tpTimer"(): integer
public "withEnergy"(arg0: integer): $ChargedPorterData
public "withTpTimer"(arg0: integer): $ChargedPorterData
public "withCurrentTarget"(arg0: integer): $ChargedPorterData
public "withTargets"(arg0: $List$$Type<(integer)>): $ChargedPorterData
public "currentTarget"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "targets"(): $List<(integer)>
public "getTarget"(arg0: integer): integer
public "withTarget"(arg0: integer, arg1: integer): $ChargedPorterData
public static "createDefault"(): $ChargedPorterData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedPorterData$$Type = ({"energy"?: integer, "tpTimer"?: integer, "currentTarget"?: integer, "targets"?: $List$$Type<(integer)>}) | ([energy?: integer, tpTimer?: integer, currentTarget?: integer, targets?: $List$$Type<(integer)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargedPorterData$$Original = $ChargedPorterData;}
declare module "mcjty.rftoolsutility.modules.teleporter.blocks.MatterReceiverBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RotationType} from "mcjty.lib.blocks.RotationType"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseBlock} from "mcjty.lib.blocks.BaseBlock"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $MatterReceiverBlock extends $BaseBlock {
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

constructor()

public "getRotationType"(): $RotationType
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterReceiverBlock$$Type = ($MatterReceiverBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatterReceiverBlock$$Original = $MatterReceiverBlock;}
declare module "mcjty.rftoolsutility.modules.teleporter.blocks.DialingDeviceBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BaseBlock} from "mcjty.lib.blocks.BaseBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $DialingDeviceBlock extends $BaseBlock {
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

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DialingDeviceBlock$$Type = ($DialingDeviceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DialingDeviceBlock$$Original = $DialingDeviceBlock;}
declare module "mcjty.rftoolsutility.modules.teleporter.blocks.MatterBoosterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MatterBoosterBlock extends $Block {
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

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "getFacingFromEntity"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type): $Direction
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterBoosterBlock$$Type = ($MatterBoosterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatterBoosterBlock$$Original = $MatterBoosterBlock;}
declare module "mcjty.rftoolsutility.modules.teleporter.items.teleportprobe.TeleportProbeItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"

export class $TeleportProbeItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportProbeItem$$Type = ($TeleportProbeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeleportProbeItem$$Original = $TeleportProbeItem;}
