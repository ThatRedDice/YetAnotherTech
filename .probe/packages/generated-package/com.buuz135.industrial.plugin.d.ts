declare module "com.buuz135.industrial.plugin.jei.generator.MycelialGeneratorRecipe" {
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $MycelialGeneratorRecipe {
constructor(arg0: $List$$Type<($List$$Type<($Ingredient$$Type)>)>, arg1: $List$$Type<($List$$Type<($FluidStack$$Type)>)>, arg2: integer, arg3: integer)

public "getInputItems"(): $List<($List<($Ingredient)>)>
public "getFluidItems"(): $List<($List<($FluidStack)>)>
public "getPowerTick"(): integer
public "getTicks"(): integer
get "inputItems"(): $List<($List<($Ingredient)>)>
get "fluidItems"(): $List<($List<($FluidStack)>)>
get "powerTick"(): integer
get "ticks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialGeneratorRecipe$$Type = ($MycelialGeneratorRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MycelialGeneratorRecipe$$Original = $MycelialGeneratorRecipe;}
