declare module "me.desht.pneumaticcraft.common.block.IBlockPressureChamber" {
import {$BlockBehaviour$Properties} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

export interface $IBlockPressureChamber$$Interface {
}

export class $IBlockPressureChamber implements $IBlockPressureChamber$$Interface {
static "pressureChamberBlockProps"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockPressureChamber$$Type = ($IBlockPressureChamber);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockPressureChamber$$Original = $IBlockPressureChamber;}
declare module "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerTree" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$HarvestHandler} from "me.desht.pneumaticcraft.api.harvesting.HarvestHandler"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HarvestHandlerTree extends $HarvestHandler {
constructor()

public "canHarvest"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): boolean
public "harvestAndReplant"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandlerTree$$Type = ($HarvestHandlerTree);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandlerTree$$Original = $HarvestHandlerTree;}
declare module "me.desht.pneumaticcraft.common.item.ClassifyFilterItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IFilteringItem$$Interface} from "me.desht.pneumaticcraft.api.item.IFilteringItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Item} from "net.minecraft.world.item.Item"

export class $ClassifyFilterItem extends $Item implements $IFilteringItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "matchFilter"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "xlateMatch"(arg0: boolean): $MutableComponent
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassifyFilterItem$$Type = ($ClassifyFilterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClassifyFilterItem$$Original = $ClassifyFilterItem;}
declare module "me.desht.pneumaticcraft.common.item.AmadronTabletItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IChargeableContainerProvider$$Interface} from "me.desht.pneumaticcraft.common.item.IChargeableContainerProvider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPositionProvider$$Interface} from "me.desht.pneumaticcraft.api.item.IPositionProvider"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PressurizableItem} from "me.desht.pneumaticcraft.common.item.PressurizableItem"
import {$GlobalPos} from "net.minecraft.core.GlobalPos"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ShoppingBasket$$Type} from "me.desht.pneumaticcraft.common.amadron.ShoppingBasket"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ImmutableBasket} from "me.desht.pneumaticcraft.common.amadron.ImmutableBasket"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChargingStationBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.utility.ChargingStationBlockEntity"

