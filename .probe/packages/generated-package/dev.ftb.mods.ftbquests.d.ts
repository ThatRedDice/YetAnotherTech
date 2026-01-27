declare module "dev.ftb.mods.ftbquests.item.CustomIconItem" {
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $CustomIconItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
public static "setFaceIcon"(stack: $ItemStack$$Type, value: $ResourceLocation$$Type): void
public static "setFaceIcon"(stack: $ItemStack$$Type, value: $EntityType$$Type<(never)>): void
public "getName"(stack: $ItemStack$$Type): $Component
public "use"(level: $Level$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getIcon"(stack: $ItemStack$$Type): $Icon
public static "setIcon"(stack: $ItemStack$$Type, texture: $ResourceLocation$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIconItem$$Type = ($CustomIconItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomIconItem$$Original = $CustomIconItem;}
declare module "dev.ftb.mods.ftbquests.item.QuestBookItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $QuestBookItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBookItem$$Type = ($QuestBookItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestBookItem$$Original = $QuestBookItem;}
declare module "dev.ftb.mods.ftbquests.block.StageBarrierBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$QuestBarrierBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.QuestBarrierBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$QuestBarrierBlock} from "dev.ftb.mods.ftbquests.block.QuestBarrierBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StageBarrierBlock extends $QuestBarrierBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "stageBlockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($QuestBarrierBlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageBarrierBlock$$Type = ($StageBarrierBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StageBarrierBlock$$Original = $StageBarrierBlock;}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType" {
import {$Reward} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$RewardType$Provider$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType$Provider"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$RewardType$GuiProvider, $RewardType$GuiProvider$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType$GuiProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $RewardType {
 "intId": integer

constructor(typeId: $ResourceLocation$$Type, provider: $RewardType$Provider$$Type, iconSupplier: $Supplier$$Type<($Icon$$Type)>)
constructor(typeId: $ResourceLocation$$Type, provider: $RewardType$Provider$$Type, iconSupplier: $Supplier$$Type<($Icon$$Type)>, availableByDefault: boolean)

public "getTypeId"(): $ResourceLocation
public "getIconSupplier"(): $Icon
public "createReward"(id: long, quest: $Quest$$Type): $Reward
public static "createReward"(id: long, quest: $Quest$$Type, typeId: StringJS): $Reward
public "setGuiProvider"(p: $RewardType$GuiProvider$$Type): $RewardType
public "getGuiProvider"(): $RewardType$GuiProvider
public "makeExtraNBT"(): $CompoundTag
public "getTypeForNBT"(): StringJS
public "getExcludeFromListRewards"(): boolean
public "setExcludeFromListRewards"(v: boolean): $RewardType
public "getDisplayName"(): $Component
public "setDisplayName"(name: $Component$$Type): $RewardType
get "typeId"(): $ResourceLocation
get "iconSupplier"(): $Icon
set "guiProvider"(value: $RewardType$GuiProvider$$Type)
get "guiProvider"(): $RewardType$GuiProvider
get "typeForNBT"(): StringJS
get "excludeFromListRewards"(): boolean
set "excludeFromListRewards"(value: boolean)
get "displayName"(): $Component
set "displayName"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$$Type = ($RewardType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardType$$Original = $RewardType;}
declare module "dev.ftb.mods.ftbquests.quest.loot.LootCrate" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$EntityWeight} from "dev.ftb.mods.ftbquests.quest.loot.EntityWeight"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$RewardTable, $RewardTable$$Type} from "dev.ftb.mods.ftbquests.quest.loot.RewardTable"

export class $LootCrate {
constructor(table: $RewardTable$$Type, initFromTable: boolean)

public "getItemName"(): StringJS
public "getDrops"(): $EntityWeight
public "isGlow"(): boolean
public "readData"(nbt: $CompoundTag$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): void
public "getStringID"(): StringJS
public static "getLootCrates"(isClient: boolean): $Map<(StringJS), ($LootCrate)>
public static "allCrateStacks"(isClientSide: boolean): $Collection<($ItemStack)>
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
public "readNetData"(data: $FriendlyByteBuf$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getTable"(): $RewardTable
public "initFromTable"(): void
public "getColor"(): $Color4I
public "createStack"(): $ItemStack
get "itemName"(): StringJS
get "drops"(): $EntityWeight
get "glow"(): boolean
get "stringID"(): StringJS
get "table"(): $RewardTable
get "color"(): $Color4I
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrate$$Type = ($LootCrate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootCrate$$Original = $LootCrate;}
declare module "dev.ftb.mods.ftbquests.events.QuestProgressEventData" {
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$Collection$$Type} from "java.util.Collection"
import {$List} from "java.util.List"
import {$Date, $Date$$Type} from "java.util.Date"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"

export class $QuestProgressEventData<T extends $QuestObject> {
constructor(date: $Date$$Type, teamData: $TeamData$$Type, object: T, online: $Collection$$Type<($ServerPlayer$$Type)>, notified: $Collection$$Type<($ServerPlayer$$Type)>)

public "getNotifiedPlayers"(): $List<($ServerPlayer)>
public "getOnlineMembers"(): $List<($ServerPlayer)>
public "getTeamData"(): $TeamData
public "withObject"<N extends $QuestObject>(o: N): $QuestProgressEventData<(N)>
public "notifyPlayers"(id: long): void
public "setCompleted"(id: long): void
public "getObject"(): T
public "getTime"(): $Date
public "setStarted"(id: long): void
get "notifiedPlayers"(): $List<($ServerPlayer)>
get "onlineMembers"(): $List<($ServerPlayer)>
get "teamData"(): $TeamData
set "completed"(value: long)
get "object"(): T
get "time"(): $Date
set "started"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestProgressEventData$$Type<T> = ($QuestProgressEventData<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestProgressEventData$$Original<T> = $QuestProgressEventData<(T)>;}
declare module "dev.ftb.mods.ftbquests.block.QuestBarrierBlock" {
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$QuestBarrierBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.QuestBarrierBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $QuestBarrierBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type)

public "skipRendering"(state: $BlockState$$Type, state2: $BlockState$$Type, dir: $Direction$$Type): boolean
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "propagatesSkylightDown"(state: $BlockState$$Type, bg: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getShadeBrightness"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "getVisualShape"(state: $BlockState$$Type, blockGetter: $BlockGetter$$Type, pos: $BlockPos$$Type, ctx: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, blockState: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "questBlockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($QuestBarrierBlockEntity)>
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getCloneItemStack"(levelReader: $LevelReader$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $ItemStack
public "getCollisionShape"(state: $BlockState$$Type, bg: $BlockGetter$$Type, pos: $BlockPos$$Type, ctx: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlock$$Type = ($QuestBarrierBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestBarrierBlock$$Original = $QuestBarrierBlock;}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationTable" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"

export class $TranslationTable {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TranslationTable)>

constructor()

public static "fromNBT"(tag: $CompoundTag$$Type): $TranslationTable
public "saveToNBT"(): $CompoundTag
public "getStringTranslation"(key: StringJS): $Optional<(StringJS)>
public "getStringListTranslation"(key: StringJS): $Optional<($List<(StringJS)>)>
public "remove"(key: StringJS): void
public "size"(): integer
public "put"(key: StringJS, message: StringJS): void
public "put"(key: StringJS, message: $List$$Type<(StringJS)>): void
public "contains"(key: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationTable$$Type = ($TranslationTable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TranslationTable$$Original = $TranslationTable;}
declare module "dev.ftb.mods.ftbquests.block.entity.IEditable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $IEditable$$Interface {

(arg0: $Player): boolean
}

export class $IEditable implements $IEditable$$Interface {
 "hasPermissionToEdit"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditable$$Type = ((arg0: $Player) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEditable$$Original = $IEditable;}
declare module "dev.ftb.mods.ftbquests.quest.QuestObject" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$UUID$$Type} from "java.util.UUID"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$QuestObjectBase} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $QuestObject extends $QuestObjectBase {
readonly "id": long

constructor(id: long)

public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getRelativeProgressFromChildren"(arg0: $TeamData$$Type): integer
public static "getRelativeProgressFromChildren"(progressSum: integer, count: integer): integer
public "onStarted"(data: $QuestProgressEventData$$Type<(never)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "cacheProgress"(): boolean
public "isSearchable"(data: $TeamData$$Type): boolean
public "getProgressColor"(data: $TeamData$$Type, dim: boolean): $Color4I
public "getProgressColor"(data: $TeamData$$Type): $Color4I
public "isCompletedRaw"(data: $TeamData$$Type): boolean
public "isOptionalForProgression"(teamData: $TeamData$$Type): boolean
public "getRelatedQuest"(): $Quest
public "getChildren"(): $Collection<($QuestObject)>
public "isVisible"(data: $TeamData$$Type): boolean
get "relatedQuest"(): $Quest
get "children"(): $Collection<($QuestObject)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObject$$Type = ($QuestObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestObject$$Original = $QuestObject;}
declare module "dev.ftb.mods.ftbquests.quest.reward.Reward" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID$$Type} from "java.util.UUID"
import {$List$$Type} from "java.util.List"
import {$PositionedIngredient} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$Component} from "net.minecraft.network.chat.Component"
import {$RewardType} from "dev.ftb.mods.ftbquests.quest.reward.RewardType"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Set} from "java.util.Set"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Chapter} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RewardAutoClaim} from "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$QuestObjectBase} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $Reward extends $QuestObjectBase {
readonly "id": long

constructor(id: long, q: $Quest$$Type)

public "addMouseOverText"(list: $TooltipList$$Type): void
public "getIngredient"(widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "addTitleInMouseOverText"(): boolean
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "getButtonText"(): StringJS
public "getQuestFile"(): $BaseQuestFile
public "deleteSelf"(): void
public "deleteChildren"(): void
public "getQuest"(): $Quest
public "ignoreRewardBlocking"(): boolean
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getParentID"(): long
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "getQuestChapter"(): $Chapter
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "editedFromGUI"(): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "getExcludeFromClaimAll"(): boolean
public "isClaimAllHardcoded"(): boolean
public "automatedClaimPre"(blockEntity: $BlockEntity$$Type, items: $List$$Type<($ItemStack$$Type)>, random: $RandomSource$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): boolean
public "automatedClaimPost"(blockEntity: $BlockEntity$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): void
public "isTeamReward"(): boolean
public "getAutoClaimType"(): $RewardAutoClaim
public "addAnyProtoTranslations"(tag: $CompoundTag$$Type): void
public "onCreated"(): void
public "getObjectType"(): $QuestObjectType
public "claim"(arg0: $ServerPlayer$$Type, arg1: boolean): void
public "getType"(): $RewardType
get "buttonText"(): StringJS
get "questFile"(): $BaseQuestFile
get "quest"(): $Quest
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "questChapter"(): $Chapter
get "excludeFromClaimAll"(): boolean
get "claimAllHardcoded"(): boolean
get "teamReward"(): boolean
get "autoClaimType"(): $RewardAutoClaim
get "objectType"(): $QuestObjectType
get "type"(): $RewardType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reward$$Type = ($Reward);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reward$$Original = $Reward;}
declare module "dev.ftb.mods.ftbquests.quest.QuestLink" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Movable$$Interface} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$QuestObject} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$BaseQuestFile} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Excludable$$Interface} from "dev.ftb.mods.ftbquests.quest.Excludable"

