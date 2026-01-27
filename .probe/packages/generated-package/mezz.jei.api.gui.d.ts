declare module "mezz.jei.api.gui.ingredient.IRecipeSlotRichTooltipCallback" {
import {$IRecipeSlotView, $IRecipeSlotView$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotView"
import {$ITooltipBuilder, $ITooltipBuilder$$Type} from "mezz.jei.api.gui.builder.ITooltipBuilder"

export interface $IRecipeSlotRichTooltipCallback$$Interface {

(arg0: $IRecipeSlotView, arg1: $ITooltipBuilder): void
}

export class $IRecipeSlotRichTooltipCallback implements $IRecipeSlotRichTooltipCallback$$Interface {
 "onRichTooltip"(arg0: $IRecipeSlotView$$Type, arg1: $ITooltipBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotRichTooltipCallback$$Type = ((arg0: $IRecipeSlotView, arg1: $ITooltipBuilder) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRecipeSlotRichTooltipCallback$$Original = $IRecipeSlotRichTooltipCallback;}
declare module "mezz.jei.api.gui.builder.IIngredientConsumer" {
import {$DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Optional$$Type} from "java.util.Optional"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$List$$Type} from "java.util.List"
import {$IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$ITypedIngredient$$Type} from "mezz.jei.api.ingredients.ITypedIngredient"

export interface $IIngredientConsumer$$Interface {
}

export class $IIngredientConsumer implements $IIngredientConsumer$$Interface {
 "addTypedIngredients"(arg0: $List$$Type<($ITypedIngredient$$Type<(never)>)>): $IIngredientConsumer
 "addTypedIngredient"<I>(arg0: $ITypedIngredient$$Type<(I)>): $IIngredientConsumer
 "addIngredientsUnsafe"(arg0: $List$$Type<(never)>): $IIngredientConsumer
 "addOptionalTypedIngredients"(arg0: $List$$Type<(($ITypedIngredient$$Type<(never)>)?)>): $IIngredientConsumer
 "addIngredients"<I>(arg0: $IIngredientType$$Type<(I)>, arg1: $List$$Type<(I)>): $IIngredientConsumer
 "addIngredients"(arg0: $Ingredient$$Type): $IIngredientConsumer
 "addItemStack"(arg0: $ItemStack$$Type): $IIngredientConsumer
 "addItemLike"(arg0: $ItemLike$$Type): $IIngredientConsumer
 "addItemStacks"(arg0: $List$$Type<($ItemStack$$Type)>): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long, arg2: $DataComponentPatch$$Type): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type): $IIngredientConsumer
 "addIngredient"<I>(arg0: $IIngredientType$$Type<(I)>, arg1: I): $IIngredientConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientConsumer$$Type = ($IIngredientConsumer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IIngredientConsumer$$Original = $IIngredientConsumer;}
declare module "mezz.jei.api.gui.builder.IIngredientAcceptor" {
import {$DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$List$$Type} from "java.util.List"
import {$IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$IIngredientConsumer, $IIngredientConsumer$$Interface} from "mezz.jei.api.gui.builder.IIngredientConsumer"
import {$ITypedIngredient$$Type} from "mezz.jei.api.ingredients.ITypedIngredient"

export interface $IIngredientAcceptor$$Interface<THIS extends $IIngredientAcceptor<(object)>> extends $IIngredientConsumer$$Interface {
}

export class $IIngredientAcceptor<THIS extends $IIngredientAcceptor<(object)>> implements $IIngredientAcceptor$$Interface {
 "addTypedIngredients"(arg0: $List$$Type<($ITypedIngredient$$Type<(never)>)>): THIS
 "addTypedIngredient"(arg0: $ITypedIngredient$$Type): $IIngredientConsumer
 "addIngredientsUnsafe"(arg0: $List$$Type): $IIngredientConsumer
 "addOptionalTypedIngredients"(arg0: $List$$Type): $IIngredientConsumer
 "addIngredients"(arg0: $IIngredientType$$Type, arg1: $List$$Type): $IIngredientConsumer
 "addIngredients"(arg0: $Ingredient$$Type): $IIngredientConsumer
 "addItemStack"(arg0: $ItemStack$$Type): $IIngredientConsumer
 "addItemLike"(arg0: $ItemLike$$Type): $IIngredientConsumer
 "addItemStacks"(arg0: $List$$Type): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long, arg2: $DataComponentPatch$$Type): THIS
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long): THIS
 "addFluidStack"(arg0: $Fluid$$Type): $IIngredientConsumer
 "addIngredient"<I>(arg0: $IIngredientType$$Type<(I)>, arg1: I): THIS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientAcceptor$$Type<THIS> = ($IIngredientAcceptor<(THIS)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IIngredientAcceptor$$Original<THIS> = $IIngredientAcceptor<(THIS)>;}
declare module "mezz.jei.api.gui.widgets.ISlottedWidgetFactory" {
import {$List, $List$$Type} from "java.util.List"
import {$IRecipeExtrasBuilder, $IRecipeExtrasBuilder$$Type} from "mezz.jei.api.gui.widgets.IRecipeExtrasBuilder"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotDrawable"

/**
 * 
 * @deprecated
 */
export interface $ISlottedWidgetFactory$$Interface<R> {

(arg0: $IRecipeExtrasBuilder, arg1: R, arg2: $List<($IRecipeSlotDrawable)>): void
}

export class $ISlottedWidgetFactory<R> implements $ISlottedWidgetFactory$$Interface {
/**
 * 
 * @deprecated
 */
 "createWidgetForSlots"(arg0: $IRecipeExtrasBuilder$$Type, arg1: R, arg2: $List$$Type<($IRecipeSlotDrawable$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlottedWidgetFactory$$Type<R> = ((arg0: $IRecipeExtrasBuilder, arg1: R, arg2: $List<($IRecipeSlotDrawable)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISlottedWidgetFactory$$Original<R> = $ISlottedWidgetFactory<(R)>;}
declare module "mezz.jei.api.gui.widgets.IRecipeExtrasBuilder" {
import {$FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$ISlottedRecipeWidget$$Type} from "mezz.jei.api.gui.widgets.ISlottedRecipeWidget"
import {$List$$Type} from "java.util.List"
import {$IJeiGuiEventListener$$Type} from "mezz.jei.api.gui.inputs.IJeiGuiEventListener"
import {$IRecipeSlotDrawable$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotDrawable"
import {$IRecipeSlotDrawablesView} from "mezz.jei.api.gui.ingredient.IRecipeSlotDrawablesView"
import {$IDrawable$$Type} from "mezz.jei.api.gui.drawable.IDrawable"
import {$IRecipeWidget$$Type} from "mezz.jei.api.gui.widgets.IRecipeWidget"
import {$IScrollBoxWidget} from "mezz.jei.api.gui.widgets.IScrollBoxWidget"
import {$IPlaceable} from "mezz.jei.api.gui.placement.IPlaceable"
import {$ITextWidget} from "mezz.jei.api.gui.widgets.ITextWidget"
import {$IScrollGridWidget} from "mezz.jei.api.gui.widgets.IScrollGridWidget"
import {$IJeiInputHandler$$Type} from "mezz.jei.api.gui.inputs.IJeiInputHandler"

export interface $IRecipeExtrasBuilder$$Interface {
get "recipeSlots"(): $IRecipeSlotDrawablesView
}

export class $IRecipeExtrasBuilder implements $IRecipeExtrasBuilder$$Interface {
/**
 * 
 * @deprecated
 */
 "addAnimatedRecipeArrow"(arg0: integer, arg1: integer, arg2: integer): void
 "addAnimatedRecipeArrow"(arg0: integer): $IPlaceable<(never)>
/**
 * 
 * @deprecated
 */
 "addAnimatedRecipeFlame"(arg0: integer, arg1: integer, arg2: integer): void
 "addAnimatedRecipeFlame"(arg0: integer): $IPlaceable<(never)>
/**
 * 
 * @deprecated
 */
 "addRecipeArrow"(arg0: integer, arg1: integer): void
 "addRecipeArrow"(): $IPlaceable<(never)>
 "addRecipePlusSign"(): $IPlaceable<(never)>
/**
 * 
 * @deprecated
 */
 "addRecipePlusSign"(arg0: integer, arg1: integer): void
 "addScrollGridWidget"(arg0: $List$$Type<($IRecipeSlotDrawable$$Type)>, arg1: integer, arg2: integer): $IScrollGridWidget
 "addInputHandler"(arg0: $IJeiInputHandler$$Type): void
 "addScrollBoxWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IScrollBoxWidget
 "getRecipeSlots"(): $IRecipeSlotDrawablesView
 "addDrawable"(arg0: $IDrawable$$Type, arg1: integer, arg2: integer): void
 "addDrawable"(arg0: $IDrawable$$Type): $IPlaceable<(never)>
 "addSlottedWidget"(arg0: $ISlottedRecipeWidget$$Type, arg1: $List$$Type<($IRecipeSlotDrawable$$Type)>): void
 "addGuiEventListener"(arg0: $IJeiGuiEventListener$$Type): void
 "addText"(arg0: $List$$Type<($FormattedText$$Type)>, arg1: integer, arg2: integer): $ITextWidget
/**
 * 
 * @deprecated
 */
 "addText"(arg0: $FormattedText$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $ITextWidget
/**
 * 
 * @deprecated
 */
 "addText"(arg0: $List$$Type<($FormattedText$$Type)>, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $ITextWidget
 "addText"(arg0: $FormattedText$$Type, arg1: integer, arg2: integer): $ITextWidget
 "addWidget"(arg0: $IRecipeWidget$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeExtrasBuilder$$Type = ($IRecipeExtrasBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRecipeExtrasBuilder$$Original = $IRecipeExtrasBuilder;}
declare module "mezz.jei.api.gui.ingredient.IRecipeSlotTooltipCallback" {
import {$IRecipeSlotView, $IRecipeSlotView$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotView"
import {$ITooltipBuilder$$Type} from "mezz.jei.api.gui.builder.ITooltipBuilder"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

/**
 * 
 * @deprecated
 */
export interface $IRecipeSlotTooltipCallback$$Interface {

(arg0: $IRecipeSlotView, arg1: $List<($Component)>): void
}

export class $IRecipeSlotTooltipCallback implements $IRecipeSlotTooltipCallback$$Interface {
/**
 * 
 * @deprecated
 */
 "onRichTooltip"(arg0: $IRecipeSlotView$$Type, arg1: $ITooltipBuilder$$Type): void
/**
 * 
 * @deprecated
 */
 "onTooltip"(arg0: $IRecipeSlotView$$Type, arg1: $List$$Type<($Component$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotTooltipCallback$$Type = ((arg0: $IRecipeSlotView, arg1: $List<($Component)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRecipeSlotTooltipCallback$$Original = $IRecipeSlotTooltipCallback;}
declare module "mezz.jei.api.gui.placement.IPlaceable" {
import {$HorizontalAlignment$$Type} from "mezz.jei.api.gui.placement.HorizontalAlignment"
import {$VerticalAlignment$$Type} from "mezz.jei.api.gui.placement.VerticalAlignment"

export interface $IPlaceable$$Interface<THIS extends $IPlaceable<(object)>> {
get "width"(): integer
get "height"(): integer
}

export class $IPlaceable<THIS extends $IPlaceable<(object)>> implements $IPlaceable$$Interface {
 "getWidth"(): integer
 "getHeight"(): integer
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$$Type, arg5: $VerticalAlignment$$Type): THIS
 "setPosition"(arg0: integer, arg1: integer): THIS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlaceable$$Type<THIS> = ($IPlaceable<(THIS)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlaceable$$Original<THIS> = $IPlaceable<(THIS)>;}
declare module "mezz.jei.api.gui.placement.VerticalAlignment" {
import {$Enum} from "java.lang.Enum"

export class $VerticalAlignment extends $Enum<($VerticalAlignment)> {
static readonly "CENTER": $VerticalAlignment
static readonly "TOP": $VerticalAlignment
static readonly "BOTTOM": $VerticalAlignment

public "getYPos"(arg0: integer, arg1: integer): integer
public static "values"(): ($VerticalAlignment)[]
public static "valueOf"(arg0: StringJS): $VerticalAlignment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalAlignment$$Type = (("top") | ("center") | ("bottom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VerticalAlignment$$Original = $VerticalAlignment;}
declare module "mezz.jei.api.gui.builder.IRecipeSlotBuilder" {
import {$IIngredientRenderer$$Type} from "mezz.jei.api.ingredients.IIngredientRenderer"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$IRecipeSlotRichTooltipCallback$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotRichTooltipCallback"
import {$List$$Type} from "java.util.List"
import {$IRecipeSlotTooltipCallback$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotTooltipCallback"
import {$IIngredientConsumer} from "mezz.jei.api.gui.builder.IIngredientConsumer"
import {$IDrawable$$Type} from "mezz.jei.api.gui.drawable.IDrawable"
import {$IIngredientAcceptor, $IIngredientAcceptor$$Interface} from "mezz.jei.api.gui.builder.IIngredientAcceptor"
import {$DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IPlaceable$$Interface} from "mezz.jei.api.gui.placement.IPlaceable"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$HorizontalAlignment$$Type} from "mezz.jei.api.gui.placement.HorizontalAlignment"
import {$IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$VerticalAlignment$$Type} from "mezz.jei.api.gui.placement.VerticalAlignment"
import {$ITypedIngredient$$Type} from "mezz.jei.api.ingredients.ITypedIngredient"

export interface $IRecipeSlotBuilder$$Interface extends $IIngredientAcceptor$$Interface<($IRecipeSlotBuilder)>, $IPlaceable$$Interface<($IRecipeSlotBuilder)> {
get "outputSlotBackground"(): $IRecipeSlotBuilder
get "standardSlotBackground"(): $IRecipeSlotBuilder
set "slotName"(value: StringJS)
get "width"(): integer
get "height"(): integer
}

export class $IRecipeSlotBuilder implements $IRecipeSlotBuilder$$Interface {
 "setOutputSlotBackground"(): $IRecipeSlotBuilder
 "setStandardSlotBackground"(): $IRecipeSlotBuilder
 "addRichTooltipCallback"(arg0: $IRecipeSlotRichTooltipCallback$$Type): $IRecipeSlotBuilder
 "setSlotName"(arg0: StringJS): $IRecipeSlotBuilder
 "setBackground"(arg0: $IDrawable$$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "setCustomRenderer"<T>(arg0: $IIngredientType$$Type<(T)>, arg1: $IIngredientRenderer$$Type<(T)>): $IRecipeSlotBuilder
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long, arg2: $DataComponentPatch$$Type): $IIngredientAcceptor
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long): $IRecipeSlotBuilder
 "setOverlay"(arg0: $IDrawable$$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "setFluidRenderer"(arg0: long, arg1: boolean, arg2: integer, arg3: integer): $IRecipeSlotBuilder
/**
 * 
 * @deprecated
 */
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$$Type): $IRecipeSlotBuilder
 "addTypedIngredients"(arg0: $List$$Type<($ITypedIngredient$$Type<(never)>)>): $IRecipeSlotBuilder
 "addTypedIngredient"(arg0: $ITypedIngredient$$Type): $IIngredientConsumer
 "addIngredientsUnsafe"(arg0: $List$$Type): $IIngredientConsumer
 "addOptionalTypedIngredients"(arg0: $List$$Type): $IIngredientConsumer
 "addIngredients"(arg0: $IIngredientType$$Type, arg1: $List$$Type): $IIngredientConsumer
 "addIngredients"(arg0: $Ingredient$$Type): $IIngredientConsumer
 "addItemStack"(arg0: $ItemStack$$Type): $IIngredientConsumer
 "addItemLike"(arg0: $ItemLike$$Type): $IIngredientConsumer
 "addItemStacks"(arg0: $List$$Type): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type): $IIngredientConsumer
 "addIngredient"<I>(arg0: $IIngredientType$$Type<(I)>, arg1: I): $IRecipeSlotBuilder
 "getWidth"(): integer
 "getHeight"(): integer
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$$Type, arg5: $VerticalAlignment$$Type): $IRecipeSlotBuilder
 "setPosition"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotBuilder$$Type = ($IRecipeSlotBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRecipeSlotBuilder$$Original = $IRecipeSlotBuilder;}
declare module "mezz.jei.api.gui.placement.HorizontalAlignment" {
import {$Enum} from "java.lang.Enum"

export class $HorizontalAlignment extends $Enum<($HorizontalAlignment)> {
static readonly "CENTER": $HorizontalAlignment
static readonly "LEFT": $HorizontalAlignment
static readonly "RIGHT": $HorizontalAlignment

public "getXPos"(arg0: integer, arg1: integer): integer
public static "values"(): ($HorizontalAlignment)[]
public static "valueOf"(arg0: StringJS): $HorizontalAlignment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalAlignment$$Type = (("left") | ("center") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HorizontalAlignment$$Original = $HorizontalAlignment;}
declare module "mezz.jei.api.gui.builder.IRecipeLayoutBuilder" {
import {$RecipeIngredientRole$$Type} from "mezz.jei.api.recipe.RecipeIngredientRole"
import {$IRecipeSlotBuilder} from "mezz.jei.api.gui.builder.IRecipeSlotBuilder"
import {$ISlottedWidgetFactory$$Type} from "mezz.jei.api.gui.widgets.ISlottedWidgetFactory"
import {$IIngredientAcceptor, $IIngredientAcceptor$$Type} from "mezz.jei.api.gui.builder.IIngredientAcceptor"

export interface $IRecipeLayoutBuilder$$Interface {
get "shapeless"(): void
}

export class $IRecipeLayoutBuilder implements $IRecipeLayoutBuilder$$Interface {
 "addOutputSlot"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
 "addOutputSlot"(): $IRecipeSlotBuilder
 "addInputSlot"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
 "addInputSlot"(): $IRecipeSlotBuilder
 "createFocusLink"(...arg0: ($IIngredientAcceptor$$Type<(never)>)[]): void
 "addInvisibleIngredients"(arg0: $RecipeIngredientRole$$Type): $IIngredientAcceptor<(never)>
/**
 * 
 * @deprecated
 */
 "addSlotToWidget"(arg0: $RecipeIngredientRole$$Type, arg1: $ISlottedWidgetFactory$$Type<(never)>): $IRecipeSlotBuilder
 "addSlot"(arg0: $RecipeIngredientRole$$Type): $IRecipeSlotBuilder
 "addSlot"(arg0: $RecipeIngredientRole$$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "setShapeless"(arg0: integer, arg1: integer): void
 "setShapeless"(): void
 "moveRecipeTransferButton"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLayoutBuilder$$Type = ($IRecipeLayoutBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRecipeLayoutBuilder$$Original = $IRecipeLayoutBuilder;}
declare module "mezz.jei.api.gui.drawable.IDrawable" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $IDrawable$$Interface {
get "width"(): integer
get "height"(): integer
}

export class $IDrawable implements $IDrawable$$Interface {
 "getWidth"(): integer
 "getHeight"(): integer
 "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawable$$Type = ($IDrawable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrawable$$Original = $IDrawable;}
declare module "mezz.jei.api.gui.ingredient.IRecipeSlotDrawable" {
import {$IRecipeSlotView$$Interface} from "mezz.jei.api.gui.ingredient.IRecipeSlotView"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeIngredientRole} from "mezz.jei.api.recipe.RecipeIngredientRole"
import {$Optional} from "java.util.Optional"
import {$ITooltipBuilder$$Type} from "mezz.jei.api.gui.builder.ITooltipBuilder"
import {$List} from "java.util.List"
import {$IRecipeSlotTooltipCallback$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotTooltipCallback"
import {$IIngredientConsumer} from "mezz.jei.api.gui.builder.IIngredientConsumer"
import {$Component} from "net.minecraft.network.chat.Component"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Rect2i} from "net.minecraft.client.renderer.Rect2i"
import {$IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$ITypedIngredient} from "mezz.jei.api.ingredients.ITypedIngredient"
import {$Stream} from "java.util.stream.Stream"

export interface $IRecipeSlotDrawable$$Interface extends $IRecipeSlotView$$Interface {
get "areaIncludingBackground"(): $Rect2i
get "tooltip"(): $List<($Component)>
get "rect"(): $Rect2i
get "role"(): $RecipeIngredientRole
get "displayedItemStack"(): $Optional<($ItemStack)>
get "allIngredientsList"(): $List<($ITypedIngredient<(never)>)>
get "allIngredients"(): $Stream<($ITypedIngredient<(never)>)>
get "displayedIngredient"(): $Optional<($ITypedIngredient<(never)>)>
get "itemStacks"(): $Stream<($ItemStack)>
get "slotName"(): $Optional<(StringJS)>
get "empty"(): boolean
}

export class $IRecipeSlotDrawable implements $IRecipeSlotDrawable$$Interface {
 "createDisplayOverrides"(): $IIngredientConsumer
 "drawHoverOverlays"(arg0: $GuiGraphics$$Type): void
 "clearDisplayOverrides"(): void
 "getAreaIncludingBackground"(): $Rect2i
 "draw"(arg0: $GuiGraphics$$Type): void
 "isMouseOver"(arg0: double, arg1: double): boolean
/**
 * 
 * @deprecated
 */
 "getTooltip"(): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getTooltip"(arg0: $ITooltipBuilder$$Type): void
 "setPosition"(arg0: integer, arg1: integer): void
 "drawTooltip"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$$Type): void
/**
 * 
 * @deprecated
 */
 "getRect"(): $Rect2i
 "getRole"(): $RecipeIngredientRole
 "getDisplayedItemStack"(): $Optional<($ItemStack)>
 "getAllIngredientsList"(): $List<($ITypedIngredient<(never)>)>
 "getAllIngredients"(): $Stream<($ITypedIngredient<(never)>)>
 "getDisplayedIngredient"<T>(arg0: $IIngredientType$$Type<(T)>): $Optional<(T)>
 "getDisplayedIngredient"(): $Optional<($ITypedIngredient<(never)>)>
 "getItemStacks"(): $Stream<($ItemStack)>
 "getIngredients"<T>(arg0: $IIngredientType$$Type<(T)>): $Stream<(T)>
 "getSlotName"(): $Optional<(StringJS)>
 "drawHighlight"(arg0: $GuiGraphics$$Type, arg1: integer): void
 "isEmpty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotDrawable$$Type = ($IRecipeSlotDrawable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRecipeSlotDrawable$$Original = $IRecipeSlotDrawable;}
