declare module "mcjty.rftoolsutility.modules.screen.items.modules.ButtonModuleItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IModuleGuiBuilder$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$IClientScreenModule} from "mcjty.rftoolsbase.api.screens.IClientScreenModule"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IScreenModule} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$GenericModuleItem} from "mcjty.rftoolsbase.tools.GenericModuleItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ButtonScreenModule, $ButtonScreenModule$$Type} from "mcjty.rftoolsutility.modules.screen.modules.ButtonScreenModule"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ButtonModuleItem extends $GenericModuleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IScreenModule<(never), (never)>)>
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "createClientScreenModule"(): $IClientScreenModule<(never)>
public "createServerScreenModule"(): $IScreenModule<(never), (never)>
public "componentType"(): $DataComponentType<($IScreenModule<(never), (never)>)>
public static "data"(arg0: $ItemStack$$Type): $ButtonScreenModule
public static "data"(arg0: $ItemStack$$Type, arg1: $Function$$Type<($ButtonScreenModule), ($ButtonScreenModule$$Type)>): void
public "getModuleName"(): StringJS
public static "getChannel"(arg0: $ItemStack$$Type): integer
public "codec"(): $Codec<($IScreenModule<(never), (never)>)>
public "createGui"(arg0: $IModuleGuiBuilder$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "moduleName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonModuleItem$$Type = ($ButtonModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ButtonModuleItem$$Original = $ButtonModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.RedstoneModuleItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IModuleGuiBuilder$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$IClientScreenModule} from "mcjty.rftoolsbase.api.screens.IClientScreenModule"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IScreenModule} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$RedstoneScreenModule, $RedstoneScreenModule$$Type} from "mcjty.rftoolsutility.modules.screen.modules.RedstoneScreenModule"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$GenericModuleItem} from "mcjty.rftoolsbase.tools.GenericModuleItem"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $RedstoneModuleItem extends $GenericModuleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IScreenModule<(never), (never)>)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "createClientScreenModule"(): $IClientScreenModule<(never)>
public "createServerScreenModule"(): $IScreenModule<(never), (never)>
public "componentType"(): $DataComponentType<($IScreenModule<(never), (never)>)>
public static "data"(arg0: $ItemStack$$Type): $RedstoneScreenModule
public static "data"(arg0: $ItemStack$$Type, arg1: $Function$$Type<($RedstoneScreenModule), ($RedstoneScreenModule$$Type)>): void
public "getModuleName"(): StringJS
public "codec"(): $Codec<($IScreenModule<(never), (never)>)>
public "createGui"(arg0: $IModuleGuiBuilder$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "moduleName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneModuleItem$$Type = ($RedstoneModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneModuleItem$$Original = $RedstoneModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.blocks.ScreenHitBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IAttackableBlock$$Interface} from "mcjty.rftoolsutility.modules.screen.blocks.IAttackableBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BaseBlock} from "mcjty.lib.blocks.BaseBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $ScreenHitBlock extends $BaseBlock implements $IAttackableBlock$$Interface {
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
static readonly "NONE_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "ROTATING_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "HORIZ_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_CLIENTS": integer

constructor()

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "wasExploded"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): void
public "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "doAttack"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getScreenBlockPos"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockPos
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "activate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenHitBlock$$Type = ($ScreenHitBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenHitBlock$$Original = $ScreenHitBlock;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.MachineInformationModuleItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IModuleGuiBuilder$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$IClientScreenModule} from "mcjty.rftoolsbase.api.screens.IClientScreenModule"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MachineInformationScreenModule, $MachineInformationScreenModule$$Type} from "mcjty.rftoolsutility.modules.screen.modules.MachineInformationScreenModule"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IScreenModule} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$GenericModuleItem} from "mcjty.rftoolsbase.tools.GenericModuleItem"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IModuleProvider$$Interface} from "mcjty.rftoolsbase.api.screens.IModuleProvider"

