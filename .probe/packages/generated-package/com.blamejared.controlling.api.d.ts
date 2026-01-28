declare module "com.blamejared.controlling.api.events.KeyEntryRenderEvent" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IKeyEntryRenderEvent$$Interface} from "com.blamejared.controlling.api.events.IKeyEntryRenderEvent"

export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent$$Interface {
constructor(arg0: $IKeyEntry$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: float)

public "getSlotIndex"(): integer
public "getY"(): integer
public "getEntry"(): $IKeyEntry
public "getPartialTicks"(): float
public "getX"(): integer
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getRowWidth"(): integer
public "getRowLeft"(): integer
public "isHovered"(): boolean
public "getGuiGraphics"(): $GuiGraphics
get "slotIndex"(): integer
get "y"(): integer
get "entry"(): $IKeyEntry
get "partialTicks"(): float
get "x"(): integer
get "mouseX"(): integer
get "mouseY"(): integer
get "rowWidth"(): integer
get "rowLeft"(): integer
get "hovered"(): boolean
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryRenderEvent$$Type = ($KeyEntryRenderEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyEntryRenderEvent$$Original = $KeyEntryRenderEvent;}
declare module "com.blamejared.controlling.api.events.IKeyEntryListenersEvent" {
import {$GuiEventListener} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List} from "java.util.List"
import {$IKeyEntry} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryListenersEvent$$Interface {
get "entry"(): $IKeyEntry
get "listeners"(): $List<($GuiEventListener)>
}

export class $IKeyEntryListenersEvent implements $IKeyEntryListenersEvent$$Interface {
 "getEntry"(): $IKeyEntry
 "getListeners"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryListenersEvent$$Type = ($IKeyEntryListenersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyEntryListenersEvent$$Original = $IKeyEntryListenersEvent;}
declare module "com.blamejared.controlling.api.events.IKeyEntryRenderEvent" {
import {$GuiGraphics} from "net.minecraft.client.gui.GuiGraphics"
import {$IKeyEntry} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryRenderEvent$$Interface {
get "slotIndex"(): integer
get "y"(): integer
get "entry"(): $IKeyEntry
get "partialTicks"(): float
get "x"(): integer
get "mouseX"(): integer
get "mouseY"(): integer
get "rowWidth"(): integer
get "rowLeft"(): integer
get "hovered"(): boolean
get "guiGraphics"(): $GuiGraphics
}

export class $IKeyEntryRenderEvent implements $IKeyEntryRenderEvent$$Interface {
 "getSlotIndex"(): integer
 "getY"(): integer
 "getEntry"(): $IKeyEntry
 "getPartialTicks"(): float
 "getX"(): integer
 "getMouseX"(): integer
 "getMouseY"(): integer
 "getRowWidth"(): integer
 "getRowLeft"(): integer
 "isHovered"(): boolean
 "getGuiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryRenderEvent$$Type = ($IKeyEntryRenderEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyEntryRenderEvent$$Original = $IKeyEntryRenderEvent;}
declare module "com.blamejared.controlling.api.events.IKeyEntryMouseClickedEvent" {
import {$IKeyEntry} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryMouseClickedEvent$$Interface {
get "handled"(): boolean
get "buttonId"(): integer
set "handled"(value: boolean)
get "entry"(): $IKeyEntry
get "mouseX"(): double
get "mouseY"(): double
}

export class $IKeyEntryMouseClickedEvent implements $IKeyEntryMouseClickedEvent$$Interface {
 "isHandled"(): boolean
 "getButtonId"(): integer
 "setHandled"(arg0: boolean): void
 "getEntry"(): $IKeyEntry
 "getMouseX"(): double
 "getMouseY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryMouseClickedEvent$$Type = ($IKeyEntryMouseClickedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyEntryMouseClickedEvent$$Original = $IKeyEntryMouseClickedEvent;}
declare module "com.blamejared.controlling.api.events.IKeyEntryMouseReleasedEvent" {
import {$IKeyEntry} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryMouseReleasedEvent$$Interface {
get "handled"(): boolean
get "buttonId"(): integer
set "handled"(value: boolean)
get "entry"(): $IKeyEntry
get "mouseX"(): double
get "mouseY"(): double
}

export class $IKeyEntryMouseReleasedEvent implements $IKeyEntryMouseReleasedEvent$$Interface {
 "isHandled"(): boolean
 "getButtonId"(): integer
 "setHandled"(arg0: boolean): void
 "getEntry"(): $IKeyEntry
 "getMouseX"(): double
 "getMouseY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryMouseReleasedEvent$$Type = ($IKeyEntryMouseReleasedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyEntryMouseReleasedEvent$$Original = $IKeyEntryMouseReleasedEvent;}
declare module "com.blamejared.controlling.api.entries.IKeyEntry" {
import {$GuiEventListener} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List} from "java.util.List"
import {$KeyMapping} from "net.minecraft.client.KeyMapping"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Button} from "net.minecraft.client.gui.components.Button"

export interface $IKeyEntry$$Interface {
get "keyDesc"(): $Component
get "btnResetKeyBinding"(): $Button
get "btnChangeKeyBinding"(): $Button
get "key"(): $KeyMapping
}

export class $IKeyEntry implements $IKeyEntry$$Interface {
 "getKeyDesc"(): $Component
 "getBtnResetKeyBinding"(): $Button
 "getBtnChangeKeyBinding"(): $Button
 "children"(): $List<($GuiEventListener)>
 "getKey"(): $KeyMapping
 "categoryName"(): $Component
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: float): void
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntry$$Type = ($IKeyEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IKeyEntry$$Original = $IKeyEntry;}
declare module "com.blamejared.controlling.api.events.KeyEntryMouseReleasedEvent" {
import {$IKeyEntryMouseReleasedEvent$$Interface} from "com.blamejared.controlling.api.events.IKeyEntryMouseReleasedEvent"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event} from "net.neoforged.bus.api.Event"

export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent$$Interface {
constructor(arg0: $IKeyEntry$$Type, arg1: double, arg2: double, arg3: integer)

public "isHandled"(): boolean
public "getButtonId"(): integer
public "setHandled"(arg0: boolean): void
public "getEntry"(): $IKeyEntry
public "getMouseX"(): double
public "getMouseY"(): double
get "handled"(): boolean
get "buttonId"(): integer
set "handled"(value: boolean)
get "entry"(): $IKeyEntry
get "mouseX"(): double
get "mouseY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryMouseReleasedEvent$$Type = ($KeyEntryMouseReleasedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyEntryMouseReleasedEvent$$Original = $KeyEntryMouseReleasedEvent;}
declare module "com.blamejared.controlling.api.events.KeyEntryListenersEvent" {
import {$GuiEventListener} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List} from "java.util.List"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IKeyEntryListenersEvent$$Interface} from "com.blamejared.controlling.api.events.IKeyEntryListenersEvent"

export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent$$Interface {
constructor(arg0: $IKeyEntry$$Type)

public "getEntry"(): $IKeyEntry
public "getListeners"(): $List<($GuiEventListener)>
get "entry"(): $IKeyEntry
get "listeners"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryListenersEvent$$Type = ($KeyEntryListenersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyEntryListenersEvent$$Original = $KeyEntryListenersEvent;}
declare module "com.blamejared.controlling.api.events.KeyEntryMouseClickedEvent" {
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IKeyEntryMouseClickedEvent$$Interface} from "com.blamejared.controlling.api.events.IKeyEntryMouseClickedEvent"

export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent$$Interface {
constructor(arg0: $IKeyEntry$$Type, arg1: double, arg2: double, arg3: integer)

public "isHandled"(): boolean
public "getButtonId"(): integer
public "setHandled"(arg0: boolean): void
public "getEntry"(): $IKeyEntry
public "getMouseX"(): double
public "getMouseY"(): double
get "handled"(): boolean
get "buttonId"(): integer
set "handled"(value: boolean)
get "entry"(): $IKeyEntry
get "mouseX"(): double
get "mouseY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryMouseClickedEvent$$Type = ($KeyEntryMouseClickedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyEntryMouseClickedEvent$$Original = $KeyEntryMouseClickedEvent;}
