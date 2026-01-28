declare module "com.supermartijn642.core.block.BaseBlockEntityType" {
import {$ChestBlockEntity} from "net.minecraft.world.level.block.entity.ChestBlockEntity"
import {$ChiseledBookShelfBlockEntity} from "net.minecraft.world.level.block.entity.ChiseledBookShelfBlockEntity"
import {$DispenserBlockEntity} from "net.minecraft.world.level.block.entity.DispenserBlockEntity"
import {$HopperBlockEntity} from "net.minecraft.world.level.block.entity.HopperBlockEntity"
import {$SignBlockEntity} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$SmokerBlockEntity} from "net.minecraft.world.level.block.entity.SmokerBlockEntity"
import {$BarrelBlockEntity} from "net.minecraft.world.level.block.entity.BarrelBlockEntity"
import {$JigsawBlockEntity} from "net.minecraft.world.level.block.entity.JigsawBlockEntity"
import {$SculkSensorBlockEntity} from "net.minecraft.world.level.block.entity.SculkSensorBlockEntity"
import {$BrushableBlockEntity} from "net.minecraft.world.level.block.entity.BrushableBlockEntity"
import {$JukeboxBlockEntity} from "net.minecraft.world.level.block.entity.JukeboxBlockEntity"
import {$CommandBlockEntity} from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import {$BrewingStandBlockEntity} from "net.minecraft.world.level.block.entity.BrewingStandBlockEntity"
import {$DaylightDetectorBlockEntity} from "net.minecraft.world.level.block.entity.DaylightDetectorBlockEntity"
import {$BannerBlockEntity} from "net.minecraft.world.level.block.entity.BannerBlockEntity"
import {$TrappedChestBlockEntity} from "net.minecraft.world.level.block.entity.TrappedChestBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BeaconBlockEntity} from "net.minecraft.world.level.block.entity.BeaconBlockEntity"
import {$TheEndGatewayBlockEntity} from "net.minecraft.world.level.block.entity.TheEndGatewayBlockEntity"
import {$CalibratedSculkSensorBlockEntity} from "net.minecraft.world.level.block.entity.CalibratedSculkSensorBlockEntity"
import {$TrialSpawnerBlockEntity} from "net.minecraft.world.level.block.entity.TrialSpawnerBlockEntity"
import {$PistonMovingBlockEntity} from "net.minecraft.world.level.block.piston.PistonMovingBlockEntity"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$DecoratedPotBlockEntity} from "net.minecraft.world.level.block.entity.DecoratedPotBlockEntity"
import {$CrafterBlockEntity} from "net.minecraft.world.level.block.entity.CrafterBlockEntity"
import {$VaultBlockEntity} from "net.minecraft.world.level.block.entity.vault.VaultBlockEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ConduitBlockEntity} from "net.minecraft.world.level.block.entity.ConduitBlockEntity"
import {$SculkShriekerBlockEntity} from "net.minecraft.world.level.block.entity.SculkShriekerBlockEntity"
import {$DropperBlockEntity} from "net.minecraft.world.level.block.entity.DropperBlockEntity"
import {$TheEndPortalBlockEntity} from "net.minecraft.world.level.block.entity.TheEndPortalBlockEntity"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$EnchantingTableBlockEntity} from "net.minecraft.world.level.block.entity.EnchantingTableBlockEntity"
import {$SculkCatalystBlockEntity} from "net.minecraft.world.level.block.entity.SculkCatalystBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseBlockEntity} from "com.supermartijn642.core.block.BaseBlockEntity"
import {$CampfireBlockEntity} from "net.minecraft.world.level.block.entity.CampfireBlockEntity"
import {$BellBlockEntity} from "net.minecraft.world.level.block.entity.BellBlockEntity"
import {$EnderChestBlockEntity} from "net.minecraft.world.level.block.entity.EnderChestBlockEntity"
import {$LecternBlockEntity} from "net.minecraft.world.level.block.entity.LecternBlockEntity"
import {$FurnaceBlockEntity} from "net.minecraft.world.level.block.entity.FurnaceBlockEntity"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ShulkerBoxBlockEntity} from "net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity"
import {$SpawnerBlockEntity} from "net.minecraft.world.level.block.entity.SpawnerBlockEntity"
import {$BeehiveBlockEntity} from "net.minecraft.world.level.block.entity.BeehiveBlockEntity"
import {$HangingSignBlockEntity} from "net.minecraft.world.level.block.entity.HangingSignBlockEntity"
import {$StructureBlockEntity} from "net.minecraft.world.level.block.entity.StructureBlockEntity"
import {$BedBlockEntity} from "net.minecraft.world.level.block.entity.BedBlockEntity"
import {$SkullBlockEntity} from "net.minecraft.world.level.block.entity.SkullBlockEntity"
import {$BlastFurnaceBlockEntity} from "net.minecraft.world.level.block.entity.BlastFurnaceBlockEntity"
import {$ComparatorBlockEntity} from "net.minecraft.world.level.block.entity.ComparatorBlockEntity"

