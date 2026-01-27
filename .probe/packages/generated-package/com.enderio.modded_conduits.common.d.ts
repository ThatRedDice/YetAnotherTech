declare module "com.enderio.modded_conduits.common.modules.appeng.MEConduit" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MEConduitConnectionConfig} from "com.enderio.modded_conduits.common.modules.appeng.MEConduitConnectionConfig"
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
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Set$$Type} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConduitType} from "com.enderio.enderio.api.conduits.ConduitType"
import {$RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$ConduitBundle$$Type} from "com.enderio.enderio.api.conduits.bundle.ConduitBundle"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
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

export class $MEConduit extends $Record implements $Conduit$$Interface<($MEConduit), ($MEConduitConnectionConfig)> {
static readonly "CODEC": $MapCodec<($MEConduit)>

constructor(texture: $ResourceLocation$$Type, description: $Component$$Type, color: $AEColor$$Type, isDense: boolean)

public "onRemoved"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "connectionConfigType"(): $ConnectionConfigType<($MEConduitConnectionConfig)>
public "canConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "proxyCapability"<TCapability, TContext>(arg0: $Level$$Type, arg1: $ConduitNode$$Type, arg2: $BlockCapability$$Type<(TCapability), (TContext)>, arg3: TContext): TCapability
public "canReplaceConduit"(arg0: $MEConduit$$Type): boolean
public "canReplaceConduit"(arg0: $Conduit$$Type): boolean
public "canConnectToConduit"(arg0: $MEConduit$$Type): boolean
public "canConnectToConduit"(arg0: $Conduit$$Type): boolean
public "hasConnectionDelay"(): boolean
public "onConnectionsUpdated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Set$$Type<($Direction$$Type)>): void
public "convertConnection"(arg0: boolean, arg1: boolean, arg2: $DyeColor$$Type, arg3: $DyeColor$$Type, arg4: $RedstoneControl$$Type, arg5: $DyeColor$$Type): $MEConduitConnectionConfig
public "hasMenu"(): boolean
public "onCreated"(arg0: $ConduitNode$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "isDense"(): boolean
public "texture"(): $ResourceLocation
public "type"(): $ConduitType<($MEConduit)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $MEConduit$$Type): integer
public "color"(): $AEColor
public "description"(): $Component
public "ticker"(): $ConduitTicker<($MEConduit)>
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "getInventorySize"(): integer
public "networkTickRate"(): integer
public "hasServerConnectionChecks"(): boolean
public "canConnectConduits"(arg0: $ConduitNode$$Type, arg1: $ConduitNode$$Type): boolean
public "compareNodes"(arg0: $ConduitBlockConnection$$Type, arg1: $ConduitBlockConnection$$Type, arg2: $ConduitBlockConnection$$Type): integer
public "canForceConnectToBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
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
public "getGeneralConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
get "dense"(): boolean
get "inventorySize"(): integer
get "generalConnectionComparator"(): $Comparator<($ConduitBlockConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEConduit$$Type = ({"isDense"?: boolean, "color"?: $AEColor$$Type, "texture"?: $ResourceLocation$$Type, "description"?: $Component$$Type}) | ([isDense?: boolean, color?: $AEColor$$Type, texture?: $ResourceLocation$$Type, description?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MEConduit$$Original = $MEConduit;}
declare module "com.enderio.modded_conduits.common.modules.appeng.MEConduitConnectionConfig" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ConnectionConfigType} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfigType"
import {$ConnectionConfig, $ConnectionConfig$$Interface} from "com.enderio.enderio.api.conduits.connection.config.ConnectionConfig"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $MEConduitConnectionConfig extends $Record implements $ConnectionConfig$$Interface {
static readonly "CODEC": $MapCodec<($MEConduitConnectionConfig)>
static readonly "TYPE": $ConnectionConfigType<($MEConduitConnectionConfig)>
static readonly "DEFAULT": $MEConduitConnectionConfig
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MEConduitConnectionConfig)>

constructor(isConnected: boolean)

public "disconnected"(): $ConnectionConfig
public "reconnected"(): $ConnectionConfig
public "isConnected"(): boolean
public "type"(): $ConnectionConfigType<(never)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEConduitConnectionConfig$$Type = ({"isConnected"?: boolean}) | ([isConnected?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MEConduitConnectionConfig$$Original = $MEConduitConnectionConfig;}
