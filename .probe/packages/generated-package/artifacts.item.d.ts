declare module "artifacts.item.EverlastingFoodItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ArtifactItem} from "artifacts.item.ArtifactItem"
import {$FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $EverlastingFoodItem extends $ArtifactItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(food: $FoodProperties$$Type, eatingCooldown: $Supplier$$Type<(integer)>, isEnabled: $Supplier$$Type<(boolean)>)

public "isCosmetic"(): boolean
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $LivingEntity$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "cosmetic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingFoodItem$$Type = ($EverlastingFoodItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EverlastingFoodItem$$Original = $EverlastingFoodItem;}
declare module "artifacts.item.UmbrellaItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ArtifactItem} from "artifacts.item.ArtifactItem"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $UmbrellaItem extends $ArtifactItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isCosmetic"(): boolean
public static "shouldGlide"(entity: $LivingEntity$$Type): boolean
public static "onLivingUpdate"(entity: $LivingEntity$$Type): void
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "canPerformAction"(stack: $ItemStack$$Type, toolAction: $ItemAbility$$Type): boolean
public static "isHoldingUmbrellaUpright"(entity: $LivingEntity$$Type): boolean
public static "isHoldingUmbrellaUpright"(entity: $Entity$$Type): boolean
public static "isHoldingUmbrellaUpright"(entity: $LivingEntity$$Type, hand: $InteractionHand$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "cosmetic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UmbrellaItem$$Type = ($UmbrellaItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UmbrellaItem$$Original = $UmbrellaItem;}
declare module "artifacts.item.ArtifactItem" {
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

export class $ArtifactItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltipList: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "isCosmetic"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "cosmetic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactItem$$Type = ($ArtifactItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactItem$$Original = $ArtifactItem;}
declare module "artifacts.item.WearableArtifactItem" {
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

export class $WearableArtifactItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WearableArtifactItem$$Type = ($WearableArtifactItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WearableArtifactItem$$Original = $WearableArtifactItem;}
