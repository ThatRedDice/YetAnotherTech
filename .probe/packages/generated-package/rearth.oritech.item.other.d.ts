declare module "rearth.oritech.item.other.ColorCartridgeItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ColorableMachine$ColorVariant, $ColorableMachine$ColorVariant$$Type} from "rearth.oritech.util.ColorableMachine$ColorVariant"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ColorCartridgeItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "variant": $ColorableMachine$ColorVariant
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $ColorableMachine$ColorVariant$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorCartridgeItem$$Type = ($ColorCartridgeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorCartridgeItem$$Original = $ColorCartridgeItem;}
declare module "rearth.oritech.item.other.SmallEnergyStorageBlockItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$EnergyApi$ItemProvider$$Interface} from "rearth.oritech.api.energy.EnergyApi$ItemProvider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $SmallEnergyStorageBlockItem extends $BlockItem implements $EnergyApi$ItemProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getEnergyStorage"(arg0: $ItemStack$$Type): $EnergyApi$EnergyStorage
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
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
export type $SmallEnergyStorageBlockItem$$Type = ($SmallEnergyStorageBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmallEnergyStorageBlockItem$$Original = $SmallEnergyStorageBlockItem;}
declare module "rearth.oritech.item.other.MobCaptureItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $MobCaptureItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "targets": $List<($EntityType<(never)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $List$$Type<($EntityType$$Type<(never)>)>)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobCaptureItem$$Type = ($MobCaptureItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobCaptureItem$$Original = $MobCaptureItem;}
declare module "rearth.oritech.item.other.SmallFluidTankBlockItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$FluidApi$ItemProvider$$Interface} from "rearth.oritech.api.fluid.FluidApi$ItemProvider"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$FluidApi$SingleSlotStorage} from "rearth.oritech.api.fluid.FluidApi$SingleSlotStorage"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $SmallFluidTankBlockItem extends $BlockItem implements $FluidApi$ItemProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getFluidStorage"(arg0: $ItemStack$$Type): $FluidApi$SingleSlotStorage
public "getName"(arg0: $ItemStack$$Type): $Component
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
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
export type $SmallFluidTankBlockItem$$Type = ($SmallFluidTankBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmallFluidTankBlockItem$$Original = $SmallFluidTankBlockItem;}
declare module "rearth.oritech.item.other.CustomTooltipItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $CustomTooltipItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: StringJS)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTooltipItem$$Type = ($CustomTooltipItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomTooltipItem$$Original = $CustomTooltipItem;}
