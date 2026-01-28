declare module "com.the9grounds.aeadditions.block.crafting.ExtendedCraftingUnitType" {
import {$Enum} from "java.lang.Enum"
import {$EnumEntries} from "kotlin.enums.EnumEntries"
import {$Item} from "net.minecraft.world.item.Item"
import {$ICraftingUnitType$$Interface} from "appeng.block.crafting.ICraftingUnitType"

export class $ExtendedCraftingUnitType extends $Enum<($ExtendedCraftingUnitType)> implements $ICraftingUnitType$$Interface {
static readonly "STORAGE_1024": $ExtendedCraftingUnitType
static readonly "STORAGE_65536": $ExtendedCraftingUnitType
static readonly "STORAGE_4096": $ExtendedCraftingUnitType
static readonly "STORAGE_16384": $ExtendedCraftingUnitType

public "getStorageBytes"(): long
public "getAcceleratorThreads"(): integer
public "getItemFromType"(): $Item
public "getKiloBytes"(): integer
public static "values"(): ($ExtendedCraftingUnitType)[]
public static "valueOf"(arg0: StringJS): $ExtendedCraftingUnitType
public static "getEntries"(): $EnumEntries<($ExtendedCraftingUnitType)>
get "storageBytes"(): long
get "acceleratorThreads"(): integer
get "itemFromType"(): $Item
get "kiloBytes"(): integer
public static get "entries"(): $EnumEntries<($ExtendedCraftingUnitType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedCraftingUnitType$$Type = (("storage_1024") | ("storage_4096") | ("storage_16384") | ("storage_65536"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedCraftingUnitType$$Original = $ExtendedCraftingUnitType;}
declare module "com.the9grounds.aeadditions.block.MEWirelessTransceiverBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MEWirelessTransceiverBlock extends $Block implements $EntityBlock$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEWirelessTransceiverBlock$$Type = ($MEWirelessTransceiverBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MEWirelessTransceiverBlock$$Original = $MEWirelessTransceiverBlock;}
declare module "com.the9grounds.aeadditions.block.CraftingStorageBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$AbstractCraftingUnitBlock} from "appeng.block.crafting.AbstractCraftingUnitBlock"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$CraftingBlockEntity} from "appeng.blockentity.crafting.CraftingBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ICraftingUnitType} from "appeng.block.crafting.ICraftingUnitType"
import {$ExtendedCraftingUnitType$$Type} from "com.the9grounds.aeadditions.block.crafting.ExtendedCraftingUnitType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CraftingStorageBlock extends $AbstractCraftingUnitBlock<($CraftingBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "type": $ICraftingUnitType
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "FORMED": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $ExtendedCraftingUnitType$$Type)

public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingStorageBlock$$Type = ($CraftingStorageBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingStorageBlock$$Original = $CraftingStorageBlock;}
