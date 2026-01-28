declare module "de.srendi.advancedperipherals.common.addons.computercraft.pocket.PocketEnvironmentUpgrade" {
import {$IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$BasePocketUpgrade} from "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade"
import {$EnvironmentDetectorPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.EnvironmentDetectorPeripheral"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$IBasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketEnvironmentUpgrade extends $BasePocketUpgrade<($EnvironmentDetectorPeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getPeripheral"(arg0: $IPocketAccess$$Type): $IBasePeripheral
public "getType"(): $UpgradeType<($IPocketUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "type"(): $UpgradeType<($IPocketUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketEnvironmentUpgrade$$Type = ($PocketEnvironmentUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketEnvironmentUpgrade$$Original = $PocketEnvironmentUpgrade;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredHusbandryAutomataCorePeripheral" {
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$HusbandryAutomataCorePeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.HusbandryAutomataCorePeripheral"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $OverpoweredHusbandryAutomataCorePeripheral extends $HusbandryAutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": StringJS
static readonly "TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "addRotationCycle"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredHusbandryAutomataCorePeripheral$$Type = ($OverpoweredHusbandryAutomataCorePeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverpoweredHusbandryAutomataCorePeripheral$$Original = $OverpoweredHusbandryAutomataCorePeripheral;}
declare module "de.srendi.advancedperipherals.common.blocks.PlayerDetectorBlock" {
import {$PlayerDetectorEntity} from "de.srendi.advancedperipherals.common.blocks.blockentities.PlayerDetectorEntity"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$FrontAndTop} from "net.minecraft.core.FrontAndTop"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$APBlockEntityBlock} from "de.srendi.advancedperipherals.common.blocks.base.APBlockEntityBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlayerDetectorBlock extends $APBlockEntityBlock<($PlayerDetectorEntity)> {
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
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor()

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorBlock$$Type = ($PlayerDetectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerDetectorBlock$$Original = $PlayerDetectorBlock;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtleChunkyUpgrade" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$PeripheralTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ChunkyPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ChunkyPeripheral"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleChunkyUpgrade extends $PeripheralTurtleUpgrade<($ChunkyPeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "update"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): void
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleChunkyUpgrade$$Type = ($TurtleChunkyUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurtleChunkyUpgrade$$Original = $TurtleChunkyUpgrade;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PeripheralOwnerAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.PeripheralOwnerAbility"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$APFakePlayer$$Type} from "de.srendi.advancedperipherals.common.util.fakeplayer.APFakePlayer"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$FrontAndTop} from "net.minecraft.core.FrontAndTop"
import {$IPeripheralOperation$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$Function$$Type} from "java.util.function.Function"
import {$IOwnerAbility, $IOwnerAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IOwnerAbility"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IPeripheralOwner$$Interface {
get "dataStorage"(): $DataComponentPatch
get "orientation"(): $FrontAndTop
get "facing"(): $Direction
get "nbtStorage"(): $CompoundTag
get "toolInMainHand"(): $ItemStack
get "level"(): $Level
get "owner"(): $Player
get "abilities"(): $Collection<($IOwnerAbility)>
get "customName"(): StringJS
get "pos"(): $BlockPos
}

export class $IPeripheralOwner implements $IPeripheralOwner$$Interface {
 "getDataStorage"(): $DataComponentPatch
 "getOrientation"(): $FrontAndTop
 "getFacing"(): $Direction
 "attachAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$$Type<(T)>, arg1: T): void
 "getNbtStorage"(): $CompoundTag
 "putDataStorage"(arg0: $DataComponentPatch$$Type): void
 "markDataStorageDirty"(): void
 "getToolInMainHand"(): $ItemStack
 "storeItem"(arg0: $ItemStack$$Type): $ItemStack
 "isMovementPossible"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "destroyUpgrade"(): void
 "withPlayer"<T>(arg0: $Function$$Type<($APFakePlayer), (T)>): T
 "attachOperation"(...arg0: ($IPeripheralOperation$$Type<(never)>)[]): void
 "attachOperation"(arg0: $Collection$$Type<($IPeripheralOperation$$Type<(never)>)>): void
 "move"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "getLevel"(): $Level
 "getOwner"(): $Player
 "getAbilities"(): $Collection<($IOwnerAbility)>
 "getCustomName"(): StringJS
 "getPos"(): $BlockPos
 "getAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralOwner$$Type = ($IPeripheralOwner);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPeripheralOwner$$Original = $IPeripheralOwner;}
declare module "de.srendi.advancedperipherals.common.blocks.base.IHarvestableBlock" {
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $IHarvestableBlock$$Interface {

(): $TagKey$$Type<($Block$$Type)>
get "harvestTag"(): $TagKey<($Block)>
get "toolTag"(): $TagKey<($Block)>
}

export class $IHarvestableBlock implements $IHarvestableBlock$$Interface {
 "getHarvestTag"(): $TagKey<($Block)>
 "getToolTag"(): $TagKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHarvestableBlock$$Type = (() => $TagKey$$Type<($Block$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHarvestableBlock$$Original = $IHarvestableBlock;}
declare module "de.srendi.advancedperipherals.common.items.APBlockItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BaseBlockItem} from "de.srendi.advancedperipherals.common.items.base.BaseBlockItem"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $APBlockItem extends $BaseBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: $Supplier$$Type<(boolean)>)
constructor(arg0: $Block$$Type, arg1: $Supplier$$Type<(boolean)>)

public "isEnabled"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APBlockItem$$Type = ($APBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $APBlockItem$$Original = $APBlockItem;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.PeripheralOwnerAbility" {
import {$FuelAbility} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.FuelAbility"
import {$OperationAbility} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.OperationAbility"

export class $PeripheralOwnerAbility<T> {
static readonly "OPERATION": $PeripheralOwnerAbility<($OperationAbility)>
static readonly "FUEL": $PeripheralOwnerAbility<($FuelAbility<(never)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralOwnerAbility$$Type<T> = ($PeripheralOwnerAbility<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PeripheralOwnerAbility$$Original<T> = $PeripheralOwnerAbility<(T)>;}
declare module "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity" {
import {$Iterable} from "java.lang.Iterable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ICapabilityProvider$$Interface} from "de.srendi.advancedperipherals.common.blocks.base.ICapabilityProvider"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$BaseContainerBlockEntity} from "net.minecraft.world.level.block.entity.BaseContainerBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$IComputerAccess} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$LockCode} from "net.minecraft.world.LockCode"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$IPeripheralTileEntity$$Interface} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralTileEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$WorldlyContainer$$Interface} from "net.minecraft.world.WorldlyContainer"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPeripheral} from "dan200.computercraft.api.peripheral.IPeripheral"

export class $PeripheralBlockEntity<T extends $BasePeripheral<(object)>> extends $BaseContainerBlockEntity implements $WorldlyContainer$$Interface, $MenuProvider$$Interface, $IPeripheralTileEntity$$Interface, $ICapabilityProvider$$Interface {
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "lockKey": $LockCode

public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "getItems"(): $NonNullList<($ItemStack)>
public "setItems"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "getConnectedComputers"(): $Iterable<($IComputerAccess)>
public "getPeripheral"(): T
public "getPeripheralOptional"(): $Optional<(T)>
public "getPeripheralSettings"(): $CompoundTag
public "markSettingsChanged"(): void
public "getItem"(arg0: integer): $ItemStack
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "stillValid"(arg0: $Player$$Type): boolean
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "createFluidHandlerCap"(arg0: $Direction$$Type): $IFluidHandler
public "createItemHandlerCap"(arg0: $Direction$$Type): $IItemHandler
public "createPeripheralCap"(arg0: $Direction$$Type): $IPeripheral
public "getDisplayName"(): $Component
public "handleTick"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): void
public "createEnergyStorageCap"(arg0: $Direction$$Type): $IEnergyStorage
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "items"(): $NonNullList<($ItemStack)>
set "items"(value: $NonNullList$$Type<($ItemStack$$Type)>)
get "connectedComputers"(): $Iterable<($IComputerAccess)>
get "peripheral"(): T
get "peripheralOptional"(): $Optional<(T)>
get "peripheralSettings"(): $CompoundTag
get "empty"(): boolean
get "containerSize"(): integer
get "displayName"(): $Component
get "changed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralBlockEntity$$Type<T> = ($PeripheralBlockEntity<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PeripheralBlockEntity$$Original<T> = $PeripheralBlockEntity<(T)>;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.OverpoweredWeakAutomata" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$OverpoweredWeakAutomataCorePeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredWeakAutomataCorePeripheral"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $OverpoweredWeakAutomata extends $ClockwiseAnimatedTurtleUpgrade<($OverpoweredWeakAutomataCorePeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredWeakAutomata$$Type = ($OverpoweredWeakAutomata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverpoweredWeakAutomata$$Original = $OverpoweredWeakAutomata;}
declare module "de.srendi.advancedperipherals.common.items.base.BaseBlockItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $BaseBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)
constructor(arg0: $Block$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescription"(): $Component
public "isEnabled"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "description"(): $Component
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$$Type = ($BaseBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBlockItem$$Original = $BaseBlockItem;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.HusbandryAutomata" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$HusbandryAutomataCorePeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.HusbandryAutomataCorePeripheral"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $HusbandryAutomata extends $ClockwiseAnimatedTurtleUpgrade<($HusbandryAutomataCorePeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HusbandryAutomata$$Type = ($HusbandryAutomata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HusbandryAutomata$$Original = $HusbandryAutomata;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ChatBoxPeripheral" {
import {$IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$BasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$MethodResult} from "dan200.computercraft.api.lua.MethodResult"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$PeripheralBlockEntity$$Type} from "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity"
import {$IPeripheralOwner} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export class $ChatBoxPeripheral extends $BasePeripheral<($IPeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)
constructor(arg0: $PeripheralBlockEntity$$Type<(never)>)
constructor(arg0: $IPocketAccess$$Type)

public "sendMessage"(arg0: $IArguments$$Type): $MethodResult
public "sendFormattedMessage"(arg0: $IArguments$$Type): $MethodResult
public "sendFormattedToastToPlayer"(arg0: $IArguments$$Type): $MethodResult
public "sendMessageToPlayer"(arg0: $IArguments$$Type): $MethodResult
public "sendToastToPlayer"(arg0: $IArguments$$Type): $MethodResult
public "sendFormattedMessageToPlayer"(arg0: $IArguments$$Type): $MethodResult
public "update"(): void
public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatBoxPeripheral$$Type = ($ChatBoxPeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatBoxPeripheral$$Original = $ChatBoxPeripheral;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.operations.SingleOperationContext" {
import {$Serializable$$Interface} from "java.io.Serializable"

export class $SingleOperationContext implements $Serializable$$Interface {
constructor(arg0: integer, arg1: integer)

public "extraCount"(arg0: integer): $SingleOperationContext
public "getCount"(): integer
public "getDistance"(): integer
get "count"(): integer
get "distance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleOperationContext$$Type = ($SingleOperationContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleOperationContext$$Original = $SingleOperationContext;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredEndAutomataCorePeripheral" {
import {$EndAutomataCorePeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.EndAutomataCorePeripheral"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $OverpoweredEndAutomataCorePeripheral extends $EndAutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": StringJS
static readonly "TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "addRotationCycle"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredEndAutomataCorePeripheral$$Type = ($OverpoweredEndAutomataCorePeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverpoweredEndAutomataCorePeripheral$$Original = $OverpoweredEndAutomataCorePeripheral;}
declare module "de.srendi.advancedperipherals.common.util.fakeplayer.APFakePlayer" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ServerPlayerGameMode} from "net.minecraft.server.level.ServerPlayerGameMode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Trackable} from "dev.uncandango.alltheleaks.mixin.Trackable"
import {$ServerGamePacketListenerImpl} from "net.minecraft.server.network.ServerGamePacketListenerImpl"
import {$FakePlayer} from "net.neoforged.neoforge.common.util.FakePlayer"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$WeakReference} from "java.lang.ref.WeakReference"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$Abilities} from "net.minecraft.world.entity.player.Abilities"
import {$Pair} from "de.srendi.advancedperipherals.common.util.Pair"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Class} from "java.lang.Class"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$ObjectOpenCustomHashSet} from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$PlayerData} from "com.minecraftserverzone.weaponmaster.setup.playerdata.PlayerData"
import {$Map} from "java.util.Map"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Stat$$Type} from "net.minecraft.stats.Stat"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"

export class $APFakePlayer extends $FakePlayer {
 "lastHurtByPlayerTime": integer
static readonly "DEFAULT_BASE_GRAVITY": double
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
 "yHeadRot": float
 "yCloakO": double
 "noPhysics": boolean
 "yo": double
 "connection": $ServerGamePacketListenerImpl
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "swingingArm": $InteractionHand
static readonly "CRAFTING_SLOT_OFFSET": integer
static readonly "INTERACTION_DISTANCE_VERIFICATION_BUFFER": double
static readonly "ID_TAG": StringJS
static readonly "WAKE_UP_DURATION": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "wonGame": boolean
 "walkDist": float
 "lastHurt": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
readonly "gameMode": $ServerPlayerGameMode
readonly "object": any
static readonly "STANDING_DIMENSIONS": $EntityDimensions
 "yya": float
readonly "server": $MinecraftServer
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
static readonly "DEFAULT_MODEL_CUSTOMIZATION": integer
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "experienceLevel": integer
static readonly "DEFAULT_BABY_SCALE": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "PERSISTED_NBT_TAG": StringJS
static readonly "DEFAULT_BB_HEIGHT": float
 "seenCredits": boolean
 "xxa": float
 "zCloak": double
 "flyDist": float
 "currentImpulseImpactPos": $Vec3
static readonly "PASSENGERS_TAG": StringJS
 "xCloakO": double
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
static readonly "HELD_ITEM_SLOT": integer
 "yCloak": double
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
readonly "abilities": $Abilities
 "tickCount": integer
 "lastHurtByPlayer": $Player
static readonly "BOARDING_COOLDOWN": integer
static readonly "MAX_HEALTH": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
static readonly "DEFAULT_EYE_HEIGHT": float
 "level": $Level
static readonly "CROUCH_BB_HEIGHT": float
 "moveDist": float
 "zCloakO": double
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "bob": float
 "experienceProgress": float
 "totalExperience": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "containerMenu": $AbstractContainerMenu
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventoryMenu": $InventoryMenu
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
 "playerData": $PlayerData
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PROFILE": $GameProfile
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
 "levelCallback": $EntityInLevelCallback
 "enteredNetherPosition": $Vec3
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "fishing": $FishingHook
 "removeArrowTime": integer
 "walkDistO": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "yBodyRot": float
 "blocksBuilding": boolean
 "takeXpDelay": integer
static readonly "DEFAULT_BLOCK_INTERACTION_RANGE": float
 "oBob": float
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "currentExplosionCause": $Entity

constructor(arg0: $ServerLevel$$Type, arg1: $Entity$$Type, arg2: $GameProfile$$Type)

public "digBlock"(): $Pair<(boolean), (StringJS)>
public "findHit"(arg0: boolean, arg1: boolean): $HitResult
public "findHit"(arg0: boolean, arg1: boolean, arg2: $Predicate$$Type<($Entity)>): $HitResult
public "useOnSpecificEntity"(arg0: $Entity$$Type, arg1: $HitResult$$Type): $InteractionResult
public "doActionWithShiftKey"<T>(arg0: boolean, arg1: $Function$$Type<($APFakePlayer), (T)>): T
public "doActionWithRot"<T>(arg0: float, arg1: float, arg2: $Function$$Type<($APFakePlayer), (T)>): T
public static "wrapActionWithRot"<T>(arg0: float, arg1: float, arg2: $Function$$Type<($APFakePlayer), (T)>): $Function<($APFakePlayer), (T)>
public static "wrapActionWithShiftKey"<T>(arg0: boolean, arg1: $Function$$Type<($APFakePlayer), (T)>): $Function<($APFakePlayer), (T)>
public "useOnBlock"(): $InteractionResult
public "useOnEntity"(): $InteractionResult
public "useOnFilteredEntity"(arg0: $Predicate$$Type<($Entity)>): $InteractionResult
public "setLevel"(arg0: $Level$$Type): void
public "use"(arg0: boolean, arg1: boolean): $InteractionResult
public "use"(arg0: boolean, arg1: boolean, arg2: $Predicate$$Type<($Entity)>): $InteractionResult
public "isSilent"(): boolean
public "canAttack"(arg0: $LivingEntity$$Type): boolean
public "awardStat"(arg0: $Stat$$Type<(never)>): void
public "playSound"(arg0: $SoundEvent$$Type, arg1: float, arg2: float): void
public "getEyeHeight"(arg0: $Pose$$Type): float
public "self"(): $Player
public static "startTracking"(arg0: any): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>
public static "clearNullReferences"(): void
public static "getSummary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$getCachedFeetBlockState"(): $BlockState
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "silent"(): boolean
public static get "summary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APFakePlayer$$Type = ($APFakePlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $APFakePlayer$$Original = $APFakePlayer;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.WeakAutomata" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$WeakAutomataCorePeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.WeakAutomataCorePeripheral"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $WeakAutomata extends $ClockwiseAnimatedTurtleUpgrade<($WeakAutomataCorePeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakAutomata$$Type = ($WeakAutomata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeakAutomata$$Original = $WeakAutomata;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.GeoScannerPeripheral" {
import {$IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$BasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$MethodResult} from "dan200.computercraft.api.lua.MethodResult"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$PeripheralBlockEntity$$Type} from "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity"
import {$IPeripheralOwner} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export class $GeoScannerPeripheral extends $BasePeripheral<($IPeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)
constructor(arg0: $PeripheralBlockEntity$$Type<(never)>)
constructor(arg0: $IPocketAccess$$Type)

public "chunkAnalyze"(): $MethodResult
public "scan"(arg0: $IArguments$$Type): $MethodResult
public "isEnabled"(): boolean
public "cost"(arg0: integer): $MethodResult
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoScannerPeripheral$$Type = ($GeoScannerPeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoScannerPeripheral$$Original = $GeoScannerPeripheral;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.FuelAbility" {
import {$Map$$Type} from "java.util.Map"
import {$IPeripheralOperation} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$MethodResult} from "dan200.computercraft.api.lua.MethodResult"
import {$List} from "java.util.List"
import {$IPeripheralPlugin$$Interface} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralPlugin"
import {$IOwnerAbility$$Interface} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IOwnerAbility"
import {$IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$BoundMethod} from "de.srendi.advancedperipherals.lib.peripherals.BoundMethod"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export class $FuelAbility<T extends $IPeripheralOwner> implements $IOwnerAbility$$Interface, $IPeripheralPlugin$$Interface {
constructor(arg0: T)

public "consumeFuel"(arg0: integer, arg1: boolean): boolean
public "getFuelLevel"(): integer
public "reduceCooldownAccordingToConsumptionRate"(arg0: integer): integer
public "isFuelConsumptionDisable"(): boolean
public "getFuelConsumptionMultiply"(): integer
public "getFuelCount"(): integer
public "getFuelMaxCount"(): integer
public "getMaxFuelLevel"(): integer
public "getFuelConsumptionRate"(): integer
public "setFuelConsumptionRate"(arg0: integer): $MethodResult
public "addFuel"(arg0: integer): void
public "collectConfiguration"(arg0: $Map$$Type<(StringJS), (any)>): void
public "isSuitable"(arg0: $IPeripheral$$Type): boolean
public "getOperations"(): ($IPeripheralOperation<(never)>)[]
public "getMethods"(): $List<($BoundMethod)>
get "fuelLevel"(): integer
get "fuelConsumptionDisable"(): boolean
get "fuelConsumptionMultiply"(): integer
get "fuelCount"(): integer
get "fuelMaxCount"(): integer
get "maxFuelLevel"(): integer
get "fuelConsumptionRate"(): integer
set "fuelConsumptionRate"(value: integer)
get "operations"(): ($IPeripheralOperation<(never)>)[]
get "methods"(): $List<($BoundMethod)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelAbility$$Type<T> = ($FuelAbility<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelAbility$$Original<T> = $FuelAbility<(T)>;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtleCompassUpgrade" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$PeripheralTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$CompassPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.CompassPeripheral"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleCompassUpgrade extends $PeripheralTurtleUpgrade<($CompassPeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleCompassUpgrade$$Type = ($TurtleCompassUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurtleCompassUpgrade$$Original = $TurtleCompassUpgrade;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.operations.SingleOperation" {
import {$Map} from "java.util.Map"
import {$Enum} from "java.lang.Enum"
import {$IPeripheralOperation$$Interface} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$SingleOperationContext, $SingleOperationContext$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.operations.SingleOperationContext"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $SingleOperation extends $Enum<($SingleOperation)> implements $IPeripheralOperation$$Interface<($SingleOperationContext)> {
static readonly "WARP": $SingleOperation
static readonly "USE_ON_BLOCK": $SingleOperation
static readonly "DIG": $SingleOperation
static readonly "CAPTURE_ANIMAL": $SingleOperation
static readonly "ACCURE_PLACE": $SingleOperation
static readonly "USE_ON_ANIMAL": $SingleOperation
static readonly "SUCK": $SingleOperation

public "getCost"(arg0: $SingleOperationContext$$Type): integer
public "getCost"(arg0: any): integer
public "getCooldown"(arg0: $SingleOperationContext$$Type): integer
public "getCooldown"(arg0: any): integer
public "addToConfig"(arg0: $ModConfigSpec$Builder$$Type): void
public "getInitialCooldown"(): integer
public "computerDescription"(): $Map<(StringJS), (any)>
public "dataComponentType"(): $DataComponentType<(long)>
public static "values"(): ($SingleOperation)[]
public static "valueOf"(arg0: StringJS): $SingleOperation
public "settingsPostfix"(): StringJS
public "settingsName"(): StringJS
get "initialCooldown"(): integer
get "tingsPostfix"(): StringJS
get "tingsName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleOperation$$Type = (("dig") | ("use_on_block") | ("suck") | ("use_on_animal") | ("capture_animal") | ("warp") | ("accure_place"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleOperation$$Original = $SingleOperation;}
declare module "de.srendi.advancedperipherals.common.items.WeakAutomataCore" {
import {$IFeedableAutomataCore$$Interface} from "de.srendi.advancedperipherals.lib.metaphysics.IFeedableAutomataCore"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$APItem} from "de.srendi.advancedperipherals.common.items.APItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $WeakAutomataCore extends $APItem implements $IFeedableAutomataCore$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakAutomataCore$$Type = ($WeakAutomataCore);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeakAutomataCore$$Original = $WeakAutomataCore;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.HusbandryAutomataCorePeripheral" {
import {$WeakAutomataCorePeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.WeakAutomataCorePeripheral"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $HusbandryAutomataCorePeripheral extends $WeakAutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": StringJS
static readonly "TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HusbandryAutomataCorePeripheral$$Type = ($HusbandryAutomataCorePeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HusbandryAutomataCorePeripheral$$Original = $HusbandryAutomataCorePeripheral;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.pocket.PocketChatBoxUpgrade" {
import {$IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$BasePocketUpgrade} from "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade"
import {$ChatBoxPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ChatBoxPeripheral"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$IBasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketChatBoxUpgrade extends $BasePocketUpgrade<($ChatBoxPeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getPeripheral"(arg0: $IPocketAccess$$Type): $IBasePeripheral
public "getType"(): $UpgradeType<($IPocketUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "type"(): $UpgradeType<($IPocketUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketChatBoxUpgrade$$Type = ($PocketChatBoxUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketChatBoxUpgrade$$Original = $PocketChatBoxUpgrade;}
declare module "de.srendi.advancedperipherals.common.blocks.base.ICapabilityProvider" {
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$IPeripheral} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"

export interface $ICapabilityProvider$$Interface {
}

export class $ICapabilityProvider implements $ICapabilityProvider$$Interface {
 "createEnergyStorageCap"(arg0: $Direction$$Type): $IEnergyStorage
 "createFluidHandlerCap"(arg0: $Direction$$Type): $IFluidHandler
 "createItemHandlerCap"(arg0: $Direction$$Type): $IItemHandler
 "createPeripheralCap"(arg0: $Direction$$Type): $IPeripheral
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProvider$$Type = ($ICapabilityProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICapabilityProvider$$Original = $ICapabilityProvider;}
declare module "de.srendi.advancedperipherals.common.blocks.blockentities.PlayerDetectorEntity" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerDetectorPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.PlayerDetectorPeripheral"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode} from "net.minecraft.world.LockCode"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PeripheralBlockEntity} from "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlayerDetectorEntity extends $PeripheralBlockEntity<($PlayerDetectorPeripheral)> {
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "lockKey": $LockCode

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "handleTick"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): void
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "displayName"(): $Component
get "changed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorEntity$$Type = ($PlayerDetectorEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerDetectorEntity$$Original = $PlayerDetectorEntity;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtleChatBoxUpgrade" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$PeripheralTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$ChatBoxPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ChatBoxPeripheral"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleChatBoxUpgrade extends $PeripheralTurtleUpgrade<($ChatBoxPeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "update"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): void
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleChatBoxUpgrade$$Type = ($TurtleChatBoxUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurtleChatBoxUpgrade$$Original = $TurtleChatBoxUpgrade;}
declare module "de.srendi.advancedperipherals.common.blocks.base.BaseBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$IHarvestableBlock$$Interface} from "de.srendi.advancedperipherals.common.blocks.base.IHarvestableBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$FrontAndTop} from "net.minecraft.core.FrontAndTop"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseBlock extends $Block implements $IHarvestableBlock$$Interface {
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
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor()
constructor(arg0: $TagKey$$Type<($Block)>)
constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $TagKey$$Type<($Block)>)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getHarvestTag"(): $TagKey<($Block)>
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getToolTag"(): $TagKey<($Block)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "harvestTag"(): $TagKey<($Block)>
get "toolTag"(): $TagKey<($Block)>
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
declare module "de.srendi.advancedperipherals.common.items.APItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BaseItem} from "de.srendi.advancedperipherals.common.items.base.BaseItem"

export class $APItem extends $BaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $Supplier$$Type<(boolean)>)
constructor(arg0: $Supplier$$Type<(boolean)>)

public "isEnabled"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APItem$$Type = ($APItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $APItem$$Original = $APItem;}
declare module "de.srendi.advancedperipherals.common.items.MemoryCardItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$BaseItem} from "de.srendi.advancedperipherals.common.items.base.BaseItem"

export class $MemoryCardItem extends $BaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isEnabled"(): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCardItem$$Type = ($MemoryCardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemoryCardItem$$Original = $MemoryCardItem;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtleEnvironmentDetectorUpgrade" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$PeripheralTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$EnvironmentDetectorPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.EnvironmentDetectorPeripheral"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleEnvironmentDetectorUpgrade extends $PeripheralTurtleUpgrade<($EnvironmentDetectorPeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleEnvironmentDetectorUpgrade$$Type = ($TurtleEnvironmentDetectorUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurtleEnvironmentDetectorUpgrade$$Original = $TurtleEnvironmentDetectorUpgrade;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.CompassPeripheral" {
import {$TurtlePeripheralOwner} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.TurtlePeripheralOwner"
import {$BasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $CompassPeripheral extends $BasePeripheral<($TurtlePeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "getFacing"(): StringJS
public "isEnabled"(): boolean
get "facing"(): StringJS
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompassPeripheral$$Type = ($CompassPeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompassPeripheral$$Original = $CompassPeripheral;}
declare module "de.srendi.advancedperipherals.common.items.base.BaseItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $BaseItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescription"(): $Component
public "isEnabled"(): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "description"(): $Component
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$$Type = ($BaseItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseItem$$Original = $BaseItem;}
declare module "de.srendi.advancedperipherals.common.blocks.base.BaseBlockEntityBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BaseBlock} from "de.srendi.advancedperipherals.common.blocks.base.BaseBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$FrontAndTop} from "net.minecraft.core.FrontAndTop"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $BaseBlockEntityBlock extends $BaseBlock implements $EntityBlock$$Interface {
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
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: boolean)
constructor(arg0: boolean, arg1: $BlockBehaviour$Properties$$Type)

/**
 * 
 * @deprecated
 */
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntityBlock$$Type = ($BaseBlockEntityBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBlockEntityBlock$$Original = $BaseBlockEntityBlock;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.OverpoweredEndAutomata" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$OverpoweredEndAutomataCorePeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredEndAutomataCorePeripheral"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $OverpoweredEndAutomata extends $ClockwiseAnimatedTurtleUpgrade<($OverpoweredEndAutomataCorePeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredEndAutomata$$Type = ($OverpoweredEndAutomata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverpoweredEndAutomata$$Original = $OverpoweredEndAutomata;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.WeakAutomataCorePeripheral" {
import {$AutomataCorePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.AutomataCorePeripheral"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $WeakAutomataCorePeripheral extends $AutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": StringJS
static readonly "TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakAutomataCorePeripheral$$Type = ($WeakAutomataCorePeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeakAutomataCorePeripheral$$Original = $WeakAutomataCorePeripheral;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.EnvironmentDetectorPeripheral" {
import {$MethodResult} from "dan200.computercraft.api.lua.MethodResult"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"
import {$IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$BasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$Function$$Type} from "java.util.function.Function"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$IPeripheralPlugin$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralPlugin"
import {$Set} from "java.util.Set"
import {$PeripheralBlockEntity$$Type} from "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity"

export class $EnvironmentDetectorPeripheral extends $BasePeripheral<($IPeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)
constructor(arg0: $IPocketAccess$$Type)
constructor(arg0: $PeripheralBlockEntity$$Type<(never)>)

public "getBlockLightLevel"(): integer
public "getSkyLightLevel"(): integer
public static "addIntegrationPlugin"(arg0: $Function$$Type<($IPeripheralOwner), ($IPeripheralPlugin$$Type)>): void
public "getDayLightLevel"(): integer
public "isSlimeChunk"(): boolean
public "isDimension"(arg0: StringJS): boolean
public "listDimensions"(): $Set<(StringJS)>
public "getMoonId"(): integer
public "isMoon"(arg0: integer): boolean
public "getMoonName"(): StringJS
public "isThunder"(): boolean
public "isSunny"(): boolean
public "scanEntities"(arg0: $IComputerAccess$$Type, arg1: $IArguments$$Type): $MethodResult
public "scanCost"(arg0: integer): $MethodResult
public "canSleepHere"(): $MethodResult
public "canSleepPlayer"(arg0: StringJS): $MethodResult
public "getDimension"(): StringJS
public "isEnabled"(): boolean
public "getTime"(): long
public "getBiome"(): StringJS
public "isRaining"(): boolean
get "blockLightLevel"(): integer
get "skyLightLevel"(): integer
get "dayLightLevel"(): integer
get "slimeChunk"(): boolean
get "moonId"(): integer
get "moonName"(): StringJS
get "thunder"(): boolean
get "sunny"(): boolean
get "dimension"(): StringJS
get "enabled"(): boolean
get "time"(): long
get "biome"(): StringJS
get "raining"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnvironmentDetectorPeripheral$$Type = ($EnvironmentDetectorPeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnvironmentDetectorPeripheral$$Original = $EnvironmentDetectorPeripheral;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.OperationAbility$FailReason" {
import {$Enum} from "java.lang.Enum"

export class $OperationAbility$FailReason extends $Enum<($OperationAbility$FailReason)> {
static readonly "CHECK_FAILED": $OperationAbility$FailReason
static readonly "COOLDOWN": $OperationAbility$FailReason
static readonly "NOT_ENOUGH_FUEL": $OperationAbility$FailReason

public static "values"(): ($OperationAbility$FailReason)[]
public static "valueOf"(arg0: StringJS): $OperationAbility$FailReason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperationAbility$FailReason$$Type = (("cooldown") | ("not_enough_fuel") | ("check_failed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OperationAbility$FailReason$$Original = $OperationAbility$FailReason;}
declare module "de.srendi.advancedperipherals.common.blocks.base.APBlockEntityBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$FrontAndTop} from "net.minecraft.core.FrontAndTop"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BaseBlockEntityBlock} from "de.srendi.advancedperipherals.common.blocks.base.BaseBlockEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $APBlockEntityBlock<T extends $BlockEntity> extends $BaseBlockEntityBlock {
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
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $DeferredHolder$$Type<($BlockEntityType$$Type<(never)>), ($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type, arg2: boolean)
constructor(arg0: $DeferredHolder$$Type<($BlockEntityType$$Type<(never)>), ($BlockEntityType$$Type<(T)>)>, arg1: boolean)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APBlockEntityBlock$$Type<T> = ($APBlockEntityBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $APBlockEntityBlock$$Original<T> = $APBlockEntityBlock<(T)>;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.pocket.PocketGeoScannerUpgrade" {
import {$IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$GeoScannerPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.GeoScannerPeripheral"
import {$BasePocketUpgrade} from "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$IBasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketGeoScannerUpgrade extends $BasePocketUpgrade<($GeoScannerPeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getPeripheral"(arg0: $IPocketAccess$$Type): $IBasePeripheral
public "getType"(): $UpgradeType<($IPocketUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "type"(): $UpgradeType<($IPocketUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketGeoScannerUpgrade$$Type = ($PocketGeoScannerUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketGeoScannerUpgrade$$Original = $PocketGeoScannerUpgrade;}
declare module "de.srendi.advancedperipherals.common.util.Pair" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function$$Type} from "java.util.function.Function"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Record} from "java.lang.Record"

export class $Pair<T, V> extends $Record {
constructor(left: T, right: V)

public static "onlyRight"<T, V>(arg0: V): $Pair<(T), (V)>
public static "onlyLeft"<T, V>(arg0: T): $Pair<(T), (V)>
public "rightPresent"(): boolean
public "leftPresent"(): boolean
public "ifRightPresent"(arg0: $Consumer$$Type<(V)>): void
public "ifLeftPresent"(arg0: $Consumer$$Type<(T)>): void
public "ignoreLeft"<T1>(): $Pair<(T1), (V)>
public "ignoreRight"<V1>(): $Pair<(T), (V1)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<T, V>(arg0: T, arg1: V): $Pair<(T), (V)>
public "reduce"<R>(arg0: $BiFunction$$Type<(T), (V), (R)>): R
public "left"(): T
public "right"(): V
public "getLeft"(): T
public "getRight"(): V
public "mapBoth"<T1, V1>(arg0: $BiFunction$$Type<(T), (V), ($Pair$$Type<(T1), (V1)>)>): $Pair<(T1), (V1)>
public "mapLeft"<T1>(arg0: $Function$$Type<(T), (T1)>): $Pair<(T1), (V)>
public "mapRight"<V1>(arg0: $Function$$Type<(V), (V1)>): $Pair<(T), (V1)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<T, V> = ({"right"?: V, "left"?: T}) | ([right?: V, left?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pair$$Original<T, V> = $Pair<(T), (V)>;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredWeakAutomataCorePeripheral" {
import {$WeakAutomataCorePeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.WeakAutomataCorePeripheral"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $OverpoweredWeakAutomataCorePeripheral extends $WeakAutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": StringJS
static readonly "TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "addRotationCycle"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredWeakAutomataCorePeripheral$$Type = ($OverpoweredWeakAutomataCorePeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverpoweredWeakAutomataCorePeripheral$$Original = $OverpoweredWeakAutomataCorePeripheral;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.pocket.PocketColonyIntegratorUpgrade" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$BasePocketUpgrade} from "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$ColonyPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ColonyPeripheral"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketColonyIntegratorUpgrade extends $BasePocketUpgrade<($ColonyPeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($IPocketUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "type"(): $UpgradeType<($IPocketUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketColonyIntegratorUpgrade$$Type = ($PocketColonyIntegratorUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketColonyIntegratorUpgrade$$Original = $PocketColonyIntegratorUpgrade;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.TurtlePeripheralOwner" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$APFakePlayer$$Type} from "de.srendi.advancedperipherals.common.util.fakeplayer.APFakePlayer"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$FrontAndTop} from "net.minecraft.core.FrontAndTop"
import {$Function$$Type} from "java.util.function.Function"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BasePeripheralOwner} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.BasePeripheralOwner"

export class $TurtlePeripheralOwner extends $BasePeripheralOwner {
readonly "side": $TurtleSide
readonly "turtle": $ITurtleAccess

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "getDataStorage"(): $DataComponentPatch
public "getOrientation"(): $FrontAndTop
public "getFacing"(): $Direction
public "getNbtStorage"(): $CompoundTag
public "putDataStorage"(arg0: $DataComponentPatch$$Type): void
public "markDataStorageDirty"(): void
public "getToolInMainHand"(): $ItemStack
public "storeItem"(arg0: $ItemStack$$Type): $ItemStack
public "isMovementPossible"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "destroyUpgrade"(): void
public "withPlayer"<T>(arg0: $Function$$Type<($APFakePlayer), (T)>): T
public "getTurtle"(): $ITurtleAccess
public "attachFuel"(arg0: integer): $TurtlePeripheralOwner
public "move"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "getLevel"(): $Level
public "getOwner"(): $Player
public "getSide"(): $TurtleSide
public "getCustomName"(): StringJS
public "getPos"(): $BlockPos
get "dataStorage"(): $DataComponentPatch
get "orientation"(): $FrontAndTop
get "facing"(): $Direction
get "nbtStorage"(): $CompoundTag
get "toolInMainHand"(): $ItemStack
get "level"(): $Level
get "owner"(): $Player
get "customName"(): StringJS
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtlePeripheralOwner$$Type = ($TurtlePeripheralOwner);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurtlePeripheralOwner$$Original = $TurtlePeripheralOwner;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtlePlayerDetectorUpgrade" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PlayerDetectorPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.PlayerDetectorPeripheral"
import {$Registry} from "net.minecraft.core.Registry"
import {$PeripheralTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtlePlayerDetectorUpgrade extends $PeripheralTurtleUpgrade<($PlayerDetectorPeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtlePlayerDetectorUpgrade$$Type = ($TurtlePlayerDetectorUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurtlePlayerDetectorUpgrade$$Original = $TurtlePlayerDetectorUpgrade;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.OperationAbility" {
import {$Map$$Type} from "java.util.Map"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$List} from "java.util.List"
import {$IPeripheralCheck$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralCheck"
import {$OperationAbility$FailReason$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.OperationAbility$FailReason"
import {$BoundMethod} from "de.srendi.advancedperipherals.lib.peripherals.BoundMethod"
import {$IPeripheralFunction$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralFunction"
import {$IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IPeripheralOperation, $IPeripheralOperation$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IPeripheralPlugin$$Interface} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralPlugin"
import {$IOwnerAbility$$Interface} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IOwnerAbility"
import {$IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"

export class $OperationAbility implements $IOwnerAbility$$Interface, $IPeripheralPlugin$$Interface {
constructor(arg0: $IPeripheralOwner$$Type)

public "getCurrentCooldown"(arg0: $IPeripheralOperation$$Type<(never)>): integer
public "getOperationCooldown"(arg0: StringJS): $MethodResult
public "registerOperation"(arg0: $IPeripheralOperation$$Type<(never)>): void
public "performOperation"<T>(arg0: $IPeripheralOperation$$Type<(T)>, arg1: T, arg2: $IPeripheralCheck$$Type<(T)>, arg3: $IPeripheralFunction$$Type<(T), ($MethodResult$$Type)>, arg4: $Consumer$$Type<(T)>, arg5: $BiConsumer$$Type<($MethodResult), ($OperationAbility$FailReason)>): $MethodResult
public "collectConfiguration"(arg0: $Map$$Type<(StringJS), (any)>): void
public "isOnCooldown"(arg0: $IPeripheralOperation$$Type<(never)>): boolean
public "isSuitable"(arg0: $IPeripheral$$Type): boolean
public "getOperations"(): ($IPeripheralOperation<(never)>)[]
public "getMethods"(): $List<($BoundMethod)>
get "operations"(): ($IPeripheralOperation<(never)>)[]
get "methods"(): $List<($BoundMethod)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperationAbility$$Type = ($OperationAbility);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OperationAbility$$Original = $OperationAbility;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.EndAutomataCorePeripheral" {
import {$WeakAutomataCorePeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.WeakAutomataCorePeripheral"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $EndAutomataCorePeripheral extends $WeakAutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": StringJS
static readonly "TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndAutomataCorePeripheral$$Type = ($EndAutomataCorePeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EndAutomataCorePeripheral$$Original = $EndAutomataCorePeripheral;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.EndAutomata" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$EndAutomataCorePeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.EndAutomataCorePeripheral"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $EndAutomata extends $ClockwiseAnimatedTurtleUpgrade<($EndAutomataCorePeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndAutomata$$Type = ($EndAutomata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EndAutomata$$Original = $EndAutomata;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.pocket.PocketPlayerDetectorUpgrade" {
import {$IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PlayerDetectorPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.PlayerDetectorPeripheral"
import {$Registry} from "net.minecraft.core.Registry"
import {$BasePocketUpgrade} from "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$IBasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketPlayerDetectorUpgrade extends $BasePocketUpgrade<($PlayerDetectorPeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getPeripheral"(arg0: $IPocketAccess$$Type): $IBasePeripheral
public "getType"(): $UpgradeType<($IPocketUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "type"(): $UpgradeType<($IPocketUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketPlayerDetectorUpgrade$$Type = ($PocketPlayerDetectorUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketPlayerDetectorUpgrade$$Original = $PocketPlayerDetectorUpgrade;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.PlayerDetectorPeripheral" {
import {$IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$MethodResult} from "dan200.computercraft.api.lua.MethodResult"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$List} from "java.util.List"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$PeripheralBlockEntity$$Type} from "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity"
import {$IPeripheralOwner} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export class $PlayerDetectorPeripheral extends $BasePeripheral<($IPeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)
constructor(arg0: $IPocketAccess$$Type)
constructor(arg0: $PeripheralBlockEntity$$Type<(never)>)

public "getPlayersInCoords"(arg0: $Map$$Type<(never), (never)>, arg1: $Map$$Type<(never), (never)>): $MethodResult
public "getPlayersInCubic"(arg0: integer, arg1: integer, arg2: integer): $List<(StringJS)>
public "getPlayersInRange"(arg0: integer): $List<(StringJS)>
public "isPlayersInCoords"(arg0: $Map$$Type<(never), (never)>, arg1: $Map$$Type<(never), (never)>): boolean
public "isPlayersInCubic"(arg0: integer, arg1: integer, arg2: integer): boolean
public "isPlayersInRange"(arg0: integer): boolean
public "isPlayerInCoords"(arg0: $Map$$Type<(never), (never)>, arg1: $Map$$Type<(never), (never)>, arg2: StringJS): boolean
public "isPlayerInCubic"(arg0: integer, arg1: integer, arg2: integer, arg3: StringJS): boolean
public "isPlayerInRange"(arg0: integer, arg1: StringJS): boolean
public "getPlayerPos"(arg0: $IArguments$$Type): $Map<(StringJS), (any)>
public "isEnabled"(): boolean
public "getOnlinePlayers"(): (StringJS)[]
get "enabled"(): boolean
get "onlinePlayers"(): (StringJS)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorPeripheral$$Type = ($PlayerDetectorPeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerDetectorPeripheral$$Original = $PlayerDetectorPeripheral;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.OverpoweredHusbandryAutomata" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"
import {$OverpoweredHusbandryAutomataCorePeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredHusbandryAutomataCorePeripheral"

export class $OverpoweredHusbandryAutomata extends $ClockwiseAnimatedTurtleUpgrade<($OverpoweredHusbandryAutomataCorePeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredHusbandryAutomata$$Type = ($OverpoweredHusbandryAutomata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverpoweredHusbandryAutomata$$Original = $OverpoweredHusbandryAutomata;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ChunkyPeripheral" {
import {$TurtlePeripheralOwner} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.TurtlePeripheralOwner"
import {$BasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$ChunkPos} from "net.minecraft.world.level.ChunkPos"

export class $ChunkyPeripheral extends $BasePeripheral<($TurtlePeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": StringJS

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "getChunkPos"(): $ChunkPos
public "updateChunkState"(): void
public "detach"(arg0: $IComputerAccess$$Type): void
public "isEnabled"(): boolean
public "attach"(arg0: $IComputerAccess$$Type): void
get "chunkPos"(): $ChunkPos
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkyPeripheral$$Type = ($ChunkyPeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkyPeripheral$$Original = $ChunkyPeripheral;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtleGeoScannerUpgrade" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$PeripheralTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$GeoScannerPeripheral} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.GeoScannerPeripheral"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleGeoScannerUpgrade extends $PeripheralTurtleUpgrade<($GeoScannerPeripheral)> {
constructor(arg0: $ItemStack$$Type)

public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleGeoScannerUpgrade$$Type = ($TurtleGeoScannerUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurtleGeoScannerUpgrade$$Original = $TurtleGeoScannerUpgrade;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.IOwnerAbility" {
import {$Map$$Type} from "java.util.Map"

export interface $IOwnerAbility$$Interface {
}

export class $IOwnerAbility implements $IOwnerAbility$$Interface {
 "collectConfiguration"(arg0: $Map$$Type<(StringJS), (any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnerAbility$$Type = ($IOwnerAbility);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOwnerAbility$$Original = $IOwnerAbility;}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.BasePeripheralOwner" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPeripheralOwner$$Interface} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"
import {$PeripheralOwnerAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.PeripheralOwnerAbility"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$APFakePlayer$$Type} from "de.srendi.advancedperipherals.common.util.fakeplayer.APFakePlayer"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$FrontAndTop} from "net.minecraft.core.FrontAndTop"
import {$IPeripheralOperation$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$Function$$Type} from "java.util.function.Function"
import {$IOwnerAbility, $IOwnerAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IOwnerAbility"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BasePeripheralOwner implements $IPeripheralOwner$$Interface {
constructor()

public "attachAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$$Type<(T)>, arg1: T): void
public "getAbilities"(): $Collection<($IOwnerAbility)>
public "getAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$$Type<(T)>): T
public "getDataStorage"(): $DataComponentPatch
public "getOrientation"(): $FrontAndTop
public "getFacing"(): $Direction
public "getNbtStorage"(): $CompoundTag
public "putDataStorage"(arg0: $DataComponentPatch$$Type): void
public "markDataStorageDirty"(): void
public "getToolInMainHand"(): $ItemStack
public "storeItem"(arg0: $ItemStack$$Type): $ItemStack
public "isMovementPossible"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "destroyUpgrade"(): void
public "withPlayer"<T>(arg0: $Function$$Type<($APFakePlayer), (T)>): T
public "attachOperation"(...arg0: ($IPeripheralOperation$$Type<(never)>)[]): void
public "attachOperation"(arg0: $Collection$$Type<($IPeripheralOperation$$Type<(never)>)>): void
public "move"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "getLevel"(): $Level
public "getOwner"(): $Player
public "getCustomName"(): StringJS
public "getPos"(): $BlockPos
get "abilities"(): $Collection<($IOwnerAbility)>
get "dataStorage"(): $DataComponentPatch
get "orientation"(): $FrontAndTop
get "facing"(): $Direction
get "nbtStorage"(): $CompoundTag
get "toolInMainHand"(): $ItemStack
get "level"(): $Level
get "owner"(): $Player
get "customName"(): StringJS
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePeripheralOwner$$Type = ($BasePeripheralOwner);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasePeripheralOwner$$Original = $BasePeripheralOwner;}