export class $AmadronTabletItem extends $PressurizableItem implements $IPositionProvider$$Interface, $IChargeableContainerProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "openGui"(arg0: $ServerPlayer$$Type, arg1: $InteractionHand$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getStoredPositions"(arg0: $UUID$$Type, arg1: $ItemStack$$Type): $List<($BlockPos)>
public "getRenderColor"(arg0: integer): integer
public static "getFluidProvidingLocation"(arg0: $ItemStack$$Type): $GlobalPos
public static "getItemProvidingLocation"(arg0: $ItemStack$$Type): $GlobalPos
public static "getItemCapability"(arg0: $ItemStack$$Type): $Optional<($IItemHandler)>
public static "getFluidCapability"(arg0: $ItemStack$$Type): $Optional<($IFluidHandler)>
public static "loadShoppingCart"(arg0: $ItemStack$$Type): $ImmutableBasket
public static "saveShoppingCart"(arg0: $ItemStack$$Type, arg1: $ShoppingBasket$$Type): void
public "getUpgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
public "getContainerProvider"(arg0: $ChargingStationBlockEntity$$Type): $MenuProvider
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "syncVariables"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "getRawStoredPositions"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $List<($BlockPos)>
public "disableDepthTest"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "upgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronTabletItem$$Type = ($AmadronTabletItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadronTabletItem$$Original = $AmadronTabletItem;}
declare module "me.desht.pneumaticcraft.common.network.SyncedField" {
import {$SyncedField$FieldType} from "me.desht.pneumaticcraft.common.network.SyncedField$FieldType"

export class $SyncedField<T> {
public "setLazy"(arg0: boolean): $SyncedField<(T)>
public "toString"(): StringJS
public "update"(): boolean
public "getValue"(): T
public "setValue"(arg0: any): void
public "getFieldType"(): $SyncedField$FieldType
set "lazy"(value: boolean)
get "value"(): T
set "value"(value: any)
get "fieldType"(): $SyncedField$FieldType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedField$$Type<T> = ($SyncedField<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedField$$Original<T> = $SyncedField<(T)>;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.ExplosionCraftingRecipeImpl$IFactory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$ExplosionCraftingRecipe, $ExplosionCraftingRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.ExplosionCraftingRecipe"

export interface $ExplosionCraftingRecipeImpl$IFactory$$Interface<T extends $ExplosionCraftingRecipe> {

(arg0: $SizedIngredient, arg1: integer, arg2: $List<($ItemStack)>): T
}

export class $ExplosionCraftingRecipeImpl$IFactory<T extends $ExplosionCraftingRecipe> implements $ExplosionCraftingRecipeImpl$IFactory$$Interface {
 "create"(arg0: $SizedIngredient$$Type, arg1: integer, arg2: $List$$Type<($ItemStack$$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionCraftingRecipeImpl$IFactory$$Type<T> = ((arg0: $SizedIngredient, arg1: integer, arg2: $List<($ItemStack)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExplosionCraftingRecipeImpl$IFactory$$Original<T> = $ExplosionCraftingRecipeImpl$IFactory<(T)>;}
declare module "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCactusLike$VanillaCrops" {
import {$HarvestHandlerCactusLike} from "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCactusLike"

export class $HarvestHandlerCactusLike$VanillaCrops extends $HarvestHandlerCactusLike {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandlerCactusLike$VanillaCrops$$Type = ($HarvestHandlerCactusLike$VanillaCrops);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandlerCactusLike$VanillaCrops$$Original = $HarvestHandlerCactusLike$VanillaCrops;}
declare module "me.desht.pneumaticcraft.common.block.entity.RedstoneController" {
import {$RedstoneController$RedstoneMode, $RedstoneController$RedstoneMode$$Type} from "me.desht.pneumaticcraft.common.block.entity.RedstoneController$RedstoneMode"
import {$List$$Type} from "java.util.List"
import {$RedstoneController$Saved, $RedstoneController$Saved$$Type} from "me.desht.pneumaticcraft.common.block.entity.RedstoneController$Saved"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $RedstoneController<T extends $BlockEntity> {
constructor(arg0: T, arg1: $List$$Type<($RedstoneController$RedstoneMode$$Type<(T)>)>)
constructor(arg0: T)

public "restore"(arg0: $RedstoneController$Saved$$Type): void
public "updateRedstonePower"(): void
public "parseRedstoneMode"(arg0: StringJS): boolean
public "setCurrentMode"(arg0: integer): void
public "getCurrentRedstonePower"(): integer
public "getRedstoneTabTitle"(): $Component
public "isEmitter"(): boolean
public "shouldEmit"(): boolean
public "getModeDetails"(arg0: integer): $RedstoneController$RedstoneMode<(T)>
public "getDescription"(): $Component
public "save"(): $RedstoneController$Saved
public "shouldRun"(): boolean
public "getCurrentMode"(): integer
public "getModeCount"(): integer
set "currentMode"(value: integer)
get "currentRedstonePower"(): integer
get "redstoneTabTitle"(): $Component
get "emitter"(): boolean
get "description"(): $Component
get "currentMode"(): integer
get "modeCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneController$$Type<T> = ($RedstoneController<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneController$$Original<T> = $RedstoneController<(T)>;}
declare module "me.desht.pneumaticcraft.common.block.entity.IGUITextFieldSensitive" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IGUITextFieldSensitive$$Interface {
}

export class $IGUITextFieldSensitive implements $IGUITextFieldSensitive$$Interface {
 "setText"(arg0: integer, arg1: StringJS): void
 "getText"(arg0: integer): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGUITextFieldSensitive$$Type = ($IGUITextFieldSensitive);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGUITextFieldSensitive$$Original = $IGUITextFieldSensitive;}
declare module "me.desht.pneumaticcraft.common.block.entity.processing.AssemblyLaserBlockEntity" {
import {$AbstractAssemblyRobotBlockEntity$TargetDirections$$Type} from "me.desht.pneumaticcraft.common.block.entity.processing.AbstractAssemblyRobotBlockEntity$TargetDirections"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AssemblyProgram$EnumMachine} from "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram$EnumMachine"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$AbstractAssemblyRobotBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.processing.AbstractAssemblyRobotBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AssemblyLaserBlockEntity extends $AbstractAssemblyRobotBlockEntity {
readonly "oldAngles": (float)[]
readonly "angles": (float)[]
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "isLaserOn": boolean

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickServer"(): void
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isIdle"(): boolean
public "hasItemCapability"(): boolean
public "getAssemblyType"(): $AssemblyProgram$EnumMachine
public "canMoveToDiagonalNeighbours"(): boolean
public "startLasering"(): void
public "gotoNeighbour"(arg0: $AbstractAssemblyRobotBlockEntity$TargetDirections$$Type): boolean
public "reset"(): boolean
get "idle"(): boolean
get "assemblyType"(): $AssemblyProgram$EnumMachine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyLaserBlockEntity$$Type = ($AssemblyLaserBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyLaserBlockEntity$$Original = $AssemblyLaserBlockEntity;}
declare module "me.desht.pneumaticcraft.common.block.ThermalCompressorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ColorHandlers$IHeatTintable$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$IHeatTintable"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ThermalCompressorBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$IHeatTintable$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermalCompressorBlock$$Type = ($ThermalCompressorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThermalCompressorBlock$$Original = $ThermalCompressorBlock;}
declare module "me.desht.pneumaticcraft.common.thirdparty.computer_common.ILuaMethod" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILuaMethod$$Interface {
get "methodName"(): StringJS
}

export class $ILuaMethod implements $ILuaMethod$$Interface {
 "call"(arg0: (any)[]): (any)[]
 "getMethodName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaMethod$$Type = ($ILuaMethod);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILuaMethod$$Original = $ILuaMethod;}
declare module "me.desht.pneumaticcraft.common.item.IGPSToolSync" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IGPSToolSync$$Interface {

(arg0: $Player, arg1: $ItemStack, arg2: integer, arg3: $BlockPos, arg4: StringJS, arg5: boolean): void
}

export class $IGPSToolSync implements $IGPSToolSync$$Interface {
 "syncFromClient"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: StringJS, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGPSToolSync$$Type = ((arg0: $Player, arg1: $ItemStack, arg2: integer, arg3: $BlockPos, arg4: StringJS, arg5: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGPSToolSync$$Original = $IGPSToolSync;}
declare module "me.desht.pneumaticcraft.common.item.IFluidRendered" {
import {$IFluidItemRenderInfoProvider, $IFluidItemRenderInfoProvider$$Type} from "me.desht.pneumaticcraft.client.render.fluid.IFluidItemRenderInfoProvider"

export interface $IFluidRendered$$Interface {

(): $IFluidItemRenderInfoProvider$$Type
get "fluidItemRenderer"(): $IFluidItemRenderInfoProvider
}

export class $IFluidRendered implements $IFluidRendered$$Interface {
 "getFluidItemRenderer"(): $IFluidItemRenderInfoProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidRendered$$Type = (() => $IFluidItemRenderInfoProvider$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluidRendered$$Original = $IFluidRendered;}
declare module "me.desht.pneumaticcraft.common.item.NetworkComponentItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$IProgrammable$$Interface} from "me.desht.pneumaticcraft.api.item.IProgrammable"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$NetworkComponentItem$NetworkComponentType, $NetworkComponentItem$NetworkComponentType$$Type} from "me.desht.pneumaticcraft.common.item.NetworkComponentItem$NetworkComponentType"
import {$Item} from "net.minecraft.world.item.Item"

export class $NetworkComponentItem extends $Item implements $IProgrammable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $NetworkComponentItem$NetworkComponentType$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public "canProgram"(arg0: $ItemStack$$Type): boolean
public "usesPieces"(arg0: $ItemStack$$Type): boolean
public "showProgramTooltip"(): boolean
public static "getType"(arg0: $ItemStack$$Type): $Optional<($NetworkComponentItem$NetworkComponentType)>
public static "isType"(arg0: $ItemStack$$Type, arg1: $NetworkComponentItem$NetworkComponentType$$Type): boolean
public static "isProgrammable"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkComponentItem$$Type = ($NetworkComponentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkComponentItem$$Original = $NetworkComponentItem;}
declare module "me.desht.pneumaticcraft.common.block.PressurizedSpawnerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PressurizedSpawnerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressurizedSpawnerBlock$$Type = ($PressurizedSpawnerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressurizedSpawnerBlock$$Original = $PressurizedSpawnerBlock;}
declare module "me.desht.pneumaticcraft.common.recipes.special.CompressorUpgradeCrafting" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$WrappedShapedRecipe} from "me.desht.pneumaticcraft.common.recipes.special.WrappedShapedRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CompressorUpgradeCrafting extends $WrappedShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorUpgradeCrafting$$Type = ($CompressorUpgradeCrafting);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompressorUpgradeCrafting$$Original = $CompressorUpgradeCrafting;}
declare module "me.desht.pneumaticcraft.common.item.TubeModuleItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$PressureTubeBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.tube.PressureTubeBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$AbstractTubeModule, $AbstractTubeModule$$Type} from "me.desht.pneumaticcraft.common.tubemodules.AbstractTubeModule"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $TubeModuleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $BiFunction$$Type<($Direction), ($PressureTubeBlockEntity), ($AbstractTubeModule$$Type)>)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "createModule"(arg0: $Direction$$Type, arg1: $PressureTubeBlockEntity$$Type): $AbstractTubeModule
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeModuleItem$$Type = ($TubeModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TubeModuleItem$$Original = $TubeModuleItem;}
declare module "me.desht.pneumaticcraft.common.block.PlasticBrickBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ColorHandlers$ITintableBlock$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlasticBrickBlock extends $Block implements $ColorHandlers$ITintableBlock$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $DyeColor$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getVisualShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getDyeColor"(): $DyeColor
public "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "dyeColor"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlasticBrickBlock$$Type = ($PlasticBrickBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlasticBrickBlock$$Original = $PlasticBrickBlock;}
declare module "me.desht.pneumaticcraft.common.block.entity.processing.AbstractAssemblyRobotBlockEntity$TargetDirections" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Record} from "java.lang.Record"

export class $AbstractAssemblyRobotBlockEntity$TargetDirections extends $Record {
constructor(arg0: $Direction$$Type)
constructor(primary: $Direction$$Type, secondary: $Direction$$Type)

public "secondary"(): $Direction
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "primary"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAssemblyRobotBlockEntity$TargetDirections$$Type = ({"secondary"?: $Direction$$Type, "primary"?: $Direction$$Type}) | ([secondary?: $Direction$$Type, primary?: $Direction$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractAssemblyRobotBlockEntity$TargetDirections$$Original = $AbstractAssemblyRobotBlockEntity$TargetDirections;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidGasoline$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidGasoline$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidGasoline$Flowing$$Type = ($FluidGasoline$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidGasoline$Flowing$$Original = $FluidGasoline$Flowing;}
declare module "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCropLike$SweetBerry" {
import {$HarvestHandlerCropLike} from "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCropLike"

export class $HarvestHandlerCropLike$SweetBerry extends $HarvestHandlerCropLike {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandlerCropLike$SweetBerry$$Type = ($HarvestHandlerCropLike$SweetBerry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandlerCropLike$SweetBerry$$Original = $HarvestHandlerCropLike$SweetBerry;}
declare module "me.desht.pneumaticcraft.common.item.AirCanisterItem$ChargeMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ITranslatableEnum$$Interface} from "me.desht.pneumaticcraft.api.misc.ITranslatableEnum"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $AirCanisterItem$ChargeMode extends $Enum<($AirCanisterItem$ChargeMode)> implements $StringRepresentable$$Interface, $ITranslatableEnum$$Interface {
static readonly "ALL": $AirCanisterItem$ChargeMode
static readonly "HELD": $AirCanisterItem$ChargeMode
static readonly "NONE": $AirCanisterItem$ChargeMode

public "nextMode"(): $AirCanisterItem$ChargeMode
public "getTranslationKey"(): StringJS
public static "values"(): ($AirCanisterItem$ChargeMode)[]
public static "valueOf"(arg0: StringJS): $AirCanisterItem$ChargeMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "translationKey"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirCanisterItem$ChargeMode$$Type = (("none") | ("held") | ("all"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AirCanisterItem$ChargeMode$$Original = $AirCanisterItem$ChargeMode;}
declare module "me.desht.pneumaticcraft.common.item.minigun.MinigunItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Minigun} from "me.desht.pneumaticcraft.common.minigun.Minigun"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IChargeableContainerProvider$$Interface} from "me.desht.pneumaticcraft.common.item.IChargeableContainerProvider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PressurizableItem} from "me.desht.pneumaticcraft.common.item.PressurizableItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item} from "net.minecraft.world.item.Item"
import {$IShiftScrollable$$Interface} from "me.desht.pneumaticcraft.common.item.IShiftScrollable"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$Map} from "java.util.Map"
import {$IInventoryItem$$Interface} from "me.desht.pneumaticcraft.api.item.IInventoryItem"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IFOVModifierItem$$Interface} from "me.desht.pneumaticcraft.api.client.IFOVModifierItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$MinigunItem$MagazineHandler} from "me.desht.pneumaticcraft.common.item.minigun.MinigunItem$MagazineHandler"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChargingStationBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.utility.ChargingStationBlockEntity"

export class $MinigunItem extends $PressurizableItem implements $IChargeableContainerProvider$$Interface, $IFOVModifierItem$$Interface, $IInventoryItem$$Interface, $IShiftScrollable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "NOT_LOCKED": integer
static readonly "MAGAZINE_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getStacksInItem"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
public "getInventoryHeader"(): $Component
public "onShiftScrolled"(arg0: $Player$$Type, arg1: boolean, arg2: $InteractionHand$$Type): void
public "getUpgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
public "getContainerProvider"(arg0: $ChargingStationBlockEntity$$Type): $MenuProvider
public "getMinigun"(arg0: $ItemStack$$Type, arg1: $Player$$Type): $Minigun
public "getMagazine"(arg0: $ItemStack$$Type): $MinigunItem$MagazineHandler
public static "getLockedSlot"(arg0: $ItemStack$$Type): integer
public "onEquipmentChange"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: boolean): void
public "getFOVModifier"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EquipmentSlot$$Type): float
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getTooltipPrefix"(arg0: $ItemStack$$Type): StringJS
public static "getStacks"(arg0: $ItemContainerContents$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "inventoryHeader"(): $Component
get "upgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinigunItem$$Type = ($MinigunItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinigunItem$$Original = $MinigunItem;}
declare module "me.desht.pneumaticcraft.common.block.KeroseneLampBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $KeroseneLampBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "CONNECTED": $EnumProperty<($Direction)>
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeroseneLampBlock$$Type = ($KeroseneLampBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeroseneLampBlock$$Original = $KeroseneLampBlock;}
declare module "me.desht.pneumaticcraft.common.block.entity.IGUIButtonSensitive" {
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $IGUIButtonSensitive$$Interface {

(arg0: StringJS, arg1: boolean, arg2: $ServerPlayer): void
}

export class $IGUIButtonSensitive implements $IGUIButtonSensitive$$Interface {
 "handleGUIButtonPress"(arg0: StringJS, arg1: boolean, arg2: $ServerPlayer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGUIButtonSensitive$$Type = ((arg0: StringJS, arg1: boolean, arg2: $ServerPlayer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGUIButtonSensitive$$Original = $IGUIButtonSensitive;}
declare module "me.desht.pneumaticcraft.common.item.logistics.LogisticsConfiguratorItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PressurizableItem} from "me.desht.pneumaticcraft.common.item.PressurizableItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $LogisticsConfiguratorItem extends $PressurizableItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogisticsConfiguratorItem$$Type = ($LogisticsConfiguratorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogisticsConfiguratorItem$$Original = $LogisticsConfiguratorItem;}
declare module "me.desht.pneumaticcraft.common.block.ReinforcedChestBlock$ItemBlockReinforcedChest" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$IInventoryItem$$Interface} from "me.desht.pneumaticcraft.api.item.IInventoryItem"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ReinforcedChestBlock$$Type} from "me.desht.pneumaticcraft.common.block.ReinforcedChestBlock"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"

export class $ReinforcedChestBlock$ItemBlockReinforcedChest extends $BlockItem implements $IInventoryItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ReinforcedChestBlock$$Type)

public "canFitInsideContainerItems"(): boolean
public "getStacksInItem"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
public "getTooltipPrefix"(arg0: $ItemStack$$Type): StringJS
public "getInventoryHeader"(): $Component
public static "getStacks"(arg0: $ItemContainerContents$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "inventoryHeader"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedChestBlock$ItemBlockReinforcedChest$$Type = ($ReinforcedChestBlock$ItemBlockReinforcedChest);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReinforcedChestBlock$ItemBlockReinforcedChest$$Original = $ReinforcedChestBlock$ItemBlockReinforcedChest;}
declare module "me.desht.pneumaticcraft.common.amadron.MutableBasket" {
import {$ImmutableBasket} from "me.desht.pneumaticcraft.common.amadron.ImmutableBasket"
import {$AmadronMenu$EnumProblemState} from "me.desht.pneumaticcraft.common.inventory.AmadronMenu$EnumProblemState"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ShoppingBasket} from "me.desht.pneumaticcraft.common.amadron.ShoppingBasket"

export class $MutableBasket extends $ShoppingBasket {
public "setUnits"(arg0: $ResourceLocation$$Type, arg1: integer): void
public "halve"(arg0: $ResourceLocation$$Type): void
public "addUnitsToOffer"(arg0: $ResourceLocation$$Type, arg1: integer): void
public "remove"(arg0: $ResourceLocation$$Type): void
public "clear"(): void
public "validate"(arg0: $ItemStack$$Type, arg1: boolean): $AmadronMenu$EnumProblemState
public "toImmutable"(): $ImmutableBasket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableBasket$$Type = ($MutableBasket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableBasket$$Original = $MutableBasket;}
declare module "me.desht.pneumaticcraft.common.item.logistics.LogisticsFrameDefaultStorageItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractLogisticsFrameItem} from "me.desht.pneumaticcraft.common.item.logistics.AbstractLogisticsFrameItem"

export class $LogisticsFrameDefaultStorageItem extends $AbstractLogisticsFrameItem {
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
export type $LogisticsFrameDefaultStorageItem$$Type = ($LogisticsFrameDefaultStorageItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogisticsFrameDefaultStorageItem$$Original = $LogisticsFrameDefaultStorageItem;}
declare module "me.desht.pneumaticcraft.common.block.LiquidHopperBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map} from "java.util.Map"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Direction} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$OmnidirectionalHopperBlock} from "me.desht.pneumaticcraft.common.block.OmnidirectionalHopperBlock"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LiquidHopperBlock extends $OmnidirectionalHopperBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INPUT_SHAPES": $Map<($Direction), ($VoxelShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "INPUT_FACING": $EnumProperty<($Direction)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidHopperBlock$$Type = ($LiquidHopperBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidHopperBlock$$Original = $LiquidHopperBlock;}
declare module "me.desht.pneumaticcraft.common.item.minigun.AbstractGunAmmoItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Minigun$$Type} from "me.desht.pneumaticcraft.common.minigun.Minigun"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $AbstractGunAmmoItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getEnchantmentValue"(arg0: $ItemStack$$Type): integer
public "getRangeMultiplier"(arg0: $ItemStack$$Type): float
public "onTargetHit"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type, arg2: $Entity$$Type): integer
public "getAmmoCost"(arg0: $ItemStack$$Type): integer
public "getAmmoColor"(arg0: $ItemStack$$Type): integer
public "getAirUsageMultiplier"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type): float
public "onBlockHit"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type, arg2: $BlockHitResult$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGunAmmoItem$$Type = ($AbstractGunAmmoItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractGunAmmoItem$$Original = $AbstractGunAmmoItem;}
declare module "me.desht.pneumaticcraft.common.block.ElectrostaticCompressorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ElectrostaticCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrostaticCompressorBlock$$Type = ($ElectrostaticCompressorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectrostaticCompressorBlock$$Original = $ElectrostaticCompressorBlock;}
declare module "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram$EnumAssemblyProblem" {
import {$Enum} from "java.lang.Enum"

export class $AssemblyProgram$EnumAssemblyProblem extends $Enum<($AssemblyProgram$EnumAssemblyProblem)> {
static readonly "NO_INPUT": $AssemblyProgram$EnumAssemblyProblem
static readonly "NO_OUTPUT": $AssemblyProgram$EnumAssemblyProblem
static readonly "NO_PROBLEM": $AssemblyProgram$EnumAssemblyProblem

public static "values"(): ($AssemblyProgram$EnumAssemblyProblem)[]
public static "valueOf"(arg0: StringJS): $AssemblyProgram$EnumAssemblyProblem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyProgram$EnumAssemblyProblem$$Type = (("no_problem") | ("no_input") | ("no_output"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyProgram$EnumAssemblyProblem$$Original = $AssemblyProgram$EnumAssemblyProblem;}
declare module "me.desht.pneumaticcraft.common.block.PneumaticDoorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PneumaticDoorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "TOP_DOOR": $BooleanProperty
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "addSerializableComponents"(arg0: $List$$Type<($DataComponentType$$Type<(never)>)>): void
public static "isTopDoor"(arg0: $BlockState$$Type): boolean
public "onWrenched"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $InteractionHand$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticDoorBlock$$Type = ($PneumaticDoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PneumaticDoorBlock$$Original = $PneumaticDoorBlock;}
declare module "me.desht.pneumaticcraft.common.util.playerfilter.PlayerFilter$Op" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $PlayerFilter$Op extends $Enum<($PlayerFilter$Op)> implements $StringRepresentable$$Interface {
static readonly "NO": $PlayerFilter$Op
static readonly "OR": $PlayerFilter$Op
static readonly "YES": $PlayerFilter$Op
static readonly "AND": $PlayerFilter$Op

public static "values"(): ($PlayerFilter$Op)[]
public static "valueOf"(arg0: StringJS): $PlayerFilter$Op
public "isReal"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "real"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerFilter$Op$$Type = (("yes") | ("no") | ("and") | ("or"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerFilter$Op$$Original = $PlayerFilter$Op;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidLPG$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidLPG$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLPG$Flowing$$Type = ($FluidLPG$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidLPG$Flowing$$Original = $FluidLPG$Flowing;}
declare module "me.desht.pneumaticcraft.common.particle.BulletParticleType" {
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$SimpleParticleType} from "net.minecraft.core.particles.SimpleParticleType"

export class $BulletParticleType extends $SimpleParticleType {
constructor()

public "getType"(): $ParticleType
get "type"(): $ParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulletParticleType$$Type = ($BulletParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BulletParticleType$$Original = $BulletParticleType;}
declare module "me.desht.pneumaticcraft.common.block.UVLightBoxBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ColorHandlers$ITintableBlock$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $UVLightBoxBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$ITintableBlock$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "LOADED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "LIT": $BooleanProperty
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UVLightBoxBlock$$Type = ($UVLightBoxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UVLightBoxBlock$$Original = $UVLightBoxBlock;}
declare module "me.desht.pneumaticcraft.common.block.ChargingStationBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$AbstractCamouflageBlock} from "me.desht.pneumaticcraft.common.block.AbstractCamouflageBlock"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ChargingStationBlock extends $AbstractCamouflageBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "CHARGE_PAD": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getUncamouflagedShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "isRotatable"(): boolean
public "addSerializableComponents"(arg0: $List$$Type<($DataComponentType$$Type<(never)>)>): void
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingStationBlock$$Type = ($ChargingStationBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargingStationBlock$$Original = $ChargingStationBlock;}
declare module "me.desht.pneumaticcraft.common.item.JackHammerItem" {
import {$JackHammerItem$EnchantmentHandler} from "me.desht.pneumaticcraft.common.item.JackHammerItem$EnchantmentHandler"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$JackHammerItem$DigMode, $JackHammerItem$DigMode$$Type} from "me.desht.pneumaticcraft.common.item.JackHammerItem$DigMode"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$IChargeableContainerProvider$$Interface} from "me.desht.pneumaticcraft.common.item.IChargeableContainerProvider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PressurizableItem} from "me.desht.pneumaticcraft.common.item.PressurizableItem"
import {$ColorHandlers$ITintableItem$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$IShiftScrollable$$Interface} from "me.desht.pneumaticcraft.common.item.IShiftScrollable"
import {$Set} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$JackHammerItem$DrillBitHandler} from "me.desht.pneumaticcraft.common.item.JackHammerItem$DrillBitHandler"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$DrillBitItem$DrillBitType} from "me.desht.pneumaticcraft.common.item.DrillBitItem$DrillBitType"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ChargingStationBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.utility.ChargingStationBlockEntity"

export class $JackHammerItem extends $PressurizableItem implements $IChargeableContainerProvider$$Interface, $ColorHandlers$ITintableItem$$Interface, $IShiftScrollable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "onShiftScrolled"(arg0: $Player$$Type, arg1: boolean, arg2: $InteractionHand$$Type): void
public "getUpgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
public "getContainerProvider"(arg0: $ChargingStationBlockEntity$$Type): $MenuProvider
public static "getLastModeSwitchTime"(): long
public static "getDrillBitHandler"(arg0: $ItemStack$$Type): $JackHammerItem$DrillBitHandler
public static "getEnchantmentHandler"(arg0: $ItemStack$$Type): $JackHammerItem$EnchantmentHandler
public static "getDigMode"(arg0: $ItemStack$$Type): $JackHammerItem$DigMode
public static "setDigMode"(arg0: $ItemStack$$Type, arg1: $JackHammerItem$DigMode$$Type): void
public static "cycleDigMode"(arg0: $ItemStack$$Type, arg1: boolean): $JackHammerItem$DigMode
public static "getBreakPositions"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $Player$$Type, arg4: $JackHammerItem$DigMode$$Type): $Set<($BlockPos)>
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): boolean
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public static "getDrillBit"(arg0: $ItemStack$$Type): $DrillBitItem$DrillBitType
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "upgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
public static get "lastModeSwitchTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JackHammerItem$$Type = ($JackHammerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JackHammerItem$$Original = $JackHammerItem;}
declare module "me.desht.pneumaticcraft.common.block.CompressedIronBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ColorHandlers$IHeatTintable$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$IHeatTintable"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IBlockComparatorSupport$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockComparatorSupport"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CompressedIronBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$IHeatTintable$$Interface, $PneumaticCraftEntityBlock$$Interface, $IBlockComparatorSupport$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressedIronBlock$$Type = ($CompressedIronBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompressedIronBlock$$Original = $CompressedIronBlock;}
declare module "me.desht.pneumaticcraft.common.block.FluidEtchingAcidBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid} from "net.minecraft.world.level.material.FlowingFluid"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LiquidBlock} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidEtchingAcidBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidEtchingAcidBlock$$Type = ($FluidEtchingAcidBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidEtchingAcidBlock$$Original = $FluidEtchingAcidBlock;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidPlastic$Bucket" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PneumaticCraftBucketItem} from "me.desht.pneumaticcraft.common.item.PneumaticCraftBucketItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$ICustomTooltipName$$Interface} from "me.desht.pneumaticcraft.common.item.ICustomTooltipName"

export class $FluidPlastic$Bucket extends $PneumaticCraftBucketItem implements $ICustomTooltipName$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getCustomTooltipTranslationKey"(): StringJS
public static "getTranslationKey"(arg0: $ItemStack$$Type, arg1: boolean): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "customTooltipTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlastic$Bucket$$Type = ($FluidPlastic$Bucket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPlastic$Bucket$$Original = $FluidPlastic$Bucket;}
declare module "me.desht.pneumaticcraft.common.item.ILeftClickableItem" {
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $ILeftClickableItem$$Interface {

(arg0: $ServerPlayer): void
}

export class $ILeftClickableItem implements $ILeftClickableItem$$Interface {
 "onLeftClickEmpty"(arg0: $ServerPlayer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILeftClickableItem$$Type = ((arg0: $ServerPlayer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILeftClickableItem$$Original = $ILeftClickableItem;}
declare module "me.desht.pneumaticcraft.common.item.JackHammerItem$EnchantmentHandler" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BaseItemStackHandler} from "me.desht.pneumaticcraft.common.inventory.handler.BaseItemStackHandler"

export class $JackHammerItem$EnchantmentHandler extends $BaseItemStackHandler {
constructor(arg0: $ItemStack$$Type)

public static "validateBook"(arg0: $ItemStack$$Type): boolean
public "save"(): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JackHammerItem$EnchantmentHandler$$Type = ($JackHammerItem$EnchantmentHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JackHammerItem$EnchantmentHandler$$Original = $JackHammerItem$EnchantmentHandler;}
declare module "me.desht.pneumaticcraft.common.tubemodules.AbstractTubeModule" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PressureTubeBlockEntity, $PressureTubeBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.tube.PressureTubeBlockEntity"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PressureTubeBlock$TubeHitInfo$$Type} from "me.desht.pneumaticcraft.common.block.PressureTubeBlock$TubeHitInfo"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$AABB} from "net.minecraft.world.phys.AABB"

export class $AbstractTubeModule {
 "higherBound": float
 "advancedConfig": boolean
 "lowerBound": float
static readonly "MAX_VALUE": float

constructor(arg0: $Direction$$Type, arg1: $PressureTubeBlockEntity$$Type)

public "isInline"(): boolean
public "onActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): boolean
public "hasGui"(): boolean
public "getDrops"(): $NonNullList<($ItemStack)>
public "tickClient"(): void
public "tickServer"(): void
public "getRenderBoundingBox"(): $AABB
public "onPlaced"(): void
public "canConnectTo"(arg0: $AbstractTubeModule$$Type): boolean
public "readFromNBT"(arg0: $CompoundTag$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type): $CompoundTag
public "addInfo"(arg0: $List$$Type<($Component$$Type)>): void
public "updateNeighbors"(): void
public "isInlineAndFocused"(arg0: $PressureTubeBlock$TubeHitInfo$$Type): boolean
public "getRedstoneLevel"(): integer
public "onNeighborTileUpdate"(): void
public "markFake"(): void
public "isUpgraded"(): boolean
public "canUpgrade"(): boolean
public "sendDescriptionPacket"(): void
public "onNeighborBlockUpdate"(): void
public "getInternalId"(): integer
public "onRemoved"(): void
public "getTube"(): $PressureTubeBlockEntity
public "getShape"(): $VoxelShape
public "getWidth"(): double
public "getItem"(): $Item
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getType"(): $ResourceLocation
public "isValid"(): boolean
public "getDirection"(): $Direction
public "upgrade"(): void
public "isFake"(): boolean
public "getThreshold"(arg0: integer): float
get "inline"(): boolean
get "drops"(): $NonNullList<($ItemStack)>
get "renderBoundingBox"(): $AABB
get "redstoneLevel"(): integer
get "upgraded"(): boolean
get "internalId"(): integer
get "tube"(): $PressureTubeBlockEntity
get "shape"(): $VoxelShape
get "width"(): double
get "item"(): $Item
get "type"(): $ResourceLocation
get "valid"(): boolean
get "direction"(): $Direction
get "fake"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTubeModule$$Type = ($AbstractTubeModule);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractTubeModule$$Original = $AbstractTubeModule;}
declare module "me.desht.pneumaticcraft.common.recipes.other.HeatPropertiesRecipeImpl$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HeatPropertiesRecipeImpl$IFactory$$Type} from "me.desht.pneumaticcraft.common.recipes.other.HeatPropertiesRecipeImpl$IFactory"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HeatPropertiesRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.HeatPropertiesRecipe"

export class $HeatPropertiesRecipeImpl$Serializer<T extends $HeatPropertiesRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $HeatPropertiesRecipeImpl$IFactory$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatPropertiesRecipeImpl$Serializer$$Type<T> = ($HeatPropertiesRecipeImpl$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatPropertiesRecipeImpl$Serializer$$Original<T> = $HeatPropertiesRecipeImpl$Serializer<(T)>;}
declare module "me.desht.pneumaticcraft.common.network.SyncedField$FieldType" {
import {$Enum} from "java.lang.Enum"

export class $SyncedField$FieldType extends $Enum<($SyncedField$FieldType)> {
static readonly "SYNCED_FLOAT": $SyncedField$FieldType
static readonly "SYNCED_FLUIDSTACK": $SyncedField$FieldType
static readonly "SYNCED_ITEMSTACK": $SyncedField$FieldType
static readonly "SYNCED_DOUBLE": $SyncedField$FieldType
static readonly "SYNCED_BOOL": $SyncedField$FieldType
static readonly "SYNCED_STRING": $SyncedField$FieldType
static readonly "SYNCED_ITEM_HANDLER": $SyncedField$FieldType
static readonly "SYNCED_INT": $SyncedField$FieldType
static readonly "SYNCED_ENUM": $SyncedField$FieldType

public static "values"(): ($SyncedField$FieldType)[]
public static "valueOf"(arg0: StringJS): $SyncedField$FieldType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedField$FieldType$$Type = (("synced_int") | ("synced_float") | ("synced_double") | ("synced_bool") | ("synced_string") | ("synced_enum") | ("synced_itemstack") | ("synced_fluidstack") | ("synced_item_handler"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedField$FieldType$$Original = $SyncedField$FieldType;}
declare module "me.desht.pneumaticcraft.common.item.PneumaticWrenchItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PressurizableItem} from "me.desht.pneumaticcraft.common.item.PressurizableItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PneumaticWrenchItem extends $PressurizableItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticWrenchItem$$Type = ($PneumaticWrenchItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PneumaticWrenchItem$$Original = $PneumaticWrenchItem;}
declare module "me.desht.pneumaticcraft.common.item.minigun.ArmorPiercingGunAmmoItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractGunAmmoItem} from "me.desht.pneumaticcraft.common.item.minigun.AbstractGunAmmoItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ArmorPiercingGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "getAmmoColor"(arg0: $ItemStack$$Type): integer
public "getDamageMultiplier"(arg0: $Entity$$Type, arg1: $ItemStack$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorPiercingGunAmmoItem$$Type = ($ArmorPiercingGunAmmoItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorPiercingGunAmmoItem$$Original = $ArmorPiercingGunAmmoItem;}
declare module "me.desht.pneumaticcraft.common.item.EmptyPCBItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$NonDespawningItem} from "me.desht.pneumaticcraft.common.item.NonDespawningItem"
import {$ICustomDurabilityBar$$Interface} from "me.desht.pneumaticcraft.api.item.ICustomDurabilityBar"
import {$Item} from "net.minecraft.world.item.Item"
import {$Stream} from "java.util.stream.Stream"
import {$CreativeTabStackProvider$$Interface} from "me.desht.pneumaticcraft.common.item.CreativeTabStackProvider"

export class $EmptyPCBItem extends $NonDespawningItem implements $ICustomDurabilityBar$$Interface, $CreativeTabStackProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "getEtchProgress"(arg0: $ItemStack$$Type): integer
public static "setEtchProgress"(arg0: $ItemStack$$Type, arg1: integer): void
public "getStacksForItem"(): $Stream<($ItemStack)>
public "getSuccessItem"(): $ItemStack
public "getFailedItem"(): $ItemStack
public static "getEtchingFluid"(): $FluidStack
public "shouldShowCustomDurabilityBar"(arg0: $ItemStack$$Type): boolean
public "getCustomDurabilityColour"(arg0: $ItemStack$$Type): integer
public "getCustomDurability"(arg0: $ItemStack$$Type): float
public "isShowingOtherBar"(arg0: $ItemStack$$Type): boolean
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "stacksForItem"(): $Stream<($ItemStack)>
get "successItem"(): $ItemStack
get "failedItem"(): $ItemStack
public static get "etchingFluid"(): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyPCBItem$$Type = ($EmptyPCBItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyPCBItem$$Original = $EmptyPCBItem;}
declare module "me.desht.pneumaticcraft.common.block.IBlockComparatorSupport" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockComparatorSupport$$Interface {
}

export class $IBlockComparatorSupport implements $IBlockComparatorSupport$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockComparatorSupport$$Type = ($IBlockComparatorSupport);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockComparatorSupport$$Original = $IBlockComparatorSupport;}
declare module "me.desht.pneumaticcraft.common.block.LiquidCompressorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LiquidCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidCompressorBlock$$Type = ($LiquidCompressorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidCompressorBlock$$Original = $LiquidCompressorBlock;}
declare module "me.desht.pneumaticcraft.common.block.PressureTubeBlock$TubeHitInfo" {
import {$PressureTubeBlock$TubeHitInfo$PartType, $PressureTubeBlock$TubeHitInfo$PartType$$Type} from "me.desht.pneumaticcraft.common.block.PressureTubeBlock$TubeHitInfo$PartType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Record} from "java.lang.Record"

export class $PressureTubeBlock$TubeHitInfo extends $Record {
static readonly "CENTER": $PressureTubeBlock$TubeHitInfo

constructor(dir: $Direction$$Type, type: $PressureTubeBlock$TubeHitInfo$PartType$$Type)

public "type"(): $PressureTubeBlock$TubeHitInfo$PartType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "dir"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureTubeBlock$TubeHitInfo$$Type = ({"dir"?: $Direction$$Type, "type"?: $PressureTubeBlock$TubeHitInfo$PartType$$Type}) | ([dir?: $Direction$$Type, type?: $PressureTubeBlock$TubeHitInfo$PartType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureTubeBlock$TubeHitInfo$$Original = $PressureTubeBlock$TubeHitInfo;}
declare module "me.desht.pneumaticcraft.common.item.TagFilterItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IFilteringItem$$Interface} from "me.desht.pneumaticcraft.api.item.IFilteringItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"

export class $TagFilterItem extends $Item implements $IFilteringItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getConfiguredTagList"(arg0: $ItemStack$$Type): $Set<($TagKey<($Item)>)>
public static "setConfiguredTagList"(arg0: $ItemStack$$Type, arg1: $Set$$Type<($TagKey$$Type<($Item$$Type)>)>): void
public "matchFilter"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagFilterItem$$Type = ($TagFilterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagFilterItem$$Original = $TagFilterItem;}
declare module "me.desht.pneumaticcraft.common.item.VortexCannonItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PressurizableItem} from "me.desht.pneumaticcraft.common.item.PressurizableItem"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"

export class $VortexCannonItem extends $PressurizableItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VortexCannonItem$$Type = ($VortexCannonItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VortexCannonItem$$Original = $VortexCannonItem;}
declare module "me.desht.pneumaticcraft.common.block.SmoothPlasticBrickBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$PlasticBrickBlock} from "me.desht.pneumaticcraft.common.block.PlasticBrickBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SmoothPlasticBrickBlock extends $PlasticBrickBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $DyeColor$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmoothPlasticBrickBlock$$Type = ($SmoothPlasticBrickBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmoothPlasticBrickBlock$$Original = $SmoothPlasticBrickBlock;}
declare module "me.desht.pneumaticcraft.common.block.OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ColorHandlers$ITintableItem$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper extends $BlockItem implements $ColorHandlers$ITintableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
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
export type $OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper$$Type = ($OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper$$Original = $OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper;}
declare module "me.desht.pneumaticcraft.common.block.ReinforcedChestBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IBlockComparatorSupport$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockComparatorSupport"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ReinforcedChestBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface, $IBlockComparatorSupport$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "addSerializableComponents"(arg0: $List$$Type<($DataComponentType$$Type<(never)>)>): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedChestBlock$$Type = ($ReinforcedChestBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReinforcedChestBlock$$Original = $ReinforcedChestBlock;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidEtchingAcid$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidEtchingAcid$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidEtchingAcid$Flowing$$Type = ($FluidEtchingAcid$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidEtchingAcid$Flowing$$Original = $FluidEtchingAcid$Flowing;}
declare module "me.desht.pneumaticcraft.common.item.IChargeableContainerProvider" {
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$Optional} from "java.util.Optional"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Item} from "net.minecraft.world.item.Item"
import {$ChargingStationBlockEntity, $ChargingStationBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.utility.ChargingStationBlockEntity"

export interface $IChargeableContainerProvider$$Interface {

(arg0: $ChargingStationBlockEntity): $MenuProvider$$Type
get "upgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
}

export class $IChargeableContainerProvider implements $IChargeableContainerProvider$$Interface {
 "getUpgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
 "getContainerProvider"(arg0: $ChargingStationBlockEntity$$Type): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChargeableContainerProvider$$Type = ((arg0: $ChargingStationBlockEntity) => $MenuProvider$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IChargeableContainerProvider$$Original = $IChargeableContainerProvider;}
declare module "me.desht.pneumaticcraft.common.recipes.special.CompressorUpgradeCrafting$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CompressorUpgradeCrafting} from "me.desht.pneumaticcraft.common.recipes.special.CompressorUpgradeCrafting"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CompressorUpgradeCrafting$Serializer implements $RecipeSerializer$$Interface<($CompressorUpgradeCrafting)> {
static readonly "CODEC": $MapCodec<($CompressorUpgradeCrafting)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CompressorUpgradeCrafting)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CompressorUpgradeCrafting)>
public "codec"(): $MapCodec<($CompressorUpgradeCrafting)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorUpgradeCrafting$Serializer$$Type = ($CompressorUpgradeCrafting$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompressorUpgradeCrafting$Serializer$$Original = $CompressorUpgradeCrafting$Serializer;}
declare module "me.desht.pneumaticcraft.common.particle.AirParticleType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AirParticleData} from "me.desht.pneumaticcraft.common.particle.AirParticleData"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AirParticleType extends $ParticleType<($AirParticleData)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AirParticleData)>
public "codec"(): $MapCodec<($AirParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirParticleType$$Type = ($AirParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AirParticleType$$Original = $AirParticleType;}
declare module "me.desht.pneumaticcraft.common.recipes.special.WrappedShapedRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"

export class $WrappedShapedRecipe extends $ShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "wrapped"(): $ShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedShapedRecipe$$Type = ($WrappedShapedRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedShapedRecipe$$Original = $WrappedShapedRecipe;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidLPG$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"

export class $FluidLPG$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLPG$Source$$Type = ($FluidLPG$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidLPG$Source$$Original = $FluidLPG$Source;}
declare module "me.desht.pneumaticcraft.common.remote.SavedRemoteLayout" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection$$Type} from "java.util.Collection"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IRemoteWidget, $IRemoteWidget$$Type} from "me.desht.pneumaticcraft.api.remote.IRemoteWidget"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SavedRemoteLayout$Versioned} from "me.desht.pneumaticcraft.common.remote.SavedRemoteLayout$Versioned"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SavedRemoteLayout {
static readonly "JSON_VERSION": integer
static readonly "CODEC": $Codec<($SavedRemoteLayout)>
static readonly "VERSIONED_CODEC": $Codec<($SavedRemoteLayout$Versioned)>
static readonly "EMPTY": $SavedRemoteLayout
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SavedRemoteLayout)>

constructor(arg0: $Collection$$Type<($IRemoteWidget$$Type)>)

public static "fromItem"(arg0: $ItemStack$$Type): $SavedRemoteLayout
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "fromJson"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonElement$$Type): $SavedRemoteLayout
public "toJson"(arg0: $HolderLookup$Provider$$Type): $JsonElement
public "getWidgets"(): $List<($IRemoteWidget)>
get "widgets"(): $List<($IRemoteWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SavedRemoteLayout$$Type = ($SavedRemoteLayout);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SavedRemoteLayout$$Original = $SavedRemoteLayout;}
declare module "me.desht.pneumaticcraft.common.block.HeatSinkBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ColorHandlers$IHeatTintable$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$IHeatTintable"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $HeatSinkBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$IHeatTintable$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatSinkBlock$$Type = ($HeatSinkBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatSinkBlock$$Original = $HeatSinkBlock;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.PressureChamberRecipeImpl$IFactory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PressureChamberRecipe, $PressureChamberRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.PressureChamberRecipe"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"

export interface $PressureChamberRecipeImpl$IFactory$$Interface<T extends $PressureChamberRecipe> {

(arg0: $List<($SizedIngredient)>, arg1: float, arg2: $List<($ItemStack)>): T
}

export class $PressureChamberRecipeImpl$IFactory<T extends $PressureChamberRecipe> implements $PressureChamberRecipeImpl$IFactory$$Interface {
 "create"(arg0: $List$$Type<($SizedIngredient$$Type)>, arg1: float, arg2: $List$$Type<($ItemStack$$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberRecipeImpl$IFactory$$Type<T> = ((arg0: $List<($SizedIngredient)>, arg1: float, arg2: $List<($ItemStack)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureChamberRecipeImpl$IFactory$$Original<T> = $PressureChamberRecipeImpl$IFactory<(T)>;}
declare module "me.desht.pneumaticcraft.common.entity.drone.AmadroneEntity$AmadronAction" {
import {$Enum} from "java.lang.Enum"

export class $AmadroneEntity$AmadronAction extends $Enum<($AmadroneEntity$AmadronAction)> {
static readonly "TAKING_PAYMENT": $AmadroneEntity$AmadronAction
static readonly "RESTOCKING": $AmadroneEntity$AmadronAction

public static "values"(): ($AmadroneEntity$AmadronAction)[]
public static "valueOf"(arg0: StringJS): $AmadroneEntity$AmadronAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadroneEntity$AmadronAction$$Type = (("taking_payment") | ("restocking"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadroneEntity$AmadronAction$$Original = $AmadroneEntity$AmadronAction;}
declare module "me.desht.pneumaticcraft.common.item.UpgradeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$IUpgradeItem$$Interface} from "me.desht.pneumaticcraft.api.upgrade.IUpgradeItem"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$PNCUpgrade, $PNCUpgrade$$Type} from "me.desht.pneumaticcraft.api.upgrade.PNCUpgrade"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Stream} from "java.util.stream.Stream"
import {$CreativeTabStackProvider$$Interface} from "me.desht.pneumaticcraft.common.item.CreativeTabStackProvider"

export class $UpgradeItem extends $Item implements $IUpgradeItem$$Interface, $CreativeTabStackProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $PNCUpgrade$$Type, arg1: integer, arg2: $Item$Properties$$Type)
constructor(arg0: $PNCUpgrade$$Type, arg1: integer, arg2: $Rarity$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getStacksForItem"(): $Stream<($ItemStack)>
public "getUpgradeTier"(): integer
public "getUpgradeType"(): $PNCUpgrade
public static "of"(arg0: $ItemStack$$Type): $UpgradeItem
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "stacksForItem"(): $Stream<($ItemStack)>
get "upgradeTier"(): integer
get "upgradeType"(): $PNCUpgrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$$Type = ($UpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeItem$$Original = $UpgradeItem;}
declare module "me.desht.pneumaticcraft.common.item.ManometerItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PressurizableItem} from "me.desht.pneumaticcraft.common.item.PressurizableItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ManometerItem extends $PressurizableItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManometerItem$$Type = ($ManometerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ManometerItem$$Original = $ManometerItem;}
declare module "me.desht.pneumaticcraft.common.item.minigun.IncendiaryGunAmmoItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractGunAmmoItem} from "me.desht.pneumaticcraft.common.item.minigun.AbstractGunAmmoItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Minigun$$Type} from "me.desht.pneumaticcraft.common.minigun.Minigun"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $IncendiaryGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "onTargetHit"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type, arg2: $Entity$$Type): integer
public "getAmmoColor"(arg0: $ItemStack$$Type): integer
public "onBlockHit"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type, arg2: $BlockHitResult$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncendiaryGunAmmoItem$$Type = ($IncendiaryGunAmmoItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IncendiaryGunAmmoItem$$Original = $IncendiaryGunAmmoItem;}
declare module "me.desht.pneumaticcraft.common.block.RefineryControllerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IBlockComparatorSupport$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockComparatorSupport"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $RefineryControllerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface, $IBlockComparatorSupport$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryControllerBlock$$Type = ($RefineryControllerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefineryControllerBlock$$Original = $RefineryControllerBlock;}
declare module "me.desht.pneumaticcraft.common.item.GPSAreaToolItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPositionProvider$$Interface} from "me.desht.pneumaticcraft.api.item.IPositionProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ILeftClickableItem$$Interface} from "me.desht.pneumaticcraft.common.item.ILeftClickableItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IShiftScrollable$$Interface} from "me.desht.pneumaticcraft.common.item.IShiftScrollable"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IGPSToolSync$$Interface} from "me.desht.pneumaticcraft.common.item.IGPSToolSync"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ProgWidgetArea, $ProgWidgetArea$$Type} from "me.desht.pneumaticcraft.common.drone.progwidgets.ProgWidgetArea"

export class $GPSAreaToolItem extends $Item implements $IPositionProvider$$Interface, $IGPSToolSync$$Interface, $ILeftClickableItem$$Interface, $IShiftScrollable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "getArea"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $ProgWidgetArea
public static "getArea"(arg0: $UUID$$Type, arg1: $ItemStack$$Type): $ProgWidgetArea
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "syncFromClient"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: StringJS, arg5: boolean): void
public "getStoredPositions"(arg0: $UUID$$Type, arg1: $ItemStack$$Type): $List<($BlockPos)>
public "getRenderColor"(arg0: integer): integer
public "syncVariables"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "onShiftScrolled"(arg0: $Player$$Type, arg1: boolean, arg2: $InteractionHand$$Type): void
public static "setGPSPosAndNotify"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockPos$$Type, arg3: integer): void
public static "setGPSPosAndNotify"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $BlockPos$$Type, arg3: integer): void
public "getRawStoredPositions"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $List<($BlockPos)>
public static "setActiveIndex"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: integer): void
public static "setArea"(arg0: $ItemStack$$Type, arg1: $ProgWidgetArea$$Type): void
public static "getActiveIndex"(arg0: $ItemStack$$Type): integer
public "onLeftClickEmpty"(arg0: $ServerPlayer$$Type): void
public static "getGPSLocation"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: integer): $Optional<($BlockPos)>
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "disableDepthTest"(): boolean
public static "getVariable"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: integer): StringJS
public static "setVariable"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: StringJS, arg3: integer): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GPSAreaToolItem$$Type = ($GPSAreaToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GPSAreaToolItem$$Original = $GPSAreaToolItem;}
declare module "me.desht.pneumaticcraft.common.block.entity.processing.AssemblyIOUnitBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection$$Type} from "java.util.Collection"
import {$AssemblyProgram$EnumMachine} from "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram$EnumMachine"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$AbstractAssemblyRobotBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.processing.AbstractAssemblyRobotBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AssemblyRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.AssemblyRecipe"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AssemblyIOUnitBlockEntity extends $AbstractAssemblyRobotBlockEntity {
readonly "oldAngles": (float)[]
readonly "angles": (float)[]
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "clawProgress": float
 "oldClawProgress": float

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickClient"(): void
public "tickServer"(): void
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isIdle"(): boolean
public "hasItemCapability"(): boolean
public "gotoHomePosition"(): void
public "getAssemblyType"(): $AssemblyProgram$EnumMachine
public "isImportUnit"(): boolean
public "canMoveToDiagonalNeighbours"(): boolean
public "pickupItem"(arg0: $Collection$$Type<($AssemblyRecipe$$Type)>): boolean
public "reset"(): boolean
get "idle"(): boolean
get "assemblyType"(): $AssemblyProgram$EnumMachine
get "importUnit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyIOUnitBlockEntity$$Type = ($AssemblyIOUnitBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyIOUnitBlockEntity$$Original = $AssemblyIOUnitBlockEntity;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidEthanol$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidEthanol$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidEthanol$Flowing$$Type = ($FluidEthanol$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidEthanol$Flowing$$Original = $FluidEthanol$Flowing;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.RefineryRecipeImpl$IFactory" {
import {$TemperatureRange, $TemperatureRange$$Type} from "me.desht.pneumaticcraft.api.crafting.TemperatureRange"
import {$List, $List$$Type} from "java.util.List"
import {$SizedFluidIngredient, $SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$RefineryRecipe, $RefineryRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.RefineryRecipe"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $RefineryRecipeImpl$IFactory$$Interface<T extends $RefineryRecipe> {

(arg0: $SizedFluidIngredient, arg1: $TemperatureRange, arg2: $List<($FluidStack)>): T
}

export class $RefineryRecipeImpl$IFactory<T extends $RefineryRecipe> implements $RefineryRecipeImpl$IFactory$$Interface {
 "create"(arg0: $SizedFluidIngredient$$Type, arg1: $TemperatureRange$$Type, arg2: $List$$Type<($FluidStack$$Type)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryRecipeImpl$IFactory$$Type<T> = ((arg0: $SizedFluidIngredient, arg1: $TemperatureRange, arg2: $List<($FluidStack)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefineryRecipeImpl$IFactory$$Original<T> = $RefineryRecipeImpl$IFactory<(T)>;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidPlastic$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidPlastic$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlastic$Flowing$$Type = ($FluidPlastic$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPlastic$Flowing$$Original = $FluidPlastic$Flowing;}
declare module "me.desht.pneumaticcraft.common.block.KeroseneLampLightBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$AirBlock} from "net.minecraft.world.level.block.AirBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $KeroseneLampLightBlock extends $AirBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AirBlock)>
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
export type $KeroseneLampLightBlock$$Type = ($KeroseneLampLightBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeroseneLampLightBlock$$Original = $KeroseneLampLightBlock;}
declare module "me.desht.pneumaticcraft.common.drone.progwidgets.ProgWidget" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IProgWidget, $IProgWidget$$Type, $IProgWidget$$Interface} from "me.desht.pneumaticcraft.api.drone.IProgWidget"
import {$ProgWidget$PositionFields} from "me.desht.pneumaticcraft.common.drone.progwidgets.ProgWidget$PositionFields"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$Goal} from "net.minecraft.world.entity.ai.goal.Goal"
import {$Pair} from "org.apache.commons.lang3.tuple.Pair"
import {$IProgWidget$WidgetDifficulty, $IProgWidget$WidgetDifficulty$$Type} from "me.desht.pneumaticcraft.api.drone.IProgWidget$WidgetDifficulty"
import {$ProgWidgetType, $ProgWidgetType$$Type} from "me.desht.pneumaticcraft.api.drone.ProgWidgetType"

export class $ProgWidget implements $IProgWidget$$Interface {
static readonly "JSON_VERSION": integer
static readonly "CODEC": $Codec<($IProgWidget)>
static readonly "PROGWIDGET_WIDTH": integer
static readonly "LIST_CODEC": $Codec<($List<($IProgWidget)>)>
static readonly "PROGWIDGET_HEIGHT": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IProgWidget)>

public "setX"(arg0: integer): void
public "getTypeID"(): $ResourceLocation
public "hasStepOutput"(): boolean
public "getConnectedParameters"(): ($IProgWidget)[]
public "getWidgetAI"(arg0: $IDrone$$Type, arg1: $IProgWidget$$Type): $Goal
public "getExtraStringInfo"(): $List<($Component)>
public "addWarnings"(arg0: $List$$Type<($Component$$Type)>, arg1: $List$$Type<($IProgWidget$$Type)>): void
public "addErrors"(arg0: $List$$Type<($Component$$Type)>, arg1: $List$$Type<($IProgWidget$$Type)>): void
public "getMaxUV"(): $Pair<(float), (float)>
public "getWidgetTargetAI"(arg0: $IDrone$$Type, arg1: $IProgWidget$$Type): $Goal
public "canSetParameter"(arg0: integer): boolean
public "setOutputWidget"(arg0: $IProgWidget$$Type): void
public "getOutputWidget"(): $IProgWidget
public "getOutputWidget"(arg0: $IDrone$$Type, arg1: $List$$Type<($IProgWidget$$Type)>): $IProgWidget
public "canBeRunByComputers"(arg0: $IDrone$$Type, arg1: $IProgWidget$$Type): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "isAvailable"(): boolean
public "setParent"(arg0: $IProgWidget$$Type): void
public "getY"(): integer
public "setParameter"(arg0: integer, arg1: $IProgWidget$$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getParent"(): $IProgWidget
public "getType"(): $ProgWidgetType<(never)>
public "getPosition"(): $ProgWidget$PositionFields
public "getX"(): integer
public "getTooltip"(arg0: $List$$Type<($Component$$Type)>): void
public "setY"(arg0: integer): void
public "getTranslationKey"(): StringJS
public "freeToUse"(): boolean
public "copyWidget"(): $IProgWidget
public "hasStepInput"(): boolean
public "isDifficultyOK"(arg0: $IProgWidget$WidgetDifficulty$$Type): boolean
public "returnType"(): $ProgWidgetType<(never)>
public "getParameters"(): $List<($ProgWidgetType<(never)>)>
public static "create"(arg0: $ProgWidgetType$$Type<(never)>): $IProgWidget
public "getTexture"(): $ResourceLocation
public "getColor"(): $DyeColor
public "getDifficulty"(): $IProgWidget$WidgetDifficulty
public "setPosition"(arg0: integer, arg1: integer): void
set "x"(value: integer)
get "typeID"(): $ResourceLocation
get "connectedParameters"(): ($IProgWidget)[]
get "extraStringInfo"(): $List<($Component)>
get "maxUV"(): $Pair<(float), (float)>
set "outputWidget"(value: $IProgWidget$$Type)
get "outputWidget"(): $IProgWidget
get "width"(): integer
get "height"(): integer
get "available"(): boolean
set "parent"(value: $IProgWidget$$Type)
get "y"(): integer
get "parent"(): $IProgWidget
get "type"(): $ProgWidgetType<(never)>
get "position"(): $ProgWidget$PositionFields
get "x"(): integer
set "y"(value: integer)
get "translationKey"(): StringJS
get "parameters"(): $List<($ProgWidgetType<(never)>)>
get "texture"(): $ResourceLocation
get "color"(): $DyeColor
get "difficulty"(): $IProgWidget$WidgetDifficulty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgWidget$$Type = ($ProgWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgWidget$$Original = $ProgWidget;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.AssemblyRecipeImpl$IFactory" {
import {$AssemblyRecipe$AssemblyProgramType, $AssemblyRecipe$AssemblyProgramType$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.AssemblyRecipe$AssemblyProgramType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AssemblyRecipe, $AssemblyRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.AssemblyRecipe"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"

export interface $AssemblyRecipeImpl$IFactory$$Interface<T extends $AssemblyRecipe> {

(arg0: $SizedIngredient, arg1: $ItemStack, arg2: $AssemblyRecipe$AssemblyProgramType): T
}

export class $AssemblyRecipeImpl$IFactory<T extends $AssemblyRecipe> implements $AssemblyRecipeImpl$IFactory$$Interface {
 "create"(arg0: $SizedIngredient$$Type, arg1: $ItemStack$$Type, arg2: $AssemblyRecipe$AssemblyProgramType$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyRecipeImpl$IFactory$$Type<T> = ((arg0: $SizedIngredient, arg1: $ItemStack, arg2: $AssemblyRecipe$AssemblyProgramType) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyRecipeImpl$IFactory$$Original<T> = $AssemblyRecipeImpl$IFactory<(T)>;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.ThermoPlantRecipeImpl$IFactory" {
import {$TemperatureRange, $TemperatureRange$$Type} from "me.desht.pneumaticcraft.api.crafting.TemperatureRange"
import {$ThermoPlantRecipe$Inputs, $ThermoPlantRecipe$Inputs$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.ThermoPlantRecipe$Inputs"
import {$ThermoPlantRecipe$Outputs, $ThermoPlantRecipe$Outputs$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.ThermoPlantRecipe$Outputs"
import {$ThermoPlantRecipe, $ThermoPlantRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.ThermoPlantRecipe"

export interface $ThermoPlantRecipeImpl$IFactory$$Interface<T extends $ThermoPlantRecipe> {

(arg0: $ThermoPlantRecipe$Inputs, arg1: $ThermoPlantRecipe$Outputs, arg2: $TemperatureRange, arg3: float, arg4: float, arg5: float, arg6: boolean): T
}

export class $ThermoPlantRecipeImpl$IFactory<T extends $ThermoPlantRecipe> implements $ThermoPlantRecipeImpl$IFactory$$Interface {
 "create"(arg0: $ThermoPlantRecipe$Inputs$$Type, arg1: $ThermoPlantRecipe$Outputs$$Type, arg2: $TemperatureRange$$Type, arg3: float, arg4: float, arg5: float, arg6: boolean): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoPlantRecipeImpl$IFactory$$Type<T> = ((arg0: $ThermoPlantRecipe$Inputs, arg1: $ThermoPlantRecipe$Outputs, arg2: $TemperatureRange, arg3: float, arg4: float, arg5: float, arg6: boolean) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThermoPlantRecipeImpl$IFactory$$Original<T> = $ThermoPlantRecipeImpl$IFactory<(T)>;}
declare module "me.desht.pneumaticcraft.common.item.CreativeTabStackProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $CreativeTabStackProvider$$Interface {

(): $Stream$$Type<($ItemStack$$Type)>
get "stacksForItem"(): $Stream<($ItemStack)>
}

export class $CreativeTabStackProvider implements $CreativeTabStackProvider$$Interface {
 "getStacksForItem"(): $Stream<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabStackProvider$$Type = (() => $Stream$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeTabStackProvider$$Original = $CreativeTabStackProvider;}
declare module "me.desht.pneumaticcraft.common.item.ICustomTooltipName" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ICustomTooltipName$$Interface {

(): StringJS
get "customTooltipTranslationKey"(): StringJS
}

export class $ICustomTooltipName implements $ICustomTooltipName$$Interface {
static "getTranslationKey"(arg0: $ItemStack$$Type, arg1: boolean): StringJS
 "getCustomTooltipTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomTooltipName$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICustomTooltipName$$Original = $ICustomTooltipName;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidPlastic$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $FluidPlastic$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlastic$Source$$Type = ($FluidPlastic$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPlastic$Source$$Original = $FluidPlastic$Source;}
declare module "me.desht.pneumaticcraft.common.block.entity.CamouflageableBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$AbstractPneumaticCraftBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.AbstractPneumaticCraftBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $CamouflageableBlockEntity$$Interface {
get "camouflage"(): $BlockState
set "camouflage"(value: $BlockState$$Type)
}

export class $CamouflageableBlockEntity implements $CamouflageableBlockEntity$$Interface {
 "getCamouflage"(): $BlockState
static "getStackForState"(arg0: $BlockState$$Type): $ItemStack
 "setCamouflage"(arg0: $BlockState$$Type): void
static "writeCamo"(arg0: $CompoundTag$$Type, arg1: $BlockState$$Type): void
static "readCamo"(arg0: $CompoundTag$$Type): $BlockState
static "onCamouflageChanged"(arg0: $AbstractPneumaticCraftBlockEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CamouflageableBlockEntity$$Type = ($CamouflageableBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CamouflageableBlockEntity$$Original = $CamouflageableBlockEntity;}
declare module "me.desht.pneumaticcraft.common.block.FluidTankBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IBlockComparatorSupport$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockComparatorSupport"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$FluidTankBlock$Size, $FluidTankBlock$Size$$Type} from "me.desht.pneumaticcraft.common.block.FluidTankBlock$Size"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FluidTankBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface, $IBlockComparatorSupport$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $FluidTankBlock$Size$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onWrenched"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $InteractionHand$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getSize"(): $FluidTankBlock$Size
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "size"(): $FluidTankBlock$Size
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
declare module "me.desht.pneumaticcraft.common.item.JackHammerItem$DrillBitHandler" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BaseItemStackHandler} from "me.desht.pneumaticcraft.common.inventory.handler.BaseItemStackHandler"

export class $JackHammerItem$DrillBitHandler extends $BaseItemStackHandler {
constructor(arg0: $ItemStack$$Type)

public "save"(): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JackHammerItem$DrillBitHandler$$Type = ($JackHammerItem$DrillBitHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JackHammerItem$DrillBitHandler$$Original = $JackHammerItem$DrillBitHandler;}
declare module "me.desht.pneumaticcraft.common.block.FluidTankBlock$Size" {
import {$Enum} from "java.lang.Enum"

export class $FluidTankBlock$Size extends $Enum<($FluidTankBlock$Size)> {
static readonly "SMALL": $FluidTankBlock$Size
static readonly "MEDIUM": $FluidTankBlock$Size
static readonly "LARGE": $FluidTankBlock$Size
static readonly "HUGE": $FluidTankBlock$Size

public static "values"(): ($FluidTankBlock$Size)[]
public static "valueOf"(arg0: StringJS): $FluidTankBlock$Size
public "getCapacity"(): integer
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankBlock$Size$$Type = (("small") | ("medium") | ("large") | ("huge"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidTankBlock$Size$$Original = $FluidTankBlock$Size;}
declare module "me.desht.pneumaticcraft.common.entity.semiblock.AbstractLogisticsFrameEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ISemiBlock, $ISemiBlock$$Type} from "me.desht.pneumaticcraft.api.semiblock.ISemiBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IDirectionalSemiblock$$Interface} from "me.desht.pneumaticcraft.api.semiblock.IDirectionalSemiblock"
import {$AbstractSemiblockEntity} from "me.desht.pneumaticcraft.common.entity.semiblock.AbstractSemiblockEntity"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AbstractLogisticsFrameEntity$ItemFilterHandler} from "me.desht.pneumaticcraft.common.entity.semiblock.AbstractLogisticsFrameEntity$ItemFilterHandler"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $AbstractLogisticsFrameEntity extends $AbstractSemiblockEntity implements $IDirectionalSemiblock$$Interface {
static readonly "NBT_ITEM_FILTERS": StringJS
 "hasImpulse": boolean
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
static readonly "NBT_MATCH_DURABILITY": StringJS
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "moveDist": float
static readonly "ID_TAG": StringJS
static readonly "FLUID_FILTER_SLOTS": integer
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
static readonly "NBT_MATCH_MODID": StringJS
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "NBT_ITEM_WHITELIST": StringJS
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
static readonly "NBT_FLUID_FILTERS": StringJS
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "NBT_FLUID_WHITELIST": StringJS
static readonly "DEFAULT_BB_HEIGHT": float
 "levelCallback": $EntityInLevelCallback
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "NBT_INVISIBLE": StringJS
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
static readonly "NBT_MATCH_COMPONENTS": StringJS
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean

public "addTooltip"(arg0: $Consumer$$Type<($Component)>, arg1: $Player$$Type, arg2: $CompoundTag$$Type, arg3: boolean): void
public "canPlace"(arg0: $Direction$$Type): boolean
public "onPlaced"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Direction$$Type): void
public "setMatchComponents"(arg0: boolean): void
public "setMatchDurability"(arg0: boolean): void
public "onRightClickWithConfigurator"(arg0: $Player$$Type, arg1: $Direction$$Type): boolean
public "canStay"(): boolean
public "writeToBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "readFromBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "fromItemStack"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): $AbstractLogisticsFrameEntity
public "getItemFilterHandler"(): $AbstractLogisticsFrameEntity$ItemFilterHandler
public "canFilterStack"(): boolean
public "clearIncomingStack"(arg0: $ItemStack$$Type): void
public "clearIncomingStack"(arg0: $FluidStack$$Type): void
public "isMatchComponents"(): boolean
public "isSemiblockInvisible"(): boolean
public "setSemiblockInvisible"(arg0: boolean): void
public "setMatchModId"(arg0: boolean): void
public "setItemWhiteList"(arg0: boolean): void
public "setFluidWhiteList"(arg0: boolean): void
public "isMatchDurability"(): boolean
public "isMatchModId"(): boolean
public "isItemWhiteList"(): boolean
public "isFluidWhiteList"(): boolean
public "shouldProvideTo"(arg0: integer): boolean
public "informIncomingStack"(arg0: $ItemStack$$Type): void
public "informIncomingStack"(arg0: $FluidStack$$Type): void
public "getIncomingFluid"(arg0: $Fluid$$Type): integer
public "getIncomingItems"(arg0: $ItemStack$$Type): integer
public "setItemFilter"(arg0: integer, arg1: $ItemStack$$Type): void
public "setFluidFilter"(arg0: integer, arg1: $FluidStack$$Type): void
public "getFluidFilter"(arg0: integer): $FluidStack
public "supportsBlacklisting"(): boolean
public "isObstructed"(arg0: $PathComputationType$$Type): boolean
public "tick"(): void
public "getPriority"(): integer
public "getTexture"(): $ResourceLocation
public "getSide"(): $Direction
public "setSide"(arg0: $Direction$$Type): void
public "getColor"(): integer
public "serializeNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getAlpha"(): integer
public static "getDirection"(arg0: $ISemiBlock$$Type): $Direction
public static "byTrackingId"(arg0: $Level$$Type, arg1: integer): $ISemiBlock
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
set "matchComponents"(value: boolean)
set "matchDurability"(value: boolean)
get "itemFilterHandler"(): $AbstractLogisticsFrameEntity$ItemFilterHandler
get "matchComponents"(): boolean
get "semiblockInvisible"(): boolean
set "semiblockInvisible"(value: boolean)
set "matchModId"(value: boolean)
set "itemWhiteList"(value: boolean)
set "fluidWhiteList"(value: boolean)
get "matchDurability"(): boolean
get "matchModId"(): boolean
get "itemWhiteList"(): boolean
get "fluidWhiteList"(): boolean
get "priority"(): integer
get "texture"(): $ResourceLocation
get "side"(): $Direction
set "side"(value: $Direction$$Type)
get "color"(): integer
get "alpha"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLogisticsFrameEntity$$Type = ($AbstractLogisticsFrameEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractLogisticsFrameEntity$$Original = $AbstractLogisticsFrameEntity;}
declare module "me.desht.pneumaticcraft.common.drone.progwidgets.IAreaProvider" {
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IAreaProvider$$Interface {

(arg0: $Set<($BlockPos)>): $Set$$Type<($BlockPos$$Type)>
}

export class $IAreaProvider implements $IAreaProvider$$Interface {
 "getArea"(arg0: $Set$$Type<($BlockPos$$Type)>): $Set<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAreaProvider$$Type = ((arg0: $Set<($BlockPos)>) => $Set$$Type<($BlockPos$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAreaProvider$$Original = $IAreaProvider;}
declare module "me.desht.pneumaticcraft.common.minigun.Minigun" {
import {$Minigun$FiringResult} from "me.desht.pneumaticcraft.common.minigun.Minigun$FiringResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$PacketPlayMovingSound$MovingSoundFocus} from "me.desht.pneumaticcraft.common.network.PacketPlayMovingSound$MovingSoundFocus"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$PNCUpgrade$$Type} from "me.desht.pneumaticcraft.api.upgrade.PNCUpgrade"
import {$IAirHandler, $IAirHandler$$Type} from "me.desht.pneumaticcraft.api.tileentity.IAirHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $Minigun {
 "oldMinigunPitch": float
static readonly "MAX_GUN_SPEED": float
 "minigunPitch": float
 "minigunYaw": float
 "oldMinigunYaw": float

constructor(arg0: $Player$$Type, arg1: boolean)

public "getAmmoStack"(): $ItemStack
public "setSweeping"(arg0: boolean): void
public "setAttackTarget"(arg0: $LivingEntity$$Type): $Minigun
public "getWorld"(): $Level
public "getMinigunSpeed"(): float
public "isMinigunActivated"(): boolean
public "setMinigunSpeed"(arg0: float): void
public "setMinigunActivated"(arg0: boolean): void
public "setMinigunTriggerTimeOut"(arg0: integer): void
public "getUpgrades"(arg0: $PNCUpgrade$$Type): integer
public "getAirCapability"(): $Optional<($IAirHandler)>
public "setAmmoStack"(arg0: $ItemStack$$Type): $Minigun
public "setAirHandler"(arg0: $IAirHandler$$Type, arg1: integer): $Minigun
public "setInfiniteAmmo"(arg0: boolean): $Minigun
public "tryFireMinigun"(arg0: $Entity$$Type): $Minigun$FiringResult
public "dispenserWeightedPercentage"(arg0: integer): boolean
public "dispenserWeightedPercentage"(arg0: integer, arg1: float): boolean
public "getAmmoColor"(): integer
public "setIdleYaw"(arg0: float): void
public "getAttackTarget"(): $LivingEntity
public "setReturning"(arg0: boolean): void
public static "clampYaw"(arg0: float): float
public static "clampYaw"(arg0: double): double
public "isInfiniteAmmo"(): boolean
public "getMinigunRotation"(): float
public "setOldMinigunRotation"(arg0: float): void
public "getMinigunTriggerTimeOut"(): integer
public "setAmmoColorStack"(arg0: $ItemStack$$Type): void
public "setMinigunRotation"(arg0: float): void
public "isReturning"(): boolean
public "getMuzzlePosition"(): $Vec3
public "getParticleScale"(): float
public "getOldMinigunRotation"(): float
public "isGunAimedAtTarget"(): boolean
public "tick"(arg0: double, arg1: double, arg2: double): void
public "getRange"(): double
public "isValid"(): boolean
public "setWorld"(arg0: $Level$$Type): $Minigun
public "getSoundSource"(): $PacketPlayMovingSound$MovingSoundFocus
public "playSound"(arg0: $SoundEvent$$Type, arg1: float, arg2: float): void
public "getLookAngle"(): $Vec3
public "isSweeping"(): boolean
public "getPlayer"(): $Player
get "ammoStack"(): $ItemStack
set "sweeping"(value: boolean)
set "attackTarget"(value: $LivingEntity$$Type)
get "world"(): $Level
get "minigunSpeed"(): float
get "minigunActivated"(): boolean
set "minigunSpeed"(value: float)
set "minigunActivated"(value: boolean)
set "minigunTriggerTimeOut"(value: integer)
get "airCapability"(): $Optional<($IAirHandler)>
set "ammoStack"(value: $ItemStack$$Type)
set "infiniteAmmo"(value: boolean)
get "ammoColor"(): integer
set "idleYaw"(value: float)
get "attackTarget"(): $LivingEntity
set "returning"(value: boolean)
get "infiniteAmmo"(): boolean
get "minigunRotation"(): float
set "oldMinigunRotation"(value: float)
get "minigunTriggerTimeOut"(): integer
set "ammoColorStack"(value: $ItemStack$$Type)
set "minigunRotation"(value: float)
get "returning"(): boolean
get "muzzlePosition"(): $Vec3
get "particleScale"(): float
get "oldMinigunRotation"(): float
get "gunAimedAtTarget"(): boolean
get "range"(): double
get "valid"(): boolean
set "world"(value: $Level$$Type)
get "soundSource"(): $PacketPlayMovingSound$MovingSoundFocus
get "lookAngle"(): $Vec3
get "sweeping"(): boolean
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minigun$$Type = ($Minigun);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minigun$$Original = $Minigun;}
declare module "me.desht.pneumaticcraft.common.minigun.Minigun$FiringResult" {
import {$Record} from "java.lang.Record"

export class $Minigun$FiringResult extends $Record {
static readonly "NONE": $Minigun$FiringResult

constructor(ammoUsed: integer, ammoUsedUp: boolean)

public "ammoUsedUp"(): boolean
public "ammoUsed"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minigun$FiringResult$$Type = ({"ammoUsedUp"?: boolean, "ammoUsed"?: integer}) | ([ammoUsedUp?: boolean, ammoUsed?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minigun$FiringResult$$Original = $Minigun$FiringResult;}
declare module "me.desht.pneumaticcraft.common.amadron.ShoppingBasket" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$ImmutableBasket} from "me.desht.pneumaticcraft.common.amadron.ImmutableBasket"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Spliterator} from "java.util.Spliterator"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MutableBasket} from "me.desht.pneumaticcraft.common.amadron.MutableBasket"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ShoppingBasket implements $Iterable$$Interface<($ResourceLocation)> {
public static "createMutable"(): $MutableBasket
public "syncToPlayer"(arg0: $ServerPlayer$$Type): void
public "getUnits"(arg0: $ResourceLocation$$Type): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($ResourceLocation)>
public static "empty"(): $ImmutableBasket
public "toImmutable"(): $ImmutableBasket
public "spliterator"(): $Spliterator<($ResourceLocation)>
public "forEach"(arg0: $Consumer$$Type<($ResourceLocation)>): void
[Symbol.iterator](): IterableIterator<$ResourceLocation>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShoppingBasket$$Type = ($ShoppingBasket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShoppingBasket$$Original = $ShoppingBasket;}
declare module "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram$EnumMachine" {
import {$Enum} from "java.lang.Enum"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ITranslatableEnum$$Interface} from "me.desht.pneumaticcraft.api.misc.ITranslatableEnum"

export class $AssemblyProgram$EnumMachine extends $Enum<($AssemblyProgram$EnumMachine)> implements $ITranslatableEnum$$Interface {
static readonly "PLATFORM": $AssemblyProgram$EnumMachine
static readonly "IO_UNIT_IMPORT": $AssemblyProgram$EnumMachine
static readonly "CONTROLLER": $AssemblyProgram$EnumMachine
static readonly "LASER": $AssemblyProgram$EnumMachine
static readonly "IO_UNIT_EXPORT": $AssemblyProgram$EnumMachine
static readonly "DRILL": $AssemblyProgram$EnumMachine

public "getTranslationKey"(): StringJS
public "getMachineBlock"(): $Block
public static "values"(): ($AssemblyProgram$EnumMachine)[]
public static "valueOf"(arg0: StringJS): $AssemblyProgram$EnumMachine
get "translationKey"(): StringJS
get "machineBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyProgram$EnumMachine$$Type = (("platform") | ("drill") | ("laser") | ("io_unit_export") | ("io_unit_import") | ("controller"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyProgram$EnumMachine$$Original = $AssemblyProgram$EnumMachine;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidOil$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidOil$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidOil$Flowing$$Type = ($FluidOil$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidOil$Flowing$$Original = $FluidOil$Flowing;}
declare module "me.desht.pneumaticcraft.common.block.GasLiftBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GasLiftBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasLiftBlock$$Type = ($GasLiftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GasLiftBlock$$Original = $GasLiftBlock;}
declare module "me.desht.pneumaticcraft.common.upgrades.IUpgradeHolder" {
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IUpgradeHolder$$Interface {

(): $IItemHandler$$Type
get "upgradeHandler"(): $IItemHandler
}

export class $IUpgradeHolder implements $IUpgradeHolder$$Interface {
 "getUpgradeHandler"(): $IItemHandler
 "onUpgradesChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeHolder$$Type = (() => $IItemHandler$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeHolder$$Original = $IUpgradeHolder;}
declare module "me.desht.pneumaticcraft.common.item.minigun.WeightedGunAmmoItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractGunAmmoItem} from "me.desht.pneumaticcraft.common.item.minigun.AbstractGunAmmoItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Minigun$$Type} from "me.desht.pneumaticcraft.common.minigun.Minigun"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WeightedGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "getRangeMultiplier"(arg0: $ItemStack$$Type): float
public "getAmmoColor"(arg0: $ItemStack$$Type): integer
public "getAirUsageMultiplier"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type): float
public "getDamageMultiplier"(arg0: $Entity$$Type, arg1: $ItemStack$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedGunAmmoItem$$Type = ($WeightedGunAmmoItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeightedGunAmmoItem$$Original = $WeightedGunAmmoItem;}
declare module "me.desht.pneumaticcraft.common.block.AssemblyDrillBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AssemblyDrillBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyDrillBlock$$Type = ($AssemblyDrillBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyDrillBlock$$Original = $AssemblyDrillBlock;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.HeatFrameCoolingRecipeImpl$IFactory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidContainerIngredient, $FluidContainerIngredient$$Type} from "me.desht.pneumaticcraft.api.crafting.ingredient.FluidContainerIngredient"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$HeatFrameCoolingRecipe, $HeatFrameCoolingRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.HeatFrameCoolingRecipe"

export interface $HeatFrameCoolingRecipeImpl$IFactory$$Interface<T extends $HeatFrameCoolingRecipe> {

(arg0: $Either<($Ingredient), ($FluidContainerIngredient)>, arg1: integer, arg2: $ItemStack, arg3: float, arg4: float): T
}

export class $HeatFrameCoolingRecipeImpl$IFactory<T extends $HeatFrameCoolingRecipe> implements $HeatFrameCoolingRecipeImpl$IFactory$$Interface {
 "create"(arg0: $Either$$Type<($Ingredient$$Type), ($FluidContainerIngredient$$Type)>, arg1: integer, arg2: $ItemStack$$Type, arg3: float, arg4: float): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatFrameCoolingRecipeImpl$IFactory$$Type<T> = ((arg0: $Either<($Ingredient), ($FluidContainerIngredient)>, arg1: integer, arg2: $ItemStack, arg3: float, arg4: float) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatFrameCoolingRecipeImpl$IFactory$$Original<T> = $HeatFrameCoolingRecipeImpl$IFactory<(T)>;}
declare module "me.desht.pneumaticcraft.common.block.AbstractCamouflageBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractCamouflageBlock extends $AbstractPneumaticCraftBlock {
static readonly "DOWN": $BooleanProperty
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "hasDynamicShape"(): boolean
public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "getUncamouflagedShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCamouflageBlock$$Type = ($AbstractCamouflageBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractCamouflageBlock$$Original = $AbstractCamouflageBlock;}
declare module "me.desht.pneumaticcraft.common.item.logistics.LogisticsFrameStorageItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractLogisticsFrameItem} from "me.desht.pneumaticcraft.common.item.logistics.AbstractLogisticsFrameItem"

export class $LogisticsFrameStorageItem extends $AbstractLogisticsFrameItem {
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
export type $LogisticsFrameStorageItem$$Type = ($LogisticsFrameStorageItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogisticsFrameStorageItem$$Original = $LogisticsFrameStorageItem;}
declare module "me.desht.pneumaticcraft.common.recipes.amadron.AmadronOffer$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AmadronOffer} from "me.desht.pneumaticcraft.common.recipes.amadron.AmadronOffer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$AmadronOffer$IFactory$$Type} from "me.desht.pneumaticcraft.common.recipes.amadron.AmadronOffer$IFactory"

export class $AmadronOffer$Serializer<T extends $AmadronOffer> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $AmadronOffer$IFactory$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronOffer$Serializer$$Type<T> = ($AmadronOffer$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadronOffer$Serializer$$Original<T> = $AmadronOffer$Serializer<(T)>;}
declare module "me.desht.pneumaticcraft.common.block.entity.ILuaMethodProvider" {
import {$LuaMethodRegistry, $LuaMethodRegistry$$Type} from "me.desht.pneumaticcraft.common.thirdparty.computer_common.LuaMethodRegistry"

export interface $ILuaMethodProvider$$Interface {
get "luaMethodRegistry"(): $LuaMethodRegistry
get "peripheralType"(): StringJS
}

export class $ILuaMethodProvider implements $ILuaMethodProvider$$Interface {
 "addLuaMethods"(arg0: $LuaMethodRegistry$$Type): void
 "getLuaMethodRegistry"(): $LuaMethodRegistry
 "getPeripheralType"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaMethodProvider$$Type = ($ILuaMethodProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILuaMethodProvider$$Original = $ILuaMethodProvider;}
declare module "me.desht.pneumaticcraft.common.item.AbstractChestUpgradeKitItem$Smart" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractChestUpgradeKitItem} from "me.desht.pneumaticcraft.common.item.AbstractChestUpgradeKitItem"

export class $AbstractChestUpgradeKitItem$Smart extends $AbstractChestUpgradeKitItem {
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
export type $AbstractChestUpgradeKitItem$Smart$$Type = ($AbstractChestUpgradeKitItem$Smart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractChestUpgradeKitItem$Smart$$Original = $AbstractChestUpgradeKitItem$Smart;}
declare module "me.desht.pneumaticcraft.common.debug.DroneDebugger" {
import {$IDroneDebugger$$Interface} from "me.desht.pneumaticcraft.api.drone.debug.IDroneDebugger"
import {$Collection} from "java.util.Collection"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$DroneDebugEntry, $DroneDebugEntry$$Type} from "me.desht.pneumaticcraft.api.drone.debug.DroneDebugEntry"
import {$IDroneBase$$Type} from "me.desht.pneumaticcraft.common.drone.IDroneBase"

export class $DroneDebugger implements $IDroneDebugger$$Interface {
constructor(arg0: $IDroneBase$$Type)

public "getDebuggingPlayers"(): $Collection<($ServerPlayer)>
public "updateDebuggingPlayers"(): void
public "getDebugEntry"(arg0: integer): $DroneDebugEntry
public "trackAsDebugged"(arg0: $ServerPlayer$$Type): void
public "addEntry"(arg0: $DroneDebugEntry$$Type): void
public "addEntry"(arg0: StringJS): void
public "addEntry"(arg0: StringJS, arg1: $BlockPos$$Type): void
get "debuggingPlayers"(): $Collection<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneDebugger$$Type = ($DroneDebugger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroneDebugger$$Original = $DroneDebugger;}
declare module "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCrops" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$HarvestHandlerAbstractCrop} from "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerAbstractCrop"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HarvestHandlerCrops extends $HarvestHandlerAbstractCrop {
constructor()

public "isSeed"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandlerCrops$$Type = ($HarvestHandlerCrops);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandlerCrops$$Original = $HarvestHandlerCrops;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidDiesel$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidDiesel$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDiesel$Flowing$$Type = ($FluidDiesel$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidDiesel$Flowing$$Original = $FluidDiesel$Flowing;}
declare module "me.desht.pneumaticcraft.common.block.EtchingTankBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EtchingTankBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtchingTankBlock$$Type = ($EtchingTankBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EtchingTankBlock$$Original = $EtchingTankBlock;}
declare module "me.desht.pneumaticcraft.common.block.entity.elevator.ElevatorBaseBlockEntity" {
import {$IGUITextFieldSensitive$$Interface} from "me.desht.pneumaticcraft.common.block.entity.IGUITextFieldSensitive"
import {$RedstoneController} from "me.desht.pneumaticcraft.common.block.entity.RedstoneController"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IRedstoneControl$$Interface} from "me.desht.pneumaticcraft.common.block.entity.IRedstoneControl"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$AbstractAirHandlingBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.AbstractAirHandlingBlockEntity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IMinWorkingPressure$$Interface} from "me.desht.pneumaticcraft.common.block.entity.IMinWorkingPressure"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$LuaMethodRegistry$$Type} from "me.desht.pneumaticcraft.common.thirdparty.computer_common.LuaMethodRegistry"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$AbstractPneumaticCraftBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.AbstractPneumaticCraftBlockEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CamouflageableBlockEntity$$Interface} from "me.desht.pneumaticcraft.common.block.entity.CamouflageableBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ElevatorBaseBlockEntity extends $AbstractAirHandlingBlockEntity implements $IGUITextFieldSensitive$$Interface, $IRedstoneControl$$Interface<($ElevatorBaseBlockEntity)>, $IMinWorkingPressure$$Interface, $CamouflageableBlockEntity$$Interface, $MenuProvider$$Interface {
 "fakeFloorTextureUV": (float)[]
 "extension": double
 "multiElevatorCount": integer
 "fakeFloorTextureTint": integer
 "ticksRunning": integer
 "lightAbove": integer
 "oldExtension": double
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "floorHeights": (integer)[]

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickCommonPre"(): void
public "hasItemCapability"(): boolean
public "getCamouflage"(): $BlockState
public "setCamouflage"(arg0: $BlockState$$Type): void
public "handleGUIButtonPress"(arg0: StringJS, arg1: boolean, arg2: $ServerPlayer$$Type): void
public "readFromPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getRedstoneController"(): $RedstoneController<($ElevatorBaseBlockEntity)>
public "writeToPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isGuiUseableByPlayer"(arg0: $Player$$Type): boolean
public "addLuaMethods"(arg0: $LuaMethodRegistry$$Type): void
public "canConnectPneumatic"(arg0: $Direction$$Type): boolean
public "getMinWorkingPressure"(): float
public "getRedstoneTabTitle"(): $MutableComponent
public "onRedstoneModeChanged"(arg0: integer): void
public "onNeighborBlockUpdate"(arg0: $BlockPos$$Type): void
public "isCoreElevator"(): boolean
public "updateFloors"(arg0: boolean): void
public "getMaxElevatorHeight"(): float
public "setFloorName"(arg0: integer, arg1: StringJS): void
public "getFloorName"(arg0: integer): StringJS
public "updateMaxElevatorHeight"(): void
public "moveUpgradesFromAbove"(): void
public "goToFloor"(arg0: integer): void
public "getTargetExtension"(): double
public "setText"(arg0: integer, arg1: StringJS): void
public "getText"(arg0: integer): StringJS
public "isStopped"(): boolean
public "onLoad"(): void
public "getRedstoneMode"(): integer
public "getCurrentRedstonePower"(): integer
public static "getStackForState"(arg0: $BlockState$$Type): $ItemStack
public static "writeCamo"(arg0: $CompoundTag$$Type, arg1: $BlockState$$Type): void
public static "readCamo"(arg0: $CompoundTag$$Type): $BlockState
public static "onCamouflageChanged"(arg0: $AbstractPneumaticCraftBlockEntity$$Type): void
public "getDisplayName"(): $Component
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
get "camouflage"(): $BlockState
set "camouflage"(value: $BlockState$$Type)
get "redstoneController"(): $RedstoneController<($ElevatorBaseBlockEntity)>
get "minWorkingPressure"(): float
get "redstoneTabTitle"(): $MutableComponent
get "coreElevator"(): boolean
get "maxElevatorHeight"(): float
get "targetExtension"(): double
get "stopped"(): boolean
get "redstoneMode"(): integer
get "currentRedstonePower"(): integer
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElevatorBaseBlockEntity$$Type = ($ElevatorBaseBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElevatorBaseBlockEntity$$Original = $ElevatorBaseBlockEntity;}
declare module "me.desht.pneumaticcraft.common.block.PneumaticDoorBaseBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractCamouflageBlock} from "me.desht.pneumaticcraft.common.block.AbstractCamouflageBlock"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PneumaticDoorBaseBlock extends $AbstractCamouflageBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getUncamouflagedShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticDoorBaseBlock$$Type = ($PneumaticDoorBaseBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PneumaticDoorBaseBlock$$Original = $PneumaticDoorBaseBlock;}
declare module "me.desht.pneumaticcraft.common.block.FluxCompressorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluxCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluxCompressorBlock$$Type = ($FluxCompressorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluxCompressorBlock$$Original = $FluxCompressorBlock;}
declare module "me.desht.pneumaticcraft.common.block.entity.processing.IResettable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IResettable$$Interface {

(): boolean
}

export class $IResettable implements $IResettable$$Interface {
 "reset"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IResettable$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IResettable$$Original = $IResettable;}
declare module "me.desht.pneumaticcraft.common.block.DisplayTableBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IBlockComparatorSupport$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockComparatorSupport"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $DisplayTableBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface, $IBlockComparatorSupport$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getTableHeight"(): double
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
get "tableHeight"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayTableBlock$$Type = ($DisplayTableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisplayTableBlock$$Original = $DisplayTableBlock;}
declare module "me.desht.pneumaticcraft.common.upgrades.UpgradeCache" {
import {$Optional} from "java.util.Optional"
import {$Direction} from "net.minecraft.core.Direction"
import {$IUpgradeHolder$$Type} from "me.desht.pneumaticcraft.common.upgrades.IUpgradeHolder"
import {$PNCUpgrade$$Type} from "me.desht.pneumaticcraft.api.upgrade.PNCUpgrade"

export class $UpgradeCache {
constructor(arg0: $IUpgradeHolder$$Type)

public "invalidateCache"(): void
public "getUpgrades"(arg0: $PNCUpgrade$$Type): integer
public "validateCache"(): void
public "getEjectDirection"(): $Optional<($Direction)>
get "ejectDirection"(): $Optional<($Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeCache$$Type = ($UpgradeCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeCache$$Original = $UpgradeCache;}
declare module "me.desht.pneumaticcraft.common.block.entity.processing.AbstractAssemblyRobotBlockEntity" {
import {$AbstractAssemblyRobotBlockEntity$TargetDirections$$Type} from "me.desht.pneumaticcraft.common.block.entity.processing.AbstractAssemblyRobotBlockEntity$TargetDirections"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AssemblyProgram$EnumMachine} from "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram$EnumMachine"
import {$AbstractTickingBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.AbstractTickingBlockEntity"
import {$IAssemblyMachine$$Interface} from "me.desht.pneumaticcraft.common.block.entity.processing.IAssemblyMachine"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IResettable$$Interface} from "me.desht.pneumaticcraft.common.block.entity.processing.IResettable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AbstractAssemblyRobotBlockEntity extends $AbstractTickingBlockEntity implements $IAssemblyMachine$$Interface, $IResettable$$Interface {
readonly "oldAngles": (float)[]
readonly "angles": (float)[]
static readonly "ATTACHMENTS_NBT_KEY": StringJS

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setControllerPos"(arg0: $BlockPos$$Type): void
public "tickCommonPre"(): void
public "onNeighborBlockUpdate"(arg0: $BlockPos$$Type): void
public "gotoHomePosition"(): void
public "gotoNeighbour"(arg0: $AbstractAssemblyRobotBlockEntity$TargetDirections$$Type): boolean
public "setSpeed"(arg0: float): void
public "isIdle"(): boolean
public "getAssemblyType"(): $AssemblyProgram$EnumMachine
public "reset"(): boolean
set "controllerPos"(value: $BlockPos$$Type)
set "speed"(value: float)
get "idle"(): boolean
get "assemblyType"(): $AssemblyProgram$EnumMachine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAssemblyRobotBlockEntity$$Type = ($AbstractAssemblyRobotBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractAssemblyRobotBlockEntity$$Original = $AbstractAssemblyRobotBlockEntity;}
declare module "me.desht.pneumaticcraft.common.item.DrillBitItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DrillBitItem$DrillBitType, $DrillBitItem$DrillBitType$$Type} from "me.desht.pneumaticcraft.common.item.DrillBitItem$DrillBitType"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $DrillBitItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DrillBitItem$DrillBitType$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getType"(): $DrillBitItem$DrillBitType
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $DrillBitItem$DrillBitType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillBitItem$$Type = ($DrillBitItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrillBitItem$$Original = $DrillBitItem;}
declare module "me.desht.pneumaticcraft.common.block.AssemblyPlatformBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AssemblyPlatformBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyPlatformBlock$$Type = ($AssemblyPlatformBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyPlatformBlock$$Original = $AssemblyPlatformBlock;}
declare module "me.desht.pneumaticcraft.common.item.CamoApplicatorItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PressurizableItem} from "me.desht.pneumaticcraft.common.item.PressurizableItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CamoApplicatorItem extends $PressurizableItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "getCamoStateDisplayName"(arg0: $BlockState$$Type): $Component
public "getName"(arg0: $ItemStack$$Type): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CamoApplicatorItem$$Type = ($CamoApplicatorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CamoApplicatorItem$$Original = $CamoApplicatorItem;}
declare module "me.desht.pneumaticcraft.common.block.CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$CreativeCompressedIronBlock$$Type} from "me.desht.pneumaticcraft.common.block.CreativeCompressedIronBlock"

export class $CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $CreativeCompressedIronBlock$$Type)

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
export type $CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron$$Type = ($CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron$$Original = $CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidBiodiesel$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"

export class $FluidBiodiesel$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBiodiesel$Source$$Type = ($FluidBiodiesel$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidBiodiesel$Source$$Original = $FluidBiodiesel$Source;}
declare module "me.desht.pneumaticcraft.common.block.SentryTurretBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SentryTurretBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "addExtraInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "addSerializableComponents"(arg0: $List$$Type<($DataComponentType$$Type<(never)>)>): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SentryTurretBlock$$Type = ($SentryTurretBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SentryTurretBlock$$Original = $SentryTurretBlock;}
declare module "me.desht.pneumaticcraft.common.block.PressureChamberInterfaceBlock" {
import {$IBlockPressureChamber$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockPressureChamber"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PressureChamberInterfaceBlock extends $AbstractPneumaticCraftBlock implements $IBlockPressureChamber$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "pressureChamberBlockProps"(): $BlockBehaviour$Properties
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberInterfaceBlock$$Type = ($PressureChamberInterfaceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureChamberInterfaceBlock$$Original = $PressureChamberInterfaceBlock;}
declare module "me.desht.pneumaticcraft.common.block.entity.utility.ChargingStationBlockEntity" {
import {$RedstoneController} from "me.desht.pneumaticcraft.common.block.entity.RedstoneController"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IRedstoneControl$$Interface} from "me.desht.pneumaticcraft.common.block.entity.IRedstoneControl"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$AbstractAirHandlingBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.AbstractAirHandlingBlockEntity"
import {$ChargeableItemHandler} from "me.desht.pneumaticcraft.common.inventory.handler.ChargeableItemHandler"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$AbstractPneumaticCraftBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.AbstractPneumaticCraftBlockEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CamouflageableBlockEntity$$Interface} from "me.desht.pneumaticcraft.common.block.entity.CamouflageableBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChargingStationBlockEntity extends $AbstractAirHandlingBlockEntity implements $IRedstoneControl$$Interface<($ChargingStationBlockEntity)>, $CamouflageableBlockEntity$$Interface, $MenuProvider$$Interface {
 "chargingItemPressure": float
 "discharging": boolean
 "upgradeOnly": boolean
static readonly "CHARGE_INVENTORY_INDEX": integer
 "charging": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "tickServer"(): void
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "clearRemoved"(): void
public "onUpgradesChanged"(): void
public "getCamouflage"(): $BlockState
public "setCamouflage"(arg0: $BlockState$$Type): void
public "handleGUIButtonPress"(arg0: StringJS, arg1: boolean, arg2: $ServerPlayer$$Type): void
public "readFromPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getRedstoneController"(): $RedstoneController<($ChargingStationBlockEntity)>
public "writeToPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "canConnectPneumatic"(arg0: $Direction$$Type): boolean
public "getChargingStack"(): $ItemStack
public "getChargingStackSynced"(): $ItemStack
public "getChargeableInventory"(): $ChargeableItemHandler
public "setRemoved"(): void
public "getRedstoneMode"(): integer
public "getCurrentRedstonePower"(): integer
public "getRedstoneTabTitle"(): $MutableComponent
public "onRedstoneModeChanged"(arg0: integer): void
public static "getStackForState"(arg0: $BlockState$$Type): $ItemStack
public static "writeCamo"(arg0: $CompoundTag$$Type, arg1: $BlockState$$Type): void
public static "readCamo"(arg0: $CompoundTag$$Type): $BlockState
public static "onCamouflageChanged"(arg0: $AbstractPneumaticCraftBlockEntity$$Type): void
public "getDisplayName"(): $Component
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
get "camouflage"(): $BlockState
set "camouflage"(value: $BlockState$$Type)
get "redstoneController"(): $RedstoneController<($ChargingStationBlockEntity)>
get "chargingStack"(): $ItemStack
get "chargingStackSynced"(): $ItemStack
get "chargeableInventory"(): $ChargeableItemHandler
get "removed"(): void
get "redstoneMode"(): integer
get "currentRedstonePower"(): integer
get "redstoneTabTitle"(): $MutableComponent
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingStationBlockEntity$$Type = ($ChargingStationBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargingStationBlockEntity$$Original = $ChargingStationBlockEntity;}
declare module "me.desht.pneumaticcraft.common.recipes.PneumaticCraftRecipeType" {
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeType, $RecipeType$$Interface} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PneumaticCraftRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$PneumaticCraftRecipeType$CacheReloadListener} from "me.desht.pneumaticcraft.common.recipes.PneumaticCraftRecipeType$CacheReloadListener"
import {$Stream} from "java.util.stream.Stream"

export class $PneumaticCraftRecipeType<T extends $PneumaticCraftRecipe> implements $RecipeType$$Interface<(T)> {
constructor(arg0: StringJS)

public "allRecipes"(arg0: $Level$$Type): $Collection<(T)>
public "getRecipe"(arg0: $Level$$Type, arg1: $ResourceLocation$$Type): $Optional<($RecipeHolder<(T)>)>
public "allRecipeHolders"(arg0: $Level$$Type): $Collection<($RecipeHolder<(T)>)>
public "getRecipeMap"(arg0: $Level$$Type): $Map<($ResourceLocation), ($RecipeHolder<(T)>)>
public static "clearCachedRecipes"(): void
public "findFirst"(arg0: $Level$$Type, arg1: $Predicate$$Type<(T)>): $Optional<($RecipeHolder<(T)>)>
public "toString"(): StringJS
public "stream"(arg0: $Level$$Type): $Stream<($RecipeHolder<(T)>)>
public static "getCacheReloadListener"(): $PneumaticCraftRecipeType$CacheReloadListener
public static "register"<T extends $Recipe<(object)>>(arg0: StringJS): $RecipeType<(T)>
public static "simple"<T extends $Recipe<(object)>>(arg0: $ResourceLocation$$Type): $RecipeType<(T)>
public static get "cacheReloadListener"(): $PneumaticCraftRecipeType$CacheReloadListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticCraftRecipeType$$Type<T> = ($PneumaticCraftRecipeType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PneumaticCraftRecipeType$$Original<T> = $PneumaticCraftRecipeType<(T)>;}
declare module "me.desht.pneumaticcraft.common.block.AdvancedAirCompressorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$AirCompressorBlock} from "me.desht.pneumaticcraft.common.block.AirCompressorBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AdvancedAirCompressorBlock extends $AirCompressorBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedAirCompressorBlock$$Type = ($AdvancedAirCompressorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancedAirCompressorBlock$$Original = $AdvancedAirCompressorBlock;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidVegetableOil$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"

export class $FluidVegetableOil$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVegetableOil$Source$$Type = ($FluidVegetableOil$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVegetableOil$Source$$Original = $FluidVegetableOil$Source;}
declare module "me.desht.pneumaticcraft.common.item.MicromissilesItem" {
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
import {$MicromissilesItem$FireMode} from "me.desht.pneumaticcraft.common.item.MicromissilesItem$FireMode"

export class $MicromissilesItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "getFireMode"(arg0: $ItemStack$$Type): $MicromissilesItem$FireMode
public static "setEntityFilter"(arg0: $ItemStack$$Type, arg1: StringJS): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicromissilesItem$$Type = ($MicromissilesItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MicromissilesItem$$Original = $MicromissilesItem;}
declare module "me.desht.pneumaticcraft.common.block.SolarCompressorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$AbstractPNCBlockWithBoundingBlocks} from "me.desht.pneumaticcraft.common.block.AbstractPNCBlockWithBoundingBlocks"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SolarCompressorBlock extends $AbstractPNCBlockWithBoundingBlocks {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "BOUNDING": $BooleanProperty
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "addSerializableComponents"(arg0: $List$$Type<($DataComponentType$$Type<(never)>)>): void
public "getBoundingBlockOffsets"(): ($Vec3i)[]
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
get "boundingBlockOffsets"(): ($Vec3i)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolarCompressorBlock$$Type = ($SolarCompressorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SolarCompressorBlock$$Original = $SolarCompressorBlock;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidVegetableOil$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidVegetableOil$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVegetableOil$Flowing$$Type = ($FluidVegetableOil$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVegetableOil$Flowing$$Original = $FluidVegetableOil$Flowing;}
declare module "me.desht.pneumaticcraft.common.item.SpawnerCoreItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ColorHandlers$ITintableItem$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $SpawnerCoreItem extends $Item implements $ColorHandlers$ITintableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerCoreItem$$Type = ($SpawnerCoreItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnerCoreItem$$Original = $SpawnerCoreItem;}
declare module "me.desht.pneumaticcraft.common.block.DroneRedstoneEmitterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$AirBlock} from "net.minecraft.world.level.block.AirBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DroneRedstoneEmitterBlock extends $AirBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AirBlock)>
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
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneRedstoneEmitterBlock$$Type = ($DroneRedstoneEmitterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroneRedstoneEmitterBlock$$Original = $DroneRedstoneEmitterBlock;}
declare module "me.desht.pneumaticcraft.common.block.ProgrammableControllerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ProgrammableControllerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgrammableControllerBlock$$Type = ($ProgrammableControllerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgrammableControllerBlock$$Original = $ProgrammableControllerBlock;}
declare module "me.desht.pneumaticcraft.common.thirdparty.computer_common.DroneInterfaceBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$CreativeTabStackProvider$$Interface} from "me.desht.pneumaticcraft.common.item.CreativeTabStackProvider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DroneInterfaceBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface, $CreativeTabStackProvider$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStacksForItem"(): $Stream<($ItemStack)>
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "stacksForItem"(): $Stream<($ItemStack)>
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneInterfaceBlock$$Type = ($DroneInterfaceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroneInterfaceBlock$$Original = $DroneInterfaceBlock;}
declare module "me.desht.pneumaticcraft.common.item.AbstractChestUpgradeKitItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $AbstractChestUpgradeKitItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChestUpgradeKitItem$$Type = ($AbstractChestUpgradeKitItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractChestUpgradeKitItem$$Original = $AbstractChestUpgradeKitItem;}
declare module "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $PneumaticCraftEntityBlock$$Interface extends $EntityBlock$$Interface {

(arg0: $BlockPos, arg1: $BlockState): $BlockEntity$$Type
}

export class $PneumaticCraftEntityBlock implements $PneumaticCraftEntityBlock$$Interface {
 "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticCraftEntityBlock$$Type = ((arg0: $BlockPos, arg1: $BlockState) => $BlockEntity$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PneumaticCraftEntityBlock$$Original = $PneumaticCraftEntityBlock;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidDiesel$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"

export class $FluidDiesel$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDiesel$Source$$Type = ($FluidDiesel$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidDiesel$Source$$Original = $FluidDiesel$Source;}
declare module "me.desht.pneumaticcraft.common.block.PneumaticDoorBlock$ItemBlockPneumaticDoor" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ColorHandlers$ITintableItem$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $PneumaticDoorBlock$ItemBlockPneumaticDoor extends $BlockItem implements $ColorHandlers$ITintableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
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
export type $PneumaticDoorBlock$ItemBlockPneumaticDoor$$Type = ($PneumaticDoorBlock$ItemBlockPneumaticDoor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PneumaticDoorBlock$ItemBlockPneumaticDoor$$Original = $PneumaticDoorBlock$ItemBlockPneumaticDoor;}
declare module "me.desht.pneumaticcraft.common.network.IDescSynced" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$SyncedField} from "me.desht.pneumaticcraft.common.network.SyncedField"
import {$List} from "java.util.List"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IDescSynced$$Interface {
get "descriptionFields"(): $List<($SyncedField<(never)>)>
get "position"(): $BlockPos
}

export class $IDescSynced implements $IDescSynced$$Interface {
 "readFromPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getDescriptionFields"(): $List<($SyncedField<(never)>)>
 "writeToPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "shouldSyncField"(arg0: integer): boolean
 "onDescUpdate"(): void
 "getPosition"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDescSynced$$Type = ($IDescSynced);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDescSynced$$Original = $IDescSynced;}
declare module "me.desht.pneumaticcraft.common.block.OmnidirectionalHopperBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ColorHandlers$ITintableBlock$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IBlockComparatorSupport$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockComparatorSupport"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $OmnidirectionalHopperBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$ITintableBlock$$Interface, $PneumaticCraftEntityBlock$$Interface, $IBlockComparatorSupport$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INPUT_SHAPES": $Map<($Direction), ($VoxelShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "INPUT_FACING": $EnumProperty<($Direction)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "isRotatable"(): boolean
public "onWrenched"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $InteractionHand$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OmnidirectionalHopperBlock$$Type = ($OmnidirectionalHopperBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OmnidirectionalHopperBlock$$Original = $OmnidirectionalHopperBlock;}
declare module "me.desht.pneumaticcraft.common.item.SpawnerAgitatorItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$SemiblockItem} from "me.desht.pneumaticcraft.common.semiblock.SemiblockItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $SpawnerAgitatorItem extends $SemiblockItem {
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
export type $SpawnerAgitatorItem$$Type = ($SpawnerAgitatorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnerAgitatorItem$$Original = $SpawnerAgitatorItem;}
declare module "me.desht.pneumaticcraft.common.item.minigun.StandardGunAmmoItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AbstractGunAmmoItem} from "me.desht.pneumaticcraft.common.item.minigun.AbstractGunAmmoItem"
import {$Minigun$$Type} from "me.desht.pneumaticcraft.common.minigun.Minigun"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $StandardGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "isFoil"(arg0: $ItemStack$$Type): boolean
public static "setPotion"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public static "getPotionStack"(arg0: $ItemStack$$Type): $ItemStack
public "onTargetHit"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type, arg2: $Entity$$Type): integer
public "getAmmoCost"(arg0: $ItemStack$$Type): integer
public "getAmmoColor"(arg0: $ItemStack$$Type): integer
public "getAirUsageMultiplier"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type): float
public "onBlockHit"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type, arg2: $BlockHitResult$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandardGunAmmoItem$$Type = ($StandardGunAmmoItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StandardGunAmmoItem$$Original = $StandardGunAmmoItem;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidEthanol$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"

export class $FluidEthanol$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidEthanol$Source$$Type = ($FluidEthanol$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidEthanol$Source$$Original = $FluidEthanol$Source;}
declare module "me.desht.pneumaticcraft.common.recipes.amadron.AmadronOffer" {
import {$IPlayerFilter} from "me.desht.pneumaticcraft.api.misc.IPlayerFilter"
import {$AmadronTradeResource, $AmadronTradeResource$$Type} from "me.desht.pneumaticcraft.api.crafting.AmadronTradeResource"
import {$AmadronPlayerOffer$$Type} from "me.desht.pneumaticcraft.common.recipes.amadron.AmadronPlayerOffer"
import {$AmadronRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.AmadronRecipe"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$OfferType} from "me.desht.pneumaticcraft.common.recipes.amadron.OfferType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerFilter, $PlayerFilter$$Type} from "me.desht.pneumaticcraft.common.util.playerfilter.PlayerFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AmadronOffer extends $AmadronRecipe {
constructor(arg0: $ResourceLocation$$Type, arg1: $AmadronTradeResource$$Type, arg2: $AmadronTradeResource$$Type, arg3: boolean, arg4: boolean, arg5: integer, arg6: integer, arg7: integer, arg8: $PlayerFilter$$Type, arg9: $PlayerFilter$$Type)

public "isUsableByPlayer"(arg0: $Player$$Type): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "getWhitelist"(): $PlayerFilter
public "getOfferId"(): $ResourceLocation
public "getMaxStock"(): integer
public "getStock"(): integer
public "setStock"(arg0: integer): void
public static "villagerTrade"(arg0: $ResourceLocation$$Type, arg1: $MerchantOffer$$Type, arg2: integer): $AmadronOffer
public "getVendorName"(): $Component
public "isStaticOffer"(): boolean
public "getTradeLevel"(): integer
public "isVillagerTrade"(): boolean
public "getBlacklist"(): $IPlayerFilter
public "addAvailabilityData"(arg0: $Player$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isLocationLimited"(): boolean
public "getOfferType"(): $OfferType
public "onTrade"(arg0: integer, arg1: StringJS): void
public "getOutput"(): $AmadronTradeResource
public "getDescription"(): $Component
public "getInput"(): $AmadronTradeResource
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getType"(): $RecipeType<(never)>
public "equivalentTo"(arg0: $AmadronPlayerOffer$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "whitelist"(): $PlayerFilter
get "offerId"(): $ResourceLocation
get "maxStock"(): integer
get "stock"(): integer
set "stock"(value: integer)
get "vendorName"(): $Component
get "staticOffer"(): boolean
get "tradeLevel"(): integer
get "blacklist"(): $IPlayerFilter
get "locationLimited"(): boolean
get "offerType"(): $OfferType
get "output"(): $AmadronTradeResource
get "description"(): $Component
get "input"(): $AmadronTradeResource
get "type"(): $RecipeType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronOffer$$Type = ($AmadronOffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadronOffer$$Original = $AmadronOffer;}
declare module "me.desht.pneumaticcraft.common.item.logistics.AbstractLogisticsFrameItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$SemiblockItem} from "me.desht.pneumaticcraft.common.semiblock.SemiblockItem"
import {$Item} from "net.minecraft.world.item.Item"

export class $AbstractLogisticsFrameItem extends $SemiblockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "addLogisticsTooltip"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): $List<($Component)>
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLogisticsFrameItem$$Type = ($AbstractLogisticsFrameItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractLogisticsFrameItem$$Original = $AbstractLogisticsFrameItem;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidMemoryEssence$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"

export class $FluidMemoryEssence$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMemoryEssence$Source$$Type = ($FluidMemoryEssence$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidMemoryEssence$Source$$Original = $FluidMemoryEssence$Source;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidKerosene$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"

export class $FluidKerosene$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidKerosene$Source$$Type = ($FluidKerosene$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidKerosene$Source$$Original = $FluidKerosene$Source;}
declare module "me.desht.pneumaticcraft.common.recipes.special.ShapedPressurizableRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$WrappedShapedRecipe} from "me.desht.pneumaticcraft.common.recipes.special.WrappedShapedRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShapedPressurizableRecipe extends $WrappedShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedPressurizableRecipe$$Type = ($ShapedPressurizableRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedPressurizableRecipe$$Original = $ShapedPressurizableRecipe;}
declare module "me.desht.pneumaticcraft.common.block.entity.IMinWorkingPressure" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMinWorkingPressure$$Interface {

(): float
get "minWorkingPressure"(): float
}

export class $IMinWorkingPressure implements $IMinWorkingPressure$$Interface {
 "getMinWorkingPressure"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinWorkingPressure$$Type = (() => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMinWorkingPressure$$Original = $IMinWorkingPressure;}
declare module "me.desht.pneumaticcraft.common.block.entity.processing.AssemblyPlatformBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AssemblyProgram$EnumMachine} from "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram$EnumMachine"
import {$AbstractTickingBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.AbstractTickingBlockEntity"
import {$IAssemblyMachine$$Interface} from "me.desht.pneumaticcraft.common.block.entity.processing.IAssemblyMachine"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IResettable$$Interface} from "me.desht.pneumaticcraft.common.block.entity.processing.IResettable"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AssemblyPlatformBlockEntity extends $AbstractTickingBlockEntity implements $IAssemblyMachine$$Interface, $IResettable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "clawProgress": float
 "oldClawProgress": float

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isIdle"(): boolean
public "setControllerPos"(arg0: $BlockPos$$Type): void
public "tickCommonPre"(): void
public "hasItemCapability"(): boolean
public "onNeighborBlockUpdate"(arg0: $BlockPos$$Type): void
public "getHeldStack"(): $ItemStack
public "setHeldStack"(arg0: $ItemStack$$Type): void
public "getAssemblyType"(): $AssemblyProgram$EnumMachine
public "reset"(): boolean
public "setSpeed"(arg0: float): void
get "idle"(): boolean
set "controllerPos"(value: $BlockPos$$Type)
get "heldStack"(): $ItemStack
set "heldStack"(value: $ItemStack$$Type)
get "assemblyType"(): $AssemblyProgram$EnumMachine
set "speed"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyPlatformBlockEntity$$Type = ($AssemblyPlatformBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyPlatformBlockEntity$$Original = $AssemblyPlatformBlockEntity;}
declare module "me.desht.pneumaticcraft.common.item.logistics.LogisticsFramePassiveProviderItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractLogisticsFrameItem} from "me.desht.pneumaticcraft.common.item.logistics.AbstractLogisticsFrameItem"

export class $LogisticsFramePassiveProviderItem extends $AbstractLogisticsFrameItem {
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
export type $LogisticsFramePassiveProviderItem$$Type = ($LogisticsFramePassiveProviderItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogisticsFramePassiveProviderItem$$Original = $LogisticsFramePassiveProviderItem;}
declare module "me.desht.pneumaticcraft.common.item.logistics.LogisticsFrameActiveProviderItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractLogisticsFrameItem} from "me.desht.pneumaticcraft.common.item.logistics.AbstractLogisticsFrameItem"

export class $LogisticsFrameActiveProviderItem extends $AbstractLogisticsFrameItem {
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
export type $LogisticsFrameActiveProviderItem$$Type = ($LogisticsFrameActiveProviderItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogisticsFrameActiveProviderItem$$Original = $LogisticsFrameActiveProviderItem;}
declare module "me.desht.pneumaticcraft.common.item.minigun.MinigunItem$MagazineHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BaseItemStackHandler} from "me.desht.pneumaticcraft.common.inventory.handler.BaseItemStackHandler"

export class $MinigunItem$MagazineHandler extends $BaseItemStackHandler {
public "getAmmo"(): $ItemStack
public "save"(): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
get "ammo"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinigunItem$MagazineHandler$$Type = ($MinigunItem$MagazineHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinigunItem$MagazineHandler$$Original = $MinigunItem$MagazineHandler;}
declare module "me.desht.pneumaticcraft.common.item.AirCanisterItem$CanisterType" {
import {$Enum} from "java.lang.Enum"

export class $AirCanisterItem$CanisterType extends $Enum<($AirCanisterItem$CanisterType)> {
static readonly "BASIC_ARRAY": $AirCanisterItem$CanisterType
static readonly "REINFORCED": $AirCanisterItem$CanisterType
static readonly "REINFORCED_ARRAY": $AirCanisterItem$CanisterType
static readonly "BASIC": $AirCanisterItem$CanisterType

public static "values"(): ($AirCanisterItem$CanisterType)[]
public static "valueOf"(arg0: StringJS): $AirCanisterItem$CanisterType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirCanisterItem$CanisterType$$Type = (("basic") | ("basic_array") | ("reinforced") | ("reinforced_array"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AirCanisterItem$CanisterType$$Original = $AirCanisterItem$CanisterType;}
declare module "me.desht.pneumaticcraft.common.util.fakeplayer.DroneItemHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $DroneItemHandler extends $ItemStackHandler {
constructor(arg0: $IDrone$$Type, arg1: integer)

public "setUseableSlots"(arg0: integer): void
public "setFakePlayerReady"(): void
public "copyFromFakePlayer"(): void
public "copyItemToFakePlayer"(arg0: integer): void
public "getSlots"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
set "useableSlots"(value: integer)
get "fakePlayerReady"(): void
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneItemHandler$$Type = ($DroneItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroneItemHandler$$Original = $DroneItemHandler;}
declare module "me.desht.pneumaticcraft.common.block.SecurityStationBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SecurityStationBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecurityStationBlock$$Type = ($SecurityStationBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SecurityStationBlock$$Original = $SecurityStationBlock;}
declare module "me.desht.pneumaticcraft.common.entity.drone.AbstractDroneEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$PathfinderMob, $PathfinderMob$$Type} from "net.minecraft.world.entity.PathfinderMob"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$GoalSelector} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $AbstractDroneEntity extends $PathfinderMob {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
 "lastHurtByPlayerTime": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "yHeadRot": float
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
readonly "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": StringJS
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "lastHurt": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "laserExtension": float
static readonly "DEFAULT_BABY_SCALE": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": StringJS
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
 "lastHurtByPlayer": $Player
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
readonly "targetSelector": $GoalSelector
 "oldPropRotation": float
 "oldLaserExtension": float
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "propRotation": float
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
 "levelCallback": $EntityInLevelCallback
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer

constructor(arg0: $EntityType$$Type<($PathfinderMob$$Type)>, arg1: $Level$$Type)

public "getOwnerName"(): $Component
public "getDroneColor"(): integer
public "getLaserOffsetY"(): double
public "getDugBlock"(): $BlockPos
public "getDroneHeldItem"(): $ItemStack
public "getTargetedBlock"(): $BlockPos
public "isTeleportRangeLimited"(): boolean
public "getLaserColor"(): integer
public "isAccelerating"(): boolean
public "hasMinigun"(): boolean
public "getLabel"(): StringJS
public static "tickLeash"<E extends $Entity>(arg0: E): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "self"(): $Entity
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
get "ownerName"(): $Component
get "droneColor"(): integer
get "laserOffsetY"(): double
get "dugBlock"(): $BlockPos
get "droneHeldItem"(): $ItemStack
get "targetedBlock"(): $BlockPos
get "teleportRangeLimited"(): boolean
get "laserColor"(): integer
get "accelerating"(): boolean
get "label"(): StringJS
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDroneEntity$$Type = ($AbstractDroneEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractDroneEntity$$Original = $AbstractDroneEntity;}
declare module "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCactusLike" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$HarvestHandler} from "me.desht.pneumaticcraft.api.harvesting.HarvestHandler"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HarvestHandlerCactusLike extends $HarvestHandler {
constructor(arg0: $Predicate$$Type<($BlockState)>)

public "canHarvest"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandlerCactusLike$$Type = ($HarvestHandlerCactusLike);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandlerCactusLike$$Original = $HarvestHandlerCactusLike;}
declare module "me.desht.pneumaticcraft.common.block.AphorismTileBlock$ItemBlockAphorismTile" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ColorHandlers$ITintableItem$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AphorismTileBlock$$Type} from "me.desht.pneumaticcraft.common.block.AphorismTileBlock"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $AphorismTileBlock$ItemBlockAphorismTile extends $BlockItem implements $ColorHandlers$ITintableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AphorismTileBlock$$Type)

public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
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
export type $AphorismTileBlock$ItemBlockAphorismTile$$Type = ($AphorismTileBlock$ItemBlockAphorismTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AphorismTileBlock$ItemBlockAphorismTile$$Original = $AphorismTileBlock$ItemBlockAphorismTile;}
declare module "me.desht.pneumaticcraft.common.block.EmptySpawnerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EmptySpawnerBlock extends $AbstractPneumaticCraftBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptySpawnerBlock$$Type = ($EmptySpawnerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptySpawnerBlock$$Original = $EmptySpawnerBlock;}
declare module "me.desht.pneumaticcraft.common.block.VortexTubeBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ColorHandlers$IHeatTintable$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$IHeatTintable"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $VortexTubeBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$IHeatTintable$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VortexTubeBlock$$Type = ($VortexTubeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VortexTubeBlock$$Original = $VortexTubeBlock;}
declare module "me.desht.pneumaticcraft.common.block.DisplayTableBlock$Shelf" {
import {$DisplayTableBlock} from "me.desht.pneumaticcraft.common.block.DisplayTableBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $DisplayTableBlock$Shelf extends $DisplayTableBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getTableHeight"(): double
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tableHeight"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayTableBlock$Shelf$$Type = ($DisplayTableBlock$Shelf);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisplayTableBlock$Shelf$$Original = $DisplayTableBlock$Shelf;}
declare module "me.desht.pneumaticcraft.common.recipes.other.FuelQualityRecipeImpl$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FuelQualityRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.FuelQualityRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FuelQualityRecipeImpl$IFactory$$Type} from "me.desht.pneumaticcraft.common.recipes.other.FuelQualityRecipeImpl$IFactory"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $FuelQualityRecipeImpl$Serializer<T extends $FuelQualityRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $FuelQualityRecipeImpl$IFactory$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelQualityRecipeImpl$Serializer$$Type<T> = ($FuelQualityRecipeImpl$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelQualityRecipeImpl$Serializer$$Original<T> = $FuelQualityRecipeImpl$Serializer<(T)>;}
declare module "me.desht.pneumaticcraft.common.item.PressurizableItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IPressurizableItem$$Interface} from "me.desht.pneumaticcraft.api.pressure.IPressurizableItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PressurizableItem extends $Item implements $IPressurizableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: integer, arg2: integer)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "getEnchantmentValue"(): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "getBaseVolume"(): integer
public "getVolumeUpgrades"(arg0: $ItemStack$$Type): integer
public "getMaxPressure"(): float
public "getAir"(arg0: $ItemStack$$Type): integer
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getPressure"(arg0: $ItemStack$$Type): float
public "getEffectiveVolume"(arg0: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
get "baseVolume"(): integer
get "maxPressure"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressurizableItem$$Type = ($PressurizableItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressurizableItem$$Original = $PressurizableItem;}
declare module "me.desht.pneumaticcraft.common.item.PneumaticArmorItem" {
import {$AbstractDroneEntity$$Type} from "me.desht.pneumaticcraft.common.entity.drone.AbstractDroneEntity"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$IChargeableContainerProvider$$Interface} from "me.desht.pneumaticcraft.common.item.IChargeableContainerProvider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ColorHandlers$ITintableItem$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableItem"
import {$GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Supplier} from "java.util.function.Supplier"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$DyedItemColor} from "net.minecraft.world.item.component.DyedItemColor"
import {$Map} from "java.util.Map"
import {$IPressurizableItem$$Interface} from "me.desht.pneumaticcraft.api.pressure.IPressurizableItem"
import {$IFOVModifierItem$$Interface} from "me.desht.pneumaticcraft.api.client.IFOVModifierItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IDroneBase, $IDroneBase$$Type} from "me.desht.pneumaticcraft.common.drone.IDroneBase"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$ICustomDurabilityBar$$Interface} from "me.desht.pneumaticcraft.api.item.ICustomDurabilityBar"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ChargingStationBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.utility.ChargingStationBlockEntity"

export class $PneumaticArmorItem extends $ArmorItem implements $IChargeableContainerProvider$$Interface, $IFOVModifierItem$$Interface, $ICustomDurabilityBar$$Interface, $IPressurizableItem$$Interface, $ColorHandlers$ITintableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "DEFAULT_EYEPIECE_COLOR": $DyedItemColor
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
static readonly "DEFAULT_SECONDARY_COLOR": $DyedItemColor
static readonly "DEFAULT_PRIMARY_COLOR": $DyedItemColor
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type)

public static "getEntityFilter"(arg0: $ItemStack$$Type): StringJS
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "isDamageable"(arg0: $ItemStack$$Type): boolean
public "isEnderMask"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EnderMan$$Type): boolean
public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getBaseVolume"(): integer
public "getVolumeUpgrades"(arg0: $ItemStack$$Type): integer
public "getMaxPressure"(): float
public "getUpgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
public "getContainerProvider"(arg0: $ChargingStationBlockEntity$$Type): $MenuProvider
public static "isPlayerWearingAnyPneumaticArmor"(arg0: $Player$$Type): boolean
public static "isPneumaticArmorPiece"(arg0: $Player$$Type, arg1: $EquipmentSlot$$Type): boolean
public static "getSearchedItem"(arg0: $ItemStack$$Type): $Item
public static "getCoordTrackerPos"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $BlockPos
public "getFOVModifier"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EquipmentSlot$$Type): float
public "getPrimaryColor"(arg0: $ItemStack$$Type): integer
public "getSecondaryColor"(arg0: $ItemStack$$Type): integer
public "getEyepieceColor"(arg0: $ItemStack$$Type): integer
public static "getBooleanData"(arg0: $ItemStack$$Type, arg1: $DataComponentType$$Type<(boolean)>, arg2: boolean): boolean
public static "setSearchedItem"(arg0: $ItemStack$$Type, arg1: $Item$$Type): void
public static "setCoordTrackerPos"(arg0: $ItemStack$$Type, arg1: $GlobalPos$$Type): void
public static "isPlayerDebuggingDrone"(arg0: $Player$$Type, arg1: $IDroneBase$$Type): boolean
public static "isPlayerDebuggingDrone"(arg0: $Player$$Type, arg1: $AbstractDroneEntity$$Type): boolean
public static "getDebuggedDrone"(arg0: $Player$$Type): $IDroneBase
public "shouldShowCustomDurabilityBar"(arg0: $ItemStack$$Type): boolean
public "getCustomDurabilityColour"(arg0: $ItemStack$$Type): integer
public "getCustomDurability"(arg0: $ItemStack$$Type): float
public "setPrimaryColor"(arg0: $ItemStack$$Type, arg1: integer): void
public "setSecondaryColor"(arg0: $ItemStack$$Type, arg1: integer): void
public "setEyepieceColor"(arg0: $ItemStack$$Type, arg1: integer): void
public "getAir"(arg0: $ItemStack$$Type): integer
public static "getIntData"(arg0: $ItemStack$$Type, arg1: $DataComponentType$$Type<(integer)>, arg2: integer, arg3: integer, arg4: integer): integer
public static "getIntData"(arg0: $ItemStack$$Type, arg1: $DataComponentType$$Type<(integer)>, arg2: integer): integer
public "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "makesPiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
public "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
public "isShowingOtherBar"(arg0: $ItemStack$$Type): boolean
public "getPressure"(arg0: $ItemStack$$Type): float
public "getEffectiveVolume"(arg0: $ItemStack$$Type): integer
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "baseVolume"(): integer
get "maxPressure"(): float
get "upgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticArmorItem$$Type = ($PneumaticArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PneumaticArmorItem$$Original = $PneumaticArmorItem;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidLubricant$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"

export class $FluidLubricant$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLubricant$Source$$Type = ($FluidLubricant$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidLubricant$Source$$Original = $FluidLubricant$Source;}
declare module "me.desht.pneumaticcraft.common.block.entity.processing.AssemblyControllerBlockEntity$AssemblySystem" {
import {$AssemblyDrillBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.processing.AssemblyDrillBlockEntity"
import {$AssemblyLaserBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.processing.AssemblyLaserBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AssemblyIOUnitBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.processing.AssemblyIOUnitBlockEntity"
import {$AssemblyPlatformBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.processing.AssemblyPlatformBlockEntity"

export class $AssemblyControllerBlockEntity$AssemblySystem {
constructor(arg0: $BlockPos$$Type)

public "getDrill"(): $AssemblyDrillBlockEntity
public "getExportUnit"(): $AssemblyIOUnitBlockEntity
public "getImportUnit"(): $AssemblyIOUnitBlockEntity
public "getLaser"(): $AssemblyLaserBlockEntity
public "getPlatform"(): $AssemblyPlatformBlockEntity
get "drill"(): $AssemblyDrillBlockEntity
get "exportUnit"(): $AssemblyIOUnitBlockEntity
get "importUnit"(): $AssemblyIOUnitBlockEntity
get "laser"(): $AssemblyLaserBlockEntity
get "platform"(): $AssemblyPlatformBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyControllerBlockEntity$AssemblySystem$$Type = ($AssemblyControllerBlockEntity$AssemblySystem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyControllerBlockEntity$AssemblySystem$$Original = $AssemblyControllerBlockEntity$AssemblySystem;}
declare module "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram" {
import {$AssemblyRecipe$AssemblyProgramType} from "me.desht.pneumaticcraft.api.crafting.recipe.AssemblyRecipe$AssemblyProgramType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$AssemblyProgram$EnumMachine} from "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram$EnumMachine"
import {$AssemblyControllerBlockEntity$AssemblySystem$$Type} from "me.desht.pneumaticcraft.common.block.entity.processing.AssemblyControllerBlockEntity$AssemblySystem"
import {$List$$Type} from "java.util.List"
import {$AssemblyProgram$EnumAssemblyProblem} from "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram$EnumAssemblyProblem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$AssemblyRecipe, $AssemblyRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.AssemblyRecipe"
import {$AssemblyProgramItem} from "me.desht.pneumaticcraft.common.item.AssemblyProgramItem"

export class $AssemblyProgram {
readonly "curProblem": $AssemblyProgram$EnumAssemblyProblem

constructor()

public "readFromNBT"(arg0: $CompoundTag$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type): void
public "getRecipeList"(arg0: $Level$$Type): $Collection<($AssemblyRecipe)>
public "getRequiredMachines"(): ($AssemblyProgram$EnumMachine)[]
public "validateBlockEntity"(arg0: $AssemblyControllerBlockEntity$AssemblySystem$$Type): boolean
public "executeStep"(arg0: $AssemblyControllerBlockEntity$AssemblySystem$$Type): boolean
public "addProgramProblem"(arg0: $List$$Type<($Component$$Type)>): void
public static "fromRecipe"(arg0: $AssemblyRecipe$$Type): $AssemblyProgram
public "getItem"(): $AssemblyProgramItem
public "getType"(): $AssemblyRecipe$AssemblyProgramType
get "requiredMachines"(): ($AssemblyProgram$EnumMachine)[]
get "item"(): $AssemblyProgramItem
get "type"(): $AssemblyRecipe$AssemblyProgramType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyProgram$$Type = ($AssemblyProgram);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyProgram$$Original = $AssemblyProgram;}
declare module "me.desht.pneumaticcraft.common.item.GPSToolItem" {
import {$IGPSToolSync$$Interface} from "me.desht.pneumaticcraft.common.item.IGPSToolSync"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IPositionProvider$$Interface} from "me.desht.pneumaticcraft.api.item.IPositionProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IShiftScrollable$$Interface} from "me.desht.pneumaticcraft.common.item.IShiftScrollable"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $GPSToolItem extends $Item implements $IPositionProvider$$Interface, $IGPSToolSync$$Interface, $IShiftScrollable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "syncFromClient"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: StringJS, arg5: boolean): void
public "getStoredPositions"(arg0: $UUID$$Type, arg1: $ItemStack$$Type): $List<($BlockPos)>
public "getRenderColor"(arg0: integer): integer
public "syncVariables"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "onShiftScrolled"(arg0: $Player$$Type, arg1: boolean, arg2: $InteractionHand$$Type): void
public static "setGPSLocation"(arg0: $UUID$$Type, arg1: $ItemStack$$Type, arg2: $BlockPos$$Type): void
public static "setGPSLocation"(arg0: $UUID$$Type, arg1: $ItemStack$$Type, arg2: $BlockPos$$Type, arg3: boolean): void
public static "getGPSLocation"(arg0: $UUID$$Type, arg1: $ItemStack$$Type): $Optional<($BlockPos)>
public static "getGPSLocation"(arg0: $ItemStack$$Type): $Optional<($BlockPos)>
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getVariable"(arg0: $ItemStack$$Type): StringJS
public static "setVariable"(arg0: $ItemStack$$Type, arg1: StringJS): void
public "getRawStoredPositions"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $List<($BlockPos)>
public "disableDepthTest"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GPSToolItem$$Type = ($GPSToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GPSToolItem$$Original = $GPSToolItem;}
declare module "me.desht.pneumaticcraft.common.block.ThermopneumaticProcessingPlantBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IBlockComparatorSupport$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockComparatorSupport"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ThermopneumaticProcessingPlantBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface, $IBlockComparatorSupport$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermopneumaticProcessingPlantBlock$$Type = ($ThermopneumaticProcessingPlantBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThermopneumaticProcessingPlantBlock$$Original = $ThermopneumaticProcessingPlantBlock;}
declare module "me.desht.pneumaticcraft.common.remote.SavedRemoteLayout$Versioned" {
import {$IRemoteWidget, $IRemoteWidget$$Type} from "me.desht.pneumaticcraft.api.remote.IRemoteWidget"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $SavedRemoteLayout$Versioned extends $Record {
constructor(version: integer, widgets: $List$$Type<($IRemoteWidget$$Type)>)

public "widgets"(): $List<($IRemoteWidget)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "version"(): integer
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SavedRemoteLayout$Versioned$$Type = ({"version"?: integer, "widgets"?: $List$$Type<($IRemoteWidget$$Type)>}) | ([version?: integer, widgets?: $List$$Type<($IRemoteWidget$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SavedRemoteLayout$Versioned$$Original = $SavedRemoteLayout$Versioned;}
declare module "me.desht.pneumaticcraft.common.drone.ai.DroneAIManager$WrappedGoal" {
import {$Goal, $Goal$$Type} from "net.minecraft.world.entity.ai.goal.Goal"
import {$Record} from "java.lang.Record"

export class $DroneAIManager$WrappedGoal extends $Record {
constructor(priority: integer, goal: $Goal$$Type)

public "goal"(): $Goal
public "priority"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneAIManager$WrappedGoal$$Type = ({"priority"?: integer, "goal"?: $Goal$$Type}) | ([priority?: integer, goal?: $Goal$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroneAIManager$WrappedGoal$$Original = $DroneAIManager$WrappedGoal;}
declare module "me.desht.pneumaticcraft.common.inventory.handler.ChargeableItemHandler" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BaseItemStackHandler} from "me.desht.pneumaticcraft.common.inventory.handler.BaseItemStackHandler"
import {$ChargingStationBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.utility.ChargingStationBlockEntity"

export class $ChargeableItemHandler extends $BaseItemStackHandler {
constructor(arg0: $ChargingStationBlockEntity$$Type)

public "writeToChargingStack"(): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeableItemHandler$$Type = ($ChargeableItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargeableItemHandler$$Original = $ChargeableItemHandler;}
declare module "me.desht.pneumaticcraft.common.item.PneumaticCraftBucketItem" {
import {$BucketItem} from "net.minecraft.world.item.BucketItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IFluidCapProvider$$Interface} from "me.desht.pneumaticcraft.common.item.IFluidCapProvider"
import {$IFluidHandlerItem} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"

export class $PneumaticCraftBucketItem extends $BucketItem implements $IFluidCapProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Fluid$$Type)

public "provideFluidCapability"(arg0: $ItemStack$$Type): $IFluidHandlerItem
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticCraftBucketItem$$Type = ($PneumaticCraftBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PneumaticCraftBucketItem$$Original = $PneumaticCraftBucketItem;}
declare module "me.desht.pneumaticcraft.common.block.SmoothPlasticBrickBlock$SmoothPlasticBrickItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$ICustomTooltipName$$Interface} from "me.desht.pneumaticcraft.common.item.ICustomTooltipName"
import {$SmoothPlasticBrickBlock$$Type} from "me.desht.pneumaticcraft.common.block.SmoothPlasticBrickBlock"

export class $SmoothPlasticBrickBlock$SmoothPlasticBrickItem extends $BlockItem implements $ICustomTooltipName$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $SmoothPlasticBrickBlock$$Type)

public "getCustomTooltipTranslationKey"(): StringJS
public static "getTranslationKey"(arg0: $ItemStack$$Type, arg1: boolean): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "customTooltipTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmoothPlasticBrickBlock$SmoothPlasticBrickItem$$Type = ($SmoothPlasticBrickBlock$SmoothPlasticBrickItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmoothPlasticBrickBlock$SmoothPlasticBrickItem$$Original = $SmoothPlasticBrickBlock$SmoothPlasticBrickItem;}
declare module "me.desht.pneumaticcraft.common.item.SeismicSensorItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $SeismicSensorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeismicSensorItem$$Type = ($SeismicSensorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SeismicSensorItem$$Original = $SeismicSensorItem;}
declare module "me.desht.pneumaticcraft.common.recipes.special.ShapedPressurizableRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ShapedPressurizableRecipe} from "me.desht.pneumaticcraft.common.recipes.special.ShapedPressurizableRecipe"

export class $ShapedPressurizableRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapedPressurizableRecipe)> {
static readonly "CODEC": $MapCodec<($ShapedPressurizableRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedPressurizableRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedPressurizableRecipe)>
public "codec"(): $MapCodec<($ShapedPressurizableRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedPressurizableRecipe$Serializer$$Type = ($ShapedPressurizableRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedPressurizableRecipe$Serializer$$Original = $ShapedPressurizableRecipe$Serializer;}
declare module "me.desht.pneumaticcraft.common.block.CreativeCompressedIronBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ColorHandlers$IHeatTintable$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$IHeatTintable"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CreativeCompressedIronBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$IHeatTintable$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeCompressedIronBlock$$Type = ($CreativeCompressedIronBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeCompressedIronBlock$$Original = $CreativeCompressedIronBlock;}
declare module "me.desht.pneumaticcraft.common.block.PressureChamberWallBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AbstractPressureWallBlock} from "me.desht.pneumaticcraft.common.block.AbstractPressureWallBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $PressureChamberWallBlock extends $AbstractPressureWallBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "pressureChamberBlockProps"(): $BlockBehaviour$Properties
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberWallBlock$$Type = ($PressureChamberWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureChamberWallBlock$$Original = $PressureChamberWallBlock;}
declare module "me.desht.pneumaticcraft.common.drone.ai.DroneAIManager" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$IDrone, $IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$IDroneBase$$Type} from "me.desht.pneumaticcraft.common.drone.IDroneBase"
import {$IVariableProvider$$Interface} from "me.desht.pneumaticcraft.api.misc.IVariableProvider"
import {$IProgWidget, $IProgWidget$$Type} from "me.desht.pneumaticcraft.api.drone.IProgWidget"
import {$Goal} from "net.minecraft.world.entity.ai.goal.Goal"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DroneAIManager$WrappedGoal} from "me.desht.pneumaticcraft.common.drone.ai.DroneAIManager$WrappedGoal"

export class $DroneAIManager implements $IVariableProvider$$Interface {
static readonly "TICK_RATE": integer

constructor(arg0: $IDroneBase$$Type)
constructor(arg0: $IDrone$$Type, arg1: $List$$Type<($IProgWidget$$Type)>)

public "setItemStack"(arg0: StringJS, arg1: $ItemStack$$Type): void
public "readFromNBT"(arg0: $CompoundTag$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type): $CompoundTag
public "getDrone"(): $IDrone
public "onUpdateTasks"(): void
public "getTargetAI"(): $Goal
public "dontStopWhenEndReached"(): void
public "getActiveManager"(): $DroneAIManager
public "getRunningTasks"(): $List<($DroneAIManager$WrappedGoal)>
public "setWidgets"(arg0: $List$$Type<($IProgWidget$$Type)>): void
public "setCoordinate"(arg0: StringJS, arg1: $BlockPos$$Type): void
public "isIdling"(): boolean
public "getCurrentGoal"(): $Goal
public "widgets"(): $List<($IProgWidget)>
public "getLabel"(): StringJS
public "setLabel"(arg0: StringJS): void
public "getStack"(arg0: $UUID$$Type, arg1: StringJS): $ItemStack
public "getCoordinate"(arg0: $UUID$$Type, arg1: StringJS): $Optional<($BlockPos)>
get "drone"(): $IDrone
get "targetAI"(): $Goal
get "activeManager"(): $DroneAIManager
get "runningTasks"(): $List<($DroneAIManager$WrappedGoal)>
get "idling"(): boolean
get "currentGoal"(): $Goal
get "label"(): StringJS
set "label"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneAIManager$$Type = ($DroneAIManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroneAIManager$$Original = $DroneAIManager;}
declare module "me.desht.pneumaticcraft.common.block.SmartChestBlock$ItemBlockBlockSmartChest" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$IInventoryItem$$Interface} from "me.desht.pneumaticcraft.api.item.IInventoryItem"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"

export class $SmartChestBlock$ItemBlockBlockSmartChest extends $BlockItem implements $IInventoryItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canFitInsideContainerItems"(): boolean
public "getStacksInItem"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
public "getTooltipPrefix"(arg0: $ItemStack$$Type): StringJS
public "getInventoryHeader"(): $Component
public static "getStacks"(arg0: $ItemContainerContents$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "inventoryHeader"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartChestBlock$ItemBlockBlockSmartChest$$Type = ($SmartChestBlock$ItemBlockBlockSmartChest);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartChestBlock$ItemBlockBlockSmartChest$$Original = $SmartChestBlock$ItemBlockBlockSmartChest;}
declare module "me.desht.pneumaticcraft.common.block.WallLampBlock$ItemWallLamp" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$WallLampBlock$$Type} from "me.desht.pneumaticcraft.common.block.WallLampBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$ICustomTooltipName$$Interface} from "me.desht.pneumaticcraft.common.item.ICustomTooltipName"

export class $WallLampBlock$ItemWallLamp extends $BlockItem implements $ICustomTooltipName$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $WallLampBlock$$Type)

public "getCustomTooltipTranslationKey"(): StringJS
public static "getTranslationKey"(arg0: $ItemStack$$Type, arg1: boolean): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "customTooltipTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallLampBlock$ItemWallLamp$$Type = ($WallLampBlock$ItemWallLamp);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WallLampBlock$ItemWallLamp$$Original = $WallLampBlock$ItemWallLamp;}
declare module "me.desht.pneumaticcraft.common.item.AssemblyProgramItem" {
import {$AssemblyRecipe$AssemblyProgramType, $AssemblyRecipe$AssemblyProgramType$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.AssemblyRecipe$AssemblyProgramType"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AssemblyProgram} from "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram"

export class $AssemblyProgramItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AssemblyRecipe$AssemblyProgramType$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getProgramType"(): $AssemblyRecipe$AssemblyProgramType
public static "fromProgramType"(arg0: $AssemblyRecipe$AssemblyProgramType$$Type): $AssemblyProgramItem
public "getProgram"(): $AssemblyProgram
public static "getProgram"(arg0: $ItemStack$$Type): $AssemblyProgram
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "programType"(): $AssemblyRecipe$AssemblyProgramType
get "program"(): $AssemblyProgram
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyProgramItem$$Type = ($AssemblyProgramItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyProgramItem$$Original = $AssemblyProgramItem;}
declare module "me.desht.pneumaticcraft.common.block.PneumaticDynamoBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PneumaticDynamoBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticDynamoBlock$$Type = ($PneumaticDynamoBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PneumaticDynamoBlock$$Original = $PneumaticDynamoBlock;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidYeastCulture$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidYeastCulture$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidYeastCulture$Flowing$$Type = ($FluidYeastCulture$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidYeastCulture$Flowing$$Original = $FluidYeastCulture$Flowing;}
declare module "me.desht.pneumaticcraft.common.item.logistics.LogisticsFrameRequesterItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractLogisticsFrameItem} from "me.desht.pneumaticcraft.common.item.logistics.AbstractLogisticsFrameItem"

export class $LogisticsFrameRequesterItem extends $AbstractLogisticsFrameItem {
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
export type $LogisticsFrameRequesterItem$$Type = ($LogisticsFrameRequesterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogisticsFrameRequesterItem$$Original = $LogisticsFrameRequesterItem;}
declare module "me.desht.pneumaticcraft.common.item.GlycerolItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"

export class $GlycerolItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(never)>): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlycerolItem$$Type = ($GlycerolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlycerolItem$$Original = $GlycerolItem;}
declare module "me.desht.pneumaticcraft.common.item.RemoteItem" {
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
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SavedRemoteLayout$$Type} from "me.desht.pneumaticcraft.common.remote.SavedRemoteLayout"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $RemoteItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "saveToItem"(arg0: $ItemStack$$Type, arg1: $SavedRemoteLayout$$Type): void
public static "hasSameSecuritySettings"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoteItem$$Type = ($RemoteItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RemoteItem$$Original = $RemoteItem;}
declare module "me.desht.pneumaticcraft.common.item.JackHammerItem$DigMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ITranslatableEnum$$Interface} from "me.desht.pneumaticcraft.api.misc.ITranslatableEnum"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$DrillBitItem$DrillBitType} from "me.desht.pneumaticcraft.common.item.DrillBitItem$DrillBitType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $JackHammerItem$DigMode extends $Enum<($JackHammerItem$DigMode)> implements $ITranslatableEnum$$Interface, $StringRepresentable$$Interface {
static readonly "MODE_VEIN_PLUS": $JackHammerItem$DigMode
static readonly "MODE_3X3_FULL": $JackHammerItem$DigMode
static readonly "MODE_1X1": $JackHammerItem$DigMode
static readonly "MODE_1X2": $JackHammerItem$DigMode
static readonly "MODE_3X3_CROSS": $JackHammerItem$DigMode
static readonly "MODE_1X3": $JackHammerItem$DigMode
static readonly "MODE_VEIN": $JackHammerItem$DigMode

public "getTranslationKey"(): StringJS
public "isVeinMining"(): boolean
public "okToVeinMine"(arg0: $BlockState$$Type): boolean
public "getBlocksDug"(): integer
public "getBitType"(): $DrillBitItem$DrillBitType
public "getGuiIcon"(): $ResourceLocation
public "atLeast"(arg0: $JackHammerItem$DigMode$$Type): boolean
public "getName"(): StringJS
public static "values"(): ($JackHammerItem$DigMode)[]
public static "valueOf"(arg0: StringJS): $JackHammerItem$DigMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "translationKey"(): StringJS
get "veinMining"(): boolean
get "blocksDug"(): integer
get "bitType"(): $DrillBitItem$DrillBitType
get "guiIcon"(): $ResourceLocation
get "name"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JackHammerItem$DigMode$$Type = (("1x1") | ("1x2") | ("1x3") | ("3x3_cross") | ("vein") | ("3x3_full") | ("vein_plus"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JackHammerItem$DigMode$$Original = $JackHammerItem$DigMode;}
declare module "me.desht.pneumaticcraft.common.block.CreativeCompressorBlock$ItemBlockCreativeCompressor" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $CreativeCompressorBlock$ItemBlockCreativeCompressor extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

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
export type $CreativeCompressorBlock$ItemBlockCreativeCompressor$$Type = ($CreativeCompressorBlock$ItemBlockCreativeCompressor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeCompressorBlock$ItemBlockCreativeCompressor$$Original = $CreativeCompressorBlock$ItemBlockCreativeCompressor;}
declare module "me.desht.pneumaticcraft.common.block.ChargingStationBlock$ItemBlockChargingStation" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ChargingStationBlock$ItemBlockChargingStation extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
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
export type $ChargingStationBlock$ItemBlockChargingStation$$Type = ($ChargingStationBlock$ItemBlockChargingStation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargingStationBlock$ItemBlockChargingStation$$Original = $ChargingStationBlock$ItemBlockChargingStation;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidOil$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $FluidOil$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "move"(arg0: $FluidState$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: double): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidOil$Source$$Type = ($FluidOil$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidOil$Source$$Original = $FluidOil$Source;}
declare module "me.desht.pneumaticcraft.common.drone.LogisticsManager" {
import {$PriorityQueue} from "java.util.PriorityQueue"
import {$AbstractLogisticsFrameEntity$$Type} from "me.desht.pneumaticcraft.common.entity.semiblock.AbstractLogisticsFrameEntity"
import {$LogisticsManager$LogisticsTask} from "me.desht.pneumaticcraft.common.drone.LogisticsManager$LogisticsTask"

export class $LogisticsManager {
constructor()

public "getTasks"(arg0: any, arg1: boolean): $PriorityQueue<($LogisticsManager$LogisticsTask)>
public "addLogisticFrame"(arg0: $AbstractLogisticsFrameEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogisticsManager$$Type = ($LogisticsManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogisticsManager$$Original = $LogisticsManager;}
declare module "me.desht.pneumaticcraft.common.block.KeroseneLampBlock$ItemBlockKeroseneLamp" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$ICustomTooltipName$$Interface} from "me.desht.pneumaticcraft.common.item.ICustomTooltipName"

export class $KeroseneLampBlock$ItemBlockKeroseneLamp extends $BlockItem implements $ICustomTooltipName$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

public "getCustomTooltipTranslationKey"(): StringJS
public static "getTranslationKey"(arg0: $ItemStack$$Type, arg1: boolean): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "customTooltipTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeroseneLampBlock$ItemBlockKeroseneLamp$$Type = ($KeroseneLampBlock$ItemBlockKeroseneLamp);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeroseneLampBlock$ItemBlockKeroseneLamp$$Original = $KeroseneLampBlock$ItemBlockKeroseneLamp;}
declare module "me.desht.pneumaticcraft.common.drone.progwidgets.ProgWidgetArea" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$IVariableWidget$$Interface} from "me.desht.pneumaticcraft.common.drone.progwidgets.IVariableWidget"
import {$DroneAIManager$$Type} from "me.desht.pneumaticcraft.common.drone.ai.DroneAIManager"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IVariableProvider$$Type} from "me.desht.pneumaticcraft.api.misc.IVariableProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IProgWidget, $IProgWidget$$Type} from "me.desht.pneumaticcraft.api.drone.IProgWidget"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$IAreaProvider$$Interface} from "me.desht.pneumaticcraft.common.drone.progwidgets.IAreaProvider"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AreaType, $AreaType$$Type} from "me.desht.pneumaticcraft.api.drone.area.AreaType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IProgWidget$WidgetDifficulty} from "me.desht.pneumaticcraft.api.drone.IProgWidget$WidgetDifficulty"
import {$ProgWidgetType, $ProgWidgetType$$Type} from "me.desht.pneumaticcraft.api.drone.ProgWidgetType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ProgWidget} from "me.desht.pneumaticcraft.common.drone.progwidgets.ProgWidget"

export class $ProgWidgetArea extends $ProgWidget implements $IAreaProvider$$Interface, $IVariableWidget$$Interface {
static readonly "JSON_VERSION": integer
static readonly "CODEC": $MapCodec<($ProgWidgetArea)>
static readonly "PROGWIDGET_WIDTH": integer
static readonly "LIST_CODEC": $Codec<($List<($IProgWidget)>)>
static readonly "PROGWIDGET_HEIGHT": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ProgWidgetArea)>

constructor()

public "getArea"(arg0: $Set$$Type<($BlockPos$$Type)>, arg1: $AreaType$$Type): void
public "getArea"(arg0: $Set$$Type<($BlockPos$$Type)>): $Set<($BlockPos)>
public "updateFrom"(arg0: $ProgWidgetArea$$Type): void
public "getVarName"(arg0: integer): StringJS
public "setVariableProvider"(arg0: $IVariableProvider$$Type, arg1: $UUID$$Type): void
public "setVarName"(arg0: integer, arg1: StringJS): void
public "addAreaTypeTooltip"(arg0: $List$$Type<($Component$$Type)>): void
public "addVariables"(arg0: $Set$$Type<(StringJS)>): void
public "copyWidget"(): $IProgWidget
public "hasStepInput"(): boolean
public "getExtraStringInfo"(): $List<($Component)>
public "addErrors"(arg0: $List$$Type<($Component$$Type)>, arg1: $List$$Type<($IProgWidget$$Type)>): void
public static "getAllAreaTypes"(): $List<($AreaType)>
public "setAIManager"(arg0: $DroneAIManager$$Type): void
public static "fromPositions"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): $ProgWidgetArea
public static "fromPosition"(arg0: $BlockPos$$Type): $ProgWidgetArea
public static "fromPosition"(arg0: $BlockPos$$Type, arg1: integer): $ProgWidgetArea
public static "fromPosition"(arg0: $BlockPos$$Type, arg1: integer, arg2: integer, arg3: integer): $ProgWidgetArea
public static "addAreaTypeInfo"(arg0: $AreaType$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "getAreaType"(): $AreaType
public "setAreaType"(arg0: $AreaType$$Type): void
public "returnType"(): $ProgWidgetType<(never)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getType"(): $ProgWidgetType<(never)>
public "getParameters"(): $List<($ProgWidgetType<(never)>)>
public "getTexture"(): $ResourceLocation
public "getColor"(): $DyeColor
public "setPos"(arg0: integer, arg1: $BlockPos$$Type): void
public "getDifficulty"(): $IProgWidget$WidgetDifficulty
public "getPos"(arg0: integer): $Optional<($BlockPos)>
public "getTooltip"(arg0: $List$$Type<($Component$$Type)>): void
public static "create"(arg0: $ProgWidgetType$$Type<(never)>): $IProgWidget
get "extraStringInfo"(): $List<($Component)>
public static get "allAreaTypes"(): $List<($AreaType)>
set "AIManager"(value: $DroneAIManager$$Type)
get "areaType"(): $AreaType
set "areaType"(value: $AreaType$$Type)
get "type"(): $ProgWidgetType<(never)>
get "parameters"(): $List<($ProgWidgetType<(never)>)>
get "texture"(): $ResourceLocation
get "color"(): $DyeColor
get "difficulty"(): $IProgWidget$WidgetDifficulty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgWidgetArea$$Type = ($ProgWidgetArea);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgWidgetArea$$Original = $ProgWidgetArea;}
declare module "me.desht.pneumaticcraft.common.block.entity.tube.PressureTubeBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IAirListener$$Interface} from "me.desht.pneumaticcraft.api.tileentity.IAirListener"
import {$AbstractAirHandlingBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.AbstractAirHandlingBlockEntity"
import {$AbstractTubeModule, $AbstractTubeModule$$Type} from "me.desht.pneumaticcraft.common.tubemodules.AbstractTubeModule"
import {$IAirHandlerMachine, $IAirHandlerMachine$$Type} from "me.desht.pneumaticcraft.api.tileentity.IAirHandlerMachine"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IManoMeasurable$$Interface} from "me.desht.pneumaticcraft.api.tileentity.IManoMeasurable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$AbstractPneumaticCraftBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.AbstractPneumaticCraftBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$CamouflageableBlockEntity$$Interface} from "me.desht.pneumaticcraft.common.block.entity.CamouflageableBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PressureTubeBlockEntity extends $AbstractAirHandlingBlockEntity implements $IAirListener$$Interface, $IManoMeasurable$$Interface, $CamouflageableBlockEntity$$Interface {
static readonly "CONNECTION_PROPERTY": $ModelProperty<(short)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickClient"(): void
public "tickServer"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getRenderBoundingBox"(): $AABB
public "setSideClosed"(arg0: $Direction$$Type, arg1: boolean): void
public "getConnectedNeighbor"(arg0: $Direction$$Type): $BlockEntity
public "tubeModules"(): $Stream<($AbstractTubeModule)>
public "printManometerMessage"(arg0: $Player$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "getCamouflage"(): $BlockState
public "setCamouflage"(arg0: $BlockState$$Type): void
public "getShapeCacheKey"(): integer
public "isSideClosed"(arg0: $Direction$$Type): boolean
public "isSideConnected"(arg0: $Direction$$Type): boolean
public "onNeighborTileUpdate"(arg0: $BlockPos$$Type): void
public "mayPlaceModule"(arg0: $AbstractTubeModule$$Type): boolean
public "readFromPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onDescUpdate"(): void
public "canConnectPneumatic"(arg0: $Direction$$Type): boolean
public "onNeighborBlockUpdate"(arg0: $BlockPos$$Type): void
public "onAirDispersion"(arg0: $IAirHandlerMachine$$Type, arg1: $Direction$$Type, arg2: integer): void
public "getMaxDispersion"(arg0: $IAirHandlerMachine$$Type, arg1: $Direction$$Type): integer
public "writeModulesToNBT"(arg0: $CompoundTag$$Type): void
public "setSideConnected"(arg0: $Direction$$Type, arg1: boolean): void
public "getModule"(arg0: $Direction$$Type): $AbstractTubeModule
public "onLoad"(): void
public "setModule"(arg0: $Direction$$Type, arg1: $AbstractTubeModule$$Type): void
public "addConnectedPneumatics"(arg0: $List$$Type<($IAirHandlerMachine$$Type)>): $List<($IAirHandlerMachine)>
public static "getStackForState"(arg0: $BlockState$$Type): $ItemStack
public static "writeCamo"(arg0: $CompoundTag$$Type, arg1: $BlockState$$Type): void
public static "readCamo"(arg0: $CompoundTag$$Type): $BlockState
public static "onCamouflageChanged"(arg0: $AbstractPneumaticCraftBlockEntity$$Type): void
get "renderBoundingBox"(): $AABB
get "camouflage"(): $BlockState
set "camouflage"(value: $BlockState$$Type)
get "shapeCacheKey"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureTubeBlockEntity$$Type = ($PressureTubeBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureTubeBlockEntity$$Original = $PressureTubeBlockEntity;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.ThermoPlantRecipeImpl$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ThermoPlantRecipeImpl$IFactory$$Type} from "me.desht.pneumaticcraft.common.recipes.machine.ThermoPlantRecipeImpl$IFactory"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ThermoPlantRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.ThermoPlantRecipe"

export class $ThermoPlantRecipeImpl$Serializer<T extends $ThermoPlantRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $ThermoPlantRecipeImpl$IFactory$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoPlantRecipeImpl$Serializer$$Type<T> = ($ThermoPlantRecipeImpl$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThermoPlantRecipeImpl$Serializer$$Original<T> = $ThermoPlantRecipeImpl$Serializer<(T)>;}
declare module "me.desht.pneumaticcraft.common.block.AphorismTileBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ColorHandlers$ITintableBlock$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AphorismTileBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$ITintableBlock$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "APHORISM_TILE_THICKNESS": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INVISIBLE": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "isRotatable"(): boolean
public "addSerializableComponents"(arg0: $List$$Type<($DataComponentType$$Type<(never)>)>): void
public "onWrenched"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $InteractionHand$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AphorismTileBlock$$Type = ($AphorismTileBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AphorismTileBlock$$Original = $AphorismTileBlock;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidMemoryEssence$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidMemoryEssence$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMemoryEssence$Flowing$$Type = ($FluidMemoryEssence$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidMemoryEssence$Flowing$$Original = $FluidMemoryEssence$Flowing;}
declare module "me.desht.pneumaticcraft.common.block.AerialInterfaceBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IBlockComparatorSupport$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockComparatorSupport"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AerialInterfaceBlock extends $AbstractPneumaticCraftBlock implements $IBlockComparatorSupport$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AerialInterfaceBlock$$Type = ($AerialInterfaceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AerialInterfaceBlock$$Original = $AerialInterfaceBlock;}
declare module "me.desht.pneumaticcraft.common.entity.drone.DroneEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$Optional} from "java.util.Optional"
import {$DroneItemHandler} from "me.desht.pneumaticcraft.common.util.fakeplayer.DroneItemHandler"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$DronePacket$DroneTarget} from "me.desht.pneumaticcraft.common.network.DronePacket$DroneTarget"
import {$GoalSelector} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$IDroneDebugger} from "me.desht.pneumaticcraft.api.drone.debug.IDroneDebugger"
import {$Minigun$FiringResult} from "me.desht.pneumaticcraft.common.minigun.Minigun$FiringResult"
import {$LogisticsManager, $LogisticsManager$$Type} from "me.desht.pneumaticcraft.common.drone.LogisticsManager"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$DroneAIManager} from "me.desht.pneumaticcraft.common.drone.ai.DroneAIManager"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$$Interface} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$IDroneBase, $IDroneBase$$Interface} from "me.desht.pneumaticcraft.common.drone.IDroneBase"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IManoMeasurable$$Interface} from "me.desht.pneumaticcraft.api.tileentity.IManoMeasurable"
import {$FluidTank} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$AttributeSupplier$Builder} from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$FlyingAnimal$$Interface} from "net.minecraft.world.entity.animal.FlyingAnimal"
import {$SemiblockEvent$$Type} from "me.desht.pneumaticcraft.api.semiblock.SemiblockEvent"
import {$AbstractDroneEntity} from "me.desht.pneumaticcraft.common.entity.drone.AbstractDroneEntity"
import {$UUID} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicAirHandler} from "me.desht.pneumaticcraft.common.capabilities.BasicAirHandler"
import {$Minigun} from "me.desht.pneumaticcraft.common.minigun.Minigun"
import {$FakePlayer} from "net.neoforged.neoforge.common.util.FakePlayer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IProgWidget, $IProgWidget$$Type} from "me.desht.pneumaticcraft.api.drone.IProgWidget"
import {$DimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Class} from "java.lang.Class"
import {$IHackableEntity$$Interface} from "me.desht.pneumaticcraft.api.pneumatic_armor.hacking.IHackableEntity"
import {$DroneAIManager$WrappedGoal} from "me.desht.pneumaticcraft.common.drone.ai.DroneAIManager$WrappedGoal"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IEntityWithComplexSpawn$$Interface} from "net.neoforged.neoforge.entity.IEntityWithComplexSpawn"
import {$IPathNavigator} from "me.desht.pneumaticcraft.api.drone.IPathNavigator"
import {$ProgWidgetType$$Type} from "me.desht.pneumaticcraft.api.drone.ProgWidgetType"
import {$ProgressingLine} from "me.desht.pneumaticcraft.client.util.ProgressingLine"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$PNCUpgrade$$Type} from "me.desht.pneumaticcraft.api.upgrade.PNCUpgrade"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$Goal} from "net.minecraft.world.entity.ai.goal.Goal"
import {$IUpgradeHolder$$Interface} from "me.desht.pneumaticcraft.common.upgrades.IUpgradeHolder"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $DroneEntity extends $AbstractDroneEntity implements $IManoMeasurable$$Interface, $IPneumaticWrenchable$$Interface, $IEntityWithComplexSpawn$$Interface, $IHackableEntity$$Interface<($DroneEntity)>, $IDroneBase$$Interface, $FlyingAnimal$$Interface, $IUpgradeHolder$$Interface {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
 "lastHurtByPlayerTime": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "yHeadRot": float
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
readonly "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": StringJS
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "lastHurt": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "laserExtension": float
static readonly "DEFAULT_BABY_SCALE": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": StringJS
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
 "lastHurtByPlayer": $Player
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
readonly "targetSelector": $GoalSelector
 "oldPropRotation": float
 "oldLaserExtension": float
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "propRotation": float
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "progWidgets": $List<($IProgWidget)>
 "ownerName": $Component
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
 "levelCallback": $EntityInLevelCallback
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer

constructor(arg0: $EntityType$$Type<($DroneEntity$$Type)>, arg1: $Level$$Type)
constructor(arg0: $Level$$Type, arg1: $Player$$Type)

public "dropItem"(arg0: $ItemStack$$Type): void
public "removeWhenFarAway"(arg0: double): boolean
public "mobInteract"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $InteractionResult
public "getOwnerUUID"(): $UUID
public "getUpgradeHandler"(): $IItemHandler
public "getEnergyStorage"(): $IEnergyStorage
public "getControllerPos"(): $BlockPos
public "onUpgradesChanged"(): void
public "getOwnerName"(): $Component
public "getAirHandler"(): $BasicAirHandler
public "getFluidTank"(): $FluidTank
public "getDroneItemHandler"(): $DroneItemHandler
public "printManometerMessage"(arg0: $Player$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "getMinigun"(): $Minigun
public "getUpgrades"(arg0: $PNCUpgrade$$Type): integer
public "tryFireMinigun"(arg0: $LivingEntity$$Type): $Minigun$FiringResult
public "readFromItemStack"(arg0: $ItemStack$$Type): void
public "setDeployPos"(arg0: $BlockPos$$Type): void
public "addProgram"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $List$$Type<($IProgWidget$$Type)>): boolean
public "getDroneColor"(): integer
public "getAmmoColor"(): integer
public "setEmittingRedstone"(arg0: $Direction$$Type, arg1: integer): void
public "getEmittingRedstone"(arg0: $Direction$$Type): integer
public "isDroneStillValid"(): boolean
public "onSemiblockEvent"(arg0: $SemiblockEvent$$Type): void
public "getDebugger"(): $IDroneDebugger
public "shouldLoadChunk"(arg0: $ChunkPos$$Type): boolean
public "getDeployPos"(): $BlockPos
public "getDroneLevel"(): $Level
public "getDronePos"(): $Vec3
public "getPathNavigator"(): $IPathNavigator
public "sendWireframeToClient"(arg0: $BlockPos$$Type): void
public "isBlockValidPathfindBlock"(arg0: $BlockPos$$Type): boolean
public "setDugBlock"(arg0: $BlockPos$$Type): void
public "setDugBlock"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): void
public "getFakePlayerPos"(): $Vec3
public "getProgWidgets"(): $List<($IProgWidget)>
public "setActiveProgram"(arg0: $IProgWidget$$Type): void
public "isProgramApplicable"(arg0: $ProgWidgetType$$Type<(never)>): boolean
public "getTargetAI"(): $GoalSelector
public "setCarryingEntity"(arg0: $Entity$$Type): void
public "getCarryingEntities"(): $List<($Entity)>
public "isAIOverridden"(): boolean
public "onItemPickupEvent"(arg0: $ItemEntity$$Type, arg1: integer): void
public "overload"(arg0: StringJS, ...arg1: (any)[]): void
public "getAIManager"(): $DroneAIManager
public "updateLabel"(): void
public "getLogisticsManager"(): $LogisticsManager
public "setLogisticsManager"(arg0: $LogisticsManager$$Type): void
public "addAirToDrone"(arg0: integer): void
public "canMoveIntoFluid"(arg0: $Fluid$$Type): boolean
public "getDronePressure"(): float
public "getPacketTarget"(): $DronePacket$DroneTarget
public "getActiveWidgetIndex"(): integer
public "getDroneName"(): $Component
public "storeTrackerData"(arg0: $ItemStack$$Type): void
public "resetAttackCount"(): void
public "getRunningTasks"(): $List<($DroneAIManager$WrappedGoal)>
public "getRunningTargetAI"(): $Goal
public "getDugBlock"(): $BlockPos
public "getDroneHeldItem"(): $ItemStack
public "getTargetedBlock"(): $BlockPos
public "isTeleportRangeLimited"(): boolean
public "getLaserColor"(): integer
public "isAccelerating"(): boolean
public "hasMinigun"(): boolean
public "setDroneSpeed"(arg0: double): void
public "shouldDropAsItem"(): boolean
public "canHack"(arg0: $Entity$$Type, arg1: $Player$$Type): boolean
public "getSlotForAmmo"(): integer
public "onHackFinished"(arg0: $DroneEntity$$Type, arg1: $Player$$Type): void
public "onHackFinished"(arg0: $Entity$$Type, arg1: $Player$$Type): void
public "getHackTime"(arg0: $Entity$$Type, arg1: $Player$$Type): integer
public "getHackTime"(arg0: $DroneEntity$$Type, arg1: $Player$$Type): integer
public "addPostHackInfo"(arg0: $DroneEntity$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: $Player$$Type): void
public "addPostHackInfo"(arg0: $Entity$$Type, arg1: $List$$Type, arg2: $Player$$Type): void
public "addHackInfo"(arg0: $DroneEntity$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: $Player$$Type): void
public "addHackInfo"(arg0: $Entity$$Type, arg1: $List$$Type, arg2: $Player$$Type): void
public static "prepareAttributes"(): $AttributeSupplier$Builder
public "getTargetLine"(): $ProgressingLine
public "getOldTargetLine"(): $ProgressingLine
public "getHackableId"(): $ResourceLocation
public "getHackableClass"(): $Class<($DroneEntity)>
public "setStandby"(arg0: boolean, arg1: boolean): void
public "incAttackCount"(): void
public "getAttackCount"(): integer
public "getDroneSpeed"(): double
public "onWrenched"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $InteractionHand$$Type): boolean
public "writeSpawnData"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "readSpawnData"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getLabel"(): StringJS
public "tick"(): void
public "setName"(arg0: $Component$$Type): void
public "setTarget"(arg0: $LivingEntity$$Type): void
public "getOwner"(): $Player
public "getVariable"(arg0: StringJS): $Optional<($BlockPos)>
public "setVariable"(arg0: StringJS, arg1: $BlockPos$$Type): void
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "setPos"(arg0: double, arg1: double, arg2: double): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "isInvulnerableTo"(arg0: $DamageSource$$Type): boolean
public "die"(arg0: $DamageSource$$Type): void
public "playSound"(arg0: $SoundEvent$$Type, arg1: $SoundSource$$Type, arg2: float, arg3: float): void
public "getArmorValue"(): integer
public "travel"(arg0: $Vec3$$Type): void
public "doHurtTarget"(arg0: $Entity$$Type): boolean
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(never)>): void
public "isFlying"(): boolean
public "canDrownInFluidType"(arg0: $FluidType$$Type): boolean
public "onRemovedFromLevel"(): void
public "startRiding"(arg0: $Entity$$Type, arg1: boolean): boolean
public "changeDimension"(arg0: $DimensionTransition$$Type): $Entity
public "isDescending"(): boolean
public "getFakePlayer"(): $FakePlayer
public "getInv"(): $IItemHandlerModifiable
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public "afterHackTick"(arg0: $DroneEntity$$Type): boolean
public "_afterHackTick"(arg0: $Entity$$Type): boolean
public "_getHackTime"(arg0: $Entity$$Type, arg1: $Player$$Type): integer
public "_onHackFinished"(arg0: $Entity$$Type, arg1: $Player$$Type): void
public "_addHackInfo"(arg0: $Entity$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: $Player$$Type): void
public "_addPostHackInfo"(arg0: $Entity$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: $Player$$Type): void
public "getActiveAIManager"(): $DroneAIManager
public static "asDroneBase"(arg0: $IDrone$$Type): $IDroneBase
public static "asDrone"(arg0: $IDrone$$Type): $DroneEntity
public "onVariableChanged"(arg0: StringJS, arg1: boolean): void
public "getActiveWidget"(): $IProgWidget
public static "tickLeash"<E extends $Entity>(arg0: E): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "self"(): $Entity
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
get "ownerUUID"(): $UUID
get "upgradeHandler"(): $IItemHandler
get "energyStorage"(): $IEnergyStorage
get "controllerPos"(): $BlockPos
get "airHandler"(): $BasicAirHandler
get "fluidTank"(): $FluidTank
get "droneItemHandler"(): $DroneItemHandler
get "minigun"(): $Minigun
set "deployPos"(value: $BlockPos$$Type)
get "droneColor"(): integer
get "ammoColor"(): integer
get "droneStillValid"(): boolean
get "debugger"(): $IDroneDebugger
get "deployPos"(): $BlockPos
get "droneLevel"(): $Level
get "dronePos"(): $Vec3
get "pathNavigator"(): $IPathNavigator
set "dugBlock"(value: $BlockPos$$Type)
get "fakePlayerPos"(): $Vec3
set "activeProgram"(value: $IProgWidget$$Type)
get "targetAI"(): $GoalSelector
set "carryingEntity"(value: $Entity$$Type)
get "carryingEntities"(): $List<($Entity)>
get "AIOverridden"(): boolean
get "AIManager"(): $DroneAIManager
get "logisticsManager"(): $LogisticsManager
set "logisticsManager"(value: $LogisticsManager$$Type)
get "dronePressure"(): float
get "packetTarget"(): $DronePacket$DroneTarget
get "activeWidgetIndex"(): integer
get "droneName"(): $Component
get "runningTasks"(): $List<($DroneAIManager$WrappedGoal)>
get "runningTargetAI"(): $Goal
get "dugBlock"(): $BlockPos
get "droneHeldItem"(): $ItemStack
get "targetedBlock"(): $BlockPos
get "teleportRangeLimited"(): boolean
get "laserColor"(): integer
get "accelerating"(): boolean
set "droneSpeed"(value: double)
get "slotForAmmo"(): integer
get "targetLine"(): $ProgressingLine
get "oldTargetLine"(): $ProgressingLine
get "hackableId"(): $ResourceLocation
get "hackableClass"(): $Class<($DroneEntity)>
get "attackCount"(): integer
get "droneSpeed"(): double
get "label"(): StringJS
set "name"(value: $Component$$Type)
set "target"(value: $LivingEntity$$Type)
get "owner"(): $Player
get "armorValue"(): integer
get "flying"(): boolean
get "descending"(): boolean
get "fakePlayer"(): $FakePlayer
get "inv"(): $IItemHandlerModifiable
get "activeAIManager"(): $DroneAIManager
get "activeWidget"(): $IProgWidget
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneEntity$$Type = ($DroneEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroneEntity$$Original = $DroneEntity;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidEtchingAcid$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"

export class $FluidEtchingAcid$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidEtchingAcid$Source$$Type = ($FluidEtchingAcid$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidEtchingAcid$Source$$Original = $FluidEtchingAcid$Source;}
declare module "me.desht.pneumaticcraft.common.block.ManualCompressorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ManualCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManualCompressorBlock$$Type = ($ManualCompressorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ManualCompressorBlock$$Original = $ManualCompressorBlock;}
declare module "me.desht.pneumaticcraft.common.item.DrillBitItem$DrillBitType" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Enum} from "java.lang.Enum"
import {$JackHammerItem$DigMode} from "me.desht.pneumaticcraft.common.item.JackHammerItem$DigMode"
import {$Tier} from "net.minecraft.world.item.Tier"

export class $DrillBitItem$DrillBitType extends $Enum<($DrillBitItem$DrillBitType)> {
static readonly "NETHERITE": $DrillBitItem$DrillBitType
static readonly "DIAMOND": $DrillBitItem$DrillBitType
static readonly "IRON": $DrillBitItem$DrillBitType
static readonly "COMPRESSED_IRON": $DrillBitItem$DrillBitType
static readonly "NONE": $DrillBitItem$DrillBitType

public "getTier"(): $Tier
public "getRegistryName"(): StringJS
public "getBaseEfficiency"(): integer
public "getTint"(): integer
public "getBitQuality"(): integer
public "asItemStack"(): $ItemStack
public "getBestDigType"(): $JackHammerItem$DigMode
public static "values"(): ($DrillBitItem$DrillBitType)[]
public static "valueOf"(arg0: StringJS): $DrillBitItem$DrillBitType
get "tier"(): $Tier
get "registryName"(): StringJS
get "baseEfficiency"(): integer
get "tint"(): integer
get "bitQuality"(): integer
get "bestDigType"(): $JackHammerItem$DigMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillBitItem$DrillBitType$$Type = (("none") | ("iron") | ("compressed_iron") | ("diamond") | ("netherite"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrillBitItem$DrillBitType$$Original = $DrillBitItem$DrillBitType;}
declare module "me.desht.pneumaticcraft.common.semiblock.SemiblockItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSemiblockEntity} from "me.desht.pneumaticcraft.common.entity.semiblock.AbstractSemiblockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $SemiblockItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "createEntity"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $BlockPos$$Type): $AbstractSemiblockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemiblockItem$$Type = ($SemiblockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SemiblockItem$$Original = $SemiblockItem;}
declare module "me.desht.pneumaticcraft.common.block.TagWorkbenchBlock" {
import {$DisplayTableBlock} from "me.desht.pneumaticcraft.common.block.DisplayTableBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TagWorkbenchBlock extends $DisplayTableBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagWorkbenchBlock$$Type = ($TagWorkbenchBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagWorkbenchBlock$$Original = $TagWorkbenchBlock;}
declare module "me.desht.pneumaticcraft.common.drone.LogisticsManager$LogisticsTask" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$AbstractLogisticsFrameEntity} from "me.desht.pneumaticcraft.common.entity.semiblock.AbstractLogisticsFrameEntity"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"

export class $LogisticsManager$LogisticsTask implements $Comparable$$Interface<($LogisticsManager$LogisticsTask)> {
readonly "requester": $AbstractLogisticsFrameEntity
readonly "provider": $AbstractLogisticsFrameEntity
readonly "transportingItem": $ItemStack
readonly "transportingFluid": $FluidStack

public "informRequester"(): void
public "isStillValid"(arg0: any): boolean
public "compareTo"(arg0: $LogisticsManager$LogisticsTask$$Type): integer
public "compareTo"(arg0: any): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogisticsManager$LogisticsTask$$Type = ($LogisticsManager$LogisticsTask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LogisticsManager$LogisticsTask$$Original = $LogisticsManager$LogisticsTask;}
declare module "me.desht.pneumaticcraft.common.recipes.PneumaticCraftRecipeType$CacheReloadListener" {
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"

export class $PneumaticCraftRecipeType$CacheReloadListener implements $PreparableReloadListener$$Interface {
constructor()

public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticCraftRecipeType$CacheReloadListener$$Type = ($PneumaticCraftRecipeType$CacheReloadListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PneumaticCraftRecipeType$CacheReloadListener$$Original = $PneumaticCraftRecipeType$CacheReloadListener;}
declare module "me.desht.pneumaticcraft.common.block.CreativeCompressorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreativeCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeCompressorBlock$$Type = ($CreativeCompressorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeCompressorBlock$$Original = $CreativeCompressorBlock;}
declare module "me.desht.pneumaticcraft.common.block.SpawnerExtractorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SpawnerExtractorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerExtractorBlock$$Type = ($SpawnerExtractorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnerExtractorBlock$$Original = $SpawnerExtractorBlock;}
declare module "me.desht.pneumaticcraft.common.block.DrillPipeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DrillPipeBlock extends $AbstractPneumaticCraftBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillPipeBlock$$Type = ($DrillPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrillPipeBlock$$Original = $DrillPipeBlock;}
declare module "me.desht.pneumaticcraft.common.item.IFluidCapProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IFluidHandlerItem, $IFluidHandlerItem$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"

export interface $IFluidCapProvider$$Interface {

(arg0: $ItemStack): $IFluidHandlerItem$$Type
}

export class $IFluidCapProvider implements $IFluidCapProvider$$Interface {
 "provideFluidCapability"(arg0: $ItemStack$$Type): $IFluidHandlerItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidCapProvider$$Type = ((arg0: $ItemStack) => $IFluidHandlerItem$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluidCapProvider$$Original = $IFluidCapProvider;}
declare module "me.desht.pneumaticcraft.common.entity.drone.AmadroneEntity" {
import {$AmadroneEntity$AmadronAction, $AmadroneEntity$AmadronAction$$Type} from "me.desht.pneumaticcraft.common.entity.drone.AmadroneEntity$AmadronAction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$DroneEntity, $DroneEntity$$Type} from "me.desht.pneumaticcraft.common.entity.drone.DroneEntity"
import {$IProgWidget} from "me.desht.pneumaticcraft.api.drone.IProgWidget"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$GoalSelector} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$IDroneDebugger} from "me.desht.pneumaticcraft.api.drone.debug.IDroneDebugger"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PNCUpgrade$$Type} from "me.desht.pneumaticcraft.api.upgrade.PNCUpgrade"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$IDroneBase} from "me.desht.pneumaticcraft.common.drone.IDroneBase"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $AmadroneEntity extends $DroneEntity {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
 "lastHurtByPlayerTime": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "yHeadRot": float
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
readonly "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": StringJS
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "lastHurt": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "laserExtension": float
static readonly "DEFAULT_BABY_SCALE": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": StringJS
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
 "lastHurtByPlayer": $Player
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
readonly "targetSelector": $GoalSelector
 "oldPropRotation": float
 "oldLaserExtension": float
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "propRotation": float
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "progWidgets": $List<($IProgWidget)>
 "ownerName": $Component
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
 "levelCallback": $EntityInLevelCallback
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer

constructor(arg0: $EntityType$$Type<($DroneEntity$$Type)>, arg1: $Level$$Type)

public "getUpgrades"(arg0: $PNCUpgrade$$Type): integer
public "overload"(arg0: StringJS, ...arg1: (any)[]): void
public "isTeleportRangeLimited"(): boolean
public "shouldDropAsItem"(): boolean
public "setHandlingOffer"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: StringJS, arg4: $AmadroneEntity$AmadronAction$$Type): void
public static "makeAmadrone"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $AmadroneEntity
public "getHandlingOffer"(): $ResourceLocation
public "getOfferTimes"(): integer
public "getAmadronAction"(): $AmadroneEntity$AmadronAction
public "getBuyingPlayer"(): StringJS
public "getUsedTablet"(): $ItemStack
public "shouldDropExperience"(): boolean
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "getDebugger"(): $IDroneDebugger
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "asDroneBase"(arg0: $IDrone$$Type): $IDroneBase
public static "asDrone"(arg0: $IDrone$$Type): $DroneEntity
public static "tickLeash"<E extends $Entity>(arg0: E): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "self"(): $Entity
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
get "teleportRangeLimited"(): boolean
get "handlingOffer"(): $ResourceLocation
get "offerTimes"(): integer
get "amadronAction"(): $AmadroneEntity$AmadronAction
get "buyingPlayer"(): StringJS
get "usedTablet"(): $ItemStack
get "debugger"(): $IDroneDebugger
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadroneEntity$$Type = ($AmadroneEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadroneEntity$$Original = $AmadroneEntity;}
declare module "me.desht.pneumaticcraft.common.block.entity.AbstractPneumaticCraftBlockEntity$UpgradeHandler" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BaseItemStackHandler} from "me.desht.pneumaticcraft.common.inventory.handler.BaseItemStackHandler"

export class $AbstractPneumaticCraftBlockEntity$UpgradeHandler extends $BaseItemStackHandler {
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPneumaticCraftBlockEntity$UpgradeHandler$$Type = ($AbstractPneumaticCraftBlockEntity$UpgradeHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractPneumaticCraftBlockEntity$UpgradeHandler$$Original = $AbstractPneumaticCraftBlockEntity$UpgradeHandler;}
declare module "me.desht.pneumaticcraft.common.item.MemoryStickItem$MemoryStickLocator" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Record} from "java.lang.Record"

export class $MemoryStickItem$MemoryStickLocator extends $Record {
constructor(invName: StringJS, slot: integer)

public static "playerInv"(arg0: integer): $MemoryStickItem$MemoryStickLocator
public "getMemoryStick"(arg0: $Player$$Type): $ItemStack
public "invName"(): StringJS
public static "namedInv"(arg0: StringJS, arg1: integer): $MemoryStickItem$MemoryStickLocator
public "slot"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryStickItem$MemoryStickLocator$$Type = ({"invName"?: StringJS, "slot"?: integer}) | ([invName?: StringJS, slot?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemoryStickItem$MemoryStickLocator$$Original = $MemoryStickItem$MemoryStickLocator;}
declare module "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IPneumaticCraftProbeable$$Interface} from "me.desht.pneumaticcraft.api.misc.IPneumaticCraftProbeable"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$$Interface} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$SerializableComponentsProvider$$Interface} from "me.desht.pneumaticcraft.common.block.SerializableComponentsProvider"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AbstractPneumaticCraftBlock extends $Block implements $IPneumaticWrenchable$$Interface, $IPneumaticCraftProbeable$$Interface, $SimpleWaterloggedBlock$$Interface, $SerializableComponentsProvider$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "isRotatable"(): boolean
public static "connectionProperty"(arg0: $Direction$$Type): $BooleanProperty
public "addSerializableComponents"(arg0: $List$$Type<($DataComponentType$$Type<(never)>)>): void
public "onWrenched"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $InteractionHand$$Type): boolean
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getRotation"(arg0: $BlockState$$Type): $Direction
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPneumaticCraftBlock$$Type = ($AbstractPneumaticCraftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractPneumaticCraftBlock$$Original = $AbstractPneumaticCraftBlock;}
declare module "me.desht.pneumaticcraft.common.network.DronePacket$DroneTarget" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IDroneBase} from "me.desht.pneumaticcraft.common.drone.IDroneBase"
import {$Record} from "java.lang.Record"

export class $DronePacket$DroneTarget extends $Record {
static readonly "CODEC": $Codec<($DronePacket$DroneTarget)>
static readonly "NONE": $DronePacket$DroneTarget
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($DronePacket$DroneTarget)>

constructor(idOrPos: $Either$$Type<(integer), ($BlockPos$$Type)>)

public "getDrone"(arg0: $Level$$Type): $IDroneBase
public static "forPos"(arg0: $BlockPos$$Type): $DronePacket$DroneTarget
public static "forEntityId"(arg0: integer): $DronePacket$DroneTarget
public "idOrPos"(): $Either<(integer), ($BlockPos)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "is"(arg0: $BlockPos$$Type): boolean
public "is"(arg0: $Entity$$Type): boolean
public static "none"(): $DronePacket$DroneTarget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DronePacket$DroneTarget$$Type = ({"idOrPos"?: $Either$$Type<(integer), ($BlockPos$$Type)>}) | ([idOrPos?: $Either$$Type<(integer), ($BlockPos$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DronePacket$DroneTarget$$Original = $DronePacket$DroneTarget;}
declare module "me.desht.pneumaticcraft.common.block.ProgrammerBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ProgrammerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgrammerBlock$$Type = ($ProgrammerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgrammerBlock$$Original = $ProgrammerBlock;}
declare module "me.desht.pneumaticcraft.common.item.AbstractChestUpgradeKitItem$Reinforced" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractChestUpgradeKitItem} from "me.desht.pneumaticcraft.common.item.AbstractChestUpgradeKitItem"

export class $AbstractChestUpgradeKitItem$Reinforced extends $AbstractChestUpgradeKitItem {
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
export type $AbstractChestUpgradeKitItem$Reinforced$$Type = ($AbstractChestUpgradeKitItem$Reinforced);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractChestUpgradeKitItem$Reinforced$$Original = $AbstractChestUpgradeKitItem$Reinforced;}
declare module "me.desht.pneumaticcraft.common.item.MemoryStickItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$IFluidCapProvider$$Interface} from "me.desht.pneumaticcraft.common.item.IFluidCapProvider"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ColorHandlers$ITintableItem$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ILeftClickableItem$$Interface} from "me.desht.pneumaticcraft.common.item.ILeftClickableItem"
import {$IFluidHandlerItem} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$MemoryStickItem$MemoryStickLocator$$Type} from "me.desht.pneumaticcraft.common.item.MemoryStickItem$MemoryStickLocator"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $MemoryStickItem extends $Item implements $ColorHandlers$ITintableItem$$Interface, $ILeftClickableItem$$Interface, $IFluidCapProvider$$Interface {
static readonly "XP_FLUID_CAPACITY": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "provideFluidCapability"(arg0: $ItemStack$$Type): $IFluidHandlerItem
public "onLeftClickEmpty"(arg0: $ServerPlayer$$Type): void
public static "shouldAbsorbXPOrbs"(arg0: $ItemStack$$Type): boolean
public static "cacheMemoryStickLocation"(arg0: $Player$$Type, arg1: $MemoryStickItem$MemoryStickLocator$$Type): void
public static "setAbsorbXPOrbs"(arg0: $ItemStack$$Type, arg1: boolean): void
public static "isRoomInStick"(arg0: $ItemStack$$Type): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryStickItem$$Type = ($MemoryStickItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemoryStickItem$$Original = $MemoryStickItem;}
declare module "me.desht.pneumaticcraft.common.block.AbstractAssemblyIOUnitBlock$Export" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$AbstractAssemblyIOUnitBlock} from "me.desht.pneumaticcraft.common.block.AbstractAssemblyIOUnitBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractAssemblyIOUnitBlock$Export extends $AbstractAssemblyIOUnitBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAssemblyIOUnitBlock$Export$$Type = ($AbstractAssemblyIOUnitBlock$Export);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractAssemblyIOUnitBlock$Export$$Original = $AbstractAssemblyIOUnitBlock$Export;}
declare module "me.desht.pneumaticcraft.common.drone.progwidgets.ProgWidget$PositionFields" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IProgWidget$$Type} from "me.desht.pneumaticcraft.api.drone.IProgWidget"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $ProgWidget$PositionFields extends $Record {
static readonly "CODEC": $Codec<($ProgWidget$PositionFields)>
static readonly "DEFAULT": $ProgWidget$PositionFields
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ProgWidget$PositionFields)>

constructor(x: integer, y: integer)

public static "rightParam"(arg0: $IProgWidget$$Type, arg1: integer): $ProgWidget$PositionFields
public static "leftParam"(arg0: $IProgWidget$$Type, arg1: integer): $ProgWidget$PositionFields
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): integer
public "y"(): integer
public static "below"(arg0: $IProgWidget$$Type): $ProgWidget$PositionFields
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgWidget$PositionFields$$Type = ({"x"?: integer, "y"?: integer}) | ([x?: integer, y?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgWidget$PositionFields$$Original = $ProgWidget$PositionFields;}
declare module "me.desht.pneumaticcraft.common.block.VacuumTrapBlock$ItemBlockVacuumTrap" {
import {$VacuumTrapBlock$$Type} from "me.desht.pneumaticcraft.common.block.VacuumTrapBlock"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $VacuumTrapBlock$ItemBlockVacuumTrap extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $VacuumTrapBlock$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
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
export type $VacuumTrapBlock$ItemBlockVacuumTrap$$Type = ($VacuumTrapBlock$ItemBlockVacuumTrap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VacuumTrapBlock$ItemBlockVacuumTrap$$Original = $VacuumTrapBlock$ItemBlockVacuumTrap;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.FluidMixerRecipeImpl$IFactory" {
import {$FluidMixerRecipe, $FluidMixerRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.FluidMixerRecipe"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SizedFluidIngredient, $SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $FluidMixerRecipeImpl$IFactory$$Interface<T extends $FluidMixerRecipe> {

(arg0: $SizedFluidIngredient, arg1: $SizedFluidIngredient, arg2: $FluidStack, arg3: $ItemStack, arg4: float, arg5: integer): T
}

export class $FluidMixerRecipeImpl$IFactory<T extends $FluidMixerRecipe> implements $FluidMixerRecipeImpl$IFactory$$Interface {
 "create"(arg0: $SizedFluidIngredient$$Type, arg1: $SizedFluidIngredient$$Type, arg2: $FluidStack$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMixerRecipeImpl$IFactory$$Type<T> = ((arg0: $SizedFluidIngredient, arg1: $SizedFluidIngredient, arg2: $FluidStack, arg3: $ItemStack, arg4: float, arg5: integer) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidMixerRecipeImpl$IFactory$$Original<T> = $FluidMixerRecipeImpl$IFactory<(T)>;}
declare module "me.desht.pneumaticcraft.common.util.playerfilter.PlayerFilter" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerFilter$Op, $PlayerFilter$Op$$Type} from "me.desht.pneumaticcraft.common.util.playerfilter.PlayerFilter$Op"
import {$IPlayerFilter$$Interface} from "me.desht.pneumaticcraft.api.misc.IPlayerFilter"
import {$IPlayerMatcher, $IPlayerMatcher$$Type} from "me.desht.pneumaticcraft.api.misc.IPlayerMatcher"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $PlayerFilter extends $Record implements $IPlayerFilter$$Interface {
static readonly "NO": $PlayerFilter
static readonly "CODEC": $Codec<($PlayerFilter)>
static readonly "YES": $PlayerFilter
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PlayerFilter)>

constructor(op: $PlayerFilter$Op$$Type, matchers: $List$$Type<($IPlayerMatcher$$Type)>)

public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $PlayerFilter
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "matchAll"(): boolean
public "matchers"(): $List<($IPlayerMatcher)>
public "getDescription"(arg0: $Player$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $Player$$Type): boolean
public "test"(arg0: any): boolean
public "op"(): $PlayerFilter$Op
public "isReal"(): boolean
public static "not"<T>(arg0: $Predicate$$Type<($Player)>): $Predicate<($Player)>
public static "isEqual"<T>(arg0: any): $Predicate<($Player)>
public "negate"(): $Predicate<($Player)>
public "and"(arg0: $Predicate$$Type<($Player)>): $Predicate<($Player)>
public "or"(arg0: $Predicate$$Type<($Player)>): $Predicate<($Player)>
get "real"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerFilter$$Type = ({"op"?: $PlayerFilter$Op$$Type, "matchers"?: $List$$Type<($IPlayerMatcher$$Type)>}) | ([op?: $PlayerFilter$Op$$Type, matchers?: $List$$Type<($IPlayerMatcher$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerFilter$$Original = $PlayerFilter;}
declare module "me.desht.pneumaticcraft.common.item.BandageItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $BandageItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BandageItem$$Type = ($BandageItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BandageItem$$Original = $BandageItem;}
declare module "me.desht.pneumaticcraft.common.item.minigun.ExplosiveGunAmmoItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AbstractGunAmmoItem} from "me.desht.pneumaticcraft.common.item.minigun.AbstractGunAmmoItem"
import {$Minigun$$Type} from "me.desht.pneumaticcraft.common.minigun.Minigun"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ExplosiveGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "onTargetHit"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type, arg2: $Entity$$Type): integer
public "getAmmoColor"(arg0: $ItemStack$$Type): integer
public "onBlockHit"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type, arg2: $BlockHitResult$$Type): integer
public "getDamageMultiplier"(arg0: $Entity$$Type, arg1: $ItemStack$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosiveGunAmmoItem$$Type = ($ExplosiveGunAmmoItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExplosiveGunAmmoItem$$Original = $ExplosiveGunAmmoItem;}
declare module "me.desht.pneumaticcraft.common.block.entity.RedstoneController$Saved" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $RedstoneController$Saved extends $Record {
static readonly "CODEC": $Codec<($RedstoneController$Saved)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RedstoneController$Saved)>
static readonly "DEFAULT": $RedstoneController$Saved

constructor(mode: integer)

public static "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $RedstoneController$Saved
public "mode"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "toNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneController$Saved$$Type = ({"mode"?: integer}) | ([mode?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneController$Saved$$Original = $RedstoneController$Saved;}
declare module "me.desht.pneumaticcraft.common.thirdparty.immersiveengineering.HempHarvestHandler" {
import {$HarvestHandlerCactusLike} from "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCactusLike"

export class $HempHarvestHandler extends $HarvestHandlerCactusLike {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HempHarvestHandler$$Type = ($HempHarvestHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HempHarvestHandler$$Original = $HempHarvestHandler;}
declare module "me.desht.pneumaticcraft.common.block.RefineryOutputBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IBlockComparatorSupport$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockComparatorSupport"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $RefineryOutputBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface, $IBlockComparatorSupport$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryOutputBlock$$Type = ($RefineryOutputBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefineryOutputBlock$$Original = $RefineryOutputBlock;}
declare module "me.desht.pneumaticcraft.common.block.ElevatorCallerBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$AbstractCamouflageBlock} from "me.desht.pneumaticcraft.common.block.AbstractCamouflageBlock"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ElevatorCallerBlock extends $AbstractCamouflageBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getUncamouflagedShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "isRotatable"(): boolean
public static "setSurroundingElevators"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElevatorCallerBlock$$Type = ($ElevatorCallerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElevatorCallerBlock$$Original = $ElevatorCallerBlock;}
declare module "me.desht.pneumaticcraft.common.item.CompressedIronArmorItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Supplier} from "java.util.function.Supplier"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $CompressedIronArmorItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type)

public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressedIronArmorItem$$Type = ($CompressedIronArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompressedIronArmorItem$$Original = $CompressedIronArmorItem;}
declare module "me.desht.pneumaticcraft.common.drone.progwidgets.IVariableWidget" {
import {$Set$$Type} from "java.util.Set"
import {$DroneAIManager$$Type} from "me.desht.pneumaticcraft.common.drone.ai.DroneAIManager"

export interface $IVariableWidget$$Interface {
set "AIManager"(value: $DroneAIManager$$Type)
}

export class $IVariableWidget implements $IVariableWidget$$Interface {
 "addVariables"(arg0: $Set$$Type<(StringJS)>): void
 "setAIManager"(arg0: $DroneAIManager$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableWidget$$Type = ($IVariableWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVariableWidget$$Original = $IVariableWidget;}
declare module "me.desht.pneumaticcraft.common.block.FluidTankBlock$ItemBlockFluidTank" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$IFluidCapProvider$$Interface} from "me.desht.pneumaticcraft.common.item.IFluidCapProvider"
import {$IFluidHandlerItem} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IFluidItemRenderInfoProvider} from "me.desht.pneumaticcraft.client.render.fluid.IFluidItemRenderInfoProvider"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$IFluidRendered$$Interface} from "me.desht.pneumaticcraft.common.item.IFluidRendered"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $FluidTankBlock$ItemBlockFluidTank extends $BlockItem implements $IFluidRendered$$Interface, $IFluidCapProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public "provideFluidCapability"(arg0: $ItemStack$$Type): $IFluidHandlerItem
public "getFluidItemRenderer"(): $IFluidItemRenderInfoProvider
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "fluidItemRenderer"(): $IFluidItemRenderInfoProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankBlock$ItemBlockFluidTank$$Type = ($FluidTankBlock$ItemBlockFluidTank);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidTankBlock$ItemBlockFluidTank$$Original = $FluidTankBlock$ItemBlockFluidTank;}
declare module "me.desht.pneumaticcraft.common.block.entity.AbstractTickingBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$AbstractPneumaticCraftBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.AbstractPneumaticCraftBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractTickingBlockEntity extends $AbstractPneumaticCraftBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: integer)
constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tickClient"(): void
public "tickServer"(): void
public "tickCommonPre"(): void
public "tickCommonPost"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTickingBlockEntity$$Type = ($AbstractTickingBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractTickingBlockEntity$$Original = $AbstractTickingBlockEntity;}
declare module "me.desht.pneumaticcraft.common.drone.IDroneBase" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDrone$$Type, $IDrone$$Interface} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$UUID} from "java.util.UUID"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$DroneItemHandler} from "me.desht.pneumaticcraft.common.util.fakeplayer.DroneItemHandler"
import {$FakePlayer} from "net.neoforged.neoforge.common.util.FakePlayer"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$DroneEntity} from "me.desht.pneumaticcraft.common.entity.drone.DroneEntity"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IProgWidget, $IProgWidget$$Type} from "me.desht.pneumaticcraft.api.drone.IProgWidget"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$DronePacket$DroneTarget} from "me.desht.pneumaticcraft.common.network.DronePacket$DroneTarget"
import {$GoalSelector} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IPathNavigator} from "me.desht.pneumaticcraft.api.drone.IPathNavigator"
import {$ProgWidgetType$$Type} from "me.desht.pneumaticcraft.api.drone.ProgWidgetType"
import {$IDroneDebugger} from "me.desht.pneumaticcraft.api.drone.debug.IDroneDebugger"
import {$LogisticsManager, $LogisticsManager$$Type} from "me.desht.pneumaticcraft.common.drone.LogisticsManager"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$DroneAIManager} from "me.desht.pneumaticcraft.common.drone.ai.DroneAIManager"
import {$PNCUpgrade$$Type} from "me.desht.pneumaticcraft.api.upgrade.PNCUpgrade"
import {$FluidTank} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"

export interface $IDroneBase$$Interface extends $IDrone$$Interface {
get "droneItemHandler"(): $DroneItemHandler
get "activeAIManager"(): $DroneAIManager
get "fakePlayerPos"(): $Vec3
get "AIManager"(): $DroneAIManager
get "logisticsManager"(): $LogisticsManager
set "logisticsManager"(value: $LogisticsManager$$Type)
get "packetTarget"(): $DronePacket$DroneTarget
get "ownerUUID"(): $UUID
get "energyStorage"(): $IEnergyStorage
get "controllerPos"(): $BlockPos
get "fluidTank"(): $FluidTank
get "droneStillValid"(): boolean
get "debugger"(): $IDroneDebugger
get "deployPos"(): $BlockPos
get "droneLevel"(): $Level
get "dronePos"(): $Vec3
get "pathNavigator"(): $IPathNavigator
set "dugBlock"(value: $BlockPos$$Type)
get "progWidgets"(): $List<($IProgWidget)>
set "activeProgram"(value: $IProgWidget$$Type)
get "targetAI"(): $GoalSelector
set "carryingEntity"(value: $Entity$$Type)
get "carryingEntities"(): $List<($Entity)>
get "AIOverridden"(): boolean
get "dronePressure"(): float
get "activeWidgetIndex"(): integer
get "droneName"(): $Component
get "activeWidget"(): $IProgWidget
get "label"(): StringJS
set "name"(value: $Component$$Type)
get "owner"(): $Player
get "fakePlayer"(): $FakePlayer
get "inv"(): $IItemHandlerModifiable
}

export class $IDroneBase implements $IDroneBase$$Interface {
 "getDroneItemHandler"(): $DroneItemHandler
 "getActiveAIManager"(): $DroneAIManager
 "getFakePlayerPos"(): $Vec3
 "getAIManager"(): $DroneAIManager
 "getLogisticsManager"(): $LogisticsManager
 "setLogisticsManager"(arg0: $LogisticsManager$$Type): void
 "getPacketTarget"(): $DronePacket$DroneTarget
static "asDroneBase"(arg0: $IDrone$$Type): $IDroneBase
static "asDrone"(arg0: $IDrone$$Type): $DroneEntity
 "dropItem"(arg0: $ItemStack$$Type): void
 "getOwnerUUID"(): $UUID
 "getEnergyStorage"(): $IEnergyStorage
 "getControllerPos"(): $BlockPos
 "getFluidTank"(): $FluidTank
 "getUpgrades"(arg0: $PNCUpgrade$$Type): integer
 "setEmittingRedstone"(arg0: $Direction$$Type, arg1: integer): void
 "getEmittingRedstone"(arg0: $Direction$$Type): integer
 "isDroneStillValid"(): boolean
 "getDebugger"(): $IDroneDebugger
 "onVariableChanged"(arg0: StringJS, arg1: boolean): void
 "getDeployPos"(): $BlockPos
 "getDroneLevel"(): $Level
 "getDronePos"(): $Vec3
 "getPathNavigator"(): $IPathNavigator
 "sendWireframeToClient"(arg0: $BlockPos$$Type): void
 "isBlockValidPathfindBlock"(arg0: $BlockPos$$Type): boolean
 "setDugBlock"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): void
 "setDugBlock"(arg0: $BlockPos$$Type): void
 "getProgWidgets"(): $List<($IProgWidget)>
 "setActiveProgram"(arg0: $IProgWidget$$Type): void
 "isProgramApplicable"(arg0: $ProgWidgetType$$Type<(never)>): boolean
 "getTargetAI"(): $GoalSelector
 "setCarryingEntity"(arg0: $Entity$$Type): void
 "getCarryingEntities"(): $List<($Entity)>
 "isAIOverridden"(): boolean
 "onItemPickupEvent"(arg0: $ItemEntity$$Type, arg1: integer): void
 "overload"(arg0: StringJS, ...arg1: (any)[]): void
 "updateLabel"(): void
 "addAirToDrone"(arg0: integer): void
 "canMoveIntoFluid"(arg0: $Fluid$$Type): boolean
 "getDronePressure"(): float
 "getActiveWidgetIndex"(): integer
 "getDroneName"(): $Component
 "storeTrackerData"(arg0: $ItemStack$$Type): void
 "getActiveWidget"(): $IProgWidget
 "resetAttackCount"(): void
 "getLabel"(): StringJS
 "setName"(arg0: $Component$$Type): void
 "getOwner"(): $Player
 "playSound"(arg0: $SoundEvent$$Type, arg1: $SoundSource$$Type, arg2: float, arg3: float): void
 "getFakePlayer"(): $FakePlayer
 "getInv"(): $IItemHandlerModifiable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDroneBase$$Type = ($IDroneBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDroneBase$$Original = $IDroneBase;}
declare module "me.desht.pneumaticcraft.common.thirdparty.computer_common.LuaMethodRegistry" {
import {$ILuaMethodProvider$$Type} from "me.desht.pneumaticcraft.common.block.entity.ILuaMethodProvider"
import {$ILuaMethod, $ILuaMethod$$Type} from "me.desht.pneumaticcraft.common.thirdparty.computer_common.ILuaMethod"

export class $LuaMethodRegistry {
constructor(arg0: $ILuaMethodProvider$$Type)

public "registerLuaMethod"(arg0: $ILuaMethod$$Type): void
public "getMethod"(arg0: integer): $ILuaMethod
public "getMethod"(arg0: StringJS): $ILuaMethod
public "getMethodNames"(): (StringJS)[]
get "methodNames"(): (StringJS)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaMethodRegistry$$Type = ($LuaMethodRegistry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LuaMethodRegistry$$Original = $LuaMethodRegistry;}
declare module "me.desht.pneumaticcraft.common.recipes.other.HeatPropertiesRecipeImpl$IFactory" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HeatPropertiesRecipe$Transforms, $HeatPropertiesRecipe$Transforms$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.HeatPropertiesRecipe$Transforms"
import {$HeatPropertiesRecipe, $HeatPropertiesRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.HeatPropertiesRecipe"

export interface $HeatPropertiesRecipeImpl$IFactory$$Interface<T extends $HeatPropertiesRecipe> {

(arg0: $Block, arg1: $HeatPropertiesRecipe$Transforms, arg2: $Optional<(integer)>, arg3: integer, arg4: $Optional<(double)>, arg5: $Map<(StringJS), (StringJS)>, arg6: StringJS): T
}

export class $HeatPropertiesRecipeImpl$IFactory<T extends $HeatPropertiesRecipe> implements $HeatPropertiesRecipeImpl$IFactory$$Interface {
 "create"(arg0: $Block$$Type, arg1: $HeatPropertiesRecipe$Transforms$$Type, arg2: (integer)?, arg3: integer, arg4: (double)?, arg5: $Map$$Type<(StringJS), (StringJS)>, arg6: StringJS): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatPropertiesRecipeImpl$IFactory$$Type<T> = ((arg0: $Block, arg1: $HeatPropertiesRecipe$Transforms, arg2: $Optional<(integer)>, arg3: integer, arg4: $Optional<(double)>, arg5: $Map<(StringJS), (StringJS)>, arg6: StringJS) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatPropertiesRecipeImpl$IFactory$$Original<T> = $HeatPropertiesRecipeImpl$IFactory<(T)>;}
declare module "me.desht.pneumaticcraft.common.item.MicromissilesItem$FireMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ITranslatableEnum$$Interface} from "me.desht.pneumaticcraft.api.misc.ITranslatableEnum"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $MicromissilesItem$FireMode extends $Enum<($MicromissilesItem$FireMode)> implements $ITranslatableEnum$$Interface, $StringRepresentable$$Interface {
static readonly "DUMB": $MicromissilesItem$FireMode
static readonly "SMART": $MicromissilesItem$FireMode

public "getTranslationKey"(): StringJS
public static "values"(): ($MicromissilesItem$FireMode)[]
public static "valueOf"(arg0: StringJS): $MicromissilesItem$FireMode
public static "fromString"(arg0: StringJS): $MicromissilesItem$FireMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "translationKey"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicromissilesItem$FireMode$$Type = (("smart") | ("dumb"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MicromissilesItem$FireMode$$Original = $MicromissilesItem$FireMode;}
declare module "me.desht.pneumaticcraft.common.block.SmartChestBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IBlockComparatorSupport$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockComparatorSupport"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SmartChestBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface, $IBlockComparatorSupport$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "addSerializableComponents"(arg0: $List$$Type<($DataComponentType$$Type<(never)>)>): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartChestBlock$$Type = ($SmartChestBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartChestBlock$$Original = $SmartChestBlock;}
declare module "me.desht.pneumaticcraft.common.block.LiquidHopperBlock$ItemBlockLiquidHopper" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$IFluidCapProvider$$Interface} from "me.desht.pneumaticcraft.common.item.IFluidCapProvider"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$IFluidRendered$$Interface} from "me.desht.pneumaticcraft.common.item.IFluidRendered"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ColorHandlers$ITintableItem$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableItem"
import {$IFluidHandlerItem} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$IFluidItemRenderInfoProvider} from "me.desht.pneumaticcraft.client.render.fluid.IFluidItemRenderInfoProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $LiquidHopperBlock$ItemBlockLiquidHopper extends $BlockItem implements $ColorHandlers$ITintableItem$$Interface, $IFluidRendered$$Interface, $IFluidCapProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "provideFluidCapability"(arg0: $ItemStack$$Type): $IFluidHandlerItem
public "getFluidItemRenderer"(): $IFluidItemRenderInfoProvider
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "fluidItemRenderer"(): $IFluidItemRenderInfoProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidHopperBlock$ItemBlockLiquidHopper$$Type = ($LiquidHopperBlock$ItemBlockLiquidHopper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidHopperBlock$ItemBlockLiquidHopper$$Original = $LiquidHopperBlock$ItemBlockLiquidHopper;}
declare module "me.desht.pneumaticcraft.common.entity.semiblock.AbstractLogisticsFrameEntity$ItemFilterHandler" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $AbstractLogisticsFrameEntity$ItemFilterHandler extends $ItemStackHandler {
public "isEmpty"(): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLogisticsFrameEntity$ItemFilterHandler$$Type = ($AbstractLogisticsFrameEntity$ItemFilterHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractLogisticsFrameEntity$ItemFilterHandler$$Original = $AbstractLogisticsFrameEntity$ItemFilterHandler;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.AssemblyRecipeImpl$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AssemblyRecipeImpl$IFactory$$Type} from "me.desht.pneumaticcraft.common.recipes.machine.AssemblyRecipeImpl$IFactory"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$AssemblyRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.AssemblyRecipe"

export class $AssemblyRecipeImpl$Serializer<T extends $AssemblyRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $AssemblyRecipeImpl$IFactory$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyRecipeImpl$Serializer$$Type<T> = ($AssemblyRecipeImpl$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyRecipeImpl$Serializer$$Original<T> = $AssemblyRecipeImpl$Serializer<(T)>;}
declare module "me.desht.pneumaticcraft.common.recipes.amadron.OfferType" {
import {$Optional} from "java.util.Optional"
import {$Enum} from "java.lang.Enum"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AmadronOffer, $AmadronOffer$$Type} from "me.desht.pneumaticcraft.common.recipes.amadron.AmadronOffer"

export class $OfferType extends $Enum<($OfferType)> {
static readonly "PLAYER": $OfferType
static readonly "RECIPE": $OfferType
static readonly "VILLAGER": $OfferType

public static "values"(): ($OfferType)[]
public static "valueOf"(arg0: StringJS): $OfferType
public "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $AmadronOffer$$Type): void
public "read"(arg0: $RegistryFriendlyByteBuf$$Type): $Optional<($AmadronOffer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfferType$$Type = (("recipe") | ("villager") | ("player"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OfferType$$Original = $OfferType;}
declare module "me.desht.pneumaticcraft.common.amadron.ImmutableBasket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$ShoppingBasket} from "me.desht.pneumaticcraft.common.amadron.ShoppingBasket"

export class $ImmutableBasket extends $ShoppingBasket {
static readonly "CODEC": $Codec<($ImmutableBasket)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ImmutableBasket)>

public "toMutable"(): $ShoppingBasket
public "toImmutable"(): $ImmutableBasket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableBasket$$Type = ($ImmutableBasket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableBasket$$Original = $ImmutableBasket;}
declare module "me.desht.pneumaticcraft.common.block.entity.processing.AssemblyDrillBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AssemblyProgram$EnumMachine} from "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram$EnumMachine"
import {$AbstractAssemblyRobotBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.processing.AbstractAssemblyRobotBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AssemblyDrillBlockEntity extends $AbstractAssemblyRobotBlockEntity {
readonly "oldAngles": (float)[]
readonly "angles": (float)[]
 "oldDrillRotation": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "drillRotation": float

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickServer"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isIdle"(): boolean
public "tickCommonPre"(): void
public "hasItemCapability"(): boolean
public "getAssemblyType"(): $AssemblyProgram$EnumMachine
public "canMoveToDiagonalNeighbours"(): boolean
public "goDrilling"(): void
public "reset"(): boolean
get "idle"(): boolean
get "assemblyType"(): $AssemblyProgram$EnumMachine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyDrillBlockEntity$$Type = ($AssemblyDrillBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyDrillBlockEntity$$Original = $AssemblyDrillBlockEntity;}
declare module "me.desht.pneumaticcraft.common.inventory.AmadronMenu$EnumProblemState" {
import {$Enum} from "java.lang.Enum"
import {$ITranslatableEnum$$Interface} from "me.desht.pneumaticcraft.api.misc.ITranslatableEnum"

export class $AmadronMenu$EnumProblemState extends $Enum<($AmadronMenu$EnumProblemState)> implements $ITranslatableEnum$$Interface {
static readonly "TOO_MANY_ITEMS": $AmadronMenu$EnumProblemState
static readonly "NOT_ENOUGH_ITEMS": $AmadronMenu$EnumProblemState
static readonly "NO_INVENTORY": $AmadronMenu$EnumProblemState
static readonly "NOT_ENOUGH_FLUID": $AmadronMenu$EnumProblemState
static readonly "OUT_OF_STOCK": $AmadronMenu$EnumProblemState
static readonly "NOT_ENOUGH_STOCK": $AmadronMenu$EnumProblemState
static readonly "TOO_MUCH_FLUID": $AmadronMenu$EnumProblemState
static readonly "NO_PROBLEMS": $AmadronMenu$EnumProblemState
static readonly "NOT_ENOUGH_ITEM_SPACE": $AmadronMenu$EnumProblemState
static readonly "NOT_ENOUGH_FLUID_SPACE": $AmadronMenu$EnumProblemState

public "getTranslationKey"(): StringJS
public "addProblem"(arg0: $AmadronMenu$EnumProblemState$$Type): $AmadronMenu$EnumProblemState
public static "values"(): ($AmadronMenu$EnumProblemState)[]
public static "valueOf"(arg0: StringJS): $AmadronMenu$EnumProblemState
get "translationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronMenu$EnumProblemState$$Type = (("no_problems") | ("no_inventory") | ("not_enough_item_space") | ("not_enough_fluid_space") | ("not_enough_items") | ("not_enough_fluid") | ("out_of_stock") | ("not_enough_stock") | ("too_many_items") | ("too_much_fluid"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadronMenu$EnumProblemState$$Original = $AmadronMenu$EnumProblemState;}
declare module "me.desht.pneumaticcraft.common.block.PressureTubeBlock$TubeHitInfo$PartType" {
import {$Enum} from "java.lang.Enum"

export class $PressureTubeBlock$TubeHitInfo$PartType extends $Enum<($PressureTubeBlock$TubeHitInfo$PartType)> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureTubeBlock$TubeHitInfo$PartType$$Type = (("tube") | ("module"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureTubeBlock$TubeHitInfo$PartType$$Original = $PressureTubeBlock$TubeHitInfo$PartType;}
declare module "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerAbstractCrop" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$HarvestHandler} from "me.desht.pneumaticcraft.api.harvesting.HarvestHandler"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HarvestHandlerAbstractCrop extends $HarvestHandler {
constructor(arg0: $Predicate$$Type<($BlockState)>)

public "canHarvest"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): boolean
public "harvestAndReplant"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandlerAbstractCrop$$Type = ($HarvestHandlerAbstractCrop);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandlerAbstractCrop$$Original = $HarvestHandlerAbstractCrop;}
declare module "me.desht.pneumaticcraft.common.recipes.amadron.AmadronPlayerOffer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IPlayerFilter} from "me.desht.pneumaticcraft.api.misc.IPlayerFilter"
import {$AmadronTradeResource$$Type} from "me.desht.pneumaticcraft.api.crafting.AmadronTradeResource"
import {$UUID} from "java.util.UUID"
import {$OfferType} from "me.desht.pneumaticcraft.common.recipes.amadron.OfferType"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerFilter$$Type} from "me.desht.pneumaticcraft.common.util.playerfilter.PlayerFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$AmadronOffer} from "me.desht.pneumaticcraft.common.recipes.amadron.AmadronOffer"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $AmadronPlayerOffer extends $AmadronOffer {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AmadronPlayerOffer)>

constructor(arg0: $ResourceLocation$$Type, arg1: $AmadronTradeResource$$Type, arg2: $AmadronTradeResource$$Type, arg3: $Player$$Type)
constructor(arg0: $ResourceLocation$$Type, arg1: $AmadronTradeResource$$Type, arg2: $AmadronTradeResource$$Type, arg3: $Player$$Type, arg4: $PlayerFilter$$Type, arg5: $PlayerFilter$$Type)

public "getPlayerId"(): $UUID
public "isRemovableBy"(arg0: $Player$$Type): boolean
public "returnStock"(): void
public "getVendorName"(): $Component
public "getOfferType"(): $OfferType
public "setProvidingPosition"(arg0: $GlobalPos$$Type): $AmadronPlayerOffer
public "setReturningPosition"(arg0: $GlobalPos$$Type): $AmadronPlayerOffer
public "getReversedOffer"(): $AmadronPlayerOffer
public "updatePlayerId"(): void
public "payout"(): boolean
public "getProvidingTileEntity"(): $BlockEntity
public "getProvidingPos"(): $GlobalPos
public static "playerOfferFromBuf"(arg0: $RegistryFriendlyByteBuf$$Type): $AmadronPlayerOffer
public "addPayment"(arg0: integer): void
public "onTrade"(arg0: integer, arg1: StringJS): void
public "notifyRestock"(): void
public static "getReversedId"(arg0: $ResourceLocation$$Type): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "fromJson"(arg0: $JsonObject$$Type): $AmadronPlayerOffer
public "toJson"(): $JsonObject
public "equivalentTo"(arg0: $AmadronPlayerOffer$$Type): boolean
public "getBlacklist"(): $IPlayerFilter
get "playerId"(): $UUID
get "vendorName"(): $Component
get "offerType"(): $OfferType
set "providingPosition"(value: $GlobalPos$$Type)
set "returningPosition"(value: $GlobalPos$$Type)
get "reversedOffer"(): $AmadronPlayerOffer
get "providingTileEntity"(): $BlockEntity
get "providingPos"(): $GlobalPos
get "blacklist"(): $IPlayerFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronPlayerOffer$$Type = ($AmadronPlayerOffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadronPlayerOffer$$Original = $AmadronPlayerOffer;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidKerosene$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidKerosene$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidKerosene$Flowing$$Type = ($FluidKerosene$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidKerosene$Flowing$$Original = $FluidKerosene$Flowing;}
declare module "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCropLike" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$HarvestHandlerAbstractCrop} from "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerAbstractCrop"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HarvestHandlerCropLike extends $HarvestHandlerAbstractCrop {
constructor(arg0: $Predicate$$Type<($BlockState)>, arg1: $IntegerProperty$$Type, arg2: $Predicate$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandlerCropLike$$Type = ($HarvestHandlerCropLike);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandlerCropLike$$Original = $HarvestHandlerCropLike;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidBiodiesel$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidBiodiesel$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBiodiesel$Flowing$$Type = ($FluidBiodiesel$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidBiodiesel$Flowing$$Original = $FluidBiodiesel$Flowing;}
declare module "me.desht.pneumaticcraft.common.block.AdvancedLiquidCompressorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LiquidCompressorBlock} from "me.desht.pneumaticcraft.common.block.LiquidCompressorBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AdvancedLiquidCompressorBlock extends $LiquidCompressorBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedLiquidCompressorBlock$$Type = ($AdvancedLiquidCompressorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancedLiquidCompressorBlock$$Original = $AdvancedLiquidCompressorBlock;}
declare module "me.desht.pneumaticcraft.common.block.PressureChamberValveBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IBlockPressureChamber$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockPressureChamber"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PressureChamberValveBlock extends $AbstractPneumaticCraftBlock implements $IBlockPressureChamber$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "pressureChamberBlockProps"(): $BlockBehaviour$Properties
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberValveBlock$$Type = ($PressureChamberValveBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureChamberValveBlock$$Original = $PressureChamberValveBlock;}
declare module "me.desht.pneumaticcraft.common.recipes.other.FuelQualityRecipeImpl$IFactory" {
import {$FuelQualityRecipe, $FuelQualityRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.FuelQualityRecipe"
import {$FluidIngredient, $FluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"

export interface $FuelQualityRecipeImpl$IFactory$$Interface<T extends $FuelQualityRecipe> {

(arg0: $FluidIngredient, arg1: integer, arg2: float): T
}

export class $FuelQualityRecipeImpl$IFactory<T extends $FuelQualityRecipe> implements $FuelQualityRecipeImpl$IFactory$$Interface {
 "create"(arg0: $FluidIngredient$$Type, arg1: integer, arg2: float): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelQualityRecipeImpl$IFactory$$Type<T> = ((arg0: $FluidIngredient, arg1: integer, arg2: float) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelQualityRecipeImpl$IFactory$$Original<T> = $FuelQualityRecipeImpl$IFactory<(T)>;}
declare module "me.desht.pneumaticcraft.common.item.NonDespawningItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $NonDespawningItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()
constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonDespawningItem$$Type = ($NonDespawningItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonDespawningItem$$Original = $NonDespawningItem;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.PressureChamberRecipeImpl$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PressureChamberRecipeImpl$IFactory$$Type} from "me.desht.pneumaticcraft.common.recipes.machine.PressureChamberRecipeImpl$IFactory"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PressureChamberRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PressureChamberRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $PressureChamberRecipeImpl$Serializer<T extends $PressureChamberRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $PressureChamberRecipeImpl$IFactory$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberRecipeImpl$Serializer$$Type<T> = ($PressureChamberRecipeImpl$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureChamberRecipeImpl$Serializer$$Original<T> = $PressureChamberRecipeImpl$Serializer<(T)>;}
declare module "me.desht.pneumaticcraft.common.block.AirCompressorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AirCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirCompressorBlock$$Type = ($AirCompressorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AirCompressorBlock$$Original = $AirCompressorBlock;}
declare module "me.desht.pneumaticcraft.common.block.entity.processing.IAssemblyMachine" {
import {$AssemblyProgram$EnumMachine} from "me.desht.pneumaticcraft.common.recipes.assembly.AssemblyProgram$EnumMachine"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IAssemblyMachine$$Interface {
get "idle"(): boolean
set "controllerPos"(value: $BlockPos$$Type)
get "assemblyType"(): $AssemblyProgram$EnumMachine
set "speed"(value: float)
}

export class $IAssemblyMachine implements $IAssemblyMachine$$Interface {
 "isIdle"(): boolean
 "setControllerPos"(arg0: $BlockPos$$Type): void
 "getAssemblyType"(): $AssemblyProgram$EnumMachine
 "setSpeed"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAssemblyMachine$$Type = ($IAssemblyMachine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAssemblyMachine$$Original = $IAssemblyMachine;}
declare module "me.desht.pneumaticcraft.common.block.AirCannonBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AirCannonBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirCannonBlock$$Type = ($AirCannonBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AirCannonBlock$$Original = $AirCannonBlock;}
declare module "me.desht.pneumaticcraft.common.block.PlasticBrickBlock$ItemPlasticBrick" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$PlasticBrickBlock$$Type} from "me.desht.pneumaticcraft.common.block.PlasticBrickBlock"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$ICustomTooltipName$$Interface} from "me.desht.pneumaticcraft.common.item.ICustomTooltipName"

export class $PlasticBrickBlock$ItemPlasticBrick extends $BlockItem implements $ICustomTooltipName$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $PlasticBrickBlock$$Type)

public "getCustomTooltipTranslationKey"(): StringJS
public static "getTranslationKey"(arg0: $ItemStack$$Type, arg1: boolean): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "customTooltipTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlasticBrickBlock$ItemPlasticBrick$$Type = ($PlasticBrickBlock$ItemPlasticBrick);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlasticBrickBlock$ItemPlasticBrick$$Original = $PlasticBrickBlock$ItemPlasticBrick;}
declare module "me.desht.pneumaticcraft.common.item.AirCanisterItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AirCanisterItem$CanisterType$$Type} from "me.desht.pneumaticcraft.common.item.AirCanisterItem$CanisterType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PressurizableItem} from "me.desht.pneumaticcraft.common.item.PressurizableItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AirCanisterItem$ChargeMode} from "me.desht.pneumaticcraft.common.item.AirCanisterItem$ChargeMode"

export class $AirCanisterItem extends $PressurizableItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AirCanisterItem$CanisterType$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isFoil"(arg0: $ItemStack$$Type): boolean
public static "getChargeMode"(arg0: $ItemStack$$Type): $AirCanisterItem$ChargeMode
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirCanisterItem$$Type = ($AirCanisterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AirCanisterItem$$Original = $AirCanisterItem;}
declare module "me.desht.pneumaticcraft.common.block.AbstractAssemblyIOUnitBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractAssemblyIOUnitBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAssemblyIOUnitBlock$$Type = ($AbstractAssemblyIOUnitBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractAssemblyIOUnitBlock$$Original = $AbstractAssemblyIOUnitBlock;}
declare module "me.desht.pneumaticcraft.common.block.entity.IRedstoneControl" {
import {$RedstoneController, $RedstoneController$$Type} from "me.desht.pneumaticcraft.common.block.entity.RedstoneController"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IRedstoneControl$$Interface<T extends $BlockEntity> {

(): $RedstoneController$$Type<(T)>
get "redstoneMode"(): integer
get "redstoneController"(): $RedstoneController<(T)>
get "currentRedstonePower"(): integer
get "redstoneTabTitle"(): $MutableComponent
}

export class $IRedstoneControl<T extends $BlockEntity> implements $IRedstoneControl$$Interface {
 "getRedstoneMode"(): integer
 "getRedstoneController"(): $RedstoneController<(T)>
 "getCurrentRedstonePower"(): integer
 "getRedstoneTabTitle"(): $MutableComponent
 "onRedstoneModeChanged"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRedstoneControl$$Type<T> = (() => $RedstoneController$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRedstoneControl$$Original<T> = $IRedstoneControl<(T)>;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidGasoline$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"

export class $FluidGasoline$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidGasoline$Source$$Type = ($FluidGasoline$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidGasoline$Source$$Original = $FluidGasoline$Source;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.RefineryRecipeImpl$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RefineryRecipeImpl$IFactory$$Type} from "me.desht.pneumaticcraft.common.recipes.machine.RefineryRecipeImpl$IFactory"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RefineryRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.RefineryRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $RefineryRecipeImpl$Serializer<T extends $RefineryRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $RefineryRecipeImpl$IFactory$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryRecipeImpl$Serializer$$Type<T> = ($RefineryRecipeImpl$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefineryRecipeImpl$Serializer$$Original<T> = $RefineryRecipeImpl$Serializer<(T)>;}
declare module "me.desht.pneumaticcraft.common.block.VacuumPumpBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VacuumPumpBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumPumpBlock$$Type = ($VacuumPumpBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VacuumPumpBlock$$Original = $VacuumPumpBlock;}
declare module "me.desht.pneumaticcraft.common.item.DroneItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IChargeableContainerProvider$$Interface} from "me.desht.pneumaticcraft.common.item.IChargeableContainerProvider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DroneEntity$$Type} from "me.desht.pneumaticcraft.common.entity.drone.DroneEntity"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PressurizableItem} from "me.desht.pneumaticcraft.common.item.PressurizableItem"
import {$ColorHandlers$ITintableItem$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableItem"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map} from "java.util.Map"
import {$IProgrammable$$Interface} from "me.desht.pneumaticcraft.api.item.IProgrammable"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$ChargingStationBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.utility.ChargingStationBlockEntity"

export class $DroneItem extends $PressurizableItem implements $IChargeableContainerProvider$$Interface, $IProgrammable$$Interface, $ColorHandlers$ITintableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $BiFunction$$Type<($Level), ($Player), ($DroneEntity$$Type)>, arg1: boolean, arg2: $DyeColor$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getUpgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
public "getContainerProvider"(arg0: $ChargingStationBlockEntity$$Type): $MenuProvider
public "canProgram"(arg0: $ItemStack$$Type): boolean
public "usesPieces"(arg0: $ItemStack$$Type): boolean
public "showProgramTooltip"(): boolean
public "spawnDrone"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockPos$$Type, arg5: $ItemStack$$Type): boolean
public "getDroneColor"(arg0: $ItemStack$$Type): $DyeColor
public static "isBasicDrone"(arg0: $ItemStack$$Type): boolean
public static "isProgrammable"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "upgradeBlacklistTag"(): $Optional<($TagKey<($Item)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneItem$$Type = ($DroneItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroneItem$$Original = $DroneItem;}
declare module "me.desht.pneumaticcraft.common.block.AbstractPNCBlockWithBoundingBlocks" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AbstractPNCBlockWithBoundingBlocks extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "BOUNDING": $BooleanProperty
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getMainPos"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $BlockPos
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "setRotation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
public "getBoundingBlockOffsets"(): ($Vec3i)[]
public "onWrenched"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $InteractionHand$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "boundingBlockOffsets"(): ($Vec3i)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPNCBlockWithBoundingBlocks$$Type = ($AbstractPNCBlockWithBoundingBlocks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractPNCBlockWithBoundingBlocks$$Original = $AbstractPNCBlockWithBoundingBlocks;}
declare module "me.desht.pneumaticcraft.common.block.HeatPipeBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$AbstractCamouflageBlock} from "me.desht.pneumaticcraft.common.block.AbstractCamouflageBlock"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $HeatPipeBlock extends $AbstractCamouflageBlock implements $SimpleWaterloggedBlock$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getUncamouflagedShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatPipeBlock$$Type = ($HeatPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatPipeBlock$$Original = $HeatPipeBlock;}
declare module "me.desht.pneumaticcraft.common.block.SerializableComponentsProvider" {
import {$List, $List$$Type} from "java.util.List"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export interface $SerializableComponentsProvider$$Interface {

(arg0: $List<($DataComponentType<(never)>)>): void
}

export class $SerializableComponentsProvider implements $SerializableComponentsProvider$$Interface {
 "addSerializableComponents"(arg0: $List$$Type<($DataComponentType$$Type<(never)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializableComponentsProvider$$Type = ((arg0: $List<($DataComponentType<(never)>)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SerializableComponentsProvider$$Original = $SerializableComponentsProvider;}
declare module "me.desht.pneumaticcraft.common.recipes.amadron.AmadronOffer$IFactory" {
import {$PlayerFilter, $PlayerFilter$$Type} from "me.desht.pneumaticcraft.common.util.playerfilter.PlayerFilter"
import {$AmadronTradeResource, $AmadronTradeResource$$Type} from "me.desht.pneumaticcraft.api.crafting.AmadronTradeResource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AmadronRecipe, $AmadronRecipe$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.AmadronRecipe"

export interface $AmadronOffer$IFactory$$Interface<T extends $AmadronRecipe> {

(arg0: $ResourceLocation, arg1: $AmadronTradeResource, arg2: $AmadronTradeResource, arg3: boolean, arg4: boolean, arg5: integer, arg6: integer, arg7: integer, arg8: $PlayerFilter, arg9: $PlayerFilter): T
}

export class $AmadronOffer$IFactory<T extends $AmadronRecipe> implements $AmadronOffer$IFactory$$Interface {
 "create"(arg0: $ResourceLocation$$Type, arg1: $AmadronTradeResource$$Type, arg2: $AmadronTradeResource$$Type, arg3: boolean, arg4: boolean, arg5: integer, arg6: integer, arg7: integer, arg8: $PlayerFilter$$Type, arg9: $PlayerFilter$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronOffer$IFactory$$Type<T> = ((arg0: $ResourceLocation, arg1: $AmadronTradeResource, arg2: $AmadronTradeResource, arg3: boolean, arg4: boolean, arg5: integer, arg6: integer, arg7: integer, arg8: $PlayerFilter, arg9: $PlayerFilter) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadronOffer$IFactory$$Original<T> = $AmadronOffer$IFactory<(T)>;}
declare module "me.desht.pneumaticcraft.common.item.NetworkComponentItem$NetworkComponentType" {
import {$Enum} from "java.lang.Enum"

export class $NetworkComponentItem$NetworkComponentType extends $Enum<($NetworkComponentItem$NetworkComponentType)> {
static readonly "NETWORK_API": $NetworkComponentItem$NetworkComponentType
static readonly "NETWORK_IO_PORT": $NetworkComponentItem$NetworkComponentType
static readonly "NETWORK_NODE": $NetworkComponentItem$NetworkComponentType
static readonly "NETWORK_DATA_STORAGE": $NetworkComponentItem$NetworkComponentType
static readonly "DIAGNOSTIC_SUBROUTINE": $NetworkComponentItem$NetworkComponentType
static readonly "NETWORK_REGISTRY": $NetworkComponentItem$NetworkComponentType

public "getRegistryName"(): StringJS
public "isSecStationComponent"(): boolean
public static "values"(): ($NetworkComponentItem$NetworkComponentType)[]
public static "valueOf"(arg0: StringJS): $NetworkComponentItem$NetworkComponentType
get "registryName"(): StringJS
get "secStationComponent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkComponentItem$NetworkComponentType$$Type = (("diagnostic_subroutine") | ("network_api") | ("network_data_storage") | ("network_io_port") | ("network_registry") | ("network_node"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkComponentItem$NetworkComponentType$$Original = $NetworkComponentItem$NetworkComponentType;}
declare module "me.desht.pneumaticcraft.common.entity.semiblock.AbstractSemiblockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ISemiBlock, $ISemiBlock$$Type, $ISemiBlock$$Interface} from "me.desht.pneumaticcraft.api.semiblock.ISemiBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IGUIButtonSensitive$$Interface} from "me.desht.pneumaticcraft.common.block.entity.IGUIButtonSensitive"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Entity$RemovalReason} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EntityCapability$$Type} from "net.neoforged.neoforge.capabilities.EntityCapability"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EntityInLevelCallback} from "net.minecraft.world.level.entity.EntityInLevelCallback"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"

export class $AbstractSemiblockEntity extends $Entity implements $ISemiBlock$$Interface, $IGUIButtonSensitive$$Interface {
 "hasImpulse": boolean
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "levelCallback": $EntityInLevelCallback
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean

public "getDrops"(): $NonNullList<($ItemStack)>
public "getWorld"(): $Level
public "killedByEntity"(arg0: $Entity$$Type): void
public "canCoexist"(arg0: $ISemiBlock$$Type): boolean
public "getBlockBounds"(): $AABB
public "getTimeSinceHit"(): integer
public "getDamageTaken"(): float
public "canStay"(): boolean
public "getSemiblockId"(): $ResourceLocation
public "getSemiblockDisplayName"(): $Component
public "getCachedTileEntity"(): $BlockEntity
public "getTrackingId"(): integer
public "handleGUIButtonPress"(arg0: StringJS, arg1: boolean, arg2: $ServerPlayer$$Type): void
public "writeToBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "readFromBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getSemiblockCapability"<T>(arg0: $EntityCapability$$Type<(T), (void)>): $Optional<(T)>
public "getSemiblockCapability"<T>(arg0: $EntityCapability$$Type<(T), ($Direction$$Type)>, arg1: $Direction$$Type): $Optional<(T)>
public "tick"(): void
public "isValid"(): boolean
public "isAir"(): boolean
public "getBlockPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "interactAt"(arg0: $Player$$Type, arg1: $Vec3$$Type, arg2: $InteractionHand$$Type): $InteractionResult
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "setPos"(arg0: double, arg1: double, arg2: double): void
public "isPickable"(): boolean
public "serializeNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "onAddedToLevel"(): void
public "onRemovedFromLevel"(): void
public "isNoGravity"(): boolean
public "addTooltip"(arg0: $Consumer$$Type<($Component)>, arg1: $Player$$Type, arg2: $CompoundTag$$Type, arg3: boolean): void
public "canPlace"(arg0: $Direction$$Type): boolean
public "onPlaced"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Direction$$Type): void
public "onRightClickWithConfigurator"(arg0: $Player$$Type, arg1: $Direction$$Type): boolean
public static "byTrackingId"(arg0: $Level$$Type, arg1: integer): $ISemiBlock
public "getColor"(): integer
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "drops"(): $NonNullList<($ItemStack)>
get "world"(): $Level
get "blockBounds"(): $AABB
get "timeSinceHit"(): integer
get "damageTaken"(): float
get "semiblockId"(): $ResourceLocation
get "semiblockDisplayName"(): $Component
get "cachedTileEntity"(): $BlockEntity
get "trackingId"(): integer
get "valid"(): boolean
get "air"(): boolean
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
get "pickable"(): boolean
get "noGravity"(): boolean
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSemiblockEntity$$Type = ($AbstractSemiblockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSemiblockEntity$$Original = $AbstractSemiblockEntity;}
declare module "me.desht.pneumaticcraft.common.block.TubeJunctionBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $TubeJunctionBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onWrenched"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $InteractionHand$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeJunctionBlock$$Type = ($TubeJunctionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TubeJunctionBlock$$Original = $TubeJunctionBlock;}
declare module "me.desht.pneumaticcraft.common.block.WallLampBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ColorHandlers$ITintableBlock$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableBlock"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $WallLampBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$ITintableBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $DyeColor$$Type, arg2: boolean)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public static "wallLampProperties"(): $BlockBehaviour$Properties
public "isRotatable"(): boolean
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallLampBlock$$Type = ($WallLampBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WallLampBlock$$Original = $WallLampBlock;}
declare module "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerLeaves" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$List} from "java.util.List"
import {$HarvestHandler} from "me.desht.pneumaticcraft.api.harvesting.HarvestHandler"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HarvestHandlerLeaves extends $HarvestHandler {
constructor()

public "canHarvest"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): boolean
public "addFilterItems"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandlerLeaves$$Type = ($HarvestHandlerLeaves);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandlerLeaves$$Original = $HarvestHandlerLeaves;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.ExplosionCraftingRecipeImpl$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ExplosionCraftingRecipeImpl$IFactory$$Type} from "me.desht.pneumaticcraft.common.recipes.machine.ExplosionCraftingRecipeImpl$IFactory"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ExplosionCraftingRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.ExplosionCraftingRecipe"

export class $ExplosionCraftingRecipeImpl$Serializer<T extends $ExplosionCraftingRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $ExplosionCraftingRecipeImpl$IFactory$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionCraftingRecipeImpl$Serializer$$Type<T> = ($ExplosionCraftingRecipeImpl$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExplosionCraftingRecipeImpl$Serializer$$Original<T> = $ExplosionCraftingRecipeImpl$Serializer<(T)>;}
declare module "me.desht.pneumaticcraft.common.block.AbstractAssemblyIOUnitBlock$Import" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$AbstractAssemblyIOUnitBlock} from "me.desht.pneumaticcraft.common.block.AbstractAssemblyIOUnitBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractAssemblyIOUnitBlock$Import extends $AbstractAssemblyIOUnitBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAssemblyIOUnitBlock$Import$$Type = ($AbstractAssemblyIOUnitBlock$Import);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractAssemblyIOUnitBlock$Import$$Original = $AbstractAssemblyIOUnitBlock$Import;}
declare module "me.desht.pneumaticcraft.common.block.ElevatorFrameBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ElevatorFrameBlock extends $AbstractPneumaticCraftBlock implements $SimpleWaterloggedBlock$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElevatorFrameBlock$$Type = ($ElevatorFrameBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElevatorFrameBlock$$Original = $ElevatorFrameBlock;}
declare module "me.desht.pneumaticcraft.common.block.UniversalSensorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $UniversalSensorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalSensorBlock$$Type = ($UniversalSensorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UniversalSensorBlock$$Original = $UniversalSensorBlock;}
declare module "me.desht.pneumaticcraft.common.item.IShiftScrollable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"

export interface $IShiftScrollable$$Interface {

(arg0: $Player, arg1: boolean, arg2: $InteractionHand): void
}

export class $IShiftScrollable implements $IShiftScrollable$$Interface {
 "onShiftScrolled"(arg0: $Player$$Type, arg1: boolean, arg2: $InteractionHand$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShiftScrollable$$Type = ((arg0: $Player, arg1: boolean, arg2: $InteractionHand) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IShiftScrollable$$Original = $IShiftScrollable;}
declare module "me.desht.pneumaticcraft.common.block.ThermalLaggingBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ThermalLaggingBlock extends $AbstractPneumaticCraftBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "skipRendering"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type): boolean
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermalLaggingBlock$$Type = ($ThermalLaggingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThermalLaggingBlock$$Original = $ThermalLaggingBlock;}
declare module "me.desht.pneumaticcraft.common.advancements.CustomTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CustomTrigger$Instance} from "me.desht.pneumaticcraft.common.advancements.CustomTrigger$Instance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $CustomTrigger extends $SimpleCriterionTrigger<($CustomTrigger$Instance)> {
constructor(arg0: StringJS)
constructor(arg0: $ResourceLocation$$Type)

public "trigger"(arg0: $ServerPlayer$$Type): void
public "getInstance"(): $CustomTrigger$Instance
public "codec"(): $Codec<($CustomTrigger$Instance)>
get "instance"(): $CustomTrigger$Instance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTrigger$$Type = ($CustomTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomTrigger$$Original = $CustomTrigger;}
declare module "me.desht.pneumaticcraft.common.block.AbstractPressureWallBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IBlockPressureChamber$$Interface} from "me.desht.pneumaticcraft.common.block.IBlockPressureChamber"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AbstractPressureWallBlock extends $AbstractPneumaticCraftBlock implements $IBlockPressureChamber$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "pressureChamberBlockProps"(): $BlockBehaviour$Properties
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPressureWallBlock$$Type = ($AbstractPressureWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractPressureWallBlock$$Original = $AbstractPressureWallBlock;}
declare module "me.desht.pneumaticcraft.common.block.PressureChamberGlassBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AbstractPressureWallBlock} from "me.desht.pneumaticcraft.common.block.AbstractPressureWallBlock"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PressureChamberGlassBlock extends $AbstractPressureWallBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "skipRendering"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public static "pressureChamberBlockProps"(): $BlockBehaviour$Properties
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberGlassBlock$$Type = ($PressureChamberGlassBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureChamberGlassBlock$$Original = $PressureChamberGlassBlock;}
declare module "me.desht.pneumaticcraft.common.particle.AirParticleData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$ParticleOptions$$Interface} from "net.minecraft.core.particles.ParticleOptions"
import {$Record} from "java.lang.Record"

export class $AirParticleData extends $Record implements $ParticleOptions$$Interface {
static readonly "DENSE": $AirParticleData
static readonly "NORMAL": $AirParticleData
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($AirParticleData)>

constructor(alpha: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getType"(): $ParticleType<(never)>
public "alpha"(): float
get "type"(): $ParticleType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirParticleData$$Type = ({"alpha"?: float}) | ([alpha?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AirParticleData$$Original = $AirParticleData;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidLubricant$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid$Flowing} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidLubricant$Flowing extends $BaseFlowingFluid$Flowing {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLubricant$Flowing$$Type = ($FluidLubricant$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidLubricant$Flowing$$Original = $FluidLubricant$Flowing;}
declare module "me.desht.pneumaticcraft.common.block.entity.AbstractAirHandlingBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LuaMethodRegistry$$Type} from "me.desht.pneumaticcraft.common.thirdparty.computer_common.LuaMethodRegistry"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$AbstractTickingBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.AbstractTickingBlockEntity"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IAirHandlerMachine, $IAirHandlerMachine$$Type} from "me.desht.pneumaticcraft.api.tileentity.IAirHandlerMachine"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PressureTier$$Type} from "me.desht.pneumaticcraft.api.pressure.PressureTier"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractAirHandlingBlockEntity extends $AbstractTickingBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $PressureTier$$Type, arg4: integer, arg5: integer)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onUpgradesChanged"(): void
public "tickCommonPre"(): void
public "getPressure"(): float
public "addAir"(arg0: integer): void
public "getAirHandler"(arg0: $Direction$$Type): $IAirHandlerMachine
public "readFromPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addLuaMethods"(arg0: $LuaMethodRegistry$$Type): void
public "hasNoConnectedAirHandlers"(): boolean
public "canConnectPneumatic"(arg0: $Direction$$Type): boolean
public "initializeHullAirHandlerClient"(arg0: $Direction$$Type, arg1: $IAirHandlerMachine$$Type): void
public "initializeHullAirHandlers"(): void
public "getCriticalPressure"(): float
public "getDefaultVolume"(): integer
public "getDangerPressure"(): float
public "onNeighborBlockUpdate"(arg0: $BlockPos$$Type): void
public "onBlockRotated"(): void
public "onLoad"(): void
get "pressure"(): float
get "criticalPressure"(): float
get "defaultVolume"(): integer
get "dangerPressure"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAirHandlingBlockEntity$$Type = ($AbstractAirHandlingBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractAirHandlingBlockEntity$$Original = $AbstractAirHandlingBlockEntity;}
declare module "me.desht.pneumaticcraft.common.network.PacketPlayMovingSound$MovingSoundFocus" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MovingSounds$Sound$$Type} from "me.desht.pneumaticcraft.client.sound.MovingSounds$Sound"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Record} from "java.lang.Record"

export class $PacketPlayMovingSound$MovingSoundFocus extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($PacketPlayMovingSound$MovingSoundFocus)>

constructor(entityOrPos: $Either$$Type<(integer), ($BlockPos$$Type)>)

public "entityOrPos"(): $Either<(integer), ($BlockPos)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $Entity$$Type): $PacketPlayMovingSound$MovingSoundFocus
public static "of"(arg0: integer): $PacketPlayMovingSound$MovingSoundFocus
public static "of"(arg0: $BlockPos$$Type): $PacketPlayMovingSound$MovingSoundFocus
public static "of"(arg0: $BlockEntity$$Type): $PacketPlayMovingSound$MovingSoundFocus
public "handle"(arg0: $MovingSounds$Sound$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketPlayMovingSound$MovingSoundFocus$$Type = ({"entityOrPos"?: $Either$$Type<(integer), ($BlockPos$$Type)>}) | ([entityOrPos?: $Either$$Type<(integer), ($BlockPos$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PacketPlayMovingSound$MovingSoundFocus$$Original = $PacketPlayMovingSound$MovingSoundFocus;}
declare module "me.desht.pneumaticcraft.common.block.AssemblyLaserBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AssemblyLaserBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyLaserBlock$$Type = ($AssemblyLaserBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyLaserBlock$$Original = $AssemblyLaserBlock;}
declare module "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCropLike$Cocoa" {
import {$HarvestHandlerCropLike} from "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCropLike"

export class $HarvestHandlerCropLike$Cocoa extends $HarvestHandlerCropLike {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandlerCropLike$Cocoa$$Type = ($HarvestHandlerCropLike$Cocoa);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandlerCropLike$Cocoa$$Original = $HarvestHandlerCropLike$Cocoa;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.FluidMixerRecipeImpl$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FluidMixerRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.FluidMixerRecipe"
import {$FluidMixerRecipeImpl$IFactory$$Type} from "me.desht.pneumaticcraft.common.recipes.machine.FluidMixerRecipeImpl$IFactory"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $FluidMixerRecipeImpl$Serializer<T extends $FluidMixerRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $FluidMixerRecipeImpl$IFactory$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMixerRecipeImpl$Serializer$$Type<T> = ($FluidMixerRecipeImpl$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidMixerRecipeImpl$Serializer$$Original<T> = $FluidMixerRecipeImpl$Serializer<(T)>;}
declare module "me.desht.pneumaticcraft.common.block.entity.AbstractPneumaticCraftBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ILuaMethodProvider$$Interface} from "me.desht.pneumaticcraft.common.block.entity.ILuaMethodProvider"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$AbstractPneumaticCraftBlockEntity$UpgradeHandler} from "me.desht.pneumaticcraft.common.block.entity.AbstractPneumaticCraftBlockEntity$UpgradeHandler"
import {$IDescSynced$$Interface} from "me.desht.pneumaticcraft.common.network.IDescSynced"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IGUIButtonSensitive$$Interface} from "me.desht.pneumaticcraft.common.block.entity.IGUIButtonSensitive"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$UpgradeCache} from "me.desht.pneumaticcraft.common.upgrades.UpgradeCache"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$SyncedField} from "me.desht.pneumaticcraft.common.network.SyncedField"
import {$PNCUpgrade$$Type} from "me.desht.pneumaticcraft.api.upgrade.PNCUpgrade"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Nameable$$Interface} from "net.minecraft.world.Nameable"
import {$LuaMethodRegistry, $LuaMethodRegistry$$Type} from "me.desht.pneumaticcraft.common.thirdparty.computer_common.LuaMethodRegistry"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$IUpgradeHolder$$Interface} from "me.desht.pneumaticcraft.common.upgrades.IUpgradeHolder"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $AbstractPneumaticCraftBlockEntity extends $BlockEntity implements $Nameable$$Interface, $IGUIButtonSensitive$$Interface, $IDescSynced$$Interface, $IUpgradeHolder$$Interface, $ILuaMethodProvider$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: integer)
constructor(arg0: $BlockEntityType$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "getItemHandler"(): $IItemHandler
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "requestModelDataUpdate"(): void
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpgradeHandler"(): $AbstractPneumaticCraftBlockEntity$UpgradeHandler
public "onUpgradesChanged"(): void
public "hasItemCapability"(): boolean
public "hasEnergyCapability"(): boolean
public "getUpgrades"(arg0: $PNCUpgrade$$Type): integer
public "handleGUIButtonPress"(arg0: StringJS, arg1: boolean, arg2: $ServerPlayer$$Type): void
public "getMuffledVolume"(arg0: float): float
public "onNeighborTileUpdate"(arg0: $BlockPos$$Type): void
public "sendDescriptionPacket"(): void
public "readFromPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "nonNullLevel"(): $Level
public "getDescriptionFields"(): $List<($SyncedField<(never)>)>
public "writeToPacket"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "shouldSyncField"(arg0: integer): boolean
public "onDescUpdate"(): void
public "onGuiUpdate"(): void
public "getSpeedUsageMultiplierFromUpgrades"(): float
public "isGuiUseableByPlayer"(arg0: $Player$$Type): boolean
public "getCachedNeighbor"(arg0: $Direction$$Type): $BlockEntity
public "addLuaMethods"(arg0: $LuaMethodRegistry$$Type): void
public "getLuaMethodRegistry"(): $LuaMethodRegistry
public "getCurrentRecipeIdSynced"(): StringJS
public "getUpgradeCache"(): $UpgradeCache
public "countPlayersUsing"(): integer
public "setPreserveStateOnBreak"(arg0: boolean): void
public "shouldPreserveStateOnBreak"(): boolean
public "getContentsToDrop"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "onNeighborBlockUpdate"(arg0: $BlockPos$$Type): void
public "onBlockRotated"(): void
public "getSpeedMultiplierFromUpgrades"(): float
public "getPeripheralType"(): StringJS
public "hasFluidCapability"(): boolean
public "getDisplayName"(): $Component
public "getName"(): $Component
public "getPosition"(): $BlockPos
public "onLoad"(): void
public "getRotation"(): $Direction
public "setChanged"(): void
public "getCustomName"(): $Component
public "setCustomName"(arg0: $Component$$Type): void
public "getModelData"(): $ModelData
public "getEnergyHandler"(arg0: $Direction$$Type): $IEnergyStorage
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getFluidHandler"(): $IFluidHandler
public "hasCustomName"(): boolean
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "itemHandler"(): $IItemHandler
get "upgradeHandler"(): $AbstractPneumaticCraftBlockEntity$UpgradeHandler
get "descriptionFields"(): $List<($SyncedField<(never)>)>
get "speedUsageMultiplierFromUpgrades"(): float
get "luaMethodRegistry"(): $LuaMethodRegistry
get "currentRecipeIdSynced"(): StringJS
get "upgradeCache"(): $UpgradeCache
set "preserveStateOnBreak"(value: boolean)
get "speedMultiplierFromUpgrades"(): float
get "peripheralType"(): StringJS
get "displayName"(): $Component
get "name"(): $Component
get "position"(): $BlockPos
get "rotation"(): $Direction
get "changed"(): void
get "customName"(): $Component
set "customName"(value: $Component$$Type)
get "modelData"(): $ModelData
get "fluidHandler"(): $IFluidHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPneumaticCraftBlockEntity$$Type = ($AbstractPneumaticCraftBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractPneumaticCraftBlockEntity$$Original = $AbstractPneumaticCraftBlockEntity;}
declare module "me.desht.pneumaticcraft.common.capabilities.BasicAirHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IAirHandler$$Interface} from "me.desht.pneumaticcraft.api.tileentity.IAirHandler"

export class $BasicAirHandler implements $IAirHandler$$Interface {
constructor(arg0: integer)

public "getPressure"(): float
public "addAir"(arg0: integer): void
public "getBaseVolume"(): integer
public "setBaseVolume"(arg0: integer): void
public "maxPressure"(): float
public "getAir"(): integer
public "getVolume"(): integer
public "deserializeNBT"(arg0: $CompoundTag$$Type): void
public "serializeNBT"(): $CompoundTag
get "pressure"(): float
get "baseVolume"(): integer
set "baseVolume"(value: integer)
get "air"(): integer
get "volume"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicAirHandler$$Type = ($BasicAirHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicAirHandler$$Original = $BasicAirHandler;}
declare module "me.desht.pneumaticcraft.common.block.PressureTubeBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractTubeModule} from "me.desht.pneumaticcraft.common.tubemodules.AbstractTubeModule"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PressureTubeBlockEntity$$Type} from "me.desht.pneumaticcraft.common.block.entity.tube.PressureTubeBlockEntity"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractCamouflageBlock} from "me.desht.pneumaticcraft.common.block.AbstractCamouflageBlock"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ITubeNetworkConnector$$Interface} from "me.desht.pneumaticcraft.api.block.ITubeNetworkConnector"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PressureTubeBlock extends $AbstractCamouflageBlock implements $SimpleWaterloggedBlock$$Interface, $PneumaticCraftEntityBlock$$Interface, $ITubeNetworkConnector$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "CORE_MAX": integer
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "CORE_MIN": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $BiFunction$$Type<($BlockPos), ($BlockState), ($PressureTubeBlockEntity$$Type)>)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getUncamouflagedShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canConnectToNetwork"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type): boolean
public "tryPlaceModule"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $InteractionHand$$Type, arg5: boolean): boolean
public static "getFocusedModule"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): $AbstractTubeModule
public "onWrenched"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $InteractionHand$$Type): boolean
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureTubeBlock$$Type = ($PressureTubeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureTubeBlock$$Original = $PressureTubeBlock;}
declare module "me.desht.pneumaticcraft.common.inventory.handler.BaseItemStackHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemContainerContents, $ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $BaseItemStackHandler extends $ItemStackHandler {
constructor(arg0: integer)
constructor(arg0: $BlockEntity$$Type, arg1: integer)

public "loadContainerContents"(arg0: $ItemContainerContents$$Type): void
public "toContainerContents"(): $ItemContainerContents
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItemStackHandler$$Type = ($BaseItemStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseItemStackHandler$$Original = $BaseItemStackHandler;}
declare module "me.desht.pneumaticcraft.common.block.entity.RedstoneController$RedstoneMode" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $RedstoneController$RedstoneMode<T extends $BlockEntity> {
constructor(arg0: StringJS, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<(T)>, arg3: $Predicate$$Type<(T)>)
constructor(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $Predicate$$Type<(T)>, arg3: $Predicate$$Type<(T)>)

public "getTranslationKey"(): StringJS
public "getId"(): StringJS
public "getTexture"(): $Either<($ItemStack), ($ResourceLocation)>
get "translationKey"(): StringJS
get "id"(): StringJS
get "texture"(): $Either<($ItemStack), ($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneController$RedstoneMode$$Type<T> = ($RedstoneController$RedstoneMode<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneController$RedstoneMode$$Original<T> = $RedstoneController$RedstoneMode<(T)>;}
declare module "me.desht.pneumaticcraft.common.fluid.FluidYeastCulture$Source" {
import {$BaseFlowingFluid$Source} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $FluidYeastCulture$Source extends $BaseFlowingFluid$Source {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidYeastCulture$Source$$Type = ($FluidYeastCulture$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidYeastCulture$Source$$Original = $FluidYeastCulture$Source;}
declare module "me.desht.pneumaticcraft.common.block.ElevatorBaseBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ElevatorBaseBlockEntity} from "me.desht.pneumaticcraft.common.block.entity.elevator.ElevatorBaseBlockEntity"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$AbstractCamouflageBlock} from "me.desht.pneumaticcraft.common.block.AbstractCamouflageBlock"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ElevatorBaseBlock extends $AbstractCamouflageBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getUncamouflagedShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "getCoreBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $Optional<($ElevatorBaseBlockEntity)>
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElevatorBaseBlock$$Type = ($ElevatorBaseBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElevatorBaseBlock$$Original = $ElevatorBaseBlock;}
declare module "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCropLike$NetherWart" {
import {$HarvestHandlerCropLike} from "me.desht.pneumaticcraft.common.harvesting.HarvestHandlerCropLike"

export class $HarvestHandlerCropLike$NetherWart extends $HarvestHandlerCropLike {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandlerCropLike$NetherWart$$Type = ($HarvestHandlerCropLike$NetherWart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandlerCropLike$NetherWart$$Original = $HarvestHandlerCropLike$NetherWart;}
declare module "me.desht.pneumaticcraft.common.item.minigun.FreezingGunAmmoItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractGunAmmoItem} from "me.desht.pneumaticcraft.common.item.minigun.AbstractGunAmmoItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Minigun$$Type} from "me.desht.pneumaticcraft.common.minigun.Minigun"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $FreezingGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "onTargetHit"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type, arg2: $Entity$$Type): integer
public "getAmmoColor"(arg0: $ItemStack$$Type): integer
public "onBlockHit"(arg0: $Minigun$$Type, arg1: $ItemStack$$Type, arg2: $BlockHitResult$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezingGunAmmoItem$$Type = ($FreezingGunAmmoItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreezingGunAmmoItem$$Original = $FreezingGunAmmoItem;}
declare module "me.desht.pneumaticcraft.common.advancements.CustomTrigger$Instance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ContextAwarePredicate} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record} from "java.lang.Record"

export class $CustomTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($CustomTrigger$Instance)>

constructor(id: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(): boolean
public "id"(): $ResourceLocation
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTrigger$Instance$$Type = ({"id"?: $ResourceLocation$$Type}) | ([id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomTrigger$Instance$$Original = $CustomTrigger$Instance;}
declare module "me.desht.pneumaticcraft.common.block.FluidMixerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidMixerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMixerBlock$$Type = ($FluidMixerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidMixerBlock$$Original = $FluidMixerBlock;}
declare module "me.desht.pneumaticcraft.common.block.VacuumTrapBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $VacuumTrapBlock extends $AbstractPneumaticCraftBlock implements $SimpleWaterloggedBlock$$Interface, $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isRotatable"(): boolean
public "addSerializableComponents"(arg0: $List$$Type<($DataComponentType$$Type<(never)>)>): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumTrapBlock$$Type = ($VacuumTrapBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VacuumTrapBlock$$Original = $VacuumTrapBlock;}
declare module "me.desht.pneumaticcraft.common.recipes.machine.HeatFrameCoolingRecipeImpl$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$HeatFrameCoolingRecipeImpl$IFactory$$Type} from "me.desht.pneumaticcraft.common.recipes.machine.HeatFrameCoolingRecipeImpl$IFactory"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HeatFrameCoolingRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.HeatFrameCoolingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $HeatFrameCoolingRecipeImpl$Serializer<T extends $HeatFrameCoolingRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $HeatFrameCoolingRecipeImpl$IFactory$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatFrameCoolingRecipeImpl$Serializer$$Type<T> = ($HeatFrameCoolingRecipeImpl$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatFrameCoolingRecipeImpl$Serializer$$Original<T> = $HeatFrameCoolingRecipeImpl$Serializer<(T)>;}
declare module "me.desht.pneumaticcraft.common.block.AssemblyControllerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$PneumaticCraftEntityBlock$$Interface} from "me.desht.pneumaticcraft.common.block.PneumaticCraftEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IPneumaticWrenchable} from "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractPneumaticCraftBlock} from "me.desht.pneumaticcraft.common.block.AbstractPneumaticCraftBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AssemblyControllerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyControllerBlock$$Type = ($AssemblyControllerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyControllerBlock$$Original = $AssemblyControllerBlock;}