export class $QuestLink extends $QuestObject implements $Movable$$Interface, $Excludable$$Interface {
readonly "id": long

constructor(id: long, chapter: $Chapter$$Type, linkId: long)

public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "linksTo"(quest: $Quest$$Type): boolean
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "deleteSelf"(): void
public "getChapter"(): $Chapter
public "getQuest"(): $Optional<($Quest)>
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getParentID"(): long
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getRelatedQuest"(): $Quest
public "getMovableID"(): long
public "initiateMoveClientSide"(to: $Chapter$$Type, x: double, y: double): void
public "isQuestObjectExcluded"(teamData: $TeamData$$Type): boolean
public "editedFromGUI"(): void
public "onCreated"(): void
public "getWidth"(): double
public "getHeight"(): double
public "getObjectType"(): $QuestObjectType
public "getShape"(): StringJS
public "getY"(): double
public "getX"(): double
public "isVisible"(data: $TeamData$$Type): boolean
public "setPosition"(qx: double, qy: double): void
public "copyToClipboard"(): void
public "isAlignToCorner"(): boolean
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "getTitle"(): $Component
public "getRotation"(): double
public "getId"(): long
get "questFile"(): $BaseQuestFile
get "chapter"(): $Chapter
get "quest"(): $Optional<($Quest)>
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "relatedQuest"(): $Quest
get "movableID"(): long
get "width"(): double
get "height"(): double
get "objectType"(): $QuestObjectType
get "shape"(): StringJS
get "y"(): double
get "x"(): double
get "alignToCorner"(): boolean
get "title"(): $Component
get "rotation"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestLink$$Type = ($QuestLink);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestLink$$Original = $QuestLink;}
declare module "dev.ftb.mods.ftbquests.block.LootCrateOpenerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootCrateOpenerBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.LootCrateOpenerBlockEntity"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootCrateOpenerBlock extends $BaseEntityBlock {
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
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, livingEntity: $LivingEntity$$Type, itemStack: $ItemStack$$Type): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "blockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($LootCrateOpenerBlockEntity)>
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateOpenerBlock$$Type = ($LootCrateOpenerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootCrateOpenerBlock$$Original = $LootCrateOpenerBlock;}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType$GuiProvider" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $RewardType$GuiProvider$$Interface {

(arg0: $Panel, arg1: $Quest, arg2: $Consumer<($Reward)>): void
}

export class $RewardType$GuiProvider implements $RewardType$GuiProvider$$Interface {
 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $Consumer$$Type<($Reward)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$GuiProvider$$Type = ((arg0: $Panel, arg1: $Quest, arg2: $Consumer<($Reward)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardType$GuiProvider$$Original = $RewardType$GuiProvider;}
declare module "dev.ftb.mods.ftbquests.block.entity.QuestBarrierBlockEntity" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseBarrierBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $QuestBarrierBlockEntity extends $BaseBarrierBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getQuest"(): $Quest
public "updateFromString"(objStr: StringJS): void
public "setQuest"(quest: $Quest$$Type): void
public "isOpen"(player: $Player$$Type): boolean
get "quest"(): $Quest
set "quest"(value: $Quest$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlockEntity$$Type = ($QuestBarrierBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestBarrierBlockEntity$$Original = $QuestBarrierBlockEntity;}
declare module "dev.ftb.mods.ftbquests.item.TaskScreenConfiguratorItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos} from "net.minecraft.core.GlobalPos"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TaskScreenConfiguratorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(itemStack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "useOn"(ctx: $UseOnContext$$Type): $InteractionResult
public static "readBlockPos"(stack: $ItemStack$$Type): $Optional<($GlobalPos)>
public static "storeBlockPos"(stack: $ItemStack$$Type, level: $Level$$Type, clickedPos: $BlockPos$$Type): void
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenConfiguratorItem$$Type = ($TaskScreenConfiguratorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskScreenConfiguratorItem$$Original = $TaskScreenConfiguratorItem;}
declare module "dev.ftb.mods.ftbquests.quest.Chapter" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ChapterGroup, $ChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$UUID$$Type} from "java.util.UUID"
import {$ProgressionMode} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$List, $List$$Type} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Movable} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$QuestObject} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$QuestLink, $QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$ChapterImage, $ChapterImage$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterImage"

export class $Chapter extends $QuestObject {
readonly "file": $BaseQuestFile
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type)
constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type, filename: StringJS)

