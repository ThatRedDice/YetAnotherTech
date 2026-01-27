declare module "com.supermartijn642.core.item.ItemProperties" {
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Item$Properties} from "net.minecraft.world.item.Item$Properties"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$ItemRarity$$Type} from "com.supermartijn642.core.item.ItemRarity"
import {$FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"

export class $ItemProperties {
public "durability"(durability: integer): $ItemProperties
public "rarity"(rarity: $Rarity$$Type): $ItemProperties
public "rarity"(rarity: $ItemRarity$$Type): $ItemProperties
public "craftRemainder"(item: $Item$$Type): $ItemProperties
public "fireResistant"(): $ItemProperties
/**
 * 
 * @deprecated
 */
public "toUnderlying"(): $Item$Properties
public "maxStackSize"(maxStackSize: integer): $ItemProperties
public "group"(group: $CreativeModeTab$$Type): $ItemProperties
public "component"<T>(type: $DataComponentType$$Type<(T)>, value: T): $ItemProperties
public static "create"(): $ItemProperties
public "food"(foodProperties: $FoodProperties$$Type): $ItemProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemProperties$$Type = ($ItemProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemProperties$$Original = $ItemProperties;}
declare module "com.supermartijn642.core.item.BaseItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map} from "java.util.Map"
import {$BaseItem$InteractionFeedback} from "com.supermartijn642.core.item.BaseItem$InteractionFeedback"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemProperties$$Type} from "com.supermartijn642.core.item.ItemProperties"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BaseItem$ItemUseResult} from "com.supermartijn642.core.item.BaseItem$ItemUseResult"

export class $BaseItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $ItemProperties$$Type)
constructor(properties: $Item$Properties$$Type)

