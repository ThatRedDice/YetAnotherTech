declare module "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList" {
import {$IERecipeTypes$TypeWithClass$$Type} from "blusunrize.immersiveengineering.api.crafting.IERecipeTypes$TypeWithClass"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$List} from "java.util.List"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TagsUpdatedEvent$$Type} from "net.neoforged.neoforge.event.TagsUpdatedEvent"
import {$RecipesUpdatedEvent$$Type} from "net.neoforged.neoforge.client.event.RecipesUpdatedEvent"

export class $CachedRecipeList<R extends $Recipe<(object)>> {
static readonly "INVALID_RELOAD_COUNT": integer

constructor(arg0: $Supplier$$Type<($RecipeType$$Type<(R)>)>)
constructor(arg0: $IERecipeTypes$TypeWithClass$$Type<(R)>)

public "getById"(arg0: $Level$$Type, arg1: $ResourceLocation$$Type): R
public "getRecipes"(arg0: $Level$$Type): $List<($RecipeHolder<(R)>)>
public static "onTagsUpdated"(arg0: $TagsUpdatedEvent$$Type): void
public "getRecipeNames"(arg0: $Level$$Type): $Collection<($ResourceLocation)>
public "holderById"(arg0: $Level$$Type, arg1: $ResourceLocation$$Type): $RecipeHolder<(R)>
public static "onRecipeUpdatedClient"(arg0: $RecipesUpdatedEvent$$Type): void
public static "getReloadCount"(): integer
public static get "reloadCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedRecipeList$$Type<R> = ($CachedRecipeList<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedRecipeList$$Original<R> = $CachedRecipeList<(R)>;}
declare module "blusunrize.immersiveengineering.api.crafting.CokeOvenRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$IngredientWithSize, $IngredientWithSize$$Type} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CokeOvenRecipe extends $IESerializableRecipe {
readonly "output": $TagOutput
readonly "input": $IngredientWithSize
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($CokeOvenRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($CokeOvenRecipe)>
readonly "time": integer
readonly "creosoteOutput": integer

constructor(arg0: $TagOutput$$Type, arg1: $IngredientWithSize$$Type, arg2: integer, arg3: integer)

public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public static "findRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type): $CokeOvenRecipe
public static "findRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $CokeOvenRecipe$$Type): $CokeOvenRecipe
public "matches"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CokeOvenRecipe$$Type = ($CokeOvenRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CokeOvenRecipe$$Original = $CokeOvenRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.ClocheFertilizer" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ClocheFertilizer extends $IESerializableRecipe {
readonly "input": $Ingredient
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($ClocheFertilizer)>)>
readonly "growthModifier": float
static readonly "RECIPES": $CachedRecipeList<($ClocheFertilizer)>

constructor(arg0: $Ingredient$$Type, arg1: float)

public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getGrowthModifier"(): float
public static "isValidFertilizer"(arg0: $Level$$Type, arg1: $ItemStack$$Type): boolean
public static "getFertilizerGrowthModifier"(arg0: $Level$$Type, arg1: $ItemStack$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheFertilizer$$Type = ($ClocheFertilizer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClocheFertilizer$$Original = $ClocheFertilizer;}
declare module "blusunrize.immersiveengineering.api.crafting.ClocheRenderFunction" {
import {$BiMap} from "com.google.common.collect.BiMap"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Transformation} from "com.mojang.math.Transformation"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export interface $ClocheRenderFunction$$Interface {
}

export class $ClocheRenderFunction implements $ClocheRenderFunction$$Interface {
static readonly "CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($ClocheRenderFunction)>
static readonly "RENDER_FUNCTION_FACTORIES": $BiMap<($ResourceLocation), ($DualMapCodec<($RegistryFriendlyByteBuf), ($ClocheRenderFunction)>)>

 "injectQuads"(arg0: $ItemStack$$Type, arg1: float, arg2: $Consumer$$Type<(never)>): void
 "getBlocks"(arg0: $ItemStack$$Type, arg1: float): $Collection<($Pair<($BlockState), ($Transformation)>)>
 "codec"(): $DualMapCodec<($RegistryFriendlyByteBuf), ($ClocheRenderFunction)>
 "getScale"(arg0: $ItemStack$$Type, arg1: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheRenderFunction$$Type = ($ClocheRenderFunction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClocheRenderFunction$$Original = $ClocheRenderFunction;}
declare module "blusunrize.immersiveengineering.api.crafting.BottlingMachineRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SizedFluidIngredient, $SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$IngredientWithSize, $IngredientWithSize$$Type} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$MultiblockRecipe$RecipeMultiplier} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe$RecipeMultiplier"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MultiblockRecipe} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe"
import {$TagOutputList, $TagOutputList$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutputList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BottlingMachineRecipe extends $MultiblockRecipe {
readonly "output": $TagOutputList
readonly "inputs": $List<($IngredientWithSize)>
readonly "fluidInput": $SizedFluidIngredient
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($BottlingMachineRecipe)>)>
static readonly "MULTIPLIERS": $SetRestrictedField<($MultiblockRecipe$RecipeMultiplier)>
static readonly "RECIPES": $CachedRecipeList<($BottlingMachineRecipe)>

constructor(arg0: $TagOutputList$$Type, arg1: $List$$Type<($IngredientWithSize$$Type)>, arg2: $SizedFluidIngredient$$Type)
constructor(arg0: $TagOutputList$$Type, arg1: $IngredientWithSize$$Type, arg2: $SizedFluidIngredient$$Type)

public static "findRecipe"(arg0: $Level$$Type, arg1: $FluidStack$$Type, ...arg2: ($ItemStack$$Type)[]): $RecipeHolder<($BottlingMachineRecipe)>
public "getMultipleProcessTicks"(): integer
public "getDisplayStacks"(arg0: ($ItemStack$$Type)[]): $NonNullList<($ItemStack)>
public "matches"(arg0: ($ItemStack$$Type)[], arg1: $FluidStack$$Type): boolean
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BottlingMachineRecipe$$Type = ($BottlingMachineRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BottlingMachineRecipe$$Original = $BottlingMachineRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.IERecipeTypes$TypeWithClass" {
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$Supplier$$Interface} from "java.util.function.Supplier"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Record} from "java.lang.Record"

export class $IERecipeTypes$TypeWithClass<T extends $Recipe<(object)>> extends $Record implements $Supplier$$Interface<($RecipeType<(T)>)> {
constructor(type: $DeferredHolder$$Type<($RecipeType$$Type<(never)>), ($RecipeType$$Type<(T)>)>, recipeClass: $Class$$Type<(T)>)

public "recipeClass"(): $Class<(T)>
public "get"(): any
public "type"(): $DeferredHolder<($RecipeType<(never)>), ($RecipeType<(T)>)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IERecipeTypes$TypeWithClass$$Type<T> = ({"type"?: $DeferredHolder$$Type<($RecipeType$$Type<(never)>), ($RecipeType$$Type<(T)>)>, "recipeClass"?: $Class$$Type<(T)>}) | ([type?: $DeferredHolder$$Type<($RecipeType$$Type<(never)>), ($RecipeType$$Type<(T)>)>, recipeClass?: $Class$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IERecipeTypes$TypeWithClass$$Original<T> = $IERecipeTypes$TypeWithClass<(T)>;}
declare module "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe" {
import {$IngredientWithSize} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$SizedFluidIngredient} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$IJEIRecipe$$Interface} from "blusunrize.immersiveengineering.api.crafting.IJEIRecipe"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IMultiblockRecipe$$Interface} from "blusunrize.immersiveengineering.api.crafting.IMultiblockRecipe"

export class $MultiblockRecipe extends $IESerializableRecipe implements $IMultiblockRecipe$$Interface, $IJEIRecipe$$Interface {
public "getItemOutputs"(): $NonNullList<($ItemStack)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getFluidOutputs"(): $List<($FluidStack)>
public "getItemInputs"(): $List<($IngredientWithSize)>
public "getFluidInputs"(): $List<($SizedFluidIngredient)>
public "getTotalProcessTime"(): integer
public "getTotalProcessEnergy"(): integer
public "getBaseEnergy"(): integer
public "getBaseTime"(): integer
public "shouldCheckItemAvailability"(): boolean
public "getMultipleProcessTicks"(): integer
public "getActualItemOutputs"(): $NonNullList<($ItemStack)>
public "getActualFluidOutputs"(): $List<($FluidStack)>
public "getDisplayStack"(arg0: $ItemStack$$Type): $ItemStack
public "listInJEI"(): boolean
get "itemOutputs"(): $NonNullList<($ItemStack)>
get "fluidOutputs"(): $List<($FluidStack)>
get "itemInputs"(): $List<($IngredientWithSize)>
get "fluidInputs"(): $List<($SizedFluidIngredient)>
get "totalProcessTime"(): integer
get "totalProcessEnergy"(): integer
get "baseEnergy"(): integer
get "baseTime"(): integer
get "multipleProcessTicks"(): integer
get "actualItemOutputs"(): $NonNullList<($ItemStack)>
get "actualFluidOutputs"(): $List<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRecipe$$Type = ($MultiblockRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockRecipe$$Original = $MultiblockRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe$RecipeMultiplier" {
import {$DoubleSupplier, $DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$Record} from "java.lang.Record"

export class $MultiblockRecipe$RecipeMultiplier extends $Record {
constructor(timeModifier: $DoubleSupplier$$Type, energyModifier: $DoubleSupplier$$Type)

public "timeModifier"(): $DoubleSupplier
public "energyModifier"(): $DoubleSupplier
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockRecipe$RecipeMultiplier$$Type = ({"energyModifier"?: $DoubleSupplier$$Type, "timeModifier"?: $DoubleSupplier$$Type}) | ([energyModifier?: $DoubleSupplier$$Type, timeModifier?: $DoubleSupplier$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockRecipe$RecipeMultiplier$$Original = $MultiblockRecipe$RecipeMultiplier;}
declare module "blusunrize.immersiveengineering.api.crafting.TagOutputList" {
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $TagOutputList {
static readonly "CODEC": $DualCodec<($RegistryFriendlyByteBuf), ($TagOutputList)>
static "EMPTY": $TagOutputList

constructor(arg0: $List$$Type<($TagOutput$$Type)>)
constructor(arg0: $TagOutput$$Type)

public "getLazyList"(): $List<($TagOutput)>
public "get"(): $NonNullList<($ItemStack)>
get "lazyList"(): $List<($TagOutput)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagOutputList$$Type = ($TagOutputList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagOutputList$$Original = $TagOutputList;}
declare module "blusunrize.immersiveengineering.api.crafting.SqueezerRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component} from "net.minecraft.network.chat.Component"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$IngredientWithSize, $IngredientWithSize$$Type} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$MultiblockRecipe$RecipeMultiplier} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe$RecipeMultiplier"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MultiblockRecipe} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SortedMap} from "java.util.SortedMap"

export class $SqueezerRecipe extends $MultiblockRecipe {
 "input": $IngredientWithSize
readonly "itemOutput": $TagOutput
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($SqueezerRecipe)>)>
static readonly "MULTIPLIERS": $SetRestrictedField<($MultiblockRecipe$RecipeMultiplier)>
readonly "fluidOutput": $FluidStack
static readonly "RECIPES": $CachedRecipeList<($SqueezerRecipe)>

constructor(arg0: $FluidStack$$Type, arg1: $TagOutput$$Type, arg2: $IngredientWithSize$$Type, arg3: integer)

public static "findRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type): $RecipeHolder<($SqueezerRecipe)>
public "getMultipleProcessTicks"(): integer
public "setInputSize"(arg0: integer): $SqueezerRecipe
public static "getFluidValuesSorted"(arg0: $Level$$Type, arg1: $Fluid$$Type, arg2: boolean): $SortedMap<($Component), (integer)>
get "multipleProcessTicks"(): integer
set "inputSize"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SqueezerRecipe$$Type = ($SqueezerRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SqueezerRecipe$$Original = $SqueezerRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.RefineryRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SizedFluidIngredient, $SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$MultiblockRecipe$RecipeMultiplier} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe$RecipeMultiplier"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MultiblockRecipe} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $RefineryRecipe extends $MultiblockRecipe {
readonly "output": $FluidStack
readonly "catalyst": $Ingredient
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($RefineryRecipe)>)>
readonly "input1": $SizedFluidIngredient
static readonly "MULTIPLIERS": $SetRestrictedField<($MultiblockRecipe$RecipeMultiplier)>
readonly "input0": $SizedFluidIngredient
static readonly "RECIPES": $CachedRecipeList<($RefineryRecipe)>

constructor(arg0: $FluidStack$$Type, arg1: $SizedFluidIngredient$$Type, arg2: ($SizedFluidIngredient$$Type)?, arg3: $Ingredient$$Type, arg4: integer)
constructor(arg0: $FluidStack$$Type, arg1: $SizedFluidIngredient$$Type, arg2: $SizedFluidIngredient$$Type, arg3: $Ingredient$$Type, arg4: integer)

public static "findRecipe"(arg0: $Level$$Type, arg1: $FluidStack$$Type, arg2: $FluidStack$$Type, arg3: $ItemStack$$Type): $RecipeHolder<($RefineryRecipe)>
public "getMultipleProcessTicks"(): integer
public static "findIncompleteRefineryRecipe"(arg0: $Level$$Type, arg1: $FluidStack$$Type, arg2: $FluidStack$$Type): $Optional<($RefineryRecipe)>
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryRecipe$$Type = ($RefineryRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefineryRecipe$$Original = $RefineryRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.MetalPressRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$IngredientWithSize, $IngredientWithSize$$Type} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiblockRecipe$RecipeMultiplier} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe$RecipeMultiplier"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MultiblockRecipe} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $MetalPressRecipe extends $MultiblockRecipe {
readonly "output": $TagOutput
 "input": $IngredientWithSize
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($MetalPressRecipe)>)>
static readonly "STANDARD_RECIPES": $CachedRecipeList<($MetalPressRecipe)>
static readonly "MULTIPLIERS": $SetRestrictedField<($MultiblockRecipe$RecipeMultiplier)>
readonly "mold": $Item

constructor(arg0: $TagOutput$$Type, arg1: $IngredientWithSize$$Type, arg2: $Item$$Type, arg3: integer)

public static "findRecipe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type): $RecipeHolder<($MetalPressRecipe)>
public "getMultipleProcessTicks"(): integer
public "setInputSize"(arg0: integer): $MetalPressRecipe
public "getActualRecipe"(arg0: $ResourceLocation$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $Level$$Type): $RecipeHolder<($MetalPressRecipe)>
public static "addSpecialRecipe"(arg0: $ResourceLocation$$Type, arg1: $MetalPressRecipe$$Type): void
public static "isValidMold"(arg0: $Level$$Type, arg1: $ItemStack$$Type): boolean
public "matches"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type): boolean
get "multipleProcessTicks"(): integer
set "inputSize"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalPressRecipe$$Type = ($MetalPressRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetalPressRecipe$$Original = $MetalPressRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.cache.IListRecipe" {
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$List, $List$$Type} from "java.util.List"

export interface $IListRecipe$$Interface {

(): $List$$Type<($Recipe$$Type<(never)>)>
get "subRecipes"(): $List<($Recipe<(never)>)>
}

export class $IListRecipe implements $IListRecipe$$Interface {
 "getSubRecipes"(): $List<($Recipe<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IListRecipe$$Type = (() => $List$$Type<($Recipe$$Type<(never)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IListRecipe$$Original = $IListRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.CrusherRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$StackWithChance, $StackWithChance$$Type} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$MultiblockRecipe$RecipeMultiplier} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe$RecipeMultiplier"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MultiblockRecipe} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CrusherRecipe extends $MultiblockRecipe {
readonly "output": $TagOutput
readonly "input": $Ingredient
readonly "secondaryOutputs": $List<($StackWithChance)>
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($CrusherRecipe)>)>
static readonly "MULTIPLIERS": $SetRestrictedField<($MultiblockRecipe$RecipeMultiplier)>
static readonly "RECIPES": $CachedRecipeList<($CrusherRecipe)>

constructor(arg0: $TagOutput$$Type, arg1: $Ingredient$$Type, arg2: integer, arg3: $List$$Type<($StackWithChance$$Type)>)

public static "findRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type): $RecipeHolder<($CrusherRecipe)>
public "getMultipleProcessTicks"(): integer
public "getActualItemOutputs"(): $NonNullList<($ItemStack)>
get "multipleProcessTicks"(): integer
get "actualItemOutputs"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrusherRecipe$$Type = ($CrusherRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrusherRecipe$$Original = $CrusherRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.ArcFurnaceRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$StackWithChance, $StackWithChance$$Type} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$IngredientWithSize, $IngredientWithSize$$Type} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$MultiblockRecipe$RecipeMultiplier} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe$RecipeMultiplier"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MultiblockRecipe} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe"
import {$TagOutputList, $TagOutputList$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutputList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ArcFurnaceRecipe extends $MultiblockRecipe {
readonly "output": $TagOutputList
readonly "input": $IngredientWithSize
readonly "secondaryOutputs": $List<($StackWithChance)>
readonly "additives": $List<($IngredientWithSize)>
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($ArcFurnaceRecipe)>)>
static readonly "MULTIPLIERS": $SetRestrictedField<($MultiblockRecipe$RecipeMultiplier)>
readonly "slag": $TagOutput
static readonly "RECIPES": $CachedRecipeList<($ArcFurnaceRecipe)>
readonly "specialRecipeType": StringJS

constructor(arg0: $TagOutputList$$Type, arg1: $TagOutput$$Type, arg2: $List$$Type<($StackWithChance$$Type)>, arg3: integer, arg4: integer, arg5: $IngredientWithSize$$Type, arg6: $List$$Type<($IngredientWithSize$$Type)>)
constructor(arg0: $TagOutputList$$Type, arg1: $TagOutput$$Type, arg2: $List$$Type<($StackWithChance$$Type)>, arg3: integer, arg4: integer, arg5: $IngredientWithSize$$Type, arg6: $List$$Type<($IngredientWithSize$$Type)>, arg7: StringJS)

public "isNotSpecialType"(): boolean
public "isValidInput"(arg0: $ItemStack$$Type): boolean
public "isSpecialType"(arg0: StringJS): boolean
public static "findRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $NonNullList$$Type<($ItemStack$$Type)>): $RecipeHolder<($ArcFurnaceRecipe)>
public "getMultipleProcessTicks"(): integer
public "getBaseOutputs"(): $NonNullList<($ItemStack)>
public "generateActualOutput"(arg0: $ItemStack$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: long): $NonNullList<($ItemStack)>
public "getConsumedAdditives"(arg0: $NonNullList$$Type<($ItemStack$$Type)>, arg1: boolean): (integer)[]
public "isValidAdditive"(arg0: $ItemStack$$Type): boolean
public static "isValidRecipeInput"(arg0: $Level$$Type, arg1: $ItemStack$$Type): boolean
public static "isValidRecipeAdditive"(arg0: $Level$$Type, arg1: $ItemStack$$Type): boolean
public "matches"(arg0: $ItemStack$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>): boolean
get "notSpecialType"(): boolean
get "multipleProcessTicks"(): integer
get "baseOutputs"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcFurnaceRecipe$$Type = ($ArcFurnaceRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcFurnaceRecipe$$Original = $ArcFurnaceRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.BlastFurnaceFuel" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BlastFurnaceFuel extends $IESerializableRecipe {
readonly "input": $Ingredient
readonly "burnTime": integer
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($BlastFurnaceFuel)>)>
static readonly "RECIPES": $CachedRecipeList<($BlastFurnaceFuel)>

constructor(arg0: $Ingredient$$Type, arg1: integer)

public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public static "getBlastFuelTime"(arg0: $Level$$Type, arg1: $ItemStack$$Type): integer
public static "isValidBlastFuel"(arg0: $Level$$Type, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceFuel$$Type = ($BlastFurnaceFuel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastFurnaceFuel$$Original = $BlastFurnaceFuel;}
declare module "blusunrize.immersiveengineering.api.crafting.AlloyRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$IngredientWithSize, $IngredientWithSize$$Type} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AlloyRecipe extends $IESerializableRecipe {
readonly "output": $TagOutput
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($AlloyRecipe)>)>
readonly "input1": $IngredientWithSize
readonly "input0": $IngredientWithSize
static readonly "RECIPES": $CachedRecipeList<($AlloyRecipe)>
readonly "time": integer

constructor(arg0: $TagOutput$$Type, arg1: $IngredientWithSize$$Type, arg2: $IngredientWithSize$$Type, arg3: integer)

public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public static "findRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $AlloyRecipe$$Type): $AlloyRecipe
public "matches"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloyRecipe$$Type = ($AlloyRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlloyRecipe$$Original = $AlloyRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$StackWithChance} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$TagOutput} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$DualMapCodec} from "malte0811.dualcodecs.DualMapCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $IERecipeSerializer<R extends $Recipe<(object)>> implements $RecipeSerializer$$Interface<(R)> {
static readonly "CHANCE_LIST_CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>
static readonly "CHANCE_LIST_CODEC": $Codec<($List<($StackWithChance)>)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public static "optionalItemOutput"(arg0: StringJS): $DualMapCodec<($RegistryFriendlyByteBuf), ($TagOutput)>
public static "optionalFluidOutput"(arg0: StringJS): $DualMapCodec<($RegistryFriendlyByteBuf), ($FluidStack)>
public "getIcon"(): $ItemStack
public "codec"(): $MapCodec<(R)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "icon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IERecipeSerializer$$Type<R> = ($IERecipeSerializer<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IERecipeSerializer$$Original<R> = $IERecipeSerializer<(R)>;}
declare module "blusunrize.immersiveengineering.api.crafting.StackWithChance" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record} from "java.lang.Record"

export class $StackWithChance extends $Record {
static readonly "CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($StackWithChance)>
static readonly "OPTIONAL_BASIC_CODEC": $Codec<($StackWithChance)>
static readonly "STREAM_LIST": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($StackWithChance)>)>

constructor(stack: $TagOutput$$Type, chance: float, conditions: $List$$Type<($ICondition$$Type)>)
constructor(arg0: $TagOutput$$Type, arg1: float, ...arg2: ($ICondition$$Type)[])
constructor(arg0: $ItemStack$$Type, arg1: float)

public static "readFromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $StackWithChance
public "writeToNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "recalculate"(arg0: double): $StackWithChance
public "stack"(): $TagOutput
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "conditions"(): $List<($ICondition)>
public "chance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackWithChance$$Type = ({"stack"?: $TagOutput$$Type, "chance"?: float, "conditions"?: $List$$Type<($ICondition$$Type)>}) | ([stack?: $TagOutput$$Type, chance?: float, conditions?: $List$$Type<($ICondition$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StackWithChance$$Original = $StackWithChance;}
declare module "blusunrize.immersiveengineering.api.crafting.ClocheRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$FluidIngredient, $FluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$StackWithChance, $StackWithChance$$Type} from "blusunrize.immersiveengineering.api.crafting.StackWithChance"
import {$TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Stream} from "java.util.stream.Stream"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ClocheRenderFunction, $ClocheRenderFunction$$Type} from "blusunrize.immersiveengineering.api.crafting.ClocheRenderFunction"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"

