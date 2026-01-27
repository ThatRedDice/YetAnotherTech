declare module "com.nigthbeam.reconstructedwands.items.core.ItemCoreAngel" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IWandCore$$Interface} from "com.nigthbeam.reconstructedwands.api.IWandCore"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$IWandAction} from "com.nigthbeam.reconstructedwands.api.IWandAction"
import {$Item} from "net.minecraft.world.item.Item"

export class $ItemCoreAngel extends $Item implements $IWandCore$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getWandAction"(): $IWandAction
public "getRegistryName"(): $ResourceLocation
public "getColor"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wandAction"(): $IWandAction
get "registryName"(): $ResourceLocation
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCoreAngel$$Type = ($ItemCoreAngel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCoreAngel$$Original = $ItemCoreAngel;}
declare module "com.nigthbeam.reconstructedwands.items.wand.ItemWandInfinity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemWand} from "com.nigthbeam.reconstructedwands.items.wand.ItemWand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $ItemWandInfinity extends $ItemWand {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "remainingDurability"(arg0: $ItemStack$$Type): integer
public "isInfinityWand"(): boolean
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "infinityWand"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWandInfinity$$Type = ($ItemWandInfinity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemWandInfinity$$Original = $ItemWandInfinity;}
declare module "com.nigthbeam.reconstructedwands.items.wand.ItemWand" {
import {$IOption$$Type} from "com.nigthbeam.reconstructedwands.basics.option.IOption"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$WandJob} from "com.nigthbeam.reconstructedwands.wand.WandJob"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ItemWand extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "remainingDurability"(arg0: $ItemStack$$Type): integer
public "isInfinityWand"(): boolean
public static "getWandJob"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockHitResult$$Type, arg3: $ItemStack$$Type): $WandJob
public static "optionMessage"(arg0: $Player$$Type, arg1: $IOption$$Type<(never)>): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "infinityWand"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWand$$Type = ($ItemWand);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemWand$$Original = $ItemWand;}
declare module "com.nigthbeam.reconstructedwands.items.core.ItemCoreDestruction" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IWandCore$$Interface} from "com.nigthbeam.reconstructedwands.api.IWandCore"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$IWandAction} from "com.nigthbeam.reconstructedwands.api.IWandAction"
import {$Item} from "net.minecraft.world.item.Item"

export class $ItemCoreDestruction extends $Item implements $IWandCore$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getWandAction"(): $IWandAction
public "getRegistryName"(): $ResourceLocation
public "getColor"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wandAction"(): $IWandAction
get "registryName"(): $ResourceLocation
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCoreDestruction$$Type = ($ItemCoreDestruction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCoreDestruction$$Original = $ItemCoreDestruction;}
declare module "com.nigthbeam.reconstructedwands.items.wand.ItemWandBasic" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemWand} from "com.nigthbeam.reconstructedwands.items.wand.ItemWand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $ItemWandBasic extends $ItemWand {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $Tier$$Type)

public "remainingDurability"(arg0: $ItemStack$$Type): integer
public "isInfinityWand"(): boolean
public "getTier"(): $Tier
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "infinityWand"(): boolean
get "tier"(): $Tier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWandBasic$$Type = ($ItemWandBasic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemWandBasic$$Original = $ItemWandBasic;}
