declare module "com.wintercogs.appliedpneumatics.common.items.PortableAirStorageCell" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IAirStorageCell$$Interface} from "com.wintercogs.appliedpneumatics.common.items.IAirStorageCell"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$CellState} from "appeng.api.storage.cells.CellState"
import {$AbstractPortableCell} from "appeng.items.tools.powered.AbstractPortableCell"

export class $PortableAirStorageCell extends $AbstractPortableCell implements $IAirStorageCell$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $MenuType$$Type<(never)>, arg1: $Item$Properties$$Type, arg2: integer, arg3: double, arg4: integer)

public "getRecipeId"(): $ResourceLocation
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getTotalBytes"(): integer
public static "onRegisterCaps"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getIdleDrain"(): double
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public static "getStoredAir"(arg0: $ItemStack$$Type): long
public static "calcState"(arg0: integer, arg1: long): $CellState
public static "usedBytes"(arg0: long): long
public static "amountPerByte"(): long
public static "unusedInCurrentByte"(arg0: long): long
public static "freeBytes"(arg0: integer, arg1: long): long
public static "remainingAmount"(arg0: integer, arg1: long): long
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost
public "asItem"(): $Item
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "recipeId"(): $ResourceLocation
get "totalBytes"(): integer
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableAirStorageCell$$Type = ($PortableAirStorageCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortableAirStorageCell$$Original = $PortableAirStorageCell;}
declare module "com.wintercogs.appliedpneumatics.common.items.AmadronWirelessTerminalItem" {
import {$MEAmadronProcessStationBlockEntity} from "com.wintercogs.appliedpneumatics.common.blocks.entitis.MEAmadronProcessStationBlockEntity"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPositionProvider$$Interface} from "me.desht.pneumaticcraft.api.item.IPositionProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos} from "net.minecraft.core.GlobalPos"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$WirelessTerminalItem} from "appeng.items.tools.powered.WirelessTerminalItem"
import {$WirelessTerminalMenuHost} from "appeng.helpers.WirelessTerminalMenuHost"
import {$IGridLinkableHandler} from "appeng.api.features.IGridLinkableHandler"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $AmadronWirelessTerminalItem extends $WirelessTerminalItem implements $IPositionProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "getStoredPositions"(arg0: $UUID$$Type, arg1: $ItemStack$$Type): $List<($BlockPos)>
public "getRenderColor"(arg0: integer): integer
public static "onRegisterCaps"(arg0: $RegisterCapabilitiesEvent$$Type): void
public static "getLinkedAmadronPos"(arg0: $ItemStack$$Type): $GlobalPos
public static "getLinkWithAmadronProcess"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $MEAmadronProcessStationBlockEntity
public "getMenuType"(): $MenuType<(never)>
public "getConfigManager"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $IConfigManager
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $WirelessTerminalMenuHost
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "syncVariables"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "getRawStoredPositions"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $List<($BlockPos)>
public "disableDepthTest"(): boolean
public "asItem"(): $Item
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "menuType"(): $MenuType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronWirelessTerminalItem$$Type = ($AmadronWirelessTerminalItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadronWirelessTerminalItem$$Original = $AmadronWirelessTerminalItem;}
declare module "com.wintercogs.appliedpneumatics.common.items.AirStorageCell" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ICellWorkbenchItem$$Interface} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$IAirStorageCell$$Interface} from "com.wintercogs.appliedpneumatics.common.items.IAirStorageCell"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$CellState} from "appeng.api.storage.cells.CellState"

export class $AirStorageCell extends $Item implements $ICellWorkbenchItem$$Interface, $IAirStorageCell$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: double, arg2: integer)

public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getTotalBytes"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getIdleDrain"(): double
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "isEditable"(arg0: $ItemStack$$Type): boolean
public static "getStoredAir"(arg0: $ItemStack$$Type): long
public static "calcState"(arg0: integer, arg1: long): $CellState
public static "usedBytes"(arg0: long): long
public static "amountPerByte"(): long
public static "unusedInCurrentByte"(arg0: long): long
public static "freeBytes"(arg0: integer, arg1: long): long
public static "remainingAmount"(arg0: integer, arg1: long): long
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "totalBytes"(): integer
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirStorageCell$$Type = ($AirStorageCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AirStorageCell$$Original = $AirStorageCell;}
declare module "com.wintercogs.appliedpneumatics.common.blocks.METemperatureInterface" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$AEBaseEntityBlock} from "appeng.block.AEBaseEntityBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$METemperatureInterfaceBlockEntity} from "com.wintercogs.appliedpneumatics.common.blocks.entitis.METemperatureInterfaceBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $METemperatureInterface extends $AEBaseEntityBlock<($METemperatureInterfaceBlockEntity)> {
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
export type $METemperatureInterface$$Type = ($METemperatureInterface);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $METemperatureInterface$$Original = $METemperatureInterface;}
declare module "com.wintercogs.appliedpneumatics.common.me.keys.types.AirKeyType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Registry} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$AEKey} from "appeng.api.stacks.AEKey"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Component} from "net.minecraft.network.chat.Component"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AirKeyType extends $AEKeyType {
static readonly "CODEC": $Codec<($AEKeyType)>
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($AEKeyType)>)>
static readonly "INSTANCE": $AirKeyType
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKeyType)>
static readonly "NAME": $Component

