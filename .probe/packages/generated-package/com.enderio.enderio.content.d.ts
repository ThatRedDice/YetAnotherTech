declare module "com.enderio.enderio.content.filters.item.general.EnderItemFilterMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$EnderItemFilterItem$Type, $EnderItemFilterItem$Type$$Type} from "com.enderio.enderio.content.filters.item.general.EnderItemFilterItem$Type"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$EnderItemFilter} from "com.enderio.enderio.content.filters.item.general.EnderItemFilter"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractFilterMenu} from "com.enderio.enderio.content.filters.AbstractFilterMenu"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.enderio.content.filters.AbstractFilterMenu$FilterAccess"
import {$DamageFilterMode, $DamageFilterMode$$Type} from "com.enderio.enderio.content.filters.item.general.DamageFilterMode"

export class $EnderItemFilterMenu extends $AbstractFilterMenu<($EnderItemFilter)> {
static readonly "SHOULD_COMPARE_COMPONENTS_BUTTON_ID": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "BACK_BUTTON_ID": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "type": $EnderItemFilterItem$Type
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "IS_INVERTED_BUTTON_ID": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: $EnderItemFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type, arg4: $AbstractFilterMenu$FilterAccess$$Type)
constructor(arg0: $MenuType$$Type<(never)>, arg1: $EnderItemFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type)

public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "isInverted"(): boolean
public "shouldCompareComponents"(): boolean
public "damageFilterMode"(): $DamageFilterMode
public "setDamageFilterMode"(arg0: $DamageFilterMode$$Type): void
get "inverted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderItemFilterMenu$$Type = ($EnderItemFilterMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderItemFilterMenu$$Original = $EnderItemFilterMenu;}
declare module "com.enderio.enderio.content.filters.soul.EnderSoulFilterItem$Type" {
import {$EnderSoulFilterMenu} from "com.enderio.enderio.content.filters.soul.EnderSoulFilterMenu"
import {$Enum} from "java.lang.Enum"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.enderio.content.filters.AbstractFilterMenu$FilterAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export class $EnderSoulFilterItem$Type extends $Enum<($EnderSoulFilterItem$Type)> {
static readonly "BASIC": $EnderSoulFilterItem$Type

public "canMatchComponents"(): boolean
public "rowCount"(): integer
public "slotCount"(): integer
public static "values"(): ($EnderSoulFilterItem$Type)[]
public static "valueOf"(arg0: StringJS): $EnderSoulFilterItem$Type
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): $EnderSoulFilterMenu
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $AbstractFilterMenu$FilterAccess$$Type): $EnderSoulFilterMenu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSoulFilterItem$Type$$Type = (("basic"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderSoulFilterItem$Type$$Original = $EnderSoulFilterItem$Type;}
declare module "com.enderio.enderio.content.travel.travel_anchor.AnchorTravelTarget" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$NetworkDataSlot$CodecType} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$TravelTarget$$Interface} from "com.enderio.enderio.api.travel.TravelTarget"
import {$TravelTargetSerializer} from "com.enderio.enderio.api.travel.TravelTargetSerializer"
import {$TravelTargetType} from "com.enderio.enderio.api.travel.TravelTargetType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $AnchorTravelTarget extends $Record implements $TravelTarget$$Interface {
static readonly "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($AnchorTravelTarget)>

constructor(pos: $BlockPos$$Type, name: StringJS, icon: $Item$$Type, isVisible: boolean)

public "canTeleportTo"(): boolean
public "canTravelTo"(): boolean
public "withIcon"(arg0: $Item$$Type): $AnchorTravelTarget
public "withVisible"(arg0: boolean): $AnchorTravelTarget
public "item2BlockRange"(): integer
public "block2BlockRange"(): integer
public "canJumpTo"(): boolean
public "name"(): StringJS
public "type"(): $TravelTargetType<(never)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pos"(): $BlockPos
public "icon"(): $Item
public "serializer"(): $TravelTargetSerializer<(never)>
public "withName"(arg0: StringJS): $AnchorTravelTarget
public "isVisible"(): boolean
public "canInteract"(): boolean
public "interact"(arg0: $Level$$Type, arg1: $Player$$Type): boolean
get "visible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnchorTravelTarget$$Type = ({"isVisible"?: boolean, "icon"?: $Item$$Type, "name"?: StringJS, "pos"?: $BlockPos$$Type}) | ([isVisible?: boolean, icon?: $Item$$Type, name?: StringJS, pos?: $BlockPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnchorTravelTarget$$Original = $AnchorTravelTarget;}
declare module "com.enderio.enderio.content.machines.niard.NiardBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoweredMachineBlockEntity} from "com.enderio.enderio.foundation.block.entity.PoweredMachineBlockEntity"
import {$FluidTankUser$$Type, $FluidTankUser$$Interface} from "com.enderio.enderio.foundation.attachment.FluidTankUser"
import {$Direction} from "net.minecraft.core.Direction"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$SingleSlotAccess} from "com.enderio.enderio.foundation.inventory.SingleSlotAccess"
import {$TankAccess, $TankAccess$$Type} from "com.enderio.enderio.foundation.io.fluid.TankAccess"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MachineFluidHandler} from "com.enderio.enderio.foundation.io.fluid.MachineFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MachineFluidTank} from "com.enderio.enderio.foundation.io.fluid.MachineFluidTank"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MachineInventoryLayout} from "com.enderio.enderio.foundation.inventory.MachineInventoryLayout"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ActionRange, $ActionRange$$Type} from "com.enderio.enderio.foundation.attachment.ActionRange"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SideConfig} from "com.enderio.enderio.api.io.SideConfig"
import {$RangedActor$$Interface} from "com.enderio.enderio.foundation.attachment.RangedActor"
import {$MachineBlockEntity} from "com.enderio.enderio.foundation.block.entity.MachineBlockEntity"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$MachineTankLayout} from "com.enderio.enderio.foundation.io.fluid.MachineTankLayout"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$FluidItemInteractive$$Interface} from "com.enderio.enderio.foundation.io.fluid.FluidItemInteractive"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$SoulBindable} from "com.enderio.enderio.api.soul.binding.SoulBindable"

