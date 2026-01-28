declare module "mcjty.rftoolsutility.modules.spawner.recipes.SpawnerRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SpawnerRecipe} from "mcjty.rftoolsutility.modules.spawner.recipes.SpawnerRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SpawnerRecipeSerializer implements $RecipeSerializer$$Interface<($SpawnerRecipe)> {
static readonly "CODEC": $MapCodec<($SpawnerRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SpawnerRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SpawnerRecipe)>
public "codec"(): $MapCodec<($SpawnerRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerRecipeSerializer$$Type = ($SpawnerRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnerRecipeSerializer$$Original = $SpawnerRecipeSerializer;}
declare module "mcjty.rftoolsutility.modules.spawner.recipes.SpawnerRecipeType" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Interface} from "net.minecraft.world.item.crafting.RecipeType"
import {$SpawnerRecipe} from "mcjty.rftoolsutility.modules.spawner.recipes.SpawnerRecipe"

export class $SpawnerRecipeType implements $RecipeType$$Interface<($SpawnerRecipe)> {
constructor()

public static "register"<T extends $Recipe<(object)>>(arg0: StringJS): $RecipeType<($SpawnerRecipe)>
public static "simple"<T extends $Recipe<(object)>>(arg0: $ResourceLocation$$Type): $RecipeType<($SpawnerRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerRecipeType$$Type = ($SpawnerRecipeType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnerRecipeType$$Original = $SpawnerRecipeType;}
declare module "mcjty.rftoolsutility.modules.spawner.blocks.MatterBeamerBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RotationType} from "mcjty.lib.blocks.RotationType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BaseBlock} from "mcjty.lib.blocks.BaseBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $MatterBeamerBlock extends $BaseBlock {
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

public "getRotationType"(): $RotationType
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterBeamerBlock$$Type = ($MatterBeamerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatterBeamerBlock$$Original = $MatterBeamerBlock;}
declare module "mcjty.rftoolsutility.modules.spawner.recipes.SpawnerRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SpawnerRecipes$MobSpawnAmount, $SpawnerRecipes$MobSpawnAmount$$Type} from "mcjty.rftoolsutility.modules.spawner.recipes.SpawnerRecipes$MobSpawnAmount"
import {$BaseRecipe$$Interface} from "mcjty.lib.crafting.BaseRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SpawnerRecipe implements $BaseRecipe$$Interface<($CraftingInput)> {
constructor(arg0: $ResourceLocation$$Type, arg1: $SpawnerRecipes$MobSpawnAmount$$Type, arg2: $SpawnerRecipes$MobSpawnAmount$$Type, arg3: $SpawnerRecipes$MobSpawnAmount$$Type, arg4: integer, arg5: $ResourceLocation$$Type)

public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSpawnRf"(): integer
public "getItem1"(): $SpawnerRecipes$MobSpawnAmount
public "getItem2"(): $SpawnerRecipes$MobSpawnAmount
public "getItem3"(): $SpawnerRecipes$MobSpawnAmount
public "getEntity"(): $ResourceLocation
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getId"(): $ResourceLocation
public "getType"(): $RecipeType<(never)>
public static "assemble"(arg0: $Recipe$$Type, arg1: $RecipeInput$$Type, arg2: $Level$$Type): $ItemStack
public static "getResultItem"(arg0: $Recipe$$Type, arg1: $Level$$Type): $ItemStack
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "spawnRf"(): integer
get "item1"(): $SpawnerRecipes$MobSpawnAmount
get "item2"(): $SpawnerRecipes$MobSpawnAmount
get "item3"(): $SpawnerRecipes$MobSpawnAmount
get "entity"(): $ResourceLocation
get "id"(): $ResourceLocation
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
export type $SpawnerRecipe$$Type = ($SpawnerRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnerRecipe$$Original = $SpawnerRecipe;}
declare module "mcjty.rftoolsutility.modules.spawner.recipes.SpawnerRecipes$MobSpawnAmount" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"

export class $SpawnerRecipes$MobSpawnAmount {
static readonly "CODEC": $Codec<($SpawnerRecipes$MobSpawnAmount)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SpawnerRecipes$MobSpawnAmount)>

constructor(arg0: $Ingredient$$Type, arg1: float)

public "match"(arg0: $ItemStack$$Type): float
public static "create"(arg0: $Ingredient$$Type, arg1: float): $SpawnerRecipes$MobSpawnAmount
public "getObject"(): $Ingredient
public "getAmount"(): float
get "object"(): $Ingredient
get "amount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerRecipes$MobSpawnAmount$$Type = ($SpawnerRecipes$MobSpawnAmount);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnerRecipes$MobSpawnAmount$$Original = $SpawnerRecipes$MobSpawnAmount;}
declare module "mcjty.rftoolsutility.modules.spawner.items.SyringeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BaseItem} from "mcjty.lib.items.BaseItem"

export class $SyringeItem extends $BaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "MAX_SYRINGE_MODEL_LEVEL": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onLeftClickEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): boolean
public "getItemsForTab"(): $List<($ItemStack)>
public static "initOverrides"(arg0: $SyringeItem$$Type): void
public static "getEntityLivingFromClickedEntity"(arg0: $Entity$$Type): $LivingEntity
public static "getMobId"(arg0: $ItemStack$$Type): $ResourceLocation
public static "createMobSyringe"(arg0: $ResourceLocation$$Type): $ItemStack
public static "getMobName"(arg0: $ItemStack$$Type): StringJS
public static "getLevel"(arg0: $ItemStack$$Type): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "itemsForTab"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyringeItem$$Type = ($SyringeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyringeItem$$Original = $SyringeItem;}