public "readFromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $AEKey
public "getAmountPerOperation"(): integer
public "getAmountPerUnit"(): integer
public "getUnitSymbol"(): StringJS
public "getAmountPerByte"(): integer
public "codec"(): $MapCodec<($AEKey)>
get "amountPerOperation"(): integer
get "amountPerUnit"(): integer
get "unitSymbol"(): StringJS
get "amountPerByte"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirKeyType$$Type = ($AirKeyType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AirKeyType$$Original = $AirKeyType;}
declare module "com.wintercogs.appliedpneumatics.common.blocks.MEPressureInterfaceBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$MEPressureInterfaceBlockEntity} from "com.wintercogs.appliedpneumatics.common.blocks.entitis.MEPressureInterfaceBlockEntity"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$AEBaseEntityBlock} from "appeng.block.AEBaseEntityBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MEPressureInterfaceBlock extends $AEBaseEntityBlock<($MEPressureInterfaceBlockEntity)> {
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
export type $MEPressureInterfaceBlock$$Type = ($MEPressureInterfaceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MEPressureInterfaceBlock$$Original = $MEPressureInterfaceBlock;}
declare module "com.wintercogs.appliedpneumatics.common.items.AmadronProcessUpgradeItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $AmadronProcessUpgradeItem extends $Item {
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
export type $AmadronProcessUpgradeItem$$Type = ($AmadronProcessUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadronProcessUpgradeItem$$Original = $AmadronProcessUpgradeItem;}
declare module "com.wintercogs.appliedpneumatics.common.items.IAirStorageCell" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$CellState} from "appeng.api.storage.cells.CellState"
import {$IUpgradeableItem$$Interface} from "appeng.api.upgrades.IUpgradeableItem"

export interface $IAirStorageCell$$Interface extends $IUpgradeableItem$$Interface {
get "totalBytes"(): integer
get "idleDrain"(): double
}

export class $IAirStorageCell implements $IAirStorageCell$$Interface {
 "getTotalBytes"(): integer
static "getStoredAir"(arg0: $ItemStack$$Type): long
static "calcState"(arg0: integer, arg1: long): $CellState
static "usedBytes"(arg0: long): long
static "amountPerByte"(): long
static "unusedInCurrentByte"(arg0: long): long
static "freeBytes"(arg0: integer, arg1: long): long
 "getIdleDrain"(): double
static "remainingAmount"(arg0: integer, arg1: long): long
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAirStorageCell$$Type = ($IAirStorageCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAirStorageCell$$Original = $IAirStorageCell;}
declare module "com.wintercogs.appliedpneumatics.common.blocks.entitis.MEAmadronProcessStationBlockEntity" {
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$ICraftingProvider$$Interface} from "appeng.api.networking.crafting.ICraftingProvider"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PatternContainerGroup} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$Set} from "java.util.Set"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$AEKey} from "appeng.api.stacks.AEKey"
import {$AmadronOffer$$Type} from "me.desht.pneumaticcraft.common.recipes.amadron.AmadronOffer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity$$Interface} from "appeng.blockentity.ServerTickingBlockEntity"
import {$GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$AmadroneEntity} from "me.desht.pneumaticcraft.common.entity.drone.AmadroneEntity"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PatternContainer$$Interface} from "appeng.helpers.patternprovider.PatternContainer"
import {$IPriorityHost$$Interface} from "appeng.helpers.IPriorityHost"
import {$IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IGrid} from "appeng.api.networking.IGrid"
import {$GenericStackInv} from "appeng.helpers.externalstorage.GenericStackInv"

export class $MEAmadronProcessStationBlockEntity extends $AENetworkedBlockEntity implements $IUpgradeableObject$$Interface, $ICraftingProvider$$Interface, $PatternContainer$$Interface, $ServerTickingBlockEntity$$Interface, $IPriorityHost$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($MEAmadronProcessStationBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: integer)

