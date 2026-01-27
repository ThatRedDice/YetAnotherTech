declare module "de.keksuccino.fancymenu.util.resource.RenderableResource" {
import {$Resource$$Interface} from "de.keksuccino.fancymenu.util.resource.Resource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InputStream} from "java.io.InputStream"
import {$AspectRatio} from "de.keksuccino.fancymenu.util.rendering.AspectRatio"

export interface $RenderableResource$$Interface extends $Resource$$Interface {
get "width"(): integer
get "height"(): integer
get "aspectRatio"(): $AspectRatio
get "resourceLocation"(): $ResourceLocation
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
get "closed"(): boolean
get "ready"(): boolean
}

export class $RenderableResource implements $RenderableResource$$Interface {
static readonly "MISSING_TEXTURE_LOCATION": $ResourceLocation
static readonly "FULLY_TRANSPARENT_TEXTURE": $ResourceLocation

 "getWidth"(): integer
 "getHeight"(): integer
 "reset"(): void
 "getAspectRatio"(): $AspectRatio
 "getResourceLocation"(): $ResourceLocation
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "isReady"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableResource$$Type = ($RenderableResource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderableResource$$Original = $RenderableResource;}
declare module "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio" {
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$PlayableResourceWithAudio$$Interface} from "de.keksuccino.fancymenu.util.resource.resources.audio.PlayableResourceWithAudio"
import {$InputStream} from "java.io.InputStream"

export interface $IAudio$$Interface extends $PlayableResourceWithAudio$$Interface {
get "playTime"(): float
set "soundChannel"(value: $SoundSource$$Type)
get "soundChannel"(): $SoundSource
get "duration"(): float
set "volume"(value: float)
get "volume"(): float
get "playing"(): boolean
get "paused"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
get "closed"(): boolean
get "ready"(): boolean
}

export class $IAudio implements $IAudio$$Interface {
 "getPlayTime"(): float
 "setSoundChannel"(arg0: $SoundSource$$Type): void
 "getSoundChannel"(): $SoundSource
 "getDuration"(): float
 "play"(): void
 "setVolume"(arg0: float): void
 "getVolume"(): float
 "stop"(): void
 "isPlaying"(): boolean
 "pause"(): void
 "isPaused"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "isReady"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAudio$$Type = ($IAudio);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAudio$$Original = $IAudio;}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior" {
import {$Enum} from "java.lang.Enum"

export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<($CustomizableWidget$CustomBackgroundResetBehavior)> {
static readonly "RESET_ON_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_NEVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER_AND_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior

public static "values"(): ($CustomizableWidget$CustomBackgroundResetBehavior)[]
public static "valueOf"(arg0: StringJS): $CustomizableWidget$CustomBackgroundResetBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$CustomBackgroundResetBehavior$$Type = (("reset_never") | ("reset_on_hover") | ("reset_on_unhover") | ("reset_on_hover_and_unhover"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomizableWidget$CustomBackgroundResetBehavior$$Original = $CustomizableWidget$CustomBackgroundResetBehavior;}
declare module "de.keksuccino.fancymenu.util.resource.resources.audio.PlayableResourceWithAudio" {
import {$PlayableResource$$Interface} from "de.keksuccino.fancymenu.util.resource.PlayableResource"
import {$InputStream} from "java.io.InputStream"

export interface $PlayableResourceWithAudio$$Interface extends $PlayableResource$$Interface {
set "volume"(value: float)
get "volume"(): float
get "playing"(): boolean
get "paused"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
get "closed"(): boolean
get "ready"(): boolean
}

export class $PlayableResourceWithAudio implements $PlayableResourceWithAudio$$Interface {
 "setVolume"(arg0: float): void
 "getVolume"(): float
 "stop"(): void
 "play"(): void
 "isPlaying"(): boolean
 "pause"(): void
 "isPaused"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "isReady"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableResourceWithAudio$$Type = ($PlayableResourceWithAudio);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayableResourceWithAudio$$Original = $PlayableResourceWithAudio;}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.UniqueWidget" {
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"

export interface $UniqueWidget$$Interface {
set "widgetIdentifierFancyMenu"(value: StringJS)
get "widgetIdentifierFancyMenu"(): StringJS
}

export class $UniqueWidget implements $UniqueWidget$$Interface {
 "setWidgetIdentifierFancyMenu"(arg0: StringJS): $AbstractWidget
 "getWidgetIdentifierFancyMenu"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueWidget$$Type = ($UniqueWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UniqueWidget$$Original = $UniqueWidget;}
declare module "de.keksuccino.fancymenu.util.rendering.AspectRatio" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AspectRatio {
constructor(arg0: integer, arg1: integer)

public "getInputWidth"(): integer
public "getInputHeight"(): integer
public "getAspectRatioSizeByMaximumSize"(arg0: integer, arg1: integer): (integer)[]
public "getAspectRatioHeight"(arg0: integer): integer
public "getAspectRatioWidth"(arg0: integer): integer
public "getAspectRatioSizeByMinimumSize"(arg0: integer, arg1: integer): (integer)[]
get "inputWidth"(): integer
get "inputHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AspectRatio$$Type = ($AspectRatio);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AspectRatio$$Original = $AspectRatio;}
declare module "de.keksuccino.fancymenu.util.rendering.ui.screen.CustomizableScreen" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"

export interface $CustomizableScreen$$Interface {

(): $List$$Type<($GuiEventListener$$Type)>
}

export class $CustomizableScreen implements $CustomizableScreen$$Interface {
 "removeOnInitChildrenFancyMenu"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableScreen$$Type = (() => $List$$Type<($GuiEventListener$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomizableScreen$$Original = $CustomizableScreen;}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget" {
import {$CustomizableWidget$CustomBackgroundResetBehavior, $CustomizableWidget$CustomBackgroundResetBehavior$$Type} from "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior"
import {$RenderableResource, $RenderableResource$$Type} from "de.keksuccino.fancymenu.util.resource.RenderableResource"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List} from "java.util.List"
import {$AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IAudio, $IAudio$$Type} from "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $CustomizableWidget$$Interface {
get "nineSliceCustomBackgroundTexture_FancyMenu"(): boolean
get "hiddenFancyMenu"(): boolean
get "resetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
get "hoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
get "focusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
get "hoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
get "lastHoverStateFancyMenu"(): boolean
set "lastHoverStateFancyMenu"(value: boolean)
get "lastFocusStateFancyMenu"(): boolean
set "lastFocusStateFancyMenu"(value: boolean)
get "lastHoverOrFocusStateFancyMenu"(): boolean
set "lastHoverOrFocusStateFancyMenu"(value: boolean)
get "customBackgroundNormalFancyMenu"(): $RenderableResource
get "customBackgroundHoverFancyMenu"(): $RenderableResource
get "customBackgroundInactiveFancyMenu"(): $RenderableResource
set "customBackgroundNormalFancyMenu"(value: $RenderableResource$$Type)
set "customBackgroundHoverFancyMenu"(value: $RenderableResource$$Type)
set "customBackgroundInactiveFancyMenu"(value: $RenderableResource$$Type)
set "customBackgroundResetBehaviorFancyMenu"(value: $CustomizableWidget$CustomBackgroundResetBehavior$$Type)
set "hoverSoundFancyMenu"(value: $IAudio$$Type)
set "customClickSoundFancyMenu"(value: $IAudio$$Type)
set "hiddenFancyMenu"(value: boolean)
set "customLabelFancyMenu"(value: $Component$$Type)
set "hoverLabelFancyMenu"(value: $Component$$Type)
set "customWidthFancyMenu"(value: integer)
set "customHeightFancyMenu"(value: integer)
set "customXFancyMenu"(value: integer)
set "customYFancyMenu"(value: integer)
get "customLabelFancyMenu"(): $Component
get "hoverLabelFancyMenu"(): $Component
get "customClickSoundFancyMenu"(): $IAudio
get "hoverSoundFancyMenu"(): $IAudio
set "nineSliceCustomBackground_FancyMenu"(value: boolean)
set "nineSliceBorderX_FancyMenu"(value: integer)
get "nineSliceCustomBackgroundBorderX_FancyMenu"(): integer
set "nineSliceBorderY_FancyMenu"(value: integer)
get "nineSliceCustomBackgroundBorderY_FancyMenu"(): integer
get "customBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
get "customWidthFancyMenu"(): integer
get "customHeightFancyMenu"(): integer
get "customXFancyMenu"(): integer
get "customYFancyMenu"(): integer
get "originalMessageFancyMenu"(): $Component
}

export class $CustomizableWidget implements $CustomizableWidget$$Interface {
 "tickFocusStateListenersFancyMenu"(arg0: boolean): void
 "isNineSliceCustomBackgroundTexture_FancyMenu"(): boolean
 "isHiddenFancyMenu"(): boolean
 "resetWidgetCustomizationsFancyMenu"(): void
 "tickHoverStateListenersFancyMenu"(arg0: boolean): void
 "tickHoverOrFocusStateListenersFancyMenu"(arg0: boolean): void
 "addHoverOrFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "addResetCustomizationsListenerFancyMenu"(arg0: $Runnable$$Type): void
 "getResetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
 "addHoverStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "addFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "getHoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getHoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getLastHoverStateFancyMenu"(): boolean
 "setLastHoverStateFancyMenu"(arg0: boolean): void
 "getLastFocusStateFancyMenu"(): boolean
 "setLastFocusStateFancyMenu"(arg0: boolean): void
 "getLastHoverOrFocusStateFancyMenu"(): boolean
 "setLastHoverOrFocusStateFancyMenu"(arg0: boolean): void
 "getCustomBackgroundNormalFancyMenu"(): $RenderableResource
 "getCustomBackgroundHoverFancyMenu"(): $RenderableResource
 "getCustomBackgroundInactiveFancyMenu"(): $RenderableResource
 "setCustomBackgroundNormalFancyMenu"(arg0: $RenderableResource$$Type): void
 "setCustomBackgroundHoverFancyMenu"(arg0: $RenderableResource$$Type): void
 "setCustomBackgroundInactiveFancyMenu"(arg0: $RenderableResource$$Type): void
 "setCustomBackgroundResetBehaviorFancyMenu"(arg0: $CustomizableWidget$CustomBackgroundResetBehavior$$Type): void
 "setHoverSoundFancyMenu"(arg0: $IAudio$$Type): void
 "setCustomClickSoundFancyMenu"(arg0: $IAudio$$Type): void
 "setHiddenFancyMenu"(arg0: boolean): void
 "setCustomLabelFancyMenu"(arg0: $Component$$Type): void
 "setHoverLabelFancyMenu"(arg0: $Component$$Type): void
 "setCustomWidthFancyMenu"(arg0: integer): void
 "setCustomHeightFancyMenu"(arg0: integer): void
 "setCustomXFancyMenu"(arg0: integer): void
 "setCustomYFancyMenu"(arg0: integer): void
 "resetWidgetSizeAndPositionFancyMenu"(): void
 "getCustomLabelFancyMenu"(): $Component
 "getHoverLabelFancyMenu"(): $Component
 "getCustomClickSoundFancyMenu"(): $IAudio
 "getHoverSoundFancyMenu"(): $IAudio
 "setNineSliceCustomBackground_FancyMenu"(arg0: boolean): void
 "setNineSliceBorderX_FancyMenu"(arg0: integer): void
 "getNineSliceCustomBackgroundBorderX_FancyMenu"(): integer
 "setNineSliceBorderY_FancyMenu"(arg0: integer): void
 "getNineSliceCustomBackgroundBorderY_FancyMenu"(): integer
 "getCustomBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
 "getCustomWidthFancyMenu"(): integer
 "getCustomHeightFancyMenu"(): integer
 "getCustomXFancyMenu"(): integer
 "getCustomYFancyMenu"(): integer
 "getOriginalMessageFancyMenu"(): $Component
 "stopHoverSoundFancyMenu"(): void
 "renderCustomBackgroundFancyMenu"(arg0: $AbstractWidget$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "stopCustomClickSoundFancyMenu"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$$Type = ($CustomizableWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomizableWidget$$Original = $CustomizableWidget;}
declare module "de.keksuccino.fancymenu.util.resource.Resource" {
import {$Closeable$$Interface} from "java.io.Closeable"
import {$InputStream} from "java.io.InputStream"

export interface $Resource$$Interface extends $Closeable$$Interface {
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
get "closed"(): boolean
get "ready"(): boolean
}

export class $Resource implements $Resource$$Interface {
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "isReady"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resource$$Type = ($Resource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Resource$$Original = $Resource;}
