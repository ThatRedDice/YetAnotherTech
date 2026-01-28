declare module "owmii.powah.block.transmitter.PlayerTransmitterBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Tier$$Type} from "owmii.powah.block.Tier"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ChargingConfig} from "owmii.powah.config.v2.types.ChargingConfig"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$AbstractEnergyBlock} from "owmii.powah.lib.block.AbstractEnergyBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainer} from "owmii.powah.lib.logistics.inventory.AbstractContainer"
import {$EnergyBlockItem} from "owmii.powah.lib.item.EnergyBlockItem"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AbstractTileEntity$$Type} from "owmii.powah.lib.block.AbstractTileEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PlayerTransmitterBlock extends $AbstractEnergyBlock<($ChargingConfig), ($PlayerTransmitterBlock)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "TOP_SHAPE": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SEMI_FULL_SHAPE": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "TOP": $BooleanProperty
static readonly "BOTTOM_SHAPE": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Tier$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getContainer"(arg0: integer, arg1: $Inventory$$Type, arg2: $AbstractTileEntity$$Type, arg3: $BlockHitResult$$Type): $AbstractContainer
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getConfig"(): any
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getBlockItem"(arg0: $Item$Properties$$Type, arg1: $ResourceKey$$Type<($CreativeModeTab)>): $EnergyBlockItem
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "config"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTransmitterBlock$$Type = ($PlayerTransmitterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTransmitterBlock$$Original = $PlayerTransmitterBlock;}