export class $ClocheRecipe extends $IESerializableRecipe {
readonly "outputs": $List<($StackWithChance)>
readonly "renderFunction": $ClocheRenderFunction
readonly "seed": $Ingredient
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($ClocheRecipe)>)>
readonly "soil": $Ingredient
readonly "requiredFluid": $FluidIngredient
static readonly "RECIPES": $CachedRecipeList<($ClocheRecipe)>
readonly "time": integer

constructor(arg0: $TagOutput$$Type, arg1: $Ingredient$$Type, arg2: $Ingredient$$Type, arg3: integer, arg4: $FluidIngredient$$Type, arg5: $ClocheRenderFunction$$Type)
constructor(arg0: $List$$Type<($StackWithChance$$Type)>, arg1: $Ingredient$$Type, arg2: $Ingredient$$Type, arg3: integer, arg4: $FluidIngredient$$Type, arg5: $ClocheRenderFunction$$Type)

public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public static "findRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $FluidStack$$Type, arg4: $ClocheRecipe$$Type): $ClocheRecipe
public "getTotalOutputs"(): $NonNullList<($ItemStack)>
public static "isValidCombinationInMenu"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type): boolean
public static "getValidFluids"(arg0: $Level$$Type): $Stream<($FluidIngredient)>
public static "registerSoilTexture"(arg0: $Ingredient$$Type, arg1: $ResourceLocation$$Type): void
public static "getSoilTexture"(arg0: $ItemStack$$Type): $ResourceLocation
public "matches"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $FluidStack$$Type): boolean
public "getTime"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): integer
public "getOutputs"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $NonNullList<($ItemStack)>
get "totalOutputs"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheRecipe$$Type = ($ClocheRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClocheRecipe$$Original = $ClocheRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.IJEIRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IJEIRecipe$$Interface {
}

export class $IJEIRecipe implements $IJEIRecipe$$Interface {
 "listInJEI"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJEIRecipe$$Type = ($IJEIRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IJEIRecipe$$Original = $IJEIRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.SawmillRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$MultiblockRecipe$RecipeMultiplier} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe$RecipeMultiplier"
import {$MultiblockRecipe} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe"
import {$TagOutputList, $TagOutputList$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutputList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SawmillRecipe extends $MultiblockRecipe {
readonly "output": $TagOutput
readonly "input": $Ingredient
readonly "secondaryOutputs": $TagOutputList
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($SawmillRecipe)>)>
static readonly "MULTIPLIERS": $SetRestrictedField<($MultiblockRecipe$RecipeMultiplier)>
readonly "stripped": $TagOutput
static readonly "RECIPES": $CachedRecipeList<($SawmillRecipe)>
readonly "secondaryStripping": $TagOutputList

constructor(arg0: $TagOutput$$Type, arg1: $TagOutput$$Type, arg2: $Ingredient$$Type, arg3: integer, arg4: $TagOutputList$$Type, arg5: $TagOutputList$$Type)

public static "findRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type): $SawmillRecipe
public "getMultipleProcessTicks"(): integer
public "getActualItemOutputs"(): $NonNullList<($ItemStack)>
get "multipleProcessTicks"(): integer
get "actualItemOutputs"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawmillRecipe$$Type = ($SawmillRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SawmillRecipe$$Original = $SawmillRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.IMultiblockRecipe" {
import {$IngredientWithSize} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$SizedFluidIngredient} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $IMultiblockRecipe$$Interface {
get "itemOutputs"(): $NonNullList<($ItemStack)>
get "fluidOutputs"(): $List<($FluidStack)>
get "multipleProcessTicks"(): integer
get "itemInputs"(): $List<($IngredientWithSize)>
get "fluidInputs"(): $List<($SizedFluidIngredient)>
get "totalProcessTime"(): integer
get "totalProcessEnergy"(): integer
get "actualItemOutputs"(): $NonNullList<($ItemStack)>
get "actualFluidOutputs"(): $List<($FluidStack)>
}

export class $IMultiblockRecipe implements $IMultiblockRecipe$$Interface {
 "getItemOutputs"(): $NonNullList<($ItemStack)>
 "getFluidOutputs"(): $List<($FluidStack)>
 "shouldCheckItemAvailability"(): boolean
 "getMultipleProcessTicks"(): integer
 "getItemInputs"(): $List<($IngredientWithSize)>
 "getFluidInputs"(): $List<($SizedFluidIngredient)>
 "getTotalProcessTime"(): integer
 "getTotalProcessEnergy"(): integer
 "getActualItemOutputs"(): $NonNullList<($ItemStack)>
 "getActualFluidOutputs"(): $List<($FluidStack)>
 "getDisplayStack"(arg0: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiblockRecipe$$Type = ($IMultiblockRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiblockRecipe$$Original = $IMultiblockRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.BlueprintCraftingRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$IngredientWithSize, $IngredientWithSize$$Type} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$MultiblockRecipe$RecipeMultiplier} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe$RecipeMultiplier"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MultiblockRecipe} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe"
import {$ItemLike} from "net.minecraft.world.level.ItemLike"
import {$Set} from "java.util.Set"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BlueprintCraftingRecipe extends $MultiblockRecipe {
readonly "output": $TagOutput
readonly "blueprintCategory": StringJS
readonly "inputs": $List<($IngredientWithSize)>
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($BlueprintCraftingRecipe)>)>
static readonly "MULTIPLIERS": $SetRestrictedField<($MultiblockRecipe$RecipeMultiplier)>
static readonly "RECIPES": $CachedRecipeList<($BlueprintCraftingRecipe)>
static "blueprintItem": $SetRestrictedField<($ItemLike)>

constructor(arg0: StringJS, arg1: $TagOutput$$Type, arg2: $List$$Type<($IngredientWithSize$$Type)>)

public "consumeInputs"(arg0: $NonNullList$$Type<($ItemStack$$Type)>, arg1: integer): $NonNullList<($ItemStack)>
public static "getTypedBlueprint"(arg0: StringJS): $ItemStack
public "getMultipleProcessTicks"(): integer
public static "findRecipes"(arg0: $Level$$Type, arg1: StringJS): $List<($RecipeHolder<($BlueprintCraftingRecipe)>)>
public static "getCategoriesWithRecipes"(arg0: $Level$$Type): $Set<(StringJS)>
public static "updateRecipeCategories"(arg0: $Level$$Type): void
public "matchesRecipe"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): boolean
public "getMaxCrafted"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): integer
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintCraftingRecipe$$Type = ($BlueprintCraftingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlueprintCraftingRecipe$$Original = $BlueprintCraftingRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.BlastFurnaceRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$IngredientWithSize, $IngredientWithSize$$Type} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$IESerializableRecipe} from "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BlastFurnaceRecipe extends $IESerializableRecipe {
readonly "output": $TagOutput
readonly "input": $IngredientWithSize
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($BlastFurnaceRecipe)>)>
static readonly "RECIPES": $CachedRecipeList<($BlastFurnaceRecipe)>
readonly "slag": $TagOutput
readonly "time": integer

