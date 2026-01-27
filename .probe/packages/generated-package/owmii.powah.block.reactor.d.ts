declare module "owmii.powah.block.reactor.ReactorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Tier$$Type} from "owmii.powah.block.Tier"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$AbstractContainer} from "owmii.powah.lib.logistics.inventory.AbstractContainer"
import {$EnergyBlockItem} from "owmii.powah.lib.item.EnergyBlockItem"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AbstractTileEntity, $AbstractTileEntity$$Type} from "owmii.powah.lib.block.AbstractTileEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$AbstractGeneratorBlock} from "owmii.powah.lib.block.AbstractGeneratorBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Energy$Item$$Type} from "owmii.powah.lib.logistics.energy.Energy$Item"

export class $ReactorBlock extends $AbstractGeneratorBlock<($ReactorBlock)> {
static readonly "CORE": $BooleanProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "additionalEnergyInfo"(arg0: $ItemStack$$Type, arg1: $Energy$Item$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "getContainer"<T extends $AbstractTileEntity<(object), (object)>>(arg0: integer, arg1: $Inventory$$Type, arg2: $AbstractTileEntity$$Type, arg3: $BlockHitResult$$Type): $AbstractContainer
public "getConfig"(): any
public "getBlockItem"(arg0: $Item$Properties$$Type, arg1: $ResourceKey$$Type<($CreativeModeTab)>): $EnergyBlockItem
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "config"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorBlock$$Type = ($ReactorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorBlock$$Original = $ReactorBlock;}