export class $MachineInformationModuleItem extends $GenericModuleItem implements $IModuleProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IScreenModule<(never), (never)>)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "createClientScreenModule"(): $IClientScreenModule<(never)>
public "createServerScreenModule"(): $IScreenModule<(never), (never)>
public "componentType"(): $DataComponentType<($IScreenModule<(never), (never)>)>
public static "data"(arg0: $ItemStack$$Type, arg1: $Function$$Type<($MachineInformationScreenModule), ($MachineInformationScreenModule$$Type)>): void
public static "data"(arg0: $ItemStack$$Type): $MachineInformationScreenModule
public "getModuleName"(): StringJS
public "codec"(): $Codec<($IScreenModule<(never), (never)>)>
public "createGui"(arg0: $IModuleGuiBuilder$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "moduleName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInformationModuleItem$$Type = ($MachineInformationModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineInformationModuleItem$$Original = $MachineInformationModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.blocks.ScreenBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IAttackableBlock$$Interface} from "mcjty.rftoolsutility.modules.screen.blocks.IAttackableBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IModuleProvider} from "mcjty.rftoolsbase.api.screens.IModuleProvider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BaseBlock} from "mcjty.lib.blocks.BaseBlock"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $ScreenBlock extends $BaseBlock implements $IAttackableBlock$$Interface {
static readonly "SOUTH_AABB": $VoxelShape
static readonly "DOWN_AABB": $VoxelShape
static readonly "HORIZ_FACING": $DirectionProperty
static readonly "UP_AABB": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "EAST_AABB": $VoxelShape
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "ROTATING_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "NORTH_AABB": $VoxelShape
static readonly "HORIZ_PROPERTIES": ($Property<(never)>)[]
static readonly "BLOCK_AABB": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "NONE_PROPERTIES": ($Property<(never)>)[]
static readonly "WEST_AABB": $VoxelShape
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockEntityType$BlockEntitySupplier$$Type<($BlockEntity$$Type)>, arg1: boolean)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "doAttack"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "hasModuleProvider"(arg0: $ItemStack$$Type): boolean
public static "getModuleProvider"(arg0: $ItemStack$$Type): $IModuleProvider
public "cycleSizeTranspMode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "cycleSizeMode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "cycleTranspMode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "activate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "isCreative"(): boolean
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlock$$Type = ($ScreenBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenBlock$$Original = $ScreenBlock;}
declare module "mcjty.rftoolsutility.modules.screen.modules.ScreenModuleHelper" {
import {$IModuleDataContents} from "mcjty.rftoolsbase.api.screens.data.IModuleDataContents"

export class $ScreenModuleHelper {
static readonly "SMOOTHING": double

constructor()

public "getContentsValue"(arg0: long, arg1: long, arg2: long): $IModuleDataContents
public "setShowdiff"(arg0: boolean): void
set "showdiff"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenModuleHelper$$Type = ($ScreenModuleHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenModuleHelper$$Original = $ScreenModuleHelper;}
declare module "mcjty.rftoolsutility.modules.screen.modules.InventoryScreenModule$ModuleDataStacks" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IModuleData$$Interface} from "mcjty.rftoolsbase.api.screens.data.IModuleData"

export class $InventoryScreenModule$ModuleDataStacks implements $IModuleData$$Interface {
static readonly "ID": StringJS

constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)
constructor(arg0: $RegistryFriendlyByteBuf$$Type)

public "writeToBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getId"(): StringJS
public "getStack"(arg0: integer): $ItemStack
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryScreenModule$ModuleDataStacks$$Type = ($InventoryScreenModule$ModuleDataStacks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryScreenModule$ModuleDataStacks$$Original = $InventoryScreenModule$ModuleDataStacks;}
declare module "mcjty.rftoolsutility.modules.screen.modules.TextScreenModule" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IScreenDataHelper$$Type} from "mcjty.rftoolsbase.api.screens.IScreenDataHelper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IScreenModule, $IScreenModule$$Interface} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$IModuleData} from "mcjty.rftoolsbase.api.screens.data.IModuleData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TextAlign, $TextAlign$$Type} from "mcjty.rftoolsbase.api.screens.TextAlign"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $TextScreenModule extends $Record implements $IScreenModule$$Interface<($TextScreenModule), ($IModuleData)> {
static readonly "CODEC": $Codec<($TextScreenModule)>
static readonly "DEFAULT": $TextScreenModule
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TextScreenModule)>

constructor(line: StringJS, color: integer, align: $TextAlign$$Type, large: boolean)

public "large"(): boolean
public "getAlign"(): $TextAlign
public "isLarge"(): boolean
public "mouseClick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: $Player$$Type): $ItemStack
public "withLarge"(arg0: boolean): $TextScreenModule
public "getRfPerTick"(): integer
public "withAlign"(arg0: $TextAlign$$Type): $TextScreenModule
public "getData"(arg0: $IScreenDataHelper$$Type, arg1: $Level$$Type, arg2: long): $IModuleData
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "line"(): StringJS
public "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): $IScreenModule
public "color"(): integer
public "getLine"(): StringJS
public "align"(): $TextAlign
public "withLine"(arg0: StringJS): $TextScreenModule
public "getColor"(): integer
public "withColor"(arg0: integer): $TextScreenModule
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextScreenModule$$Type = ({"color"?: integer, "large"?: boolean, "line"?: StringJS, "align"?: $TextAlign$$Type}) | ([color?: integer, large?: boolean, line?: StringJS, align?: $TextAlign$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextScreenModule$$Original = $TextScreenModule;}
declare module "mcjty.rftoolsutility.modules.screen.modules.ButtonScreenModule" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IScreenDataHelper$$Type} from "mcjty.rftoolsbase.api.screens.IScreenDataHelper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IModuleDataBoolean} from "mcjty.rftoolsbase.api.screens.data.IModuleDataBoolean"
import {$IScreenModule, $IScreenModule$$Interface} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TextAlign, $TextAlign$$Type} from "mcjty.rftoolsbase.api.screens.TextAlign"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $ButtonScreenModule extends $Record implements $IScreenModule$$Interface<($ButtonScreenModule), ($IModuleDataBoolean)> {
static readonly "CODEC": $Codec<($ButtonScreenModule)>
static readonly "DEFAULT": $ButtonScreenModule
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ButtonScreenModule)>

constructor(arg0: StringJS, arg1: integer, arg2: boolean, arg3: StringJS, arg4: integer, arg5: integer, arg6: StringJS)
constructor(line: StringJS, channel: integer, toggle: boolean, button: StringJS, color: integer, buttonColor: integer, align: $TextAlign$$Type)

