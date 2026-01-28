declare module "com.blakebr0.extendedcrafting.item.HandheldTableItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BaseItem} from "com.blakebr0.cucumber.item.BaseItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"

export class $HandheldTableItem extends $BaseItem {
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
export type $HandheldTableItem$$Type = ($HandheldTableItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HandheldTableItem$$Original = $HandheldTableItem;}
declare module "com.blakebr0.extendedcrafting.item.SingularityItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BaseItem} from "com.blakebr0.cucumber.item.BaseItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IColored$$Interface} from "com.blakebr0.cucumber.iface.IColored"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $SingularityItem extends $BaseItem implements $IColored$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getName"(arg0: $ItemStack$$Type): $Component
public "getColor"(arg0: integer, arg1: $ItemStack$$Type): integer
public "getColor"(arg0: integer): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingularityItem$$Type = ($SingularityItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingularityItem$$Original = $SingularityItem;}
declare module "com.blakebr0.extendedcrafting.item.RecipeMakerItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BaseItem} from "com.blakebr0.cucumber.item.BaseItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $RecipeMakerItem extends $BaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeMakerItem$$Type = ($RecipeMakerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeMakerItem$$Original = $RecipeMakerItem;}
declare module "com.blakebr0.extendedcrafting.item.UltimateSingularityItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BaseItem} from "com.blakebr0.cucumber.item.BaseItem"
import {$Item} from "net.minecraft.world.item.Item"

export class $UltimateSingularityItem extends $BaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isFoil"(arg0: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UltimateSingularityItem$$Type = ($UltimateSingularityItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UltimateSingularityItem$$Original = $UltimateSingularityItem;}
