declare module "appeng.parts.ICableBusContainer" {
import {$AEColor$$Type} from "appeng.api.util.AEColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SelectedPart} from "appeng.api.parts.SelectedPart"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$CableBusRenderState} from "appeng.client.render.cablebus.CableBusRenderState"

export interface $ICableBusContainer$$Interface {
get "renderState"(): $CableBusRenderState
get "empty"(): boolean
get "lightValue"(): integer
}

export class $ICableBusContainer implements $ICableBusContainer$$Interface {
 "isLadder"(arg0: $LivingEntity$$Type): boolean
 "canConnectRedstone"(arg0: $Direction$$Type): boolean
 "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "onEntityCollision"(arg0: $Entity$$Type): void
 "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
 "isProvidingStrongPower"(arg0: $Direction$$Type): integer
 "isProvidingWeakPower"(arg0: $Direction$$Type): integer
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "getRenderState"(): $CableBusRenderState
 "isEmpty"(): boolean
 "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
 "getLightValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICableBusContainer$$Type = ($ICableBusContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICableBusContainer$$Original = $ICableBusContainer;}
declare module "appeng.parts.CableBusContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IFacadeContainer} from "appeng.api.parts.IFacadeContainer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CableBusRenderState} from "appeng.client.render.cablebus.CableBusRenderState"
import {$ICableBusContainer$$Interface} from "appeng.parts.ICableBusContainer"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$AEMultiBlockEntity$$Interface} from "appeng.helpers.AEMultiBlockEntity"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SelectedPart} from "appeng.api.parts.SelectedPart"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $CableBusContainer implements $AEMultiBlockEntity$$Interface, $ICableBusContainer$$Interface {
constructor(arg0: $IPartHost$$Type)

public "hasRedstone"(): boolean
public "isLadder"(arg0: $LivingEntity$$Type): boolean
public "canConnectRedstone"(arg0: $Direction$$Type): boolean
public "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "clearContent"(): void
public "notifyNeighbors"(): void
public "clearContainer"(): void
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "onEntityCollision"(arg0: $Entity$$Type): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
public "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "updateConnections"(): void
public "isInWorld"(): boolean
public "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
public "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
public "markForSave"(): void
public "markForUpdate"(): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "removeFromWorld"(): void
public "addToWorld"(): void
public "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
public "isProvidingStrongPower"(arg0: $Direction$$Type): integer
public "isProvidingWeakPower"(arg0: $Direction$$Type): integer
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getPart"(arg0: $Direction$$Type): $IPart
public "partChanged"(): void
public "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
public "getFacadeContainer"(): $IFacadeContainer
public "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
public "removePartFromSide"(arg0: $Direction$$Type): void
public "removePart"(arg0: $IPart$$Type): boolean
public "notifyNeighborNow"(arg0: $Direction$$Type): void
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "getRenderState"(): $CableBusRenderState
public "addPartDrops"(arg0: $List$$Type<($ItemStack$$Type)>): $List<($ItemStack)>
public static "isLoading"(): boolean
public "getShape"(): $VoxelShape
public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "cleanup"(): void
public "setHost"(arg0: $IPartHost$$Type): void
public "getColor"(): $AEColor
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
public "isBlocked"(arg0: $Direction$$Type): boolean
public "getBlockEntity"(): $BlockEntity
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getLightValue"(): integer
public "isRequiresDynamicRender"(): boolean
public "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
get "inWorld"(): boolean
get "facadeContainer"(): $IFacadeContainer
get "renderState"(): $CableBusRenderState
public static get "loading"(): boolean
get "shape"(): $VoxelShape
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
set "host"(value: $IPartHost$$Type)
get "color"(): $AEColor
get "blockEntity"(): $BlockEntity
get "lightValue"(): integer
get "requiresDynamicRender"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusContainer$$Type = ($CableBusContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CableBusContainer$$Original = $CableBusContainer;}
declare module "appeng.parts.AEBasePart" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$BusSupport$$Type} from "appeng.api.parts.BusSupport"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$Component} from "net.minecraft.network.chat.Component"
import {$DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$IDebugExportable$$Interface} from "appeng.util.IDebugExportable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$IPartHost, $IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$Reference2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$IPowerChannelState$$Interface} from "appeng.api.implementations.IPowerChannelState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IActionHost$$Interface} from "appeng.api.networking.security.IActionHost"
import {$IPart$$Interface} from "appeng.api.parts.IPart"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Nameable$$Interface} from "net.minecraft.world.Nameable"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$IManagedGridNode} from "appeng.api.networking.IManagedGridNode"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartModel} from "appeng.api.parts.IPartModel"
import {$ISegmentedInventory$$Interface} from "appeng.api.inventories.ISegmentedInventory"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $AEBasePart implements $IPart$$Interface, $IActionHost$$Interface, $ISegmentedInventory$$Interface, $IPowerChannelState$$Interface, $Nameable$$Interface, $IDebugExportable$$Interface {
constructor(arg0: $IPartItem$$Type<(never)>)

public "isPowered"(): boolean
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "addEntityCrashInfo"(arg0: $CrashReportCategory$$Type): void
public "getMainNode"(): $IManagedGridNode
public "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
public "getPartItem"(): $IPartItem<(never)>
public "exportSettings"(arg0: $SettingsFrom$$Type): $DataComponentMap
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "useStandardMemoryCard"(): boolean
public "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "getGridNode"(): $IGridNode
public "readVisualStateFromNBT"(arg0: $CompoundTag$$Type): void
public "isMissingChannel"(): boolean
public "getActionableNode"(): $IGridNode
public "writeVisualStateToNBT"(arg0: $CompoundTag$$Type): void
public "removeFromWorld"(): void
public "addToWorld"(): void
public "setPartHostInfo"(arg0: $Direction$$Type, arg1: $IPartHost$$Type, arg2: $BlockEntity$$Type): void
public "onPlacement"(arg0: $Player$$Type): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void
public "getLevel"(): $Level
public "getName"(): $Component
public "getHost"(): $IPartHost
public "isActive"(): boolean
public "getSide"(): $Direction
public "getBlockEntity"(): $BlockEntity
public "isClientSide"(): boolean
public "getCustomName"(): $Component
public "getLightLevel"(): integer
public "isSolid"(): boolean
public "isLadder"(arg0: $LivingEntity$$Type): boolean
public "canConnectRedstone"(): boolean
public "clearContent"(): void
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "onEntityCollision"(arg0: $Entity$$Type): void
public "canBePlacedOn"(arg0: $BusSupport$$Type): boolean
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
public "renderDynamic"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
public "requireDynamicRender"(): boolean
public "onUpdateShape"(arg0: $Direction$$Type): void
public "isProvidingStrongPower"(): integer
public "isProvidingWeakPower"(): integer
public "getExternalFacingNode"(): $IGridNode
public "getExternalCableConnectionType"(): $AECableType
public "onUseWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "onShiftClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "addPartDrop"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "getStaticModels"(): $IPartModel
public "getDesiredConnectionType"(): $AECableType
public "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
public "getModelData"(): $ModelData
public "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
get "powered"(): boolean
get "mainNode"(): $IManagedGridNode
get "partItem"(): $IPartItem<(never)>
get "gridNode"(): $IGridNode
get "missingChannel"(): boolean
get "actionableNode"(): $IGridNode
get "level"(): $Level
get "name"(): $Component
get "host"(): $IPartHost
get "active"(): boolean
get "side"(): $Direction
get "blockEntity"(): $BlockEntity
get "clientSide"(): boolean
get "customName"(): $Component
get "lightLevel"(): integer
get "solid"(): boolean
get "providingStrongPower"(): integer
get "providingWeakPower"(): integer
get "externalFacingNode"(): $IGridNode
get "externalCableConnectionType"(): $AECableType
get "staticModels"(): $IPartModel
get "desiredConnectionType"(): $AECableType
get "modelData"(): $ModelData
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePart$$Type = ($AEBasePart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEBasePart$$Original = $AEBasePart;}