public "interactWithEntity"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $BaseItem$InteractionFeedback
public "initializeClient"(consumer: $Consumer$$Type<($IClientItemExtensions)>): void
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, information: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slot: integer, isSelected: boolean): void
public "onItemUseFirst"(stack: $ItemStack$$Type, context: $UseOnContext$$Type): $InteractionResult
public "interactWithBlockFirst"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type, hitPos: $BlockPos$$Type, hitSide: $Direction$$Type, hitLocation: $Vec3$$Type): $BaseItem$InteractionFeedback
public "inventoryUpdate"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, itemSlot: integer, isSelected: boolean): void
public "interactWithBlock"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type, hitPos: $BlockPos$$Type, hitSide: $Direction$$Type, hitLocation: $Vec3$$Type): $BaseItem$InteractionFeedback
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "interact"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type): $BaseItem$ItemUseResult
public "interactLivingEntity"(stack: $ItemStack$$Type, player: $Player$$Type, target: $LivingEntity$$Type, hand: $InteractionHand$$Type): $InteractionResult
public "isInCreativeGroup"(tab: $CreativeModeTab$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$$Type = ($BaseItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseItem$$Original = $BaseItem;}
declare module "com.supermartijn642.core.item.BaseItem$ItemUseResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BaseItem$ItemUseResult {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$ItemUseResult$$Type = ($BaseItem$ItemUseResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseItem$ItemUseResult$$Original = $BaseItem$ItemUseResult;}
declare module "com.supermartijn642.core.item.BaseBlockItem$ItemUseResult" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"

export class $BaseBlockItem$ItemUseResult {
/**
 * 
 * @deprecated
 */
public "toUnderlying"(isClientSide: boolean): $InteractionResultHolder<($ItemStack)>
/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(underlying: $InteractionResultHolder$$Type<($ItemStack$$Type)>): $BaseBlockItem$ItemUseResult
public static "pass"(stack: $ItemStack$$Type): $BaseBlockItem$ItemUseResult
public static "consume"(stack: $ItemStack$$Type): $BaseBlockItem$ItemUseResult
public static "success"(stack: $ItemStack$$Type): $BaseBlockItem$ItemUseResult
public static "fail"(stack: $ItemStack$$Type): $BaseBlockItem$ItemUseResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$ItemUseResult$$Type = ($BaseBlockItem$ItemUseResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBlockItem$ItemUseResult$$Original = $BaseBlockItem$ItemUseResult;}
declare module "com.supermartijn642.core.item.BaseItem$InteractionFeedback" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Enum} from "java.lang.Enum"

export class $BaseItem$InteractionFeedback extends $Enum<($BaseItem$InteractionFeedback)> {
static readonly "SUCCESS": $BaseItem$InteractionFeedback
static readonly "PASS": $BaseItem$InteractionFeedback
static readonly "CONSUME": $BaseItem$InteractionFeedback

public static "values"(): ($BaseItem$InteractionFeedback)[]
public static "valueOf"(name: StringJS): $BaseItem$InteractionFeedback
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $InteractionResult
get "underlying"(): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$InteractionFeedback$$Type = (("pass") | ("consume") | ("success"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseItem$InteractionFeedback$$Original = $BaseItem$InteractionFeedback;}
declare module "com.supermartijn642.core.item.BaseBlockItem$InteractionFeedback" {
import {$InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enum} from "java.lang.Enum"

export class $BaseBlockItem$InteractionFeedback extends $Enum<($BaseBlockItem$InteractionFeedback)> {
static readonly "SUCCESS": $BaseBlockItem$InteractionFeedback
static readonly "PASS": $BaseBlockItem$InteractionFeedback
static readonly "CONSUME": $BaseBlockItem$InteractionFeedback

/**
 * 
 * @deprecated
 */
public static "fromUnderlying"(interactionResult: $InteractionResult$$Type): $BaseBlockItem$InteractionFeedback
public static "values"(): ($BaseBlockItem$InteractionFeedback)[]
public static "valueOf"(name: StringJS): $BaseBlockItem$InteractionFeedback
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$InteractionFeedback$$Type = (("pass") | ("consume") | ("success"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBlockItem$InteractionFeedback$$Original = $BaseBlockItem$InteractionFeedback;}
declare module "com.supermartijn642.core.item.BaseBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BaseBlockItem$InteractionFeedback} from "com.supermartijn642.core.item.BaseBlockItem$InteractionFeedback"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemProperties$$Type} from "com.supermartijn642.core.item.ItemProperties"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$BaseBlockItem$ItemUseResult} from "com.supermartijn642.core.item.BaseBlockItem$ItemUseResult"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $BaseBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $ItemProperties$$Type)
constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "interactWithEntity"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $BaseBlockItem$InteractionFeedback
public "initializeClient"(consumer: $Consumer$$Type<($IClientItemExtensions)>): void
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, information: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slot: integer, isSelected: boolean): void
public "onItemUseFirst"(stack: $ItemStack$$Type, context: $UseOnContext$$Type): $InteractionResult
public "interactWithBlockFirst"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type, hitPos: $BlockPos$$Type, hitSide: $Direction$$Type, hitLocation: $Vec3$$Type): $BaseBlockItem$InteractionFeedback
public "inventoryUpdate"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, itemSlot: integer, isSelected: boolean): void
public "interactWithBlock"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type, hitPos: $BlockPos$$Type, hitSide: $Direction$$Type, hitLocation: $Vec3$$Type): $BaseBlockItem$InteractionFeedback
public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "interact"(stack: $ItemStack$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, level: $Level$$Type): $BaseBlockItem$ItemUseResult
public "interactLivingEntity"(stack: $ItemStack$$Type, player: $Player$$Type, target: $LivingEntity$$Type, hand: $InteractionHand$$Type): $InteractionResult
public "isInCreativeGroup"(tab: $CreativeModeTab$$Type): boolean
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
export type $BaseBlockItem$$Type = ($BaseBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBlockItem$$Original = $BaseBlockItem;}
declare module "com.supermartijn642.core.item.ItemRarity" {
import {$Enum} from "java.lang.Enum"
import {$Rarity} from "net.minecraft.world.item.Rarity"

export class $ItemRarity extends $Enum<($ItemRarity)> {
static readonly "RARE": $ItemRarity
static readonly "EPIC": $ItemRarity
static readonly "UNCOMMON": $ItemRarity
static readonly "COMMON": $ItemRarity

public static "values"(): ($ItemRarity)[]
public static "valueOf"(name: StringJS): $ItemRarity
/**
 * 
 * @deprecated
 */
public "getUnderlying"(): $Rarity
get "underlying"(): $Rarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRarity$$Type = (("common") | ("uncommon") | ("rare") | ("epic"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRarity$$Original = $ItemRarity;}
