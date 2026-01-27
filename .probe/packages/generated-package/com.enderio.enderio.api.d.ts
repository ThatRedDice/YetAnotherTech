declare module "com.enderio.enderio.api.travel.TravelTarget" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TravelTargetSerializer} from "com.enderio.enderio.api.travel.TravelTargetSerializer"
import {$TravelTargetType} from "com.enderio.enderio.api.travel.TravelTargetType"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $TravelTarget$$Interface {
}

export class $TravelTarget implements $TravelTarget$$Interface {
static readonly "CODEC": $Codec<($TravelTarget)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TravelTarget)>

 "canInteract"(): boolean
 "canTeleportTo"(): boolean
/**
 * 
 * @deprecated
 */
 "canTravelTo"(): boolean
 "item2BlockRange"(): integer
 "block2BlockRange"(): integer
 "canJumpTo"(): boolean
 "type"(): $TravelTargetType<(never)>
 "pos"(): $BlockPos
 "serializer"(): $TravelTargetSerializer<(never)>
 "interact"(arg0: $Level$$Type, arg1: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelTarget$$Type = ($TravelTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravelTarget$$Original = $TravelTarget;}
declare module "com.enderio.enderio.api.conduits.network.ConduitNetwork" {
import {$Collection} from "java.util.Collection"
import {$List} from "java.util.List"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set} from "java.util.Set"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.enderio.api.conduits.network.node.ConduitNode"
import {$ConduitNetworkContextType$$Type} from "com.enderio.enderio.api.conduits.network.ConduitNetworkContextType"
import {$ConduitNetworkContext} from "com.enderio.enderio.api.conduits.network.ConduitNetworkContext"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.enderio.api.conduits.network.ConduitBlockConnection"

export interface $ConduitNetwork$$Interface {
get "empty"(): boolean
}

export class $ConduitNetwork implements $ConduitNetwork$$Interface {
 "blockConnectionsAccessibleFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
 "nodeCount"(): integer
 "tickingNodes"(): $Collection<($ConduitNode)>
 "blockEndpoints"(): $Collection<($ConduitNode)>
 "blockConnections"(): $Collection<($ConduitBlockConnection)>
 "allChannels"(): $Set<($DyeColor)>
 "insertConnections"(): $List<($ConduitBlockConnection)>
 "insertConnections"(arg0: $DyeColor$$Type): $List<($ConduitBlockConnection)>
 "extractConnectionsFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
 "extractConnections"(): $List<($ConduitBlockConnection)>
 "extractConnections"(arg0: $DyeColor$$Type): $List<($ConduitBlockConnection)>
 "insertConnectionsFrom"(arg0: $ConduitBlockConnection$$Type): $List<($ConduitBlockConnection)>
 "getOrCreateContext"<T extends $ConduitNetworkContext<(object)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
 "nodes"(): $Set<($ConduitNode)>
 "isEmpty"(): boolean
 "contains"(arg0: $ConduitNode$$Type): boolean
 "getContext"<T extends $ConduitNetworkContext<(object)>>(arg0: $ConduitNetworkContextType$$Type<(T)>): T
 "hasContext"(arg0: $ConduitNetworkContextType$$Type<(never)>): boolean
 "neighbors"(arg0: $ConduitNode$$Type): $Set<($ConduitNode)>
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
declare module "com.enderio.enderio.api.conduits.network.ConduitNetworkContext" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Set$$Type} from "java.util.Set"
import {$ConduitNetworkContextType} from "com.enderio.enderio.api.conduits.network.ConduitNetworkContextType"
import {$ConduitNetwork$$Type} from "com.enderio.enderio.api.conduits.network.ConduitNetwork"

export interface $ConduitNetworkContext$$Interface<T extends $ConduitNetworkContext<(object)>> {
}

export class $ConduitNetworkContext<T extends $ConduitNetworkContext<(object)>> implements $ConduitNetworkContext$$Interface {
static readonly "GENERIC_CODEC": $Codec<($ConduitNetworkContext<(never)>)>

 "type"(): $ConduitNetworkContextType<(T)>
 "split"(arg0: $ConduitNetwork$$Type, arg1: $Set$$Type<($ConduitNetwork$$Type)>): T
 "mergeWith"(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNetworkContext$$Type<T> = ($ConduitNetworkContext<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitNetworkContext$$Original<T> = $ConduitNetworkContext<(T)>;}
declare module "com.enderio.enderio.api.capacitor.CapacitorModifier" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List} from "java.util.List"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"

export class $CapacitorModifier extends $Enum<($CapacitorModifier)> implements $StringRepresentable$$Interface {
static readonly "ENERGY_USE": $CapacitorModifier
static readonly "CODEC": $Codec<($CapacitorModifier)>
static readonly "ENERGY_CAPACITY": $CapacitorModifier
static readonly "FUEL_EFFICIENCY": $CapacitorModifier
static readonly "FIXED": $CapacitorModifier
static readonly "BY_ID": $IntFunction<($CapacitorModifier)>
readonly "modifierId": $ResourceLocation
static readonly "SELECTABLE_MODIFIERS": $List<($CapacitorModifier)>
static readonly "BURNING_ENERGY_GENERATION": $CapacitorModifier
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($CapacitorModifier)>

public static "getRandomModifier"(arg0: $RandomSource$$Type): $CapacitorModifier
public static "values"(): ($CapacitorModifier)[]
public static "valueOf"(arg0: StringJS): $CapacitorModifier
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
export type $CapacitorModifier$$Type = (("energy_capacity") | ("energy_use") | ("fuel_efficiency") | ("burning_energy_generation") | ("fixed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacitorModifier$$Original = $CapacitorModifier;}
declare module "com.enderio.enderio.api.filter.RedstoneOutputFilter" {
import {$RedstoneFilter$$Interface} from "com.enderio.enderio.api.filter.RedstoneFilter"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$RedstoneOutputFilterContext$$Type} from "com.enderio.enderio.api.filter.RedstoneOutputFilterContext"

export interface $RedstoneOutputFilter$$Interface extends $RedstoneFilter$$Interface {
get "configured"(): boolean
}

export class $RedstoneOutputFilter implements $RedstoneOutputFilter$$Interface {
 "getOutputSignal"(arg0: $RedstoneOutputFilterContext$$Type, arg1: $DyeColor$$Type): integer
 "isConfigured"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneOutputFilter$$Type = ($RedstoneOutputFilter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneOutputFilter$$Original = $RedstoneOutputFilter;}
declare module "com.enderio.enderio.api.conduits.network.node.ConduitNode" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$NodeData, $NodeData$$Type} from "com.enderio.enderio.api.conduits.network.node.NodeData"
import {$ConnectionConfigType$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$NodeDataType$$Type} from "com.enderio.enderio.api.conduits.network.node.NodeDataType"
import {$ConnectionConfig} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConnectionStatus} from "com.enderio.enderio.api.conduits.connection.ConnectionStatus"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ConduitNetwork} from "com.enderio.enderio.api.conduits.network.ConduitNetwork"

export interface $ConduitNode$$Interface {
get "ticking"(): boolean
get "nodeData"(): $NodeData
set "nodeData"(value: T)
get "network"(): $ConduitNetwork
get "loaded"(): boolean
}

export class $ConduitNode implements $ConduitNode$$Interface {
 "markDirty"(): void
 "isTicking"(): boolean
 "getConnectionStatus"(arg0: $Direction$$Type): $ConnectionStatus
 "getNeighborSidedCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>, arg1: $Direction$$Type): TCapability
 "getNeighborVoidCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), (void)>, arg1: $Direction$$Type): TCapability
 "hasNodeData"(arg0: $NodeDataType$$Type<(never)>): boolean
 "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Direction$$Type, arg1: $ConnectionConfigType$$Type<(T)>): T
 "getConnectionConfig"(arg0: $Direction$$Type): $ConnectionConfig
 "getNodeData"(): $NodeData
 "getNodeData"<T extends $NodeData>(arg0: $NodeDataType$$Type<(T)>): T
 "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
 "getOrCreateNodeData"<T extends $NodeData>(arg0: $NodeDataType$$Type<(T)>): T
 "setNodeData"<T extends $NodeData>(arg0: T): void
 "isConnectedToBlock"(arg0: $Direction$$Type): boolean
 "isConnectedTo"(arg0: $Direction$$Type): boolean
 "getNetwork"(): $ConduitNetwork
 "pos"(): $BlockPos
 "isLoaded"(): boolean
 "getInventory"(arg0: $Direction$$Type): $IItemHandlerModifiable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNode$$Type = ($ConduitNode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitNode$$Original = $ConduitNode;}
declare module "com.enderio.enderio.api.io.energy.EnergyIOMode" {
import {$Enum} from "java.lang.Enum"

export class $EnergyIOMode extends $Enum<($EnergyIOMode)> {
static readonly "Input": $EnergyIOMode
static readonly "Output": $EnergyIOMode
static readonly "Both": $EnergyIOMode

public "canOutput"(): boolean
public "canInput"(): boolean
public "respectIOConfig"(): boolean
public static "values"(): ($EnergyIOMode)[]
public static "valueOf"(arg0: StringJS): $EnergyIOMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyIOMode$$Type = (("input") | ("output") | ("both"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyIOMode$$Original = $EnergyIOMode;}
declare module "com.enderio.enderio.api.conduits.ConduitRedstoneSignalAware" {
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export interface $ConduitRedstoneSignalAware$$Interface {

(arg0: $DyeColor): boolean
}

export class $ConduitRedstoneSignalAware implements $ConduitRedstoneSignalAware$$Interface {
static readonly "NONE": $ConduitRedstoneSignalAware

 "hasRedstoneSignal"(arg0: $DyeColor$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitRedstoneSignalAware$$Type = ((arg0: $DyeColor) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitRedstoneSignalAware$$Original = $ConduitRedstoneSignalAware;}
declare module "com.enderio.enderio.api.conduits.Conduit" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConduitNode$$Type} from "com.enderio.enderio.api.conduits.network.node.ConduitNode"
import {$ConduitDataAccessor$$Type} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitDataAccessor"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SlotType$$Type} from "com.enderio.enderio.api.conduits.bundle.SlotType"
import {$Holder} from "net.minecraft.core.Holder"
import {$ConduitBlockConnection, $ConduitBlockConnection$$Type} from "com.enderio.enderio.api.conduits.network.ConduitBlockConnection"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set$$Type} from "java.util.Set"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConduitType} from "com.enderio.enderio.api.conduits.ConduitType"
import {$RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$ConduitBundle$$Type} from "com.enderio.enderio.api.conduits.bundle.ConduitBundle"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Vector2i} from "org.joml.Vector2i"
import {$Comparator} from "java.util.Comparator"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ConduitTicker} from "com.enderio.enderio.api.conduits.ticker.ConduitTicker"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"

export interface $Conduit$$Interface<TConduit extends $Conduit<(object), (object)>, TConnectionConfig extends $ConnectionConfig> extends $Comparable$$Interface<(TConduit)>, $TooltipProvider$$Interface {
get "inventorySize"(): integer
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduit
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitTag
}

export class $Conduit<TConduit extends $Conduit<(object), (object)>, TConnectionConfig extends $ConnectionConfig> implements $Conduit$$Interface {
static readonly "CODEC": $Codec<($Holder<($Conduit<(never), (never)>)>)>
static readonly "DIRECT_CODEC": $Codec<($Conduit<(never), (never)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Conduit<(never), (never)>)>)>

 "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
 "getInventorySize"(): integer
 "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
 "connectionConfigType"(): $ConnectionConfigType<(TConnectionConfig)>
 "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "networkTickRate"(): integer
 "proxyCapability"<TCapability, TContext>(arg0: $Level$$Type, arg1: $ConduitNode$$Type, arg2: $BlockCapability$$Type<(TCapability), (TContext)>, arg3: TContext): TCapability
 "canReplaceConduit"(arg0: TConduit): boolean
 "canConnectToConduit"(arg0: TConduit): boolean
 "hasServerConnectionChecks"(): boolean
 "canConnectConduits"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
 "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
 "hasConnectionDelay"(): boolean
 "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
 "onConnectTo"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): void
 "getInventorySlotPosition"(arg0: integer): $Vector2i
/**
 * 
 * @deprecated
 */
 "getIndexForLegacySlot"(arg0: $SlotType$$Type): integer
 "getExtraGuiData"(arg0: $ConduitBundle$$Type, arg1: $ConduitNode$$Type, arg2: $Direction$$Type): $CompoundTag
 "getExtraWorldData"(arg0: $ConduitBundle$$Type, arg1: $ConduitNode$$Type): $CompoundTag
 "hasAdvancedTooltip"(): boolean
 "showDebugTooltip"(): boolean
/**
 * 
 * @deprecated
 */
 "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): TConnectionConfig
/**
 * 
 * @deprecated
 */
 "copyLegacyData"(arg0: $ConduitNode$$Type, arg1: $ConduitDataAccessor$$Type, arg2: $BiConsumer$$Type<($Direction), ($ConnectionConfig)>): void
 "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
 "hasMenu"(): boolean
 "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
 "texture"(): $ResourceLocation
 "type"(): $ConduitType<(TConduit)>
 "description"(): $Component
 "ticker"(): $ConduitTicker<(TConduit)>
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "compareTo"(arg0: TConduit): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Conduit$$Type<TConduit, TConnectionConfig> = (Special.EnderioConduit);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Conduit$$Original<TConduit, TConnectionConfig> = $Conduit<(TConduit), (TConnectionConfig)>;}
declare module "com.enderio.enderio.api.filter.RedstoneInputFilter" {
import {$RedstoneFilter$$Interface} from "com.enderio.enderio.api.filter.RedstoneFilter"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $RedstoneInputFilter$$Interface extends $RedstoneFilter$$Interface {
get "configured"(): boolean
}

export class $RedstoneInputFilter implements $RedstoneInputFilter$$Interface {
 "getInputSignal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
 "isConfigured"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneInputFilter$$Type = ($RedstoneInputFilter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneInputFilter$$Original = $RedstoneInputFilter;}
declare module "com.enderio.enderio.api.conduits.bundle.ConduitBundle" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FacadeType} from "com.enderio.enderio.api.conduits.facade.FacadeType"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddConduitResult} from "com.enderio.enderio.api.conduits.bundle.AddConduitResult"
import {$ConduitNode} from "com.enderio.enderio.api.conduits.network.node.ConduitNode"
import {$Conduit, $Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ConnectionConfigType$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig, $ConnectionConfig$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ConnectionStatus} from "com.enderio.enderio.api.conduits.connection.ConnectionStatus"
import {$ConduitType$$Type} from "com.enderio.enderio.api.conduits.ConduitType"

export interface $ConduitBundle$$Interface {
get "facadeBlock"(): $Block
set "facadeProvider"(value: $ItemStack$$Type)
get "facadeType"(): $FacadeType
get "facadeProvider"(): $ItemStack
get "conduits"(): $List<($Holder<($Conduit<(never), (never)>)>)>
get "full"(): boolean
get "empty"(): boolean
}

export class $ConduitBundle implements $ConduitBundle$$Interface {
 "hasFacade"(): boolean
 "getFacadeBlock"(): $Block
 "addConduit"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: $Player$$Type): $AddConduitResult
 "setFacadeProvider"(arg0: $ItemStack$$Type): void
 "removeConduit"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Consumer$$Type<($ItemStack)>): void
 "canAddConduit"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): boolean
 "getConduitByType"(arg0: $ConduitType$$Type<(never)>): $Holder<($Conduit<(never), (never)>)>
 "getConnectionStatus"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $ConnectionStatus
 "getConduitNode"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): $ConduitNode
 "hasConduitOfType"(arg0: $ConduitType$$Type<(never)>): boolean
 "getConduitExtraWorldData"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): $CompoundTag
 "getConduitExtraGuiData"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $CompoundTag
 "getConnectedConduits"(arg0: $Direction$$Type): $List<($Holder<($Conduit<(never), (never)>)>)>
 "getFacadeType"(): $FacadeType
 "getFacadeProvider"(): $ItemStack
 "getConduits"(): $List<($Holder<($Conduit<(never), (never)>)>)>
 "setConnectionConfig"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfig$$Type): void
 "getConnectionConfig"<T extends $ConnectionConfig>(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: $ConnectionConfigType$$Type<(T)>): T
 "getConnectionConfig"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $ConnectionConfig
 "tryConnectTo"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type, arg2: boolean): boolean
 "hasConduitStrict"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): boolean
 "hasCompatibleConduit"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): boolean
 "getConnectionInventory"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $Direction$$Type): $IItemHandlerModifiable
 "getCompatibleConduit"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>): $Holder<($Conduit<(never), (never)>)>
 "isFull"(): boolean
 "isEmpty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBundle$$Type = ($ConduitBundle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitBundle$$Original = $ConduitBundle;}