public "toggle"(): boolean
public "getAlign"(): $TextAlign
public "withChannel"(arg0: integer): $ButtonScreenModule
public "mouseClick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: $Player$$Type): $ItemStack
public "getRfPerTick"(): integer
public "withAlign"(arg0: $TextAlign$$Type): $ButtonScreenModule
public "isToggle"(): boolean
public "withToggle"(arg0: boolean): $ButtonScreenModule
public "getButtonColor"(): integer
public "withButtonColor"(arg0: integer): $ButtonScreenModule
public "withButton"(arg0: StringJS): $ButtonScreenModule
public "buttonColor"(): integer
public "getData"(arg0: $IScreenDataHelper$$Type, arg1: $Level$$Type, arg2: long): $IModuleDataBoolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "line"(): StringJS
public "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): $IScreenModule
public "color"(): integer
public "getChannel"(): integer
public "channel"(): integer
public "getLine"(): StringJS
public "align"(): $TextAlign
public "button"(): StringJS
public "withLine"(arg0: StringJS): $ButtonScreenModule
public "getColor"(): integer
public "withColor"(arg0: integer): $ButtonScreenModule
public "getButton"(): StringJS
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonScreenModule$$Type = ({"toggle"?: boolean, "align"?: $TextAlign$$Type, "color"?: integer, "button"?: StringJS, "buttonColor"?: integer, "line"?: StringJS, "channel"?: integer}) | ([toggle?: boolean, align?: $TextAlign$$Type, color?: integer, button?: StringJS, buttonColor?: integer, line?: StringJS, channel?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ButtonScreenModule$$Original = $ButtonScreenModule;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.InventoryPlusModuleItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$InventoryModuleItem} from "mcjty.rftoolsutility.modules.screen.items.modules.InventoryModuleItem"

export class $InventoryPlusModuleItem extends $InventoryModuleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isPlusModule"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "plusModule"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryPlusModuleItem$$Type = ($InventoryPlusModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryPlusModuleItem$$Original = $InventoryPlusModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.EnergyModuleItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IModuleGuiBuilder$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$IClientScreenModule} from "mcjty.rftoolsbase.api.screens.IClientScreenModule"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IScreenModule} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$GenericModuleItem} from "mcjty.rftoolsbase.tools.GenericModuleItem"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$EnergyBarScreenModule, $EnergyBarScreenModule$$Type} from "mcjty.rftoolsutility.modules.screen.modules.EnergyBarScreenModule"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IComponentsToPreserve$$Interface} from "mcjty.lib.crafting.IComponentsToPreserve"

export class $EnergyModuleItem extends $GenericModuleItem implements $IComponentsToPreserve$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IScreenModule<(never), (never)>)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getComponentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
public "createClientScreenModule"(): $IClientScreenModule<(never)>
public "createServerScreenModule"(): $IScreenModule<(never), (never)>
public "componentType"(): $DataComponentType<($IScreenModule<(never), (never)>)>
public static "data"(arg0: $ItemStack$$Type): $EnergyBarScreenModule
public static "data"(arg0: $ItemStack$$Type, arg1: $Function$$Type<($EnergyBarScreenModule), ($EnergyBarScreenModule$$Type)>): void
public "getModuleName"(): StringJS
public "codec"(): $Codec<($IScreenModule<(never), (never)>)>
public "createGui"(arg0: $IModuleGuiBuilder$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "componentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
get "moduleName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyModuleItem$$Type = ($EnergyModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyModuleItem$$Original = $EnergyModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.modules.EnergyBarScreenModule" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IScreenDataHelper$$Type} from "mcjty.rftoolsbase.api.screens.IScreenDataHelper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IScreenModule$$Interface} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TextAlign, $TextAlign$$Type} from "mcjty.rftoolsbase.api.screens.TextAlign"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$ScreenModuleHelper, $ScreenModuleHelper$$Type} from "mcjty.rftoolsutility.modules.screen.modules.ScreenModuleHelper"
import {$FormatStyle, $FormatStyle$$Type} from "mcjty.rftoolsbase.api.screens.FormatStyle"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BarMode, $BarMode$$Type} from "mcjty.rftoolsbase.api.screens.BarMode"
import {$ILevelRenderHelper, $ILevelRenderHelper$$Type} from "mcjty.rftoolsbase.api.screens.ILevelRenderHelper"
import {$IModuleDataContents} from "mcjty.rftoolsbase.api.screens.data.IModuleDataContents"
import {$Record} from "java.lang.Record"

export class $EnergyBarScreenModule extends $Record implements $IScreenModule$$Interface<($EnergyBarScreenModule), ($IModuleDataContents)> {
static readonly "CODEC": $Codec<($EnergyBarScreenModule)>
static readonly "DEFAULT": $EnergyBarScreenModule
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnergyBarScreenModule)>

constructor(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: StringJS, arg3: integer, arg4: $TextAlign$$Type, arg5: $ILevelRenderHelper$$Type, arg6: StringJS)
constructor(pos: $GlobalPos$$Type, side: $Direction$$Type, helper: $ScreenModuleHelper$$Type, active: boolean, line: StringJS, color: integer, align: $TextAlign$$Type, rfRenderer: $ILevelRenderHelper$$Type, monitor: StringJS)

