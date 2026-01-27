declare module "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource" {
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $SelectableResource$$Interface<T> {
get "componentsTag"(): $CompoundTag
get "name"(): $Component
get "empty"(): boolean
get "count"(): long
get "icon"(): $Icon
set "count"(value: integer)
}

export class $SelectableResource<T> implements $SelectableResource$$Interface {
static "fluid"(stack: $FluidStack$$Type): $SelectableResource<($FluidStack)>
 "getComponentsTag"(): $CompoundTag
 "applyComponentsTag"(tag: $CompoundTag$$Type): void
 "resource"(): T
static "item"(stack: $ItemStack$$Type): $SelectableResource<($ItemStack)>
 "getName"(): $Component
 "isEmpty"(): boolean
 "getCount"(): long
 "getIcon"(): $Icon
 "setCount"(arg0: integer): void
 "copyWithCount"(arg0: long): $SelectableResource<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableResource$$Type<T> = ($SelectableResource<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SelectableResource$$Original<T> = $SelectableResource<(T)>;}
declare module "dev.ftb.mods.ftblibrary.config.ItemStackConfig" {
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$OptionalLong} from "java.util.OptionalLong"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $ItemStackConfig extends $ResourceConfigValue<($ItemStack)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(single: boolean, empty: boolean)
constructor(fixedSize: long)

public "fixedResourceSize"(): $OptionalLong
public "setResource"(selectable: $SelectableResource$$Type<($ItemStack$$Type)>): boolean
public "allowEmptyResource"(): boolean
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: $ItemStack$$Type): $Component
public "getValue"(): any
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ItemStack)>
public "copy"(value: $ItemStack$$Type): $ItemStack
public "copy"(arg0: any): any
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
set "resource"(value: $SelectableResource$$Type<($ItemStack$$Type)>)
get "value"(): any
get "empty"(): boolean
get "resource"(): $SelectableResource<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackConfig$$Type = ($ItemStackConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackConfig$$Original = $ItemStackConfig;}
declare module "dev.ftb.mods.ftblibrary.icon.Drawable" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $Drawable$$Interface {

(arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}

export class $Drawable implements $Drawable$$Interface {
 "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
 "draw3D"(graphics: $GuiGraphics$$Type): void
 "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Drawable$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: integer, arg4: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Drawable$$Original = $Drawable;}
declare module "dev.ftb.mods.ftblibrary.config.DoubleConfig" {
import {$NumberConfig} from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Optional} from "java.util.Optional"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $DoubleConfig extends $NumberConfig<(double)> {
readonly "min": T
readonly "max": T
static readonly "COLOR": $Color4I
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(mn: double, mx: double)

public "addInfo"(list: $TooltipList$$Type): void
public "getStringFromValue"(v: double): StringJS
public "getStringFromValue"(arg0: any): StringJS
public "scrollValue"(arg0: any, arg1: boolean): $Optional
public "scrollValue"(currentValue: double, forward: boolean): $Optional<(double)>
public "parse"(callback: $Consumer$$Type<(double)>, string: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleConfig$$Type = ($DoubleConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleConfig$$Original = $DoubleConfig;}
declare module "dev.ftb.mods.ftblibrary.icon.ImageIcon" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$IResourceIcon$$Interface} from "dev.ftb.mods.ftblibrary.icon.IResourceIcon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Codec} from "com.mojang.serialization.Codec"
import {$PixelBuffer} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"

export class $ImageIcon extends $Icon implements $IResourceIcon$$Interface {
 "minU": float
 "maxV": float
 "maxU": float
static readonly "CODEC": $Codec<($Icon)>
 "color": $Color4I
readonly "texture": $ResourceLocation
static readonly "MISSING_IMAGE": $ResourceLocation
 "minV": float
 "tileSize": double
static readonly "STRING_CODEC": $Codec<($Icon)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>

constructor(tex: $ResourceLocation$$Type)

public "withTint"(c: $Color4I$$Type): $ImageIcon
public "withUV"(u0: float, v0: float, u1: float, v1: float): $ImageIcon
public "hasPixelBuffer"(): boolean
public "createPixelBuffer"(): $PixelBuffer
public "aspectRatio"(): double
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "copy"(): $Icon
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "bindTexture"(): void
public "getResourceLocation"(): $ResourceLocation
public "withColor"(arg0: $Color4I$$Type): $Icon
get "resourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageIcon$$Type = ($ImageIcon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImageIcon$$Original = $ImageIcon;}
declare module "dev.ftb.mods.ftblibrary.ui.Widget" {
import {$WidgetType} from "dev.ftb.mods.ftblibrary.ui.WidgetType"
import {$Key$$Type} from "dev.ftb.mods.ftblibrary.ui.input.Key"
import {$Optional} from "java.util.Optional"
import {$KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$PositionedIngredient} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IScreenWrapper$$Interface} from "dev.ftb.mods.ftblibrary.ui.IScreenWrapper"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Window} from "com.mojang.blaze3d.platform.Window"
import {$CursorType} from "dev.ftb.mods.ftblibrary.ui.CursorType"
import {$BaseScreen} from "dev.ftb.mods.ftblibrary.ui.BaseScreen"
import {$Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$Widget$DrawLayer, $Widget$DrawLayer$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget$DrawLayer"

export class $Widget implements $IScreenWrapper$$Interface, $Comparable$$Interface<($Widget)> {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(p: $Panel$$Type)

public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "shouldDraw"(): boolean
public "setPosAndSize"(x: integer, y: integer, w: integer, h: integer): $Widget
public "getPosX"(): integer
public "getPosY"(): integer
public "onClosed"(): void
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "shouldAddMouseOverText"(): boolean
public "addMouseOverText"(list: $TooltipList$$Type): void
public static "getClipboardString"(): StringJS
public static "setClipboardString"(string: StringJS): void
public static "isCtrlKeyDown"(): boolean
public "collidesWith"(x: integer, y: integer, w: integer, h: integer): boolean
public "getWidgetType"(): $WidgetType
public "getDrawLayer"(): $Widget$DrawLayer
public "setDrawLayer"(drawLayer: $Widget$DrawLayer$$Type): void
public "isGhostIngredientTarget"(ingredient: any): boolean
public "acceptGhostIngredient"(ingredient: any): void
public "playClickSound"(): void
public "setX"(v: integer): void
public "handleClick"(scheme: StringJS, path: StringJS): boolean
public "handleClick"(click: StringJS): boolean
public "mousePressed"(button: $MouseButton$$Type): boolean
public static "isMouseButtonDown"(button: $MouseButton$$Type): boolean
public "getGui"(): $BaseScreen
public "getWidth"(): integer
public "getHeight"(): integer
public "setSize"(w: integer, h: integer): void
public "tick"(): void
public "getY"(): integer
public "toString"(): StringJS
public "compareTo"(widget: $Widget$$Type): integer
public "compareTo"(arg0: any): integer
public "isEnabled"(): boolean
public "getParent"(): $Panel
public "getTitle"(): $Component
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getCursor"(): $CursorType
public "getX"(): integer
public "getWindow"(): $Window
/**
 * 
 * @deprecated
 */
public "getScreen"(): $Window
public "getMouseX"(): integer
public "getMouseY"(): integer
public "keyPressed"(key: $Key$$Type): boolean
public "setWidth"(v: integer): void
public "setHeight"(v: integer): void
public static "isKeyDown"(key: integer): boolean
public "getPartialTicks"(): float
public "setPos"(x: integer, y: integer): void
public static "isShiftKeyDown"(): boolean
public "isMouseOver"(): boolean
public "setY"(v: integer): void
public "mouseReleased"(button: $MouseButton$$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "keyReleased"(key: $Key$$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "openGui"(): void
public "closeGui"(openPrevScreen: boolean): void
public "closeGui"(): void
public "closeContextMenu"(): void
public "openGuiLater"(): void
public "openAfter"(runnable: $Runnable$$Type): $Runnable
public "run"(): void
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
public static get "clipboardString"(): StringJS
public static set "clipboardString"(value: StringJS)
public static get "ctrlKeyDown"(): boolean
get "widgetType"(): $WidgetType
get "drawLayer"(): $Widget$DrawLayer
set "drawLayer"(value: $Widget$DrawLayer$$Type)
set "x"(value: integer)
get "gui"(): $BaseScreen
get "y"(): integer
get "enabled"(): boolean
get "parent"(): $Panel
get "title"(): $Component
get "cursor"(): $CursorType
get "x"(): integer
get "window"(): $Window
get "screen"(): $Window
get "mouseX"(): integer
get "mouseY"(): integer
get "partialTicks"(): float
public static get "shiftKeyDown"(): boolean
get "mouseOver"(): boolean
set "y"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$$Type = ($Widget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Widget$$Original = $Widget;}
declare module "dev.ftb.mods.ftblibrary.ui.Button" {
import {$Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Optional} from "java.util.Optional"
import {$PositionedIngredient} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$CursorType} from "dev.ftb.mods.ftblibrary.ui.CursorType"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $Button extends $Widget {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type, t: $Component$$Type, i: $Icon$$Type)
constructor(panel: $Panel$$Type)

public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "setForceButtonSize"(forceButtonSize: boolean): $Button
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "getTitle"(): $Component
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getCursor"(): $CursorType
public "setIcon"(i: $Icon$$Type): $Button
public "setTitle"(s: $Component$$Type): $Button
public "drawIcon"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "onClicked"(arg0: $MouseButton$$Type): void
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
set "forceButtonSize"(value: boolean)
get "title"(): $Component
get "cursor"(): $CursorType
set "icon"(value: $Icon$$Type)
set "title"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$$Type = ($Button);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Button$$Original = $Button;}
declare module "dev.ftb.mods.ftblibrary.snbt.config.IntValue" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$NumberValue} from "dev.ftb.mods.ftblibrary.snbt.config.NumberValue"
import {$SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $IntValue extends $NumberValue<(integer)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS

public "createClientConfig"(group: $ConfigGroup$$Type): void
public "set"(arg0: any): void
public "set"(v: integer): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "range"(max: integer): $NumberValue<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntValue$$Type = ($IntValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntValue$$Original = $IntValue;}
declare module "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$StringValue} from "dev.ftb.mods.ftblibrary.snbt.config.StringValue"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$BooleanValue} from "dev.ftb.mods.ftblibrary.snbt.config.BooleanValue"
import {$List, $List$$Type} from "java.util.List"
import {$SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$LongValue} from "dev.ftb.mods.ftblibrary.snbt.config.LongValue"
import {$IntValue} from "dev.ftb.mods.ftblibrary.snbt.config.IntValue"
import {$IntArrayValue} from "dev.ftb.mods.ftblibrary.snbt.config.IntArrayValue"
import {$StringListValue} from "dev.ftb.mods.ftblibrary.snbt.config.StringListValue"
import {$NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"
import {$EnumValue} from "dev.ftb.mods.ftblibrary.snbt.config.EnumValue"
import {$BaseValue, $BaseValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$DoubleValue} from "dev.ftb.mods.ftblibrary.snbt.config.DoubleValue"
import {$Path$$Type} from "java.nio.file.Path"

export class $SNBTConfig extends $BaseValue<($List<($BaseValue<(never)>)>)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS

public "addDouble"(key: StringJS, def: double, min: double, max: double): $DoubleValue
public "addDouble"(key: StringJS, def: double): $DoubleValue
public "addString"(key: StringJS, def: StringJS): $StringValue
public "addGroup"(key: StringJS): $SNBTConfig
public "addGroup"(key: StringJS, displayOrder: integer): $SNBTConfig
public "addBoolean"(key: StringJS, def: boolean): $BooleanValue
public "addInt"(key: StringJS, def: integer): $IntValue
public "addInt"(key: StringJS, def: integer, min: integer, max: integer): $IntValue
public "addEnum"<T>(key: StringJS, nameMap: $NameMap$$Type<(T)>, def: T): $EnumValue<(T)>
public "addEnum"<T>(key: StringJS, nameMap: $NameMap$$Type<(T)>): $EnumValue<(T)>
public "createClientConfig"(group: $ConfigGroup$$Type): void
public "addLong"(key: StringJS, def: long): $LongValue
public "addLong"(key: StringJS, def: long, min: long, max: long): $LongValue
public "addStringList"(key: StringJS, def: $List$$Type<(StringJS)>): $StringListValue
public "addIntArray"(key: StringJS, def: (integer)[]): $IntArrayValue
public "load"(path: $Path$$Type): void
public "load"(path: $Path$$Type, defaultPath: $Path$$Type, comment: $Supplier$$Type<((StringJS)[])>): void
public "add"<T extends $BaseValue<(object)>>(value: T): T
public "write"(tag: $SNBTCompoundTag$$Type): void
public "write"(buf: $FriendlyByteBuf$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "read"(buf: $FriendlyByteBuf$$Type): void
public "save"(path: $Path$$Type): void
public static "create"(name: StringJS): $SNBTConfig
public "saveNow"(path: $Path$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SNBTConfig$$Type = ($SNBTConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SNBTConfig$$Original = $SNBTConfig;}
declare module "dev.ftb.mods.ftblibrary.util.TooltipList" {
import {$List} from "java.util.List"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $TooltipList {
 "backgroundColor": integer
 "yOffset": integer
 "xOffset": integer
 "borderColorStart": integer
 "borderColorEnd": integer
 "maxWidth": integer

constructor()

public "styledString"(text: StringJS, color: $ChatFormatting$$Type): void
public "styledString"(text: StringJS, style: $Style$$Type): void
public "styledTranslate"(key: StringJS, style: $Style$$Type, ...objects: (any)[]): void
public "blankLine"(): void
public "reset"(): void
public "add"(component: $Component$$Type): void
public "string"(text: StringJS): void
public "getLines"(): $List<($Component)>
public "translate"(key: StringJS, ...objects: (any)[]): void
public "shouldRender"(): boolean
get "lines"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipList$$Type = ($TooltipList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipList$$Original = $TooltipList;}
declare module "dev.ftb.mods.ftblibrary.ui.WidgetType" {
import {$Enum} from "java.lang.Enum"

export class $WidgetType extends $Enum<($WidgetType)> {
static readonly "DISABLED": $WidgetType
static readonly "MOUSE_OVER": $WidgetType
static readonly "NORMAL": $WidgetType

public static "mouseOver"(mouseOver: boolean): $WidgetType
public static "values"(): ($WidgetType)[]
public static "valueOf"(name: StringJS): $WidgetType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetType$$Type = (("normal") | ("mouse_over") | ("disabled"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetType$$Original = $WidgetType;}
declare module "dev.ftb.mods.ftblibrary.ui.WidgetLayout" {
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$WidgetLayout$Padding} from "dev.ftb.mods.ftblibrary.ui.WidgetLayout$Padding"

export interface $WidgetLayout$$Interface {

(arg0: $Panel): integer
get "layoutPadding"(): $WidgetLayout$Padding
}

export class $WidgetLayout implements $WidgetLayout$$Interface {
static readonly "VERTICAL": $WidgetLayout
static readonly "NO_PADDING": $WidgetLayout$Padding
static readonly "HORIZONTAL": $WidgetLayout
static readonly "NONE": $WidgetLayout

 "getLayoutPadding"(): $WidgetLayout$Padding
 "align"(arg0: $Panel$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetLayout$$Type = ((arg0: $Panel) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetLayout$$Original = $WidgetLayout;}
declare module "dev.ftb.mods.ftblibrary.snbt.config.StringListValue" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$List, $List$$Type} from "java.util.List"
import {$SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $StringListValue extends $BaseValue<($List<(StringJS)>)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS

public "createClientConfig"(group: $ConfigGroup$$Type): void
public "set"(arg0: any): void
public "set"(v: $List$$Type<(StringJS)>): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringListValue$$Type = ($StringListValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringListValue$$Original = $StringListValue;}
declare module "dev.ftb.mods.ftblibrary.ui.Panel" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Key$$Type} from "dev.ftb.mods.ftblibrary.ui.input.Key"
import {$Optional} from "java.util.Optional"
import {$KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$List} from "java.util.List"
import {$PositionedIngredient} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$CursorType} from "dev.ftb.mods.ftblibrary.ui.CursorType"
import {$Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$WidgetLayout$$Type} from "dev.ftb.mods.ftblibrary.ui.WidgetLayout"

export class $Panel extends $Widget {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type)

public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "setScrollStep"(s: double): void
public "refreshWidgets"(): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "alignWidgets"(): void
public "setOnlyRenderWidgetsInside"(value: boolean): void
public "setOnlyInteractWithWidgetsInside"(value: boolean): void
public "getScrollX"(): double
public "setScrollX"(scroll: double): void
public "getScrollY"(): double
public "setScrollY"(scroll: double): void
public "onClosed"(): void
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "getOnlyRenderWidgetsInside"(): boolean
public "getOnlyInteractWithWidgetsInside"(): boolean
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "addMouseOverText"(list: $TooltipList$$Type): void
public "isOffset"(): boolean
public "getContentWidth"(): integer
public "drawOffsetBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawWidget"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, widget: $Widget$$Type, x: integer, y: integer, w: integer, h: integer): void
public "scrollPanel"(scroll: double): boolean
public "isDefaultScrollVertical"(): boolean
public "movePanelScroll"(dx: double, dy: double): boolean
public "isMouseOverAnyWidget"(): boolean
public "getContentHeight"(): integer
public "addWidgets"(): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "getScrollStep"(): double
public "tick"(): void
public "getY"(): integer
public "add"(widget: $Widget$$Type): void
public "addAll"(list: $Iterable$$Type<($Widget$$Type)>): void
public "setOffset"(flag: boolean): void
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "align"(layout: $WidgetLayout$$Type): integer
public "getCursor"(): $CursorType
public "getX"(): integer
public "getWidgets"(): $List<($Widget)>
public "keyPressed"(key: $Key$$Type): boolean
public "clearWidgets"(): void
public "mouseReleased"(button: $MouseButton$$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "keyReleased"(key: $Key$$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "getWidget"(index: integer): $Widget
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
set "scrollStep"(value: double)
set "onlyRenderWidgetsInside"(value: boolean)
set "onlyInteractWithWidgetsInside"(value: boolean)
get "scrollX"(): double
set "scrollX"(value: double)
get "scrollY"(): double
set "scrollY"(value: double)
get "onlyRenderWidgetsInside"(): boolean
get "onlyInteractWithWidgetsInside"(): boolean
get "offset"(): boolean
get "contentWidth"(): integer
get "defaultScrollVertical"(): boolean
get "mouseOverAnyWidget"(): boolean
get "contentHeight"(): integer
get "scrollStep"(): double
get "y"(): integer
set "offset"(value: boolean)
get "cursor"(): $CursorType
get "x"(): integer
get "widgets"(): $List<($Widget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Panel$$Type = ($Panel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Panel$$Original = $Panel;}
declare module "dev.ftb.mods.ftblibrary.config.EntityFaceConfig" {
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$OptionalLong} from "java.util.OptionalLong"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityFaceConfig extends $ResourceConfigValue<($EntityType<(never)>)> {
 "id": StringJS
static readonly "NONE": $EntityType<(never)>
static readonly "NULL_TEXT": $Component

constructor()

public "fixedResourceSize"(): $OptionalLong
public "setResource"(selectable: $SelectableResource$$Type<($EntityType$$Type<(never)>)>): boolean
public "addInfo"(list: $TooltipList$$Type): void
public "getStringForGUI"(v: $EntityType$$Type<(never)>): $Component
public "getStringForGUI"(arg0: any): $Component
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($EntityType<(never)>)>
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
set "resource"(value: $SelectableResource$$Type<($EntityType$$Type<(never)>)>)
get "empty"(): boolean
get "resource"(): $SelectableResource<($EntityType<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFaceConfig$$Type = ($EntityFaceConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityFaceConfig$$Original = $EntityFaceConfig;}
declare module "dev.ftb.mods.ftblibrary.ui.DropDownMenu" {
import {$Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import {$List$$Type} from "java.util.List"
import {$PopupMenu$$Interface} from "dev.ftb.mods.ftblibrary.ui.PopupMenu"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$ModalPanel} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"

export class $DropDownMenu extends $ModalPanel implements $PopupMenu$$Interface {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type, i: $List$$Type<($ContextMenuItem$$Type)>)

public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "alignWidgets"(): void
public "getModalPanel"(): $ModalPanel
public "scrollPanel"(scroll: double): boolean
public "setMaxHeightPercent"(maxHeightPercent: float): void
public "addWidgets"(): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
get "modalPanel"(): $ModalPanel
set "maxHeightPercent"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropDownMenu$$Type = ($DropDownMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DropDownMenu$$Original = $DropDownMenu;}
declare module "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TagType} from "net.minecraft.nbt.TagType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List} from "java.util.List"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Class$$Type} from "java.lang.Class"
import {$ListTag} from "net.minecraft.nbt.ListTag"

export class $SNBTCompoundTag extends $CompoundTag {
static readonly "CODEC": $Codec<($CompoundTag)>
static readonly "TYPE": $TagType<($CompoundTag)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($SNBTCompoundTag)>
readonly "tags": $Map<(StringJS), ($Tag)>

constructor()

public "singleLine"(): void
public "singleLine"(key: StringJS): void
public "putNumber"(key: StringJS, number: number): void
public "getNullableList"(key: StringJS, type: byte): $ListTag
public "putNull"(key: StringJS): void
public "putBoolean"(key: StringJS, value: boolean): void
public static "of"(tag: $Tag$$Type): $SNBTCompoundTag
public "merge"(other: $CompoundTag$$Type, overwrite: boolean): $CompoundTag
public "comment"(key: StringJS, comment: StringJS): void
public "comment"(key: StringJS, ...comment: (StringJS)[]): void
public "copy"(): $Tag
public "getComment"(key: StringJS): StringJS
public "getList"<T extends $Tag>(key: StringJS, type: $Class$$Type<(T)>): $List<(T)>
public "isBoolean"(key: StringJS): boolean
public "getCompound"(string: StringJS): $SNBTCompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SNBTCompoundTag$$Type = ($SNBTCompoundTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SNBTCompoundTag$$Original = $SNBTCompoundTag;}
declare module "dev.ftb.mods.ftblibrary.ui.ContextMenu" {
import {$Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import {$List$$Type} from "java.util.List"
import {$PopupMenu$$Interface} from "dev.ftb.mods.ftblibrary.ui.PopupMenu"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$ModalPanel} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"

export class $ContextMenu extends $ModalPanel implements $PopupMenu$$Interface {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type, i: $List$$Type<($ContextMenuItem$$Type)>)

public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "alignWidgets"(): void
public "getModalPanel"(): $ModalPanel
public "hasIcons"(): boolean
public "setDrawVerticalSeparators"(drawVerticalSeparators: boolean): void
public "addWidgets"(): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "setMaxRows"(maxRows: integer): void
get "modalPanel"(): $ModalPanel
set "drawVerticalSeparators"(value: boolean)
set "maxRows"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextMenu$$Type = ($ContextMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextMenu$$Original = $ContextMenu;}
declare module "dev.ftb.mods.ftblibrary.config.ListConfig" {
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$List, $List$$Type} from "java.util.List"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ListConfig<E, CV extends $ConfigValue<(object)>> extends $ConfigValue<($List<(E)>)> {
static readonly "COLOR": $Color4I
static readonly "EMPTY_LIST": $Component
static readonly "NON_EMPTY_LIST": $Component
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(t: CV)

public "addInfo"(l: $TooltipList$$Type): void
public "getStringForGUI"(v: $List$$Type<(E)>): $Component
public "getStringForGUI"(arg0: any): $Component
public "getType"(): CV
public "copy"(v: $List$$Type<(E)>): $List<(E)>
public "copy"(arg0: any): any
public "getColor"(arg0: any): $Color4I
public "getColor"(v: $List$$Type<(E)>): $Color4I
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
get "type"(): CV
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListConfig$$Type<E, CV> = ($ListConfig<(E), (CV)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListConfig$$Original<E, CV> = $ListConfig<(E), (CV)>;}
declare module "dev.ftb.mods.ftblibrary.math.PixelBuffer" {
import {$BufferedImage, $BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer} from "java.nio.ByteBuffer"

export class $PixelBuffer {
constructor(w: integer, h: integer)

public "toImage"(type: integer): $BufferedImage
public "toByteBuffer"(alpha: boolean): $ByteBuffer
public "getWidth"(): integer
public "getHeight"(): integer
public "getRGB"(startX: integer, startY: integer, w: integer, h: integer, p: (integer)[]): (integer)[]
public "getRGB"(x: integer, y: integer): integer
public "getPixels"(): (integer)[]
public "setPixels"(p: (integer)[]): void
public "setRGB"(startX: integer, startY: integer, buffer: $PixelBuffer$$Type): void
public "setRGB"(startX: integer, startY: integer, w: integer, h: integer, rgbArray: (integer)[]): void
public "setRGB"(x: integer, y: integer, col: integer): void
public "getSubimage"(x: integer, y: integer, w: integer, h: integer): $PixelBuffer
public "equals"(o: any): boolean
public "hashCode"(): integer
public "fill"(startX: integer, startY: integer, w: integer, h: integer, col: integer): void
public "fill"(col: integer): void
public static "from"(stream: $InputStream$$Type): $PixelBuffer
public static "from"(img: $BufferedImage$$Type): $PixelBuffer
public "copy"(): $PixelBuffer
get "width"(): integer
get "height"(): integer
get "pixels"(): (integer)[]
set "pixels"(value: (integer)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PixelBuffer$$Type = ($PixelBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PixelBuffer$$Original = $PixelBuffer;}
declare module "dev.ftb.mods.ftblibrary.snbt.config.BaseValue" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $BaseValue<T> implements $Comparable$$Interface<($BaseValue<(T)>)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS

public "createClientConfig"(group: $ConfigGroup$$Type): void
public "withDisplayOrder"(order: integer): $BaseValue<(T)>
public "excluded"<E extends $BaseValue<(object)>>(): E
public "get"(): T
public "toString"(): StringJS
public "compareTo"(o: $BaseValue$$Type<(T)>): integer
public "compareTo"(arg0: any): integer
public "getKey"(): StringJS
public "enabled"<E extends $BaseValue<(object)>>(e: $BooleanSupplier$$Type): E
public "set"(v: T): void
public "write"(arg0: $SNBTCompoundTag$$Type): void
public "read"(arg0: $SNBTCompoundTag$$Type): void
public "comment"<E extends $BaseValue<(object)>>(...s: (StringJS)[]): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseValue$$Type<T> = ($BaseValue<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseValue$$Original<T> = $BaseValue<(T)>;}
declare module "dev.ftb.mods.ftblibrary.ui.input.MouseButton" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MouseButton {
static readonly "LEFT": $MouseButton
static readonly "NEXT": $MouseButton
static readonly "RIGHT": $MouseButton
static readonly "BACK": $MouseButton
readonly "id": integer
static readonly "MIDDLE": $MouseButton

public "isMiddle"(): boolean
public "isRight"(): boolean
public static "get"(i: integer): $MouseButton
public "hashCode"(): integer
public "getId"(): integer
public "isLeft"(): boolean
get "middle"(): boolean
get "right"(): boolean
get "left"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseButton$$Type = ($MouseButton);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseButton$$Original = $MouseButton;}
declare module "dev.ftb.mods.ftblibrary.config.ConfigWithVariants" {
import {$ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ConfigValue} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigWithVariants<T> extends $ConfigValue<(T)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "getIteration"(arg0: T, arg1: boolean): T
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigWithVariants$$Type<T> = ($ConfigWithVariants<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigWithVariants$$Original<T> = $ConfigWithVariants<(T)>;}
declare module "dev.ftb.mods.ftblibrary.config.ConfigValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ConfigValue<T> implements $Comparable$$Interface<($ConfigValue<(T)>)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "setOrder"(o: integer): $ConfigValue<(T)>
public "setDefaultValue"(defaultValue: T): void
public "setCanEdit"(e: boolean): $ConfigValue<(T)>
public "setCurrentValue"(v: T): boolean
public "addInfo"(list: $TooltipList$$Type): void
public "getStringForGUI"(v: T): $Component
public "getStringForGUI"(): $Component
public "setNameKey"(key: StringJS): $ConfigValue<(T)>
public "getCanEdit"(): boolean
public "isEqual"(v1: T, v2: T): boolean
public "getName"(): StringJS
public "compareTo"(o: $ConfigValue$$Type<(T)>): integer
public "compareTo"(arg0: any): integer
public "getValue"(): T
public static "info"(key: StringJS, value: any): $Component
public "init"(group: $ConfigGroup$$Type, id: StringJS, value: T, setter: $Consumer$$Type<(T)>, defaultValue: T): $ConfigValue<(T)>
public "setValue"(value: T): void
public "copy"(value: T): T
public "getDefaultValue"(): T
public "getPath"(): StringJS
public "getIcon"(): $Icon
public "getIcon"(v: T): $Icon
public "getNameKey"(): StringJS
public "getGroup"(): $ConfigGroup
public "setIcon"(i: $Icon$$Type): $ConfigValue<(T)>
public "getColor"(): $Color4I
public "getColor"(v: T): $Color4I
public "getTooltip"(): StringJS
public "applyValue"(): void
public "onClicked"(arg0: $Widget$$Type, arg1: $MouseButton$$Type, arg2: $ConfigCallback$$Type): void
set "order"(value: integer)
set "defaultValue"(value: T)
set "canEdit"(value: boolean)
set "currentValue"(value: T)
get "stringForGUI"(): $Component
set "nameKey"(value: StringJS)
get "canEdit"(): boolean
get "name"(): StringJS
get "value"(): T
set "value"(value: T)
get "defaultValue"(): T
get "path"(): StringJS
get "icon"(): $Icon
get "nameKey"(): StringJS
get "group"(): $ConfigGroup
set "icon"(value: $Icon$$Type)
get "color"(): $Color4I
get "tooltip"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigValue$$Type<T> = ($ConfigValue<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigValue$$Original<T> = $ConfigValue<(T)>;}
declare module "dev.ftb.mods.ftblibrary.snbt.config.NumberValue" {
import {$SNBTConfig} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $NumberValue<T extends number> extends $BaseValue<(T)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS

public "fader"<E extends $BaseValue<(object)>>(): E
public "write"(tag: $SNBTCompoundTag$$Type): void
public "range"<E extends $BaseValue<(object)>>(min: T, max: T): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberValue$$Type<T> = ($NumberValue<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NumberValue$$Original<T> = $NumberValue<(T)>;}
declare module "dev.ftb.mods.ftblibrary.config.NumberConfig" {
import {$ConfigFromString} from "dev.ftb.mods.ftblibrary.config.ConfigFromString"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Component} from "net.minecraft.network.chat.Component"

export class $NumberConfig<T extends number> extends $ConfigFromString<(T)> {
readonly "min": T
readonly "max": T
static readonly "COLOR": $Color4I
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(mn: T, mx: T)

public "canScroll"(): boolean
public "withScrollIncrement"(increment: T): $NumberConfig<(T)>
public "fader"(v: boolean): $NumberConfig<(T)>
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: T): $Component
public "getColor"(v: T): $Color4I
public "getColor"(arg0: any): $Color4I
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberConfig$$Type<T> = ($NumberConfig<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NumberConfig$$Original<T> = $NumberConfig<(T)>;}
declare module "dev.ftb.mods.ftblibrary.config.EnumConfig" {
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ConfigWithVariants} from "dev.ftb.mods.ftblibrary.config.ConfigWithVariants"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component} from "net.minecraft.network.chat.Component"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $EnumConfig<E> extends $ConfigWithVariants<(E)> {
readonly "nameMap": $NameMap<(E)>
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(nm: $NameMap$$Type<(E)>)

public "getIteration"(currentValue: E, next: boolean): E
public "addInfo"(list: $TooltipList$$Type): void
public "getStringForGUI"(v: E): $Component
public "getIcon"(v: E): $Icon
public "getColor"(v: E): $Color4I
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumConfig$$Type<E> = ($EnumConfig<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumConfig$$Original<E> = $EnumConfig<(E)>;}
declare module "dev.ftb.mods.ftblibrary.ui.ModalPanel" {
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"

export class $ModalPanel extends $Panel {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type)

public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "getExtraZlevel"(): integer
public "setExtraZlevel"(extraZlevel: integer): void
get "extraZlevel"(): integer
set "extraZlevel"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModalPanel$$Type = ($ModalPanel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModalPanel$$Original = $ModalPanel;}
declare module "dev.ftb.mods.ftblibrary.snbt.config.StringValue" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Pattern$$Type} from "java.util.regex.Pattern"
import {$SNBTConfig} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $StringValue extends $BaseValue<(StringJS)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS

public "createClientConfig"(group: $ConfigGroup$$Type): void
public "pattern"(p: $Pattern$$Type): $StringValue
public "set"(arg0: any): void
public "set"(v: StringJS): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringValue$$Type = ($StringValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringValue$$Original = $StringValue;}
declare module "dev.ftb.mods.ftblibrary.ui.input.Key" {
import {$KeyModifiers} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$InputConstants$Key} from "com.mojang.blaze3d.platform.InputConstants$Key"

export class $Key {
readonly "keyCode": integer
readonly "modifiers": $KeyModifiers
readonly "scanCode": integer

constructor(k: integer, s: integer, m: integer)

public "escOrInventory"(): boolean
public "esc"(): boolean
public "selectAll"(): boolean
public "cut"(): boolean
public "getInputMapping"(): $InputConstants$Key
public "deselectAll"(): boolean
public "paste"(): boolean
public "backspace"(): boolean
public "enter"(): boolean
public "copy"(): boolean
public "is"(k: integer): boolean
get "inputMapping"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Key$$Type = ($Key);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Key$$Original = $Key;}
declare module "dev.ftb.mods.ftblibrary.config.BooleanConfig" {
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ConfigWithVariants} from "dev.ftb.mods.ftblibrary.config.ConfigWithVariants"
import {$Component} from "net.minecraft.network.chat.Component"

export class $BooleanConfig extends $ConfigWithVariants<(boolean)> {
static readonly "TRUE_TEXT": $Component
static readonly "FALSE_TEXT": $Component
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "getIteration"(currentValue: boolean, next: boolean): boolean
public "getIteration"(arg0: any, arg1: boolean): any
public "getStringForGUI"(v: boolean): $Component
public "getStringForGUI"(arg0: any): $Component
public "getIcon"(v: boolean): $Icon
public "getIcon"(arg0: any): $Icon
public "getColor"(arg0: any): $Color4I
public "getColor"(v: boolean): $Color4I
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConfig$$Type = ($BooleanConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BooleanConfig$$Original = $BooleanConfig;}
declare module "dev.ftb.mods.ftblibrary.icon.Icon" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Drawable$$Interface} from "dev.ftb.mods.ftblibrary.icon.Drawable"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$PixelBuffer} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"

export class $Icon implements $Drawable$$Interface {
static readonly "CODEC": $Codec<($Icon)>
static readonly "STRING_CODEC": $Codec<($Icon)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>

constructor()

public "getIngredient"(): any
public "withPadding"(padding: integer): $Icon
public "withTint"(color: $Color4I$$Type): $Icon
public "withBorder"(color: $Color4I$$Type, roundEdges: boolean): $Icon
public "withUV"(u0: float, v0: float, u1: float, v1: float): $Icon
public "withUV"(x: float, y: float, w: float, h: float, tw: float, th: float): $Icon
public "hasPixelBuffer"(): boolean
public "createPixelBuffer"(): $PixelBuffer
public "getPixelBufferFrameCount"(): integer
public "aspectRatio"(): double
public "equals"(o: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "empty"(): $Color4I
public "copy"(): $Icon
public static "getIcon"(json: $JsonElement$$Type): $Icon
public static "getIcon"(id: StringJS): $Icon
public static "getIcon"(id: $ResourceLocation$$Type): $Icon
public "getJson"(): $JsonElement
public "withColor"(color: $Color4I$$Type): $Icon
public "combineWith"(icon: $Icon$$Type): $Icon
public "combineWith"(...icons: ($Icon$$Type)[]): $Icon
public "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "draw3D"(graphics: $GuiGraphics$$Type): void
public "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
get "ingredient"(): any
get "pixelBufferFrameCount"(): integer
get "json"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Icon$$Type = ($Icon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Icon$$Original = $Icon;}
declare module "dev.ftb.mods.ftblibrary.snbt.config.BooleanValue" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $BooleanValue extends $BaseValue<(boolean)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS

public "toggle"(): void
public "createClientConfig"(group: $ConfigGroup$$Type): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanValue$$Type = ($BooleanValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BooleanValue$$Original = $BooleanValue;}
declare module "dev.ftb.mods.ftblibrary.ui.ContextMenuItem" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$List$$Type} from "java.util.List"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ContextMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenu"
import {$Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"

export class $ContextMenuItem implements $Comparable$$Interface<($ContextMenuItem)> {
static readonly "SEPARATOR": $ContextMenuItem

constructor(title: $Component$$Type, icon: $Icon$$Type, callback: $Consumer$$Type<($Button)>)

public "addMouseOverText"(list: $TooltipList$$Type): void
public static "subMenu"(title: $Component$$Type, icon: $Icon$$Type, subItems: $List$$Type<($ContextMenuItem$$Type)>): $ContextMenuItem
public "getYesNoText"(): $Component
public "isClickable"(): boolean
public "setCloseMenu"(v: boolean): $ContextMenuItem
public "setYesNoText"(s: $Component$$Type): $ContextMenuItem
public "createWidget"(panel: $ContextMenu$$Type): $Widget
public "compareTo"(arg0: any): integer
public "compareTo"(o: $ContextMenuItem$$Type): integer
public "isEnabled"(): boolean
public static "separator"(): $ContextMenuItem
public "getIcon"(): $Icon
public static "title"(title: $Component$$Type): $ContextMenuItem
public "getTitle"(): $Component
public "setEnabled"(enabled: boolean): $ContextMenuItem
public "drawIcon"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "onClicked"(button: $Button$$Type, panel: $Panel$$Type, mouseButton: $MouseButton$$Type): void
get "yesNoText"(): $Component
get "clickable"(): boolean
set "closeMenu"(value: boolean)
set "yesNoText"(value: $Component$$Type)
get "enabled"(): boolean
get "icon"(): $Icon
set "enabled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextMenuItem$$Type = ($ContextMenuItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextMenuItem$$Original = $ContextMenuItem;}
declare module "dev.ftb.mods.ftblibrary.ui.IScreenWrapper" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$BaseScreen, $BaseScreen$$Type} from "dev.ftb.mods.ftblibrary.ui.BaseScreen"
import {$IOpenableScreen$$Interface} from "dev.ftb.mods.ftblibrary.ui.IOpenableScreen"

export interface $IScreenWrapper$$Interface extends $IOpenableScreen$$Interface {

(): $BaseScreen$$Type
get "gui"(): $BaseScreen
}

export class $IScreenWrapper implements $IScreenWrapper$$Interface {
 "openGui"(): void
 "closeGui"(openPrevScreen: boolean): void
 "getGui"(): $BaseScreen
 "closeGui"(): void
 "closeContextMenu"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "run"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenWrapper$$Type = (() => $BaseScreen$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IScreenWrapper$$Original = $IScreenWrapper;}
declare module "dev.ftb.mods.ftblibrary.config.ResourceConfigValue" {
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$OptionalLong} from "java.util.OptionalLong"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ConfigValue} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ResourceConfigValue<T> extends $ConfigValue<(T)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "fixedResourceSize"(): $OptionalLong
public "setResource"(arg0: $SelectableResource$$Type<(T)>): boolean
public "allowEmptyResource"(): boolean
public "canHaveNBT"(): boolean
public "setAllowNBTEdit"(allow: boolean): $ResourceConfigValue<(T)>
public "withAllowEmpty"(allowEmpty: boolean): $ResourceConfigValue<(T)>
public "allowResource"(resource: T): boolean
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<(T)>
public "withFilter"(filter: $Predicate$$Type<(T)>): $ResourceConfigValue<(T)>
set "resource"(value: $SelectableResource$$Type<(T)>)
set "allowNBTEdit"(value: boolean)
get "empty"(): boolean
get "resource"(): $SelectableResource<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConfigValue$$Type<T> = ($ResourceConfigValue<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceConfigValue$$Original<T> = $ResourceConfigValue<(T)>;}
declare module "dev.ftb.mods.ftblibrary.ui.BaseScreen" {
import {$Key$$Type} from "dev.ftb.mods.ftblibrary.ui.input.Key"
import {$Optional} from "java.util.Optional"
import {$KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$DropDownMenu, $DropDownMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.DropDownMenu"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List$$Type} from "java.util.List"
import {$ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import {$BooleanConsumer$$Type} from "dev.ftb.mods.ftblibrary.util.BooleanConsumer"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ModalPanel, $ModalPanel$$Type} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"
import {$BaseScreenAccessor$$Interface} from "dev.uncandango.alltheleaks.mixin.core.main.accessor.BaseScreenAccessor"
import {$Panel} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Window} from "com.mojang.blaze3d.platform.Window"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ContextMenu, $ContextMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenu"
import {$PopupMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.PopupMenu"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"

export class $BaseScreen extends $Panel implements $BaseScreenAccessor$$Interface {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(previousScreen: $Screen$$Type)
constructor()

public "openGui"(): void
public "updateGui"(mx: integer, my: integer, pt: float): void
public "refreshWidgets"(): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawForeground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "alignWidgets"(): void
public "getTheme"(): $Theme
public "setPreviousScreen"(prevScreen: $Screen$$Type): void
public "initGui"(): void
public "getScrollX"(): double
public "setScrollX"(scroll: double): void
public "getScrollY"(): double
public "setScrollY"(scroll: double): void
public "shouldRenderBlur"(): boolean
public "setRenderBlur"(renderBlur: boolean): void
public "popModalPanel"(): $ModalPanel
public "onClosed"(): void
public "closeModalPanel"(panel: $ModalPanel$$Type): void
public "anyModalPanelOpen"(): boolean
public "getPrevScreen"(): $Screen
public "closeGui"(openPrevScreen: boolean): void
public "usePreviousScreenOnBack"(): boolean
public "onClosedByKey"(key: $Key$$Type): boolean
public "onBack"(): void
public "doesGuiPauseGame"(): boolean
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "getContextMenu"(): $Optional<($ModalPanel)>
public "openPopupMenu"(popupMenu: $PopupMenu$$Type): void
public "openContextMenu"(menuItems: $List$$Type<($ContextMenuItem$$Type)>): $ContextMenu
public "openContextMenu"(newContextMenu: $ContextMenu$$Type): void
public "openDropdownMenu"(dropDownMenu: $DropDownMenu$$Type): void
public "openDropdownMenu"(menuItems: $List$$Type<($ContextMenuItem$$Type)>): $DropDownMenu
public "closeContextMenu"(): void
public "drawDefaultBackground"(graphics: $GuiGraphics$$Type): boolean
public "getMaxZLevel"(): integer
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "shouldAddMouseOverText"(): boolean
public "addMouseOverText"(list: $TooltipList$$Type): void
public "openYesNoFull"(title: $Component$$Type, desc: $Component$$Type, callback: $BooleanConsumer$$Type): void
public "openYesNo"(title: $Component$$Type, desc: $Component$$Type, callback: $Runnable$$Type): void
public "setFocusedWidget"(widget: $Widget$$Type): void
public "atl$setPrevScreen"(arg0: $Screen$$Type): void
public "handleClick"(scheme: StringJS, path: StringJS): boolean
public "mousePressed"(button: $MouseButton$$Type): boolean
public "getGui"(): $BaseScreen
public "pushModalPanel"(modalPanel: $ModalPanel$$Type): void
public "tick"(): void
public "getY"(): integer
public "getMinecraft"(): $Minecraft
public "onInit"(): boolean
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getX"(): integer
public "getWindow"(): $Window
/**
 * 
 * @deprecated
 */
public "getScreen"(): $Window
public "getMouseX"(): integer
public "getMouseY"(): integer
public "keyPressed"(key: $Key$$Type): boolean
public "getPartialTicks"(): float
public "shouldCloseOnEsc"(): boolean
public "isMouseOver"(x: integer, y: integer, w: integer, h: integer): boolean
public "isMouseOver"(widget: $Widget$$Type): boolean
public "mouseReleased"(button: $MouseButton$$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "keyReleased"(key: $Key$$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "onPostInit"(): void
get "theme"(): $Theme
set "previousScreen"(value: $Screen$$Type)
get "scrollX"(): double
set "scrollX"(value: double)
get "scrollY"(): double
set "scrollY"(value: double)
set "renderBlur"(value: boolean)
get "prevScreen"(): $Screen
get "contextMenu"(): $Optional<($ModalPanel)>
get "maxZLevel"(): integer
set "focusedWidget"(value: $Widget$$Type)
get "gui"(): $BaseScreen
get "y"(): integer
get "minecraft"(): $Minecraft
get "x"(): integer
get "window"(): $Window
get "screen"(): $Window
get "mouseX"(): integer
get "mouseY"(): integer
get "partialTicks"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseScreen$$Type = ($BaseScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseScreen$$Original = $BaseScreen;}
declare module "dev.ftb.mods.ftblibrary.icon.Color4I" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Style} from "net.minecraft.network.chat.Style"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$MutableColor4I} from "dev.ftb.mods.ftblibrary.icon.MutableColor4I"
import {$PixelBuffer} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $Color4I extends $Icon {
static readonly "GRAY": $Color4I
static readonly "WHITE": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "CODEC": $Codec<($Icon)>
static readonly "BLUE": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "GREEN": $Color4I
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>
static readonly "RED": $Color4I
static readonly "LIGHT_BLUE": $Color4I
static readonly "BLACK": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "STRING_CODEC": $Codec<($Icon)>

public static "RGBtoHSB"(r: integer, g: integer, b: integer, hsbvals: (float)[]): (float)[]
public static "hsb"(h: float, s: float, b: float): $Color4I
public static "rgba"(r: integer, g: integer, b: integer, a: integer): $Color4I
public static "rgba"(col: integer): $Color4I
public "rgba"(): integer
public "toStyle"(): $Style
public "withTint"(col: $Color4I$$Type): $Color4I
public static "getChatFormattingColor"(id: integer): $Color4I
public static "getChatFormattingColor"(formatting: $ChatFormatting$$Type): $Color4I
public static "get256"(id: integer): $Color4I
public "withAlpha"(a: integer): $Color4I
public static "HSBtoRGB"(hue: float, saturation: float, brightness: float): integer
public "redi"(): integer
public "greeni"(): integer
public "bluei"(): integer
public "alphai"(): integer
public "whiteIfEmpty"(): $Color4I
public "alphaf"(): float
public "withAlphaf"(alpha: float): $Color4I
public "addBrightness"(percent: float): $Color4I
public "hasPixelBuffer"(): boolean
public "createPixelBuffer"(): $PixelBuffer
public "rgb"(): integer
public static "rgb"(col: integer): $Color4I
public static "rgb"(color: $Vec3$$Type): $Color4I
public static "rgb"(r: integer, g: integer, b: integer): $Color4I
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "copy"(): $Icon
public "getJson"(): $JsonElement
public static "fromJson"(element: $JsonElement$$Type): $Color4I
public static "fromString"(s: StringJS): $Color4I
public "redf"(): float
public "greenf"(): float
public "bluef"(): float
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "mutable"(): $MutableColor4I
public "isMutable"(): boolean
public "lerp"(col: $Color4I$$Type, m: float): $Color4I
public "withColor"(color: $Color4I$$Type): $Icon
get "json"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color4I$$Type = ($Color4I);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Color4I$$Original = $Color4I;}
declare module "dev.ftb.mods.ftblibrary.icon.MutableColor4I" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$JsonElement} from "com.google.gson.JsonElement"

export class $MutableColor4I extends $Color4I {
static readonly "GRAY": $Color4I
static readonly "WHITE": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "CODEC": $Codec<($Icon)>
static readonly "BLUE": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "GREEN": $Color4I
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>
static readonly "RED": $Color4I
static readonly "TEMP": $Color4I
static readonly "LIGHT_BLUE": $Color4I
static readonly "BLACK": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "STRING_CODEC": $Codec<($Icon)>

public "setFromHSB"(h: float, s: float, b: float): $Color4I
public "addBrightness"(b: integer): $Color4I
public "set"(col: integer, a: integer): $Color4I
public "set"(col: integer): $Color4I
public "set"(col: $Color4I$$Type): $Color4I
public "set"(r: integer, g: integer, b: integer, a: integer): $Color4I
public "set"(col: $Color4I$$Type, a: integer): $Color4I
public "copy"(): $MutableColor4I
public "getJson"(): $JsonElement
public "mutable"(): $MutableColor4I
public "isMutable"(): boolean
public "setAlpha"(a: integer): $Color4I
get "json"(): $JsonElement
set "alpha"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableColor4I$$Type = ($MutableColor4I);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableColor4I$$Original = $MutableColor4I;}
declare module "dev.ftb.mods.ftblibrary.ui.PopupMenu" {
import {$ModalPanel, $ModalPanel$$Type} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"

export interface $PopupMenu$$Interface {

(): $ModalPanel$$Type
get "modalPanel"(): $ModalPanel
}

export class $PopupMenu implements $PopupMenu$$Interface {
 "getModalPanel"(): $ModalPanel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PopupMenu$$Type = (() => $ModalPanel$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PopupMenu$$Original = $PopupMenu;}
declare module "dev.ftb.mods.ftblibrary.core.ItemFTBL" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $ItemFTBL$$Interface {

(arg0: $Item): void
set "craftingRemainingItemFTBL"(value: $Item$$Type)
}

export class $ItemFTBL implements $ItemFTBL$$Interface {
 "setCraftingRemainingItemFTBL"(arg0: $Item$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFTBL$$Type = ((arg0: $Item) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFTBL$$Original = $ItemFTBL;}
declare module "dev.ftb.mods.ftblibrary.snbt.config.LongValue" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$NumberValue} from "dev.ftb.mods.ftblibrary.snbt.config.NumberValue"
import {$SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $LongValue extends $NumberValue<(long)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS

public "createClientConfig"(group: $ConfigGroup$$Type): void
public "set"(arg0: any): void
public "set"(v: long): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "range"(max: long): $NumberValue<(long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongValue$$Type = ($LongValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongValue$$Original = $LongValue;}
declare module "dev.ftb.mods.ftblibrary.config.ConfigGroup" {
import {$EnumConfig} from "dev.ftb.mods.ftblibrary.config.EnumConfig"
import {$Pattern$$Type} from "java.util.regex.Pattern"
import {$LongConfig} from "dev.ftb.mods.ftblibrary.config.LongConfig"
import {$DoubleConfig} from "dev.ftb.mods.ftblibrary.config.DoubleConfig"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$List$$Type} from "java.util.List"
import {$ItemStackConfig} from "dev.ftb.mods.ftblibrary.config.ItemStackConfig"
import {$Tristate, $Tristate$$Type} from "dev.ftb.mods.ftblibrary.config.Tristate"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IntConfig} from "dev.ftb.mods.ftblibrary.config.IntConfig"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ColorConfig} from "dev.ftb.mods.ftblibrary.config.ColorConfig"
import {$BooleanConfig} from "dev.ftb.mods.ftblibrary.config.BooleanConfig"
import {$FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$Collection} from "java.util.Collection"
import {$SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$FluidConfig} from "dev.ftb.mods.ftblibrary.config.FluidConfig"
import {$NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$StringConfig} from "dev.ftb.mods.ftblibrary.config.StringConfig"
import {$Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ImageResourceConfig} from "dev.ftb.mods.ftblibrary.config.ImageResourceConfig"
import {$ListConfig} from "dev.ftb.mods.ftblibrary.config.ListConfig"
import {$EntityFaceConfig} from "dev.ftb.mods.ftblibrary.config.EntityFaceConfig"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigGroup implements $Comparable$$Interface<($ConfigGroup)> {
constructor(id: StringJS, savedCallback: $ConfigCallback$$Type)
constructor(id: StringJS)

public "addItemStack"(id: StringJS, value: $ItemStack$$Type, setter: $Consumer$$Type<($ItemStack)>, def: $ItemStack$$Type, fixedSize: integer): $ItemStackConfig
public "addItemStack"(id: StringJS, value: $ItemStack$$Type, setter: $Consumer$$Type<($ItemStack)>, def: $ItemStack$$Type, singleItem: boolean, allowEmpty: boolean): $ItemStackConfig
public "addColor"(id: StringJS, value: $Color4I$$Type, setter: $Consumer$$Type<($Color4I)>, def: $Color4I$$Type): $ColorConfig
public static "createEditable"(config: $SNBTConfig$$Type, groupName: StringJS, serverConfig: boolean): $ConfigGroup
public "addFluidStack"(id: StringJS, value: $FluidStack$$Type, setter: $Consumer$$Type<($FluidStack)>, def: $FluidStack$$Type, allowEmpty: boolean): $FluidConfig
public "addFluidStack"(id: StringJS, value: $FluidStack$$Type, setter: $Consumer$$Type<($FluidStack)>, def: $FluidStack$$Type, fixedSize: long): $FluidConfig
public "addImage"(id: StringJS, value: $ResourceLocation$$Type, setter: $Consumer$$Type<($ResourceLocation)>, def: $ResourceLocation$$Type): $ImageResourceConfig
public "addEntityFace"(id: StringJS, value: $EntityType$$Type<(never)>, setter: $Consumer$$Type<($EntityType<(never)>)>, def: $EntityType$$Type<(never)>): $EntityFaceConfig
public "getSubgroups"(): $Collection<($ConfigGroup)>
public "addTristate"(id: StringJS, value: $Tristate$$Type, setter: $Consumer$$Type<($Tristate)>): $EnumConfig<($Tristate)>
public "addTristate"(id: StringJS, value: $Tristate$$Type, setter: $Consumer$$Type<($Tristate)>, def: $Tristate$$Type): $EnumConfig<($Tristate)>
public "getValues"(): $Collection<($ConfigValue<(never)>)>
public "addDouble"(id: StringJS, value: double, setter: $Consumer$$Type<(double)>, def: double, min: double, max: double): $DoubleConfig
public "addString"(id: StringJS, value: StringJS, setter: $Consumer$$Type<(StringJS)>, def: StringJS, pattern: $Pattern$$Type): $StringConfig
public "addString"(id: StringJS, value: StringJS, setter: $Consumer$$Type<(StringJS)>, def: StringJS): $StringConfig
public "addInt"(id: StringJS, value: integer, setter: $Consumer$$Type<(integer)>, def: integer, min: integer, max: integer): $IntConfig
public "addEnum"<E>(id: StringJS, value: E, setter: $Consumer$$Type<(E)>, nameMap: $NameMap$$Type<(E)>): $EnumConfig<(E)>
public "addEnum"<E>(id: StringJS, value: E, setter: $Consumer$$Type<(E)>, nameMap: $NameMap$$Type<(E)>, def: E): $EnumConfig<(E)>
public "getOrCreateSubgroup"(id: StringJS): $ConfigGroup
public "getOrCreateSubgroup"(id: StringJS, displayOrder: integer): $ConfigGroup
public "addLong"(id: StringJS, value: long, setter: $Consumer$$Type<(long)>, def: long, min: long, max: long): $LongConfig
public "addBool"(id: StringJS, value: boolean, setter: $Consumer$$Type<(boolean)>, def: boolean): $BooleanConfig
public "setNameKey"(key: StringJS): $ConfigGroup
public "getName"(): $Component
public "compareTo"(o: $ConfigGroup$$Type): integer
public "compareTo"(arg0: any): integer
public "add"<T, CV extends $ConfigValue<(object)>>(id: StringJS, type: CV, value: T, setter: $Consumer$$Type<(T)>, defaultValue: T): CV
public "getParent"(): $ConfigGroup
public "getId"(): StringJS
public "save"(accepted: boolean): void
public "getPath"(): StringJS
public "addList"<E, CV extends $ConfigValue<(object)>>(id: StringJS, value: $List$$Type<(E)>, type: CV, setter: $Consumer$$Type<($List<(E)>)>, def: E): $ListConfig<(E), (CV)>
public "addList"<E, CV extends $ConfigValue<(object)>>(id: StringJS, value: $List$$Type<(E)>, type: CV, def: E): $ListConfig<(E), (CV)>
public "getNameKey"(): StringJS
public "getTooltip"(): $Component
get "subgroups"(): $Collection<($ConfigGroup)>
get "values"(): $Collection<($ConfigValue<(never)>)>
set "nameKey"(value: StringJS)
get "name"(): $Component
get "parent"(): $ConfigGroup
get "id"(): StringJS
get "path"(): StringJS
get "nameKey"(): StringJS
get "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigGroup$$Type = ($ConfigGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigGroup$$Original = $ConfigGroup;}
declare module "dev.ftb.mods.ftblibrary.snbt.config.EnumValue" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $EnumValue<T> extends $BaseValue<(T)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS

public "createClientConfig"(group: $ConfigGroup$$Type): void
public "set"(v: T): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumValue$$Type<T> = ($EnumValue<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumValue$$Original<T> = $EnumValue<(T)>;}
declare module "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient" {
import {$Optional} from "java.util.Optional"
import {$Rect2i, $Rect2i$$Type} from "net.minecraft.client.renderer.Rect2i"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Record} from "java.lang.Record"

export class $PositionedIngredient extends $Record {
constructor(ingredient: any, area: $Rect2i$$Type, tooltip: boolean)

public "area"(): $Rect2i
public "ingredient"(): any
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(ingredient: any, widget: $Widget$$Type, tooltip: boolean): $Optional<($PositionedIngredient)>
public static "of"(ingredient: any, widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public "tooltip"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedIngredient$$Type = ({"area"?: $Rect2i$$Type, "ingredient"?: any, "tooltip"?: boolean}) | ([area?: $Rect2i$$Type, ingredient?: any, tooltip?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PositionedIngredient$$Original = $PositionedIngredient;}
declare module "dev.ftb.mods.ftblibrary.config.ConfigCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigCallback$$Interface {

(arg0: boolean): void
}

export class $ConfigCallback implements $ConfigCallback$$Interface {
 "save"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCallback$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigCallback$$Original = $ConfigCallback;}
declare module "dev.ftb.mods.ftblibrary.ui.Widget$DrawLayer" {
import {$Enum} from "java.lang.Enum"

export class $Widget$DrawLayer extends $Enum<($Widget$DrawLayer)> {
static readonly "FOREGROUND": $Widget$DrawLayer
static readonly "BACKGROUND": $Widget$DrawLayer

public static "values"(): ($Widget$DrawLayer)[]
public static "valueOf"(name: StringJS): $Widget$DrawLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$DrawLayer$$Type = (("background") | ("foreground"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Widget$DrawLayer$$Original = $Widget$DrawLayer;}
declare module "dev.ftb.mods.ftblibrary.config.ColorConfig" {
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ConfigValue} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ColorConfig extends $ConfigValue<($Color4I)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "getStringForGUI"(v: $Color4I$$Type): $Component
public "getStringForGUI"(arg0: any): $Component
public "withAlphaEditing"(): $ColorConfig
public "isAllowAlphaEdit"(): boolean
public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
get "allowAlphaEdit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorConfig$$Type = ($ColorConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorConfig$$Original = $ColorConfig;}
declare module "dev.ftb.mods.ftblibrary.config.ImageResourceConfig" {
import {$Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$OptionalLong} from "java.util.OptionalLong"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $ImageResourceConfig extends $ResourceConfigValue<($ResourceLocation)> {
 "id": StringJS
static readonly "NONE": $ResourceLocation
static readonly "NULL_TEXT": $Component

constructor()

public "fixedResourceSize"(): $OptionalLong
public "setResource"(selectable: $SelectableResource$$Type<($ResourceLocation$$Type)>): boolean
public "addInfo"(list: $TooltipList$$Type): void
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ResourceLocation)>
public static "getResourceLocation"(icon: $Icon$$Type): $ResourceLocation
public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
set "resource"(value: $SelectableResource$$Type<($ResourceLocation$$Type)>)
get "empty"(): boolean
get "resource"(): $SelectableResource<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageResourceConfig$$Type = ($ImageResourceConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImageResourceConfig$$Original = $ImageResourceConfig;}
declare module "dev.ftb.mods.ftblibrary.config.NameMap" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Map} from "java.util.Map"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Spliterator} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Random$$Type} from "java.util.Random"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$NameMap$Builder} from "dev.ftb.mods.ftblibrary.config.NameMap$Builder"

export class $NameMap<E> implements $Iterable$$Interface<(E)> {
readonly "defaultValue": E
readonly "keys": $List<(StringJS)>
readonly "values": $List<(E)>
readonly "map": $Map<(StringJS), (E)>

public "getNullable"(s: StringJS): E
public "withDefault"(def: E): $NameMap<(E)>
public "getStringIndex"(s: StringJS): integer
public "getNext"(value: E): E
public "getName"(value: E): StringJS
public "size"(): integer
public "get"(s: StringJS): E
public "get"(index: integer): E
public "iterator"(): $Iterator<(E)>
public static "of"<T>(defaultValue: T, values: $List$$Type<(T)>): $NameMap$Builder<(T)>
public static "of"<T>(defaultValue: T, values: (T)[]): $NameMap$Builder<(T)>
public "offset"(value: E, index: integer): E
public "write"(data: $FriendlyByteBuf$$Type, object: E): void
public "read"(data: $FriendlyByteBuf$$Type): E
public "getIndex"(e: E): integer
public "getDisplayName"(value: E): $Component
public "getIcon"(v: E): $Icon
public "getPrevious"(value: E): E
public "getColor"(value: E): $Color4I
public "getRandom"(rand: $Random$$Type): E
public "spliterator"(): $Spliterator<(E)>
public "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameMap$$Type<E> = ($NameMap<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NameMap$$Original<E> = $NameMap<(E)>;}
declare module "dev.ftb.mods.ftblibrary.ui.CursorType" {
import {$Enum} from "java.lang.Enum"

export class $CursorType extends $Enum<($CursorType)> {
static readonly "VRESIZE": $CursorType
static readonly "ARROW": $CursorType
static readonly "CROSSHAIR": $CursorType
static readonly "IBEAM": $CursorType
static readonly "HRESIZE": $CursorType
static readonly "HAND": $CursorType

public static "values"(): ($CursorType)[]
public static "valueOf"(name: StringJS): $CursorType
public static "set"(type: $CursorType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorType$$Type = (("arrow") | ("ibeam") | ("crosshair") | ("hand") | ("hresize") | ("vresize"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CursorType$$Original = $CursorType;}
declare module "dev.ftb.mods.ftblibrary.config.LongConfig" {
import {$NumberConfig} from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Optional} from "java.util.Optional"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $LongConfig extends $NumberConfig<(long)> {
readonly "min": T
readonly "max": T
static readonly "COLOR": $Color4I
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(mn: long, mx: long)

public "addInfo"(list: $TooltipList$$Type): void
public "scrollValue"(currentValue: long, forward: boolean): $Optional<(long)>
public "scrollValue"(arg0: any, arg1: boolean): $Optional
public "parse"(callback: $Consumer$$Type<(long)>, string: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongConfig$$Type = ($LongConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongConfig$$Original = $LongConfig;}
declare module "dev.ftb.mods.ftblibrary.ui.Theme" {
import {$WidgetType$$Type} from "dev.ftb.mods.ftblibrary.ui.WidgetType"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List} from "java.util.List"
import {$Font} from "net.minecraft.client.gui.Font"
import {$ImageIcon} from "dev.ftb.mods.ftblibrary.icon.ImageIcon"

export class $Theme {
static readonly "MOUSE_OVER": integer
static readonly "BACKGROUND_SQUARES": $ImageIcon
static readonly "CENTERED": integer
static readonly "SHADOW": integer
static readonly "CENTERED_V": integer
static readonly "DARK": integer
static "renderDebugBoxes": boolean
static readonly "UNICODE": integer
static readonly "DEFAULT": $Theme

constructor()

public "drawGui"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawWidget"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawButton"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "getFontHeight"(): integer
public "drawSlot"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "trimStringToWidth"(text: $FormattedText$$Type, width: integer): $FormattedText
public "trimStringToWidth"(text: StringJS, width: integer): StringJS
public "drawTextBox"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getContentColor"(type: $WidgetType$$Type): $Color4I
public "getStringWidth"(text: $FormattedText$$Type): integer
public "getStringWidth"(text: $FormattedCharSequence$$Type): integer
public "getStringWidth"(text: StringJS): integer
public "drawScrollBar"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type, vertical: boolean): void
public "drawScrollBarBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawPanelBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawCheckboxBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, radioButton: boolean): void
public "drawCheckbox"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type, selected: boolean, radioButton: boolean): void
public "getInvertedContentColor"(): $Color4I
public "drawHorizontalTab"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, selected: boolean): void
public "trimStringToWidthReverse"(text: StringJS, width: integer): StringJS
public "listFormattedStringToWidth"(text: $FormattedText$$Type, width: integer): $List<($FormattedText)>
public "drawContainerSlot"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawContextMenuBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer): integer
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer, color: $Color4I$$Type, flags: integer): integer
public "getFont"(): $Font
get "fontHeight"(): integer
get "invertedContentColor"(): $Color4I
get "font"(): $Font
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Theme$$Type = ($Theme);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Theme$$Original = $Theme;}
declare module "dev.ftb.mods.ftblibrary.config.ConfigFromString" {
import {$Optional} from "java.util.Optional"
import {$ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ConfigValue} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigFromString<T> extends $ConfigValue<(T)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "canScroll"(): boolean
public "getStringForGUI"(v: T): $Component
public "getStringFromValue"(v: T): StringJS
public "scrollValue"(currentValue: T, forward: boolean): $Optional<(T)>
public "parse"(arg0: $Consumer$$Type<(T)>, arg1: StringJS): boolean
public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFromString$$Type<T> = ($ConfigFromString<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigFromString$$Original<T> = $ConfigFromString<(T)>;}
declare module "dev.ftb.mods.ftblibrary.config.Tristate" {
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Enum} from "java.lang.Enum"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $Tristate extends $Enum<($Tristate)> {
readonly "result": $InteractionResult
readonly "color": $Color4I
static readonly "NAME_MAP": $NameMap<($Tristate)>
readonly "displayName": StringJS
readonly "icon": $Icon
static readonly "TRUE": $Tristate
static readonly "FALSE": $Tristate
static readonly "VALUES": ($Tristate)[]
static readonly "DEFAULT": $Tristate

public "isFalse"(): boolean
public "get"(def: boolean): boolean
public "toString"(): StringJS
public static "values"(): ($Tristate)[]
public static "valueOf"(name: StringJS): $Tristate
public "write"(buffer: $FriendlyByteBuf$$Type): void
public "write"(nbt: $CompoundTag$$Type, key: StringJS): void
public static "read"(nbt: $CompoundTag$$Type, key: StringJS): $Tristate
public static "read"(buffer: $FriendlyByteBuf$$Type): $Tristate
public "isDefault"(): boolean
public "isTrue"(): boolean
public "getOpposite"(): $Tristate
get "false"(): boolean
get "default"(): boolean
get "true"(): boolean
get "opposite"(): $Tristate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tristate$$Type = (("false") | ("true") | ("default"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tristate$$Original = $Tristate;}
declare module "dev.ftb.mods.ftblibrary.snbt.config.DoubleValue" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$NumberValue} from "dev.ftb.mods.ftblibrary.snbt.config.NumberValue"
import {$SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $DoubleValue extends $NumberValue<(double)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS

public "createClientConfig"(group: $ConfigGroup$$Type): void
public "set"(arg0: any): void
public "set"(v: double): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "range"(max: double): $NumberValue<(double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleValue$$Type = ($DoubleValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleValue$$Original = $DoubleValue;}
declare module "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyModifiers {
static readonly "NONE": $KeyModifiers
readonly "modifiers": integer

constructor(m: integer)

public "onlyControl"(): boolean
public "numLock"(): boolean
public "capsLock"(): boolean
public "control"(): boolean
public "start"(): boolean
public "shift"(): boolean
public "alt"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyModifiers$$Type = ($KeyModifiers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyModifiers$$Original = $KeyModifiers;}
declare module "dev.ftb.mods.ftblibrary.util.BooleanConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanConsumer$$Interface {

(arg0: boolean): void
}

export class $BooleanConsumer implements $BooleanConsumer$$Interface {
 "accept"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConsumer$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BooleanConsumer$$Original = $BooleanConsumer;}
declare module "dev.ftb.mods.ftblibrary.config.IntConfig" {
import {$NumberConfig} from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Optional} from "java.util.Optional"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $IntConfig extends $NumberConfig<(integer)> {
readonly "min": T
readonly "max": T
static readonly "COLOR": $Color4I
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(mn: integer, mx: integer)

public "addInfo"(list: $TooltipList$$Type): void
public "scrollValue"(currentValue: integer, forward: boolean): $Optional<(integer)>
public "scrollValue"(arg0: any, arg1: boolean): $Optional
public "parse"(callback: $Consumer$$Type<(integer)>, string: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntConfig$$Type = ($IntConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntConfig$$Original = $IntConfig;}
declare module "dev.ftb.mods.ftblibrary.config.StringConfig" {
import {$ConfigFromString} from "dev.ftb.mods.ftblibrary.config.ConfigFromString"
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $StringConfig extends $ConfigFromString<(StringJS)> {
static readonly "COLOR": $Color4I
readonly "pattern": $Pattern
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(p: $Pattern$$Type)
constructor()

public "addInfo"(list: $TooltipList$$Type): void
public "getStringForGUI"(v: StringJS): $Component
public "getStringForGUI"(arg0: any): $Component
public "parse"(callback: $Consumer$$Type<(StringJS)>, string: StringJS): boolean
public "getColor"(arg0: any): $Color4I
public "getColor"(v: StringJS): $Color4I
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringConfig$$Type = ($StringConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringConfig$$Original = $StringConfig;}
declare module "dev.ftb.mods.ftblibrary.ui.IOpenableScreen" {
import {$Runnable, $Runnable$$Type, $Runnable$$Interface} from "java.lang.Runnable"

export interface $IOpenableScreen$$Interface extends $Runnable$$Interface {

(): void
}

export class $IOpenableScreen implements $IOpenableScreen$$Interface {
 "openGui"(): void
 "closeGui"(openPrevScreen: boolean): void
 "closeGui"(): void
 "closeContextMenu"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "run"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOpenableScreen$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOpenableScreen$$Original = $IOpenableScreen;}
declare module "dev.ftb.mods.ftblibrary.config.FluidConfig" {
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource"
import {$ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$OptionalLong} from "java.util.OptionalLong"
import {$MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $FluidConfig extends $ResourceConfigValue<($FluidStack)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(fixedSize: long)
constructor(allowEmpty: boolean)

public "showAmount"(show: boolean): $FluidConfig
public "fixedResourceSize"(): $OptionalLong
public "setResource"(selectable: $SelectableResource$$Type<($FluidStack$$Type)>): boolean
public "allowEmptyResource"(): boolean
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: $FluidStack$$Type): $Component
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($FluidStack)>
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
set "resource"(value: $SelectableResource$$Type<($FluidStack$$Type)>)
get "empty"(): boolean
get "resource"(): $SelectableResource<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidConfig$$Type = ($FluidConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidConfig$$Original = $FluidConfig;}
declare module "dev.ftb.mods.ftblibrary.config.NameMap$Builder" {
import {$Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Function$$Type} from "java.util.function.Function"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $NameMap$Builder<T> {
public "baseNameKey"(key: StringJS): $NameMap$Builder<(T)>
public "name"(p: $Function$$Type<(T), ($Component$$Type)>): $NameMap$Builder<(T)>
public "id"(p: $Function$$Type<(T), (StringJS)>): $NameMap$Builder<(T)>
public "color"(p: $Function$$Type<(T), ($Color4I$$Type)>): $NameMap$Builder<(T)>
public "create"(): $NameMap<(T)>
public "icon"(p: $Function$$Type<(T), ($Icon$$Type)>): $NameMap$Builder<(T)>
public "nameKey"(p: $Function$$Type<(T), (StringJS)>): $NameMap$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameMap$Builder$$Type<T> = ($NameMap$Builder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NameMap$Builder$$Original<T> = $NameMap$Builder<(T)>;}
declare module "dev.ftb.mods.ftblibrary.snbt.config.IntArrayValue" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $IntArrayValue extends $BaseValue<((integer)[])> {
readonly "parent": $SNBTConfig
readonly "key": StringJS

public "createClientConfig"(group: $ConfigGroup$$Type): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntArrayValue$$Type = ($IntArrayValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntArrayValue$$Original = $IntArrayValue;}
