declare module "eu.midnightdust.midnightcontrols.client.util.KeyBindingAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $KeyBindingAccessor$$Interface {
}

export class $KeyBindingAccessor implements $KeyBindingAccessor$$Interface {
 "midnightcontrols$press"(): boolean
 "midnightcontrols$unpress"(): boolean
 "midnightcontrols$handlePressState"(pressed: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyBindingAccessor$$Type = ($KeyBindingAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyBindingAccessor$$Original = $KeyBindingAccessor;}
declare module "eu.midnightdust.midnightcontrols.client.util.HandledScreenAccessor" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"

export interface $HandledScreenAccessor$$Interface {
get "y"(): integer
get "x"(): integer
}

export class $HandledScreenAccessor implements $HandledScreenAccessor$$Interface {
 "getY"(): integer
 "getX"(): integer
 "midnightcontrols$getSlotAt"(arg0: double, arg1: double): $Slot
 "midnightcontrols$isClickOutsideBounds"(arg0: double, arg1: double, arg2: integer, arg3: integer, arg4: integer): boolean
 "midnightcontrols$onMouseClick"(arg0: $Slot$$Type, arg1: integer, arg2: integer, arg3: $ClickType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandledScreenAccessor$$Type = ($HandledScreenAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HandledScreenAccessor$$Original = $HandledScreenAccessor;}
declare module "eu.midnightdust.midnightcontrols.client.mixin.MouseAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseAccessor$$Interface {
}

export class $MouseAccessor implements $MouseAccessor$$Interface {
 "midnightcontrols$onCursorPos"(arg0: long, arg1: double, arg2: double): void
 "midnightcontrols$onMouseButton"(arg0: long, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseAccessor$$Type = ($MouseAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseAccessor$$Original = $MouseAccessor;}
declare module "eu.midnightdust.midnightcontrols.client.mixin.ClickableWidgetAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClickableWidgetAccessor$$Interface {
get "height"(): integer
set "focused"(value: boolean)
}

export class $ClickableWidgetAccessor implements $ClickableWidgetAccessor$$Interface {
 "getHeight"(): integer
 "setFocused"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickableWidgetAccessor$$Type = ($ClickableWidgetAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClickableWidgetAccessor$$Original = $ClickableWidgetAccessor;}
declare module "eu.midnightdust.midnightcontrols.client.mixin.KeyBindingIDAccessor" {
import {$Map} from "java.util.Map"
import {$KeyMapping} from "net.minecraft.client.KeyMapping"

export interface $KeyBindingIDAccessor$$Interface {
public static get "ALL"(): $Map<(StringJS), ($KeyMapping)>
}

export class $KeyBindingIDAccessor implements $KeyBindingIDAccessor$$Interface {
static "getALL"(): $Map<(StringJS), ($KeyMapping)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyBindingIDAccessor$$Type = ($KeyBindingIDAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyBindingIDAccessor$$Original = $KeyBindingIDAccessor;}