public "withActive"(arg0: boolean): $EnergyBarScreenModule
public "getAlign"(): $TextAlign
public "withPos"(arg0: $GlobalPos$$Type): $EnergyBarScreenModule
public "withSide"(arg0: $Direction$$Type): $EnergyBarScreenModule
public "withFormat"(arg0: $FormatStyle$$Type): $EnergyBarScreenModule
public "mouseClick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: $Player$$Type): $ItemStack
public "getRfPerTick"(): integer
public "withAlign"(arg0: $TextAlign$$Type): $EnergyBarScreenModule
public "withMonitor"(arg0: StringJS): $EnergyBarScreenModule
public "getBarMode"(): $BarMode
public "withBarMode"(arg0: $BarMode$$Type): $EnergyBarScreenModule
public "isHideBar"(): boolean
public "withHideBar"(arg0: boolean): $EnergyBarScreenModule
public "getNegColor"(): integer
public "withNegColor"(arg0: integer): $EnergyBarScreenModule
public "getPosColor"(): integer
public "withPosColor"(arg0: integer): $EnergyBarScreenModule
public "rfRenderer"(): $ILevelRenderHelper
public "getRfRenderer"(): $ILevelRenderHelper
public "helper"(): $ScreenModuleHelper
public "getFormat"(): $FormatStyle
public "getData"(arg0: $IScreenDataHelper$$Type, arg1: $Level$$Type, arg2: long): $IModuleDataContents
public "active"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "line"(): StringJS
public "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): $EnergyBarScreenModule
public "color"(): integer
public "pos"(): $GlobalPos
public "side"(): $Direction
public "monitor"(): StringJS
public "getLine"(): StringJS
public "align"(): $TextAlign
public "getSide"(): $Direction
public "withLine"(arg0: StringJS): $EnergyBarScreenModule
public "getColor"(): integer
public "withColor"(arg0: integer): $EnergyBarScreenModule
public "getPos"(): $GlobalPos
public "getMonitor"(): StringJS
public "needsController"(): boolean
get "rfPerTick"(): integer
get "barMode"(): $BarMode
get "hideBar"(): boolean
get "negColor"(): integer
get "posColor"(): integer
get "format"(): $FormatStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyBarScreenModule$$Type = ({"line"?: StringJS, "helper"?: $ScreenModuleHelper$$Type, "side"?: $Direction$$Type, "pos"?: $GlobalPos$$Type, "color"?: integer, "active"?: boolean, "monitor"?: StringJS, "align"?: $TextAlign$$Type, "rfRenderer"?: $ILevelRenderHelper$$Type}) | ([line?: StringJS, helper?: $ScreenModuleHelper$$Type, side?: $Direction$$Type, pos?: $GlobalPos$$Type, color?: integer, active?: boolean, monitor?: StringJS, align?: $TextAlign$$Type, rfRenderer?: $ILevelRenderHelper$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyBarScreenModule$$Original = $EnergyBarScreenModule;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.EnergyPlusModuleItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EnergyModuleItem} from "mcjty.rftoolsutility.modules.screen.items.modules.EnergyModuleItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"

export class $EnergyPlusModuleItem extends $EnergyModuleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isPlusModule"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "plusModule"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPlusModuleItem$$Type = ($EnergyPlusModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyPlusModuleItem$$Original = $EnergyPlusModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.ClockModuleItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClockScreenModule, $ClockScreenModule$$Type} from "mcjty.rftoolsutility.modules.screen.modules.ClockScreenModule"
import {$IModuleGuiBuilder$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$IClientScreenModule} from "mcjty.rftoolsbase.api.screens.IClientScreenModule"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IScreenModule} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$GenericModuleItem} from "mcjty.rftoolsbase.tools.GenericModuleItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"

export class $ClockModuleItem extends $GenericModuleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IScreenModule<(never), (never)>)>
public "createClientScreenModule"(): $IClientScreenModule<(never)>
public "createServerScreenModule"(): $IScreenModule<(never), (never)>
public "componentType"(): $DataComponentType<($IScreenModule<(never), (never)>)>
public static "data"(arg0: $ItemStack$$Type, arg1: $Function$$Type<($ClockScreenModule), ($ClockScreenModule$$Type)>): void
public static "data"(arg0: $ItemStack$$Type): $ClockScreenModule
public "getModuleName"(): StringJS
public "codec"(): $Codec<($IScreenModule<(never), (never)>)>
public "createGui"(arg0: $IModuleGuiBuilder$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "moduleName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClockModuleItem$$Type = ($ClockModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClockModuleItem$$Original = $ClockModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.modules.FluidBarScreenModule" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IScreenDataHelper$$Type} from "mcjty.rftoolsbase.api.screens.IScreenDataHelper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IScreenModule, $IScreenModule$$Interface} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$IModuleData} from "mcjty.rftoolsbase.api.screens.data.IModuleData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TextAlign, $TextAlign$$Type} from "mcjty.rftoolsbase.api.screens.TextAlign"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$ScreenModuleHelper, $ScreenModuleHelper$$Type} from "mcjty.rftoolsutility.modules.screen.modules.ScreenModuleHelper"
import {$FormatStyle, $FormatStyle$$Type} from "mcjty.rftoolsbase.api.screens.FormatStyle"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BarMode, $BarMode$$Type} from "mcjty.rftoolsbase.api.screens.BarMode"
import {$ILevelRenderHelper, $ILevelRenderHelper$$Type} from "mcjty.rftoolsbase.api.screens.ILevelRenderHelper"
import {$IModuleDataContents} from "mcjty.rftoolsbase.api.screens.data.IModuleDataContents"
import {$Record} from "java.lang.Record"

export class $FluidBarScreenModule extends $Record implements $IScreenModule$$Interface<($FluidBarScreenModule), ($IModuleDataContents)> {
static readonly "CODEC": $Codec<($FluidBarScreenModule)>
static readonly "DEFAULT": $FluidBarScreenModule
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidBarScreenModule)>

constructor(arg0: $GlobalPos$$Type, arg1: StringJS, arg2: integer, arg3: $TextAlign$$Type, arg4: $ILevelRenderHelper$$Type, arg5: StringJS)
constructor(pos: $GlobalPos$$Type, helper: $ScreenModuleHelper$$Type, active: boolean, line: StringJS, color: integer, align: $TextAlign$$Type, mbRenderer: $ILevelRenderHelper$$Type, monitor: StringJS)