constructor(arg0: $TagOutput$$Type, arg1: $IngredientWithSize$$Type, arg2: integer, arg3: $TagOutput$$Type)

public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public static "findRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $BlastFurnaceRecipe$$Type): $BlastFurnaceRecipe
public "matches"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceRecipe$$Type = ($BlastFurnaceRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastFurnaceRecipe$$Original = $BlastFurnaceRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.FermenterRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component} from "net.minecraft.network.chat.Component"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$IngredientWithSize, $IngredientWithSize$$Type} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$TagOutput, $TagOutput$$Type} from "blusunrize.immersiveengineering.api.crafting.TagOutput"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$MultiblockRecipe$RecipeMultiplier} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe$RecipeMultiplier"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MultiblockRecipe} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SortedMap} from "java.util.SortedMap"

export class $FermenterRecipe extends $MultiblockRecipe {
 "input": $IngredientWithSize
readonly "itemOutput": $TagOutput
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($FermenterRecipe)>)>
static readonly "MULTIPLIERS": $SetRestrictedField<($MultiblockRecipe$RecipeMultiplier)>
readonly "fluidOutput": $FluidStack
static readonly "RECIPES": $CachedRecipeList<($FermenterRecipe)>

constructor(arg0: $FluidStack$$Type, arg1: $TagOutput$$Type, arg2: $IngredientWithSize$$Type, arg3: integer)

