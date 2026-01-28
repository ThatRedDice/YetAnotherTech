declare module "com.buuz135.industrial.recipe.FluidExtractorRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidExtractorRecipe implements $Recipe$$Interface<($CraftingInput)> {
 "result": $BlockState
 "output": $FluidStack
 "input": $Ingredient
static readonly "CODEC": $MapCodec<($FluidExtractorRecipe)>
 "defaultRecipe": boolean
 "breakChance": float

constructor(arg0: $Ingredient$$Type, arg1: $BlockState$$Type, arg2: float, arg3: $FluidStack$$Type, arg4: boolean)
constructor()

public static "createRecipe"(arg0: $RecipeOutput$$Type, arg1: StringJS, arg2: $FluidExtractorRecipe$$Type): void
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "outputsLatex"(): boolean
public static "generateRL"(arg0: StringJS): $ResourceLocation
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public static "init"(arg0: $RecipeOutput$$Type): void
public "getType"(): $RecipeType<(never)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
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
export type $FluidExtractorRecipe$$Type = ($FluidExtractorRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidExtractorRecipe$$Original = $FluidExtractorRecipe;}
declare module "com.buuz135.industrial.recipe.StoneWorkGenerateRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$FluidTankComponent$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$FluidTank$$Type} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $StoneWorkGenerateRecipe implements $Recipe$$Interface<($CraftingInput)> {
 "output": $ItemStack
 "lavaConsume": integer
static readonly "CODEC": $MapCodec<($StoneWorkGenerateRecipe)>
 "waterNeed": integer
 "lavaNeed": integer
 "waterConsume": integer

constructor(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer)
constructor()

public static "createRecipe"(arg0: $RecipeOutput$$Type, arg1: StringJS, arg2: $StoneWorkGenerateRecipe$$Type): void
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "canIncrease"(arg0: $FluidTank$$Type, arg1: $FluidTank$$Type): boolean
public static "generateRL"(arg0: StringJS): $ResourceLocation
public "consume"(arg0: $FluidTankComponent$$Type, arg1: $FluidTankComponent$$Type): void
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public static "init"(arg0: $RecipeOutput$$Type): void
public "getType"(): $RecipeType<(never)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
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
export type $StoneWorkGenerateRecipe$$Type = ($StoneWorkGenerateRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StoneWorkGenerateRecipe$$Original = $StoneWorkGenerateRecipe;}