public "hasGroup"(): boolean
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "consumeItems"(): boolean
public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "onStarted"(data: $QuestProgressEventData$$Type<(never)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "clearCachedData"(): void
public "getQuests"(): $List<($Quest)>
public "getQuestLinks"(): $List<($QuestLink)>
public "addImage"(image: $ChapterImage$$Type): void
public "getRawSubtitle"(): $List<(StringJS)>
public "setRawSubtitle"(rawSubtitle: $List$$Type<(StringJS)>): void
public "getDefaultQuestSize"(): double
public "isDefaultRepeatable"(): boolean
public "isRequireSequentialTasks"(): boolean
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "addQuest"(quest: $Quest$$Type): void
public "addQuestLink"(link: $QuestLink$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getDefaultQuestShape"(): StringJS
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getProgressionMode"(): $ProgressionMode
public "getQuestChapter"(): $Chapter
public "isAlwaysInvisible"(): boolean
public "removeQuest"(quest: $Quest$$Type): void
public "hideQuestUntilDepsComplete"(): boolean
public "isHideQuestUntilDepsVisible"(): boolean
public "hideQuestDetailsUntilStartable"(): boolean
public "setDefaultQuestShape"(defaultQuestShape: StringJS): void
public "getDefaultMinWidth"(): integer
public "isHideTextUntilComplete"(): boolean
public "getImages"(): $List<($ChapterImage)>
public "removeImage"(image: $ChapterImage$$Type): void
public "removeQuestLink"(link: $QuestLink$$Type): void
public "hasAnyVisibleChildren"(): boolean
public "getAutofocus"(): $Optional<($Movable)>
public "setAutofocus"(id: long): void
public "isAutofocus"(id: long): boolean
public "onCreated"(): void
public "getObjectType"(): $QuestObjectType
public "getChildren"(): $Collection<($QuestObject)>
public "getPath"(): $Optional<(StringJS)>
public "getIndex"(): integer
public "getGroup"(): $ChapterGroup
public "isVisible"(data: $TeamData$$Type): boolean
public "getFilename"(): StringJS
get "questFile"(): $BaseQuestFile
get "quests"(): $List<($Quest)>
get "questLinks"(): $List<($QuestLink)>
get "rawSubtitle"(): $List<(StringJS)>
set "rawSubtitle"(value: $List$$Type<(StringJS)>)
get "defaultQuestSize"(): double
get "defaultRepeatable"(): boolean
get "requireSequentialTasks"(): boolean
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "defaultQuestShape"(): StringJS
get "progressionMode"(): $ProgressionMode
get "questChapter"(): $Chapter
get "alwaysInvisible"(): boolean
get "hideQuestUntilDepsVisible"(): boolean
set "defaultQuestShape"(value: StringJS)
get "defaultMinWidth"(): integer
get "hideTextUntilComplete"(): boolean
get "images"(): $List<($ChapterImage)>
get "autofocus"(): $Optional<($Movable)>
set "autofocus"(value: long)
get "objectType"(): $QuestObjectType
get "children"(): $Collection<($QuestObject)>
get "path"(): $Optional<(StringJS)>
get "index"(): integer
get "group"(): $ChapterGroup
get "filename"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chapter$$Type = ($Chapter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Chapter$$Original = $Chapter;}
declare module "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components" {
import {$Enum} from "java.lang.Enum"

export class $RecipeModHelper$Components extends $Enum<($RecipeModHelper$Components)> {
static readonly "LOOT_CRATES": $RecipeModHelper$Components
static readonly "QUESTS": $RecipeModHelper$Components

public static "values"(): ($RecipeModHelper$Components)[]
public static "valueOf"(name: StringJS): $RecipeModHelper$Components
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeModHelper$Components$$Type = (("quests") | ("loot_crates"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeModHelper$Components$$Original = $RecipeModHelper$Components;}
declare module "dev.ftb.mods.ftbquests.quest.Quest" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$UUID$$Type} from "java.util.UUID"
import {$ProgressionMode} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$List, $List$$Type} from "java.util.List"
import {$Tristate} from "dev.ftb.mods.ftblibrary.config.Tristate"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Movable$$Interface} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$BaseQuestFile} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Set} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$Excludable$$Interface} from "dev.ftb.mods.ftbquests.quest.Excludable"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $Quest extends $QuestObject implements $Movable$$Interface, $Excludable$$Interface {
readonly "id": long
static readonly "PAGEBREAK_CODE": StringJS

constructor(id: long, chapter: $Chapter$$Type)

public "setX"(x: double): void
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "getSubtitle"(): $Component
public "getTasks"(): $Collection<($Task)>
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "isExclusiveQuest"(): boolean
public "moveTaskLeft"(task: $Task$$Type): void
public "moveTaskRight"(task: $Task$$Type): void
public "moveRewardLeft"(reward: $Reward$$Type): void
public "moveRewardRight"(reward: $Reward$$Type): void
public "getIconScale"(): double
public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "onStarted"(data: $QuestProgressEventData$$Type<(never)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "getChapter"(): $Chapter
public "clearCachedData"(): void
public "writeTasks"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeRewards"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "removeInvalidDependencies"(): void
public "hideDetailsUntilStartable"(): boolean
public "ignoreRewardBlocking"(): boolean
public "getTasksAsList"(): $List<($Task)>
public "getMinRequiredDependencies"(): integer
public "shouldHideDependentLines"(): boolean
public "getGuidePage"(): StringJS
public "getHideTextUntilComplete"(): $Tristate
public "showInRecipeMod"(): boolean
public "getRawSubtitle"(): StringJS
public "setRawSubtitle"(rawSubtitle: StringJS): void
public "getMinWidth"(): integer
public "canBeRepeated"(): boolean
public "getRawDescription"(): $List<(StringJS)>
public "setRawDescription"(rawDescription: $List$$Type<(StringJS)>): void
public "getRequireSequentialTasks"(): boolean
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getParentID"(): long
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getProgressionMode"(): $ProgressionMode
public "verifyDependencies"(autofix: boolean): boolean
public "removeDependency"(object: $QuestObject$$Type): void
public "getQuestChapter"(): $Chapter
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "isSearchable"(data: $TeamData$$Type): boolean
public "isCompletedRaw"(data: $TeamData$$Type): boolean
public "isOptionalForProgression"(teamData: $TeamData$$Type): boolean
public "getRelatedQuest"(): $Quest
public "hasDependencies"(): boolean
public "clearDependencies"(): void
public "areDependenciesComplete"(teamData: $TeamData$$Type): boolean
public "getDependants"(): $Collection<($QuestObject)>
public "shouldHideDependencyLines"(): boolean
public "shouldHideLockIcon"(): boolean
public "getMovableID"(): long
public "initiateMoveClientSide"(to: $Chapter$$Type, x: double, y: double): void
public "areDependenciesVisible"(teamData: $TeamData$$Type): boolean
public "streamDependencies"(): $Stream<($QuestObject)>
public "hasDependency"(object: $QuestObject$$Type): boolean
public "resetProgressIfRepeatable"(data: $TeamData$$Type, player: $UUID$$Type): boolean
public "allTasksCompleted"(teamData: $TeamData$$Type): boolean
public "removeTask"(task: $Task$$Type): void
public "removeReward"(reward: $Reward$$Type): void
public "setTaskList"(tasks: $List$$Type<($Task$$Type)>): void
public "setRewardList"(rewards: $List$$Type<($Reward$$Type)>): void
public "getRepeatCooldown"(): integer
public "buildDescriptionIndex"(): $List<($Pair<(integer), (integer)>)>
public "isQuestObjectExcluded"(teamData: $TeamData$$Type): boolean
public "editedFromGUI"(): void
public "onCreated"(): void
public "getWidth"(): double
public "getHeight"(): double
public "setSize"(size: double): void
public "getObjectType"(): $QuestObjectType
public "getChildren"(): $Collection<($QuestObject)>
public "getShape"(): StringJS
public "getDescription"(): $List<($Component)>
public "getY"(): double
public "getSize"(): double
public "addDependency"(object: $QuestObject$$Type): void
public "addTask"(task: $Task$$Type): void
public "getX"(): double
public "isOptional"(): boolean
public "isVisible"(data: $TeamData$$Type): boolean
public "setY"(y: double): void
public "copyToClipboard"(): void
public "addReward"(reward: $Reward$$Type): void
public "getRewards"(): $Collection<($Reward)>
public "isAlignToCorner"(): boolean
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "getTitle"(): $Component
public "getRotation"(): double
public "getId"(): long
set "x"(value: double)
get "subtitle"(): $Component
get "tasks"(): $Collection<($Task)>
get "exclusiveQuest"(): boolean
get "iconScale"(): double
get "questFile"(): $BaseQuestFile
get "chapter"(): $Chapter
get "tasksAsList"(): $List<($Task)>
get "minRequiredDependencies"(): integer
get "guidePage"(): StringJS
get "hideTextUntilComplete"(): $Tristate
get "rawSubtitle"(): StringJS
set "rawSubtitle"(value: StringJS)
get "minWidth"(): integer
get "rawDescription"(): $List<(StringJS)>
set "rawDescription"(value: $List$$Type<(StringJS)>)
get "requireSequentialTasks"(): boolean
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "progressionMode"(): $ProgressionMode
get "questChapter"(): $Chapter
get "relatedQuest"(): $Quest
get "dependants"(): $Collection<($QuestObject)>
get "movableID"(): long
set "taskList"(value: $List$$Type<($Task$$Type)>)
set "rewardList"(value: $List$$Type<($Reward$$Type)>)
get "repeatCooldown"(): integer
get "width"(): double
get "height"(): double
set "size"(value: double)
get "objectType"(): $QuestObjectType
get "children"(): $Collection<($QuestObject)>
get "shape"(): StringJS
get "description"(): $List<($Component)>
get "y"(): double
get "size"(): double
get "x"(): double
get "optional"(): boolean
set "y"(value: double)
get "rewards"(): $Collection<($Reward)>
get "alignToCorner"(): boolean
get "title"(): $Component
get "rotation"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Quest$$Type = ($Quest);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Quest$$Original = $Quest;}
declare module "dev.ftb.mods.ftbquests.quest.ChapterGroup" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Collection} from "java.util.Collection"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$UUID$$Type} from "java.util.UUID"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Comparator$$Type} from "java.util.Comparator"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$QuestObject} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $ChapterGroup extends $QuestObject {
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type)

public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "deleteSelf"(): void
public "clearChapters"(): void
public "clearCachedData"(): void
public "getChapters"(): $List<($Chapter)>
public "isDefaultGroup"(): boolean
public "sortChapters"(c: $Comparator$$Type<($Chapter)>): void
public "addChapter"(chapter: $Chapter$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getVisibleChapters"(data: $TeamData$$Type): $List<($Chapter)>
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "editedFromGUI"(): void
public "removeChapter"(chapter: $Chapter$$Type): void
public "moveChapterWithinGroup"(chapter: $Chapter$$Type, movingUp: boolean): boolean
public "isFirstGroup"(): boolean
public "isLastGroup"(): boolean
public "toggleCollapsed"(): void
public "isGuiCollapsed"(): boolean
public "onCreated"(): void
public "getObjectType"(): $QuestObjectType
public "getChildren"(): $Collection<($QuestObject)>
public "getFile"(): $BaseQuestFile
public "isVisible"(data: $TeamData$$Type): boolean
get "questFile"(): $BaseQuestFile
get "chapters"(): $List<($Chapter)>
get "defaultGroup"(): boolean
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "firstGroup"(): boolean
get "lastGroup"(): boolean
get "guiCollapsed"(): boolean
get "objectType"(): $QuestObjectType
get "children"(): $Collection<($QuestObject)>
get "file"(): $BaseQuestFile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChapterGroup$$Type = ($ChapterGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChapterGroup$$Original = $ChapterGroup;}
declare module "dev.ftb.mods.ftbquests.quest.DefaultChapterGroup" {
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ChapterGroup} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Component} from "net.minecraft.network.chat.Component"

