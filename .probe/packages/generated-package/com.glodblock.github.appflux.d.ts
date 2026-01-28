declare module "com.glodblock.github.appflux.common.me.service.IEnergyDistributor" {
import {$IGridNodeService$$Interface} from "appeng.api.networking.IGridNodeService"
import {$EnergyDistributeService$$Type} from "com.glodblock.github.appflux.common.me.service.EnergyDistributeService"

export interface $IEnergyDistributor$$Interface extends $IGridNodeService$$Interface {
set "serviceHost"(value: $EnergyDistributeService$$Type)
set "fastMode"(value: boolean)
get "fastMode"(): boolean
get "active"(): boolean
}

export class $IEnergyDistributor implements $IEnergyDistributor$$Interface {
 "distribute"(arg0: long): void
 "setServiceHost"(arg0: $EnergyDistributeService$$Type): void
 "setFastMode"(arg0: boolean): void
 "isFastMode"(): boolean
 "isActive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyDistributor$$Type = ($IEnergyDistributor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyDistributor$$Original = $IEnergyDistributor;}
declare module "com.glodblock.github.appflux.common.me.key.type.FluxKeyType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Registry} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$AEKey} from "appeng.api.stacks.AEKey"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FluxKeyType extends $AEKeyType {
static readonly "CODEC": $Codec<($AEKeyType)>
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($AEKeyType)>)>
static readonly "TYPE": $FluxKeyType
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKeyType)>

public "getAmountPerByte"(): integer
public "getAmountPerOperation"(): integer
public "readFromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $AEKey
public "codec"(): $MapCodec<($AEKey)>
get "amountPerByte"(): integer
get "amountPerOperation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluxKeyType$$Type = ($FluxKeyType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluxKeyType$$Original = $FluxKeyType;}
declare module "com.glodblock.github.appflux.common.blocks.BlockChargedRedstoneBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockChargedRedstoneBlock extends $Block {
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

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockChargedRedstoneBlock$$Type = ($BlockChargedRedstoneBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockChargedRedstoneBlock$$Original = $BlockChargedRedstoneBlock;}
declare module "com.glodblock.github.appflux.common.items.ItemInductionCard" {
import {$UpgradeCardItem} from "appeng.items.materials.UpgradeCardItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $ItemInductionCard extends $UpgradeCardItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInductionCard$$Type = ($ItemInductionCard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInductionCard$$Original = $ItemInductionCard;}
declare module "com.glodblock.github.appflux.api.IFluxCell" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$EnergyType} from "com.glodblock.github.appflux.common.me.key.type.EnergyType"
import {$ICapabilityProvider$$Interface} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$ICellWorkbenchItem$$Interface} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"

export interface $IFluxCell$$Interface extends $ICellWorkbenchItem$$Interface, $ICapabilityProvider$$Interface<($ItemStack), (void), ($IEnergyStorage)> {
get "idleDrain"(): double
get "energyType"(): $EnergyType
}