public "withActive"(arg0: boolean): $FluidBarScreenModule
public "getAlign"(): $TextAlign
public "withPos"(arg0: $GlobalPos$$Type): $FluidBarScreenModule
public "withFormat"(arg0: $FormatStyle$$Type): $FluidBarScreenModule
public "mouseClick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: $Player$$Type): $ItemStack
public "getRfPerTick"(): integer
public "withAlign"(arg0: $TextAlign$$Type): $FluidBarScreenModule
public "withMonitor"(arg0: StringJS): $FluidBarScreenModule
public "getBarMode"(): $BarMode
public "withBarMode"(arg0: $BarMode$$Type): $FluidBarScreenModule
public "isHideBar"(): boolean
public "withHideBar"(arg0: boolean): $FluidBarScreenModule
public "getNegColor"(): integer
public "withNegColor"(arg0: integer): $FluidBarScreenModule
public "getPosColor"(): integer
public "withPosColor"(arg0: integer): $FluidBarScreenModule
public "mbRenderer"(): $ILevelRenderHelper
public "getMbRenderer"(): $ILevelRenderHelper
public "helper"(): $ScreenModuleHelper
public "getFormat"(): $FormatStyle
public "getData"(arg0: $IScreenDataHelper$$Type, arg1: $Level$$Type, arg2: long): $IModuleData
public "active"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "line"(): StringJS
public "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): $IScreenModule
public "color"(): integer
public "pos"(): $GlobalPos
public "monitor"(): StringJS
public "getLine"(): StringJS
public "align"(): $TextAlign
public "withLine"(arg0: StringJS): $FluidBarScreenModule
public "getColor"(): integer
public "withColor"(arg0: integer): $FluidBarScreenModule
public "getPos"(): $GlobalPos
public "getMonitor"(): StringJS
public "needsController"(): boolean
get "rfPerTick"(): integer
get "barMode"(): $BarMode
get "hideBar"(): boolean
get "negColor"(): integer
get "posColor"(): integer
get "format"(): $FormatStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBarScreenModule$$Type = ({"helper"?: $ScreenModuleHelper$$Type, "color"?: integer, "pos"?: $GlobalPos$$Type, "line"?: StringJS, "active"?: boolean, "align"?: $TextAlign$$Type, "mbRenderer"?: $ILevelRenderHelper$$Type, "monitor"?: StringJS}) | ([helper?: $ScreenModuleHelper$$Type, color?: integer, pos?: $GlobalPos$$Type, line?: StringJS, active?: boolean, align?: $TextAlign$$Type, mbRenderer?: $ILevelRenderHelper$$Type, monitor?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidBarScreenModule$$Original = $FluidBarScreenModule;}
declare module "mcjty.rftoolsutility.modules.screen.modules.CounterScreenModule" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IScreenDataHelper$$Type} from "mcjty.rftoolsbase.api.screens.IScreenDataHelper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IScreenModule$$Interface} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TextAlign, $TextAlign$$Type} from "mcjty.rftoolsbase.api.screens.TextAlign"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$FormatStyle, $FormatStyle$$Type} from "mcjty.rftoolsbase.api.screens.FormatStyle"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IModuleDataInteger} from "mcjty.rftoolsbase.api.screens.data.IModuleDataInteger"
import {$Record} from "java.lang.Record"

export class $CounterScreenModule extends $Record implements $IScreenModule$$Interface<($CounterScreenModule), ($IModuleDataInteger)> {
static readonly "CODEC": $Codec<($CounterScreenModule)>
static readonly "DEFAULT": $CounterScreenModule
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CounterScreenModule)>

constructor(arg0: $GlobalPos$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: $FormatStyle$$Type, arg5: $TextAlign$$Type, arg6: StringJS)
constructor(pos: $GlobalPos$$Type, active: boolean, line: StringJS, color: integer, cntcolor: integer, format: $FormatStyle$$Type, align: $TextAlign$$Type, monitor: StringJS)

public "withActive"(arg0: boolean): $CounterScreenModule
public "getAlign"(): $TextAlign
public "withPos"(arg0: $GlobalPos$$Type): $CounterScreenModule
public "withFormat"(arg0: $FormatStyle$$Type): $CounterScreenModule
public "mouseClick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: $Player$$Type): $ItemStack
public "getRfPerTick"(): integer
public "withAlign"(arg0: $TextAlign$$Type): $CounterScreenModule
public "withMonitor"(arg0: StringJS): $CounterScreenModule
public "getCntcolor"(): integer
public "withCntcolor"(arg0: integer): $CounterScreenModule
public "cntcolor"(): integer
public "getFormat"(): $FormatStyle
public "getData"(arg0: $IScreenDataHelper$$Type, arg1: $Level$$Type, arg2: long): $IModuleDataInteger
public "active"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "format"(): $FormatStyle
public "line"(): StringJS
public "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): $CounterScreenModule
public "color"(): integer
public "pos"(): $GlobalPos
public "monitor"(): StringJS
public "getLine"(): StringJS
public "align"(): $TextAlign
public "withLine"(arg0: StringJS): $CounterScreenModule
public "getColor"(): integer
public "withColor"(arg0: integer): $CounterScreenModule
public "getPos"(): $GlobalPos
public "getMonitor"(): StringJS
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterScreenModule$$Type = ({"color"?: integer, "pos"?: $GlobalPos$$Type, "line"?: StringJS, "active"?: boolean, "format"?: $FormatStyle$$Type, "align"?: $TextAlign$$Type, "cntcolor"?: integer, "monitor"?: StringJS}) | ([color?: integer, pos?: $GlobalPos$$Type, line?: StringJS, active?: boolean, format?: $FormatStyle$$Type, align?: $TextAlign$$Type, cntcolor?: integer, monitor?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CounterScreenModule$$Original = $CounterScreenModule;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.TextModuleItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IModuleGuiBuilder$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$IClientScreenModule} from "mcjty.rftoolsbase.api.screens.IClientScreenModule"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IScreenModule} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$GenericModuleItem} from "mcjty.rftoolsbase.tools.GenericModuleItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$TextScreenModule, $TextScreenModule$$Type} from "mcjty.rftoolsutility.modules.screen.modules.TextScreenModule"

