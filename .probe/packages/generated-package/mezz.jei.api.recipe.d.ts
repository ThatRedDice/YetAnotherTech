declare module "mezz.jei.api.recipe.RecipeIngredientRole" {
import {$Enum} from "java.lang.Enum"

export class $RecipeIngredientRole extends $Enum<($RecipeIngredientRole)> {
static readonly "INPUT": $RecipeIngredientRole
static readonly "RENDER_ONLY": $RecipeIngredientRole
static readonly "OUTPUT": $RecipeIngredientRole
static readonly "CATALYST": $RecipeIngredientRole

public static "values"(): ($RecipeIngredientRole)[]
public static "valueOf"(arg0: StringJS): $RecipeIngredientRole
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeIngredientRole$$Type = (("input") | ("output") | ("catalyst") | ("render_only"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeIngredientRole$$Original = $RecipeIngredientRole;}
declare module "mezz.jei.api.recipe.IFocus" {
import {$RecipeIngredientRole} from "mezz.jei.api.recipe.RecipeIngredientRole"
import {$Optional} from "java.util.Optional"
import {$IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$ITypedIngredient} from "mezz.jei.api.ingredients.ITypedIngredient"

export interface $IFocus$$Interface<V> {
get "role"(): $RecipeIngredientRole
get "typedValue"(): $ITypedIngredient<(V)>
}

export class $IFocus<V> implements $IFocus$$Interface {
 "getRole"(): $RecipeIngredientRole
 "checkedCast"<T>(arg0: $IIngredientType$$Type<(T)>): $Optional<($IFocus<(T)>)>
 "getTypedValue"(): $ITypedIngredient<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocus$$Type<V> = ($IFocus<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFocus$$Original<V> = $IFocus<(V)>;}
declare module "mezz.jei.api.recipe.IFocusGroup" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeIngredientRole$$Type} from "mezz.jei.api.recipe.RecipeIngredientRole"
import {$IFocus} from "mezz.jei.api.recipe.IFocus"
import {$List} from "java.util.List"
import {$IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$Stream} from "java.util.stream.Stream"

export interface $IFocusGroup$$Interface {
get "itemStackFocuses"(): $Stream<($IFocus<($ItemStack)>)>
get "allFocuses"(): $List<($IFocus<(never)>)>
get "empty"(): boolean
}

export class $IFocusGroup implements $IFocusGroup$$Interface {
 "getFocuses"<T>(arg0: $IIngredientType$$Type<(T)>, arg1: $RecipeIngredientRole$$Type): $Stream<($IFocus<(T)>)>
 "getFocuses"(arg0: $RecipeIngredientRole$$Type): $Stream<($IFocus<(never)>)>
 "getFocuses"<T>(arg0: $IIngredientType$$Type<(T)>): $Stream<($IFocus<(T)>)>
 "getItemStackFocuses"(): $Stream<($IFocus<($ItemStack)>)>
 "getItemStackFocuses"(arg0: $RecipeIngredientRole$$Type): $Stream<($IFocus<($ItemStack)>)>
 "getAllFocuses"(): $List<($IFocus<(never)>)>
 "isEmpty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocusGroup$$Type = ($IFocusGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFocusGroup$$Original = $IFocusGroup;}