export class $BaseBlockEntityType<T extends $BlockEntity> extends $BlockEntityType<(T)> {
static readonly "BLAST_FURNACE": $BlockEntityType<($BlastFurnaceBlockEntity)>
static readonly "HANGING_SIGN": $BlockEntityType<($HangingSignBlockEntity)>
static readonly "COMPARATOR": $BlockEntityType<($ComparatorBlockEntity)>
static readonly "VAULT": $BlockEntityType<($VaultBlockEntity)>
static readonly "SKULL": $BlockEntityType<($SkullBlockEntity)>
static readonly "CHISELED_BOOKSHELF": $BlockEntityType<($ChiseledBookShelfBlockEntity)>
static readonly "JIGSAW": $BlockEntityType<($JigsawBlockEntity)>
static readonly "DECORATED_POT": $BlockEntityType<($DecoratedPotBlockEntity)>
static readonly "BEACON": $BlockEntityType<($BeaconBlockEntity)>
static readonly "CRAFTER": $BlockEntityType<($CrafterBlockEntity)>
static readonly "FURNACE": $BlockEntityType<($FurnaceBlockEntity)>
static readonly "BEEHIVE": $BlockEntityType<($BeehiveBlockEntity)>
static readonly "PISTON": $BlockEntityType<($PistonMovingBlockEntity)>
static readonly "TRAPPED_CHEST": $BlockEntityType<($TrappedChestBlockEntity)>
static readonly "END_PORTAL": $BlockEntityType<($TheEndPortalBlockEntity)>
static readonly "ENDER_CHEST": $BlockEntityType<($EnderChestBlockEntity)>
static readonly "COMMAND_BLOCK": $BlockEntityType<($CommandBlockEntity)>
static readonly "SIGN": $BlockEntityType<($SignBlockEntity)>
static readonly "STRUCTURE_BLOCK": $BlockEntityType<($StructureBlockEntity)>
static readonly "BELL": $BlockEntityType<($BellBlockEntity)>
static readonly "ENCHANTING_TABLE": $BlockEntityType<($EnchantingTableBlockEntity)>
static readonly "BREWING_STAND": $BlockEntityType<($BrewingStandBlockEntity)>
static readonly "BED": $BlockEntityType<($BedBlockEntity)>
static readonly "MOB_SPAWNER": $BlockEntityType<($SpawnerBlockEntity)>
static readonly "CALIBRATED_SCULK_SENSOR": $BlockEntityType<($CalibratedSculkSensorBlockEntity)>
static readonly "SCULK_CATALYST": $BlockEntityType<($SculkCatalystBlockEntity)>
static readonly "CONDUIT": $BlockEntityType<($ConduitBlockEntity)>
static readonly "CAMPFIRE": $BlockEntityType<($CampfireBlockEntity)>
static readonly "END_GATEWAY": $BlockEntityType<($TheEndGatewayBlockEntity)>
static readonly "SMOKER": $BlockEntityType<($SmokerBlockEntity)>
static readonly "DISPENSER": $BlockEntityType<($DispenserBlockEntity)>
static readonly "SCULK_SHRIEKER": $BlockEntityType<($SculkShriekerBlockEntity)>
static readonly "HOPPER": $BlockEntityType<($HopperBlockEntity)>
static readonly "CHEST": $BlockEntityType<($ChestBlockEntity)>
static readonly "DAYLIGHT_DETECTOR": $BlockEntityType<($DaylightDetectorBlockEntity)>
static readonly "BANNER": $BlockEntityType<($BannerBlockEntity)>
static readonly "SCULK_SENSOR": $BlockEntityType<($SculkSensorBlockEntity)>
static readonly "TRIAL_SPAWNER": $BlockEntityType<($TrialSpawnerBlockEntity)>
static readonly "LECTERN": $BlockEntityType<($LecternBlockEntity)>
static readonly "SHULKER_BOX": $BlockEntityType<($ShulkerBoxBlockEntity)>
static readonly "BRUSHABLE_BLOCK": $BlockEntityType<($BrushableBlockEntity)>
static readonly "JUKEBOX": $BlockEntityType<($JukeboxBlockEntity)>
static readonly "BARREL": $BlockEntityType<($BarrelBlockEntity)>
static readonly "DROPPER": $BlockEntityType<($DropperBlockEntity)>

public static "create"<T extends $BaseBlockEntity>(entitySupplier: $BiFunction$$Type<($BlockPos), ($BlockState), (T)>, ...validBlocks: ($Block$$Type)[]): $BaseBlockEntityType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntityType$$Type<T> = ($BaseBlockEntityType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBlockEntityType$$Original<T> = $BaseBlockEntityType<(T)>;}
declare module "com.supermartijn642.core.block.EntityHoldingBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $EntityHoldingBlock$$Interface extends $EntityBlock$$Interface {

(pos: $BlockPos, state: $BlockState): $BlockEntity$$Type
}

