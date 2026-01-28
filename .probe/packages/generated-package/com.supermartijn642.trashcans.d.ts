declare module "com.supermartijn642.trashcans.TrashCanBlockEntity" {
import {$TriFunction} from "com.supermartijn642.core.util.TriFunction"
import {$ArrayList} from "java.util.ArrayList"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ItemFilter} from "com.supermartijn642.trashcans.filter.ItemFilter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TickableBlockEntity$$Interface} from "com.supermartijn642.core.block.TickableBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseBlockEntity} from "com.supermartijn642.core.block.BaseBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrashCanBlockEntity extends $BaseBlockEntity implements $TickableBlockEntity$$Interface {
readonly "ITEM_HANDLER": $IItemHandler
readonly "ENERGY_ITEM_HANDLER": $TriFunction<(integer), (integer), (integer), ($Slot)>
readonly "itemFilter": $ArrayList<($ItemStack)>
static readonly "MIN_ENERGY_LIMIT": integer
 "useEnergyLimit": boolean
 "liquidFilterWhitelist": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "liquids": boolean
readonly "ENERGY_STORAGE": $IEnergyStorage
readonly "FLUID_HANDLER": $IFluidHandler
readonly "LIQUID_ITEM_HANDLER": $TriFunction<(integer), (integer), (integer), ($Slot)>
 "liquidItem": $ItemStack
 "energyItem": $ItemStack
 "energyLimit": integer
static readonly "MAX_ENERGY_LIMIT": integer
 "itemFilterWhitelist": boolean
static readonly "DEFAULT_ENERGY_LIMIT": integer
readonly "items": boolean
readonly "liquidFilter": $ArrayList<($ItemFilter)>
readonly "energy": boolean

constructor(blockEntityType: $BlockEntityType$$Type<(never)>, pos: $BlockPos$$Type, state: $BlockState$$Type, items: boolean, liquids: boolean, energy: boolean)

public "isRegularItemValid"(stack: $ItemStack$$Type): boolean
public "update"(): void
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrashCanBlockEntity$$Type = ($TrashCanBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrashCanBlockEntity$$Original = $TrashCanBlockEntity;}
declare module "com.supermartijn642.trashcans.TrashCanBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BaseBlockEntityType$$Type} from "com.supermartijn642.core.block.BaseBlockEntityType"
import {$BaseBlock} from "com.supermartijn642.core.block.BaseBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$EntityHoldingBlock$$Interface} from "com.supermartijn642.core.block.EntityHoldingBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$TrashCanContainer$$Type} from "com.supermartijn642.trashcans.screen.TrashCanContainer"

export class $TrashCanBlock extends $BaseBlock implements $EntityHoldingBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
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
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(blockEntityType: $Supplier$$Type<($BaseBlockEntityType$$Type<(never)>)>, containerProvider: $BiFunction$$Type<($Player), ($BlockPos), ($TrashCanContainer$$Type)>)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "createNewBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, entityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrashCanBlock$$Type = ($TrashCanBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrashCanBlock$$Original = $TrashCanBlock;}
