declare module "io.wispforest.owo.ui.core.Sizing$Method" {
import {$Enum} from "java.lang.Enum"

export class $Sizing$Method extends $Enum<($Sizing$Method)> {
static readonly "EXPAND": $Sizing$Method
static readonly "FILL": $Sizing$Method
static readonly "FIXED": $Sizing$Method
static readonly "CONTENT": $Sizing$Method

public static "values"(): ($Sizing$Method)[]
public static "valueOf"(name: StringJS): $Sizing$Method
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sizing$Method$$Type = (("fixed") | ("content") | ("fill") | ("expand"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Sizing$Method$$Original = $Sizing$Method;}
declare module "io.wispforest.owo.ui.core.Color" {
import {$Node$$Type} from "org.w3c.dom.Node"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Animatable, $Animatable$$Type, $Animatable$$Interface} from "io.wispforest.owo.ui.core.Animatable"
import {$Record} from "java.lang.Record"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $Color extends $Record implements $Animatable$$Interface<($Color)> {
static readonly "RED": $Color
static readonly "WHITE": $Color
static readonly "BLUE": $Color
static readonly "BLACK": $Color
static readonly "GREEN": $Color

constructor(red: float, green: float, blue: float)
constructor(red: float, green: float, blue: float, alpha: float)

public static "ofArgb"(argb: integer): $Color
public "asHexString"(includeAlpha: boolean): StringJS
public static "ofRgb"(rgb: integer): $Color
public static "ofHsv"(hue: float, saturation: float, value: float): $Color
public static "ofHsv"(hue: float, saturation: float, value: float, alpha: float): $Color
public static "ofFormatting"(formatting: $ChatFormatting$$Type): $Color
public static "ofDye"(dyeColor: $DyeColor$$Type): $Color
public "hsv"(): (float)[]
public static "parseAndPack"(node: $Node$$Type): integer
public "rgb"(): integer
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "parse"(node: $Node$$Type): $Color
public static "random"(): $Color
public "red"(): float
public "blue"(): float
public "green"(): float
public "interpolate"(next: $Color$$Type, delta: float): $Color
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public "alpha"(): float
public "argb"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$$Type = ({"red"?: float, "blue"?: float, "green"?: float, "alpha"?: float}) | ([red?: float, blue?: float, green?: float, alpha?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Color$$Original = $Color;}
declare module "io.wispforest.owo.ui.event.CharTyped" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $CharTyped$$Interface {

(arg0: character, arg1: integer): boolean
}

export class $CharTyped implements $CharTyped$$Interface {
static "newStream"(): $EventStream<($CharTyped)>
 "onCharTyped"(arg0: character, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharTyped$$Type = ((arg0: character, arg1: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CharTyped$$Original = $CharTyped;}
declare module "io.wispforest.owo.ui.base.BaseComponent" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ComponentExtension$$Interface} from "io.wispforest.accessories.pond.owo.ComponentExtension"
import {$Component$$Type as $Component$0$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$Component, $Component$$Type, $Component$$Interface} from "io.wispforest.owo.ui.core.Component"
import {$FocusGained} from "io.wispforest.owo.ui.event.FocusGained"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$KeyPress} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Map$$Type} from "java.util.Map"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Collection$$Type} from "java.util.Collection"
import {$UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$MouseUp} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost} from "io.wispforest.owo.ui.event.FocusLost"
import {$MouseDrag} from "io.wispforest.owo.ui.event.MouseDrag"
import {$FocusHandler} from "io.wispforest.owo.ui.util.FocusHandler"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"
import {$MouseLeave} from "io.wispforest.owo.ui.event.MouseLeave"

export class $BaseComponent implements $Component$$Interface, $ComponentExtension$$Interface {
public "configure"<C extends $Component>(closure: $Consumer$$Type<(C)>): C
public "parent"(): $ParentComponent
public "inflate"(space: $Size$$Type): void
public "update"(delta: float, mouseX: integer, mouseY: integer): void
public "x"(): integer
public "id"(id: StringJS): $Component
public "id"(): StringJS
public "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
public "tooltip"(tooltip: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
public "tooltip"(): $List<($ClientTooltipComponent)>
public "y"(): integer
public "width"(): integer
public "height"(): integer
public "allowIndividualOverdraw"(arg0: boolean): $Component
public "allowIndividualOverdraw"(): boolean
public "dismount"(reason: $Component$DismountReason$$Type): void
public "focusHandler"(): $FocusHandler
public "positioning"(): $AnimatableProperty<($Positioning)>
public "positioning"(arg0: $Positioning$$Type): $Component
public "margins"(): $AnimatableProperty<($Insets)>
public "margins"(margins: $Insets$$Type): $BaseComponent
public "horizontalSizing"(): $AnimatableProperty<($Sizing)>
public "horizontalSizing"(horizontalSizing: $Sizing$$Type): $Component
public "verticalSizing"(verticalSizing: $Sizing$$Type): $Component
public "verticalSizing"(): $AnimatableProperty<($Sizing)>
public "mouseDown"(): $EventSource<($MouseDown)>
public "cursorStyle"(style: $CursorStyle$$Type): $BaseComponent
public "cursorStyle"(): $CursorStyle
public "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
public "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseUp"(): $EventSource<($MouseUp)>
public "mouseScroll"(): $EventSource<($MouseScroll)>
public "mouseDrag"(): $EventSource<($MouseDrag)>
public "keyPress"(): $EventSource<($KeyPress)>
public "focusGained"(): $EventSource<($FocusGained)>
public "focusLost"(): $EventSource<($FocusLost)>
public "mouseEnter"(): $EventSource<($MouseEnter)>
public "mouseLeave"(): $EventSource<($MouseLeave)>
public "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
public "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
public "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "onCharTyped"(chr: character, modifiers: integer): boolean
public "onFocusGained"(source: $Component$FocusSource$$Type): void
public "onFocusLost"(): void
public "zIndex"(zIndex: integer): $Component
public "zIndex"(): integer
public "updateX"(x: integer): void
public "updateY"(y: integer): void
public "charTyped"(): $EventSource<($CharTyped)>
public "remove"(): void
public "root"(): $ParentComponent
public "tooltip"(tooltip: $Component$0$$Type): $Component
public "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
public "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
public "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
public "canFocus"(source: $Component$FocusSource$$Type): boolean
public "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(StringJS), ($Element$$Type)>): void
public "sizing"(sizing: $Sizing$$Type): $Component
public "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
public "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "isInBoundingBox"(x: double, y: double): boolean
public "hasParent"(): boolean
public "fullSize"(): $Size
public "baseX"(): integer
public "baseY"(): integer
public "moveTo"(x: integer, y: integer): void
public static "bypassCheck"(component: $Component$$Type, runnable: $Runnable$$Type): void
public "intersects"(other: $PositionedRectangle$$Type): boolean
public "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseComponent$$Type = ($BaseComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseComponent$$Original = $BaseComponent;}
declare module "io.wispforest.owo.ui.util.CursorAdapter" {
import {$CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"

export class $CursorAdapter {
public "applyStyle"(style: $CursorStyle$$Type): void
public static "ofWindow"(windowHandle: long): $CursorAdapter
public static "ofWindow"(window: $Window$$Type): $CursorAdapter
public "dispose"(): void
public static "ofClientWindow"(): $CursorAdapter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorAdapter$$Type = ($CursorAdapter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CursorAdapter$$Original = $CursorAdapter;}
declare module "io.wispforest.owo.ui.event.MouseScroll" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseScroll$$Interface {

(arg0: double, arg1: double, arg2: double): boolean
}

export class $MouseScroll implements $MouseScroll$$Interface {
static "newStream"(): $EventStream<($MouseScroll)>
 "onMouseScroll"(arg0: double, arg1: double, arg2: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseScroll$$Type = ((arg0: double, arg1: double, arg2: double) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseScroll$$Original = $MouseScroll;}
declare module "io.wispforest.owo.ui.core.Easing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Easing$$Interface {

(arg0: float): float
}

export class $Easing implements $Easing$$Interface {
static readonly "EXPO": $Easing
static readonly "QUADRATIC": $Easing
static readonly "QUARTIC": $Easing
static readonly "SINE": $Easing
static readonly "LINEAR": $Easing
static readonly "CUBIC": $Easing

 "apply"(arg0: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$$Type = ((arg0: float) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Easing$$Original = $Easing;}
declare module "io.wispforest.owo.ui.inject.ComponentStub" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$Component$$Type as $Component$0$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$Component, $Component$$Interface} from "io.wispforest.owo.ui.core.Component"
import {$FocusGained} from "io.wispforest.owo.ui.event.FocusGained"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$KeyPress} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Map$$Type} from "java.util.Map"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Collection$$Type} from "java.util.Collection"
import {$UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$MouseUp} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost} from "io.wispforest.owo.ui.event.FocusLost"
import {$MouseDrag} from "io.wispforest.owo.ui.event.MouseDrag"
import {$FocusHandler} from "io.wispforest.owo.ui.util.FocusHandler"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$VanillaWidgetComponent} from "io.wispforest.owo.ui.component.VanillaWidgetComponent"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"
import {$MouseLeave} from "io.wispforest.owo.ui.event.MouseLeave"

export interface $ComponentStub$$Interface extends $Component$$Interface {
}

export class $ComponentStub implements $ComponentStub$$Interface {
 "xOffset"(): integer
 "yOffset"(): integer
 "configure"<C extends $Component>(closure: $Consumer$$Type<(C)>): C
 "parent"(): $ParentComponent
 "inflate"(space: $Size$$Type): void
 "x"(): integer
 "id"(id: StringJS): $Component
 "id"(): StringJS
 "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
 "tooltip"(tooltip: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
 "tooltip"(): $List<($ClientTooltipComponent)>
 "y"(): integer
 "width"(): integer
 "height"(): integer
 "draw"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "dismount"(reason: $Component$DismountReason$$Type): void
 "focusHandler"(): $FocusHandler
 "positioning"(): $AnimatableProperty<($Positioning)>
 "positioning"(positioning: $Positioning$$Type): $Component
 "margins"(margins: $Insets$$Type): $Component
 "margins"(): $AnimatableProperty<($Insets)>
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "horizontalSizing"(horizontalSizing: $Sizing$$Type): $Component
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "verticalSizing"(verticalSizing: $Sizing$$Type): $Component
 "mouseDown"(): $EventSource<($MouseDown)>
 "cursorStyle"(style: $CursorStyle$$Type): $Component
 "cursorStyle"(): $CursorStyle
 "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
 "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
 "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
 "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
 "onCharTyped"(chr: character, modifiers: integer): boolean
 "onFocusGained"(source: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "zIndex"(): integer
 "zIndex"(zIndex: integer): $Component
 "widgetWrapper"(): $VanillaWidgetComponent
 "widthOffset"(): integer
 "heightOffset"(): integer
 "updateX"(x: integer): void
 "updateY"(y: integer): void
 "charTyped"(): $EventSource<($CharTyped)>
 "remove"(): void
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "root"(): $ParentComponent
 "tooltip"(tooltip: $Component$0$$Type): $Component
 "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(StringJS), ($Element$$Type)>): void
 "sizing"(sizing: $Sizing$$Type): $Component
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "hasParent"(): boolean
 "fullSize"(): $Size
 "baseX"(): integer
 "baseY"(): integer
 "moveTo"(x: integer, y: integer): void
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentStub$$Type = ($ComponentStub);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComponentStub$$Original = $ComponentStub;}
declare module "io.wispforest.owo.ui.layers.Layer$Instance$AnchorSide" {
import {$Enum} from "java.lang.Enum"

export class $Layer$Instance$AnchorSide extends $Enum<($Layer$Instance$AnchorSide)> {
static readonly "TOP": $Layer$Instance$AnchorSide
static readonly "LEFT": $Layer$Instance$AnchorSide
static readonly "RIGHT": $Layer$Instance$AnchorSide
static readonly "BOTTOM": $Layer$Instance$AnchorSide

public static "values"(): ($Layer$Instance$AnchorSide)[]
public static "valueOf"(name: StringJS): $Layer$Instance$AnchorSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$Instance$AnchorSide$$Type = (("top") | ("bottom") | ("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Layer$Instance$AnchorSide$$Original = $Layer$Instance$AnchorSide;}
declare module "io.wispforest.owo.ui.core.Size" {
import {$Record} from "java.lang.Record"

export class $Size extends $Record {
/**
 * 
 * @deprecated
 */
constructor(width: integer, height: integer)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(width: integer, height: integer): $Size
public static "zero"(): $Size
public "width"(): integer
public "height"(): integer
public static "square"(sideLength: integer): $Size
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Size$$Type = ({"width"?: integer, "height"?: integer}) | ([width?: integer, height?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Size$$Original = $Size;}
declare module "io.wispforest.owo.ui.core.Component$FocusSource" {
import {$Enum} from "java.lang.Enum"

export class $Component$FocusSource extends $Enum<($Component$FocusSource)> {
static readonly "MOUSE_CLICK": $Component$FocusSource
static readonly "KEYBOARD_CYCLE": $Component$FocusSource

public static "values"(): ($Component$FocusSource)[]
public static "valueOf"(name: StringJS): $Component$FocusSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$FocusSource$$Type = (("mouse_click") | ("keyboard_cycle"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Component$FocusSource$$Original = $Component$FocusSource;}
declare module "io.wispforest.owo.ui.core.OwoUIDrawContext$UtilityScreen" {
import {$Screen$DeferredTooltipRendering} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$CubeMap} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"
import {$PanoramaRenderer} from "net.minecraft.client.renderer.PanoramaRenderer"

export class $OwoUIDrawContext$UtilityScreen extends $Screen {
static readonly "MENU_BACKGROUND": $ResourceLocation
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

public "setLinkSource"(screen: $Screen$$Type): void
public "captureLinkSource"(): void
public static "get"(): $OwoUIDrawContext$UtilityScreen
public "handleComponentClicked"(style: $Style$$Type): boolean
public "getAndClearLinkSource"(): $Screen
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
set "linkSource"(value: $Screen$$Type)
get "andClearLinkSource"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIDrawContext$UtilityScreen$$Type = ($OwoUIDrawContext$UtilityScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoUIDrawContext$UtilityScreen$$Original = $OwoUIDrawContext$UtilityScreen;}
declare module "io.wispforest.owo.ui.event.FocusLost" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $FocusLost$$Interface {

(): void
}

export class $FocusLost implements $FocusLost$$Interface {
static "newStream"(): $EventStream<($FocusLost)>
 "onFocusLost"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusLost$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusLost$$Original = $FocusLost;}
declare module "io.wispforest.owo.ui.event.MouseLeave" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseLeave$$Interface {

(): void
}

export class $MouseLeave implements $MouseLeave$$Interface {
 "onMouseLeave"(): void
static "newStream"(): $EventStream<($MouseLeave)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseLeave$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseLeave$$Original = $MouseLeave;}
declare module "io.wispforest.owo.ui.core.PositionedRectangle" {
import {$Animatable, $Animatable$$Type, $Animatable$$Interface} from "io.wispforest.owo.ui.core.Animatable"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export interface $PositionedRectangle$$Interface extends $Animatable$$Interface<($PositionedRectangle)> {
}

export class $PositionedRectangle implements $PositionedRectangle$$Interface {
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
 "x"(): integer
 "y"(): integer
 "width"(): integer
 "height"(): integer
 "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
 "isInBoundingBox"(x: double, y: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedRectangle$$Type = ($PositionedRectangle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PositionedRectangle$$Original = $PositionedRectangle;}
declare module "io.wispforest.owo.ui.core.ParentComponent" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$Surface, $Surface$$Type} from "io.wispforest.owo.ui.core.Surface"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type as $Component$0$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$FocusGained} from "io.wispforest.owo.ui.event.FocusGained"
import {$Component, $Component$$Type, $Component$$Interface} from "io.wispforest.owo.ui.core.Component"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$HorizontalAlignment, $HorizontalAlignment$$Type} from "io.wispforest.owo.ui.core.HorizontalAlignment"
import {$Class$$Type} from "java.lang.Class"
import {$KeyPress} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$VerticalAlignment, $VerticalAlignment$$Type} from "io.wispforest.owo.ui.core.VerticalAlignment"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown} from "io.wispforest.owo.ui.event.MouseDown"
import {$ArrayList$$Type} from "java.util.ArrayList"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Map$$Type} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$MouseUp} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost} from "io.wispforest.owo.ui.event.FocusLost"
import {$MouseDrag} from "io.wispforest.owo.ui.event.MouseDrag"
import {$FocusHandler} from "io.wispforest.owo.ui.util.FocusHandler"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$MouseLeave} from "io.wispforest.owo.ui.event.MouseLeave"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"

export interface $ParentComponent$$Interface extends $Component$$Interface {
}

export class $ParentComponent implements $ParentComponent$$Interface {
 "childById"<T extends $Component>(expectedClass: $Class$$Type<(T)>, id: StringJS): T
 "horizontalAlignment"(arg0: $HorizontalAlignment$$Type): $ParentComponent
 "horizontalAlignment"(): $HorizontalAlignment
 "allowOverflow"(arg0: boolean): $ParentComponent
 "allowOverflow"(): boolean
 "verticalAlignment"(): $VerticalAlignment
 "verticalAlignment"(arg0: $VerticalAlignment$$Type): $ParentComponent
 "forEachDescendantWhere"(action: $Consumer$$Type<($Component)>, condition: $Predicate$$Type<($Component)>): void
 "childAt"(x: integer, y: integer): $Component
 "collectDescendants"(into: $ArrayList$$Type<($Component$$Type)>): void
 "forEachDescendant"(action: $Consumer$$Type<($Component)>): void
 "onChildMutated"(arg0: $Component$$Type): void
 "children"(): $List<($Component)>
 "removeChild"(arg0: $Component$$Type): $ParentComponent
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "queue"(arg0: $Runnable$$Type): void
 "layout"(arg0: $Size$$Type): void
 "padding"(): $AnimatableProperty<($Insets)>
 "padding"(arg0: $Insets$$Type): $ParentComponent
 "alignment"(horizontalAlignment: $HorizontalAlignment$$Type, verticalAlignment: $VerticalAlignment$$Type): $ParentComponent
 "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
 "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(StringJS), ($Element$$Type)>): void
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "surface"(): $Surface
 "surface"(arg0: $Surface$$Type): $ParentComponent
 "configure"<C extends $Component>(arg0: $Consumer$$Type<(C)>): C
 "remove"(): void
 "parent"(): $ParentComponent
 "inflate"(arg0: $Size$$Type): void
 "x"(): integer
 "id"(arg0: StringJS): $Component
 "id"(): StringJS
 "root"(): $ParentComponent
 "mount"(arg0: $ParentComponent$$Type, arg1: integer, arg2: integer): void
 "tooltip"(): $List<($ClientTooltipComponent)>
 "tooltip"(tooltip: $Component$0$$Type): $Component
 "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
 "tooltip"(arg0: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
 "y"(): integer
 "width"(): integer
 "height"(): integer
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
 "dismount"(arg0: $Component$DismountReason$$Type): void
 "focusHandler"(): $FocusHandler
 "positioning"(): $AnimatableProperty<($Positioning)>
 "positioning"(arg0: $Positioning$$Type): $Component
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(arg0: $Insets$$Type): $Component
 "horizontalSizing"(arg0: $Sizing$$Type): $Component
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "verticalSizing"(arg0: $Sizing$$Type): $Component
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "mouseDown"(): $EventSource<($MouseDown)>
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "cursorStyle"(): $CursorStyle
 "cursorStyle"(arg0: $CursorStyle$$Type): $Component
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
 "onCharTyped"(arg0: character, arg1: integer): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "zIndex"(): integer
 "zIndex"(arg0: integer): $Component
 "sizing"(sizing: $Sizing$$Type): $Component
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
 "updateX"(arg0: integer): void
 "updateY"(arg0: integer): void
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "hasParent"(): boolean
 "fullSize"(): $Size
 "baseX"(): integer
 "baseY"(): integer
 "moveTo"(x: integer, y: integer): void
 "charTyped"(): $EventSource<($CharTyped)>
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParentComponent$$Type = ($ParentComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParentComponent$$Original = $ParentComponent;}
declare module "io.wispforest.owo.ui.event.MouseUp" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseUp$$Interface {

(arg0: double, arg1: double, arg2: integer): boolean
}

export class $MouseUp implements $MouseUp$$Interface {
static "newStream"(): $EventStream<($MouseUp)>
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseUp$$Type = ((arg0: double, arg1: double, arg2: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseUp$$Original = $MouseUp;}
declare module "io.wispforest.owo.ui.inject.GreedyInputComponent" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$Component$$Type as $Component$0$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$Component, $Component$$Interface} from "io.wispforest.owo.ui.core.Component"
import {$FocusGained} from "io.wispforest.owo.ui.event.FocusGained"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$KeyPress} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Map$$Type} from "java.util.Map"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Collection$$Type} from "java.util.Collection"
import {$UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$MouseUp} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost} from "io.wispforest.owo.ui.event.FocusLost"
import {$MouseDrag} from "io.wispforest.owo.ui.event.MouseDrag"
import {$FocusHandler} from "io.wispforest.owo.ui.util.FocusHandler"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"
import {$MouseLeave} from "io.wispforest.owo.ui.event.MouseLeave"

export interface $GreedyInputComponent$$Interface extends $Component$$Interface {
}

export class $GreedyInputComponent implements $GreedyInputComponent$$Interface {
 "configure"<C extends $Component>(arg0: $Consumer$$Type<(C)>): C
 "remove"(): void
 "parent"(): $ParentComponent
 "inflate"(arg0: $Size$$Type): void
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "x"(): integer
 "id"(arg0: StringJS): $Component
 "id"(): StringJS
 "root"(): $ParentComponent
 "mount"(arg0: $ParentComponent$$Type, arg1: integer, arg2: integer): void
 "tooltip"(): $List<($ClientTooltipComponent)>
 "tooltip"(tooltip: $Component$0$$Type): $Component
 "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
 "tooltip"(arg0: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
 "y"(): integer
 "width"(): integer
 "height"(): integer
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
 "dismount"(arg0: $Component$DismountReason$$Type): void
 "focusHandler"(): $FocusHandler
 "positioning"(): $AnimatableProperty<($Positioning)>
 "positioning"(arg0: $Positioning$$Type): $Component
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(arg0: $Insets$$Type): $Component
 "horizontalSizing"(arg0: $Sizing$$Type): $Component
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "verticalSizing"(arg0: $Sizing$$Type): $Component
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "mouseDown"(): $EventSource<($MouseDown)>
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "cursorStyle"(): $CursorStyle
 "cursorStyle"(arg0: $CursorStyle$$Type): $Component
 "onMouseDown"(arg0: double, arg1: double, arg2: integer): boolean
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseScroll"(arg0: double, arg1: double, arg2: double): boolean
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
 "onCharTyped"(arg0: character, arg1: integer): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(StringJS), ($Element$$Type)>): void
 "zIndex"(): integer
 "zIndex"(arg0: integer): $Component
 "sizing"(sizing: $Sizing$$Type): $Component
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
 "updateX"(arg0: integer): void
 "updateY"(arg0: integer): void
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "hasParent"(): boolean
 "fullSize"(): $Size
 "baseX"(): integer
 "baseY"(): integer
 "moveTo"(x: integer, y: integer): void
 "charTyped"(): $EventSource<($CharTyped)>
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GreedyInputComponent$$Type = ($GreedyInputComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GreedyInputComponent$$Original = $GreedyInputComponent;}
declare module "io.wispforest.owo.ui.core.VerticalAlignment" {
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Enum} from "java.lang.Enum"

export class $VerticalAlignment extends $Enum<($VerticalAlignment)> {
static readonly "CENTER": $VerticalAlignment
static readonly "TOP": $VerticalAlignment
static readonly "BOTTOM": $VerticalAlignment

public static "values"(): ($VerticalAlignment)[]
public static "valueOf"(name: StringJS): $VerticalAlignment
public static "parse"(element: $Element$$Type): $VerticalAlignment
public "align"(componentWidth: integer, span: integer): integer
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
declare module "io.wispforest.owo.ui.core.Insets" {
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Animatable, $Animatable$$Type, $Animatable$$Interface} from "io.wispforest.owo.ui.core.Animatable"
import {$Record} from "java.lang.Record"

export class $Insets extends $Record implements $Animatable$$Interface<($Insets)> {
/**
 * 
 * @deprecated
 */
constructor(top: integer, bottom: integer, left: integer, right: integer)

public "withTop"(top: integer): $Insets
public "withRight"(right: integer): $Insets
public "withBottom"(bottom: integer): $Insets
public "withLeft"(left: integer): $Insets
public static "bottom"(bottom: integer): $Insets
public "bottom"(): integer
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "add"(top: integer, bottom: integer, left: integer, right: integer): $Insets
public static "of"(top: integer, bottom: integer, left: integer, right: integer): $Insets
public static "of"(inset: integer): $Insets
public static "parse"(insetsElement: $Element$$Type): $Insets
public static "top"(top: integer): $Insets
public "top"(): integer
public "left"(): integer
public static "left"(left: integer): $Insets
public static "right"(right: integer): $Insets
public "right"(): integer
public "interpolate"(next: $Insets$$Type, delta: float): $Insets
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public static "none"(): $Insets
public "inverted"(): $Insets
public static "both"(horizontal: integer, vertical: integer): $Insets
public static "horizontal"(inset: integer): $Insets
public "horizontal"(): integer
public static "vertical"(inset: integer): $Insets
public "vertical"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Insets$$Type = ({"left"?: integer, "bottom"?: integer, "right"?: integer, "top"?: integer}) | ([left?: integer, bottom?: integer, right?: integer, top?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Insets$$Original = $Insets;}
declare module "io.wispforest.owo.ui.util.FocusHandler" {
import {$ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$Component$FocusSource, $Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"

export class $FocusHandler {
constructor(root: $ParentComponent$$Type)

public "focus"(component: $Component$$Type, source: $Component$FocusSource$$Type): void
public "updateClickFocus"(mouseX: double, mouseY: double): void
public "moveFocus"(keyCode: integer): void
public "lastFocusSource"(): $Component$FocusSource
public "cycle"(forwards: boolean): void
public "focused"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusHandler$$Type = ($FocusHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusHandler$$Original = $FocusHandler;}
declare module "io.wispforest.owo.ui.event.MouseDrag" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseDrag$$Interface {

(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
}

export class $MouseDrag implements $MouseDrag$$Interface {
static "newStream"(): $EventStream<($MouseDrag)>
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseDrag$$Type = ((arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseDrag$$Original = $MouseDrag;}
declare module "io.wispforest.owo.ui.util.MatrixStackTransformer" {
import {$PoseStack} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Quaternionf$$Type} from "org.joml.Quaternionf"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export interface $MatrixStackTransformer$$Interface {
get "matrixStack"(): $PoseStack
}

export class $MatrixStackTransformer implements $MatrixStackTransformer$$Interface {
 "scale"(x: float, y: float, z: float): $MatrixStackTransformer
 "multiply"(quaternion: $Quaternionf$$Type): $MatrixStackTransformer
 "multiply"(quaternion: $Quaternionf$$Type, originX: float, originY: float, originZ: float): $MatrixStackTransformer
 "push"(): $MatrixStackTransformer
 "pop"(): $MatrixStackTransformer
 "translate"(x: double, y: double, z: double): $MatrixStackTransformer
 "translate"(x: float, y: float, z: float): $MatrixStackTransformer
 "getMatrixStack"(): $PoseStack
 "multiplyPositionMatrix"(matrix: $Matrix4f$$Type): $MatrixStackTransformer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatrixStackTransformer$$Type = ($MatrixStackTransformer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatrixStackTransformer$$Original = $MatrixStackTransformer;}
declare module "io.wispforest.owo.ui.event.MouseDown" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseDown$$Interface {

(arg0: double, arg1: double, arg2: integer): boolean
}

export class $MouseDown implements $MouseDown$$Interface {
static "newStream"(): $EventStream<($MouseDown)>
 "onMouseDown"(arg0: double, arg1: double, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseDown$$Type = ((arg0: double, arg1: double, arg2: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseDown$$Original = $MouseDown;}
declare module "io.wispforest.owo.ui.core.AnimatableProperty" {
import {$Animation} from "io.wispforest.owo.ui.core.Animation"
import {$Observable} from "io.wispforest.owo.util.Observable"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Easing$$Type} from "io.wispforest.owo.ui.core.Easing"

export class $AnimatableProperty<A extends $Animatable<(object)>> extends $Observable<(A)> {
public "animate"(duration: integer, easing: $Easing$$Type, to: A): $Animation<(A)>
public "update"(delta: float): void
public static "of"<A extends $Animatable<(object)>>(initial: A): $AnimatableProperty<(A)>
public "animation"(): $Animation<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableProperty$$Type<A> = ($AnimatableProperty<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimatableProperty$$Original<A> = $AnimatableProperty<(A)>;}
declare module "io.wispforest.owo.ui.event.KeyPress" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $KeyPress$$Interface {

(arg0: integer, arg1: integer, arg2: integer): boolean
}

export class $KeyPress implements $KeyPress$$Interface {
static "newStream"(): $EventStream<($KeyPress)>
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPress$$Type = ((arg0: integer, arg1: integer, arg2: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyPress$$Original = $KeyPress;}
declare module "io.wispforest.owo.ui.parsing.UIModel" {
import {$Component} from "io.wispforest.owo.ui.core.Component"
import {$ParentComponent} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Map$$Type} from "java.util.Map"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$OwoUIAdapter} from "io.wispforest.owo.ui.core.OwoUIAdapter"
import {$Function$$Type} from "java.util.function.Function"
import {$Class$$Type} from "java.lang.Class"
import {$Path$$Type} from "java.nio.file.Path"
import {$InputStream$$Type} from "java.io.InputStream"

export class $UIModel {
public "expandTemplate"<T extends $Component>(expectedClass: $Class$$Type<(T)>, name: StringJS, parameters: $Map$$Type<(StringJS), (StringJS)>): T
public "expandTemplate"<T extends $Component>(expectedClass: $Class$$Type<(T)>, name: StringJS, parameterSupplier: $Function$$Type<(StringJS), (StringJS)>, childSupplier: $Function$$Type<(StringJS), ($Element$$Type)>): T
public "createAdapterWithoutScreen"<T extends $ParentComponent>(x: integer, y: integer, width: integer, height: integer, expectedRootComponentClass: $Class$$Type<(T)>): $OwoUIAdapter<(T)>
public "parseComponent"<T extends $Component>(expectedClass: $Class$$Type<(T)>, componentElement: $Element$$Type): T
public static "load"(stream: $InputStream$$Type): $UIModel
public static "load"(path: $Path$$Type): $UIModel
public "createAdapter"<T extends $ParentComponent>(expectedRootComponentClass: $Class$$Type<(T)>, screen: $Screen$$Type): $OwoUIAdapter<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIModel$$Type = ($UIModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UIModel$$Original = $UIModel;}
declare module "io.wispforest.owo.ui.component.VanillaWidgetComponent" {
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$BaseComponent} from "io.wispforest.owo.ui.base.BaseComponent"
import {$Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $VanillaWidgetComponent extends $BaseComponent {
public "notifyParentIfMounted"(): void
public "configure"<C extends $Component>(closure: $Consumer$$Type<(C)>): C
public "inflate"(space: $Size$$Type): void
public "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
public "draw"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "margins"(margins: $Insets$$Type): $BaseComponent
public "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
public "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
public "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
public "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
public "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
public "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "onCharTyped"(chr: character, modifiers: integer): boolean
public "updateX"(x: integer): void
public "updateY"(y: integer): void
public "hovered"(): boolean
public "allowIndividualOverdraw"(arg0: boolean): $Component
public "positioning"(arg0: $Positioning$$Type): $Component
public static "bypassCheck"(component: $Component$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaWidgetComponent$$Type = ($VanillaWidgetComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VanillaWidgetComponent$$Original = $VanillaWidgetComponent;}
declare module "io.wispforest.owo.ui.core.OwoUIDrawContext" {
import {$List$$Type} from "java.util.List"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$OwoUIDrawContext$UtilityScreen} from "io.wispforest.owo.ui.core.OwoUIDrawContext$UtilityScreen"
import {$ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$MultiBufferSource} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$OwoUIDrawContext$TextAnchor$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext$TextAnchor"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$Color$$Type} from "io.wispforest.owo.ui.core.Color"

export class $OwoUIDrawContext extends $GuiGraphics {
/**
 * 
 * @deprecated
 */
static readonly "PANEL_TEXTURE": $ResourceLocation
static readonly "PANEL_NINE_PATCH_TEXTURE": $ResourceLocation
 "minecraft": $Minecraft
static readonly "MIN_GUI_Z": float
static readonly "PANEL_INSET_NINE_PATCH_TEXTURE": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "DARK_PANEL_TEXTURE": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "PANEL_INSET_TEXTURE": $ResourceLocation
static readonly "DARK_PANEL_NINE_PATCH_TEXTURE": $ResourceLocation
static readonly "MAX_GUI_Z": float

public "drawPanel"(x: integer, y: integer, width: integer, height: integer, dark: boolean): void
public "drawGradientRect"(x: integer, y: integer, width: integer, height: integer, topLeftColor: integer, topRightColor: integer, bottomRightColor: integer, bottomLeftColor: integer): void
public "drawLine"(x1: integer, y1: integer, x2: integer, y2: integer, thiccness: double, color: $Color$$Type): void
public "drawText"(text: $Component$$Type, x: float, y: float, scale: float, color: integer): void
public "drawText"(text: $Component$$Type, x: float, y: float, scale: float, color: integer, anchorPoint: $OwoUIDrawContext$TextAnchor$$Type): void
public "recordQuads"(): void
public "submitQuads"(): void
public "drawSpectrum"(x: integer, y: integer, width: integer, height: integer, vertical: boolean): void
public "drawCircle"(centerX: integer, centerY: integer, segments: integer, radius: double, color: $Color$$Type): void
public "drawCircle"(centerX: integer, centerY: integer, angleFrom: double, angleTo: double, segments: integer, radius: double, color: $Color$$Type): void
public "drawRing"(centerX: integer, centerY: integer, segments: integer, innerRadius: double, outerRadius: double, innerColor: $Color$$Type, outerColor: $Color$$Type): void
public "drawRing"(centerX: integer, centerY: integer, angleFrom: double, angleTo: double, segments: integer, innerRadius: double, outerRadius: double, innerColor: $Color$$Type, outerColor: $Color$$Type): void
public "drawInsets"(x: integer, y: integer, width: integer, height: integer, insets: $Insets$$Type, color: integer): void
public "drawInspector"(root: $ParentComponent$$Type, mouseX: double, mouseY: double, onlyHovered: boolean): void
public "recording"(): boolean
public static "of"(context: $GuiGraphics$$Type): $OwoUIDrawContext
public "drawTooltip"(textRenderer: $Font$$Type, x: integer, y: integer, components: $List$$Type<($ClientTooltipComponent$$Type)>): void
public "drawRectOutline"(x: integer, y: integer, width: integer, height: integer, color: integer): void
public static "utilityScreen"(): $OwoUIDrawContext$UtilityScreen
public static "bufferSource"(arg0: $GuiGraphics$$Type): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIDrawContext$$Type = ($OwoUIDrawContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoUIDrawContext$$Original = $OwoUIDrawContext;}
declare module "io.wispforest.owo.ui.core.OwoUIDrawContext$TextAnchor" {
import {$Enum} from "java.lang.Enum"

export class $OwoUIDrawContext$TextAnchor extends $Enum<($OwoUIDrawContext$TextAnchor)> {
static readonly "TOP_LEFT": $OwoUIDrawContext$TextAnchor
static readonly "BOTTOM_RIGHT": $OwoUIDrawContext$TextAnchor
static readonly "TOP_RIGHT": $OwoUIDrawContext$TextAnchor
static readonly "BOTTOM_LEFT": $OwoUIDrawContext$TextAnchor

public static "values"(): ($OwoUIDrawContext$TextAnchor)[]
public static "valueOf"(name: StringJS): $OwoUIDrawContext$TextAnchor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIDrawContext$TextAnchor$$Type = (("top_right") | ("bottom_right") | ("top_left") | ("bottom_left"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoUIDrawContext$TextAnchor$$Original = $OwoUIDrawContext$TextAnchor;}
declare module "io.wispforest.owo.ui.core.Component$DismountReason" {
import {$Enum} from "java.lang.Enum"

export class $Component$DismountReason extends $Enum<($Component$DismountReason)> {
static readonly "LAYOUT_INFLATION": $Component$DismountReason
static readonly "REMOVED": $Component$DismountReason

public static "values"(): ($Component$DismountReason)[]
public static "valueOf"(name: StringJS): $Component$DismountReason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$DismountReason$$Type = (("layout_inflation") | ("removed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Component$DismountReason$$Original = $Component$DismountReason;}
declare module "io.wispforest.owo.ui.layers.Layer$Instance" {
import {$Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$OwoUIAdapter} from "io.wispforest.owo.ui.core.OwoUIAdapter"
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Layer$Instance$AnchorSide$$Type} from "io.wispforest.owo.ui.layers.Layer$Instance$AnchorSide"

export class $Layer$Instance {
readonly "adapter": $OwoUIAdapter<(R)>
 "aggressivePositioning": boolean
readonly "screen": S

public "queryWidget"(locator: $Predicate$$Type<($AbstractWidget)>): $AbstractWidget
public "alignComponentToWidget"(locator: $Predicate$$Type<($AbstractWidget)>, anchor: $Layer$Instance$AnchorSide$$Type, justification: float, component: $Component$$Type): void
public "alignComponentToHandledScreenCoordinates"(component: $Component$$Type, x: integer, y: integer): void
public "resize"(width: integer, height: integer): void
public "dispatchLayoutUpdates"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$Instance$$Type = ($Layer$Instance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Layer$Instance$$Original = $Layer$Instance;}
declare module "io.wispforest.owo.ui.event.MouseEnter" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseEnter$$Interface {

(): void
}

export class $MouseEnter implements $MouseEnter$$Interface {
 "onMouseEnter"(): void
static "newStream"(): $EventStream<($MouseEnter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseEnter$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseEnter$$Original = $MouseEnter;}
declare module "io.wispforest.owo.ui.core.Sizing" {
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Function$$Type} from "java.util.function.Function"
import {$Animatable, $Animatable$$Type, $Animatable$$Interface} from "io.wispforest.owo.ui.core.Animatable"
import {$Sizing$Method} from "io.wispforest.owo.ui.core.Sizing$Method"

export class $Sizing implements $Animatable$$Interface<($Sizing)> {
readonly "method": $Sizing$Method
readonly "value": integer

public "contentFactor"(): float
public static "content"(padding: integer): $Sizing
public static "content"(): $Sizing
public "isContent"(): boolean
public "isExpand"(): boolean
public "equals"(o: any): boolean
public "hashCode"(): integer
public static "expand"(percent: integer): $Sizing
public static "expand"(): $Sizing
public "inflate"(space: integer, contentSizeFunction: $Function$$Type<($Sizing), (integer)>): integer
public static "fill"(percent: integer): $Sizing
public static "fill"(): $Sizing
public static "parse"(sizingElement: $Element$$Type): $Sizing
public static "fixed"(value: integer): $Sizing
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public "interpolate"(next: $Sizing$$Type, delta: float): $Sizing
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sizing$$Type = ($Sizing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Sizing$$Original = $Sizing;}
declare module "io.wispforest.owo.ui.core.OwoUIAdapter" {
import {$CursorAdapter} from "io.wispforest.owo.ui.util.CursorAdapter"
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ParentComponent} from "io.wispforest.owo.ui.core.ParentComponent"
import {$GuiEventListener$$Interface} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$NarratableEntry$$Interface} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"
import {$Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"
import {$NarratableEntry$NarrationPriority} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export class $OwoUIAdapter<R extends $ParentComponent> implements $GuiEventListener$$Interface, $Renderable$$Interface, $NarratableEntry$$Interface {
readonly "cursorAdapter": $CursorAdapter
 "enableInspector": boolean
readonly "rootComponent": R
 "inspectorZOffset": integer
 "globalInspector": boolean

public "toggleInspector"(): boolean
public "toggleGlobalInspector"(): boolean
public "moveAndResize"(x: integer, y: integer, width: integer, height: integer): void
public static "createWithoutScreen"<R extends $ParentComponent>(x: integer, y: integer, width: integer, height: integer, rootComponentMaker: $BiFunction$$Type<($Sizing), ($Sizing), (R)>): $OwoUIAdapter<(R)>
public "dispose"(): void
public "x"(): integer
public static "create"<R extends $ParentComponent>(screen: $Screen$$Type, rootComponentMaker: $BiFunction$$Type<($Sizing), ($Sizing), (R)>): $OwoUIAdapter<(R)>
public "y"(): integer
public "width"(): integer
public "height"(): integer
public "render"(context: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public static "isRendering"(): boolean
public "setFocused"(focused: boolean): void
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, deltaX: double, deltaY: double): boolean
public "mouseScrolled"(mouseX: double, mouseY: double, horizontalAmount: double, verticalAmount: double): boolean
public "charTyped"(chr: character, modifiers: integer): boolean
public "isFocused"(): boolean
public "isMouseOver"(mouseX: double, mouseY: double): boolean
public "updateNarration"(builder: $NarrationElementOutput$$Type): void
public "narrationPriority"(): $NarratableEntry$NarrationPriority
public "inflateAndMount"(): void
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
public "getCurrentFocusPath"(): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "mouseMoved"(arg0: double, arg1: double): void
public "isActive"(): boolean
public "getTabOrderGroup"(): integer
public static get "rendering"(): boolean
set "focused"(value: boolean)
get "focused"(): boolean
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "active"(): boolean
get "tabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIAdapter$$Type<R> = ($OwoUIAdapter<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoUIAdapter$$Original<R> = $OwoUIAdapter<(R)>;}
declare module "io.wispforest.owo.ui.event.FocusGained" {
import {$Component$FocusSource, $Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $FocusGained$$Interface {

(arg0: $Component$FocusSource): void
}

export class $FocusGained implements $FocusGained$$Interface {
static "newStream"(): $EventStream<($FocusGained)>
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusGained$$Type = ((arg0: $Component$FocusSource) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusGained$$Original = $FocusGained;}
declare module "io.wispforest.owo.ui.core.Animatable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Animatable$$Interface<T extends $Animatable<(object)>> {

(arg0: T, arg1: float): T
}

export class $Animatable<T extends $Animatable<(object)>> implements $Animatable$$Interface {
 "interpolate"(arg0: T, arg1: float): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animatable$$Type<T> = ((arg0: T, arg1: float) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Animatable$$Original<T> = $Animatable<(T)>;}
declare module "io.wispforest.owo.ui.core.Positioning" {
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Animatable, $Animatable$$Type, $Animatable$$Interface} from "io.wispforest.owo.ui.core.Animatable"
import {$Positioning$Type} from "io.wispforest.owo.ui.core.Positioning$Type"

export class $Positioning implements $Animatable$$Interface<($Positioning)> {
readonly "x": integer
readonly "y": integer
readonly "type": $Positioning$Type

public "withX"(x: integer): $Positioning
public "withY"(y: integer): $Positioning
public static "across"(xPercent: integer, yPercent: integer): $Positioning
public static "absolute"(xPixels: integer, yPixels: integer): $Positioning
public static "relative"(xPercent: integer, yPercent: integer): $Positioning
public "equals"(o: any): boolean
public "hashCode"(): integer
public static "parse"(positioningElement: $Element$$Type): $Positioning
public "isRelative"(): boolean
public static "layout"(): $Positioning
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public "interpolate"(next: $Positioning$$Type, delta: float): $Positioning
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Positioning$$Type = ($Positioning);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Positioning$$Original = $Positioning;}
declare module "io.wispforest.owo.ui.core.HorizontalAlignment" {
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Enum} from "java.lang.Enum"

export class $HorizontalAlignment extends $Enum<($HorizontalAlignment)> {
static readonly "CENTER": $HorizontalAlignment
static readonly "LEFT": $HorizontalAlignment
static readonly "RIGHT": $HorizontalAlignment

public static "values"(): ($HorizontalAlignment)[]
public static "valueOf"(name: StringJS): $HorizontalAlignment
public static "parse"(element: $Element$$Type): $HorizontalAlignment
public "align"(componentWidth: integer, span: integer): integer
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
declare module "io.wispforest.owo.ui.core.Component" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type, $PositionedRectangle$$Interface} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$Component$$Type as $Component$0$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$FocusGained} from "io.wispforest.owo.ui.event.FocusGained"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$KeyPress} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Map$$Type} from "java.util.Map"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Collection$$Type} from "java.util.Collection"
import {$UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$MouseUp} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost} from "io.wispforest.owo.ui.event.FocusLost"
import {$MouseDrag} from "io.wispforest.owo.ui.event.MouseDrag"
import {$FocusHandler} from "io.wispforest.owo.ui.util.FocusHandler"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"
import {$MouseLeave} from "io.wispforest.owo.ui.event.MouseLeave"

export interface $Component$$Interface extends $PositionedRectangle$$Interface {
}

export class $Component implements $Component$$Interface {
 "configure"<C extends $Component>(arg0: $Consumer$$Type<(C)>): C
 "remove"(): void
 "parent"(): $ParentComponent
 "inflate"(arg0: $Size$$Type): void
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "x"(): integer
 "id"(arg0: StringJS): $Component
 "id"(): StringJS
 "root"(): $ParentComponent
 "mount"(arg0: $ParentComponent$$Type, arg1: integer, arg2: integer): void
 "tooltip"(): $List<($ClientTooltipComponent)>
 "tooltip"(tooltip: $Component$0$$Type): $Component
 "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
 "tooltip"(arg0: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
 "y"(): integer
 "width"(): integer
 "height"(): integer
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
 "dismount"(arg0: $Component$DismountReason$$Type): void
 "focusHandler"(): $FocusHandler
 "positioning"(): $AnimatableProperty<($Positioning)>
 "positioning"(arg0: $Positioning$$Type): $Component
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(arg0: $Insets$$Type): $Component
 "horizontalSizing"(arg0: $Sizing$$Type): $Component
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "verticalSizing"(arg0: $Sizing$$Type): $Component
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "mouseDown"(): $EventSource<($MouseDown)>
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "cursorStyle"(): $CursorStyle
 "cursorStyle"(arg0: $CursorStyle$$Type): $Component
 "onMouseDown"(arg0: double, arg1: double, arg2: integer): boolean
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseScroll"(arg0: double, arg1: double, arg2: double): boolean
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
 "onCharTyped"(arg0: character, arg1: integer): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(StringJS), ($Element$$Type)>): void
 "zIndex"(): integer
 "zIndex"(arg0: integer): $Component
 "sizing"(sizing: $Sizing$$Type): $Component
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
 "updateX"(arg0: integer): void
 "updateY"(arg0: integer): void
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "hasParent"(): boolean
 "fullSize"(): $Size
 "baseX"(): integer
 "baseY"(): integer
 "moveTo"(x: integer, y: integer): void
 "charTyped"(): $EventSource<($CharTyped)>
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$$Type = ($Component);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Component$$Original = $Component;}
declare module "io.wispforest.owo.ui.core.Surface" {
import {$OwoUIDrawContext, $OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"

export interface $Surface$$Interface {

(arg0: $OwoUIDrawContext, arg1: $ParentComponent): void
}

export class $Surface implements $Surface$$Interface {
static readonly "OPTIONS_BACKGROUND": $Surface
static readonly "BLANK": $Surface
static readonly "PANEL": $Surface
static readonly "DARK_PANEL": $Surface
static readonly "TOOLTIP": $Surface
static readonly "PANEL_INSET": $Surface
static readonly "VANILLA_TRANSLUCENT": $Surface

static "panelWithInset"(insetWidth: integer): $Surface
static "vanillaPanorama"(alwaysVisible: boolean): $Surface
static "tiled"(texture: $ResourceLocation$$Type, textureWidth: integer, textureHeight: integer): $Surface
 "and"(surface: $Surface$$Type): $Surface
static "parse"(surfaceElement: $Element$$Type): $Surface
static "outline"(color: integer): $Surface
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: $ParentComponent$$Type): void
static "blur"(quality: float, size: float): $Surface
static "flat"(color: integer): $Surface
static "panorama"(renderer: $PanoramaRenderer$$Type, alwaysVisible: boolean): $Surface
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Surface$$Type = ((arg0: $OwoUIDrawContext, arg1: $ParentComponent) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Surface$$Original = $Surface;}
declare module "io.wispforest.owo.ui.core.CursorStyle" {
import {$Enum} from "java.lang.Enum"

export class $CursorStyle extends $Enum<($CursorStyle)> {
static readonly "VERTICAL_RESIZE": $CursorStyle
static readonly "MOVE": $CursorStyle
readonly "glfw": integer
static readonly "POINTER": $CursorStyle
static readonly "NESW_RESIZE": $CursorStyle
static readonly "CROSSHAIR": $CursorStyle
static readonly "NOT_ALLOWED": $CursorStyle
static readonly "TEXT": $CursorStyle
static readonly "HORIZONTAL_RESIZE": $CursorStyle
static readonly "NONE": $CursorStyle
static readonly "NWSE_RESIZE": $CursorStyle
static readonly "HAND": $CursorStyle

public static "values"(): ($CursorStyle)[]
public static "valueOf"(name: StringJS): $CursorStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorStyle$$Type = (("none") | ("pointer") | ("text") | ("hand") | ("crosshair") | ("move") | ("horizontal_resize") | ("vertical_resize") | ("nwse_resize") | ("nesw_resize") | ("not_allowed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CursorStyle$$Original = $CursorStyle;}
declare module "io.wispforest.owo.ui.core.Animation" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$Animation$Direction} from "io.wispforest.owo.ui.core.Animation$Direction"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Easing$$Type} from "io.wispforest.owo.ui.core.Easing"
import {$Animation$Finished} from "io.wispforest.owo.ui.core.Animation$Finished"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Animation$Composed} from "io.wispforest.owo.ui.core.Animation$Composed"

export class $Animation<A extends $Animatable<(object)>> {
constructor(duration: integer, setter: $Consumer$$Type<(A)>, easing: $Easing$$Type, from: A, to: A)

public "forwards"(): $Animation<(A)>
public "backwards"(): $Animation<(A)>
public "finished"(): $EventSource<($Animation$Finished)>
public "reverse"(): $Animation<(A)>
public "update"(delta: float): void
public "loop"(loop: boolean): $Animation<(A)>
public "direction"(): $Animation$Direction
public static "compose"(...elements: ($Animation$$Type<(never)>)[]): $Animation$Composed
public "looping"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$$Type<A> = ($Animation<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Animation$$Original<A> = $Animation<(A)>;}
declare module "io.wispforest.owo.ui.core.Positioning$Type" {
import {$Enum} from "java.lang.Enum"

export class $Positioning$Type extends $Enum<($Positioning$Type)> {
static readonly "ABSOLUTE": $Positioning$Type
static readonly "RELATIVE": $Positioning$Type
static readonly "LAYOUT": $Positioning$Type
static readonly "ACROSS": $Positioning$Type

public static "values"(): ($Positioning$Type)[]
public static "valueOf"(name: StringJS): $Positioning$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Positioning$Type$$Type = (("relative") | ("across") | ("absolute") | ("layout"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Positioning$Type$$Original = $Positioning$Type;}
declare module "io.wispforest.owo.ui.layers.Layer" {
import {$ParentComponent} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Layer$Instance} from "io.wispforest.owo.ui.layers.Layer$Instance"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $Layer<S extends $Screen, R extends $ParentComponent> {
public "getInstance"(screen: S): $Layer$Instance
public "instantiate"(screen: S): $Layer$Instance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$$Type<S, R> = ($Layer<(S), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Layer$$Original<S, R> = $Layer<(S), (R)>;}