export class $TextModuleItem extends $GenericModuleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IScreenModule<(never), (never)>)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "createClientScreenModule"(): $IClientScreenModule<(never)>
public "createServerScreenModule"(): $IScreenModule<(never), (never)>
public "componentType"(): $DataComponentType<($IScreenModule<(never), (never)>)>
public static "data"(arg0: $ItemStack$$Type, arg1: $Function$$Type<($TextScreenModule), ($TextScreenModule$$Type)>): void
public static "data"(arg0: $ItemStack$$Type): $TextScreenModule
public "getModuleName"(): StringJS
public "codec"(): $Codec<($IScreenModule<(never), (never)>)>
public "createGui"(arg0: $IModuleGuiBuilder$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "moduleName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextModuleItem$$Type = ($TextModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextModuleItem$$Original = $TextModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.FluidPlusModuleItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$FluidModuleItem} from "mcjty.rftoolsutility.modules.screen.items.modules.FluidModuleItem"

export class $FluidPlusModuleItem extends $FluidModuleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isPlusModule"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "plusModule"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlusModuleItem$$Type = ($FluidPlusModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPlusModuleItem$$Original = $FluidPlusModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.CounterModuleItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IModuleGuiBuilder$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$IClientScreenModule} from "mcjty.rftoolsbase.api.screens.IClientScreenModule"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$CounterScreenModule, $CounterScreenModule$$Type} from "mcjty.rftoolsutility.modules.screen.modules.CounterScreenModule"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IScreenModule} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$GenericModuleItem} from "mcjty.rftoolsbase.tools.GenericModuleItem"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IComponentsToPreserve$$Interface} from "mcjty.lib.crafting.IComponentsToPreserve"

export class $CounterModuleItem extends $GenericModuleItem implements $IComponentsToPreserve$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IScreenModule<(never), (never)>)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getComponentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
public "createClientScreenModule"(): $IClientScreenModule<(never)>
public "createServerScreenModule"(): $IScreenModule<(never), (never)>
public "componentType"(): $DataComponentType<($IScreenModule<(never), (never)>)>
public static "data"(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($CounterScreenModule)>): void
public static "data"(arg0: $ItemStack$$Type): $CounterScreenModule
public "getModuleName"(): StringJS
public "codec"(): $Codec<($IScreenModule<(never), (never)>)>
public "createGui"(arg0: $IModuleGuiBuilder$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "componentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
get "moduleName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterModuleItem$$Type = ($CounterModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CounterModuleItem$$Original = $CounterModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.modules.ClockScreenModule" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IScreenDataHelper$$Type} from "mcjty.rftoolsbase.api.screens.IScreenDataHelper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IScreenModule, $IScreenModule$$Interface} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$IModuleData} from "mcjty.rftoolsbase.api.screens.data.IModuleData"
import {$Record} from "java.lang.Record"

export class $ClockScreenModule extends $Record implements $IScreenModule$$Interface<($ClockScreenModule), ($IModuleData)> {
static readonly "CODEC": $Codec<($ClockScreenModule)>
static readonly "DEFAULT": $ClockScreenModule
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClockScreenModule)>

constructor(color: integer, line: StringJS, large: boolean)

