declare module "com.hrznstudio.titanium.client.screen.addon.ProgressBarScreenAddon" {
import {$BasicScreenAddon} from "com.hrznstudio.titanium.client.screen.addon.BasicScreenAddon"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$IComponentHarness} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ProgressBarComponent, $ProgressBarComponent$$Type} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"

export class $ProgressBarScreenAddon<T extends $IComponentHarness> extends $BasicScreenAddon {
constructor(arg0: integer, arg1: integer, arg2: $ProgressBarComponent$$Type<(T)>)

public "getProgressBar"(): $ProgressBarComponent<(T)>
public "drawForegroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
public "drawBackgroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
public "getTooltipLines"(): $List<($Component)>
public "getXSize"(): integer
public "getYSize"(): integer
get "progressBar"(): $ProgressBarComponent<(T)>
get "tooltipLines"(): $List<($Component)>
get "XSize"(): integer
get "YSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressBarScreenAddon$$Type<T> = ($ProgressBarScreenAddon<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressBarScreenAddon$$Original<T> = $ProgressBarScreenAddon<(T)>;}
declare module "com.hrznstudio.titanium.client.screen.asset.DefaultAssetProvider" {
import {$IAsset} from "com.hrznstudio.titanium.api.client.IAsset"
import {$IAssetProvider$$Type, $IAssetProvider$$Interface} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$IAssetType$$Type} from "com.hrznstudio.titanium.api.client.IAssetType"

export class $DefaultAssetProvider implements $IAssetProvider$$Interface {
public "getAsset"<T extends $IAsset>(arg0: $IAssetType$$Type<(T)>): T
public static "getAsset"<T extends $IAsset>(arg0: $IAssetProvider$$Type, arg1: $IAssetType$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultAssetProvider$$Type = ($DefaultAssetProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DefaultAssetProvider$$Original = $DefaultAssetProvider;}
declare module "com.hrznstudio.titanium.client.screen.asset.IHasAssetProvider" {
import {$IAssetProvider, $IAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"

export interface $IHasAssetProvider$$Interface {

(): $IAssetProvider$$Type
get "assetProvider"(): $IAssetProvider
}

export class $IHasAssetProvider implements $IHasAssetProvider$$Interface {
 "getAssetProvider"(): $IAssetProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasAssetProvider$$Type = (() => $IAssetProvider$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHasAssetProvider$$Original = $IHasAssetProvider;}
declare module "com.hrznstudio.titanium.client.screen.addon.BasicScreenAddon" {
import {$IScreenAddon$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$IAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"
import {$Component} from "net.minecraft.network.chat.Component"

export class $BasicScreenAddon implements $IScreenAddon$$Interface {
public "getPosX"(): integer
public "getPosY"(): integer
public "isMouseOver"(arg0: double, arg1: double): boolean
public "setFocused"(arg0: boolean): void
public "isFocused"(): boolean
public "getXSize"(): integer
public "getYSize"(): integer
public "setPosX"(arg0: integer): void
public "setPosY"(arg0: integer): void
public "drawForegroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
public "drawBackgroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
public "isBackground"(): boolean
public "init"(arg0: integer, arg1: integer): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "getTooltipLines"(): $List<($Component)>
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
public "getCurrentFocusPath"(): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
get "posX"(): integer
get "posY"(): integer
set "focused"(value: boolean)
get "focused"(): boolean
get "XSize"(): integer
get "YSize"(): integer
set "posX"(value: integer)
set "posY"(value: integer)
get "background"(): boolean
get "tooltipLines"(): $List<($Component)>
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicScreenAddon$$Type = ($BasicScreenAddon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicScreenAddon$$Original = $BasicScreenAddon;}
declare module "com.hrznstudio.titanium.client.screen.addon.StateButtonInfo" {
import {$Component} from "net.minecraft.network.chat.Component"
import {$IAssetType, $IAssetType$$Type} from "com.hrznstudio.titanium.api.client.IAssetType"

export class $StateButtonInfo {
constructor(arg0: integer, arg1: $IAssetType$$Type, ...arg2: (StringJS)[])

public "getAsset"(): $IAssetType
public "getState"(): integer
public "getTooltip"(): ($Component)[]
get "asset"(): $IAssetType
get "state"(): integer
get "tooltip"(): ($Component)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateButtonInfo$$Type = ($StateButtonInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StateButtonInfo$$Original = $StateButtonInfo;}
declare module "com.hrznstudio.titanium.client.screen.asset.IAssetProvider" {
import {$IAsset, $IAsset$$Type} from "com.hrznstudio.titanium.api.client.IAsset"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IAssetType, $IAssetType$$Type} from "com.hrznstudio.titanium.api.client.IAssetType"
import {$DefaultAssetProvider} from "com.hrznstudio.titanium.client.screen.asset.DefaultAssetProvider"

export interface $IAssetProvider$$Interface {

(arg0: $IAssetType<(T)>): T
}

export class $IAssetProvider implements $IAssetProvider$$Interface {
static readonly "DEFAULT_LOCATION": $ResourceLocation
static readonly "DEFAULT_LOCATION_ALT": $ResourceLocation
static readonly "DEFAULT_PROVIDER": $DefaultAssetProvider

static "getAsset"<T extends $IAsset>(arg0: $IAssetProvider$$Type, arg1: $IAssetType$$Type<(T)>): T
 "getAsset"<T extends $IAsset>(arg0: $IAssetType$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAssetProvider$$Type = ((arg0: $IAssetType<(T)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAssetProvider$$Original = $IAssetProvider;}
