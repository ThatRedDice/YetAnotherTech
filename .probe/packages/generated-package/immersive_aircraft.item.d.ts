declare module "immersive_aircraft.item.WeaponItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$DescriptionItem} from "immersive_aircraft.item.DescriptionItem"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$WeaponMount$Type, $WeaponMount$Type$$Type} from "immersive_aircraft.entity.misc.WeaponMount$Type"

export class $WeaponItem extends $DescriptionItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, mountType: $WeaponMount$Type$$Type)

public "getMountType"(): $WeaponMount$Type
public "appendHoverText"(stack: $ItemStack$$Type, ctx: $Item$TooltipContext$$Type, tooltips: $List$$Type<($Component$$Type)>, flags: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "mountType"(): $WeaponMount$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponItem$$Type = ($WeaponItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeaponItem$$Original = $WeaponItem;}
declare module "immersive_aircraft.item.VehicleItem$VehicleConstructor" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$VehicleEntity, $VehicleEntity$$Type} from "immersive_aircraft.entity.VehicleEntity"

export interface $VehicleItem$VehicleConstructor$$Interface {

(arg0: $Level): $VehicleEntity$$Type
}

export class $VehicleItem$VehicleConstructor implements $VehicleItem$VehicleConstructor$$Interface {
 "create"(arg0: $Level$$Type): $VehicleEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleItem$VehicleConstructor$$Type = ((arg0: $Level) => $VehicleEntity$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VehicleItem$VehicleConstructor$$Original = $VehicleItem$VehicleConstructor;}
declare module "immersive_aircraft.item.DescriptionItem" {
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

export class $DescriptionItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, ctx: $Item$TooltipContext$$Type, tooltips: $List$$Type<($Component$$Type)>, flags: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DescriptionItem$$Type = ($DescriptionItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DescriptionItem$$Original = $DescriptionItem;}
declare module "immersive_aircraft.item.AircraftItem$AircraftConstructor" {
import {$VehicleItem$VehicleConstructor$$Interface} from "immersive_aircraft.item.VehicleItem$VehicleConstructor"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AircraftEntity, $AircraftEntity$$Type} from "immersive_aircraft.entity.AircraftEntity"

export interface $AircraftItem$AircraftConstructor$$Interface extends $VehicleItem$VehicleConstructor$$Interface {

(arg0: $Level): $AircraftEntity$$Type
}

export class $AircraftItem$AircraftConstructor implements $AircraftItem$AircraftConstructor$$Interface {
 "create"(arg0: $Level$$Type): $AircraftEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AircraftItem$AircraftConstructor$$Type = ((arg0: $Level) => $AircraftEntity$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AircraftItem$AircraftConstructor$$Original = $AircraftItem$AircraftConstructor;}
declare module "immersive_aircraft.item.VehicleItem" {
import {$VehicleItem$VehicleConstructor$$Type} from "immersive_aircraft.item.VehicleItem$VehicleConstructor"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$DescriptionItem} from "immersive_aircraft.item.DescriptionItem"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $VehicleItem extends $DescriptionItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, arg1: $VehicleItem$VehicleConstructor$$Type)
constructor(settings: $Item$Properties$$Type, arg1: $VehicleItem$VehicleConstructor$$Type, onWater: boolean)

public "appendHoverText"(stack: $ItemStack$$Type, ctx: $Item$TooltipContext$$Type, tooltips: $List$$Type<($Component$$Type)>, flags: $TooltipFlag$$Type): void
public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleItem$$Type = ($VehicleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VehicleItem$$Original = $VehicleItem;}
declare module "immersive_aircraft.item.AircraftItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$VehicleItem} from "immersive_aircraft.item.VehicleItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AircraftItem$AircraftConstructor$$Type} from "immersive_aircraft.item.AircraftItem$AircraftConstructor"

export class $AircraftItem extends $VehicleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, arg1: $AircraftItem$AircraftConstructor$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AircraftItem$$Type = ($AircraftItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AircraftItem$$Original = $AircraftItem;}
declare module "immersive_aircraft.item.DyeableAircraftItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AircraftItem$AircraftConstructor$$Type} from "immersive_aircraft.item.AircraftItem$AircraftConstructor"
import {$AircraftItem} from "immersive_aircraft.item.AircraftItem"

export class $DyeableAircraftItem extends $AircraftItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, arg1: $AircraftItem$AircraftConstructor$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeableAircraftItem$$Type = ($DyeableAircraftItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DyeableAircraftItem$$Original = $DyeableAircraftItem;}