public "large"(): boolean
public "isLarge"(): boolean
public "mouseClick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: $Player$$Type): $ItemStack
public "withLarge"(arg0: boolean): $ClockScreenModule
public "getRfPerTick"(): integer
public "getData"(arg0: $IScreenDataHelper$$Type, arg1: $Level$$Type, arg2: long): $IModuleData
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "line"(): StringJS
public "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): $IScreenModule
public "color"(): integer
public "getLine"(): StringJS
public "withLine"(arg0: StringJS): $ClockScreenModule
public "getColor"(): integer
public "withColor"(arg0: integer): $ClockScreenModule
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClockScreenModule$$Type = ({"large"?: boolean, "color"?: integer, "line"?: StringJS}) | ([large?: boolean, color?: integer, line?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClockScreenModule$$Original = $ClockScreenModule;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.CounterPlusModuleItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$CounterModuleItem} from "mcjty.rftoolsutility.modules.screen.items.modules.CounterModuleItem"

export class $CounterPlusModuleItem extends $CounterModuleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isPlusModule"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "plusModule"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterPlusModuleItem$$Type = ($CounterPlusModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CounterPlusModuleItem$$Original = $CounterPlusModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.blocks.ScreenControllerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseBlock} from "mcjty.lib.blocks.BaseBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $ScreenControllerBlock extends $BaseBlock {
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
static readonly "NONE_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "ROTATING_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "HORIZ_PROPERTIES": ($Property<(never)>)[]
static readonly "UPDATE_CLIENTS": integer

constructor()

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenControllerBlock$$Type = ($ScreenControllerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenControllerBlock$$Original = $ScreenControllerBlock;}
declare module "mcjty.rftoolsutility.modules.screen.modules.RedstoneScreenModule" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IScreenDataHelper$$Type} from "mcjty.rftoolsbase.api.screens.IScreenDataHelper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IScreenModule$$Interface} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TextAlign, $TextAlign$$Type} from "mcjty.rftoolsbase.api.screens.TextAlign"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IModuleDataInteger} from "mcjty.rftoolsbase.api.screens.data.IModuleDataInteger"
import {$Record} from "java.lang.Record"

export class $RedstoneScreenModule extends $Record implements $IScreenModule$$Interface<($RedstoneScreenModule), ($IModuleDataInteger)> {
static readonly "CODEC": $Codec<($RedstoneScreenModule)>
static readonly "DEFAULT": $RedstoneScreenModule
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RedstoneScreenModule)>

constructor(arg0: integer, arg1: $GlobalPos$$Type, arg2: ($Direction$$Type)?, arg3: StringJS, arg4: StringJS, arg5: StringJS, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: $TextAlign$$Type, arg11: StringJS)
constructor(arg0: integer, arg1: $GlobalPos$$Type, arg2: $Direction$$Type)
constructor(channel: integer, pos: $GlobalPos$$Type, side: $Direction$$Type, active: boolean, line: StringJS, yestext: StringJS, notext: StringJS, color: integer, yescolor: integer, nocolor: integer, analog: boolean, align: $TextAlign$$Type, monitor: StringJS)
constructor(arg0: integer, arg1: $GlobalPos$$Type, arg2: $Direction$$Type, arg3: StringJS, arg4: StringJS, arg5: StringJS, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: $TextAlign$$Type, arg11: StringJS)

public "withActive"(arg0: boolean): $RedstoneScreenModule
public "getAlign"(): $TextAlign
public "withPos"(arg0: $GlobalPos$$Type): $RedstoneScreenModule
public "withSide"(arg0: $Direction$$Type): $RedstoneScreenModule
public "analog"(): boolean
public "withAnalog"(arg0: boolean): $RedstoneScreenModule
public "withChannel"(arg0: integer): $RedstoneScreenModule
public "mouseClick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: $Player$$Type): $ItemStack
public "getRfPerTick"(): integer
public "withAlign"(arg0: $TextAlign$$Type): $RedstoneScreenModule
public "withMonitor"(arg0: StringJS): $RedstoneScreenModule
public "isAnalog"(): boolean
public "getNocolor"(): integer
public "withNocolor"(arg0: integer): $RedstoneScreenModule
public "getNotext"(): StringJS
public "withNotext"(arg0: StringJS): $RedstoneScreenModule
public "getYescolor"(): integer
public "withYescolor"(arg0: integer): $RedstoneScreenModule
public "getYestext"(): StringJS
public "withYestext"(arg0: StringJS): $RedstoneScreenModule
public "yescolor"(): integer
public "nocolor"(): integer
public "yestext"(): StringJS
public "notext"(): StringJS
public "getData"(arg0: $IScreenDataHelper$$Type, arg1: $Level$$Type, arg2: long): $IModuleDataInteger
public "active"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "line"(): StringJS
public "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): $RedstoneScreenModule
public "color"(): integer
public "pos"(): $GlobalPos
public "getChannel"(): integer
public "channel"(): integer
public "side"(): $Direction
public "monitor"(): StringJS
public "getLine"(): StringJS
public "align"(): $TextAlign
public "getSide"(): $Direction
public "withLine"(arg0: StringJS): $RedstoneScreenModule
public "getColor"(): integer
public "withColor"(arg0: integer): $RedstoneScreenModule
public "getPos"(): $GlobalPos
public "getMonitor"(): StringJS
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneScreenModule$$Type = ({"active"?: boolean, "notext"?: StringJS, "side"?: $Direction$$Type, "monitor"?: StringJS, "color"?: integer, "align"?: $TextAlign$$Type, "line"?: StringJS, "channel"?: integer, "pos"?: $GlobalPos$$Type, "yestext"?: StringJS, "analog"?: boolean, "yescolor"?: integer, "nocolor"?: integer}) | ([active?: boolean, notext?: StringJS, side?: $Direction$$Type, monitor?: StringJS, color?: integer, align?: $TextAlign$$Type, line?: StringJS, channel?: integer, pos?: $GlobalPos$$Type, yestext?: StringJS, analog?: boolean, yescolor?: integer, nocolor?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneScreenModule$$Original = $RedstoneScreenModule;}
declare module "mcjty.rftoolsutility.modules.screen.blocks.IAttackableBlock" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IAttackableBlock$$Interface {

(arg0: $Level, arg1: $BlockPos): void
}

export class $IAttackableBlock implements $IAttackableBlock$$Interface {
 "doAttack"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttackableBlock$$Type = ((arg0: $Level, arg1: $BlockPos) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAttackableBlock$$Original = $IAttackableBlock;}
declare module "mcjty.rftoolsutility.modules.screen.items.ScreenLinkItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ITabletSupport$$Interface} from "mcjty.rftoolsbase.api.various.ITabletSupport"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ScreenLinkItem extends $Item implements $ITabletSupport$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "openGui"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getInstalledTablet"(): $Item
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "installedTablet"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenLinkItem$$Type = ($ScreenLinkItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenLinkItem$$Original = $ScreenLinkItem;}
declare module "mcjty.rftoolsutility.modules.screen.modules.InventoryScreenModule" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IScreenDataHelper$$Type} from "mcjty.rftoolsbase.api.screens.IScreenDataHelper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InventoryScreenModule$ModuleDataStacks} from "mcjty.rftoolsutility.modules.screen.modules.InventoryScreenModule$ModuleDataStacks"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IScreenModule, $IScreenModule$$Interface} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $InventoryScreenModule extends $Record implements $IScreenModule$$Interface<($InventoryScreenModule), ($InventoryScreenModule$ModuleDataStacks)> {
static readonly "CODEC": $Codec<($InventoryScreenModule)>
static readonly "DEFAULT": $InventoryScreenModule
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($InventoryScreenModule)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $GlobalPos$$Type, arg5: StringJS)
constructor(slot1: integer, slot2: integer, slot3: integer, slot4: integer, pos: $GlobalPos$$Type, active: boolean, monitor: StringJS)

public "withActive"(arg0: boolean): $InventoryScreenModule
public "slot4"(): integer
public "slot3"(): integer
public "withPos"(arg0: $GlobalPos$$Type): $InventoryScreenModule
public "mouseClick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: $Player$$Type): $ItemStack
public "getRfPerTick"(): integer
public "getSlot4"(): integer
public "withSlot4"(arg0: integer): $InventoryScreenModule
public "getSlot3"(): integer
public "withSlot3"(arg0: integer): $InventoryScreenModule
public "getSlot2"(): integer
public "withSlot2"(arg0: integer): $InventoryScreenModule
public "getSlot1"(): integer
public "withSlot1"(arg0: integer): $InventoryScreenModule
public "withMonitor"(arg0: StringJS): $InventoryScreenModule
public "getData"(arg0: $IScreenDataHelper$$Type, arg1: $Level$$Type, arg2: long): $InventoryScreenModule$ModuleDataStacks
public "active"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): $IScreenModule
public "pos"(): $GlobalPos
public "monitor"(): StringJS
public "getPos"(): $GlobalPos
public "slot2"(): integer
public "slot1"(): integer
public "getMonitor"(): StringJS
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryScreenModule$$Type = ({"active"?: boolean, "pos"?: $GlobalPos$$Type, "monitor"?: StringJS, "slot1"?: integer, "slot2"?: integer, "slot3"?: integer, "slot4"?: integer}) | ([active?: boolean, pos?: $GlobalPos$$Type, monitor?: StringJS, slot1?: integer, slot2?: integer, slot3?: integer, slot4?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryScreenModule$$Original = $InventoryScreenModule;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.FluidModuleItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IModuleGuiBuilder$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$FluidBarScreenModule, $FluidBarScreenModule$$Type} from "mcjty.rftoolsutility.modules.screen.modules.FluidBarScreenModule"
import {$IClientScreenModule} from "mcjty.rftoolsbase.api.screens.IClientScreenModule"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IScreenModule} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$GenericModuleItem} from "mcjty.rftoolsbase.tools.GenericModuleItem"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IComponentsToPreserve$$Interface} from "mcjty.lib.crafting.IComponentsToPreserve"

