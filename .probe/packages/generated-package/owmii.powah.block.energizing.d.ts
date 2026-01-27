declare module "owmii.powah.block.energizing.EnergizingRodBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IHud$$Interface} from "owmii.powah.lib.client.handler.IHud"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$EnergizingRodTile$$Type} from "owmii.powah.block.energizing.EnergizingRodTile"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Tier$$Type} from "owmii.powah.block.Tier"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractEnergyBlock} from "owmii.powah.lib.block.AbstractEnergyBlock"
import {$WrenchMode$$Type} from "owmii.powah.api.wrench.WrenchMode"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$EnergyBlockItem} from "owmii.powah.lib.item.EnergyBlockItem"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IWrenchable$$Interface} from "owmii.powah.api.wrench.IWrenchable"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EnergyConfig} from "owmii.powah.config.v2.types.EnergyConfig"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $EnergizingRodBlock extends $AbstractEnergyBlock<($EnergyConfig), ($EnergizingRodBlock)> implements $SimpleWaterloggedBlock$$Interface, $IWrenchable$$Interface, $IHud$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SEMI_FULL_SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Tier$$Type)

public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "setOrbPos"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $EnergizingRodTile$$Type): void
public "onWrench"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $Direction$$Type, arg6: $WrenchMode$$Type, arg7: $Vec3$$Type): boolean
public "renderHud"(arg0: $GuiGraphics$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $BlockHitResult$$Type, arg6: $BlockEntity$$Type): boolean
public "getConfig"(): any
public "getBlockItem"(arg0: $Item$Properties$$Type, arg1: $ResourceKey$$Type<($CreativeModeTab)>): $EnergyBlockItem
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "config"(): any
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizingRodBlock$$Type = ($EnergizingRodBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergizingRodBlock$$Original = $EnergizingRodBlock;}
declare module "owmii.powah.block.energizing.EnergizingRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $EnergizingRecipe implements $Recipe$$Interface<($RecipeInput)> {
static readonly "CODEC": $MapCodec<($EnergizingRecipe)>
static readonly "ID": $ResourceLocation
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnergizingRecipe)>

constructor(arg0: $ItemStack$$Type, arg1: long, arg2: $List$$Type<($Ingredient$$Type)>)

public "getEnergy"(): long
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(): $ItemStack
public "getScaledEnergy"(): long
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "energy"(): long
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "resultItem"(): $ItemStack
get "scaledEnergy"(): long
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
export type $EnergizingRecipe$$Type = ($EnergizingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergizingRecipe$$Original = $EnergizingRecipe;}
declare module "owmii.powah.block.energizing.EnergizingOrbBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IHud$$Interface} from "owmii.powah.lib.client.handler.IHud"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$WrenchMode$$Type} from "owmii.powah.api.wrench.WrenchMode"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IWrenchable$$Interface} from "owmii.powah.api.wrench.IWrenchable"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractBlock} from "owmii.powah.lib.block.AbstractBlock"
import {$IVariant$Single} from "owmii.powah.lib.registry.IVariant$Single"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $EnergizingOrbBlock extends $AbstractBlock<($IVariant$Single), ($EnergizingOrbBlock)> implements $SimpleWaterloggedBlock$$Interface, $IWrenchable$$Interface, $IHud$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SEMI_FULL_SHAPE": $VoxelShape
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

