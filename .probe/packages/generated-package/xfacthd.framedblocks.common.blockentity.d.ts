declare module "xfacthd.framedblocks.common.blockentity.special.FramedChestBlockEntity" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ChestState$$Type} from "xfacthd.framedblocks.common.data.property.ChestState"
import {$FramedStorageBlockEntity} from "xfacthd.framedblocks.common.blockentity.special.FramedStorageBlockEntity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IStorageBlockItemHandler} from "xfacthd.framedblocks.common.capability.IStorageBlockItemHandler"

export class $FramedChestBlockEntity extends $FramedStorageBlockEntity {
static readonly "SLOTS": integer
static readonly "MSG_BLOCK_ENTITY": $Component
static readonly "MSG_BLACKLISTED": $Component
static readonly "MSG_NON_SOLID": $Component
static readonly "INVENTORY_NBT_KEY": StringJS
static readonly "CAMO_NBT_KEY": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "TITLE": $Component
static readonly "OVERFLOW_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getAnalogOutputSignal"(): integer
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getChestItemHandler"(arg0: boolean): $IStorageBlockItemHandler
public "doOpen"(): void
public "getLastChangeTime"(arg0: $ChestState$$Type): long
public static "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FramedChestBlockEntity$$Type): void
public "close"(): void
public "open"(arg0: $ServerPlayer$$Type): void
public "getDisplayName"(): $Component
public "setBlockState"(arg0: $BlockState$$Type): void
public static "tryClear"(arg0: any): void
get "analogOutputSignal"(): integer
get "displayName"(): $Component
set "blockState"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedChestBlockEntity$$Type = ($FramedChestBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedChestBlockEntity$$Original = $FramedChestBlockEntity;}
declare module "xfacthd.framedblocks.common.blockentity.special.FramedSignBlockEntity" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FilteredText$$Type} from "net.minecraft.server.network.FilteredText"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FramedBlockEntity} from "xfacthd.framedblocks.api.block.blockentity.FramedBlockEntity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SignText, $SignText$$Type} from "net.minecraft.world.level.block.entity.SignText"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FramedSignBlockEntity extends $FramedBlockEntity {
static readonly "MSG_BLOCK_ENTITY": $Component
static readonly "MSG_BLACKLISTED": $Component
static readonly "MSG_NON_SOLID": $Component
static readonly "CAMO_NBT_KEY": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS

public static "hangingSign"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $FramedSignBlockEntity
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isWaxed"(): boolean
public "isFacingFrontText"(arg0: $Player$$Type): boolean
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setWaxed"(arg0: boolean): boolean
public static "normalSign"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $FramedSignBlockEntity
public "cannotExecuteCommands"(arg0: boolean, arg1: $Player$$Type): boolean
public "tryExecuteCommands"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: boolean): boolean
public "getEditingPlayer"(): $UUID
public "setEditingPlayer"(arg0: $UUID$$Type): void
public "isTooFarAwayToEdit"(arg0: $Player$$Type): boolean
public "updateTextFromPacket"(arg0: $Player$$Type, arg1: boolean, arg2: $List$$Type<($FilteredText$$Type)>): void
public static "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FramedSignBlockEntity$$Type): void
public "setText"(arg0: $SignText$$Type, arg1: boolean): boolean
public "getText"(arg0: boolean): $SignText
public "onlyOpCanSetNbt"(): boolean
public "updateText"(arg0: $UnaryOperator$$Type<($SignText)>, arg1: boolean): boolean
get "waxed"(): boolean
set "waxed"(value: boolean)
get "editingPlayer"(): $UUID
set "editingPlayer"(value: $UUID$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedSignBlockEntity$$Type = ($FramedSignBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedSignBlockEntity$$Original = $FramedSignBlockEntity;}
declare module "xfacthd.framedblocks.common.blockentity.special.FramedStorageBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$FramedBlockEntity} from "xfacthd.framedblocks.api.block.blockentity.FramedBlockEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Nameable$$Interface} from "net.minecraft.world.Nameable"
import {$Clearable$$Interface} from "net.minecraft.world.Clearable"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$StorageBlockItemStackHandler} from "xfacthd.framedblocks.common.capability.StorageBlockItemStackHandler"
import {$IStorageBlockItemHandler} from "xfacthd.framedblocks.common.capability.IStorageBlockItemHandler"