export class $DefaultChapterGroup extends $ChapterGroup {
readonly "id": long

constructor(f: $BaseQuestFile$$Type)

public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
get "altTitle"(): $Component
get "altIcon"(): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultChapterGroup$$Type = ($DefaultChapterGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DefaultChapterGroup$$Original = $DefaultChapterGroup;}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationManager" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$TranslationTable$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationTable"
import {$List, $List$$Type} from "java.util.List"
import {$QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Path$$Type} from "java.nio.file.Path"
import {$TranslationKey$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationKey"

export class $TranslationManager {
static readonly "DEFAULT_FALLBACK_LOCALE": StringJS

constructor()

public "syncTableFromServer"(locale: StringJS, table: $TranslationTable$$Type): void
public static "syncTable"(player: $ServerPlayer$$Type, language: StringJS): void
public "saveToNBT"(langFolder: $Path$$Type, force: boolean): void
public "loadFromNBT"(file: $BaseQuestFile$$Type, langFolder: $Path$$Type): void
public "addTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type, message: $List$$Type<(StringJS)>): void
public "addTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type, message: StringJS): void
public "addInitialTranslation"(extra: $CompoundTag$$Type, locale: StringJS, translationKey: $TranslationKey$$Type, value: StringJS): void
public "removeAllTranslations"(obj: $QuestObjectBase$$Type): void
public "sendTranslationsToPlayer"(player: $ServerPlayer$$Type): void
public "getStringTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type): $Optional<(StringJS)>
public "getStringListTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type): $Optional<($List<(StringJS)>)>
public "processInitialTranslation"(extra: $CompoundTag$$Type, object: $QuestObjectBase$$Type): void
public "sendTableToPlayer"(player: $ServerPlayer$$Type, locale: StringJS): void
public "hasMissingTranslation"(object: $QuestObjectBase$$Type, key: $TranslationKey$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationManager$$Type = ($TranslationManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TranslationManager$$Original = $TranslationManager;}
declare module "dev.ftb.mods.ftbquests.item.LootCrateItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$LootCrate} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $LootCrateItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "isFoil"(stack: $ItemStack$$Type): boolean
public static "getCrate"(stack: $ItemStack$$Type): $LootCrate
public static "getCrate"(stack: $ItemStack$$Type, isClientSide: boolean): $LootCrate
public "getName"(stack: $ItemStack$$Type): $Component
public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateItem$$Type = ($LootCrateItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootCrateItem$$Original = $LootCrateItem;}
declare module "dev.ftb.mods.ftbquests.item.ScreenBlockItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ScreenBlockItem$ScreenSize$$Type} from "dev.ftb.mods.ftbquests.item.ScreenBlockItem$ScreenSize"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ScreenBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, size: $ScreenBlockItem$ScreenSize$$Type)

public static "getSize"(stack: $ItemStack$$Type): integer
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlockItem$$Type = ($ScreenBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenBlockItem$$Original = $ScreenBlockItem;}
declare module "dev.ftb.mods.ftbquests.quest.task.TaskType$GuiProvider" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"

export interface $TaskType$GuiProvider$$Interface {

(arg0: $Panel, arg1: $Quest, arg2: $BiConsumer<($Task), ($CompoundTag)>): void
}

export class $TaskType$GuiProvider implements $TaskType$GuiProvider$$Interface {
 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $BiConsumer$$Type<($Task), ($CompoundTag)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskType$GuiProvider$$Type = ((arg0: $Panel, arg1: $Quest, arg2: $BiConsumer<($Task), ($CompoundTag)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskType$GuiProvider$$Original = $TaskType$GuiProvider;}
declare module "dev.ftb.mods.ftbquests.quest.loot.EntityWeight" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityWeight {
 "boss": integer
 "passive": integer
 "monster": integer

constructor()

public "readData"(nbt: $CompoundTag$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): void
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
public "readNetData"(data: $FriendlyByteBuf$$Type): void
public "getWeight"(entity: $Entity$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityWeight$$Type = ($EntityWeight);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityWeight$$Original = $EntityWeight;}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardClaimType" {
import {$Enum} from "java.lang.Enum"

export class $RewardClaimType extends $Enum<($RewardClaimType)> {
static readonly "CLAIMED": $RewardClaimType
static readonly "CAN_CLAIM": $RewardClaimType
static readonly "CANT_CLAIM": $RewardClaimType

public "cantClaim"(): boolean
public "isClaimed"(): boolean
public "canClaim"(): boolean
public static "values"(): ($RewardClaimType)[]
public static "valueOf"(name: StringJS): $RewardClaimType
get "claimed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardClaimType$$Type = (("can_claim") | ("cant_claim") | ("claimed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardClaimType$$Original = $RewardClaimType;}
declare module "dev.ftb.mods.ftbquests.quest.ProgressionMode" {
import {$Enum} from "java.lang.Enum"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $ProgressionMode extends $Enum<($ProgressionMode)> {
static readonly "NAME_MAP": $NameMap<($ProgressionMode)>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<($ProgressionMode)>
static readonly "LINEAR": $ProgressionMode
static readonly "DEFAULT": $ProgressionMode
static readonly "FLEXIBLE": $ProgressionMode

public static "values"(): ($ProgressionMode)[]
public static "valueOf"(name: StringJS): $ProgressionMode
public "getId"(): StringJS
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressionMode$$Type = (("default") | ("linear") | ("flexible"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressionMode$$Original = $ProgressionMode;}
declare module "dev.ftb.mods.ftbquests.quest.TeamData" {
import {$Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection} from "java.util.Collection"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional} from "java.util.Optional"
import {$LongSet} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Component} from "net.minecraft.network.chat.Component"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Date, $Date$$Type} from "java.util.Date"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RewardClaimType} from "dev.ftb.mods.ftbquests.quest.reward.RewardClaimType"

export class $TeamData {
static readonly "AUTO_PIN_ID": integer
static readonly "VERSION": integer
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TeamData)>

constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type)
constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type, name: StringJS)

public "setLocked"(newLocked: boolean): boolean
public "markDirty"(): void
public "resetProgress"(task: $Task$$Type): void
public "mergeData"(from: $TeamData$$Type): void
public "getOnlineMembers"(): $Collection<($ServerPlayer)>
public "getTeamId"(): $UUID
public "isRewardClaimed"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "markTaskCompleted"(task: $Task$$Type): void
public "addProgress"(task: $Task$$Type, progress: long): void
public "clearCachedProgress"(): void
public "hasUnclaimedRewards"(player: $UUID$$Type, object: $QuestObject$$Type): boolean
public "getRelativeProgress"(object: $QuestObject$$Type): integer
public "canStartTasks"(quest: $Quest$$Type): boolean
public "isExcludedByOtherQuestline"(qo: $QuestObject$$Type): boolean
public "getCompletionCount"(quest: $Quest$$Type): integer
public "areDependenciesComplete"(quest: $Quest$$Type): boolean
public "areDependenciesVisible"(quest: $Quest$$Type): boolean
public "isRewardBlocked"(reward: $Reward$$Type): boolean
public "getClaimType"(player: $UUID$$Type, reward: $Reward$$Type): $RewardClaimType
public "mergeClaimedRewards"(from: $TeamData$$Type): void
public "checkAutoCompletion"(quest: $Quest$$Type): void
public "deleteReward"(reward: $Reward$$Type): void
public "resetReward"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "claimReward"(player: $ServerPlayer$$Type, reward: $Reward$$Type, notify: boolean): void
public "claimReward"(player: $ServerPlayer$$Type, reward: $Reward$$Type, notify: boolean, when: long): void
public "clearRepeatCooldown"(q: $Quest$$Type): void
public "isQuestPinned"(player: $Player$$Type, id: long): boolean
public "setQuestPinned"(player: $Player$$Type, id: long, pinned: boolean): void
public "getStartedTime"(questId: long): $Optional<($Date)>
public "getCompletedTime"(questId: long): $Optional<($Date)>
public "getRewardClaimTime"(player: $UUID$$Type, reward: $Reward$$Type): $Optional<($Date)>
public "areRewardsBlocked"(): boolean
public "setRewardsBlocked"(rewardsBlocked: boolean): boolean
public "getMilliSecondsUntilRepeatable"(quest: $Quest$$Type): long
public "markRewardAsClaimed"(player: $UUID$$Type, reward: $Reward$$Type, date: long): boolean
public "getPinnedQuestIds"(player: $Player$$Type): $LongSet
public "getCannotStartReason"(quest: $Quest$$Type): $Component
public "setCanEdit"(player: $Player$$Type, newCanEdit: boolean): boolean
public "getCanEdit"(player: $Player$$Type): boolean
public "copyData"(from: $TeamData$$Type): void
public "setCompleted"(id: long, time: $Date$$Type): boolean
public "isCompleted"(object: $QuestObject$$Type): boolean
public "getName"(): StringJS
public static "get"(player: $Player$$Type): $TeamData
public "toString"(): StringJS
public "setName"(name: StringJS): void
public "isStarted"(object: $QuestObject$$Type): boolean
public "getFile"(): $BaseQuestFile
public "isLocked"(): boolean
public "setStarted"(questId: long, time: $Date$$Type): boolean
public "saveIfChanged"(): void
public "deserializeNBT"(nbt: $SNBTCompoundTag$$Type): void
public "serializeNBT"(): $SNBTCompoundTag
public "getProgress"(taskId: long): long
public "getProgress"(task: $Task$$Type): long
public "setProgress"(task: $Task$$Type, progress: long): void
set "locked"(value: boolean)
get "onlineMembers"(): $Collection<($ServerPlayer)>
get "teamId"(): $UUID
set "rewardsBlocked"(value: boolean)
get "name"(): StringJS
set "name"(value: StringJS)
get "file"(): $BaseQuestFile
get "locked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamData$$Type = ($TeamData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamData$$Original = $TeamData;}
declare module "dev.ftb.mods.ftbquests.block.entity.TaskScreenAuxBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID} from "java.util.UUID"
import {$ITaskScreen$$Interface} from "dev.ftb.mods.ftbquests.block.entity.ITaskScreen"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TaskScreenBlockEntity, $TaskScreenBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Nameable$$Interface} from "net.minecraft.world.Nameable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenAuxBlockEntity extends $BlockEntity implements $ITaskScreen$$Interface, $Nameable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getTeamId"(): $UUID
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "isIndestructible"(): boolean
public "setCoreScreen"(coreScreen: $TaskScreenBlockEntity$$Type): void
public "isInputOnly"(): boolean
public "getName"(): $Component
public "getSkin"(): $ItemStack
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public "getCustomName"(): $Component
get "teamId"(): $UUID
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "indestructible"(): boolean
set "coreScreen"(value: $TaskScreenBlockEntity$$Type)
get "inputOnly"(): boolean
get "name"(): $Component
get "skin"(): $ItemStack
get "displayName"(): $Component
get "customName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenAuxBlockEntity$$Type = ($TaskScreenAuxBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskScreenAuxBlockEntity$$Original = $TaskScreenAuxBlockEntity;}
declare module "dev.ftb.mods.ftbquests.quest.BaseQuestFile" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Reward} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID$$Type} from "java.util.UUID"
import {$LootCrate} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$ProgressionMode} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$DefaultChapterGroup} from "dev.ftb.mods.ftbquests.quest.DefaultChapterGroup"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$QuestFile$$Interface} from "dev.ftb.mods.ftbquests.api.QuestFile"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TaskType} from "dev.ftb.mods.ftbquests.quest.task.TaskType"
import {$QuestObject} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$RewardType} from "dev.ftb.mods.ftbquests.quest.reward.RewardType"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$RewardTable, $RewardTable$$Type} from "dev.ftb.mods.ftbquests.quest.loot.RewardTable"
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ChapterGroup, $ChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$Env} from "dev.architectury.utils.Env"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TranslationManager} from "dev.ftb.mods.ftbquests.quest.translation.TranslationManager"
import {$EntityWeight} from "dev.ftb.mods.ftbquests.quest.loot.EntityWeight"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Task} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$RewardAutoClaim} from "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$QuestObjectBase} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $BaseQuestFile extends $QuestObject implements $QuestFile$$Interface {
static "VERSION": integer
readonly "id": long
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BaseQuestFile)>

