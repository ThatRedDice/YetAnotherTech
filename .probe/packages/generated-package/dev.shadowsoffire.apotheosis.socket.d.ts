declare module "dev.shadowsoffire.apotheosis.socket.gem.Purity" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$GenContext$$Type} from "dev.shadowsoffire.apotheosis.tiers.GenContext"
import {$Map} from "java.util.Map"
import {$WorldTier$$Type} from "dev.shadowsoffire.apotheosis.tiers.WorldTier"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$TieredWeights$Weighted, $TieredWeights$Weighted$$Type, $TieredWeights$Weighted$$Interface} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Weighted"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$TieredWeights} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights"

export class $Purity extends $Enum<($Purity)> implements $StringRepresentable$$Interface, $TieredWeights$Weighted$$Interface {
static readonly "FLAWLESS": $Purity
static readonly "CODEC": $Codec<($Purity)>
static readonly "ALL_PURITIES": $Set<($Purity)>
static readonly "PERFECT": $Purity
static readonly "BY_ID": $IntFunction<($Purity)>
static readonly "FLAWED": $Purity
static readonly "CRACKED": $Purity
static readonly "CHIPPED": $Purity
static readonly "NORMAL": $Purity
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Purity)>

public "toComponent"(): $MutableComponent
public "getName"(): StringJS
public static "values"(): ($Purity)[]
public static "max"(arg0: $Purity$$Type, arg1: $Purity$$Type): $Purity
public static "valueOf"(arg0: StringJS): $Purity
public "next"(): $Purity
public static "random"(arg0: $GenContext$$Type): $Purity
public static "random"(arg0: $GenContext$$Type, arg1: $Set$$Type<($Purity$$Type)>): $Purity
public "isAtLeast"(arg0: $Purity$$Type): boolean
public "getSerializedName"(): StringJS
public "getColor"(): $TextColor
public static "mapCodec"<T>(arg0: $Codec$$Type<(T)>): $MapCodec<($Map<($Purity), (T)>)>
public "weights"(): $TieredWeights
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "wrap"<T extends $TieredWeights$Weighted>(arg0: T, arg1: $WorldTier$$Type, arg2: float): $WeightedEntry$Wrapper<(T)>
public "wrap"<T extends $TieredWeights$Weighted>(arg0: $WorldTier$$Type, arg1: float): $WeightedEntry$Wrapper<(T)>
get "name"(): StringJS
get "serializedName"(): StringJS
get "color"(): $TextColor
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Purity$$Type = (("cracked") | ("chipped") | ("flawed") | ("normal") | ("flawless") | ("perfect"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Purity$$Original = $Purity;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$GemCuttingRecipe$CuttingRecipeInput, $GemCuttingRecipe$CuttingRecipeInput$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe$CuttingRecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"

export interface $GemCuttingRecipe$$Interface extends $Recipe$$Interface<($GemCuttingRecipe$CuttingRecipeInput)> {
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
}

export class $GemCuttingRecipe implements $GemCuttingRecipe$$Interface {
static "getMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
static "getMatchOrThrow"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
 "decrementInputs"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): void
 "isValidBaseItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
 "isValidTopItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
 "isValidLeftItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
 "isValidRightItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
static "anyMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): boolean
 "getType"(): $RecipeType<(never)>
 "assemble"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getRemainingItems"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "getIngredients"(): $NonNullList<($Ingredient)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "matches"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): boolean
 "getGroup"(): StringJS
 "isSpecial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCuttingRecipe$$Type = ($GemCuttingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCuttingRecipe$$Original = $GemCuttingRecipe;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.BasicGemCuttingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BasicGemCuttingRecipe} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.BasicGemCuttingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BasicGemCuttingRecipe$Serializer implements $RecipeSerializer$$Interface<($BasicGemCuttingRecipe)> {
static readonly "INSTANCE": $BasicGemCuttingRecipe$Serializer

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($BasicGemCuttingRecipe)>
public "codec"(): $MapCodec<($BasicGemCuttingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicGemCuttingRecipe$Serializer$$Type = ($BasicGemCuttingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicGemCuttingRecipe$Serializer$$Original = $BasicGemCuttingRecipe$Serializer;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GemCuttingBlock extends $HorizontalDirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "NAME": $Component
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCuttingBlock$$Type = ($GemCuttingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCuttingBlock$$Original = $GemCuttingBlock;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.UnsocketedGem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Purity, $Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$DynamicHolder, $DynamicHolder$$Type} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Gem, $Gem$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Gem"
import {$GemView$$Interface} from "dev.shadowsoffire.apotheosis.socket.gem.GemView"
import {$AttributeTooltipContext$$Type} from "net.neoforged.neoforge.common.util.AttributeTooltipContext"
import {$Record} from "java.lang.Record"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $UnsocketedGem extends $Record implements $GemView$$Interface {
constructor(gem: $DynamicHolder$$Type<($Gem$$Type)>, purity: $Purity$$Type, gemStack: $ItemStack$$Type)

public "purity"(): $Purity
public "gem"(): $DynamicHolder<($Gem)>
public "isPerfect"(): boolean
public "addInformation"(arg0: $Consumer$$Type<($Component)>, arg1: $AttributeTooltipContext$$Type): void
public "canApplyTo"(arg0: $ItemStack$$Type): boolean
public "gemStack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $ItemStack$$Type): $UnsocketedGem
public "isValid"(): boolean
get "perfect"(): boolean
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnsocketedGem$$Type = ({"gemStack"?: $ItemStack$$Type, "gem"?: $DynamicHolder$$Type<($Gem$$Type)>, "purity"?: $Purity$$Type}) | ([gemStack?: $ItemStack$$Type, gem?: $DynamicHolder$$Type<($Gem$$Type)>, purity?: $Purity$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnsocketedGem$$Original = $UnsocketedGem;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.PurityUpgradeRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Purity, $Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$GemCuttingRecipe$$Interface} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe"
import {$GemCuttingRecipe$CuttingRecipeInput$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe$CuttingRecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$Record} from "java.lang.Record"

export class $PurityUpgradeRecipe extends $Record implements $GemCuttingRecipe$$Interface {
static "CODEC": $MapCodec<($PurityUpgradeRecipe)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PurityUpgradeRecipe)>

constructor(purity: $Purity$$Type, left: $List$$Type<($SizedIngredient$$Type)>, right: $List$$Type<($SizedIngredient$$Type)>)

public "purity"(): $Purity
public "decrementInputs"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): void
public "isValidBaseItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidTopItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidLeftItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidRightItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "left"(): $List<($SizedIngredient)>
public "right"(): $List<($SizedIngredient)>
public static "getMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
public static "getMatchOrThrow"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public static "anyMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): boolean
public "getType"(): $RecipeType<(never)>
public "getRemainingItems"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PurityUpgradeRecipe$$Type = ({"left"?: $List$$Type<($SizedIngredient$$Type)>, "right"?: $List$$Type<($SizedIngredient$$Type)>, "purity"?: $Purity$$Type}) | ([left?: $List$$Type<($SizedIngredient$$Type)>, right?: $List$$Type<($SizedIngredient$$Type)>, purity?: $Purity$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PurityUpgradeRecipe$$Original = $PurityUpgradeRecipe;}
declare module "dev.shadowsoffire.apotheosis.socket.ReactiveSmithingRecipe" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"

export interface $ReactiveSmithingRecipe$$Interface {

(arg0: $Container, arg1: $Player, arg2: $ItemStack): void
}

export class $ReactiveSmithingRecipe implements $ReactiveSmithingRecipe$$Interface {
 "onCraft"(arg0: $Container$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactiveSmithingRecipe$$Type = ((arg0: $Container, arg1: $Player, arg2: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactiveSmithingRecipe$$Original = $ReactiveSmithingRecipe;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.GemInstance" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemView$$Interface} from "dev.shadowsoffire.apotheosis.socket.gem.GemView"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GetEnchantmentLevelEvent$$Type} from "net.neoforged.neoforge.event.enchanting.GetEnchantmentLevelEvent"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LootCategory, $LootCategory$$Type} from "dev.shadowsoffire.apotheosis.loot.LootCategory"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Purity, $Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Gem, $Gem$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Gem"
import {$ObjectArrayList$$Type} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$StackAttributeModifiersEvent$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiersEvent"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$GemBonus} from "dev.shadowsoffire.apotheosis.socket.gem.bonus.GemBonus"
import {$DynamicHolder, $DynamicHolder$$Type} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$AttributeTooltipContext$$Type} from "net.neoforged.neoforge.common.util.AttributeTooltipContext"
import {$Record} from "java.lang.Record"

export class $GemInstance extends $Record implements $GemView$$Interface {
static "EMPTY": $GemInstance

constructor(gem: $DynamicHolder$$Type<($Gem$$Type)>, category: $LootCategory$$Type, purity: $Purity$$Type, gemStack: $ItemStack$$Type, slot: integer)

public "onBlockBreak"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "purity"(): $Purity
public "gem"(): $DynamicHolder<($Gem)>
public "isPerfect"(): boolean
public "addInformation"(arg0: $Consumer$$Type<($Component)>, arg1: $AttributeTooltipContext$$Type): void
public "onProjectileImpact"(arg0: $Projectile$$Type, arg1: $HitResult$$Type): void
public "onItemUse"(arg0: $UseOnContext$$Type): $InteractionResult
public "doPostAttack"(arg0: $LivingEntity$$Type, arg1: $Entity$$Type): void
public "getGem"(): $Gem
public "modifyLoot"(arg0: $ObjectArrayList$$Type<($ItemStack$$Type)>, arg1: $LootContext$$Type): void
public "onHurt"(arg0: $DamageSource$$Type, arg1: $LivingEntity$$Type, arg2: float): float
public "getDamageBonus"(arg0: $Entity$$Type): float
public "doPostHurt"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type): void
public "onProjectileFired"(arg0: $LivingEntity$$Type, arg1: $Projectile$$Type): void
public "onShieldBlock"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: float): float
public "getDurabilityBonusPercentage"(): float
public "getEnchantmentLevels"(arg0: $GetEnchantmentLevelEvent$$Type): void
public "addModifiers"(arg0: $StackAttributeModifiersEvent$$Type): void
public "canApplyTo"(arg0: $ItemStack$$Type): boolean
public "skipModifierIds"(arg0: $Consumer$$Type<($ResourceLocation)>): void
public "getSocketBonusTooltip"(arg0: $AttributeTooltipContext$$Type): $Component
public static "socketed"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: integer): $GemInstance
public static "socketed"(arg0: $LootCategory$$Type, arg1: $ItemStack$$Type, arg2: integer): $GemInstance
public "getBonus"(): $Optional<($GemBonus)>
public "gemStack"(): $ItemStack
/**
 * 
 * @deprecated
 */
public static "unsocketed"(arg0: $ItemStack$$Type): $GemInstance
/**
 * 
 * @deprecated
 */
public "equalsUnsocketed"(arg0: $GemInstance$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isValidUnsocketed"(): boolean
public "category"(): $LootCategory
public "slot"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isValid"(): boolean
public "getDamageProtection"(arg0: $DamageSource$$Type): float
get "perfect"(): boolean
get "durabilityBonusPercentage"(): float
get "bonus"(): $Optional<($GemBonus)>
get "validUnsocketed"(): boolean
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemInstance$$Type = ({"purity"?: $Purity$$Type, "slot"?: integer, "gemStack"?: $ItemStack$$Type, "category"?: $LootCategory$$Type, "gem"?: $DynamicHolder$$Type<($Gem$$Type)>}) | ([purity?: $Purity$$Type, slot?: integer, gemStack?: $ItemStack$$Type, category?: $LootCategory$$Type, gem?: $DynamicHolder$$Type<($Gem$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemInstance$$Original = $GemInstance;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.BasicGemCuttingRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$GemCuttingRecipe$$Interface} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe"
import {$GemCuttingRecipe$CuttingRecipeInput$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe$CuttingRecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$Record} from "java.lang.Record"

export class $BasicGemCuttingRecipe extends $Record implements $GemCuttingRecipe$$Interface {
static "CODEC": $MapCodec<($BasicGemCuttingRecipe)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BasicGemCuttingRecipe)>

constructor(base: $Ingredient$$Type, top: $List$$Type<($SizedIngredient$$Type)>, left: $List$$Type<($SizedIngredient$$Type)>, right: $List$$Type<($SizedIngredient$$Type)>, output: $ItemStack$$Type)

public "decrementInputs"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): void
public "isValidBaseItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidTopItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidLeftItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidRightItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "output"(): $ItemStack
public "base"(): $Ingredient
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "top"(): $List<($SizedIngredient)>
public "left"(): $List<($SizedIngredient)>
public "right"(): $List<($SizedIngredient)>
public static "getMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
public static "getMatchOrThrow"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public static "anyMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): boolean
public "getType"(): $RecipeType<(never)>
public "getRemainingItems"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicGemCuttingRecipe$$Type = ({"top"?: $List$$Type<($SizedIngredient$$Type)>, "base"?: $Ingredient$$Type, "right"?: $List$$Type<($SizedIngredient$$Type)>, "output"?: $ItemStack$$Type, "left"?: $List$$Type<($SizedIngredient$$Type)>}) | ([top?: $List$$Type<($SizedIngredient$$Type)>, base?: $Ingredient$$Type, right?: $List$$Type<($SizedIngredient$$Type)>, output?: $ItemStack$$Type, left?: $List$$Type<($SizedIngredient$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicGemCuttingRecipe$$Original = $BasicGemCuttingRecipe;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.GemView" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Purity} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$DynamicHolder} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$Gem} from "dev.shadowsoffire.apotheosis.socket.gem.Gem"

export interface $GemView$$Interface {
}

export class $GemView implements $GemView$$Interface {
 "purity"(): $Purity
 "gem"(): $DynamicHolder<($Gem)>
 "gemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemView$$Type = ($GemView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemView$$Original = $GemView;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe$CuttingRecipeInput" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeWrapper} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $GemCuttingRecipe$CuttingRecipeInput extends $RecipeWrapper {
constructor(arg0: $IItemHandler$$Type)

public "getTop"(): $ItemStack
public "getBase"(): $ItemStack
public "getLeft"(): $ItemStack
public "getRight"(): $ItemStack
get "top"(): $ItemStack
get "base"(): $ItemStack
get "left"(): $ItemStack
get "right"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCuttingRecipe$CuttingRecipeInput$$Type = ($GemCuttingRecipe$CuttingRecipeInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCuttingRecipe$CuttingRecipeInput$$Original = $GemCuttingRecipe$CuttingRecipeInput;}
declare module "dev.shadowsoffire.apotheosis.socket.AddSocketsRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ApothSmithingRecipe} from "dev.shadowsoffire.apotheosis.util.ApothSmithingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AddSocketsRecipe extends $ApothSmithingRecipe {
readonly "template": $Ingredient
readonly "result": $ItemStack
static readonly "CODEC": $MapCodec<($AddSocketsRecipe)>
static readonly "ADDITION": integer
static readonly "TEMPLATE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AddSocketsRecipe)>
static readonly "BASE": integer
readonly "base": $Ingredient
readonly "addition": $Ingredient

constructor(arg0: $Ingredient$$Type, arg1: integer)

public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getInput"(): $Ingredient
public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "isSpecial"(): boolean
public "getMaxSockets"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "input"(): $Ingredient
get "special"(): boolean
get "maxSockets"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSocketsRecipe$$Type = ($AddSocketsRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddSocketsRecipe$$Original = $AddSocketsRecipe;}
declare module "dev.shadowsoffire.apotheosis.socket.AddSocketsRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AddSocketsRecipe} from "dev.shadowsoffire.apotheosis.socket.AddSocketsRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AddSocketsRecipe$Serializer implements $RecipeSerializer$$Interface<($AddSocketsRecipe)> {
static "INSTANCE": $AddSocketsRecipe$Serializer

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AddSocketsRecipe)>
public "codec"(): $MapCodec<($AddSocketsRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSocketsRecipe$Serializer$$Type = ($AddSocketsRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddSocketsRecipe$Serializer$$Original = $AddSocketsRecipe$Serializer;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.Gem" {
import {$Constraints, $Constraints$$Type} from "dev.shadowsoffire.apotheosis.tiers.Constraints"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$WorldTier$$Type} from "dev.shadowsoffire.apotheosis.tiers.WorldTier"
import {$Optional} from "java.util.Optional"
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$CodecProvider$$Interface} from "dev.shadowsoffire.placebo.codec.CodecProvider"
import {$List, $List$$Type} from "java.util.List"
import {$Purity, $Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemView$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.GemView"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$GemBonus, $GemBonus$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.bonus.GemBonus"
import {$TieredWeights$Weighted, $TieredWeights$Weighted$$Type, $TieredWeights$Weighted$$Interface} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Weighted"
import {$Constraints$Constrained$$Interface} from "dev.shadowsoffire.apotheosis.tiers.Constraints$Constrained"
import {$TieredWeights, $TieredWeights$$Type} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights"
import {$LootCategory$$Type} from "dev.shadowsoffire.apotheosis.loot.LootCategory"
import {$AttributeTooltipContext$$Type} from "net.neoforged.neoforge.common.util.AttributeTooltipContext"

export class $Gem implements $CodecProvider$$Interface<($Gem)>, $TieredWeights$Weighted$$Interface, $Constraints$Constrained$$Interface {
static readonly "CODEC": $Codec<($Gem)>

constructor(arg0: $TieredWeights$$Type, arg1: $Constraints$$Type, arg2: $Purity$$Type, arg3: $List$$Type<($GemBonus$$Type)>, arg4: boolean)

public "getMinPurity"(): $Purity
public "addInformation"(arg0: $GemView$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $AttributeTooltipContext$$Type): void
public "canApplyTo"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Purity$$Type): boolean
public static "addTypeInfo"(arg0: $Consumer$$Type<($Component)>, ...arg1: (any)[]): void
public "isValidIn"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Purity$$Type): boolean
public "getBonus"(arg0: $LootCategory$$Type, arg1: $Purity$$Type): $Optional<($GemBonus)>
/**
 * 
 * @deprecated
 */
public "getBonuses"(): $List<($GemBonus)>
public "constraints"(): $Constraints
public "toString"(): StringJS
public "getId"(): $ResourceLocation
public static "fmt"(arg0: float): StringJS
public "isUnique"(): boolean
public "getCodec"(): $Codec<($Gem)>
public "weights"(): $TieredWeights
public "toStack"(arg0: $Purity$$Type): $ItemStack
public static "wrap"<T extends $TieredWeights$Weighted>(arg0: T, arg1: $WorldTier$$Type, arg2: float): $WeightedEntry$Wrapper<(T)>
public "wrap"<T extends $TieredWeights$Weighted>(arg0: $WorldTier$$Type, arg1: float): $WeightedEntry$Wrapper<(T)>
get "minPurity"(): $Purity
get "bonuses"(): $List<($GemBonus)>
get "id"(): $ResourceLocation
get "unique"(): boolean
get "codec"(): $Codec<($Gem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gem$$Type = ($Gem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Gem$$Original = $Gem;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.bonus.GemBonus" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CodecProvider$$Interface} from "dev.shadowsoffire.placebo.codec.CodecProvider"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Component} from "net.minecraft.network.chat.Component"
import {$GemView$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.GemView"
import {$GemClass, $GemClass$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.GemClass"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GemInstance$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.GemInstance"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$GetEnchantmentLevelEvent$$Type} from "net.neoforged.neoforge.event.enchanting.GetEnchantmentLevelEvent"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ObjectArrayList$$Type} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$StackAttributeModifiersEvent$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiersEvent"
import {$CodecMap} from "dev.shadowsoffire.placebo.codec.CodecMap"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$AttributeTooltipContext$$Type} from "net.neoforged.neoforge.common.util.AttributeTooltipContext"

export class $GemBonus implements $CodecProvider$$Interface<($GemBonus)> {
static readonly "CODEC": $CodecMap<($GemBonus)>

constructor(arg0: $GemClass$$Type)

public "onBlockBreak"(arg0: $GemInstance$$Type, arg1: $Player$$Type, arg2: $LevelAccessor$$Type, arg3: $BlockPos$$Type, arg4: $BlockState$$Type): void
public "onProjectileImpact"(arg0: $GemInstance$$Type, arg1: $Projectile$$Type, arg2: $HitResult$$Type): void
public "onItemUse"(arg0: $GemInstance$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "doPostAttack"(arg0: $GemInstance$$Type, arg1: $LivingEntity$$Type, arg2: $Entity$$Type): void
public "modifyLoot"(arg0: $GemInstance$$Type, arg1: $ObjectArrayList$$Type<($ItemStack$$Type)>, arg2: $LootContext$$Type): void
public "onHurt"(arg0: $GemInstance$$Type, arg1: $DamageSource$$Type, arg2: $LivingEntity$$Type, arg3: float): float
public "getDamageBonus"(arg0: $GemInstance$$Type, arg1: $Entity$$Type): float
public "doPostHurt"(arg0: $GemInstance$$Type, arg1: $LivingEntity$$Type, arg2: $DamageSource$$Type): void
public "onProjectileFired"(arg0: $GemInstance$$Type, arg1: $LivingEntity$$Type, arg2: $Projectile$$Type): void
public "onShieldBlock"(arg0: $GemInstance$$Type, arg1: $LivingEntity$$Type, arg2: $DamageSource$$Type, arg3: float): float
public "getDurabilityBonusPercentage"(arg0: $GemInstance$$Type): float
public "getEnchantmentLevels"(arg0: $GemInstance$$Type, arg1: $GetEnchantmentLevelEvent$$Type): void
public "addModifiers"(arg0: $GemInstance$$Type, arg1: $StackAttributeModifiersEvent$$Type): void
public "skipModifierIds"(arg0: $GemInstance$$Type, arg1: $Consumer$$Type<($ResourceLocation)>): void
public "getGemClass"(): $GemClass
public "getSocketBonusTooltip"(arg0: $GemView$$Type, arg1: $AttributeTooltipContext$$Type): $Component
public "getTypeKey"(): $ResourceLocation
public "supports"(arg0: $Purity$$Type): boolean
public "getDamageProtection"(arg0: $GemInstance$$Type, arg1: $DamageSource$$Type): float
public static "initCodecs"(): void
public "getCodec"(): $Codec<($GemBonus)>
get "gemClass"(): $GemClass
get "typeKey"(): $ResourceLocation
get "codec"(): $Codec<($GemBonus)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemBonus$$Type = ($GemBonus);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemBonus$$Original = $GemBonus;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.GemClass" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Record} from "java.lang.Record"
import {$LootCategory, $LootCategory$$Type} from "dev.shadowsoffire.apotheosis.loot.LootCategory"

export class $GemClass extends $Record {
static "CODEC": $Codec<($GemClass)>
static "EXPLICIT_CODEC": $Codec<($GemClass)>

constructor(arg0: $LootCategory$$Type)
constructor(key: StringJS, types: $HolderSet$$Type<($LootCategory)>)
constructor(arg0: StringJS, ...arg1: ($LootCategory$$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): StringJS
public "types"(): $HolderSet<($LootCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemClass$$Type = ({"types"?: $HolderSet$$Type<($LootCategory)>, "key"?: StringJS}) | ([types?: $HolderSet$$Type<($LootCategory)>, key?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemClass$$Original = $GemClass;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.PurityUpgradeRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PurityUpgradeRecipe} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.PurityUpgradeRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $PurityUpgradeRecipe$Serializer implements $RecipeSerializer$$Interface<($PurityUpgradeRecipe)> {
static readonly "INSTANCE": $PurityUpgradeRecipe$Serializer

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($PurityUpgradeRecipe)>
public "codec"(): $MapCodec<($PurityUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PurityUpgradeRecipe$Serializer$$Type = ($PurityUpgradeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PurityUpgradeRecipe$Serializer$$Original = $PurityUpgradeRecipe$Serializer;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.GemItem" {
import {$BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITabFiller, $ITabFiller$$Interface} from "dev.shadowsoffire.placebo.tabs.ITabFiller"
import {$List$$Type} from "java.util.List"
import {$Purity, $Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Gem, $Gem$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Gem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DynamicHolder} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $GemItem extends $Item implements $ITabFiller$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "HAS_REFRESHED": StringJS
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "UUID_ARRAY": StringJS
static readonly "GEM": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "getPurity"(arg0: $ItemStack$$Type): $Purity
public static "setPurity"(arg0: $ItemStack$$Type, arg1: $Purity$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
public "canBeHurtBy"(arg0: $ItemStack$$Type, arg1: $DamageSource$$Type): boolean
public static "getGem"(arg0: $ItemStack$$Type): $DynamicHolder<($Gem)>
public static "setGem"(arg0: $ItemStack$$Type, arg1: $Gem$$Type): void
public "getName"(arg0: $ItemStack$$Type): $Component
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public "fillItemCategory"(arg0: $CreativeModeTab$$Type, arg1: $BuildCreativeModeTabContentsEvent$$Type): void
public static "delegating"(arg0: $Supplier$$Type<($ItemLike$$Type)>): $ITabFiller
public static "simple"(arg0: $ItemLike$$Type): $ITabFiller
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemItem$$Type = ($GemItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemItem$$Original = $GemItem;}