export class $FramedStorageBlockEntity extends $FramedBlockEntity implements $MenuProvider$$Interface, $Nameable$$Interface, $Clearable$$Interface {
static readonly "SLOTS": integer
static readonly "MSG_BLOCK_ENTITY": $Component
static readonly "MSG_BLACKLISTED": $Component
static readonly "MSG_NON_SOLID": $Component
static readonly "INVENTORY_NBT_KEY": StringJS
static readonly "CAMO_NBT_KEY": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "TITLE": $Component
static readonly "OVERFLOW_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isUsableByPlayer"(arg0: $Player$$Type): boolean
public "getDrops"(): $List<($ItemStack)>
public "getAnalogOutputSignal"(): integer
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getItemHandler"(): $IStorageBlockItemHandler
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public static "createItemHandler"(arg0: $FramedStorageBlockEntity$$Type, arg1: boolean): $StorageBlockItemStackHandler
public "getName"(): $Component
public "open"(arg0: $ServerPlayer$$Type): void
public "getDisplayName"(): $Component
public "getCustomName"(): $Component
public "setCustomName"(arg0: $Component$$Type): void
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
get "drops"(): $List<($ItemStack)>
get "analogOutputSignal"(): integer
get "itemHandler"(): $IStorageBlockItemHandler
get "name"(): $Component
get "displayName"(): $Component
get "customName"(): $Component
set "customName"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedStorageBlockEntity$$Type = ($FramedStorageBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedStorageBlockEntity$$Original = $FramedStorageBlockEntity;}
declare module "xfacthd.framedblocks.common.blockentity.doubled.FramedDoubleBlockEntity" {
import {$CamoContainer, $CamoContainer$$Type} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$MapColor} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$FramedBlockEntity} from "xfacthd.framedblocks.api.block.blockentity.FramedBlockEntity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Tuple} from "net.minecraft.util.Tuple"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DoubleBlockTopInteractionMode} from "xfacthd.framedblocks.common.data.doubleblock.DoubleBlockTopInteractionMode"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$DoubleBlockSoundType} from "xfacthd.framedblocks.common.data.doubleblock.DoubleBlockSoundType"
import {$StateCache} from "xfacthd.framedblocks.api.block.cache.StateCache"
import {$IFramedDoubleBlockEntity$$Interface} from "xfacthd.framedblocks.api.block.blockentity.IFramedDoubleBlockEntity"
import {$IFramedDoubleBlock} from "xfacthd.framedblocks.common.block.IFramedDoubleBlock"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $FramedDoubleBlockEntity extends $FramedBlockEntity implements $IFramedDoubleBlockEntity$$Interface {
static readonly "MSG_BLOCK_ENTITY": $Component
static readonly "MSG_BLACKLISTED": $Component
static readonly "MSG_NON_SOLID": $Component
static readonly "CAMO_NBT_KEY": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMapColor"(): $MapColor
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getTopInteractionMode"(): $DoubleBlockTopInteractionMode
public "getBlockPair"(): $Tuple<($BlockState), ($BlockState)>
public "getCamo"(arg0: $Direction$$Type): $CamoContainer<(never), (never)>
public "getCamo"(arg0: $Direction$$Type, arg1: $Direction$$Type): $CamoContainer<(never), (never)>
public "getCamo"(arg0: $BlockState$$Type): $CamoContainer<(never), (never)>
public "canAutoApplyCamoOnPlacement"(): boolean
public "getCamoFriction"(arg0: $BlockState$$Type, arg1: $Entity$$Type, arg2: float): float
public "getCamoExplosionResistance"(arg0: $Explosion$$Type): float
public "isCamoFlammable"(arg0: $Direction$$Type): boolean
public "getCamoFlammability"(arg0: $Direction$$Type): integer
public "getCamoFireSpreadSpeed"(arg0: $Direction$$Type): integer
public "getCamoShadeBrightness"(arg0: float): float
public "getCamoBeaconColorMultiplier"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): integer
public "canCamoSustainPlant"(arg0: $BlockGetter$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type): $TriState
public "shouldCamoDisplayFluidOverlay"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): boolean
public "canEntityDestroyCamo"(arg0: $Entity$$Type): boolean
public "setCamoInternal"(arg0: $CamoContainer$$Type<(never), (never)>, arg1: boolean): void
public "canTriviallyDropAllCamos"(): boolean
public "addCamoDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "isSolidSide"(arg0: $Direction$$Type): boolean
public "getStateCache"(): $StateCache
public "getCamoTwo"(): $CamoContainer<(never), (never)>
public "debugHitSecondary"(arg0: $BlockHitResult$$Type, arg1: $Player$$Type): boolean
public "getBlock"(): $IFramedDoubleBlock
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "getSoundType"(): $DoubleBlockSoundType
public "hasCustomOutlineRendering"(arg0: $Player$$Type): boolean
public "getModelData"(arg0: boolean): $ModelData
get "mapColor"(): $MapColor
get "topInteractionMode"(): $DoubleBlockTopInteractionMode
get "blockPair"(): $Tuple<($BlockState), ($BlockState)>
get "stateCache"(): $StateCache
get "camoTwo"(): $CamoContainer<(never), (never)>
get "block"(): $IFramedDoubleBlock
get "soundType"(): $DoubleBlockSoundType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDoubleBlockEntity$$Type = ($FramedDoubleBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedDoubleBlockEntity$$Original = $FramedDoubleBlockEntity;}