declare module "com.enderio.enderio.api.conduits.ConduitType$Builder$SimpleType" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Conduit} from "com.enderio.enderio.api.conduits.Conduit"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConduitType, $ConduitType$$Interface} from "com.enderio.enderio.api.conduits.ConduitType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ConduitType$Builder} from "com.enderio.enderio.api.conduits.ConduitType$Builder"
import {$Record} from "java.lang.Record"

export class $ConduitType$Builder$SimpleType<T extends $Conduit<(object), (object)>> extends $Record implements $ConduitType$$Interface<(T)> {
public "exposedCapabilities"(): $Set<($BlockCapability<(never), (never)>)>
public static "of"<T extends $Conduit<(object), (object)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType<(T)>
public static "of"<T extends $Conduit<(object), (object)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType<(T)>
public static "builder"<T extends $Conduit<(object), (object)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType$Builder<(T)>
public static "builder"<T extends $Conduit<(object), (object)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType$Builder<(T)>
public "codec"(): $MapCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitType$Builder$SimpleType$$Type<T> = ({"exposedCapabilities"?: $Set$$Type<($BlockCapability$$Type<(never), (never)>)>, "codec"?: $MapCodec$$Type<(T)>}) | ([exposedCapabilities?: $Set$$Type<($BlockCapability$$Type<(never), (never)>)>, codec?: $MapCodec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitType$Builder$SimpleType$$Original<T> = $ConduitType$Builder$SimpleType<(T)>;}
declare module "com.enderio.enderio.api.conduits.model.RegisterConduitModelModifiersEvent" {
import {$Map} from "java.util.Map"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory, $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory$$Type} from "com.enderio.enderio.api.conduits.model.RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.enderio.api.conduits.ConduitType"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterConduitModelModifiersEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "getModifiers"(): $Map<($ConduitType<(never)>), ($RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory)>
public "register"(arg0: $ConduitType$$Type<($Conduit$$Type<(never), (never)>)>, arg1: $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory$$Type): void
get "modifiers"(): $Map<($ConduitType<(never)>), ($RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterConduitModelModifiersEvent$$Type = ($RegisterConduitModelModifiersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterConduitModelModifiersEvent$$Original = $RegisterConduitModelModifiersEvent;}
declare module "com.enderio.enderio.api.conduits.connection.config.RedstoneSensitiveConnectionConfig" {
import {$List, $List$$Type} from "java.util.List"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export interface $RedstoneSensitiveConnectionConfig$$Interface {

(): $List$$Type<($DyeColor$$Type)>
get "redstoneSignalColors"(): $List<($DyeColor)>
}

export class $RedstoneSensitiveConnectionConfig implements $RedstoneSensitiveConnectionConfig$$Interface {
 "getRedstoneSignalColors"(): $List<($DyeColor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneSensitiveConnectionConfig$$Type = (() => $List$$Type<($DyeColor$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneSensitiveConnectionConfig$$Original = $RedstoneSensitiveConnectionConfig;}
declare module "com.enderio.enderio.api.conduits.network.node.legacy.ConduitDataAccessor" {
import {$ConduitDataType$$Type} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitDataType"
import {$ConduitData} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitData"

/**
 * 
 * @deprecated
 */
export interface $ConduitDataAccessor$$Interface {
}

export class $ConduitDataAccessor implements $ConduitDataAccessor$$Interface {
 "getOrCreateData"<T extends $ConduitData<(object)>>(arg0: $ConduitDataType$$Type<(T)>): T
 "getData"<T extends $ConduitData<(object)>>(arg0: $ConduitDataType$$Type<(T)>): T
 "hasData"(arg0: $ConduitDataType$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitDataAccessor$$Type = ($ConduitDataAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitDataAccessor$$Original = $ConduitDataAccessor;}
declare module "com.enderio.enderio.api.conduits.connection.ConnectionStatus" {
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

export class $ConnectionStatus extends $Enum<($ConnectionStatus)> implements $StringRepresentable$$Interface {
static readonly "DISABLED": $ConnectionStatus
static readonly "CONNECTED_BLOCK": $ConnectionStatus
static readonly "DISCONNECTED": $ConnectionStatus
static readonly "CODEC": $StringRepresentable$EnumCodec<($ConnectionStatus)>
static readonly "BY_ID": $IntFunction<($ConnectionStatus)>
static readonly "CONNECTED_CONDUIT": $ConnectionStatus
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ConnectionStatus)>

public "isEndpoint"(): boolean
public "canConnect"(): boolean
public "isConnected"(): boolean
public static "values"(): ($ConnectionStatus)[]
public static "valueOf"(arg0: StringJS): $ConnectionStatus
public static "byName"(arg0: StringJS): $ConnectionStatus
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "endpoint"(): boolean
get "connected"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionStatus$$Type = (("none") | ("connected_block") | ("connected_conduit") | ("disabled"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectionStatus$$Original = $ConnectionStatus;}
declare module "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ConnectionConfig} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $ConnectionConfigType<T extends $ConnectionConfig> extends $Record {
constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, defaultSupplier: $Supplier$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getDefault"(): T
public "defaultSupplier"(): $Supplier<(T)>
public "codec"(): $MapCodec<(T)>
get "default"(): T
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduitConnectionConfigType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitConnectionConfigTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionConfigType$$Type<T> = (Special.EnderioConduitConnectionConfigType) | ({"defaultSupplier"?: $Supplier$$Type<(T)>, "codec"?: $MapCodec$$Type<(T)>, "streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>}) | ([defaultSupplier?: $Supplier$$Type<(T)>, codec?: $MapCodec$$Type<(T)>, streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectionConfigType$$Original<T> = $ConnectionConfigType<(T)>;}
declare module "com.enderio.enderio.api.conduits.screen.ConduitScreenHelper" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ConduitScreenHelper$$Interface {
}

export class $ConduitScreenHelper implements $ConduitScreenHelper$$Interface {
 "addIconButton"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Component$$Type, arg5: $ResourceLocation$$Type, arg6: $Runnable$$Type): $AbstractWidget
 "addColorPicker"(arg0: integer, arg1: integer, arg2: $Component$$Type, arg3: $Supplier$$Type<($DyeColor$$Type)>, arg4: $Consumer$$Type<($DyeColor)>): $AbstractWidget
 "addPreRenderAction"(arg0: $Runnable$$Type): void
 "addRedstoneControlPicker"(arg0: integer, arg1: integer, arg2: $Component$$Type, arg3: $Supplier$$Type<($RedstoneControl$$Type)>, arg4: $Consumer$$Type<($RedstoneControl)>): $AbstractWidget
 "addToggleButton"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Component$$Type, arg5: $Component$$Type, arg6: $ResourceLocation$$Type, arg7: $ResourceLocation$$Type, arg8: $Supplier$$Type<(boolean)>, arg9: $Consumer$$Type<(boolean)>): $AbstractWidget
 "addFilterConfigureButton"(arg0: integer, arg1: integer, arg2: integer): $AbstractWidget
 "addCheckbox"(arg0: integer, arg1: integer, arg2: $Supplier$$Type<(boolean)>, arg3: $Consumer$$Type<(boolean)>): $AbstractWidget
 "addWidget"<W extends $GuiEventListener>(arg0: W): W
 "addRenderableWidget"<W extends $GuiEventListener>(arg0: W): W
 "addRenderableOnly"<W extends $Renderable>(arg0: W): W
 "removeWidget"(arg0: $GuiEventListener$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitScreenHelper$$Type = ($ConduitScreenHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitScreenHelper$$Original = $ConduitScreenHelper;}
declare module "com.enderio.enderio.api.farm.RegisterFarmTasksEvent" {
import {$FarmTaskType, $FarmTaskType$$Type} from "com.enderio.enderio.api.farm.FarmTaskType"
import {$FarmTask, $FarmTask$$Type} from "com.enderio.enderio.api.farm.FarmTask"
import {$Pair} from "it.unimi.dsi.fastutil.Pair"
import {$List} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterFarmTasksEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "getTasks"(): $List<($Pair<($FarmTaskType), ($FarmTask)>)>
public "register"(arg0: $FarmTaskType$$Type, arg1: $FarmTask$$Type): void
get "tasks"(): $List<($Pair<($FarmTaskType), ($FarmTask)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterFarmTasksEvent$$Type = ($RegisterFarmTasksEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterFarmTasksEvent$$Original = $RegisterFarmTasksEvent;}
declare module "com.enderio.enderio.api.conduits.connection.config.IOConnectionConfig" {
import {$ConduitRedstoneSignalAware$$Type} from "com.enderio.enderio.api.conduits.ConduitRedstoneSignalAware"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig, $ConnectionConfig$$Interface} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"

export interface $IOConnectionConfig$$Interface extends $ConnectionConfig$$Interface {
get "insert"(): boolean
get "extract"(): boolean
get "connected"(): boolean
}

export class $IOConnectionConfig implements $IOConnectionConfig$$Interface {
 "canExtract"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
 "canInsert"(arg0: $ConduitRedstoneSignalAware$$Type): boolean
 "extractChannel"(): $DyeColor
 "isInsert"(): boolean
 "isExtract"(): boolean
 "insertChannel"(): $DyeColor
 "isConnected"(): boolean
 "disconnected"(): $ConnectionConfig
 "reconnected"(): $ConnectionConfig
 "type"(): $ConnectionConfigType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOConnectionConfig$$Type = ($IOConnectionConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOConnectionConfig$$Original = $IOConnectionConfig;}
declare module "com.enderio.enderio.api.conduits.model.ConduitModelModifier" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $ConduitModelModifier$$Interface {
get "modelDependencies"(): $List<($ModelResourceLocation)>
}

export class $ConduitModelModifier implements $ConduitModelModifier$$Interface {
 "getModelDependencies"(): $List<($ModelResourceLocation)>
 "createConnectionQuads"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $CompoundTag$$Type, arg2: $Direction$$Type, arg3: $Direction$$Type, arg4: $RandomSource$$Type, arg5: $RenderType$$Type): $List<($BakedQuad)>
 "getTexture"(arg0: $Holder$$Type<($Conduit<(never), (never)>)>, arg1: $CompoundTag$$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitModelModifier$$Type = ($ConduitModelModifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitModelModifier$$Original = $ConduitModelModifier;}
declare module "com.enderio.enderio.api.filter.SoulFilter" {
import {$Soul$$Type} from "com.enderio.enderio.api.soul.Soul"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $SoulFilter$$Interface {
}

export class $SoulFilter implements $SoulFilter$$Interface {
 "test"(arg0: $LivingEntity$$Type): boolean
 "test"(arg0: $Soul$$Type): boolean
 "test"(arg0: $EntityType$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulFilter$$Type = ($SoulFilter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulFilter$$Original = $SoulFilter;}
declare module "com.enderio.enderio.api.conduits.network.node.legacy.ConduitDataType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ConduitData} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitData"
import {$Record} from "java.lang.Record"

/**
 * 
 * @deprecated
 */
export class $ConduitDataType<T extends $ConduitData<(object)>> extends $Record {
constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, factory: $Supplier$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "factory"(): $Supplier<(T)>
public "codec"(): $MapCodec<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduitDataType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitDataTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitDataType$$Type<T> = (Special.EnderioConduitDataType) | ({"codec"?: $MapCodec$$Type<(T)>, "factory"?: $Supplier$$Type<(T)>, "streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>}) | ([codec?: $MapCodec$$Type<(T)>, factory?: $Supplier$$Type<(T)>, streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitDataType$$Original<T> = $ConduitDataType<(T)>;}
declare module "com.enderio.enderio.api.filter.FilterMenuProvider" {
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $FilterMenuProvider$$Interface {

(arg0: $ServerPlayer, arg1: $IItemHandlerModifiable, arg2: integer, arg3: $Runnable): void
}

export class $FilterMenuProvider implements $FilterMenuProvider$$Interface {
 "openMenu"(arg0: $ServerPlayer$$Type, arg1: $IItemHandlerModifiable$$Type, arg2: integer, arg3: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterMenuProvider$$Type = ((arg0: $ServerPlayer, arg1: $IItemHandlerModifiable, arg2: integer, arg3: $Runnable) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterMenuProvider$$Original = $FilterMenuProvider;}
declare module "com.enderio.enderio.api.conduits.model.RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory" {
import {$ConduitModelModifier, $ConduitModelModifier$$Type} from "com.enderio.enderio.api.conduits.model.ConduitModelModifier"

export interface $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory$$Interface {

(): $ConduitModelModifier$$Type
}

export class $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory implements $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory$$Interface {
 "createModifier"(): $ConduitModelModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory$$Type = (() => $ConduitModelModifier$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory$$Original = $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory;}
declare module "com.enderio.enderio.api.capacitor.CapacitorData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CapacitorModifier, $CapacitorModifier$$Type} from "com.enderio.enderio.api.capacitor.CapacitorModifier"
import {$Record} from "java.lang.Record"

export class $CapacitorData extends $Record {
static readonly "CODEC": $Codec<($CapacitorData)>
static readonly "MODIFIER_CODEC": $Codec<($Map<($CapacitorModifier), (float)>)>
static readonly "NONE": $CapacitorData
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($CapacitorData)>
static readonly "MODIFIER_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Map<($CapacitorModifier), (float)>)>

constructor(base: float, modifiers: $Map$$Type<($CapacitorModifier$$Type), (float)>)

public "modifiers"(): $Map<($CapacitorModifier), (float)>
public "base"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "simple"(arg0: float): $CapacitorData
public "getModifier"(arg0: $CapacitorModifier$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacitorData$$Type = ({"modifiers"?: $Map$$Type<($CapacitorModifier$$Type), (float)>, "base"?: float}) | ([modifiers?: $Map$$Type<($CapacitorModifier$$Type), (float)>, base?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacitorData$$Original = $CapacitorData;}
declare module "com.enderio.enderio.api.conduits.bundle.SlotType" {
import {$Enum} from "java.lang.Enum"

/**
 * 
 * @deprecated
 */
export class $SlotType extends $Enum<($SlotType)> {
static readonly "FILTER_INSERT": $SlotType
static readonly "FILTER_EXTRACT": $SlotType
static readonly "UPGRADE_EXTRACT": $SlotType
static readonly "Y_POSITION": integer

public "getY"(): integer
public static "values"(): ($SlotType)[]
public static "valueOf"(arg0: StringJS): $SlotType
public "getX"(): integer
get "y"(): integer
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotType$$Type = (("filter_extract") | ("filter_insert") | ("upgrade_extract"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotType$$Original = $SlotType;}
declare module "com.enderio.enderio.api.travel.TravelTargetSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TravelTarget} from "com.enderio.enderio.api.travel.TravelTarget"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $TravelTargetSerializer$$Interface<T extends $TravelTarget> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioTravelTargetSerializers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioTravelTargetSerializersTag
}

export class $TravelTargetSerializer<T extends $TravelTarget> implements $TravelTargetSerializer$$Interface {
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
 "codec"(): $MapCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelTargetSerializer$$Type<T> = (Special.EnderioTravelTargetSerializers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravelTargetSerializer$$Original<T> = $TravelTargetSerializer<(T)>;}
declare module "com.enderio.enderio.api.soul.Soul" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $Soul extends $Record {
static readonly "CODEC": $Codec<($Soul)>
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Soul)>
static readonly "EMPTY": $Soul
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Soul)>

constructor(entityType: $EntityType$$Type<(never)>, entityTag: $CompoundTag$$Type)

public "hasEntity"(): boolean
public "entityType"(): $EntityType<(never)>
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $Soul
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "isSameEntitySameTag"(arg0: $Soul$$Type, arg1: $LivingEntity$$Type): boolean
public static "isSameEntitySameTag"(arg0: $Soul$$Type, arg1: $Soul$$Type): boolean
public "getEntityTagWithId"(): $CompoundTag
public "copyOnlyType"(): $Soul
public static "isSameEntity"(arg0: $Soul$$Type, arg1: $EntityType$$Type<(never)>): boolean
public static "isSameEntity"(arg0: $Soul$$Type, arg1: $LivingEntity$$Type): boolean
public static "isSameEntity"(arg0: $Soul$$Type, arg1: $Soul$$Type): boolean
public "entityTypeId"(): $ResourceLocation
public "entityTag"(): $CompoundTag
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "of"(arg0: $LivingEntity$$Type): $Soul
public static "of"(arg0: $ResourceLocation$$Type): $Soul
public static "of"(arg0: $EntityType$$Type<(never)>): $Soul
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($Soul)>
public "copy"(): $Soul
get "entityTagWithId"(): $CompoundTag
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Soul$$Type = ({"entityTag"?: $CompoundTag$$Type, "entityType"?: $EntityType$$Type<(never)>}) | ([entityTag?: $CompoundTag$$Type, entityType?: $EntityType$$Type<(never)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Soul$$Original = $Soul;}
declare module "com.enderio.enderio.api.conduits.network.node.NodeDataType" {
import {$NodeData} from "com.enderio.enderio.api.conduits.network.node.NodeData"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $NodeDataType<T extends $NodeData> {
constructor(arg0: $MapCodec$$Type<(T)>, arg1: $Supplier$$Type<(T)>)

public "create"(): T
public "codec"(): $MapCodec<(T)>
public "isPersistent"(): boolean
get "persistent"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduitNodeDataType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitNodeDataTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeDataType$$Type<T> = (Special.EnderioConduitNodeDataType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NodeDataType$$Original<T> = $NodeDataType<(T)>;}
declare module "com.enderio.enderio.api.conduits.ConduitType" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$BlockCapability} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Set} from "java.util.Set"
import {$Conduit} from "com.enderio.enderio.api.conduits.Conduit"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ConduitType$Builder} from "com.enderio.enderio.api.conduits.ConduitType$Builder"

export interface $ConduitType$$Interface<T extends $Conduit<(object), (object)>> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduitType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitTypeTag
}

export class $ConduitType<T extends $Conduit<(object), (object)>> implements $ConduitType$$Interface {
static readonly "CODEC": $Codec<($ConduitType<(never)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConduitType<(never)>)>

 "exposedCapabilities"(): $Set<($BlockCapability<(never), (never)>)>
static "of"<T extends $Conduit<(object), (object)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType<(T)>
static "of"<T extends $Conduit<(object), (object)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType<(T)>
static "builder"<T extends $Conduit<(object), (object)>>(arg0: $BiFunction$$Type<($ResourceLocation), ($Component), (T)>): $ConduitType$Builder<(T)>
static "builder"<T extends $Conduit<(object), (object)>>(arg0: $MapCodec$$Type<(T)>): $ConduitType$Builder<(T)>
 "codec"(): $MapCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitType$$Type<T> = (Special.EnderioConduitType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitType$$Original<T> = $ConduitType<(T)>;}
declare module "com.enderio.enderio.api.conduits.bundle.AddConduitResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AddConduitResult$$Interface {
}

export class $AddConduitResult implements $AddConduitResult$$Interface {
 "hasChanged"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddConduitResult$$Type = ($AddConduitResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddConduitResult$$Original = $AddConduitResult;}
declare module "com.enderio.enderio.api.attachment.CoordinateSelection" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $CoordinateSelection extends $Record {
static readonly "CODEC": $Codec<($CoordinateSelection)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($CoordinateSelection)>

constructor(level: $ResourceKey$$Type<($Level)>, pos: $BlockPos$$Type)
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type)

public "level"(): $ResourceKey<($Level)>
public "getLevelName"(): StringJS
public static "getLevelName"(arg0: $ResourceLocation$$Type): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pos"(): $BlockPos
get "levelName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoordinateSelection$$Type = ({"level"?: $ResourceKey$$Type<($Level)>, "pos"?: $BlockPos$$Type}) | ([level?: $ResourceKey$$Type<($Level)>, pos?: $BlockPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CoordinateSelection$$Original = $CoordinateSelection;}
declare module "com.enderio.enderio.api.conduits.ConduitType$Builder" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$Conduit} from "com.enderio.enderio.api.conduits.Conduit"
import {$ConduitType} from "com.enderio.enderio.api.conduits.ConduitType"

export class $ConduitType$Builder<T extends $Conduit<(object), (object)>> {
public "exposeCapability"<U>(arg0: $BlockCapability$$Type<(U), (never)>): $ConduitType$Builder<(T)>
public "build"(): $ConduitType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitType$Builder$$Type<T> = ($ConduitType$Builder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitType$Builder$$Original<T> = $ConduitType$Builder<(T)>;}
declare module "com.enderio.enderio.api.travel.RegisterTravelRenderersEvent$TravelRendererFactory" {
import {$TravelTarget} from "com.enderio.enderio.api.travel.TravelTarget"
import {$TravelRenderer, $TravelRenderer$$Type} from "com.enderio.enderio.api.travel.TravelRenderer"

export interface $RegisterTravelRenderersEvent$TravelRendererFactory$$Interface<T extends $TravelTarget> {

(): $TravelRenderer$$Type<(T)>
}

export class $RegisterTravelRenderersEvent$TravelRendererFactory<T extends $TravelTarget> implements $RegisterTravelRenderersEvent$TravelRendererFactory$$Interface {
 "createRenderer"(): $TravelRenderer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterTravelRenderersEvent$TravelRendererFactory$$Type<T> = (() => $TravelRenderer$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterTravelRenderersEvent$TravelRendererFactory$$Original<T> = $RegisterTravelRenderersEvent$TravelRendererFactory<(T)>;}
declare module "com.enderio.enderio.api.filter.ItemFilter" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $ItemFilter$$Interface {

(arg0: $IItemHandler, arg1: $ItemStack): $ItemStack$$Type
}

export class $ItemFilter implements $ItemFilter$$Interface {
 "test"(arg0: $IItemHandler$$Type, arg1: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$$Type = ((arg0: $IItemHandler, arg1: $ItemStack) => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFilter$$Original = $ItemFilter;}
declare module "com.enderio.enderio.api.filter.RedstoneOutputFilterContext" {
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export interface $RedstoneOutputFilterContext$$Interface {
}

export class $RedstoneOutputFilterContext implements $RedstoneOutputFilterContext$$Interface {
 "isActive"(arg0: $DyeColor$$Type): boolean
 "getSignal"(arg0: $DyeColor$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneOutputFilterContext$$Type = ($RedstoneOutputFilterContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneOutputFilterContext$$Original = $RedstoneOutputFilterContext;}
declare module "com.enderio.enderio.api.io.RedstoneControl" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IntFunction} from "java.util.function.IntFunction"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export class $RedstoneControl extends $Enum<($RedstoneControl)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($RedstoneControl)>
static readonly "ALWAYS_ACTIVE": $RedstoneControl
static readonly "BY_ID": $IntFunction<($RedstoneControl)>
static readonly "NEVER_ACTIVE": $RedstoneControl
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RedstoneControl)>
static readonly "ACTIVE_WITH_SIGNAL": $RedstoneControl
static readonly "ACTIVE_WITHOUT_SIGNAL": $RedstoneControl

public "isRedstoneSensitive"(): boolean
public static "values"(): ($RedstoneControl)[]
public static "valueOf"(arg0: StringJS): $RedstoneControl
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $RedstoneControl
public "isActive"(arg0: boolean): boolean
public "getComponent"(): $MutableComponent
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "redstoneSensitive"(): boolean
get "component"(): $MutableComponent
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneControl$$Type = (("always_active") | ("active_with_signal") | ("active_without_signal") | ("never_active"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneControl$$Original = $RedstoneControl;}
declare module "com.enderio.enderio.api.conduits.facade.FacadeType" {
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

export class $FacadeType extends $Enum<($FacadeType)> implements $StringRepresentable$$Interface {
static readonly "TRANSPARENT_HARDENED": $FacadeType
static readonly "CODEC": $Codec<($FacadeType)>
static readonly "HARDENED": $FacadeType
static readonly "BY_ID": $IntFunction<($FacadeType)>
static readonly "TRANSPARENT": $FacadeType
static readonly "BASIC": $FacadeType
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($FacadeType)>

public "doesHideConduits"(): boolean
public "isBlastResistant"(): boolean
public static "values"(): ($FacadeType)[]
public static "valueOf"(arg0: StringJS): $FacadeType
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "blastResistant"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadeType$$Type = (("basic") | ("hardened") | ("transparent") | ("transparent_hardened"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FacadeType$$Original = $FacadeType;}
declare module "com.enderio.enderio.api.conduits.network.ConduitNetworkContextType" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"
import {$ConduitNetworkContext} from "com.enderio.enderio.api.conduits.network.ConduitNetworkContext"

export class $ConduitNetworkContextType<T extends $ConduitNetworkContext<(object)>> extends $Record {
constructor(codec: $MapCodec$$Type<(T)>, factory: $Supplier$$Type<(T)>)

public "codecOrThrow"(): $MapCodec<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "factory"(): $Supplier<(T)>
public "codec"(): $MapCodec<(T)>
public "isPersistent"(): boolean
get "persistent"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioConduitNetworkContextType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioConduitNetworkContextTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitNetworkContextType$$Type<T> = (Special.EnderioConduitNetworkContextType) | ({"factory"?: $Supplier$$Type<(T)>, "codec"?: $MapCodec$$Type<(T)>}) | ([factory?: $Supplier$$Type<(T)>, codec?: $MapCodec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitNetworkContextType$$Original<T> = $ConduitNetworkContextType<(T)>;}
declare module "com.enderio.enderio.api.conduits.screen.RegisterConduitScreenTypesEvent" {
import {$Map} from "java.util.Map"
import {$ConduitScreenType, $ConduitScreenType$$Type} from "com.enderio.enderio.api.conduits.screen.ConduitScreenType"
import {$ConnectionConfig} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$ConduitType, $ConduitType$$Type} from "com.enderio.enderio.api.conduits.ConduitType"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterConduitScreenTypesEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "getScreenTypes"(): $Map<($ConduitType<(never)>), ($ConduitScreenType<(never)>)>
public "register"<T extends $ConnectionConfig>(arg0: $ConduitType$$Type<($Conduit$$Type<(never), (T)>)>, arg1: $ConduitScreenType$$Type<(T)>): void
get "screenTypes"(): $Map<($ConduitType<(never)>), ($ConduitScreenType<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterConduitScreenTypesEvent$$Type = ($RegisterConduitScreenTypesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterConduitScreenTypesEvent$$Original = $RegisterConduitScreenTypesEvent;}
declare module "com.enderio.enderio.api.io.IOConfigurable" {
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IOMode, $IOMode$$Type} from "com.enderio.enderio.api.io.IOMode"

export interface $IOConfigurable$$Interface {
get "IOConfigMutable"(): boolean
}

export class $IOConfigurable implements $IOConfigurable$$Interface {
 "isIOConfigMutable"(): boolean
 "supportsIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): boolean
 "shouldRenderIOConfigOverlay"(): boolean
 "getIOMode"(arg0: $Direction$$Type): $IOMode
 "setIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): void
 "getNextIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOMode
 "getNextIOMode"(arg0: $Direction$$Type): $IOMode
 "cycleIOMode"(arg0: $Direction$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOConfigurable$$Type = ($IOConfigurable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOConfigurable$$Original = $IOConfigurable;}
declare module "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"

export interface $ConnectionConfig$$Interface {
get "connected"(): boolean
}

export class $ConnectionConfig implements $ConnectionConfig$$Interface {
static readonly "GENERIC_CODEC": $Codec<($ConnectionConfig)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ConnectionConfig)>

 "disconnected"(): $ConnectionConfig
 "reconnected"(): $ConnectionConfig
 "isConnected"(): boolean
 "type"(): $ConnectionConfigType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionConfig$$Type = ($ConnectionConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectionConfig$$Original = $ConnectionConfig;}
declare module "com.enderio.enderio.api.io.IOMode" {
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

export class $IOMode extends $Enum<($IOMode)> implements $StringRepresentable$$Interface {
static readonly "PULL": $IOMode
static readonly "DISABLED": $IOMode
static readonly "CODEC": $Codec<($IOMode)>
static readonly "BY_ID": $IntFunction<($IOMode)>
static readonly "NONE": $IOMode
static readonly "BOTH": $IOMode
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($IOMode)>
static readonly "PUSH": $IOMode

public "canOutput"(): boolean
public "canForce"(): boolean
public "canInput"(): boolean
public "canPush"(): boolean
public "canPull"(): boolean
public "canConnect"(): boolean
public static "values"(): ($IOMode)[]
public static "valueOf"(arg0: StringJS): $IOMode
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
export type $IOMode$$Type = (("none") | ("push") | ("pull") | ("both") | ("disable"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOMode$$Original = $IOMode;}
declare module "com.enderio.enderio.api.farm.FarmTask" {
import {$FarmInteraction, $FarmInteraction$$Type} from "com.enderio.enderio.api.farm.FarmInteraction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $FarmTask$$Interface {

(arg0: $BlockPos, arg1: T): $FarmInteraction$$Type
}

export class $FarmTask implements $FarmTask$$Interface {
 "process"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: T): $FarmInteraction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmTask$$Type = ((arg0: $BlockPos, arg1: T) => $FarmInteraction$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FarmTask$$Original = $FarmTask;}
declare module "com.enderio.enderio.api.capacitor.CapacitorScalable" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$CapacitorData$$Type} from "com.enderio.enderio.api.capacitor.CapacitorData"

export interface $CapacitorScalable$$Interface {
}

export class $CapacitorScalable implements $CapacitorScalable$$Interface {
 "scaleF"(arg0: $Supplier$$Type<($CapacitorData$$Type)>): $Supplier<(float)>
 "scaleI"(arg0: $Supplier$$Type<($CapacitorData$$Type)>): $Supplier<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacitorScalable$$Type = ($CapacitorScalable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacitorScalable$$Original = $CapacitorScalable;}
declare module "com.enderio.enderio.api.farm.FarmingMachine" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level} from "net.minecraft.world.level.Level"
import {$FakePlayer} from "net.neoforged.neoforge.common.util.FakePlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityType} from "net.minecraft.world.entity.EntityType"

export interface $FarmingMachine$$Interface {
get "shears"(): $ItemStack
get "farmingRange"(): integer
get "hoe"(): $ItemStack
get "axe"(): $ItemStack
get "position"(): $BlockPos
get "level"(): $Level
get "entityType"(): $EntityType<(never)>
get "player"(): $FakePlayer
}

export class $FarmingMachine implements $FarmingMachine$$Interface {
 "handleDrops"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $ItemStack$$Type): boolean
 "consumeBonemeal"(): boolean
 "getSeedsForPos"(arg0: $BlockPos$$Type): $ItemStack
 "getShears"(): $ItemStack
 "getFarmingRange"(): integer
 "getHoe"(): $ItemStack
 "getAxe"(): $ItemStack
 "getPosition"(): $BlockPos
 "getLevel"(): $Level
 "useStack"(arg0: $BlockPos$$Type, arg1: $ItemStack$$Type): $InteractionResult
 "getEntityType"(): $EntityType<(never)>
 "getPlayer"(): $FakePlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmingMachine$$Type = ($FarmingMachine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FarmingMachine$$Original = $FarmingMachine;}
declare module "com.enderio.enderio.api.filter.FluidFilter" {
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $FluidFilter$$Interface {

(arg0: $IFluidHandler, arg1: $FluidStack): $FluidStack$$Type
}

export class $FluidFilter implements $FluidFilter$$Interface {
 "test"(arg0: $IFluidHandler$$Type, arg1: $FluidStack$$Type): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFilter$$Type = ((arg0: $IFluidHandler, arg1: $FluidStack) => $FluidStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidFilter$$Original = $FluidFilter;}
declare module "com.enderio.enderio.api.travel.TravelRenderer" {
import {$TravelTarget, $TravelTarget$$Type} from "com.enderio.enderio.api.travel.TravelTarget"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"

export interface $TravelRenderer$$Interface<T extends $TravelTarget> {

(arg0: T, arg1: $LevelRenderer, arg2: $PoseStack, arg3: double, arg4: boolean, arg5: float): void
}

export class $TravelRenderer<T extends $TravelTarget> implements $TravelRenderer$$Interface {
 "render"(arg0: T, arg1: $LevelRenderer$$Type, arg2: $PoseStack$$Type, arg3: double, arg4: boolean, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelRenderer$$Type<T> = ((arg0: T, arg1: $LevelRenderer, arg2: $PoseStack, arg3: double, arg4: boolean, arg5: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravelRenderer$$Original<T> = $TravelRenderer<(T)>;}
declare module "com.enderio.enderio.api.conduits.network.node.NodeData" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$NodeDataType, $NodeDataType$$Type} from "com.enderio.enderio.api.conduits.network.node.NodeDataType"

export interface $NodeData$$Interface {

(): $NodeDataType$$Type<(never)>
}

export class $NodeData implements $NodeData$$Interface {
static readonly "GENERIC_CODEC": $Codec<($NodeData)>

 "type"(): $NodeDataType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeData$$Type = (() => $NodeDataType$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NodeData$$Original = $NodeData;}
declare module "com.enderio.enderio.api.conduits.screen.ConduitMenuDataAccess" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ConnectionConfig} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$Function$$Type} from "java.util.function.Function"
import {$Conduit} from "com.enderio.enderio.api.conduits.Conduit"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $ConduitMenuDataAccess$$Interface<T extends $ConnectionConfig> {
get "connectionConfig"(): T
get "extraGuiData"(): $CompoundTag
get "blockPos"(): $BlockPos
}

export class $ConduitMenuDataAccess<T extends $ConnectionConfig> implements $ConduitMenuDataAccess$$Interface {
 "conduit"(): $Conduit<(never), (T)>
 "getConnectionConfig"(): T
 "getExtraGuiData"(): $CompoundTag
 "updateConnectionConfig"(arg0: $Function$$Type<(T), (T)>): void
 "getBlockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitMenuDataAccess$$Type<T> = ($ConduitMenuDataAccess<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitMenuDataAccess$$Original<T> = $ConduitMenuDataAccess<(T)>;}
declare module "com.enderio.enderio.api.io.SideConfig" {
import {$IOMode, $IOMode$$Type} from "com.enderio.enderio.api.io.IOMode"

export interface $SideConfig$$Interface {
set "mode"(value: $IOMode$$Type)
get "mode"(): $IOMode
}

export class $SideConfig implements $SideConfig$$Interface {
 "cycleMode"(): void
 "setMode"(arg0: $IOMode$$Type): void
 "getMode"(): $IOMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SideConfig$$Type = ($SideConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SideConfig$$Original = $SideConfig;}
declare module "com.enderio.enderio.api.filter.RedstoneFilter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RedstoneFilter$$Interface {

(): boolean
get "configured"(): boolean
}

export class $RedstoneFilter implements $RedstoneFilter$$Interface {
 "isConfigured"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneFilter$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneFilter$$Original = $RedstoneFilter;}
declare module "com.enderio.enderio.api.components.GrindingBallData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record} from "java.lang.Record"

export class $GrindingBallData extends $Record {
static readonly "IDENTITY": $GrindingBallData
static readonly "CODEC": $Codec<($GrindingBallData)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($GrindingBallData)>

constructor(outputMultiplier: float, bonusMultiplier: float, powerUse: float, durability: integer)

public "durability"(): integer
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $GrindingBallData
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
public "bonusMultiplier"(): float
public "outputMultiplier"(): float
public "powerUse"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($GrindingBallData)>
public "isIdentity"(): boolean
get "identity"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindingBallData$$Type = ({"bonusMultiplier"?: float, "durability"?: integer, "outputMultiplier"?: float, "powerUse"?: float}) | ([bonusMultiplier?: float, durability?: integer, outputMultiplier?: float, powerUse?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrindingBallData$$Original = $GrindingBallData;}
declare module "com.enderio.enderio.api.conduits.screen.ConduitScreenType" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ConnectionConfig} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$ConduitScreenHelper$$Type} from "com.enderio.enderio.api.conduits.screen.ConduitScreenHelper"
import {$ConduitMenuDataAccess$$Type} from "com.enderio.enderio.api.conduits.screen.ConduitMenuDataAccess"
import {$Font$$Type} from "net.minecraft.client.gui.Font"

export class $ConduitScreenType<U extends $ConnectionConfig> {
constructor()

public "createScreenWidgets"(arg0: $ConduitScreenHelper$$Type, arg1: integer, arg2: integer, arg3: $ConduitMenuDataAccess$$Type<(U)>): void
public "renderScreenLabels"(arg0: $ConduitMenuDataAccess$$Type<(U)>, arg1: $GuiGraphics$$Type, arg2: $Font$$Type, arg3: integer, arg4: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitScreenType$$Type<U> = ($ConduitScreenType<(U)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitScreenType$$Original<U> = $ConduitScreenType<(U)>;}
declare module "com.enderio.enderio.api.conduits.network.ConduitBlockConnection" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ConnectionConfigType$$Type} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ConduitNode, $ConduitNode$$Type} from "com.enderio.enderio.api.conduits.network.node.ConduitNode"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $ConduitBlockConnection extends $Record {
constructor(node: $ConduitNode$$Type, connectionSide: $Direction$$Type)

public "connectionSide"(): $Direction
public "connectionConfig"<T extends $ConnectionConfig>(arg0: $ConnectionConfigType$$Type<(T)>): T
public "connectionConfig"(): $ConnectionConfig
public "connectedBlockPos"(): $BlockPos
public "getSidedCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), ($Direction$$Type)>): TCapability
public "getVoidCapability"<TCapability>(arg0: $BlockCapability$$Type<(TCapability), (void)>): TCapability
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "node"(): $ConduitNode
public "inventory"(): $IItemHandlerModifiable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitBlockConnection$$Type = ({"connectionSide"?: $Direction$$Type, "node"?: $ConduitNode$$Type}) | ([connectionSide?: $Direction$$Type, node?: $ConduitNode$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitBlockConnection$$Original = $ConduitBlockConnection;}
declare module "com.enderio.enderio.api.conduits.ticker.ConduitTicker" {
import {$Conduit, $Conduit$$Type} from "com.enderio.enderio.api.conduits.Conduit"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ConduitNetwork, $ConduitNetwork$$Type} from "com.enderio.enderio.api.conduits.network.ConduitNetwork"

export interface $ConduitTicker$$Interface<TConduit extends $Conduit<(object), (object)>> {

(arg0: $ServerLevel, arg1: TConduit, arg2: $ConduitNetwork): void
}

export class $ConduitTicker<TConduit extends $Conduit<(object), (object)>> implements $ConduitTicker$$Interface {
 "tick"(arg0: $ServerLevel$$Type, arg1: TConduit, arg2: $ConduitNetwork$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitTicker$$Type<TConduit> = ((arg0: $ServerLevel, arg1: TConduit, arg2: $ConduitNetwork) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitTicker$$Original<TConduit> = $ConduitTicker<(TConduit)>;}
declare module "com.enderio.enderio.api.farm.FarmInteraction" {
import {$Enum} from "java.lang.Enum"

export class $FarmInteraction extends $Enum<($FarmInteraction)> {
static readonly "BLOCKED": $FarmInteraction
static readonly "FINISHED": $FarmInteraction
static readonly "IGNORED": $FarmInteraction

public static "values"(): ($FarmInteraction)[]
public static "valueOf"(arg0: StringJS): $FarmInteraction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmInteraction$$Type = (("finished") | ("blocked") | ("ignored"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FarmInteraction$$Original = $FarmInteraction;}
declare module "com.enderio.enderio.api.conduits.network.node.legacy.ConduitData" {
import {$NodeData} from "com.enderio.enderio.api.conduits.network.node.NodeData"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConduitDataType} from "com.enderio.enderio.api.conduits.network.node.legacy.ConduitDataType"

/**
 * 
 * @deprecated
 */
export interface $ConduitData$$Interface<T extends $ConduitData<(object)>> {
}

export class $ConduitData<T extends $ConduitData<(object)>> implements $ConduitData$$Interface {
static readonly "CODEC": $Codec<($ConduitData<(never)>)>

 "toNodeData"(): $NodeData
 "withClientChanges"(arg0: T): T
 "type"(): $ConduitDataType<(T)>
 "deepCopy"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitData$$Type<T> = ($ConduitData<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitData$$Original<T> = $ConduitData<(T)>;}
declare module "com.enderio.enderio.api.travel.TravelTargetType" {
import {$TravelTarget} from "com.enderio.enderio.api.travel.TravelTarget"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $TravelTargetType$$Interface<T extends $TravelTarget> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderioTravelTargetTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderioTravelTargetTypesTag
}

export class $TravelTargetType<T extends $TravelTarget> implements $TravelTargetType$$Interface {
static "simple"<T extends $TravelTarget>(arg0: $ResourceLocation$$Type): $TravelTargetType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravelTargetType$$Type<T> = (Special.EnderioTravelTargetTypes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravelTargetType$$Original<T> = $TravelTargetType<(T)>;}
declare module "com.enderio.enderio.api.travel.RegisterTravelRenderersEvent" {
import {$TravelTarget} from "com.enderio.enderio.api.travel.TravelTarget"
import {$Map} from "java.util.Map"
import {$TravelTargetType, $TravelTargetType$$Type} from "com.enderio.enderio.api.travel.TravelTargetType"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$RegisterTravelRenderersEvent$TravelRendererFactory, $RegisterTravelRenderersEvent$TravelRendererFactory$$Type} from "com.enderio.enderio.api.travel.RegisterTravelRenderersEvent$TravelRendererFactory"

export class $RegisterTravelRenderersEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "getRenderers"(): $Map<($TravelTargetType<(never)>), ($RegisterTravelRenderersEvent$TravelRendererFactory<(never)>)>
public "register"<T extends $TravelTarget>(arg0: $TravelTargetType$$Type<(T)>, arg1: $RegisterTravelRenderersEvent$TravelRendererFactory$$Type<(T)>): void
get "renderers"(): $Map<($TravelTargetType<(never)>), ($RegisterTravelRenderersEvent$TravelRendererFactory<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterTravelRenderersEvent$$Type = ($RegisterTravelRenderersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterTravelRenderersEvent$$Original = $RegisterTravelRenderersEvent;}
declare module "com.enderio.enderio.api.farm.FarmTaskType" {
import {$Enum} from "java.lang.Enum"

export class $FarmTaskType extends $Enum<($FarmTaskType)> {
static readonly "PLANT": $FarmTaskType
static readonly "FERTILIZE": $FarmTaskType
static readonly "HARVEST": $FarmTaskType

public "priority"(): integer
public static "values"(): ($FarmTaskType)[]
public static "valueOf"(arg0: StringJS): $FarmTaskType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FarmTaskType$$Type = (("plant") | ("fertilize") | ("harvest"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FarmTaskType$$Original = $FarmTaskType;}
declare module "com.enderio.enderio.api.soul.binding.SoulBindable" {
import {$Soul, $Soul$$Type} from "com.enderio.enderio.api.soul.Soul"

export interface $SoulBindable$$Interface {
get "boundSoul"(): $Soul
}

export class $SoulBindable implements $SoulBindable$$Interface {
 "isSoulValid"(arg0: $Soul$$Type): boolean
 "bindSoul"(arg0: $Soul$$Type): void
 "canBind"(): boolean
 "getBoundSoul"(): $Soul
 "hasSoul"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindable$$Type = ($SoulBindable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulBindable$$Original = $SoulBindable;}
