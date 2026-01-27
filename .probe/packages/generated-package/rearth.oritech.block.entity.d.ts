declare module "rearth.oritech.block.entity.interaction.ShrinkerBlockEntity$ShrunkAddonData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MachineAddonController$BaseAddonData, $MachineAddonController$BaseAddonData$$Type} from "rearth.oritech.util.MachineAddonController$BaseAddonData"
import {$Record} from "java.lang.Record"

export class $ShrinkerBlockEntity$ShrunkAddonData extends $Record {
static readonly "CODEC": $Codec<($ShrinkerBlockEntity$ShrunkAddonData)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShrinkerBlockEntity$ShrunkAddonData)>

constructor(data: $MachineAddonController$BaseAddonData$$Type, fluid: boolean, quarryCount: integer, yieldCount: integer, cropFilter: boolean, silk: boolean)

public "fluid"(): boolean
public "silk"(): boolean
public "quarryCount"(): integer
public "yieldCount"(): integer
public "cropFilter"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "data"(): $MachineAddonController$BaseAddonData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShrinkerBlockEntity$ShrunkAddonData$$Type = ({"silk"?: boolean, "fluid"?: boolean, "yieldCount"?: integer, "data"?: $MachineAddonController$BaseAddonData$$Type, "quarryCount"?: integer, "cropFilter"?: boolean}) | ([silk?: boolean, fluid?: boolean, yieldCount?: integer, data?: $MachineAddonController$BaseAddonData$$Type, quarryCount?: integer, cropFilter?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShrinkerBlockEntity$ShrunkAddonData$$Original = $ShrinkerBlockEntity$ShrunkAddonData;}
declare module "rearth.oritech.block.entity.augmenter.api.Augment$AugmentState" {
import {$Enum} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"

export class $Augment$AugmentState extends $Enum<($Augment$AugmentState)> {
static readonly "DISABLED": $Augment$AugmentState
static readonly "NOT_INSTALLED": $Augment$AugmentState
static readonly "CODEC": $Codec<($Augment$AugmentState)>
static readonly "ENABLED": $Augment$AugmentState

public static "values"(): ($Augment$AugmentState)[]
public static "valueOf"(arg0: StringJS): $Augment$AugmentState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Augment$AugmentState$$Type = (("enabled") | ("disabled") | ("not_installed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Augment$AugmentState$$Original = $Augment$AugmentState;}
declare module "rearth.oritech.block.entity.interaction.LaserArmBlockEntity$HunterTargetMode" {
import {$Enum} from "java.lang.Enum"

export class $LaserArmBlockEntity$HunterTargetMode extends $Enum<($LaserArmBlockEntity$HunterTargetMode)> {
static readonly "ALL": $LaserArmBlockEntity$HunterTargetMode
static readonly "HOSTILE_ONLY": $LaserArmBlockEntity$HunterTargetMode
readonly "message": StringJS
readonly "value": integer
static readonly "HOSTILE_NEUTRAL": $LaserArmBlockEntity$HunterTargetMode

public static "values"(): ($LaserArmBlockEntity$HunterTargetMode)[]
public static "valueOf"(arg0: StringJS): $LaserArmBlockEntity$HunterTargetMode
public "next"(): $LaserArmBlockEntity$HunterTargetMode
public static "fromValue"(arg0: integer): $LaserArmBlockEntity$HunterTargetMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserArmBlockEntity$HunterTargetMode$$Type = (("hostile_only") | ("hostile_neutral") | ("all"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LaserArmBlockEntity$HunterTargetMode$$Original = $LaserArmBlockEntity$HunterTargetMode;}
declare module "rearth.oritech.block.entity.addons.RedstoneAddonBlockEntity$RedstoneControllable" {
import {$ComparatorOutputProvider$$Interface} from "rearth.oritech.util.ComparatorOutputProvider"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidApi$SingleSlotStorage$$Type} from "rearth.oritech.api.fluid.FluidApi$SingleSlotStorage"

export interface $RedstoneAddonBlockEntity$RedstoneControllable$$Interface extends $ComparatorOutputProvider$$Interface {
get "comparatorOutput"(): integer
get "comparatorEnergyAmount"(): integer
get "comparatorProgress"(): integer
get "comparatorActiveState"(): integer
}

export class $RedstoneAddonBlockEntity$RedstoneControllable implements $RedstoneAddonBlockEntity$RedstoneControllable$$Interface {
 "getComparatorOutput"(): integer
 "getComparatorEnergyAmount"(): integer
 "getComparatorSlotAmount"(arg0: integer): integer
 "getComparatorProgress"(): integer
 "getComparatorActiveState"(): integer
 "onRedstoneEvent"(arg0: boolean): void
static "getItemStackComparatorOutput"(arg0: $ItemStack$$Type): integer
static "getFluidStorageComparatorOutput"(arg0: $FluidApi$SingleSlotStorage$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneAddonBlockEntity$RedstoneControllable$$Type = ($RedstoneAddonBlockEntity$RedstoneControllable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneAddonBlockEntity$RedstoneControllable$$Original = $RedstoneAddonBlockEntity$RedstoneControllable;}
declare module "rearth.oritech.block.entity.augmenter.api.Augment" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attachment} from "rearth.oritech.api.attachment.Attachment"
import {$Augment$AugmentState, $Augment$AugmentState$$Type} from "rearth.oritech.block.entity.augmenter.api.Augment$AugmentState"

export class $Augment {
static readonly "ACTIVE_AUGMENTS_DATA": $Attachment<($Map<($ResourceLocation), ($Augment$AugmentState)>)>
readonly "toggleable": boolean
readonly "id": $ResourceLocation

public "refreshClient"(arg0: $Player$$Type): void
public "toggle"(arg0: $Player$$Type): void
public static "registerAttachmentTypes"(): void
public "installToPlayer"(arg0: $Player$$Type): void
public "removeFromPlayer"(arg0: $Player$$Type): void
public "isInstalled"(arg0: $Player$$Type): boolean
public "refreshInterval"(): integer
public "refreshServer"(arg0: $Player$$Type): void
public "isEnabled"(arg0: $Map$$Type<($ResourceLocation$$Type), ($Augment$AugmentState$$Type)>): boolean
public "isEnabled"(arg0: $Player$$Type): boolean
public "activate"(arg0: $Player$$Type): void
public "deactivate"(arg0: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Augment$$Type = ($Augment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Augment$$Original = $Augment;}
declare module "rearth.oritech.block.entity.interaction.LaserArmBlockEntity" {
import {$SyncType$$Type} from "rearth.oritech.api.networking.SyncType"
import {$ColorableMachine$ColorVariant, $ColorableMachine$ColorVariant$$Type} from "rearth.oritech.util.ColorableMachine$ColorVariant"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ScreenProvider$ArrowConfiguration} from "rearth.oritech.util.ScreenProvider$ArrowConfiguration"
import {$ScreenProvider$GuiSlot} from "rearth.oritech.util.ScreenProvider$GuiSlot"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$MultiblockMachineController$$Interface} from "rearth.oritech.util.MultiblockMachineController"
import {$SimpleInventoryStorage} from "rearth.oritech.api.item.containers.SimpleInventoryStorage"
import {$ColorableMachine$$Interface} from "rearth.oritech.util.ColorableMachine"
import {$ExtendedMenuProvider$$Interface} from "dev.architectury.registry.menu.ExtendedMenuProvider"
import {$OritechRecipe} from "rearth.oritech.init.recipes.OritechRecipe"
import {$MachineAddonController$$Interface} from "rearth.oritech.util.MachineAddonController"
import {$GeoBlockEntity$$Interface} from "software.bernie.geckolib.animatable.GeoBlockEntity"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$DynamicEnergyStorage} from "rearth.oritech.api.energy.containers.DynamicEnergyStorage"
import {$FluidApi$SingleSlotStorage$$Type} from "rearth.oritech.api.fluid.FluidApi$SingleSlotStorage"
import {$ItemApi$BlockProvider$$Interface} from "rearth.oritech.api.item.ItemApi$BlockProvider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ArrayList} from "java.util.ArrayList"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$RedstoneAddonBlockEntity$RedstoneControllable$$Interface} from "rearth.oritech.block.entity.addons.RedstoneAddonBlockEntity$RedstoneControllable"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MachineAddonController$AddonBlock, $MachineAddonController$AddonBlock$$Type} from "rearth.oritech.util.MachineAddonController$AddonBlock"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Tuple} from "net.minecraft.util.Tuple"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ScreenProvider$BarConfiguration} from "rearth.oritech.util.ScreenProvider$BarConfiguration"
import {$ItemApi$InventoryStorage} from "rearth.oritech.api.item.ItemApi$InventoryStorage"
import {$MachineAddonController$BaseAddonData, $MachineAddonController$BaseAddonData$$Type} from "rearth.oritech.util.MachineAddonController$BaseAddonData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NetworkedBlockEntity, $NetworkedBlockEntity$$Type} from "rearth.oritech.api.networking.NetworkedBlockEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LaserArmBlockEntity$HunterTargetMode} from "rearth.oritech.block.entity.interaction.LaserArmBlockEntity$HunterTargetMode"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$InventoryInputMode} from "rearth.oritech.util.InventoryInputMode"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Container} from "net.minecraft.world.Container"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ScreenProvider, $ScreenProvider$$Interface} from "rearth.oritech.util.ScreenProvider"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$EnergyApi$BlockProvider$$Interface} from "rearth.oritech.api.energy.EnergyApi$BlockProvider"
import {$WorldPacketCodec} from "rearth.oritech.api.networking.WorldPacketCodec"

export class $LaserArmBlockEntity extends $NetworkedBlockEntity implements $GeoBlockEntity$$Interface, $EnergyApi$BlockProvider$$Interface, $ScreenProvider$$Interface, $ExtendedMenuProvider$$Interface, $MultiblockMachineController$$Interface, $MachineAddonController$$Interface, $ItemApi$BlockProvider$$Interface, $RedstoneAddonBlockEntity$RedstoneControllable$$Interface, $ColorableMachine$$Interface {
 "yieldAddons": integer
static readonly "BLOCK_BREAK_ENERGY": integer
 "hunterTargetMode": $LaserArmBlockEntity$HunterTargetMode
 "hunterAddons": integer
 "hasSilkTouchAddon": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "currentColor": $ColorableMachine$ColorVariant
readonly "inventory": $SimpleInventoryStorage
 "hasCropFilterAddon": boolean
static "LASER_TARGET_PACKET_CODEC": $WorldPacketCodec<($RegistryFriendlyByteBuf), ($LivingEntity)>
 "laserHead": $Vec3
 "lastRenderPosition": $Vec3
 "areaSize": integer

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getEnergyStorage"(arg0: $Direction$$Type): $EnergyApi$EnergyStorage
public "sendUpdate"(arg0: $SyncType$$Type, arg1: $ServerPlayer$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $NetworkedBlockEntity$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "canPassThrough"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type): boolean
public "getLaserHeadPosition"(): $BlockPos
public "energyRequiredToFire"(): integer
public "getLaserPlayerEntity"(): $Player
public "gatherAddonStats"(arg0: $List$$Type<($MachineAddonController$AddonBlock$$Type)>): void
public "getAdditionalStatFromAddon"(arg0: $MachineAddonController$AddonBlock$$Type): void
public "isTargetingAtomicForge"(arg0: $Block$$Type): boolean
public "isTargetingDeepdrill"(arg0: $Block$$Type): boolean
public "isTargetingCatalyst"(arg0: $Block$$Type): boolean
public "getExtraExtensionLabels"(): $List<($Tuple<($Component), ($Component)>)>
public "getDamageTick"(): float
public "setRedstonePowered"(arg0: boolean): void
public "addBlockBreakProgress"(arg0: integer): void
public "getBlockBreakProgress"(): integer
public "getTargetBlockEnergyNeeded"(): integer
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "finishBlockBreaking"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public static "tryGetRecipeOfBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type): $RecipeHolder<($OritechRecipe)>
public "getInventoryStorage"(arg0: $Direction$$Type): $ItemApi$InventoryStorage
public "saveExtraData"(arg0: $FriendlyByteBuf$$Type): void
public "getTickUpdateInterval"(): integer
public "getDefaultCapacity"(): long
public "getDefaultInsertRate"(): long
public "isTargetingUnstableContainer"(arg0: $Block$$Type): boolean
public "setTargetFromDesignator"(arg0: $BlockPos$$Type): boolean
public "cycleHunterTargetMode"(): void
public "getConnectedCores"(): $ArrayList<($BlockPos)>
public "getFacingForMultiblock"(): $Direction
public "getPosForMultiblock"(): $BlockPos
public "getWorldForMultiblock"(): $Level
public "getCoreQuality"(): float
public "setCoreQuality"(arg0: float): void
public "getInventoryForMultiblock"(): $ItemApi$InventoryStorage
public "getEnergyStorageForMultiblock"(arg0: $Direction$$Type): $EnergyApi$EnergyStorage
public "getCorePositions"(): $List<($Vec3i)>
public "getConnectedAddons"(): $List<($BlockPos)>
public "getOpenAddonSlots"(): $List<($BlockPos)>
public "getFacingForAddon"(): $Direction
public "getStorageForAddon"(): $DynamicEnergyStorage
public "getInventoryForAddon"(): $ItemApi$InventoryStorage
public "getScreenProvider"(): $ScreenProvider
public "getAddonSlots"(): $List<($Vec3i)>
public "getBaseAddonData"(): $MachineAddonController$BaseAddonData
public "setBaseAddonData"(arg0: $MachineAddonController$BaseAddonData$$Type): void
public "triggerSetupAnimation"(): void
public "getVisualTarget"(): $Vec3
public "getPosForAddon"(): $BlockPos
public "getWorldForAddon"(): $Level
public "isTargetingEnergyContainer"(): boolean
public "isTargetingBuddingAmethyst"(): boolean
public "getGuiSlots"(): $List<($ScreenProvider$GuiSlot)>
public "getDisplayedEnergyUsage"(): float
public "getInventoryInputMode"(): $InventoryInputMode
public "inputOptionsEnabled"(): boolean
public "getDisplayedInventory"(): $Container
public "getDisplayedEnergyTransfer"(): float
public "getScreenHandlerType"(): $MenuType<(never)>
public "getBlockFacingProperty"(): $Property<($Direction)>
public "getComparatorEnergyAmount"(): integer
public "getComparatorSlotAmount"(arg0: integer): integer
public "getComparatorProgress"(): integer
public "getComparatorActiveState"(): integer
public "hasRedstoneControlAvailable"(): boolean
public "receivedRedstoneSignal"(): integer
public "currentRedstoneEffect"(): StringJS
public "onRedstoneEvent"(arg0: boolean): void
public "getCurrentColor"(): $ColorableMachine$ColorVariant
public "assignColor"(arg0: $ColorableMachine$ColorVariant$$Type): void
public "isFiring"(): boolean
public "showProgress"(): boolean
public "isActive"(arg0: $BlockState$$Type): boolean
public "getDisplayName"(): $Component
public "getCurrentTarget"(): $BlockPos
public "getProgress"(): float
public "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
public "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
public "triggerAnim"(arg0: StringJS, arg1: StringJS): void
public "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
public "getTick"(arg0: any): double
public "showEnergy"(): boolean
public "showArmor"(): boolean
public "showExpansionPanel"(): boolean
public "getEnergyConfiguration"(): $ScreenProvider$BarConfiguration
public "getFluidConfiguration"(): $ScreenProvider$BarConfiguration
public "getWikiLink"(): $Optional<(StringJS)>
public "getIndicatorConfiguration"(): $ScreenProvider$ArrowConfiguration
public "addMultiblockToNbt"(arg0: $CompoundTag$$Type): void
public "loadMultiblockNbtData"(arg0: $CompoundTag$$Type): void
public "tryPlaceNextCore"(arg0: $Player$$Type): boolean
public "initMultiblock"(arg0: $BlockState$$Type): boolean
public "onCoreBroken"(arg0: $BlockPos$$Type): void
public "onControllerBroken"(): void
public "getNextMissingCore"(): $BlockPos
public "writeAddonToNbt"(arg0: $CompoundTag$$Type): void
public "loadAddonNbtData"(arg0: $CompoundTag$$Type): void
public "updateEnergyContainer"(): void
public "getAllAddons"(arg0: $BlockPos$$Type): $List<($MachineAddonController$AddonBlock)>
public "writeAddons"(arg0: $List$$Type<($MachineAddonController$AddonBlock$$Type)>): void
public "initAddons"(arg0: $BlockPos$$Type): void
public "initAddons"(): void
public "resetAddons"(): void
public "getComparatorOutput"(): integer
public "getDefaultColor"(): $ColorableMachine$ColorVariant
public "addColorToNbt"(arg0: $CompoundTag$$Type): void
public "loadColorFromNbt"(arg0: $CompoundTag$$Type): void
public "supportRecoloring"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
public static "getItemStackComparatorOutput"(arg0: $ItemStack$$Type): integer
public static "getFluidStorageComparatorOutput"(arg0: $FluidApi$SingleSlotStorage$$Type): integer
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
get "laserHeadPosition"(): $BlockPos
get "laserPlayerEntity"(): $Player
get "extraExtensionLabels"(): $List<($Tuple<($Component), ($Component)>)>
get "damageTick"(): float
set "redstonePowered"(value: boolean)
get "blockBreakProgress"(): integer
get "targetBlockEnergyNeeded"(): integer
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "tickUpdateInterval"(): integer
get "defaultCapacity"(): long
get "defaultInsertRate"(): long
set "targetFromDesignator"(value: $BlockPos$$Type)
get "connectedCores"(): $ArrayList<($BlockPos)>
get "facingForMultiblock"(): $Direction
get "posForMultiblock"(): $BlockPos
get "worldForMultiblock"(): $Level
get "coreQuality"(): float
set "coreQuality"(value: float)
get "inventoryForMultiblock"(): $ItemApi$InventoryStorage
get "corePositions"(): $List<($Vec3i)>
get "connectedAddons"(): $List<($BlockPos)>
get "openAddonSlots"(): $List<($BlockPos)>
get "facingForAddon"(): $Direction
get "storageForAddon"(): $DynamicEnergyStorage
get "inventoryForAddon"(): $ItemApi$InventoryStorage
get "screenProvider"(): $ScreenProvider
get "addonSlots"(): $List<($Vec3i)>
get "baseAddonData"(): $MachineAddonController$BaseAddonData
set "baseAddonData"(value: $MachineAddonController$BaseAddonData$$Type)
get "visualTarget"(): $Vec3
get "posForAddon"(): $BlockPos
get "worldForAddon"(): $Level
get "targetingEnergyContainer"(): boolean
get "targetingBuddingAmethyst"(): boolean
get "guiSlots"(): $List<($ScreenProvider$GuiSlot)>
get "displayedEnergyUsage"(): float
get "inventoryInputMode"(): $InventoryInputMode
get "displayedInventory"(): $Container
get "displayedEnergyTransfer"(): float
get "screenHandlerType"(): $MenuType<(never)>
get "blockFacingProperty"(): $Property<($Direction)>
get "comparatorEnergyAmount"(): integer
get "comparatorProgress"(): integer
get "comparatorActiveState"(): integer
get "firing"(): boolean
get "displayName"(): $Component
get "currentTarget"(): $BlockPos
get "progress"(): float
get "energyConfiguration"(): $ScreenProvider$BarConfiguration
get "fluidConfiguration"(): $ScreenProvider$BarConfiguration
get "wikiLink"(): $Optional<(StringJS)>
get "indicatorConfiguration"(): $ScreenProvider$ArrowConfiguration
get "nextMissingCore"(): $BlockPos
get "comparatorOutput"(): integer
get "defaultColor"(): $ColorableMachine$ColorVariant
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserArmBlockEntity$$Type = ($LaserArmBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LaserArmBlockEntity$$Original = $LaserArmBlockEntity;}
declare module "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData" {
import {$HashSet} from "java.util.HashSet"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Direction} from "net.minecraft.core.Direction"
import {$SavedData} from "net.minecraft.world.level.saveddata.SavedData"
import {$Set} from "java.util.Set"
import {$SavedData$Factory} from "net.minecraft.world.level.saveddata.SavedData$Factory"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Tuple} from "net.minecraft.util.Tuple"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HashMap} from "java.util.HashMap"

export class $GenericPipeInterfaceEntity$PipeNetworkData extends $SavedData {
readonly "machineInterfaces": $HashMap<($BlockPos), ($Set<($BlockPos)>)>
readonly "pipeNetworkLinks": $HashMap<($BlockPos), (integer)>
readonly "pipeNetworks": $HashMap<(integer), ($Set<($BlockPos)>)>
readonly "machinePipeNeighbors": $HashMap<($BlockPos), ($Set<($Direction)>)>
static "TYPE": $SavedData$Factory<($GenericPipeInterfaceEntity$PipeNetworkData)>
readonly "pipes": $HashSet<($BlockPos)>
readonly "pipeNetworkInterfaces": $HashMap<(integer), ($Set<($Tuple<($BlockPos), ($Direction)>)>)>

constructor()

public static "fromNbt"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public "hashCode"(): integer
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericPipeInterfaceEntity$PipeNetworkData$$Type = ($GenericPipeInterfaceEntity$PipeNetworkData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericPipeInterfaceEntity$PipeNetworkData$$Original = $GenericPipeInterfaceEntity$PipeNetworkData;}
declare module "rearth.oritech.block.entity.addons.AddonBlockEntity" {
import {$HashSet} from "java.util.HashSet"
import {$MachineAddonController} from "rearth.oritech.util.MachineAddonController"
import {$MachineAddonProvider$$Interface} from "rearth.oritech.util.MachineAddonProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AddonBlockEntity extends $BlockEntity implements $MachineAddonProvider$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "pendingInits": $HashSet<($MachineAddonController)>

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "setControllerPos"(arg0: $BlockPos$$Type): void
public "getControllerPos"(): $BlockPos
public static "completeInits"(): void
set "controllerPos"(value: $BlockPos$$Type)
get "controllerPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddonBlockEntity$$Type = ($AddonBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddonBlockEntity$$Original = $AddonBlockEntity;}