public static "findRecipe"(arg0: $Level$$Type, arg1: $ItemStack$$Type): $RecipeHolder<($FermenterRecipe)>
public "getMultipleProcessTicks"(): integer
public "setInputSize"(arg0: integer): $FermenterRecipe
public static "getFluidValuesSorted"(arg0: $Level$$Type, arg1: $Fluid$$Type, arg2: boolean): $SortedMap<($Component), (integer)>
get "multipleProcessTicks"(): integer
set "inputSize"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermenterRecipe$$Type = ($FermenterRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FermenterRecipe$$Original = $FermenterRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.TagOutput" {
import {$IngredientWithSize$$Type} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $TagOutput {
static readonly "CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($TagOutput)>
static readonly "EMPTY": $TagOutput

constructor(arg0: $ItemStack$$Type)
constructor(arg0: $TagKey$$Type<($Item)>, arg1: integer)
constructor(arg0: $TagKey$$Type<($Item)>)
constructor(arg0: $Either$$Type<($IngredientWithSize$$Type), ($ItemStack$$Type)>)
constructor(arg0: $ItemLike$$Type)
constructor(arg0: $ItemLike$$Type, arg1: integer)
constructor(arg0: $IngredientWithSize$$Type)

public "get"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagOutput$$Type = ($TagOutput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagOutput$$Original = $TagOutput;}
declare module "blusunrize.immersiveengineering.api.crafting.MixerRecipe" {
import {$IERecipeSerializer} from "blusunrize.immersiveengineering.api.crafting.IERecipeSerializer"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$SetRestrictedField} from "blusunrize.immersiveengineering.api.utils.SetRestrictedField"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SizedFluidIngredient, $SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$CachedRecipeList} from "blusunrize.immersiveengineering.api.crafting.cache.CachedRecipeList"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$IngredientWithSize, $IngredientWithSize$$Type} from "blusunrize.immersiveengineering.api.crafting.IngredientWithSize"
import {$MultiblockRecipe$RecipeMultiplier} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe$RecipeMultiplier"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MultiblockRecipe} from "blusunrize.immersiveengineering.api.crafting.MultiblockRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $MixerRecipe extends $MultiblockRecipe {
readonly "fluidInput": $SizedFluidIngredient
static "SERIALIZER": $DeferredHolder<($RecipeSerializer<(never)>), ($IERecipeSerializer<($MixerRecipe)>)>
readonly "itemInputs": $List<($IngredientWithSize)>
static readonly "MULTIPLIERS": $SetRestrictedField<($MultiblockRecipe$RecipeMultiplier)>
readonly "fluidOutput": $FluidStack
readonly "fluidAmount": integer
static readonly "RECIPES": $CachedRecipeList<($MixerRecipe)>

constructor(arg0: $FluidStack$$Type, arg1: $SizedFluidIngredient$$Type, arg2: $List$$Type<($IngredientWithSize$$Type)>, arg3: integer)

public static "findRecipe"(arg0: $Level$$Type, arg1: $FluidStack$$Type, arg2: $NonNullList$$Type<($ItemStack$$Type)>): $RecipeHolder<($MixerRecipe)>
public "shouldCheckItemAvailability"(): boolean
public "getMultipleProcessTicks"(): integer
public "getFluidOutput"(arg0: $FluidStack$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>): $FluidStack
public "getUsedSlots"(arg0: $FluidStack$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>): (integer)[]
public "matches"(arg0: $FluidStack$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>): boolean
get "multipleProcessTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixerRecipe$$Type = ($MixerRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MixerRecipe$$Original = $MixerRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.IESerializableRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $IESerializableRecipe implements $Recipe$$Interface<($RecipeInput)> {
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getToastSymbol"(): $ItemStack
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IESerializableRecipe$$Type = ($IESerializableRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IESerializableRecipe$$Original = $IESerializableRecipe;}
declare module "blusunrize.immersiveengineering.api.crafting.IngredientWithSize" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $IngredientWithSize implements $Predicate$$Interface<($ItemStack)> {
static readonly "CODECS": $DualCodec<($RegistryFriendlyByteBuf), ($IngredientWithSize)>
static readonly "CODEC": $Codec<($IngredientWithSize)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IngredientWithSize)>

constructor(arg0: $Ingredient$$Type)
constructor(arg0: $TagKey$$Type<($Item)>, arg1: integer)
constructor(arg0: $TagKey$$Type<($Item)>)
constructor(arg0: $Ingredient$$Type, arg1: integer)

public "getMatchingStacks"(): ($ItemStack)[]
public "testIgnoringSize"(arg0: $ItemStack$$Type): boolean
public "hasNoMatchingItems"(): boolean
public "getBaseIngredient"(): $Ingredient
public "getMatchingStackList"(): $List<($ItemStack)>
public "getRandomizedExampleStack"(arg0: integer): $ItemStack
public "test"(arg0: any): boolean
public "test"(arg0: $ItemStack$$Type): boolean
public static "of"(arg0: $ItemStack$$Type): $IngredientWithSize
public "getCount"(): integer
public "serialize"(): $JsonElement
public "withSize"(arg0: integer): $IngredientWithSize
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
get "matchingStacks"(): ($ItemStack)[]
get "baseIngredient"(): $Ingredient
get "matchingStackList"(): $List<($ItemStack)>
get "count"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientWithSize$$Type = ($IngredientWithSize);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IngredientWithSize$$Original = $IngredientWithSize;}