export class $FluidModuleItem extends $GenericModuleItem implements $IComponentsToPreserve$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IScreenModule<(never), (never)>)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getComponentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
public "createClientScreenModule"(): $IClientScreenModule<(never)>
public "createServerScreenModule"(): $IScreenModule<(never), (never)>
public "componentType"(): $DataComponentType<($IScreenModule<(never), (never)>)>
public static "data"(arg0: $ItemStack$$Type, arg1: $Function$$Type<($FluidBarScreenModule), ($FluidBarScreenModule$$Type)>): void
public static "data"(arg0: $ItemStack$$Type): $FluidBarScreenModule
public "getModuleName"(): StringJS
public "codec"(): $Codec<($IScreenModule<(never), (never)>)>
public "createGui"(arg0: $IModuleGuiBuilder$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "componentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
get "moduleName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidModuleItem$$Type = ($FluidModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidModuleItem$$Original = $FluidModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.items.modules.InventoryModuleItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IModuleGuiBuilder$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$IClientScreenModule} from "mcjty.rftoolsbase.api.screens.IClientScreenModule"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IScreenModule} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$GenericModuleItem} from "mcjty.rftoolsbase.tools.GenericModuleItem"
import {$InventoryScreenModule, $InventoryScreenModule$$Type} from "mcjty.rftoolsutility.modules.screen.modules.InventoryScreenModule"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IComponentsToPreserve$$Interface} from "mcjty.lib.crafting.IComponentsToPreserve"

export class $InventoryModuleItem extends $GenericModuleItem implements $IComponentsToPreserve$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IScreenModule<(never), (never)>)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getComponentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
public "createClientScreenModule"(): $IClientScreenModule<(never)>
public "createServerScreenModule"(): $IScreenModule<(never), (never)>
public "componentType"(): $DataComponentType<($IScreenModule<(never), (never)>)>
public static "data"(arg0: $ItemStack$$Type): $InventoryScreenModule
public static "data"(arg0: $ItemStack$$Type, arg1: $Function$$Type<($InventoryScreenModule), ($InventoryScreenModule$$Type)>): void
public "getModuleName"(): StringJS
public "codec"(): $Codec<($IScreenModule<(never), (never)>)>
public "createGui"(arg0: $IModuleGuiBuilder$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "componentsToPreserve"(): $Collection<($DataComponentType<(never)>)>
get "moduleName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryModuleItem$$Type = ($InventoryModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryModuleItem$$Original = $InventoryModuleItem;}
declare module "mcjty.rftoolsutility.modules.screen.modules.MachineInformationScreenModule" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IScreenDataHelper$$Type} from "mcjty.rftoolsbase.api.screens.IScreenDataHelper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IScreenModule$$Interface} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$IModuleData} from "mcjty.rftoolsbase.api.screens.data.IModuleData"
import {$IModuleDataString} from "mcjty.rftoolsbase.api.screens.data.IModuleDataString"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $MachineInformationScreenModule extends $Record implements $IScreenModule$$Interface<($MachineInformationScreenModule), ($IModuleDataString)> {
static readonly "CODEC": $Codec<($MachineInformationScreenModule)>
static readonly "DEFAULT": $MachineInformationScreenModule
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MachineInformationScreenModule)>

constructor(arg0: integer, arg1: $GlobalPos$$Type, arg2: integer, arg3: integer, arg4: StringJS)
constructor(tag: integer, pos: $GlobalPos$$Type, active: boolean, labcolor: integer, txtcolor: integer, monitor: StringJS)

public "withActive"(arg0: boolean): $MachineInformationScreenModule
public "withPos"(arg0: $GlobalPos$$Type): $MachineInformationScreenModule
public "mouseClick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: $Player$$Type): $ItemStack
public "getRfPerTick"(): integer
public "getTxtcolor"(): integer
public "withTxtcolor"(arg0: integer): $MachineInformationScreenModule
public "getLabcolor"(): integer
public "withLabcolor"(arg0: integer): $MachineInformationScreenModule
public "withMonitor"(arg0: StringJS): $MachineInformationScreenModule
public "labcolor"(): integer
public "txtcolor"(): integer
public "tag"(): integer
public "withTag"(arg0: integer): $MachineInformationScreenModule
public "getTag"(): integer
public "getData"(arg0: $IScreenDataHelper$$Type, arg1: $Level$$Type, arg2: long): $IModuleData
public "active"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): $MachineInformationScreenModule
public "pos"(): $GlobalPos
public "monitor"(): StringJS
public "getPos"(): $GlobalPos
public "getMonitor"(): StringJS
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInformationScreenModule$$Type = ({"tag"?: integer, "labcolor"?: integer, "active"?: boolean, "txtcolor"?: integer, "monitor"?: StringJS, "pos"?: $GlobalPos$$Type}) | ([tag?: integer, labcolor?: integer, active?: boolean, txtcolor?: integer, monitor?: StringJS, pos?: $GlobalPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineInformationScreenModule$$Original = $MachineInformationScreenModule;}