public "getUpgrades"(): $IUpgradeInventory
public static "retrieveOrder"(arg0: StringJS, arg1: $AmadronOffer$$Type, arg2: integer, arg3: $GlobalPos$$Type, arg4: $GlobalPos$$Type): $AmadroneEntity
public static "validateStockLevel"(arg0: StringJS, arg1: $AmadronOffer$$Type, arg2: integer, arg3: boolean): boolean
public "getJobAmount"(): integer
public "getInputInv"(): $GenericStackInv
public "getOutputInv"(): $GenericStackInv
public "cancelAllJobs"(arg0: $Component$$Type): void
public static "onRegisterCaps"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getNetworkInventory"(): $MEStorage
public "addJob"(arg0: $ResourceLocation$$Type, arg1: $GenericStack$$Type): void
public "addJob"(arg0: $ResourceLocation$$Type, arg1: $GenericStack$$Type, arg2: $UUID$$Type): void
public "serverTick"(): void
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getGrid"(): $IGrid
public "isBusy"(): boolean
public "getAvailablePatterns"(): $List<($IPatternDetails)>
public "getPatternPriority"(): integer
public "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[]): boolean
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getTerminalPatternInventory"(): $InternalInventory
public "getTerminalGroup"(): $PatternContainerGroup
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
public "getEmitableItems"(): $Set<($AEKey)>
public "isVisibleInTerminal"(): boolean
public "getTerminalSortOrder"(): long
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "upgrades"(): $IUpgradeInventory
get "jobAmount"(): integer
get "inputInv"(): $GenericStackInv
get "outputInv"(): $GenericStackInv
get "networkInventory"(): $MEStorage
get "grid"(): $IGrid
get "busy"(): boolean
get "availablePatterns"(): $List<($IPatternDetails)>
get "patternPriority"(): integer
get "mainMenuIcon"(): $ItemStack
get "terminalPatternInventory"(): $InternalInventory
get "terminalGroup"(): $PatternContainerGroup
set "priority"(value: integer)
get "priority"(): integer
get "emitableItems"(): $Set<($AEKey)>
get "visibleInTerminal"(): boolean
get "terminalSortOrder"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEAmadronProcessStationBlockEntity$$Type = ($MEAmadronProcessStationBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MEAmadronProcessStationBlockEntity$$Original = $MEAmadronProcessStationBlockEntity;}
declare module "com.wintercogs.appliedpneumatics.common.blocks.entitis.METemperatureInterfaceBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity$$Interface} from "appeng.blockentity.ServerTickingBlockEntity"
import {$IHeatExchangerLogic} from "me.desht.pneumaticcraft.api.heat.IHeatExchangerLogic"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $METemperatureInterfaceBlockEntity extends $AENetworkedBlockEntity implements $IUpgradeableObject$$Interface, $ServerTickingBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getUpgrades"(): $IUpgradeInventory
public static "onRegisterCaps"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getNetworkInventory"(): $MEStorage
public "getHeatHandler"(): $IHeatExchangerLogic
public "getExpectedTemperature"(): double
public "setExpectedTemperature"(arg0: double): void
public "serverTick"(): void
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onLoad"(): void
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "upgrades"(): $IUpgradeInventory
get "networkInventory"(): $MEStorage
get "heatHandler"(): $IHeatExchangerLogic
get "expectedTemperature"(): double
set "expectedTemperature"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $METemperatureInterfaceBlockEntity$$Type = ($METemperatureInterfaceBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $METemperatureInterfaceBlockEntity$$Original = $METemperatureInterfaceBlockEntity;}
declare module "com.wintercogs.appliedpneumatics.common.blocks.entitis.MEPressureInterfaceBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IAirListener$$Interface} from "me.desht.pneumaticcraft.api.tileentity.IAirListener"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$IAirHandlerMachine, $IAirHandlerMachine$$Type} from "me.desht.pneumaticcraft.api.tileentity.IAirHandlerMachine"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AppEngInternalInventory} from "appeng.util.inv.AppEngInternalInventory"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity$$Interface} from "appeng.blockentity.ServerTickingBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MEPressureInterfaceBlockEntity extends $AENetworkedBlockEntity implements $IAirListener$$Interface, $IUpgradeableObject$$Interface, $ServerTickingBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getAirHandler"(): $IAirHandlerMachine
public "getUpgrades"(): $IUpgradeInventory
public static "onRegisterCaps"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "setExpectedPressure"(arg0: float): void
public "getNetworkInventory"(): $MEStorage
public "getMaxVolume"(): integer
public "getExpectedPressure"(): float
public "serverTick"(): void
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onLoad"(): void
public "getInventory"(): $AppEngInternalInventory
public "getVolume"(): integer
public "addConnectedPneumatics"(arg0: $List$$Type<($IAirHandlerMachine$$Type)>): $List<($IAirHandlerMachine)>
public "onAirDispersion"(arg0: $IAirHandlerMachine$$Type, arg1: $Direction$$Type, arg2: integer): void
public "getMaxDispersion"(arg0: $IAirHandlerMachine$$Type, arg1: $Direction$$Type): integer
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "airHandler"(): $IAirHandlerMachine
get "upgrades"(): $IUpgradeInventory
set "expectedPressure"(value: float)
get "networkInventory"(): $MEStorage
get "maxVolume"(): integer
get "expectedPressure"(): float
get "inventory"(): $AppEngInternalInventory
get "volume"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEPressureInterfaceBlockEntity$$Type = ($MEPressureInterfaceBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MEPressureInterfaceBlockEntity$$Original = $MEPressureInterfaceBlockEntity;}
declare module "com.wintercogs.appliedpneumatics.common.blocks.MEAmadronProcessStation" {
import {$MEAmadronProcessStationBlockEntity} from "com.wintercogs.appliedpneumatics.common.blocks.entitis.MEAmadronProcessStationBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$AEBaseEntityBlock} from "appeng.block.AEBaseEntityBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MEAmadronProcessStation extends $AEBaseEntityBlock<($MEAmadronProcessStationBlockEntity)> {
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
export type $MEAmadronProcessStation$$Type = ($MEAmadronProcessStation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MEAmadronProcessStation$$Original = $MEAmadronProcessStation;}
