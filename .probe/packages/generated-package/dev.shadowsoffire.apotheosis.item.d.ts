declare module "dev.shadowsoffire.apotheosis.item.TooltipItem" {
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

export class $TooltipItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipItem$$Type = ($TooltipItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipItem$$Original = $TooltipItem;}
declare module "dev.shadowsoffire.apotheosis.item.PotionCharmItem" {
import {$MobEffectInstance} from "net.minecraft.world.effect.MobEffectInstance"
import {$BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITabFiller, $ITabFiller$$Interface} from "dev.shadowsoffire.placebo.tabs.ITabFiller"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PotionCharmItem extends $Item implements $ITabFiller$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "getEnchantmentValue"(): integer
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
public static "isValidPotion"(arg0: $Holder$$Type<($Potion)>): boolean
public "getName"(arg0: $ItemStack$$Type): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getDefaultInstance"(): $ItemStack
public static "hasEffect"(arg0: $ItemStack$$Type): boolean
public static "getEffect"(arg0: $ItemStack$$Type): $MobEffectInstance
public "fillItemCategory"(arg0: $CreativeModeTab$$Type, arg1: $BuildCreativeModeTabContentsEvent$$Type): void
public static "delegating"(arg0: $Supplier$$Type<($ItemLike$$Type)>): $ITabFiller
public static "simple"(arg0: $ItemLike$$Type): $ITabFiller
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
get "defaultInstance"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCharmItem$$Type = ($PotionCharmItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionCharmItem$$Original = $PotionCharmItem;}
declare module "dev.shadowsoffire.apotheosis.item.BossSummonerItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $BossSummonerItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossSummonerItem$$Type = ($BossSummonerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossSummonerItem$$Original = $BossSummonerItem;}
