declare module "com.direwolf20.buildinggadgets2.common.items.TemplateItem" {
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

export class $TemplateItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateItem$$Type = ($TemplateItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemplateItem$$Original = $TemplateItem;}
declare module "com.direwolf20.buildinggadgets2.common.items.GadgetDestruction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$BaseGadget} from "com.direwolf20.buildinggadgets2.common.items.BaseGadget"
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
import {$GadgetTarget} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"

export class $GadgetDestruction extends $BaseGadget {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getEnergyCost"(): integer
public "gadgetTarget"(): $GadgetTarget
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "undo"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
public "getEnergyMax"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "energyCost"(): integer
get "energyMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetDestruction$$Type = ($GadgetDestruction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GadgetDestruction$$Original = $GadgetDestruction;}
declare module "com.direwolf20.buildinggadgets2.common.blocks.RenderBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RenderBlock extends $Block implements $EntityBlock$$Interface {
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

/**
 * 
 * @deprecated
 */
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBlock$$Type = ($RenderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderBlock$$Original = $RenderBlock;}
declare module "com.direwolf20.buildinggadgets2.common.items.BaseGadget" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
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
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ItemActionContext$$Type} from "com.direwolf20.buildinggadgets2.util.context.ItemActionContext"
import {$GadgetTarget} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"

export class $BaseGadget extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "getHitPos"(arg0: $ItemActionContext$$Type): $BlockPos
public "getEnergyCost"(): integer
public "gadgetTarget"(): $GadgetTarget
public "bindToInventory"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type): boolean
public "rotateModes"(arg0: $ItemStack$$Type): $ResourceLocation
public static "getGadget"(arg0: $Player$$Type): $ItemStack
public "canUndo"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "undo"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
public "getEnergyMax"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "energyCost"(): integer
get "energyMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseGadget$$Type = ($BaseGadget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseGadget$$Original = $BaseGadget;}
declare module "com.direwolf20.buildinggadgets2.common.items.Redprint" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $Redprint extends $Item {
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
export type $Redprint$$Type = ($Redprint);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Redprint$$Original = $Redprint;}
declare module "com.direwolf20.buildinggadgets2.common.items.GadgetBuilding" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BaseGadget} from "com.direwolf20.buildinggadgets2.common.items.BaseGadget"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$GadgetTarget} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"

export class $GadgetBuilding extends $BaseGadget {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getEnergyCost"(): integer
public "gadgetTarget"(): $GadgetTarget
public "getEnergyMax"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "energyCost"(): integer
get "energyMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetBuilding$$Type = ($GadgetBuilding);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GadgetBuilding$$Original = $GadgetBuilding;}
declare module "com.direwolf20.buildinggadgets2.common.items.GadgetCopyPaste" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$BaseGadget} from "com.direwolf20.buildinggadgets2.common.items.BaseGadget"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemActionContext$$Type} from "com.direwolf20.buildinggadgets2.util.context.ItemActionContext"
import {$GadgetTarget} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"

export class $GadgetCopyPaste extends $BaseGadget {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getEnergyCost"(): integer
public "gadgetTarget"(): $GadgetTarget
public "buildAndStore"(arg0: $ItemActionContext$$Type, arg1: $ItemStack$$Type): void
public "getEnergyMax"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "energyCost"(): integer
get "energyMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetCopyPaste$$Type = ($GadgetCopyPaste);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GadgetCopyPaste$$Original = $GadgetCopyPaste;}
declare module "com.direwolf20.buildinggadgets2.common.items.GadgetCutPaste" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$BaseGadget} from "com.direwolf20.buildinggadgets2.common.items.BaseGadget"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GadgetTarget} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GadgetCutPaste extends $BaseGadget {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "cutAndStore"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public static "customCutValidation"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $BlockPos$$Type): boolean
public "getEnergyCost"(): integer
public "gadgetTarget"(): $GadgetTarget
public "getEnergyMax"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "energyCost"(): integer
get "energyMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetCutPaste$$Type = ($GadgetCutPaste);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GadgetCutPaste$$Original = $GadgetCutPaste;}
declare module "com.direwolf20.buildinggadgets2.common.blocks.TemplateManager" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TemplateManager extends $Block implements $EntityBlock$$Interface {
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
static readonly "FACING": $DirectionProperty

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateManager$$Type = ($TemplateManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemplateManager$$Original = $TemplateManager;}
declare module "com.direwolf20.buildinggadgets2.common.items.GadgetExchanger" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$BaseGadget} from "com.direwolf20.buildinggadgets2.common.items.BaseGadget"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$GadgetTarget} from "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget"

export class $GadgetExchanger extends $BaseGadget {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "getEnchantmentValue"(): integer
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getEnergyCost"(): integer
public "gadgetTarget"(): $GadgetTarget
public "undo"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
public "getEnergyMax"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
get "energyCost"(): integer
get "energyMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetExchanger$$Type = ($GadgetExchanger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GadgetExchanger$$Original = $GadgetExchanger;}