public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onWrench"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $Direction$$Type, arg6: $WrenchMode$$Type, arg7: $Vec3$$Type): boolean
public "renderHud"(arg0: $GuiGraphics$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $BlockHitResult$$Type, arg6: $BlockEntity$$Type): boolean
public "search"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
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
export type $EnergizingOrbBlock$$Type = ($EnergizingOrbBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergizingOrbBlock$$Original = $EnergizingOrbBlock;}
declare module "owmii.powah.block.energizing.EnergizingOrbTile" {
import {$EnergizingOrbBlock} from "owmii.powah.block.energizing.EnergizingOrbBlock"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction} from "net.minecraft.core.Direction"
import {$Inventory} from "owmii.powah.lib.logistics.inventory.Inventory"
import {$EnergizingRecipe} from "owmii.powah.block.energizing.EnergizingRecipe"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Energy} from "owmii.powah.lib.logistics.energy.Energy"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$IInventoryHolder$$Interface} from "owmii.powah.lib.block.IInventoryHolder"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IVariant$Single} from "owmii.powah.lib.registry.IVariant$Single"
import {$AbstractTickableTile} from "owmii.powah.lib.block.AbstractTickableTile"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergizingOrbTile extends $AbstractTickableTile<($IVariant$Single), ($EnergizingOrbBlock)> implements $IInventoryHolder$$Interface {
 "ticks": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "onSlotChanged"(arg0: integer): void
public "canExtract"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "canInsert"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "readSync"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeSync"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "setContainRecipe"(arg0: boolean): void
public "getOrbCenter"(): $Vec3
public "currRecipe"(): $RecipeHolder<($EnergizingRecipe)>
public "fillEnergy"(arg0: long): long
public "containRecipe"(): boolean
public "getOrbUp"(): $Direction
public "getBuffer"(): $Energy
public "getSlotLimit"(arg0: integer): integer
public "getStack"(arg0: integer): $ItemStack
public "grow"(arg0: integer, arg1: integer): $ItemStack
public "shrink"(arg0: integer, arg1: integer): $ItemStack
public "shrink"(arg0: (integer)[], arg1: integer): void
public "getInventory"(): $Inventory
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
get "orbCenter"(): $Vec3
get "orbUp"(): $Direction
get "buffer"(): $Energy
get "inventory"(): $Inventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizingOrbTile$$Type = ($EnergizingOrbTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergizingOrbTile$$Original = $EnergizingOrbTile;}
declare module "owmii.powah.block.energizing.EnergizingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$EnergizingRecipe} from "owmii.powah.block.energizing.EnergizingRecipe"

export class $EnergizingRecipe$Serializer implements $RecipeSerializer$$Interface<($EnergizingRecipe)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EnergizingRecipe)>
public "codec"(): $MapCodec<($EnergizingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizingRecipe$Serializer$$Type = ($EnergizingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergizingRecipe$Serializer$$Original = $EnergizingRecipe$Serializer;}
declare module "owmii.powah.block.energizing.EnergizingRodTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EnergizingRodBlock} from "owmii.powah.block.energizing.EnergizingRodBlock"
import {$Ticker} from "owmii.powah.util.Ticker"
import {$Tier$$Type} from "owmii.powah.block.Tier"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$EnergizingOrbTile} from "owmii.powah.block.energizing.EnergizingOrbTile"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AbstractEnergyStorage} from "owmii.powah.lib.block.AbstractEnergyStorage"
import {$Redstone, $Redstone$$Type} from "owmii.powah.lib.logistics.Redstone"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnergyConfig} from "owmii.powah.config.v2.types.EnergyConfig"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergizingRodTile extends $AbstractEnergyStorage<($EnergyConfig), ($EnergizingRodBlock)> {
 "ticks": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "coolDown": $Ticker

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $Tier$$Type)

public "setOrbPos"(arg0: $BlockPos$$Type): void
public "hasOrb"(): boolean
public "getOrbPos"(): $BlockPos
public "keepEnergy"(): boolean
public "readSync"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeSync"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "isEnergyPresent"(arg0: $Direction$$Type): boolean
public "getOrbTile"(): $EnergizingOrbTile
public "getRedstoneMode"(): $Redstone
public "setRedstoneMode"(arg0: $Redstone$$Type): void
set "orbPos"(value: $BlockPos$$Type)
get "orbPos"(): $BlockPos
get "orbTile"(): $EnergizingOrbTile
get "redstoneMode"(): $Redstone
set "redstoneMode"(value: $Redstone$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizingRodTile$$Type = ($EnergizingRodTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergizingRodTile$$Original = $EnergizingRodTile;}
