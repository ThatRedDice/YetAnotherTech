declare module "blusunrize.immersiveengineering.common.crafting.serializers.GeneratedListSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$GeneratedListRecipe} from "blusunrize.immersiveengineering.common.crafting.GeneratedListRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $GeneratedListSerializer extends $IERecipeSerializer<($GeneratedListRecipe<(never), (never)>)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($GeneratedListRecipe<(never), (never)>)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratedListSerializer$$Type = ($GeneratedListSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratedListSerializer$$Original = $GeneratedListSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.ArcFurnaceRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$ArcFurnaceRecipe} from "blusunrize.immersiveengineering.api.crafting.ArcFurnaceRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $ArcFurnaceRecipeSerializer extends $IERecipeSerializer<($ArcFurnaceRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($ArcFurnaceRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcFurnaceRecipeSerializer$$Type = ($ArcFurnaceRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcFurnaceRecipeSerializer$$Original = $ArcFurnaceRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.fluidaware.AbstractFluidAwareRecipe$IMatchLocation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractFluidAwareRecipe$IMatchLocation$$Interface {

(arg0: integer, arg1: integer): integer
}

export class $AbstractFluidAwareRecipe$IMatchLocation implements $AbstractFluidAwareRecipe$IMatchLocation$$Interface {
 "getListIndex"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFluidAwareRecipe$IMatchLocation$$Type = ((arg0: integer, arg1: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFluidAwareRecipe$IMatchLocation$$Original = $AbstractFluidAwareRecipe$IMatchLocation;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.CrusherRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$CrusherRecipe} from "blusunrize.immersiveengineering.api.crafting.CrusherRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $CrusherRecipeSerializer extends $IERecipeSerializer<($CrusherRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($CrusherRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrusherRecipeSerializer$$Type = ($CrusherRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrusherRecipeSerializer$$Original = $CrusherRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.fluidaware.TurnAndCopyRecipe$MatchLocation" {
import {$AbstractFluidAwareRecipe$IMatchLocation$$Interface} from "blusunrize.immersiveengineering.common.crafting.fluidaware.AbstractFluidAwareRecipe$IMatchLocation"
import {$TurnAndCopyRecipe$Rotation$$Type} from "blusunrize.immersiveengineering.common.crafting.fluidaware.TurnAndCopyRecipe$Rotation"

export class $TurnAndCopyRecipe$MatchLocation implements $AbstractFluidAwareRecipe$IMatchLocation$$Interface {
constructor(arg0: integer, arg1: integer, arg2: boolean, arg3: $TurnAndCopyRecipe$Rotation$$Type, arg4: integer, arg5: integer)

public "getListIndex"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnAndCopyRecipe$MatchLocation$$Type = ($TurnAndCopyRecipe$MatchLocation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurnAndCopyRecipe$MatchLocation$$Original = $TurnAndCopyRecipe$MatchLocation;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.BlueprintCraftingRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$BlueprintCraftingRecipe} from "blusunrize.immersiveengineering.api.crafting.BlueprintCraftingRecipe"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $BlueprintCraftingRecipeSerializer extends $IERecipeSerializer<($BlueprintCraftingRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($BlueprintCraftingRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintCraftingRecipeSerializer$$Type = ($BlueprintCraftingRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlueprintCraftingRecipeSerializer$$Original = $BlueprintCraftingRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.AlloyRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$AlloyRecipe} from "blusunrize.immersiveengineering.api.crafting.AlloyRecipe"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $AlloyRecipeSerializer extends $IERecipeSerializer<($AlloyRecipe)> {
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloyRecipeSerializer$$Type = ($AlloyRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlloyRecipeSerializer$$Original = $AlloyRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.FermenterRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$FermenterRecipe} from "blusunrize.immersiveengineering.api.crafting.FermenterRecipe"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $FermenterRecipeSerializer extends $IERecipeSerializer<($FermenterRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($FermenterRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermenterRecipeSerializer$$Type = ($FermenterRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FermenterRecipeSerializer$$Original = $FermenterRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.MetalPressRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$MetalPressRecipe} from "blusunrize.immersiveengineering.api.crafting.MetalPressRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $MetalPressRecipeSerializer extends $IERecipeSerializer<($MetalPressRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($MetalPressRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalPressRecipeSerializer$$Type = ($MetalPressRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetalPressRecipeSerializer$$Original = $MetalPressRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.fluidaware.TurnAndCopyRecipe$Rotation" {
import {$Enum} from "java.lang.Enum"

export class $TurnAndCopyRecipe$Rotation extends $Enum<($TurnAndCopyRecipe$Rotation)> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnAndCopyRecipe$Rotation$$Type = (("none") | ("quarter") | ("eighth"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurnAndCopyRecipe$Rotation$$Original = $TurnAndCopyRecipe$Rotation;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.WindmillBiomeSerializer" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$WindmillBiome} from "blusunrize.immersiveengineering.api.energy.WindmillBiome"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $WindmillBiomeSerializer extends $IERecipeSerializer<($WindmillBiome)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($WindmillBiome)>
static readonly "CODEC": $MapCodec<($WindmillBiome)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($WindmillBiome)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindmillBiomeSerializer$$Type = ($WindmillBiomeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindmillBiomeSerializer$$Original = $WindmillBiomeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.BlastFurnaceRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$BlastFurnaceRecipe} from "blusunrize.immersiveengineering.api.crafting.BlastFurnaceRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $BlastFurnaceRecipeSerializer extends $IERecipeSerializer<($BlastFurnaceRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($BlastFurnaceRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceRecipeSerializer$$Type = ($BlastFurnaceRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastFurnaceRecipeSerializer$$Original = $BlastFurnaceRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.RGBColourationRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $RGBColourationRecipe extends $Record implements $CraftingRecipe$$Interface {
constructor(target: $Ingredient$$Type)

public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "category"(): $CraftingBookCategory
public "equals"(arg0: any): boolean
public "target"(): $Ingredient
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "isSpecial"(): boolean
public "getType"(): $RecipeType<(never)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RGBColourationRecipe$$Type = ({"target"?: $Ingredient$$Type}) | ([target?: $Ingredient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RGBColourationRecipe$$Original = $RGBColourationRecipe;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.RefineryRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$RefineryRecipe} from "blusunrize.immersiveengineering.api.crafting.RefineryRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $RefineryRecipeSerializer extends $IERecipeSerializer<($RefineryRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($RefineryRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryRecipeSerializer$$Type = ($RefineryRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefineryRecipeSerializer$$Original = $RefineryRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.DamageToolRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$DamageToolRecipe} from "blusunrize.immersiveengineering.common.crafting.DamageToolRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $DamageToolRecipeSerializer implements $RecipeSerializer$$Interface<($DamageToolRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($DamageToolRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($DamageToolRecipe)>
public "codec"(): $MapCodec<($DamageToolRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageToolRecipeSerializer$$Type = ($DamageToolRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageToolRecipeSerializer$$Original = $DamageToolRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.WrappingRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$Function$$Type} from "java.util.function.Function"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $WrappingRecipeSerializer<WrappingType extends $Recipe<(object)>, WrappedType extends $Recipe<(object)>> implements $RecipeSerializer$$Interface<(WrappingType)> {
constructor(arg0: $RecipeSerializer$$Type<(WrappedType)>, arg1: $Function$$Type<(WrappingType), (WrappedType)>, arg2: $Function$$Type<(WrappedType), (WrappingType)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (WrappingType)>
public "codec"(): $MapCodec<(WrappingType)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappingRecipeSerializer$$Type<WrappingType, WrappedType> = ($WrappingRecipeSerializer<(WrappingType), (WrappedType)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappingRecipeSerializer$$Original<WrappingType, WrappedType> = $WrappingRecipeSerializer<(WrappingType), (WrappedType)>;}
declare module "blusunrize.immersiveengineering.common.crafting.GeneratedListRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map} from "java.util.Map"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$List, $List$$Type} from "java.util.List"
import {$Supplier} from "java.util.function.Supplier"
import {$IListRecipe$$Interface} from "blusunrize.immersiveengineering.api.crafting.cache.IListRecipe"
import {$GeneratedListRecipe$RecipeListGenerator} from "blusunrize.immersiveengineering.common.crafting.GeneratedListRecipe$RecipeListGenerator"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $GeneratedListRecipe<R extends $Recipe<(object)>, E> extends $IESerializableRecipe implements $IListRecipe$$Interface {
static "SERIALIZER": $Supplier<($IERecipeSerializer<($GeneratedListRecipe<(never), (never)>)>)>
static "LIST_GENERATORS": $Map<($ResourceLocation), ($GeneratedListRecipe$RecipeListGenerator<(never), (never)>)>

public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSubRecipes"(): $List<($Recipe<(never)>)>
public "getGeneratorID"(): $ResourceLocation
public static "resolved"(arg0: $ResourceLocation$$Type, arg1: $List$$Type<($Recipe$$Type<(never)>)>): $GeneratedListRecipe<(never), (never)>
public static "from"(arg0: $ResourceLocation$$Type): $GeneratedListRecipe<(never), (never)>
public "isSpecial"(): boolean
get "subRecipes"(): $List<($Recipe<(never)>)>
get "generatorID"(): $ResourceLocation
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratedListRecipe$$Type<R, E> = ($GeneratedListRecipe<(R), (E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratedListRecipe$$Original<R, E> = $GeneratedListRecipe<(R), (E)>;}
declare module "blusunrize.immersiveengineering.common.crafting.fluidaware.TurnAndCopyRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$AbstractFluidAwareRecipe$IMatchLocation} from "blusunrize.immersiveengineering.common.crafting.fluidaware.AbstractFluidAwareRecipe$IMatchLocation"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TurnAndCopyRecipe$MatchLocation} from "blusunrize.immersiveengineering.common.crafting.fluidaware.TurnAndCopyRecipe$MatchLocation"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$AbstractShapedRecipe} from "blusunrize.immersiveengineering.common.crafting.fluidaware.AbstractShapedRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $TurnAndCopyRecipe extends $AbstractShapedRecipe<($TurnAndCopyRecipe$MatchLocation)> {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type, arg1: $List$$Type<(integer)>)
constructor(arg0: $ShapedRecipe$$Type)

public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getCopyTargets"(): $List<(integer)>
public "isQuarterTurn"(): boolean
public "isEightTurn"(): boolean
public "allowQuarterTurn"(): $TurnAndCopyRecipe
public "allowEighthTurn"(): $TurnAndCopyRecipe
public "findMatch"(arg0: $CraftingInput$$Type): $AbstractFluidAwareRecipe$IMatchLocation
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "copyTargets"(): $List<(integer)>
get "quarterTurn"(): boolean
get "eightTurn"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnAndCopyRecipe$$Type = ($TurnAndCopyRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurnAndCopyRecipe$$Original = $TurnAndCopyRecipe;}
declare module "blusunrize.immersiveengineering.common.crafting.fluidaware.IFluidAwareRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$AbstractFluidAwareRecipe$IMatchLocation} from "blusunrize.immersiveengineering.common.crafting.fluidaware.AbstractFluidAwareRecipe$IMatchLocation"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export interface $IFluidAwareRecipe$$Interface<MatchLocation extends $AbstractFluidAwareRecipe$IMatchLocation> extends $CraftingRecipe$$Interface {
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
}

export class $IFluidAwareRecipe<MatchLocation extends $AbstractFluidAwareRecipe$IMatchLocation> implements $IFluidAwareRecipe$$Interface {
 "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
 "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
 "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
 "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
 "findMatch"(arg0: $CraftingInput$$Type): MatchLocation
 "category"(): $CraftingBookCategory
 "getType"(): $RecipeType<(never)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getGroup"(): StringJS
 "isSpecial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidAwareRecipe$$Type<MatchLocation> = ($IFluidAwareRecipe<(MatchLocation)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluidAwareRecipe$$Original<MatchLocation> = $IFluidAwareRecipe<(MatchLocation)>;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.SqueezerRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$SqueezerRecipe} from "blusunrize.immersiveengineering.api.crafting.SqueezerRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $SqueezerRecipeSerializer extends $IERecipeSerializer<($SqueezerRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($SqueezerRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SqueezerRecipeSerializer$$Type = ($SqueezerRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SqueezerRecipeSerializer$$Original = $SqueezerRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.NoContainerSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$INoContainersRecipe} from "blusunrize.immersiveengineering.common.crafting.INoContainersRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $NoContainerSerializer implements $RecipeSerializer$$Interface<($INoContainersRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($INoContainersRecipe)>
static readonly "BASE_RECIPE": StringJS

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($INoContainersRecipe)>
public "codec"(): $MapCodec<($INoContainersRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoContainerSerializer$$Type = ($NoContainerSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoContainerSerializer$$Original = $NoContainerSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.fluidaware.AbstractShapedRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractFluidAwareRecipe$IMatchLocation} from "blusunrize.immersiveengineering.common.crafting.fluidaware.AbstractFluidAwareRecipe$IMatchLocation"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$IFluidAwareRecipe$$Interface} from "blusunrize.immersiveengineering.common.crafting.fluidaware.IFluidAwareRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AbstractShapedRecipe<MatchLocation extends $AbstractFluidAwareRecipe$IMatchLocation> extends $ShapedRecipe implements $IFluidAwareRecipe$$Interface<(MatchLocation)> {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: StringJS, arg1: integer, arg2: integer, arg3: $ItemStack$$Type, arg4: $CraftingBookCategory$$Type, arg5: $ShapedRecipePattern$$Type)
constructor(arg0: $ShapedRecipe$$Type)

public "toVanilla"(): $ShapedRecipe
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isIncomplete"(): boolean
public "category"(): $CraftingBookCategory
public "getWidth"(): integer
public "getHeight"(): integer
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "findMatch"(arg0: $CraftingInput$$Type): MatchLocation
get "serializer"(): $RecipeSerializer<(never)>
get "incomplete"(): boolean
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapedRecipe$$Type<MatchLocation> = ($AbstractShapedRecipe<(MatchLocation)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractShapedRecipe$$Original<MatchLocation> = $AbstractShapedRecipe<(MatchLocation)>;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.ThermoelectricSourceSerializer" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ThermoelectricSource} from "blusunrize.immersiveengineering.api.energy.ThermoelectricSource"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ThermoelectricSourceSerializer extends $IERecipeSerializer<($ThermoelectricSource)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($ThermoelectricSource)>
static readonly "CODEC": $MapCodec<($ThermoelectricSource)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ThermoelectricSource)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoelectricSourceSerializer$$Type = ($ThermoelectricSourceSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThermoelectricSourceSerializer$$Original = $ThermoelectricSourceSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.BlastFurnaceFuelSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$BlastFurnaceFuel} from "blusunrize.immersiveengineering.api.crafting.BlastFurnaceFuel"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $BlastFurnaceFuelSerializer extends $IERecipeSerializer<($BlastFurnaceFuel)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($BlastFurnaceFuel)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceFuelSerializer$$Type = ($BlastFurnaceFuelSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastFurnaceFuelSerializer$$Original = $BlastFurnaceFuelSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.GeneratedListRecipe$RecipeListGenerator" {
import {$IERecipeTypes$TypeWithClass, $IERecipeTypes$TypeWithClass$$Type} from "blusunrize.immersiveengineering.api.crafting.IERecipeTypes$TypeWithClass"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $GeneratedListRecipe$RecipeListGenerator<T extends $Recipe<(object)>, EarlyResult> extends $Record {
constructor(makeEarlyResult: $Supplier$$Type<(EarlyResult)>, generator: $Function$$Type<(EarlyResult), ($List$$Type<(T)>)>, serialized: $ResourceLocation$$Type, recipeType: $IERecipeTypes$TypeWithClass$$Type<(T)>)

public "recipeType"(): $IERecipeTypes$TypeWithClass<(T)>
public "makeEarlyResult"(): $Supplier<(EarlyResult)>
public static "fromSerializer"<T extends $Recipe<(object)>, ER>(arg0: $Supplier$$Type<(ER)>, arg1: $Function$$Type<(ER), ($List$$Type<(T)>)>, arg2: $Holder$$Type<($RecipeSerializer<(never)>)>, arg3: $IERecipeTypes$TypeWithClass$$Type<(T)>): $GeneratedListRecipe$RecipeListGenerator<(T), (ER)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "generator"(): $Function<(EarlyResult), ($List<(T)>)>
public "serialized"(): $ResourceLocation
public static "simple"<R extends $Recipe<(object)>>(arg0: $Supplier$$Type<($List$$Type<(R)>)>, arg1: $Holder$$Type<($RecipeSerializer<(never)>)>, arg2: $IERecipeTypes$TypeWithClass$$Type<(R)>): $GeneratedListRecipe$RecipeListGenerator<(R), (never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratedListRecipe$RecipeListGenerator$$Type<T, EarlyResult> = ({"recipeType"?: $IERecipeTypes$TypeWithClass$$Type<(T)>, "makeEarlyResult"?: $Supplier$$Type<(EarlyResult)>, "generator"?: $Function$$Type<(EarlyResult), ($List$$Type<(T)>)>, "serialized"?: $ResourceLocation$$Type}) | ([recipeType?: $IERecipeTypes$TypeWithClass$$Type<(T)>, makeEarlyResult?: $Supplier$$Type<(EarlyResult)>, generator?: $Function$$Type<(EarlyResult), ($List$$Type<(T)>)>, serialized?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratedListRecipe$RecipeListGenerator$$Original<T, EarlyResult> = $GeneratedListRecipe$RecipeListGenerator<(T), (EarlyResult)>;}
declare module "blusunrize.immersiveengineering.common.crafting.DamageToolRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ShapelessRecipe} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $DamageToolRecipe extends $ShapelessRecipe {
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "group": StringJS

constructor(arg0: StringJS, arg1: $ItemStack$$Type, arg2: $Ingredient$$Type, arg3: $NonNullList$$Type<($Ingredient$$Type)>)

public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getTool"(): $Ingredient
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "tool"(): $Ingredient
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageToolRecipe$$Type = ($DamageToolRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageToolRecipe$$Original = $DamageToolRecipe;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.SawmillRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$SawmillRecipe} from "blusunrize.immersiveengineering.api.crafting.SawmillRecipe"

export class $SawmillRecipeSerializer extends $IERecipeSerializer<($SawmillRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($SawmillRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawmillRecipeSerializer$$Type = ($SawmillRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SawmillRecipeSerializer$$Original = $SawmillRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.ClocheFertilizerSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$ClocheFertilizer} from "blusunrize.immersiveengineering.api.crafting.ClocheFertilizer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $ClocheFertilizerSerializer extends $IERecipeSerializer<($ClocheFertilizer)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($ClocheFertilizer)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheFertilizerSerializer$$Type = ($ClocheFertilizerSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClocheFertilizerSerializer$$Original = $ClocheFertilizerSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.RGBRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RGBColourationRecipe} from "blusunrize.immersiveengineering.common.crafting.RGBColourationRecipe"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $RGBRecipeSerializer implements $RecipeSerializer$$Interface<($RGBColourationRecipe)> {
static readonly "CODEC": $DualMapCodec<($RegistryFriendlyByteBuf), ($RGBColourationRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RGBColourationRecipe)>
public "codec"(): $MapCodec<($RGBColourationRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RGBRecipeSerializer$$Type = ($RGBRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RGBRecipeSerializer$$Original = $RGBRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.HammerCrushingRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$LazyShapelessRecipe} from "blusunrize.immersiveengineering.common.crafting.LazyShapelessRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $HammerCrushingRecipeSerializer extends $IERecipeSerializer<($LazyShapelessRecipe)> {
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HammerCrushingRecipeSerializer$$Type = ($HammerCrushingRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HammerCrushingRecipeSerializer$$Original = $HammerCrushingRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.RevolverAssemblyRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$RevolverAssemblyRecipe} from "blusunrize.immersiveengineering.common.crafting.RevolverAssemblyRecipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $RevolverAssemblyRecipeSerializer implements $RecipeSerializer$$Interface<($RevolverAssemblyRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($RevolverAssemblyRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RevolverAssemblyRecipe)>
public "codec"(): $MapCodec<($RevolverAssemblyRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverAssemblyRecipeSerializer$$Type = ($RevolverAssemblyRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RevolverAssemblyRecipeSerializer$$Original = $RevolverAssemblyRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.MixerRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MixerRecipe} from "blusunrize.immersiveengineering.api.crafting.MixerRecipe"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $MixerRecipeSerializer extends $IERecipeSerializer<($MixerRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($MixerRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixerRecipeSerializer$$Type = ($MixerRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MixerRecipeSerializer$$Original = $MixerRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.BottlingMachineRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$BottlingMachineRecipe} from "blusunrize.immersiveengineering.api.crafting.BottlingMachineRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $BottlingMachineRecipeSerializer extends $IERecipeSerializer<($BottlingMachineRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($BottlingMachineRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BottlingMachineRecipeSerializer$$Type = ($BottlingMachineRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BottlingMachineRecipeSerializer$$Original = $BottlingMachineRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.MineralMixSerializer" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$MineralMix$BiomeTagPredicate} from "blusunrize.immersiveengineering.api.excavator.MineralMix$BiomeTagPredicate"
import {$List} from "java.util.List"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$MineralMix} from "blusunrize.immersiveengineering.api.excavator.MineralMix"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $MineralMixSerializer extends $IERecipeSerializer<($MineralMix)> {
static readonly "BIOME_TAG_PREDICATE_CODECS": $DualCodec<($ByteBuf), ($MineralMix$BiomeTagPredicate)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineralMixSerializer$$Type = ($MineralMixSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MineralMixSerializer$$Original = $MineralMixSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.GeneratorFuelSerializer" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$GeneratorFuel} from "blusunrize.immersiveengineering.api.energy.GeneratorFuel"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $GeneratorFuelSerializer extends $IERecipeSerializer<($GeneratorFuel)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($GeneratorFuel)>
static readonly "CODEC": $MapCodec<($GeneratorFuel)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GeneratorFuel)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorFuelSerializer$$Type = ($GeneratorFuelSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratorFuelSerializer$$Original = $GeneratorFuelSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.TurnAndCopyRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$TurnAndCopyRecipe} from "blusunrize.immersiveengineering.common.crafting.fluidaware.TurnAndCopyRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $TurnAndCopyRecipeSerializer implements $RecipeSerializer$$Interface<($TurnAndCopyRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($TurnAndCopyRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($TurnAndCopyRecipe)>
public "codec"(): $MapCodec<($TurnAndCopyRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurnAndCopyRecipeSerializer$$Type = ($TurnAndCopyRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurnAndCopyRecipeSerializer$$Original = $TurnAndCopyRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.ClocheRecipeSerializer" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$FluidIngredient} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ClocheRecipe} from "blusunrize.immersiveengineering.api.crafting.ClocheRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ClocheRecipeSerializer extends $IERecipeSerializer<($ClocheRecipe)> {
static readonly "CODEC": $DualMapCodec<($RegistryFriendlyByteBuf), ($ClocheRecipe)>
static "DEFAULT_FLUID": $FluidIngredient
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheRecipeSerializer$$Type = ($ClocheRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClocheRecipeSerializer$$Original = $ClocheRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.CokeOvenRecipeSerializer" {
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$CokeOvenRecipe} from "blusunrize.immersiveengineering.api.crafting.CokeOvenRecipe"

export class $CokeOvenRecipeSerializer extends $IERecipeSerializer<($CokeOvenRecipe)> {
static readonly "CODECS": $DualMapCodec<($RegistryFriendlyByteBuf), ($CokeOvenRecipe)>
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "getIcon"(): $ItemStack
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CokeOvenRecipeSerializer$$Type = ($CokeOvenRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CokeOvenRecipeSerializer$$Original = $CokeOvenRecipeSerializer;}
declare module "blusunrize.immersiveengineering.common.crafting.LazyShapelessRecipe" {
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ShapelessRecipe} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $LazyShapelessRecipe extends $ShapelessRecipe {
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "group": StringJS

constructor(arg0: StringJS, arg1: $TagOutput$$Type, arg2: $NonNullList$$Type<($Ingredient$$Type)>, arg3: $RecipeSerializer$$Type<($LazyShapelessRecipe$$Type)>)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<($LazyShapelessRecipe)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getResult"(): $TagOutput
get "serializer"(): $RecipeSerializer<($LazyShapelessRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyShapelessRecipe$$Type = ($LazyShapelessRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LazyShapelessRecipe$$Original = $LazyShapelessRecipe;}
declare module "blusunrize.immersiveengineering.common.crafting.RevolverAssemblyRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$AbstractFluidAwareRecipe$IMatchLocation} from "blusunrize.immersiveengineering.common.crafting.fluidaware.AbstractFluidAwareRecipe$IMatchLocation"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TurnAndCopyRecipe} from "blusunrize.immersiveengineering.common.crafting.fluidaware.TurnAndCopyRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RevolverAssemblyRecipe extends $TurnAndCopyRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type, arg1: $List$$Type<(integer)>)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "findMatch"(arg0: $CraftingInput$$Type): $AbstractFluidAwareRecipe$IMatchLocation
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RevolverAssemblyRecipe$$Type = ($RevolverAssemblyRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RevolverAssemblyRecipe$$Original = $RevolverAssemblyRecipe;}
declare module "blusunrize.immersiveengineering.common.crafting.serializers.SimpleRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $SimpleRecipeSerializer<R extends $Recipe<(object)>> extends $Record implements $RecipeSerializer$$Interface<(R)> {
constructor(create: $Supplier$$Type<(R)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "create"(): $Supplier<(R)>
public "codec"(): $MapCodec<(R)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleRecipeSerializer$$Type<R> = ({"create"?: $Supplier$$Type<(R)>}) | ([create?: $Supplier$$Type<(R)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleRecipeSerializer$$Original<R> = $SimpleRecipeSerializer<(R)>;}
declare module "blusunrize.immersiveengineering.common.crafting.INoContainersRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingRecipe, $CraftingRecipe$$Type, $CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $INoContainersRecipe$$Interface extends $CraftingRecipe$$Interface {

(): $CraftingRecipe$$Type
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
get "special"(): boolean
}

export class $INoContainersRecipe implements $INoContainersRecipe$$Interface {
 "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
 "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "baseRecipe"(): $CraftingRecipe
 "category"(): $CraftingBookCategory
 "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
 "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "getGroup"(): StringJS
 "isSpecial"(): boolean
 "showNotification"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INoContainersRecipe$$Type = (() => $CraftingRecipe$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $INoContainersRecipe$$Original = $INoContainersRecipe;}