export class $EntityHoldingBlock implements $EntityHoldingBlock$$Interface {
 "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, entityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
 "createNewBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHoldingBlock$$Type = ((pos: $BlockPos, state: $BlockState) => $BlockEntity$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityHoldingBlock$$Original = $EntityHoldingBlock;}
declare module "com.supermartijn642.core.block.BaseBlockEntity" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(tileEntityTypeIn: $BlockEntityType$$Type<(never)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "getUpdatePacket"(): $Packet
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "dataChanged"(): void
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntity$$Type = ($BaseBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBlockEntity$$Original = $BaseBlockEntity;}
declare module "com.supermartijn642.core.block.BaseBlock" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockProperties$$Type} from "com.supermartijn642.core.block.BlockProperties"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $BaseBlock extends $Block {
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

constructor(saveTileData: boolean, properties: $BlockProperties$$Type)
constructor(saveTileData: boolean, properties: $BlockBehaviour$Properties$$Type)

public "asItem"(): $Item
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, information: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "getDescriptionId"(): StringJS
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
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
declare module "com.supermartijn642.core.block.BlockProperties" {
import {$MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$NoteBlockInstrument$$Type} from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TriPredicate$$Type} from "net.neoforged.neoforge.common.util.TriPredicate"
import {$PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockProperties {
constructor()

public "collision"(hasCollision: boolean): $BlockProperties
public "lootTable"(lootTable: $ResourceLocation$$Type): $BlockProperties
public "lootTable"(lootTable: $ResourceKey$$Type<($LootTable)>): $BlockProperties
public "lightLevel"(light: integer): $BlockProperties
public "lightLevel"(stateLightFunction: $ToIntFunction$$Type<($BlockState)>): $BlockProperties
public "noLootTable"(): $BlockProperties
public "explosionResistance"(resistance: float): $BlockProperties
public "friction"(friction: float): $BlockProperties
public "speedFactor"(factor: float): $BlockProperties
public "jumpFactor"(factor: float): $BlockProperties
public "dynamicShape"(): $BlockProperties
public "canOcclude"(canOcclude: boolean): $BlockProperties
public "ignitedByLava"(): $BlockProperties
public "ignitedByLava"(getsIgnitedByLava: boolean): $BlockProperties
public "mapColor"(color: $MapColor$$Type): $BlockProperties
public "mapColor"(colorFunction: $Function$$Type<($BlockState), ($MapColor$$Type)>): $BlockProperties
public "destroyTime"(destroyTime: float): $BlockProperties
public "pushReaction"(pushReaction: $PushReaction$$Type): $BlockProperties
public "spawnTerrainParticles"(spawnTerrainParticles: boolean): $BlockProperties
public "replaceable"(): $BlockProperties
public "replaceable"(isReplaceable: boolean): $BlockProperties
public "noOcclusion"(): $BlockProperties
public "randomTicks"(): $BlockProperties
public "randomTicks"(receiveRandomTicks: boolean): $BlockProperties
public "noTerrainParticles"(): $BlockProperties
public static "fromVanilla"(vanilla: $BlockBehaviour$Properties$$Type): $BlockProperties
/**
 * 
 * @deprecated
 */
public "toUnderlying"(): $BlockBehaviour$Properties
public "requiresCorrectTool"(): $BlockProperties
public "requiresCorrectTool"(requiresCorrectTool: boolean): $BlockProperties
public "lootTableFrom"(block: $Supplier$$Type<($Block$$Type)>): $BlockProperties
public static "copy"(block: $Block$$Type): $BlockProperties
public static "create"(): $BlockProperties
public "sound"(soundTypeIn: $SoundType$$Type): $BlockProperties
public "air"(): $BlockProperties
public "air"(isAir: boolean): $BlockProperties
public "instrument"(instrument: $NoteBlockInstrument$$Type): $BlockProperties
public "strength"(strength: float): $BlockProperties
public "noCollision"(): $BlockProperties
public "isSuffocating"(isSuffocating: $TriPredicate$$Type<($BlockState), ($BlockGetter), ($BlockPos)>): $BlockProperties
public "isSuffocating"(isSuffocating: boolean): $BlockProperties
public "isRedstoneConductor"(isRedstoneConductor: $TriPredicate$$Type<($BlockState), ($BlockGetter), ($BlockPos)>): $BlockProperties
public "isRedstoneConductor"(isRedstoneConductor: boolean): $BlockProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockProperties$$Type = ($BlockProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockProperties$$Original = $BlockProperties;}
declare module "com.supermartijn642.core.block.TickableBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TickableBlockEntity$$Interface {

(): void
}

export class $TickableBlockEntity implements $TickableBlockEntity$$Interface {
 "update"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableBlockEntity$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickableBlockEntity$$Original = $TickableBlockEntity;}
