declare module "net.createmod.catnip.gui.element.DelegatedStencilElement" {
import {$ScreenElement$$Type} from "net.createmod.catnip.gui.element.ScreenElement"
import {$RenderElement} from "net.createmod.catnip.gui.element.RenderElement"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$StencilElement$$Interface} from "net.createmod.catnip.gui.element.StencilElement"
import {$AbstractRenderElement} from "net.createmod.catnip.gui.element.AbstractRenderElement"
import {$FadableScreenElement$$Type} from "net.createmod.catnip.gui.element.FadableScreenElement"

export class $DelegatedStencilElement extends $AbstractRenderElement implements $StencilElement$$Interface {
static "EMPTY": $RenderElement

constructor()
constructor(arg0: $FadableScreenElement$$Type, arg1: $FadableScreenElement$$Type)

public "withStencilRenderer"<T extends $DelegatedStencilElement>(arg0: $FadableScreenElement$$Type): T
public "withElementRenderer"<T extends $DelegatedStencilElement>(arg0: $FadableScreenElement$$Type): T
public "renderStencil"(arg0: $GuiGraphics$$Type): void
public "renderElement"(arg0: $GuiGraphics$$Type): void
public "cleanUp"(arg0: $GuiGraphics$$Type): void
public "prepareStencil"(arg0: $GuiGraphics$$Type): void
public "prepareElement"(arg0: $GuiGraphics$$Type): void
public "transform"(arg0: $GuiGraphics$$Type): void
public "render"(arg0: $GuiGraphics$$Type): void
public static "of"(arg0: $ScreenElement$$Type): $RenderElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegatedStencilElement$$Type = ($DelegatedStencilElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DelegatedStencilElement$$Original = $DelegatedStencilElement;}
declare module "net.createmod.catnip.gui.element.ScreenElement" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $ScreenElement$$Interface {

(arg0: $GuiGraphics, arg1: integer, arg2: integer): void
}

export class $ScreenElement implements $ScreenElement$$Interface {
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenElement$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenElement$$Original = $ScreenElement;}
declare module "net.createmod.catnip.gui.widget.AbstractSimiWidget" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List} from "java.util.List"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component as $Component$0} from "net.minecraft.network.chat.Component"
import {$Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TickableGuiEventListener$$Interface} from "net.createmod.catnip.gui.TickableGuiEventListener"
import {$Color} from "net.createmod.catnip.theme.Color"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $AbstractSimiWidget extends $AbstractWidget implements $TickableGuiEventListener$$Interface {
static readonly "COLOR_SUCCESS": $Couple<($Color)>
 "visible": boolean
static readonly "HEADER_RGB": $Color
 "lockedTooltipY": integer
static readonly "COLOR_HOVER": $Couple<($Color)>
 "active": boolean
static readonly "COLOR_CLICK": $Couple<($Color)>
static readonly "UNSET_FG_COLOR": integer
static readonly "HINT_RGB": $Color
static readonly "COLOR_IDLE": $Couple<($Color)>
 "lockedTooltipX": integer
static readonly "COLOR_DISABLED": $Couple<($Color)>
static readonly "COLOR_FAIL": $Couple<($Color)>

public "atZLevel"<T extends $AbstractSimiWidget>(arg0: float): T
public "withCallback"<T extends $AbstractSimiWidget>(arg0: $Runnable$$Type): T
public "withCallback"<T extends $AbstractSimiWidget>(arg0: $BiConsumer$$Type<(integer), (integer)>): T
public "getToolTip"(): $List<($Component$0)>
public "runCallback"(arg0: double, arg1: double): void
public "tick"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "setActive"<T extends $AbstractSimiWidget>(arg0: boolean): T
public "setHeight"(arg0: integer): void
public "onClick"(arg0: double, arg1: double): void
public "updateWidgetNarration"(arg0: $NarrationElementOutput$$Type): void
public static "bypassCheck"(component: $Component$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
get "toolTip"(): $List<($Component$0)>
set "height"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSimiWidget$$Type = ($AbstractSimiWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSimiWidget$$Original = $AbstractSimiWidget;}
declare module "net.createmod.catnip.gui.element.FadableScreenElement" {
import {$ScreenElement$$Interface} from "net.createmod.catnip.gui.element.ScreenElement"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $FadableScreenElement$$Interface extends $ScreenElement$$Interface {

(arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: float): void
}

export class $FadableScreenElement implements $FadableScreenElement$$Interface {
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FadableScreenElement$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FadableScreenElement$$Original = $FadableScreenElement;}
declare module "net.createmod.catnip.gui.TickableGuiEventListener" {
import {$GuiEventListener$$Interface} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"

export interface $TickableGuiEventListener$$Interface extends $GuiEventListener$$Interface {
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
set "focused"(value: boolean)
get "focused"(): boolean
get "tabOrderGroup"(): integer
}

export class $TickableGuiEventListener implements $TickableGuiEventListener$$Interface {
 "tick"(): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "getCurrentFocusPath"(): $ComponentPath
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getRectangle"(): $ScreenRectangle
 "setFocused"(arg0: boolean): void
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "isFocused"(): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableGuiEventListener$$Type = ($TickableGuiEventListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickableGuiEventListener$$Original = $TickableGuiEventListener;}
declare module "net.createmod.catnip.gui.TextureSheetSegment" {
import {$BindableTexture$$Interface} from "net.createmod.catnip.render.BindableTexture"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export interface $TextureSheetSegment$$Interface extends $BindableTexture$$Interface {
get "startX"(): integer
get "startY"(): integer
get "width"(): integer
get "height"(): integer
get "location"(): $ResourceLocation
}

export class $TextureSheetSegment implements $TextureSheetSegment$$Interface {
 "getStartX"(): integer
 "getStartY"(): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "getLocation"(): $ResourceLocation
 "bind"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureSheetSegment$$Type = ($TextureSheetSegment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureSheetSegment$$Original = $TextureSheetSegment;}
declare module "net.createmod.catnip.gui.element.StencilElement" {
import {$ScreenElement$$Type} from "net.createmod.catnip.gui.element.ScreenElement"
import {$RenderElement, $RenderElement$$Interface} from "net.createmod.catnip.gui.element.RenderElement"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $StencilElement$$Interface extends $RenderElement$$Interface {
get "width"(): integer
get "height"(): integer
get "y"(): float
get "x"(): float
get "z"(): float
}

export class $StencilElement implements $StencilElement$$Interface {
 "cleanUp"(arg0: $GuiGraphics$$Type): void
 "renderStencil"(arg0: $GuiGraphics$$Type): void
 "prepareStencil"(arg0: $GuiGraphics$$Type): void
 "prepareElement"(arg0: $GuiGraphics$$Type): void
 "transform"(arg0: $GuiGraphics$$Type): void
 "render"(arg0: $GuiGraphics$$Type): void
 "renderElement"(arg0: $GuiGraphics$$Type): void
 "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
 "withAlpha"<T extends $RenderElement>(arg0: float): T
 "getWidth"(): integer
 "getHeight"(): integer
 "getY"(): float
static "of"(arg0: $ScreenElement$$Type): $RenderElement
 "at"<T extends $RenderElement>(arg0: float, arg1: float): T
 "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
 "getX"(): float
 "getZ"(): float
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StencilElement$$Type = ($StencilElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StencilElement$$Original = $StencilElement;}
declare module "net.createmod.catnip.gui.element.RenderElement" {
import {$ScreenElement$$Type} from "net.createmod.catnip.gui.element.ScreenElement"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FadableScreenElement$$Interface} from "net.createmod.catnip.gui.element.FadableScreenElement"

export interface $RenderElement$$Interface extends $FadableScreenElement$$Interface {
get "width"(): integer
get "height"(): integer
get "y"(): float
get "x"(): float
get "z"(): float
}

export class $RenderElement implements $RenderElement$$Interface {
 "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
 "withAlpha"<T extends $RenderElement>(arg0: float): T
 "getWidth"(): integer
 "getHeight"(): integer
 "getY"(): float
static "of"(arg0: $ScreenElement$$Type): $RenderElement
 "at"<T extends $RenderElement>(arg0: float, arg1: float): T
 "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
 "render"(arg0: $GuiGraphics$$Type): void
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
 "getX"(): float
 "getZ"(): float
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderElement$$Type = ($RenderElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderElement$$Original = $RenderElement;}
declare module "net.createmod.catnip.gui.element.AbstractRenderElement" {
import {$ScreenElement$$Type} from "net.createmod.catnip.gui.element.ScreenElement"
import {$RenderElement, $RenderElement$$Interface} from "net.createmod.catnip.gui.element.RenderElement"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $AbstractRenderElement implements $RenderElement$$Interface {
static "EMPTY": $RenderElement

constructor()

public "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
public "withAlpha"<T extends $RenderElement>(arg0: float): T
public "getWidth"(): integer
public "getHeight"(): integer
public "getY"(): float
public "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
public "at"<T extends $RenderElement>(arg0: float, arg1: float): T
public "getX"(): float
public "getZ"(): float
public static "of"(arg0: $ScreenElement$$Type): $RenderElement
public "render"(arg0: $GuiGraphics$$Type): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
get "width"(): integer
get "height"(): integer
get "y"(): float
get "x"(): float
get "z"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRenderElement$$Type = ($AbstractRenderElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractRenderElement$$Original = $AbstractRenderElement;}
