declare module "appeng.recipes.mattercannon.MatterCannonAmmoSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MatterCannonAmmo} from "appeng.recipes.mattercannon.MatterCannonAmmo"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $MatterCannonAmmoSerializer implements $RecipeSerializer$$Interface<($MatterCannonAmmo)> {
static readonly "INSTANCE": $MatterCannonAmmoSerializer

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($MatterCannonAmmo)>
public "codec"(): $MapCodec<($MatterCannonAmmo)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterCannonAmmoSerializer$$Type = ($MatterCannonAmmoSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatterCannonAmmoSerializer$$Original = $MatterCannonAmmoSerializer;}
declare module "appeng.recipes.mattercannon.MatterCannonAmmo" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MatterCannonAmmo implements $Recipe$$Interface<($RecipeInput)> {
/**
 * 
 * @deprecated
 */
static readonly "TYPE_ID": $ResourceLocation
static readonly "CODEC": $MapCodec<($MatterCannonAmmo)>
/**
 * 
 * @deprecated
 */
static readonly "TYPE": $RecipeType<($MatterCannonAmmo)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MatterCannonAmmo)>

constructor(arg0: $Ingredient$$Type, arg1: float)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public static "ammo"(arg0: $RecipeOutput$$Type, arg1: $ResourceLocation$$Type, arg2: $TagKey$$Type<($Item)>, arg3: float): void
public static "ammo"(arg0: $RecipeOutput$$Type, arg1: $ResourceLocation$$Type, arg2: $Ingredient$$Type, arg3: float): void
public static "ammo"(arg0: $RecipeOutput$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemLike$$Type, arg3: float): void
public "getSerializer"(): $RecipeSerializer<(never)>
public "getAmmo"(): $Ingredient
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "getWeight"(): float
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "type"(): $RecipeType<(never)>
get "weight"(): float
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterCannonAmmo$$Type = ($MatterCannonAmmo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatterCannonAmmo$$Original = $MatterCannonAmmo;}