constructor()

public "addData"(data: $TeamData$$Type, override: boolean): void
public "markDirty"(): void
public "getFolder"(): $Path
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getTeamData"(player: $Player$$Type): $Optional<($TeamData)>
public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "showLockIcons"(): boolean
public "getTranslationManager"(): $TranslationManager
public "forAllChapters"(consumer: $Consumer$$Type<($Chapter)>): void
public "onStarted"(data: $QuestProgressEventData$$Type<(never)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "forAllQuests"(consumer: $Consumer$$Type<($Quest)>): void
public "refreshIDMap"(): void
public "getQuestObjectOrThrow"<T extends $QuestObjectBase>(id: long, cls: $Class$$Type<(T)>): T
public "getChapter"(id: long): $Chapter
public "getChapterOrThrow"(id: long): $Chapter
public "getQuest"(id: long): $Quest
public "getRewardTable"(id: long): $RewardTable
public "getLootCrate"(id: StringJS): $LootCrate
public "getChapterGroup"(id: long): $ChapterGroup
public "clearCachedData"(): void
public "refreshRewardTableRewardIDs"(): void
public "writeDataFull"(folder: $Path$$Type, provider: $HolderLookup$Provider$$Type): void
public "readDataFull"(folder: $Path$$Type, provider: $HolderLookup$Provider$$Type): void
public "readID"(id: long): long
public "readID"(tag: $Tag$$Type): long
public "updateLootCrates"(): void
public "getAllObjects"(): $Collection<($QuestObjectBase)>
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "writeNetDataFull"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetDataFull"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getParentID"(): long
public "getNullableTeamData"(id: $UUID$$Type): $TeamData
public "getOrCreateTeamData"(player: $Entity$$Type): $TeamData
public "getOrCreateTeamData"(teamId: $UUID$$Type): $TeamData
public "getOrCreateTeamData"(team: $Team$$Type): $TeamData
public "getAllTeamData"(): $Collection<($TeamData)>
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "clearCachedProgress"(): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "getAllChapters"(): $List<($Chapter)>
public "getAllTasks"(): $List<($Task)>
public "getSubmitTasks"(): $List<($Task)>
public "getCraftingTasks"(): $List<($Task)>
public "getVisibleChapters"(data: $TeamData$$Type): $List<($Chapter)>
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "getDefaultQuestShape"(): StringJS
public "refreshGui"(): void
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getProgressionMode"(): $ProgressionMode
public "getDetectionDelay"(): integer
public "isPauseGame"(): boolean
public "isDisableGui"(): boolean
public "getGridScale"(): double
public "isHideExcludedQuests"(): boolean
public "isDefaultPerTeamReward"(): boolean
public "isDefaultTeamConsumeItems"(): boolean
public "getDefaultRewardAutoClaim"(): $RewardAutoClaim
public "getEmergencyItems"(): $List<($ItemStack)>
public "getEmergencyItemsCooldown"(): integer
public "isDefaultQuestDisableJEI"(): boolean
public "isPlayerOnTeam"(arg0: $Player$$Type, arg1: $TeamData$$Type): boolean
public "getTaskType"(typeId: integer): $TaskType
public "getRewardType"(typeId: integer): $RewardType
public "getDefaultChapterGroup"(): $DefaultChapterGroup
public "getRewardTables"(): $List<($RewardTable)>
public "addRewardTable"(rewardTable: $RewardTable$$Type): void
public "removeRewardTable"(rewardTable: $RewardTable$$Type): void
public "removeEmptyRewardTables"(source: $CommandSourceStack$$Type): integer
public "getChapterGroups"(): $List<($ChapterGroup)>
public "forAllChapterGroups"(consumer: $Consumer$$Type<($ChapterGroup)>): void
public "forAllQuestLinks"(consumer: $Consumer$$Type<($QuestLink)>): void
public "moveChapterGroup"(id: long, movingUp: boolean): boolean
public "getLootCrateNoDrop"(): $EntityWeight
public "isServerSide"(): boolean
public "newID"(): long
public "isLoading"(): boolean
public "getID"(obj: any): long
public "getLocale"(): StringJS
public "getObjectType"(): $QuestObjectType
public "getChildren"(): $Collection<($QuestObject)>
public "getBase"(id: long): $QuestObjectBase
public "getFallbackLocale"(): StringJS
public "getTask"(id: long): $Task
public "remove"(id: long): $QuestObjectBase
public "get"(id: long): $QuestObject
public "collect"<T extends $QuestObjectBase>(cls: $Class$$Type<(T)>, filter: $Predicate$$Type<(T)>): $List<(T)>
public "collect"<T extends $QuestObjectBase>(clazz: $Class$$Type<(T)>): $List<(T)>
public "create"(id: long, type: $QuestObjectType$$Type, parent: long, extra: $CompoundTag$$Type): $QuestObjectBase
public "getSide"(): $Env
public "deleteObject"(arg0: long): void
public "canEdit"(): boolean
public "isVisible"(data: $TeamData$$Type): boolean
public "holderLookup"(): $HolderLookup$Provider
public "getReward"(id: long): $Reward
public "isDropLootCrates"(): boolean
public "makeRandomLootCrate"(entity: $Entity$$Type, random: $RandomSource$$Type): $Optional<($LootCrate)>
public "dropBookOnDeath"(): boolean
get "folder"(): $Path
get "questFile"(): $BaseQuestFile
get "translationManager"(): $TranslationManager
get "allObjects"(): $Collection<($QuestObjectBase)>
get "parentID"(): long
get "allTeamData"(): $Collection<($TeamData)>
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "allChapters"(): $List<($Chapter)>
get "allTasks"(): $List<($Task)>
get "submitTasks"(): $List<($Task)>
get "craftingTasks"(): $List<($Task)>
get "defaultQuestShape"(): StringJS
get "progressionMode"(): $ProgressionMode
get "detectionDelay"(): integer
get "pauseGame"(): boolean
get "disableGui"(): boolean
get "gridScale"(): double
get "hideExcludedQuests"(): boolean
get "defaultPerTeamReward"(): boolean
get "defaultTeamConsumeItems"(): boolean
get "defaultRewardAutoClaim"(): $RewardAutoClaim
get "emergencyItems"(): $List<($ItemStack)>
get "emergencyItemsCooldown"(): integer
get "defaultQuestDisableJEI"(): boolean
get "defaultChapterGroup"(): $DefaultChapterGroup
get "rewardTables"(): $List<($RewardTable)>
get "chapterGroups"(): $List<($ChapterGroup)>
get "lootCrateNoDrop"(): $EntityWeight
get "serverSide"(): boolean
get "loading"(): boolean
get "locale"(): StringJS
get "objectType"(): $QuestObjectType
get "children"(): $Collection<($QuestObject)>
get "fallbackLocale"(): StringJS
get "side"(): $Env
get "dropLootCrates"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseQuestFile$$Type = ($BaseQuestFile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseQuestFile$$Original = $BaseQuestFile;}
declare module "dev.ftb.mods.ftbquests.item.QuestBarrierBlockItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $QuestBarrierBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlockItem$$Type = ($QuestBarrierBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestBarrierBlockItem$$Original = $QuestBarrierBlockItem;}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType$Provider" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"

export interface $RewardType$Provider$$Interface {

(arg0: long, arg1: $Quest): $Reward$$Type
}

export class $RewardType$Provider implements $RewardType$Provider$$Interface {
 "create"(arg0: long, arg1: $Quest$$Type): $Reward
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$Provider$$Type = ((arg0: long, arg1: $Quest) => $Reward$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardType$Provider$$Original = $RewardType$Provider;}
declare module "dev.ftb.mods.ftbquests.block.TaskScreenBlock$Aux" {
import {$TaskScreenBlock} from "dev.ftb.mods.ftbquests.block.TaskScreenBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenBlock$Aux extends $TaskScreenBlock {
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
static readonly "FACING": $DirectionProperty
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlock$Aux$$Type = ($TaskScreenBlock$Aux);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskScreenBlock$Aux$$Original = $TaskScreenBlock$Aux;}
declare module "dev.ftb.mods.ftbquests.quest.loot.RewardTable" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$LootCrate} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$List} from "java.util.List"
import {$WeightedReward, $WeightedReward$$Type} from "dev.ftb.mods.ftbquests.quest.loot.WeightedReward"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$Set} from "java.util.Set"
import {$QuestObjectBase} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $RewardTable extends $QuestObjectBase {
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type, filename: StringJS)
constructor(id: long, file: $BaseQuestFile$$Type)