export class $IFluxCell implements $IFluxCell$$Interface {
 "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
 "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "getIdleDrain"(): double
 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "getEnergyType"(): $EnergyType
 "getBytes"(arg0: $ItemStack$$Type): long
 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getCapability"(arg0: $ItemStack$$Type, arg1: void): $IEnergyStorage
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluxCell$$Type = ($IFluxCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluxCell$$Original = $IFluxCell;}
declare module "com.glodblock.github.appflux.common.items.NormalItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $NormalItem extends $AEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NormalItem$$Type = ($NormalItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NormalItem$$Original = $NormalItem;}
declare module "com.glodblock.github.appflux.common.tileentities.TileFluxAccessor" {
import {$DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IActionSource} from "appeng.api.networking.security.IActionSource"
import {$IEnergyDistributor$$Interface} from "com.glodblock.github.appflux.common.me.service.IEnergyDistributor"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$IStorageService} from "appeng.api.networking.storage.IStorageService"
import {$EnergyDistributeService$$Type} from "com.glodblock.github.appflux.common.me.service.EnergyDistributeService"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileFluxAccessor extends $AENetworkedBlockEntity implements $IEnergyDistributor$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "distribute"(arg0: long): void
public "getStorage"(): $IStorageService
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setServiceHost"(arg0: $EnergyDistributeService$$Type): void
public "setFastMode"(arg0: boolean): void
public "isFastMode"(): boolean
public "getEnergyStorage"(): $IEnergyStorage
public "getSource"(): $IActionSource
public "isActive"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "storage"(): $IStorageService
set "serviceHost"(value: $EnergyDistributeService$$Type)
set "fastMode"(value: boolean)
get "fastMode"(): boolean
get "energyStorage"(): $IEnergyStorage
get "source"(): $IActionSource
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileFluxAccessor$$Type = ($TileFluxAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TileFluxAccessor$$Original = $TileFluxAccessor;}
declare module "com.glodblock.github.appflux.common.blocks.BlockFluxAccessor" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AEBaseEntityBlock} from "appeng.block.AEBaseEntityBlock"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$TileFluxAccessor} from "com.glodblock.github.appflux.common.tileentities.TileFluxAccessor"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockFluxAccessor extends $AEBaseEntityBlock<($TileFluxAccessor)> {
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

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFluxAccessor$$Type = ($BlockFluxAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFluxAccessor$$Original = $BlockFluxAccessor;}
declare module "com.glodblock.github.appflux.common.me.service.EnergyDistributeService" {
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridService$$Interface} from "appeng.api.networking.IGridService"
import {$IEnergyDistributor$$Type} from "com.glodblock.github.appflux.common.me.service.IEnergyDistributor"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IGridServiceProvider$$Interface} from "appeng.api.networking.IGridServiceProvider"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $EnergyDistributeService implements $IGridService$$Interface, $IGridServiceProvider$$Interface {
constructor()

public "onServerStartTick"(): void
public "onLevelEndTick"(arg0: $Level$$Type): void
public "sleep"(arg0: $IEnergyDistributor$$Type): void
public "removeNode"(arg0: $IGridNode$$Type): void
public "addNode"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
public "wake"(arg0: $IEnergyDistributor$$Type): void
public "onServerEndTick"(): void
public "onLevelStartTick"(arg0: $Level$$Type): void
public "saveNodeData"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
public "debugDump"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyDistributeService$$Type = ($EnergyDistributeService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyDistributeService$$Original = $EnergyDistributeService;}
declare module "com.glodblock.github.appflux.common.items.ItemFECell" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IFluxCell$$Interface} from "com.glodblock.github.appflux.api.IFluxCell"
import {$EnergyType} from "com.glodblock.github.appflux.common.me.key.type.EnergyType"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $ItemFECell extends $AEBaseItem implements $IFluxCell$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ItemLike$$Type, arg1: integer, arg2: double)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "getIdleDrain"(): double
public "getEnergyType"(): $EnergyType
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getBytes"(arg0: $ItemStack$$Type): long
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getCapability"(arg0: $ItemStack$$Type, arg1: void): $IEnergyStorage
public "getCapability"(arg0: any, arg1: any): any
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "idleDrain"(): double
get "energyType"(): $EnergyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFECell$$Type = ($ItemFECell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFECell$$Original = $ItemFECell;}
declare module "com.glodblock.github.appflux.common.items.ItemPortableFECell" {
import {$MEStorageMenu} from "appeng.menu.me.common.MEStorageMenu"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IFluxCell$$Interface} from "com.glodblock.github.appflux.api.IFluxCell"
import {$EnergyType} from "com.glodblock.github.appflux.common.me.key.type.EnergyType"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$AbstractPortableCell} from "appeng.items.tools.powered.AbstractPortableCell"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ItemPortableFECell extends $AbstractPortableCell implements $IFluxCell$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "FE_CELL_TYPE": $MenuType<($MEStorageMenu)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: integer, arg1: double, arg2: integer)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getAEMaxPower"(arg0: $ItemStack$$Type): double
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "getIdleDrain"(): double
public "getEnergyType"(): $EnergyType
public "getRecipeId"(): $ResourceLocation
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getBytes"(arg0: $ItemStack$$Type): long
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getCapability"(arg0: any, arg1: any): any
public "getCapability"(arg0: $ItemStack$$Type, arg1: void): $IEnergyStorage
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "asItem"(): $Item
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "idleDrain"(): double
get "energyType"(): $EnergyType
get "recipeId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPortableFECell$$Type = ($ItemPortableFECell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPortableFECell$$Original = $ItemPortableFECell;}
declare module "com.glodblock.github.appflux.common.me.key.type.EnergyType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Component} from "net.minecraft.network.chat.Component"

export class $EnergyType extends $Enum<($EnergyType)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($EnergyType)>
static readonly "GTEU": $EnergyType
static readonly "FE": $EnergyType

public static "values"(): ($EnergyType)[]
public static "valueOf"(arg0: StringJS): $EnergyType
public "from"(): StringJS
public "id"(): $ResourceLocation
public "getIcon"(): $ResourceLocation
public "getSerializedName"(): StringJS
public "translate"(): $Component
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "icon"(): $ResourceLocation
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyType$$Type = (("fe") | ("gteu"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyType$$Original = $EnergyType;}
