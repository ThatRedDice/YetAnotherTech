declare module "owmii.powah.block.hopper.EnergyHopperBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Tier$$Type} from "owmii.powah.block.Tier"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ChargingConfig} from "owmii.powah.config.v2.types.ChargingConfig"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$AbstractTileEntity, $AbstractTileEntity$$Type} from "owmii.powah.lib.block.AbstractTileEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$AbstractEnergyBlock} from "owmii.powah.lib.block.AbstractEnergyBlock"
import {$AbstractContainer} from "owmii.powah.lib.logistics.inventory.AbstractContainer"
import {$EnergyBlockItem} from "owmii.powah.lib.item.EnergyBlockItem"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergyHopperBlock extends $AbstractEnergyBlock<($ChargingConfig), ($EnergyHopperBlock)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Tier$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getContainer"<T extends $AbstractTileEntity<(object), (object)>>(arg0: integer, arg1: $Inventory$$Type, arg2: $AbstractTileEntity$$Type, arg3: $BlockHitResult$$Type): $AbstractContainer
public "getConfig"(): any
public "getBlockItem"(arg0: $Item$Properties$$Type, arg1: $ResourceKey$$Type<($CreativeModeTab)>): $EnergyBlockItem
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "config"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyHopperBlock$$Type = ($EnergyHopperBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyHopperBlock$$Original = $EnergyHopperBlock;}