export class $NiardBlockEntity extends $PoweredMachineBlockEntity implements $RangedActor$$Interface, $FluidItemInteractive$$Interface, $FluidTankUser$$Interface {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "FLUID_FILL_OUTPUT": $SingleSlotAccess
static readonly "FLUID_FILL_INPUT": $SingleSlotAccess
static readonly "DATA": StringJS
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($SoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($PoweredMachineBlockEntity), ($Direction), ($IEnergyStorage)>
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>
static readonly "TANK": $TankAccess

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getFluidTank"(): $MachineFluidTank
public "serverTick"(): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getMaxRange"(): integer
public "createInventoryLayout"(): $MachineInventoryLayout
public "getTankLayout"(): $MachineTankLayout
public "getActionRange"(): $ActionRange
public "setActionRange"(arg0: $ActionRange$$Type): void
public "acceptItemDrain"(arg0: $ItemStack$$Type): boolean
public "createFluidHandler"(): $MachineFluidHandler
public "isActive"(): boolean
public "clientTick"(): void
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "getFluidHandler"(): $MachineFluidHandler
public "isRangeVisible"(): boolean
public "setRangeVisible"(arg0: boolean): void
public "increaseRange"(): void
public "decreaseRange"(): void
public "getRange"(): integer
public "handleFluidItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $FluidTankUser$$Type, arg4: $TankAccess$$Type): boolean
public "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
get "fluidTank"(): $MachineFluidTank
get "maxRange"(): integer
get "tankLayout"(): $MachineTankLayout
get "actionRange"(): $ActionRange
set "actionRange"(value: $ActionRange$$Type)
get "active"(): boolean
get "fluidHandler"(): $MachineFluidHandler
get "rangeVisible"(): boolean
set "rangeVisible"(value: boolean)
get "range"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NiardBlockEntity$$Type = ($NiardBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NiardBlockEntity$$Original = $NiardBlockEntity;}
declare module "com.enderio.enderio.content.travel.travel_anchor.AnchorTravelTarget$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TravelTargetSerializer$$Interface} from "com.enderio.enderio.api.travel.TravelTargetSerializer"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AnchorTravelTarget} from "com.enderio.enderio.content.travel.travel_anchor.AnchorTravelTarget"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AnchorTravelTarget$Serializer implements $TravelTargetSerializer$$Interface<($AnchorTravelTarget)> {
static readonly "CODEC": $MapCodec<($AnchorTravelTarget)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AnchorTravelTarget)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AnchorTravelTarget)>
public "codec"(): $MapCodec<($AnchorTravelTarget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnchorTravelTarget$Serializer$$Type = ($AnchorTravelTarget$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnchorTravelTarget$Serializer$$Original = $AnchorTravelTarget$Serializer;}
declare module "com.enderio.enderio.content.paint.item.PaintedBlockItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $PaintedBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

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
export type $PaintedBlockItem$$Type = ($PaintedBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedBlockItem$$Original = $PaintedBlockItem;}
declare module "com.enderio.enderio.content.storage.fluid_tank.TankRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TankRecipe$Mode, $TankRecipe$Mode$$Type} from "com.enderio.enderio.content.storage.fluid_tank.TankRecipe$Mode"
import {$TankRecipe$Input, $TankRecipe$Input$$Type} from "com.enderio.enderio.content.storage.fluid_tank.TankRecipe$Input"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SizedFluidIngredient, $SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $TankRecipe extends $Record implements $Recipe$$Interface<($TankRecipe$Input)> {
constructor(input: $Ingredient$$Type, output: $ItemStack$$Type, fluid: $SizedFluidIngredient$$Type, mode: $TankRecipe$Mode$$Type)

public "fluid"(): $SizedFluidIngredient
public "assemble"(arg0: $TankRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "output"(): $ItemStack
public "mode"(): $TankRecipe$Mode
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $TankRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "input"(): $Ingredient
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $TankRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$$Type = ({"output"?: $ItemStack$$Type, "input"?: $Ingredient$$Type, "mode"?: $TankRecipe$Mode$$Type, "fluid"?: $SizedFluidIngredient$$Type}) | ([output?: $ItemStack$$Type, input?: $Ingredient$$Type, mode?: $TankRecipe$Mode$$Type, fluid?: $SizedFluidIngredient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankRecipe$$Original = $TankRecipe;}
declare module "com.enderio.enderio.content.tools.coordinate_selector.CoordinateSelectorItem" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $CoordinateSelectorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoordinateSelectorItem$$Type = ($CoordinateSelectorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CoordinateSelectorItem$$Original = $CoordinateSelectorItem;}
declare module "com.enderio.enderio.content.machines.capacitor_bank.CapacitorBankItem" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$CapacitorBankBlock$$Type} from "com.enderio.enderio.content.machines.capacitor_bank.CapacitorBankBlock"

export class $CapacitorBankItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $CapacitorBankBlock$$Type, arg1: $Item$Properties$$Type)

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
export type $CapacitorBankItem$$Type = ($CapacitorBankItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacitorBankItem$$Original = $CapacitorBankItem;}
declare module "com.enderio.enderio.content.paint.block.PaintedCraftingTableBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$CraftingTableBlock} from "net.minecraft.world.level.block.CraftingTableBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PaintedCraftingTableBlock extends $CraftingTableBlock implements $EntityBlock$$Interface, $PaintedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CraftingTableBlock)>
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

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedCraftingTableBlock$$Type = ($PaintedCraftingTableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedCraftingTableBlock$$Original = $PaintedCraftingTableBlock;}
declare module "com.enderio.enderio.content.cold_fire.ColdFireBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$FireBlock} from "net.minecraft.world.level.block.FireBlock"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ColdFireBlock extends $FireBlock {
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "AGE": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FireBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getStateWithAge"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: integer): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColdFireBlock$$Type = ($ColdFireBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColdFireBlock$$Original = $ColdFireBlock;}
declare module "com.enderio.enderio.content.enderface.EnderfaceTravelTarget$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TravelTargetSerializer$$Interface} from "com.enderio.enderio.api.travel.TravelTargetSerializer"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EnderfaceTravelTarget} from "com.enderio.enderio.content.enderface.EnderfaceTravelTarget"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $EnderfaceTravelTarget$Serializer implements $TravelTargetSerializer$$Interface<($EnderfaceTravelTarget)> {
static "CODEC": $MapCodec<($EnderfaceTravelTarget)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnderfaceTravelTarget)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EnderfaceTravelTarget)>
public "codec"(): $MapCodec<($EnderfaceTravelTarget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderfaceTravelTarget$Serializer$$Type = ($EnderfaceTravelTarget$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderfaceTravelTarget$Serializer$$Original = $EnderfaceTravelTarget$Serializer;}
declare module "com.enderio.enderio.content.glass.GlassIdentifier" {
import {$GlassLighting, $GlassLighting$$Type} from "com.enderio.enderio.content.glass.GlassLighting"
import {$GlassCollisionPredicate, $GlassCollisionPredicate$$Type} from "com.enderio.enderio.content.glass.GlassCollisionPredicate"
import {$Record} from "java.lang.Record"

export class $GlassIdentifier extends $Record {
constructor(lighting: $GlassLighting$$Type, collisionPredicate: $GlassCollisionPredicate$$Type, explosionResistance: boolean)

public "explosionResistance"(): boolean
public "collisionPredicate"(): $GlassCollisionPredicate
public "withoutLight"(): $GlassIdentifier
public "withCollision"(arg0: $GlassCollisionPredicate$$Type): $GlassIdentifier
public "glassName"(): StringJS
public "lighting"(): $GlassLighting
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassIdentifier$$Type = ({"explosionResistance"?: boolean, "lighting"?: $GlassLighting$$Type, "collisionPredicate"?: $GlassCollisionPredicate$$Type}) | ([explosionResistance?: boolean, lighting?: $GlassLighting$$Type, collisionPredicate?: $GlassCollisionPredicate$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlassIdentifier$$Original = $GlassIdentifier;}
declare module "com.enderio.enderio.content.tools.LevitationStaffItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$IFluidHandlerItem} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$PoweredToggledItem} from "com.enderio.enderio.content.tools.PoweredToggledItem"

export class $LevitationStaffItem extends $PoweredToggledItem {
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IFluidHandlerItem)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getMaxEnergy"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevitationStaffItem$$Type = ($LevitationStaffItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevitationStaffItem$$Original = $LevitationStaffItem;}
declare module "com.enderio.enderio.content.armory.IDarkSteelItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$AdvancedTooltipProvider$$Interface} from "com.enderio.core.client.item.AdvancedTooltipProvider"

export interface $IDarkSteelItem$$Interface extends $AdvancedTooltipProvider$$Interface {
}

export class $IDarkSteelItem implements $IDarkSteelItem$$Interface {
 "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addDurabilityTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "isDurabilityBarVisible"(arg0: $ItemStack$$Type): boolean
 "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDarkSteelItem$$Type = ($IDarkSteelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDarkSteelItem$$Original = $IDarkSteelItem;}
declare module "com.enderio.enderio.content.conduits.type.energy.EnergyConduitConnectionConfig" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ConduitRedstoneSignalAware$$Type} from "com.enderio.enderio.api.conduits.ConduitRedstoneSignalAware"
import {$List} from "java.util.List"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$RedstoneSensitiveConnectionConfig$$Interface} from "com.enderio.enderio.api.conduits.connection.config.RedstoneSensitiveConnectionConfig"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$IOConnectionConfig$$Interface} from "com.enderio.enderio.api.conduits.connection.config.IOConnectionConfig"
import {$Record} from "java.lang.Record"

export class $EnergyConduitConnectionConfig extends $Record implements $IOConnectionConfig$$Interface, $RedstoneSensitiveConnectionConfig$$Interface {
static readonly "CODEC": $MapCodec<($EnergyConduitConnectionConfig)>
static readonly "TYPE": $ConnectionConfigType<($EnergyConduitConnectionConfig)>
static readonly "DEFAULT": $EnergyConduitConnectionConfig
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($EnergyConduitConnectionConfig)>

constructor(isInsert: boolean, isExtract: boolean, extractRedstoneControl: $RedstoneControl$$Type, extractRedstoneChannel: $DyeColor$$Type, priority: integer)

public "canExtract"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "disconnected"(): $ConnectionConfig
public "canInsert"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "extractChannel"(): $DyeColor
public "reconnected"(): $ConnectionConfig
public "isInsert"(): boolean
public "isExtract"(): boolean
public "insertChannel"(): $DyeColor
public "withIsInsert"(arg0: boolean): $EnergyConduitConnectionConfig
public "withIsExtract"(arg0: boolean): $EnergyConduitConnectionConfig
public "withExtractRedstoneControl"(arg0: $RedstoneControl$$Type): $EnergyConduitConnectionConfig
public "extractRedstoneControl"(): $RedstoneControl
public "withExtractRedstoneChannel"(arg0: $DyeColor$$Type): $EnergyConduitConnectionConfig
public "extractRedstoneChannel"(): $DyeColor
public "withPriority"(arg0: integer): $EnergyConduitConnectionConfig
public "getRedstoneSignalColors"(): $List<($DyeColor)>
public "priority"(): integer
public "type"(): $ConnectionConfigType<(never)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isConnected"(): boolean
get "insert"(): boolean
get "extract"(): boolean
get "redstoneSignalColors"(): $List<($DyeColor)>
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyConduitConnectionConfig$$Type = ({"isExtract"?: boolean, "extractRedstoneChannel"?: $DyeColor$$Type, "extractRedstoneControl"?: $RedstoneControl$$Type, "priority"?: integer, "isInsert"?: boolean}) | ([isExtract?: boolean, extractRedstoneChannel?: $DyeColor$$Type, extractRedstoneControl?: $RedstoneControl$$Type, priority?: integer, isInsert?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyConduitConnectionConfig$$Original = $EnergyConduitConnectionConfig;}
declare module "com.enderio.enderio.content.machines.block_detector.BlockDetectorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$DirectionalBlock} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockDetectorBlock extends $DirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockDetectorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDetectorBlock$$Type = ($BlockDetectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockDetectorBlock$$Original = $BlockDetectorBlock;}
declare module "com.enderio.enderio.content.machines.obelisks.weather.WeatherChangeRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$WeatherChangeRecipe$WeatherMode, $WeatherChangeRecipe$WeatherMode$$Type} from "com.enderio.enderio.content.machines.obelisks.weather.WeatherChangeRecipe$WeatherMode"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineRecipe$$Interface} from "com.enderio.enderio.foundation.MachineRecipe"
import {$WeatherChangeRecipe$Input, $WeatherChangeRecipe$Input$$Type} from "com.enderio.enderio.content.machines.obelisks.weather.WeatherChangeRecipe$Input"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$OutputStack} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Record} from "java.lang.Record"

export class $WeatherChangeRecipe extends $Record implements $MachineRecipe$$Interface<($WeatherChangeRecipe$Input)> {
constructor(fluid: $FluidStack$$Type, mode: $WeatherChangeRecipe$WeatherMode$$Type)

public "fluid"(): $FluidStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List
public "craft"(arg0: $WeatherChangeRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "mode"(): $WeatherChangeRecipe$WeatherMode
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $WeatherChangeRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $WeatherChangeRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getEnergyCost"(arg0: $WeatherChangeRecipe$Input$$Type): integer
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $WeatherChangeRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "baseEnergyCost"(): integer
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeatherChangeRecipe$$Type = ({"mode"?: $WeatherChangeRecipe$WeatherMode$$Type, "fluid"?: $FluidStack$$Type}) | ([mode?: $WeatherChangeRecipe$WeatherMode$$Type, fluid?: $FluidStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeatherChangeRecipe$$Original = $WeatherChangeRecipe;}
declare module "com.enderio.enderio.content.tools.vials.SoulVialItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PlayerInteractEvent$EntityInteractSpecific$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Soul$$Type} from "com.enderio.enderio.api.soul.Soul"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AdvancedTooltipProvider$$Interface} from "com.enderio.core.client.item.AdvancedTooltipProvider"
import {$FMLCommonSetupEvent$$Type} from "net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent"

export class $SoulVialItem extends $Item implements $AdvancedTooltipProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "FILLED_MODEL_PROPERTY": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "KEY_HEALTH": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$$Type): boolean
public static "getAllFilled"(): $List<($ItemStack)>
public static "forSoul"(arg0: $Soul$$Type): $ItemStack
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "onLivingInteract"(arg0: $PlayerInteractEvent$EntityInteractSpecific$$Type): void
public static "onCommonSetup"(arg0: $FMLCommonSetupEvent$$Type): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static get "allFilled"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulVialItem$$Type = ($SoulVialItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulVialItem$$Original = $SoulVialItem;}
declare module "com.enderio.enderio.content.machines.niard.NiardBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$NiardBlockEntity} from "com.enderio.enderio.content.machines.niard.NiardBlockEntity"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$ProgressMachineBlock} from "com.enderio.enderio.foundation.block.ProgressMachineBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $NiardBlock extends $ProgressMachineBlock<($NiardBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NiardBlock$$Type = ($NiardBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NiardBlock$$Original = $NiardBlock;}
declare module "com.enderio.enderio.content.paint.block.entity.PaintedBlockEntity" {
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$Optional} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Set} from "java.util.Set"

export interface $PaintedBlockEntity$$Interface {
get "secondaryPaint"(): $Optional<($Block)>
set "secondaryPaint"(value: $Block$$Type)
get "primaryPaint"(): $Optional<($Block)>
set "primaryPaint"(value: $Block$$Type)
}

export class $PaintedBlockEntity implements $PaintedBlockEntity$$Interface {
static readonly "PAINT_DATA_PROPERTIES": $Set<($ModelProperty<($Block)>)>

 "hasSecondaryPaint"(): boolean
 "getSecondaryPaint"(): $Optional<($Block)>
 "setSecondaryPaint"(arg0: $Block$$Type): void
 "getPrimaryPaint"(): $Optional<($Block)>
 "setPrimaryPaint"(arg0: $Block$$Type): void
static "createAndRegisterModelProperty"(): $ModelProperty<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedBlockEntity$$Type = ($PaintedBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedBlockEntity$$Original = $PaintedBlockEntity;}
declare module "com.enderio.enderio.content.capacitors.CapacitorItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $CapacitorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacitorItem$$Type = ($CapacitorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacitorItem$$Original = $CapacitorItem;}
declare module "com.enderio.enderio.content.enderface.EnderfaceBlockEntity" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EIOBlockEntity} from "com.enderio.enderio.foundation.block.EIOBlockEntity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderfaceBlockEntity extends $EIOBlockEntity {
static readonly "DATA": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "canBeUsedByPlayer"(arg0: $Player$$Type): boolean
public "getLastUiPitch"(): float
public "getLastUiYaw"(): float
public "getLastUiDistance"(): float
public "setLastUiPitch"(arg0: float): void
public "setLastUiYaw"(arg0: float): void
public "setLastUiDistance"(arg0: float): void
public static "canPlayerInteractWithBlock"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
get "lastUiPitch"(): float
get "lastUiYaw"(): float
get "lastUiDistance"(): float
set "lastUiPitch"(value: float)
set "lastUiYaw"(value: float)
set "lastUiDistance"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderfaceBlockEntity$$Type = ($EnderfaceBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderfaceBlockEntity$$Original = $EnderfaceBlockEntity;}
declare module "com.enderio.enderio.content.paint.block.PaintedTrapDoorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$TrapDoorBlock} from "net.minecraft.world.level.block.TrapDoorBlock"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PaintedTrapDoorBlock extends $TrapDoorBlock implements $EntityBlock$$Interface, $PaintedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TrapDoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedTrapDoorBlock$$Type = ($PaintedTrapDoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedTrapDoorBlock$$Original = $PaintedTrapDoorBlock;}
declare module "com.enderio.enderio.content.machines.alloy.AlloySmeltingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineRecipe$$Interface} from "com.enderio.enderio.foundation.MachineRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$AlloySmeltingRecipe$Input, $AlloySmeltingRecipe$Input$$Type} from "com.enderio.enderio.content.machines.alloy.AlloySmeltingRecipe$Input"
import {$OutputStack} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $AlloySmeltingRecipe implements $MachineRecipe$$Interface<($AlloySmeltingRecipe$Input)> {
constructor(arg0: $List$$Type<($SizedIngredient$$Type)>, arg1: $ItemStack$$Type, arg2: integer, arg3: float)
constructor(arg0: $List$$Type<($SizedIngredient$$Type)>, arg1: $ItemStack$$Type, arg2: integer, arg3: float, arg4: boolean)

public "energy"(): integer
public "experience"(): float
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "craft"(arg0: $AlloySmeltingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List
public "isSmelting"(): boolean
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "output"(): $ItemStack
public "inputs"(): $List<($SizedIngredient)>
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $AlloySmeltingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $AlloySmeltingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getEnergyCost"(arg0: $AlloySmeltingRecipe$Input$$Type): integer
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $AlloySmeltingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "smelting"(): boolean
get "baseEnergyCost"(): integer
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloySmeltingRecipe$$Type = ($AlloySmeltingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlloySmeltingRecipe$$Original = $AlloySmeltingRecipe;}
declare module "com.enderio.enderio.content.filters.AbstractFilterItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$FilterMenuProvider, $FilterMenuProvider$$Interface} from "com.enderio.enderio.api.filter.FilterMenuProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $AbstractFilterItem<T> extends $Item implements $FilterMenuProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "FILTER_MENU_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($FilterMenuProvider)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "openMenu"(arg0: $ServerPlayer$$Type, arg1: $IItemHandlerModifiable$$Type, arg2: integer, arg3: $Runnable$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFilterItem$$Type<T> = ($AbstractFilterItem<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFilterItem$$Original<T> = $AbstractFilterItem<(T)>;}
declare module "com.enderio.enderio.content.tools.hang_glider.HangGliderItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $HangGliderItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangGliderItem$$Type = ($HangGliderItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HangGliderItem$$Original = $HangGliderItem;}
declare module "com.enderio.enderio.content.machines.soul_binder.SoulBindingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$FluidRecipeInput$$Interface} from "com.enderio.enderio.foundation.recipe.FluidRecipeInput"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Record} from "java.lang.Record"

export class $SoulBindingRecipe$Input extends $Record implements $FluidRecipeInput$$Interface {
constructor(boundSoulItem: $ItemStack$$Type, itemToBind: $ItemStack$$Type, experience: $FluidStack$$Type)

public "getFluid"(arg0: integer): $FluidStack
public "experience"(): $FluidStack
public "boundSoulItem"(): $ItemStack
public "itemToBind"(): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindingRecipe$Input$$Type = ({"itemToBind"?: $ItemStack$$Type, "boundSoulItem"?: $ItemStack$$Type, "experience"?: $FluidStack$$Type}) | ([itemToBind?: $ItemStack$$Type, boundSoulItem?: $ItemStack$$Type, experience?: $FluidStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulBindingRecipe$Input$$Original = $SoulBindingRecipe$Input;}
declare module "com.enderio.enderio.content.misc_blocks.IndustrialInsulationBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SpongeBlock} from "net.minecraft.world.level.block.SpongeBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $IndustrialInsulationBlock extends $SpongeBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SpongeBlock)>
static readonly "MAX_COUNT": integer
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MAX_DEPTH": integer
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialInsulationBlock$$Type = ($IndustrialInsulationBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IndustrialInsulationBlock$$Original = $IndustrialInsulationBlock;}
declare module "com.enderio.enderio.content.machines.vat.FermentingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Record} from "java.lang.Record"

export class $FermentingRecipe$Input extends $Record implements $RecipeInput$$Interface {
constructor(firstReagent: $ItemStack$$Type, secondReagent: $ItemStack$$Type, inputFluid: $FluidStack$$Type)

public "firstReagent"(): $ItemStack
public "secondReagent"(): $ItemStack
public "inputFluid"(): $FluidStack
public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermentingRecipe$Input$$Type = ({"firstReagent"?: $ItemStack$$Type, "secondReagent"?: $ItemStack$$Type, "inputFluid"?: $FluidStack$$Type}) | ([firstReagent?: $ItemStack$$Type, secondReagent?: $ItemStack$$Type, inputFluid?: $FluidStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FermentingRecipe$Input$$Original = $FermentingRecipe$Input;}
declare module "com.enderio.enderio.content.machines.slicer.SlicingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $SlicingRecipe$Input extends $Record implements $RecipeInput$$Interface {
constructor(inputs: $List$$Type<($ItemStack$$Type)>)

public "getItem"(arg0: integer): $ItemStack
public "inputs"(): $List<($ItemStack)>
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicingRecipe$Input$$Type = ({"inputs"?: $List$$Type<($ItemStack$$Type)>}) | ([inputs?: $List$$Type<($ItemStack$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlicingRecipe$Input$$Original = $SlicingRecipe$Input;}
declare module "com.enderio.enderio.content.tools.hang_glider.UseGliderTrigger" {
import {$UseGliderTrigger$TriggerInstance} from "com.enderio.enderio.content.tools.hang_glider.UseGliderTrigger$TriggerInstance"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $UseGliderTrigger extends $SimpleCriterionTrigger<($UseGliderTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type): void
public "getId"(): $ResourceLocation
public "codec"(): $Codec<($UseGliderTrigger$TriggerInstance)>
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseGliderTrigger$$Type = ($UseGliderTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseGliderTrigger$$Original = $UseGliderTrigger;}
declare module "com.enderio.enderio.content.filters.item.general.EnderItemFilter" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$DamageFilterMode, $DamageFilterMode$$Type} from "com.enderio.enderio.content.filters.item.general.DamageFilterMode"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$ItemFilter$$Interface} from "com.enderio.enderio.api.filter.ItemFilter"
import {$Record} from "java.lang.Record"

export class $EnderItemFilter extends $Record implements $ItemFilter$$Interface {
static readonly "CODEC": $Codec<($EnderItemFilter)>
static readonly "EMPTY": $EnderItemFilter
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnderItemFilter)>

constructor(arg0: integer)
constructor(arg0: integer, arg1: boolean, arg2: boolean, arg3: $DamageFilterMode$$Type)
constructor(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean, arg3: $DamageFilterMode$$Type)
constructor(matches: $NonNullList$$Type<($ItemStack$$Type)>, isDenyList: boolean, shouldCompareComponents: boolean, damageFilterMode: $DamageFilterMode$$Type)

public "isDenyList"(): boolean
public "shouldCompareComponents"(): boolean
public "damageFilterMode"(): $DamageFilterMode
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $IItemHandler$$Type, arg1: $ItemStack$$Type): $ItemStack
public "matches"(): $NonNullList<($ItemStack)>
get "denyList"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderItemFilter$$Type = ({"shouldCompareComponents"?: boolean, "damageFilterMode"?: $DamageFilterMode$$Type, "matches"?: $NonNullList$$Type<($ItemStack$$Type)>, "isDenyList"?: boolean}) | ([shouldCompareComponents?: boolean, damageFilterMode?: $DamageFilterMode$$Type, matches?: $NonNullList$$Type<($ItemStack$$Type)>, isDenyList?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderItemFilter$$Original = $EnderItemFilter;}
declare module "com.enderio.enderio.content.filters.redstone.RedstoneFilterItem$Type" {
import {$UnaryOperator} from "java.util.function.UnaryOperator"
import {$Enum} from "java.lang.Enum"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Item$Properties} from "net.minecraft.world.item.Item$Properties"

export class $RedstoneFilterItem$Type extends $Enum<($RedstoneFilterItem$Type)> {
static readonly "NOR": $RedstoneFilterItem$Type
static readonly "XNOR": $RedstoneFilterItem$Type
static readonly "NOT": $RedstoneFilterItem$Type
static readonly "OR": $RedstoneFilterItem$Type
static readonly "TLATCH": $RedstoneFilterItem$Type
static readonly "AND": $RedstoneFilterItem$Type
static readonly "TIMER": $RedstoneFilterItem$Type
static readonly "SENSOR": $RedstoneFilterItem$Type
static readonly "XOR": $RedstoneFilterItem$Type
static readonly "COUNT": $RedstoneFilterItem$Type
static readonly "NAND": $RedstoneFilterItem$Type

public "componentApplicator"(): $UnaryOperator<($Item$Properties)>
public static "values"(): ($RedstoneFilterItem$Type)[]
public static "valueOf"(arg0: StringJS): $RedstoneFilterItem$Type
public "menu"(): $MenuType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneFilterItem$Type$$Type = (("not") | ("or") | ("and") | ("nor") | ("nand") | ("xor") | ("xnor") | ("tlatch") | ("count") | ("sensor") | ("timer"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneFilterItem$Type$$Original = $RedstoneFilterItem$Type;}
declare module "com.enderio.enderio.content.tools.YetaWrenchItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $YetaWrenchItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YetaWrenchItem$$Type = ($YetaWrenchItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $YetaWrenchItem$$Original = $YetaWrenchItem;}
declare module "com.enderio.enderio.content.conduits.bundle.ConduitBundleBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"

export class $ConduitBundleBlock extends $Block implements $EntityBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBundleBlock$$Type = ($ConduitBundleBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitBundleBlock$$Original = $ConduitBundleBlock;}
declare module "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe$BonusType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"

export class $SagMillingRecipe$BonusType extends $Enum<($SagMillingRecipe$BonusType)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($SagMillingRecipe$BonusType)>
static readonly "MULTIPLY_OUTPUT": $SagMillingRecipe$BonusType
static readonly "BY_ID": $IntFunction<($SagMillingRecipe$BonusType)>
static readonly "CHANCE_ONLY": $SagMillingRecipe$BonusType
static readonly "NONE": $SagMillingRecipe$BonusType
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($SagMillingRecipe$BonusType)>

public "useGrindingBall"(): boolean
public "canMultiply"(): boolean
public "doChance"(): boolean
public static "values"(): ($SagMillingRecipe$BonusType)[]
public static "valueOf"(arg0: StringJS): $SagMillingRecipe$BonusType
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$BonusType$$Type = (("none") | ("multiply_output") | ("chance_only"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SagMillingRecipe$BonusType$$Original = $SagMillingRecipe$BonusType;}
declare module "com.enderio.enderio.content.conduits.type.item.ItemConduitConnectionConfig" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ConduitRedstoneSignalAware$$Type} from "com.enderio.enderio.api.conduits.ConduitRedstoneSignalAware"
import {$List} from "java.util.List"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$RedstoneSensitiveConnectionConfig$$Interface} from "com.enderio.enderio.api.conduits.connection.config.RedstoneSensitiveConnectionConfig"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$IOConnectionConfig$$Interface} from "com.enderio.enderio.api.conduits.connection.config.IOConnectionConfig"
import {$Record} from "java.lang.Record"

export class $ItemConduitConnectionConfig extends $Record implements $IOConnectionConfig$$Interface, $RedstoneSensitiveConnectionConfig$$Interface {
static readonly "CODEC": $MapCodec<($ItemConduitConnectionConfig)>
static readonly "TYPE": $ConnectionConfigType<($ItemConduitConnectionConfig)>
static readonly "DEFAULT": $ItemConduitConnectionConfig
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ItemConduitConnectionConfig)>

constructor(isInsert: boolean, insertChannel: $DyeColor$$Type, isExtract: boolean, extractChannel: $DyeColor$$Type, extractRedstoneControl: $RedstoneControl$$Type, extractRedstoneChannel: $DyeColor$$Type, isRoundRobin: boolean, isSelfFeed: boolean, priority: integer)

public "canExtract"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "disconnected"(): $ConnectionConfig
public "canInsert"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "extractChannel"(): $DyeColor
public "reconnected"(): $ConnectionConfig
public "isInsert"(): boolean
public "isExtract"(): boolean
public "insertChannel"(): $DyeColor
public "withIsInsert"(arg0: boolean): $ItemConduitConnectionConfig
public "withIsExtract"(arg0: boolean): $ItemConduitConnectionConfig
public "isSelfFeed"(): boolean
public "withIsSelfFeed"(arg0: boolean): $ItemConduitConnectionConfig
public "withIsRoundRobin"(arg0: boolean): $ItemConduitConnectionConfig
public "isRoundRobin"(): boolean
public "withExtractRedstoneControl"(arg0: $RedstoneControl$$Type): $ItemConduitConnectionConfig
public "extractRedstoneControl"(): $RedstoneControl
public "withExtractRedstoneChannel"(arg0: $DyeColor$$Type): $ItemConduitConnectionConfig
public "extractRedstoneChannel"(): $DyeColor
public "withPriority"(arg0: integer): $ItemConduitConnectionConfig
public "withExtractChannel"(arg0: $DyeColor$$Type): $ItemConduitConnectionConfig
public "withInsertChannel"(arg0: $DyeColor$$Type): $ItemConduitConnectionConfig
public "getRedstoneSignalColors"(): $List<($DyeColor)>
public "priority"(): integer
public "type"(): $ConnectionConfigType<($ItemConduitConnectionConfig)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isConnected"(): boolean
get "insert"(): boolean
get "extract"(): boolean
get "selfFeed"(): boolean
get "roundRobin"(): boolean
get "redstoneSignalColors"(): $List<($DyeColor)>
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemConduitConnectionConfig$$Type = ({"isSelfFeed"?: boolean, "extractRedstoneChannel"?: $DyeColor$$Type, "priority"?: integer, "extractRedstoneControl"?: $RedstoneControl$$Type, "extractChannel"?: $DyeColor$$Type, "insertChannel"?: $DyeColor$$Type, "isExtract"?: boolean, "isInsert"?: boolean, "isRoundRobin"?: boolean}) | ([isSelfFeed?: boolean, extractRedstoneChannel?: $DyeColor$$Type, priority?: integer, extractRedstoneControl?: $RedstoneControl$$Type, extractChannel?: $DyeColor$$Type, insertChannel?: $DyeColor$$Type, isExtract?: boolean, isInsert?: boolean, isRoundRobin?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemConduitConnectionConfig$$Original = $ItemConduitConnectionConfig;}
declare module "com.enderio.enderio.content.machines.obelisks.weather.WeatherChangeRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$WeatherChangeRecipe} from "com.enderio.enderio.content.machines.obelisks.weather.WeatherChangeRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $WeatherChangeRecipe$Serializer implements $RecipeSerializer$$Interface<($WeatherChangeRecipe)> {
static readonly "CODEC": $MapCodec<($WeatherChangeRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($WeatherChangeRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($WeatherChangeRecipe)>
public "codec"(): $MapCodec<($WeatherChangeRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeatherChangeRecipe$Serializer$$Type = ($WeatherChangeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeatherChangeRecipe$Serializer$$Original = $WeatherChangeRecipe$Serializer;}
declare module "com.enderio.enderio.content.machines.vat.FermentingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SizedFluidIngredient, $SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineRecipe$$Interface} from "com.enderio.enderio.foundation.MachineRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$OutputStack} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$FermentingRecipe$Input, $FermentingRecipe$Input$$Type} from "com.enderio.enderio.content.machines.vat.FermentingRecipe$Input"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Record} from "java.lang.Record"

export class $FermentingRecipe extends $Record implements $MachineRecipe$$Interface<($FermentingRecipe$Input)> {
constructor(input: $SizedFluidIngredient$$Type, firstReagent: $TagKey$$Type<($Item)>, secondReagent: $TagKey$$Type<($Item)>, output: $FluidStack$$Type, ticks: integer)

public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List
public "craft"(arg0: $FermentingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "firstReagent"(): $TagKey<($Item)>
public "secondReagent"(): $TagKey<($Item)>
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "output"(): $FluidStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $FermentingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "input"(): $SizedFluidIngredient
public "ticks"(): integer
public static "getModifier"(arg0: $ItemStack$$Type, arg1: $TagKey$$Type<($Item)>): double
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $FermentingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getEnergyCost"(arg0: $FermentingRecipe$Input$$Type): integer
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $FermentingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "baseEnergyCost"(): integer
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermentingRecipe$$Type = ({"firstReagent"?: $TagKey$$Type<($Item)>, "input"?: $SizedFluidIngredient$$Type, "ticks"?: integer, "output"?: $FluidStack$$Type, "secondReagent"?: $TagKey$$Type<($Item)>}) | ([firstReagent?: $TagKey$$Type<($Item)>, input?: $SizedFluidIngredient$$Type, ticks?: integer, output?: $FluidStack$$Type, secondReagent?: $TagKey$$Type<($Item)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FermentingRecipe$$Original = $FermentingRecipe;}
declare module "com.enderio.enderio.content.machines.solar_panel.SolarPanelBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ISolarPanelTier$$Type} from "com.enderio.enderio.content.machines.solar_panel.ISolarPanelTier"
import {$LegacyMachineBlockEntity, $LegacyMachineBlockEntity$$Type} from "com.enderio.enderio.foundation.block.entity.legacy.LegacyMachineBlockEntity"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Codec} from "com.mojang.serialization.Codec"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$LegacyMachineBlock} from "com.enderio.enderio.foundation.block.legacy.LegacyMachineBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$AdvancedTooltipProvider$$Interface} from "com.enderio.core.client.item.AdvancedTooltipProvider"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SolarPanelBlock extends $LegacyMachineBlock implements $AdvancedTooltipProvider$$Interface {
static readonly "WEST": $BooleanProperty
static readonly "BLOCK_ENTITY_TYPE_CODEC": $Codec<($Supplier<($BlockEntityType<($LegacyMachineBlockEntity)>)>)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "NORTH_WEST": $BooleanProperty
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "NORTH_EAST": $BooleanProperty
static readonly "INSTANT": float
static readonly "SOUTH_EAST": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "SOUTH_WEST": $BooleanProperty
static readonly "FACING": $DirectionProperty

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<($LegacyMachineBlockEntity$$Type)>)>, arg1: $BlockBehaviour$Properties$$Type, arg2: $ISolarPanelTier$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolarPanelBlock$$Type = ($SolarPanelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SolarPanelBlock$$Original = $SolarPanelBlock;}
declare module "com.enderio.enderio.content.filters.soul.EnderSoulFilterItem" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FilterMenuProvider} from "com.enderio.enderio.api.filter.FilterMenuProvider"
import {$AbstractFilterItem} from "com.enderio.enderio.content.filters.AbstractFilterItem"
import {$EnderSoulFilterItem$Type$$Type} from "com.enderio.enderio.content.filters.soul.EnderSoulFilterItem$Type"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SoulFilter} from "com.enderio.enderio.api.filter.SoulFilter"
import {$EnderSoulFilter} from "com.enderio.enderio.content.filters.soul.EnderSoulFilter"

export class $EnderSoulFilterItem extends $AbstractFilterItem<($EnderSoulFilter)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "ENTITY_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($SoulFilter)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "FILTER_MENU_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($FilterMenuProvider)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $EnderSoulFilterItem$Type$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSoulFilterItem$$Type = ($EnderSoulFilterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderSoulFilterItem$$Original = $EnderSoulFilterItem;}
declare module "com.enderio.enderio.content.machines.wireless_charger.WirelessAntennaBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $WirelessAntennaBlock extends $Block {
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessAntennaBlock$$Type = ($WirelessAntennaBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WirelessAntennaBlock$$Original = $WirelessAntennaBlock;}
declare module "com.enderio.enderio.content.misc_blocks.SilentPressurePlateBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$PressurePlateBlock, $PressurePlateBlock$$Type} from "net.minecraft.world.level.block.PressurePlateBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SilentPressurePlateBlock extends $PressurePlateBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PressurePlateBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $PressurePlateBlock$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SilentPressurePlateBlock$$Type = ($SilentPressurePlateBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SilentPressurePlateBlock$$Original = $SilentPressurePlateBlock;}
declare module "com.enderio.enderio.content.storage.fluid_tank.TankRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$MachineFluidTank, $MachineFluidTank$$Type} from "com.enderio.enderio.foundation.io.fluid.MachineFluidTank"
import {$Record} from "java.lang.Record"

export class $TankRecipe$Input extends $Record implements $RecipeInput$$Interface {
constructor(fillItem: $ItemStack$$Type, emptyItem: $ItemStack$$Type, fluidTank: $MachineFluidTank$$Type)

public "emptyItem"(): $ItemStack
public "fluidTank"(): $MachineFluidTank
public "fillItem"(): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$Input$$Type = ({"emptyItem"?: $ItemStack$$Type, "fillItem"?: $ItemStack$$Type, "fluidTank"?: $MachineFluidTank$$Type}) | ([emptyItem?: $ItemStack$$Type, fillItem?: $ItemStack$$Type, fluidTank?: $MachineFluidTank$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankRecipe$Input$$Original = $TankRecipe$Input;}
declare module "com.enderio.enderio.content.conduits.menu.ConduitMenu$ConnectionAccessor" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Conduit, $Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $ConduitMenu$ConnectionAccessor$$Interface {
}

export class $ConduitMenu$ConnectionAccessor implements $ConduitMenu$ConnectionAccessor$$Interface {
 "canOpenScreen"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): boolean
 "getAllOpenableConduits"(arg0: $Direction$$Type): $List<($Holder<($Conduit<(never), (never)>)>)>
 "getConduitExtraGuiData"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $CompoundTag
 "setConnectionConfig"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfig$$Type): void
 "getConnectionConfig"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $ConnectionConfig
 "stillValid"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitMenu$ConnectionAccessor$$Type = ($ConduitMenu$ConnectionAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitMenu$ConnectionAccessor$$Original = $ConduitMenu$ConnectionAccessor;}
declare module "com.enderio.enderio.content.machines.obelisks.weather.WeatherChangeRecipe$Input" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Record} from "java.lang.Record"

export class $WeatherChangeRecipe$Input extends $Record implements $RecipeInput$$Interface {
constructor(fluid: $FluidStack$$Type)

public "fluid"(): $FluidStack
public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeatherChangeRecipe$Input$$Type = ({"fluid"?: $FluidStack$$Type}) | ([fluid?: $FluidStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeatherChangeRecipe$Input$$Original = $WeatherChangeRecipe$Input;}
declare module "com.enderio.enderio.content.conduits.type.redstone.RedstoneConduitConnectionConfig" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ConduitRedstoneSignalAware$$Type} from "com.enderio.enderio.api.conduits.ConduitRedstoneSignalAware"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IOConnectionConfig$$Interface} from "com.enderio.enderio.api.conduits.connection.config.IOConnectionConfig"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $RedstoneConduitConnectionConfig extends $Record implements $IOConnectionConfig$$Interface {
static readonly "CODEC": $MapCodec<($RedstoneConduitConnectionConfig)>
static readonly "TYPE": $ConnectionConfigType<($RedstoneConduitConnectionConfig)>
static readonly "DEFAULT": $RedstoneConduitConnectionConfig
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RedstoneConduitConnectionConfig)>

constructor(isInsert: boolean, insertChannel: $DyeColor$$Type, isExtract: boolean, extractChannel: $DyeColor$$Type, isStrongOutputSignal: boolean)

public "disconnected"(): $ConnectionConfig
public "isStrongOutputSignal"(): boolean
public "extractChannel"(): $DyeColor
public "reconnected"(): $ConnectionConfig
public "isInsert"(): boolean
public "isExtract"(): boolean
public "insertChannel"(): $DyeColor
public "withIsInsert"(arg0: boolean): $RedstoneConduitConnectionConfig
public "withIsExtract"(arg0: boolean): $RedstoneConduitConnectionConfig
public "withIsStrongOutputSignal"(arg0: boolean): $RedstoneConduitConnectionConfig
public "withExtractChannel"(arg0: $DyeColor$$Type): $RedstoneConduitConnectionConfig
public "withInsertChannel"(arg0: $DyeColor$$Type): $RedstoneConduitConnectionConfig
public "type"(): $ConnectionConfigType<($RedstoneConduitConnectionConfig)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "canExtract"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "canInsert"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "isConnected"(): boolean
get "strongOutputSignal"(): boolean
get "insert"(): boolean
get "extract"(): boolean
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneConduitConnectionConfig$$Type = ({"insertChannel"?: $DyeColor$$Type, "extractChannel"?: $DyeColor$$Type, "isExtract"?: boolean, "isStrongOutputSignal"?: boolean, "isInsert"?: boolean}) | ([insertChannel?: $DyeColor$$Type, extractChannel?: $DyeColor$$Type, isExtract?: boolean, isStrongOutputSignal?: boolean, isInsert?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneConduitConnectionConfig$$Original = $RedstoneConduitConnectionConfig;}
declare module "com.enderio.enderio.content.armory.DarkSteelSwordItem" {
import {$IDarkSteelItem$$Interface} from "com.enderio.enderio.content.armory.IDarkSteelItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AdvancedTooltipProvider$$Interface} from "com.enderio.core.client.item.AdvancedTooltipProvider"

export class $DarkSteelSwordItem extends $SwordItem implements $AdvancedTooltipProvider$$Interface, $IDarkSteelItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addDurabilityTooltips"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isDurabilityBarVisible"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSteelSwordItem$$Type = ($DarkSteelSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DarkSteelSwordItem$$Original = $DarkSteelSwordItem;}
declare module "com.enderio.enderio.content.machines.soul_binder.SoulBindingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SoulBindingRecipe$Input, $SoulBindingRecipe$Input$$Type} from "com.enderio.enderio.content.machines.soul_binder.SoulBindingRecipe$Input"
import {$MachineRecipe$$Interface} from "com.enderio.enderio.foundation.MachineRecipe"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$OutputStack} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Record} from "java.lang.Record"

export class $SoulBindingRecipe extends $Record implements $MachineRecipe$$Interface<($SoulBindingRecipe$Input)> {
constructor(output: $ItemStack$$Type, input: $Ingredient$$Type, energy: integer, experience: integer, entityType: ($ResourceLocation$$Type)?, mobCategory: ($MobCategory$$Type)?, soulData: (StringJS)?, copyInputComponents: boolean)

public "energy"(): integer
public "entityType"(): $Optional<($ResourceLocation)>
public "experience"(): integer
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List
public "craft"(arg0: $SoulBindingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "soulData"(): $Optional<(StringJS)>
public "mobCategory"(): $Optional<($MobCategory)>
public "copyInputComponents"(): boolean
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "output"(): $ItemStack
public "getInput"(): $Ingredient
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $SoulBindingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "input"(): $Ingredient
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $SoulBindingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getEnergyCost"(arg0: $SoulBindingRecipe$Input$$Type): integer
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $SoulBindingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "baseEnergyCost"(): integer
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindingRecipe$$Type = ({"experience"?: integer, "entityType"?: ($ResourceLocation$$Type)?, "mobCategory"?: ($MobCategory$$Type)?, "soulData"?: (StringJS)?, "output"?: $ItemStack$$Type, "energy"?: integer, "input"?: $Ingredient$$Type, "copyInputComponents"?: boolean}) | ([experience?: integer, entityType?: ($ResourceLocation$$Type)?, mobCategory?: ($MobCategory$$Type)?, soulData?: (StringJS)?, output?: $ItemStack$$Type, energy?: integer, input?: $Ingredient$$Type, copyInputComponents?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulBindingRecipe$$Original = $SoulBindingRecipe;}
declare module "com.enderio.enderio.content.machines.solar_panel.ISolarPanelTier" {
import {$CapacityTier$$Interface} from "com.enderio.enderio.foundation.block.entity.multienergy.CapacityTier"

export interface $ISolarPanelTier$$Interface extends $CapacityTier$$Interface {
get "productionRate"(): integer
get "storageCapacity"(): integer
}

export class $ISolarPanelTier implements $ISolarPanelTier$$Interface {
 "getProductionRate"(): integer
 "getStorageCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISolarPanelTier$$Type = ($ISolarPanelTier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISolarPanelTier$$Original = $ISolarPanelTier;}
declare module "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe$OutputItem$SizedTagOutput" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Record} from "java.lang.Record"

export class $SagMillingRecipe$OutputItem$SizedTagOutput extends $Record {
constructor(itemTag: $TagKey$$Type<($Item)>, count: integer)

public "itemTag"(): $TagKey<($Item)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "count"(): integer
public "getItemStack"(): $ItemStack
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$OutputItem$SizedTagOutput$$Type = ({"itemTag"?: $TagKey$$Type<($Item)>, "count"?: integer}) | ([itemTag?: $TagKey$$Type<($Item)>, count?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SagMillingRecipe$OutputItem$SizedTagOutput$$Original = $SagMillingRecipe$OutputItem$SizedTagOutput;}
declare module "com.enderio.enderio.content.machines.vat.FermentingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FermentingRecipe} from "com.enderio.enderio.content.machines.vat.FermentingRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $FermentingRecipe$Serializer implements $RecipeSerializer$$Interface<($FermentingRecipe)> {
static readonly "CODEC": $MapCodec<($FermentingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FermentingRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FermentingRecipe)>
public "codec"(): $MapCodec<($FermentingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermentingRecipe$Serializer$$Type = ($FermentingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FermentingRecipe$Serializer$$Original = $FermentingRecipe$Serializer;}
declare module "com.enderio.enderio.content.tools.ElectromagnetItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$PoweredToggledItem} from "com.enderio.enderio.content.tools.PoweredToggledItem"

export class $ElectromagnetItem extends $PoweredToggledItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getMaxEnergy"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectromagnetItem$$Type = ($ElectromagnetItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectromagnetItem$$Original = $ElectromagnetItem;}
declare module "com.enderio.enderio.content.misc_blocks.SilentWeightedPressurePlateBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$WeightedPressurePlateBlock, $WeightedPressurePlateBlock$$Type} from "net.minecraft.world.level.block.WeightedPressurePlateBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SilentWeightedPressurePlateBlock extends $WeightedPressurePlateBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WeightedPressurePlateBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "maxWeight": integer
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

constructor(arg0: $WeightedPressurePlateBlock$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SilentWeightedPressurePlateBlock$$Type = ($SilentWeightedPressurePlateBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SilentWeightedPressurePlateBlock$$Original = $SilentWeightedPressurePlateBlock;}
declare module "com.enderio.enderio.content.conduits.type.energy.EnergyConduitTicker" {
import {$ConduitTicker$$Interface} from "com.enderio.enderio.api.conduits.ticker.ConduitTicker"
import {$EnergyConduit, $EnergyConduit$$Type} from "com.enderio.enderio.content.conduits.type.energy.EnergyConduit"
import {$Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ConduitNetwork$$Type} from "com.enderio.enderio.api.conduits.network.ConduitNetwork"

export class $EnergyConduitTicker implements $ConduitTicker$$Interface<($EnergyConduit)> {
static readonly "INSTANCE": $EnergyConduitTicker

constructor()

public "tick"(arg0: $ServerLevel$$Type, arg1: $EnergyConduit$$Type, arg2: $ConduitNetwork$$Type): void
public "tick"(arg0: $ServerLevel$$Type, arg1: $Conduit$$Type, arg2: $ConduitNetwork$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyConduitTicker$$Type = ($EnergyConduitTicker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyConduitTicker$$Original = $EnergyConduitTicker;}
declare module "com.enderio.enderio.content.misc_blocks.skull.EnderSkullBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$SkullBlock} from "net.minecraft.world.level.block.SkullBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderSkullBlock extends $SkullBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SkullBlock)>
static readonly "MAX": integer
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSkullBlock$$Type = ($EnderSkullBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderSkullBlock$$Original = $EnderSkullBlock;}
declare module "com.enderio.enderio.content.paint.block.PaintedFenceBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FenceBlock} from "net.minecraft.world.level.block.FenceBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Map} from "java.util.Map"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PaintedFenceBlock extends $FenceBlock implements $EntityBlock$$Interface, $PaintedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FenceBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SOUTH": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "EAST": $BooleanProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedFenceBlock$$Type = ($PaintedFenceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedFenceBlock$$Original = $PaintedFenceBlock;}
declare module "com.enderio.enderio.content.paint.block.PaintedStairBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$StairBlock} from "net.minecraft.world.level.block.StairBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$StairsShape} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PaintedStairBlock extends $StairBlock implements $EntityBlock$$Interface, $PaintedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StairBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedStairBlock$$Type = ($PaintedStairBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedStairBlock$$Original = $PaintedStairBlock;}
declare module "com.enderio.enderio.content.paint.block.PaintedRedstoneBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PoweredBlock} from "net.minecraft.world.level.block.PoweredBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PaintedRedstoneBlock extends $PoweredBlock implements $EntityBlock$$Interface, $PaintedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PoweredBlock)>
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

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedRedstoneBlock$$Type = ($PaintedRedstoneBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedRedstoneBlock$$Original = $PaintedRedstoneBlock;}
declare module "com.enderio.enderio.content.paint.block.PaintedSandBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ColorRGBA} from "net.minecraft.util.ColorRGBA"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ColoredFallingBlock} from "net.minecraft.world.level.block.ColoredFallingBlock"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PaintedSandBlock extends $ColoredFallingBlock implements $EntityBlock$$Interface, $PaintedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ColoredFallingBlock)>
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
readonly "dustColor": $ColorRGBA
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getDustColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedSandBlock$$Type = ($PaintedSandBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedSandBlock$$Original = $PaintedSandBlock;}
declare module "com.enderio.enderio.content.conduits.type.item.ItemConduitTicker" {
import {$ConduitTicker$$Interface} from "com.enderio.enderio.api.conduits.ticker.ConduitTicker"
import {$Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ItemConduit, $ItemConduit$$Type} from "com.enderio.enderio.content.conduits.type.item.ItemConduit"
import {$ConduitNetwork$$Type} from "com.enderio.enderio.api.conduits.network.ConduitNetwork"

export class $ItemConduitTicker implements $ConduitTicker$$Interface<($ItemConduit)> {
static readonly "INSTANCE": $ItemConduitTicker

constructor()

public "tick"(arg0: $ServerLevel$$Type, arg1: $ItemConduit$$Type, arg2: $ConduitNetwork$$Type): void
public "tick"(arg0: $ServerLevel$$Type, arg1: $Conduit$$Type, arg2: $ConduitNetwork$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemConduitTicker$$Type = ($ItemConduitTicker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemConduitTicker$$Original = $ItemConduitTicker;}
declare module "com.enderio.enderio.content.tools.hang_glider.UseGliderTrigger$TriggerInstance" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $UseGliderTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
constructor(player: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseGliderTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseGliderTrigger$TriggerInstance$$Original = $UseGliderTrigger$TriggerInstance;}
declare module "com.enderio.enderio.content.filters.AbstractFilterMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BaseEnderMenu} from "com.enderio.core.common.menu.BaseEnderMenu"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $AbstractFilterMenu<T> extends $BaseEnderMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "BACK_BUTTON_ID": integer
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "doClick"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFilterMenu$$Type<T> = ($AbstractFilterMenu<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFilterMenu$$Original<T> = $AbstractFilterMenu<(T)>;}
declare module "com.enderio.enderio.content.paint.block.PaintedFenceGateBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$FenceGateBlock} from "net.minecraft.world.level.block.FenceGateBlock"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PaintedFenceGateBlock extends $FenceGateBlock implements $EntityBlock$$Interface, $PaintedBlock$$Interface {
static readonly "IN_WALL": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FenceGateBlock)>
readonly "closeSound": $SoundEvent
readonly "openSound": $SoundEvent
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedFenceGateBlock$$Type = ($PaintedFenceGateBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedFenceGateBlock$$Original = $PaintedFenceGateBlock;}
declare module "com.enderio.enderio.content.machines.powered_spawner.MindKillerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
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

export class $MindKillerBlock extends $Block implements $EntityBlock$$Interface {
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
export type $MindKillerBlock$$Type = ($MindKillerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MindKillerBlock$$Original = $MindKillerBlock;}
declare module "com.enderio.enderio.content.filters.item.general.EnderItemFilterItem$Type" {
import {$EnderItemFilterMenu} from "com.enderio.enderio.content.filters.item.general.EnderItemFilterMenu"
import {$Enum} from "java.lang.Enum"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.enderio.content.filters.AbstractFilterMenu$FilterAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export class $EnderItemFilterItem$Type extends $Enum<($EnderItemFilterItem$Type)> {
static readonly "BIG": $EnderItemFilterItem$Type
static readonly "BIG_ADVANCED": $EnderItemFilterItem$Type
static readonly "BASIC": $EnderItemFilterItem$Type
static readonly "ADVANCED": $EnderItemFilterItem$Type

public "canMatchComponents"(): boolean
public "rowCount"(): integer
public "canFilterByDamage"(): boolean
public "slotCount"(): integer
public static "values"(): ($EnderItemFilterItem$Type)[]
public static "valueOf"(arg0: StringJS): $EnderItemFilterItem$Type
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $AbstractFilterMenu$FilterAccess$$Type): $EnderItemFilterMenu
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): $EnderItemFilterMenu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderItemFilterItem$Type$$Type = (("basic") | ("advanced") | ("big") | ("big_advanced"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderItemFilterItem$Type$$Original = $EnderItemFilterItem$Type;}
declare module "com.enderio.enderio.content.glass.GlassLighting" {
import {$Enum} from "java.lang.Enum"

export class $GlassLighting extends $Enum<($GlassLighting)> {
static readonly "EMITTING": $GlassLighting
static readonly "NONE": $GlassLighting
static readonly "BLOCKING": $GlassLighting

public "englishName"(): StringJS
public "shortName"(): StringJS
public static "values"(): ($GlassLighting)[]
public static "valueOf"(arg0: StringJS): $GlassLighting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassLighting$$Type = (("none") | ("blocking") | ("emitting"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlassLighting$$Original = $GlassLighting;}
declare module "com.enderio.enderio.content.machines.painting.PaintingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $PaintingRecipe$Input extends $Record implements $RecipeInput$$Interface {
constructor(template: $ItemStack$$Type, paint: $ItemStack$$Type)

public "paint"(): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "template"(): $ItemStack
public "isEmpty"(): boolean
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingRecipe$Input$$Type = ({"paint"?: $ItemStack$$Type, "template"?: $ItemStack$$Type}) | ([paint?: $ItemStack$$Type, template?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintingRecipe$Input$$Original = $PaintingRecipe$Input;}
declare module "com.enderio.enderio.content.machines.obelisks.weather.WeatherChangeRecipe$WeatherMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Fireworks} from "net.minecraft.world.item.component.Fireworks"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"

export class $WeatherChangeRecipe$WeatherMode extends $Enum<($WeatherChangeRecipe$WeatherMode)> implements $StringRepresentable$$Interface {
static readonly "RAIN": $WeatherChangeRecipe$WeatherMode
static readonly "CODEC": $Codec<($WeatherChangeRecipe$WeatherMode)>
static readonly "SURPRISE": $Fireworks
static readonly "LIGHTNING": $WeatherChangeRecipe$WeatherMode
static readonly "BY_ID": $IntFunction<($WeatherChangeRecipe$WeatherMode)>
static readonly "SURPRISE_2": $Fireworks
static readonly "CLEAR": $WeatherChangeRecipe$WeatherMode
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($WeatherChangeRecipe$WeatherMode)>

public "getFireworks"(): $Fireworks
public static "values"(): ($WeatherChangeRecipe$WeatherMode)[]
public static "valueOf"(arg0: StringJS): $WeatherChangeRecipe$WeatherMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "fireworks"(): $Fireworks
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeatherChangeRecipe$WeatherMode$$Type = (("clear") | ("rain") | ("lightning"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeatherChangeRecipe$WeatherMode$$Original = $WeatherChangeRecipe$WeatherMode;}
declare module "com.enderio.enderio.content.paint.block.PaintedWallBlock" {
import {$WallSide} from "net.minecraft.world.level.block.state.properties.WallSide"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$WallBlock} from "net.minecraft.world.level.block.WallBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PaintedWallBlock extends $WallBlock implements $EntityBlock$$Interface, $PaintedBlock$$Interface {
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UP": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedWallBlock$$Type = ($PaintedWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedWallBlock$$Original = $PaintedWallBlock;}
declare module "com.enderio.enderio.content.enchanter.EnchanterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
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
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchanterBlock extends $Block implements $EntityBlock$$Interface {
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterBlock$$Type = ($EnchanterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchanterBlock$$Original = $EnchanterBlock;}
declare module "com.enderio.enderio.content.storage.fluid_tank.TankRecipe$Mode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"

export class $TankRecipe$Mode extends $Enum<($TankRecipe$Mode)> implements $StringRepresentable$$Interface {
static readonly "FILL": $TankRecipe$Mode
static readonly "CODEC": $Codec<($TankRecipe$Mode)>
static readonly "BY_ID": $IntFunction<($TankRecipe$Mode)>
static readonly "EMPTY": $TankRecipe$Mode
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($TankRecipe$Mode)>

public static "values"(): ($TankRecipe$Mode)[]
public static "valueOf"(arg0: StringJS): $TankRecipe$Mode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$Mode$$Type = (("fill") | ("empty"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankRecipe$Mode$$Original = $TankRecipe$Mode;}
declare module "com.enderio.enderio.content.paint.block.PaintedSlabBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SlabType} from "net.minecraft.world.level.block.state.properties.SlabType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SlabBlock} from "net.minecraft.world.level.block.SlabBlock"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PaintedSlabBlock extends $SlabBlock implements $EntityBlock$$Interface, $PaintedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SlabBlock)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "TYPE": $EnumProperty<($SlabType)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedSlabBlock$$Type = ($PaintedSlabBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedSlabBlock$$Original = $PaintedSlabBlock;}
declare module "com.enderio.enderio.content.filters.soul.EnderSoulFilter" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$Soul, $Soul$$Type} from "com.enderio.enderio.api.soul.Soul"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SoulFilter$$Interface} from "com.enderio.enderio.api.filter.SoulFilter"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Record} from "java.lang.Record"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EnderSoulFilter extends $Record implements $SoulFilter$$Interface {
static readonly "CODEC": $Codec<($EnderSoulFilter)>
static readonly "EMPTY": $EnderSoulFilter
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnderSoulFilter)>

constructor(arg0: integer)
constructor(matches: $NonNullList$$Type<($Soul$$Type)>, isDenyList: boolean, shouldCompareTags: boolean)
constructor(arg0: $List$$Type<($Soul$$Type)>, arg1: boolean, arg2: boolean)

public "isDenyList"(): boolean
public "shouldCompareTags"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $EntityType$$Type<(never)>): boolean
public "test"(arg0: $Soul$$Type): boolean
public "test"(arg0: $LivingEntity$$Type): boolean
public "matches"(): $NonNullList<($Soul)>
get "denyList"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSoulFilter$$Type = ({"shouldCompareTags"?: boolean, "isDenyList"?: boolean, "matches"?: $NonNullList$$Type<($Soul$$Type)>}) | ([shouldCompareTags?: boolean, isDenyList?: boolean, matches?: $NonNullList$$Type<($Soul$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderSoulFilter$$Original = $EnderSoulFilter;}
declare module "com.enderio.enderio.content.machines.painting.PaintingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$PaintingRecipe} from "com.enderio.enderio.content.machines.painting.PaintingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $PaintingRecipe$Serializer implements $RecipeSerializer$$Interface<($PaintingRecipe)> {
static readonly "CODEC": $MapCodec<($PaintingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PaintingRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($PaintingRecipe)>
public "codec"(): $MapCodec<($PaintingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingRecipe$Serializer$$Type = ($PaintingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintingRecipe$Serializer$$Original = $PaintingRecipe$Serializer;}
declare module "com.enderio.enderio.content.machines.soul_binder.SoulBindingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SoulBindingRecipe} from "com.enderio.enderio.content.machines.soul_binder.SoulBindingRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SoulBindingRecipe$Serializer implements $RecipeSerializer$$Interface<($SoulBindingRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SoulBindingRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SoulBindingRecipe)>
public "codec"(): $MapCodec<($SoulBindingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindingRecipe$Serializer$$Type = ($SoulBindingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulBindingRecipe$Serializer$$Original = $SoulBindingRecipe$Serializer;}
declare module "com.enderio.enderio.content.fire_crafting.FireCraftingRecipe$Result" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FireCraftingResultMixin$$Interface} from "com.almostreliable.kubeio.mixin.FireCraftingResultMixin"
import {$FireCraftingResult$$Interface} from "com.almostreliable.kubeio.binding.FireCraftingResult"
import {$Record} from "java.lang.Record"

export class $FireCraftingRecipe$Result extends $Record implements $FireCraftingResult$$Interface, $FireCraftingResultMixin$$Interface {
static readonly "CODEC": $Codec<($FireCraftingRecipe$Result)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FireCraftingRecipe$Result)>

constructor(result: $ItemStack$$Type, minCount: integer, maxCount: integer, chance: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "result"(): $ItemStack
public "minCount"(): integer
public "maxCount"(): integer
public "chance"(): float
public static "of"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: float): $FireCraftingRecipe$Result
public static "of"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): $FireCraftingRecipe$Result
public static "of"(arg0: $ItemStack$$Type, arg1: integer): $FireCraftingRecipe$Result
public static "of"(arg0: $ItemStack$$Type): $FireCraftingRecipe$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireCraftingRecipe$Result$$Type = ({"minCount"?: integer, "maxCount"?: integer, "chance"?: float, "result"?: $ItemStack$$Type}) | ([minCount?: integer, maxCount?: integer, chance?: float, result?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireCraftingRecipe$Result$$Original = $FireCraftingRecipe$Result;}
declare module "com.enderio.enderio.content.conduits.type.redstone.RedstoneConduit" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConduitNode$$Type} from "com.enderio.enderio.api.conduits.network.node.ConduitNode"
import {$ConduitDataAccessor$$Type} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitDataAccessor"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$RedstoneConduitConnectionConfig} from "com.enderio.enderio.content.conduits.type.redstone.RedstoneConduitConnectionConfig"
import {$SlotType$$Type} from "com.enderio.enderio.api.conduits.bundle.SlotType"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.enderio.api.conduits.network.ConduitBlockConnection"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set$$Type} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConduitType} from "com.enderio.enderio.api.conduits.ConduitType"
import {$RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$ConduitBundle$$Type} from "com.enderio.enderio.api.conduits.bundle.ConduitBundle"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Vector2i} from "org.joml.Vector2i"
import {$Comparator} from "java.util.Comparator"
import {$Conduit$$Interface} from "com.enderio.enderio.api.conduits.Conduit"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$RedstoneConduitTicker} from "com.enderio.enderio.content.conduits.type.redstone.RedstoneConduitTicker"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $RedstoneConduit extends $Record implements $Conduit$$Interface<($RedstoneConduit), ($RedstoneConduitConnectionConfig)> {
static readonly "CODEC": $MapCodec<($RedstoneConduit)>
static readonly "INSERT_FILTER_SLOT": integer
static readonly "EXTRACT_FILTER_SLOT": integer

constructor(texture: $ResourceLocation$$Type, activeTexture: $ResourceLocation$$Type, description: $Component$$Type)

public "getInventorySize"(): integer
public "connectionConfigType"(): $ConnectionConfigType<($RedstoneConduitConnectionConfig)>
public "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "networkTickRate"(): integer
public "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "getInventorySlotPosition"(arg0: integer): $Vector2i
public "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
public "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $ConduitNode$$Type): $CompoundTag
public "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): $ConnectionConfig
public "hasMenu"(): boolean
public "texture"(): $ResourceLocation
public "type"(): $ConduitType<($RedstoneConduit)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $RedstoneConduit$$Type): integer
public "compareTo"(arg0: any): integer
public "description"(): $Component
public "ticker"(): $RedstoneConduitTicker
public "activeTexture"(): $ResourceLocation
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "proxyCapability"<TCapability, TContext>(arg0: $Level$$Type, arg1: $ConduitNode$$Type, arg2: $BlockCapability$$Type<(TCapability), (TContext)>, arg3: TContext): TCapability
public "canReplaceConduit"(arg0: $RedstoneConduit$$Type): boolean
public "canConnectToConduit"(arg0: $RedstoneConduit$$Type): boolean
public "hasServerConnectionChecks"(): boolean
public "canConnectConduits"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
public "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
public "hasConnectionDelay"(): boolean
public "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
public "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $ConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
/**
 * 
 * @deprecated
 */
public "copyLegacyData"(arg0: $ConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
public "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
public "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
get "inventorySize"(): integer
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneConduit$$Type = ({"activeTexture"?: $ResourceLocation$$Type, "description"?: $Component$$Type, "texture"?: $ResourceLocation$$Type}) | ([activeTexture?: $ResourceLocation$$Type, description?: $Component$$Type, texture?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneConduit$$Original = $RedstoneConduit;}
declare module "com.enderio.enderio.content.fun.EnderiosItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $EnderiosItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "INVERTED_PROPERTY": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onCraftedBy"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderiosItem$$Type = ($EnderiosItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderiosItem$$Original = $EnderiosItem;}
declare module "com.enderio.enderio.content.conduits.type.fluid.FluidConduitConnectionConfig" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ConduitRedstoneSignalAware$$Type} from "com.enderio.enderio.api.conduits.ConduitRedstoneSignalAware"
import {$List} from "java.util.List"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$RedstoneSensitiveConnectionConfig$$Interface} from "com.enderio.enderio.api.conduits.connection.config.RedstoneSensitiveConnectionConfig"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$IOConnectionConfig$$Interface} from "com.enderio.enderio.api.conduits.connection.config.IOConnectionConfig"
import {$Record} from "java.lang.Record"

export class $FluidConduitConnectionConfig extends $Record implements $IOConnectionConfig$$Interface, $RedstoneSensitiveConnectionConfig$$Interface {
static readonly "CODEC": $MapCodec<($FluidConduitConnectionConfig)>
static readonly "TYPE": $ConnectionConfigType<($FluidConduitConnectionConfig)>
static readonly "DEFAULT": $FluidConduitConnectionConfig
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($FluidConduitConnectionConfig)>

constructor(isInsert: boolean, insertChannel: $DyeColor$$Type, isExtract: boolean, extractChannel: $DyeColor$$Type, extractRedstoneControl: $RedstoneControl$$Type, extractRedstoneChannel: $DyeColor$$Type, insertPriority: integer)

public "canExtract"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "disconnected"(): $ConnectionConfig
public "canInsert"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
public "extractChannel"(): $DyeColor
public "reconnected"(): $ConnectionConfig
public "isInsert"(): boolean
public "isExtract"(): boolean
public "insertChannel"(): $DyeColor
public "withIsInsert"(arg0: boolean): $FluidConduitConnectionConfig
public "withIsExtract"(arg0: boolean): $FluidConduitConnectionConfig
public "withExtractRedstoneControl"(arg0: $RedstoneControl$$Type): $FluidConduitConnectionConfig
public "extractRedstoneControl"(): $RedstoneControl
public "withExtractRedstoneChannel"(arg0: $DyeColor$$Type): $FluidConduitConnectionConfig
public "extractRedstoneChannel"(): $DyeColor
public "withPriority"(arg0: integer): $FluidConduitConnectionConfig
public "insertPriority"(): integer
public "withExtractChannel"(arg0: $DyeColor$$Type): $FluidConduitConnectionConfig
public "withInsertChannel"(arg0: $DyeColor$$Type): $FluidConduitConnectionConfig
public "getRedstoneSignalColors"(): $List<($DyeColor)>
public "type"(): $ConnectionConfigType<($FluidConduitConnectionConfig)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isConnected"(): boolean
get "insert"(): boolean
get "extract"(): boolean
get "redstoneSignalColors"(): $List<($DyeColor)>
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidConduitConnectionConfig$$Type = ({"insertPriority"?: integer, "insertChannel"?: $DyeColor$$Type, "extractRedstoneChannel"?: $DyeColor$$Type, "extractRedstoneControl"?: $RedstoneControl$$Type, "isExtract"?: boolean, "isInsert"?: boolean, "extractChannel"?: $DyeColor$$Type}) | ([insertPriority?: integer, insertChannel?: $DyeColor$$Type, extractRedstoneChannel?: $DyeColor$$Type, extractRedstoneControl?: $RedstoneControl$$Type, isExtract?: boolean, isInsert?: boolean, extractChannel?: $DyeColor$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidConduitConnectionConfig$$Original = $FluidConduitConnectionConfig;}
declare module "com.enderio.enderio.content.conduits.type.fluid.FluidConduit" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConduitNode$$Type} from "com.enderio.enderio.api.conduits.network.node.ConduitNode"
import {$ConduitDataAccessor$$Type} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitDataAccessor"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SlotType$$Type} from "com.enderio.enderio.api.conduits.bundle.SlotType"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.enderio.api.conduits.network.ConduitBlockConnection"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$FluidConduitConnectionConfig} from "com.enderio.enderio.content.conduits.type.fluid.FluidConduitConnectionConfig"
import {$ConnectionConfig$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set$$Type} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConduitType} from "com.enderio.enderio.api.conduits.ConduitType"
import {$RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$ConduitBundle$$Type} from "com.enderio.enderio.api.conduits.bundle.ConduitBundle"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Vector2i} from "org.joml.Vector2i"
import {$Comparator} from "java.util.Comparator"
import {$Conduit$$Type, $Conduit$$Interface} from "com.enderio.enderio.api.conduits.Conduit"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ConduitTicker} from "com.enderio.enderio.api.conduits.ticker.ConduitTicker"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $FluidConduit extends $Record implements $Conduit$$Interface<($FluidConduit), ($FluidConduitConnectionConfig)> {
static readonly "CODEC": $MapCodec<($FluidConduit)>
static readonly "INSERT_FILTER_SLOT": integer
static readonly "EXTRACT_FILTER_SLOT": integer

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, transferRatePerTick: integer, isMultiFluid: boolean, doesSupportPriority: boolean)

public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "getInventorySize"(): integer
public "connectionConfigType"(): $ConnectionConfigType<($FluidConduitConnectionConfig)>
public "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "canReplaceConduit"(arg0: $FluidConduit$$Type): boolean
public "canReplaceConduit"(arg0: $Conduit$$Type): boolean
public "hasServerConnectionChecks"(): boolean
public "canConnectConduits"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
public "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
public "getInventorySlotPosition"(arg0: integer): $Vector2i
public "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
public "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $ConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
public "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $ConduitNode$$Type): $CompoundTag
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): $FluidConduitConnectionConfig
public "copyLegacyData"(arg0: $ConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
public "doesSupportPriority"(): boolean
public "isMultiFluid"(): boolean
public "hasMenu"(): boolean
public "transferRatePerTick"(): integer
public "texture"(): $ResourceLocation
public "type"(): $ConduitType<($FluidConduit)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $FluidConduit$$Type): integer
public "description"(): $Component
public "ticker"(): $ConduitTicker
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "networkTickRate"(): integer
public "proxyCapability"<TCapability, TContext>(arg0: $Level$$Type, arg1: $ConduitNode$$Type, arg2: $BlockCapability$$Type<(TCapability), (TContext)>, arg3: TContext): TCapability
public "canConnectToConduit"(arg0: $FluidConduit$$Type): boolean
public "hasConnectionDelay"(): boolean
public "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
public "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
public "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
get "inventorySize"(): integer
get "multiFluid"(): boolean
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidConduit$$Type = ({"description"?: $Component$$Type, "isMultiFluid"?: boolean, "doesSupportPriority"?: boolean, "transferRatePerTick"?: integer, "texture"?: $ResourceLocation$$Type}) | ([description?: $Component$$Type, isMultiFluid?: boolean, doesSupportPriority?: boolean, transferRatePerTick?: integer, texture?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidConduit$$Original = $FluidConduit;}
declare module "com.enderio.enderio.content.conduits.type.redstone.RedstoneConduitTicker" {
import {$ConduitTicker$$Interface} from "com.enderio.enderio.api.conduits.ticker.ConduitTicker"
import {$RedstoneConduit, $RedstoneConduit$$Type} from "com.enderio.enderio.content.conduits.type.redstone.RedstoneConduit"
import {$Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ConduitNetwork$$Type} from "com.enderio.enderio.api.conduits.network.ConduitNetwork"

export class $RedstoneConduitTicker implements $ConduitTicker$$Interface<($RedstoneConduit)> {
static readonly "INSTANCE": $RedstoneConduitTicker

constructor()

public "tick"(arg0: $ServerLevel$$Type, arg1: $Conduit$$Type, arg2: $ConduitNetwork$$Type): void
public "tick"(arg0: $ServerLevel$$Type, arg1: $RedstoneConduit$$Type, arg2: $ConduitNetwork$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneConduitTicker$$Type = ($RedstoneConduitTicker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneConduitTicker$$Original = $RedstoneConduitTicker;}
declare module "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$SagMillingRecipe$OutputItem, $SagMillingRecipe$OutputItem$$Type} from "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe$OutputItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineRecipe$$Interface} from "com.enderio.enderio.foundation.MachineRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$GrindingBallData$$Type} from "com.enderio.enderio.api.components.GrindingBallData"
import {$SagMillingRecipe$Input, $SagMillingRecipe$Input$$Type} from "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe$Input"
import {$SagMillingRecipe$BonusType, $SagMillingRecipe$BonusType$$Type} from "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe$BonusType"
import {$OutputStack} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Record} from "java.lang.Record"

export class $SagMillingRecipe extends $Record implements $MachineRecipe$$Interface<($SagMillingRecipe$Input)> {
constructor(input: $Ingredient$$Type, outputs: $List$$Type<($SagMillingRecipe$OutputItem$$Type)>, energy: integer, bonusType: $SagMillingRecipe$BonusType$$Type)

public "energy"(): integer
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List
public "craft"(arg0: $SagMillingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "bonusType"(): $SagMillingRecipe$BonusType
public "getEnergyCost"(arg0: $RecipeInput$$Type): integer
public "getEnergyCost"(arg0: $SagMillingRecipe$Input$$Type): integer
public "getEnergyCost"(arg0: $GrindingBallData$$Type): integer
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $SagMillingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "input"(): $Ingredient
public "outputs"(): $List<($SagMillingRecipe$OutputItem)>
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $SagMillingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $SagMillingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "baseEnergyCost"(): integer
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$$Type = ({"energy"?: integer, "bonusType"?: $SagMillingRecipe$BonusType$$Type, "outputs"?: $List$$Type<($SagMillingRecipe$OutputItem$$Type)>, "input"?: $Ingredient$$Type}) | ([energy?: integer, bonusType?: $SagMillingRecipe$BonusType$$Type, outputs?: $List$$Type<($SagMillingRecipe$OutputItem$$Type)>, input?: $Ingredient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SagMillingRecipe$$Original = $SagMillingRecipe;}
declare module "com.enderio.enderio.content.storage.fluid_tank.FluidTankBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidTankUser$$Type, $FluidTankUser$$Interface} from "com.enderio.enderio.foundation.attachment.FluidTankUser"
import {$Direction} from "net.minecraft.core.Direction"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$SingleSlotAccess} from "com.enderio.enderio.foundation.inventory.SingleSlotAccess"
import {$TankAccess, $TankAccess$$Type} from "com.enderio.enderio.foundation.io.fluid.TankAccess"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MachineFluidHandler} from "com.enderio.enderio.foundation.io.fluid.MachineFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MachineFluidTank} from "com.enderio.enderio.foundation.io.fluid.MachineFluidTank"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MachineInventoryLayout} from "com.enderio.enderio.foundation.inventory.MachineInventoryLayout"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SideConfig} from "com.enderio.enderio.api.io.SideConfig"
import {$MachineBlockEntity} from "com.enderio.enderio.foundation.block.entity.MachineBlockEntity"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$MachineTankLayout} from "com.enderio.enderio.foundation.io.fluid.MachineTankLayout"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$FluidItemInteractive$$Interface} from "com.enderio.enderio.foundation.io.fluid.FluidItemInteractive"
import {$SoulBindable} from "com.enderio.enderio.api.soul.binding.SoulBindable"

export class $FluidTankBlockEntity extends $MachineBlockEntity implements $FluidItemInteractive$$Interface, $FluidTankUser$$Interface {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "FLUID_FILL_OUTPUT": $SingleSlotAccess
static readonly "FLUID_DRAIN_INPUT": $SingleSlotAccess
static readonly "FLUID_FILL_INPUT": $SingleSlotAccess
static readonly "DATA": StringJS
static readonly "FLUID_DRAIN_OUTPUT": $SingleSlotAccess
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($SoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>
static readonly "TANK": $TankAccess

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getFluidTank"(): $MachineFluidTank
public "serverTick"(): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "createInventoryLayout"(): $MachineInventoryLayout
public "acceptItemDrain"(arg0: $ItemStack$$Type): boolean
public "acceptItemFill"(arg0: $ItemStack$$Type): boolean
public "createFluidHandler"(): $MachineFluidHandler
public "isActive"(): boolean
public "getFluidHandler"(): $MachineFluidHandler
public "handleFluidItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $FluidTankUser$$Type, arg4: $TankAccess$$Type): boolean
public "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "getTankLayout"(): $MachineTankLayout
public "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
get "fluidTank"(): $MachineFluidTank
get "active"(): boolean
get "fluidHandler"(): $MachineFluidHandler
get "tankLayout"(): $MachineTankLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankBlockEntity$$Type = ($FluidTankBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidTankBlockEntity$$Original = $FluidTankBlockEntity;}
declare module "com.enderio.enderio.content.conduits.legacy.ConduitDataContainer" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ConduitDataAccessor$$Interface} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitDataAccessor"
import {$ConduitDataType$$Type} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitDataType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ConduitData, $ConduitData$$Type} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitData"

/**
 * 
 * @deprecated
 */
export class $ConduitDataContainer implements $ConduitDataAccessor$$Interface {
static readonly "CODEC": $Codec<($ConduitDataContainer)>

constructor()
constructor(arg0: $ConduitData$$Type<(never)>)

public "getOrCreateData"<T extends $ConduitData<(object)>>(arg0: $ConduitDataType$$Type<(T)>): T
public "getData"<T extends $ConduitData<(object)>>(arg0: $ConduitDataType$$Type<(T)>): T
public "getData"(): $ConduitData<(never)>
public "hashCode"(): integer
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $ConduitDataContainer
public "deepCopy"(): $ConduitDataContainer
public "hasData"(arg0: $ConduitDataType$$Type<(never)>): boolean
public "hasData"(): boolean
get "data"(): $ConduitData<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitDataContainer$$Type = ($ConduitDataContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitDataContainer$$Original = $ConduitDataContainer;}
declare module "com.enderio.enderio.content.enchanter.EnchanterRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $EnchanterRecipe$Input extends $Record implements $RecipeInput$$Interface {
constructor(bookItem: $ItemStack$$Type, catalyst: $ItemStack$$Type, lapis: $ItemStack$$Type)

public "catalyst"(): $ItemStack
public "lapis"(): $ItemStack
public "bookItem"(): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterRecipe$Input$$Type = ({"catalyst"?: $ItemStack$$Type, "lapis"?: $ItemStack$$Type, "bookItem"?: $ItemStack$$Type}) | ([catalyst?: $ItemStack$$Type, lapis?: $ItemStack$$Type, bookItem?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchanterRecipe$Input$$Original = $EnchanterRecipe$Input;}
declare module "com.enderio.enderio.content.filters.AbstractFilterMenu$FilterAccess" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $AbstractFilterMenu$FilterAccess$$Interface {
get "filterItem"(): $ItemStack
set "filterItem"(value: $ItemStack$$Type)
}

export class $AbstractFilterMenu$FilterAccess implements $AbstractFilterMenu$FilterAccess$$Interface {
 "getFilterItem"(): $ItemStack
 "setFilterItem"(arg0: $ItemStack$$Type): void
 "goBack"(): boolean
 "stillValid"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFilterMenu$FilterAccess$$Type = ($AbstractFilterMenu$FilterAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFilterMenu$FilterAccess$$Original = $AbstractFilterMenu$FilterAccess;}
declare module "com.enderio.enderio.content.conduits.network.IConduitNodeAttachment" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ConnectionConfigType$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Level} from "net.minecraft.world.level.Level"
import {$ConnectionStatus} from "com.enderio.enderio.api.conduits.connection.ConnectionStatus"
import {$Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export interface $IConduitNodeAttachment$$Interface {
get "level"(): $Level
}

export class $IConduitNodeAttachment implements $IConduitNodeAttachment$$Interface {
 "getConnectionStatus"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $ConnectionStatus
 "markNodesDirty"(): void
 "getNeighborSidedCapability"<TCapability>(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>, arg2: $Direction$$Type): TCapability
 "getNeighborVoidCapability"<TCapability>(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $BlockCapability$$Type<(TCapability), (void)>, arg2: $Direction$$Type): TCapability
 "setConnectionConfig"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfig$$Type): void
 "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfigType$$Type<(T)>): T
 "getConnectionConfig"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $ConnectionConfig
 "getConnectionInventory"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $IItemHandlerModifiable
 "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
 "getLevel"(): $Level
 "hasLevel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConduitNodeAttachment$$Type = ($IConduitNodeAttachment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConduitNodeAttachment$$Original = $IConduitNodeAttachment;}
declare module "com.enderio.enderio.content.tools.coordinate_selector.LocationPrintoutItem" {
import {$CoordinateSelection, $CoordinateSelection$$Type} from "com.enderio.enderio.api.attachment.CoordinateSelection"
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
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $LocationPrintoutItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "setSelection"(arg0: $ItemStack$$Type, arg1: $CoordinateSelection$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "getSelection"(arg0: $ItemStack$$Type): $Optional<($CoordinateSelection)>
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocationPrintoutItem$$Type = ($LocationPrintoutItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocationPrintoutItem$$Original = $LocationPrintoutItem;}
declare module "com.enderio.enderio.content.machines.slicer.SlicingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$SlicingRecipe$Input, $SlicingRecipe$Input$$Type} from "com.enderio.enderio.content.machines.slicer.SlicingRecipe$Input"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineRecipe$$Interface} from "com.enderio.enderio.foundation.MachineRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$OutputStack} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Record} from "java.lang.Record"

export class $SlicingRecipe extends $Record implements $MachineRecipe$$Interface<($SlicingRecipe$Input)> {
constructor(output: $ItemStack$$Type, inputs: $List$$Type<($Ingredient$$Type)>, energy: integer)

public "energy"(): integer
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List
public "craft"(arg0: $SlicingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "output"(): $ItemStack
public "inputs"(): $List<($Ingredient)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $SlicingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $SlicingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getEnergyCost"(arg0: $SlicingRecipe$Input$$Type): integer
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $SlicingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "baseEnergyCost"(): integer
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicingRecipe$$Type = ({"inputs"?: $List$$Type<($Ingredient$$Type)>, "output"?: $ItemStack$$Type, "energy"?: integer}) | ([inputs?: $List$$Type<($Ingredient$$Type)>, output?: $ItemStack$$Type, energy?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlicingRecipe$$Original = $SlicingRecipe;}
declare module "com.enderio.enderio.content.conduits.type.energy.EnergyConduit" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConduitNode$$Type} from "com.enderio.enderio.api.conduits.network.node.ConduitNode"
import {$ConduitDataAccessor$$Type} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitDataAccessor"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SlotType$$Type} from "com.enderio.enderio.api.conduits.bundle.SlotType"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.enderio.api.conduits.network.ConduitBlockConnection"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$EnergyConduitTicker} from "com.enderio.enderio.content.conduits.type.energy.EnergyConduitTicker"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set$$Type} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConduitType} from "com.enderio.enderio.api.conduits.ConduitType"
import {$RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$ConduitBundle$$Type} from "com.enderio.enderio.api.conduits.bundle.ConduitBundle"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Vector2i} from "org.joml.Vector2i"
import {$Comparator} from "java.util.Comparator"
import {$Conduit$$Type, $Conduit$$Interface} from "com.enderio.enderio.api.conduits.Conduit"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$EnergyConduitConnectionConfig} from "com.enderio.enderio.content.conduits.type.energy.EnergyConduitConnectionConfig"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $EnergyConduit extends $Record implements $Conduit$$Interface<($EnergyConduit), ($EnergyConduitConnectionConfig)> {
static readonly "CODEC": $MapCodec<($EnergyConduit)>

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, transferRatePerTick: integer)

public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "connectionConfigType"(): $ConnectionConfigType<($EnergyConduitConnectionConfig)>
public "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "networkTickRate"(): integer
public "proxyCapability"<TCap, TContext>(arg0: $Level$$Type, arg1: $ConduitNode$$Type, arg2: $BlockCapability$$Type<(TCap), (TContext)>, arg3: TContext): TCap
public "canReplaceConduit"(arg0: $Conduit$$Type): boolean
public "canReplaceConduit"(arg0: $EnergyConduit$$Type): boolean
public "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): $EnergyConduitConnectionConfig
public "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
public "hasMenu"(): boolean
public "transferRatePerTick"(): integer
public "texture"(): $ResourceLocation
public "type"(): $ConduitType<($EnergyConduit)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $EnergyConduit$$Type): integer
public "description"(): $Component
public "ticker"(): $EnergyConduitTicker
public "getInventorySize"(): integer
public "canConnectToConduit"(arg0: $EnergyConduit$$Type): boolean
public "hasServerConnectionChecks"(): boolean
public "canConnectConduits"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
public "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
public "hasConnectionDelay"(): boolean
public "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
public "getInventorySlotPosition"(arg0: integer): $Vector2i
/**
 * 
 * @deprecated
 */
public "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
public "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $ConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
public "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $ConduitNode$$Type): $CompoundTag
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
/**
 * 
 * @deprecated
 */
public "copyLegacyData"(arg0: $ConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
public "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
get "inventorySize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyConduit$$Type = ({"transferRatePerTick"?: integer, "description"?: $Component$$Type, "texture"?: $ResourceLocation$$Type}) | ([transferRatePerTick?: integer, description?: $Component$$Type, texture?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyConduit$$Original = $EnergyConduit;}
declare module "com.enderio.enderio.content.paint.block.PaintedWoodenPressurePlateBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PressurePlateBlock} from "net.minecraft.world.level.block.PressurePlateBlock"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PaintedWoodenPressurePlateBlock extends $PressurePlateBlock implements $EntityBlock$$Interface, $PaintedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PressurePlateBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedWoodenPressurePlateBlock$$Type = ($PaintedWoodenPressurePlateBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedWoodenPressurePlateBlock$$Original = $PaintedWoodenPressurePlateBlock;}
declare module "com.enderio.enderio.content.filters.fluid.EnderFluidFilterItem$Type" {
import {$EnderFluidFilterMenu} from "com.enderio.enderio.content.filters.fluid.EnderFluidFilterMenu"
import {$Enum} from "java.lang.Enum"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.enderio.content.filters.AbstractFilterMenu$FilterAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export class $EnderFluidFilterItem$Type extends $Enum<($EnderFluidFilterItem$Type)> {
static readonly "BASIC": $EnderFluidFilterItem$Type

public "canMatchComponents"(): boolean
public "rowCount"(): integer
public "slotCount"(): integer
public static "values"(): ($EnderFluidFilterItem$Type)[]
public static "valueOf"(arg0: StringJS): $EnderFluidFilterItem$Type
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): $EnderFluidFilterMenu
public "openMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $AbstractFilterMenu$FilterAccess$$Type): $EnderFluidFilterMenu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderFluidFilterItem$Type$$Type = (("basic"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderFluidFilterItem$Type$$Original = $EnderFluidFilterItem$Type;}
declare module "com.enderio.enderio.content.conduits.probe.ConduitProbeItem" {
import {$ConduitProbeItem$State, $ConduitProbeItem$State$$Type} from "com.enderio.enderio.content.conduits.probe.ConduitProbeItem$State"
import {$ConduitBundleBlockEntity$$Type} from "com.enderio.enderio.content.conduits.bundle.ConduitBundleBlockEntity"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ConduitProbeItem extends $Item {
static readonly "PROBE_STATE_PREDICATE": $ResourceLocation
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "switchState"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "handlePaste"(arg0: $ConduitBundleBlockEntity$$Type, arg1: $Direction$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type): void
public static "getState"(arg0: $ItemStack$$Type): $ConduitProbeItem$State
public static "setState"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ConduitProbeItem$State$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitProbeItem$$Type = ($ConduitProbeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitProbeItem$$Original = $ConduitProbeItem;}
declare module "com.enderio.enderio.content.conduits.network.ConduitNetwork" {
import {$Collection} from "java.util.Collection"
import {$Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.enderio.api.conduits.network.node.ConduitNode"
import {$Conduit, $Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ConduitNetwork$$Interface as $ConduitNetwork$0$$Interface} from "com.enderio.enderio.api.conduits.network.ConduitNetwork"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.enderio.api.conduits.network.ConduitBlockConnection"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ConduitNetworkContext, $ConduitNetworkContext$$Type} from "com.enderio.enderio.api.conduits.network.ConduitNetworkContext"
import {$ConduitNodeImpl, $ConduitNodeImpl$$Type} from "com.enderio.enderio.content.conduits.network.ConduitNodeImpl"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Network} from "com.enderio.core.common.graph.Network"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set} from "java.util.Set"
import {$ConduitNetworkContextType$$Type} from "com.enderio.enderio.api.conduits.network.ConduitNetworkContextType"
import {$Network$IndexedEdgeList$$Type} from "com.enderio.core.common.graph.Network$IndexedEdgeList"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export class $ConduitNetwork extends $Network<($ConduitNetwork), ($ConduitNodeImpl)> implements $ConduitNetwork$0$$Interface {
static readonly "CODEC": $Codec<($ConduitNetwork)>

constructor(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: ($ConduitNetworkContext$$Type<(never)>)?, arg2: $List$$Type<($ConduitNodeImpl$$Type)>, arg3: $Network$IndexedEdgeList$$Type)
constructor(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $ConduitNodeImpl$$Type)

public "conduit"(): $Holder<($Conduit<(never), (never)>)>
public "onNodeUpdated"(arg0: $ConduitNodeImpl$$Type): void
public "setOnChunkCoverageChanged"(arg0: $Consumer$$Type<($ConduitNetwork)>): void
public "allChunks"(): $Set<(long)>
public "addCrashInfo"(arg0: $CrashReportCategory$$Type): void
public "beforeTicking"(): void
public "onChunkTickStatusChanged"(arg0: long): void
public "blockConnectionsAccessibleFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
public "tickingNodes"(): $Collection<($ConduitNodeImpl)>
public "blockEndpoints"(): $Collection<($ConduitNodeImpl)>
public "blockConnections"(): $Collection<($ConduitBlockConnection)>
public "allChannels"(): $Set<($DyeColor)>
public "insertConnections"(): $List<($ConduitBlockConnection)>
public "insertConnections"(arg0: $DyeColor$$Type): $List<($ConduitBlockConnection)>
public "extractConnectionsFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
public "extractConnections"(): $List<($ConduitBlockConnection)>
public "extractConnections"(arg0: $DyeColor$$Type): $List<($ConduitBlockConnection)>
public "insertConnectionsFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
public "getOrCreateContext"<C extends $ConduitNetworkContext<(object)>>(arg0: $ConduitNetworkContextType$$Type<(C)>): C
public "contains"(arg0: $ConduitNode$$Type): boolean
public "getContext"<C extends $ConduitNetworkContext<(object)>>(arg0: $ConduitNetworkContextType$$Type<(C)>): C
public "hasContext"(arg0: $ConduitNetworkContextType$$Type<(never)>): boolean
public "neighbors"(arg0: $ConduitNode$$Type): $Set<($ConduitNode)>
public "nodeCount"(): integer
public "nodes"(): $Set<($ConduitNode)>
public "isEmpty"(): boolean
set "onChunkCoverageChanged"(value: $Consumer$$Type<($ConduitNetwork)>)
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNetwork$$Type = ($ConduitNetwork);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitNetwork$$Original = $ConduitNetwork;}
declare module "com.enderio.enderio.content.glass.FusedQuartzBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$GlassLighting} from "com.enderio.enderio.content.glass.GlassLighting"
import {$GlassCollisionPredicate} from "com.enderio.enderio.content.glass.GlassCollisionPredicate"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$GlassIdentifier, $GlassIdentifier$$Type} from "com.enderio.enderio.content.glass.GlassIdentifier"
import {$TransparentBlock} from "net.minecraft.world.level.block.TransparentBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FusedQuartzBlock extends $TransparentBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TransparentBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $GlassIdentifier$$Type, arg2: $DyeColor$$Type)

public "getExplosionResistance"(): float
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "glassIdentifier"(): $GlassIdentifier
public "getGlassLighting"(): $GlassLighting
public "getCollisionPredicate"(): $GlassCollisionPredicate
public "getDescriptionId"(): StringJS
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "explosionResistance"(): float
get "glassLighting"(): $GlassLighting
get "collisionPredicate"(): $GlassCollisionPredicate
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusedQuartzBlock$$Type = ($FusedQuartzBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FusedQuartzBlock$$Original = $FusedQuartzBlock;}
declare module "com.enderio.enderio.content.filters.fluid.EnderFluidFilter" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FluidFilter$$Interface} from "com.enderio.enderio.api.filter.FluidFilter"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Record} from "java.lang.Record"

export class $EnderFluidFilter extends $Record implements $FluidFilter$$Interface {
static readonly "CODEC": $Codec<($EnderFluidFilter)>
static readonly "EMPTY": $EnderFluidFilter
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnderFluidFilter)>

constructor(arg0: integer)
constructor(matches: $NonNullList$$Type<($FluidStack$$Type)>, isDenyList: boolean, shouldCompareComponents: boolean)
constructor(arg0: $List$$Type<($FluidStack$$Type)>, arg1: boolean, arg2: boolean)

public "isDenyList"(): boolean
public "shouldCompareComponents"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $IFluidHandler$$Type, arg1: $FluidStack$$Type): $FluidStack
public "matches"(): $NonNullList<($FluidStack)>
get "denyList"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderFluidFilter$$Type = ({"isDenyList"?: boolean, "matches"?: $NonNullList$$Type<($FluidStack$$Type)>, "shouldCompareComponents"?: boolean}) | ([isDenyList?: boolean, matches?: $NonNullList$$Type<($FluidStack$$Type)>, shouldCompareComponents?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderFluidFilter$$Original = $EnderFluidFilter;}
declare module "com.enderio.enderio.content.fire_crafting.FireCraftingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$FireCraftingRecipe} from "com.enderio.enderio.content.fire_crafting.FireCraftingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $FireCraftingRecipe$Serializer implements $RecipeSerializer$$Interface<($FireCraftingRecipe)> {
static readonly "CODEC": $MapCodec<($FireCraftingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FireCraftingRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FireCraftingRecipe)>
public "codec"(): $MapCodec<($FireCraftingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireCraftingRecipe$Serializer$$Type = ($FireCraftingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireCraftingRecipe$Serializer$$Original = $FireCraftingRecipe$Serializer;}
declare module "com.enderio.enderio.content.tools.PoweredToggledItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICustomCreativeTabEntries$$Interface} from "com.enderio.core.common.item.ICustomCreativeTabEntries"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AdvancedTooltipProvider$$Interface} from "com.enderio.core.client.item.AdvancedTooltipProvider"

export class $PoweredToggledItem extends $Item implements $AdvancedTooltipProvider$$Interface, $ICustomCreativeTabEntries$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "addAdditionalCreativeTabEntries"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "getCharged"(arg0: $PoweredToggledItem$$Type): $ItemStack
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "shouldAddDefaultItem"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredToggledItem$$Type = ($PoweredToggledItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoweredToggledItem$$Original = $PoweredToggledItem;}
declare module "com.enderio.enderio.content.misc_blocks.EIOPressurePlateBlock$Detector" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $EIOPressurePlateBlock$Detector$$Interface {

(arg0: $Level, arg1: $BlockPos): integer
}

export class $EIOPressurePlateBlock$Detector implements $EIOPressurePlateBlock$Detector$$Interface {
 "getSignalStrength"(arg0: $Level$$Type, arg1: $BlockPos$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EIOPressurePlateBlock$Detector$$Type = ((arg0: $Level, arg1: $BlockPos) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EIOPressurePlateBlock$Detector$$Original = $EIOPressurePlateBlock$Detector;}
declare module "com.enderio.enderio.content.filters.fluid.EnderFluidFilterItem" {
import {$EnderFluidFilter} from "com.enderio.enderio.content.filters.fluid.EnderFluidFilter"
import {$FluidFilter} from "com.enderio.enderio.api.filter.FluidFilter"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FilterMenuProvider} from "com.enderio.enderio.api.filter.FilterMenuProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AbstractFilterItem} from "com.enderio.enderio.content.filters.AbstractFilterItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EnderFluidFilterItem$Type$$Type} from "com.enderio.enderio.content.filters.fluid.EnderFluidFilterItem$Type"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $EnderFluidFilterItem extends $AbstractFilterItem<($EnderFluidFilter)> {
static readonly "FLUID_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($FluidFilter)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "FILTER_MENU_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($FilterMenuProvider)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $EnderFluidFilterItem$Type$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderFluidFilterItem$$Type = ($EnderFluidFilterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderFluidFilterItem$$Original = $EnderFluidFilterItem;}
declare module "com.enderio.enderio.content.enderface.EnderfaceBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EnderfaceBlockEntity} from "com.enderio.enderio.content.enderface.EnderfaceBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EIOEntityBlock} from "com.enderio.enderio.foundation.block.EIOEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderfaceBlock extends $EIOEntityBlock<($EnderfaceBlockEntity)> {
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

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderfaceBlock$$Type = ($EnderfaceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderfaceBlock$$Original = $EnderfaceBlock;}
declare module "com.enderio.enderio.content.storage.fluid_tank.FluidTankBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FluidTankBlock$$Type} from "com.enderio.enderio.content.storage.fluid_tank.FluidTankBlock"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$IFluidHandlerItem} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$AdvancedTooltipProvider$$Interface} from "com.enderio.core.client.item.AdvancedTooltipProvider"

export class $FluidTankBlockItem extends $BlockItem implements $AdvancedTooltipProvider$$Interface {
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IFluidHandlerItem)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $FluidTankBlock$$Type, arg1: $Item$Properties$$Type, arg2: integer)

public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "getCapacity"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankBlockItem$$Type = ($FluidTankBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidTankBlockItem$$Original = $FluidTankBlockItem;}
declare module "com.enderio.enderio.content.paint.block.SinglePaintedBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SinglePaintedBlock extends $Block implements $EntityBlock$$Interface, $PaintedBlock$$Interface {
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

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinglePaintedBlock$$Type = ($SinglePaintedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SinglePaintedBlock$$Original = $SinglePaintedBlock;}
declare module "com.enderio.enderio.content.machines.painting.PaintingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PaintingRecipe$Input, $PaintingRecipe$Input$$Type} from "com.enderio.enderio.content.machines.painting.PaintingRecipe$Input"
import {$MachineRecipe$$Interface} from "com.enderio.enderio.foundation.MachineRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$OutputStack} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Record} from "java.lang.Record"

export class $PaintingRecipe extends $Record implements $MachineRecipe$$Interface<($PaintingRecipe$Input)> {
constructor(input: $Ingredient$$Type, output: $ItemStack$$Type)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $PaintingRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "craft"(arg0: $PaintingRecipe$Input$$Type, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
public "craft"(arg0: $RecipeInput$$Type, arg1: $RegistryAccess$$Type): $List
public "getBaseEnergyCost"(): integer
public "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
public "output"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $PaintingRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "input"(): $Ingredient
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getEnergyCost"(arg0: $PaintingRecipe$Input$$Type): integer
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $PaintingRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "baseEnergyCost"(): integer
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingRecipe$$Type = ({"output"?: $ItemStack$$Type, "input"?: $Ingredient$$Type}) | ([output?: $ItemStack$$Type, input?: $Ingredient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintingRecipe$$Original = $PaintingRecipe;}
declare module "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GrindingBallData, $GrindingBallData$$Type} from "com.enderio.enderio.api.components.GrindingBallData"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $SagMillingRecipe$Input extends $Record implements $RecipeInput$$Interface {
constructor(inputItemStack: $ItemStack$$Type, grindingBallData: $GrindingBallData$$Type)

public "inputItemStack"(): $ItemStack
public "grindingBallData"(): $GrindingBallData
public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$Input$$Type = ({"inputItemStack"?: $ItemStack$$Type, "grindingBallData"?: $GrindingBallData$$Type}) | ([inputItemStack?: $ItemStack$$Type, grindingBallData?: $GrindingBallData$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SagMillingRecipe$Input$$Original = $SagMillingRecipe$Input;}
declare module "com.enderio.enderio.content.conduits.facades.ConduitFacadeItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ConduitFacadeItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitFacadeItem$$Type = ($ConduitFacadeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitFacadeItem$$Original = $ConduitFacadeItem;}
declare module "com.enderio.enderio.content.conduits.type.item.ItemConduit" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConduitNode$$Type} from "com.enderio.enderio.api.conduits.network.node.ConduitNode"
import {$ConduitDataAccessor$$Type} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitDataAccessor"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SlotType$$Type} from "com.enderio.enderio.api.conduits.bundle.SlotType"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.enderio.api.conduits.network.ConduitBlockConnection"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set$$Type} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConduitType} from "com.enderio.enderio.api.conduits.ConduitType"
import {$RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$ConduitBundle$$Type} from "com.enderio.enderio.api.conduits.bundle.ConduitBundle"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Vector2i} from "org.joml.Vector2i"
import {$Comparator} from "java.util.Comparator"
import {$Conduit$$Interface} from "com.enderio.enderio.api.conduits.Conduit"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ItemConduitConnectionConfig} from "com.enderio.enderio.content.conduits.type.item.ItemConduitConnectionConfig"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ConduitTicker} from "com.enderio.enderio.api.conduits.ticker.ConduitTicker"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $ItemConduit extends $Record implements $Conduit$$Interface<($ItemConduit), ($ItemConduitConnectionConfig)> {
static readonly "CODEC": $MapCodec<($ItemConduit)>
static readonly "INSERT_FILTER_SLOT": integer
static readonly "EXTRACT_FILTER_SLOT": integer

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, transferRatePerCycle: integer, networkTickRate: integer)

public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "getInventorySize"(): integer
public "connectionConfigType"(): $ConnectionConfigType<($ItemConduitConnectionConfig)>
public "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "networkTickRate"(): integer
public "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
public "getInventorySlotPosition"(arg0: integer): $Vector2i
public "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
public "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $ConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
public "hasAdvancedTooltip"(): boolean
public "showDebugTooltip"(): boolean
public "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): $ConnectionConfig
public "copyLegacyData"(arg0: $ConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
public "hasMenu"(): boolean
public "transferRatePerCycle"(): integer
public "texture"(): $ResourceLocation
public "type"(): $ConduitType<($ItemConduit)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ItemConduit$$Type): integer
public "description"(): $Component
public "ticker"(): $ConduitTicker
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "proxyCapability"<TCapability, TContext>(arg0: $Level$$Type, arg1: $ConduitNode$$Type, arg2: $BlockCapability$$Type<(TCapability), (TContext)>, arg3: TContext): TCapability
public "canReplaceConduit"(arg0: $ItemConduit$$Type): boolean
public "canConnectToConduit"(arg0: $ItemConduit$$Type): boolean
public "hasServerConnectionChecks"(): boolean
public "canConnectConduits"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
public "hasConnectionDelay"(): boolean
public "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
public "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $ConduitNode$$Type): $CompoundTag
public "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
public "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
get "inventorySize"(): integer
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemConduit$$Type = ({"transferRatePerCycle"?: integer, "networkTickRate"?: integer, "texture"?: $ResourceLocation$$Type, "description"?: $Component$$Type}) | ([transferRatePerCycle?: integer, networkTickRate?: integer, texture?: $ResourceLocation$$Type, description?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemConduit$$Original = $ItemConduit;}
declare module "com.enderio.enderio.content.travel.TravelStaffItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICustomCreativeTabEntries$$Interface} from "com.enderio.core.common.item.ICustomCreativeTabEntries"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$AdvancedTooltipProvider$$Interface} from "com.enderio.core.client.item.AdvancedTooltipProvider"

export class $TravelStaffItem extends $Item implements $AdvancedTooltipProvider$$Interface, $ICustomCreativeTabEntries$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "getMaxEnergy"(): integer
public "addAdditionalCreativeTabEntries"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "performAction"(arg0: $Item$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "shouldAddDefaultItem"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static get "maxEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelStaffItem$$Type = ($TravelStaffItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravelStaffItem$$Original = $TravelStaffItem;}
declare module "com.enderio.enderio.content.conduits.bundle.ConduitBundleBlockEntity" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LongSet} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$FacadeType} from "com.enderio.enderio.api.conduits.facade.FacadeType"
import {$List} from "java.util.List"
import {$Long2ObjectMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$AddConduitResult} from "com.enderio.enderio.api.conduits.bundle.AddConduitResult"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConduitNode} from "com.enderio.enderio.api.conduits.network.node.ConduitNode"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ConduitNodeImpl$$Type} from "com.enderio.enderio.content.conduits.network.ConduitNodeImpl"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ConduitMenu$ConnectionAccessor$$Interface} from "com.enderio.enderio.content.conduits.menu.ConduitMenu$ConnectionAccessor"
import {$ConnectionConfigType$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConnectionStatus, $ConnectionStatus$$Type} from "com.enderio.enderio.api.conduits.connection.ConnectionStatus"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$ConduitShape} from "com.enderio.enderio.content.conduits.bundle.ConduitShape"
import {$Wrenchable$$Interface} from "com.enderio.enderio.foundation.block.entity.Wrenchable"
import {$ConduitType$$Type} from "com.enderio.enderio.api.conduits.ConduitType"
import {$ConduitBundle$$Interface} from "com.enderio.enderio.api.conduits.bundle.ConduitBundle"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IConduitNodeAttachment$$Interface} from "com.enderio.enderio.content.conduits.network.IConduitNodeAttachment"
import {$Conduit, $Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnderBlockEntity} from "com.enderio.core.common.blockentity.EnderBlockEntity"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$Connection$$Type} from "net.minecraft.network.Connection"

export class $ConduitBundleBlockEntity extends $EnderBlockEntity implements $ConduitBundle$$Interface, $Wrenchable$$Interface, $ConduitMenu$ConnectionAccessor$$Interface, $IConduitNodeAttachment$$Interface {
static readonly "FACADES": $Map<($ResourceKey<($Level)>), ($Long2ObjectMap<($BlockState)>)>
static readonly "DATA": StringJS
 "primaryConnectionSide": $Direction
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "CHUNK_FACADES": $Map<($ResourceKey<($Level)>), ($Long2ObjectMap<($LongSet)>)>
static readonly "MAX_CONDUITS": integer

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "updateShape"(): void
public "serverTick"(): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChunkUnloaded"(): void
public "canConnectTo"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: $ConduitNodeImpl$$Type, arg3: boolean): boolean
public "hasFacade"(): boolean
public "getFacadeBlock"(): $Block
public "updateNeighborRedstone"(): void
public "addConduit"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: $Player$$Type): $AddConduitResult
public "setFacadeProvider"(arg0: $ItemStack$$Type): void
public "removeConduit"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Consumer$$Type<($ItemStack)>): void
public "canAddConduit"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): boolean
public "canOpenScreen"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): boolean
public "getConduitByType"(arg0: $ConduitType$$Type<(never)>): $Holder<($Conduit<(never), (never)>)>
public "getConnectionStatus"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $ConnectionStatus
public "getConduitNode"(arg0: $Holder$$Type): $ConduitNode
public "getAllOpenableConduits"(arg0: $Direction$$Type): $List<($Holder<($Conduit<(never), (never)>)>)>
public static "createCapabilityProvider"<TCap, TContext>(arg0: $BlockCapability$$Type<(TCap), (TContext)>): $ICapabilityProvider<($ConduitBundleBlockEntity), (TContext), (TCap)>
public "hasConduitOfType"(arg0: $ConduitType$$Type<(never)>): boolean
public "getConduitExtraWorldData"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): $CompoundTag
public "getConduitExtraGuiData"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $CompoundTag
public "getConnectedConduits"(arg0: $Direction$$Type): $List<($Holder<($Conduit<(never), (never)>)>)>
public "markNodesDirty"(): void
public "getNeighborSidedCapability"<TCapability>(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>, arg2: $Direction$$Type): TCapability
public "getNeighborVoidCapability"<TCapability>(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $BlockCapability$$Type<(TCapability), (void)>, arg2: $Direction$$Type): TCapability
public "getFacadeType"(): $FacadeType
public "getFacadeProvider"(): $ItemStack
public "dropFacadeItem"(): void
public "getConduits"(): $List<($Holder<($Conduit<(never), (never)>)>)>
public "setConnectionConfig"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfig$$Type): void
public "getConnectionConfig"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $ConnectionConfig
public "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfigType$$Type<(T)>): T
public "onConnectionsUpdated"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): void
public "tryConnectTo"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: boolean): boolean
public "updateModel"(): void
public "hasConduitStrict"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): boolean
public "setConnectionStatus"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: $ConnectionStatus$$Type): void
public "hasCompatibleConduit"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): boolean
public "removeNeighborConnections"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): void
public "getConnectionInventory"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $IItemHandlerModifiable
public "getCompatibleConduit"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): $Holder<($Conduit<(never), (never)>)>
public "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
public "updateConnections"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: boolean): void
public "onWrenched"(arg0: $UseOnContext$$Type): $ItemInteractionResult
public "getShape"(): $ConduitShape
public "setLevel"(arg0: $Level$$Type): void
public "isFull"(): boolean
public "isEmpty"(): boolean
public "onLoad"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "setRemoved"(): void
public "getModelData"(): $ModelData
public "getLevel"(): $Level
public "hasLevel"(): boolean
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "facadeBlock"(): $Block
set "facadeProvider"(value: $ItemStack$$Type)
get "facadeType"(): $FacadeType
get "facadeProvider"(): $ItemStack
get "conduits"(): $List<($Holder<($Conduit<(never), (never)>)>)>
get "shape"(): $ConduitShape
set "level"(value: $Level$$Type)
get "full"(): boolean
get "empty"(): boolean
get "removed"(): void
get "modelData"(): $ModelData
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBundleBlockEntity$$Type = ($ConduitBundleBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitBundleBlockEntity$$Original = $ConduitBundleBlockEntity;}
declare module "com.enderio.enderio.content.machines.alloy.AlloySmeltingRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $AlloySmeltingRecipe$Input extends $Record implements $RecipeInput$$Interface {
constructor(inputs: $List$$Type<($ItemStack$$Type)>, inputsConsumed: integer)

public "getFirstPopulated"(): $ItemStack
public "withInputsConsumed"(arg0: integer): $AlloySmeltingRecipe$Input
public "inputsConsumed"(): integer
public "getItem"(arg0: integer): $ItemStack
public "inputs"(): $List<($ItemStack)>
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "self"(): $RecipeInput
get "firstPopulated"(): $ItemStack
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloySmeltingRecipe$Input$$Type = ({"inputs"?: $List$$Type<($ItemStack$$Type)>, "inputsConsumed"?: integer}) | ([inputs?: $List$$Type<($ItemStack$$Type)>, inputsConsumed?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlloySmeltingRecipe$Input$$Original = $AlloySmeltingRecipe$Input;}
declare module "com.enderio.enderio.content.machines.farming_station.FarmingStationBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$FarmingStationBlockEntity} from "com.enderio.enderio.content.machines.farming_station.FarmingStationBlockEntity"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ProgressMachineBlock} from "com.enderio.enderio.foundation.block.ProgressMachineBlock"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FarmingStationBlock extends $ProgressMachineBlock<($FarmingStationBlockEntity)> implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmingStationBlock$$Type = ($FarmingStationBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FarmingStationBlock$$Original = $FarmingStationBlock;}
declare module "com.enderio.enderio.content.travel.travel_anchor.TravelAnchorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$TravelAnchorBlockEntity} from "com.enderio.enderio.content.travel.travel_anchor.TravelAnchorBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MachineBlock} from "com.enderio.enderio.foundation.block.MachineBlock"

export class $TravelAnchorBlock<T extends $TravelAnchorBlockEntity> extends $MachineBlock<(T)> {
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

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelAnchorBlock$$Type<T> = ($TravelAnchorBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravelAnchorBlock$$Original<T> = $TravelAnchorBlock<(T)>;}
declare module "com.enderio.enderio.content.conduits.probe.ConduitProbeItem$State" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component} from "net.minecraft.network.chat.Component"

export class $ConduitProbeItem$State extends $Enum<($ConduitProbeItem$State)> {
static readonly "CODEC": $Codec<($ConduitProbeItem$State)>
static readonly "COPY_PASTE": $ConduitProbeItem$State
static readonly "PROBE": $ConduitProbeItem$State
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConduitProbeItem$State)>

public "getStateText"(): $Component
public static "values"(): ($ConduitProbeItem$State)[]
public static "valueOf"(arg0: StringJS): $ConduitProbeItem$State
get "stateText"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitProbeItem$State$$Type = (("probe") | ("copy_paste"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitProbeItem$State$$Original = $ConduitProbeItem$State;}
declare module "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe$OutputItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SagMillOutputItem$$Interface} from "com.almostreliable.kubeio.binding.SagMillOutputItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$SagMillingRecipe$OutputItem$SizedTagOutput, $SagMillingRecipe$OutputItem$SizedTagOutput$$Type} from "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe$OutputItem$SizedTagOutput"
import {$Record} from "java.lang.Record"

export class $SagMillingRecipe$OutputItem extends $Record implements $SagMillOutputItem$$Interface {
static readonly "CODEC": $Codec<($SagMillingRecipe$OutputItem)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SagMillingRecipe$OutputItem)>

constructor(output: $Either$$Type<($ItemStack$$Type), ($SagMillingRecipe$OutputItem$SizedTagOutput$$Type)>, chance: float, isOptional: boolean)

public "output"(): $Either<($ItemStack), ($SagMillingRecipe$OutputItem$SizedTagOutput)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $ItemStack$$Type, arg1: float, arg2: boolean): $SagMillingRecipe$OutputItem
public static "ofTag"(arg0: $TagKey$$Type<($Item)>, arg1: integer, arg2: float, arg3: boolean): $SagMillingRecipe$OutputItem
public "isPresent"(): boolean
public "getItemStack"(): $ItemStack
public "isOptional"(): boolean
public "chance"(): float
public static "of"(arg0: $ItemStack$$Type): $SagMillingRecipe$OutputItem
public static "of"(arg0: $ItemStack$$Type, arg1: float): $SagMillingRecipe$OutputItem
public static "ofTag"(arg0: $TagKey$$Type<($Item)>, arg1: integer, arg2: float): $SagMillingRecipe$OutputItem
public static "ofTag"(arg0: $TagKey$$Type<($Item)>, arg1: integer): $SagMillingRecipe$OutputItem
get "present"(): boolean
get "itemStack"(): $ItemStack
get "optional"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$OutputItem$$Type = ({"chance"?: float, "output"?: $Either$$Type<($ItemStack$$Type), ($SagMillingRecipe$OutputItem$SizedTagOutput$$Type)>, "isOptional"?: boolean}) | ([chance?: float, output?: $Either$$Type<($ItemStack$$Type), ($SagMillingRecipe$OutputItem$SizedTagOutput$$Type)>, isOptional?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SagMillingRecipe$OutputItem$$Original = $SagMillingRecipe$OutputItem;}
declare module "com.enderio.enderio.content.fire_crafting.FireCraftingRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$FireCraftingRecipe$Result, $FireCraftingRecipe$Result$$Type} from "com.enderio.enderio.content.fire_crafting.FireCraftingRecipe$Result"
import {$Record} from "java.lang.Record"

export class $FireCraftingRecipe extends $Record implements $Recipe$$Interface<($RecipeInput)> {
constructor(results: $List$$Type<($FireCraftingRecipe$Result$$Type)>, bases: $List$$Type<($Block$$Type)>, baseTags: $List$$Type<($TagKey$$Type<($Block$$Type)>)>, dimensions: $List$$Type<($ResourceKey$$Type<($Level$$Type)>)>, blockAfterBurning: ($Block$$Type)?)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<($FireCraftingRecipe)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "baseTags"(): $List<($TagKey<($Block)>)>
public "blockAfterBurning"(): $Optional<($Block)>
public "isBaseValid"(arg0: $Block$$Type): boolean
public "isDimensionValid"(arg0: $ResourceKey$$Type<($Level)>): boolean
public "getAllBaseBlocks"(): $List<($Block)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "dimensions"(): $List<($ResourceKey<($Level)>)>
public "getType"(): $RecipeType<(never)>
public "results"(): $List<($FireCraftingRecipe$Result)>
public "isSpecial"(): boolean
public "bases"(): $List<($Block)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<($FireCraftingRecipe)>
get "allBaseBlocks"(): $List<($Block)>
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireCraftingRecipe$$Type = ({"results"?: $List$$Type<($FireCraftingRecipe$Result$$Type)>, "blockAfterBurning"?: ($Block$$Type)?, "dimensions"?: $List$$Type<($ResourceKey$$Type<($Level$$Type)>)>, "bases"?: $List$$Type<($Block$$Type)>, "baseTags"?: $List$$Type<($TagKey$$Type<($Block$$Type)>)>}) | ([results?: $List$$Type<($FireCraftingRecipe$Result$$Type)>, blockAfterBurning?: ($Block$$Type)?, dimensions?: $List$$Type<($ResourceKey$$Type<($Level$$Type)>)>, bases?: $List$$Type<($Block$$Type)>, baseTags?: $List$$Type<($TagKey$$Type<($Block$$Type)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireCraftingRecipe$$Original = $FireCraftingRecipe;}
declare module "com.enderio.enderio.content.machines.alloy.AlloySmeltingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AlloySmeltingRecipe} from "com.enderio.enderio.content.machines.alloy.AlloySmeltingRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AlloySmeltingRecipe$Serializer implements $RecipeSerializer$$Interface<($AlloySmeltingRecipe)> {
static readonly "CODEC": $MapCodec<($AlloySmeltingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AlloySmeltingRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AlloySmeltingRecipe)>
public "codec"(): $MapCodec<($AlloySmeltingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloySmeltingRecipe$Serializer$$Type = ($AlloySmeltingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlloySmeltingRecipe$Serializer$$Original = $AlloySmeltingRecipe$Serializer;}
declare module "com.enderio.enderio.content.paint.PaintingTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PaintingTrigger$TriggerInstance} from "com.enderio.enderio.content.paint.PaintingTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PaintingTrigger extends $SimpleCriterionTrigger<($PaintingTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Block$$Type): void
public "getId"(): $ResourceLocation
public "codec"(): $Codec<($PaintingTrigger$TriggerInstance)>
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingTrigger$$Type = ($PaintingTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintingTrigger$$Original = $PaintingTrigger;}
declare module "com.enderio.enderio.content.filters.item.general.EnderItemFilterItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FilterMenuProvider} from "com.enderio.enderio.api.filter.FilterMenuProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$EnderItemFilterItem$Type$$Type} from "com.enderio.enderio.content.filters.item.general.EnderItemFilterItem$Type"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ItemFilter} from "com.enderio.enderio.api.filter.ItemFilter"
import {$EnderItemFilter} from "com.enderio.enderio.content.filters.item.general.EnderItemFilter"
import {$AbstractFilterItem} from "com.enderio.enderio.content.filters.AbstractFilterItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $EnderItemFilterItem extends $AbstractFilterItem<($EnderItemFilter)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "FILTER_MENU_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($FilterMenuProvider)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ITEM_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($ItemFilter)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $EnderItemFilterItem$Type$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderItemFilterItem$$Type = ($EnderItemFilterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderItemFilterItem$$Original = $EnderItemFilterItem;}
declare module "com.enderio.enderio.content.machines.capacitor_bank.CapacitorBankBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LegacyMachineBlockEntity, $LegacyMachineBlockEntity$$Type} from "com.enderio.enderio.foundation.block.entity.legacy.LegacyMachineBlockEntity"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$PlayerInteractEvent$RightClickBlock$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$LegacyMachineBlock} from "com.enderio.enderio.foundation.block.legacy.LegacyMachineBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$AdvancementEvent$AdvancementEarnEvent$$Type} from "net.neoforged.neoforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent"
import {$CapacityTier, $CapacityTier$$Type} from "com.enderio.enderio.foundation.block.entity.multienergy.CapacityTier"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AdvancedTooltipProvider$$Interface} from "com.enderio.core.client.item.AdvancedTooltipProvider"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CapacitorBankBlock extends $LegacyMachineBlock implements $AdvancedTooltipProvider$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_ENTITY_TYPE_CODEC": $Codec<($Supplier<($BlockEntityType<($LegacyMachineBlockEntity)>)>)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
readonly "tier": $CapacityTier
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "PLACE_ADVANCEMENT_ID": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($BlockEntityType$$Type<($LegacyMachineBlockEntity$$Type)>)>, arg2: $CapacityTier$$Type)

public static "rightClickBlock"(arg0: $PlayerInteractEvent$RightClickBlock$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getTier"(): $CapacityTier
public "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "onAdvancement"(arg0: $AdvancementEvent$AdvancementEarnEvent$$Type): void
public "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacitorBankBlock$$Type = ($CapacitorBankBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacitorBankBlock$$Original = $CapacitorBankBlock;}
declare module "com.enderio.enderio.content.conduits.network.ConduitNodeImpl" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$NodeData, $NodeData$$Type} from "com.enderio.enderio.api.conduits.network.node.NodeData"
import {$INetworkNode$$Interface} from "com.enderio.core.common.graph.INetworkNode"
import {$ConduitDataContainer$$Type} from "com.enderio.enderio.content.conduits.legacy.ConduitDataContainer"
import {$NodeDataType$$Type} from "com.enderio.enderio.api.conduits.network.node.NodeDataType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.enderio.content.conduits.network.ConduitNetwork"
import {$ConduitNode$$Interface} from "com.enderio.enderio.api.conduits.network.node.ConduitNode"
import {$Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$IConduitNodeAttachment$$Type} from "com.enderio.enderio.content.conduits.network.IConduitNodeAttachment"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ConnectionConfigType$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$Network$$Type} from "com.enderio.core.common.graph.Network"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConnectionConfig} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ConnectionStatus} from "com.enderio.enderio.api.conduits.connection.ConnectionStatus"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ConduitNodeImpl implements $INetworkNode$$Interface<($ConduitNetwork), ($ConduitNodeImpl)>, $ConduitNode$$Interface {
static readonly "CODEC": $Codec<($ConduitNodeImpl)>

constructor(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $BlockPos$$Type, arg2: $ConduitDataContainer$$Type)
constructor(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $BlockPos$$Type, arg2: $NodeData$$Type)
constructor(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $BlockPos$$Type)

public "markDirty"(): void
public "isTicking"(): boolean
public "getConnectionStatus"(arg0: $Direction$$Type): $ConnectionStatus
public "getNeighborSidedCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>, arg1: $Direction$$Type): TCapability
public "getNeighborVoidCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), (void)>, arg1: $Direction$$Type): TCapability
public "hasNodeData"(arg0: $NodeDataType$$Type<(never)>): boolean
public "getConnectionConfig"(arg0: $Direction$$Type): $ConnectionConfig
public "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Direction$$Type, arg1: $ConnectionConfigType$$Type<(T)>): T
public "getNodeData"(): $NodeData
public "getNodeData"<D extends $NodeData>(arg0: $NodeDataType$$Type<(D)>): D
public "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
public "onRedstoneChanged"(): void
public "getOrCreateNodeData"<D extends $NodeData>(arg0: $NodeDataType$$Type<(D)>): D
public "setNodeData"<D extends $NodeData>(arg0: D): void
public "isConnectedToBlock"(arg0: $Direction$$Type): boolean
public "isConnectedTo"(arg0: $Direction$$Type): boolean
public "getNetwork"(): $ConduitNetwork
public "setNetwork"(arg0: $ConduitNetwork$$Type): void
public "setNetwork"(arg0: $Network$$Type): void
public "onConfigChanged"(): void
public "detach"(): void
public "isValid"(): boolean
public "pos"(): $BlockPos
public "attach"(arg0: $IConduitNodeAttachment$$Type, arg1: $Holder$$Type<($Conduit<(never), (never)>)>): void
public "isLoaded"(): boolean
public "getInventory"(arg0: $Direction$$Type): $IItemHandlerModifiable
get "ticking"(): boolean
get "nodeData"(): $NodeData
set "nodeData"(value: D)
get "network"(): $ConduitNetwork
set "network"(value: $ConduitNetwork$$Type)
set "network"(value: $Network$$Type)
get "valid"(): boolean
get "loaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNodeImpl$$Type = ($ConduitNodeImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitNodeImpl$$Original = $ConduitNodeImpl;}
declare module "com.enderio.enderio.content.enchanter.EnchanterRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EnchanterRecipe$Input, $EnchanterRecipe$Input$$Type} from "com.enderio.enderio.content.enchanter.EnchanterRecipe$Input"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$Record} from "java.lang.Record"

export class $EnchanterRecipe extends $Record implements $Recipe$$Interface<($EnchanterRecipe$Input)> {
constructor(enchantment: $Holder$$Type<($Enchantment)>, costMultiplier: integer, input: $SizedIngredient$$Type)

public "enchantment"(): $Holder<($Enchantment)>
public "getEnchantmentLevel"(arg0: integer): integer
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $EnchanterRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getXPCost"(arg0: $EnchanterRecipe$Input$$Type): integer
public "getInputAmountConsumed"(arg0: $EnchanterRecipe$Input$$Type): integer
public "getLapisForLevel"(arg0: integer): integer
public "costMultiplier"(): integer
public "getXPCostForLevel"(arg0: integer): integer
public "getBookForLevel"(arg0: integer): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $EnchanterRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "input"(): $SizedIngredient
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $EnchanterRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterRecipe$$Type = ({"costMultiplier"?: integer, "enchantment"?: $Holder$$Type<($Enchantment)>, "input"?: $SizedIngredient$$Type}) | ([costMultiplier?: integer, enchantment?: $Holder$$Type<($Enchantment)>, input?: $SizedIngredient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchanterRecipe$$Original = $EnchanterRecipe;}
declare module "com.enderio.enderio.content.filters.item.general.DamageFilterMode" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"

export class $DamageFilterMode extends $Enum<($DamageFilterMode)> implements $StringRepresentable$$Interface {
static readonly "NOT_DAMAGED": $DamageFilterMode
static readonly "CODEC": $Codec<($DamageFilterMode)>
static readonly "MORE_THAN_50": $DamageFilterMode
static readonly "IS_DAMAGEABLE": $DamageFilterMode
static readonly "BY_ID": $IntFunction<($DamageFilterMode)>
static readonly "UP_TO_75": $DamageFilterMode
static readonly "IGNORE": $DamageFilterMode
static readonly "UP_TO_50": $DamageFilterMode
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($DamageFilterMode)>
static readonly "UP_TO_25": $DamageFilterMode
static readonly "ONLY_DAMAGED": $DamageFilterMode
static readonly "MORE_THAN_75": $DamageFilterMode
static readonly "NOT_DAMAGEABLE": $DamageFilterMode
static readonly "MORE_THAN_25": $DamageFilterMode

public static "values"(): ($DamageFilterMode)[]
public "test"(arg0: $ItemStack$$Type): boolean
public static "valueOf"(arg0: StringJS): $DamageFilterMode
public "getComponent"(): $MutableComponent
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "component"(): $MutableComponent
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageFilterMode$$Type = (("ignore") | ("up_to_25") | ("more_than_25") | ("up_to_50") | ("more_than_50") | ("up_to_75") | ("more_than_75") | ("not_damaged") | ("only_damaged") | ("is_damageable") | ("not_damageable"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageFilterMode$$Original = $DamageFilterMode;}
declare module "com.enderio.enderio.content.machines.slicer.SlicingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SlicingRecipe} from "com.enderio.enderio.content.machines.slicer.SlicingRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SlicingRecipe$Serializer implements $RecipeSerializer$$Interface<($SlicingRecipe)> {
static readonly "CODEC": $MapCodec<($SlicingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SlicingRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SlicingRecipe)>
public "codec"(): $MapCodec<($SlicingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicingRecipe$Serializer$$Type = ($SlicingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlicingRecipe$Serializer$$Original = $SlicingRecipe$Serializer;}
declare module "com.enderio.enderio.content.machines.vat.VatBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidTankUser$$Type, $FluidTankUser$$Interface} from "com.enderio.enderio.foundation.attachment.FluidTankUser"
import {$Direction} from "net.minecraft.core.Direction"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$TankAccess, $TankAccess$$Type} from "com.enderio.enderio.foundation.io.fluid.TankAccess"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MachineFluidHandler} from "com.enderio.enderio.foundation.io.fluid.MachineFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MachineFluidTank} from "com.enderio.enderio.foundation.io.fluid.MachineFluidTank"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MachineInventoryLayout} from "com.enderio.enderio.foundation.inventory.MachineInventoryLayout"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FermentingRecipe} from "com.enderio.enderio.content.machines.vat.FermentingRecipe"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SideConfig} from "com.enderio.enderio.api.io.SideConfig"
import {$MachineBlockEntity} from "com.enderio.enderio.foundation.block.entity.MachineBlockEntity"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$MachineTankLayout} from "com.enderio.enderio.foundation.io.fluid.MachineTankLayout"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$MultiSlotAccess} from "com.enderio.enderio.foundation.inventory.MultiSlotAccess"
import {$FluidItemInteractive$$Interface} from "com.enderio.enderio.foundation.io.fluid.FluidItemInteractive"
import {$SoulBindable} from "com.enderio.enderio.api.soul.binding.SoulBindable"

export class $VatBlockEntity extends $MachineBlockEntity implements $FluidTankUser$$Interface, $FluidItemInteractive$$Interface {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "REAGENTS": $MultiSlotAccess
static readonly "TANK_CAPACITY": integer
static readonly "DATA": StringJS
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($SoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "OUTPUT_TANK": $TankAccess
static readonly "INDEX": StringJS
static readonly "INPUT_TANK": $TankAccess
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getOutputTank"(): $MachineFluidTank
public "getInputTank"(): $MachineFluidTank
public "serverTick"(): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getRecipe"(): $RecipeHolder<($FermentingRecipe)>
public "createInventoryLayout"(): $MachineInventoryLayout
public "getTankLayout"(): $MachineTankLayout
public "getCraftingProgress"(): float
public "moveFluidToOutputTank"(): void
public "dumpOutputTank"(): void
public "createFluidHandler"(): $MachineFluidHandler
public "isActive"(): boolean
public "onLoad"(): void
public "getFluidHandler"(): $MachineFluidHandler
public "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "handleFluidItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $FluidTankUser$$Type, arg4: $TankAccess$$Type): boolean
get "outputTank"(): $MachineFluidTank
get "inputTank"(): $MachineFluidTank
get "recipe"(): $RecipeHolder<($FermentingRecipe)>
get "tankLayout"(): $MachineTankLayout
get "craftingProgress"(): float
get "active"(): boolean
get "fluidHandler"(): $MachineFluidHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatBlockEntity$$Type = ($VatBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VatBlockEntity$$Original = $VatBlockEntity;}
declare module "com.enderio.enderio.content.cold_fire.ColdFireIgniter" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICustomCreativeTabEntries$$Interface} from "com.enderio.core.common.item.ICustomCreativeTabEntries"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$IFluidHandlerItem} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ColdFireIgniter extends $Item implements $ICustomCreativeTabEntries$$Interface {
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($IFluidHandlerItem)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "addAdditionalCreativeTabEntries"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "shouldAddDefaultItem"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColdFireIgniter$$Type = ($ColdFireIgniter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColdFireIgniter$$Original = $ColdFireIgniter;}
declare module "com.enderio.enderio.content.enchanter.EnchanterRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$EnchanterRecipe} from "com.enderio.enderio.content.enchanter.EnchanterRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $EnchanterRecipe$Serializer implements $RecipeSerializer$$Interface<($EnchanterRecipe)> {
static readonly "CODEC": $MapCodec<($EnchanterRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnchanterRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EnchanterRecipe)>
public "codec"(): $MapCodec<($EnchanterRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterRecipe$Serializer$$Type = ($EnchanterRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchanterRecipe$Serializer$$Original = $EnchanterRecipe$Serializer;}
declare module "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$SagMillingRecipe} from "com.enderio.enderio.content.machines.sag_mill.SagMillingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SagMillingRecipe$Serializer implements $RecipeSerializer$$Interface<($SagMillingRecipe)> {
static readonly "CODEC": $MapCodec<($SagMillingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SagMillingRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SagMillingRecipe)>
public "codec"(): $MapCodec<($SagMillingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SagMillingRecipe$Serializer$$Type = ($SagMillingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SagMillingRecipe$Serializer$$Original = $SagMillingRecipe$Serializer;}
declare module "com.enderio.enderio.content.filters.soul.EnderSoulFilterMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EnderSoulFilterItem$Type, $EnderSoulFilterItem$Type$$Type} from "com.enderio.enderio.content.filters.soul.EnderSoulFilterItem$Type"
import {$AbstractFilterMenu} from "com.enderio.enderio.content.filters.AbstractFilterMenu"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.enderio.content.filters.AbstractFilterMenu$FilterAccess"
import {$EnderSoulFilter} from "com.enderio.enderio.content.filters.soul.EnderSoulFilter"

export class $EnderSoulFilterMenu extends $AbstractFilterMenu<($EnderSoulFilter)> {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "BACK_BUTTON_ID": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "type": $EnderSoulFilterItem$Type
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "IS_INVERTED_BUTTON_ID": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "SHOULD_COMPARE_TAGS_BUTTON_ID": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: $EnderSoulFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type, arg4: $AbstractFilterMenu$FilterAccess$$Type)
constructor(arg0: $MenuType$$Type<(never)>, arg1: $EnderSoulFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type)

public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "isInverted"(): boolean
public "shouldCompareTags"(): boolean
get "inverted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderSoulFilterMenu$$Type = ($EnderSoulFilterMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderSoulFilterMenu$$Original = $EnderSoulFilterMenu;}
declare module "com.enderio.enderio.content.enderface.EnderfaceTravelTarget" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$NetworkDataSlot$CodecType} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$TravelTarget$$Interface} from "com.enderio.enderio.api.travel.TravelTarget"
import {$TravelTargetSerializer} from "com.enderio.enderio.api.travel.TravelTargetSerializer"
import {$TravelTargetType} from "com.enderio.enderio.api.travel.TravelTargetType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $EnderfaceTravelTarget extends $Record implements $TravelTarget$$Interface {
static "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($EnderfaceTravelTarget)>

constructor(pos: $BlockPos$$Type)

public "canInteract"(): boolean
public "canTeleportTo"(): boolean
public "canTravelTo"(): boolean
public "item2BlockRange"(): integer
public "block2BlockRange"(): integer
public "canJumpTo"(): boolean
public "type"(): $TravelTargetType<(never)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pos"(): $BlockPos
public "serializer"(): $TravelTargetSerializer<(never)>
public "interact"(arg0: $Level$$Type, arg1: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderfaceTravelTarget$$Type = ({"pos"?: $BlockPos$$Type}) | ([pos?: $BlockPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderfaceTravelTarget$$Original = $EnderfaceTravelTarget;}
declare module "com.enderio.enderio.content.conduits.bundle.ConduitShape" {
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Conduit} from "com.enderio.enderio.api.conduits.Conduit"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ConduitBundle$$Type} from "com.enderio.enderio.api.conduits.bundle.ConduitBundle"
import {$Holder} from "net.minecraft.core.Holder"

export class $ConduitShape {
static readonly "CONNECTION": $VoxelShape

constructor()

public "getTotalShape"(): $VoxelShape
public "getConduit"(arg0: $BlockPos$$Type, arg1: $HitResult$$Type): $Holder<($Conduit<(never), (never)>)>
public "getConnectionFromHit"(arg0: $BlockPos$$Type, arg1: $HitResult$$Type): $Pair<($Direction), ($Holder<($Conduit<(never), (never)>)>)>
public "getShapeFromHit"(arg0: $BlockPos$$Type, arg1: $HitResult$$Type): $VoxelShape
public static "rotateVoxelShape"(arg0: $VoxelShape$$Type, arg1: $Direction$$Type): $VoxelShape
public "updateConduit"(arg0: $ConduitBundle$$Type): void
get "totalShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitShape$$Type = ($ConduitShape);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitShape$$Original = $ConduitShape;}
declare module "com.enderio.enderio.content.machines.farming_station.FarmingStationBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoweredMachineBlockEntity} from "com.enderio.enderio.foundation.block.entity.PoweredMachineBlockEntity"
import {$List$$Type} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$FakePlayer} from "net.neoforged.neoforge.common.util.FakePlayer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$SingleSlotAccess} from "com.enderio.enderio.foundation.inventory.SingleSlotAccess"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FarmingMachine$$Interface} from "com.enderio.enderio.api.farm.FarmingMachine"
import {$Soul, $Soul$$Type} from "com.enderio.enderio.api.soul.Soul"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EntityType} from "net.minecraft.world.entity.EntityType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ActionRange, $ActionRange$$Type} from "com.enderio.enderio.foundation.attachment.ActionRange"
import {$SideConfig} from "com.enderio.enderio.api.io.SideConfig"
import {$RangedActor$$Interface} from "com.enderio.enderio.foundation.attachment.RangedActor"
import {$MachineBlockEntity} from "com.enderio.enderio.foundation.block.entity.MachineBlockEntity"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$MultiSlotAccess} from "com.enderio.enderio.foundation.inventory.MultiSlotAccess"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$SoulBindable, $SoulBindable$$Interface} from "com.enderio.enderio.api.soul.binding.SoulBindable"

export class $FarmingStationBlockEntity extends $PoweredMachineBlockEntity implements $RangedActor$$Interface, $FarmingMachine$$Interface, $SoulBindable$$Interface {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "BONEMEAL": $MultiSlotAccess
static readonly "OUTPUT": $MultiSlotAccess
static readonly "DATA": StringJS
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($SoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($PoweredMachineBlockEntity), ($Direction), ($IEnergyStorage)>
static readonly "INDEX": StringJS
static readonly "AREAS": $MultiSlotAccess
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>
static readonly "TOOLS": $MultiSlotAccess

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "serverTick"(): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getMaxRange"(): integer
public "isSoulValid"(arg0: $Soul$$Type): boolean
public "bindSoul"(arg0: $Soul$$Type): void
public "canBind"(): boolean
public "getBoundSoul"(): $Soul
public "getParticleLocation"(): $BlockPos
public "getActionRange"(): $ActionRange
public "setActionRange"(arg0: $ActionRange$$Type): void
public "collectDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $BlockPos$$Type): boolean
public "getSeedForPos"(arg0: $BlockPos$$Type): $SingleSlotAccess
public "handleDrops"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $ItemStack$$Type): boolean
public "consumeBonemeal"(): boolean
public "getSeedsForPos"(arg0: $BlockPos$$Type): $ItemStack
public "getShears"(): $ItemStack
public "getFarmingRange"(): integer
public "getHoe"(): $ItemStack
public "getAxe"(): $ItemStack
public "getPosition"(): $BlockPos
public "isActive"(): boolean
public "onLoad"(): void
public "clientTick"(): void
public "getEntityType"(): $EntityType<(never)>
public "getPlayer"(): $FakePlayer
public "isRangeVisible"(): boolean
public "setRangeVisible"(arg0: boolean): void
public "increaseRange"(): void
public "decreaseRange"(): void
public "getRange"(): integer
public "getLevel"(): $Level
public "useStack"(arg0: $BlockPos$$Type, arg1: $ItemStack$$Type): $InteractionResult
public "hasSoul"(): boolean
get "maxRange"(): integer
get "boundSoul"(): $Soul
get "particleLocation"(): $BlockPos
get "actionRange"(): $ActionRange
set "actionRange"(value: $ActionRange$$Type)
get "shears"(): $ItemStack
get "farmingRange"(): integer
get "hoe"(): $ItemStack
get "axe"(): $ItemStack
get "position"(): $BlockPos
get "active"(): boolean
get "entityType"(): $EntityType<(never)>
get "player"(): $FakePlayer
get "rangeVisible"(): boolean
set "rangeVisible"(value: boolean)
get "range"(): integer
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmingStationBlockEntity$$Type = ($FarmingStationBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FarmingStationBlockEntity$$Original = $FarmingStationBlockEntity;}
declare module "com.enderio.enderio.content.paint.PaintingTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $PaintingTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
constructor(player: ($ContextAwarePredicate$$Type)?, paint: $Block$$Type)

public static "painted"(arg0: $Block$$Type): $Criterion<($PaintingTrigger$TriggerInstance)>
public "paint"(): $Block
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Block$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "paint"?: $Block$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, paint?: $Block$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintingTrigger$TriggerInstance$$Original = $PaintingTrigger$TriggerInstance;}
declare module "com.enderio.enderio.content.conduits.ConduitBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICustomCreativeTabEntries$$Interface} from "com.enderio.core.common.item.ICustomCreativeTabEntries"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ConduitBlockItem extends $BlockItem implements $ICustomCreativeTabEntries$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "addAdditionalCreativeTabEntries"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "shouldAddDefaultItem"(): boolean
public static "getStackFor"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: integer): $ItemStack
public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "getName"(arg0: $ItemStack$$Type): $Component
public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBlockItem$$Type = ($ConduitBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitBlockItem$$Original = $ConduitBlockItem;}
declare module "com.enderio.enderio.content.machines.vat.VatBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VatBlockEntity} from "com.enderio.enderio.content.machines.vat.VatBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$ProgressMachineBlock} from "com.enderio.enderio.foundation.block.ProgressMachineBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $VatBlock extends $ProgressMachineBlock<($VatBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VatBlock$$Type = ($VatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VatBlock$$Original = $VatBlock;}
declare module "com.enderio.enderio.content.capacitors.LootCapacitorItem" {
import {$CapacitorItem} from "com.enderio.enderio.content.capacitors.CapacitorItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICustomCreativeTabEntries$$Interface} from "com.enderio.core.common.item.ICustomCreativeTabEntries"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component} from "net.minecraft.network.chat.Component"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export class $LootCapacitorItem extends $CapacitorItem implements $ICustomCreativeTabEntries$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "shouldAddDefaultItem"(): boolean
public "getName"(arg0: $ItemStack$$Type): $Component
public "addAdditionalCreativeTabEntries"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCapacitorItem$$Type = ($LootCapacitorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootCapacitorItem$$Original = $LootCapacitorItem;}
declare module "com.enderio.enderio.content.travel.travel_anchor.PaintedTravelAnchorBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$Direction} from "net.minecraft.core.Direction"
import {$TravelAnchorBlockEntity} from "com.enderio.enderio.content.travel.travel_anchor.TravelAnchorBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SideConfig} from "com.enderio.enderio.api.io.SideConfig"
import {$MachineBlockEntity} from "com.enderio.enderio.foundation.block.entity.MachineBlockEntity"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$SingleSlotAccess} from "com.enderio.enderio.foundation.inventory.SingleSlotAccess"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$PaintedBlockEntity$$Interface} from "com.enderio.enderio.content.paint.block.entity.PaintedBlockEntity"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$SoulBindable} from "com.enderio.enderio.api.soul.binding.SoulBindable"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PaintedTravelAnchorBlockEntity extends $TravelAnchorBlockEntity implements $PaintedBlockEntity$$Interface {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "GHOST": $SingleSlotAccess
static readonly "DATA": StringJS
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($SoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $Packet
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getPrimaryPaint"(): $Optional<($Block)>
public "setPrimaryPaint"(arg0: $Block$$Type): void
public "getModelData"(): $ModelData
public "hasSecondaryPaint"(): boolean
public "getSecondaryPaint"(): $Optional<($Block)>
public "setSecondaryPaint"(arg0: $Block$$Type): void
public static "createAndRegisterModelProperty"(): $ModelProperty<($Block)>
get "updatePacket"(): $Packet
get "primaryPaint"(): $Optional<($Block)>
set "primaryPaint"(value: $Block$$Type)
get "modelData"(): $ModelData
get "secondaryPaint"(): $Optional<($Block)>
set "secondaryPaint"(value: $Block$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedTravelAnchorBlockEntity$$Type = ($PaintedTravelAnchorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedTravelAnchorBlockEntity$$Original = $PaintedTravelAnchorBlockEntity;}
declare module "com.enderio.enderio.content.misc_blocks.ReinforcedObsidianBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReinforcedObsidianBlock extends $Block {
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

public "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedObsidianBlock$$Type = ($ReinforcedObsidianBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReinforcedObsidianBlock$$Original = $ReinforcedObsidianBlock;}
declare module "com.enderio.enderio.content.travel.travel_anchor.PaintedTravelAnchorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$TravelAnchorBlock} from "com.enderio.enderio.content.travel.travel_anchor.TravelAnchorBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$PaintedBlock$$Interface} from "com.enderio.enderio.content.paint.block.PaintedBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$PaintedTravelAnchorBlockEntity} from "com.enderio.enderio.content.travel.travel_anchor.PaintedTravelAnchorBlockEntity"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PaintedTravelAnchorBlock extends $TravelAnchorBlock<($PaintedTravelAnchorBlockEntity)> implements $PaintedBlock$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
public "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedTravelAnchorBlock$$Type = ($PaintedTravelAnchorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedTravelAnchorBlock$$Original = $PaintedTravelAnchorBlock;}
declare module "com.enderio.enderio.content.misc_blocks.skull.WallEnderSkullBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$WallSkullBlock} from "net.minecraft.world.level.block.WallSkullBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WallEnderSkullBlock extends $WallSkullBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallSkullBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallEnderSkullBlock$$Type = ($WallEnderSkullBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WallEnderSkullBlock$$Original = $WallEnderSkullBlock;}
declare module "com.enderio.enderio.content.storage.fluid_tank.FluidTankBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FluidTankBlockEntity, $FluidTankBlockEntity$$Type} from "com.enderio.enderio.content.storage.fluid_tank.FluidTankBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MachineBlock} from "com.enderio.enderio.foundation.block.MachineBlock"

export class $FluidTankBlock extends $MachineBlock<($FluidTankBlockEntity)> {
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

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<($FluidTankBlockEntity$$Type)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankBlock$$Type = ($FluidTankBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidTankBlock$$Original = $FluidTankBlock;}
declare module "com.enderio.enderio.content.tools.vials.VoidVialItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $VoidVialItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidVialItem$$Type = ($VoidVialItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidVialItem$$Original = $VoidVialItem;}
declare module "com.enderio.enderio.content.storage.fluid_tank.TankRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TankRecipe} from "com.enderio.enderio.content.storage.fluid_tank.TankRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $TankRecipe$Serializer implements $RecipeSerializer$$Interface<($TankRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TankRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($TankRecipe)>
public "codec"(): $MapCodec<($TankRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRecipe$Serializer$$Type = ($TankRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankRecipe$Serializer$$Original = $TankRecipe$Serializer;}
declare module "com.enderio.enderio.content.paint.block.PaintedBlock" {
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$RespawnPosAngle} from "net.minecraft.server.level.ServerPlayer$RespawnPosAngle"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IBlockExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IBlockExtension"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BubbleColumnDirection} from "net.neoforged.neoforge.common.enums.BubbleColumnDirection"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"

export interface $PaintedBlock$$Interface extends $IBlockExtension$$Interface {
}

export class $PaintedBlock implements $PaintedBlock$$Interface {
static readonly "DEFAULT_PAINT": $Block

 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
 "getPaintedStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ItemLike$$Type): $ItemStack
 "getPaintState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
 "getPaint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Block
 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
 "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "ignitedByLava"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "isStickyBlock"(arg0: $BlockState$$Type): boolean
 "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "getRespawnPosition"(arg0: $BlockState$$Type, arg1: $EntityType$$Type<(never)>, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "getStateAtViewpoint"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $BlockState
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "canStickTo"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
 "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
 "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
 "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "shouldHideAdjacentFluidFace"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $FluidState$$Type): boolean
 "isEmpty"(arg0: $BlockState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintedBlock$$Type = ($PaintedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintedBlock$$Original = $PaintedBlock;}
declare module "com.enderio.enderio.content.broken_spawner.BrokenSpawnerItem" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICustomCreativeTabEntries$$Interface} from "com.enderio.core.common.item.ICustomCreativeTabEntries"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Soul$$Type} from "com.enderio.enderio.api.soul.Soul"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export class $BrokenSpawnerItem extends $Item implements $ICustomCreativeTabEntries$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "getPossibleStacks"(): $List<($ItemStack)>
public "shouldAddDefaultItem"(): boolean
public static "forSoul"(arg0: $Soul$$Type): $ItemStack
public "addAdditionalCreativeTabEntries"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static get "possibleStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrokenSpawnerItem$$Type = ($BrokenSpawnerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrokenSpawnerItem$$Original = $BrokenSpawnerItem;}
declare module "com.enderio.enderio.content.misc_blocks.ResettingLeverBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LeverBlock} from "net.minecraft.world.level.block.LeverBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ResettingLeverBlock extends $LeverBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LeverBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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
static readonly "FACE": $EnumProperty<($AttachFace)>

constructor(arg0: integer, arg1: boolean)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "delay"(): integer
public "inverted"(): boolean
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResettingLeverBlock$$Type = ($ResettingLeverBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResettingLeverBlock$$Original = $ResettingLeverBlock;}
declare module "com.enderio.enderio.content.glass.GlassCollisionPredicate" {
import {$Enum} from "java.lang.Enum"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$EntityCollisionContext$$Type} from "net.minecraft.world.phys.shapes.EntityCollisionContext"

export class $GlassCollisionPredicate extends $Enum<($GlassCollisionPredicate)> {
static readonly "ANIMALS_PASS": $GlassCollisionPredicate
static readonly "PLAYERS_BLOCK": $GlassCollisionPredicate
static readonly "MOBS_PASS": $GlassCollisionPredicate
static readonly "PLAYERS_PASS": $GlassCollisionPredicate
static readonly "ANIMALS_BLOCK": $GlassCollisionPredicate
static readonly "MOBS_BLOCK": $GlassCollisionPredicate
static readonly "NONE": $GlassCollisionPredicate

public "canPass"(arg0: $EntityCollisionContext$$Type): boolean
public static "invert"(arg0: $GlassCollisionPredicate$$Type): $GlassCollisionPredicate
public "shortName"(): StringJS
public static "values"(): ($GlassCollisionPredicate)[]
public static "valueOf"(arg0: StringJS): $GlassCollisionPredicate
public "getComponent"(): $MutableComponent
public static "fromToken"(arg0: $Item$$Type): $GlassCollisionPredicate
get "component"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassCollisionPredicate$$Type = (("none") | ("players_pass") | ("players_block") | ("mobs_pass") | ("mobs_block") | ("animals_pass") | ("animals_block"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlassCollisionPredicate$$Original = $GlassCollisionPredicate;}
declare module "com.enderio.enderio.content.filters.redstone.RedstoneFilterItem" {
import {$RedstoneFilterItem$Type$$Type} from "com.enderio.enderio.content.filters.redstone.RedstoneFilterItem$Type"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$RedstoneInputFilter} from "com.enderio.enderio.api.filter.RedstoneInputFilter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$RedstoneOutputFilter} from "com.enderio.enderio.api.filter.RedstoneOutputFilter"

export class $RedstoneFilterItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "MAX_BAR_WIDTH": integer
static readonly "TIMER_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInputFilter)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "NOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneOutputFilter)>
static readonly "OR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneOutputFilter)>
static readonly "SENSOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInputFilter)>
static readonly "COUNT_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneOutputFilter)>
static readonly "NOT_FILTER_PROVIDER_INSERT": $ICapabilityProvider<($ItemStack), (void), ($RedstoneOutputFilter)>
static readonly "AND_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneOutputFilter)>
static readonly "NAND_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneOutputFilter)>
static readonly "TLATCH_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneOutputFilter)>
static readonly "XNOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneOutputFilter)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "NOT_FILTER_PROVIDER_EXTRACT": $ICapabilityProvider<($ItemStack), (void), ($RedstoneInputFilter)>
static readonly "XOR_FILTER_PROVIDER": $ICapabilityProvider<($ItemStack), (void), ($RedstoneOutputFilter)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $RedstoneFilterItem$Type$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneFilterItem$$Type = ($RedstoneFilterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneFilterItem$$Original = $RedstoneFilterItem;}
declare module "com.enderio.enderio.content.travel.travel_anchor.TravelAnchorBlockEntity" {
import {$Direction} from "net.minecraft.core.Direction"
import {$SideConfig} from "com.enderio.enderio.api.io.SideConfig"
import {$MachineBlockEntity} from "com.enderio.enderio.foundation.block.entity.MachineBlockEntity"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$SingleSlotAccess} from "com.enderio.enderio.foundation.inventory.SingleSlotAccess"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SoulBindable} from "com.enderio.enderio.api.soul.binding.SoulBindable"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MachineInventoryLayout} from "com.enderio.enderio.foundation.inventory.MachineInventoryLayout"

export class $TravelAnchorBlockEntity extends $MachineBlockEntity {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "GHOST": $SingleSlotAccess
static readonly "DATA": StringJS
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($SoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "createInventoryLayout"(): $MachineInventoryLayout
public "setIsVisible"(arg0: boolean): void
public "getName"(): StringJS
public "setName"(arg0: StringJS): void
public "isActive"(): boolean
public "getIcon"(): $Item
public "setIcon"(arg0: $Item$$Type): void
public "isVisible"(): boolean
get "name"(): StringJS
set "name"(value: StringJS)
get "active"(): boolean
get "icon"(): $Item
set "icon"(value: $Item$$Type)
get "visible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelAnchorBlockEntity$$Type = ($TravelAnchorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravelAnchorBlockEntity$$Original = $TravelAnchorBlockEntity;}
declare module "com.enderio.enderio.content.filters.fluid.EnderFluidFilterMenu" {
import {$EnderFluidFilter} from "com.enderio.enderio.content.filters.fluid.EnderFluidFilter"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractFilterMenu} from "com.enderio.enderio.content.filters.AbstractFilterMenu"
import {$EnderFluidFilterItem$Type, $EnderFluidFilterItem$Type$$Type} from "com.enderio.enderio.content.filters.fluid.EnderFluidFilterItem$Type"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$AbstractFilterMenu$FilterAccess$$Type} from "com.enderio.enderio.content.filters.AbstractFilterMenu$FilterAccess"

export class $EnderFluidFilterMenu extends $AbstractFilterMenu<($EnderFluidFilter)> {
static readonly "SHOULD_COMPARE_COMPONENTS_BUTTON_ID": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "BACK_BUTTON_ID": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "type": $EnderFluidFilterItem$Type
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "IS_INVERTED_BUTTON_ID": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: $EnderFluidFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type, arg4: $AbstractFilterMenu$FilterAccess$$Type)
constructor(arg0: $MenuType$$Type<(never)>, arg1: $EnderFluidFilterItem$Type$$Type, arg2: integer, arg3: $Inventory$$Type)

public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "isInverted"(): boolean
public "shouldCompareComponents"(): boolean
get "inverted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderFluidFilterMenu$$Type = ($EnderFluidFilterMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderFluidFilterMenu$$Original = $EnderFluidFilterMenu;}
declare module "com.enderio.enderio.content.misc_blocks.EIOPressurePlateBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$PressurePlateBlock} from "net.minecraft.world.level.block.PressurePlateBlock"
import {$EIOPressurePlateBlock$Detector, $EIOPressurePlateBlock$Detector$$Type} from "com.enderio.enderio.content.misc_blocks.EIOPressurePlateBlock$Detector"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $EIOPressurePlateBlock extends $PressurePlateBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PressurePlateBlock)>
static readonly "HOSTILE_MOB": $EIOPressurePlateBlock$Detector
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "PLAYER": $EIOPressurePlateBlock$Detector
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $EIOPressurePlateBlock$Detector$$Type, arg2: boolean)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EIOPressurePlateBlock$$Type = ($EIOPressurePlateBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EIOPressurePlateBlock$$Original = $EIOPressurePlateBlock;}
