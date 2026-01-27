declare module "com.almostreliable.kubeio.mixin.FireCraftingResultMixin" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FireCraftingResult$$Interface} from "com.almostreliable.kubeio.binding.FireCraftingResult"
import {$FireCraftingRecipe$Result} from "com.enderio.enderio.content.fire_crafting.FireCraftingRecipe$Result"

export interface $FireCraftingResultMixin$$Interface extends $FireCraftingResult$$Interface {
}

export class $FireCraftingResultMixin implements $FireCraftingResultMixin$$Interface {
static "of"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: float): $FireCraftingRecipe$Result
static "of"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): $FireCraftingRecipe$Result
static "of"(arg0: $ItemStack$$Type, arg1: integer): $FireCraftingRecipe$Result
static "of"(arg0: $ItemStack$$Type): $FireCraftingRecipe$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireCraftingResultMixin$$Type = ($FireCraftingResultMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireCraftingResultMixin$$Original = $FireCraftingResultMixin;}
declare module "com.almostreliable.kubeio.mixin.IngredientAccessor" {
import {$Ingredient$Value, $Ingredient$Value$$Type} from "net.minecraft.world.item.crafting.Ingredient$Value"

export interface $IngredientAccessor$$Interface {

(): ($Ingredient$Value$$Type)[]
}

export class $IngredientAccessor implements $IngredientAccessor$$Interface {
 "kubeio$getValues"(): ($Ingredient$Value)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientAccessor$$Type = (() => ($Ingredient$Value$$Type)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IngredientAccessor$$Original = $IngredientAccessor;}
