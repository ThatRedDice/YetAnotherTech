declare module "com.enderio.enderio.mixin.AbstractCookingRecipeAccessor" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"

export interface $AbstractCookingRecipeAccessor$$Interface {
get "experience"(): float
get "ingredient"(): $Ingredient
get "result"(): $ItemStack
}

export class $AbstractCookingRecipeAccessor implements $AbstractCookingRecipeAccessor$$Interface {
 "getExperience"(): float
 "getIngredient"(): $Ingredient
 "getResult"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCookingRecipeAccessor$$Type = ($AbstractCookingRecipeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractCookingRecipeAccessor$$Original = $AbstractCookingRecipeAccessor;}