public "addMouseOverText"(list: $TooltipList$$Type, includeWeight: boolean, includeEmpty: boolean): void
public "getTotalWeight"(includeEmpty: boolean): float
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getQuestFile"(): $BaseQuestFile
public "deleteSelf"(): void
public "getLootCrate"(): $LootCrate
public "clearCachedData"(): void
public static "isFakeQuestId"(id: long): boolean
public static "createRewardForTable"(id: long, type: StringJS, file: $BaseQuestFile$$Type): $QuestObjectBase
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "getWeightedRewards"(): $List<($WeightedReward)>
public "removeReward"(weightedReward: $WeightedReward$$Type): void
public "editedFromGUI"(): void
public "editedFromGUIOnServer"(): void
public "onEditButtonClicked"(gui: $Runnable$$Type): void
public "generateWeightedRandomRewards"(random: $RandomSource$$Type, nAttempts: integer, includeEmpty: boolean): $Collection<($WeightedReward)>
public "getTitleOrElse"(def: $Component$$Type): $Component
public "getFakeQuest"(): $Quest
public "makeWeightedItemReward"(stack: $ItemStack$$Type, weight: float): $WeightedReward
public "toggleLootCrate"(): $LootCrate
public "shouldShowTooltip"(): boolean
public "onCreated"(): void
public "getObjectType"(): $QuestObjectType
public "copy"(): $RewardTable
public "getFile"(): $BaseQuestFile
public "getPath"(): $Optional<(StringJS)>
public "getFilename"(): StringJS
public "addReward"(weightedReward: $WeightedReward$$Type): void
get "questFile"(): $BaseQuestFile
get "lootCrate"(): $LootCrate
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "weightedRewards"(): $List<($WeightedReward)>
get "fakeQuest"(): $Quest
get "objectType"(): $QuestObjectType
get "file"(): $BaseQuestFile
get "path"(): $Optional<(StringJS)>
get "filename"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardTable$$Type = ($RewardTable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardTable$$Original = $RewardTable;}
declare module "dev.ftb.mods.ftbquests.quest.QuestObjectBase" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Chapter} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$List$$Type} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$TranslationKey$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationKey"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BaseQuestFile} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Set} from "java.util.Set"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"

