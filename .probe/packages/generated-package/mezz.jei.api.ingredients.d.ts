declare module "mezz.jei.api.ingredients.IIngredientType" {
import {$Optional} from "java.util.Optional"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $IIngredientType$$Interface<T> {

(): $Class$$Type<(T)>
get "ingredientClass"(): $Class<(T)>
get "uid"(): StringJS
}

export class $IIngredientType<T> implements $IIngredientType$$Interface {
 "getIngredientClass"(): $Class<(T)>
 "castIngredient"(arg0: any): $Optional<(T)>
 "getCastIngredient"(arg0: any): T
 "getUid"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientType$$Type<T> = (() => $Class$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IIngredientType$$Original<T> = $IIngredientType<(T)>;}
declare module "mezz.jei.api.ingredients.IIngredientRenderer" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ITooltipBuilder$$Type} from "mezz.jei.api.gui.builder.ITooltipBuilder"
import {$BatchRenderElement$$Type} from "mezz.jei.api.ingredients.rendering.BatchRenderElement"
import {$List, $List$$Type} from "java.util.List"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export interface $IIngredientRenderer$$Interface<T> {
get "width"(): integer
get "height"(): integer
}

export class $IIngredientRenderer<T> implements $IIngredientRenderer$$Interface {
 "renderBatch"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($BatchRenderElement$$Type<(T)>)>): void
 "getFontRenderer"(arg0: $Minecraft$$Type, arg1: T): $Font
 "getWidth"(): integer
 "getHeight"(): integer
 "render"(arg0: $GuiGraphics$$Type, arg1: T): void
 "render"(arg0: $GuiGraphics$$Type, arg1: T, arg2: integer, arg3: integer): void
 "getTooltip"(arg0: T, arg1: $TooltipFlag$$Type): $List<($Component)>
 "getTooltip"(arg0: $ITooltipBuilder$$Type, arg1: T, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientRenderer$$Type<T> = ($IIngredientRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IIngredientRenderer$$Original<T> = $IIngredientRenderer<(T)>;}
declare module "mezz.jei.api.ingredients.ITypedIngredient" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$IIngredientType, $IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$IIngredientTypeWithSubtypes$$Type} from "mezz.jei.api.ingredients.IIngredientTypeWithSubtypes"

export interface $ITypedIngredient$$Interface<T> {
get "ingredient"(): T
get "type"(): $IIngredientType<(T)>
get "itemStack"(): $Optional<($ItemStack)>
}

export class $ITypedIngredient<T> implements $ITypedIngredient$$Interface {
 "castToItemStackType"(): $ITypedIngredient<($ItemStack)>
 "getCastIngredient"<V>(arg0: $IIngredientType$$Type<(V)>): V
 "getIngredient"<V>(arg0: $IIngredientType$$Type<(V)>): $Optional<(V)>
 "getIngredient"(): T
 "getBaseIngredient"<B>(arg0: $IIngredientTypeWithSubtypes$$Type<(B), (T)>): B
 "cast"<V>(arg0: $IIngredientType$$Type<(V)>): $ITypedIngredient<(V)>
 "getType"(): $IIngredientType<(T)>
 "getItemStack"(): $Optional<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITypedIngredient$$Type<T> = ($ITypedIngredient<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITypedIngredient$$Original<T> = $ITypedIngredient<(T)>;}