export class $QuestObjectBase implements $Comparable$$Interface<($QuestObjectBase)> {
readonly "id": long

constructor(id: long)

public "hasTag"(tag: StringJS): boolean
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getQuestFile"(): $BaseQuestFile
public "deleteSelf"(): void
public "deleteChildren"(): void
public "clearCachedData"(): void
public static "itemOrMissingFromNBT"(tag: $Tag$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public static "getCodeString"(id: long): StringJS
public "getCodeString"(): StringJS
public static "getCodeString"(object: $QuestObjectBase$$Type): StringJS
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getParentID"(): long
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public static "parseCodeString"(id: StringJS): long
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "setRawTitle"(rawTitle: StringJS): void
public "getQuestChapter"(): $Chapter
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public static "shouldSendNotifications"(): boolean
public static "singleItemOrMissingFromNBT"(tag: $Tag$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "setRawIcon"(rawIcon: $ItemStack$$Type): void
public "getRawTitle"(): StringJS
public "getProtoTranslation"(key: $TranslationKey$$Type): StringJS
public "modifyTranslatableListValue"(translationKey: $TranslationKey$$Type, setter: $Consumer$$Type<($List<(StringJS)>)>): void
public static "parseHexId"(id: StringJS): $Optional<(long)>
public static "titleToID"(s: StringJS): $Optional<(StringJS)>
public "forceProgressRaw"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "getMutableTitle"(): $MutableComponent
public "editedFromGUI"(): void
public "editedFromGUIOnServer"(): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "onEditButtonClicked"(gui: $Runnable$$Type): void
public "onCreated"(): void
public static "getID"(object: $QuestObjectBase$$Type): long
public "isValid"(): boolean
public "getObjectType"(): $QuestObjectType
public "equals"(object: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(other: $QuestObjectBase$$Type): integer
public "getId"(): long
public static "copy"<T extends $QuestObjectBase>(orig: T, factory: $Supplier$$Type<(T)>): T
public static "isNull"(object: $QuestObjectBase$$Type): boolean
public "getPath"(): $Optional<(StringJS)>
public "getIcon"(): $Icon
public "getTitle"(): $Component
public "getTags"(): $Set<(StringJS)>
public "holderLookup"(): $HolderLookup$Provider
get "questFile"(): $BaseQuestFile
get "codeString"(): StringJS
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
set "rawTitle"(value: StringJS)
get "questChapter"(): $Chapter
set "rawIcon"(value: $ItemStack$$Type)
get "rawTitle"(): StringJS
get "mutableTitle"(): $MutableComponent
get "valid"(): boolean
get "objectType"(): $QuestObjectType
get "path"(): $Optional<(StringJS)>
get "icon"(): $Icon
get "title"(): $Component
get "tags"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectBase$$Type = ($QuestObjectBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestObjectBase$$Original = $QuestObjectBase;}
declare module "dev.ftb.mods.ftbquests.quest.QuestObjectType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum} from "java.lang.Enum"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Component} from "net.minecraft.network.chat.Component"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $QuestObjectType extends $Enum<($QuestObjectType)> implements $Predicate$$Interface<($QuestObjectBase)> {
static readonly "TASK": $QuestObjectType
static readonly "ALL_PROGRESSING_OR_NULL": $Predicate<($QuestObjectBase)>
static readonly "NULL": $QuestObjectType
static readonly "NAME_MAP": $NameMap<($QuestObjectType)>
static readonly "REWARD": $QuestObjectType
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($QuestObjectType)>
static readonly "ALL_PROGRESSING": $Predicate<($QuestObjectBase)>
static readonly "CHAPTER": $QuestObjectType
static readonly "QUEST_LINK": $QuestObjectType
static readonly "CHAPTER_GROUP": $QuestObjectType
static readonly "FILE": $QuestObjectType
static readonly "REWARD_TABLE": $QuestObjectType
static readonly "QUEST": $QuestObjectType

public "getCompletedMessage"(): $Component
public static "values"(): ($QuestObjectType)[]
public "test"(arg0: any): boolean
public "test"(object: $QuestObjectBase$$Type): boolean
public static "valueOf"(name: StringJS): $QuestObjectType
public "getId"(): StringJS
public "getColor"(): $ChatFormatting
public "or"(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public static "isEqual"<T>(arg0: any): $Predicate<($QuestObjectBase)>
public "negate"(): $Predicate<($QuestObjectBase)>
public "and"(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public static "not"<T>(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
get "completedMessage"(): $Component
get "id"(): StringJS
get "color"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectType$$Type = (("null") | ("file") | ("chapter") | ("quest") | ("task") | ("reward") | ("reward_table") | ("chapter_group") | ("quest_link"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestObjectType$$Original = $QuestObjectType;}
declare module "dev.ftb.mods.ftbquests.item.StageBarrierBlockItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $StageBarrierBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageBarrierBlockItem$$Type = ($StageBarrierBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StageBarrierBlockItem$$Original = $StageBarrierBlockItem;}
declare module "dev.ftb.mods.ftbquests.item.MissingItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $MissingItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
public "getName"(stack: $ItemStack$$Type): $Component
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingItem$$Type = ($MissingItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MissingItem$$Original = $MissingItem;}
declare module "dev.ftb.mods.ftbquests.quest.Excludable" {
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"

export interface $Excludable$$Interface {
get "id"(): long
}

export class $Excludable implements $Excludable$$Interface {
 "isQuestObjectExcluded"(arg0: $TeamData$$Type): boolean
 "getId"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Excludable$$Type = ($Excludable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Excludable$$Original = $Excludable;}
declare module "dev.ftb.mods.ftbquests.quest.task.Task" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$PositionedIngredient} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TaskType} from "dev.ftb.mods.ftbquests.quest.task.TaskType"
import {$QuestObject} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Set} from "java.util.Set"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Chapter} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $Task extends $QuestObject {
readonly "id": long

constructor(id: long, quest: $Quest$$Type)

public "canInsertItem"(): boolean
public "addMouseOverText"(list: $TooltipList$$Type, teamData: $TeamData$$Type): void
public "getIngredient"(widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getMaxProgress"(): long
public "formatMaxProgress"(): StringJS
public "formatProgress"(teamData: $TeamData$$Type, progress: long): StringJS
public "drawGUI"(teamData: $TeamData$$Type, graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "consumesResources"(): boolean
public "hideProgressNumbers"(): boolean
public "addMouseOverHeader"(list: $TooltipList$$Type, teamData: $TeamData$$Type, advanced: boolean): void
public "addTitleInMouseOverText"(): boolean
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "autoSubmitOnPlayerTick"(): integer
public "getButtonText"(): $MutableComponent
public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "onStarted"(data: $QuestProgressEventData$$Type<(never)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "getQuest"(): $Quest
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getParentID"(): long
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "submitItemsOnInventoryChange"(): boolean
public "getQuestChapter"(): $Chapter
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "cacheProgress"(): boolean
public "checkOnLogin"(): boolean
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type): void
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type, craftedItem: $ItemStack$$Type): void
public "isOptionalForProgression"(teamData: $TeamData$$Type): boolean
public "getRelatedQuest"(): $Quest
public "editedFromGUI"(): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "onCreated"(): void
public "getObjectType"(): $QuestObjectType
public "getType"(): $TaskType
get "maxProgress"(): long
get "buttonText"(): $MutableComponent
get "questFile"(): $BaseQuestFile
get "quest"(): $Quest
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "questChapter"(): $Chapter
get "relatedQuest"(): $Quest
get "objectType"(): $QuestObjectType
get "type"(): $TaskType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Task$$Type = ($Task);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Task$$Original = $Task;}
declare module "dev.ftb.mods.ftbquests.quest.Movable" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $Movable$$Interface {
get "alignToCorner"(): boolean
get "chapter"(): $Chapter
get "movableID"(): long
get "width"(): double
get "height"(): double
get "shape"(): StringJS
get "y"(): double
get "title"(): $Component
get "x"(): double
get "rotation"(): double
}

export class $Movable implements $Movable$$Interface {
 "onMoved"(arg0: double, arg1: double, arg2: long): void
 "isAlignToCorner"(): boolean
 "drawMoved"(graphics: $GuiGraphics$$Type): void
 "getChapter"(): $Chapter
 "getMovableID"(): long
 "initiateMoveClientSide"(arg0: $Chapter$$Type, arg1: double, arg2: double): void
 "getWidth"(): double
 "getHeight"(): double
 "getShape"(): StringJS
 "getY"(): double
 "getTitle"(): $Component
 "getX"(): double
 "getRotation"(): double
 "copyToClipboard"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Movable$$Type = ($Movable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Movable$$Original = $Movable;}
declare module "dev.ftb.mods.ftbquests.block.entity.ITaskScreen" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID} from "java.util.UUID"
import {$IEditable$$Interface} from "dev.ftb.mods.ftbquests.block.entity.IEditable"
import {$TaskScreenBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"

export interface $ITaskScreen$$Interface extends $IEditable$$Interface {
get "teamId"(): $UUID
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "indestructible"(): boolean
get "inputOnly"(): boolean
get "skin"(): $ItemStack
}

export class $ITaskScreen implements $ITaskScreen$$Interface {
 "getTeamId"(): $UUID
 "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
 "isIndestructible"(): boolean
 "isInputOnly"(): boolean
 "getSkin"(): $ItemStack
 "hasPermissionToEdit"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITaskScreen$$Type = ($ITaskScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITaskScreen$$Original = $ITaskScreen;}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationKey" {
import {$Enum} from "java.lang.Enum"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$List, $List$$Type} from "java.util.List"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $TranslationKey extends $Enum<($TranslationKey)> {
static readonly "QUEST_DESC": $TranslationKey
static readonly "NAME_MAP": $NameMap<($TranslationKey)>
static readonly "TITLE": $TranslationKey
static readonly "QUEST_SUBTITLE": $TranslationKey
static readonly "CHAPTER_SUBTITLE": $TranslationKey

public "getTranslationKey"(): StringJS
public "isListVal"(): boolean
public "getName"(): StringJS
public static "values"(): ($TranslationKey)[]
public static "valueOf"(name: StringJS): $TranslationKey
public "validate"(either: $Either$$Type<(StringJS), ($List$$Type<(StringJS)>)>): $Either<(StringJS), ($List<(StringJS)>)>
get "translationKey"(): StringJS
get "listVal"(): boolean
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationKey$$Type = (("title") | ("quest_subtitle") | ("quest_desc") | ("chapter_subtitle"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TranslationKey$$Original = $TranslationKey;}
declare module "dev.ftb.mods.ftbquests.quest.ChapterImage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Movable$$Interface} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$WeakReference} from "java.lang.ref.WeakReference"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"

export class $ChapterImage implements $Movable$$Interface {
static readonly "FTBQ_IMAGE": StringJS
static "clipboard": $WeakReference<($ChapterImage)>
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ChapterImage)>

constructor(c: $Chapter$$Type)

public "onMoved"(x: double, y: double, chapterId: long): void
public "setImage"(image: $Icon$$Type): $ChapterImage
public "readData"(nbt: $CompoundTag$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): $CompoundTag
public static "fromNet"(parent: $Chapter$$Type, buf: $FriendlyByteBuf$$Type): $ChapterImage
public "isAlignToCorner"(): boolean
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "getChapter"(): $Chapter
public "writeNetData"(buffer: $FriendlyByteBuf$$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getMovableID"(): long
public "initiateMoveClientSide"(to: $Chapter$$Type, _x: double, _y: double): void
public "getClick"(): StringJS
public "addHoverText"(list: $TooltipList$$Type): void
public "isAspectRatioOff"(): boolean
public "fixupAspectRatio"(adjustWidth: boolean): void
public "shouldShowImage"(teamData: $TeamData$$Type): boolean
public static "isImageInClipboard"(): boolean
public "getOrder"(): integer
public "getWidth"(): double
public "getHeight"(): double
public "getShape"(): StringJS
public "getY"(): double
public "copy"(newChapter: $Chapter$$Type, newX: double, newY: double): $ChapterImage
public "getImage"(): $Icon
public "getTitle"(): $Component
public "getX"(): double
public "getColor"(): $Color4I
public "getRotation"(): double
public "setPosition"(x: double, y: double): $ChapterImage
public "copyToClipboard"(): void
public "getAlpha"(): integer
set "image"(value: $Icon$$Type)
get "alignToCorner"(): boolean
get "chapter"(): $Chapter
get "movableID"(): long
get "click"(): StringJS
get "aspectRatioOff"(): boolean
public static get "imageInClipboard"(): boolean
get "order"(): integer
get "width"(): double
get "height"(): double
get "shape"(): StringJS
get "y"(): double
get "image"(): $Icon
get "title"(): $Component
get "x"(): double
get "color"(): $Color4I
get "rotation"(): double
get "alpha"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChapterImage$$Type = ($ChapterImage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChapterImage$$Original = $ChapterImage;}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim" {
import {$Enum} from "java.lang.Enum"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $RewardAutoClaim extends $Enum<($RewardAutoClaim)> {
static readonly "DISABLED": $RewardAutoClaim
static readonly "NO_TOAST": $RewardAutoClaim
static readonly "INVISIBLE": $RewardAutoClaim
static readonly "NAME_MAP": $NameMap<($RewardAutoClaim)>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<($RewardAutoClaim)>
static readonly "ENABLED": $RewardAutoClaim
 "id": StringJS
static readonly "DEFAULT": $RewardAutoClaim

public static "values"(): ($RewardAutoClaim)[]
public static "valueOf"(name: StringJS): $RewardAutoClaim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardAutoClaim$$Type = (("default") | ("disabled") | ("enabled") | ("no_toast") | ("invisible"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardAutoClaim$$Original = $RewardAutoClaim;}
declare module "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity$TeleportData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Record} from "java.lang.Record"

export class $BaseBarrierBlockEntity$TeleportData extends $Record {
static readonly "CODEC": $Codec<($BaseBarrierBlockEntity$TeleportData)>
static readonly "NONE": $BaseBarrierBlockEntity$TeleportData
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BaseBarrierBlockEntity$TeleportData)>

constructor(enabled: boolean, relative: boolean, dest: $BlockPos$$Type, pitch: float, yaw: float, dimId: ($ResourceKey$$Type<($Level$$Type)>)?)

public "dimId"(): $Optional<($ResourceKey<($Level)>)>
public "effectiveDest"(basePos: $BlockPos$$Type): $BaseBarrierBlockEntity$TeleportData
public "dimStr"(): StringJS
public "withDimId"(dimId: $ResourceKey$$Type<($Level)>): $BaseBarrierBlockEntity$TeleportData
public "withDimId"(dimStr: StringJS): $BaseBarrierBlockEntity$TeleportData
public "withYaw"(yaw: float): $BaseBarrierBlockEntity$TeleportData
public "withPitch"(pitch: float): $BaseBarrierBlockEntity$TeleportData
public "withDestZ"(z: integer): $BaseBarrierBlockEntity$TeleportData
public "withDestY"(y: integer): $BaseBarrierBlockEntity$TeleportData
public "withDestX"(x: integer): $BaseBarrierBlockEntity$TeleportData
public "withRelative"(relative: boolean): $BaseBarrierBlockEntity$TeleportData
public "withEnabled"(enabled: boolean): $BaseBarrierBlockEntity$TeleportData
public "teleportPlayer"(player: $ServerPlayer$$Type): void
public "withDestPos"(pos: $BlockPos$$Type): $BaseBarrierBlockEntity$TeleportData
public "relative"(): boolean
public "getLevel"(server: $MinecraftServer$$Type): $Level
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "enabled"(): boolean
public "dest"(): $BlockPos
public "pitch"(): float
public "yaw"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBarrierBlockEntity$TeleportData$$Type = ({"enabled"?: boolean, "yaw"?: float, "relative"?: boolean, "dest"?: $BlockPos$$Type, "dimId"?: ($ResourceKey$$Type<($Level$$Type)>)?, "pitch"?: float}) | ([enabled?: boolean, yaw?: float, relative?: boolean, dest?: $BlockPos$$Type, dimId?: ($ResourceKey$$Type<($Level$$Type)>)?, pitch?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBarrierBlockEntity$TeleportData$$Original = $BaseBarrierBlockEntity$TeleportData;}
declare module "dev.ftb.mods.ftbquests.util.ProgressChange" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Date} from "java.util.Date"
import {$QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $ProgressChange {
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ProgressChange)>

constructor(origin: $QuestObjectBase$$Type, playerId: $UUID$$Type)

public "getPlayerId"(): $UUID
public "shouldReset"(): boolean
public "shouldNotify"(): boolean
public static "createServerSide"(origin: long, reset: boolean, playerId: $UUID$$Type, notifications: boolean): $ProgressChange
public "setReset"(reset: boolean): $ProgressChange
public "withNotifications"(): $ProgressChange
public "maybeForceProgress"(teamId: $UUID$$Type): void
public "getDate"(): $Date
get "playerId"(): $UUID
set "reset"(value: boolean)
get "date"(): $Date
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressChange$$Type = ($ProgressChange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressChange$$Original = $ProgressChange;}
declare module "dev.ftb.mods.ftbquests.item.ScreenBlockItem$ScreenSize" {
import {$Enum} from "java.lang.Enum"

export class $ScreenBlockItem$ScreenSize extends $Enum<($ScreenBlockItem$ScreenSize)> {
static readonly "THREE_X_THREE": $ScreenBlockItem$ScreenSize
static readonly "FIVE_X_FIVE": $ScreenBlockItem$ScreenSize
static readonly "SEVEN_X_SEVEN": $ScreenBlockItem$ScreenSize
static readonly "ONE_X_ONE": $ScreenBlockItem$ScreenSize

public static "values"(): ($ScreenBlockItem$ScreenSize)[]
public static "valueOf"(name: StringJS): $ScreenBlockItem$ScreenSize
public "getSize"(): integer
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlockItem$ScreenSize$$Type = (("one_x_one") | ("three_x_three") | ("five_x_five") | ("seven_x_seven"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenBlockItem$ScreenSize$$Original = $ScreenBlockItem$ScreenSize;}
declare module "dev.ftb.mods.ftbquests.block.DetectorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DetectorBlock extends $BaseEntityBlock {
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
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "getRenderShape"(blockState: $BlockState$$Type): $RenderShape
public "neighborChanged"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, block: $Block$$Type, blockPos2: $BlockPos$$Type, bl: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorBlock$$Type = ($DetectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DetectorBlock$$Original = $DetectorBlock;}
declare module "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity" {
import {$ConfigGroup} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EditableBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.EditableBlockEntity"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BaseBarrierBlockEntity$TeleportData} from "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity$TeleportData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseBarrierBlockEntity extends $EditableBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockEntityType: $BlockEntityType$$Type<(never)>, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "loadAdditional"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "saveAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "fillConfigGroup"(): $ConfigGroup
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "updateFromString"(objStr: StringJS): void
public "optionalTeleportData"(): $Optional<($BaseBarrierBlockEntity$TeleportData)>
public "forceAppearanceUpdate"(): void
public "setSkin"(skin: $ItemStack$$Type): void
public "setInvisibleWhenOpen"(invisibleWhenOpen: boolean): void
public "isInvisibleWhenOpen"(): boolean
public "getClientAppearance"(): $BlockState
public static "tick"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type): void
public "isOpen"(arg0: $Player$$Type): boolean
public "setChanged"(): void
public "getSkin"(): $ItemStack
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
set "skin"(value: $ItemStack$$Type)
set "invisibleWhenOpen"(value: boolean)
get "invisibleWhenOpen"(): boolean
get "clientAppearance"(): $BlockState
get "changed"(): void
get "skin"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBarrierBlockEntity$$Type = ($BaseBarrierBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBarrierBlockEntity$$Original = $BaseBarrierBlockEntity;}
declare module "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity" {
import {$ConfigGroup} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ITaskScreen$$Interface} from "dev.ftb.mods.ftbquests.block.entity.ITaskScreen"
import {$EditableBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.EditableBlockEntity"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenBlockEntity extends $EditableBlockEntity implements $ITaskScreen$$Interface {
 "fakeTextureUV": (float)[]
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "getTeamId"(): $UUID
public "fillConfigGroup"(data: $TeamData$$Type): $ConfigGroup
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "isIndestructible"(): boolean
public "removeAllAuxScreens"(): void
public "setTeamId"(teamId: $UUID$$Type): void
public "setSkin"(skin: $ItemStack$$Type): void
public "setTask"(task: $Task$$Type): void
public "isInputOnly"(): boolean
public "setInputOnly"(inputOnly: boolean): void
public "getInputModeIcon"(): $ItemStack
public "setInputModeIcon"(inputModeIcon: $ItemStack$$Type): void
public "setIndestructible"(indestructible: boolean): void
public "isTextShadow"(): boolean
public "setTextShadow"(textShadow: boolean): void
public "getCachedTeamData"(): $TeamData
public "getFakeTextureUV"(): (float)[]
public "getTask"(): $Task
public "getSkin"(): $ItemStack
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "teamId"(): $UUID
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "indestructible"(): boolean
set "teamId"(value: $UUID$$Type)
set "skin"(value: $ItemStack$$Type)
set "task"(value: $Task$$Type)
get "inputOnly"(): boolean
set "inputOnly"(value: boolean)
get "inputModeIcon"(): $ItemStack
set "inputModeIcon"(value: $ItemStack$$Type)
set "indestructible"(value: boolean)
get "textShadow"(): boolean
set "textShadow"(value: boolean)
get "cachedTeamData"(): $TeamData
get "task"(): $Task
get "skin"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlockEntity$$Type = ($TaskScreenBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskScreenBlockEntity$$Original = $TaskScreenBlockEntity;}
declare module "dev.ftb.mods.ftbquests.quest.loot.WeightedReward" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Comparable$$Interface} from "java.lang.Comparable"

export class $WeightedReward implements $Comparable$$Interface<($WeightedReward)> {
constructor(reward: $Reward$$Type, weight: float)

public "setWeight"(weight: float): void
public static "chanceString"(weight: float, totalWeight: float): StringJS
public static "chanceString"(weight: float, totalWeight: float, empty: boolean): StringJS
public "compareTo"(o: $WeightedReward$$Type): integer
public "compareTo"(arg0: any): integer
public "copy"(): $WeightedReward
public "getWeight"(): float
public "getReward"(): $Reward
set "weight"(value: float)
get "weight"(): float
get "reward"(): $Reward
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedReward$$Type = ($WeightedReward);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeightedReward$$Original = $WeightedReward;}
declare module "dev.ftb.mods.ftbquests.api.QuestFile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$UUID$$Type} from "java.util.UUID"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TeamData} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $QuestFile$$Interface {
get "allTeamData"(): $Collection<($TeamData)>
get "serverSide"(): boolean
}

export class $QuestFile implements $QuestFile$$Interface {
 "getTeamData"(arg0: $Player$$Type): $Optional<($TeamData)>
 "forAllChapters"(arg0: $Consumer$$Type<($Chapter)>): void
 "forAllQuests"(arg0: $Consumer$$Type<($Quest)>): void
 "getNullableTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Team$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $UUID$$Type): $TeamData
/**
 * 
 * @deprecated
 */
 "getOrCreateTeamData"(arg0: $Entity$$Type): $TeamData
 "getAllTeamData"(): $Collection<($TeamData)>
 "forAllQuestLinks"(arg0: $Consumer$$Type<($QuestLink)>): void
 "isServerSide"(): boolean
 "canEdit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestFile$$Type = ($QuestFile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestFile$$Original = $QuestFile;}
declare module "dev.ftb.mods.ftbquests.block.TaskScreenBlock" {
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TaskScreenAuxBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenAuxBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BoundingBox} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TaskScreenBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TaskScreenBlock extends $BaseEntityBlock {
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
static readonly "FACING": $DirectionProperty
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type, size: integer)

public "getStateForPlacement"(blockPlaceContext: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, livingEntity: $LivingEntity$$Type, itemStack: $ItemStack$$Type): void
public "appendHoverText"(itemStack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getDestroyProgress"(blockState: $BlockState$$Type, player: $Player$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "blockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenBlockEntity)>
public static "getMultiblockBounds"(corePos: $BlockPos$$Type, size: integer, facing: $Direction$$Type): $BoundingBox
public static "blockEntityAuxProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenAuxBlockEntity)>
public "getSize"(): integer
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "onRemove"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlock$$Type = ($TaskScreenBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskScreenBlock$$Original = $TaskScreenBlock;}
declare module "dev.ftb.mods.ftbquests.quest.task.TaskType" {
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Task} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$TaskType$GuiProvider, $TaskType$GuiProvider$$Type} from "dev.ftb.mods.ftbquests.quest.task.TaskType$GuiProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $TaskType {
 "internalId": integer

public "getTypeId"(): $ResourceLocation
public "getIconSupplier"(): $Icon
public "createTask"(id: long, quest: $Quest$$Type): $Task
public static "createTask"(id: long, quest: $Quest$$Type, typeId: StringJS): $Task
public "setGuiProvider"(p: $TaskType$GuiProvider$$Type): $TaskType
public "getGuiProvider"(): $TaskType$GuiProvider
public "makeExtraNBT"(): $CompoundTag
public "getTypeForNBT"(): StringJS
public "getDisplayName"(): $Component
public "setDisplayName"(name: $Component$$Type): $TaskType
get "typeId"(): $ResourceLocation
get "iconSupplier"(): $Icon
set "guiProvider"(value: $TaskType$GuiProvider$$Type)
get "guiProvider"(): $TaskType$GuiProvider
get "typeForNBT"(): StringJS
get "displayName"(): $Component
set "displayName"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskType$$Type = ($TaskType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskType$$Original = $TaskType;}
declare module "dev.ftb.mods.ftbquests.block.entity.EditableBlockEntity" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IEditable$$Interface} from "dev.ftb.mods.ftbquests.block.entity.IEditable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EditableBlockEntity extends $BlockEntity implements $IEditable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockEntityType: $BlockEntityType$$Type<(never)>, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "readPayload"(tag: $CompoundTag$$Type, registryAccess: $RegistryAccess$$Type): void
public "hasPermissionToEdit"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditableBlockEntity$$Type = ($EditableBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EditableBlockEntity$$Original = $EditableBlockEntity;}
declare module "dev.ftb.mods.ftbquests.block.entity.LootCrateOpenerBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootCrateOpenerBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getOutputCount"(): integer
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "setOwner"(owner: $UUID$$Type): void
public "getOwner"(): $UUID
get "outputCount"(): integer
set "owner"(value: $UUID$$Type)
get "owner"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateOpenerBlockEntity$$Type = ($LootCrateOpenerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootCrateOpenerBlockEntity$$Original = $LootCrateOpenerBlockEntity;}
